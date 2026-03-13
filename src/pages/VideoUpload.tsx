import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Upload, Play, Trash2, Edit3, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Tables } from '@/integrations/supabase/types';

type TreatmentVideo = Tables<'treatment_videos'>;

const VideoUpload = () => {
  const { toast } = useToast();
  const [uploading, setUploading] = useState(false);
  const [videos, setVideos] = useState<TreatmentVideo[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    treatment_name: '',
    description: ''
  });

  // Load existing videos on component mount
  const loadVideos = async () => {
    const { data, error } = await supabase
      .from('treatment_videos')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        title: "Error loading videos",
        description: error.message,
        variant: "destructive"
      });
    } else {
      setVideos(data || []);
    }
  };

  useEffect(() => {
    loadVideos();
  }, []);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      toast({
        title: "No file selected",
        description: "Please select a video file first",
        variant: "destructive"
      });
      return;
    }

    if (!formData.title || !formData.treatment_name) {
      toast({
        title: "Missing information",
        description: "Please provide title and treatment name before uploading",
        variant: "destructive"
      });
      return;
    }

    setUploading(true);

    try {
      const fileExt = selectedFile.name.split('.').pop();
      const fileName = `${Date.now()}_${Math.random().toString(36).substring(2)}.${fileExt}`;
      
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('treatment-videos')
        .upload(fileName, selectedFile);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('treatment-videos')
        .getPublicUrl(uploadData.path);

      const { error: dbError } = await supabase
        .from('treatment_videos')
        .insert({
          title: formData.title,
          treatment_name: formData.treatment_name,
          description: formData.description,
          video_url: publicUrl,
          file_size: selectedFile.size,
        })
        .select()
        .single();

      if (dbError) throw dbError;

      toast({
        title: "Video uploaded successfully!",
        description: "Your video is now available for use on treatment pages",
      });

      setFormData({ title: '', treatment_name: '', description: '' });
      setSelectedFile(null);
      loadVideos();

    } catch (error: any) {
      toast({
        title: "Upload failed",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setUploading(false);
    }
  };

  const deleteVideo = async (videoId: string, videoUrl: string) => {
    try {
      // Extract filename from URL to delete from storage
      const fileName = videoUrl.split('/').pop();
      
      if (fileName) {
        await supabase.storage
          .from('treatment-videos')
          .remove([fileName]);
      }

      // Delete from database
      const { error } = await supabase
        .from('treatment_videos')
        .delete()
        .eq('id', videoId);

      if (error) throw error;

      toast({
        title: "Video deleted",
        description: "Video has been removed successfully",
      });

      loadVideos();
    } catch (error: any) {
      toast({
        title: "Delete failed", 
        description: error.message,
        variant: "destructive"
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Video Upload - Treatment Videos Management</title>
        <meta name="description" content="Upload and manage treatment videos for Cosmedocs" />
      </Helmet>

      <div className="min-h-screen bg-black text-white py-20">
        <div className="page-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-thin text-center mb-12">
              Video Management System
            </h1>

            {/* Upload Form */}
            <Card className="bg-white/5 border-white/10 mb-12 max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Upload New Video
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Video Title
                    </label>
                    <Input
                      value={formData.title}
                      onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                      placeholder="Enter video title"
                      className="bg-white/10 border-white/20 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Treatment Name
                    </label>
                    <Input
                      value={formData.treatment_name}
                      onChange={(e) => setFormData(prev => ({ ...prev, treatment_name: e.target.value }))}
                      placeholder="e.g., HydraFacial, Botox"
                      className="bg-white/10 border-white/20 text-white"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Description (Optional)
                  </label>
                  <Textarea
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Brief description of the video"
                    className="bg-white/10 border-white/20 text-white"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Select Video File
                  </label>
                  <input
                    type="file"
                    accept="video/*"
                    onChange={handleFileSelect}
                    disabled={uploading}
                    className="block w-full text-sm text-white/70 
                             file:mr-4 file:py-2 file:px-4
                             file:rounded-full file:border-0
                             file:text-sm file:font-medium
                             file:bg-primary file:text-primary-foreground
                             hover:file:bg-primary/80
                             file:cursor-pointer cursor-pointer"
                  />
                  {selectedFile && (
                    <p className="text-white/60 text-sm mt-2">
                      Selected: {selectedFile.name} ({(selectedFile.size / (1024 * 1024)).toFixed(1)} MB)
                    </p>
                  )}
                </div>

                <Button
                  onClick={handleUpload}
                  disabled={uploading || !selectedFile || !formData.title || !formData.treatment_name}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {uploading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2"></div>
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Video
                    </>
                </Button>
              </CardContent>
            </Card>

            {/* Video Library */}
            <div>
              <h2 className="text-3xl font-light text-center mb-8">Video Library</h2>
              
              {videos.length === 0 ? (
                <Card className="bg-white/5 border-white/10 text-center py-12">
                  <CardContent>
                    <Upload className="h-12 w-12 text-white/40 mx-auto mb-4" />
                    <p className="text-white/60">No videos uploaded yet</p>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {videos.map((video) => (
                    <Card key={video.id} className="bg-white/5 border-white/10 overflow-hidden">
                      <CardContent className="p-0">
                        {/* Video Preview */}
                        <div className="aspect-video bg-black/50 relative group">
                          <video 
                            src={video.video_url}
                            className="w-full h-full object-cover"
                            preload="metadata"
                          />
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button
                              size="sm"
                              variant="ghost"
                              className="text-white hover:text-primary"
                              onClick={() => window.open(video.video_url, '_blank')}
                            >
                              <Play className="h-8 w-8" />
                            </Button>
                          </div>
                        </div>
                        
                        {/* Video Info */}
                        <div className="p-4">
                          <h3 className="text-white font-medium mb-1">{video.title}</h3>
                          <p className="text-primary text-sm mb-2">{video.treatment_name}</p>
                          {video.description && (
                            <p className="text-white/60 text-sm mb-4 line-clamp-2">{video.description}</p>
                          )}
                          
                          <div className="flex items-center justify-between">
                            <span className="text-white/40 text-xs">
                              {video.file_size && `${(video.file_size / (1024 * 1024)).toFixed(1)} MB`}
                            </span>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => deleteVideo(video.id, video.video_url)}
                              className="text-red-400 hover:text-red-300 hover:bg-red-400/10"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default VideoUpload;