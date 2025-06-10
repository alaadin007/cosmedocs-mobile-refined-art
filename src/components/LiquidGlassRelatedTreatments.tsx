
import { motion, AnimatePresence } from "framer-motion";
import { X, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Treatment {
  name: string;
  price: string;
  link: string;
}

interface LiquidGlassRelatedTreatmentsProps {
  isOpen: boolean;
  onClose: () => void;
  treatments: Treatment[];
  title?: string;
  description?: string;
}

export default function LiquidGlassRelatedTreatments({ 
  isOpen, 
  onClose, 
  treatments, 
  title = "Related Treatments",
  description = "Explore our comprehensive range of treatments"
}: LiquidGlassRelatedTreatmentsProps) {
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
                  <h2 className="text-3xl font-bold text-white">{title}</h2>
                  <p className="text-gray-300 text-sm mt-1">{description}</p>
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {treatments.map((treatment, index) => (
                  <motion.div
                    key={treatment.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      to={treatment.link}
                      className="block bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl p-4 transition-all duration-300 hover:scale-105 group"
                      onClick={onClose}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors">
                          {treatment.name}
                        </h4>
                        <Star className="h-4 w-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-yellow-400 font-bold text-lg">{treatment.price}</span>
                        <span className="text-xs text-gray-400 group-hover:text-white transition-colors">
                          Learn more →
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <p className="text-white/60 text-sm mb-4">
                  Our aesthetics is invisible art • Bold • Natural • Always Your Way
                </p>
                <div className="space-x-4">
                  <Button className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm rounded-full px-8 py-3 transition-all duration-300 hover:scale-105 border border-white/20">
                    Book Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm rounded-full px-8 py-3 transition-all duration-300 hover:scale-105"
                  >
                    View All Treatments
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
