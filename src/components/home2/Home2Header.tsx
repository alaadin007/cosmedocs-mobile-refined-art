import { useState, useEffect, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Calendar, Search, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const LiquidGlassSearch = lazy(() => import("@/components/LiquidGlassSearch"));

const treatmentCategories = [
  {
    label: "Botox",
    items: [
      { title: "Face Botox", link: "/treatments/botox" },
      { title: "Lip Flip", link: "/lip-flip" },
      { title: "Masseter", link: "/masseter-botox" },
      { title: "Hyperhidrosis", link: "/excessive-sweat-botox" },
      { title: "Trap Botox", link: "/trap-botox" },
    ]
  },
  {
    label: "Dermal Fillers",
    items: [
      { title: "Lip Fillers", link: "/lip-fillers" },
      { title: "Cheek Filler", link: "/cheek-filler" },
      { title: "Jawline Filler", link: "/jawline-filler" },
      { title: "Chin Filler", link: "/chin-filler" },
      { title: "Under Eye", link: "/tear-trough-filler" },
      { title: "Nose Filler", link: "/non-surgical-nose-job" },
      { title: "Temple Filler", link: "/temple-filler-london" },
    ]
  },
  {
    label: "HA Makeover",
    items: [
      { title: "Full Face Rejuvenation", link: "/non-surgical-facelift" },
      { title: "8 Point Facelift", link: "/8-point-facelift" },
      { title: "PDO Threads", link: "/pdo-threads" },
    ]
  },
  {
    label: "Skin Boosters",
    items: [
      { title: "Profhilo", link: "/profhilo" },
      { title: "Polynucleotides", link: "/polynucleotide-treatment" },
      { title: "HydraFacial", link: "/hydrafacial" },
      { title: "PRP Treatment", link: "/prp-treatment" },
      { title: "Chemical Peel", link: "/chemical-peel" },
    ]
  },
  {
    label: "Skin & Hair",
    items: [
      { title: "Microneedling", link: "/microneedling" },
      { title: "Fat Dissolve", link: "/fat-dissolve" },
      { title: "Hair Transplant", link: "/hair-transplant-surgeon" },
      { title: "Scar Reduction", link: "/scar-reduction" },
    ]
  },
  {
    label: "Surgery",
    items: [
      { title: "Blepharoplasty", link: "/blepharoplasty" },
      { title: "Rhinoplasty", link: "/rhinoplasty" },
      { title: "Facelift Surgery", link: "/facelift-surgery" },
      { title: "Liposuction", link: "/liposuction" },
      { title: "CO2 Laser", link: "/co2-laser-resurfacing" },
    ]
  },
  {
    label: "Dermatology",
    items: [
      { title: "Mole Removal", link: "/mole-removal" },
      { title: "Skin Tag Removal", link: "/skin-tag-removal" },
      { title: "Acne Treatment", link: "/acne-treatment" },
    ]
  }
];

const navItems = [
  { label: "Pricing", link: "/treatments" },
  { label: "About", link: "/about" },
  { label: "Gallery", link: "/before-after-gallery" },
  { label: "Contact", link: "/contact" },
];

export default function Home2Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [isTreatmentsOpen, setIsTreatmentsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo - Bigger with animated subtitle */}
            <Link to="/home2" className="flex flex-col items-start">
              <span className={`text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-500 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                COSMEDOCS
              </span>
              <motion.span 
                className="text-[10px] md:text-xs text-[#C9A050] tracking-wide -mt-0.5"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.3,
                  ease: "easeOut"
                }}
              >
                <motion.span
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  Harley Street Since 2007, 1M+ Injections
                </motion.span>
              </motion.span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Treatments Mega Dropdown */}
              <DropdownMenu open={isTreatmentsOpen} onOpenChange={setIsTreatmentsOpen}>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className={`gap-1 font-medium transition-colors duration-500 ${
                      isScrolled 
                        ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100' 
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    Treatments
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isTreatmentsOpen ? 'rotate-180' : ''}`} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className="p-0 bg-black/98 backdrop-blur-xl border-0 rounded-none shadow-2xl"
                  align="start"
                  sideOffset={0}
                  style={{ 
                    position: 'fixed', 
                    left: '0px', 
                    right: '0px', 
                    width: '100vw',
                    transform: 'none',
                    maxWidth: 'none'
                  }}
                >
                  <div className="max-w-7xl mx-auto px-8 py-8">
                    <div className="grid grid-cols-7 gap-8">
                      {treatmentCategories.map((category) => (
                        <div key={category.label} className="space-y-3">
                          <DropdownMenuLabel className="text-sm font-semibold text-[#C9A050] uppercase tracking-wider px-0">
                            {category.label}
                          </DropdownMenuLabel>
                          <div className="space-y-1">
                            {category.items.map((item) => (
                              <DropdownMenuItem key={item.link} asChild className="px-0 focus:bg-transparent">
                                <Link 
                                  to={item.link} 
                                  className="text-sm text-white/80 hover:text-white cursor-pointer py-1.5 block transition-colors"
                                >
                                  {item.title}
                                </Link>
                              </DropdownMenuItem>
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
                        className="block text-center text-sm font-medium text-[#C9A050] hover:text-[#D4AF61] transition-colors"
                      >
                        View All Treatments & Pricing →
                      </Link>
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

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
            <div className="flex items-center gap-2">
              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="sm"
                className={`lg:hidden transition-colors duration-500 ${
                  isScrolled 
                    ? 'text-gray-600 hover:text-gray-900' 
                    : 'text-white/70 hover:text-white'
                }`}
                onClick={() => setIsMobileMenuOpen(true)}
              >
                Treatments
                <ChevronDown className="h-4 w-4 ml-1" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className={`transition-colors duration-500 ${
                  isScrolled 
                    ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="h-5 w-5" />
              </Button>
              <Button
                onClick={() => window.open('https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29', '_blank')}
                className="bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full px-4 md:px-6 text-sm font-medium"
              >
                <Calendar className="h-4 w-4 md:mr-2" />
                <span className="hidden md:inline">Book</span>
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
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <span className="text-2xl font-bold text-white">Treatments</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setExpandedCategory(null);
                }}
                className="text-white hover:bg-white/10"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Categories */}
            <div className="overflow-y-auto h-[calc(100vh-80px)]">
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
                    className="w-full flex items-center justify-between px-6 py-5 border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <span className="text-xl font-medium text-white">{category.label}</span>
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
                        {category.items.map((item) => (
                          <Link
                            key={item.link}
                            to={item.link}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setExpandedCategory(null);
                            }}
                            className="block px-8 py-4 text-lg text-white/80 hover:text-white hover:bg-white/5 transition-colors border-b border-white/5"
                          >
                            {item.title}
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
