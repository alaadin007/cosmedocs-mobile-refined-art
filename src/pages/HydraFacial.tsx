import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, Star, Clock, Users, Calendar, Shield } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";
import BeforeAfterGrid from "@/components/BeforeAfterGrid";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const HydraFacial = () => {
  const seoData = generateSEOMetadata(
    "HydraFacial London | £175 | Cosmedocs | Harley Street",
    "Premium HydraFacial treatments in London's Harley Street. Advanced vortex technology for glowing, hydrated skin. From £175. Book your session today.",
    "/hydrafacial-london"
  );

  const bookingUrl = "https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29";

  // Before/after images for HydraFacial
  const beforeAfterImages = [
    {
      src: "/lovable-uploads/c1c5edd5-4262-4f61-8d28-74a0e9c48653.png",
      alt: "HydraFacial before and after London Cosmedocs glowing skin transformation",
      caption: "Radiant skin transformation achieved with HydraFacial vortex technology showing improved texture and hydration"
    },
    {
      src: "/lovable-uploads/fca71683-2bd7-438f-b37d-750080620e09.png",
      alt: "HydraFacial pore refinement before after London Harley Street Cosmedocs",
      caption: "Visible pore refinement and skin smoothing with improved clarity and radiance"
    },
    {
      src: "/lovable-uploads/44cfb88a-2a8d-4598-8993-1535528ecbb8.png",
      alt: "HydraFacial acne treatment before after London Cosmedocs skin improvement",
      caption: "Acne-prone skin improvement showing clearer complexion and reduced inflammation"
    },
    {
      src: "/lovable-uploads/37f017f9-669c-4ed6-9ca4-28d0984a1965.png",
      alt: "HydraFacial hydration boost before after London Harley Street glowing skin",
      caption: "Deep hydration boost revealing plump, dewy skin with enhanced luminosity"
    }
  ];

  const treatmentSteps = [
    {
      step: "01",
      title: "Detoxification",
      description: "Gentle lymphatic drainage to remove toxins and reduce puffiness for firmer, more toned skin."
    },
    {
      step: "02", 
      title: "Deep Cleanse",
      description: "Vortex cleansing and exfoliation removes dead skin cells while AHAs and BHAs unclog pores."
    },
    {
      step: "03",
      title: "Extract + Hydrate", 
      description: "Powerful blend of salicylic and glycolic acid removes impurities while boosting collagen production."
    },
    {
      step: "04",
      title: "Boost + Infuse",
      description: "Vortex-Fusion technology delivers antioxidants, peptides, and hyaluronic acid deep into skin."
    },
    {
      step: "05",
      title: "Restore + Rejuvenate",
      description: "LED light therapy fights bacteria and boosts collagen for a luminous, flawless glow."
    }
  ];

  const benefits = [
    "Refines and reduces pore size",
    "Evens out and brightens skin tone", 
    "Degreases oily skin naturally",
    "Plumps up dry, thirsty skin",
    "Effective for acne and acne scars",
    "Soothes sensitive skin conditions",
    "Tailored to every skin type"
  ];

  const leftColumnFaqs = [
    {
      question: "How much does HydraFacial cost in London?",
      answer: "At Cosmedocs Harley Street, HydraFacial treatments start from £175 for a single session. We offer courses of 3 sessions at £150 each, or 6 sessions at £125 each for optimal results."
    },
    {
      question: "How effective is HydraFacial for acne?",
      answer: "HydraFacial is highly effective for acne-prone skin. It deeply cleanses to remove dead skin cells, impurities, and excess sebum while unclogging pores and soothing inflamed skin to prevent future breakouts."
    },
    {
      question: "Are there any side effects of HydraFacial?",
      answer: "HydraFacial is widely regarded as safe with minimal side effects. Some may experience mild skin peeling, slight redness for sensitive skin, or temporary sensitivity, all of which fade quickly."
    },
    {
      question: "How many treatments are needed to see results?",
      answer: "Clients notice instant glow and hydration after their first session. For optimal long-term skin health, we recommend monthly HydraFacial treatments at our London clinic."
    }
  ];

  const rightColumnFaqs = [
    {
      question: "Who is the ideal candidate for HydraFacial?",
      answer: "HydraFacial is suitable for all skin types and anyone 18+ with fine lines, excess sebum, skin discoloration, rough texture, or dull complexion. Those using Accutane or with severe scarring may not be suitable."
    },
    {
      question: "How to care for skin after HydraFacial?",
      answer: "Limit sun exposure for 72 hours, use daily SPF 30+, avoid harsh treatments for 2 weeks, pause strong topicals for 48 hours, and incorporate hyaluronic serum for 30 days."
    },
    {
      question: "Can HydraFacial be combined with other treatments?",
      answer: "Yes, at Cosmedocs we combine HydraFacial with Dermaplaning for enhanced results. Dermaplaning removes dead skin cells, while HydraFacial deeply cleanses, exfoliates, and moisturizes."
    },
    {
      question: "Is HydraFacial suitable for men?",
      answer: "Absolutely! HydraFacial is popular among men for addressing dryness, shaving irritation, congested skin, rough texture, acne, and fine lines. We recommend monthly sessions for lasting results."
    }
  ];

  const [openFaqs, setOpenFaqs] = useState<Record<string, boolean>>({});

  const toggleFaq = (question: string) => {
    setOpenFaqs(prev => ({ ...prev, [question]: !prev[question] }));
  };

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
            "name": "Cosmedocs - HydraFacial London",
            "description": "Premium HydraFacial treatments in London's Harley Street using advanced vortex technology",
            "url": "https://cosmedocs.com/hydrafacial-london",
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
            "medicalSpecialty": "Dermatology",
            "priceRange": "£175"
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white min-h-screen">
        {/* Hero Section - Apple Style */}
        <section className="relative min-h-screen flex items-center">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/lovable-uploads/c1c5edd5-4262-4f61-8d28-74a0e9c48653.png')"
            }}
          />
          {/* Apple-style overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent" />
          
          <div className="page-container relative z-10">
            <div className="max-w-6xl">
              <motion.div 
                className="text-left"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <motion.h1 
                  className="text-6xl md:text-7xl lg:text-8xl font-light mb-12 leading-[0.9] tracking-tight"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <span className="block text-white/95 font-thin">HydraFacial</span>
                  <span className="block text-white font-light">London</span>
                  <span className="block text-white/85 text-5xl md:text-6xl italic font-extralight mt-2">Skin Recharge</span>
                </motion.h1>
                
                <motion.div 
                  className="mb-16 space-y-6 max-w-3xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <p className="text-2xl md:text-3xl text-white/90 font-extralight leading-relaxed">
                    Award-winning vortex technology that refines, rehydrates, and recharges your skin in just 30-45 minutes
                  </p>
                  <div className="flex items-center space-x-8 text-xl">
                    <div className="bg-white/15 backdrop-blur-lg rounded-full px-8 py-4 border border-white/20">
                      <span className="text-white font-light">From £175</span>
                    </div>
                    <div className="text-white/80">
                      <span className="font-extralight">at </span> 
                      <span className="font-light">Harley Street</span>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <a 
                    href={bookingUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group bg-white/95 backdrop-blur-sm text-black hover:bg-white rounded-full px-12 py-5 inline-flex items-center justify-center text-xl font-light transition-all duration-500 border border-white/20 hover:scale-[1.02] hover:shadow-2xl"
                  >
                    Book HydraFacial
                  </a>
                  <div className="flex items-center gap-3 text-white/80 px-8">
                    <Droplets className="h-6 w-6" />
                    <span className="hover:text-white transition-colors font-extralight text-lg">
                      Zero downtime • Instant glow
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What is HydraFacial Section */}
        <section className="py-32 bg-gradient-to-b from-black to-[#0A0A0A]">
          <div className="page-container">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="text-center mb-20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
                  What is HydraFacial?
                </h2>
                <p className="text-xl text-white/70 font-light max-w-4xl mx-auto">
                  A superior treatment that delivers long-lasting skin health, tailored to your unique concerns. 
                  Whether your skin is dry, oily, or somewhere in between, this treatment caters to all skin types and tones.
                </p>
              </motion.div>
              
              <motion.div 
                className="grid lg:grid-cols-2 gap-16 items-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                <div className="space-y-8">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
                      Award-Winning Vortex Technology
                    </h3>
                    <p className="text-lg text-white/80 font-light leading-relaxed mb-8">
                      HydraFacial uses patented Vortex-Fusion technology with a spiral design that creates a fluid vortex effect, 
                      easily dislodging and removing impurities while infusing skin with hydrating solutions and serums.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {benefits.slice(0, 4).map((benefit, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Star className="h-5 w-5 text-primary" />
                        <span className="text-white/90 text-sm">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div className="relative">
                  <img 
                    src="/lovable-uploads/c1c5edd5-4262-4f61-8d28-74a0e9c48653.png" 
                    alt="HydraFacial vortex technology London Cosmedocs Harley Street advanced skincare treatment"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section - Option 1: Horizontal List with Icons */}
        <section className="py-32 bg-gradient-to-b from-black to-[#0A0A0A]">
          <div className="page-container">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
                Treatment Benefits
              </h2>
              <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
                Discover why HydraFacial is the preferred choice for immediate, visible skin transformation
              </p>
            </motion.div>
            
            {/* Option 1: Clean List Layout */}
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-primary/20 rounded-full p-3 group-hover:bg-primary/30 transition-colors flex-shrink-0">
                      <Star className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-light text-white leading-relaxed">
                      {benefit}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Alternative Option 2: Two Column Layout */}
        <section className="py-32 bg-[#0A0A0A] hidden">
          <div className="page-container">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
                Treatment Benefits
              </h2>
              <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
                Discover why HydraFacial is the preferred choice for immediate, visible skin transformation
              </p>
            </motion.div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  {benefits.slice(0, Math.ceil(benefits.length / 2)).map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="bg-primary/20 rounded-full p-2 mt-1 flex-shrink-0">
                        <Star className="h-4 w-4 text-primary" />
                      </div>
                      <p className="text-lg text-white/90 font-light leading-relaxed">{benefit}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="space-y-8">
                  {benefits.slice(Math.ceil(benefits.length / 2)).map((benefit, index) => (
                    <motion.div
                      key={index + Math.ceil(benefits.length / 2)}
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: (index + Math.ceil(benefits.length / 2)) * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="bg-primary/20 rounded-full p-2 mt-1 flex-shrink-0">
                        <Star className="h-4 w-4 text-primary" />
                      </div>
                      <p className="text-lg text-white/90 font-light leading-relaxed">{benefit}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Alternative Option 3: Centered Single Column */}
        <section className="py-32 bg-black hidden">
          <div className="page-container">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
                Treatment Benefits
              </h2>
              <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
                Discover why HydraFacial is the preferred choice for immediate, visible skin transformation
              </p>
            </motion.div>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-primary/20 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                      <Star className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-light text-white leading-relaxed">
                      {benefit}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Alternative Option 4: Minimal Checkmark List */}
        <section className="py-32 bg-gradient-to-b from-[#0A0A0A] to-black hidden">
          <div className="page-container">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
                Treatment Benefits
              </h2>
              <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
                Discover why HydraFacial is the preferred choice for immediate, visible skin transformation
              </p>
            </motion.div>
            
            <div className="max-w-2xl mx-auto">
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4 py-4 border-b border-white/10 last:border-b-0"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-primary rounded-full p-1 flex-shrink-0">
                      <Star className="h-4 w-4 text-black fill-black" />
                    </div>
                    <p className="text-lg text-white/90 font-light">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Steps Section */}
        <section className="py-32 bg-[#0A0A0A]">
          <div className="page-container">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
                HydraFacial Treatment Steps
              </h2>
              <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
                A multi-step procedure designed to improve your skin health with precision and care
              </p>
            </motion.div>
            
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                {/* Left Column - Treatment Steps */}
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                >
                  {treatmentSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-start space-x-6">
                        <div className="text-primary text-3xl font-thin flex-shrink-0">{step.step}</div>
                        <div>
                          <h3 className="text-xl font-light text-white mb-3">{step.title}</h3>
                          <p className="text-white/70 text-sm leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
                
                {/* Right Column - Treatment Video */}
                <motion.div
                  className="lg:sticky lg:top-32"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                    <div className="aspect-video bg-black/50 rounded-xl mb-6 flex items-center justify-center">
                      <div className="text-center">
                        <div className="bg-primary/20 rounded-full p-6 mx-auto mb-4 w-20 h-20 flex items-center justify-center">
                          <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                        <h3 className="text-xl font-light text-white mb-2">HydraFacial Treatment</h3>
                        <p className="text-white/70 text-sm">Watch the complete procedure</p>
                      </div>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Experience the complete HydraFacial journey from start to finish. 
                      See how our advanced vortex technology transforms your skin in just 30-45 minutes.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Before & After Gallery */}
        <section className="py-32 bg-gradient-to-b from-[#0A0A0A] to-black">
          <div className="page-container">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
                HydraFacial Results
              </h2>
              <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
                Real patient transformations showcasing the power of vortex technology
              </p>
            </motion.div>
            
            <BeforeAfterGrid 
              images={beforeAfterImages}
              initialDisplay={2}
              loadMoreIncrement={2}
            />
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-32 bg-black">
          <div className="page-container">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
                HydraFacial Pricing
              </h2>
              <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
                Straightforward, no-fuss packages tailored to deliver powerful results
              </p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: "Single Session", price: "£175", sessions: "1 treatment" },
                  { title: "Course of 3", price: "£150", sessions: "per treatment", popular: true },
                  { title: "Course of 6", price: "£125", sessions: "per treatment" }
                ].map((plan, index) => (
                  <motion.div
                    key={index}
                    className={`relative bg-white/5 backdrop-blur-sm border ${plan.popular ? 'border-primary' : 'border-white/10'} rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300`}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-black px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </div>
                    )}
                    <h3 className="text-xl font-light text-white mb-4">{plan.title}</h3>
                    <div className="text-4xl font-thin text-white mb-2">{plan.price}</div>
                    <p className="text-white/70 text-sm mb-6">{plan.sessions}</p>
                    <a 
                      href={bookingUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 rounded-full px-8 py-3 inline-flex items-center justify-center text-sm font-light transition-all duration-300 border border-white/20"
                    >
                      Book Now
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 bg-[#0A0A0A]">
          <div className="page-container">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
                Everything you need to know about HydraFacial treatments at Cosmedocs
              </p>
            </motion.div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Left Column */}
                <div className="space-y-6">
                  {leftColumnFaqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Collapsible 
                        open={openFaqs[faq.question]} 
                        onOpenChange={() => toggleFaq(faq.question)}
                      >
                        <CollapsibleTrigger className="flex justify-between items-start w-full text-left p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                          <span className="text-white font-light pr-4">{faq.question}</span>
                          {openFaqs[faq.question] ? (
                            <ChevronUp className="h-5 w-5 text-white/70 flex-shrink-0 mt-1" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-white/70 flex-shrink-0 mt-1" />
                          )}
                        </CollapsibleTrigger>
                        <CollapsibleContent className="px-6 pb-6">
                          <p className="text-white/80 text-sm leading-relaxed">{faq.answer}</p>
                        </CollapsibleContent>
                      </Collapsible>
                    </motion.div>
                  ))}
                </div>
                
                {/* Right Column */}
                <div className="space-y-6">
                  {rightColumnFaqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: (index + leftColumnFaqs.length) * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Collapsible 
                        open={openFaqs[faq.question]} 
                        onOpenChange={() => toggleFaq(faq.question)}
                      >
                        <CollapsibleTrigger className="flex justify-between items-start w-full text-left p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                          <span className="text-white font-light pr-4">{faq.question}</span>
                          {openFaqs[faq.question] ? (
                            <ChevronUp className="h-5 w-5 text-white/70 flex-shrink-0 mt-1" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-white/70 flex-shrink-0 mt-1" />
                          )}
                        </CollapsibleTrigger>
                        <CollapsibleContent className="px-6 pb-6">
                          <p className="text-white/80 text-sm leading-relaxed">{faq.answer}</p>
                        </CollapsibleContent>
                      </Collapsible>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-32 bg-gradient-to-t from-black to-[#0A0A0A]">
          <div className="page-container">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl md:text-6xl font-thin text-white mb-8 tracking-tight">
                  Ready to Recharge Your Skin?
                </h2>
                <p className="text-xl text-white/70 font-light mb-12 max-w-2xl mx-auto">
                  Experience the transformative power of HydraFacial at London's premier Harley Street clinic
                </p>
                <a 
                  href={bookingUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/95 backdrop-blur-sm text-black hover:bg-white rounded-full px-12 py-5 inline-flex items-center justify-center text-xl font-light transition-all duration-500 border border-white/20 hover:scale-[1.02] hover:shadow-2xl"
                >
                  Book Your HydraFacial
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HydraFacial;