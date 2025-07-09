import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram, Clock, Zap, Shield, Calendar, Heart, Award } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";

const CheekFiller = () => {
  const seoData = generateSEOMetadata(
    "Cheek Fillers London | From £350 | Dr. Ahmed Haq | Harley Street",
    "Expert cheek filler treatments in London's Harley Street. Visibly lifted & defined cheeks and cheekbones by Dr. Ahmed Haq. Premium dermal fillers from £350.",
    "/cheek-filler"
  );

  const bookingUrl = "https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29";

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Before/after images for cheek fillers
  const beforeAfterImages = [
    {
      src: "/lovable-uploads/37f017f9-669c-4ed6-9ca4-28d0984a1965.png",
      alt: "Cheek filler before and after results London Harley Street Cosmedocs Dr Ahmed Haq",
      caption: "Natural volume enhancement with 1ml cheek filler creating youthful contours"
    },
    {
      src: "/lovable-uploads/95608275-de36-4458-901d-2cc2ce2136de.png",
      alt: "Cheek enhancement dermal filler before after London Cosmedocs treatment",
      caption: "Sculpted cheekbones and lifted midface with strategic filler placement"
    },
    {
      src: "/lovable-uploads/4bb9f7fc-8d28-4ce9-b09e-7ee91adbe38c.png",
      alt: "Male cheek filler before after London Harley Street masculine enhancement",
      caption: "Masculine cheek enhancement for defined facial structure"
    },
    {
      src: "/lovable-uploads/93abbe25-a062-434e-a633-b9f0d329321d.png",
      alt: "Cheek volume restoration before after London Cosmedocs dermal filler treatment",
      caption: "Volume restoration creating natural lift and facial harmony"
    },
    {
      src: "/lovable-uploads/97e9a4a2-debd-4216-879b-d78feffa8cba.png",
      alt: "Cheek lift dermal filler London before after midface rejuvenation",
      caption: "Midface rejuvenation with instant cheek lift and contour definition"
    },
    {
      src: "/lovable-uploads/2dc938fb-78b2-4af7-a0cb-190492553cbb.png",
      alt: "Apple cheek filler before after London youthful enhancement",
      caption: "Apple cheek enhancement for youthful, plump appearance"
    }
  ];

  const treatmentDetails = [
    { icon: Zap, label: "Anaesthetic", value: "Local / Topical" },
    { icon: Calendar, label: "Results Duration", value: "15+ months" },
    { icon: Clock, label: "Procedure Time", value: "20-30 mins" },
    { icon: Shield, label: "Recovery", value: "24 Hours" },
    { icon: Heart, label: "Back to Work", value: "Immediate" },
    { icon: Award, label: "Safety", value: "Minimal Risk" }
  ];

  const faqs = [
    {
      question: "How much do cheek fillers cost in London?",
      answer: "At Cosmedocs Harley Street, cheek filler treatments start from £350 for 1ml. We offer 2ml for £650 and 3ml for £950. The final cost depends on your individual needs and the amount of filler required to achieve your desired results."
    },
    {
      question: "How long do cheek fillers last?",
      answer: "Cheek fillers typically last 15-18 months. The longevity depends on factors like your metabolism, lifestyle, physical activity, and the type of filler used. Touch-up treatments can help maintain your enhanced cheek contours."
    },
    {
      question: "Are cheek fillers safe?",
      answer: "When performed by Dr. Ahmed Haq at our Harley Street clinic, cheek fillers are very safe. We use premium Swiss, USA, and French dermal fillers with advanced cannula techniques to minimize risks and ensure natural-looking results."
    },
    {
      question: "Do cheek fillers hurt?",
      answer: "Cheek filler treatments cause minimal discomfort. We apply numbing cream before the procedure, and the dermal fillers contain lidocaine for additional comfort. Most patients find the treatment very tolerable."
    },
    {
      question: "Who is a good candidate for cheek fillers?",
      answer: "Cheek fillers are ideal for those experiencing volume loss due to aging, wanting to enhance natural cheekbone structure, correct facial asymmetry, or achieve more defined facial contours. A consultation will determine if you're a suitable candidate."
    },
    {
      question: "What's the difference between 1ml and 2ml cheek fillers?",
      answer: "1ml provides subtle, natural enhancement perfect for first-time patients or minor volume loss. 2ml offers more noticeable definition and lift, ideal for significant volume restoration or those wanting more dramatic cheekbone enhancement."
    },
    {
      question: "What should I expect after cheek filler treatment?",
      answer: "Results are visible immediately with final results apparent within 2 weeks. Some mild swelling or bruising may occur but typically resolves within 24-48 hours. Most patients return to work immediately after treatment."
    },
    {
      question: "Can cheek fillers be combined with other treatments?",
      answer: "Yes, cheek fillers work excellently as part of a comprehensive facial rejuvenation plan. They can be combined with treatments like lip fillers, anti-wrinkle injections, or non-surgical facelifts for complete facial harmony."
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
            "name": "Cosmedocs - Cheek Fillers London",
            "description": "Premium cheek filler treatments for lifted and defined cheeks in London's Harley Street",
            "url": "https://cosmedocs.com/cheek-filler",
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
            "priceRange": "£350-£950"
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
              backgroundImage: "url('/lovable-uploads/37f017f9-669c-4ed6-9ca4-28d0984a1965.png')"
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
                  <span className="block text-white/95 font-thin">Cheek</span>
                  <span className="block text-white font-light">Enhancement</span>
                  <span className="block text-white/85 text-5xl md:text-6xl italic font-extralight mt-2">Artistry</span>
                </motion.h1>
                
                <motion.div 
                  className="mb-16 space-y-6 max-w-3xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <p className="text-2xl md:text-3xl text-white/90 font-extralight leading-relaxed">
                    Invisible artistry that sculpts visibly lifted & defined cheeks and cheekbones using advanced dermal filler techniques
                  </p>
                  <div className="flex items-center space-x-8 text-xl">
                    <div className="bg-white/15 backdrop-blur-lg rounded-full px-8 py-4 border border-white/20">
                      <span className="text-white font-light">From £350</span>
                    </div>
                    <div className="text-white/80">
                      <span className="font-extralight">by </span> 
                      <span className="font-light">Dr. Ahmed Haq</span>
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
                      Follow our results @cosmedocs
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Treatment Details Section */}
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
                Treatment Overview
              </h2>
              <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
                Everything you need to know about our cheek enhancement procedures
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6 max-w-7xl mx-auto">
              {treatmentDetails.map((detail, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center">
                    <detail.icon className="h-10 w-10 text-white/80 mb-4 mx-auto group-hover:text-white transition-colors duration-300" />
                    <h3 className="text-lg font-medium text-white mb-2 group-hover:text-white/95 transition-colors duration-300">{detail.label}</h3>
                    <p className="text-white/70 font-light text-sm group-hover:text-white/80 transition-colors duration-300">{detail.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* More About Cheeks Section */}
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
                More About Cheeks
              </h2>
            </motion.div>

            <div className="max-w-6xl mx-auto space-y-12">
              <motion.div
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-light text-white mb-6">Defined Cheeks Are Universally Attractive</h3>
                <p className="text-white/80 font-extralight leading-relaxed text-lg mb-4">
                  Cheek fillers have become a gold standard for natural and non-surgical face lifts because an attractive facial profile is incomplete without visibly sculpted cheeks or high cheekbones.
                </p>
                <p className="text-white/80 font-extralight leading-relaxed text-lg">
                  According to scientific studies, the presence of a prominent mid-face area or defined cheeks signals sexual maturity for both males and females, making cheek enhancement universally appealing.
                </p>
              </motion.div>

              <motion.div
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-light text-white mb-6">How Aging Affects Your Face Structure</h3>
                <p className="text-white/80 font-extralight leading-relaxed text-lg mb-4">
                  One of the most important face areas that show noticeable aging signs is the mid-face. As you age, the skin, bone and soft tissues undergo major changes.
                </p>
                <p className="text-white/80 font-extralight leading-relaxed text-lg mb-6">
                  The ligaments become loose, and fat pads of the face become thinner and shift, resulting in:
                </p>
                <ul className="space-y-3 text-white/80 font-extralight text-lg">
                  <li className="flex items-start">
                    <span className="block w-2 h-2 bg-white/60 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    Cheeks start to look flat or sag
                  </li>
                  <li className="flex items-start">
                    <span className="block w-2 h-2 bg-white/60 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    Jowls are created along the jawline
                  </li>
                  <li className="flex items-start">
                    <span className="block w-2 h-2 bg-white/60 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    Droopy jawline and neck skin
                  </li>
                  <li className="flex items-start">
                    <span className="block w-2 h-2 bg-white/60 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    Nasolabial folds (smile lines) become prominent
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-light text-white mb-6">A Trending 'Liquid Facelift'</h3>
                <p className="text-white/80 font-extralight leading-relaxed text-lg mb-4">
                  This 'next generation facelift' adds volume to the sunken cheek area while subtly improving the under-eye area, aging mouth lines, and lifting the lower face.
                </p>
                <p className="text-white/80 font-extralight leading-relaxed text-lg">
                  Many young patients also get high cheekbones, cheek fillers, and apple cheek fillers to add natural angles and soft youthful contours to their cheeks.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Collapsible Before & After Sections */}
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
                Transformation Gallery
              </h2>
              <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
                Real patient transformations showcasing natural cheek enhancement artistry
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-4">
              {/* 1ml & 2ml Cheek Filler Results - Collapsible */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Collapsible
                  open={openFaqIndex === 100}
                  onOpenChange={() => setOpenFaqIndex(openFaqIndex === 100 ? null : 100)}
                >
                  <CollapsibleTrigger className="w-full bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 flex justify-between items-center text-left hover:bg-white/10 transition-colors">
                    <div>
                      <h3 className="text-2xl font-light text-white mb-2">1ml & 2ml Cheek Filler Results</h3>
                      <p className="text-white/70 font-extralight">Subtle to moderate enhancement perfect for natural-looking results</p>
                    </div>
                    {openFaqIndex === 100 ? (
                      <ChevronUp className="h-5 w-5 text-white/70 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-white/70 flex-shrink-0" />
                    )}
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-6 pb-6 pt-4 bg-white/5 backdrop-blur-sm border border-white/10 border-t-0 rounded-b-xl">
                    <div className="text-center">
                      <BeforeAfterImageViewer 
                        images={[
                          {
                            src: "/lovable-uploads/37f017f9-669c-4ed6-9ca4-28d0984a1965.png",
                            alt: "1ml cheek filler before and after results London Harley Street natural enhancement",
                            caption: "Natural volume enhancement with 1ml cheek filler creating youthful contours"
                          },
                          {
                            src: "/lovable-uploads/95608275-de36-4458-901d-2cc2ce2136de.png",
                            alt: "2ml cheek enhancement dermal filler before after moderate definition",
                            caption: "Sculpted cheekbones and lifted midface with 2ml strategic filler placement"
                          },
                          {
                            src: "/lovable-uploads/2dc938fb-78b2-4af7-a0cb-190492553cbb.png",
                            alt: "Apple cheek filler 1ml 2ml before after London youthful enhancement",
                            caption: "Apple cheek enhancement for youthful, plump appearance with 1-2ml"
                          }
                        ]}
                        triggerLabel="View 1ml & 2ml Results"
                        title="1ml & 2ml Cheek Filler Results"
                        description="Natural enhancement results by Dr. Ahmed Haq"
                        className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 rounded-full px-10 py-4 inline-flex items-center justify-center text-lg font-light transition-all duration-300 border border-white/20"
                      />
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </motion.div>

              {/* 3ml & 4ml Cheek Filler Results for Men - Collapsible */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Collapsible
                  open={openFaqIndex === 101}
                  onOpenChange={() => setOpenFaqIndex(openFaqIndex === 101 ? null : 101)}
                >
                  <CollapsibleTrigger className="w-full bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 flex justify-between items-center text-left hover:bg-white/10 transition-colors">
                    <div>
                      <h3 className="text-2xl font-light text-white mb-2">3ml & 4ml Cheek Filler for Men</h3>
                      <p className="text-white/70 font-extralight">Maximum enhancement for masculine facial definition and structure</p>
                    </div>
                    {openFaqIndex === 101 ? (
                      <ChevronUp className="h-5 w-5 text-white/70 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-white/70 flex-shrink-0" />
                    )}
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-6 pb-6 pt-4 bg-white/5 backdrop-blur-sm border border-white/10 border-t-0 rounded-b-xl">
                    <div className="text-center">
                      <BeforeAfterImageViewer 
                        images={[
                          {
                            src: "/lovable-uploads/4bb9f7fc-8d28-4ce9-b09e-7ee91adbe38c.png",
                            alt: "Male cheek filler 3ml 4ml before after London masculine enhancement",
                            caption: "Masculine cheek enhancement with 3ml for defined facial structure"
                          },
                          {
                            src: "/lovable-uploads/93abbe25-a062-434e-a633-b9f0d329321d.png",
                            alt: "Men's cheek volume restoration 4ml before after London Cosmedocs",
                            caption: "Maximum volume restoration with 4ml creating strong facial harmony"
                          },
                          {
                            src: "/lovable-uploads/97e9a4a2-debd-4216-879b-d78feffa8cba.png",
                            alt: "Male cheek lift 3ml 4ml dermal filler London masculine rejuvenation",
                            caption: "Masculine midface rejuvenation with instant cheek lift and angular definition"
                          }
                        ]}
                        triggerLabel="View Men's Results"
                        title="3ml & 4ml Cheek Filler Results for Men"
                        description="Masculine enhancement results by Dr. Ahmed Haq"
                        className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 rounded-full px-10 py-4 inline-flex items-center justify-center text-lg font-light transition-all duration-300 border border-white/20"
                      />
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
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
                Treatment Pricing
              </h2>
              <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
                Premium Swiss, USA & French dermal fillers only
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { volume: "1ml", price: "£350", note: "Usually enough for most" },
                { volume: "2ml", price: "£650", note: "Enhanced definition" },
                { volume: "3ml", price: "£950", note: "Maximum enhancement" }
              ].map((option, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-3xl font-light text-white mb-2">{option.volume}</h3>
                  <p className="text-4xl font-thin text-white mb-4">{option.price}</p>
                  <p className="text-white/70 font-extralight">{option.note}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
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
                Benefits of Cheek Enhancement
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                "More defined and plump cheeks",
                "Reduced look of nasolabial folds",
                "Subtle lift of drooping jowls",
                "Naturally defined cheekbones",
                "Instant 'Cheek Lift' for sagging",
                "Fraction of surgery cost",
                "Plumper cheeks for thin faces",
                "Angular look for round faces"
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <p className="text-white/90 font-light text-center">{benefit}</p>
                </motion.div>
              ))}
            </div>
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
            </motion.div>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-4">
                {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Collapsible
                      open={openFaqIndex === index}
                      onOpenChange={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    >
                      <CollapsibleTrigger className="w-full bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 flex justify-between items-center text-left hover:bg-white/10 transition-colors">
                        <h3 className="text-lg font-light text-white pr-4">{faq.question}</h3>
                        {openFaqIndex === index ? (
                          <ChevronUp className="h-5 w-5 text-white/70 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-white/70 flex-shrink-0" />
                        )}
                      </CollapsibleTrigger>
                      <CollapsibleContent className="px-6 pb-6 pt-4 bg-white/5 backdrop-blur-sm border border-white/10 border-t-0 rounded-b-xl">
                        <p className="text-white/80 font-extralight leading-relaxed">{faq.answer}</p>
                      </CollapsibleContent>
                    </Collapsible>
                  </motion.div>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => {
                  const actualIndex = index + Math.ceil(faqs.length / 2);
                  return (
                    <motion.div
                      key={actualIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Collapsible
                        open={openFaqIndex === actualIndex}
                        onOpenChange={() => setOpenFaqIndex(openFaqIndex === actualIndex ? null : actualIndex)}
                      >
                        <CollapsibleTrigger className="w-full bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 flex justify-between items-center text-left hover:bg-white/10 transition-colors">
                          <h3 className="text-lg font-light text-white pr-4">{faq.question}</h3>
                          {openFaqIndex === actualIndex ? (
                            <ChevronUp className="h-5 w-5 text-white/70 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-white/70 flex-shrink-0" />
                          )}
                        </CollapsibleTrigger>
                        <CollapsibleContent className="px-6 pb-6 pt-4 bg-white/5 backdrop-blur-sm border border-white/10 border-t-0 rounded-b-xl">
                          <p className="text-white/80 font-extralight leading-relaxed">{faq.answer}</p>
                        </CollapsibleContent>
                      </Collapsible>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-32 bg-[#0A0A0A]">
          <div className="page-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-8 tracking-tight">
                Ready to Enhance Your Cheeks?
              </h2>
              <p className="text-xl text-white/70 font-light mb-12 max-w-2xl mx-auto">
                Book your consultation with Dr. Ahmed Haq at our Harley Street clinic
              </p>
              <a 
                href={bookingUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/95 backdrop-blur-sm text-black hover:bg-white rounded-full px-12 py-5 inline-flex items-center justify-center text-xl font-light transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
              >
                Book Your Consultation
              </a>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Hidden SEO Content */}
      <div className="sr-only">
        <h1>Cheek Fillers London - Expert Treatments by Dr. Ahmed Haq</h1>
        <p>Discover the transformative power of cheek fillers at Cosmedocs London. Our Harley Street clinic offers premium cheek enhancement treatments designed to create visibly lifted and defined cheeks and cheekbones. Dr. Ahmed Haq, with over 15 years of experience, utilizes advanced dermal filler techniques to deliver natural-looking results that enhance your facial harmony.</p>
        
        <h2>Why Choose Cheek Fillers at Cosmedocs?</h2>
        <p>Cheek fillers have become the gold standard for non-surgical facial enhancement because they address multiple aging concerns simultaneously. As we age, the midface undergoes significant changes - the skin loses elasticity, bone density decreases, and facial fat pads shift downward. This natural aging process results in flat or sagging cheeks, prominent nasolabial folds, and loss of facial definition.</p>
        
        <p>Our cheek filler treatments use premium hyaluronic acid-based dermal fillers to restore lost volume, lift sagging tissues, and create the defined cheekbone structure that signals youth and vitality. The procedure is minimally invasive, with immediate results and minimal downtime, making it an ideal alternative to surgical cheek implants or facelifts.</p>
        
        <h2>Advanced Injection Techniques</h2>
        <p>At Cosmedocs, we employ both cannula and needle techniques depending on your specific anatomy and aesthetic goals. Our microdroplet injection technique ensures precise placement of filler for natural-looking enhancement. We follow a "less is more" approach, typically starting with 1ml of filler and gradually building to achieve your desired results while maintaining facial harmony.</p>
        
        <h2>Types of Cheek Enhancement</h2>
        <p>Our cheek filler treatments can address various aesthetic concerns: apple cheek fillers for a youthful, plump appearance; cheekbone enhancement for sculptural definition; mid-cheek groove filling for improved facial contours; and volume restoration for age-related deflation. Each treatment is customized to your unique facial structure and aesthetic preferences.</p>
        
        <h2>Safety and Quality Assurance</h2>
        <p>Patient safety is our highest priority. We exclusively use premium dermal fillers from reputable Swiss, USA, and French manufacturers. All treatments are performed in our fully regulated Harley Street clinic by Dr. Ahmed Haq, ensuring the highest standards of safety and efficacy. Our comprehensive consultation process includes detailed medical history assessment and realistic expectation setting.</p>
        
        <h2>Aftercare and Results</h2>
        <p>Cheek filler results are visible immediately, with final results apparent within two weeks as any minor swelling subsides. The enhancement typically lasts 15-18 months, depending on individual factors such as metabolism, lifestyle, and the specific filler used. We provide comprehensive aftercare instructions to optimize your results and minimize any potential side effects.</p>
        
        <p>The treatment involves minimal discomfort, with topical numbing cream applied before the procedure and lidocaine-containing fillers for additional comfort. Most patients return to work immediately after treatment, with any minor swelling or bruising typically resolving within 24-48 hours.</p>
      </div>
    </>
  );
};

export default CheekFiller;