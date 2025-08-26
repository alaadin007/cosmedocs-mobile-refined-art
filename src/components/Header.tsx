
import { useState } from "react";
import { Menu, Search, MessageSquare, Mail, Phone, Instagram, Twitter, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import LiquidGlassMenu from "./LiquidGlassMenu";
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
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\s+/g, "")}`;

  const contactOptions = [
    {
      icon: Sparkles,
      label: "AI Aesthetic Analysis",
      action: () => setIsAnalysisOpen(true)
    },
    {
      icon: MessageSquare,
      label: "WhatsApp",
      action: () => window.open(whatsappUrl, "_blank")
    },
    {
      icon: Search,
      label: "Search CosmeDocs",
      action: () => setIsSearchOpen(true)
    },
    {
      icon: Mail,
      label: "Email Us",
      action: () => window.open("mailto:info@cosmedocs.com", "_blank")
    },
    {
      icon: Phone,
      label: "Call Us",
      action: () => window.open("tel:+447735606447", "_blank")
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
          <Link to="/" className="flex flex-col items-start">
            <div className="text-2xl md:text-3xl font-bold">
              <span className="text-white">COSME</span>
              <span className="text-white">DOCS</span>
            </div>
            <p className="text-xs text-amber-400 -mt-1">Harley Street Since 2007, 1M+ Injection</p>
          </Link>
          
          {/* Desktop Navigation - Simplified */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              onClick={() => setIsMobileMenuOpen(true)}
              variant="ghost"
              size="icon"
              className="text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300"
              title="Menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>

          {/* Desktop Actions */}
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
            
            <Button
              onClick={() => setIsContactMenuOpen(true)}
              variant="ghost"
              size="icon"
              className="text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300"
              title="Contact"
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              onClick={() => setIsSearchOpen(true)}
              variant="ghost"
              size="icon"
              className="text-white/90 hover:text-white hover:bg-white/10"
              title="Search"
            >
              <Search className="h-5 w-5" />
            </Button>
            
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white/90 hover:text-white hover:bg-white/10">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="p-0 border-none">
                <LiquidGlassMenu 
                  menuItems={menuItems}
                  onItemClick={() => setIsMobileMenuOpen(false)}
                  onContactClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsContactMenuOpen(true);
                  }}
                />
              </SheetContent>
            </Sheet>
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
        options={contactOptions}
      />
    </>
  );
}
