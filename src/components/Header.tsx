
import { useState } from "react";
import { Menu, Search, MessageSquare, Mail, Phone, Instagram, Twitter, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import LiquidGlassSearch from "./LiquidGlassSearch";
import LiquidGlassContactMenu from "./LiquidGlassContactMenu";
import AestheticAnalysisWizard from "./AestheticAnalysisWizard";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isContactMenuOpen, setIsContactMenuOpen] = useState(false);
  const [isAnalysisOpen, setIsAnalysisOpen] = useState(false);
  
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Treatments", path: "/treatments" },
    { name: "Cosmetalk", path: "/cosmetalk" },
    { name: "About Us", path: "/about" },
    { name: "Partners", path: "/partners" },
    { name: "Contact", path: "/contact" },
  ];

  const whatsappNumber = "+447735606447";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, "")}?text=Hello, I'm interested in aesthetic treatments at CosmeDocs.`;

  const allMenuOptions = [
    // Navigation Items
    {
      icon: Sparkles,
      label: "Treatments",
      action: () => window.location.href = "/treatments"
    },
    {
      icon: MessageSquare,
      label: "Cosmetalk",
      action: () => window.location.href = "/cosmetalk"
    },
    {
      icon: Users,
      label: "About Us",
      action: () => window.location.href = "/about"
    },
    {
      icon: Phone,
      label: "Contact",
      action: () => window.location.href = "/contact"
    },
    // Contact Options
    {
      icon: Sparkles,
      label: "AI Aesthetic Analysis",
      action: () => setIsAnalysisOpen(true)
    },
    {
      icon: MessageSquare,
      label: "WhatsApp",
      action: () => window.open(whatsappUrl, "_blank"),
      subtitle: "+44 7735 606447"
    },
    {
      icon: Search,
      label: "Search CosmeDocs",
      action: () => setIsSearchOpen(true)
    },
    {
      icon: Mail,
      label: "Email Us",
      action: () => window.open("mailto:info@cosmedocs.com", "_blank"),
      subtitle: "info@cosmedocs.com"
    },
    {
      icon: Phone,
      label: "Call Us - Clinic 1",
      action: () => window.open("tel:+443330551503", "_blank"),
      subtitle: "333 0551 503"
    },
    {
      icon: Phone,
      label: "Call Us - Clinic 2", 
      action: () => window.open("tel:+448008600178", "_blank"),
      subtitle: "0800 8600 178"
    },
    {
      icon: Instagram,
      label: "Instagram",
      action: () => window.open("https://instagram.com/cosmedocs", "_blank")
    },
    {
      icon: Twitter,
      label: "Twitter",
      action: () => window.open("https://twitter.com/cosmedocs", "_blank")
    }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Liquid glass background */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-xl border-b border-white/10" />
        
         <div className="relative flex items-center justify-between px-4 py-3 md:px-6 lg:px-8">
          {/* Desktop Menu Button - Left */}
          <div className="hidden md:flex items-center">
            <Button
              onClick={() => setIsContactMenuOpen(true)}
              variant="ghost"
              size="icon"
              className="text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 p-2 rounded-lg"
              title="Menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>

          {/* Logo - Center */}
          <Link to="/" className="flex flex-col items-center absolute left-1/2 transform -translate-x-1/2">
            <div className="text-2xl md:text-3xl font-bold">
              <span className="text-white">COSME</span>
              <span className="text-white">DOCS</span>
            </div>
            <p className="text-xs text-amber-400 -mt-1">Harley Street Since 2007, 1M+ Injection</p>
          </Link>

          {/* Desktop Actions - Right */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              onClick={() => setIsSearchOpen(true)}
              variant="ghost"
              size="icon"
              className="text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300"
              title="Search"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center justify-between w-full">
            {/* Mobile Menu Button - Left */}
            <Button
              onClick={() => setIsContactMenuOpen(true)}
              variant="ghost"
              size="icon"
              className="text-white/90 hover:text-white hover:bg-white/10 p-2 rounded-lg"
              title="Menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
            
            {/* Mobile Search - Right */}
            <Button
              onClick={() => setIsSearchOpen(true)}
              variant="ghost"
              size="icon"
              className="text-white/90 hover:text-white hover:bg-white/10"
              title="Search"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Search Modal */}
      <LiquidGlassSearch 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* Contact Menu Modal */}
      <LiquidGlassContactMenu
        isOpen={isContactMenuOpen}
        onClose={() => setIsContactMenuOpen(false)}
        options={allMenuOptions}
      />

      {/* Aesthetic Analysis Modal */}
      <AestheticAnalysisWizard
        isOpen={isAnalysisOpen}
        onClose={() => setIsAnalysisOpen(false)}
      />
    </>
  );
}
