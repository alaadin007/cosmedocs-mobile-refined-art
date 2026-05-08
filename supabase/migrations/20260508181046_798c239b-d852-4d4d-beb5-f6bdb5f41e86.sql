create table if not exists public.training_enquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null,
  email text not null,
  phone text,
  profession text,
  registration_pin text,
  course_interest text,
  message text,
  source text default 'training-page'
);

alter table public.training_enquiries enable row level security;

create policy "Anyone can submit training enquiry"
  on public.training_enquiries
  for insert
  to anon, authenticated
  with check (true);

create policy "Admins can view training enquiries"
  on public.training_enquiries
  for select
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));

create index if not exists training_enquiries_created_at_idx
  on public.training_enquiries (created_at desc);