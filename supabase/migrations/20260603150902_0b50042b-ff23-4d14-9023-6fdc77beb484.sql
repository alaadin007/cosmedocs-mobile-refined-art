
-- 1. search_bar_configurations: remove public read
DROP POLICY IF EXISTS "Enable public read access" ON public.search_bar_configurations;

-- 2. website_pages: restrict writes to admins
DROP POLICY IF EXISTS "Enable insert for authenticated users only" ON public.website_pages;
DROP POLICY IF EXISTS "Enable update for authenticated users only" ON public.website_pages;
CREATE POLICY "Admins can insert website_pages"
  ON public.website_pages FOR INSERT TO authenticated
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can update website_pages"
  ON public.website_pages FOR UPDATE TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- 3. website_reviews: restrict insert to admins
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON public.website_reviews;
CREATE POLICY "Admins can insert website_reviews"
  ON public.website_reviews FOR INSERT TO authenticated
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- 4. website_vectors: restrict insert to admins
DROP POLICY IF EXISTS "Enable insert for authenticated users only" ON public.website_vectors;
CREATE POLICY "Admins can insert website_vectors"
  ON public.website_vectors FOR INSERT TO authenticated
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- 5. research_responses: drop overly permissive UPDATE policy (service role handles profile attachment)
DROP POLICY IF EXISTS "Anyone can attach profile to own response" ON public.research_responses;
