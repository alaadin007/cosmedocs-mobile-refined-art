CREATE TABLE public.patient_research_survey (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  motivation text NOT NULL,
  motivation_detail text,
  age_group text,
  gender text,
  ethnicity text,
  desired_outcome text,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.patient_research_survey ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit research survey"
ON public.patient_research_survey
FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "Admins can view research survey"
ON public.patient_research_survey
FOR SELECT
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));