import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogPortal, DialogOverlay } from "@/components/ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Eye, HelpCircle, Sparkles, Brain, Heart, Clock, Shield, Stethoscope, Package, Star, BookOpen } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import AestheticAnalysisWizard from "@/components/AestheticAnalysisWizard";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import PopularTreatments from "@/components/PopularTreatments";
import BeforeAfterCarousel from "@/components/BeforeAfterCarousel";
import AnimatedDots from "@/components/AnimatedDots";
import { generateSEOMetadata } from '@/utils/seo';
import RaffleChatbot from "@/components/RaffleChatbot";
import FloatingChatBot from "@/components/FloatingChatBot";
import aiAssessmentIcon from "@/assets/icons/ai-assessment-icon.png";
import smartAestheticsIcon from "@/assets/icons/smart-aesthetics-icon.png";
import aiDoctorChatIcon from "@/assets/icons/ai-doctor-chat-icon.png";
import WebsiteKnowledgeInitializer from "@/components/WebsiteKnowledgeInitializer";
const Index = () => {
  const [isRejuvenationDialogOpen, setIsRejuvenationDialogOpen] = useState(false);
  const [isScoringDialogOpen, setIsScoringDialogOpen] = useState(false);
  const [isAnalysisOpen, setIsAnalysisOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const isMobile = useIsMobile();
  const seoData = generateSEOMetadata("Cosmedocs London | Aesthetic Medicine | Harley Street", "Harley Street aesthetic clinic by Dr. Ahmed Haq. Botox, fillers & skin treatments. Invisible art • Bold • Natural.", "/");

  // Booking URL for all Book Now buttons
  const bookingUrl = "https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29";
  return <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
      </Helmet>

      <TooltipProvider>
        <div className="bg-black text-white">
          <header>
            {/* SEO optimized hidden heading for crawlers */}
            <h1 className="sr-only">Cosmedocs - Premium Aesthetic Medicine Treatments | Botox, Dermal Fillers in London Harley Street</h1>
          </header>
          
          {/* Hero Section */}
          <section className="relative h-screen flex items-center" aria-labelledby="hero-heading">
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black"></div>
            <AnimatedDots />
            <div className="page-container relative z-10">
              <div className="max-w-5xl mx-auto text-center">
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
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold" id="hero-heading">
                      cosmedocs
                    </h2>
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
                  Our aesthetics is invisible art
                </motion.p>
                <motion.div className="mb-8 max-w-xl mx-auto" initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} transition={{
                delay: 0.7,
                duration: 0.6
              }}>
                  <p className="text-gray-300 mb-4">art • science • a touch of magic</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    All done with the finest needles imported,<br />
                    because every detail matters.
                  </p>
                  <p className="text-gray-400 text-sm mt-6 leading-relaxed">
                    At CosmeDocs, aesthetics is more than treatment — it's a philosophy.<br />
                    Quiet, not loud. Subtle, not exaggerated.<br />
                    Transformations that whisper rather than shout.
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
                   {/* AI Quick Links Grid */}
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                     {/* Free AI Assessment */}
                     <a href="/ai-assessment" className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 rounded-2xl p-6 transition-all duration-300 text-center">
                       <img src={aiAssessmentIcon} alt="AI Assessment" className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                       <h3 className="text-lg font-semibold mb-2">Free AI Assessment</h3>
                       <p className="text-sm text-gray-400">Face • Hair • Skin Lesions</p>
                     </a>
                     
                     {/* Smart Aesthetics */}
                     <a href="/aesthetic-treatments-made-easy" className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 rounded-2xl p-6 transition-all duration-300 text-center">
                       <img src={smartAestheticsIcon} alt="Smart Aesthetics" className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                       <h3 className="text-lg font-semibold mb-2">Smart Aesthetics</h3>
                       <p className="text-sm text-gray-400">Stop Wasting Money</p>
                     </a>
                     
                     {/* AI Doctor Chat */}
                     <button 
                       onClick={() => setIsChatbotOpen(true)}
                       className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 rounded-2xl p-6 transition-all duration-300 text-center w-full"
                     >
                       <img src={aiDoctorChatIcon} alt="AI Doctor Chat" className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                       <h3 className="text-lg font-semibold mb-2">
                         Chat With Our A<span className="text-primary">i</span>esthetics Doctor
                       </h3>
                       <p className="text-sm text-gray-400">Ask anything about treatments</p>
                     </button>
                   </div>
                 </motion.div>
              </div>
            </div>
          </section>
          
          {/* Featured Treatments Section - Now using PopularTreatments component */}
          <PopularTreatments />

          {/* Before & After Transformation Gallery */}
          <BeforeAfterCarousel />

          {/* AI Aesthetic Analysis Section */}
          <section className="py-20 bg-gradient-to-b from-black to-[#0A0A0A]" aria-labelledby="ai-analysis-heading">
            <div className="page-container">
              <div className="max-w-6xl mx-auto">
                <motion.div className="text-center mb-16" initial={{
                opacity: 0,
                y: 30
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.8
              }} viewport={{
                once: true
              }}>
                  <h2 id="ai-analysis-heading" className="text-4xl md:text-5xl font-bold mb-6">
                    <Sparkles className="inline-block h-8 w-8 mr-3 text-primary" />
                    AI Aesthetic Analysis
                  </h2>
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                    Discover your personalized treatment plan with our advanced AI assessment tool. 
                    Get professional analysis of your facial features and receive customized recommendations.
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  {[{
                  icon: Brain,
                  title: "Smart Assessment",
                  description: "AI-powered analysis of skin quality, wrinkles, and volume loss"
                }, {
                  icon: Heart,
                  title: "Personalized Plan",
                  description: "Customized treatment recommendations based on your unique features"
                }, {
                  icon: Clock,
                  title: "Instant Results",
                  description: "Get your detailed aesthetic report in minutes, not days"
                }].map((feature, index) => <motion.div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center" initial={{
                  opacity: 0,
                  y: 30
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  duration: 0.6,
                  delay: index * 0.1
                }} viewport={{
                  once: true
                }}>
                      <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                    </motion.div>)}
                </div>

                <motion.div className="text-center" initial={{
                opacity: 0,
                y: 30
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.8,
                delay: 0.4
              }} viewport={{
                once: true
              }}>
                  <Button onClick={() => setIsAnalysisOpen(true)} size="lg" className="bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-white text-black rounded-full px-12 py-6 text-lg font-medium transition-all duration-300 hover:scale-105 shadow-2xl border border-gray-200">
                    <Sparkles className="h-5 w-5 mr-2" />
                    Start Your AI Analysis
                  </Button>
                  <p className="text-sm text-gray-400 mt-4">
                    Free assessment • No personal information required • Instant results
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Prescription Skincare Section */}
          <section className="py-20 bg-gradient-to-b from-[#0A0A0A] to-black" aria-labelledby="prescription-skincare-heading">
            <div className="page-container">
              <div className="max-w-6xl mx-auto">
                <motion.div className="text-center mb-16" initial={{
                opacity: 0,
                y: 30
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.8
              }} viewport={{
                once: true
              }}>
                  <h2 id="prescription-skincare-heading" className="text-4xl md:text-5xl font-bold mb-6">
                    <Stethoscope className="inline-block h-8 w-8 mr-3 text-primary" />
                    Prescription Medical Skincare
                  </h2>
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                    Get dermatologist-grade skincare with pharmaceutical-grade generic formulations. 
                    Clinically proven actives, tailored to your skin, for just £60 every 3 months.
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                  <motion.div initial={{
                  opacity: 0,
                  x: -30
                }} whileInView={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  duration: 0.8
                }} viewport={{
                  once: true
                }}>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <Shield className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-xl font-semibold mb-2">GMC-Registered Doctors</h3>
                          <p className="text-gray-300">AI-guided consultation reviewed by qualified medical professionals</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <Package className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-xl font-semibold mb-2">Pharmaceutical-Grade Quality</h3>
                          <p className="text-gray-300">Generic formulations from pharmaceutical giants - not custom compounded</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <Heart className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-xl font-semibold mb-2">Personalized Treatment</h3>
                          <p className="text-gray-300">Tailored to treat acne, pigmentation, aging, photoageing, and rosacea</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10" initial={{
                  opacity: 0,
                  x: 30
                }} whileInView={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  duration: 0.8
                }} viewport={{
                  once: true
                }}>
                    <div className="text-center mb-6">
                      <div className="text-5xl font-bold text-primary mb-2">£60</div>
                      <div className="text-lg text-gray-300">every 3 months</div>
                    </div>
                    
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-gray-300">Doctor consultation & prescription</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-gray-300">3-month supply of medication</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-gray-300">Postage & handling included</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-gray-300">Follow-up review</span>
                      </div>
                    </div>
                    
                    <Button asChild size="lg" className="w-full bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-white text-black rounded-full py-6 text-lg font-medium transition-all duration-300 hover:scale-105">
                      <a href="/prescription-skincare">
                        <Star className="w-5 h-5 mr-2" />
                        Start My Consultation
                      </a>
                    </Button>
                  </motion.div>
                </div>

                <motion.div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl p-8 border border-green-500/20" initial={{
                opacity: 0,
                y: 30
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.8,
                delay: 0.2
              }} viewport={{
                once: true
              }}>
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold mb-4">Why Generic Over Custom Compounded?</h3>
                    <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
                      We exclusively use pharmaceutical-grade generic formulations from established manufacturers, 
                      ensuring superior quality, rigorous testing, and consistent results - unlike custom compounded 
                      alternatives made in smaller facilities with variable quality control.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

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
                    <motion.button className="relative max-w-3xl mx-auto cursor-pointer rounded-xl overflow-hidden mb-16 w-full border-0 p-0 bg-transparent" initial={{
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
                    </motion.button>
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
                      <img src="/lovable-uploads/8675e9bd-ccdf-44e5-80b3-c916c48f40e5.png" alt="Before and after facial assessment results" className="w-full h-auto rounded-lg" />
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
        </div>

        {/* AI Aesthetic Analysis Modal */}
        <AestheticAnalysisWizard isOpen={isAnalysisOpen} onClose={() => setIsAnalysisOpen(false)} />

        {/* Raffle Chatbot */}
        <RaffleChatbot />
        
        {/* Floating AI Chatbot */}
        <FloatingChatBot externalOpen={isChatbotOpen} onExternalOpenChange={setIsChatbotOpen} />
        
        {/* Initialize Knowledge Base */}
        <WebsiteKnowledgeInitializer />
      </TooltipProvider>
    </>;
};
export default Index;