import { useState, useEffect, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Calendar, Search, X, ChevronRight, Instagram, Facebook, Youtube } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import LanguageSelector from "@/components/LanguageSelector";


const LiquidGlassSearch = lazy(() => import("@/components/LiquidGlassSearch"));

const rotatingTaglines = [
  "Harley Street Doctors • Since 2007",
  "Advanced Aesthetic Medicine",
  "Doctor-Led, Regulated Care",
  "Free AI Face Scan ↗"
];

const treatmentCategories = [
  {
    label: "Botox",
    hubLink: "/treatments/botox/",
    items: [
      { title: "Botox Overview", link: "/treatments/botox/", isOverview: true },
      { title: "Face Botox", link: "/treatments/botox/", subtitle: "Wrinkles & anti-ageing" },
      { title: "Lip Flip", link: "/treatments/lip-flip/", subtitle: "Subtle upper-lip lift" },
      { title: "Masseter", link: "/treatments/masseter-botox/", subtitle: "Jawline slimming & square jaw" },
      { title: "Trap Botox", link: "/treatments/trap-botox/", subtitle: "Shoulder slimming & neck length" },
      { title: "Calf Reduction", link: "/treatments/calf-slimming-botox/", subtitle: "Slimmer calves, refined silhouette" },
      { title: "Nefertiti Botox Lift", link: "/treatments/nefertiti-lift/", subtitle: "Lifted jawline & smoother neck" },
      { title: "Medical Botox", link: "/treatments/botox/medical/", isSubHeader: true },
      { title: "TMJ Botox", link: "/treatments/tmj-botox/", subtitle: "Jaw joint pain, clicking & headaches" },
      { title: "Hyperhidrosis", link: "/treatments/hyperhidrosis-botox/", subtitle: "Excessive sweating control" },
      { title: "Bruxism / TMJ", link: "/treatments/bruxism-botox/", subtitle: "Teeth grinding & clenching" },
      { title: "Chronic Migraine", link: "/treatments/migraine-botox/", subtitle: "NICE-approved PREEMPT protocol" },
    ]
  },
  {
    label: "Dermal Fillers",
    hubLink: "/treatments/dermal-fillers/",
    items: [
      { title: "Dermal Fillers Overview", link: "/treatments/dermal-fillers/", isOverview: true },
      { title: "Lip Filler", link: "/treatments/lip-fillers/", subtitle: "Natural shape & volume" },
      { title: "Cheek Filler", link: "/treatments/cheek-filler/", subtitle: "Mid-face lift & contour" },
      { title: "Jawline Filler", link: "/treatments/jawline-filler/", subtitle: "Definition & sharper angle" },
      { title: "Chin Filler", link: "/treatments/chin-filler/", subtitle: "Profile balance & projection" },
      { title: "Under Eye", link: "/treatments/tear-trough-filler/", subtitle: "Tear-trough hollows & dark circles" },
      { title: "Nose Filler", link: "/treatments/nose-filler/", subtitle: "Non-surgical nose reshaping" },
      { title: "Temple Filler", link: "/treatments/temple-filler/", subtitle: "Restores hollow temples" },
      { title: "Forehead Filler", link: "/treatments/forehead-filler/", subtitle: "Smooths bumps & dips" },
      { title: "Earlobe Rejuvenation", link: "/treatments/earlobe-rejuvenation/", subtitle: "Restores plumpness to stretched lobes" },
      { title: "Filler Areas & Concerns", link: "/treatments/dermal-fillers/areas/", isSubHeader: true },
      { title: "Nasolabial Folds", link: "/treatments/dermal-fillers/areas/#nasolabial", subtitle: "Softens nose-to-mouth lines" },
      { title: "Marionette Lines", link: "/treatments/dermal-fillers/areas/#marionette", subtitle: "Lifts downturned mouth corners" },
      { title: "Pre-Jowl Sulcus", link: "/treatments/dermal-fillers/areas/#prejowl", subtitle: "Restores jawline continuity" },
      { title: "Perioral Lines", link: "/treatments/dermal-fillers/areas/#perioral", subtitle: "Smooths smoker's lines" },
      { title: "Facial Volume Loss", link: "/treatments/dermal-fillers/areas/#volume", subtitle: "Replaces age-related volume" },
      { title: "Liquid Facelift", link: "/treatments/ha-makeover/", subtitle: "Full-face HA makeover" },
    ]
  },
  {
    label: "Mini Facelifts",
    hubLink: "/treatments/non-surgical-facelift/",
    items: [
      { title: "Mini Facelifts Overview", link: "/treatments/non-surgical-facelift/", isOverview: true },
      { title: "Nefertiti Botox Lift", link: "/treatments/nefertiti-lift/", subtitle: "Lifts jawline with Botox" },
      { title: "Liquid Facelift", link: "/treatments/ha-makeover/", subtitle: "Full-face filler rejuvenation" },
      { title: "PDO Thread Lift", link: "/treatments/pdo-threads/", subtitle: "Lifts & stimulates collagen" },
      { title: "Endolaser (Laser Fibre Lift)", link: "/treatments/endolaser/", isHighlight: true },
    ]
  },
  {
    label: "Skin Boosters",
    hubLink: "/treatments/skin-rejuvenation/",
    items: [
      { title: "Skin Boosters Overview", link: "/treatments/skin-rejuvenation/", isOverview: true },
      { title: "Profhilo", link: "/treatments/profhilo/", subtitle: "Bio-remodelling hydration" },
      { title: "Polynucleotides", link: "/treatments/polynucleotides/", subtitle: "DNA-based skin repair" },
      { title: "Sunekos 200", link: "/treatments/sunekos/", subtitle: "Amino acids for fine lines" },
      { title: "Jalupro", link: "/treatments/jalupro/", subtitle: "Boosts collagen & elasticity" },
      { title: "Lumi Eyes", link: "/treatments/lumi-eyes/", subtitle: "Brightens the eye area" },
      { title: "Exosomes", link: "/treatments/exosomes/", subtitle: "Advanced cellular regeneration" },
      { title: "Microneedling", link: "/treatments/microneedling/", subtitle: "Texture, scarring & glow" },
      { title: "HydraFacial", link: "/treatments/hydrafacial/", subtitle: "Deep cleanse & hydration" },
      { title: "PRP Treatment", link: "/treatments/prp/", subtitle: "Your own growth factors" },
      { title: "Skin Peel (Chemical)", link: "/treatments/chemical-peels/", subtitle: "Resurfacing for tone & texture" },
    ]
  },
  {
    label: "Skin & Hair",
    hubLink: "/treatments/skin-hair/",
    items: [
      { title: "Skin & Hair Overview", link: "/treatments/skin-hair/", isOverview: true },
      { title: "Laser Hair Removal", link: "/treatments/laser-hair-removal/", subtitle: "Permanent reduction, all tones" },
      { title: "Microneedling", link: "/treatments/microneedling/", subtitle: "Texture, scarring & glow" },
      { title: "Fat Dissolving", link: "/treatments/fat-dissolving/", subtitle: "Targeted small-area slimming" },
      { title: "Hair Transplant", link: "/treatments/hair-transplant/", subtitle: "FUE surgical hair restoration" },
      { title: "Scar Reduction", link: "/treatments/scar-reduction/", subtitle: "Softens & smooths scars" },
    ]
  },
  {
    label: "Plastic Surgery",
    hubLink: "/treatments/plastic-surgery/",
    items: [
      { title: "Plastic Surgery Overview", link: "/treatments/plastic-surgery/", isOverview: true },
      { title: "Blepharoplasty", link: "/treatments/blepharoplasty/", subtitle: "Eyelid lift surgery" },
      { title: "Rhinoplasty", link: "/treatments/rhinoplasty/", subtitle: "Surgical nose reshaping" },
      { title: "Facelift Surgery", link: "/treatments/facelift-surgery/", subtitle: "Surgical facial rejuvenation" },
      { title: "Liposuction", link: "/treatments/liposuction/", subtitle: "Targeted fat removal" },
      { title: "CO2 Laser", link: "/treatments/co2-laser/", subtitle: "Deep resurfacing for ageing skin" },
    ]
  },
  {
    label: "Dermatology",
    hubLink: "/treatments/dermatology/",
    items: [
      { title: "Dermatology Overview", link: "/treatments/dermatology/", isOverview: true },
      { title: "Mole Removal", link: "/treatments/mole-removal/", subtitle: "Doctor-led excision & biopsy" },
      { title: "Skin Tag Removal", link: "/treatments/skin-tag-removal/", subtitle: "Quick, scar-aware removal" },
      { title: "Acne Treatment", link: "/treatments/acne/", subtitle: "Medical-grade clearance plans" },
    ]
  }
];

const navItems = [
  { label: "Prices", link: "/prices/" },
  { label: "Concerns", link: "/concerns/" },
  { label: "Gallery", link: "/before-after/" },
  { label: "About", link: "/about/" },
  { label: "Contact", link: "/contact/" },
];

const secondaryNavItems = [
  { label: "Smart Aesthetics", link: "/aesthetic-treatments-made-easy/" },
  { label: "Blog", link: "/blog/" },
];

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/cosmedocs/", icon: "instagram" as const },
  { label: "Facebook", href: "https://www.facebook.com/cosmedocs", icon: "facebook" as const },
  { label: "YouTube", href: "https://www.youtube.com/@cosmedocs", icon: "youtube" as const },
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

  // Listen for open-chatbot events (from "Ask Our Aesthetic Intelligence" buttons across the site)
  useEffect(() => {
    const handleOpenChatbot = () => setIsSearchOpen(true);
    window.addEventListener('open-chatbot', handleOpenChatbot);
    return () => window.removeEventListener('open-chatbot', handleOpenChatbot);
  }, []);

  // Open the full treatments menu from anywhere on the site (e.g. homepage overview card)
  useEffect(() => {
    const handleOpenTreatments = () => {
      const isMobile = window.matchMedia('(max-width: 1023px)').matches;
      if (isMobile) {
        setIsMobileMenuOpen(true);
        setExpandedCategory("Botox");
      } else {
        setIsTreatmentsOpen(true);
      }
    };
    window.addEventListener('open-treatments-menu', handleOpenTreatments);
    return () => window.removeEventListener('open-treatments-menu', handleOpenTreatments);
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
          <div className="flex items-center justify-between h-14 sm:h-[60px] md:h-[60px]">
            {/* Logo - Bigger with animated subtitle */}
            <Link to="/home2" className="flex flex-col items-start justify-center">
              <span className={`text-xl sm:text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-500 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                COSMEDOCS
              </span>
              <div className="h-5 md:h-6 overflow-hidden -mt-0.5">
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
                    className="block whitespace-nowrap text-[9px] sm:text-[10px] md:text-xs text-[#C9A050]/80 tracking-[0.04em] font-light"
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
                      className="fixed left-0 right-0 top-16 md:top-20 w-screen bg-black backdrop-blur-xl shadow-2xl z-50 border-t border-[#C9A050]/20"
                    >
                      <div className="max-w-7xl mx-auto px-8 py-8">
                        <div className="grid grid-cols-7 gap-6">
                          {treatmentCategories.map((category) => (
                            <div key={category.label} className="space-y-3">
                              <span className="text-sm font-semibold text-[#C9A050] uppercase tracking-wider block">
                                {category.label}
                              </span>
                              <div className="space-y-1">
                                {category.items.map((item: { title: string; link: string; subtitle?: string; isSubHeader?: boolean; isOverview?: boolean; isHighlight?: boolean }) => (
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
                                  ) : item.isHighlight ? (
                                    <Link 
                                      key={item.link}
                                      to={item.link} 
                                      onClick={() => setIsTreatmentsOpen(false)}
                                      className="text-sm text-emerald-400 hover:text-emerald-300 cursor-pointer py-1.5 block transition-colors font-semibold inline-flex items-center gap-1.5"
                                    >
                                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                      {item.title}
                                    </Link>
                                  ) : (
                                    <Link 
                                      key={item.link}
                                      to={item.link} 
                                      onClick={() => setIsTreatmentsOpen(false)}
                                      className="block py-1.5 cursor-pointer transition-colors group"
                                    >
                                      <span className="text-sm text-white/80 group-hover:text-white transition-colors">{item.title}</span>
                                      {item.subtitle && (
                                        <span className="block italic font-serif text-[11px] text-[#C9A050]/85 leading-tight max-h-0 opacity-0 overflow-hidden group-hover:max-h-8 group-hover:opacity-100 group-hover:mt-0.5 transition-all duration-200">{item.subtitle}</span>
                                      )}
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
                          <div className="flex items-center justify-center gap-6 text-sm font-medium">
                            <Link
                              to="/treatments/"
                              onClick={() => setIsTreatmentsOpen(false)}
                              className="text-white/70 hover:text-white transition-colors"
                            >
                              All Treatments →
                            </Link>
                            <span className="text-white/20">|</span>
                            <Link
                              to="/prices/"
                              onClick={() => setIsTreatmentsOpen(false)}
                              className="text-[#C9A050] hover:text-[#D4AF61] transition-colors"
                            >
                              View Full Price List →
                            </Link>
                          </div>
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
              {/* Language Selector */}
              <LanguageSelector variant="header" />

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

          {/* Secondary row — smaller links + social icons */}
          <div className="hidden lg:flex items-center justify-end gap-4 h-5 -mt-1">
            {secondaryNavItems.map((item) => {
              const isSmart = item.link === "/aesthetic-treatments-made-easy/";
              return (
                <Link
                  key={item.link}
                  to={item.link}
                  className={`text-[11px] font-light tracking-[0.08em] uppercase transition-colors duration-500 ${
                    isSmart
                      ? 'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-[#C9A050]/50 text-[#C9A050] hover:bg-[#C9A050] hover:text-black'
                      : isScrolled
                        ? 'text-gray-500 hover:text-gray-900'
                        : 'text-white/55 hover:text-white'
                  }`}
                >
                  {isSmart && <span className="w-1 h-1 rounded-full bg-[#C9A050] animate-pulse" aria-hidden="true" />}
                  {item.label}
                </Link>
              );
            })}
            <span className={`h-3 w-px ${isScrolled ? 'bg-gray-300' : 'bg-white/20'}`} aria-hidden="true" />
            <div className="flex items-center gap-2.5">
              {socialLinks.map((s) => {
                const Icon = s.icon === 'instagram' ? Instagram : s.icon === 'facebook' ? Facebook : Youtube;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={`Cosmedocs on ${s.label}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-colors duration-500 ${
                      isScrolled
                        ? 'text-gray-500 hover:text-[#C9A050]'
                        : 'text-white/55 hover:text-[#C9A050]'
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                );
              })}
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
            className="fixed inset-0 z-[100] bg-black flex flex-col"
          >
            {/* Header - Larger with login placeholder */}
            <div className="flex-shrink-0 flex items-center justify-between px-5 py-4 border-b border-white/10">
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

              {/* Language Selector in Mobile */}
            <div className="flex-shrink-0 flex items-center justify-between px-5 py-3 border-b border-white/10">
              <span className="text-sm text-white/50">Language</span>
              <LanguageSelector variant="header" />
            </div>

            {/* Quick Actions Bar */}
            <div className="flex-shrink-0 flex gap-3 px-5 py-4 border-b border-white/10">
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
            <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain pb-8" style={{ WebkitOverflowScrolling: 'touch' }}>
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
                        {category.items.map((item: { title: string; link: string; subtitle?: string; isSubHeader?: boolean; isOverview?: boolean; isHighlight?: boolean }) => (
                          <Link
                            key={item.link}
                            to={item.link}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setExpandedCategory(null);
                            }}
                            className={`block px-6 py-3.5 transition-colors border-b border-white/5 min-h-[52px] flex flex-col justify-center ${
                              item.isOverview 
                                ? 'text-base text-white hover:text-[#C9A050] font-medium bg-white/5' 
                                : item.isSubHeader 
                                  ? 'text-base text-[#C9A050]/80 hover:text-[#C9A050] font-medium' 
                                  : item.isHighlight
                                    ? 'text-base text-emerald-400 hover:text-emerald-300 font-semibold'
                                    : 'text-base text-white/80 hover:text-white hover:bg-white/5'
                            }`}
                          >
                            <span className="flex items-center">
                              {item.isHighlight && <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2 animate-pulse" />}
                              {item.title}{(item.isSubHeader || item.isOverview) ? ' →' : ''}
                            </span>
                            {item.subtitle && !item.isOverview && !item.isSubHeader && !item.isHighlight && (
                              <span className="italic font-serif text-[12px] text-[#C9A050]/75 mt-0.5 leading-tight">{item.subtitle}</span>
                            )}
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
                  to="/treatments/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-lg font-medium text-white/80"
                >
                  All Treatments →
                </Link>
                <Link
                  to="/prices/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-lg font-medium text-[#C9A050]"
                >
                  View Full Price List →
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
