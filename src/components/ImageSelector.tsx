import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Image, Plus, X, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useImageManagement } from '@/hooks/useImageManagement';

interface TreatmentImage {
  id: string;
  url: string;
  title: string;
  description?: string;
  treatment_name: string;
  image_type: 'before_after' | 'process' | 'result' | 'general';
  created_at: string;
}

interface ImageSelectorProps {
  onImageSelect: (image: TreatmentImage) => void;
  selectedImageId?: string;
  treatmentName?: string;
  imageType?: TreatmentImage['image_type'];
}

const ImageSelector = ({ onImageSelect, selectedImageId, treatmentName, imageType }: ImageSelectorProps) => {
  const [open, setOpen] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const [uploadData, setUploadData] = useState({
    title: '',
    description: '',
    imageType: imageType || 'general' as TreatmentImage['image_type'],
    file: null as File | null
  });

  const { images, loading, uploadImage } = useImageManagement(treatmentName);

  const handleImageSelect = (image: TreatmentImage) => {
    onImageSelect(image);
    setOpen(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadData(prev => ({ ...prev, file }));
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadData.file || !uploadData.title) return;

    try {
      const newImage = await uploadImage(
        uploadData.file,
        uploadData.imageType,
        uploadData.title,
        uploadData.description
      );
      
      if (newImage) {
        onImageSelect(newImage);
        setOpen(false);
        setShowUpload(false);
        setUploadData({ title: '', description: '', imageType: 'general', file: null });
      }
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  const filteredImages = imageType 
    ? images.filter(img => img.image_type === imageType)
    : images;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
          <Plus className="h-4 w-4 mr-2" />
          {selectedImageId ? 'Change Image' : 'Add Image'}
        </Button>
      </DialogTrigger>
      
      <DialogContent className="bg-black/95 border-white/20 text-white max-w-5xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-white flex items-center justify-between">
            <span>Select an Image {treatmentName && `for ${treatmentName}`}</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowUpload(!showUpload)}
              className="border-white/20 text-white hover:bg-white/10"
            >
              <Upload className="h-4 w-4 mr-2" />
              Upload New
            </Button>
          </DialogTitle>
        </DialogHeader>

        {showUpload && (
          <Card className="bg-white/5 border-white/20 mb-6">
            <CardContent className="p-6">
              <form onSubmit={handleUpload} className="space-y-4">
                <div>
                  <Label htmlFor="file" className="text-white">Image File</Label>
                  <Input
                    id="file"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="bg-white/10 border-white/20 text-white"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="title" className="text-white">Title</Label>
                  <Input
                    id="title"
                    value={uploadData.title}
                    onChange={(e) => setUploadData(prev => ({ ...prev, title: e.target.value }))}
                    className="bg-white/10 border-white/20 text-white"
                    placeholder="Enter image title"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="description" className="text-white">Description (Optional)</Label>
                  <Textarea
                    id="description"
                    value={uploadData.description}
                    onChange={(e) => setUploadData(prev => ({ ...prev, description: e.target.value }))}
                    className="bg-white/10 border-white/20 text-white"
                    placeholder="Describe the image"
                  />
                </div>

                <div>
                  <Label htmlFor="imageType" className="text-white">Image Type</Label>
                  <Select 
                    value={uploadData.imageType} 
                    onValueChange={(value) => setUploadData(prev => ({ ...prev, imageType: value as TreatmentImage['image_type'] }))}
                  >
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-white/20">
                      <SelectItem value="before_after" className="text-white">Before/After</SelectItem>
                      <SelectItem value="process" className="text-white">Treatment Process</SelectItem>
                      <SelectItem value="result" className="text-white">Results</SelectItem>
                      <SelectItem value="general" className="text-white">General</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Upload Image
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        {loading ? (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            <span className="ml-2 text-white/80">Loading images...</span>
          </div>
        ) : filteredImages.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-white/60 mb-4">
              No images available
            </p>
            <p className="text-white/40 text-sm">
              Upload images using the button above
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Card 
                  className={`bg-white/5 border-white/10 overflow-hidden cursor-pointer hover:bg-white/10 transition-all duration-300 ${
                    selectedImageId === image.id ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => handleImageSelect(image)}
                >
                  <CardContent className="p-0">
                    {/* Image Preview */}
                    <div className="aspect-video bg-black/50 relative group overflow-hidden">
                      <img 
                        src={image.url}
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Image className="h-8 w-8 text-white" />
                      </div>
                      {selectedImageId === image.id && (
                        <div className="absolute top-2 right-2 bg-primary rounded-full p-1">
                          <Image className="h-4 w-4 text-black" />
                        </div>
                      )}
                    </div>
                    
                    {/* Image Info */}
                    <div className="p-3">
                      <h3 className="text-white font-medium text-sm mb-1 line-clamp-1">
                        {image.title}
                      </h3>
                      <p className="text-primary text-xs mb-1 capitalize">{image.image_type.replace('_', ' ')}</p>
                      {image.description && (
                        <p className="text-white/60 text-xs line-clamp-2">{image.description}</p>
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

export default ImageSelector;