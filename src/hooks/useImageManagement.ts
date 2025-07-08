import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface TreatmentImage {
  id: string;
  url: string;
  title: string;
  description?: string;
  treatment_name: string;
  image_type: 'before_after' | 'process' | 'result' | 'general';
  created_at: string;
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

  // For now, we'll use a simple array to store images
  // In a real implementation, this would connect to Supabase storage
  const loadImages = async () => {
    setLoading(true);
    try {
      // Simulated image data - in real implementation, fetch from Supabase
      const mockImages: TreatmentImage[] = [
        {
          id: '1',
          url: '/lovable-uploads/ac269c72-30b5-4182-a990-857547c55c4f.png',
          title: 'PRP Before/After Results',
          description: 'Showing skin improvement after PRP treatment',
          treatment_name: 'PRP',
          image_type: 'before_after',
          created_at: new Date().toISOString()
        },
        {
          id: '2',
          url: '/lovable-uploads/a4df5f90-dda5-48a2-9bd2-19728aa1a275.png',
          title: 'PRP Treatment Process',
          description: 'Step-by-step PRP procedure',
          treatment_name: 'PRP',
          image_type: 'process',
          created_at: new Date().toISOString()
        }
      ];

      if (treatmentName) {
        setImages(mockImages.filter(img => 
          img.treatment_name.toLowerCase().includes(treatmentName.toLowerCase())
        ));
      } else {
        setImages(mockImages);
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
        url: URL.createObjectURL(file), // Temporary URL
        title,
        description,
        treatment_name: treatmentName || 'General',
        image_type: imageType,
        created_at: new Date().toISOString()
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