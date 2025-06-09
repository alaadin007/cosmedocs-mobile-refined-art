
import { useState } from "react";
import { Menu, Search, MessageSquare, Mail, Phone, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import LiquidGlassMenu from "./LiquidGlassMenu";
import LiquidGlassSearch from "./LiquidGlassSearch";
import LiquidGlassContactMenu from "./LiquidGlassContactMenu";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isContactMenuOpen, setIsContactMenuOpen] = useState(false);
  
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Treatments", path: "/treatments" },
    { name: "About Us", path: "/about" },
    { name: "Partners", path: "/partners" },
    { name: "Contact", path: "/contact" },
  ];

  const whatsappNumber = "+447735606447";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\s+/g, "")}`;

  const contactOptions = [
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
            <p className="text-xs text-gray-300 -mt-1">Harley Street Since 2007, 1M+ Injection</p>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-white/90 hover:text-white transition-all duration-300 hover:scale-105"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              onClick={() => setIsSearchOpen(true)}
              variant="ghost"
              size="icon"
              className="text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              <Search className="h-5 w-5" />
            </Button>
            
            <Button
              onClick={() => setIsContactMenuOpen(true)}
              className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm rounded-full px-6 py-2 transition-all duration-300 hover:scale-105 border border-white/20"
            >
              Do something here
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              onClick={() => setIsSearchOpen(true)}
              variant="ghost"
              size="icon"
              className="text-white/90 hover:text-white hover:bg-white/10"
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
