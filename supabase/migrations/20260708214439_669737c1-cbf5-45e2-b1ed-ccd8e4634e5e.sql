ALTER TABLE public.contact_us
  ADD COLUMN IF NOT EXISTS page_url text,
  ADD COLUMN IF NOT EXISTS referrer text;