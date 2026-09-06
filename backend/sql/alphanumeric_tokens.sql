-- MedX alphanumeric token migration
-- Run this file once in the Supabase SQL Editor.
-- It is additive: existing numeric token values remain unchanged.

alter table public.tokens
  add column if not exists token_prefix text;

-- Backfill existing tokens deterministically from their doctor's department.
-- This preserves old records while giving them the same display convention.
update public.tokens as token
set token_prefix = coalesce(
  nullif(left(regexp_replace(upper(doctor.department), '[^A-Z]', '', 'g'), 1), ''),
  'M'
)
from public.doctors as doctor
where doctor.id = token.doctor_id
  and (token.token_prefix is null or token.token_prefix = '');

alter table public.tokens
  alter column token_prefix set not null;

alter table public.tokens
  drop constraint if exists tokens_token_prefix_format;

alter table public.tokens
  add constraint tokens_token_prefix_format
  check (token_prefix ~ '^[A-Z]$');

-- Department prefix strategy: first alphabetical letter of the current
-- department name (General Medicine -> G, Dermatology -> D, Cardiology -> C).
-- Numeric sequencing remains per-doctor and is protected by the queue row lock.
create or replace function public.create_queue_token(
  p_patient_id uuid,
  p_assessment_id uuid,
  p_hospital_id uuid,
  p_doctor_id uuid
)
returns public.tokens
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  locked_queue public.doctor_queues;
  next_token_number integer;
  queue_prefix text;
  created_token public.tokens;
begin
  if p_patient_id is null or p_assessment_id is null or p_hospital_id is null or p_doctor_id is null then
    raise exception 'PATIENT_ASSESSMENT_HOSPITAL_AND_DOCTOR_REQUIRED';
  end if;
  if not exists (select 1 from public.patients where id = p_patient_id) then
    raise exception 'PATIENT_NOT_FOUND';
  end if;
  if not exists (select 1 from public.assessments where id = p_assessment_id and patient_id = p_patient_id) then
    raise exception 'ASSESSMENT_NOT_FOUND_OR_NOT_OWNED_BY_PATIENT';
  end if;
  if not exists (select 1 from public.hospitals where id = p_hospital_id) then
    raise exception 'HOSPITAL_NOT_FOUND';
  end if;

  select coalesce(nullif(left(regexp_replace(upper(department), '[^A-Z]', '', 'g'), 1), ''), 'M')
  into queue_prefix
  from public.doctors
  where id = p_doctor_id and hospital_id = p_hospital_id and is_active = true;
  if not found then raise exception 'DOCTOR_UNAVAILABLE'; end if;

  select * into locked_queue from public.doctor_queues where doctor_id = p_doctor_id for update;
  if not found or locked_queue.queue_status <> 'active' then raise exception 'QUEUE_NOT_ACTIVE'; end if;
  if exists (
    select 1 from public.tokens
    where patient_id = p_patient_id and assessment_id = p_assessment_id
      and status in ('waiting', 'called', 'in_consultation')
  ) then raise exception 'ACTIVE_TOKEN_EXISTS'; end if;

  select greatest(locked_queue.current_token, coalesce(max(token_number), locked_queue.current_token)) + 1
  into next_token_number from public.tokens where doctor_id = p_doctor_id;

  insert into public.tokens (patient_id, assessment_id, hospital_id, doctor_id, token_prefix, token_number, status)
  values (p_patient_id, p_assessment_id, p_hospital_id, p_doctor_id, queue_prefix, next_token_number, 'waiting')
  returning * into created_token;

  update public.doctor_queues set updated_at = now() where id = locked_queue.id;
  return created_token;
end;
$$;

-- call_next_queue_token already returns public.tokens, so the newly persisted
-- token_prefix is returned automatically. Keep its locking implementation from
-- queue_rpc.sql; do not replace it with application-side numbering.

revoke all on function public.create_queue_token(uuid, uuid, uuid, uuid) from public;
grant execute on function public.create_queue_token(uuid, uuid, uuid, uuid) to service_role;
