
-- cosmetic_content: restrict write to admins
DROP POLICY IF EXISTS "Allow authenticated insert" ON public.cosmetic_content;
DROP POLICY IF EXISTS "Allow authenticated update" ON public.cosmetic_content;
CREATE POLICY "Admins can insert cosmetic_content" ON public.cosmetic_content
  FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can update cosmetic_content" ON public.cosmetic_content
  FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- product_analyses: restrict update + insert to admins
DROP POLICY IF EXISTS "Enable update for authenticated users" ON public.product_analyses;
DROP POLICY IF EXISTS "Enable insert for service role" ON public.product_analyses;
CREATE POLICY "Admins can insert product_analyses" ON public.product_analyses
  FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can update product_analyses" ON public.product_analyses
  FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- search_history: remove public read, restrict to admins. Keep public insert for logging queries.
DROP POLICY IF EXISTS "Allow public to read search queries" ON public.search_history;
CREATE POLICY "Admins can read search_history" ON public.search_history
  FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- serp_results: restrict insert to admins (keep public read for cache)
DROP POLICY IF EXISTS "Allow public insert to serp_results" ON public.serp_results;
CREATE POLICY "Admins can insert serp_results" ON public.serp_results
  FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- website_content: restrict write to admins
DROP POLICY IF EXISTS "Allow authenticated users to insert website_content" ON public.website_content;
DROP POLICY IF EXISTS "Allow authenticated users to update website_content" ON public.website_content;
DROP POLICY IF EXISTS "Allow authenticated users to delete website_content" ON public.website_content;
CREATE POLICY "Admins can insert website_content" ON public.website_content
  FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can update website_content" ON public.website_content
  FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can delete website_content" ON public.website_content
  FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- storage: search_documents bucket - restrict uploads to admins
DROP POLICY IF EXISTS "Allow authenticated uploads" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated Upload" ON storage.objects;
CREATE POLICY "Admins can upload search_documents" ON storage.objects
  FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'search_documents' AND public.has_role(auth.uid(), 'admin'));

-- storage: wordpress_images bucket - restrict uploads to admins
DROP POLICY IF EXISTS "Authenticated uploads to wordpress_images" ON storage.objects;
CREATE POLICY "Admins can upload wordpress_images" ON storage.objects
  FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'wordpress_images' AND public.has_role(auth.uid(), 'admin'));

-- Fix mutable search_path on handle_updated_at
ALTER FUNCTION public.handle_updated_at() SET search_path = public;
