import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram, Users, Award, Calendar, MapPin, Phone, Mail, ChevronDown, ChevronUp, Play, Syringe, Clock, Heart, Shield, CalendarDays } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import BeforeAfterGrid from "@/components/BeforeAfterGrid";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

const EarLobeRejuvenation = () => {
  const seoData = generateSEOMetadata(
    "Ear Lobe Rejuvenation London | From £500 | Dr. Ahmed Haq | Harley Street", 
    "Professional ear lobe rejuvenation treatments in London's Harley Street. Transform drooping, aged earlobes with dermal fillers. Expert collagen stimulation from £500.", 
    "/ear-lobe-rejuvenation"
  );
  
  const bookingUrl = "https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29";

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
      answer: "Yes, when performed by qualified practitioners like Dr. Ahmed Haq at our Harley Street clinic, ear lobe rejuvenation is very safe. We use premium hyaluronic acid fillers and follow strict safety protocols."
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
      answer: "During your consultation, Dr. Ahmed Haq will assess your ear lobes, discuss your concerns, and create a personalized treatment plan to restore volume and firmness."
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
                  Ear Lobe
                  <span className="block text-purple-300">Rejuvenation</span>
                  <span className="block text-sm mt-4">Restore youthful volume to aging earlobes</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl">
                  <span className="text-purple-300 font-semibold">Invisible Art</span>
                  <br />
                  Bold • Natural • Always Your Way
                </p>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Starting from £500</p>
                  <p className="text-sm text-gray-300">Rejuvenation, new collagen, plumping using hyaluronic acid that stimulates your own collagen</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl"
                    onClick={() => window.open(bookingUrl, '_blank')}
                  >
                    Book Consultation
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm">
                    View Price List
                  </Button>
                </div>
              </motion.div>
              
              <div className="hidden lg:block"></div>
            </div>
          </div>
        </section>

        {/* Treatment Details Section */}
        <section className="py-24 bg-gradient-to-b from-black to-[#0A0A0A]">
          <div className="page-container">
            <motion.div 
              className="text-center mb-16" 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }} 
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-thin text-white mb-6 tracking-tight">
                Treatment Overview
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {treatmentDetails.map((detail, index) => (
                <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 text-center p-3">
                  <CardContent className="p-0">
                    {index === 0 && <Syringe className="h-5 w-5 text-white/60 mx-auto mb-2" />}
                    {index === 1 && <Clock className="h-5 w-5 text-white/60 mx-auto mb-2" />}
                    {index === 2 && <CalendarDays className="h-5 w-5 text-white/60 mx-auto mb-2" />}
                    {index === 3 && <Heart className="h-5 w-5 text-white/60 mx-auto mb-2" />}
                    {index === 4 && <Users className="h-5 w-5 text-white/60 mx-auto mb-2" />}
                    {index === 5 && <Shield className="h-5 w-5 text-white/60 mx-auto mb-2" />}
                    <h3 className="text-white/60 text-xs font-light uppercase tracking-wide mb-2">
                      {detail.title}
                    </h3>
                    <p className="text-white text-sm font-light">
                      {detail.detail}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What is Ear Lobe Rejuvenation Section */}
        <section className="bg-gradient-to-b from-black to-[#0A0A0A] py-[95px]">
          <div className="page-container">
            <motion.div 
              className="text-center mb-20" 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }} 
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
                What is Ear Lobe Rejuvenation?
              </h2>
              <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
                Advanced non-surgical ear lobe restoration using precision-placed dermal fillers
              </p>
            </motion.div>
            
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                className="space-y-8" 
                initial={{ opacity: 0, x: -40 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8 }} 
                viewport={{ once: true }}
              >
                <div className="space-y-6">
                  <h3 className="text-3xl font-light text-white">Precision Restoration</h3>
                  <p className="text-lg text-white/80 font-light leading-relaxed">
                    Ear lobe rejuvenation represents the art of invisible enhancement. Using premium hyaluronic acid fillers, 
                    we restore volume and firmness to aging, drooping earlobes. This innovative treatment stimulates your own 
                    collagen production while immediately plumping and rejuvenating the ear lobe tissue for naturally youthful results.
                  </p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h4 className="text-xl font-light text-white mb-6">Why Choose Ear Lobe Rejuvenation?</h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <p className="text-white/90 font-light">Reverses age-related drooping and thinning</p>
                        <p className="text-white/60 text-sm font-light mt-1">Restores youthful ear lobe volume</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <p className="text-white/90 font-light">Stimulates natural collagen production</p>
                        <p className="text-white/60 text-sm font-light mt-1">Long-lasting improvements in skin quality</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <p className="text-white/90 font-light">Non-surgical with immediate results</p>
                        <p className="text-white/60 text-sm font-light mt-1">Quick treatment with minimal downtime</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="space-y-8" 
                initial={{ opacity: 0, x: 40 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8, delay: 0.2 }} 
                viewport={{ once: true }}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10">
                  <h4 className="text-2xl font-light text-white mb-8">Common Signs of Ear Lobe Aging</h4>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-light">1</span>
                      </div>
                      <div>
                        <h5 className="text-white font-light">Drooping & Sagging</h5>
                        <p className="text-white/60 text-sm font-light">Loss of structural support over time</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-light">2</span>
                      </div>
                      <div>
                        <h5 className="text-white font-light">Volume Loss</h5>
                        <p className="text-white/60 text-sm font-light">Thinning and deflation of ear lobe tissue</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-light">3</span>
                      </div>
                      <div>
                        <h5 className="text-white font-light">Piercing Damage</h5>
                        <p className="text-white/60 text-sm font-light">Heavy earrings causing stretching</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-gradient-to-b from-[#0A0A0A] to-black">
          <div className="page-container">
            <motion.div 
              className="text-center mb-20" 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }} 
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
                Benefits of Treatment
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div 
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                initial={{ opacity: 0, y: 40 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8 }} 
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-light text-white mb-4">Immediate Volume Restoration</h3>
                <p className="text-white/70 font-light">
                  Instantly plumps and firms sagging ear lobes, restoring the youthful fullness that was lost over time.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                initial={{ opacity: 0, y: 40 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.1 }} 
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-light text-white mb-4">Collagen Stimulation</h3>
                <p className="text-white/70 font-light">
                  Hyaluronic acid stimulates your body's natural collagen production, creating long-lasting skin quality improvements.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                initial={{ opacity: 0, y: 40 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.2 }} 
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-light text-white mb-4">Enhanced Earring Support</h3>
                <p className="text-white/70 font-light">
                  Restored ear lobe structure provides better support for earrings and prevents further stretching damage.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                initial={{ opacity: 0, y: 40 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.3 }} 
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-light text-white mb-4">Quick & Comfortable</h3>
                <p className="text-white/70 font-light">
                  30-minute treatment with minimal discomfort and no downtime required for this simple procedure.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                initial={{ opacity: 0, y: 40 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.4 }} 
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-light text-white mb-4">Natural Results</h3>
                <p className="text-white/70 font-light">
                  Subtle enhancement that restores natural ear lobe proportions without looking artificial or overdone.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                initial={{ opacity: 0, y: 40 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.5 }} 
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-light text-white mb-4">Reversible Treatment</h3>
                <p className="text-white/70 font-light">
                  Hyaluronic acid fillers can be dissolved if needed, providing complete peace of mind and control.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gradient-to-b from-black to-[#0A0A0A]">
          <div className="page-container">
            <motion.div 
              className="text-center mb-20" 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }} 
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
                Frequently Asked Questions
              </h2>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                {leftColumnFaqs.map((faq, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8, delay: index * 0.1 }} 
                    viewport={{ once: true }}
                  >
                    <Collapsible>
                      <CollapsibleTrigger className="w-full text-left p-6 hover:bg-white/5 transition-colors rounded-2xl">
                        <div className="flex justify-between items-center">
                          <h3 className="text-lg font-light text-white pr-4">{faq.question}</h3>
                          <ChevronDown className="h-5 w-5 text-white/60 flex-shrink-0" />
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="px-6 pb-6">
                        <p className="text-white/70 font-light leading-relaxed">{faq.answer}</p>
                      </CollapsibleContent>
                    </Collapsible>
                  </motion.div>
                ))}
              </div>
              
              <div className="space-y-6">
                {rightColumnFaqs.map((faq, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8, delay: index * 0.1 }} 
                    viewport={{ once: true }}
                  >
                    <Collapsible>
                      <CollapsibleTrigger className="w-full text-left p-6 hover:bg-white/5 transition-colors rounded-2xl">
                        <div className="flex justify-between items-center">
                          <h3 className="text-lg font-light text-white pr-4">{faq.question}</h3>
                          <ChevronDown className="h-5 w-5 text-white/60 flex-shrink-0" />
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="px-6 pb-6">
                        <p className="text-white/70 font-light leading-relaxed">{faq.answer}</p>
                      </CollapsibleContent>
                    </Collapsible>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-b from-[#0A0A0A] to-black">
          <div className="page-container text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }} 
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-thin text-white mb-8">
                Ready to Rejuvenate Your Ear Lobes?
              </h2>
              <p className="text-xl text-white/70 font-light mb-12 max-w-2xl mx-auto">
                Book your consultation with Dr. Ahmed Haq at our Harley Street clinic and discover 
                how ear lobe rejuvenation can restore your youthful confidence.
              </p>
              <Button 
                className="bg-white text-black hover:bg-gray-200 rounded-full px-12 py-6 text-lg font-semibold shadow-2xl"
                onClick={() => window.open(bookingUrl, '_blank')}
              >
                Book Your Consultation
              </Button>
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
            Dr. Ahmed Haq's expertise in facial anatomy ensures safe, natural-looking results that complement your overall 
            facial aesthetics. The treatment can be combined with other rejuvenation procedures for comprehensive facial 
            enhancement. Our Harley Street clinic provides a comfortable, professional environment for all aesthetic treatments.
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