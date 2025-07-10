import { useState, useRef, useEffect } from 'react';
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
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);
    const handleError = () => setHasError(true);
    const handleCanPlay = () => setHasError(false);

    videoElement.addEventListener('play', handlePlay);
    videoElement.addEventListener('pause', handlePause);
    videoElement.addEventListener('ended', handleEnded);
    videoElement.addEventListener('error', handleError);
    videoElement.addEventListener('canplay', handleCanPlay);

    return () => {
      videoElement.removeEventListener('play', handlePlay);
      videoElement.removeEventListener('pause', handlePause);
      videoElement.removeEventListener('ended', handleEnded);
      videoElement.removeEventListener('error', handleError);
      videoElement.removeEventListener('canplay', handleCanPlay);
    };
  }, [video]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      videoRef.current.requestFullscreen();
    }
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

  // Check if video format is supported
  const isUnsupportedFormat = video?.video_url.toLowerCase().includes('.mov');

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
            {hasError || isUnsupportedFormat ? (
              <div className="aspect-video bg-black/30 flex items-center justify-center">
                <div className="text-center p-8">
                  <Play className="h-12 w-12 text-white/40 mx-auto mb-4" />
                  <p className="text-white/60 mb-2">Video format not supported</p>
                  <p className="text-white/40 text-sm">
                    {isUnsupportedFormat ? 'MOV files require Safari browser or MP4 conversion' : 'Please try a different browser'}
                  </p>
                  <a 
                    href={video.video_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 text-sm underline mt-2 inline-block"
                  >
                    Download video
                  </a>
                </div>
              </div>
            ) : (
              <video
                ref={videoRef}
                src={video.video_url}
                className="w-full aspect-video object-cover"
                controls={!showControls}
                preload="metadata"
                playsInline
              />
            )}

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
                
                {/* Enhanced descriptive text for cheek fillers */}
                {treatmentName?.toLowerCase().includes('cheek') || video.treatment_name?.toLowerCase().includes('cheek') ? (
                  <p className="text-white/80 text-sm leading-relaxed">
                    Watch expert cheek filler procedures showcasing natural enhancement techniques. 
                    Our aesthetic medicine approach delivers subtle volume restoration and refined cheekbone definition 
                    for naturally beautiful results that enhance your facial contours.
                  </p>
                ) : video.description ? (
                  <p className="text-white/70 text-sm leading-relaxed">{video.description}</p>
                ) : (
                  <p className="text-white/80 text-sm leading-relaxed">
                    Professional aesthetic treatment demonstration showcasing our invisible art approach - 
                    bold, natural, and always your way.
                  </p>
                )}
              </div>
            </div>

            {/* Simplified Video Duration Only */}
            {video.duration && (
              <div className="text-white/40 text-xs">
                <span>{Math.floor(video.duration / 60)}:{(video.duration % 60).toString().padStart(2, '0')}</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TreatmentVideoPlayer;