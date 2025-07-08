import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Tables } from '@/integrations/supabase/types';
import { useToast } from '@/hooks/use-toast';

type TreatmentVideo = Tables<'treatment_videos'>;

interface VideoSection {
  id: string;
  video: TreatmentVideo;
  position: number;
}

export const useVideoManagement = (treatmentName?: string) => {
  const [videos, setVideos] = useState<TreatmentVideo[]>([]);
  const [videoSections, setVideoSections] = useState<VideoSection[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  // Load all available videos
  const loadVideos = async () => {
    setLoading(true);
    try {
      let query = supabase
        .from('treatment_videos')
        .select('*')
        .order('created_at', { ascending: false });

      if (treatmentName) {
        query = query.eq('treatment_name', treatmentName);
      }

      const { data, error } = await query;
      if (error) throw error;
      
      setVideos(data || []);
    } catch (error: any) {
      toast({
        title: "Error loading videos",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadVideos();
  }, [treatmentName]);

  // Add a video section to the current page
  const addVideoSection = (video: TreatmentVideo, position: number = 0) => {
    const newSection: VideoSection = {
      id: `video-${Date.now()}-${Math.random().toString(36).substring(2)}`,
      video,
      position
    };
    
    setVideoSections(prev => [
      ...prev,
      newSection
    ].sort((a, b) => a.position - b.position));
  };

  // Remove a video section
  const removeVideoSection = (sectionId: string) => {
    setVideoSections(prev => prev.filter(section => section.id !== sectionId));
  };

  // Update a video in a section
  const updateVideoSection = (sectionId: string, newVideo: TreatmentVideo) => {
    setVideoSections(prev => prev.map(section => 
      section.id === sectionId 
        ? { ...section, video: newVideo }
        : section
    ));
  };

  // Move video section position
  const moveVideoSection = (sectionId: string, newPosition: number) => {
    setVideoSections(prev => prev.map(section => 
      section.id === sectionId 
        ? { ...section, position: newPosition }
        : section
    ).sort((a, b) => a.position - b.position));
  };

  // Get videos by treatment name
  const getVideosByTreatment = (treatment: string) => {
    return videos.filter(video => 
      video.treatment_name.toLowerCase().includes(treatment.toLowerCase())
    );
  };

  return {
    videos,
    videoSections,
    loading,
    loadVideos,
    addVideoSection,
    removeVideoSection,
    updateVideoSection,
    moveVideoSection,
    getVideosByTreatment
  };
};