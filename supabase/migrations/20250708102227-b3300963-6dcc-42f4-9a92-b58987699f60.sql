-- Drop the existing restrictive policy
DROP POLICY IF EXISTS "Only authenticated users can manage videos" ON public.treatment_videos;

-- Create separate policies for different operations
-- Allow public insert for video uploads (admin interface)
CREATE POLICY "Allow public video uploads" 
ON public.treatment_videos 
FOR INSERT 
WITH CHECK (true);

-- Require authentication for updates and deletes
CREATE POLICY "Authenticated users can update videos" 
ON public.treatment_videos 
FOR UPDATE 
USING (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can delete videos" 
ON public.treatment_videos 
FOR DELETE 
USING (auth.uid() IS NOT NULL);