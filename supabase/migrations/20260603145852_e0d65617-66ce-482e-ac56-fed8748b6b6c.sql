CREATE OR REPLACE FUNCTION public.submit_research_response(
  _study_id uuid,
  _answers jsonb DEFAULT '{}'::jsonb,
  _demographics jsonb DEFAULT '{}'::jsonb
)
RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _response_id uuid;
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM public.research_studies
    WHERE id = _study_id
      AND status = 'active'
  ) THEN
    RAISE EXCEPTION 'Research study is not open for submissions';
  END IF;

  INSERT INTO public.research_responses (study_id, answers, demographics)
  VALUES (
    _study_id,
    COALESCE(_answers, '{}'::jsonb),
    COALESCE(_demographics, '{}'::jsonb)
  )
  RETURNING id INTO _response_id;

  RETURN _response_id;
END;
$$;

GRANT EXECUTE ON FUNCTION public.submit_research_response(uuid, jsonb, jsonb) TO anon, authenticated;

REVOKE SELECT, UPDATE ON public.research_responses FROM anon;
GRANT INSERT ON public.research_responses TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.research_responses TO authenticated;
GRANT ALL ON public.research_responses TO service_role;