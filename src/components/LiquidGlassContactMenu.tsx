import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Star, Heart, Zap, Crown, Droplets, Lightbulb, Calendar, Phone, MessageSquare, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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
      { name: "Face Botox (1-3 Areas)", link: "/botox-london" },
      { name: "Nefertiti Face Lift", link: "/nefertiti-botox-face-jaw-lift" },
      { name: "Masseter (Jawline Slimming)", link: "/masseter-botox" },
      { name: "Bunny Lines", link: "/bunny-lines-botox" },
      { name: "Gummy Smile", link: "/gummy-smile-botox" },
      { name: "Excessive Sweat Botox", link: "/excessive-sweat-botox" },
      { name: "Trigger Point Botox", link: "/trigger-point-botox" }
    ],
    viewAllLink: "/treatments",
    color: "from-yellow-400 to-orange-500"
  },
  {
    name: "Dermal Fillers",
    icon: Heart,
    treatments: [
      { name: "Lip Fillers", link: "/lip-fillers" },
      { name: "Non Surgical Nose Job", link: "/non-surgical-nose-job" },
      { name: "Dermal Filler Makeover", link: "/non-surgical-facelift" },
      { name: "Chin Filler", link: "/chin-filler" },
      { name: "Cheek Fillers", link: "/cheek-filler" },
      { name: "Jawline Filler", link: "/jawline-filler" },
      { name: "Non Surgical Face Lift - Long Lasting Using Lifting Sutures and Volumising", link: "/non-surgical-facelift" }
    ],
    viewAllLink: "/treatments",
    color: "from-pink-400 to-red-500"
  },
  {
    name: "Skin Treatments",
    icon: Sparkles,
    treatments: [
      { name: "Chemical Peels", link: "/chemical-peel" },
      { name: "Hydrafacial", link: "/hydrafacial-london" },
      { name: "PRP Vampire Facelift", link: "/prp-treatment" },
      { name: "Hyperpigmentation Treatment", link: "/hyperpigmentation-treatment" }
    ],
    viewAllLink: "/treatments",
    color: "from-blue-400 to-cyan-500"
  },
  {
    name: "Dermatology",
    icon: Crown,
    treatments: [
      { name: "Mole & Skin Tag Removal", link: "/mole-skin-tag-removal" },
      { name: "Eczema Treatment", link: "/eczema-treatment" },
      { name: "Psoriasis Treatment", link: "/psoriasis-treatment" },
      { name: "Acne Treatment", link: "/acne-treatment" },
      { name: "Dermatology Consultation", link: "/dermatology" }
    ],
    viewAllLink: "/treatments",
    color: "from-purple-400 to-indigo-500"
  },
  {
    name: "Skin Boosters",
    icon: Droplets,
    treatments: [
      { name: "Profhilo", link: "/profhilo" },
      { name: "Polynucleotides", link: "/polynucleotide-treatment" },
      { name: "Microneedling", link: "/microneedling" }
    ],
    viewAllLink: "/treatments",
    color: "from-green-400 to-teal-500"
  }
];

export default function LiquidGlassContactMenu({ isOpen, onClose, groups }: LiquidGlassContactMenuProps) {
  const [showPhoneNumbers, setShowPhoneNumbers] = useState(false);
  
  // Find the navigate and contact groups
  const navigateGroup = groups.find(g => g.title === "Navigate");
  const contactGroup = groups.find(g => g.title === "Get in Touch");
  const otherGroups = groups.filter(g => g.title !== "Navigate" && g.title !== "Get in Touch");
  
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
                {/* Left Column: Compact Navigation & Contact - Scrollable on mobile */}
                <div className="flex flex-col min-h-0">
                  <div className="space-y-1 overflow-y-auto flex-1 pr-1">
                    {/* Compact Navigate Section */}
                    {navigateGroup && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-gradient-to-br from-white/5 to-amber-400/5 backdrop-blur-sm rounded-lg p-2 border border-amber-400/20"
                      >
                        <div className="flex items-center gap-1 md:gap-2 mb-1">
                          <div className="w-4 h-4 md:w-5 md:h-5 bg-gradient-to-br from-amber-400 to-amber-500 rounded-md flex items-center justify-center">
                            <Sparkles className="h-2 w-2 md:h-3 md:w-3 text-black" />
                          </div>
                          <h3 className="text-xs md:text-sm font-bold text-amber-400">{navigateGroup.title}</h3>
                        </div>
                        
                        {/* Single line navigation with separators */}
                        <div className="flex items-center gap-1 text-xs flex-wrap">
                          {navigateGroup.options.slice(0, 3).map((option, idx) => (
                            <div key={option.label} className="flex items-center gap-1">
                              <button
                                onClick={option.action}
                                className="text-white/80 hover:text-amber-400 transition-colors duration-200"
                              >
                                {option.label}
                              </button>
                              {idx < 2 && <span className="text-amber-400/50">|</span>}
                            </div>
                          ))}
                        </div>
                        
                        {/* Remaining nav items as compact buttons */}
                        {navigateGroup.options.length > 3 && (
                          <div className="space-y-0.5 mt-1">
                            {navigateGroup.options.slice(3).map((option) => (
                              <motion.button
                                key={option.label}
                                whileHover={{ x: 2 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full text-left flex items-center gap-1 px-1 py-0.5 rounded text-xs bg-white/5 hover:bg-amber-400/10 border border-transparent hover:border-amber-400/20 transition-all duration-200 text-white/80 hover:text-white"
                                onClick={option.action}
                              >
                                <option.icon className="h-3 w-3" />
                                <span className="truncate">{option.label}</span>
                              </motion.button>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    )}

                    {/* Compact Contact Section */}
                    {contactGroup && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                        className="bg-gradient-to-br from-white/5 to-amber-400/5 backdrop-blur-sm rounded-lg p-2 border border-amber-400/20"
                      >
                        <div className="flex items-center gap-1 md:gap-2 mb-1">
                          <div className="w-4 h-4 md:w-5 md:h-5 bg-gradient-to-br from-amber-400 to-amber-500 rounded-md flex items-center justify-center">
                            <Sparkles className="h-2 w-2 md:h-3 md:w-3 text-black" />
                          </div>
                          <h3 className="text-xs md:text-sm font-bold text-amber-400">{contactGroup.title}</h3>
                        </div>
                        
                        {/* Book Appointment - Keep visible */}
                        <motion.button
                          whileHover={{ x: 2 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full text-left flex items-center gap-1 md:gap-2 px-1 py-1 rounded-md bg-white/5 hover:bg-amber-400/10 border border-transparent hover:border-amber-400/20 transition-all duration-200 group text-white/80 hover:text-white mb-1"
                          onClick={contactGroup.options[0]?.action}
                        >
                          <Calendar className="h-4 w-4 md:h-5 md:w-5 text-amber-400" />
                          <span className="text-xs md:text-sm">Book Appointment</span>
                        </motion.button>

                        {/* Compact Icon Row for Phone, WhatsApp, Email */}
                        <div className="flex items-center gap-2 justify-start px-1">
                          {/* Phone Icon - Click to expand numbers */}
                          <button
                            onClick={() => setShowPhoneNumbers(!showPhoneNumbers)}
                            className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-amber-400/20 to-amber-500/10 hover:from-amber-400/30 hover:to-amber-500/20 border border-amber-400/30 transition-all duration-200"
                          >
                            <Phone className="h-4 w-4 text-amber-400" />
                          </button>

                          {/* WhatsApp Icon */}
                          <button
                            onClick={() => window.open("https://wa.me/447735606447?text=Hello, I'm interested in aesthetic treatments at CosmeDocs.", "_blank")}
                            className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-green-400/20 to-green-500/10 hover:from-green-400/30 hover:to-green-500/20 border border-green-400/30 transition-all duration-200"
                          >
                            <MessageSquare className="h-4 w-4 text-green-400" />
                          </button>

                          {/* Email - Clickable with full display */}
                          <a
                            href="mailto:info@cosmedocs.com"
                            className="flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-br from-purple-400/20 to-purple-500/10 hover:from-purple-400/30 hover:to-purple-500/20 border border-purple-400/30 transition-all duration-200 text-xs text-white/90 hover:text-white"
                          >
                            <Mail className="h-3 w-3 text-purple-400" />
                            <span className="hidden sm:inline">info@cosmedocs.com</span>
                          </a>
                        </div>

                        {/* Expandable Phone Numbers */}
                        <AnimatePresence>
                          {showPhoneNumbers && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden mt-1 space-y-0.5"
                            >
                              <a
                                href="tel:+443330551503"
                                className="flex items-center gap-1 px-2 py-1 rounded text-xs bg-white/5 hover:bg-amber-400/10 border border-amber-400/20 transition-all duration-200 text-white/80 hover:text-white"
                              >
                                <Phone className="h-3 w-3" />
                                <span>Clinic 1: 333 0551 503</span>
                              </a>
                              <a
                                href="tel:+448008600178"
                                className="flex items-center gap-1 px-2 py-1 rounded text-xs bg-white/5 hover:bg-amber-400/10 border border-amber-400/20 transition-all duration-200 text-white/80 hover:text-white"
                              >
                                <Phone className="h-3 w-3" />
                                <span>Clinic 2: 0800 8600 178</span>
                              </a>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    )}

                    {/* Other Groups (AI Tools, Social Media, etc.) */}
                    {otherGroups.map((group, groupIndex) => (
                      <motion.div
                        key={group.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (groupIndex + 2) * 0.1, duration: 0.3 }}
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
                              transition={{ delay: ((groupIndex + 2) * 0.1) + (itemIndex * 0.05), duration: 0.2 }}
                              whileHover={{ x: 2, scale: 1.01 }}
                              whileTap={{ scale: 0.98 }}
                              className="w-full text-left flex items-center gap-1 md:gap-2 px-1 py-1 rounded-md bg-white/5 hover:bg-amber-400/10 border border-transparent hover:border-amber-400/20 transition-all duration-300 group text-white/80 hover:text-white"
                              onClick={option.action}
                            >
                              <div className="w-4 h-4 md:w-5 md:h-5 bg-gradient-to-br from-white/10 to-white/5 rounded-md flex items-center justify-center border border-white/10 group-hover:border-amber-400/30 transition-all duration-300 flex-shrink-0">
                                <option.icon className="h-2 w-2 md:h-3 md:w-3 text-amber-400" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-xs truncate">{option.label}</p>
                                {option.subtitle && (
                                  <p className="text-[10px] text-white/50 truncate">{option.subtitle}</p>
                                )}
                              </div>
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Right Column: Treatment Categories - Larger and more prominent */}
                <div className="lg:col-span-2 overflow-y-auto">
                  <div className="mb-2 md:mb-3">
                    <h3 className="text-base md:text-xl font-bold bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent flex items-center gap-2">
                      <Sparkles className="h-5 w-5 md:h-6 md:w-6 text-amber-400" />
                      Treatment Categories
                    </h3>
                    <p className="text-xs text-white/60 mt-0.5">Explore our comprehensive aesthetic treatments</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    {treatmentCategories.map((category, index) => (
                      <motion.div
                        key={category.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        className="bg-gradient-to-br from-white/5 to-amber-400/5 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300 group hover:shadow-lg hover:shadow-amber-400/10"
                      >
                        <div className="flex items-center gap-2 mb-2 md:mb-3">
                          <div className={`w-7 h-7 md:w-9 md:h-9 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center shadow-lg`}>
                            <category.icon className="h-4 w-4 md:h-5 md:w-5 text-white" />
                          </div>
                          <h4 className="text-sm md:text-base font-bold text-white">{category.name}</h4>
                        </div>
                        
                        <ul className="space-y-1 md:space-y-1.5 mb-2 md:mb-3">
                          {category.treatments.map((treatment, idx) => (
                            <motion.li
                              key={treatment.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: (index * 0.1) + (idx * 0.05), duration: 0.2 }}
                            >
                              <a
                                href={treatment.link}
                                onClick={(e) => {
                                  e.preventDefault();
                                  window.location.href = treatment.link;
                                }}
                                className="text-xs md:text-sm text-white/70 hover:text-amber-400 transition-colors duration-200 flex items-start gap-1.5 group/item"
                              >
                                <span className="text-amber-400/50 group-hover/item:text-amber-400 transition-colors mt-0.5 text-sm">•</span>
                                <span className="flex-1 leading-relaxed">{treatment.name}</span>
                              </a>
                            </motion.li>
                          ))}
                        </ul>
                        
                        <a
                          href={category.viewAllLink}
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href = category.viewAllLink;
                          }}
                          className="inline-flex items-center gap-1.5 text-xs md:text-sm text-amber-400 hover:text-amber-300 transition-colors duration-200 group/link font-medium"
                        >
                          <Star className="h-3 w-3 md:h-4 md:w-4 group-hover/link:rotate-180 transition-transform duration-500" />
                          <span>View All Treatments</span>
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}