-- MedX prototype staff/admin users. Run after the queue migrations.
-- Safe to run repeatedly. Passwords are bcrypt hashes, never plaintext.
-- Local development credentials are documented in backend/DEMO_CREDENTIALS.md.

create extension if not exists pgcrypto;

create table if not exists public.staff_users (
  id uuid primary key default gen_random_uuid(),
  login_id text not null unique,
  password_hash text not null,
  role text not null default 'staff' check (role = 'staff'),
  doctor_id uuid not null references public.doctors(id),
  hospital_id uuid not null references public.hospitals(id),
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.admin_users (
  id uuid primary key default gen_random_uuid(),
  login_id text not null unique,
  password_hash text not null,
  role text not null default 'admin' check (role = 'admin'),
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

-- Assign the stable demo staff account to the first active doctor. It reuses
-- the account on repeat runs and never creates a doctor or hospital.
insert into public.staff_users (login_id, password_hash, role, doctor_id, hospital_id, is_active)
select 'doctor.demo', '$2b$12$TX6DRb31mLyNfYeL/hWFCOkevuhHDZvRerKwtB5E/x1FP9SNJvogu', 'staff', d.id, d.hospital_id, true
from public.doctors d
where d.is_active = true
order by d.name, d.id
limit 1
on conflict (login_id) do update set
  password_hash = excluded.password_hash,
  doctor_id = excluded.doctor_id,
  hospital_id = excluded.hospital_id,
  is_active = true;

insert into public.admin_users (login_id, password_hash, role, is_active)
values ('admin.demo', '$2b$12$TX6DRb31mLyNfYeL/hWFCOkevuhHDZvRerKwtB5E/x1FP9SNJvogu', 'admin', true)
on conflict (login_id) do update set password_hash = excluded.password_hash, is_active = true;

-- Keep RLS enabled. The server-side secret key performs trusted auth checks.
alter table public.staff_users enable row level security;
alter table public.admin_users enable row level security;
