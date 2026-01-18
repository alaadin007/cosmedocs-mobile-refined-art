import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Calendar, Search } from "lucide-react";
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Glass background */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-xl border-b border-gray-200/50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/home2" className="flex flex-col">
            <span className="text-xl md:text-2xl font-bold tracking-tight text-gray-900">
              COSMEDOCS
            </span>
            <span className="text-[10px] text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600 -mt-1">
              Harley Street Since 2007
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {/* Treatments Mega Dropdown */}
            <DropdownMenu open={isTreatmentsOpen} onOpenChange={setIsTreatmentsOpen}>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="text-gray-700 hover:text-gray-900 hover:bg-gray-100/80 gap-1 font-medium"
                >
                  Treatments
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isTreatmentsOpen ? 'rotate-180' : ''}`} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="w-[600px] p-4 bg-white/95 backdrop-blur-xl border-gray-200"
                align="start"
              >
                <div className="grid grid-cols-4 gap-4">
                  {treatmentCategories.map((category) => (
                    <div key={category.label}>
                      <DropdownMenuLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                        {category.label}
                      </DropdownMenuLabel>
                      {category.items.map((item) => (
                        <DropdownMenuItem key={item.link} asChild>
                          <Link 
                            to={item.link} 
                            className="text-sm text-gray-700 hover:text-gray-900 cursor-pointer py-1.5"
                          >
                            {item.title}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </div>
                  ))}
                </div>
                <DropdownMenuSeparator className="my-3" />
                <Link 
                  to="/treatments" 
                  className="block text-center text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 py-2"
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
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100/80 rounded-lg transition-colors"
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
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-100/80"
              onClick={() => window.dispatchEvent(new CustomEvent('open-chatbot'))}
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              onClick={() => window.open('https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29', '_blank')}
              className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white rounded-full px-4 md:px-6 text-sm font-medium"
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
                <Button variant="ghost" size="sm" className="text-gray-700 gap-1 shrink-0">
                  Treatments
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white/95 backdrop-blur-xl">
                {treatmentCategories.map((category) => (
                  <div key={category.label}>
                    <DropdownMenuLabel className="text-xs text-gray-500">
                      {category.label}
                    </DropdownMenuLabel>
                    {category.items.slice(0, 3).map((item) => (
                      <DropdownMenuItem key={item.link} asChild>
                        <Link to={item.link} className="text-sm">
                          {item.title}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </div>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/treatments" className="text-amber-600 font-medium">
                    All Treatments
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {navItems.slice(0, 4).map((item) => (
              <Link 
                key={item.link}
                to={item.link}
                className="px-2.5 py-1.5 text-xs font-medium text-gray-600 hover:text-gray-900 shrink-0"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

