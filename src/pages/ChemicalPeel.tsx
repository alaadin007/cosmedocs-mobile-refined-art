import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Star, Clock, Users, Calendar, Shield, Activity, Award, GraduationCap, CheckCircle, Heart, Home, ChevronRight as BreadcrumbChevron } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import TreatmentVideoPlayer from "@/components/TreatmentVideoPlayer";
import { useVideoManagement } from "@/hooks/useVideoManagement";
import { useState } from "react";

const ChemicalPeel = () => {
  const {
    videos,
    getVideosByTreatment
  } = useVideoManagement();
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const seoData = generateSEOMetadata("Chemical Peel London | From £120 | Cosmedocs", "Professional chemical peels London for hyperpigmentation, acne scars & melasma. TCA, glycolic & salicylic acid peels. Before & after results.", "/chemical-peel");

  // Get Chemical Peel specific videos
  const chemicalPeelVideos = getVideosByTreatment('Chemical Peel');
  const bookingUrl = "https://med.as.me/harleystreet";

  // Before/after images for Chemical Peel
  const beforeAfterImages = [{
    src: "/lovable-uploads/3184a1ab-13a8-4518-9753-e9ad278346e6.png",
    alt: "Chemical peel before and after skin improvement London Cosmedocs",
    caption: "Dramatic improvement in skin texture and overall complexion after chemical peel treatment"
  }, {
    src: "/lovable-uploads/d947c958-7a72-47b1-8681-d32aae21773c.png",
    alt: "Chemical peel skin rejuvenation results London Harley Street",
    caption: "Significant enhancement in skin clarity and smoothness with improved overall appearance"
  }, {
    src: "/lovable-uploads/5f980404-9482-4c99-aa46-8001ce1495c8.png",
    alt: "Chemical peel eye area treatment London Cosmedocs",
    caption: "Remarkable improvement in eye area skin texture and reduction of signs of aging"
  }, {
    src: "/lovable-uploads/5dfb6e21-7126-47d6-850b-d01c94e0988a.png",
    alt: "Chemical peel profile view results London treatment",
    caption: "Visible enhancement in skin quality and texture from profile view after treatment"
  }];

  const treatmentSteps = [{
    step: "01",
    title: "Skin Assessment",
    description: "Thorough consultation to determine the best peel type and strength for your skin concerns."
  }, {
    step: "02", 
    title: "Pre-Treatment",
    description: "Gentle cleansing and preparation of the skin to ensure optimal peel penetration."
  }, {
    step: "03",
    title: "Acid Application",
    description: "Careful application of chemical solution to target areas, monitored for optimal timing."
  }, {
    step: "04",
    title: "Neutralization",
    description: "Safe neutralization of acids followed by soothing treatments to calm the skin."
  }, {
    step: "05",
    title: "Aftercare Plan",
    description: "Comprehensive aftercare instructions and products to maximize results and healing."
  }];

  const benefits = [{
    title: "Reduces Acne & Breakouts",
    description: "Unclogs pores and reduces bacteria that cause acne while preventing future breakouts through deep exfoliation."
  }, {
    title: "Brightens & Evens Skin Tone",
    description: "Removes damaged surface layers to reveal brighter, more even-toned skin beneath, reducing hyperpigmentation."
  }, {
    title: "Smooths Fine Lines & Wrinkles",
    description: "Stimulates collagen production and removes damaged skin cells to reduce visible signs of aging."
  }, {
    title: "Improves Skin Texture",
    description: "Removes rough, damaged skin cells to reveal smoother, softer skin with improved overall texture."
  }, {
    title: "Minimizes Pore Appearance",
    description: "Deep exfoliation helps unclog and minimize the appearance of enlarged pores for refined skin."
  }, {
    title: "Treats Sun Damage",
    description: "Effectively addresses sun spots, age spots, and photodamage by removing damaged pigmented cells."
  }, {
    title: "Stimulates Cell Renewal",
    description: "Accelerates natural skin cell turnover for fresher, younger-looking skin and improved healing."
  }];

  const faqs = [
    {
      question: "How much does a chemical face peel cost?",
      answer: "Chemical peel cost UK varies by depth: light chemical face peels start from £120, medium peels £170, and deep chemical peels £200 at our London clinic. Chemical peel price includes consultation, treatment, and post chemical peel care. For multiple sessions or combination treatments, we offer package pricing with better value."
    },
    {
      question: "Are chemical face peels safe?",
      answer: "Yes, chemical peels for face are safe when performed by qualified practitioners. At Cosmedocs, our experienced skin experts use tested formulations suitable for all skin types. We follow strict safety protocols before, during, and after peel care to ensure optimal results and minimal risks."
    },
    {
      question: "What does a chemical face peel do?",
      answer: "A chemical face peel uses controlled acids to remove damaged skin layers, revealing healthier, smoother skin beneath. Chemical peels for face treat acne, acne scarring, hyperpigmentation, melasma, fine lines, and sun damage. The peeling after chemical peel reveals fresher skin with improved texture and tone."
    },
    {
      question: "How often can I have a chemical peel on face?",
      answer: "Depending on the type of peel, chemical peels for face can be done monthly. Light chemical face peels can be repeated every 3-4 weeks, medium peels every 6-8 weeks, and deep chemical peels require 6-12 months between treatments. Our dermatologists will advise the best schedule for your skin type and concerns."
    },
    {
      question: "What should I expect after a chemical peel?",
      answer: "Post chemical peel care is crucial. After treatment, expect mild redness and peeling after chemical peel which is normal skin regeneration. After peel care includes gentle cleansing, healing ointments, and sun protection. Recovery varies: 3-5 days for light peels, 7-10 days for medium peels, up to 2 weeks for deep chemical peels."
    },
    {
      question: "Which chemical peel is best for acne and acne scarring?",
      answer: "Salicylic acid peel is excellent for active acne as it unclogs pores and reduces blemishes. For peel for acne scarring, TCA peel and Jessner's peel are highly effective. Our signature chemical peels for face address both acne and scarring, with visible improvement in skin texture."
    },
    {
      question: "Can I wear makeup after a chemical peel?",
      answer: "Wait at least 24 hours before applying makeup after a light chemical face peel. For medium to deep peels, avoid makeup for longer periods to prevent infection and allow proper healing. Our after peel care instructions provide specific guidance based on your treatment type."
    },
    {
      question: "What skin concerns do chemical peels treat?",
      answer: "Chemical peels for face effectively treat aging skin, sun damage, acne, peel for acne scarring, enlarged pores, rough texture, dull complexion, uneven skin tone, chemical peel for melasma, and chemical peel for hyperpigmentation. We also offer skin peel for hands and other body areas."
    }
  ];


  // Review Schema
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Chemical Peel Treatment",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "187",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "name": "Cosmedocs - Chemical Peel London",
        "description": "Professional chemical peel treatments in London's Harley Street for skin resurfacing and rejuvenation",
        "url": "https://cosmedocs.com/chemical-peel",
        "telephone": "+44 20 3733 3227",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "10 Harley Street",
          "addressLocality": "London",
          "addressRegion": "Greater London",
          "postalCode": "W1G 9PF",
          "addressCountry": "GB"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 51.5074,
          "longitude": -0.1278
        },
        "priceRange": "£120-£200"
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "VideoObject",
        "name": "Chemical Peel Treatment Process",
        "description": "Watch the professional chemical peel treatment process at Cosmedocs London",
        "thumbnailUrl": "https://www.cosmedocs.co.uk/placeholder.svg",
        "uploadDate": "2024-01-15",
        "contentUrl": "https://www.cosmedocs.co.uk/videos/chemical-peel",
        "duration": "PT2M"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.cosmedocs.co.uk"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Treatments",
            "item": "https://www.cosmedocs.co.uk/treatments"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Chemical Peel",
            "item": "https://www.cosmedocs.co.uk/chemical-peel"
          }
        ]
      },
      {
        "@type": "Offer",
        "name": "Chemical Peel Treatment",
        "price": "120",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/InStock",
        "url": "https://www.cosmedocs.co.uk/chemical-peel",
        "priceValidUntil": "2025-12-31"
      }
    ]
  };

  return (
    <>
      <Helmet htmlAttributes={{ lang: "en-GB" }}>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <link rel="canonical" href={seoData.canonical} />
        
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.image} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:locale" content="en_GB" />
        <meta property="article:published_time" content="2024-01-15T09:00:00Z" />
        <meta property="article:modified_time" content="2025-01-20T14:30:00Z" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
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
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(reviewSchema)}
        </script>
        
        {/* Performance optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Helmet>

      <div className="bg-black text-white">
        {/* Breadcrumb Navigation */}
        <nav className="bg-gray-900/50 border-b border-gray-800" aria-label="Breadcrumb">
          <div className="page-container py-3">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <Home className="w-4 h-4" />
                  <span className="sr-only">Home</span>
                </Link>
              </li>
              <li className="flex items-center">
                <BreadcrumbChevron className="w-4 h-4 text-gray-600 mx-2" />
                <Link to="/treatments" className="text-gray-400 hover:text-white transition-colors">
                  Treatments
                </Link>
              </li>
              <li className="flex items-center">
                <BreadcrumbChevron className="w-4 h-4 text-gray-600 mx-2" />
                <span className="text-purple-300 font-medium">Chemical Peel</span>
              </li>
            </ol>
          </div>
        </nav>
        {/* Hero Section */}
        <header>
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
                  <span className="text-purple-300">Chemical Peel London</span>
                  <span className="block text-sm mt-4">Invisible art - transformative chemical face peel that speaks without words</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Expert Face Chemical Peel</p>
                  <p className="text-sm text-gray-300">Professional chemical peels for hyperpigmentation, acne scarring & skin rejuvenation</p>
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
        </header>

        <main>
        {/* Summary of Treatment */}
        <section className="py-16 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-8 text-white">Chemical Peel Treatment</h2>
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
                <p className="text-gray-300">Monthly treatments recommended</p>
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
                <p className="text-gray-300">3-14 days depending on peel depth</p>
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
                <h3 className="text-lg font-semibold text-white mb-2">Peel Types</h3>
                <p className="text-gray-300">Light, medium & deep peels available</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Before & After Gallery */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Before and After Chemical Peel Results</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See real results from our chemical peel treatments at Cosmedocs London. 
                Professional skin resurfacing delivers dramatic improvement in skin texture, clarity, and overall appearance.
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
                        width="800"
                        height="600"
                        loading="lazy"
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

          </div>
        </section>

        {/* What is Chemical Peel & Who Is Chemical Peel For */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">What is a Chemical Face Peel?</h2>
              
              <div className="space-y-6 text-gray-300 text-lg mb-12">
                <p>
                  A chemical peel on face is a professional skin resurfacing treatment that uses controlled acids to remove 
                  damaged layers of skin, revealing healthier, smoother skin underneath. Chemical peels for face range 
                  from light surface peels to deep chemical peel procedures, each designed to address specific concerns.
                </p>
                <p>
                  During a face chemical peel, a chemical solution is applied to the skin, causing it to exfoliate and 
                  eventually peel off. The new skin is typically smoother, less wrinkled, and more even in tone. According to{' '}
                  <a 
                    href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3663177/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-300 hover:text-purple-200 underline"
                  >
                    research published in the Journal of Clinical and Aesthetic Dermatology
                  </a>, chemical peels for face are highly effective for treating photoaging, peel for acne scarring, and pigmentary disorders. Another{' '}
                  <a 
                    href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5574745/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-300 hover:text-purple-200 underline"
                  >
                    study in the Indian Journal of Dermatology
                  </a>{' '}confirms the safety and efficacy of chemical peel for melasma and chemical peel for hyperpigmentation.
                </p>
              </div>

              {/* Types of Peels Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-purple-600/10 backdrop-blur-sm border-2 border-purple-400/40 rounded-xl p-8"
              >
                <h3 className="text-3xl font-bold text-purple-300 mb-6 text-center">Types of Chemical Peels for Face</h3>
                <p className="text-gray-300 text-center mb-8 text-lg">
                  We offer various types of chemical peels London to address different skin concerns and depths
                </p>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-purple-600/30 backdrop-blur-sm border border-purple-400/40 rounded-lg p-4 text-center hover:bg-purple-600/40 transition-all duration-300">
                    <h4 className="text-lg font-semibold text-purple-200">Light Chemical Face Peels</h4>
                    <p className="text-sm text-gray-300 mt-2">Glycolic Peel London & Lactic Acid</p>
                  </div>
                  
                  <div className="bg-purple-600/30 backdrop-blur-sm border border-purple-400/40 rounded-lg p-4 text-center hover:bg-purple-600/40 transition-all duration-300">
                    <h4 className="text-lg font-semibold text-purple-200">Medium Peels</h4>
                    <p className="text-sm text-gray-300 mt-2">TCA Peel & TCA Face Peel</p>
                  </div>
                  
                  <div className="bg-purple-600/30 backdrop-blur-sm border border-purple-400/40 rounded-lg p-4 text-center hover:bg-purple-600/40 transition-all duration-300">
                    <h4 className="text-lg font-semibold text-purple-200">Deep Chemical Peel</h4>
                    <p className="text-sm text-gray-300 mt-2">Phenol Peels</p>
                  </div>
                  
                  <div className="bg-purple-600/30 backdrop-blur-sm border border-purple-400/40 rounded-lg p-4 text-center hover:bg-purple-600/40 transition-all duration-300">
                    <h4 className="text-lg font-semibold text-purple-200">Salicylic Acid Peel</h4>
                    <p className="text-sm text-gray-300 mt-2">BHA for Acne Skin & Peel for Acne Scarring</p>
                  </div>
                  
                  <div className="bg-purple-600/30 backdrop-blur-sm border border-purple-400/40 rounded-lg p-4 text-center hover:bg-purple-600/40 transition-all duration-300">
                    <h4 className="text-lg font-semibold text-purple-200">Mandelic Acid</h4>
                    <p className="text-sm text-gray-300 mt-2">Gentle for Sensitive Skin</p>
                  </div>

                  <div className="bg-purple-600/30 backdrop-blur-sm border border-purple-400/40 rounded-lg p-4 text-center hover:bg-purple-600/40 transition-all duration-300">
                    <h4 className="text-lg font-semibold text-purple-200">Combination Peels</h4>
                    <p className="text-sm text-gray-300 mt-2">Customized Solutions</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Chemical Peel Benefits - Professional Skin Resurfacing */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">
                Benefits of Chemical Peel for Face
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Chemical peels for face use controlled acids to precisely remove damaged skin layers, stimulating natural 
                cell renewal and revealing healthier, younger-looking skin with improved texture and tone. According to{' '}
                <a 
                  href="https://www.aad.org/public/cosmetic/younger-looking/chemical-peels-faqs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-300 hover:text-purple-200 underline"
                >
                  the American Academy of Dermatology
                </a>, chemical peels can effectively improve the appearance of aging skin, acne scars, and uneven skin tone.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:from-purple-600/20 hover:to-blue-600/20 hover:border-purple-300/30 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-200 transition-colors duration-300">{benefit.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Chemical Peel Steps */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">The Chemical Peel Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our 5-step chemical peel treatment delivers comprehensive skin rejuvenation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {treatmentSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-lg font-bold">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Chemical Peel Aftercare & Results Timeline */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Aftercare */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Post Chemical Peel Care & Aftercare</h2>
                <p className="text-gray-300 mb-6">
                  Follow these essential after peel care guidelines to ensure optimal healing and maximize your chemical face peel results:
                </p>

                <div className="space-y-4">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">First 24-48 Hours</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Avoid direct sun exposure completely</li>
                      <li>• No makeup or skincare products</li>
                      <li>• Gentle cleansing with cool water only</li>
                      <li>• Apply recommended healing ointment</li>
                    </ul>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">First 1-2 Weeks</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Daily SPF 50+ sunscreen application</li>
                      <li>• Avoid picking or peeling skin</li>
                      <li>• Use gentle, fragrance-free moisturizer</li>
                      <li>• No active ingredients or exfoliants</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Results Timeline */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Results Timeline</h2>
                <p className="text-gray-300 mb-6">
                  Understanding the healing process and when to expect visible improvements. Research published in{' '}
                  <a 
                    href="https://www.sciencedirect.com/science/article/abs/pii/S0738081X17301013" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-300 hover:text-purple-200 underline"
                  >
                    Clinics in Dermatology
                  </a>{' '}demonstrates that proper post-peel care significantly enhances outcomes and minimizes complications.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">3-5 Days</h3>
                      <p className="text-gray-300 text-sm">Peeling begins, revealing fresh new skin underneath</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">7</span>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">One Week</h3>
                      <p className="text-gray-300 text-sm">Improved skin texture and brightness become visible</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">30</span>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">One Month</h3>
                      <p className="text-gray-300 text-sm">Full results visible with optimal skin renewal</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Combination Treatments */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6">Combination Treatments</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enhance your face chemical peel results with complementary treatments for comprehensive skin rejuvenation. Our <Link to="/microneedling" className="text-purple-300 hover:text-purple-200 underline">microneedling</Link>, <Link to="/profhilo" className="text-purple-300 hover:text-purple-200 underline">Profhilo</Link>, and <Link to="/dermal-fillers" className="text-purple-300 hover:text-purple-200 underline">dermal filler</Link> treatments work synergistically with chemical peels London.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-4">Chemical Peel + Microneedling</h3>
                <p className="text-gray-300 mb-4">
                  Combine peels with <Link to="/microneedling" className="text-purple-300 hover:text-purple-200 underline">microneedling</Link> for enhanced collagen production and deeper skin renewal.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-purple-300 mr-2" />Enhanced collagen stimulation</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-purple-300 mr-2" />Improved scar reduction</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-purple-300 mr-2" />Deeper skin rejuvenation</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-4">Chemical Peel + HydraFacial</h3>
                <p className="text-gray-300 mb-4">
                  Follow peels with <Link to="/hydrafacial" className="text-purple-300 hover:text-purple-200 underline">HydraFacial</Link> for gentle hydration and nourishment during the healing process.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-purple-300 mr-2" />Optimal skin hydration</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-purple-300 mr-2" />Enhanced healing process</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-purple-300 mr-2" />Improved overall results</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-4">Chemical Peel + LED Therapy</h3>
                <p className="text-gray-300 mb-4">
                  <Link to="/led-light-therapy" className="text-purple-300 hover:text-purple-200 underline">LED light therapy</Link> accelerates healing and reduces inflammation after chemical peel treatments.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-purple-300 mr-2" />Faster healing process</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-purple-300 mr-2" />Reduced inflammation</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-purple-300 mr-2" />Enhanced skin repair</li>
                </ul>
              </motion.div>
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
              <h2 className="text-3xl font-bold mb-4 text-white">Chemical Peel Pricing London</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Transparent chemical peel price UK for professional face chemical peel treatments. How much is a chemical face peel? All prices include consultation, 
                treatment, and post chemical peel care support from our expert medical team.
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
                    <CardTitle className="text-white text-2xl">Light Chemical Face Peels</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£120</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Perfect for sensitive skin and first-time chemical peel on face</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Consultation included</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Glycolic peel London or lactic acid</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Minimal downtime</span>
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
                    <CardTitle className="text-white text-2xl">Medium Chemical Peels</CardTitle>
                    <div className="text-white text-4xl font-bold">£170</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-purple-100">Ideal for chemical peel for hyperpigmentation and visible results</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Comprehensive consultation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">TCA peel or TCA face peel</span>
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
                    <CardTitle className="text-white text-2xl">Deep Chemical Peel</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£200</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Advanced treatment for chemical peel for melasma & significant rejuvenation</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Full medical assessment</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Phenol or high-strength TCA</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Comprehensive aftercare plan</span>
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
                *All chemical face peel treatments include consultation, personalised assessment, and after peel care. Looking for "chemical face peel near me"? Visit our central London clinic.
              </p>
              <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 text-lg font-semibold">
                Book Your Consultation
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Cosmedocs */}
        <section className="py-20 bg-accent">
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
                  </a> trainers with <Link to="/botox" className="text-purple-300 hover:text-purple-200 underline">Botox</Link> expertise
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
                <p className="text-gray-300">Premium medical-grade peel formulations</p>
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
                <p className="text-gray-300">"Invisible art" for natural results</p>
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

        {/* Client Testimonials Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Client Testimonials</h2>
              <div className="flex items-center justify-center gap-2 mb-8">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-6 h-6 fill-purple-300 text-purple-300" />
                  ))}
                </div>
                <span className="text-gray-300 text-lg">4.9 out of 5 (187 reviews)</span>
              </div>
              <p className="text-gray-300 max-w-2xl mx-auto mb-6">
                Read what our clients say about their chemical face peel experience at Cosmedocs Harley Street.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-accent/50 rounded-xl p-6 border border-purple-300/20"
              >
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-purple-300 text-purple-300" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "Amazing results from my chemical peel for hyperpigmentation! The TCA face peel dramatically improved my skin tone and texture. The team explained everything about post chemical peel care, and the healing process was smooth."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-300 rounded-full flex items-center justify-center text-black font-bold">
                    E
                  </div>
                  <div>
                    <p className="text-white font-semibold">Emma L.</p>
                    <p className="text-gray-400 text-sm">Verified Client</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-accent/50 rounded-xl p-6 border border-purple-300/20"
              >
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-purple-300 text-purple-300" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "Best chemical peel London! Had a salicylic acid peel for my acne scarring and couldn't be happier. The chemical face peel before and after difference is incredible. Worth every penny of the chemical peel price!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-300 rounded-full flex items-center justify-center text-black font-bold">
                    J
                  </div>
                  <div>
                    <p className="text-white font-semibold">James P.</p>
                    <p className="text-gray-400 text-sm">Verified Client</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-accent/50 rounded-xl p-6 border border-purple-300/20"
              >
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-purple-300 text-purple-300" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "Searched for chemical face peel near me and found Cosmedocs. The deep chemical peel transformed my melasma. Professional after peel care guidance made recovery easy. Highly recommend their chemical peels for face!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-300 rounded-full flex items-center justify-center text-black font-bold">
                    A
                  </div>
                  <div>
                    <p className="text-white font-semibold">Amara S.</p>
                    <p className="text-gray-400 text-sm">Verified Client</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="text-center">
              <Link to="/testimonials">
                <Button 
                  className="bg-purple-600 text-white hover:bg-purple-700 rounded-full px-8 py-6 text-lg font-semibold"
                >
                  Read More Client Reviews
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-black">
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
                Get answers to common questions about chemical peel treatments at our London clinic.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-white/5 rounded-lg border-gray-800">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-white/10 rounded-lg">
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

        {/* Call to Action */}
        <section className="py-20 bg-accent">
          <div className="page-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-12"
            >
              <h2 className="text-3xl font-bold mb-4">Ready for Transformative Chemical Face Peel?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert cosmetic doctors and discover how chemical peels for face 
                can reveal smoother, brighter, more youthful-looking skin. Experience the best chemical peels London has to offer.
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
        </main>

        {/* SEO Hidden Content - Crawlable but not visible */}
        <div className="sr-only">
          <article>
            <h2>Comprehensive Guide to Chemical Peel Treatments in London</h2>
            
            <section>
              <h3>Understanding Chemical Face Peel Science and Benefits</h3>
              <p>
                Chemical peels for face represent one of the most effective non-invasive dermatological treatments for skin rejuvenation, 
                offering transformative results for patients seeking to address various skin concerns. At Cosmedocs in London's 
                prestigious Harley Street, our medical professionals specialise in advanced chemical peel treatments including glycolic peel London, 
                TCA peel, salicylic acid peel, and deep chemical peel procedures that harness the power of controlled exfoliation to reveal 
                healthier, more youthful-looking skin.
              </p>
              <p>
                The science behind chemical peel on face involves the application of carefully selected acids that penetrate the skin's 
                surface layers, triggering controlled desquamation and stimulating the natural healing response. This process 
                encourages increased collagen production, cellular turnover, and the removal of damaged epidermal cells, resulting 
                in improved skin texture, tone, and overall appearance. What does a chemical face peel do? Our clinic offers various peel strengths 
                and formulations, including glycolic acid peels, salicylic acid peels for acne, TCA face peel for deeper penetration, and combination peels, 
                each tailored to specific skin types and concerns. How much is a chemical face peel? Chemical peel cost UK ranges from £120-£200 depending on depth and formulation.
              </p>
            </section>

            <section>
              <h3>Chemical Face Peel for Acne and Peel for Acne Scarring</h3>
              <p>
                Acne and post-inflammatory hyperpigmentation affect millions of individuals, significantly impacting quality of life 
                and self-confidence. Chemical peels for face offer remarkable benefits for acne-prone skin by unclogging pores, reducing 
                sebum production, and eliminating acne-causing bacteria. Salicylic acid peel is particularly effective for active 
                acne, as this beta-hydroxy acid penetrates oil-filled pores to dissolve debris and reduce inflammation. Are chemical face peels safe? 
                Yes, when administered by qualified medical professionals using appropriate protocols.
              </p>
              <p>
                For peel for acne scarring and post-inflammatory hyperpigmentation, medium-depth peels such as TCA peel or combination peels 
                provide superior results. These chemical peels London treatments work at deeper dermal levels to remodel scar tissue, stimulate collagen 
                synthesis, and promote the growth of new, healthy skin cells. Chemical face peel before and after results demonstrate remarkable 
                improvement in skin texture and scarring. Our experienced practitioners assess each patient's unique scarring pattern and skin type 
                to recommend the most appropriate face chemical peel protocol, often combining treatments with other modalities for optimal outcomes. 
                The peeling after chemical peel is a natural part of the healing process.
              </p>
            </section>

            <section>
              <h3>Anti-Ageing Benefits and Chemical Peel Face Rejuvenation</h3>
              <p>
                The visible signs of ageing—fine lines, wrinkles, age spots, and loss of skin elasticity—can be significantly 
                improved with regular chemical peel for face treatments. Glycolic peel London and lactic acid peels are alpha-hydroxy acids that 
                excel at addressing photoaging, sun damage, and superficial wrinkles. These chemical peels for face work by breaking down the bonds 
                between dead skin cells, revealing the fresher, more vibrant skin beneath whilst simultaneously stimulating fibroblast activity 
                for enhanced collagen and elastin production. Chemical peel price reflects the quality of medical-grade formulations used.
              </p>
              <p>
                For more advanced signs of ageing, deep chemical peel such as phenol or high-concentration TCA face peel can provide 
                dramatic rejuvenation. These treatments penetrate to the reticular dermis, effectively reducing moderate to severe 
                wrinkles, improving skin laxity, and correcting significant pigmentation irregularities. Patients searching for "chemical face peel near me" 
                typically observe progressive improvement over several months as new collagen continues to form, with results lasting several years 
                when combined with proper after peel care and sun protection. Our chemical peels London clinic provides comprehensive post chemical peel care guidance.
              </p>
            </section>

            <section>
              <h3>Chemical Peel for Hyperpigmentation and Chemical Peel for Melasma</h3>
              <p>
                Hyperpigmentation disorders, including melasma, sun spots, and post-inflammatory hyperpigmentation, present unique 
                challenges in dermatological practice. Chemical peel for hyperpigmentation offers effective solutions by targeting excess melanin deposits 
                within the epidermis and superficial dermis. Modified Jessner's peels and combination peels containing kojic acid, 
                arbutin, or vitamin C are particularly beneficial for these conditions, working to inhibit melanin production whilst 
                removing pigmented cells. How much does a chemical face peel cost for pigmentation treatment? Chemical peel cost UK varies by condition severity.
              </p>
              <p>
                Treatment of chemical peel for melasma requires a carefully planned approach, as this condition is notoriously resistant and prone to 
                recurrence. Our protocols typically involve a series of gentle to medium-depth chemical peels for face combined with strict sun 
                protection and medical-grade skincare containing tyrosinase inhibitors. This comprehensive strategy addresses both 
                existing pigmentation and prevents new melanin formation, achieving more uniform skin tone and sustained improvement. 
                The chemical peel face treatment combined with proper after peel care delivers exceptional results for melasma sufferers.
              </p>
            </section>

            <section>
              <h3>Safety, Recovery, and Chemical Face Peel Before and After Results</h3>
              <p>
                Patient safety remains paramount in all our face chemical peel treatments. Prior to any procedure, comprehensive skin 
                analysis and medical history review ensure appropriate treatment selection and minimise potential complications. 
                Our practitioners are extensively trained in recognising contraindications and managing all skin types, including 
                darker skin tones that require specialised protocols to prevent post-inflammatory hyperpigmentation. Are chemical face peels safe? 
                Absolutely, when performed by experienced medical professionals with proper training in chemical peels for face.
              </p>
              <p>
                Recovery varies depending on peel depth. Light chemical face peels typically involve minimal downtime with mild redness and 
                flaking for 3-5 days, allowing immediate return to daily activities with proper sun protection. Medium-depth TCA peel 
                requires 7-10 days of healing, during which the skin undergoes controlled peeling after chemical peel and regeneration. Deep chemical peel 
                necessitates 2-3 weeks recovery but delivers the most dramatic transformation. Comprehensive post chemical peel care instructions, 
                including gentle cleansing protocols, healing ointments, and broad-spectrum sun protection, ensure optimal healing 
                and results. Most patients observe significant improvement within 4-6 weeks, with continued enhancement as collagen 
                remodelling progresses over subsequent months. Chemical face peel before and after photography documents the remarkable improvements. 
                We also offer skin peel for hands and other body areas beyond facial treatments, all following the same rigorous safety and after peel care standards 
                that have made our chemical peels London clinic a trusted destination for skin rejuvenation.
              </p>
            </section>
          </article>
        </div>
      </div>
    </>
  );
};

export default ChemicalPeel;