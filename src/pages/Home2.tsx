import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Menu, Search, MessageSquare, Mail, Phone, Instagram, Twitter, Eye, HelpCircle } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent
} from "@/components/ui/card";
import LiquidGlassMenu from "@/components/LiquidGlassMenu";
import LiquidGlassSearch from "@/components/LiquidGlassSearch";
import LiquidGlassContactMenu from "@/components/LiquidGlassContactMenu";
import LiquidGlassFacialAssessment from "@/components/LiquidGlassFacialAssessment";
import LiquidGlassAllTreatments from "@/components/LiquidGlassAllTreatments";
import PopularTreatments from "@/components/PopularTreatments";
import Footer from "@/components/Footer";

const Home2 = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isContactMenuOpen, setIsContactMenuOpen] = useState(false);
  const [isFacialAssessmentOpen, setIsFacialAssessmentOpen] = useState(false);
  const [isAllTreatmentsOpen, setIsAllTreatmentsOpen] = useState(false);
  const [isRejuvenationDialogOpen, setIsRejuvenationDialogOpen] = useState(false);
  const [isScoringDialogOpen, setIsScoringDialogOpen] = useState(false);
  const isMobile = useIsMobile();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Treatments", path: "/treatments" },
    { name: "About Us", path: "/about" },
    { name: "Partners", path: "/partners" },
    { name: "Contact", path: "/contact" },
  ];

  const whatsappNumber = "+447735606447";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\s+/g, "")}`;
  const bookingUrl = "https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29";

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
    <TooltipProvider>
      <div className="bg-black text-white">
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

        {/* Hero Section */}
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
            </motion.div>
          </div>
        </section>

        {/* Featured Treatments Section */}
        <PopularTreatments />

        {/* Face Rejuvenation Assessment Section */}
        <section className="py-20 bg-gradient-to-b from-black to-[#0A0A0A]" aria-labelledby="rejuvenation-heading">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <motion.h2 id="rejuvenation-heading" className="text-4xl md:text-5xl font-bold mb-10 text-center" initial={{
              opacity: 0
            }} whileInView={{
              opacity: 1
            }} transition={{
              duration: 0.5
            }} viewport={{
              once: true
            }}>
                Comprehensive Facial Assessment
              </motion.h2>
              
              <motion.div className="text-center max-w-3xl mx-auto mb-16" initial={{
              opacity: 0
            }} whileInView={{
              opacity: 1
            }} transition={{
              delay: 0.2,
              duration: 0.5
            }} viewport={{
              once: true
            }}>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  Every transformation begins with understanding. Our systematic approach evaluates four key aging factors to create your personalized treatment plan.
                </p>
              </motion.div>
              
              <Dialog open={isRejuvenationDialogOpen} onOpenChange={setIsRejuvenationDialogOpen}>
                <DialogTrigger asChild>
                  <motion.div className="relative max-w-3xl mx-auto cursor-pointer rounded-xl overflow-hidden mb-16" initial={{
                  opacity: 0,
                  y: 20
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  delay: 0.4,
                  duration: 0.6
                }} viewport={{
                  once: true
                }}>
                    <img src="/lovable-uploads/8675e9bd-ccdf-44e5-80b3-c916c48f40e5.png" alt="Comprehensive facial assessment before and after results" className="w-full h-auto" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center pb-12">
                      <div className="flex items-center justify-center">
                        <Eye className="mr-3 h-6 w-6" />
                        <p className="text-white text-xl font-medium">Discover your detailed facial analysis</p>
                      </div>
                    </div>
                    
                    {/* Scoring information tooltip/button */}
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button onClick={e => {
                        e.stopPropagation();
                        setIsScoringDialogOpen(true);
                      }} className="absolute top-4 right-4 bg-black/60 rounded-full p-2 hover:bg-black/80 transition-colors" aria-label="See how we score facial aesthetics">
                          <HelpCircle className="h-5 w-5" />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>See how we score facial aesthetics</p>
                      </TooltipContent>
                    </Tooltip>
                  </motion.div>
                </DialogTrigger>
                
                {/* Dialog content remains the same as Home page */}
                <DialogContent className="bg-black border-gray-800 max-w-5xl">
                  <DialogHeader className="pb-4">
                    <DialogTitle className="text-2xl">Facial Assessment Results</DialogTitle>
                    <DialogDescription className="text-base">
                      Before and after assessment showing improvement scores across key categories
                    </DialogDescription>
                  </DialogHeader>
                  
                  {/* Before and After Image at the top */}
                  <div className="mb-6">
                    <img 
                      src="/lovable-uploads/8675e9bd-ccdf-44e5-80b3-c916c48f40e5.png" 
                      alt="Before and after facial assessment results" 
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  
                  <div className="py-4 overflow-auto">
                    <Table className="w-full text-left">
                      <TableHeader>
                        <TableRow className="bg-black">
                          <TableHead className="w-1/3 font-semibold text-white">Before (Client has had previous upper face Botox)</TableHead>
                          <TableHead className="w-1/6 text-center font-semibold text-white">Score</TableHead>
                          <TableHead className="w-1/3 font-semibold text-white">After</TableHead>
                          <TableHead className="w-1/6 text-center font-semibold text-white">Score</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {/* Skin Appearance Section */}
                        <TableRow className="bg-gray-900">
                          <TableCell colSpan={2} className="font-bold text-lg">Skin Appearance (0,1,2,3)</TableCell>
                          <TableCell colSpan={2} className="font-bold text-lg">Skin (0,1,2,3)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Pores Size & Congestion</TableCell>
                          <TableCell className="text-center">2</TableCell>
                          <TableCell>Pores Size & Congestion</TableCell>
                          <TableCell className="text-center">1</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Clarity / Changes</TableCell>
                          <TableCell className="text-center">2</TableCell>
                          <TableCell>Clarity / Changes</TableCell>
                          <TableCell className="text-center">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Hydration</TableCell>
                          <TableCell className="text-center">1</TableCell>
                          <TableCell>Hydration</TableCell>
                          <TableCell className="text-center">1</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Roughness</TableCell>
                          <TableCell className="text-center">2</TableCell>
                          <TableCell>Roughness</TableCell>
                          <TableCell className="text-center">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Sensitivity / Inflammation</TableCell>
                          <TableCell className="text-center">2</TableCell>
                          <TableCell>Sensitivity / Inflammation</TableCell>
                          <TableCell className="text-center">1</TableCell>
                        </TableRow>
                        
                        {/* Static Lines Section */}
                        <TableRow className="bg-gray-900">
                          <TableCell colSpan={2} className="font-bold text-lg">Static Lines (0,1,2,3,4)</TableCell>
                          <TableCell colSpan={2} className="font-bold text-lg">Static Lines (0,1,2,3,4)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Frown</TableCell>
                          <TableCell className="text-center">0</TableCell>
                          <TableCell>Frown</TableCell>
                          <TableCell className="text-center">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Forehead</TableCell>
                          <TableCell className="text-center">0</TableCell>
                          <TableCell>Forehead</TableCell>
                          <TableCell className="text-center">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Crows Feet</TableCell>
                          <TableCell className="text-center">0</TableCell>
                          <TableCell>Crows Feet</TableCell>
                          <TableCell className="text-center">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>DAO (Sad Expression Lines)</TableCell>
                          <TableCell className="text-center">0</TableCell>
                          <TableCell>DAO (Sad Expression Lines)</TableCell>
                          <TableCell className="text-center">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Bunny Lines</TableCell>
                          <TableCell className="text-center">0</TableCell>
                          <TableCell>Bunny Lines</TableCell>
                          <TableCell className="text-center">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Nasolabial Crease</TableCell>
                          <TableCell className="text-center">2</TableCell>
                          <TableCell>Nasolabial Crease</TableCell>
                          <TableCell className="text-center">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Oral Commissure</TableCell>
                          <TableCell className="text-center">1</TableCell>
                          <TableCell>Oral Commissure</TableCell>
                          <TableCell className="text-center">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Mentalis Crease</TableCell>
                          <TableCell className="text-center">1</TableCell>
                          <TableCell>Mentalis Crease</TableCell>
                          <TableCell className="text-center">0</TableCell>
                        </TableRow>
                        
                        {/* Facial Volume Loss Section */}
                        <TableRow className="bg-gray-900">
                          <TableCell colSpan={2} className="font-bold text-lg">Facial Volume Loss (0,1,2,3,4)</TableCell>
                          <TableCell colSpan={2} className="font-bold text-lg">Facial Volume Loss (0,1,2,3,4)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Undereye circles</TableCell>
                          <TableCell className="text-center">1</TableCell>
                          <TableCell>Undereye circles</TableCell>
                          <TableCell className="text-center">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Cheeks</TableCell>
                          <TableCell className="text-center">2</TableCell>
                          <TableCell>Cheeks</TableCell>
                          <TableCell className="text-center">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Lips Body</TableCell>
                          <TableCell className="text-center">1</TableCell>
                          <TableCell>Lips Body</TableCell>
                          <TableCell className="text-center">1</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Oral Commissure</TableCell>
                          <TableCell className="text-center">1</TableCell>
                          <TableCell>Oral Commissure</TableCell>
                          <TableCell className="text-center">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Nose Drooping</TableCell>
                          <TableCell className="text-center">0</TableCell>
                          <TableCell>Nose Drooping</TableCell>
                          <TableCell className="text-center">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Outer Cheek/In Front Of Ear</TableCell>
                          <TableCell className="text-center">2</TableCell>
                          <TableCell>Outer Cheek/In Front Of Ear</TableCell>
                          <TableCell className="text-center">0</TableCell>
                        </TableRow>
                        
                        {/* Sagging Skin Section */}
                        <TableRow className="bg-gray-900">
                          <TableCell colSpan={2} className="font-bold text-lg">Sagging Skin (0,1,2,3,4)</TableCell>
                          <TableCell colSpan={2} className="font-bold text-lg">Sagging Skin (0,1,2,3,4)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Jowls/Jawline</TableCell>
                          <TableCell className="text-center">0</TableCell>
                          <TableCell>Jowls/Jawline</TableCell>
                          <TableCell className="text-center">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Nasolabial Folds</TableCell>
                          <TableCell className="text-center">1</TableCell>
                          <TableCell>Nasolabial Folds</TableCell>
                          <TableCell className="text-center">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Oral Commisure Fold</TableCell>
                          <TableCell className="text-center">2</TableCell>
                          <TableCell>Oral Commisure Fold</TableCell>
                          <TableCell className="text-center">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Eyebrow Hooding</TableCell>
                          <TableCell className="text-center">1</TableCell>
                          <TableCell>Eyebrow Hooding</TableCell>
                          <TableCell className="text-center">1</TableCell>
                        </TableRow>
                        
                        {/* Total Section */}
                        <TableRow className="bg-gray-900">
                          <TableCell className="font-bold">Total</TableCell>
                          <TableCell className="text-center font-bold">24</TableCell>
                          <TableCell className="font-bold">Total</TableCell>
                          <TableCell className="text-center font-bold">5</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </DialogContent>
              </Dialog>
              
              {/* Facial Aesthetics Scoring Dialog */}
              <Dialog open={isScoringDialogOpen} onOpenChange={setIsScoringDialogOpen}>
                <DialogContent className="bg-black border-gray-800 max-w-4xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader className="pb-4">
                    <DialogTitle className="text-2xl">How We Score Facial Aesthetics</DialogTitle>
                    <DialogDescription className="text-base">
                      Our comprehensive facial assessment methodology
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <img src="/lovable-uploads/54687321-8f1e-44e3-ab47-f76a7a5edb64.png" alt="Facial aesthetics scoring chart showing before and after results" className="w-full h-auto rounded-lg" />
                    <div className="mt-6 space-y-4">
                      <h3 className="text-xl font-medium">Our Assessment Categories</h3>
                      <p className="text-base text-gray-300">
                        We evaluate facial aesthetics through four key categories, each scored on a scale of 0-4:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-300">
                        <li><span className="font-medium">Skin Appearance</span> - Evaluating pores, clarity, hydration, texture, and sensitivity</li>
                        <li><span className="font-medium">Static Lines</span> - Assessing visible lines at rest in various facial regions</li>
                        <li><span className="font-medium">Facial Volume Loss</span> - Measuring volume deficits in key facial areas</li>
                        <li><span className="font-medium">Sagging Skin</span> - Evaluating skin laxity and structural support</li>
                      </ul>
                      <p className="text-base text-gray-300 mt-4">
                        This systematic approach allows us to create highly personalized treatment plans that address your unique concerns and goals.
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              
              <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" initial={{
              opacity: 0
            }} whileInView={{
              opacity: 1
            }} transition={{
              delay: 0.6,
              duration: 0.6
            }} viewport={{
              once: true
            }}>
                {[{
                number: "01",
                title: "Skin Quality Analysis",
                description: "Evaluating tone, texture, pores, and hydration to establish the foundation for your treatment."
              }, {
                number: "02",
                title: "Dynamic Expression Mapping",
                description: "Assessing movement patterns and expression lines to preserve natural facial dynamics."
              }, {
                number: "03",
                title: "Structural Assessment",
                description: "Measuring volume distribution and skin support to restore youthful facial architecture."
              }].map(step => <Card key={step.number} className="bg-[#111] border-none">
                    <CardHeader className="pb-2">
                      <div className="text-base font-medium text-gray-400 mb-2">{step.number}</div>
                      <CardTitle className="text-2xl">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-base text-gray-300">{step.description}</p>
                    </CardContent>
                  </Card>)}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 bg-gradient-to-b from-[#0A0A0A] to-[#0A0A0A]" aria-labelledby="philosophy-heading">
          <div className="page-container">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2 id="philosophy-heading" className="text-3xl font-bold mb-8" initial={{
              opacity: 0
            }} whileInView={{
              opacity: 1
            }} transition={{
              duration: 0.5
            }} viewport={{
              once: true
            }}>
                Our Philosophy
              </motion.h2>
              <motion.div className="space-y-4 text-lg text-gray-300" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.2,
              duration: 0.5
            }} viewport={{
              once: true
            }}>
                <p>
                  At Cosmedocs, we believe that the best aesthetic treatments are the ones nobody notices.
                </p>
                <p>
                  Our approach is guided by subtlety and precision, ensuring that every treatment enhances your natural beauty without announcing itself.
                </p>
                <p className="text-white font-medium italic">
                  "It's transformation that speaks — without saying a word."
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#111]" aria-labelledby="cta-heading">
          <div className="page-container">
            <div className="bg-accent rounded-2xl p-8 md:p-12 text-center">
              <h2 id="cta-heading" className="text-2xl md:text-3xl font-bold mb-4">Ready to discover your refined aesthetic?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book a consultation with our expert practitioners and begin your journey toward subtle, controlled transformation.
              </p>
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 inline-flex items-center justify-center text-sm font-medium transition-colors">
                Book Now
              </a>
            </div>
          </div>
        </section>

        {/* Hidden SEO content for search engines */}
        <div className="sr-only">
          <p>
            Cosmedocs is London's premier aesthetic medicine clinic located on prestigious Harley Street, offering advanced cosmetic treatments since 2007. Our expert practitioners specialize in Botox injections, dermal fillers, lip enhancement, non-surgical nose jobs, skin boosters, and comprehensive facial rejuvenation treatments. With over 1 million injections performed, we are recognized leaders in aesthetic medicine, providing natural-looking results through our invisible art philosophy. Our clinic offers consultation services, advanced anti-aging treatments, facial contouring, and personalized aesthetic solutions. We pride ourselves on subtle enhancement that speaks without saying a word, ensuring every client receives transformative results tailored to their individual needs. Our comprehensive approach addresses skin quality, wrinkle reduction, volume restoration, and facial harmonization using the latest techniques and premium products. Located at 10 Harley Street, London W1G 9PF, we serve clients seeking the highest standard of aesthetic medicine in the heart of London's medical district. Contact us at 0333 0551 503 or info@cosmedocs.com to begin your aesthetic journey with London's most trusted cosmetic medicine specialists.
          </p>
        </div>

        {/* Accordion Footer */}
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
          options={contactOptions}
        />
      </div>
    </TooltipProvider>
  );
};

export default Home2;
