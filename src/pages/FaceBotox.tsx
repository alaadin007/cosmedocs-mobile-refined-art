import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { generateSEOMetadata } from '@/utils/seo';
import { Clock, Users, Award, Calendar, MapPin, Phone, CheckCircle, Star, Eye, Zap, ArrowRight, BookOpen, Target, Shield, Heart, ChevronLeft, ChevronRight, Check } from "lucide-react";
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

      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-secondary/5">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-6">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5" />
          <div className="relative container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
                Comprehensive Face Botox Treatment
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Complete facial rejuvenation including upper face, lower face areas and advanced combination techniques
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm bg-card px-4 py-2 rounded-full">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>30 minutes</span>
                </div>
                <div className="flex items-center gap-2 text-sm bg-card px-4 py-2 rounded-full">
                  <Users className="w-4 h-4 text-primary" />
                  <span>From £175</span>
                </div>
                <div className="flex items-center gap-2 text-sm bg-card px-4 py-2 rounded-full">
                  <Award className="w-4 h-4 text-primary" />
                  <span>Expert Doctors</span>
                </div>
              </div>
              <Button 
                size="lg" 
                className="px-8 py-4 text-lg"
                onClick={() => window.open('https://med.as.me/harleystreet', '_blank')}
              >
                Book Consultation
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Pricing Section */}
        <section className="py-16 px-6 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Face Botox Pricing</h2>
              <p className="text-lg text-muted-foreground">Transparent pricing for all facial areas</p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-center bg-card rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-3xl font-bold mb-3 text-primary">£175</div>
                  <div className="text-lg mb-2">1 Area</div>
                  <div className="text-sm text-muted-foreground">Single treatment area</div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center bg-card rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-3xl font-bold mb-3 text-primary">£275</div>
                  <div className="text-lg mb-2">2 Areas</div>
                  <div className="text-sm text-muted-foreground">Two treatment areas</div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-center bg-card rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-3xl font-bold mb-3 text-primary">£350</div>
                  <div className="text-lg mb-2">3 Areas</div>
                  <div className="text-sm text-muted-foreground">Three treatment areas</div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-center bg-secondary/20 border border-secondary/30 rounded-xl p-6 hover:bg-secondary/30 transition-all duration-300"
                >
                  <div className="text-3xl font-bold mb-3 text-secondary">+£50</div>
                  <div className="text-lg mb-2">Men Supplement</div>
                  <div className="text-sm text-muted-foreground">Additional charge for men</div>
                </motion.div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">&lt;5min</div>
                <div className="text-sm text-muted-foreground">Treatment Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">5-10 days</div>
                <div className="text-sm text-muted-foreground">Takes Effect</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">4-6 months</div>
                <div className="text-sm text-muted-foreground">Results Last</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Immediate</div>
                <div className="text-sm text-muted-foreground">Return to Work</div>
              </div>
            </div>
          </div>
        </section>

        {/* Upper Face Treatment Areas */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Upper Face Treatment Areas
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Target the three most common facial areas for natural, lasting results
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {treatmentAreas.map((area, index) => (
                <motion.div
                  key={area.area}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold mb-3">{area.area}</h3>
                    <p className="text-muted-foreground mb-4">{area.description}</p>
                    <div className="space-y-2">
                      <div className="text-sm">
                        <span className="font-medium">Units:</span> {area.units}
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">Price:</span> {area.price}
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">Duration:</span> {area.duration}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Before & After Section */}
        <section className="py-16 px-6 bg-secondary/5">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Real Results
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See the transformation our expert doctors achieve with precision botox treatments
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Before & After Carousel */}
              <div className="relative max-w-lg mx-auto">
                <div className="relative overflow-hidden rounded-lg aspect-square">
                  {beforeAfterImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                        index === currentImageIndex ? 'translate-x-0' : 
                        index < currentImageIndex ? '-translate-x-full' : 'translate-x-full'
                      }`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                  
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="mt-4 text-center">
                  <p className="text-sm text-muted-foreground">
                    {beforeAfterImages[currentImageIndex]?.caption}
                  </p>
                </div>
                
                <div className="flex justify-center mt-4 space-x-2">
                  {beforeAfterImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Instagram Embed */}
              <div className="flex justify-center">
                <div className="max-w-lg w-full">
                  <blockquote 
                    className="instagram-media" 
                    data-instgrm-captioned 
                    data-instgrm-permalink="https://www.instagram.com/reel/DHtX5dCN399/?utm_source=ig_embed&utm_campaign=loading" 
                    data-instgrm-version="14" 
                    style={{
                      background: '#FFF',
                      border: '0',
                      borderRadius: '3px',
                      boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                      margin: '1px',
                      maxWidth: '540px',
                      minWidth: '326px',
                      padding: '0',
                      width: '99.375%'
                    }}
                  >
                    <div style={{ padding: '16px' }}>
                      <a 
                        href="https://www.instagram.com/reel/DHtX5dCN399/?utm_source=ig_embed&utm_campaign=loading" 
                        style={{
                          background: '#FFFFFF',
                          lineHeight: '0',
                          padding: '0 0',
                          textAlign: 'center',
                          textDecoration: 'none',
                          width: '100%'
                        }} 
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                          <div style={{
                            backgroundColor: '#F4F4F4',
                            borderRadius: '50%',
                            flexGrow: '0',
                            height: '40px',
                            marginRight: '14px',
                            width: '40px'
                          }}></div>
                          <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            flexGrow: '1',
                            justifyContent: 'center'
                          }}>
                            <div style={{
                              backgroundColor: '#F4F4F4',
                              borderRadius: '4px',
                              flexGrow: '0',
                              height: '14px',
                              marginBottom: '6px',
                              width: '100px'
                            }}></div>
                            <div style={{
                              backgroundColor: '#F4F4F4',
                              borderRadius: '4px',
                              flexGrow: '0',
                              height: '14px',
                              width: '60px'
                            }}></div>
                          </div>
                        </div>
                        <div style={{ padding: '19% 0' }}></div>
                        <div style={{
                          display: 'block',
                          height: '50px',
                          margin: '0 auto 12px',
                          width: '50px'
                        }}>
                          <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                              <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                                <g>
                                  <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path>
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                        <div style={{ paddingTop: '8px' }}>
                          <div style={{
                            color: '#3897f0',
                            fontFamily: 'Arial,sans-serif',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: '550',
                            lineHeight: '18px'
                          }}>
                            View this post on Instagram
                          </div>
                        </div>
                        <div style={{ padding: '12.5% 0' }}></div>
                      </a>
                      <p style={{
                        color: '#c9c8cd',
                        fontFamily: 'Arial,sans-serif',
                        fontSize: '14px',
                        lineHeight: '17px',
                        marginBottom: '0',
                        marginTop: '8px',
                        overflow: 'hidden',
                        padding: '8px 0 7px',
                        textAlign: 'center',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}>
                        <a 
                          href="https://www.instagram.com/reel/DHtX5dCN399/?utm_source=ig_embed&utm_campaign=loading" 
                          style={{
                            color: '#c9c8cd',
                            fontFamily: 'Arial,sans-serif',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: 'normal',
                            lineHeight: '17px',
                            textDecoration: 'none'
                          }} 
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          A post shared by COSMEDOCS • Cosmetic Doctors (@cosmedocs)
                        </a>
                      </p>
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button 
                variant="outline" 
                onClick={() => window.open('/before-after-gallery', '_blank')}
              >
                View Before & After Gallery
              </Button>
            </div>
          </div>
        </section>

        {/* Lower Face Treatment Areas */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Lower Face Treatment Areas
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive lower face rejuvenation for balanced facial harmony
              </p>
            </motion.div>

            <div className="mb-8">
              <Card className="p-8">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">The Unbalanced Face Problem</h3>
                      <p className="text-muted-foreground mb-4">
                        Many clients have been receiving upper face Botox for years, but their lower 
                        face remains hyper-animated. This creates an unnatural imbalance where the 
                        upper face is relaxed while the lower face shows excessive movement.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Mentalis crease over the chin from habitual muscle use</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Downturned mouth corners creating sad expression</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Horizontal lines along jawline from muscle tension</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">The Solution</h3>
                      <p className="text-muted-foreground mb-4">
                        Strategic lower face Botox creates balance, symmetry, and natural results 
                        by harmonizing upper and lower facial animation.
                      </p>
                      <div className="bg-primary/10 p-4 rounded-lg">
                        <p className="text-sm font-medium mb-2">The Result:</p>
                        <p className="text-sm text-muted-foreground">
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
                  <Card className="h-full p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <area.icon className="h-8 w-8 text-primary mb-4" />
                      <h3 className="text-lg font-semibold mb-3">{area.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{area.description}</p>
                      <div className="bg-accent/50 p-3 rounded text-xs">
                        <span className="font-medium">Benefit: </span>
                        <span className="text-muted-foreground">{area.benefit}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Face Areas */}
        <section className="py-16 px-6 bg-secondary/5">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Additional Face Areas</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                  <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-semibold">{area.name}</h3>
                        <span className="text-primary font-bold">{area.price}</span>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4">{area.description}</p>
                      <div className="space-y-2 text-xs text-muted-foreground">
                        <div><span className="font-medium">Units:</span> {area.units}</div>
                        <div><span className="font-medium">Duration:</span> {area.duration}</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Advanced Combination Approach */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Advanced Combination Approach
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                For deep wrinkles, we combine Botox with dermal fillers for superior results
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-4">Why Botox Alone Isn't Enough</h3>
                  <p className="text-muted-foreground mb-4">
                    Botox wears off approximately 20% per month. For people with deep wrinkles, 
                    this creates a frustrating cycle where lines reappear at 2-3 months.
                  </p>
                  <div className="space-y-3">
                    {botoxTimeline.map((item) => (
                      <div key={item.month} className="flex items-center gap-3">
                        <div className="w-16 text-sm font-medium">Month {item.month}:</div>
                        <div className="flex-1">
                          <div className="bg-accent rounded-full h-2 relative overflow-hidden">
                            <div 
                              className="bg-primary h-full transition-all duration-500"
                              style={{ width: `${100 - item.percentage}%` }}
                            />
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground">{item.percentage}% worn off</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-4">The Advanced Solution</h3>
                  <p className="text-muted-foreground mb-4">
                    Combining Botox with carefully placed dermal fillers addresses both 
                    muscle movement AND fills the established crease for comprehensive treatment.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Fill lines halfway for natural appearance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Stimulate natural collagen production</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Provide stable, long-lasting results</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Results last 18-24 months</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Professional Training */}
        <section className="py-16 px-6 bg-secondary/5">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Professional Training Available</h2>
              <p className="text-lg text-muted-foreground">Learn advanced face Botox techniques from our experts</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardContent className="p-0">
                  <BookOpen className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Online Courses</h3>
                  <p className="text-muted-foreground mb-4">
                    For medical professionals practicing dermal fillers and Botox, we offer comprehensive 
                    online courses through harleystreetinstitute.com
                  </p>
                  <Button variant="outline" className="w-full">
                    Learn More About Online Training
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="p-6">
                <CardContent className="p-0">
                  <Users className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-4">One-to-One Training</h3>
                  <p className="text-muted-foreground mb-4">
                    Book personalized training sessions to learn these advanced procedures 
                    that will significantly increase your client satisfaction rates.
                  </p>
                  <Button variant="outline" className="w-full">
                    Book Personal Training
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-6 bg-primary/10">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Comprehensive Face Botox?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transform your entire face with our expert comprehensive Botox treatments. 
              From upper face to lower face areas and advanced combination techniques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="px-8 py-4 text-lg"
                onClick={() => window.open('https://med.as.me/harleystreet', '_blank')}
              >
                Book Your Consultation
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                View Price List
              </Button>
            </div>
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <Eye className="h-4 w-4" />
                <span>Bold • Natural • Always Your Way</span>
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