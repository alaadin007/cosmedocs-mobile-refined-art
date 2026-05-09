
-- ============================================================
-- SECURITY HARDENING MIGRATION
-- Locks down overly-permissive RLS policies across the project.
-- Edge functions use the service_role key and bypass RLS, so
-- removing public write/read access does not break backend logic.
-- ============================================================

-- Helper: ensure has_role exists (it does, defined earlier)

-- ------------------------------------------------------------
-- 1. contact_us  (PII)
-- ------------------------------------------------------------
DROP POLICY IF EXISTS "Allow reading contact submissions" ON public.contact_us;
CREATE POLICY "Admins can read contact submissions"
  ON public.contact_us FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- ------------------------------------------------------------
-- 2. raffle_entries  (emails)
-- ------------------------------------------------------------
DROP POLICY IF EXISTS "Allow users to view their own entries" ON public.raffle_entries;
CREATE POLICY "Admins can view raffle entries"
  ON public.raffle_entries FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- ------------------------------------------------------------
-- 3. spin_winners  (PII)
-- ------------------------------------------------------------
DROP POLICY IF EXISTS "Allow users to view their own entries" ON public.spin_winners;
CREATE POLICY "Admins can view spin winners"
  ON public.spin_winners FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- ------------------------------------------------------------
-- 4. facial_assessments  (biometric data)
-- ------------------------------------------------------------
DROP POLICY IF EXISTS "Allow public read access" ON public.facial_assessments;
CREATE POLICY "Admins can view facial assessments"
  ON public.facial_assessments FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- ------------------------------------------------------------
-- 5. visitor_leads  (PII) — restrict to admins only
-- ------------------------------------------------------------
DROP POLICY IF EXISTS "Authenticated users can view leads" ON public.visitor_leads;
CREATE POLICY "Admins can view visitor leads"
  ON public.visitor_leads FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- ------------------------------------------------------------
-- 6. secrets table — never expose values to clients
-- ------------------------------------------------------------
DROP POLICY IF EXISTS "Allow authenticated users to read secrets" ON public.secrets;
DROP POLICY IF EXISTS "Allow reading secrets" ON public.secrets;
CREATE POLICY "Admins can read secrets"
  ON public.secrets FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- ------------------------------------------------------------
-- 7. search_bar_ai_configs — admin-only writes; admin-only reads of prompts
-- ------------------------------------------------------------
DROP POLICY IF EXISTS "Enable authenticated insert" ON public.search_bar_ai_configs;
DROP POLICY IF EXISTS "Enable authenticated update" ON public.search_bar_ai_configs;
DROP POLICY IF EXISTS "Enable authenticated delete" ON public.search_bar_ai_configs;
DROP POLICY IF EXISTS "Enable public read access" ON public.search_bar_ai_configs;
CREATE POLICY "Admins manage ai configs"
  ON public.search_bar_ai_configs FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- ------------------------------------------------------------
-- 8. search_configurations — admin-only reads (system prompt)
-- ------------------------------------------------------------
DROP POLICY IF EXISTS "Enable read access for all users" ON public.search_configurations;
CREATE POLICY "Admins read search configurations"
  ON public.search_configurations FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- ------------------------------------------------------------
-- 9. search_prompts — admin-only writes
-- ------------------------------------------------------------
DROP POLICY IF EXISTS "Allow authenticated insert to prompts" ON public.search_prompts;
DROP POLICY IF EXISTS "Enable public delete access to search_prompts" ON public.search_prompts;
DROP POLICY IF EXISTS "Enable public insert access to search_prompts" ON public.search_prompts;
DROP POLICY IF EXISTS "Enable public update access to search_prompts" ON public.search_prompts;
CREATE POLICY "Admins manage search prompts"
  ON public.search_prompts FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- ------------------------------------------------------------
-- 10. search_websites — admin-only writes
-- ------------------------------------------------------------
DROP POLICY IF EXISTS "public_delete_websites" ON public.search_websites;
DROP POLICY IF EXISTS "public_insert_websites" ON public.search_websites;
DROP POLICY IF EXISTS "public_update_websites" ON public.search_websites;
CREATE POLICY "Admins manage search websites"
  ON public.search_websites FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- ------------------------------------------------------------
-- 11. search_bar_configurations — admin-only writes
-- ------------------------------------------------------------
DROP POLICY IF EXISTS "Enable public delete access" ON public.search_bar_configurations;
DROP POLICY IF EXISTS "Enable public insert access" ON public.search_bar_configurations;
DROP POLICY IF EXISTS "Enable public update access" ON public.search_bar_configurations;
CREATE POLICY "Admins manage search bar configurations"
  ON public.search_bar_configurations FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- ------------------------------------------------------------
-- 12. website_scrape_schedules — admin-only writes
-- ------------------------------------------------------------
DROP POLICY IF EXISTS "Enable insert for all users" ON public.website_scrape_schedules;
DROP POLICY IF EXISTS "Enable update for all users" ON public.website_scrape_schedules;
CREATE POLICY "Admins manage scrape schedules"
  ON public.website_scrape_schedules FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- ------------------------------------------------------------
-- 13. website_content — admin-only inserts (kept public read for SEO)
-- ------------------------------------------------------------
DROP POLICY IF EXISTS "Enable insert for all users" ON public.website_content;
-- authenticated insert/update/delete kept (admins/editors)

-- ------------------------------------------------------------
-- 14. chatbot_knowledge — admin-only writes (kept public read for chatbot)
-- ------------------------------------------------------------
DROP POLICY IF EXISTS "Allow public insert" ON public.chatbot_knowledge;
DROP POLICY IF EXISTS "Allow authenticated update" ON public.chatbot_knowledge;
DROP POLICY IF EXISTS "Allow authenticated delete" ON public.chatbot_knowledge;
CREATE POLICY "Admins manage chatbot knowledge"
  ON public.chatbot_knowledge FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- ------------------------------------------------------------
-- 15. treatment_videos — admin-only writes (kept public read)
-- ------------------------------------------------------------
DROP POLICY IF EXISTS "Allow public video uploads" ON public.treatment_videos;
DROP POLICY IF EXISTS "Allow public video deletion" ON public.treatment_videos;
DROP POLICY IF EXISTS "Authenticated users can update videos" ON public.treatment_videos;
CREATE POLICY "Admins manage treatment videos"
  ON public.treatment_videos FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- ------------------------------------------------------------
-- 16. treatment_images — admin-only writes (kept public read)
-- ------------------------------------------------------------
DROP POLICY IF EXISTS "Allow public image uploads" ON public.treatment_images;
DROP POLICY IF EXISTS "Authenticated users can update images" ON public.treatment_images;
DROP POLICY IF EXISTS "Authenticated users can delete images" ON public.treatment_images;
CREATE POLICY "Admins manage treatment images"
  ON public.treatment_images FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- ------------------------------------------------------------
-- 17. STORAGE: facial_assessments bucket — make private + admin only
-- ------------------------------------------------------------
UPDATE storage.buckets SET public = false WHERE id = 'facial_assessments';

DROP POLICY IF EXISTS "Admins manage facial_assessments objects" ON storage.objects;
CREATE POLICY "Admins manage facial_assessments objects"
  ON storage.objects FOR ALL
  TO authenticated
  USING (bucket_id = 'facial_assessments' AND public.has_role(auth.uid(), 'admin'))
  WITH CHECK (bucket_id = 'facial_assessments' AND public.has_role(auth.uid(), 'admin'));

-- ------------------------------------------------------------
-- 18. STORAGE: treatment-videos bucket — admin-only writes
-- ------------------------------------------------------------
DROP POLICY IF EXISTS "Admins manage treatment-videos objects" ON storage.objects;
CREATE POLICY "Admins manage treatment-videos objects"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'treatment-videos' AND public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "Admins update treatment-videos objects" ON storage.objects;
CREATE POLICY "Admins update treatment-videos objects"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'treatment-videos' AND public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "Admins delete treatment-videos objects" ON storage.objects;
CREATE POLICY "Admins delete treatment-videos objects"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'treatment-videos' AND public.has_role(auth.uid(), 'admin'));

-- ------------------------------------------------------------
-- 19. header_knowledge — already authenticated-only, but tighten to admin
-- ------------------------------------------------------------
DROP POLICY IF EXISTS "Allow authenticated users to insert header_knowledge" ON public.header_knowledge;
DROP POLICY IF EXISTS "Allow authenticated users to delete header_knowledge" ON public.header_knowledge;
CREATE POLICY "Admins manage header_knowledge"
  ON public.header_knowledge FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- ------------------------------------------------------------
-- 20. training_enquiries — registration_pin protection
-- Already admin-only SELECT; ensure no public read leaks.
-- (Insert remains public so the form works.)
-- No change required, but document with comment:
COMMENT ON COLUMN public.training_enquiries.registration_pin IS
  'Sensitive: GMC/GDC/NMC registration PIN. Only admins can read via RLS.';
