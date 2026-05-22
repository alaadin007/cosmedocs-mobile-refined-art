
-- Seed the inaugural Cosmedocs research study into the new hub.
-- Idempotent: re-running will not duplicate the study or its questions.

INSERT INTO public.research_studies
  (slug, title, subtitle, description, intro, status, display_order,
   seo_title, seo_description)
VALUES (
  'why-patients-choose-aesthetic-treatments',
  'Why Patients Really Choose Aesthetic Treatments',
  'Large-Scale Patient Psychology Survey',
  'A quiet, anonymous study by Cosmedocs exploring what truly motivates patients to seek aesthetic treatments — across age, gender, and culture.',
  'Thirty seconds, fully anonymous. Your honest answer helps us understand patients more deeply and care for them better.',
  'active',
  1,
  'Why Patients Choose Aesthetic Treatments | Cosmedocs Research',
  'Anonymous Cosmedocs patient-psychology research. Confidence, career, ageing, skin health — what really motivates aesthetic patients? Take the 30-second study.'
)
ON CONFLICT (slug) DO UPDATE
SET title = EXCLUDED.title,
    subtitle = EXCLUDED.subtitle,
    description = EXCLUDED.description,
    intro = EXCLUDED.intro,
    status = EXCLUDED.status,
    display_order = EXCLUDED.display_order,
    seo_title = EXCLUDED.seo_title,
    seo_description = EXCLUDED.seo_description;

-- Clear any prior questions for this study so this seed is the source of truth.
DELETE FROM public.research_questions
WHERE study_id = (SELECT id FROM public.research_studies
                  WHERE slug = 'why-patients-choose-aesthetic-treatments');

INSERT INTO public.research_questions
  (study_id, question_order, question_text, question_type, options, required, allow_other)
SELECT s.id, 1,
  'What matters most to you?',
  'single',
  '[
    {"value":"confidence","label":"Confidence","emoji":"✨"},
    {"value":"career","label":"Career","emoji":"💼"},
    {"value":"dating","label":"Dating & relationships","emoji":"💛"},
    {"value":"social_media","label":"Social media & photos","emoji":"📸"},
    {"value":"ageing_anxiety","label":"Anxiety about ageing","emoji":"⏳"},
    {"value":"skin_health","label":"Skin health","emoji":"🌿"}
  ]'::jsonb,
  true, true
FROM public.research_studies s
WHERE s.slug = 'why-patients-choose-aesthetic-treatments';

INSERT INTO public.research_questions
  (study_id, question_order, question_text, question_type, options, required, allow_other)
SELECT s.id, 2,
  'A little about you (anonymous)',
  'demographics',
  '[]'::jsonb,
  false, false
FROM public.research_studies s
WHERE s.slug = 'why-patients-choose-aesthetic-treatments';
