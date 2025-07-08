import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface TreatmentImage {
  id: string;
  title: string;
  description?: string;
  image_url: string;
  treatment_name: string;
  image_type: 'before_after' | 'process' | 'result' | 'general';
  file_size?: number;
  created_at: string;
  updated_at: string;
}

interface ImageSection {
  id: string;
  image: TreatmentImage;
  position: number;
}

export const useImageManagement = (treatmentName?: string) => {
  const [images, setImages] = useState<TreatmentImage[]>([]);
  const [imageSections, setImageSections] = useState<ImageSection[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  const loadImages = async () => {
    setLoading(true);
    try {
      // Fetch from Supabase database
      const { data, error } = await supabase
        .from('treatment_images')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      const typedData = (data || []).map(item => ({
        ...item,
        image_type: item.image_type as TreatmentImage['image_type']
      }));

      if (treatmentName) {
        setImages(typedData.filter(img => 
          img.treatment_name.toLowerCase().includes(treatmentName.toLowerCase())
        ));
      } else {
        setImages(typedData);
      }
    } catch (error: any) {
      toast({
        title: "Error loading images",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadImages();
  }, [treatmentName]);

  // Add an image section to the current page
  const addImageSection = (image: TreatmentImage, position: number = 0) => {
    const newSection: ImageSection = {
      id: `image-${Date.now()}-${Math.random().toString(36).substring(2)}`,
      image,
      position
    };
    
    setImageSections(prev => [
      ...prev,
      newSection
    ].sort((a, b) => a.position - b.position));
  };

  // Remove an image section
  const removeImageSection = (sectionId: string) => {
    setImageSections(prev => prev.filter(section => section.id !== sectionId));
  };

  // Update an image in a section
  const updateImageSection = (sectionId: string, newImage: TreatmentImage) => {
    setImageSections(prev => prev.map(section => 
      section.id === sectionId 
        ? { ...section, image: newImage }
        : section
    ));
  };

  // Upload image (placeholder - would integrate with Supabase storage)
  const uploadImage = async (file: File, imageType: TreatmentImage['image_type'], title: string, description?: string) => {
    setUploading(true);
    try {
      // In real implementation, upload to Supabase storage
      const newImage: TreatmentImage = {
        id: Date.now().toString(),
        image_url: URL.createObjectURL(file), // Temporary URL
        title,
        description,
        treatment_name: treatmentName || 'General',
        image_type: imageType,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };

      setImages(prev => [newImage, ...prev]);
      
      toast({
        title: "Image uploaded successfully",
        description: "Your image is now available for use"
      });

      return newImage;
    } catch (error: any) {
      toast({
        title: "Upload failed",
        description: error.message,
        variant: "destructive"
      });
      throw error;
    } finally {
      setUploading(false);
    }
  };

  // Get images by type
  const getImagesByType = (type: TreatmentImage['image_type']) => {
    return images.filter(image => image.image_type === type);
  };

  return {
    images,
    imageSections,
    loading,
    uploading,
    loadImages,
    addImageSection,
    removeImageSection,
    updateImageSection,
    uploadImage,
    getImagesByType
  };
};