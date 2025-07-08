-- Check and fix storage policies for treatment-videos bucket

-- Create policy to allow public uploads to treatment-videos bucket
CREATE POLICY "Allow public video uploads to treatment-videos" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'treatment-videos');

-- Create policy to allow public access to view videos
CREATE POLICY "Allow public access to treatment videos" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'treatment-videos');

-- Create policy to allow authenticated users to delete videos
CREATE POLICY "Allow authenticated delete of treatment videos" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'treatment-videos' AND auth.uid() IS NOT NULL);