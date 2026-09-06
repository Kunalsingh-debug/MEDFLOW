-- Apply this file in the Supabase SQL Editor. It creates only the RPCs used
-- by the backend; it does not alter tables, columns, policies, or existing data.

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
  created_token public.tokens;
begin
  if p_patient_id is null or p_assessment_id is null or p_hospital_id is null or p_doctor_id is null then
    raise exception 'PATIENT_ASSESSMENT_HOSPITAL_AND_DOCTOR_REQUIRED';
  end if;

  if not exists (select 1 from public.patients where id = p_patient_id) then
    raise exception 'PATIENT_NOT_FOUND';
  end if;
  if not exists (
    select 1 from public.assessments
    where id = p_assessment_id and patient_id = p_patient_id
  ) then
    raise exception 'ASSESSMENT_NOT_FOUND_OR_NOT_OWNED_BY_PATIENT';
  end if;
  if not exists (select 1 from public.hospitals where id = p_hospital_id) then
    raise exception 'HOSPITAL_NOT_FOUND';
  end if;
  if not exists (
    select 1 from public.doctors
    where id = p_doctor_id and hospital_id = p_hospital_id and is_active = true
  ) then
    raise exception 'DOCTOR_UNAVAILABLE';
  end if;

  select * into locked_queue
  from public.doctor_queues
  where doctor_id = p_doctor_id
  for update;

  if not found or locked_queue.queue_status <> 'active' then
    raise exception 'QUEUE_NOT_ACTIVE';
  end if;

  if exists (
    select 1 from public.tokens
    where patient_id = p_patient_id
      and assessment_id = p_assessment_id
      and status in ('waiting', 'called', 'in_consultation')
  ) then
    raise exception 'ACTIVE_TOKEN_EXISTS';
  end if;

  select greatest(
    locked_queue.current_token,
    coalesce(max(token_number), locked_queue.current_token)
  ) + 1
  into next_token_number
  from public.tokens
  where doctor_id = p_doctor_id;

  insert into public.tokens (
    patient_id, assessment_id, hospital_id, doctor_id, token_number, status
  ) values (
    p_patient_id, p_assessment_id, p_hospital_id, p_doctor_id, next_token_number, 'waiting'
  ) returning * into created_token;

  update public.doctor_queues
  set updated_at = now()
  where id = locked_queue.id;

  return created_token;
end;
$$;

create or replace function public.call_next_queue_token(p_doctor_id uuid)
returns public.tokens
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  locked_queue public.doctor_queues;
  called_token public.tokens;
begin
  select * into locked_queue
  from public.doctor_queues
  where doctor_id = p_doctor_id
  for update;

  if not found or locked_queue.queue_status <> 'active' then
    raise exception 'QUEUE_NOT_ACTIVE';
  end if;

  -- Calling the next patient closes any earlier active consultation for this doctor.
  update public.tokens
  set status = 'completed', completed_at = now()
  where doctor_id = p_doctor_id
    and status in ('called', 'in_consultation');

  select * into called_token
  from public.tokens
  where doctor_id = p_doctor_id
    and status = 'waiting'
    and token_number > locked_queue.current_token
  order by token_number
  limit 1;

  if not found then
    return null;
  end if;

  update public.tokens
  set status = 'called', called_at = now()
  where id = called_token.id
  returning * into called_token;

  update public.doctor_queues
  set current_token = called_token.token_number, updated_at = now()
  where id = locked_queue.id;

  return called_token;
end;
$$;

revoke all on function public.create_queue_token(uuid, uuid, uuid, uuid) from public;
revoke all on function public.call_next_queue_token(uuid) from public;
grant execute on function public.create_queue_token(uuid, uuid, uuid, uuid) to service_role;
grant execute on function public.call_next_queue_token(uuid) to service_role;
