import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
import { Clock, Users, Award, Calendar, MapPin, Phone, CheckCircle, Star, Eye, Zap, ArrowRight, BookOpen, Target, Shield, Heart, ChevronLeft, ChevronRight, Check, Activity, Syringe, GraduationCap, Palette, Brain, Droplets, RefreshCw, User, Sparkles } from "lucide-react";
import PopularTreatments from '@/components/PopularTreatments';
import ClientReviews from '@/components/ClientReviews';
import Breadcrumb from '@/components/Breadcrumb';

export default function FaceBotox() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const seoData = generateSEOMetadata(
    "Best Botox London Harley Street | 3 Areas £350 | Face Botox",
    "Best botox London clinic on Harley Street. 3 areas of botox cost £350. Expert baby botox London treatments. Book your free consultation.",
    "/face-botox"
  );

  const medicalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Cosmedocs",
    "image": "https://www.cosmedocs.co.uk/default-og-image.jpg",
    "url": "https://www.cosmedocs.co.uk",
    "telephone": "+443330551503",
    "priceRange": "£175-£350",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "37 Harley Street",
      "addressLocality": "London",
      "addressRegion": "Greater London",
      "postalCode": "W1G 8QD",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.5194,
      "longitude": -0.1488
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  const medicalProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Face Botox Treatment London",
    "alternateName": ["Anti-Wrinkle Injections", "Botulinum Toxin", "Baby Botox London", "Botox Harley Street"],
    "description": "Professional face botox treatment in London including forehead, frown lines, crow's feet, lower face areas and advanced combination techniques. Best botox London prices from £175.",
    "procedureType": "Cosmetic",
    "bodyLocation": "Face",
    "preparation": "Avoid blood thinners and alcohol 24 hours before treatment",
    "followup": "2-week follow-up assessment",
    "howPerformed": "Precision injection of botulinum toxin into targeted facial muscles using ultra-fine needles",
    "provider": {
      "@type": "MedicalOrganization",
      "name": "Cosmedocs",
      "url": "https://www.cosmedocs.co.uk",
      "telephone": "+443330551503",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "37 Harley Street",
        "addressLocality": "London",
        "postalCode": "W1G 8QD",
        "addressCountry": "GB"
      }
    }
  };

  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "Offer",
    "name": "Face Botox Treatment London",
    "description": "Comprehensive face botox treatment - 1 area £175, 2 areas £275, 3 areas of botox price £350",
    "price": "175",
    "priceCurrency": "GBP",
    "availability": "https://schema.org/InStock",
    "url": "https://www.cosmedocs.co.uk/face-botox",
    "priceValidUntil": "2025-12-31",
    "seller": {
      "@type": "MedicalOrganization",
      "name": "Cosmedocs"
    },
    "itemOffered": {
      "@type": "MedicalProcedure",
      "name": "Face Botox Treatment"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much is Botox in London?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Botox London treatment prices at Cosmedocs Harley Street start from £175 for one area, £275 for two areas, and £350 for three areas. The cost of botox UK varies by clinic and practitioner experience, but we offer transparent pricing with no hidden costs."
        }
      },
      {
        "@type": "Question",
        "name": "Where to get botox in London?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cosmedocs offers the best botox London on Harley Street. Our clinic specialises in natural-looking face botox treatments with expert practitioners who have performed over 1 million injections since 2007. We're located at 37 Harley Street, London W1G 8QD."
        }
      },
      {
        "@type": "Question",
        "name": "Is Botox safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Botox is approved by the Food & Drug Administration in the US and the UK (MHRA). As a muscle relaxant with an extensive record of application in medicine, botulinum toxin has an outstanding safety record over 40 years when performed by trained physicians."
        }
      },
      {
        "@type": "Question",
        "name": "Does Botox hurt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Botox injections are usually not painful. At Cosmedocs, we use the smallest 'invisible needles' in the industry combined with numbing cream, making the injection feel like a mosquito bite."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take for Botox to work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The full effects of botox treatment typically take up to 14 days to show and can last for four to six months. Various factors may affect the timeframe including treatment area, muscle thickness, and botox dosage."
        }
      },
      {
        "@type": "Question",
        "name": "What is the 3 areas of botox cost UK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The 3 areas of botox cost at Cosmedocs is £350, covering forehead lines, frown lines, and crow's feet. This represents excellent value for comprehensive upper face treatment with our expert practitioners."
        }
      }
    ]
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
      area: "DAO Muscle (Depressor Anguli Oris)",
      description: "Targets muscles that pull down the corners of the mouth, lifting downturned mouth corners for a more youthful appearance.",
      units: "4-6 units",
      price: "£100-150",
      duration: "4-6 months"
    },
    {
      area: "Mentalis Crease",
      description: "Addresses horizontal lines and dimpling over the chin area, smoothing chin texture and reducing orange peel appearance.",
      units: "4-8 units",
      price: "£100-200", 
      duration: "4-6 months"
    },
    {
      area: "Platysma Muscle",
      description: "Relaxes the large neck muscle that creates neck bands, defining jawline and reducing appearance of neck aging.",
      units: "20-40 units",
      price: "£200-400",
      duration: "4-6 months"
    },
    {
      area: "Jawline Definition",
      description: "Strategic placement to enhance facial contours, creating sharper, more defined jawline without surgery.",
      units: "15-30 units",
      price: "£150-300",
      duration: "4-6 months"
    }
  ];

  // Additional face areas
  const additionalFaceAreas = [
    {
      name: "Chin Botox",
      price: "£175",
      description: "Smooth dimpled or cobblestone chin texture for a refined appearance.",
      units: "15-25 units",
      duration: "4-6 months",
      link: "/chin-botox"
    },
    {
      name: "Nefertiti Face Lift",
      price: "£300",
      description: "Jawline definition and neck smoothing for an elegant profile.",
      units: "30-50 units",
      duration: "4-6 months",
      link: "/nefertiti-botox-facelift"
    },
    {
      name: "Masseter (Jaw Slimming)",
      price: "£350",
      description: "Reduce jaw muscle bulk for a softer, more feminine facial contour.",
      units: "25-40 units per side",
      duration: "6-8 months",
      link: "/masseter-botox"
    },
    {
      name: "Lip Flip",
      price: "£175",
      description: "Subtle upper lip enhancement for a naturally fuller appearance.",
      units: "4-8 units",
      duration: "3-4 months",
      link: "/lip-flip"
    },
    {
      name: "Gummy Smile",
      price: "£50",
      description: "Reduce excessive gum display when smiling for perfect smile proportions.",
      units: "2-4 units",
      duration: "4-6 months",
      link: "/gummy-smile-botox"
    },
    {
      name: "Bunny Lines",
      price: "£50",
      description: "Smooth fine lines on the nose bridge that appear when scrunching.",
      units: "4-8 units",
      duration: "4-6 months",
      link: "/bunny-lines-botox"
    }
  ];

  // Before/after images
  const beforeAfterImages = [
    {
      src: "/lovable-uploads/d610e5f1-30da-4a26-b87c-a7c38162811f.png",
      alt: "Best botox London before and after results for frown lines at Cosmedocs Harley Street clinic",
      caption: "Frown Lines Treatment: Smooth, natural results with our precision Botox technique."
    },
    {
      src: "/lovable-uploads/35a418d0-b5b2-4c2c-864c-a3546681613f.png", 
      alt: "Botox London prices - forehead lines before and after treatment at best botox clinic London",
      caption: "Forehead Lines Treatment: Gentle smoothing while maintaining natural movement."
    },
    {
      src: "/lovable-uploads/4fc6cbae-9029-4158-bc6e-1e30f20ac5a3.png",
      alt: "Baby botox London results - gummy smile treatment before and after at Harley Street", 
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
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:image" content={seoData.image} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.image} />
        <meta name="keywords" content="best botox london, botox in harley street, botox london harley street, cost of botox uk, baby botox london, how much is botox uk, botox in london, 3 areas of botox price, where to get botox, botox london prices, botox cost london, how much does botox cost, best botox in london, botox clinic london, face botox london" />
        <script type="application/ld+json">
          {JSON.stringify(medicalBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(medicalProcedureSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(offerSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        {/* Breadcrumb */}
        <div className="page-container pt-20">
          <Breadcrumb 
            items={[
              { label: 'Treatments', path: '/treatments' }
            ]}
            currentPage="Face Botox London"
          />
        </div>

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
                  <span className="text-purple-300">Face Botox London</span>
                  <span className="block text-sm mt-4">Invisible art - natural transformation that speaks without words</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Best Botox London | 3 Areas £350</p>
                  <p className="text-sm text-gray-300">
                    Expert <strong>botox in Harley Street</strong> with transparent <strong>botox London prices</strong>. 
                    Specialist <strong>baby botox London</strong> treatments at the <strong>best botox clinic London</strong>.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={() => window.open("https://med.as.me/harleystreet", "_blank")}
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl"
                  >
                    Book Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm"
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
        <section className="py-16 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-8 text-white">Where Can You Get Botox? Best Botox in London</h2>
              <p className="text-gray-300 max-w-3xl mx-auto mb-8">
                Wondering <strong>where to get botox on your face</strong>? Cosmedocs on Harley Street offers the <strong>best botox London</strong> with over 1 million treatments since 2007. 
                Our <strong>botox in Harley Street</strong> clinic provides expert <strong>botox in London</strong> with natural results you'll love. We also offer comprehensive 
                <Link to="/dermal-fillers" className="text-purple-300 hover:text-purple-200 underline mx-1">dermal fillers</Link>, 
                <Link to="/profhilo-treatment" className="text-purple-300 hover:text-purple-200 underline mx-1">Profhilo</Link>, and 
                <Link to="/prp-treatment" className="text-purple-300 hover:text-purple-200 underline mx-1">PRP treatments</Link>.
              </p>
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
                <p className="text-gray-300">5-15 minutes including consultation</p>
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

        {/* Before & After Gallery */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Real Botox London Results - Before & After</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See why we're rated the <strong>best botox London</strong> clinic. Our <strong>botox London Harley Street</strong> doctors achieve natural, 
                beautiful results with precision <strong>baby botox London</strong> techniques. Real patient transformations at our <strong>botox clinic London</strong>.
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
                        width="400"
                        height="256"
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

        {/* What is Botox */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-8 text-white">What is Botox? Understanding Your Treatment</h2>
              <p className="text-gray-300 max-w-3xl mx-auto mb-8">
                <strong>Botox</strong> (Botulinum toxin) is a purified protein that temporarily blocks nerve signals to muscles, 
                causing them to relax. This <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/103000s5316s5319s5323s5326s5331lbl.pdf" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">FDA-approved treatment</a> has been safely used for both medical and 
                cosmetic purposes for over 30 years. According to <a href="https://www.plasticsurgery.org/cosmetic-procedures/botulinum-toxin" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">the American Society of Plastic Surgeons</a>, 
                botulinum toxin is one of the most effective treatments for facial rejuvenation with an excellent safety profile when administered by qualified practitioners.
              </p>
            </motion.div>

            {/* Botox for Men Card */}
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-purple-500">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-white text-center">Botox for Men in London</h3>
                    <p className="text-gray-300 mb-6 text-center">
                      Men increasingly choose <strong>botox in London</strong> for natural, professional results. Our <strong>botox London best</strong> techniques 
                      for men maintain masculine features whilst reducing lines. According to the <a href="https://www.plasticsurgery.org/news/press-releases/new-statistics-reveal-the-shape-of-plastic-surgery" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">American Society of Plastic Surgeons</a>, 
                      male botox treatments have increased over 400% since 2010.
                    </p>
                    
                    {/* Statistics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="text-center bg-purple-900/30 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-purple-300">400%</div>
                        <div className="text-xs text-gray-400">increase in male Botox since 2010</div>
                      </div>
                      <div className="text-center bg-purple-900/30 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-purple-300">25-40%</div>
                        <div className="text-xs text-gray-400">higher dosage needed for men</div>
                      </div>
                      <div className="text-center bg-purple-900/30 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-purple-300">92%</div>
                        <div className="text-xs text-gray-400">satisfaction rate amongst male patients</div>
                      </div>
                      <div className="text-center bg-purple-900/30 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-purple-300">35-55</div>
                        <div className="text-xs text-gray-400">peak age group for male treatments</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Upper Face Treatment Areas */}
        <section className="py-20 bg-accent">
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
              {treatmentAreas.map((area, index) => {
                const areaLinks: Record<string, string> = {
                  "Forehead Lines": "/forehead-lines-botox",
                  "Frown Lines": "/frown-line-botox",
                  "Crow's Feet": "/crows-feet-botox"
                };
                
                return (
                <motion.div
                  key={area.area}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-900/50 border-gray-700 h-full hover:bg-gray-900/70 transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3 text-white">
                        {areaLinks[area.area] ? (
                          <Link to={areaLinks[area.area]} className="text-purple-300 underline hover:text-purple-200">{area.area}</Link>
                        ) : (
                          area.area
                        )}
                      </h3>
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
              )})}
            </div>
          </div>
        </section>

        {/* Lower Face Treatment Areas */}
        <section className="py-20 bg-black">
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

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {lowerFaceTreatmentAreas.map((area, index) => (
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

        {/* Natural Baby Botox: Subtle Enhancement */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Baby Botox London: Subtle Enhancement</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                <strong>Baby botox London</strong> (Microtox) employs meticulous microneedle injections with small doses of botulinum toxin for a gentle, 
                natural anti-ageing outcome. This is the <strong>best botox in London</strong> technique for those wanting subtle results. Our <strong>botox in Harley Street</strong> clinic 
                specialises in this refined approach for natural-looking enhancement.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-white">How Does Botox Work?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Syringe className="w-5 h-5 text-purple-400 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2 text-white">Muscle Relaxation</h4>
                      <p className="text-gray-300">
                        Botox blocks nerve signals to targeted facial muscles, preventing them from contracting and forming wrinkles.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Brain className="w-5 h-5 text-purple-400 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2 text-white">Nerve Signal Blocking</h4>
                      <p className="text-gray-300">
                        The botulinum toxin temporarily interrupts communication between nerves and muscles at the injection site.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <RefreshCw className="w-5 h-5 text-purple-400 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2 text-white">Gradual Recovery</h4>
                      <p className="text-gray-300">
                        Over 3-6 months, nerve endings regenerate and muscle function gradually returns, requiring repeat treatments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="bg-gray-900/50 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-white">Baby Botox Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Subtle, natural-looking results</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Maintains facial expressions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Perfect introduction to Botox</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Preventative anti-ageing</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Minimal downtime</span>
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-purple-900/30 rounded-lg">
                    <p className="text-sm text-purple-200 italic">
                      "Retain your character, release only the timeless wrinkles"
                    </p>
                  </div>
                </CardContent>
              </Card>
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
                        <h3 className="text-lg font-semibold text-white">
                          {area.link ? (
                            <Link to={area.link} className="text-purple-300 underline hover:text-purple-200 transition-colors">{area.name}</Link>
                          ) : (
                            area.name
                          )}
                        </h3>
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




        {/* Medical Botox Applications */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Medical Botox Injections</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Botox isn't just for cosmetic enhancement - it's a proven medical treatment for various conditions.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-gray-900/50 border-gray-700 text-center hover:bg-gray-900/70 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white"><Link to="/bruxism-botox" className="text-purple-300 underline hover:text-purple-200">Bruxism</Link> & TMJ</h3>
                  <p className="text-sm text-gray-300">
                    Effective treatment for jaw pain, teeth grinding, and TMJ disorders.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-900/50 border-gray-700 text-center hover:bg-gray-900/70 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white"><Link to="/migraine-botox" className="text-purple-300 underline hover:text-purple-200">Migraines</Link></h3>
                  <p className="text-sm text-gray-300">
                    FDA-approved treatment for chronic migraines and tension headaches.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-900/50 border-gray-700 text-center hover:bg-gray-900/70 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white"><Link to="/excessive-sweat-botox" className="text-purple-300 underline hover:text-purple-200">Hyperhidrosis</Link></h3>
                  <p className="text-sm text-gray-300">
                    Effective solution for excessive sweating in underarms, palms, and feet.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-900/50 border-gray-700 text-center hover:bg-gray-900/70 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Facial Asymmetry</h3>
                  <p className="text-sm text-gray-300">
                    Corrective treatment for conditions like Bell's Palsy and facial imbalances.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Advanced Combination Approach */}
        <section className="py-20 bg-accent">
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
                For deep wrinkles, we combine Botox with <Link to="/dermal-fillers" className="text-purple-300 hover:text-purple-200 underline">dermal fillers</Link> for superior results
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
                    Combining Botox with carefully placed <Link to="/dermal-fillers" className="text-purple-300 hover:text-purple-200 underline">dermal fillers</Link> addresses both 
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

        {/* Pricing Section */}
        <section id="pricing-section" className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Botox London Prices | How Much Does Botox Cost?</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                <strong>How much is botox UK?</strong> Our <strong>botox cost London</strong> is transparent with no hidden fees. <strong>Cost of botox UK</strong> at our 
                <strong> botox in Harley Street</strong> clinic: 1 area £175, 2 areas £275, <strong>3 areas of botox price</strong> £350. 
                All <strong>botox London prices</strong> include consultation, treatment, and aftercare from expert doctors. Discover <strong>how much does botox cost</strong> 
                at London's leading <strong>botox clinic London</strong>.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-purple-500 h-full text-center">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">1 Area</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£175</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Single treatment area - perfect for targeted enhancement</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Consultation included</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Premium Botox</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Aftercare support</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-purple-600 border-purple-400 h-full text-center relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-white text-purple-600 px-4 py-1 rounded-full text-sm font-semibold">POPULAR</span>
                  </div>
                  <CardHeader className="pt-8">
                    <CardTitle className="text-white text-2xl">2 Areas</CardTitle>
                    <div className="text-white text-4xl font-bold">£275</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-purple-100">Most popular choice for comprehensive facial enhancement</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Comprehensive consultation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Premium Botox</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Extended aftercare support</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">2-week follow-up</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-gray-700 h-full text-center">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">3 Areas</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£350</div>
                    <p className="text-sm text-gray-400">3 areas of botox cost UK</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Complete upper face treatment for maximum results - forehead, frown lines, and crow's feet</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Full facial assessment</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Premium Botox</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Comprehensive aftercare</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900 border-gray-600 h-full text-center">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Men's Botox</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">+£50</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Additional charge for male treatments due to increased product requirements</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Higher dosage requirements</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Specialised masculine technique</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Same aftercare included</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

          </div>
        </section>

        {/* Why Choose Cosmedocs */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-8 text-white">Why Choose Cosmedocs?</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Experience</h3>
                <p className="text-gray-300">Over 1 million injections performed since 2007</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Botox Training London</h3>
                <p className="text-gray-300">
                  <strong>Botox courses London</strong> - We train practitioners at the <a 
                    href="https://www.harleystreetinstitute.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-300 hover:text-purple-200 underline"
                  >
                    Harley Street Institute
                  </a>. <strong>Botox training London</strong> by experts.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Quality</h3>
                <p className="text-gray-300">Premium FDA-approved Botox only</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Palette className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Philosophy</h3>
                <p className="text-gray-300">'Invisible art' for natural results</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Aftercare</h3>
                <p className="text-gray-300">Comprehensive aftercare and follow-up</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Client Reviews Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Client Reviews</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Hear what our satisfied clients have to say about their Botox experience at CosmeDocs.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-gray-900/50 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 italic">
                    "I've had three facial areas treated with Anti-Wrinkle Injection at CosmeDocs in recent years, and find the treatment swift, thorough and effective. Also, Dr Haq's pleasant and friendly manner makes the treatment as painless as possible!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Sarah M.</p>
                      <p className="text-sm text-gray-400">Verified Patient</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 italic">
                    "I had a facial aesthetic treatment with cosmodocs. I found the price very reasonable. Even better the results were excellent. I will definitely use this service again."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">James L.</p>
                      <p className="text-sm text-gray-400">Verified Patient</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" className="border-purple-300 text-purple-300 hover:bg-purple-300 hover:text-black">
                Read More Reviews
              </Button>
            </div>
          </div>
        </section>

        {/* Enhanced FAQ Section */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Botox London FAQs | Where to Get Botox</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Your questions about <strong>where can you get botox</strong>, <strong>how much is botox</strong>, and <strong>botox in London</strong> answered by expert practitioners.
              </p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="safety" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-purple-300">Is Botox safe?</AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    <strong>Botox</strong> is approved by the <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/103000s5316s5319s5323s5326s5331lbl.pdf" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">Food & Drug Administration</a> in the US and the UK (MHRA). 
                    As a muscle relaxant with an extensive record of application in medicine, botulinum toxin has an outstanding safety record. 
                    According to <a href="https://www.plasticsurgery.org/cosmetic-procedures/botulinum-toxin" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">clinical research from the American Society of Plastic Surgeons</a>, 
                    it has been used successfully for various medical and cosmetic conditions throughout the past 40 years. To ensure successful and safe results 
                    from <strong>botox in London</strong> treatments, they must be performed by trained physicians at reputable clinics like our <strong>botox in Harley Street</strong> facility.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="pain" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-purple-300">Does Botox hurt at the best botox London clinic?</AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    <strong>Botox injections</strong> are usually not painful. Many patients at our <strong>botox clinic London</strong> report experiencing no discomfort during the procedure. 
                    At Cosmedocs, our doctors use the smallest needles in the industry, known as "invisible needles," for <strong>botox London</strong> treatments to minimise discomfort. 
                    When combined with numbing cream, most patients at our <strong>best botox in London</strong> clinic report that the injection feels like a mosquito bite.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="timeline" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-purple-300">How long does it take for Botox to work?</AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    The full effects of the Botox treatment typically take up to 14 days to show up and can last for four to six months. Various factors may affect the time frame including the treatment area, thickness of the muscle, and the dose of Botox.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="frequency" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-purple-300">How often do you need Botox?</AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Typically, Botox injections last for about 4-6 months. The frequency of Botox treatments varies depending on individual factors such as age, skin condition, and treatment goals. Individuals see increased longevity with subsequent treatments.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="suitable" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-purple-300">Who is a suitable candidate for Botox injections?</AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Botox in London is safe and effective for patients 18 years and older. However, our experts suggest this anti-wrinkle treatment to prevent lines and wrinkles from mid-20s onwards. Botox is also an effective preventative aesthetic treatment to delay the onset of wrinkles and ageing. However, there are certain cases in which Botox treatments are not advisable if you are pregnant or breastfeeding.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="cost" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-purple-300">How much is Botox in London? Botox cost London</AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    <strong>How much is botox UK?</strong> <strong>Botox London treatment prices</strong> vary depending on the practitioner's experience and location. 
                    At Cosmedocs <strong>botox in Harley Street</strong> clinic, <strong>botox cost London</strong> starts from £175 for one area, £275 for two areas, 
                    and <strong>3 areas of botox cost UK</strong> is £350. These <strong>botox London prices</strong> are competitive for the <strong>best botox London</strong> quality. 
                    <strong>How much does botox cost</strong> includes consultation, treatment, and aftercare at our <strong>botox clinic London</strong>.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="location" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-purple-300">Where to get botox on your face in London?</AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    <strong>Where can you get botox</strong> in London? Cosmedocs offers the <strong>best botox in London</strong> at our <strong>botox London Harley Street</strong> clinic 
                    at 37 Harley Street, London W1G 8QD. Our <strong>botox clinic London</strong> specialises in <strong>where to get botox on your face</strong> safely with expert doctors. 
                    We're the leading choice for <strong>botox in London</strong> with over 1 million treatments performed. Book your free consultation to discover <strong>where to get botox</strong> from London's most trusted practitioners.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Professional Training */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">Botox Courses London | Botox Training</h2>
              <p className="text-gray-300">Learn advanced face Botox techniques from our experts. <strong>Botox courses in London</strong> and <strong>botox training London</strong> by industry leaders.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gray-900/50 border-gray-700">
                <CardContent className="p-6">
                  <BookOpen className="h-8 w-8 text-purple-300 mb-4" />
                  <h3 className="text-xl font-semibold mb-4 text-white">Botox Courses in London - Online</h3>
                  <p className="text-gray-300 mb-4">
                    For medical professionals seeking <strong>botox training London</strong>, we offer comprehensive 
                    <strong>botox courses London</strong> through <a href="https://www.harleystreetinstitute.com" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">harleystreetinstitute.com</a>. 
                    Learn from the team behind the <strong>best botox London</strong> clinic.
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
        <section className="py-20">
          <div className="page-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-12"
            >
              <h2 className="text-3xl font-bold mb-4">Book the Best Botox London | Harley Street</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Ready to experience <strong>best botox in London</strong>? Book your free consultation at our <strong>botox London Harley Street</strong> clinic. 
                Discover why patients choose us when searching for <strong>where to get botox</strong> in London. Expert <strong>baby botox London</strong> treatments with natural, 
                sophisticated results. Call us today for competitive <strong>botox London prices</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6"
                  onClick={() => window.open('https://med.as.me/harleystreet', '_blank')}
                >
                  Book Free Consultation
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6"
                  onClick={() => window.location.href = 'tel:03330551503'}
                >
                  Call 0333 0551 503
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Client Reviews */}
        <ClientReviews />

        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true">
          <h2>Best Botox London | Botox in Harley Street | Cost of Botox UK Guide</h2>
          <p>
            Looking for where to get botox in London? Cosmedocs is the best botox London clinic on Harley Street offering comprehensive face botox treatment for all facial areas. 
            Our botox in Harley Street clinic provides expert botox in London with natural results. How much is botox UK? Our transparent botox London prices start from £175 for one area, 
            £275 for two areas, and the 3 areas of botox price is £350. The cost of botox UK at our botox clinic London includes consultation, treatment, and aftercare. 
            How much does botox cost? Our competitive botox cost London represents excellent value for the best botox in London quality. We specialise in baby botox London techniques 
            for subtle, natural enhancement. Where can you get botox safely? Our botox London Harley Street clinic at 37 Harley Street has performed over 1 million injections since 2007. 
            The best botox London practitioners deliver invisible art philosophy results. Botox London best describes our approach - natural-looking outcomes that preserve facial expression. 
            Where to get botox on your face? We treat forehead lines, frown lines, crow's feet, lower face areas, chin, jawline, and more. Our botox in London prices include free consultation 
            and follow-up. The 3 areas of botox cost UK covers complete upper face treatment. How much is botox? Prices vary by practitioner experience - our expert doctors ensure optimal 
            results. Baby botox London is perfect for those wanting subtle enhancement. Our botox clinic London uses premium FDA-approved products with strict safety protocols. 
            Botox London prices are transparent with no hidden costs. The cost of botox UK depends on treatment areas and practitioner expertise. Where to get botox in London safely? 
            Choose our CQC-registered botox in Harley Street clinic. How much does botox cost for men? Additional £50 for higher dosage requirements. Best botox in London combines 
            advanced technique, premium products, and expert practitioners. Our botox London Harley Street location is easily accessible with excellent facilities. 
            Botox training London available through Harley Street Institute - we offer botox courses London and botox courses in London for medical professionals. 
            Book your consultation today at the best botox London clinic. Contact us at 0333 0551 503 to discuss where can you get botox safely in London. 
            Our botox London best team provides personalised treatment plans. Visit our botox clinic London for expert advice on cost of botox UK and treatment options. 
            Discover why patients choose us when searching for where to get botox on your face in London. Experience baby botox London at its finest with natural, 
            sophisticated results that speak without words. Our botox in London service includes comprehensive aftercare and support. The botox cost London reflects 
            our commitment to excellence and patient satisfaction. Learn more about botox London prices and book your free consultation at London's premier 
            botox in Harley Street clinic today.
          </p>
          
          <h3>Botox Treatment Areas London | Where to Get Botox on Your Face</h3>
          <p>
            Our best botox London clinic treats all facial areas: upper face botox (<Link to="/forehead-lines-botox" className="text-purple-300 hover:text-purple-200 underline">forehead lines</Link>, <Link to="/frown-line-botox" className="text-purple-300 hover:text-purple-200 underline">frown lines</Link>, <Link to="/crows-feet-botox" className="text-purple-300 hover:text-purple-200 underline">crow's feet</Link>, brow lift), lower face botox 
            (DAO muscle, mentalis crease, platysma muscle, <Link to="/jawline-filler" className="text-purple-300 hover:text-purple-200 underline">jawline</Link> definition), and specialised areas (<Link to="/chin-botox" className="text-purple-300 hover:text-purple-200 underline">chin botox</Link>, <Link to="/nefertiti-botox-face-jaw-lift" className="text-purple-300 hover:text-purple-200 underline">Nefertiti facelift</Link>, <Link to="/masseter-botox" className="text-purple-300 hover:text-purple-200 underline">masseter jaw slimming</Link>, 
            <Link to="/lip-flip" className="text-purple-300 hover:text-purple-200 underline">lip flip</Link>, <Link to="/gummy-smile-botox" className="text-purple-300 hover:text-purple-200 underline">gummy smile</Link>, <Link to="/bunny-lines-botox" className="text-purple-300 hover:text-purple-200 underline">bunny lines</Link>). Baby botox London technique available for subtle enhancement. All botox in London treatments include consultation.
          </p>
          
          <h3>Botox London Prices | Cost of Botox UK | How Much Does Botox Cost</h3>
          <p>
            Transparent botox cost London: 1 area £175, 2 areas £275, 3 areas of botox cost UK £350. How much is botox UK? Our competitive botox London prices 
            include consultation, treatment, and aftercare. Men's treatments +£50. Best botox in London value at our botox clinic London.
          </p>
          
          <h3>Why Choose Our Botox in Harley Street Clinic</h3>
          <p>
            Cosmedocs offers the best botox London with expert practitioners, over 1 million treatments performed, premium products, invisible art philosophy, 
            and comprehensive aftercare. Our botox London Harley Street clinic is CQC-registered ensuring highest safety standards. Experience why we're rated 
            the best botox in London by patients searching for where to get botox safely.
          </p>
        </div>

        <PopularTreatments />
      </div>
    </>
  );
}