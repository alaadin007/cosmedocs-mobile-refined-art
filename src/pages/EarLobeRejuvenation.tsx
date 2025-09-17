import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Instagram, Users, Award, Calendar, MapPin, Phone, Mail, ChevronDown, ChevronUp, Play, Syringe, Clock, Heart, Shield, CalendarDays, Activity, GraduationCap, CheckCircle, Palette } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import BeforeAfterGrid from "@/components/BeforeAfterGrid";
import { useState, useEffect } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Declare Instagram global type
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

const EarLobeRejuvenation = () => {
  const seoData = generateSEOMetadata(
    "Ear Lobe Rejuvenation London | From £500 | Cosmedocs | Harley Street", 
    "Professional ear lobe rejuvenation treatments in London's Harley Street. Transform drooping, aged earlobes with dermal fillers. Expert treatment from £500 at Cosmedocs.", 
    "/ear-lobe-rejuvenation"
  );
  
  // Load Instagram embed script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
    
    // Process Instagram embeds when script loads
    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };
    
    return () => {
      // Clean up script on component unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);
  
  const bookingUrl = "https://med.as.me/harleystreet";

  const leftColumnFaqs = [
    {
      question: "How much does ear lobe rejuvenation cost in London?",
      answer: "At Cosmedocs Harley Street, ear lobe rejuvenation treatments start from £500 per session. The cost varies depending on the degree of rejuvenation needed and amount of filler required."
    },
    {
      question: "How long do ear lobe rejuvenation results last?",
      answer: "Ear lobe rejuvenation results typically last 12-18 months. The longevity depends on the type and amount of filler used, your metabolism, and how much you wear heavy earrings."
    },
    {
      question: "Is ear lobe rejuvenation safe?",
      answer: "Yes, when performed by qualified practitioners at our Cosmedocs Harley Street clinic, ear lobe rejuvenation is very safe. We use premium hyaluronic acid fillers and follow strict safety protocols."
    },
    {
      question: "Why do earlobes droop with age?",
      answer: "Earlobes droop due to natural aging, gravity, loss of collagen and elastin, and wearing heavy earrings over time. The skin becomes thinner and loses its structural support."
    },
    {
      question: "Can I still wear earrings after treatment?",
      answer: "Yes, you can wear earrings after treatment. However, we recommend avoiding heavy earrings for the first few weeks and choosing lighter options to maintain your results longer."
    }
  ];

  const rightColumnFaqs = [
    {
      question: "How painful is ear lobe rejuvenation treatment?",
      answer: "Most patients find ear lobe rejuvenation comfortable. We use topical numbing cream and the fillers contain lidocaine for additional comfort during the procedure."
    },
    {
      question: "What happens during an ear lobe rejuvenation consultation?",
      answer: "During your consultation, our expert practitioners at Cosmedocs will assess your ear lobes, discuss your concerns, and create a personalized treatment plan to restore volume and firmness."
    },
    {
      question: "Can I combine ear lobe rejuvenation with other treatments?",
      answer: "Absolutely! Ear lobe rejuvenation works well with other facial rejuvenation treatments such as dermal fillers, botox, and skin treatments for comprehensive facial enhancement."
    },
    {
      question: "How quickly will I see ear lobe rejuvenation results?",
      answer: "Results are visible immediately after treatment, with final results apparent within 2 weeks once any minor swelling subsides. Your earlobes will appear plumper and more youthful."
    },
    {
      question: "Can ear lobe rejuvenation results be reversed?",
      answer: "Yes, hyaluronic acid fillers used in ear lobe rejuvenation can be dissolved with hyaluronidase if needed, providing flexibility and peace of mind."
    }
  ];

  const beforeAfterImages = [
    { 
      src: "/lovable-uploads/e9ca6f3d-62c7-416f-b623-8202fb6ef181.png", 
      alt: "Ear lobe before rejuvenation treatment showing drooping and volume loss", 
      caption: "Before: Significant ear lobe volume loss and deep wrinkles with age-related structural changes" 
    },
    { 
      src: "/lovable-uploads/a6ddbdbb-2597-49b1-9b92-bac7242c0b83.png", 
      alt: "Ear lobe after rejuvenation treatment showing restored volume and firmness", 
      caption: "After: Restored ear lobe with improved volume, firmness and youthful appearance" 
    },
  ];

  const treatmentDetails = [
    {
      title: "Anaesthetic",
      detail: "Local / Topical"
    },
    {
      title: "Procedure Time",
      detail: "20-30 minutes"
    },
    {
      title: "Results Duration",
      detail: "12+ months"
    },
    {
      title: "Recovery",
      detail: "24-48 hours"
    },
    {
      title: "Back to Work",
      detail: "Immediate"
    },
    {
      title: "Risks",
      detail: "Minimal - swelling, bruising"
    }
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
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.image} />
        
        {/* Local SEO */}
        <meta name="geo.region" content="GB-LND" />
        <meta name="geo.placename" content="London" />
        <meta name="geo.position" content="51.5074;-0.1278" />
        <meta name="ICBM" content="51.5074, -0.1278" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Cosmedocs - Ear Lobe Rejuvenation Treatment",
            "description": "Professional ear lobe rejuvenation treatments for aging and drooping earlobes",
            "url": "https://cosmedocs.com/ear-lobe-rejuvenation",
            "telephone": "0333 0551 503",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "10 Harley Street",
              "addressLocality": "London",
              "postalCode": "W1G 9PF",
              "addressCountry": "GB"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 51.5074,
              "longitude": -0.1278
            },
            "medicalSpecialty": "Cosmetic Surgery",
            "priceRange": "£500+"
          })}
        </script>

        {/* Video Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "Ear Lobe Rejuvenation with Dermal Fillers - Before & After Results",
            "description": "Watch real ear lobe rejuvenation treatment results using dermal fillers. Professional demonstration of the procedure and immediate results at Cosmedocs Harley Street.",
            "thumbnailUrl": "https://cosmedocs.com/default-og-image.jpg",
            "uploadDate": "2024-01-19",
            "duration": "PT60S",
            "contentUrl": "https://www.instagram.com/reel/DBeV9VsNp4e/",
            "embedUrl": "https://www.instagram.com/reel/DBeV9VsNp4e/",
            "publisher": {
              "@type": "Organization",
              "name": "Cosmedocs",
              "logo": {
                "@type": "ImageObject",
                "url": "https://cosmedocs.com/default-og-image.jpg"
              }
            },
            "hasPart": [
              {
                "@type": "Clip",
                "name": "Before Treatment",
                "startOffset": 0,
                "endOffset": 20,
                "description": "Patient's ear lobes before rejuvenation treatment"
              },
              {
                "@type": "Clip", 
                "name": "Treatment Process",
                "startOffset": 20,
                "endOffset": 40,
                "description": "Dermal filler injection procedure for ear lobe rejuvenation"
              },
              {
                "@type": "Clip",
                "name": "After Treatment",
                "startOffset": 40,
                "endOffset": 60,
                "description": "Immediate results showing plumper, rejuvenated ear lobes"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-16 md:py-32 overflow-hidden flex items-center">
          <div className="page-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-white">
                  Ear Lobe
                  <span className="block text-purple-300">Rejuvenation</span>
                  <span className="block text-sm mt-4">Restore youthful volume to aging earlobes</span>
                </h1>
                <div className="mb-8">
                  <p className="text-xl text-gray-200 mb-4 max-w-xl">
                    <span className="text-purple-300 font-semibold">Invisible Art</span>
                  </p>
                  <p className="text-sm text-gray-300">Rejuvenation, new collagen, plumping using hyaluronic acid that stimulates your own collagen</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl"
                    onClick={() => window.open(bookingUrl, '_blank')}
                  >
                    Book Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm"
                    onClick={() => {
                      const pricingSection = document.getElementById('pricing-section');
                      if (pricingSection) {
                        pricingSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
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
              <h2 className="text-3xl font-bold mb-8 text-white">Ear Lobe Rejuvenation Treatment</h2>
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
                <p className="text-gray-300">20-30 minutes including consultation</p>
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
                <p className="text-gray-300">12-18 months with premium hyaluronic acid</p>
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
                <p className="text-gray-300">Local anaesthetic + numbing cream</p>
              </motion.div>
            </div>
          </div>
        </section>


         {/* Real Patient Results */}
         <section className="py-20 bg-black">
           <div className="page-container">
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               viewport={{ once: true }}
               className="text-center mb-16"
             >
               <h2 className="text-4xl font-bold mb-6">Ear Lobe Rejuvenation Before & After</h2>
               <p className="text-gray-300 max-w-4xl mx-auto text-lg">
                 Witness the transformative power of our ear lobe rejuvenation treatments with real before and after results from our patients.
               </p>
             </motion.div>

             <Carousel className="w-full max-w-5xl mx-auto">
               <CarouselContent>
                 {beforeAfterImages.map((image, index) => (
                   <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
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

             <div className="text-center mt-12">
               <BeforeAfterImageViewer 
                 images={beforeAfterImages}
                 triggerLabel="View All Results"
                 title="Complete Results Gallery"
                 description="Comprehensive gallery of our ear lobe enhancement treatments"
               />
             </div>
           </div>
         </section>

        {/* What is Ear Lobe Rejuvenation */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">What is Ear Lobe Rejuvenation?</h2>
              <p className="text-gray-300 max-w-4xl mx-auto text-lg">
                Ear lobe rejuvenation is a non-surgical cosmetic procedure that restores volume, firmness, 
                and shape to aging or stretched earlobes. Using premium hyaluronic acid fillers, we can 
                effectively reverse the effects of aging, heavy earrings, and natural volume loss.
              </p>
            </motion.div>


            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6 text-purple-300">Why Do Earlobes Age?</h3>
                <p className="text-gray-300 mb-6">
                  Earlobes are particularly susceptible to aging due to their delicate structure and constant 
                  exposure to gravity. Understanding the causes helps us provide the most effective treatments.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-black rounded-lg p-6 border border-gray-800">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                      <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
                    </div>
                    <h4 className="font-semibold text-white mb-2">Natural Aging</h4>
                    <p className="text-gray-300 text-sm">Loss of collagen and elasticity over time</p>
                  </div>
                  <div className="bg-black rounded-lg p-6 border border-gray-800">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                      <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
                    </div>
                    <h4 className="font-semibold text-white mb-2">Heavy Earrings</h4>
                    <p className="text-gray-300 text-sm">Weight causes stretching and volume loss</p>
                  </div>
                  <div className="bg-black rounded-lg p-6 border border-gray-800">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                      <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
                    </div>
                    <h4 className="font-semibold text-white mb-2">Gravity Effects</h4>
                    <p className="text-gray-300 text-sm">Constant downward pull on delicate skin</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits & Aftercare Section */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold mb-8 text-white">Benefits of Ear Lobe Rejuvenation</h3>
                <p className="text-gray-300 mb-8">
                  Experience the transformative benefits of professional ear lobe rejuvenation at Cosmedocs.
                </p>
                
                <div className="grid grid-cols-1 gap-6">
                  {[
                    "Restores Natural Volume",
                    "Improves Earlobe Shape", 
                    "Reduces Visible Aging",
                    "Enhances Earring Support",
                    "Natural-Looking Results",
                    "Long-Lasting Effects"
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-black rounded-lg p-4 border border-gray-800 flex items-center space-x-4"
                    >
                      <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                      </div>
                      <h4 className="text-white font-semibold">{benefit}</h4>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Aftercare */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold mb-8 text-white">Aftercare Instructions</h3>
                <p className="text-gray-300 mb-8">
                  Follow these essential aftercare guidelines to ensure optimal results and minimize any potential side effects.
                </p>
                
                <div className="space-y-6">
                  <div className="bg-black rounded-lg p-6 border border-gray-800">
                    <h4 className="text-xl font-semibold text-white mb-4">Immediate Aftercare (24-48 hours)</h4>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">Keep earlobes clean and dry</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">Avoid wearing earrings for 24 hours</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">Apply ice if swelling occurs</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">Avoid touching or massaging the area</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black rounded-lg p-6 border border-gray-800">
                    <h4 className="text-xl font-semibold text-white mb-4">First Week</h4>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">Choose lightweight earrings when you resume wearing them</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">Avoid sleeping on your sides</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">Avoid excessive heat and sun exposure</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">Contact clinic if you notice unusual symptoms</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Before & After Gallery of Ear Lobe Fillers */}
        <section className="py-16 bg-black">
          <div className="page-container max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Ear Lobe Fillers Procedure</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Watch actual ear lobe rejuvenation treatment results from our Harley Street clinic.
              </p>
            </motion.div>

            <motion.div 
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }} 
              viewport={{ once: true }}
            >
              <Card className="bg-black border-purple-500">
                <CardContent className="p-6">
                  <div className="instagram-embed-wrapper" style={{ display: 'flex', justifyContent: 'center' }}>
                    <blockquote 
                      className="instagram-media" 
                      data-instgrm-captioned 
                      data-instgrm-permalink="https://www.instagram.com/reel/DBeV9VsNp4e/?utm_source=ig_embed&utm_campaign=loading" 
                      data-instgrm-version="14" 
                      style={{ 
                        background: '#FFF', 
                        border: 0, 
                        borderRadius: '3px', 
                        boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', 
                        margin: '1px', 
                        maxWidth: '540px', 
                        minWidth: '326px', 
                        padding: 0, 
                        width: '99.375%' 
                      }}
                    >
                      <div style={{ padding: '16px' }}>
                        <a 
                          href="https://www.instagram.com/reel/DBeV9VsNp4e/?utm_source=ig_embed&utm_campaign=loading" 
                          style={{ 
                            background: '#FFFFFF', 
                            lineHeight: 0, 
                            padding: '0 0', 
                            textAlign: 'center', 
                            textDecoration: 'none', 
                            width: '100%' 
                          }} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: '40px', marginRight: '14px', width: '40px' }}></div>
                            <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                              <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', marginBottom: '6px', width: '100px' }}></div>
                              <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', width: '60px' }}></div>
                            </div>
                          </div>
                          <div style={{ padding: '19% 0' }}></div>
                          <div style={{ display: 'block', height: '50px', margin: '0 auto 12px', width: '50px' }}>
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
                            <div style={{ color: '#3897f0', fontFamily: 'Arial,sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 550, lineHeight: '18px' }}>
                              View this post on Instagram
                            </div>
                          </div>
                          <div style={{ padding: '12.5% 0' }}></div>
                          <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '14px', alignItems: 'center' }}>
                            <div>
                              <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', height: '12.5px', width: '12.5px', transform: 'translateX(0px) translateY(7px)' }}></div>
                              <div style={{ backgroundColor: '#F4F4F4', height: '12.5px', transform: 'rotate(-45deg) translateX(3px) translateY(1px)', width: '12.5px', flexGrow: 0, marginRight: '14px', marginLeft: '2px' }}></div>
                              <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', height: '12.5px', width: '12.5px', transform: 'translateX(9px) translateY(-18px)' }}></div>
                            </div>
                            <div style={{ marginLeft: '8px' }}>
                              <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: '20px', width: '20px' }}></div>
                              <div style={{ width: 0, height: 0, borderTop: '2px solid transparent', borderLeft: '6px solid #f4f4f4', borderBottom: '2px solid transparent', transform: 'translateX(16px) translateY(-4px) rotate(30deg)' }}></div>
                            </div>
                            <div style={{ marginLeft: 'auto' }}>
                              <div style={{ width: '0px', borderTop: '8px solid #F4F4F4', borderRight: '8px solid transparent', transform: 'translateY(16px)' }}></div>
                              <div style={{ backgroundColor: '#F4F4F4', flexGrow: 0, height: '12px', width: '16px', transform: 'translateY(-4px)' }}></div>
                              <div style={{ width: 0, height: 0, borderTop: '8px solid #F4F4F4', borderLeft: '8px solid transparent', transform: 'translateY(-4px) translateX(8px)' }}></div>
                            </div>
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center', marginBottom: '24px' }}>
                            <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', marginBottom: '6px', width: '224px' }}></div>
                            <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', width: '144px' }}></div>
                          </div>
                        </a>
                        <p style={{ color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: '14px', lineHeight: '17px', marginBottom: 0, marginTop: '8px', overflow: 'hidden', padding: '8px 0 7px', textAlign: 'center', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                          <a href="https://www.instagram.com/reel/DBeV9VsNp4e/?utm_source=ig_embed&utm_campaign=loading" style={{ color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 'normal', lineHeight: '17px', textDecoration: 'none' }} target="_blank">
                            A post shared by CosmedocsFace (@cosmedocsface)
                          </a>
                        </p>
                      </div>
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing-section" className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Ear Lobe Rejuvenation Pricing London</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Transparent pricing for premium ear lobe enhancement treatments. All prices include consultation, 
                treatment, and aftercare support from our expert medical team.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-purple-500 h-full text-center">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Single Ear Lobe</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£500</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Perfect for targeted treatment of one ear lobe</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Consultation included</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Premium hyaluronic acid</span>
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
                    <CardTitle className="text-white text-2xl">Both Ear Lobes</CardTitle>
                    <div className="text-white text-4xl font-bold">£750</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-purple-100">Comprehensive treatment for both ear lobes</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Comprehensive consultation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Premium hyaluronic acid</span>
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
                <Card className="bg-black border-gray-700 h-full text-center">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Consultation Only</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£50</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Professional assessment and treatment planning</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Full ear lobe assessment</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Treatment recommendations</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Deducted from treatment cost</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <p className="text-gray-300 mb-6">
                *Consultation fee is deducted from treatment cost if you proceed on the same day
              </p>
              <Button 
                className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 text-lg font-semibold"
                onClick={() => window.open(bookingUrl, '_blank')}
              >
                Book Your Consultation
              </Button>
            </motion.div>
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
                <h3 className="text-lg font-semibold text-white mb-2">Training</h3>
                <p className="text-gray-300">
                  <a 
                    href="https://www.harleystreetinstitute.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-300 hover:text-purple-200 underline"
                  >
                    Harley Street Institute
                  </a> trainers
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
                <p className="text-gray-300">Premium FDA-approved dermal fillers only</p>
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



        {/* FAQ Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Get answers to common questions about ear lobe rejuvenation treatments at our London clinic.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {[...leftColumnFaqs, ...rightColumnFaqs].map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-black rounded-lg border-gray-800">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-900 rounded-lg">
                      <span className="text-white font-medium">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-300">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="page-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-12"
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Rejuvenate Your Ear Lobes?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert cosmetic doctors and discover how ear lobe rejuvenation 
                can restore youthful volume and firmness to your ear lobes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6"
                  onClick={() => window.open(bookingUrl, '_blank')}
                >
                  Book Free Consultation
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6">
                  Call 0333 0551 503
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="hidden">
          <h2>Ear Lobe Rejuvenation Treatment London</h2>
          <p>
            Ear lobe rejuvenation has become increasingly popular as people seek non-surgical solutions for aging earlobes. 
            At Cosmedocs, our expert practitioners specialize in restoring youthful volume to drooping, thinning ear lobes 
            using advanced dermal filler techniques. The aging process affects every part of our body, including our ear lobes, 
            which can lose volume, elasticity, and firmness over time.
          </p>
          <p>
            Common causes of ear lobe aging include natural collagen loss, gravity, genetics, and prolonged wearing of heavy 
            earrings. Many patients notice their ear lobes becoming thinner, more wrinkled, and elongated as they age. 
            This can affect their confidence when wearing earrings or styling their hair in ways that expose their ears.
          </p>
          <p>
            Our ear lobe rejuvenation treatment uses premium hyaluronic acid fillers to restore volume, stimulate collagen 
            production, and improve skin texture. The treatment is minimally invasive, requiring only topical anesthesia, 
            and can be completed in under 30 minutes. Results are immediate and continue to improve over the following weeks 
            as new collagen forms.
          </p>
          <p>
            Our expert practitioners' expertise in facial anatomy ensures safe, natural-looking results that complement your overall 
            facial aesthetics. The treatment can be combined with other rejuvenation procedures for comprehensive facial 
            enhancement. Our Cosmedocs Harley Street clinic provides a comfortable, professional environment for all aesthetic treatments.
          </p>
          <p>
            Aftercare is minimal, with patients able to return to normal activities immediately. We recommend avoiding 
            heavy earrings for the first few weeks to ensure optimal healing and results. Follow-up appointments allow 
            us to monitor your progress and ensure you're completely satisfied with your rejuvenated ear lobes.
          </p>
        </div>
      </div>
    </>
  );
};

export default EarLobeRejuvenation;