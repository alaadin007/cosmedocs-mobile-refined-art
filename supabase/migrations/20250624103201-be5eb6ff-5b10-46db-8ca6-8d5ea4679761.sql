
-- Create contact_us table to store form submissions
CREATE TABLE public.contact_us (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.contact_us ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert contact form submissions
CREATE POLICY "Anyone can submit contact forms" 
  ON public.contact_us 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy to allow reading contact submissions (for admin purposes)
CREATE POLICY "Allow reading contact submissions" 
  ON public.contact_us 
  FOR SELECT 
  USING (true);

-- Create an updated_at trigger
CREATE OR REPLACE FUNCTION public.update_contact_us_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_contact_us_updated_at
    BEFORE UPDATE ON public.contact_us
    FOR EACH ROW
    EXECUTE FUNCTION public.update_contact_us_updated_at();
