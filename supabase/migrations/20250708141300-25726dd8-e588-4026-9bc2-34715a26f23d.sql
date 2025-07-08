-- Update RLS policy for treatment_videos to allow public deletion
-- This will allow users to delete videos without authentication
DROP POLICY IF EXISTS "Authenticated users can delete videos" ON treatment_videos;

CREATE POLICY "Allow public video deletion" 
ON treatment_videos 
FOR DELETE 
USING (true);