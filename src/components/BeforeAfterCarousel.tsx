import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence } from "framer-motion";

interface BeforeAfterImage {
  src: string;
  alt: string;
  treatment: string;
  description?: string;
}

const beforeAfterImages: BeforeAfterImage[] = [
  {
    src: "/lovable-uploads/04ac4a20-e938-4966-8d5b-cdba7b58908f.png",
    alt: "Microneedling treatment progression showing during, day 1, and day 3 results",
    treatment: "Microneedling",
    description: "Progressive healing and skin improvement over 3 days"
  },
  {
    src: "/lovable-uploads/cbb65a65-f2dc-4d3b-a5ae-7f2596f129f4.png",
    alt: "Face shape transformation showing square to oval facial contouring results",
    treatment: "Facial Contouring",
    description: "Reshaping facial structure for enhanced natural beauty"
  },
  {
    src: "/lovable-uploads/def5f295-bb56-4f08-9271-7e38269dffc8.png",
    alt: "Dorsal nose correction before and after non-surgical nose job",
    treatment: "Non-Surgical Nose Job",
    description: "Precise dorsal correction for improved profile"
  },
  {
    src: "/lovable-uploads/c5117df6-2f03-4565-8ede-2a7fa83bb2fe.png",
    alt: "Cosmedocs skin treatment results showing May to June improvement",
    treatment: "Skin Rejuvenation",
    description: "Professional skin treatment for enhanced clarity and texture"
  },
  {
    src: "/lovable-uploads/729455dc-8926-4c98-9c54-10530134f7f3.png",
    alt: "Lip enhancement before and after dermal filler treatment",
    treatment: "Lip Enhancement",
    description: "Natural lip augmentation with dermal fillers"
  },
  {
    src: "/lovable-uploads/e68774ae-6fe1-4c15-82ec-a93cab43e697.png",
    alt: "Nose reshaping before and after non-surgical rhinoplasty",
    treatment: "Non-Surgical Rhinoplasty",
    description: "Subtle nose refinement without surgery"
  },
  {
    src: "/lovable-uploads/062e112b-382a-4f69-a659-07824545dd80.png",
    alt: "Facial rejuvenation before and after treatment results",
    treatment: "Facial Rejuvenation",
    description: "Comprehensive facial enhancement for natural results"
  }
];

const BeforeAfterCarousel = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImageIndex(null);
  };

  const goToNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % beforeAfterImages.length);
    }
  };

  const goToPrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === 0 ? beforeAfterImages.length - 1 : selectedImageIndex - 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      goToPrevious();
    } else if (e.key === "ArrowRight") {
      goToNext();
    } else if (e.key === "Escape") {
      closeModal();
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#0A0A0A] to-black" aria-labelledby="before-after-heading">
      <div className="page-container">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 id="before-after-heading" className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Transformation Gallery
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Witness the artistry of invisible transformation. Our before and after gallery showcases 
              the subtle yet profound changes achieved through expert aesthetic medicine.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {beforeAfterImages.map((image, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full">
                      <div 
                        className="aspect-square overflow-hidden rounded-xl mb-4 cursor-pointer group relative"
                        onClick={() => openModal(index)}
                      >
                        <img 
                          src={image.src} 
                          alt={image.alt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {image.treatment}
                        </h3>
                        {image.description && (
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {image.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12 bg-white/10 hover:bg-white/20 border-2 border-gray-600 text-white" />
              <CarouselNext className="hidden md:flex -right-12 bg-white/10 hover:bg-white/20 border-2 border-gray-600 text-white" />
            </Carousel>
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-sm italic mb-4">
              "Aesthetic medicine by Cosmedocs is minimal. Quiet, not loud. Invisible, not exaggerated."
            </p>
            <a 
              href="https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 rounded-full px-8 py-3 inline-flex items-center justify-center text-sm font-medium transition-all duration-300"
            >
              View More Results
            </a>
          </motion.div>
        </div>
      </div>

      {/* Image Modal Dialog */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent 
          className="bg-black border-gray-800 p-0 sm:max-w-4xl w-[95vw] max-h-[90vh] flex flex-col"
          onKeyDown={handleKeyDown}
        >
          {selectedImageIndex !== null && (
            <>
              <div className="relative flex-grow flex flex-col">
                {/* Image counter */}
                <div className="absolute top-4 right-6 z-10 bg-black/60 px-3 py-1 rounded-full text-sm text-white">
                  {selectedImageIndex + 1} / {beforeAfterImages.length}
                </div>
                
                {/* Main image viewer */}
                <div className="flex-grow relative overflow-hidden h-[70vh]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedImageIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex items-center justify-center p-4"
                    >
                      <img
                        src={beforeAfterImages[selectedImageIndex].src}
                        alt={beforeAfterImages[selectedImageIndex].alt}
                        className="max-h-full max-w-full object-contain"
                      />
                    </motion.div>
                  </AnimatePresence>
                  
                  {/* Navigation buttons */}
                  <button 
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 rounded-full p-3 transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-6 w-6 text-white" />
                  </button>
                  
                  <button 
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 rounded-full p-3 transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-6 w-6 text-white" />
                  </button>
                </div>
                
                {/* Caption */}
                <div className="p-6 bg-black border-t border-gray-800/50 text-center">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {beforeAfterImages[selectedImageIndex].treatment}
                  </h3>
                  {beforeAfterImages[selectedImageIndex].description && (
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {beforeAfterImages[selectedImageIndex].description}
                    </p>
                  )}
                  
                  {/* Dot navigation */}
                  <div className="flex justify-center gap-2 flex-wrap">
                    {beforeAfterImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImageIndex(idx)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          idx === selectedImageIndex ? "bg-white scale-110" : "bg-gray-600 hover:bg-gray-400"
                        }`}
                        aria-label={`Go to image ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default BeforeAfterCarousel;