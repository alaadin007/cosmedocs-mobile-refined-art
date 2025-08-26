
import { motion, AnimatePresence } from "framer-motion";
import { X, LucideIcon, Sparkles, Zap, Heart, Eye, Crown, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactOption {
  icon: LucideIcon;
  label: string;
  action: () => void;
  subtitle?: string;
}

interface TreatmentCategory {
  name: string;
  icon: LucideIcon;
  treatments: string[];
  color: string;
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

const treatmentCategories: TreatmentCategory[] = [
  {
    name: "Botox",
    icon: Zap,
    treatments: ["Face Botox", "Masseter", "Migraines", "Hyperhidrosis"],
    color: "from-amber-400 to-yellow-500"
  },
  {
    name: "Dermal Fillers",
    icon: Heart,
    treatments: ["Lips", "Cheeks", "Jawline", "Non-Surgical Rhinoplasty"],
    color: "from-rose-400 to-pink-500"
  },
  {
    name: "Skin Treatments",
    icon: Sparkles,
    treatments: ["Hydrafacial", "Chemical Peels", "Microneedling", "IPL"],
    color: "from-blue-400 to-cyan-500"
  },
  {
    name: "Fat Dissolving",
    icon: Crown,
    treatments: ["Aqualyx", "Double Chin", "Body Contouring"],
    color: "from-purple-400 to-violet-500"
  },
  {
    name: "Medical",
    icon: Stethoscope,
    treatments: ["B12 Shots", "Vitamin D", "Iron Infusions"],
    color: "from-green-400 to-emerald-500"
  },
  {
    name: "Hair & Skin",
    icon: Eye,
    treatments: ["PRP", "Hair Restoration", "Acne Treatment"],
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
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Enhanced Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-lg" />
          
          {/* Redesigned Menu Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateX: 15 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotateX: 15 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Luxurious glass background with gold accents */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/40 backdrop-blur-2xl rounded-3xl border border-amber-400/30 shadow-2xl" />
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-amber-400/5 rounded-3xl" />
            
            {/* Gold accent lines */}
            <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-60" />
            <div className="absolute bottom-0 left-1/3 right-1/3 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-60" />
            
            <div className="relative p-8 h-full overflow-y-auto">
              {/* Elegant Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent">
                    Menu & Contact
                  </h2>
                  <p className="text-amber-400/80 text-sm mt-1">Your gateway to aesthetic excellence</p>
                </div>
                <Button
                  onClick={onClose}
                  variant="ghost"
                  size="icon"
                  className="text-white/70 hover:text-white hover:bg-amber-400/20 rounded-full border border-amber-400/20 backdrop-blur-sm transition-all duration-300"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              
              {/* Main Content Grid */}
              <div className="grid lg:grid-cols-3 gap-8">
                
                {/* Left Column: Navigation */}
                <div className="space-y-6">
                  {groups.map((group, groupIndex) => (
                    <motion.div
                      key={group.title}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: groupIndex * 0.1, duration: 0.3 }}
                      className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                    >
                      <h3 className="text-lg font-semibold text-amber-400 mb-4 flex items-center gap-2">
                        <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                        {group.title}
                      </h3>
                      
                      <div className="space-y-3">
                        {group.options.map((option, optionIndex) => (
                          <motion.button
                            key={option.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: (groupIndex * 0.1) + (optionIndex * 0.05), duration: 0.2 }}
                            whileHover={{ scale: 1.02, x: 5 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => {
                              option.action();
                              onClose();
                            }}
                            className="w-full flex items-center gap-4 p-4 bg-gradient-to-r from-white/5 to-amber-400/5 hover:from-white/10 hover:to-amber-400/10 rounded-xl transition-all duration-300 border border-white/5 hover:border-amber-400/20 group"
                          >
                            <div className="w-12 h-12 bg-gradient-to-br from-amber-400/20 to-amber-500/10 rounded-xl flex items-center justify-center border border-amber-400/20 group-hover:border-amber-400/40 transition-all duration-300">
                              <option.icon className="h-5 w-5 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <div className="flex-1 text-left">
                              <span className="text-white/90 font-medium block group-hover:text-white transition-colors duration-300">
                                {option.label}
                              </span>
                              {option.subtitle && (
                                <span className="text-amber-300/60 text-sm block group-hover:text-amber-300/80 transition-colors duration-300">
                                  {option.subtitle}
                                </span>
                              )}
                            </div>
                            <div className="w-1 h-8 bg-gradient-to-b from-transparent via-amber-400/0 to-transparent group-hover:via-amber-400/60 transition-all duration-300 rounded-full"></div>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Right Columns: Treatment Categories */}
                <div className="lg:col-span-2">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="bg-gradient-to-br from-white/5 to-amber-400/5 backdrop-blur-sm rounded-2xl p-6 border border-amber-400/20"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-500 rounded-lg flex items-center justify-center">
                        <Sparkles className="h-4 w-4 text-black" />
                      </div>
                      <h3 className="text-xl font-bold text-white">Treatment Categories</h3>
                      <div className="flex-1 h-px bg-gradient-to-r from-amber-400/40 via-transparent to-transparent"></div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
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
                          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-amber-400/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-amber-400/10">
                            {/* Category Header */}
                            <div className="flex items-center gap-3 mb-4">
                              <div className={`w-10 h-10 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center shadow-lg`}>
                                <category.icon className="h-5 w-5 text-white" />
                              </div>
                              <h4 className="font-semibold text-white group-hover:text-amber-100 transition-colors duration-300">
                                {category.name}
                              </h4>
                            </div>
                            
                            {/* Treatment List */}
                            <div className="space-y-2">
                              {category.treatments.map((treatment, treatmentIndex) => (
                                <div 
                                  key={treatment}
                                  className="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300 flex items-center gap-2"
                                >
                                  <div className="w-1 h-1 bg-amber-400 rounded-full opacity-60"></div>
                                  {treatment}
                                </div>
                              ))}
                            </div>
                            
                            {/* Hover Effect */}
                            <div className="mt-4 text-xs text-amber-400/0 group-hover:text-amber-400/80 transition-all duration-300">
                              Click to explore →
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Book Consultation CTA */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.3 }}
                      className="mt-8 text-center"
                    >
                      <button 
                        onClick={() => window.open("https://med.as.me/harleystreet", "_blank")}
                        className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-400/25"
                      >
                        <Crown className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                        Book Your Consultation
                        <div className="w-2 h-2 bg-black/20 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                      </button>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
              
              {/* Elegant Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.3 }}
                className="mt-8 pt-6 border-t border-amber-400/20"
              >
                <div className="text-center">
                  <p className="text-white/60 text-sm mb-2">
                    Navigate seamlessly or connect with our expert team
                  </p>
                  <div className="flex items-center justify-center gap-2 text-amber-400/60 text-xs">
                    <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-400/40"></div>
                    <span>COSMEDOCS</span>
                    <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-400/40"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
