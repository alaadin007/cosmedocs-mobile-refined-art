-- Create treatment_images table for storing treatment-related images
CREATE TABLE public.treatment_images (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  description text,
  image_url text NOT NULL,
  treatment_name text NOT NULL,
  image_type text NOT NULL CHECK (image_type IN ('before_after', 'process', 'result', 'general')),
  file_size bigint,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.treatment_images ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (similar to treatment_videos)
CREATE POLICY "Treatment images are publicly viewable" 
ON public.treatment_images 
FOR SELECT 
USING (true);

CREATE POLICY "Allow public image uploads" 
ON public.treatment_images 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Authenticated users can update images" 
ON public.treatment_images 
FOR UPDATE 
USING (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can delete images" 
ON public.treatment_images 
FOR DELETE 
USING (auth.uid() IS NOT NULL);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_treatment_images_updated_at
BEFORE UPDATE ON public.treatment_images
FOR EACH ROW
EXECUTE FUNCTION public.update_treatment_videos_updated_at();