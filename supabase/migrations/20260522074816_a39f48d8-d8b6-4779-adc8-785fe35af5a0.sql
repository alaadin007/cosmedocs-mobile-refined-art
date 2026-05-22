-- Research studies hub
CREATE TABLE public.research_studies (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  subtitle TEXT,
  description TEXT,
  intro TEXT,
  hero_image_url TEXT,
  status TEXT NOT NULL DEFAULT 'draft', -- draft | active | closed
  seo_title TEXT,
  seo_description TEXT,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_research_studies_status ON public.research_studies(status);
CREATE INDEX idx_research_studies_slug ON public.research_studies(slug);

CREATE TABLE public.research_questions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  study_id UUID NOT NULL REFERENCES public.research_studies(id) ON DELETE CASCADE,
  question_order INTEGER NOT NULL DEFAULT 0,
  question_text TEXT NOT NULL,
  question_type TEXT NOT NULL DEFAULT 'single', -- single | multi | text | demographics
  options JSONB NOT NULL DEFAULT '[]'::jsonb,    -- [{value,label,emoji?}]
  required BOOLEAN NOT NULL DEFAULT false,
  allow_other BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_research_questions_study ON public.research_questions(study_id, question_order);

CREATE TABLE public.research_responses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  study_id UUID NOT NULL REFERENCES public.research_studies(id) ON DELETE CASCADE,
  answers JSONB NOT NULL DEFAULT '{}'::jsonb,    -- {question_id: value(s)}
  demographics JSONB NOT NULL DEFAULT '{}'::jsonb, -- {age_group, gender, ethnicity, notes}
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_research_responses_study ON public.research_responses(study_id, created_at DESC);

-- RLS
ALTER TABLE public.research_studies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.research_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.research_responses ENABLE ROW LEVEL SECURITY;

-- Studies: public can read active+closed (for archive), admins manage all
CREATE POLICY "Public can view active studies"
  ON public.research_studies FOR SELECT
  USING (status IN ('active','closed'));

CREATE POLICY "Admins can view all studies"
  ON public.research_studies FOR SELECT TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins manage studies"
  ON public.research_studies FOR ALL TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- Questions: public read for active+closed studies, admin full
CREATE POLICY "Public can view questions of active studies"
  ON public.research_questions FOR SELECT
  USING (EXISTS (
    SELECT 1 FROM public.research_studies s
    WHERE s.id = study_id AND s.status IN ('active','closed')
  ));

CREATE POLICY "Admins manage questions"
  ON public.research_questions FOR ALL TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- Responses: anyone submits to active studies; admins read
CREATE POLICY "Anyone can submit to active studies"
  ON public.research_responses FOR INSERT
  WITH CHECK (EXISTS (
    SELECT 1 FROM public.research_studies s
    WHERE s.id = study_id AND s.status = 'active'
  ));

CREATE POLICY "Admins read responses"
  ON public.research_responses FOR SELECT TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role));

-- updated_at trigger
CREATE TRIGGER trg_research_studies_updated_at
  BEFORE UPDATE ON public.research_studies
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();