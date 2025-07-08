import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image, X, ChevronLeft, ChevronRight, Edit3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import ImageSelector from './ImageSelector';

interface TreatmentImage {
  id: string;
  url: string;
  title: string;
  description?: string;
  treatment_name: string;
  image_type: 'before_after' | 'process' | 'result' | 'general';
  created_at: string;
}

interface TreatmentImageGalleryProps {
  images?: TreatmentImage[];
  onImageChange?: (images: TreatmentImage[]) => void;
  onRemove?: (imageId: string) => void;
  treatmentName?: string;
  imageType?: TreatmentImage['image_type'];
  title?: string;
  description?: string;
  className?: string;
  editMode?: boolean;
  maxImages?: number;
}

const TreatmentImageGallery = ({ 
  images = [], 
  onImageChange, 
  onRemove,
  treatmentName,
  imageType,
  title = "Treatment Gallery",
  description,
  className = '',
  editMode = false,
  maxImages = 4
}: TreatmentImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const handleImageSelect = (newImage: TreatmentImage) => {
    if (images.length < maxImages) {
      const updatedImages = [...images, newImage];
      onImageChange?.(updatedImages);
    }
  };

  const handleImageRemove = (imageId: string) => {
    const updatedImages = images.filter(img => img.id !== imageId);
    onImageChange?.(updatedImages);
    onRemove?.(imageId);
  };

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : images.length - 1);
    } else {
      setSelectedImage(selectedImage < images.length - 1 ? selectedImage + 1 : 0);
    }
  };

  if (images.length === 0 && !editMode) {
    return null;
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={className}
      >
        <Card className="bg-white/5 border-white/10 overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-light text-white mb-2">{title}</h3>
                {description && (
                  <p className="text-white/70 text-sm">{description}</p>
                )}
              </div>
              {editMode && images.length < maxImages && (
                <ImageSelector
                  onImageSelect={handleImageSelect}
                  treatmentName={treatmentName}
                  imageType={imageType}
                />
              )}
            </div>

            {images.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Image className="h-8 w-8 text-white/60" />
                </div>
                <p className="text-white/60 mb-4">No images added yet</p>
                {editMode && (
                  <ImageSelector
                    onImageSelect={handleImageSelect}
                    treatmentName={treatmentName}
                    imageType={imageType}
                  />
                )}
              </div>
            ) : (
              <div className={`grid gap-4 ${
                images.length === 1 ? 'grid-cols-1' :
                images.length === 2 ? 'grid-cols-2' :
                images.length === 3 ? 'grid-cols-3' :
                'grid-cols-2 md:grid-cols-4'
              }`}>
                {images.map((image, index) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="relative group cursor-pointer"
                    onClick={() => openLightbox(index)}
                  >
                    <div className="aspect-square bg-black/30 rounded-xl overflow-hidden relative">
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Image className="h-8 w-8 text-white" />
                      </div>

                      {/* Edit Controls */}
                      {editMode && (
                        <div className="absolute top-2 right-2 flex gap-2">
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleImageRemove(image.id);
                            }}
                            className="bg-red-500/80 hover:bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                    </div>

                    {/* Image Info */}
                    <div className="mt-2">
                      <p className="text-white/90 text-sm font-medium line-clamp-1">
                        {image.title}
                      </p>
                      {image.description && (
                        <p className="text-white/60 text-xs line-clamp-2 mt-1">
                          {image.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>

      {/* Lightbox */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="bg-black/95 border-white/20 max-w-4xl max-h-[90vh] p-0">
          <div className="relative">
            {selectedImage !== null && images[selectedImage] && (
              <>
                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
                >
                  <X className="h-4 w-4" />
                </Button>

                {/* Navigation Buttons */}
                {images.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => navigateImage('prev')}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => navigateImage('next')}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>
                  </>
                )}

                {/* Image */}
                <div className="relative">
                  <img
                    src={images[selectedImage].url}
                    alt={images[selectedImage].title}
                    className="w-full max-h-[80vh] object-contain"
                  />
                  
                  {/* Image Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h3 className="text-white text-xl font-light mb-2">
                      {images[selectedImage].title}
                    </h3>
                    {images[selectedImage].description && (
                      <p className="text-white/80 text-sm">
                        {images[selectedImage].description}
                      </p>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TreatmentImageGallery;