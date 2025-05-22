import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogPortal, DialogOverlay } from "@/components/ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { useState } from "react";
import { Eye, HelpCircle } from "lucide-react";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import { useIsMobile } from "@/hooks/use-mobile";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
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

const Home = () => {
  const [isBeforeAfterOpen, setIsBeforeAfterOpen] = useState(false);
  const [isRejuvenationDialogOpen, setIsRejuvenationDialogOpen] = useState(false);
  const [isScoringDialogOpen, setIsScoringDialogOpen] = useState(false);
  const isMobile = useIsMobile();

  // Define the before/after image arrays with the correct type structure
  const botoxBeforeAfterImages = [
    { src: "/lovable-uploads/36b15e21-1905-49d8-b920-68bc23b235c5.png", after: "/lovable-uploads/57903e64-3bf7-4e89-aeec-61d2fdc9c579.png", alt: "Botox before and after", caption: "Botox treatment results" }
  ];
  
  const dermalFillerBeforeAfterImages = [
    { src: "/lovable-uploads/90c69926-3cb1-4844-a634-68a8f111cb1a.png", after: "/lovable-uploads/c1c5edd5-4262-4f61-8d28-74a0e9c48653.png", alt: "Dermal fillers before and after", caption: "Dermal filler treatment results" }
  ];
  
  const lipFillerBeforeAfterImages = [
    { src: "/lovable-uploads/984ff472-7676-48a9-a57e-c23ca2592741.png", after: "/lovable-uploads/8675e9bd-ccdf-44e5-80b3-c916c48f40e5.png", alt: "Lip fillers before and after", caption: "Lip filler treatment results" }
  ];
  
  const noseJobBeforeAfterImages = [
    { src: "/lovable-uploads/8fc7a776-c255-4ca9-a8d9-573f4083b7f1.png", after: "/lovable-uploads/97e9a4a2-debd-4216-879b-d78feffa8cba.png", alt: "Non-surgical nose job before and after", caption: "Non-surgical nose job results" }
  ];
  
  const skinBoosterBeforeAfterImages = [
    { src: "/lovable-uploads/0146916c-8864-4889-b0d5-b330859a2c85.png", after: "/lovable-uploads/c14805f1-7257-4bcd-81cb-827d313c023b.png", alt: "Skin boosters before and after", caption: "Skin booster treatment results" }
  ];
  
  const chinAndJawlineEnhancementImages = [
    { src: "/lovable-uploads/1c08600a-b561-48ca-ae0a-246717da30a7.png", after: "/lovable-uploads/c2be8e56-a215-4332-a5c5-ee6b3f431881.png", alt: "Chin and jawline enhancement before and after", caption: "Chin and jawline enhancement results" }
  ];
  
  // Booking URL for all Book Now buttons
  const bookingUrl = "https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29";

  return <div className="bg-black text-white">
      <header>
        {/* SEO optimized hidden heading for crawlers */}
        <h1 className="sr-only">Cosmedocs - Premium Aesthetic Medicine Treatments | Botox, Dermal Fillers in London Harley Street</h1>
      </header>
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center" aria-labelledby="hero-heading">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black"></div>
        <div className="page-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6
            }}>
              <div className="relative mb-6">
                <img 
                  src="/lovable-uploads/0548416e-603c-4a44-a2c6-44626d104ba1.png" 
                  alt="COSMEDOCS" 
                  className="w-full max-w-xl mx-auto" 
                  id="hero-heading"
                />
              </div>
            </motion.div>
            
            <motion.p className="text-lg md:text-xl italic mb-6" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.5,
            duration: 0.6
          }}>
              *Our aesthetics is invisible art
            </motion.p>
            <motion.div className="mb-8 max-w-xl mx-auto" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.7,
            duration: 0.6
          }}>
              <p className="text-gray-300 mb-1">Bold • Natural • Always Your Way</p>
              <p className="text-gray-400 text-sm mt-4">
                Aesthetic medicine by Cosmedocs is minimal.<br />
                Quiet, not loud.<br />
                Invisible, not exaggerated.<br />
                It's transformation that speaks — without saying a word.
              </p>
            </motion.div>
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.9,
            duration: 0.6
          }}>
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 inline-flex items-center justify-center text-sm font-medium transition-colors">
                Book a Consultation
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Featured Treatments Section */}
      <section className="py-20 bg-black" aria-labelledby="treatments-heading">
        <div className="page-container">
          <h2 id="treatments-heading" className="text-3xl font-bold mb-12 text-center">Popular Treatments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            title: "Botox",
            description: "Anti-wrinkle injections for frown lines, crows feet & forehead lines",
            hasBeforeAfter: true,
            baType: "botox"
          }, {
            title: "Dermal Fillers",
            description: "Restore volume and enhance facial features. Pioneer of full face makeover & rejuvenation",
            hasBeforeAfter: true,
            baType: "dermal"
          }, {
            title: "Lip Fillers",
            description: "Subtle enhancement for natural-looking fullness",
            hasBeforeAfter: true,
            baType: "lip"
          }, {
            title: "Non-Surgical Nose Job",
            description: "Reshape without surgery",
            hasBeforeAfter: true,
            baType: "nose"
          }, {
            title: "Skin Boosters",
            description: "Deep hydration and rejuvenation",
            hasBeforeAfter: true,
            baType: "skin"
          }, {
            title: "Chin & Jawline Enhancement",
            description: "Define your facial profile",
            hasBeforeAfter: true,
            baType: "chin"
          }].map((treatment, index) => <motion.div key={treatment.title} className="bg-accent rounded-lg p-6" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1,
            duration: 0.5
          }} viewport={{
            once: true
          }}>
                <h3 className="text-xl font-semibold mb-3">{treatment.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{treatment.description}</p>
                {treatment.hasBeforeAfter ? <BeforeAfterImageViewer images={treatment.baType === "nose" ? noseJobBeforeAfterImages : treatment.baType === "lip" ? lipFillerBeforeAfterImages : treatment.baType === "botox" ? botoxBeforeAfterImages : treatment.baType === "skin" ? skinBoosterBeforeAfterImages : treatment.baType === "chin" ? chinAndJawlineEnhancementImages : dermalFillerBeforeAfterImages} triggerLabel="See Before & After" title={`${treatment.title} Before & After`} description={`Results achieved with our premium ${treatment.title.toLowerCase()} treatments`} /> : <Button variant="link" className="p-0 h-auto text-white hover:text-gray-300">
                    Learn more →
                  </Button>}
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Face Rejuvenation Philosophy Section */}
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
              Our Face Rejuvenation Philosophy
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
                At Cosmedocs, we've pioneered a comprehensive approach to facial rejuvenation that addresses all factors of aging for truly natural results.
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
                  <img src="/lovable-uploads/8675e9bd-ccdf-44e5-80b3-c916c48f40e5.png" alt="Face rejuvenation before and after transformation" className="w-full h-auto" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center pb-12">
                    <div className="flex items-center justify-center">
                      <Eye className="mr-3 h-6 w-6" />
                      <p className="text-white text-xl font-medium">Tap to explore our aesthetic face calculations</p>
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
              
              <DialogContent className="bg-black border-gray-800 max-w-5xl">
                <DialogHeader className="pb-4">
                  <DialogTitle className="text-2xl">Facial Assessment Results</DialogTitle>
                  <DialogDescription className="text-base">
                    Before and after assessment showing improvement scores across key categories
                  </DialogDescription>
                </DialogHeader>
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
              title: "Skin Clear Up",
              description: "Addressing uneven tone, pigmentation, pores, and texture for a flawless foundation."
            }, {
              number: "02",
              title: "Wrinkles in Motion",
              description: "Targeting dynamic wrinkles while preserving natural expressions and movement."
            }, {
              number: "03",
              title: "Volume Loss & Sagging",
              description: "Restoring youthful contours by addressing structural volume loss and skin laxity."
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
    </div>;
};
export default Home;
