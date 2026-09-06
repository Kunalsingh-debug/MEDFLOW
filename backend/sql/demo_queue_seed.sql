-- Optional MedX demo queue seed
-- Run only after alphanumeric_tokens.sql. It is idempotent and only seeds
-- active doctor queues that currently have no waiting/called/in-consultation tokens.
-- It creates generic demo queue identities with no clinical content.

create or replace function public.seed_demo_queue_data()
returns jsonb
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  doctor_record record;
  patient_record public.patients;
  assessment_record public.assessments;
  queue_prefix text;
  slot integer;
  seed_user_id uuid;
  starting_number integer := 20;
begin
  for doctor_record in
    select d.id, d.hospital_id, d.department
    from public.doctors d
    join public.doctor_queues q on q.doctor_id = d.id
    where d.is_active = true and q.queue_status = 'active'
      and not exists (
        select 1 from public.tokens t
        where t.doctor_id = d.id and t.status in ('waiting', 'called', 'in_consultation')
      )
  loop
    queue_prefix := coalesce(nullif(left(regexp_replace(upper(doctor_record.department), '[^A-Z]', '', 'g'), 1), ''), 'M');
    for slot in 0..3 loop
      -- Deterministic UUID derived from doctor + seed slot; repeated runs reuse it.
      seed_user_id := (
        substr(md5('medx-demo-queue:' || doctor_record.id::text || ':' || slot::text), 1, 8) || '-' ||
        substr(md5('medx-demo-queue:' || doctor_record.id::text || ':' || slot::text), 9, 4) || '-4' ||
        substr(md5('medx-demo-queue:' || doctor_record.id::text || ':' || slot::text), 14, 3) || '-8' ||
        substr(md5('medx-demo-queue:' || doctor_record.id::text || ':' || slot::text), 18, 3) || '-' ||
        substr(md5('medx-demo-queue:' || doctor_record.id::text || ':' || slot::text), 21, 12)
      )::uuid;

      select * into patient_record from public.patients where user_id = seed_user_id limit 1;
      if not found then
        insert into public.patients(user_id, name, language)
        values(seed_user_id, format('Demo Queue Patient %s', slot + 1), 'English')
        returning * into patient_record;
      end if;

      select * into assessment_record from public.assessments
      where patient_id = patient_record.id and status = 'demo_queue_seed' limit 1;
      if not found then
        insert into public.assessments(patient_id, status)
        values(patient_record.id, 'demo_queue_seed') returning * into assessment_record;
      end if;

      if not exists (select 1 from public.tokens where doctor_id = doctor_record.id and patient_id = patient_record.id and assessment_id = assessment_record.id) then
        insert into public.tokens(patient_id, assessment_id, hospital_id, doctor_id, token_prefix, token_number, status, called_at)
        values(
          patient_record.id, assessment_record.id, doctor_record.hospital_id, doctor_record.id,
          queue_prefix, starting_number + slot,
          case when slot = 0 then 'called' else 'waiting' end,
          case when slot = 0 then now() else null end
        );
      end if;
    end loop;
    update public.doctor_queues set current_token = starting_number, updated_at = now() where doctor_id = doctor_record.id;
  end loop;
  return jsonb_build_object('success', true);
end;
$$;

revoke all on function public.seed_demo_queue_data() from public;
grant execute on function public.seed_demo_queue_data() to service_role;
