import { Helmet } from "react-helmet-async";
import { generateVideoSchema, type VideoSchemaData } from "@/utils/richSchemas";

interface VideoSchemaProps {
  videos: VideoSchemaData | VideoSchemaData[];
}

/**
 * Drop-in component that injects VideoObject JSON-LD schema.
 * Usage: <VideoSchema videos={{ name, description, thumbnailUrl, uploadDate }} />
 */
const VideoSchema = ({ videos }: VideoSchemaProps) => {
  const videoArray = Array.isArray(videos) ? videos : [videos];
  if (videoArray.length === 0) return null;

  return (
    <Helmet>
      {videoArray.map((video, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(generateVideoSchema(video))}
        </script>
      ))}
    </Helmet>
  );
};

export default VideoSchema;
