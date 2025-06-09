
import { motion, AnimatePresence } from "framer-motion";
import { X, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface Treatment {
  name: string;
  price: string;
  route?: string;
  description: string;
}

interface FaceBotoxRelatedTreatmentsProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FaceBotoxRelatedTreatments({ isOpen, onClose }: FaceBotoxRelatedTreatmentsProps) {
  const navigate = useNavigate();

  const handleTreatmentClick = (treatment: Treatment) => {
    if (treatment.route) {
      onClose();
      navigate(treatment.route);
    }
  };

  const relatedTreatments: Treatment[] = [
    {
      name: "Nefertiti Face Lift",
      price: "£300",
      route: "/nefertiti-botox-facelift",
      description: "Advanced Botox technique for jawline definition and neck smoothing"
    },
    {
      name: "Masseter (Jawline Slimming)",
      price: "£350",
      description: "Botox injections to slim and contour the jawline by relaxing jaw muscles"
    },
    {
      name: "Full Face Natural Botox",
      price: "£500",
      description: "Comprehensive treatment targeting multiple facial areas for overall rejuvenation"
    },
    {
      name: "Migraines / Headaches",
      price: "£450-£550",
      description: "Therapeutic Botox treatment for chronic migraine and tension headache relief"
    },
    {
      name: "Trigger Point Botox",
      price: "£350-£550",
      route: "/trigger-point-botox",
      description: "Targeted treatment for muscle tension and pain relief in specific trigger points"
    },
    {
      name: "Full Barbie Botox",
      price: "£450",
      description: "Comprehensive aesthetic treatment for a smooth, youthful 'Barbie-like' appearance"
    },
    {
      name: "Lip Flip",
      price: "£175",
      description: "Subtle Botox technique to enhance lip appearance and create a fuller look"
    },
    {
      name: "Gummy Smile",
      price: "£50",
      description: "Botox treatment to reduce excessive gum display when smiling"
    },
    {
      name: "Bunny Lines",
      price: "£50",
      description: "Treatment for fine lines that appear on the sides of the nose when smiling"
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          
          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Liquid glass background */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xl rounded-3xl border border-white/20" />
            
            <div className="relative p-6 overflow-y-auto max-h-[90vh]">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                    <Star className="h-6 w-6 text-yellow-400 mr-3" />
                    Related Botox Treatments
                  </h2>
                  <p className="text-gray-300 text-sm mt-1">
                    Explore our comprehensive range of advanced Botox procedures
                  </p>
                </div>
                <Button
                  onClick={onClose}
                  variant="ghost"
                  size="icon"
                  className="text-white/70 hover:text-white hover:bg-white/10 rounded-full"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              {/* Treatments Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedTreatments.map((treatment, index) => (
                  <motion.div
                    key={treatment.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className={`bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-all duration-300 hover:scale-105 ${
                      treatment.route ? 'cursor-pointer' : ''
                    }`}
                    onClick={() => handleTreatmentClick(treatment)}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-sm font-semibold text-white leading-tight">
                        {treatment.name}
                      </h3>
                      <span className="text-yellow-400 font-medium text-sm ml-2 flex-shrink-0">
                        {treatment.price}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 text-xs leading-relaxed">
                      {treatment.description}
                    </p>
                    
                    {treatment.route && (
                      <div className="mt-3 text-xs text-yellow-300 opacity-70">
                        Click to learn more →
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
              
              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <p className="text-white/60 text-sm mb-4">
                  Bold • Natural • Always Your Way
                </p>
                <Button className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm rounded-full px-8 py-3 transition-all duration-300 hover:scale-105 border border-white/20">
                  Book Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
