
-- Create the contact_us table for storing contact form submissions
CREATE TABLE public.contact_us (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security (RLS) for the contact_us table
ALTER TABLE public.contact_us ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to insert contact form submissions (public contact form)
CREATE POLICY "Anyone can submit contact forms" 
  ON public.contact_us 
  FOR INSERT 
  WITH CHECK (true);

-- Create a policy that allows authenticated users to view contact submissions (for admin purposes)
CREATE POLICY "Authenticated users can view contact submissions" 
  ON public.contact_us 
  FOR SELECT 
  USING (auth.role() = 'authenticated');
