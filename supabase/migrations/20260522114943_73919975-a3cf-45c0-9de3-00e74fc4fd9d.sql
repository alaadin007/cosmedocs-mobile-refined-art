
-- Ensure unique slug for safe upsert
CREATE UNIQUE INDEX IF NOT EXISTS research_studies_slug_unique ON public.research_studies (slug);

-- Upsert the study
INSERT INTO public.research_studies (slug, title, subtitle, description, intro, status, display_order, seo_title, seo_description)
VALUES (
  'digital-face-study-2026',
  'The Digital Face Study 2026',
  'How social media, filters, selfies and digital culture shape confidence and aesthetic perception.',
  'CosmeDocs Harley Street is conducting a large-scale research study exploring the relationship between social media, self-image and cosmetic psychology. Your anonymous participation helps improve understanding of modern beauty standards and mental wellbeing.',
  'This survey takes around 4 minutes. All responses are fully anonymous and used only for internal research, education and publication.',
  'active',
  2,
  'The Digital Face Study 2026 — Social Media & Cosmetic Psychology | CosmeDocs Research',
  'Anonymous research study by CosmeDocs Harley Street exploring how social media, filters and selfies shape confidence, beauty standards and cosmetic decisions.'
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  subtitle = EXCLUDED.subtitle,
  description = EXCLUDED.description,
  intro = EXCLUDED.intro,
  status = EXCLUDED.status,
  display_order = EXCLUDED.display_order,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  updated_at = now();

-- Reset questions
DELETE FROM public.research_questions
WHERE study_id = (SELECT id FROM public.research_studies WHERE slug = 'digital-face-study-2026');

-- Insert questions
WITH s AS (SELECT id FROM public.research_studies WHERE slug = 'digital-face-study-2026')
INSERT INTO public.research_questions (study_id, question_order, question_text, question_type, options, required, allow_other)
SELECT s.id, x.ord, x.qtext, x.qtype, x.opts::jsonb, x.req, x.allow_other
FROM s, (VALUES
  (1, 'A little about you (anonymous)', 'demographics', '[]', true, false),
  (2, 'Which country are you in?', 'text', '[]', false, false),
  (3, 'Which platforms do you use most?', 'multi',
    '["Instagram","TikTok","Snapchat","Facebook","YouTube","LinkedIn","X / Twitter"]', true, true),
  (4, 'On an average day, how much time do you spend on social media?', 'single',
    '["Less than 1 hour","1–2 hours","3–4 hours","5+ hours"]', true, false),
  (5, 'How often do you take selfies?', 'single',
    '["Never","Rarely","Sometimes","Often","Very frequently"]', true, false),
  (6, 'How many photos do you usually take before posting one?', 'single',
    '["1–2","3–5","6–10","10+"]', true, false),
  (7, 'Do you use filters before posting photos?', 'single',
    '["Always","Often","Sometimes","Rarely","Never"]', true, false),
  (8, 'Have filters changed how you perceive your own face?', 'single',
    '["1 — Not at all","2","3","4","5","6","7","8","9","10 — Significantly"]', true, false),
  (9, 'Which facial areas do you notice most in photos or video calls?', 'multi',
    '["Under-eyes","Jawline","Lips","Nose","Skin texture","Forehead","Smile lines","Facial asymmetry"]', false, true),
  (10, 'Have you ever deleted a photo because of dissatisfaction with your appearance?', 'single',
    '["Yes","No"]', true, false),
  (11, 'Have video calls (Zoom, FaceTime) made you more aware of your appearance?', 'single',
    '["1 — Not at all","2","3","4","5","6","7","8","9","10 — Very aware"]', true, false),
  (12, 'Which camera view makes you feel least confident?', 'single',
    '["Front-facing phone camera","Laptop webcam","Rear phone camera","Mirror reflection","Professional photography"]', false, false),
  (13, 'Have video calls ever influenced you to consider a cosmetic treatment?', 'single',
    '["Yes","No","Unsure"]', true, false),
  (14, 'Have you ever considered an aesthetic treatment?', 'single',
    '["Yes","No","Already had treatment"]', true, false),
  (15, 'What would be your biggest motivations? (choose all that apply)', 'multi',
    '["Confidence","Skin health","Ageing prevention","Career confidence","Dating confidence","Social media appearance","Looking less tired","Self-care"]', false, true),
  (16, 'Which concerns affect your confidence most?', 'multi',
    '["Acne scars","Pigmentation","Wrinkles","Facial volume loss","Under-eye concerns","Skin laxity","Hair loss","Facial asymmetry"]', false, true),
  (17, 'Do you believe social media creates unrealistic beauty standards?', 'single',
    '["Strongly agree","Agree","Neutral","Disagree","Strongly disagree"]', true, false),
  (18, 'Have you used AI beauty or skin analysis apps?', 'single',
    '["Frequently","Sometimes","Never"]', true, false),
  (19, 'Would you trust AI to recommend skincare or cosmetic treatments?', 'single',
    '["1 — Not at all","2","3","4","5","6","7","8","9","10 — Completely"]', true, false),
  (20, 'Do AI-generated beauty images affect beauty expectations?', 'single',
    '["Strongly agree","Agree","Neutral","Disagree","Strongly disagree"]', true, false),
  (21, 'In your opinion, how has social media changed beauty standards?', 'text', '[]', false, false),
  (22, 'Consent', 'multi',
    '["I consent to anonymous research analysis by CosmeDocs","I understand no medical advice is being provided","I agree my anonymised responses may be used in reports, educational content and publications"]', true, false)
) AS x(ord, qtext, qtype, opts, req, allow_other);
