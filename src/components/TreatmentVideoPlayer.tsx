import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize2, Edit3, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tables } from '@/integrations/supabase/types';
import VideoSelector from './VideoSelector';

type TreatmentVideo = Tables<'treatment_videos'>;

interface TreatmentVideoPlayerProps {
  video?: TreatmentVideo;
  onVideoChange?: (video: TreatmentVideo) => void;
  onRemove?: () => void;
  treatmentName?: string;
  className?: string;
  showControls?: boolean;
  editMode?: boolean;
}

const TreatmentVideoPlayer = ({ 
  video, 
  onVideoChange, 
  onRemove, 
  treatmentName,
  className = '',
  showControls = true,
  editMode = false
}: TreatmentVideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [videoElement, setVideoElement] = useState<HTMLVideoElement | null>(null);

  const togglePlay = () => {
    if (!videoElement) return;
    
    if (isPlaying) {
      videoElement.pause();
    } else {
      videoElement.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoElement) return;
    
    videoElement.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (!videoElement) return;
    
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      videoElement.requestFullscreen();
    }
  };

  const handleVideoLoad = (element: HTMLVideoElement) => {
    setVideoElement(element);
    element.addEventListener('play', () => setIsPlaying(true));
    element.addEventListener('pause', () => setIsPlaying(false));
    element.addEventListener('ended', () => setIsPlaying(false));
  };

  // Placeholder component when no video is selected
  if (!video) {
    return (
      <Card className={`bg-white/5 border-white/10 ${className}`}>
        <CardContent className="p-8 text-center">
          <div className="aspect-video bg-black/30 rounded-xl mb-6 flex items-center justify-center">
            <div className="text-center">
              <Play className="h-12 w-12 text-white/40 mx-auto mb-4" />
              <p className="text-white/60 mb-4">No video selected</p>
              {editMode && onVideoChange && (
                <VideoSelector 
                  onVideoSelect={onVideoChange}
                  treatmentName={treatmentName}
                />
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      <Card className="bg-white/5 border-white/10 overflow-hidden">
        <CardContent className="p-0">
          {/* Video Container */}
          <div className="relative group">
            <video
              ref={handleVideoLoad}
              src={video.video_url}
              className="w-full aspect-video object-cover"
              controls={!showControls}
              preload="metadata"
              playsInline
            />

            {/* Custom Controls Overlay */}
            {showControls && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* Edit Controls (Top Right) */}
                {editMode && (
                  <div className="absolute top-4 right-4 flex gap-2">
                    {onVideoChange && (
                      <VideoSelector 
                        onVideoSelect={onVideoChange}
                        selectedVideoId={video.id}
                        treatmentName={treatmentName}
                      />
                    )}
                    {onRemove && (
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={onRemove}
                        className="bg-red-500/80 hover:bg-red-500"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                )}

                {/* Play Controls (Center) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    size="lg"
                    variant="ghost"
                    onClick={togglePlay}
                    className="bg-black/50 hover:bg-black/70 text-white rounded-full h-16 w-16"
                  >
                    {isPlaying ? (
                      <Pause className="h-8 w-8" />
                    ) : (
                      <Play className="h-8 w-8 ml-1" />
                    )}
                  </Button>
                </div>

                {/* Bottom Controls */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={toggleMute}
                      className="text-white hover:bg-white/20"
                    >
                      {isMuted ? (
                        <VolumeX className="h-4 w-4" />
                      ) : (
                        <Volume2 className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={toggleFullscreen}
                    className="text-white hover:bg-white/20"
                  >
                    <Maximize2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Video Information */}
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-light text-white mb-2">{video.title}</h3>
                <p className="text-primary text-sm mb-2">{video.treatment_name}</p>
                {video.description && (
                  <p className="text-white/70 text-sm leading-relaxed">{video.description}</p>
                )}
              </div>
            </div>

            {/* Video Metadata */}
            <div className="flex items-center gap-4 text-white/40 text-xs">
              {video.duration && (
                <span>{Math.floor(video.duration / 60)}:{(video.duration % 60).toString().padStart(2, '0')}</span>
              )}
              {video.file_size && (
                <span>{(video.file_size / (1024 * 1024)).toFixed(1)} MB</span>
              )}
              <span>Uploaded {new Date(video.created_at).toLocaleDateString()}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TreatmentVideoPlayer;