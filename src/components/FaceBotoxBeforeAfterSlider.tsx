
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FaceBotoxBeforeAfterSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/lovable-uploads/b57cf4fb-6fcb-43ad-8206-aadce36036b2.png",
      caption: "Masseter Botox Reduction",
      description: "Jawline slimming and contouring with Botox"
    },
    {
      image: "/lovable-uploads/9e7063d9-df93-4dad-bc6b-9692172e8c1c.png", 
      caption: "Masseter Botox Reduction",
      description: "Natural jawline refinement results"
    },
    {
      image: "/lovable-uploads/3e86263c-d55f-4aae-ac44-09c206e146d7.png",
      caption: "Frown Lines Treatment with Botox",
      description: "Smooth forehead and reduced expression lines"
    },
    {
      image: "/lovable-uploads/dcdc58b4-6458-4a71-8dbb-1231fe5e2222.png",
      caption: "Forehead Lines Treated with Botox", 
      description: "Natural-looking forehead smoothing"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-12 bg-black">
      <div className="w-full">
        {/* Mobile: Slider */}
        <div className="md:hidden">
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div>
                      <img
                        src={slide.image}
                        alt={slide.caption}
                        className="w-full h-80 object-cover"
                      />
                      <div className="bg-black p-4 text-center">
                        <h3 className="text-white font-semibold text-sm mb-1">
                          {slide.caption}
                        </h3>
                        <p className="text-gray-300 text-xs">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            
            {/* Navigation buttons */}
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full z-10"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full z-10"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            
            {/* Dots indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? "bg-white" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: Row layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <img
                src={slide.image}
                alt={slide.caption}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="bg-black p-4 text-center">
                <h3 className="text-white font-semibold text-sm mb-1">
                  {slide.caption}
                </h3>
                <p className="text-gray-300 text-xs">
                  {slide.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaceBotoxBeforeAfterSlider;
