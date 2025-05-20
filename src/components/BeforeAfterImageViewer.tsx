
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollArea } from "./ui/scroll-area";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "./ui/button";

interface BeforeAfterImage {
  src: string;
  alt: string;
  caption: string | JSX.Element;  // Updated to accept JSX.Element
}

interface BeforeAfterImageViewerProps {
  images: BeforeAfterImage[];
  triggerLabel?: string;
  title?: string;
  description?: string;
  className?: string;
}

const BeforeAfterImageViewer = ({
  images,
  triggerLabel = "See B/A",
  title = "Before & After",
  description = "Results achieved with our premium treatments",
  className = ""
}: BeforeAfterImageViewerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

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
        <button className={`flex items-center text-purple-400 hover:text-purple-300 text-sm font-medium ${className}`}>
          <Eye className="h-4 w-4 mr-1" />
          <span>{triggerLabel}</span>
        </button>
      </DialogTrigger>
      
      <DialogContent 
        className="bg-black border-gray-800 p-0 sm:max-w-md md:max-w-lg lg:max-w-2xl w-[95vw] md:h-auto max-h-[85vh] flex flex-col"
        onKeyDown={handleKeyDown}
      >
        <DialogHeader className="p-4 flex-shrink-0">
          <DialogTitle className="text-xl md:text-2xl font-bold">{title}</DialogTitle>
          <DialogDescription className="text-gray-300 text-sm">
            {description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="relative flex-grow flex flex-col">
          {/* Image counter */}
          <div className="absolute top-2 right-4 z-10 bg-black/60 px-3 py-1 rounded-full text-xs">
            {currentIndex + 1} / {images.length}
          </div>
          
          {/* Main viewer area */}
          <div className="flex-grow relative overflow-hidden h-[40vh] md:h-[50vh]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center p-2"
              >
                <img
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  className="max-h-full max-w-full object-contain"
                />
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation buttons - larger touch targets for mobile */}
            <button 
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 rounded-r-full p-3 h-12 w-12 flex items-center justify-center transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button 
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 rounded-l-full p-3 h-12 w-12 flex items-center justify-center transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
          
          {/* Caption */}
          <div className="p-4 bg-black border-t border-gray-800/50 text-center">
            <p className="text-gray-200 text-sm md:text-base mb-4">{images[currentIndex].caption}</p>
            
            {/* Simplified dot navigation */}
            <div className="flex justify-center gap-2 flex-wrap">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === currentIndex ? "bg-white scale-110" : "bg-gray-600 hover:bg-gray-400"
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
