
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Helmet } from "react-helmet-async";
import { Menu, Search, MessageSquare, Mail, Phone, Instagram, Twitter, QrCode } from "lucide-react";
import QRCode from "qrcode";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import LiquidGlassMenu from "@/components/LiquidGlassMenu";
import LiquidGlassSearch from "@/components/LiquidGlassSearch";
import LiquidGlassContactMenu from "@/components/LiquidGlassContactMenu";
import LiquidGlassFacialAssessment from "@/components/LiquidGlassFacialAssessment";
import LiquidGlassAllTreatments from "@/components/LiquidGlassAllTreatments";
import Footer from "@/components/Footer";

const Home2 = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isContactMenuOpen, setIsContactMenuOpen] = useState(false);
  const [isFacialAssessmentOpen, setIsFacialAssessmentOpen] = useState(false);
  const [isAllTreatmentsOpen, setIsAllTreatmentsOpen] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState("");
  const isMobile = useIsMobile();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Treatments", path: "/treatments" },
    { name: "About Us", path: "/about" },
    { name: "Partners", path: "/partners" },
    { name: "Contact", path: "/contact" },
  ];

  const whatsappNumber = "+447735606447";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, "")}?text=Hello, I'm interested in aesthetic treatments at CosmeDocs.`;

  // Generate QR code for WhatsApp
  useEffect(() => {
    const generateQRCode = async () => {
      try {
        const qrDataUrl = await QRCode.toDataURL(whatsappUrl, {
          width: 200,
          margin: 1,
          color: {
            dark: '#000000',
            light: '#FFFFFF'
          }
        });
        setQrCodeDataUrl(qrDataUrl);
      } catch (error) {
        console.error('Error generating QR code:', error);
      }
    };
    generateQRCode();
  }, [whatsappUrl]);

  const contactGroups = [
    {
      title: "Navigate",
      options: [
        { name: "Home", path: "/" },
        { name: "Treatments", path: "/treatments" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
      ].map(item => ({
        icon: MessageSquare,
        label: item.name,
        action: () => window.location.href = item.path
      }))
    },
    {
      title: "Get in Touch", 
      options: [
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
      ]
    }
  ];

  return (
    <TooltipProvider>
      <Helmet>
        <title>Cosmedocs - Aesthetic Medicine Harley Street | Botox & Fillers London</title>
        <meta name="description" content="Premium aesthetic medicine on Harley Street since 2007. Botox, dermal fillers, lip enhancement. 1M+ injections. Invisible art philosophy." />
        <meta name="keywords" content="cosmedocs, harley street aesthetic clinic, botox london, dermal fillers, lip enhancement, aesthetic medicine, cosmetic treatments" />
        <link rel="canonical" href="https://www.cosmedocs.co.uk/" />
      </Helmet>
      <div className="bg-black text-white min-h-screen flex flex-col">
        {/* Integrated Header */}
        <header className="fixed top-0 left-0 right-0 z-50">
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
                Contact Us
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

        {/* Single Screen Hero Section */}
        <section className="flex-1 flex items-center justify-center min-h-screen px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Main Heading */}
              <div className="space-y-2">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                  cosmedocs
                </h1>
                <p className="text-xl md:text-2xl italic text-gray-300">
                  *Our aesthetics is invisible art
                </p>
              </div>

              {/* Tagline */}
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-lg md:text-xl text-gray-400"
              >
                art • science • bit of magic
              </motion.p>

              {/* Description */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="max-w-2xl mx-auto space-y-4"
              >
                <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                  Aesthetic medicine by Cosmedocs is minimal.
                </p>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                  Quiet, not loud.
                </p>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                  Invisible, not exaggerated.
                </p>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed italic">
                  It's transformation that speaks — without saying a word.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="pt-8 space-y-4"
              >
                <Button
                  onClick={() => setIsAllTreatmentsOpen(true)}
                  className="bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 border border-white/20 mb-4"
                >
                  All Treatments
                </Button>
                <br />
                <Button
                  onClick={() => setIsFacialAssessmentOpen(true)}
                  className="bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm rounded-full px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 border border-white/20"
                >
                  Comprehensive Facial Assessment
                </Button>
              </motion.div>

              {/* WhatsApp QR Code */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="pt-8"
              >
                <Button
                  onClick={() => setShowQRCode(!showQRCode)}
                  className="bg-green-600/20 text-white hover:bg-green-600/30 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105 border border-green-500/30 flex items-center gap-2"
                >
                  <QrCode className="h-4 w-4" />
                  WhatsApp QR Code
                </Button>
                
                {showQRCode && qrCodeDataUrl && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 inline-block bg-white p-4 rounded-2xl shadow-2xl"
                  >
                    <img 
                      src={qrCodeDataUrl} 
                      alt="WhatsApp QR Code" 
                      className="w-48 h-48"
                    />
                    <p className="text-center text-gray-700 text-sm mt-2 font-medium">
                      Scan to chat on WhatsApp
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO content for search engines */}
        <div className="sr-only">
          <p>
            Cosmedocs is London's premier aesthetic medicine clinic located on prestigious Harley Street, offering advanced cosmetic treatments since 2007. Our expert practitioners specialize in Botox injections, dermal fillers, lip enhancement, non-surgical nose jobs, skin boosters, and comprehensive facial rejuvenation treatments. With over 1 million injections performed, we are recognized leaders in aesthetic medicine, providing natural-looking results through our invisible art philosophy. Our clinic offers consultation services, advanced anti-aging treatments, facial contouring, and personalized aesthetic solutions. We pride ourselves on subtle enhancement that speaks without saying a word, ensuring every client receives transformative results tailored to their individual needs. Our comprehensive approach addresses skin quality, wrinkle reduction, volume restoration, and facial harmonization using the latest techniques and premium products. Located at 10 Harley Street, London W1G 9PF, we serve clients seeking the highest standard of aesthetic medicine in the heart of London's medical district. Contact us at 0333 0551 503 or info@cosmedocs.com to begin your aesthetic journey with London's most trusted cosmetic medicine specialists.
          </p>
        </div>

        {/* Footer */}
        <Footer />

        {/* Liquid Glass Modals */}
        <LiquidGlassAllTreatments 
          isOpen={isAllTreatmentsOpen}
          onClose={() => setIsAllTreatmentsOpen(false)}
        />

        <LiquidGlassFacialAssessment 
          isOpen={isFacialAssessmentOpen}
          onClose={() => setIsFacialAssessmentOpen(false)}
        />

        <LiquidGlassSearch 
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
        />

        <LiquidGlassContactMenu
          isOpen={isContactMenuOpen}
          onClose={() => setIsContactMenuOpen(false)}
          groups={contactGroups}
        />
      </div>
    </TooltipProvider>
  );
};

export default Home2;
