import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Star, Heart, Zap, Crown, Droplets, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactOption {
  icon: any;
  label: string;
  action: () => void;
  subtitle?: string;
}

interface OptionGroup {
  title: string;
  options: ContactOption[];
}

interface LiquidGlassContactMenuProps {
  isOpen: boolean;
  onClose: () => void;
  groups: OptionGroup[];
}

// Treatment categories data
const treatmentCategories = [
  {
    name: "Botox",
    icon: Zap,
    treatments: [
      { name: "Face Botox (1-3 Areas)", link: "/treatments" },
      { name: "Nefertiti Face Lift", link: "/treatments" },
      { name: "Masseter (Jawline Slimming)", link: "/treatments" },
      { name: "Migraines / Headaches", link: "/treatments" }
    ],
    color: "from-yellow-400 to-orange-500"
  },
  {
    name: "Dermal Fillers",
    icon: Heart,
    treatments: [
      { name: "Lip Fillers", link: "/treatments" },
      { name: "Non Surgical Nose Job", link: "/treatments" },
      { name: "Dermal Filler Makeover", link: "/treatments" },
      { name: "Cheek Volume", link: "/treatments" }
    ],
    color: "from-pink-400 to-red-500"
  },
  {
    name: "Skin Treatments",
    icon: Sparkles,
    treatments: [
      { name: "Chemical Peels", link: "/treatments" },
      { name: "Microneedling", link: "/treatments" },
      { name: "PRP Vampire Facelift", link: "/treatments" },
      { name: "IPL/Laser Hair Removal", link: "/treatments" }
    ],
    color: "from-blue-400 to-cyan-500"
  },
  {
    name: "Sweat-Tox",
    icon: Crown,
    treatments: [
      { name: "Underarms Advanced", link: "/treatments" },
      { name: "Palms", link: "/treatments" },
      { name: "Forehead", link: "/treatments" },
      { name: "Scalp", link: "/treatments" }
    ],
    color: "from-purple-400 to-indigo-500"
  },
  {
    name: "Skin Boosters",
    icon: Droplets,
    treatments: [
      { name: "Profhilo", link: "/treatments" },
      { name: "Polynucleotides", link: "/treatments" },
      { name: "Redensity 1", link: "/treatments" },
      { name: "Jalupro", link: "/treatments" }
    ],
    color: "from-green-400 to-teal-500"
  },
  {
    name: "Hair & Skin Medicine",
    icon: Lightbulb,
    treatments: [
      { name: "Acne Treatment", link: "/treatments" },
      { name: "Facial Thread Veins", link: "/treatments" },
      { name: "Leg Veins Treatment", link: "/treatments" },
      { name: "Skin Tag Removal", link: "/treatments" }
    ],
    color: "from-orange-400 to-red-500"
  }
];

export default function LiquidGlassContactMenu({ isOpen, onClose, groups }: LiquidGlassContactMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-4"
          onClick={onClose}
        >
          {/* Enhanced Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-lg" />
          
          {/* Redesigned Menu Container - Fixed Height */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateX: 15 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotateX: 15 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-full max-w-7xl h-[95vh] md:h-[85vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Luxurious glass background with gold accents */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/40 backdrop-blur-2xl rounded-2xl md:rounded-3xl border border-amber-400/30 shadow-2xl" />
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-amber-400/5 rounded-2xl md:rounded-3xl" />
            
            {/* Gold accent lines */}
            <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-60" />
            <div className="absolute bottom-0 left-1/3 right-1/3 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-60" />
            
            <div className="relative p-4 md:p-6 h-full flex flex-col">
              {/* Elegant Header */}
              <div className="flex items-center justify-between mb-4 md:mb-6 flex-shrink-0">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent">
                    Menu & Contact
                  </h2>
                  <p className="text-amber-400/80 text-xs md:text-sm mt-1">Your gateway to aesthetic excellence</p>
                </div>
                <Button
                  onClick={onClose}
                  variant="ghost"
                  size="icon"
                  className="text-white/70 hover:text-white hover:bg-amber-400/20 rounded-full border border-amber-400/20 backdrop-blur-sm transition-all duration-300 flex-shrink-0"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Main Content Grid - Fits in viewport */}
              <div className="grid lg:grid-cols-3 gap-4 md:gap-6 flex-1 min-h-0 overflow-hidden">
                {/* Left Column: Navigation */}
                <div className="space-y-2 md:space-y-3 overflow-y-auto lg:overflow-visible">
                  {groups.map((group, groupIndex) => (
                    <motion.div
                      key={group.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: groupIndex * 0.1, duration: 0.3 }}
                      className="bg-gradient-to-br from-white/5 to-amber-400/5 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-amber-400/20"
                    >
                      <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                        <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-amber-400 to-amber-500 rounded-lg flex items-center justify-center">
                          <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-black" />
                        </div>
                        <h3 className="text-sm md:text-lg font-bold text-amber-400">{group.title}</h3>
                      </div>
                      
                      <div className="space-y-1 md:space-y-2">
                        {group.options.map((option, itemIndex) => (
                          <motion.button
                            key={option.label}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: (groupIndex * 0.1) + (itemIndex * 0.05), duration: 0.2 }}
                            whileHover={{ x: 5, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full text-left flex items-center gap-2 md:gap-3 px-2 md:px-3 py-2 md:py-3 rounded-lg bg-white/5 hover:bg-amber-400/10 border border-transparent hover:border-amber-400/20 transition-all duration-300 group text-white/80 hover:text-white text-xs md:text-sm"
                            onClick={option.action}
                          >
                            <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-white/10 to-white/5 rounded-lg flex items-center justify-center border border-white/10 group-hover:border-amber-400/30 transition-all duration-300">
                              <option.icon className="h-3 w-3 md:h-4 md:w-4 text-amber-400/80 group-hover:text-amber-400 transition-colors duration-300" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium group-hover:text-amber-100 transition-colors duration-300 truncate">{option.label}</div>
                              {option.subtitle && (
                                <div className="text-xs text-white/50 group-hover:text-amber-400/70 transition-colors duration-300 truncate">{option.subtitle}</div>
                              )}
                            </div>
                            <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-transparent via-amber-400/0 to-transparent group-hover:via-amber-400/60 transition-all duration-300 rounded-full flex-shrink-0"></div>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Right Columns: Treatment Categories */}
                <div className="lg:col-span-2 min-h-0 flex flex-col">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="bg-gradient-to-br from-white/5 to-amber-400/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 border border-amber-400/20 flex-1 flex flex-col min-h-0"
                  >
                    <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 flex-shrink-0">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-amber-400 to-amber-500 rounded-lg flex items-center justify-center">
                        <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-black" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-white">Treatment Categories</h3>
                      <div className="flex-1 h-px bg-gradient-to-r from-amber-400/40 via-transparent to-transparent"></div>
                    </div>
                    
                    <div className="grid grid-cols-2 xl:grid-cols-3 gap-2 md:gap-3 flex-1 overflow-y-auto">
                      {treatmentCategories.map((category, index) => (
                        <motion.div
                          key={category.name}
                          initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                          transition={{ delay: 0.3 + (index * 0.1), duration: 0.3 }}
                          whileHover={{ scale: 1.03, y: -2 }}
                          className="group cursor-pointer"
                          onClick={() => window.location.href = "/treatments"}
                        >
                          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-lg md:rounded-xl p-2 md:p-3 border border-white/10 hover:border-amber-400/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-amber-400/10 h-full flex flex-col">
                            {/* Category Header */}
                            <div className="flex items-center gap-2 mb-2 md:mb-3 flex-shrink-0">
                              <div className={`w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center shadow-lg`}>
                                <category.icon className="h-3 w-3 md:h-4 md:w-4 text-white" />
                              </div>
                              <h4 className="font-semibold text-white group-hover:text-amber-100 transition-colors duration-300 text-xs md:text-sm truncate">
                                {category.name}
                              </h4>
                            </div>
                            
                            <div className="space-y-1 flex-1 overflow-hidden">
                              {category.treatments.slice(0, 4).map((treatment, treatmentIndex) => (
                                <button 
                                  key={treatment.name}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    window.location.href = treatment.link;
                                  }}
                                  className="text-xs text-white/70 hover:text-amber-300 transition-colors duration-300 flex items-center gap-1 md:gap-2 w-full text-left hover:translate-x-1 truncate"
                                >
                                  <div className="w-1 h-1 bg-amber-400 rounded-full opacity-60 flex-shrink-0"></div>
                                  <span className="truncate">{treatment.name}</span>
                                </button>
                              ))}
                              {category.treatments.length > 4 && (
                                <div className="text-xs text-amber-400/60 text-center pt-1">
                                  +{category.treatments.length - 4} more
                                </div>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Book Consultation CTA - Compact */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.3 }}
                      className="mt-3 md:mt-4 text-center flex-shrink-0"
                    >
                      <button 
                        onClick={() => window.open("https://med.as.me/harleystreet", "_blank")}
                        className="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-black font-semibold py-2 md:py-3 px-4 md:px-8 rounded-lg md:rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-amber-400/30 text-sm md:text-base"
                      >
                        👑 Book Your Consultation
                      </button>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}