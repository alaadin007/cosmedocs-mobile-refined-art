
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
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
    <section className="relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 z-10 pointer-events-none"></div>
      
      <div className="w-full">
        {/* Mobile: Slider */}
        <div className="md:hidden">
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0 relative">
                    <div className="relative group">
                      <img
                        src={slide.image}
                        alt={slide.caption}
                        className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            
            {/* Caption below image for mobile */}
            <div className="p-4 backdrop-blur-xl bg-white/10 border border-white/20 rounded-b-2xl text-center">
              <div className="flex items-center justify-center mb-2">
                <Sparkles className="h-4 w-4 text-cyan-400 mr-2" />
                <h3 className="text-white font-semibold text-sm bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                  {slides[currentSlide].caption}
                </h3>
              </div>
              <p className="text-gray-200 text-xs">
                {slides[currentSlide].description}
              </p>
            </div>
            
            {/* Enhanced navigation buttons */}
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-sm hover:bg-black/50 text-white rounded-full z-20 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-sm hover:bg-black/50 text-white rounded-full z-20 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            
            {/* Enhanced dots indicator */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex justify-center space-x-2 z-20">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? "bg-gradient-to-r from-cyan-400 to-purple-400 w-6" 
                      : "bg-white/30 hover:bg-white/50"
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
              className="group relative overflow-hidden"
            >
              <div className="relative">
                <img
                  src={slide.image}
                  alt={slide.caption}
                  className="w-full h-80 object-cover transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {/* Glowing border effect on hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400/50 transition-colors duration-300"></div>
              </div>
              
              {/* Caption below image for desktop */}
              <div className="backdrop-blur-xl bg-black/40 border-t border-white/10 p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <Sparkles className="h-4 w-4 text-cyan-400 mr-2" />
                  <h3 className="text-white font-semibold text-sm bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                    {slide.caption}
                  </h3>
                </div>
                <p className="text-gray-200 text-xs">
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
