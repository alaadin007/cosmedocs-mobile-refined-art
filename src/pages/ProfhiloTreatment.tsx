import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram, Users, Award, Calendar, MapPin, Phone, Mail, ChevronDown, ChevronUp } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
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
      src: "/lovable-uploads/c32f1151-24c9-4e9e-a7de-ee1ef761bab0.png",
      alt: "Profhilo neck treatment before and after results London Harley Street Cosmedocs",
      caption: "Neck bio-remodelling showing improved skin texture and tightening"
    },
    {
      src: "/lovable-uploads/d91b1bcd-3f3b-4735-8157-eea0f5374eeb.png",
      alt: "Profhilo face treatment before and after London Cosmedocs bio-remodelling",
      caption: "Facial rejuvenation with natural hydration and glow"
    },
    {
      src: "/lovable-uploads/c1c5edd5-4262-4f61-8d28-74a0e9c48653.png",
      alt: "Profhilo cheek treatment severe sun damage before after London Harley Street",
      caption: "Significant improvement in sun-damaged skin with enhanced texture"
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

        {/* Treatment Stats - Modern Cards Row */}
        <section className="py-24 bg-gradient-to-b from-black to-[#0A0A0A]">
          <div className="page-container">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              {[
                { label: "Anaesthetic", value: "Local", icon: "💉" },
                { label: "Results", value: "Immediate | 6-12 Months", icon: "⭐" },
                { label: "Procedure Time", value: "30 Minutes", icon: "⏱️" },
                { label: "Risk & Complications", value: "Minimal", icon: "🛡️" },
                { label: "Recovery", value: "Immediate", icon: "❤️" },
                { label: "Back To Work", value: "Immediate", icon: "💼" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-2xl mb-3">{stat.icon}</div>
                  <h3 className="text-white font-medium text-sm mb-2">{stat.label}</h3>
                  <p className="text-white/80 text-xs font-light">{stat.value}</p>
                </motion.div>
              ))}
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

        {/* Before & After Gallery - Apple Style */}
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
                Transformation Gallery
              </h2>
              <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
                Real patient transformations showcasing natural bio-remodelling results
              </p>
            </motion.div>
            
            <div className="text-center">
              <BeforeAfterImageViewer 
                images={beforeAfterImages}
                triggerLabel="View All Results"
                title="Profhilo Treatment Results"
                description="Real patient transformations with bio-remodelling"
                className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 rounded-full px-10 py-4 inline-flex items-center justify-center text-lg font-light transition-all duration-300 border border-white/20"
              />
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
                Benefits of Profhilo
              </h2>
              <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
                Advanced bio-remodelling delivers comprehensive skin rejuvenation
              </p>
            </motion.div>
            
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              {[
                "Better moisturising effects than topical skincare",
                "Addresses ageing wrinkles & creases",
                "Plumps up crepey skin on face, neck, hands",
                "Boosts skin's elastin and collagen production",
                "Delivers the effect of tighter skin",
                "Suitable for all skin types and ethnicities"
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-white/90 font-light">{benefit}</div>
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