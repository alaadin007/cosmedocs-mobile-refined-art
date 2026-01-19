import { useState, useEffect, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Calendar, Search } from "lucide-react";
import { motion } from "framer-motion";
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
      { title: "Face Botox", link: "/botox-london" },
      { title: "Forehead Lines", link: "/forehead-lines-botox" },
      { title: "Frown Lines", link: "/frown-line-botox" },
      { title: "Crow's Feet", link: "/crows-feet-botox" },
      { title: "Lip Flip", link: "/lip-flip" },
      { title: "Masseter", link: "/masseter-botox" },
      { title: "Hyperhidrosis", link: "/excessive-sweat-botox" },
    ]
  },
  {
    label: "Dermal Fillers",
    items: [
      { title: "Lip Fillers", link: "/lip-fillers" },
      { title: "Cheek Filler", link: "/cheek-filler" },
      { title: "Jawline Filler", link: "/jawline-filler" },
      { title: "Under Eye", link: "/tear-trough-filler" },
      { title: "Nose Filler", link: "/non-surgical-nose-job" },
    ]
  },
  {
    label: "Skin",
    items: [
      { title: "Profhilo", link: "/profhilo" },
      { title: "Polynucleotides", link: "/polynucleotide-treatment" },
      { title: "HydraFacial", link: "/hydrafacial" },
      { title: "Chemical Peel", link: "/chemical-peel" },
      { title: "Microneedling", link: "/microneedling" },
    ]
  },
  {
    label: "Advanced",
    items: [
      { title: "PDO Threads", link: "/pdo-threads" },
      { title: "8 Point Facelift", link: "/8-point-facelift" },
      { title: "Fat Dissolve", link: "/fat-dissolve" },
      { title: "Hair Transplant", link: "/hair-transplant-surgeon" },
    ]
  }
];

const navItems = [
  { label: "Pricing", link: "/treatments" },
  { label: "About", link: "/about" },
  { label: "B/A Gallery", link: "/before-after-gallery" },
  { label: "Cosmetalk", link: "/cosmetalk" },
  { label: "Contact", link: "/contact" },
];

export default function Home2Header() {
  const [isTreatmentsOpen, setIsTreatmentsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Switch to light theme after scrolling 100px
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            <nav className="hidden md:flex items-center gap-1">
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
                  className="w-[600px] p-4 bg-black/95 backdrop-blur-xl border-white/10"
                  align="start"
                >
                  <div className="grid grid-cols-4 gap-4">
                    {treatmentCategories.map((category) => (
                      <div key={category.label}>
                        <DropdownMenuLabel className="text-xs font-semibold text-[#C9A050] uppercase tracking-wider mb-2">
                          {category.label}
                        </DropdownMenuLabel>
                        {category.items.map((item) => (
                          <DropdownMenuItem key={item.link} asChild>
                            <Link 
                              to={item.link} 
                              className="text-sm text-white/70 hover:text-white cursor-pointer py-1.5"
                            >
                              {item.title}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </div>
                    ))}
                  </div>
                  <DropdownMenuSeparator className="my-3 bg-white/10" />
                  <Link 
                    to="/treatments" 
                    className="block text-center text-sm font-medium text-[#C9A050] hover:text-[#D4AF61] py-2"
                  >
                    View All Treatments & Pricing →
                  </Link>
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

          {/* Mobile Navigation */}
          <div className="md:hidden pb-3 -mt-1">
            <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className={`gap-1 shrink-0 transition-colors duration-500 ${
                      isScrolled ? 'text-gray-600' : 'text-white/70'
                    }`}
                  >
                    Treatments
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-black/95 backdrop-blur-xl border-white/10">
                  {treatmentCategories.map((category) => (
                    <div key={category.label}>
                      <DropdownMenuLabel className="text-xs text-[#C9A050]">
                        {category.label}
                      </DropdownMenuLabel>
                      {category.items.slice(0, 3).map((item) => (
                        <DropdownMenuItem key={item.link} asChild>
                          <Link to={item.link} className="text-sm text-white/70">
                            {item.title}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </div>
                  ))}
                  <DropdownMenuSeparator className="bg-white/10" />
                  <DropdownMenuItem asChild>
                    <Link to="/treatments" className="text-[#C9A050] font-medium">
                      All Treatments
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              {navItems.slice(0, 4).map((item) => (
                <Link 
                  key={item.link}
                  to={item.link}
                  className={`px-2.5 py-1.5 text-xs font-medium shrink-0 transition-colors duration-500 ${
                    isScrolled ? 'text-gray-500 hover:text-gray-900' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>

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
