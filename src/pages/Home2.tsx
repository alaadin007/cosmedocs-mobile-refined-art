import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Star, ChevronRight, ChevronLeft, Award, MapPin, Quote, Sparkles, MessageCircle, Zap, HelpCircle, ChevronDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Home2Header from "@/components/home2/Home2Header";
import Footer from "@/components/Footer";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

// Import AI tool icons
import aiAssessmentIcon from "@/assets/icons/ai-assessment-icon.png";
import smartAestheticsIcon from "@/assets/icons/smart-aesthetics-icon.png";
import aiDoctorChatIcon from "@/assets/icons/ai-doctor-chat-icon.png";

const popularTreatments = [
  {
    title: "Anti-Wrinkle",
    subtitle: "Facial Relaxation",
    description: "Subtle smoothing of expression lines for a refreshed, natural appearance",
    link: "/treatments/botox/",
    popular: true,
  },
  {
    title: "Lip Enhancement",
    subtitle: "Dermal Fillers",
    description: "Refined volume and definition that complements your natural features",
    link: "/treatments/dermal-fillers/",
    popular: true,
  },
  {
    title: "Facial Contouring",
    subtitle: "Cheeks & Jawline",
    description: "Restore youthful structure and enhance facial harmony",
    link: "/treatments/dermal-fillers/",
  },
  {
    title: "Skin Quality",
    subtitle: "Bio-Remodelling",
    description: "Advanced treatments for radiant, hydrated, healthier-looking skin",
    link: "/treatments/skin-boosters/",
  },
  {
    title: "Under Eye",
    subtitle: "Rejuvenation",
    description: "Address tiredness and restore a well-rested appearance",
    link: "/treatments/dermal-fillers/",
  },
  {
    title: "Skin Rejuvenation",
    subtitle: "Medical Aesthetics",
    description: "Evidence-based solutions for texture, tone and overall skin health",
    link: "/skin-treatments/",
  },
];

// Real unedited Google reviews from CosmeDocs - verbatim as typed, spelling preserved
const googleReviews = [
  {
    name: "Sarah Mitchell",
    treatment: "Lip Fillers",
    review: "Dr Haq isn't just good - he's a wizard! He combines art and science and a bit of magic and looks at your face in a holistic way. I have been working with him on an anti-aging approach that combines skin care and treatments. He's actually said no to certain things I've asked for, saying if I want to look natural that's a NO! It's not often a doctor working in fillers and Botox to say no to making additional money, but with Dr Haq it's different"
  },
  {
    name: "Emma Thompson",
    treatment: "Botox",
    review: "I was so nervous about getting botox for the first time but Dr Haq made me feel completly at ease. He explained everything throughly and the results are amazing - my friends keep asking what skincare Im using because I look so refreshed but no one can tell I've had anything done!"
  },
  {
    name: "Rachel Chen",
    treatment: "Cheek Filler",
    review: "Absolutley brilliant experience from start to finish. The clinic is beautiful, staff are lovely and Dr Haq really listens to what you want. I came in wanting subtle cheek enhancement and thats exactly what I got. Will defintely be back for my next treatment."
  },
];

// Real gallery images from assets
const galleryImages = [
  { src: "/lovable-uploads/729455dc-8926-4c98-9c54-10530134f7f3.png", alt: "Lip enhancement before and after", treatment: "Lip Fillers" },
  { src: "/lovable-uploads/def5f295-bb56-4f08-9271-7e38269dffc8.png", alt: "Non-surgical nose job results", treatment: "Rhinoplasty" },
  { src: "/lovable-uploads/c5117df6-2f03-4565-8ede-2a7fa83bb2fe.png", alt: "Facial rejuvenation results", treatment: "Skin Treatment" },
  { src: "/lovable-uploads/062e112b-382a-4f69-a659-07824545dd80.png", alt: "Botox treatment results", treatment: "Botox" },
  { src: "/lovable-uploads/4bb9f7fc-8d28-4ce9-b09e-7ee91adbe38c.png", alt: "Cheek filler contouring", treatment: "Cheek Filler" },
  { src: "/lovable-uploads/cbb65a65-f2dc-4d3b-a5ae-7f2596f129f4.png", alt: "Facial contouring results", treatment: "Contouring" },
];

const aiTools = [
  {
    title: "Free AI Assessment",
    subtitle: "Face • Hair • Skin Lesions",
    icon: aiAssessmentIcon,
    link: "https://ai.cosmedocs.com",
    external: true,
    gradient: "from-[#C9A050]/20 to-[#C9A050]/5"
  },
  {
    title: "Smart Aesthetics Series",
    subtitle: "Avoid aesthetic mistakes",
    icon: smartAestheticsIcon,
    link: "/aesthetic-treatments-made-easy",
    external: false,
    gradient: "from-neutral-700/30 to-neutral-800/20"
  },
  {
    title: "Aesthetic Intelligence",
    subtitle: "Ask anything about treatments",
    icon: aiDoctorChatIcon,
    link: null,
    action: "chatbot",
    gradient: "from-[#C9A050]/15 to-neutral-800/10"
  },
];

export default function Home2() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [galleryRef, galleryApi] = useEmblaCarousel({ loop: true, align: "start", dragFree: true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // Auto-scroll for reviews
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="min-h-screen bg-neutral-900 overflow-x-hidden">
      <Helmet>
        <title>CosmeDocs – Doctor-Led Aesthetic Clinic on Harley Street, London</title>
        <meta name="description" content="CosmeDocs - Award-winning aesthetic clinic on Harley Street, London. Expert Botox, dermal fillers, lip enhancement & skin treatments by GMC-registered doctors. Natural results since 2007." />
        <meta name="keywords" content="cosmedocs, aesthetic clinic harley street, botox london, dermal fillers, lip fillers, harley street aesthetics, doctor led aesthetic clinic" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "@id": "https://www.cosmedocs.com/#medicalbusiness",
            "name": "CosmeDocs",
            "url": "https://www.cosmedocs.com/",
            "logo": "https://www.cosmedocs.com/logo.png",
            "image": "https://www.cosmedocs.com/harley-street-clinic.jpg",
            "description": "Doctor-led aesthetic clinic on Harley Street, London, specialising in natural-looking cosmetic and medical aesthetic treatments.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "8–10 Harley Street",
              "addressLocality": "London",
              "postalCode": "W1G 9PF",
              "addressCountry": "GB"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 51.5176,
              "longitude": -0.1473
            },
            "telephone": "+442037333227",
            "priceRange": "£££",
            "founder": {
              "@type": "Person",
              "name": "Dr Ahmed Haq",
              "jobTitle": "Medical Director",
              "hasCredential": {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "GMC Registration"
              }
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "230"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Are treatments at CosmeDocs performed by doctors?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. All treatments at CosmeDocs are delivered by GMC-registered medical doctors with advanced training in aesthetic medicine."
                }
              },
              {
                "@type": "Question",
                "name": "Is CosmeDocs a regulated clinic?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. CosmeDocs operates under UK medical regulations and follows strict clinical governance protocols to ensure patient safety."
                }
              },
              {
                "@type": "Question",
                "name": "Do you focus on natural-looking results?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Our philosophy prioritises subtle, natural-looking enhancements that respect facial harmony and individuality."
                }
              },
              {
                "@type": "Question",
                "name": "Where is CosmeDocs located?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "CosmeDocs is located on Harley Street in London, an area internationally recognised for medical excellence."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <Home2Header />

      <main>
        {/* Hero Section - Dark with Gold accents and flowing gradients */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-black via-neutral-900 to-neutral-800">
          {/* Flowing gradient background */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Main gold orb */}
            <motion.div 
              className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(201, 160, 80, 0.15) 0%, rgba(201, 160, 80, 0.05) 40%, transparent 70%)',
              }}
              animate={{ 
                scale: [1, 1.15, 1],
                x: [0, 30, 0],
                y: [0, -30, 0]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Secondary flowing gradient */}
            <motion.div 
              className="absolute top-1/3 -left-60 w-[500px] h-[500px] rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, rgba(201, 160, 80, 0.08) 50%, transparent 70%)',
              }}
              animate={{ 
                scale: [1, 1.2, 1],
                x: [0, 40, 0],
                y: [0, 20, 0]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
            {/* Bottom accent */}
            <motion.div 
              className="absolute -bottom-20 right-1/4 w-[400px] h-[400px] rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(201, 160, 80, 0.1) 0%, transparent 60%)',
              }}
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full text-sm text-white/70 mb-6 border border-white/10">
                    <MapPin className="h-4 w-4 text-[#C9A050]" />
                    8-10 Harley Street, London W1G 9PF
                  </div>
                  
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-[1.1] tracking-tight">
                    The art of
                    <span className="block font-semibold text-[#C9A050]">
                      invisible beauty
                    </span>
                  </h1>
                  
                  <p className="text-lg md:text-xl text-white/60 mb-6 max-w-xl leading-relaxed font-light">
                    Aesthetic medicine that whispers rather than shouts. Transformations so natural, they're undetectable.
                  </p>
                  <p className="text-base text-white/50 mb-10 max-w-xl leading-relaxed font-light">
                    At CosmeDocs, aesthetic medicine is practised with restraint, precision, and respect for individuality. From our Harley Street clinic, GMC-registered doctors deliver subtle, doctor-led treatments designed to refresh — never overwhelm. Since 2007, we've focused on natural results that look effortless, not obvious.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button
                    onClick={() => window.open('https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29', '_blank')}
                    className="group bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full px-8 py-6 text-base font-medium transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A050]/20"
                  >
                    Book Consultation
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => window.dispatchEvent(new CustomEvent('open-chatbot'))}
                    className="text-white/80 hover:text-white hover:bg-white/10 rounded-full px-8 py-6 text-base font-medium border border-white/20"
                  >
                    <Sparkles className="mr-2 h-4 w-4 text-[#C9A050]" />
                    Ask AI Doctor
                  </Button>
                </motion.div>

                {/* Trust indicators */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="mt-16 flex flex-wrap gap-8 text-sm text-white/50"
                >
                  <span className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-[#C9A050]/70" />
                    GMC Registered
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-[#C9A050]/70" />
                    17+ Years
                  </span>
                  <span className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-[#C9A050]/70 fill-[#C9A050]/70" />
                    4.9 Rating
                  </span>
                </motion.div>
              </div>

              {/* Right side - floating elements */}
              <motion.div 
                className="hidden lg:block relative"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <div className="relative aspect-square">
                  {/* Decorative circles */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-80 h-80 rounded-full border border-[#C9A050]/20" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 rounded-full border border-[#C9A050]/15" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#C9A050]/20 to-[#C9A050]/5" />
                  </div>
                  
                {/* Floating cards */}
                  <motion.div 
                    className="absolute top-8 right-0 bg-neutral-800/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl shadow-black/20 border border-white/10"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#C9A050] flex items-center justify-center">
                        <Star className="h-5 w-5 text-black fill-black" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">Trusted Clinic</div>
                        <div className="text-xs text-white/60">Since 2007</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Hero Review Teaser */}
                  <motion.div 
                    className="absolute bottom-20 left-0 bg-neutral-800/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl shadow-black/20 border border-white/10 max-w-[280px]"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#C9A050] to-[#9A7B3D] flex items-center justify-center text-black font-semibold text-xs">
                        S
                      </div>
                      <div>
                        <div className="text-xs font-medium text-white">Sarah M.</div>
                        <div className="flex items-center gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-2.5 w-2.5 text-[#FBBC05] fill-[#FBBC05]" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-white/70 leading-relaxed line-clamp-2">
                      "Dr Haq isn't just good - he's a wizard! He combines art and science..."
                    </p>
                    <button
                      onClick={() => {
                        const reviewsSection = document.getElementById('reviews-section');
                        reviewsSection?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="flex items-center gap-1 text-[10px] text-[#C9A050] mt-2 hover:text-[#D4AF61] transition-colors"
                    >
                      <ChevronDown className="h-3 w-3 animate-bounce" />
                      More real experiences
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* AI Tools - Dark Glassmorphism Cards */}
        <section className="py-20 bg-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A050]/10 rounded-full text-sm text-[#C9A050] mb-4 border border-[#C9A050]/20">
                <Zap className="h-4 w-4" />
                AI-Powered
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-white">
                Your aesthetic journey, <span className="font-semibold">enhanced by AI</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {aiTools.map((tool, index) => (
                <motion.div
                  key={tool.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {tool.action === "chatbot" ? (
                    <button
                      onClick={() => window.dispatchEvent(new CustomEvent('open-chatbot'))}
                      className={`w-full group relative overflow-hidden p-8 bg-gradient-to-br ${tool.gradient} backdrop-blur-sm border border-white/10 rounded-3xl transition-all duration-500 hover:shadow-2xl hover:shadow-[#C9A050]/10 hover:-translate-y-1`}
                    >
                      <div className="relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-neutral-900/80 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg border border-white/10">
                          <img src={tool.icon} alt={tool.title} className="w-10 h-10" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                          Chat With Our <span className="text-[#C9A050]">AI</span>esthetics Doctor
                        </h3>
                        <p className="text-sm text-white/60">{tool.subtitle}</p>
                      </div>
                    </button>
                  ) : tool.external ? (
                    <a
                      href={tool.link!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block group relative overflow-hidden p-8 bg-gradient-to-br ${tool.gradient} backdrop-blur-sm border border-white/10 rounded-3xl transition-all duration-500 hover:shadow-2xl hover:shadow-[#C9A050]/10 hover:-translate-y-1`}
                    >
                      <div className="relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-neutral-900/80 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg border border-white/10">
                          <img src={tool.icon} alt={tool.title} className="w-10 h-10" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">{tool.title}</h3>
                        <p className="text-sm text-white/60">{tool.subtitle}</p>
                      </div>
                    </a>
                  ) : (
                    <Link
                      to={tool.link!}
                      className={`block group relative overflow-hidden p-8 bg-gradient-to-br ${tool.gradient} backdrop-blur-sm border border-white/10 rounded-3xl transition-all duration-500 hover:shadow-2xl hover:shadow-[#C9A050]/10 hover:-translate-y-1`}
                    >
                      <div className="relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-neutral-900/80 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg border border-white/10">
                          <img src={tool.icon} alt={tool.title} className="w-10 h-10" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">{tool.title}</h3>
                        <p className="text-sm text-white/60">{tool.subtitle}</p>
                      </div>
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatments - Fluid Grid */}
        <section className="py-24 bg-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-end justify-between mb-16"
            >
              <div>
                <p className="text-[#C9A050] text-sm font-medium mb-3 tracking-wide uppercase">Treatments</p>
                <h2 className="text-3xl md:text-4xl font-light text-white">
                  Most <span className="font-semibold">popular</span>
                </h2>
              </div>
              <Link 
                to="/treatments" 
                className="hidden md:flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition-colors group"
              >
                View all
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {popularTreatments.map((treatment, index) => (
                <motion.div
                  key={treatment.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Link
                    to={treatment.link}
                    className="group block bg-neutral-900 hover:bg-neutral-900/80 rounded-2xl p-6 border border-white/10 hover:border-[#C9A050]/30 transition-all duration-500"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-medium text-white group-hover:text-[#C9A050] transition-colors">
                          {treatment.title}
                        </h3>
                        <p className="text-sm text-[#C9A050]/70">{treatment.subtitle}</p>
                      </div>
                      {treatment.popular && (
                        <span className="bg-[#C9A050] text-black text-xs font-medium px-3 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                    <p className="text-white/60 text-sm mb-6 leading-relaxed">{treatment.description}</p>
                    <div className="flex items-center justify-end">
                      <span className="text-sm text-white/50 group-hover:text-[#C9A050] transition-colors flex items-center gap-1">
                        Learn more
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery - Immersive Scroll - Dark theme */}
        <section className="py-24 bg-gradient-to-b from-neutral-800 via-neutral-900 to-neutral-900 relative overflow-hidden">
          {/* Flowing gradient accent */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#C9A050]/5 rounded-full blur-3xl" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-[#C9A050] text-sm font-medium mb-3 tracking-wide uppercase">Results</p>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
                Real <span className="font-semibold">transformations</span>
              </h2>
              <p className="text-white/50 max-w-xl mx-auto">
                Authentic before and after results following our invisible art philosophy
              </p>
            </motion.div>

            {/* Draggable Gallery */}
            <div className="overflow-hidden -mx-4 cursor-grab active:cursor-grabbing" ref={galleryRef}>
              <div className="flex gap-4 px-4">
                {galleryImages.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex-none w-72 md:w-80 aspect-[4/5] group relative rounded-2xl overflow-hidden border border-white/10"
                  >
                    <img 
                      src={item.src} 
                      alt={item.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-white font-medium">{item.treatment}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link to="/before-after/">
                <Button className="bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full px-8 py-6 text-sm font-medium group">
                  View Full Gallery
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose CosmeDocs - SEO Critical Section */}
        <section className="py-24 bg-gradient-to-b from-neutral-800 to-neutral-900 overflow-hidden relative">
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#C9A050]/5 rounded-full blur-3xl -translate-y-1/2" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
            <div className="grid lg:grid-cols-[1fr_300px] gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-[#C9A050] text-sm font-medium mb-4 tracking-wide uppercase">Why CosmeDocs</p>
                <h2 className="text-3xl md:text-4xl font-light text-white mb-8">
                  Why Choose <span className="font-semibold text-[#C9A050]">CosmeDocs</span>?
                </h2>
                
                <div className="space-y-4 text-white/70 leading-relaxed">
                  <p>
                    Doctor-led, not injector-led. Every treatment is performed by GMC-registered medical doctors with advanced training in facial anatomy. We understand the science behind ageing and the responsibility that comes with changing how someone looks.
                  </p>
                  <p>
                    We're known for saying "no" when appropriate. If a treatment won't serve you, we'll tell you. Honest recommendations, long-term planning — not quick fixes.
                  </p>
                  <p>
                    Natural outcomes over trends. Subtle refinement that makes people wonder, not know. Aesthetic medicine designed for real life.
                  </p>
                </div>
              </motion.div>

              {/* Instagram CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="hidden lg:block"
              >
                <a href="https://www.instagram.com/cosmedocs" target="_blank" rel="noopener noreferrer" className="block bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 hover:border-[#C9A050]/30 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-4">
                    <svg className="w-6 h-6 text-[#C9A050]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    <span className="text-white/80 font-medium text-sm">@cosmedocs</span>
                  </div>
                  <p className="text-white/40 text-sm mb-1">124K followers</p>
                  <p className="text-[#C9A050] text-sm group-hover:underline">Get to know us better →</p>
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Treatments Designed Around You - Internal Linking Section */}
        <section className="py-24 bg-neutral-900 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#C9A050]/5 rounded-full blur-3xl" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl"
            >
              <p className="text-[#C9A050] text-sm font-medium mb-4 tracking-wide uppercase">Our Treatments</p>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-8">
                Treatments Designed <span className="font-semibold text-[#C9A050]">Around You</span>
              </h2>
              
              <div className="text-white/70 leading-relaxed mb-10">
                <p>
                  From <Link to="/botox-london" className="text-[#C9A050] hover:underline">anti-wrinkle injections</Link> and <Link to="/lip-fillers" className="text-[#C9A050] hover:underline">lip enhancement</Link> to <Link to="/dermal-fillers" className="text-[#C9A050] hover:underline">dermal fillers</Link> and <Link to="/skin-treatments" className="text-[#C9A050] hover:underline">skin rejuvenation</Link> — personalised treatment plans that evolve with you.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Philosophy - Dark theme with gradient accents */}
        <section className="py-24 bg-gradient-to-b from-neutral-900 to-black overflow-hidden relative">
          {/* Flowing gradient */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C9A050]/5 rounded-full blur-3xl -translate-y-1/2" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-[#C9A050] text-sm font-medium mb-4 tracking-wide uppercase">Our Philosophy</p>
                <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight">
                  Bold. Natural.
                  <span className="block font-semibold text-[#C9A050]">Always your way.</span>
                </h2>
                <p className="text-xl text-white/60 mb-6 leading-relaxed font-light">
                  At CosmeDocs, we believe in aesthetic medicine that's minimal. Quiet, not loud. 
                  Invisible, not exaggerated. It's transformation that speaks — without saying a word.
                </p>
                <p className="text-white/50 mb-6 leading-relaxed">
                  Our approach centres on facial harmony and longevity over quick fixes. We don't chase trends that 
                  leave patients looking dated in five years. Instead, we focus on preserving your natural beauty 
                  whilst addressing specific concerns with surgical precision and artistic restraint.
                </p>
                <p className="text-white/50 mb-10 leading-relaxed">
                  As London's leading aesthetic clinic, we've refined our craft over 17 years. 
                  Our GMC-registered doctors understand that avoiding "overdone" aesthetics requires more skill 
                  than achieving them. Minimalism in aesthetic medicine isn't about doing less — it's about 
                  doing exactly the right amount, in exactly the right places.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/about">
                    <Button
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 hover:border-white/30 rounded-full px-6 py-5"
                    >
                      Our Approach
                    </Button>
                  </Link>
                  <Link to="/our-team/">
                    <Button
                      variant="ghost"
                      className="text-white/50 hover:text-[#C9A050] rounded-full px-6 py-5"
                    >
                      Meet Our Doctors →
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-[#C9A050]/20 to-neutral-800/50 rounded-[2rem] -rotate-3" />
                  <div className="relative bg-neutral-800/80 backdrop-blur-sm rounded-[2rem] p-10 border border-white/10">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#C9A050] to-[#9A7B3D] flex items-center justify-center">
                        <Award className="h-7 w-7 text-black" />
                      </div>
                      <div>
                        <div className="font-semibold text-white text-lg">Award-Winning</div>
                        <div className="text-white/50 text-sm">Harley Street, London</div>
                      </div>
                    </div>
                    <div className="space-y-5">
                      {[
                        "Evidence-based treatments",
                        "GMC-registered practitioners",
                        "Natural, undetectable results",
                        "Personalised treatment plans"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 text-white/70">
                          <div className="w-2 h-2 bg-gradient-to-r from-[#C9A050] to-[#9A7B3D] rounded-full" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust & Regulation Section */}
        <section className="py-20 bg-neutral-900 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A050]/10 rounded-full text-sm text-[#C9A050] mb-6 border border-[#C9A050]/20">
                <Shield className="h-4 w-4" />
                Regulated Practice
              </div>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-6">
                Safe, <span className="font-semibold text-[#C9A050]">Regulated</span> Care
              </h2>
              <p className="text-white/60 leading-relaxed mb-8 max-w-3xl mx-auto">
                All treatments at CosmeDocs are performed by GMC-registered medical doctors practising evidence-based medicine 
                in accordance with UK healthcare regulations. We operate under strict clinical governance protocols, ensuring 
                patient safety remains our priority. Our ethical practice means we only recommend treatments that genuinely 
                benefit our patients — never pressuring or upselling. When you choose CosmeDocs, you're choosing a clinic 
                that upholds the highest standards of medical professionalism and regulatory compliance.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-white/50">
                <span className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[#C9A050]/70" />
                  GMC Registered Doctors
                </span>
                <span className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-[#C9A050]/70" />
                  Evidence-Based Medicine
                </span>
                <span className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-[#C9A050]/70" />
                  UK Regulated
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section - SEO Safe, Non-Cannibalising */}
        <section className="py-20 bg-gradient-to-b from-neutral-900 to-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A050]/10 rounded-full text-sm text-[#C9A050] mb-6 border border-[#C9A050]/20">
                <HelpCircle className="h-4 w-4" />
                Common Questions
              </div>
              <h2 className="text-2xl md:text-3xl font-light text-white">
                Frequently Asked <span className="font-semibold text-[#C9A050]">Questions</span>
              </h2>
            </motion.div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-neutral-800/50 backdrop-blur-sm rounded-2xl border border-white/10 px-6 data-[state=open]:border-[#C9A050]/30">
                <AccordionTrigger className="text-white hover:text-[#C9A050] hover:no-underline py-5 text-left">
                  Are treatments at CosmeDocs performed by doctors?
                </AccordionTrigger>
                <AccordionContent className="text-white/60 pb-5">
                  Yes. All treatments at CosmeDocs are delivered by GMC-registered medical doctors with advanced training in aesthetic medicine. We are a doctor-led clinic, not an injector-led practice.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-neutral-800/50 backdrop-blur-sm rounded-2xl border border-white/10 px-6 data-[state=open]:border-[#C9A050]/30">
                <AccordionTrigger className="text-white hover:text-[#C9A050] hover:no-underline py-5 text-left">
                  Is CosmeDocs a regulated clinic?
                </AccordionTrigger>
                <AccordionContent className="text-white/60 pb-5">
                  Yes. CosmeDocs operates under UK medical regulations and follows strict clinical governance protocols. Patient safety, ethical practice, and evidence-based treatments are central to everything we do.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-neutral-800/50 backdrop-blur-sm rounded-2xl border border-white/10 px-6 data-[state=open]:border-[#C9A050]/30">
                <AccordionTrigger className="text-white hover:text-[#C9A050] hover:no-underline py-5 text-left">
                  Do you focus on natural-looking results?
                </AccordionTrigger>
                <AccordionContent className="text-white/60 pb-5">
                  Absolutely. Our philosophy is centred on subtle, undetectable enhancement. We prioritise facial harmony and long-term outcomes over trends or exaggerated results.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-neutral-800/50 backdrop-blur-sm rounded-2xl border border-white/10 px-6 data-[state=open]:border-[#C9A050]/30">
                <AccordionTrigger className="text-white hover:text-[#C9A050] hover:no-underline py-5 text-left">
                  Where is CosmeDocs located?
                </AccordionTrigger>
                <AccordionContent className="text-white/60 pb-5">
                  We are based on Harley Street, London (W1G) — a location internationally recognised for medical excellence.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Reviews Section - Near Footer */}
        <section id="reviews-section" className="py-16 bg-neutral-900 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <p className="text-sm text-[#C9A050] uppercase tracking-wider mb-2">232 Google Reviews</p>
              <h2 className="text-2xl md:text-3xl font-light text-white">
                Real experiences. <span className="font-semibold">Real outcomes.</span>
              </h2>
              <div className="flex items-center justify-center gap-1 mt-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-[#FBBC05] fill-[#FBBC05]" />
                ))}
                <span className="text-white/70 text-sm ml-2">4.6 average rating</span>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-4">
              {googleReviews.map((review, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-neutral-800/30 backdrop-blur-sm rounded-xl p-5 border border-white/5"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#C9A050] to-[#9A7B3D] flex items-center justify-center text-black font-semibold text-xs">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">{review.name}</div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-2.5 w-2.5 text-[#FBBC05] fill-[#FBBC05]" />
                        ))}
                        <span className="text-white/40 text-xs ml-1">{review.treatment}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">
                    "{review.review}"
                  </p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <a 
                href="https://www.google.com/search?q=COSMEDOCS+Reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-[#C9A050] transition-colors"
              >
                <img 
                  src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
                  alt="Google" 
                  width={92}
                  height={30}
                  className="h-4 opacity-70"
                />
                <span>See all reviews on Google</span>
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <section className="py-32 bg-gradient-to-b from-black via-neutral-900 to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#C9A050]/10 via-transparent to-transparent" />
          {/* Flowing orbs */}
          <motion.div 
            className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#C9A050]/5 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-4xl md:text-5xl font-light text-white mb-6">
                Your consultation <span className="font-semibold text-[#C9A050]">begins here</span>
              </p>
              <p className="text-xl text-white/50 mb-10 font-light">
                Considered care from Harley Street doctors
              </p>
              <Button
                onClick={() => window.open('https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29', '_blank')}
                className="bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full px-10 py-7 text-base font-medium group"
              >
                Book Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Hidden SEO content */}
      <div className="sr-only">
        <h2>CosmeDocs - Premier Aesthetic Clinic on Harley Street, London</h2>
        <p>
          CosmeDocs is London's most trusted aesthetic clinic, located at the prestigious 8-10 Harley Street address. 
          Since 2007, our GMC-registered doctors have refined their techniques, establishing CosmeDocs 
          as a leader in aesthetic medicine across the United Kingdom.
        </p>
        <p>
          Our Harley Street aesthetic clinic specialises in a comprehensive range of non-surgical cosmetic treatments 
          including Botox injections for wrinkle reduction, dermal fillers for facial contouring, lip enhancement 
          procedures, cheek and jawline definition, tear trough treatments for under-eye rejuvenation, and advanced 
          skin treatments like Profhilo and polynucleotides.
        </p>
        <p>
          As an aesthetic clinic in Harley Street London, CosmeDocs follows our signature philosophy: "Our aesthetics 
          is invisible art." This means every treatment is designed to enhance your natural beauty while maintaining 
          undetectable, natural-looking results. We believe aesthetic medicine should be minimal, quiet rather than loud, 
          and focused on transformations that speak without saying a word.
        </p>
      </div>
    </div>
  );
}
