import { useState, useEffect, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Calendar, Search, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
// Removed unused dropdown imports - using custom mega menu implementation
import { Button } from "@/components/ui/button";

const LiquidGlassSearch = lazy(() => import("@/components/LiquidGlassSearch"));

const rotatingTaglines = [
  "Harley Street Doctors • Since 2007",
  "Advanced Aesthetic Medicine",
  "Doctor-Led, Regulated Care"
];

const treatmentCategories = [
  {
    label: "Botox",
    hubLink: "/treatments/botox/",
    items: [
      { title: "Botox Overview", link: "/treatments/botox/", isOverview: true },
      { title: "Face Botox", link: "/treatments/botox/" },
      { title: "Lip Flip", link: "/treatments/lip-flip/" },
      { title: "Masseter", link: "/treatments/masseter-botox/" },
      { title: "Trap Botox", link: "/treatments/trap-botox/" },
      { title: "Medical Botox", link: "/treatments/botox/medical/", isSubHeader: true },
      { title: "Hyperhidrosis", link: "/treatments/hyperhidrosis-botox/" },
      { title: "Bruxism / TMJ", link: "/treatments/bruxism-botox/" },
      { title: "Chronic Migraine", link: "/treatments/migraine-botox/" },
    ]
  },
  {
    label: "Dermal Fillers",
    hubLink: "/treatments/dermal-fillers/",
    items: [
      { title: "Dermal Fillers Overview", link: "/treatments/dermal-fillers/", isOverview: true },
      { title: "Lip Filler", link: "/treatments/lip-fillers/" },
      { title: "Cheek Filler", link: "/treatments/cheek-filler/" },
      { title: "Jawline Filler", link: "/treatments/jawline-filler/" },
      { title: "Chin Filler", link: "/treatments/chin-filler/" },
      { title: "Under Eye", link: "/treatments/tear-trough-filler/" },
      { title: "Nose Filler", link: "/treatments/nose-filler/" },
      { title: "Temple Filler", link: "/treatments/temple-filler/" },
      { title: "Filler Areas & Concerns", link: "/treatments/dermal-fillers/areas/", isSubHeader: true },
      { title: "Nasolabial Folds", link: "/treatments/dermal-fillers/areas/#nasolabial" },
      { title: "Marionette Lines", link: "/treatments/dermal-fillers/areas/#marionette" },
      { title: "Pre-Jowl Sulcus", link: "/treatments/dermal-fillers/areas/#prejowl" },
      { title: "Perioral Lines", link: "/treatments/dermal-fillers/areas/#perioral" },
      { title: "Facial Volume Loss", link: "/treatments/dermal-fillers/areas/#volume" },
    ]
  },
  {
    label: "HA Makeover",
    hubLink: "/treatments/ha-makeover/",
    items: [
      { title: "HA Makeover Overview", link: "/treatments/ha-makeover/", isOverview: true },
      { title: "Full Face Rejuvenation", link: "/treatments/non-surgical-facelift/" },
      { title: "8 Point Facelift", link: "/treatments/8-point-facelift/" },
      { title: "PDO Threads", link: "/treatments/pdo-threads/" },
    ]
  },
  {
    label: "Skin Boosters",
    hubLink: "/treatments/skin-boosters/",
    items: [
      { title: "Skin Boosters Overview", link: "/treatments/skin-boosters/", isOverview: true },
      { title: "Profhilo", link: "/treatments/profhilo/" },
      { title: "Polynucleotides", link: "/treatments/polynucleotides/" },
      { title: "HydraFacial", link: "/treatments/hydrafacial/" },
      { title: "PRP Treatment", link: "/treatments/prp/" },
      { title: "Chemical Peel", link: "/treatments/chemical-peel/" },
    ]
  },
  {
    label: "Skin & Hair",
    hubLink: "/treatments/skin-hair/",
    items: [
      { title: "Skin & Hair Overview", link: "/treatments/skin-hair/", isOverview: true },
      { title: "Microneedling", link: "/treatments/microneedling/" },
      { title: "Fat Dissolving", link: "/treatments/fat-dissolving/" },
      { title: "Hair Transplant", link: "/treatments/hair-transplant/" },
      { title: "Scar Reduction", link: "/treatments/scar-reduction/" },
    ]
  },
  {
    label: "Plastic Surgery",
    hubLink: "/treatments/plastic-surgery/",
    items: [
      { title: "Plastic Surgery Overview", link: "/treatments/plastic-surgery/", isOverview: true },
      { title: "Blepharoplasty", link: "/treatments/blepharoplasty/" },
      { title: "Rhinoplasty", link: "/treatments/rhinoplasty/" },
      { title: "Facelift Surgery", link: "/treatments/facelift-surgery/" },
      { title: "Liposuction", link: "/treatments/liposuction/" },
      { title: "CO2 Laser", link: "/treatments/co2-laser/" },
    ]
  },
  {
    label: "Dermatology",
    hubLink: "/treatments/dermatology/",
    items: [
      { title: "Dermatology Overview", link: "/treatments/dermatology/", isOverview: true },
      { title: "Mole Removal", link: "/treatments/mole-removal/" },
      { title: "Skin Tag Removal", link: "/treatments/skin-tag-removal/" },
      { title: "Acne Treatment", link: "/treatments/acne/" },
    ]
  }
];

const navItems = [
  { label: "Pricing", link: "/treatments/" },
  { label: "Concerns", link: "/concerns/" },
  { label: "Gallery", link: "/before-after/" },
  { label: "Blog", link: "/blog/" },
  { label: "About", link: "/about/" },
  { label: "Contact", link: "/contact/" },
];

export default function Home2Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [isTreatmentsOpen, setIsTreatmentsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [taglineIndex, setTaglineIndex] = useState(0);

  // Rotate taglines every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % rotatingTaglines.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Listen for open-chatbot events (from "Ask AI Doctor" buttons across the site)
  useEffect(() => {
    const handleOpenChatbot = () => setIsSearchOpen(true);
    window.addEventListener('open-chatbot', handleOpenChatbot);
    return () => window.removeEventListener('open-chatbot', handleOpenChatbot);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
        {/* Background - transitions between dark and light */}
        <div className={`absolute inset-0 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white shadow-md' 
            : 'bg-black'
        }`} />
        <div className={`absolute bottom-0 left-0 right-0 h-px transition-all duration-500 ${
          isScrolled 
            ? 'bg-gradient-to-r from-transparent via-gray-200 to-transparent' 
            : 'bg-gradient-to-r from-transparent via-[#C9A050]/30 to-transparent'
        }`} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-18 sm:h-20 md:h-20">
            {/* Logo - Bigger with animated subtitle */}
            <Link to="/home2" className="flex flex-col items-start py-3">
              <span className={`text-xl sm:text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-500 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                COSMEDOCS
              </span>
              <div className="h-4 md:h-5 overflow-hidden -mt-0.5">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={taglineIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      ease: "easeInOut"
                    }}
                    className="block text-[9px] sm:text-[10px] md:text-xs text-[#C9A050]/80 tracking-[0.04em] font-light"
                  >
                    {rotatingTaglines[taglineIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
          </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Treatments Mega Dropdown - Custom Implementation */}
              <div 
                className="relative"
                onMouseEnter={() => setIsTreatmentsOpen(true)}
                onMouseLeave={() => setIsTreatmentsOpen(false)}
              >
                <Button 
                  variant="ghost" 
                  className={`gap-1 font-medium transition-colors duration-500 ${
                    isScrolled 
                      ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100' 
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                  onClick={() => setIsTreatmentsOpen(!isTreatmentsOpen)}
                >
                  Treatments
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isTreatmentsOpen ? 'rotate-180' : ''}`} />
                </Button>

                {/* Full-width Mega Menu */}
                <AnimatePresence>
                  {isTreatmentsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="fixed left-0 right-0 top-16 md:top-20 w-screen bg-black/98 backdrop-blur-xl shadow-2xl z-50"
                    >
                      <div className="max-w-7xl mx-auto px-8 py-8">
                        <div className="grid grid-cols-7 gap-6">
                          {treatmentCategories.map((category) => (
                            <div key={category.label} className="space-y-3">
                              <span className="text-sm font-semibold text-[#C9A050] uppercase tracking-wider block">
                                {category.label}
                              </span>
                              <div className="space-y-1">
                                {category.items.map((item: { title: string; link: string; isSubHeader?: boolean; isOverview?: boolean }) => (
                                  item.isOverview ? (
                                    <Link 
                                      key={item.link}
                                      to={item.link} 
                                      onClick={() => setIsTreatmentsOpen(false)}
                                      className="text-sm text-white hover:text-[#C9A050] cursor-pointer py-1.5 block transition-colors font-medium border-b border-white/10 mb-2 pb-2"
                                    >
                                      {item.title} →
                                    </Link>
                                  ) : item.isSubHeader ? (
                                    <Link 
                                      key={item.link}
                                      to={item.link} 
                                      onClick={() => setIsTreatmentsOpen(false)}
                                      className="text-xs text-[#C9A050]/70 hover:text-[#C9A050] cursor-pointer pt-3 pb-1 block transition-colors font-medium tracking-wide"
                                    >
                                      {item.title} →
                                    </Link>
                                  ) : (
                                    <Link 
                                      key={item.link}
                                      to={item.link} 
                                      onClick={() => setIsTreatmentsOpen(false)}
                                      className="text-sm text-white/80 hover:text-white cursor-pointer py-1.5 block transition-colors"
                                    >
                                      {item.title}
                                    </Link>
                                  )
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="border-t border-white/10">
                        <div className="max-w-7xl mx-auto px-8 py-4">
                          <Link 
                            to="/treatments" 
                            onClick={() => setIsTreatmentsOpen(false)}
                            className="block text-center text-sm font-medium text-[#C9A050] hover:text-[#D4AF61] transition-colors"
                          >
                            View All Treatments & Pricing →
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Other Nav Items */}
              {navItems.map((item) => (
                <Link 
                  key={item.link}
                  to={item.link}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-500 ${
                    isScrolled 
                      ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100' 
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-1 sm:gap-2">
              {/* Mobile Menu Toggle - Larger touch target */}
              <Button
                variant="ghost"
                className={`lg:hidden transition-colors duration-500 h-10 px-3 text-sm font-medium ${
                  isScrolled 
                    ? 'text-gray-600 hover:text-gray-900' 
                    : 'text-white/80 hover:text-white'
                }`}
                onClick={() => setIsMobileMenuOpen(true)}
              >
                Menu
                <ChevronDown className="h-4 w-4 ml-1" />
              </Button>

              {/* Search - Larger touch target on mobile */}
              <Button
                variant="ghost"
                size="icon"
                className={`h-10 w-10 transition-colors duration-500 ${
                  isScrolled 
                    ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="h-5 w-5" />
              </Button>

              {/* Future: Login button placeholder - currently hidden, enable when auth is ready */}
              {/* <Button
                variant="ghost"
                size="icon"
                className={`h-10 w-10 transition-colors duration-500 ${
                  isScrolled 
                    ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
                onClick={() => {}}
              >
                <User className="h-5 w-5" />
              </Button> */}

              {/* Book Button - Larger touch target on mobile */}
              <Button
                onClick={() => window.open('https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29', '_blank')}
                className="bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full h-10 px-4 md:px-6 text-sm font-medium"
              >
                <Calendar className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">Book</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black"
          >
            {/* Header - Larger with login placeholder */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <Link 
                to="/" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-bold text-white"
              >
                COSMEDOCS
              </Link>
              <div className="flex items-center gap-2">
                {/* Future: Login button in mobile menu */}
                {/* <Button
                  variant="ghost"
                  size="icon"
                  className="h-11 w-11 text-white hover:bg-white/10"
                  onClick={() => {}}
                >
                  <User className="h-5 w-5" />
                </Button> */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setExpandedCategory(null);
                  }}
                  className="h-11 w-11 text-white hover:bg-white/10"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
            </div>

            {/* Quick Actions Bar */}
            <div className="flex gap-3 px-5 py-4 border-b border-white/10">
              <Button
                onClick={() => {
                  window.open('https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29', '_blank');
                  setIsMobileMenuOpen(false);
                }}
                className="flex-1 bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full h-12 text-base font-medium"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book Appointment
              </Button>
            </div>

            {/* Categories */}
            <div className="overflow-y-auto h-[calc(100vh-140px)]">
              {treatmentCategories.map((category, index) => (
                <motion.div
                  key={category.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <button
                    onClick={() => setExpandedCategory(
                      expandedCategory === category.label ? null : category.label
                    )}
                    className="w-full flex items-center justify-between px-5 py-5 border-b border-white/5 hover:bg-white/5 transition-colors min-h-[60px]"
                  >
                    <span className="text-lg font-medium text-white">{category.label}</span>
                    <ChevronRight 
                      className={`h-5 w-5 text-[#C9A050] transition-transform duration-200 ${
                        expandedCategory === category.label ? 'rotate-90' : ''
                      }`} 
                    />
                  </button>
                  
                  <AnimatePresence>
                    {expandedCategory === category.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden bg-white/5"
                      >
                        {category.items.map((item: { title: string; link: string; isSubHeader?: boolean; isOverview?: boolean }) => (
                          <Link
                            key={item.link}
                            to={item.link}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setExpandedCategory(null);
                            }}
                            className={`block px-6 py-4 transition-colors border-b border-white/5 min-h-[52px] flex items-center ${
                              item.isOverview 
                                ? 'text-base text-white hover:text-[#C9A050] font-medium bg-white/5' 
                                : item.isSubHeader 
                                  ? 'text-base text-[#C9A050]/80 hover:text-[#C9A050] font-medium' 
                                  : 'text-base text-white/80 hover:text-white hover:bg-white/5'
                            }`}
                          >
                            {item.title}{(item.isSubHeader || item.isOverview) ? ' →' : ''}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}

              {/* Footer Links */}
              <div className="px-6 py-6 space-y-3 border-t border-white/10 mt-4">
                <Link
                  to="/treatments"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-lg font-medium text-[#C9A050]"
                >
                  View All Treatments & Pricing →
                </Link>
                {navItems.map((item) => (
                  <Link
                    key={item.link}
                    to={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2 text-lg text-white/60 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AI Search Modal */}
      <Suspense fallback={null}>
        <LiquidGlassSearch 
          isOpen={isSearchOpen} 
          onClose={() => setIsSearchOpen(false)}
          onOpenChatbot={() => {
            setIsSearchOpen(false);
            window.dispatchEvent(new CustomEvent('open-chatbot'));
          }}
        />
      </Suspense>
    </>
  );
}
