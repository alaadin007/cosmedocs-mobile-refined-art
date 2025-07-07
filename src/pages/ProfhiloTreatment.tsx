import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram, Users, Award, Calendar, MapPin, Phone, Mail, ChevronDown, ChevronUp, Syringe, Star, Clock, Shield, Heart, Briefcase } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";
import BeforeAfterGrid from "@/components/BeforeAfterGrid";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const ProfhiloTreatment = () => {
  const seoData = generateSEOMetadata(
    "Profhilo Treatment London | £350 | Bio-Remodelling | Cosmedocs Harley Street",
    "Expert Profhilo bio-remodelling treatments in London's Harley Street. Injectable skincare for dewy rejuvenation from £350. Book your consultation today.",
    "/profhilo-treatment"
  );

  const bookingUrl = "https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29";

  // Before/after images for the viewer
  const beforeAfterImages = [
    {
      src: "/lovable-uploads/e70c5134-7f36-4127-af82-0d196d38b142.png",
      alt: "Profhilo nasolabial treatment before and after results London Harley Street Cosmedocs",
      caption: "Nasolabial area bio-remodelling showing improved skin texture and reduced lines"
    },
    {
      src: "/lovable-uploads/44cfb88a-2a8d-4598-8993-1535528ecbb8.png",
      alt: "Profhilo lip area treatment before and after London Cosmedocs bio-remodelling",
      caption: "Lip area rejuvenation with natural hydration and enhanced definition"
    },
    {
      src: "/lovable-uploads/3d2b453f-86db-4e3b-9703-d1ce579ed960.png",
      alt: "Profhilo profile treatment before and after London Harley Street",
      caption: "Profile improvement showing enhanced skin quality and firmness"
    },
    {
      src: "/lovable-uploads/a65d2bfb-9ce1-4bd9-92fb-5f514a24aab1.png",
      alt: "Profhilo neck and jawline treatment before and after London Cosmedocs",
      caption: "Neck and jawline bio-remodelling with visible skin tightening"
    },
    {
      src: "/lovable-uploads/d36a6f86-9526-4705-a008-410d58fb8264.png",
      alt: "Profhilo treatment 1 month results London Harley Street bio-remodelling",
      caption: "One month post-treatment showing significant skin improvement"
    }
  ];

  const leftColumnFaqs = [
    {
      question: "What is Profhilo treatment?",
      answer: "Profhilo is an advanced skin bio-remodelling therapy that replenishes hyaluronic acid levels in your skin. It stimulates collagen and elastin production, improving overall skin tone and quality over multiple sessions."
    },
    {
      question: "How much does Profhilo cost in London?",
      answer: "At Cosmedocs Harley Street, Profhilo treatment starts from £350 for the first session. Successive sessions are £300 and are usually scheduled 4-6 weeks apart for optimal results."
    },
    {
      question: "How does Profhilo work?",
      answer: "Profhilo works in two stages: first hydrating and nourishing your skin, then stimulating the synthesis of new collagen and elastin. The high concentration of hyaluronic acid spreads naturally under the skin to support existing HA layers."
    },
    {
      question: "How many Profhilo treatments do I need?",
      answer: "Usually, experts recommend at least two treatment sessions performed a month apart. The exact number depends on your age, cosmetic concerns, and desired skin goals."
    },
    {
      question: "Are there any Profhilo side effects?",
      answer: "Profhilo is very safe with minimal side effects. You may experience slight redness, bruising, and swelling at injection sites, which typically resolve within 1-2 days."
    }
  ];

  const rightColumnFaqs = [
    {
      question: "Does Profhilo hurt?",
      answer: "Like any injectable treatment, you may feel a slight pin prick during Profhilo treatment. We use topical numbing cream to minimize discomfort, and most patients report minimal pain."
    },
    {
      question: "How long does it take for Profhilo to work?",
      answer: "Profhilo delivers dewy, plumping results in as little as 5 days. However, achieving visibly youthful-looking skin may require several treatments at least 30 days apart."
    },
    {
      question: "How long does Profhilo last?",
      answer: "The treatment effects may last up to 6 months, depending on the patient's age. Results gradually develop as the hyaluronic acid stimulates natural collagen production."
    },
    {
      question: "What's the difference between Profhilo and dermal fillers?",
      answer: "While both contain hyaluronic acid, Profhilo uses non-crosslinked HA for bio-remodelling and hydration, whereas dermal fillers use cross-linked HA to volumise and fill specific areas."
    },
    {
      question: "Who is an ideal candidate for Profhilo?",
      answer: "Profhilo is suitable for men and women with slight to mild signs of ageing. Patients over 25 can benefit as preventative care, with optimal results for those aged 30-50 showing dull skin, fine lines, or volume loss."
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
            "name": "Cosmedocs - Profhilo Treatment",
            "description": "Premium Profhilo bio-remodelling treatments in London's Harley Street",
            "url": "https://cosmedocs.com/profhilo-treatment",
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
            "priceRange": "£350"
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
              backgroundImage: "url('/lovable-uploads/cc52c444-86d0-429d-ae4b-da84e429f406.png')"
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
                  <span className="block text-white/95 font-thin">Profhilo</span>
                  <span className="block text-white font-light">Bio-Remodelling</span>
                  <span className="block text-white/85 text-5xl md:text-6xl italic font-extralight mt-2">Injectable Skincare</span>
                </motion.h1>
                
                <motion.div 
                  className="mb-16 space-y-6 max-w-3xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <p className="text-2xl md:text-3xl text-white/90 font-extralight leading-relaxed">
                    Advanced bio-remodelling therapy that stimulates natural collagen production for a dewy, youthful complexion
                  </p>
                  <div className="flex items-center space-x-8 text-xl">
                    <div className="bg-white/15 backdrop-blur-lg rounded-full px-8 py-4 border border-white/20">
                      <span className="text-white font-light">From £350</span>
                    </div>
                    <div className="text-white/80">
                      <span className="font-extralight">Injectable </span> 
                      <span className="font-light">Moisturiser</span>
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
                    Book Consultation
                  </a>
                  <div className="flex items-center gap-3 text-white/80 px-8">
                    <Instagram className="h-6 w-6" />
                    <a 
                      href="https://instagram.com/cosmedocs" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors font-extralight text-lg"
                    >
                      Follow our transformations
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Treatment Stats */}
        <section className="py-12 bg-gradient-to-br from-cosmedocs-black via-gray-900 to-cosmedocs-black text-white">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-7xl mx-auto"
            >
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { label: "Anaesthetic", value: "Local", icon: "syringe" },
                  { label: "Results", value: "Immediate | 6-12 Months", icon: "star" },
                  { label: "Procedure Time", value: "30 Minutes", icon: "clock" },
                  { label: "Risk & Complications", value: "Minimal", icon: "shield" },
                  { label: "Recovery", value: "Immediate", icon: "heart" },
                  { label: "Back To Work", value: "Immediate", icon: "briefcase" },
                ].map((stat, index) => {
                  const IconComponent = {
                    syringe: Syringe,
                    star: Star,
                    clock: Clock,
                    shield: Shield,
                    heart: Heart,
                    briefcase: Briefcase
                  }[stat.icon];
                  
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 min-w-[160px] text-center"
                    >
                      <IconComponent className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
                      <h3 className="font-semibold text-sm mb-1">{stat.label}</h3>
                      <p className="text-xs text-gray-300">{stat.value}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* What is Profhilo Section */}
        <section className="py-32 bg-[#0A0A0A]">
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
                  What Is Profhilo?
                </h2>
                <p className="text-xl text-white/70 font-light max-w-4xl mx-auto">
                  Advanced skin bio-remodelling treatment that stimulates natural collagen and elastin production
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
                      Injectable Moisturiser
                    </h3>
                    <p className="text-lg text-white/80 font-light leading-relaxed mb-8">
                      Unlike typical topical moisturisers, Profhilo slowly releases pure hyaluronic acid when injected 
                      directly into your skin layers. It spreads like thin honey, providing intense and long-lasting 
                      skin hydration that complements your existing treatments.
                    </p>
                    <p className="text-lg text-white/80 font-light leading-relaxed">
                      This cutting-edge treatment delays the appearance of wrinkles and skin laxity while promoting 
                      a naturally radiant glow through bio-remodelling and rejuvenation.
                    </p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
                    <h4 className="text-2xl font-light text-white mb-6">How Profhilo Works</h4>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-white/10 rounded-full p-3 mt-1">
                          <span className="text-white text-sm font-medium">1</span>
                        </div>
                        <div>
                          <h5 className="text-white font-medium mb-2">Hydration Phase</h5>
                          <p className="text-white/70 text-sm">
                            Immediately hydrates and nourishes your skin at the deeper layers
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="bg-white/10 rounded-full p-3 mt-1">
                          <span className="text-white text-sm font-medium">2</span>
                        </div>
                        <div>
                          <h5 className="text-white font-medium mb-2">Bio-Remodelling</h5>
                          <p className="text-white/70 text-sm">
                            Stimulates synthesis of new collagen and elastin (neo-collagenesis)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Before & After Results */}
        <section className="py-16 bg-gradient-to-br from-cosmedocs-black via-gray-900 to-cosmedocs-black text-white">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Before & After Results</h2>
                <p className="text-gray-300 text-lg">
                  Witness the transformative power of Profhilo bio-remodelling. Our aesthetics is invisible art - 
                  creating natural, bold transformations that speak without saying a word.
                </p>
              </div>
              <BeforeAfterGrid images={beforeAfterImages} />
              <div className="text-center mt-8">
                <p className="text-gray-400 text-sm">
                  Individual results may vary. Results shown after 2 treatment sessions spaced 4 weeks apart. 
                  Full effects visible in 6-8 weeks.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Profhilo Treatment Procedure Section */}
        <section className="py-32 bg-gradient-to-b from-black to-[#0A0A0A] relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/3 w-72 h-72 bg-white/[0.015] rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-white/[0.01] rounded-full blur-3xl" />
          </div>
          
          <div className="page-container relative z-10">
            <motion.div
              className="text-center mb-24"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
                Profhilo Treatment Procedure
              </h2>
              <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
                A comprehensive guide to your Profhilo bio-remodelling journey
              </p>
            </motion.div>
            
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">
                {[
                  {
                    number: "1",
                    title: "Before Your Treatment",
                    content: [
                      "The first step is consultation with a medical professional, followed by a comprehensive skin examination and progress photos.",
                      "At Cosmedocs, adherence to a strict Profhilo treatment protocol is essential for optimal results."
                    ],
                    icon: "📋"
                  },
                  {
                    number: "2", 
                    title: "During Your Treatment",
                    content: [
                      "• Profhilo is a speedy treatment with no downtime, lasting under 30 minutes",
                      "• Topical numbing cream applied followed by injection with a very thin needle", 
                      "• High-concentration HA injected in 10 strategic locations, five on each side of the face",
                      "• Some patients may experience a slight prick sensation during injection"
                    ],
                    icon: "💉"
                  },
                  {
                    number: "3",
                    title: "After Your Treatment", 
                    content: [
                      "Mild bruising or swelling around injection sites may occur but usually subsides within a few days.",
                      "Avoid touching or rubbing the area and strenuous exercise for 24 hours following treatment.",
                      "Two treatments suggested one month apart for maximum performance with final results becoming visible gradually."
                    ],
                    icon: "✨"
                  }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/5"
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                    viewport={{ once: true }}
                  >
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                    
                    {/* Connection line to next step */}
                    {index < 2 && (
                      <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-px bg-gradient-to-r from-white/20 to-transparent" />
                    )}
                    
                    <div className="relative z-10">
                      {/* Number badge with enhanced styling */}
                      <div className="relative mb-6">
                        <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center border border-white/20 group-hover:border-white/30 transition-all duration-300">
                          <span className="text-white text-2xl font-light">{step.number}</span>
                        </div>
                        <div className="absolute -top-2 -right-2 text-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-300">
                          {step.icon}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-light text-white mb-6 group-hover:text-white transition-colors duration-300">
                        {step.title}
                      </h3>
                      
                      <div className="space-y-4">
                        {step.content.map((text, textIndex) => (
                          <p key={textIndex} className="text-white/70 font-light leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                            {text}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Profhilo Injection Points Section */}
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
                Profhilo Injection Points
              </h2>
              <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
                Strategic BAP (Bio Aesthetic Points) technique for optimal results
              </p>
            </motion.div>
            
            <motion.div 
              className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
                    BAP Technique
                  </h3>
                  <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
                    The latest injectable skin remodelling treatment corrects the ageing signs and their source.
                  </p>
                  <p className="text-lg text-white/80 font-light leading-relaxed mb-8">
                    To achieve remarkable results, experts use the <strong>BAP (Bio Aesthetic Points)</strong> technique, 
                    which reduces the required injections and ensures an even and efficient dispersal of the hyaluronic acid 
                    into the skin layers.
                  </p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
                  <h4 className="text-2xl font-light text-white mb-6">Key Benefits</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 rounded-full p-2 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <p className="text-white/80 font-light">
                        Enables Profhilo to battle signs of ageing more efficiently
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 rounded-full p-2 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <p className="text-white/80 font-light">
                        Ensures your comfort throughout the process
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 rounded-full p-2 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <p className="text-white/80 font-light">
                        Reduces the required number of injections
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
                  <h4 className="text-2xl font-light text-white mb-6">Treatment Areas</h4>
                  <div className="space-y-6">
                    <div>
                      <h5 className="text-white font-medium mb-2">Face Treatment</h5>
                      <p className="text-white/70 text-sm leading-relaxed">
                        10 strategic injection points - 5 on each side of the face for optimal HA distribution
                      </p>
                    </div>
                    <div>
                      <h5 className="text-white font-medium mb-2">Neck Treatment</h5>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Targeted points to address sagging skin and improve texture in the neck and décolletage area
                      </p>
                    </div>
                    <div>
                      <h5 className="text-white font-medium mb-2">Hand Treatment</h5>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Specific injection points to treat skin laxity and reduce wrinkles and fine lines on hands
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-32 bg-black relative overflow-hidden">
          {/* Subtle background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/[0.01] rounded-full blur-3xl" />
          </div>
          
          <div className="page-container relative z-10">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
                Benefits of Profhilo
              </h2>
              <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
                Advanced bio-remodelling delivers comprehensive skin rejuvenation
              </p>
            </motion.div>
            
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              {[
                {
                  title: "Superior Hydration",
                  description: "Better moisturising effects than topical skincare",
                  icon: "💧"
                },
                {
                  title: "Anti-Ageing Power",
                  description: "Addresses ageing wrinkles & creases",
                  icon: "✨"
                },
                {
                  title: "Skin Plumping",
                  description: "Plumps up crepey skin on face, neck, hands",
                  icon: "🌟"
                },
                {
                  title: "Collagen Boost",
                  description: "Boosts skin's elastin and collagen production",
                  icon: "🧬"
                },
                {
                  title: "Skin Tightening",
                  description: "Delivers the effect of tighter skin",
                  icon: "🎯"
                },
                {
                  title: "Universal Suitability",
                  description: "Suitable for all skin types and ethnicities",
                  icon: "🌍"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/5"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                >
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  
                  <div className="relative z-10">
                    <div className="text-3xl mb-4 opacity-60 group-hover:opacity-80 transition-opacity duration-300">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-medium text-white mb-3 group-hover:text-white transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-white/70 font-light leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
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
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
                Everything you need to know about Profhilo bio-remodelling treatment
              </p>
            </motion.div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Left Column */}
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {leftColumnFaqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                  ))}
                </motion.div>
                
                {/* Right Column */}
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {rightColumnFaqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-[#0A0A0A] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-20" />
          <div className="page-container relative z-10">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-8 tracking-tight">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-xl text-white/70 font-light mb-12 max-w-2xl mx-auto">
                Experience the transformative power of Profhilo bio-remodelling at London's premier Harley Street clinic
              </p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <a 
                  href={bookingUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-white/95 backdrop-blur-sm text-black hover:bg-white rounded-full px-12 py-5 inline-flex items-center justify-center text-xl font-light transition-all duration-500 border border-white/20 hover:scale-[1.02] hover:shadow-2xl"
                >
                  Book Consultation
                </a>
                <a 
                  href="tel:03330551503"
                  className="group bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 rounded-full px-12 py-5 inline-flex items-center justify-center text-xl font-light transition-all duration-500 border border-white/20"
                >
                  Call 0333 0551 503
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="flex w-full items-center justify-between p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 text-left">
        <h3 className="text-lg font-medium text-white pr-4">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-white/70 flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-white/70 flex-shrink-0" />
        )}
      </CollapsibleTrigger>
      <CollapsibleContent className="px-6 pb-6">
        <p className="text-white/80 font-light leading-relaxed">{answer}</p>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default ProfhiloTreatment;