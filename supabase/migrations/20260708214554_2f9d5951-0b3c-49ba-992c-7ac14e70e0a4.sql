
-- 1. Failure log table
CREATE TABLE IF NOT EXISTS public.webhook_failures (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  hook_name text NOT NULL,
  request_id bigint UNIQUE,
  contact_id uuid,
  status_code integer,
  error_message text,
  response_body text,
  payload jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  resolved_at timestamptz,
  resolved_by uuid
);

CREATE INDEX IF NOT EXISTS webhook_failures_created_idx ON public.webhook_failures (created_at DESC);
CREATE INDEX IF NOT EXISTS webhook_failures_unresolved_idx ON public.webhook_failures (resolved_at) WHERE resolved_at IS NULL;

GRANT SELECT, INSERT, UPDATE ON public.webhook_failures TO authenticated;
GRANT ALL ON public.webhook_failures TO service_role;

ALTER TABLE public.webhook_failures ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can read webhook failures"
  ON public.webhook_failures FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update webhook failures"
  ON public.webhook_failures FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- 2. Reconciler: scans recent net._http_response for the n8n trigger and logs failures
CREATE OR REPLACE FUNCTION public.reconcile_webhook_failures(_lookback_minutes integer DEFAULT 1440)
RETURNS integer
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, supabase_functions, net
AS $$
DECLARE
  _inserted integer := 0;
BEGIN
  IF NOT public.has_role(auth.uid(), 'admin') THEN
    RAISE EXCEPTION 'Admins only';
  END IF;

  WITH candidates AS (
    SELECT
      h.hook_name,
      h.request_id,
      r.status_code,
      r.error_msg,
      r.content,
      r.created AS response_at
    FROM supabase_functions.hooks h
    JOIN net._http_response r ON r.id = h.request_id
    WHERE h.hook_name = 'Lovable CosmeDocs Contact us Form - sent to email at info'
      AND h.created_at >= now() - make_interval(mins => _lookback_minutes)
      AND (r.error_msg IS NOT NULL OR r.status_code IS NULL OR r.status_code >= 400)
  ),
  ins AS (
    INSERT INTO public.webhook_failures (hook_name, request_id, status_code, error_message, response_body, created_at)
    SELECT c.hook_name, c.request_id, c.status_code, c.error_msg, left(coalesce(c.content, ''), 4000), c.response_at
    FROM candidates c
    ON CONFLICT (request_id) DO NOTHING
    RETURNING 1
  )
  SELECT count(*) INTO _inserted FROM ins;

  RETURN _inserted;
END;
$$;

GRANT EXECUTE ON FUNCTION public.reconcile_webhook_failures(integer) TO authenticated;

-- 3. Resolve helper
CREATE OR REPLACE FUNCTION public.resolve_webhook_failure(_id uuid)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NOT public.has_role(auth.uid(), 'admin') THEN
    RAISE EXCEPTION 'Admins only';
  END IF;
  UPDATE public.webhook_failures
     SET resolved_at = now(), resolved_by = auth.uid()
   WHERE id = _id;
END;
$$;

GRANT EXECUTE ON FUNCTION public.resolve_webhook_failure(uuid) TO authenticated;
