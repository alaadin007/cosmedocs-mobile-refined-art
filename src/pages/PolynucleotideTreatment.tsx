import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram, Users, Award, Calendar, MapPin, Phone, Mail, ChevronDown, ChevronUp, Clock, Shield, Star, CheckCircle, Syringe, Heart, Zap } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import BeforeAfterGrid from "@/components/BeforeAfterGrid";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import PopularTreatments from "@/components/PopularTreatments";
const PolynucleotideTreatment = () => {
  const seoData = generateSEOMetadata("Polynucleotide Treatment London | £450 | Regenerative DNA Therapy | Harley Street", "Expert polynucleotide DNA therapy for skin regeneration, anti-aging, and hair restoration in London's Harley Street. Advanced regenerative medicine from £450.", "/polynucleotide-treatment");
  const bookingUrl = "https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29";

  // Before/after images for the viewer
  const beforeAfterImages = [{
    src: "/lovable-uploads/dd86f9a2-6530-4c94-8776-c6ede86882bb.png",
    alt: "Polynucleotide treatment London lip rejuvenation results showing enhanced texture and reduced fine lines",
    caption: "Lip rejuvenation with polynucleotide therapy showing enhanced texture and reduced fine lines - 3 months result"
  }, {
    src: "/lovable-uploads/e328b8fe-f278-418a-b7d5-fa2992d038e0.png",
    alt: "Polynucleotide treatment London under eye rejuvenation dramatic reduction dark circles improved skin texture",
    caption: "Under-eye polynucleotide therapy demonstrating dramatic reduction in dark circles and improved skin texture"
  }, {
    src: "/lovable-uploads/7bef47b3-8c8f-42e2-b301-cff179a7c8bf.png",
    alt: "Polynucleotide treatment London eyebrow area improvement skin texture fine lines reduction",
    caption: "Eyebrow area polynucleotide treatment showing improved skin texture and reduced fine lines"
  }, {
    src: "/lovable-uploads/159173ee-5192-416f-af16-0b7d13fce18d.png",
    alt: "Polynucleotide treatment London hair restoration scalp therapy follicle regeneration results",
    caption: "Scalp polynucleotide treatment showing significant hair density improvement and follicle regeneration"
  }];
  const leftColumnFaqs = [{
    question: "How much does polynucleotide treatment cost in London?",
    answer: "At Cosmedocs Harley Street, polynucleotide treatments start from £450 per session. A 3-session package costs £1,200, saving you £150. The cost depends on the treatment area and your specific aesthetic goals."
  }, {
    question: "How long do polynucleotide results last?",
    answer: "Results typically last 6-9 months and continue improving over time. The longevity depends on your skin condition, age, and lifestyle factors. Regular maintenance sessions can help sustain your natural transformation."
  }, {
    question: "Is polynucleotide treatment safe?",
    answer: "Yes, polynucleotide treatment is very safe when performed by our experienced practitioners. It uses biocompatible DNA fragments that are naturally found in the body, minimizing the risk of allergic reactions."
  }, {
    question: "What areas can be treated with polynucleotides?",
    answer: "Polynucleotides can treat the under-eye area, face, neck, décolletage, hands, and scalp. They're particularly effective for dark circles, fine lines, skin texture improvement, and hair loss conditions."
  }, {
    question: "How many sessions are needed for optimal results?",
    answer: "While improvements can be seen after one session, we recommend 3 sessions spaced 3 weeks apart for optimal and lasting results. This allows for progressive regenerative benefits and maximum collagen stimulation."
  }];
  const rightColumnFaqs = [{
    question: "How painful is polynucleotide treatment?",
    answer: "Most patients experience minimal discomfort. We use topical numbing cream and fine needles for precise injection. The treatment is generally well-tolerated with minimal downtime required."
  }, {
    question: "When will I see results from polynucleotide therapy?",
    answer: "Initial improvements can be noticed within 2-3 weeks, with progressive enhancement over the following months. Full regenerative effects are typically visible at 6-9 months as natural collagen production increases."
  }, {
    question: "Can polynucleotides help with hair loss?",
    answer: "Yes, polynucleotide therapy is highly effective for hair restoration. It stimulates follicle regeneration, improves scalp health, and promotes natural hair growth, making it excellent for androgenic alopecia and thinning hair."
  }, {
    question: "What happens during a polynucleotide consultation?",
    answer: "Our practitioners will assess your skin or scalp condition, discuss your aesthetic goals, explain the treatment process, and create a personalized treatment plan. You'll understand exactly what to expect from your transformation."
  }, {
    question: "How does polynucleotide therapy work?",
    answer: "Polynucleotides are natural DNA fragments that stimulate cellular repair, boost collagen synthesis, and enhance skin regeneration. They work with your body's natural healing processes to restore youthful skin from within."
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
          "name": "Cosmedocs - Polynucleotide Treatment",
          "description": "Advanced polynucleotide DNA therapy for skin regeneration and hair restoration in London's Harley Street",
          "url": "https://cosmedocs.com/polynucleotide-treatment",
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
          "medicalSpecialty": "Regenerative Medicine",
          "priceRange": "£450"
        })}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        {/* Hero Section - Updated to match LipFillers design */}
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
                  Polynucleotide
                  <span className="block text-purple-300">DNA Therapy</span>
                  <span className="block text-sm mt-4">Revolutionary regenerative medicine for skin & cellular renewal</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl">
                  <span className="text-purple-300 font-semibold">Invisible Art</span>
                  <br />
                  Transformation that speaks without saying a word
                </p>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Starting from £450</p>
                  <p className="text-sm text-gray-300">#cosmepolynucleotide - Check out our IG for hundreds more natural, subtle transformations</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl">
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

        {/* Treatment Summary Section */}
        <section className="py-20 bg-gradient-to-b from-black to-[#0A0A0A]">
          <div className="page-container">
            <motion.div className="max-w-6xl mx-auto" initial={{
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
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 text-center p-3">
                  <CardContent className="p-0">
                    <Syringe className="h-5 w-5 text-white/60 mx-auto mb-2" />
                    <h3 className="text-white/60 text-xs font-light uppercase tracking-wide mb-2">
                      Anaesthetic
                    </h3>
                    <p className="text-white text-base font-light">
                      Local
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 text-center p-3">
                  <CardContent className="p-0">
                    <Star className="h-5 w-5 text-white/60 mx-auto mb-2" />
                    <h3 className="text-white/60 text-xs font-light uppercase tracking-wide mb-2">
                      Treatment Results
                    </h3>
                    <p className="text-white text-base font-light leading-tight">
                      Immediate, gets better over 6-9 Months
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 text-center p-3">
                  <CardContent className="p-0">
                    <Clock className="h-5 w-5 text-white/60 mx-auto mb-2" />
                    <h3 className="text-white/60 text-xs font-light uppercase tracking-wide mb-2">
                      Procedure Time
                    </h3>
                    <p className="text-white text-base font-light">
                      20 Minutes
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 text-center p-3">
                  <CardContent className="p-0">
                    <Shield className="h-5 w-5 text-white/60 mx-auto mb-2" />
                    <h3 className="text-white/60 text-xs font-light uppercase tracking-wide mb-2">
                      Risk & Complications
                    </h3>
                    <p className="text-white text-base font-light leading-tight">
                      Bruises, Swelling and Infection (rare)
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 text-center p-3">
                  <CardContent className="p-0">
                    <Heart className="h-5 w-5 text-white/60 mx-auto mb-2" />
                    <h3 className="text-white/60 text-xs font-light uppercase tracking-wide mb-2">
                      Full Recovery
                    </h3>
                    <p className="text-white text-base font-light">
                      Immediate
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 text-center p-3">
                  <CardContent className="p-0">
                    <Users className="h-5 w-5 text-white/60 mx-auto mb-2" />
                    <h3 className="text-white/60 text-xs font-light uppercase tracking-wide mb-2">
                      Back To Work
                    </h3>
                    <p className="text-white text-base font-light">
                      Immediate
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>


        {/* What Are Polynucleotides Section */}
        <section className="bg-[#0A0A0A] py-[4px]">
          <div className="page-container">
            <div className="max-w-6xl mx-auto">
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
                  What Are Polynucleotides?
                </h2>
                <p className="text-xl text-white/70 font-light max-w-4xl mx-auto leading-relaxed">
                  Polynucleotide therapy is revolutionizing aesthetic medicine in London, offering a natural approach to skin 
                  restoration and hair regeneration. Supported by over three decades of clinical research, this advanced 
                  treatment utilizes purified DNA fragments from salmon to harmonize with your body's innate healing mechanisms.
                </p>
              </motion.div>

              <motion.div className="grid lg:grid-cols-2 gap-16 items-center mb-16" initial={{
              opacity: 0,
              y: 40
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }} viewport={{
              once: true
            }}>
                <div className="space-y-6">
                  <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
                    Advanced DNA Technology
                  </h3>
                  <p className="text-lg text-white/80 font-light leading-relaxed">
                    These biocompatible DNA fragments work as natural cellular messengers, stimulating your skin's 
                    innate repair processes. Unlike synthetic alternatives, polynucleotides integrate seamlessly 
                    with your biology to enhance collagen synthesis, improve skin texture, and restore youthful vitality.
                  </p>
                  <p className="text-lg text-white/80 font-light leading-relaxed">
                    The treatment addresses multiple aesthetic concerns simultaneously - from fine lines and wrinkles 
                    to hair thinning and skin laxity. This versatility makes it an ideal foundation treatment that 
                    can be enhanced with complementary procedures for comprehensive rejuvenation.
                  </p>
                </div>
                
                <div>
                  <img src="/lovable-uploads/e328b8fe-f278-418a-b7d5-fa2992d038e0.png" alt="Polynucleotide treatment demonstration showing precision injection technique for under-eye rejuvenation" className="w-full h-auto rounded-2xl shadow-2xl" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Treatment Areas Section */}
        <section className="bg-gradient-to-b from-[#0A0A0A] to-black py-[8px]">
          <div className="page-container">
            <div className="max-w-6xl mx-auto">
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
                  Comprehensive Treatment Areas
                </h2>
                <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
                  Targeted polynucleotide therapy for multiple aesthetic concerns across face, body, and scalp
                </p>
              </motion.div>
              
              <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" initial={{
              opacity: 0,
              y: 40
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }} viewport={{
              once: true
            }}>
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-white text-xl font-light">Facial Rejuvenation</CardTitle>
                  </CardHeader>
                  <CardContent className="text-white/80 space-y-2">
                    <p className="font-light">• Wrinkle-prone facial areas</p>
                    <p className="font-light">• Deep forehead lines</p>
                    <p className="font-light">• Sunken cheeks restoration</p>
                    <p className="font-light">• Undefined jawline enhancement</p>
                    <p className="font-light">• Acne scarring improvement</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-white text-xl font-light">Body & Neck</CardTitle>
                  </CardHeader>
                  <CardContent className="text-white/80 space-y-2">
                    <p className="font-light">• Sagging neck skin tightening</p>
                    <p className="font-light">• Aging hands rejuvenation</p>
                    <p className="font-light">• Sagging arm skin firming</p>
                    <p className="font-light">• Rough, dry knees smoothing</p>
                    <p className="font-light">• Lackluster décolletage renewal</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-white text-xl font-light">Eyes & Hair</CardTitle>
                  </CardHeader>
                  <CardContent className="text-white/80 space-y-2">
                    <p className="font-light">• Tired under-eyes brightening</p>
                    <p className="font-light">• Dark circles reduction</p>
                    <p className="font-light">• Hair follicle regeneration</p>
                    <p className="font-light">• Scalp health optimization</p>
                    <p className="font-light">• Androgenic alopecia treatment</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Regenerative Results - Apple Style */}
        <section className="bg-gradient-to-b from-[#0A0A0A] to-[#0A0A0A] py-[66px]">
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
                Regenerative Results
              </h2>
              <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
                Real patient transformations showcasing the power of DNA regenerative therapy
              </p>
            </motion.div>
            
            <BeforeAfterGrid images={beforeAfterImages} initialDisplay={4} loadMoreIncrement={4} />
          </div>
        </section>

        {/* Regenerative Science Section - Apple Style */}
        <section className="bg-[#0A0A0A] py-[66px]">
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
                The Science of Regeneration
              </h2>
              <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
                Understanding how polynucleotide therapy activates your natural healing mechanisms
              </p>
            </motion.div>
            
            <div className="max-w-6xl mx-auto">
              <motion.div className="grid lg:grid-cols-2 gap-16 items-center" initial={{
              opacity: 0,
              y: 40
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }} viewport={{
              once: true
            }}>
                <div className="order-2 lg:order-1">
                  <img src="/lovable-uploads/dd86f9a2-6530-4c94-8776-c6ede86882bb.png" alt="Polynucleotide DNA therapy mechanism demonstration showing cellular regeneration and collagen stimulation process" className="w-full h-auto rounded-2xl shadow-2xl" />
                </div>
                
                <div className="order-1 lg:order-2 space-y-8">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
                      Mechanism of Action
                    </h3>
                    <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
                      Polynucleotides function as natural repair catalysts, working at the cellular level to restore 
                      skin's foundational structure. These purified DNA fragments stimulate fibroblast activity, 
                      enhance collagen and elastin production, and improve cellular hydration mechanisms.
                    </p>
                    <p className="text-lg text-white/80 font-light leading-relaxed">
                      Unlike temporary volumizing treatments, polynucleotides create lasting change by reactivating 
                      your skin's dormant regenerative pathways. This results in genuine improvement in skin quality, 
                      texture, and resilience that continues to enhance over 6-9 months.
                    </p>
                  </div>
                  
                  <RegenerativeScienceCard />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Who Is It For Section */}
        <section className="bg-gradient-to-b from-[#0A0A0A] to-black py-[60px]">
          <div className="page-container">
            <div className="max-w-6xl mx-auto">
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
                  Ideal Candidates
                </h2>
                <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
                  Polynucleotide therapy delivers optimal results for these specific concerns and conditions
                </p>
              </motion.div>
              
              <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" initial={{
              opacity: 0,
              y: 40
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }} viewport={{
              once: true
            }}>
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-white text-lg font-light">Aging Concerns</CardTitle>
                  </CardHeader>
                  <CardContent className="text-white/80 space-y-1 text-sm">
                    <p>• Early aging signs</p>
                    <p>• Deep wrinkles and lines</p>
                    <p>• Loss of skin firmness</p>
                    <p>• Collagen deficiency</p>
                    <p>• Sagging skin areas</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-white text-lg font-light">Skin Quality</CardTitle>
                  </CardHeader>
                  <CardContent className="text-white/80 space-y-1 text-sm">
                    <p>• Dull, tired-looking skin</p>
                    <p>• Uneven skin tone</p>
                    <p>• Dry, damaged skin</p>
                    <p>• Thinning, fragile areas</p>
                    <p>• Sun damage effects</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-white text-lg font-light">Pigmentation</CardTitle>
                  </CardHeader>
                  <CardContent className="text-white/80 space-y-1 text-sm">
                    <p>• Hyperpigmentation</p>
                    <p>• Dark spots</p>
                    <p>• Acne scars</p>
                    <p>• Uneven texture</p>
                    <p>• Fine line development</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-white text-lg font-light">Hair Loss</CardTitle>
                  </CardHeader>
                  <CardContent className="text-white/80 space-y-1 text-sm">
                    <p>• Androgenic alopecia</p>
                    <p>• Thinning or weak hair</p>
                    <p>• Bald spots or patches</p>
                    <p>• Dry, itchy scalp</p>
                    <p>• Damaged follicles</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Targeted Treatments Section */}
        <section className="bg-gradient-to-b from-black to-[#0A0A0A] py-[66px]">
          <div className="page-container">
            <div className="max-w-6xl mx-auto">
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
                  Treatment Results & Benefits
                </h2>
                <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
                  Experience comprehensive skin and hair regeneration with polynucleotide DNA therapy
                </p>
              </motion.div>
              
              <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" initial={{
              opacity: 0,
              y: 40
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }} viewport={{
              once: true
            }}>
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-white text-xl font-light">Skin Regeneration</CardTitle>
                  </CardHeader>
                  <CardContent className="text-white/80 space-y-2">
                    <p className="font-light">• Deep skin nourishment</p>
                    <p className="font-light">• Age-defying radiance</p>
                    <p className="font-light">• Collagen boost for firmness</p>
                    <p className="font-light">• Elasticity rebound</p>
                    <p className="font-light">• Cellular skin repair</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-white text-xl font-light">Under-Eye Enhancement</CardTitle>
                  </CardHeader>
                  <CardContent className="text-white/80 space-y-2">
                    <p className="font-light">• Under-eye rejuvenation</p>
                    <p className="font-light">• Dark circles reduction</p>
                    <p className="font-light">• Puffiness minimization</p>
                    <p className="font-light">• Texture improvement</p>
                    <p className="font-light">• Brightness restoration</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-white text-xl font-light">Hair & Scalp</CardTitle>
                  </CardHeader>
                  <CardContent className="text-white/80 space-y-2">
                    <p className="font-light">• Revitalized scalp & hair</p>
                    <p className="font-light">• Hair follicle regeneration</p>
                    <p className="font-light">• Scalp health improvement</p>
                    <p className="font-light">• Natural hair growth</p>
                    <p className="font-light">• Androgenic alopecia treatment</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div className="text-center space-y-6" initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94]
            }} viewport={{
              once: true
            }}>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto">
                  <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
                    <span className="text-yellow-400">⭐</span> Optimal protocol: 1 session every 3 weeks, 
                    minimum of 3 sessions recommended for first-time patients. Full regenerative effects 
                    visible in 6-9 months as your body naturally produces enhanced collagen and elastin.
                  </p>
                  <p className="text-lg text-white/80 font-light leading-relaxed">
                    Polynucleotide therapy combines beautifully with Microneedling, PRP, Profhilo, Botox, 
                    and dermal fillers to enhance overall aesthetic outcomes and provide comprehensive rejuvenation.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Investment in Regeneration Section */}
        <section className="bg-[#0A0A0A] py-[33px]">
          <div className="page-container">
            <motion.div className="text-center max-w-4xl mx-auto" initial={{
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
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-8 tracking-tight">
                Investment in Regeneration
              </h2>
              <p className="text-xl text-white/70 font-light mb-12">
                Professional polynucleotide therapy pricing with package savings
              </p>
              
              <div className="mt-16 grid md:grid-cols-3 gap-8">
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/8 transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl font-light text-white mb-3 group-hover:scale-105 transition-transform duration-300">£450</div>
                    <div className="text-white/70 font-light text-lg">Single Session</div>
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <p className="text-white/50 text-sm">Perfect for first-time patients</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/8 backdrop-blur-sm border-white/20 hover:bg-white/12 transition-all duration-300 group relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-white/90 to-white/70 text-black px-4 py-1 rounded-full text-xs font-medium">
                      BEST VALUE
                    </div>
                  </div>
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl font-light text-white mb-3 group-hover:scale-105 transition-transform duration-300">£1,200</div>
                    <div className="text-white/70 font-light text-lg">3-Session Package</div>
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <p className="text-green-400 text-sm font-medium">Save £150</p>
                      <p className="text-white/50 text-sm">Optimal results guaranteed</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/8 transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl font-light text-white mb-3 group-hover:scale-105 transition-transform duration-300">6-9 Months</div>
                    <div className="text-white/70 font-light text-lg">Result Duration</div>
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <p className="text-white/50 text-sm">Long-lasting regeneration</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>


        {/* FAQ Section - Apple Style */}
        <section className="bg-gradient-to-b from-[#0A0A0A] to-black py-[66px]">
          <div className="page-container">
            <motion.div initial={{
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
          }} className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
                Everything you need to know about polynucleotide DNA therapy
              </p>
            </motion.div>
            
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-4">
                {leftColumnFaqs.map((faq, index) => <FAQItem key={`left-${index}`} question={faq.question} answer={faq.answer} index={index} />)}
              </div>
              
              {/* Right Column */}
              <div className="space-y-4">
                {rightColumnFaqs.map((faq, index) => <FAQItem key={`right-${index}`} question={faq.question} answer={faq.answer} index={index + 5} />)}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section - Apple Style */}
        <section className="bg-black py-[64px]">
          <div className="page-container">
            <motion.div className="text-center max-w-4xl mx-auto" initial={{
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
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-8 tracking-tight">
                Transform with DNA Science
              </h2>
              <p className="text-xl text-white/70 font-light mb-12 max-w-2xl mx-auto">
                Experience the future of regenerative medicine. Our aesthetics is invisible art - 
                transformation that speaks without saying a word.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="bg-white/95 backdrop-blur-sm text-black hover:bg-white rounded-full px-12 py-5 inline-flex items-center justify-center text-xl font-light transition-all duration-300 border border-white/20 hover:scale-[1.02]">
                  Book Consultation
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Location & Contact - Apple Style */}
        <section className="py-32 bg-gradient-to-b from-black to-[#0A0A0A]">
          <div className="page-container">
            <div className="max-w-6xl mx-auto">
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
                  Visit Our Harley Street Clinic
                </h2>
              </motion.div>
              
              <motion.div className="grid lg:grid-cols-2 gap-16 items-center" initial={{
              opacity: 0,
              y: 40
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }} viewport={{
              once: true
            }}>
                <div className="space-y-8">
                  <div className="flex items-center gap-4 text-white/80">
                    <MapPin className="h-6 w-6 text-white/70" />
                    <div>
                      <p className="font-light text-lg">10 Harley Street</p>
                      <p className="font-light">London W1G 9PF</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-white/80">
                    <Phone className="h-6 w-6 text-white/70" />
                    <p className="font-light text-lg">0333 0551 503</p>
                  </div>
                  
                  <div className="flex items-center gap-4 text-white/80">
                    <Mail className="h-6 w-6 text-white/70" />
                    <p className="font-light text-lg">info@cosmedocs.com</p>
                  </div>
                  
                  <div className="flex items-center gap-4 text-white/80">
                    <Calendar className="h-6 w-6 text-white/70" />
                    <div>
                      <p className="font-light text-lg">Monday - Friday: 9am - 6pm</p>
                      <p className="font-light">Saturday: 9am - 5pm</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-light text-white mb-6">Expert Care</h3>
                  <p className="text-white/80 font-light leading-relaxed mb-6">
                    Our experienced practitioners combine medical expertise with artistic vision to deliver 
                    natural, transformative results using the latest in regenerative DNA therapy.
                  </p>
                  <div className="flex items-center gap-4 text-white/80">
                    <Award className="h-6 w-6 text-white/70" />
                    <p className="font-light">Harley Street Excellence</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true">
          <h2>Polynucleotide Treatment London Birmingham Manchester Cardiff DNA Therapy</h2>
          <p>
            Polynucleotide treatment London regenerative medicine skin rejuvenation DNA therapy anti-aging 
            collagen stimulation hair restoration Harley Street aesthetic clinic natural skin boosters 
            under eye treatment fine lines wrinkles cellular repair salmon DNA fragments marine collagen 
            professional aesthetic physicians Birmingham Manchester Cardiff cosmetic medicine invisible 
            art bold natural always your way polynucleotides skin health restoration facial rejuvenation 
            non-surgical aesthetic treatments advanced injectable procedures Cosmedocs London clinic.
          </p>
          <p>
            Advanced polynucleotide DNA therapy utilizes natural biocompatible fragments extracted from 
            salmon trout sperm promote cellular regeneration enhance collagen elastin production improve 
            skin texture firmness hydration reduce fine lines wrinkles target hair loss androgenic alopecia 
            stimulate follicle growth scalp health under eye rejuvenation dark circles puffiness skin 
            texture improvement acne scarring hyperpigmentation uneven tone professional medical grade 
            treatments aesthetic medicine regenerative therapy.
          </p>
          <p>
            Polynucleotide treatment pricing single session £450 three session package £1200 savings £150 
            optimal results minimum three treatments spaced three weeks apart full effects visible six nine 
            months natural collagen elastin production combines beautifully microneedling PRP Profhilo 
            botox dermal fillers enhanced aesthetic outcomes professional consultation Harley Street London 
            Birmingham Manchester Cardiff aesthetic clinics experienced physicians invisible art philosophy 
            bold natural always your way Cosmedocs.
          </p>
        </div>

        <PopularTreatments title="Related Regenerative Treatments" className="bg-black" />
      </div>
    </>;
};

// Regenerative Science Card Component
const RegenerativeScienceCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="w-full">
        <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer text-left">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-light text-white">How DNA Therapy Works</h4>
              {isOpen ? <ChevronUp className="h-5 w-5 text-white/70 flex-shrink-0" /> : <ChevronDown className="h-5 w-5 text-white/70 flex-shrink-0" />}
            </div>
          </CardContent>
        </Card>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="px-6 pb-6">
          <p className="text-white/80 leading-relaxed font-light">
            Polynucleotides work by providing biocompatible DNA building blocks that stimulate your skin's 
            natural repair mechanisms. They boost cellular regeneration, enhance collagen synthesis, and 
            improve tissue hydration, resulting in healthier, more youthful-looking skin and stronger hair growth.
          </p>
        </div>
      </CollapsibleContent>
    </Collapsible>;
};

// FAQ Item Component
const FAQItem = ({
  question,
  answer,
  index
}: {
  question: string;
  answer: string;
  index: number;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} transition={{
    delay: index * 0.05,
    duration: 0.6,
    ease: [0.25, 0.46, 0.45, 0.94]
  }} viewport={{
    once: true
  }}>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="w-full">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-left font-light text-white text-lg">{question}</h3>
                {isOpen ? <ChevronUp className="h-5 w-5 text-white/70 flex-shrink-0 ml-4" /> : <ChevronDown className="h-5 w-5 text-white/70 flex-shrink-0 ml-4" />}
              </div>
            </CardContent>
          </Card>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="px-6 pb-6">
            <p className="text-white/80 leading-relaxed font-light">{answer}</p>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </motion.div>;
};
export default PolynucleotideTreatment;