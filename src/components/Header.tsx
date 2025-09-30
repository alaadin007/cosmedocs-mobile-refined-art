
import { useState } from "react";
import { Menu, Search, MessageSquare, Mail, Phone, Instagram, Twitter, Sparkles, Users, Camera, Brain } from "lucide-react";
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

  const menuGroups = [
    {
      title: "Navigate",
      options: [
        {
          icon: Sparkles,
          label: "Treatments",
          action: () => window.location.href = "/treatments"
        },
        {
          icon: Camera,
          label: "Before & After Gallery",
          action: () => window.location.href = "/before-after-gallery"
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
        }
      ]
    },
    {
      title: "Get in Touch",
      options: [
        {
          icon: Sparkles,
          label: "AI Aesthetic Intelligence",
          action: () => window.location.href = "/aesthetic-intelligence",
          subtitle: "Product analysis tool"
        },
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
          label: "Chat With Our AI CosmeDoc",
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
      ]
    }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Liquid glass background */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-xl border-b border-white/10" />
        
         <div className="relative flex items-center justify-between px-4 py-3 md:px-6 lg:px-8">
          {/* Desktop Menu Button - Left */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              onClick={() => setIsContactMenuOpen(true)}
              variant="ghost"
              size="icon"
              className="text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 p-2 rounded-lg"
              title="Menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <Button
              onClick={() => setIsSearchOpen(true)}
              variant="ghost"
              className="text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 px-3 py-2 rounded-lg flex items-center gap-2"
              title="Ask anything"
            >
              <Brain className="h-5 w-5" />
              <span className="text-sm">ask anything</span>
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
            <div className="flex items-center gap-2">
              <Button
                onClick={() => setIsContactMenuOpen(true)}
                variant="ghost"
                size="icon"
                className="text-white/90 hover:text-white hover:bg-white/10 p-2 rounded-lg"
                title="Menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
              <Button
                onClick={() => setIsSearchOpen(true)}
                variant="ghost"
                className="text-white/90 hover:text-white hover:bg-white/10 px-2 py-2 rounded-lg flex items-center gap-1"
                title="Ask anything"
              >
                <Brain className="h-4 w-4" />
                <span className="text-xs">ask anything</span>
              </Button>
            </div>
            
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
        groups={menuGroups}
      />

      {/* Aesthetic Analysis Modal */}
      <AestheticAnalysisWizard
        isOpen={isAnalysisOpen}
        onClose={() => setIsAnalysisOpen(false)}
      />
    </>
  );
}
