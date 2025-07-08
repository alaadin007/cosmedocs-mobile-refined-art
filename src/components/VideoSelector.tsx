import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { supabase } from '@/integrations/supabase/client';
import { Tables } from '@/integrations/supabase/types';

type TreatmentVideo = Tables<'treatment_videos'>;

interface VideoSelectorProps {
  onVideoSelect: (video: TreatmentVideo) => void;
  selectedVideoId?: string;
  treatmentName?: string;
}

const VideoSelector = ({ onVideoSelect, selectedVideoId, treatmentName }: VideoSelectorProps) => {
  const [videos, setVideos] = useState<TreatmentVideo[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      loadVideos();
    }
  }, [open, treatmentName]);

  const loadVideos = async () => {
    setLoading(true);
    try {
      // Show all videos - this allows users to choose from any available video
      const { data, error } = await supabase
        .from('treatment_videos')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setVideos(data || []);
    } catch (error) {
      console.error('Error loading videos:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleVideoSelect = (video: TreatmentVideo) => {
    onVideoSelect(video);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
          <Plus className="h-4 w-4 mr-2" />
          {selectedVideoId ? 'Change Video' : 'Add Video'}
        </Button>
      </DialogTrigger>
      
      <DialogContent className="bg-black/95 border-white/20 text-white max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-white">
            Select a Video {treatmentName && `for ${treatmentName}`}
          </DialogTitle>
        </DialogHeader>

        {loading ? (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            <span className="ml-2 text-white/80">Loading videos...</span>
          </div>
        ) : videos.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-white/60 mb-4">
              No videos available
            </p>
            <p className="text-white/40 text-sm">
              Upload videos through the Video Management System first
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {videos.map((video) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Card 
                  className={`bg-white/5 border-white/10 overflow-hidden cursor-pointer hover:bg-white/10 transition-all duration-300 ${
                    selectedVideoId === video.id ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => handleVideoSelect(video)}
                >
                  <CardContent className="p-0">
                    {/* Video Preview */}
                    <div className="aspect-video bg-black/50 relative group">
                      <video 
                        src={video.video_url}
                        className="w-full h-full object-cover"
                        preload="metadata"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                      {selectedVideoId === video.id && (
                        <div className="absolute top-2 right-2 bg-primary rounded-full p-1">
                          <Play className="h-4 w-4 text-black fill-black" />
                        </div>
                      )}
                    </div>
                    
                    {/* Video Info */}
                    <div className="p-3">
                      <h3 className="text-white font-medium text-sm mb-1 line-clamp-1">
                        {video.title}
                      </h3>
                      <p className="text-primary text-xs mb-1">{video.treatment_name}</p>
                      {video.description && (
                        <p className="text-white/60 text-xs line-clamp-2">{video.description}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default VideoSelector;