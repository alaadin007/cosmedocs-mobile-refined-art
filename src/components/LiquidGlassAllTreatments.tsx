
import { motion, AnimatePresence } from "framer-motion";
import { X, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Treatment {
  name: string;
  isPopular?: boolean;
}

interface LiquidGlassAllTreatmentsProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LiquidGlassAllTreatments({ isOpen, onClose }: LiquidGlassAllTreatmentsProps) {
  const treatments: Treatment[] = [
    { name: "Botox", isPopular: true },
    { name: "Sweat-Tox", isPopular: true },
    { name: "Dermal Fillers", isPopular: true },
    { name: "HA Makeover", isPopular: true },
    { name: "Skin Boosters", isPopular: true },
    { name: "Skin & Hair Medicine", isPopular: true },
    { name: "Lip Fillers" },
    { name: "Cheek Fillers" },
    { name: "Non-Surgical Nose Job" },
    { name: "Jawline Contouring" },
    { name: "Temple Fillers" },
    { name: "Tear Trough Fillers" },
    { name: "Chin Enhancement" },
    { name: "Neck Botox" },
    { name: "Gummy Smile Treatment" },
    { name: "Smoker's Lines" },
    { name: "Crow's Feet Treatment" },
    { name: "Forehead Lines" },
    { name: "Frown Lines" },
    { name: "Bunny Lines" },
    { name: "Lip Flip" },
    { name: "Dimple Creation" },
    { name: "Facial Slimming" },
    { name: "Bruxism Treatment" },
    { name: "Hyperhidrosis Treatment" },
    { name: "Migraine Treatment" },
    { name: "Thread Lifts" },
    { name: "PDO Threads" },
    { name: "Mesotherapy" },
    { name: "Vampire Facial" },
    { name: "Chemical Peels" },
    { name: "Microneedling" },
    { name: "LED Light Therapy" },
    { name: "Radiofrequency Treatment" }
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
          
          {/* All Treatments Container */}
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
                  <h2 className="text-2xl font-bold text-white">All Treatments</h2>
                  <p className="text-gray-300 text-sm mt-1">Our comprehensive range of aesthetic treatments</p>
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
              
              {/* Popular Treatments Section */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-2" />
                  Popular Treatments
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {treatments.filter(t => t.isPopular).map((treatment, index) => (
                    <motion.button
                      key={treatment.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.2 }}
                      className="bg-gradient-to-r from-yellow-600/20 to-yellow-500/20 hover:from-yellow-600/30 hover:to-yellow-500/30 border border-yellow-500/30 text-white rounded-xl px-4 py-3 text-left transition-all duration-300 hover:scale-105"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{treatment.name}</span>
                        <Star className="h-4 w-4 text-yellow-400" />
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
              
              {/* All Other Treatments */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">All Treatments</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {treatments.filter(t => !t.isPopular).map((treatment, index) => (
                    <motion.button
                      key={treatment.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: (index + 6) * 0.05, duration: 0.2 }}
                      className="bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl px-4 py-3 text-left transition-all duration-300 hover:scale-105"
                    >
                      <span className="font-medium">{treatment.name}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
              
              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <p className="text-white/60 text-sm mb-4">
                  Our aesthetics is invisible art • Bold • Natural • Always Your Way
                </p>
                <Button className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm rounded-full px-8 py-3 transition-all duration-300 hover:scale-105 border border-white/20">
                  Do something here
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
