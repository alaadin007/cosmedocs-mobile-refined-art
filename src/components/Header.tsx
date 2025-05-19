
import { useState } from "react";
import { Menu, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Treatments", path: "/treatments" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const whatsappNumber = "+447735606447";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\s+/g, "")}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="flex items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        <Link to="/" className="flex flex-col items-start">
          <div className="text-2xl md:text-3xl font-bold">
            <span className="text-white">COSME</span>
            <span className="text-white">DOCS</span>
          </div>
          <p className="text-xs text-gray-400 -mt-1">Harley Street Since 2007, 1M+ Injection</p>
        </Link>
        
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-white hover:text-gray-300 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-green-400 transition-colors"
            aria-label="Contact us on WhatsApp"
          >
            <MessageSquare className="h-5 w-5 mr-2" />
            <span className="text-sm">+44 7735 606447</span>
          </a>
          <Button variant="outline" className="bg-white text-black hover:bg-gray-200 rounded-full px-6">
            Book Now
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black text-white p-0">
              <div className="flex flex-col h-full">
                <div className="px-6 py-6 border-b border-gray-800">
                  <div className="text-xl font-bold">
                    COSMEDOCS
                  </div>
                  <p className="text-xs mt-1 text-gray-400">Harley Street Since 2007, 1M+ Injection</p>
                </div>
                <div className="px-6 py-8 flex flex-col space-y-4 flex-1">
                  {menuItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="text-white hover:text-gray-300 py-2 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white hover:text-green-400 py-2 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <MessageSquare className="h-5 w-5 mr-2" />
                    <span>+44 7735 606447</span>
                  </a>
                </div>
                <div className="px-6 py-6 border-t border-gray-800">
                  <Button className="w-full bg-white text-black hover:bg-gray-200 rounded-full">
                    Book Now
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
