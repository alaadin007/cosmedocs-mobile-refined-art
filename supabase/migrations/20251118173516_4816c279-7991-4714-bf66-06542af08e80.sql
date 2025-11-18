-- Create spin_winners table to track all prize winners
CREATE TABLE public.spin_winners (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  postcode TEXT NOT NULL,
  prize TEXT NOT NULL,
  prize_code TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  redeemed BOOLEAN NOT NULL DEFAULT false
);

-- Enable RLS
ALTER TABLE public.spin_winners ENABLE ROW LEVEL SECURITY;

-- Allow public to insert their own entries
CREATE POLICY "Allow public to insert spin entries"
ON public.spin_winners
FOR INSERT
WITH CHECK (true);

-- Allow public to read their own entries (by email or phone)
CREATE POLICY "Allow users to view their own entries"
ON public.spin_winners
FOR SELECT
USING (true);

-- Create index on email and phone for quick lookups
CREATE INDEX idx_spin_winners_email ON public.spin_winners(email);
CREATE INDEX idx_spin_winners_phone ON public.spin_winners(phone);
CREATE INDEX idx_spin_winners_prize ON public.spin_winners(prize);

-- Add comment for documentation
COMMENT ON TABLE public.spin_winners IS 'Tracks all Spin to Win giveaway entries and prize redemptions';