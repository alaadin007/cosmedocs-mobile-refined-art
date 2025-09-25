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
      { name: "Masseter (Jawline Slimming)", link: "/treatments" }
    ],
    color: "from-yellow-400 to-orange-500"
  },
  {
    name: "Dermal Fillers",
    icon: Heart,
    treatments: [
      { name: "Lip Fillers", link: "/treatments" },
      { name: "Non Surgical Nose Job", link: "/treatments" },
      { name: "Dermal Filler Makeover", link: "/treatments" }
    ],
    color: "from-pink-400 to-red-500"
  },
  {
    name: "Skin Treatments",
    icon: Sparkles,
    treatments: [
      { name: "Chemical Peels", link: "/treatments" },
      { name: "Microneedling", link: "/treatments" },
      { name: "PRP Vampire Facelift", link: "/treatments" }
    ],
    color: "from-blue-400 to-cyan-500"
  },
  {
    name: "Sweat-Tox",
    icon: Crown,
    treatments: [
      { name: "Underarms Advanced", link: "/treatments" },
      { name: "Palms", link: "/treatments" },
      { name: "Forehead", link: "/treatments" }
    ],
    color: "from-purple-400 to-indigo-500"
  },
  {
    name: "Skin Boosters",
    icon: Droplets,
    treatments: [
      { name: "Profhilo", link: "/treatments" },
      { name: "Polynucleotides", link: "/treatments" },
      { name: "Redensity 1", link: "/treatments" }
    ],
    color: "from-green-400 to-teal-500"
  },
  {
    name: "Hair & Skin Medicine",
    icon: Lightbulb,
    treatments: [
      { name: "Acne Treatment", link: "/treatments" },
      { name: "Facial Thread Veins", link: "/treatments" },
      { name: "Leg Veins Treatment", link: "/treatments" }
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
          className="fixed inset-0 z-[100] flex items-center justify-center p-1 md:p-4"
          onClick={onClose}
        >
          {/* Enhanced Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-lg" />
          
          {/* Mobile-Optimized Menu Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateX: 15 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotateX: 15 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-full max-w-7xl h-[98vh] md:h-[88vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Glass background */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/40 backdrop-blur-2xl rounded-lg md:rounded-3xl border border-amber-400/30 shadow-2xl" />
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-amber-400/5 rounded-lg md:rounded-3xl" />
            
            {/* Gold accent lines */}
            <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-60" />
            <div className="absolute bottom-0 left-1/3 right-1/3 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-60" />
            
            <div className="relative p-2 md:p-4 h-full flex flex-col">
              {/* Compact Header */}
              <div className="flex items-center justify-between mb-2 md:mb-4 flex-shrink-0">
                <div>
                  <h2 className="text-lg md:text-2xl font-bold bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent">
                    Menu & Contact
                  </h2>
                  <p className="text-amber-400/80 text-xs">Your gateway to aesthetic excellence</p>
                </div>
                <Button
                  onClick={onClose}
                  variant="ghost"
                  size="icon"
                  className="text-white/70 hover:text-white hover:bg-amber-400/20 rounded-full border border-amber-400/20 backdrop-blur-sm transition-all duration-300 flex-shrink-0 h-8 w-8 md:h-10 md:w-10"
                >
                  <X className="h-4 w-4 md:h-5 md:w-5" />
                </Button>
              </div>

              {/* Main Content Grid - Optimized for mobile */}
              <div className="grid lg:grid-cols-3 gap-2 md:gap-4 flex-1 min-h-0">
                {/* Left Column: Navigation - Scrollable on mobile */}
                <div className="flex flex-col min-h-0">
                  <div className="space-y-1 overflow-y-auto flex-1 pr-1">
                    {groups.map((group, groupIndex) => (
                      <motion.div
                        key={group.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: groupIndex * 0.1, duration: 0.3 }}
                        className="bg-gradient-to-br from-white/5 to-amber-400/5 backdrop-blur-sm rounded-lg p-2 border border-amber-400/20"
                      >
                        <div className="flex items-center gap-1 md:gap-2 mb-1">
                          <div className="w-4 h-4 md:w-5 md:h-5 bg-gradient-to-br from-amber-400 to-amber-500 rounded-md flex items-center justify-center">
                            <Sparkles className="h-2 w-2 md:h-3 md:w-3 text-black" />
                          </div>
                          <h3 className="text-xs md:text-sm font-bold text-amber-400">{group.title}</h3>
                        </div>
                        
                        <div className="space-y-0.5">
                          {group.options.map((option, itemIndex) => (
                            <motion.button
                              key={option.label}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: (groupIndex * 0.1) + (itemIndex * 0.05), duration: 0.2 }}
                              whileHover={{ x: 2, scale: 1.01 }}
                              whileTap={{ scale: 0.98 }}
                              className="w-full text-left flex items-center gap-1 md:gap-2 px-1 py-1 rounded-md bg-white/5 hover:bg-amber-400/10 border border-transparent hover:border-amber-400/20 transition-all duration-300 group text-white/80 hover:text-white"
                              onClick={option.action}
                            >
                              <div className="w-4 h-4 md:w-5 md:h-5 bg-gradient-to-br from-white/10 to-white/5 rounded-md flex items-center justify-center border border-white/10 group-hover:border-amber-400/30 transition-all duration-300 flex-shrink-0">
                                <option.icon className="h-2 w-2 md:h-3 md:w-3 text-amber-400/80 group-hover:text-amber-400 transition-colors duration-300" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="font-medium group-hover:text-amber-100 transition-colors duration-300 truncate text-xs md:text-sm">{option.label}</div>
                                {option.subtitle && (
                                  <div className="text-xs text-white/50 group-hover:text-amber-400/70 transition-colors duration-300 truncate">{option.subtitle}</div>
                                )}
                              </div>
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Right Columns: Treatment Categories */}
                <div className="lg:col-span-2 min-h-0 flex flex-col">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="bg-gradient-to-br from-white/5 to-amber-400/5 backdrop-blur-sm rounded-lg border border-amber-400/20 flex-1 flex flex-col min-h-0 p-2"
                  >
                    <div className="flex items-center gap-1 md:gap-2 mb-2 flex-shrink-0">
                      <div className="w-4 h-4 md:w-5 md:h-5 bg-gradient-to-br from-amber-400 to-amber-500 rounded-md flex items-center justify-center">
                        <Sparkles className="h-2 w-2 md:h-3 md:w-3 text-black" />
                      </div>
                      <h3 className="text-sm md:text-lg font-bold text-white">Treatment Categories</h3>
                      <div className="flex-1 h-px bg-gradient-to-r from-amber-400/40 via-transparent to-transparent"></div>
                    </div>
                    
                    <div className="grid grid-cols-2 xl:grid-cols-3 gap-1 md:gap-2 flex-1 overflow-y-auto pr-1">
                      {treatmentCategories.map((category, index) => (
                        <motion.div
                          key={category.name}
                          initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                          transition={{ delay: 0.3 + (index * 0.1), duration: 0.3 }}
                          whileHover={{ scale: 1.02, y: -1 }}
                          className="group cursor-pointer"
                          onClick={() => window.location.href = "/treatments"}
                        >
                          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-md border border-white/10 hover:border-amber-400/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-amber-400/10 h-full flex flex-col p-2">
                            {/* Category Header */}
                            <div className="flex items-center gap-1 mb-1 flex-shrink-0">
                              <div className={`w-4 h-4 md:w-5 md:h-5 bg-gradient-to-br ${category.color} rounded-md flex items-center justify-center shadow-md`}>
                                <category.icon className="h-2 w-2 md:h-3 md:w-3 text-white" />
                              </div>
                              <h4 className="font-semibold text-white group-hover:text-amber-100 transition-colors duration-300 text-xs truncate">
                                {category.name}
                              </h4>
                            </div>
                            
                            <div className="space-y-0.5 flex-1 overflow-hidden">
                              {category.treatments.map((treatment, treatmentIndex) => (
                                <button 
                                  key={treatment.name}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    window.location.href = treatment.link;
                                  }}
                                  className="text-xs text-white/70 hover:text-amber-300 transition-colors duration-300 flex items-center gap-1 w-full text-left hover:translate-x-0.5 truncate"
                                >
                                  <div className="w-1 h-1 bg-amber-400 rounded-full opacity-60 flex-shrink-0"></div>
                                  <span className="truncate">{treatment.name}</span>
                                </button>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Compact CTA */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.3 }}
                      className="mt-2 text-center flex-shrink-0"
                    >
                      <button 
                        onClick={() => window.open("https://med.as.me/harleystreet", "_blank")}
                        className="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-black font-semibold py-2 px-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-amber-400/30 text-xs md:text-sm"
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