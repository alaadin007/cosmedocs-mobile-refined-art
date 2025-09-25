-- Add missing columns to product_analyses table
ALTER TABLE public.product_analyses 
ADD COLUMN IF NOT EXISTS product_brand text,
ADD COLUMN IF NOT EXISTS analysis_data jsonb,
ADD COLUMN IF NOT EXISTS overall_score numeric;