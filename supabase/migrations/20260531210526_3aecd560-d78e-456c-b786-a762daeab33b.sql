UPDATE public.research_questions
SET question_text = 'Which region are you in?',
    question_type = 'single',
    options = '["UK & Ireland","Europe","North Africa","Sub-Saharan Africa","Middle East","Central Asia","South Asia","East Asia","Southeast Asia","North America","Latin America & Caribbean","Oceania"]'::jsonb,
    required = true,
    allow_other = true
WHERE id = '1954d65f-49ac-4b3a-b392-041ded161e3d';