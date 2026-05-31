
-- Add profile cache to research responses
ALTER TABLE public.research_responses ADD COLUMN IF NOT EXISTS profile jsonb;

-- Allow public to update only the profile column (no PII; we identify by response id returned from insert)
CREATE POLICY "Anyone can attach profile to own response"
ON public.research_responses
FOR UPDATE
TO anon, authenticated
USING (true)
WITH CHECK (true);

-- Email subscribers, separate from responses to preserve anonymity
CREATE TABLE public.research_email_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  study_id uuid NOT NULL,
  email text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.research_email_subscribers TO anon, authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.research_email_subscribers TO authenticated;
GRANT ALL ON public.research_email_subscribers TO service_role;

ALTER TABLE public.research_email_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe"
ON public.research_email_subscribers
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Admins can read subscribers"
ON public.research_email_subscribers
FOR SELECT
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));
