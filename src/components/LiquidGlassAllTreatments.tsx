
import { motion, AnimatePresence } from "framer-motion";
import { X, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Treatment {
  name: string;
  price?: string;
  isPopular?: boolean;
  link?: string;
}

interface TreatmentCategory {
  name: string;
  treatments: Treatment[];
  isPopular?: boolean;
}

interface LiquidGlassAllTreatmentsProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LiquidGlassAllTreatments({ isOpen, onClose }: LiquidGlassAllTreatmentsProps) {
  const treatmentCategories: TreatmentCategory[] = [
    {
      name: "Botox",
      isPopular: true,
      treatments: [
        { name: "Face Botox (1-3 Areas)", price: "£175-£350", isPopular: true, link: "/face-botox-areas" },
        { name: "Nefertiti Face Lift", price: "£300", link: "/nefertiti-botox-facelift" },
        { name: "Masseter (Jawline Slimming)", price: "£350" },
        { name: "Full Face Natural Botox", price: "£500" },
        { name: "Migraines / Headaches", price: "£450-£550" },
        { name: "Trigger Point Botox", price: "£350-£550", link: "/trigger-point-botox" },
        { name: "Full Barbie Botox", price: "£450" },
        { name: "Lip Flip", price: "£175" },
        { name: "Gummy Smile", price: "£50" },
        { name: "Bunny Lines", price: "£50" }
      ]
    },
    {
      name: "Sweat-Tox",
      isPopular: true,
      treatments: [
        { name: "Underarms Advanced", price: "£550" },
        { name: "Palms", price: "£550" },
        { name: "Forehead", price: "£350" },
        { name: "Scalp", price: "£600" },
        { name: "Nose", price: "£200" },
        { name: "Cheeks", price: "£200" }
      ]
    },
    {
      name: "Dermal Fillers",
      isPopular: true,
      treatments: [
        { name: "Dermal Filler Makeover", price: "From £350", isPopular: true, link: "/dermal-filler-makeover" },
        { name: "Lip Fillers (0.5ml-1.5ml)", price: "£300-£400", isPopular: true, link: "/lip-fillers" },
        { name: "Non Surgical Nose Job", price: "£450", isPopular: true, link: "/non-surgical-nose-job" },
        { name: "Cheek Volume", price: "£350/ml" },
        { name: "Jawline Contouring", price: "£350/ml" },
        { name: "Tear Trough", price: "£425" },
        { name: "Marionette Lines", price: "£325/ml" },
        { name: "Nasolabial Folds", price: "£325/ml" },
        { name: "Temple Fillers", price: "£350/ml" },
        { name: "Forehead Filler", price: "£400" }
      ]
    },
    {
      name: "HA Makeover",
      isPopular: true,
      treatments: [
        { name: "HAMA 1 (3 Syringes)", price: "£1250" },
        { name: "HAMA 2 (4 Syringes)", price: "£1500" }
      ]
    },
    {
      name: "Skin Boosters",
      isPopular: true,
      treatments: [
        { name: "Profhilo", price: "£350", isPopular: true },
        { name: "Polynucleotides", price: "£300" },
        { name: "Redensity 1", price: "£250" },
        { name: "Jalupro", price: "£275" },
        { name: "Sunekos", price: "£275" }
      ]
    },
    {
      name: "Skin & Hair Medicine",
      isPopular: true,
      treatments: [
        { name: "Chemical Peels", price: "£125-£1000" },
        { name: "Microneedling", price: "£150" },
        { name: "PRP Vampire Facelift", price: "£500" },
        { name: "Acne Treatment", price: "POC" },
        { name: "Facial Thread Veins", price: "From £75" },
        { name: "Leg Veins Treatment", price: "£400 per leg" },
        { name: "Skin Tag Removal", price: "£100 for 5 tags" },
        { name: "IPL/Laser Hair Removal", price: "POC" }
      ]
    }
  ];

  const popularCategories = treatmentCategories.filter(cat => cat.isPopular);

  const TreatmentItem = ({ treatment, onClick }: { treatment: Treatment; onClick?: () => void }) => {
    const content = (
      <div className="flex justify-between items-center text-sm">
        <span className="text-gray-300">{treatment.name}</span>
        {treatment.price && (
          <span className="text-yellow-400 font-medium">{treatment.price}</span>
        )}
      </div>
    );

    if (treatment.link) {
      return (
        <Link 
          to={treatment.link} 
          onClick={onClick}
          className="block hover:bg-white/5 rounded px-2 py-1 transition-colors"
        >
          {content}
        </Link>
      );
    }

    return <div className="px-2 py-1">{content}</div>;
  };

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
            className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Liquid glass background */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xl rounded-3xl border border-white/20" />
            
            <div className="relative p-6 overflow-y-auto max-h-[90vh]">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-white">All Treatments</h2>
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
              
              {/* Popular Categories Grid */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-2" />
                  Popular Treatment Categories
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {popularCategories.map((category, index) => (
                    <motion.div
                      key={category.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      className="bg-gradient-to-r from-yellow-600/20 to-yellow-500/20 hover:from-yellow-600/30 hover:to-yellow-500/30 border border-yellow-500/30 rounded-xl p-4 transition-all duration-300 hover:scale-105"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-lg font-semibold text-white">{category.name}</h4>
                        <Star className="h-3 w-3 text-yellow-400" />
                      </div>
                      <div className="space-y-2">
                        {category.treatments.map((treatment, idx) => (
                          <TreatmentItem 
                            key={idx} 
                            treatment={treatment} 
                            onClick={onClose}
                          />
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <p className="text-white/60 text-sm mb-4">
                  Our aesthetics is invisible art • Bold • Natural • Always Your Way
                </p>
                <div className="space-x-4">
                  <Button 
                    onClick={() => window.open("https://med.as.me/harleystreet", "_blank")}
                    className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm rounded-full px-8 py-3 transition-all duration-300 hover:scale-105 border border-white/20"
                  >
                    Book Consultation
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
