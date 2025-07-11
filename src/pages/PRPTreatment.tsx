import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, Calendar, MapPin, Phone, ChevronDown, ChevronUp, Droplets, Heart, Shield, Star } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import BeforeAfterGrid from "@/components/BeforeAfterGrid";
import TreatmentVideoPlayer from "@/components/TreatmentVideoPlayer";
import { useVideoManagement } from "@/hooks/useVideoManagement";
const PRPTreatment = () => {
  const seoData = generateSEOMetadata("PRP Treatment London | Vampire Facial | Platelet-Rich Plasma | Cosmedocs", "Expert PRP treatments in London's Harley Street. Vampire facial, hair restoration, and skin rejuvenation using your body's natural healing power. Book consultation today.", "/prp-treatment");
  const bookingUrl = "https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29";
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const {
    videos
  } = useVideoManagement("PRP");
  const treatmentSpecs = [{
    icon: Clock,
    title: "Procedure Time",
    value: "30 minutes"
  }, {
    icon: Shield,
    title: "Anaesthetic",
    value: "Local numbing"
  }, {
    icon: Calendar,
    title: "Results",
    value: "2-6 weeks"
  }, {
    icon: Heart,
    title: "Recovery",
    value: "24-48 hours"
  }, {
    icon: Users,
    title: "Back to Work",
    value: "Immediately"
  }, {
    icon: Star,
    title: "Duration",
    value: "18 months"
  }];
  const benefits = ["Promoting new cell growth", "Addressing mild collagen and volume loss", "Enhancing skin complexion", "Minimising fine lines and wrinkles", "Reducing crow's feet and dark under-eye circles", "Helping with initial signs of ageing", "Alleviating rosacea condition", "Stimulating hair follicles for hair density", "Treating acne scarring", "Enhancing skin tone and texture", "Firming and toning skin"];
  const treatmentTypes = [{
    title: "PRP Facial (Vampire Facial)",
    description: "Uses your body's natural healing abilities to restore facial youthfulness and luminosity",
    benefits: ["Increased skin thickness from collagen production", "Enhanced skin colour", "Improved texture and firmness", "Reduced wrinkles", "Increased skin elasticity", "Improved nasolabial folds"]
  }, {
    title: "PRP Hair Treatment",
    description: "Stimulates hair follicles and promotes development of new blood vessels for hair growth",
    benefits: ["Treats thinning hair", "Combats hair loss", "Promotes new hair growth", "Results visible within 3 weeks", "Full potential reached in 3 months", "Results last around 18 months"]
  }, {
    title: "PRP Intimate Area Rejuvenation",
    description: "Non-surgical O-Shot procedure for women's intimate wellness",
    benefits: ["Addresses loss of desire", "Treats sexual dysfunction", "Reduces vaginal dryness", "Helps with painful intimacy", "Treats stress incontinence", "Restores confidence"]
  }];
  const faqs = [{
    question: "What is PRP treatment and how does it work?",
    answer: "PRP (Platelet-Rich Plasma) treatment uses your own blood platelets to stimulate healing and regeneration. Blood is drawn from your arm, processed in a centrifuge to concentrate the platelets, then injected into treatment areas to promote natural healing and tissue regeneration."
  }, {
    question: "How safe is PRP treatment?",
    answer: "PRP treatment has an excellent safety profile since it uses your own blood components, reducing the risk of allergic reactions. You may experience mild soreness and bruising at injection sites, which is normal. We recommend staying well-hydrated and having a light meal before treatment."
  }, {
    question: "How many PRP sessions do I need?",
    answer: "Most patients require 3 sessions for optimal results. For facial treatments, sessions are spaced 4-6 weeks apart. Hair treatments typically need 3 sessions with 4-8 week intervals. Maintenance treatments may be needed every 6-12 months."
  }, {
    question: "Is PRP treatment painful?",
    answer: "PRP treatment is designed to be comfortable. We apply numbing agents to treatment areas to minimize discomfort. While you may feel slight discomfort in sensitive areas, it's generally well-tolerated and much less painful than surgical alternatives."
  }, {
    question: "How long do PRP results last?",
    answer: "Results typically become visible within a few weeks and continue improving for 2-6 months. Effects can last around 18 months for skin treatments and similar duration for hair treatments. Regular maintenance sessions help sustain results."
  }, {
    question: "Can PRP be combined with other treatments?",
    answer: "Yes, PRP works excellently in combination with microneedling, dermal fillers, and chemical peels. These combinations can enhance effectiveness and provide more comprehensive results. Our experts will create a personalized treatment plan during consultation."
  }, {
    question: "Who is a good candidate for PRP treatment?",
    answer: "Most people are suitable candidates for PRP treatment. It's ideal for those seeking non-invasive rejuvenation to address skin laxity, acne scars, fine lines, wrinkles, dark spots, uneven skin tone, hair loss, or intimate wellness concerns."
  }, {
    question: "What should I expect during PRP treatment?",
    answer: "The process involves: 1) Drawing a small amount of blood from your arm, 2) Processing it in a centrifuge to separate platelet-rich plasma, 3) Injecting the PRP into target areas using ultra-fine needles. The entire procedure takes about 30 minutes."
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
          "name": "Cosmedocs - PRP Treatment",
          "description": "Premium PRP and Vampire Facial treatments in London's Harley Street",
          "url": "https://cosmedocs.com/prp-treatment",
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
          "priceRange": "Price on consultation"
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
                  <span className="block text-white/95 font-thin">PRP</span>
                  <span className="block text-white font-light">Treatment</span>
                  <span className="block text-white/85 text-5xl md:text-6xl italic font-extralight mt-2">Vampire Facial</span>
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
                    Let your body heal the skin naturally using your own platelet-rich plasma for facial rejuvenation, hair restoration, and skin regeneration
                  </p>
                  <div className="flex items-center space-x-8 text-xl">
                    <div className="bg-white/15 backdrop-blur-lg rounded-full px-8 py-4 border border-white/20">
                      <span className="text-white font-light">Price on consultation</span>
                    </div>
                    <div className="text-white/80">
                      <span className="font-extralight">by </span> 
                      <span className="font-light">CosmeDocs Experts</span>
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
                    <Droplets className="h-6 w-6" />
                    <span className="font-extralight text-lg">
                      Natural healing power
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Treatment Overview */}
        <section className="bg-gradient-to-b from-black to-[#0A0A0A] py-[85px]">
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
              <h2 className="text-5xl md:text-6xl text-white mb-6 tracking-tight font-bold">
                PRGF / PRP Treatment
              </h2>
              <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
                Plasma Rich in Growth Factors (PRGF) is the most cutting-edge advanced Platelet-Rich Plasma system, 
                using your body's natural healing abilities to regenerate skin, hair, and tissue.
              </p>
            </motion.div>

            {/* Treatment Specifications */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
              {treatmentSpecs.map((spec, index) => <motion.div key={spec.title} className="text-center" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: index * 0.1
            }} viewport={{
              once: true
            }}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <spec.icon className="h-8 w-8 text-white mx-auto mb-4" />
                    <h3 className="text-sm font-light text-white/80 mb-2">{spec.title}</h3>
                    <p className="text-lg font-light text-white">{spec.value}</p>
                  </div>
                </motion.div>)}
            </div>

            {/* About PRP */}
            <motion.div className="max-w-4xl mx-auto text-center" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} viewport={{
            once: true
          }}>
              <Card className="bg-white/5 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-12">
                  <h3 className="text-3xl font-light mb-8">Help Your Body Heal Itself</h3>
                  <p className="text-lg text-white/80 leading-relaxed mb-8">
                    PRP works by using platelets from your own blood for both stimulation and acceleration of tissue regeneration and healing. 
                    This natural process can counter the effects of injury, trauma, or degenerative processes including aging in tendons, 
                    muscles, hair growth, skin, and cartilage.
                  </p>
                  <p className="text-xl text-white/90 font-light">
                    Simply put, PRGF is the most effective way for your body to heal itself naturally - 
                    a procedure commonly adopted by celebrities to heal scars and reverse signs of aging.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Treatment Types */}
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
              <h2 className="text-5xl md:text-6xl text-white mb-6 tracking-tight font-bold">
                Treatment Options
              </h2>
              <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
                Discover how PRP can address your specific concerns with targeted treatment approaches
              </p>
            </motion.div>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {treatmentTypes.map((type, index) => <motion.div key={type.title} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: index * 0.2
            }} viewport={{
              once: true
            }}>
                  <Card className="bg-white/5 backdrop-blur-sm border-white/20 text-white h-full hover:bg-white/10 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-2xl font-light text-white">{type.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-white/80 leading-relaxed">{type.description}</p>
                      <div className="space-y-3">
                        {type.benefits.map((benefit, idx) => <div key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-white/60 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-white/70 text-sm">{benefit}</span>
                          </div>)}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-gradient-to-b from-[#0A0A0A] to-black py-[85px]">
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
              <h2 className="text-5xl md:text-6xl text-white mb-6 tracking-tight font-bold">
                PRP Benefits
              </h2>
              <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
                Comprehensive rejuvenation using your body's natural healing properties
              </p>
            </motion.div>

            <motion.div className="grid md:grid-cols-2 gap-6" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} viewport={{
            once: true
          }}>
              {benefits.map((benefit, index) => <motion.div key={index} className="group relative overflow-hidden" initial={{
              opacity: 0,
              scale: 0.9
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.6,
              delay: index * 0.1
            }} viewport={{
              once: true
            }} whileHover={{
              scale: 1.02
            }}>
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-white/10">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    
                    {/* Content */}
                    <div className="relative z-10 flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/30 to-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Star className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white/90 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                          {benefit}
                        </p>
                      </div>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-2 right-2 w-20 h-20 bg-gradient-to-br from-primary/5 to-transparent rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
                    <div className="absolute bottom-2 left-2 w-8 h-8 bg-gradient-to-br from-white/5 to-transparent rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
                  </div>
                </motion.div>)}
            </motion.div>
          </div>
        </section>

        {/* Video Section */}
        {videos && videos.length > 0 && <section className="bg-gradient-to-b from-black to-[#0A0A0A] py-[85px]">
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
                <h2 className="text-5xl md:text-6xl text-white mb-6 tracking-tight font-bold">
                  PRP in Action
                </h2>
                <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
                  Watch our experts perform PRP treatments and see the process in detail
                </p>
              </motion.div>

              <motion.div className="max-w-4xl mx-auto" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} viewport={{
            once: true
          }}>
                <TreatmentVideoPlayer video={videos[0]} treatmentName="PRP Treatment" showControls={true} className="rounded-2xl overflow-hidden border border-white/20" />
              </motion.div>
            </div>
          </section>}

        {/* Before & After Gallery */}
        <section className="bg-gradient-to-b from-black to-[#0A0A0A] py-[16px]">
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
              <h2 className="text-5xl md:text-6xl text-white mb-6 tracking-tight font-bold">
                Before & After
              </h2>
              <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
                See the transformative results achieved with our PRP treatments
              </p>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} viewport={{
            once: true
          }}>
              <BeforeAfterGrid images={[{
              src: "/lovable-uploads/c1c5edd5-4262-4f61-8d28-74a0e9c48653.png",
              alt: "PRP facial treatment before and after",
              caption: "PRP facial rejuvenation showing improved skin texture and reduced fine lines after 3 sessions"
            }, {
              src: "/lovable-uploads/b4495de4-9009-4381-8105-a36d078fcb76.png",
              alt: "PRP hair treatment results",
              caption: "PRP hair restoration demonstrating increased hair density and thickness after 6 months"
            }, {
              src: "/lovable-uploads/8785b0dd-a50d-4e0a-b691-3254b6c5f925.png",
              alt: "PRP under-eye treatment before and after",
              caption: "Under-eye PRP treatment reducing dark circles and improving skin elasticity"
            }, {
              src: "/lovable-uploads/97c76ea5-245e-43c2-8b89-533f365f4969.png",
              alt: "PRP acne scarring treatment results",
              caption: "PRP therapy for acne scarring showing significant improvement in skin texture and tone"
            }]} initialDisplay={4} loadMoreIncrement={4} />
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-black py-px">
          <div className="page-container py-[75px]">
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
              <h2 className="text-5xl md:text-6xl text-white mb-6 tracking-tight font-bold">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
                Everything you need to know about PRP treatment
              </p>
            </motion.div>

            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {faqs.map((faq, index) => <motion.div key={index} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.6,
                delay: index * 0.1
              }} viewport={{
                once: true
              }}>
                  <Collapsible open={openFaq === index} onOpenChange={() => setOpenFaq(openFaq === index ? null : index)}>
                    <CollapsibleTrigger className="w-full bg-white/5 hover:bg-white/10 border border-white/20 rounded-lg p-6 text-left transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-light text-white pr-4">{faq.question}</h3>
                        {openFaq === index ? <ChevronUp className="h-5 w-5 text-white/60 flex-shrink-0" /> : <ChevronDown className="h-5 w-5 text-white/60 flex-shrink-0" />}
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="bg-white/5 border border-white/20 border-t-0 rounded-b-lg p-6">
                      <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                    </CollapsibleContent>
                  </Collapsible>
                </motion.div>)}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-black to-[#0A0A0A] py-[75px]">
          <div className="page-container">
            <motion.div className="text-center max-w-4xl mx-auto" initial={{
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
              <h2 className="text-5xl md:text-6xl text-white mb-8 tracking-tight font-bold">
                Ready to Begin?
              </h2>
              <p className="text-xl text-white/70 font-light mb-12 max-w-2xl mx-auto">
                Book your consultation with our PRP specialists at Harley Street and discover how your body's natural healing power can transform your skin.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="bg-white/95 backdrop-blur-sm text-black hover:bg-white rounded-full px-12 py-6 inline-flex items-center justify-center text-xl font-light transition-all duration-500 border border-white/20 hover:scale-[1.02] hover:shadow-2xl">
                  Book Consultation
                </a>
                
                <div className="flex items-center justify-center gap-4 text-white/80">
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    <span className="font-light">0333 0551 503</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    <span className="font-light">Harley Street</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>;
};
export default PRPTreatment;