import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram, Users, Award, Calendar, MapPin, Phone, Mail, ChevronDown, ChevronUp, Play, Syringe, Clock, Heart, Shield, CalendarDays } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import BeforeAfterGrid from "@/components/BeforeAfterGrid";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
const ChinFiller = () => {
  const seoData = generateSEOMetadata("Chin Filler London | From £350 | Dr. Ahmed Haq | Harley Street", "Professional chin filler treatments in London's Harley Street. Transform from a weak chin to a well-defined profile. Expert chin augmentation from £350.", "/chin-filler");
  const bookingUrl = "https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29";
  const leftColumnFaqs = [{
    question: "How much does chin filler cost in London?",
    answer: "At Cosmedocs Harley Street, chin filler treatments start from £350 for the first syringe (1.2ml). The cost varies depending on the amount of filler needed to achieve your desired results."
  }, {
    question: "How long do chin filler results last?",
    answer: "Chin filler results typically last 12-18 months, sometimes longer. The longevity depends on the type and amount of filler used, your metabolism, and individual factors."
  }, {
    question: "Is chin filler safe?",
    answer: "Yes, when performed by qualified practitioners like Dr. Ahmed Haq at our Harley Street clinic, chin fillers are very safe. We use premium hyaluronic acid fillers and follow strict safety protocols."
  }, {
    question: "What's the difference between chin filler and chin surgery?",
    answer: "Chin filler is non-surgical, temporary, and involves minimal downtime. Surgical chin augmentation is permanent but carries surgical risks, longer recovery time, and higher costs."
  }, {
    question: "Can chin filler help with a double chin?",
    answer: "Yes, chin fillers can help minimize the appearance of a double chin by enhancing the chin projection and creating better definition between the chin and neck area."
  }];
  const rightColumnFaqs = [{
    question: "How painful is chin filler treatment?",
    answer: "Most patients find chin filler treatment comfortable. We use topical numbing cream and the fillers contain lidocaine for additional comfort during the procedure."
  }, {
    question: "What happens during a chin filler consultation?",
    answer: "During your consultation, Dr. Ahmed Haq will assess your facial proportions, discuss your goals, and create a personalized treatment plan to achieve optimal facial harmony."
  }, {
    question: "Can I combine chin filler with other treatments?",
    answer: "Absolutely! Chin filler works beautifully with jawline filler, cheek filler, and other facial treatments. The 3D jawline makeover is one of our most popular combination treatments."
  }, {
    question: "How quickly will I see chin filler results?",
    answer: "Results are visible immediately after treatment, with final results apparent within 2 weeks once any minor swelling subsides."
  }, {
    question: "Can chin filler results be reversed?",
    answer: "Yes, hyaluronic acid chin fillers can be dissolved with hyaluronidase if needed, providing flexibility that surgical options cannot offer."
  }];
  const treatmentDetails = [{
    title: "Anaesthetic",
    detail: "Local / Topical"
  }, {
    title: "Procedure Time",
    detail: "30 minutes"
  }, {
    title: "Results Duration",
    detail: "12+ months"
  }, {
    title: "Recovery",
    detail: "24-48 hours"
  }, {
    title: "Back to Work",
    detail: "Immediate"
  }, {
    title: "Risks",
    detail: "Minimal - swelling, bruising"
  }];
  return <>
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
          "name": "Cosmedocs - Chin Filler Treatment",
          "description": "Professional chin filler treatments for facial enhancement and profile correction",
          "url": "https://cosmedocs.com/chin-filler",
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
          "priceRange": "£350+"
        })}
        </script>
      </Helmet>

      <div className="bg-black text-white min-h-screen">
        {/* Hero Section - Apple Style */}
        <section className="relative min-h-screen flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: "url('/lovable-uploads/ac269c72-30b5-4182-a990-857547c55c4f.png')"
        }} />
          {/* Apple-style overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent" />
          
          <div className="page-container relative z-10">
            <div className="max-w-6xl">
              <motion.div className="text-left" initial={{
              opacity: 0,
              y: 60
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 1.2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}>
                <motion.h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-12 leading-[0.9] tracking-tight" initial={{
                opacity: 0,
                y: 40
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}>
                  <span className="block text-white/95 font-thin">Chin</span>
                  <span className="block text-white font-light">Enhancement</span>
                  <span className="block text-white/85 text-5xl md:text-6xl italic font-extralight mt-2">Projected</span>
                </motion.h1>
                
                <motion.div className="mb-16 space-y-6 max-w-3xl" initial={{
                opacity: 0,
                y: 30
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}>
                  <p className="text-2xl md:text-3xl text-white/90 font-extralight leading-relaxed">
                    Transform from a weak chin to well-defined profile with liquid mentoplasty using advanced dermal filler techniques
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
                
                <motion.div className="flex flex-col sm:flex-row gap-6" initial={{
                opacity: 0,
                y: 30
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.8,
                delay: 0.9,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}>
                  <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="group bg-white/95 backdrop-blur-sm text-black hover:bg-white rounded-full px-12 py-5 inline-flex items-center justify-center text-xl font-light transition-all duration-500 border border-white/20 hover:scale-[1.02] hover:shadow-2xl">
                    Book Consultation
                  </a>
                  <div className="flex items-center gap-3 text-white/80 px-8">
                    <Instagram className="h-6 w-6" />
                    <a href="https://instagram.com/cosmedocs" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-extralight text-lg">
                      Follow our results #cosmedocs
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Treatment Details Section */}
        <section className="py-24 bg-gradient-to-b from-black to-[#0A0A0A]">
          <div className="page-container">
            <motion.div className="text-center mb-16" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }}>
              <h2 className="text-4xl md:text-5xl font-thin text-white mb-6 tracking-tight">
                Treatment Overview
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 text-center p-3">
                <CardContent className="p-0">
                  <Syringe className="h-5 w-5 text-white/60 mx-auto mb-2" />
                  <h3 className="text-white/60 text-xs font-light uppercase tracking-wide mb-2">
                    Anaesthetic
                  </h3>
                  <p className="text-white text-sm font-light">
                    Local / Topical
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 text-center p-3">
                <CardContent className="p-0">
                  <Clock className="h-5 w-5 text-white/60 mx-auto mb-2" />
                  <h3 className="text-white/60 text-xs font-light uppercase tracking-wide mb-2">
                    Procedure Time
                  </h3>
                  <p className="text-white text-sm font-light">
                    30 minutes
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 text-center p-3">
                <CardContent className="p-0">
                  <CalendarDays className="h-5 w-5 text-white/60 mx-auto mb-2" />
                  <h3 className="text-white/60 text-xs font-light uppercase tracking-wide mb-2">
                    Results Duration
                  </h3>
                  <p className="text-white text-sm font-light">
                    12+ months
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 text-center p-3">
                <CardContent className="p-0">
                  <Heart className="h-5 w-5 text-white/60 mx-auto mb-2" />
                  <h3 className="text-white/60 text-xs font-light uppercase tracking-wide mb-2">
                    Recovery
                  </h3>
                  <p className="text-white text-sm font-light">
                    24-48 hours
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 text-center p-3">
                <CardContent className="p-0">
                  <Users className="h-5 w-5 text-white/60 mx-auto mb-2" />
                  <h3 className="text-white/60 text-xs font-light uppercase tracking-wide mb-2">
                    Back to Work
                  </h3>
                  <p className="text-white text-sm font-light">
                    Immediate
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 text-center p-3">
                <CardContent className="p-0">
                  <Shield className="h-5 w-5 text-white/60 mx-auto mb-2" />
                  <h3 className="text-white/60 text-xs font-light uppercase tracking-wide mb-2">
                    Risks
                  </h3>
                  <p className="text-white text-sm font-light">
                    Minimal - swelling, bruising
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>


        {/* What is Chin Filler Section */}
        <section className="bg-gradient-to-b from-black to-[#0A0A0A] py-[95px]">
          <div className="page-container">
            <motion.div className="text-center mb-20" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }}>
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
                What is Liquid Mentoplasty?
              </h2>
              <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
                Advanced non-surgical chin enhancement using precision-placed dermal fillers
              </p>
            </motion.div>
            
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
              <motion.div className="space-y-8" initial={{
              opacity: 0,
              x: -40
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8
            }} viewport={{
              once: true
            }}>
                <div className="space-y-6">
                  <h3 className="text-3xl font-light text-white">Precision Enhancement</h3>
                  <p className="text-lg text-white/80 font-light leading-relaxed">
                    Liquid mentoplasty represents the art of invisible enhancement. Using premium hyaluronic acid fillers, 
                    we reshape and project weak or retracted chins to create perfect facial harmony. This non-surgical 
                    approach volumizes the chin area while maintaining completely natural results.
                  </p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h4 className="text-xl font-light text-white mb-6">Why Choose Liquid Mentoplasty?</h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <p className="text-white/90 font-light">No surgical risks or extensive recovery</p>
                        <p className="text-white/60 text-sm font-light mt-1">Immediate return to daily activities</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <p className="text-white/90 font-light">Reversible results with hyaluronidase</p>
                        <p className="text-white/60 text-sm font-light mt-1">Complete flexibility and control</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <p className="text-white/90 font-light">Enhanced facial balance and profile</p>
                        <p className="text-white/60 text-sm font-light mt-1">Harmonious proportions that speak without words</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div className="space-y-8" initial={{
              opacity: 0,
              x: 40
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8,
              delay: 0.2
            }} viewport={{
              once: true
            }}>
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10">
                  <h4 className="text-2xl font-light text-white mb-8">Complete Facial Harmony</h4>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-light">1</span>
                      </div>
                      <div>
                        <h5 className="text-white font-light">Profile Balance</h5>
                        <p className="text-white/60 text-sm font-light">Perfect nose-to-chin ratio</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-light">2</span>
                      </div>
                      <div>
                        <h5 className="text-white font-light">Jawline Definition</h5>
                        <p className="text-white/60 text-sm font-light">Enhanced lower face contours</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-light">3</span>
                      </div>
                      <div>
                        <h5 className="text-white font-light">Lip Support</h5>
                        <p className="text-white/60 text-sm font-light">Enhanced lip prominence</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Treatment Journey Section */}
        <section className="bg-[#0A0A0A] py-[75px]">
          <div className="page-container">
            <motion.div className="text-center mb-20" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }}>
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
                Your Treatment Journey
              </h2>
              <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
                From consultation to completion, experience our expert care every step of the way
              </p>
            </motion.div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">
                <motion.div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 text-center" initial={{
                opacity: 0,
                y: 40
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.6
              }} viewport={{
                once: true
              }}>
                  <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Users className="h-8 w-8 text-white/70" />
                  </div>
                  <h3 className="text-2xl font-light text-white mb-4">Consultation</h3>
                  <p className="text-white/70 font-light leading-relaxed mb-6">
                    Comprehensive facial assessment with Dr. Ahmed Haq. We evaluate your unique facial structure 
                    and create a personalized treatment plan tailored to your aesthetic goals.
                  </p>
                  <div className="bg-white/5 rounded-2xl p-4">
                    <p className="text-white/60 text-sm font-light">
                      Detailed analysis • Goal setting • Treatment planning
                    </p>
                  </div>
                </motion.div>
                
                <motion.div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 text-center" initial={{
                opacity: 0,
                y: 40
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.6,
                delay: 0.2
              }} viewport={{
                once: true
              }}>
                  <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Syringe className="h-8 w-8 text-white/70" />
                  </div>
                  <h3 className="text-2xl font-light text-white mb-4">Treatment</h3>
                  <p className="text-white/70 font-light leading-relaxed mb-6">
                    Precise filler placement using advanced injection techniques. Topical anesthesia ensures 
                    comfort throughout the 30-minute procedure with immediate visible results.
                  </p>
                  <div className="bg-white/5 rounded-2xl p-4">
                    <p className="text-white/60 text-sm font-light">
                      30 minutes • Minimal discomfort • Immediate results
                    </p>
                  </div>
                </motion.div>
                
                <motion.div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 text-center" initial={{
                opacity: 0,
                y: 40
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.6,
                delay: 0.4
              }} viewport={{
                once: true
              }}>
                  <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Heart className="h-8 w-8 text-white/70" />
                  </div>
                  <h3 className="text-2xl font-light text-white mb-4">Aftercare</h3>
                  <p className="text-white/70 font-light leading-relaxed mb-6">
                    Minimal downtime with professional aftercare guidance. Results continue to improve 
                    over 2 weeks as any minor swelling subsides.
                  </p>
                  <div className="bg-white/5 rounded-2xl p-4">
                    <p className="text-white/60 text-sm font-light">
                      24-48 hours recovery • Professional support • Lasting results
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Face Types Section */}
        <section className="bg-gradient-to-b from-[#0A0A0A] to-black py-[75px]">
          <div className="page-container">
            <motion.div className="text-center mb-20" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }}>
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
                Personalized for Every Face
              </h2>
              <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
                Tailored approaches for different facial structures and aesthetic goals
              </p>
            </motion.div>
            
            <div className="max-w-6xl mx-auto space-y-16">
              <motion.div className="grid lg:grid-cols-2 gap-12 items-center" initial={{
              opacity: 0,
              x: -40
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8
            }} viewport={{
              once: true
            }}>
                <div className="space-y-6">
                  <h3 className="text-3xl font-light text-white">Round Face Enhancement</h3>
                  <p className="text-lg text-white/80 font-light leading-relaxed">
                    Strategic chin filler placement creates definition and elongates the face, achieving 
                    a naturally slimmed appearance. Our specialized facial profiling expertise transforms 
                    round contours into elegant diamond or heart-shaped profiles.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <p className="text-white/70 font-light">Enhanced facial definition</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <p className="text-white/70 font-light">Improved facial proportions</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <p className="text-white/70 font-light">Natural slimming effect</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                  <h4 className="text-xl font-light text-white mb-4">Round Face Benefits</h4>
                  <p className="text-white/70 font-light">
                    Precise placement redefines cheekbones and jawlines, creating natural diamond 
                    or heart-shaped contours that enhance your inherent beauty.
                  </p>
                </div>
              </motion.div>
              
              <motion.div className="grid lg:grid-cols-2 gap-12 items-center" initial={{
              opacity: 0,
              x: 40
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8
            }} viewport={{
              once: true
            }}>
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 lg:order-1">
                  <h4 className="text-xl font-light text-white mb-4">Square Face Softening</h4>
                  <p className="text-white/70 font-light">
                    Combined with masseter Botox, chin fillers create softer facial angles, 
                    promoting a more feminine V-shaped lower face appearance.
                  </p>
                </div>
                <div className="space-y-6 lg:order-2">
                  <h3 className="text-3xl font-light text-white">Square Face Refinement</h3>
                  <p className="text-lg text-white/80 font-light leading-relaxed">
                    For square facial structures, particularly common in Asian features, strategic 
                    chin enhancement combined with jawline treatments significantly softens angular 
                    features, creating harmonious V-shaped contours.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <p className="text-white/70 font-light">Softened facial angles</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <p className="text-white/70 font-light">V-shaped face creation</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <p className="text-white/70 font-light">Enhanced femininity</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div className="grid lg:grid-cols-2 gap-12 items-center" initial={{
              opacity: 0,
              x: -40
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8
            }} viewport={{
              once: true
            }}>
                <div className="space-y-6">
                  <h3 className="text-3xl font-light text-white">Double Chin Reduction</h3>
                  <p className="text-lg text-white/80 font-light leading-relaxed">
                    Advanced chin enhancement creates better definition between chin and neck areas. 
                    By elongating the facial profile and enhancing the under-chin area, we achieve 
                    a sleeker neck silhouette through optical refinement.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <p className="text-white/70 font-light">Improved chin-neck definition</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <p className="text-white/70 font-light">Elongated facial profile</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <p className="text-white/70 font-light">Sleeker neck appearance</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                  <h4 className="text-xl font-light text-white mb-4">Profile Enhancement</h4>
                  <p className="text-white/70 font-light">
                    Strategic filler placement creates optical adjustments that make double chin 
                    concerns less prominent while defining the jawline beautifully.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Transformation Gallery */}
        <section className="bg-[#0A0A0A] py-[75px]">
          <div className="page-container">
            <motion.div className="text-center mb-20" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }} viewport={{
            once: true
          }}>
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
                Transformation Gallery
              </h2>
              <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
                Real patient transformations showcasing enhanced chin projection and facial harmony
              </p>
            </motion.div>
            
            <BeforeAfterGrid images={[{
            src: "/lovable-uploads/d8e871e3-564d-44e3-a331-3fdd8b7574f4.png",
            alt: "Chin filler before and after profile balancing natural results Cosmedocs",
            caption: "Profile balancing with chin filler achieving natural, harmonious results that enhance facial proportions."
          }, {
            src: "/lovable-uploads/b5887047-e750-44bd-9d26-3e04579e09b3.png",
            alt: "Chin augmentation before after London jawline definition facial enhancement",
            caption: "Chin augmentation creating improved jawline definition and enhanced facial contours."
          }, {
            src: "/lovable-uploads/b6640de3-1759-4566-bbd1-0570a29cbce2.png",
            alt: "Chin filler profile enhancement side view transformation Harley Street",
            caption: "Side profile transformation showing enhanced chin projection and improved facial balance."
          }, {
            src: "/lovable-uploads/e664cc15-e198-4807-8fea-24b0b4507a84.png",
            alt: "Liquid mentoplasty before after chin enhancement non surgical results",
            caption: "Liquid mentoplasty demonstrating non-surgical chin enhancement with natural-looking results."
          }]} initialDisplay={4} loadMoreIncrement={4} />
          </div>
        </section>

        {/* Video Treatment Section - Apple Style */}
        <section className="bg-gradient-to-b from-[#0A0A0A] to-black py-[75px]">
          <div className="page-container">
            <motion.div className="text-center mb-20" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }} viewport={{
            once: true
          }}>
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
                Treatment in Action
              </h2>
              <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
                Watch our expert technique for chin augmentation using advanced dermal filler methods
              </p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto">
              <motion.div className="relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10" initial={{
              opacity: 0,
              y: 40
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.2
            }} viewport={{
              once: true
            }}>
                <div className="aspect-video">
                  <iframe className="w-full h-full rounded-3xl" src="https://www.youtube.com/embed/Y3gCG1n2ioo" title="Professional chin filler demonstration - Advanced liquid mentoplasty technique" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                </div>
              </motion.div>
              
              <motion.div className="text-center mt-8" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.4
            }} viewport={{
              once: true
            }}>
                <p className="text-white/70 font-light text-lg">
                  Professional chin filler demonstration
                </p>
                <p className="text-white/50 text-sm mt-2 font-light">
                  Advanced liquid mentoplasty technique
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="bg-black py-[75px]">
          <div className="page-container">
            <motion.div className="text-center mb-20" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }}>
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
                Investment in Your Confidence
              </h2>
              <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
                Transparent pricing for premium treatments with lasting results
              </p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <motion.div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 text-center" initial={{
                opacity: 0,
                y: 40
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.6
              }} viewport={{
                once: true
              }}>
                  <div className="mb-6">
                    <h3 className="text-2xl font-light text-white mb-2">Single Treatment</h3>
                    <p className="text-white/60 text-sm font-light">1.2ml Hyaluronic Acid</p>
                  </div>
                  <div className="mb-6">
                    <span className="text-4xl font-light text-white">£350</span>
                  </div>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <p className="text-white/70 text-sm font-light">Premium HA filler</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <p className="text-white/70 text-sm font-light">Expert consultation</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <p className="text-white/70 text-sm font-light">12+ months duration</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 text-center relative" initial={{
                opacity: 0,
                y: 40
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.6,
                delay: 0.2
              }} viewport={{
                once: true
              }}>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-white text-black px-4 py-1 rounded-full text-xs font-medium">
                      Most Popular
                    </span>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-light text-white mb-2">Enhanced Treatment</h3>
                    <p className="text-white/60 text-sm font-light">2.4ml Hyaluronic Acid</p>
                  </div>
                  <div className="mb-6">
                    <span className="text-4xl font-light text-white">£650</span>
                  </div>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <p className="text-white/70 text-sm font-light">Double volume treatment</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <p className="text-white/70 text-sm font-light">Comprehensive enhancement</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <p className="text-white/70 text-sm font-light">Extended results</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 text-center" initial={{
                opacity: 0,
                y: 40
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.6,
                delay: 0.4
              }} viewport={{
                once: true
              }}>
                  <div className="mb-6">
                    <h3 className="text-2xl font-light text-white mb-2">Premium Treatment</h3>
                    <p className="text-white/60 text-sm font-light">3.6ml Hyaluronic Acid</p>
                  </div>
                  <div className="mb-6">
                    <span className="text-4xl font-light text-white">£850</span>
                  </div>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <p className="text-white/70 text-sm font-light">Maximum transformation</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <p className="text-white/70 text-sm font-light">Complete facial balance</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <p className="text-white/70 text-sm font-light">Longest lasting results</p>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <motion.div className="text-center mt-12" initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.6
            }} viewport={{
              once: true
            }}>
                <p className="text-white/60 font-light mb-8">
                  All treatments include consultation, premium fillers, and comprehensive aftercare
                </p>
                <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="bg-white text-black hover:bg-white/90 rounded-full px-12 py-5 inline-flex items-center justify-center text-lg font-medium transition-all duration-300 hover:scale-105">
                  Book Your Consultation
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-black py-[75px]">
          <div className="page-container">
            <motion.div className="text-center mb-20" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }}>
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
                Why Choose Chin Filler?
              </h2>
            </motion.div>
            
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
              <motion.div className="space-y-8" initial={{
              opacity: 0,
              x: -40
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8
            }} viewport={{
              once: true
            }}>
                <div className="space-y-6">
                  <h3 className="text-3xl font-light text-white">Enhanced Facial Balance</h3>
                  <p className="text-lg text-white/80 font-light leading-relaxed">
                    Our aesthetics is invisible art. Chin fillers create subtle yet transformative changes that enhance your natural beauty while maintaining facial harmony.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-white/70 font-light">Immediate visible results with minimal downtime</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-white/70 font-light">Non-surgical alternative to chin implants</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-white/70 font-light">Reversible treatment with hyaluronidase</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-white/70 font-light">Long-lasting results (12-18 months)</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div className="space-y-8" initial={{
              opacity: 0,
              x: 40
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8,
              delay: 0.2
            }} viewport={{
              once: true
            }}>
                <div className="space-y-6">
                  <h3 className="text-3xl font-light text-white">Expert Technique</h3>
                  <p className="text-lg text-white/80 font-light leading-relaxed">
                    Bold • Natural • Always Your Way. Dr. Ahmed Haq's expertise ensures precise placement for optimal results that enhance your unique features.
                  </p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h4 className="text-xl font-light text-white mb-4">Treatment Areas</h4>
                  <div className="space-y-3">
                    <p className="text-white/70 font-light">• Chin projection and definition</p>
                    <p className="text-white/70 font-light">• Jawline enhancement</p>
                    <p className="text-white/70 font-light">• Profile balance correction</p>
                    <p className="text-white/70 font-light">• Lower face contouring</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gradient-to-b from-black to-[#0A0A0A] py-[75px]">
          <div className="page-container">
            <motion.div className="text-center mb-20" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }}>
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
                Frequently Asked Questions
              </h2>
            </motion.div>
            
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                {leftColumnFaqs.map((faq, index) => <FAQItem key={index} question={faq.question} answer={faq.answer} />)}
              </div>
              
              <div className="space-y-6">
                {rightColumnFaqs.map((faq, index) => <FAQItem key={index} question={faq.question} answer={faq.answer} />)}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-32 bg-[#0A0A0A]">
          <div className="page-container">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8
            }} viewport={{
              once: true
            }}>
                <h2 className="text-5xl md:text-6xl font-thin text-white mb-8 tracking-tight">
                  Ready to Transform Your Profile?
                </h2>
                <p className="text-xl text-white/70 font-light mb-12 max-w-2xl mx-auto">
                  Book your consultation at our Harley Street clinic and discover how chin filler can enhance your natural beauty
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="bg-white text-black hover:bg-white/90 rounded-full px-12 py-5 inline-flex items-center justify-center text-lg font-medium transition-all duration-300 hover:scale-105">
                    Book Consultation
                  </a>
                  <a href="tel:03330551503" className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 rounded-full px-12 py-5 inline-flex items-center justify-center text-lg font-light transition-all duration-300 border border-white/20">
                    <Phone className="h-5 w-5 mr-2" />
                    Call: 0333 055 1503
                  </a>
                </div>
                
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/60">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    <span className="font-light">10 Harley Street, London W1G 9PF</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    <span className="font-light">CQC Registered Clinic</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>;
};

// FAQ Item Component
const FAQItem = ({
  question,
  answer
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="w-full text-left">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-light text-white pr-4">{question}</h3>
            {isOpen ? <ChevronUp className="h-5 w-5 text-white/70 flex-shrink-0" /> : <ChevronDown className="h-5 w-5 text-white/70 flex-shrink-0" />}
          </div>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="px-6 pb-6 pt-2">
          <p className="text-white/80 font-light leading-relaxed">{answer}</p>
        </div>
      </CollapsibleContent>
    </Collapsible>;
};
export default ChinFiller;