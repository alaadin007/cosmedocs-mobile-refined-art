
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface BeforeAfterImage {
  src: string;
  alt: string;
  caption: string;
}

interface BeforeAfterImageViewerProps {
  images: BeforeAfterImage[];
  triggerLabel?: string;
  title?: string;
  description?: string;
}

const BeforeAfterImageViewer = ({
  images,
  triggerLabel = "See B/A",
  title = "Lip Filler Before & After",
  description = "Results achieved with our premium lip filler treatments"
}: BeforeAfterImageViewerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      goToPrevious();
    } else if (e.key === "ArrowRight") {
      goToNext();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="flex items-center text-purple-400 hover:text-purple-300 text-sm font-medium">
          <Eye className="h-4 w-4 mr-1" />
          <span>{triggerLabel}</span>
        </button>
      </DialogTrigger>
      
      <DialogContent 
        className="bg-black border-gray-800 p-0 w-full max-w-4xl md:h-[80vh] flex flex-col"
        onKeyDown={handleKeyDown}
      >
        <DialogHeader className="p-4 md:p-6 flex-shrink-0">
          <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
          <DialogDescription className="text-gray-300">
            {description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="relative flex-grow flex flex-col">
          {/* Image counter */}
          <div className="absolute top-2 right-4 z-10 bg-black/60 px-3 py-1 rounded-full text-xs">
            {currentIndex + 1} / {images.length}
          </div>
          
          {/* Main viewer area */}
          <div className="flex-grow relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <img
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  className="max-h-full max-w-full object-contain"
                />
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation buttons */}
            <button 
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 rounded-full p-2 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button 
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 rounded-full p-2 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
          
          {/* Caption and navigation dots */}
          <div className="p-4 md:p-6 bg-black border-t border-gray-800/50">
            <p className="text-center text-gray-300 mb-4">{images[currentIndex].caption}</p>
            
            <div className="flex justify-center gap-1.5">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentIndex ? "bg-white scale-125" : "bg-gray-600 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BeforeAfterImageViewer;
