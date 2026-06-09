
-- Add admin-only write policies to search_configurations
CREATE POLICY "Admins insert search configurations" ON public.search_configurations
  FOR INSERT TO authenticated WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins update search configurations" ON public.search_configurations
  FOR UPDATE TO authenticated USING (has_role(auth.uid(), 'admin'::app_role)) WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins delete search configurations" ON public.search_configurations
  FOR DELETE TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));

-- Add admin-only write policies to secrets
CREATE POLICY "Admins insert secrets" ON public.secrets
  FOR INSERT TO authenticated WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins update secrets" ON public.secrets
  FOR UPDATE TO authenticated USING (has_role(auth.uid(), 'admin'::app_role)) WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins delete secrets" ON public.secrets
  FOR DELETE TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));
