import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram, Users, Award, Calendar, MapPin, Phone, Mail, ChevronDown, ChevronUp } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const HydraFacial = () => {
  const seoData = generateSEOMetadata(
    "HydraFacial London | £175 | Vortex Technology | Cosmedocs Harley Street",
    "Award-winning HydraFacial treatments using patented Vortex-Fusion technology. Deep cleanse, extract & hydrate your skin in 30-45 minutes. Book your treatment at Harley Street.",
    "/hydrafacial-london"
  );

  const bookingUrl = "https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29";

  // Before/after images for the viewer
  const beforeAfterImages = [
    {
      src: "/lovable-uploads/8f741338-3fd5-4feb-9d34-270856fb99c5.png",
      alt: "HydraFacial London before and after results showing hydrated glowing skin at Cosmedocs Harley Street",
      caption: "Instant hydration and glow after single HydraFacial treatment"
    },
    {
      src: "/lovable-uploads/16fa7311-00af-4ea7-b353-73f981f6d87c.png",
      alt: "HydraFacial skin brightening results London Cosmedocs Harley Street Vortex technology treatment",
      caption: "Even skin tone and reduced pore size with Vortex-Fusion technology"
    },
    {
      src: "/lovable-uploads/717753b3-1c9d-43bd-bdc1-ca245fc3c284.png",
      alt: "HydraFacial acne treatment before after London Harley Street Cosmedocs deep cleanse extraction",
      caption: "Clearer complexion and reduced acne with gentle extraction process"
    },
    {
      src: "/lovable-uploads/d5cec131-9f61-4b49-9dba-8658eda2eddf.png",
      alt: "HydraFacial fine lines wrinkles improvement London Cosmedocs Harley Street peptide infusion",
      caption: "Smoother skin texture with peptide and antioxidant infusion"
    },
    {
      src: "/lovable-uploads/a9ac5188-66f2-420b-9b39-3449dc02ff7b.png",
      alt: "HydraFacial oily skin congestion treatment London Harley Street Cosmedocs salicylic acid",
      caption: "Balanced oil production and refined pores after deep cleansing"
    },
    {
      src: "/lovable-uploads/97c76ea5-245e-43c2-8b89-533f365f4969.png",
      alt: "HydraFacial dry skin hydration treatment London Cosmedocs hyaluronic acid boost",
      caption: "Intense hydration and plumped skin with hyaluronic acid infusion"
    }
  ];

  const leftColumnFaqs = [
    {
      question: "How much does HydraFacial cost in London?",
      answer: "At Cosmedocs Harley Street, HydraFacial treatments start from £175 for a single session. We offer package deals: Course of 3 for £150 per treatment, and Course of 6 for £125 per treatment for better value."
    },
    {
      question: "How long does a HydraFacial treatment take?",
      answer: "A complete HydraFacial treatment takes 30-45 minutes and includes detoxification, deep cleanse, extraction, hydration, boost infusion, and LED light therapy for comprehensive skin rejuvenation."
    },
    {
      question: "Is HydraFacial suitable for all skin types?",
      answer: "Yes, HydraFacial is suitable for all skin types and tones. Whether your skin is dry, oily, sensitive, or combination, the treatment can be customized with specific serums to address your unique skin concerns."
    },
    {
      question: "What's the difference between HydraFacial and regular facials?",
      answer: "HydraFacial uses patented Vortex-Fusion technology that creates a spiral vortex effect to deeply cleanse, extract, and infuse the skin simultaneously. Unlike regular facials, it provides instant results with no downtime."
    },
    {
      question: "Can HydraFacial help with acne and acne scars?",
      answer: "Yes, HydraFacial is highly effective for acne-prone skin. The deep cleansing and extraction process removes impurities and unclogs pores, while the gentle buffing action helps improve the appearance of acne scars."
    }
  ];

  const rightColumnFaqs = [
    {
      question: "Are there any side effects with HydraFacial?",
      answer: "HydraFacial is a gentle treatment with minimal side effects. Some clients may experience mild redness for sensitive skin or slight skin sensitivity after deep cleansing, which typically subsides quickly."
    },
    {
      question: "How often should I have HydraFacial treatments?",
      answer: "For optimal results and long-term skin health, we recommend monthly HydraFacial treatments. However, many clients notice instant glow and hydration from their first session."
    },
    {
      question: "What happens during a HydraFacial treatment?",
      answer: "The treatment involves 5 steps: lymphatic drainage detoxification, vortex cleansing and exfoliation, gentle acid extraction, antioxidant and peptide infusion, and LED light therapy for final restoration."
    },
    {
      question: "Can HydraFacial be combined with other treatments?",
      answer: "Yes, HydraFacial works excellently when combined with dermaplaning. This combination addresses all skin concerns by removing dead skin cells and providing deep cleansing, exfoliation, and hydration."
    },
    {
      question: "Is HydraFacial effective for aging skin?",
      answer: "Absolutely. HydraFacial infuses peptides to boost collagen production, hyaluronic acid for hydration, and antioxidants for protection. The LED therapy further enhances anti-aging benefits for firmer, more youthful skin."
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
            "name": "Cosmedocs - HydraFacial London",
            "description": "Award-winning HydraFacial treatments using patented Vortex-Fusion technology in London's Harley Street",
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
            "medicalSpecialty": "Cosmetic Surgery",
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
              backgroundImage: "url('/lovable-uploads/ac269c72-30b5-4182-a990-857547c55c4f.png')"
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
                  <span className="block text-white/85 text-5xl md:text-6xl italic font-extralight mt-2">Transformation</span>
                </motion.h1>
                
                <motion.div 
                  className="mb-16 space-y-6 max-w-3xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <p className="text-2xl md:text-3xl text-white/90 font-extralight leading-relaxed">
                    Award-winning Vortex-Fusion technology that cleanses, extracts, and hydrates in one seamless 30-minute experience
                  </p>
                  <div className="flex items-center space-x-8 text-xl">
                    <div className="bg-white/15 backdrop-blur-lg rounded-full px-8 py-4 border border-white/20">
                      <span className="text-white font-light">From £175</span>
                    </div>
                    <div className="text-white/80">
                      <span className="font-extralight">Refine • Rehydrate • </span> 
                      <span className="font-light">Recharge</span>
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
                    Book Treatment
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

        {/* Before & After Gallery - Apple Style */}
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
                Instant Transformation
              </h2>
              <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
                Real patient results showcasing the power of Vortex-Fusion technology
              </p>
            </motion.div>
            
            <div className="text-center">
              <BeforeAfterImageViewer 
                images={beforeAfterImages}
                triggerLabel="View All Results"
                title="HydraFacial Before & After"
                description="Real patient transformations at Cosmedocs Harley Street"
                className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 rounded-full px-10 py-4 inline-flex items-center justify-center text-lg font-light transition-all duration-300 border border-white/20"
              />
            </div>
          </div>
        </section>

        {/* Treatment Steps - Apple Style */}
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
                The Vortex Experience
              </h2>
              <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
                Five revolutionary steps that deliver instant, visible results with patented technology
              </p>
            </motion.div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                <motion.div 
                  className="space-y-8"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                >
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-lg flex items-center justify-center text-white font-light text-lg border border-white/20">
                        1
                      </div>
                      <h3 className="text-2xl font-light text-white">Detoxification</h3>
                    </div>
                    <p className="text-lg text-white/80 font-light leading-relaxed pl-16">
                      Gentle lymphatic drainage increases circulation and removes toxins, resulting in less puffy skin and firmer texture.
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-lg flex items-center justify-center text-white font-light text-lg border border-white/20">
                        2
                      </div>
                      <h3 className="text-2xl font-light text-white">Deep Cleanse</h3>
                    </div>
                    <p className="text-lg text-white/80 font-light leading-relaxed pl-16">
                      Vortex cleansing with AHAs and BHAs removes dead skin cells and unclogs pores, preparing skin to reflect light beautifully.
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-lg flex items-center justify-center text-white font-light text-lg border border-white/20">
                        3
                      </div>
                      <h3 className="text-2xl font-light text-white">Extract + Hydrate</h3>
                    </div>
                    <p className="text-lg text-white/80 font-light leading-relaxed pl-16">
                      Gentle blend of salicylic and glycolic acids extracts impurities while boosting collagen production for firmer, hydrated skin.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div
                  className="order-1 lg:order-2"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                >
                  <div className="aspect-square bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-24 h-24 mx-auto bg-white/10 rounded-full flex items-center justify-center">
                        <Award className="h-12 w-12 text-white/80" />
                      </div>
                      <h4 className="text-xl font-light text-white">Patented Vortex-Fusion</h4>
                      <p className="text-white/70 font-light">Revolutionary spiral technology</p>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Steps 4 & 5 */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                >
                  <div className="aspect-square bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-24 h-24 mx-auto bg-white/10 rounded-full flex items-center justify-center">
                        <Users className="h-12 w-12 text-white/80" />
                      </div>
                      <h4 className="text-xl font-light text-white">LED Light Therapy</h4>
                      <p className="text-white/70 font-light">Blue & red light restoration</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="space-y-8"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                >
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-lg flex items-center justify-center text-white font-light text-lg border border-white/20">
                        4
                      </div>
                      <h3 className="text-2xl font-light text-white">Boost + Infuse</h3>
                    </div>
                    <p className="text-lg text-white/80 font-light leading-relaxed pl-16">
                      Advanced infusion of antioxidants, peptides, and hyaluronic acid for deep nourishment and long-lasting hydration.
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-lg flex items-center justify-center text-white font-light text-lg border border-white/20">
                        5
                      </div>
                      <h3 className="text-2xl font-light text-white">Restore + Rejuvenate</h3>
                    </div>
                    <p className="text-lg text-white/80 font-light leading-relaxed pl-16">
                      Blue light fights acne bacteria while red and infrared light boost collagen for a luminous, flawless glow.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section - Apple Style */}
        <section className="py-32 bg-gradient-to-b from-[#0A0A0A] to-black">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="text-center mb-20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
                  Investment in Your Skin
                </h2>
                <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
                  Straightforward pricing for transformative results with no hidden costs
                </p>
              </motion.div>
              
              <motion.div
                className="grid md:grid-cols-3 gap-8"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 text-center p-8 hover:bg-white/10 transition-all duration-500">
                  <CardContent className="space-y-6">
                    <h3 className="text-2xl font-light text-white">Single Session</h3>
                    <div className="text-4xl font-thin text-white">£175</div>
                    <p className="text-white/70 font-light">Perfect for first-time experience</p>
                    <a 
                      href={bookingUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block bg-white/15 hover:bg-white/25 text-white rounded-full py-3 px-6 transition-all duration-300 border border-white/20"
                    >
                      Book Now
                    </a>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 border-white/20 text-center p-8 hover:bg-white/15 transition-all duration-500 scale-105">
                  <CardContent className="space-y-6">
                    <h3 className="text-2xl font-light text-white">Course of 3</h3>
                    <div className="text-4xl font-thin text-white">£150</div>
                    <p className="text-white/70 font-light">per treatment • Save £75</p>
                    <a 
                      href={bookingUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block bg-white text-black hover:bg-white/90 rounded-full py-3 px-6 transition-all duration-300 font-medium"
                    >
                      Most Popular
                    </a>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/5 border-white/10 text-center p-8 hover:bg-white/10 transition-all duration-500">
                  <CardContent className="space-y-6">
                    <h3 className="text-2xl font-light text-white">Course of 6</h3>
                    <div className="text-4xl font-thin text-white">£125</div>
                    <p className="text-white/70 font-light">per treatment • Save £300</p>
                    <a 
                      href={bookingUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block bg-white/15 hover:bg-white/25 text-white rounded-full py-3 px-6 transition-all duration-300 border border-white/20"
                    >
                      Best Value
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Apple Style */}
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
                Questions & Answers
              </h2>
              <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
                Everything you need to know about HydraFacial at Cosmedocs
              </p>
            </motion.div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Left Column FAQs */}
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                >
                  {leftColumnFaqs.map((faq, index) => (
                    <FAQCard key={index} question={faq.question} answer={faq.answer} />
                  ))}
                </motion.div>
                
                {/* Right Column FAQs */}
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                >
                  {rightColumnFaqs.map((faq, index) => (
                    <FAQCard key={index} question={faq.question} answer={faq.answer} />
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Apple Style */}
        <section className="py-32 bg-gradient-to-b from-black to-[#0A0A0A]">
          <div className="page-container">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl md:text-6xl font-thin text-white mb-8 tracking-tight">
                  Ready to Transform?
                </h2>
                <p className="text-xl text-white/70 font-light mb-12 max-w-2xl mx-auto">
                  Experience the award-winning HydraFacial at Cosmedocs Harley Street. Visible results in just 30 minutes.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <a 
                    href={bookingUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group bg-white text-black hover:bg-white/90 rounded-full px-12 py-5 inline-flex items-center justify-center text-xl font-medium transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
                  >
                    Book Your HydraFacial
                  </a>
                  
                  <div className="flex items-center gap-6 text-white/80">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      <span className="font-light">Harley Street, London</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-5 w-5" />
                      <span className="font-light">0333 0551 503</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our aesthetics is invisible art - Brand Statement */}
        <div className="text-center py-16 bg-black border-t border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            <p className="text-white/60 font-light text-lg mb-2">cosmedocs</p>
            <p className="text-white/80 font-light text-xl italic">*Our aesthetics is invisible art</p>
            <p className="text-white/70 font-light text-lg mt-4">Bold • Natural • Always Your Way</p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

// FAQ Card Component
const FAQCard = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="w-full">
          <CardHeader className="text-left">
            <CardTitle className="text-lg font-light text-white flex items-center justify-between">
              {question}
              {isOpen ? 
                <ChevronUp className="h-5 w-5 text-white/60" /> : 
                <ChevronDown className="h-5 w-5 text-white/60" />
              }
            </CardTitle>
          </CardHeader>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CardContent className="pt-0">
            <p className="text-white/80 font-light leading-relaxed">{answer}</p>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};

export default HydraFacial;