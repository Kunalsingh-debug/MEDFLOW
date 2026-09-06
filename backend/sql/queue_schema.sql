-- MedX hospital token queues. Apply in the Supabase SQL editor before enabling
-- the queue APIs in production. Queue writes are performed only by the backend.
create extension if not exists pgcrypto;

create table if not exists hospitals (
  id uuid primary key default gen_random_uuid(), name text not null, address text not null, created_at timestamptz not null default now()
);
create table if not exists doctors (
  id uuid primary key default gen_random_uuid(), hospital_id uuid not null references hospitals(id) on delete cascade,
  name text not null, specialization text, department text not null, is_active boolean not null default true, created_at timestamptz not null default now()
);
create table if not exists doctor_queues (
  id uuid primary key default gen_random_uuid(), doctor_id uuid not null unique references doctors(id) on delete cascade,
  current_token integer not null default 0, next_token integer not null default 1, queue_status text not null default 'open' check (queue_status in ('open','paused','closed')), updated_at timestamptz not null default now()
);
create table if not exists tokens (
  id uuid primary key default gen_random_uuid(), patient_id text not null, assessment_id text, hospital_id uuid not null references hospitals(id), doctor_id uuid not null references doctors(id),
  token_number integer not null, status text not null default 'waiting' check (status in ('waiting','called','in_consultation','completed','cancelled')),
  created_at timestamptz not null default now(), called_at timestamptz, completed_at timestamptz,
  unique (doctor_id, token_number)
);
create unique index if not exists active_patient_doctor_token on tokens(patient_id, doctor_id) where status in ('waiting','called','in_consultation');

-- Atomic allocation: locks one queue row and avoids duplicate token numbers.
create or replace function create_queue_token(p_patient_id text, p_assessment_id text, p_hospital_id uuid, p_doctor_id uuid)
returns tokens language plpgsql security definer as $$
declare q doctor_queues; created tokens;
begin
  select * into q from doctor_queues where doctor_id = p_doctor_id for update;
  if not found or q.queue_status <> 'open' then raise exception 'Queue is not available'; end if;
  if exists(select 1 from tokens where patient_id = p_patient_id and doctor_id = p_doctor_id and status in ('waiting','called','in_consultation')) then raise exception 'ACTIVE_TOKEN_EXISTS'; end if;
  insert into tokens(patient_id, assessment_id, hospital_id, doctor_id, token_number)
    values(p_patient_id, p_assessment_id, p_hospital_id, p_doctor_id, q.next_token) returning * into created;
  update doctor_queues set next_token = q.next_token + 1, updated_at = now() where id = q.id;
  return created;
end $$;

-- Example fictional seed data. Run once after schema creation.
insert into hospitals(name,address) values ('MedX General Hospital','Demo Health District'),('MedX City Clinic','Demo City') on conflict do nothing;
