
-- treatment-videos: remove public/unauthenticated upload + redundant non-admin policies
DROP POLICY IF EXISTS "Allow public video uploads to treatment-videos" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload treatment videos" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update treatment videos" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete treatment videos" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated delete of treatment videos" ON storage.objects;

-- facial_assessments: remove fully public ALL policy (admin policy already exists)
DROP POLICY IF EXISTS "Give public access to facial_assessments bucket" ON storage.objects;

-- wordpress_images: replace anonymous insert with authenticated-only insert
DROP POLICY IF EXISTS "Allow uploads" ON storage.objects;
CREATE POLICY "Authenticated uploads to wordpress_images"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'wordpress_images');
