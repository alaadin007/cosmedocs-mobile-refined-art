import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { generateSEOMetadata } from '@/utils/seo';
import { Clock, Users, Award, Calendar, MapPin, Phone, CheckCircle, Star, Eye, Zap, ArrowRight, BookOpen, Target, Shield, Heart, ChevronLeft, ChevronRight, Check, Activity, Syringe, GraduationCap, Palette } from "lucide-react";
import PopularTreatments from '@/components/PopularTreatments';

export default function FaceBotox() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const seoData = generateSEOMetadata(
    "Face Botox London | Comprehensive Treatment Guide | Cosmedocs",
    "Complete face botox treatment including forehead, frown lines, crow's feet, lower face areas and advanced techniques. Expert practitioners on Harley Street since 2007.",
    "/face-botox"
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Comprehensive Face Botox Treatment",
    "alternateName": ["Anti-Wrinkle Injections", "Botulinum Toxin", "Facial Botox", "Upper Face Botox", "Lower Face Botox"],
    "description": "Professional comprehensive face botox treatment including upper face, lower face areas and advanced combination techniques.",
    "provider": {
      "@type": "MedicalOrganization",
      "name": "Cosmedocs",
      "url": "https://www.cosmedocs.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "37 Harley Street",
        "addressLocality": "London",
        "addressRegion": "London",
        "postalCode": "W1G 8QD",
        "addressCountry": "GB"
      }
    },
    "offers": {
      "@type": "Offer",
      "price": "175",
      "priceCurrency": "GBP",
      "availability": "https://schema.org/InStock"
    },
    "procedure": {
      "@type": "MedicalProcedure",
      "name": "Botox Injection",
      "duration": "PT30M"
    }
  };

  // Combined treatment areas from all pages
  const treatmentAreas = [
    {
      area: "Forehead Lines",
      description: "Horizontal lines across the forehead from raising eyebrows. We create smooth, natural appearance while preserving your ability to express emotion.",
      units: "10-20 units",
      price: "£175-350",
      duration: "4-6 months"
    },
    {
      area: "Frown Lines",
      description: "Vertical lines between eyebrows caused by concentration and expression. Our precise technique smooths these lines while maintaining natural facial expression.",
      units: "15-25 units",
      price: "£175-350",
      duration: "4-6 months"
    },
    {
      area: "Crow's Feet",
      description: "Fine lines radiating from outer corners of eyes when smiling. Our delicate approach softens lines while keeping your smile authentic.",
      units: "8-15 units per side",
      price: "£175-350",
      duration: "4-6 months"
    },
    {
      area: "Brow Lift",
      description: "Subtle lift to create more open eyes",
      units: "4-8 units",
      price: "£150-250",
      duration: "4-6 months"
    }
  ];

  // Lower face treatment areas
  const lowerFaceTreatmentAreas = [
    {
      icon: Target,
      title: "DAO Muscle (Depressor Anguli Oris)",
      description: "Targets muscles that pull down the corners of the mouth",
      benefit: "Lifts downturned mouth corners for a more youthful appearance"
    },
    {
      icon: Shield,
      title: "Mentalis Crease",
      description: "Addresses horizontal lines and dimpling over the chin area",
      benefit: "Smooths chin texture and reduces orange peel appearance"
    },
    {
      icon: Zap,
      title: "Platysma Muscle",
      description: "Relaxes the large neck muscle that creates neck bands",
      benefit: "Defines jawline and reduces appearance of neck aging"
    },
    {
      icon: Heart,
      title: "Jawline Definition",
      description: "Strategic placement to enhance facial contours",
      benefit: "Creates sharper, more defined jawline without surgery"
    }
  ];

  // Additional face areas
  const additionalFaceAreas = [
    {
      name: "Chin Botox",
      price: "£175",
      description: "Smooth dimpled or cobblestone chin texture for a refined appearance.",
      units: "15-25 units",
      duration: "4-6 months"
    },
    {
      name: "Nefertiti Face Lift",
      price: "£300",
      description: "Jawline definition and neck smoothing for an elegant profile.",
      units: "30-50 units",
      duration: "4-6 months"
    },
    {
      name: "Masseter (Jaw Slimming)",
      price: "£350",
      description: "Reduce jaw muscle bulk for a softer, more feminine facial contour.",
      units: "25-40 units per side",
      duration: "6-8 months"
    },
    {
      name: "Lip Flip",
      price: "£175",
      description: "Subtle upper lip enhancement for a naturally fuller appearance.",
      units: "4-8 units",
      duration: "3-4 months"
    },
    {
      name: "Gummy Smile",
      price: "£50",
      description: "Reduce excessive gum display when smiling for perfect smile proportions.",
      units: "2-4 units",
      duration: "4-6 months"
    },
    {
      name: "Bunny Lines",
      price: "£50",
      description: "Smooth fine lines on the nose bridge that appear when scrunching.",
      units: "4-8 units",
      duration: "4-6 months"
    }
  ];

  // Before/after images
  const beforeAfterImages = [
    {
      src: "/lovable-uploads/d610e5f1-30da-4a26-b87c-a7c38162811f.png",
      alt: "Before and after frown lines botox treatment",
      caption: "Frown Lines Treatment: Smooth, natural results with our precision Botox technique."
    },
    {
      src: "/lovable-uploads/35a418d0-b5b2-4c2c-864c-a3546681613f.png", 
      alt: "Before and after forehead lines botox treatment",
      caption: "Forehead Lines Treatment: Gentle smoothing while maintaining natural movement."
    },
    {
      src: "/lovable-uploads/4fc6cbae-9029-4158-bc6e-1e30f20ac5a3.png",
      alt: "Before and after gummy smile botox treatment", 
      caption: "Gummy Smile Treatment: Delicate enhancement for a perfect smile."
    }
  ];

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % beforeAfterImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [beforeAfterImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % beforeAfterImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + beforeAfterImages.length) % beforeAfterImages.length);
  };

  // Botox timeline from advanced page
  const botoxTimeline = [
    { month: 1, percentage: 20, description: "Botox begins wearing off" },
    { month: 2, percentage: 40, description: "Lines start reappearing for deep wrinkles" },
    { month: 3, percentage: 60, description: "Significant movement returns" },
    { month: 4, percentage: 80, description: "Most effect worn off" },
    { month: 5, percentage: 100, description: "Complete wear-off" }
  ];

  const benefits = [
    "Reduces appearance of fine lines and wrinkles",
    "Prevents formation of new wrinkles",
    "Natural-looking results",
    "Quick 30-minute treatment",
    "No downtime required",
    "Results last 3-6 months"
  ];

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:image" content={seoData.image} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.image} />
        <meta name="keywords" content="face botox london, anti-wrinkle injections, botox harley street, forehead botox, crow's feet botox, frown lines botox, facial rejuvenation, cosmetic botox, comprehensive face botox, lower face botox, advanced botox" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden min-h-screen flex items-center">
          <div className="page-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-white">
                  <span className="text-purple-300">Comprehensive Face Botox</span>
                  <span className="block text-sm mt-4">Advanced anti-wrinkle treatments for natural, lasting results</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl">
                  <span className="text-purple-300 font-semibold">Expert Practitioners</span>
                  <br />
                  Complete facial rejuvenation including upper face, lower face areas and advanced combination techniques
                </p>
                
                {/* Animated Tagline */}
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-lg md:text-xl text-gray-400 mb-8 relative"
                >
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent animate-pulse">
                      Bold • Natural • Always Your Way
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/40 to-white/20 blur-sm rounded-lg animate-pulse opacity-50"></span>
                  </span>
                </motion.p>
                
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">From £175</p>
                  <p className="text-sm text-gray-300">30 minutes • Results last 4-6 months</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold"
                    onClick={() => window.open('https://med.as.me/harleystreet', '_blank')}
                  >
                    Book Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold"
                    onClick={() => document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    View Price List
                  </Button>
                </div>
              </motion.div>
              
              <div className="hidden lg:block"></div>
            </div>
          </div>
        </section>

        {/* Treatment Summary */}
        <section className="py-16 bg-gray-800">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-8 text-white">Face Botox Treatment Overview</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Treatment Duration</h3>
                <p className="text-gray-300">30-45 minutes including consultation</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Results Duration</h3>
                <p className="text-gray-300">4-6 months with premium Botox</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Activity className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Recovery Time</h3>
                <p className="text-gray-300">Minimal downtime, return to work same day</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Syringe className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Anaesthesia</h3>
                <p className="text-gray-300">Topical anaesthetic available if needed</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Enhanced Pricing Section */}
        <section id="pricing-section" className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Face Botox Pricing</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">Transparent pricing for all facial areas with no hidden costs</p>
            </motion.div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-center bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all duration-300"
                >
                  <div className="text-3xl font-bold mb-3 text-purple-300">£175</div>
                  <div className="text-lg text-white mb-2">1 Area</div>
                  <div className="text-sm text-gray-400">Single treatment area</div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all duration-300"
                >
                  <div className="text-3xl font-bold mb-3 text-purple-300">£275</div>
                  <div className="text-lg text-white mb-2">2 Areas</div>
                  <div className="text-sm text-gray-400">Two treatment areas</div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-center bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all duration-300"
                >
                  <div className="text-3xl font-bold mb-3 text-purple-300">£350</div>
                  <div className="text-lg text-white mb-2">3 Areas</div>
                  <div className="text-sm text-gray-400">Three treatment areas</div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-center bg-purple-900/30 border border-purple-400/30 rounded-xl p-6 hover:bg-purple-900/50 transition-all duration-300"
                >
                  <div className="text-3xl font-bold mb-3 text-purple-300">+£50</div>
                  <div className="text-lg text-white mb-2">Men Supplement</div>
                  <div className="text-sm text-gray-400">Additional charge for men</div>
                </motion.div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2 text-white">&lt;5min</div>
                <div className="text-sm text-gray-400">Treatment Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2 text-white">5-10 days</div>
                <div className="text-sm text-gray-400">Takes Effect</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2 text-white">4-6 months</div>
                <div className="text-sm text-gray-400">Results Last</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2 text-white">Immediate</div>
                <div className="text-sm text-gray-400">Return to Work</div>
              </div>
            </div>
          </div>
        </section>

        {/* Before & After Gallery */}
        <section className="py-20 bg-gray-800">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Real Results - Before & After</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See the transformation our expert doctors achieve with precision Botox treatments. 
                Natural, beautiful results that enhance your features.
              </p>
            </motion.div>

            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {beforeAfterImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative group cursor-pointer p-2"
                    >
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-2 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg"></div>
                      <div className="absolute bottom-2 left-2 right-2 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
                        <p className="text-white text-sm font-medium">{image.caption}</p>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="text-white border-white hover:bg-white hover:text-black" />
              <CarouselNext className="text-white border-white hover:bg-white hover:text-black" />
            </Carousel>

            <div className="text-center mt-8">
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-black"
                onClick={() => window.open('/before-after-gallery', '_blank')}
              >
                View Full Gallery
              </Button>
            </div>
          </div>
        </section>

        {/* Upper Face Treatment Areas */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Upper Face Treatment Areas</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Target the three most common facial areas for natural, lasting results
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {treatmentAreas.map((area, index) => (
                <motion.div
                  key={area.area}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-900/50 border-gray-700 h-full hover:bg-gray-900/70 transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3 text-white">{area.area}</h3>
                      <p className="text-gray-300 mb-4 text-sm">{area.description}</p>
                      <div className="space-y-2 text-xs">
                        <div className="text-gray-400">
                          <span className="font-medium text-purple-300">Units:</span> {area.units}
                        </div>
                        <div className="text-gray-400">
                          <span className="font-medium text-purple-300">Price:</span> {area.price}
                        </div>
                        <div className="text-gray-400">
                          <span className="font-medium text-purple-300">Duration:</span> {area.duration}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Lower Face Treatment Areas */}
        <section className="py-20 bg-gray-800">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Lower Face Treatment Areas</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Comprehensive lower face rejuvenation for balanced facial harmony
              </p>
            </motion.div>

            <div className="mb-8">
              <Card className="bg-gray-900/50 border-gray-700">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-white">The Unbalanced Face Problem</h3>
                      <p className="text-gray-300 mb-4">
                        Many clients have been receiving upper face Botox for years, but their lower 
                        face remains hyper-animated. This creates an unnatural imbalance where the 
                        upper face is relaxed while the lower face shows excessive movement.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-purple-300 mt-0.5 flex-shrink-0" />
                          <span>Mentalis crease over the chin from habitual muscle use</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-purple-300 mt-0.5 flex-shrink-0" />
                          <span>Downturned mouth corners creating sad expression</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-purple-300 mt-0.5 flex-shrink-0" />
                          <span>Horizontal lines along jawline from muscle tension</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-white">The Solution</h3>
                      <p className="text-gray-300 mb-4">
                        Strategic lower face Botox creates balance, symmetry, and natural results 
                        by harmonizing upper and lower facial animation.
                      </p>
                      <div className="bg-purple-900/30 p-4 rounded-lg">
                        <p className="text-sm font-medium mb-2 text-purple-300">The Result:</p>
                        <p className="text-sm text-gray-300">
                          Comprehensive facial harmony that maintains natural expression while 
                          creating a more youthful, balanced appearance.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {lowerFaceTreatmentAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-900/50 border-gray-700 h-full hover:bg-gray-900/70 transition-all duration-300">
                    <CardContent className="p-6">
                      <area.icon className="h-8 w-8 text-purple-300 mb-4" />
                      <h3 className="text-lg font-semibold mb-3 text-white">{area.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{area.description}</p>
                      <div className="bg-purple-900/20 p-3 rounded text-xs">
                        <span className="font-medium text-purple-300">Benefit: </span>
                        <span className="text-gray-300">{area.benefit}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Face Areas */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Additional Face Areas</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Enhance your natural beauty with specialized Botox treatments for additional facial areas
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalFaceAreas.map((area, index) => (
                <motion.div
                  key={area.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-900/50 border-gray-700 h-full hover:bg-gray-900/70 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-semibold text-white">{area.name}</h3>
                        <span className="text-purple-300 font-bold">{area.price}</span>
                      </div>
                      <p className="text-gray-300 text-sm mb-4">{area.description}</p>
                      <div className="space-y-2 text-xs text-gray-400">
                        <div><span className="font-medium text-purple-300">Units:</span> {area.units}</div>
                        <div><span className="font-medium text-purple-300">Duration:</span> {area.duration}</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Advanced Combination Approach */}
        <section className="py-20 bg-gray-800">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Advanced Combination Approach</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                For deep wrinkles, we combine Botox with dermal fillers for superior results
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-gray-900/50 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-white">Why Botox Alone Isn't Enough</h3>
                  <p className="text-gray-300 mb-4">
                    Botox wears off approximately 20% per month. For people with deep wrinkles, 
                    this creates a frustrating cycle where lines reappear at 2-3 months.
                  </p>
                  <div className="space-y-3">
                    {botoxTimeline.map((item) => (
                      <div key={item.month} className="flex items-center gap-3">
                        <div className="w-16 text-sm font-medium text-purple-300">Month {item.month}:</div>
                        <div className="flex-1">
                          <div className="bg-gray-700 rounded-full h-2 relative overflow-hidden">
                            <div 
                              className="bg-purple-300 h-full transition-all duration-500"
                              style={{ width: `${100 - item.percentage}%` }}
                            />
                          </div>
                        </div>
                        <div className="text-sm text-gray-400">{item.percentage}% worn off</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-900/50 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-white">The Advanced Solution</h3>
                  <p className="text-gray-300 mb-4">
                    Combining Botox with carefully placed dermal fillers addresses both 
                    muscle movement AND fills the established crease for comprehensive treatment.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-purple-300 mt-0.5 flex-shrink-0" />
                      <span>Fill lines halfway for natural appearance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-purple-300 mt-0.5 flex-shrink-0" />
                      <span>Stimulate natural collagen production</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-purple-300 mt-0.5 flex-shrink-0" />
                      <span>Provide stable, long-lasting results</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-purple-300 mt-0.5 flex-shrink-0" />
                      <span>Results last 18-24 months</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Professional Training */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">Professional Training Available</h2>
              <p className="text-gray-300">Learn advanced face Botox techniques from our experts</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gray-900/50 border-gray-700">
                <CardContent className="p-6">
                  <BookOpen className="h-8 w-8 text-purple-300 mb-4" />
                  <h3 className="text-xl font-semibold mb-4 text-white">Online Courses</h3>
                  <p className="text-gray-300 mb-4">
                    For medical professionals practicing dermal fillers and Botox, we offer comprehensive 
                    online courses through harleystreetinstitute.com
                  </p>
                  <Button variant="outline" className="w-full border-purple-300 text-purple-300 hover:bg-purple-300 hover:text-black">
                    Learn More About Online Training
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-900/50 border-gray-700">
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-purple-300 mb-4" />
                  <h3 className="text-xl font-semibold mb-4 text-white">One-to-One Training</h3>
                  <p className="text-gray-300 mb-4">
                    Book personalized training sessions to learn these advanced procedures 
                    that will significantly increase your client satisfaction rates.
                  </p>
                  <Button variant="outline" className="w-full border-purple-300 text-purple-300 hover:bg-purple-300 hover:text-black">
                    Book Personal Training
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-purple-900/20">
          <div className="page-container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready for Comprehensive Face Botox?</h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Transform your entire face with our expert comprehensive Botox treatments. 
                From upper face to lower face areas and advanced combination techniques.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-purple-300 text-black hover:bg-purple-200 px-8 py-4 text-lg font-semibold"
                  onClick={() => window.open('https://med.as.me/harleystreet', '_blank')}
                >
                  Book Your Consultation
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold"
                >
                  View Price List
                </Button>
              </div>
              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-2 text-sm text-gray-400">
                  <Eye className="h-4 w-4" />
                  <span>Bold • Natural • Always Your Way</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true">
          <h2>Comprehensive Face Botox Treatment London Birmingham Manchester Cardiff</h2>
          <p>
            Comprehensive Face Botox treatment at Cosmedocs London offers professional wrinkle reduction for all facial areas including forehead lines, frown lines, crow's feet, lower face areas, and advanced combination treatments. Our expert practitioners on Harley Street have performed over 1 million injections since 2007, delivering natural-looking results through our invisible art philosophy. Face Botox treatment costs £175-£350 for 1-3 areas with transparent pricing structure and £50 supplement for men. Results take 5-10 days to develop and last 4-6 months for standard treatments, up to 18-24 months for advanced combination treatments. The treatment takes less than 5 minutes with comprehensive consultation process. We use premium Botox products including Azzalure and Dysport and follow strict safety protocols to ensure optimal outcomes. Our consultation process includes detailed facial assessment, treatment planning, and aftercare guidance. Cosmedocs specializes in subtle enhancement that preserves natural facial expressions while reducing unwanted lines and wrinkles. We offer comprehensive treatments including upper face areas (forehead lines, frown lines, crow's feet, brow lift), lower face areas (DAO muscle depressor anguli oris, mentalis crease, platysma muscle, jawline definition), and advanced combination treatments with dermal fillers for deep wrinkles. Advanced upper face treatments combine Botox with dermal fillers for superior results lasting 18-24 months using strategic filler placement and advanced cross-linking technology. Lower face treatments address facial imbalance and create harmony between upper and lower facial animation, targeting specific muscle groups for comprehensive rejuvenation. Additional facial areas include chin Botox, Nefertiti facelift, masseter jaw slimming, lip flip, gummy smile, and bunny lines treatments with specialized pricing and techniques. Professional training available through Harley Street Institute for medical professionals including online courses and one-to-one training sessions. Book your consultation today at our Harley Street clinic for expert comprehensive face Botox treatment in London. Contact us at 0333 0551 503 or info@cosmedocs.com for more information about our complete face Botox treatment options and pricing.
          </p>
        </div>

        <PopularTreatments />
      </div>
    </>
  );
}