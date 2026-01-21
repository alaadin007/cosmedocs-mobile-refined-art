import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Star, ChevronRight, ChevronLeft, Award, MapPin, Quote, Sparkles, MessageCircle, Zap } from "lucide-react";
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
    title: "Botox",
    subtitle: "Anti-Wrinkle",
    description: "Smooth forehead lines, frown lines & crow's feet",
    price: "From £195",
    link: "/botox-london",
    popular: true,
  },
  {
    title: "Lip Fillers",
    subtitle: "Enhancement",
    description: "Natural-looking volume & definition",
    price: "From £320",
    link: "/lip-fillers",
    popular: true,
  },
  {
    title: "Cheek Filler",
    subtitle: "Contouring",
    description: "Restore volume & sculpt cheekbones",
    price: "From £380",
    link: "/cheek-filler",
  },
  {
    title: "Jawline Filler",
    subtitle: "Definition",
    description: "Create a sharper, more defined jawline",
    price: "From £450",
    link: "/jawline-filler",
  },
  {
    title: "Profhilo",
    subtitle: "Skin Quality",
    description: "Bio-remodelling for radiant, hydrated skin",
    price: "From £300",
    link: "/profhilo",
  },
  {
    title: "Tear Trough",
    subtitle: "Under Eye",
    description: "Reduce dark circles & hollowing",
    price: "From £450",
    link: "/tear-trough-filler",
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
    title: "Chat With Our AIesthetics Doctor",
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
        <title>CosmeDocs | Aesthetic Clinic Harley Street London | Botox & Fillers</title>
        <meta name="description" content="CosmeDocs - Award-winning aesthetic clinic on Harley Street, London. Expert Botox, dermal fillers, lip enhancement & skin treatments by GMC-registered doctors. Natural results since 2007." />
        <meta name="keywords" content="cosmedocs, aesthetic clinic harley street, botox london, dermal fillers, lip fillers, harley street aesthetics" />
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

                  <motion.div 
                    className="absolute bottom-20 left-0 bg-neutral-800/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl shadow-black/20 border border-white/10"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center border border-[#C9A050]/30">
                        <Award className="h-5 w-5 text-[#C9A050]" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">Award Winning</div>
                        <div className="text-xs text-white/60">Harley Street</div>
                      </div>
                    </div>
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

        {/* Google Reviews - Card Style */}
        <section className="py-20 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 relative overflow-hidden">
          {/* Subtle gradient orb */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C9A050]/5 rounded-full blur-3xl" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-3 mb-4">
                <img 
                  src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
                  alt="Google" 
                  className="h-6"
                />
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < 5 ? 'text-[#FBBC05] fill-[#FBBC05]' : 'text-gray-400'}`} />
                  ))}
                </div>
                <span className="text-white font-semibold">4.6</span>
                <span className="text-white/50">•</span>
                <span className="text-white/50">232 reviews</span>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {googleReviews.map((review, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-neutral-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:border-[#C9A050]/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9A050] to-[#9A7B3D] flex items-center justify-center text-black font-semibold text-sm">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">{review.name}</div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 text-[#FBBC05] fill-[#FBBC05]" />
                        ))}
                        <span className="text-white/40 text-xs ml-1">{review.treatment}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    "{review.review}"
                  </p>
                </motion.div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <a 
                href="https://www.google.com/search?q=COSMEDOCS+Reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-[#C9A050] transition-colors"
              >
                <img 
                  src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
                  alt="Google" 
                  className="h-4"
                />
                <span>See all reviews</span>
                <ChevronRight className="h-4 w-4" />
              </a>
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
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-white">{treatment.price}</span>
                      <ArrowRight className="h-4 w-4 text-white/30 group-hover:text-[#C9A050] transition-all group-hover:translate-x-1" />
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
              <Link to="/before-after-gallery">
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl"
            >
              <p className="text-[#C9A050] text-sm font-medium mb-4 tracking-wide uppercase">Why CosmeDocs</p>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-8">
                Why Choose <span className="font-semibold text-[#C9A050]">CosmeDocs</span>?
              </h2>
              
              <div className="space-y-6 text-white/70 leading-relaxed">
                <p>
                  At CosmeDocs, we operate as a doctor-led aesthetic clinic — not an injector-led one. The distinction matters. 
                  Every consultation, every treatment plan, and every injection is performed by GMC-registered medical doctors 
                  with advanced training in facial anatomy and aesthetic medicine. This isn't simply about credentials; it's about 
                  understanding the science behind ageing, the art of facial harmony, and the responsibility that comes with 
                  changing how someone looks.
                </p>
                
                <p>
                  We're also known for saying "no" when appropriate. If a treatment won't serve you — or worse, could compromise 
                  your natural appearance — we'll tell you. This approach has earned us trust over nearly two decades because 
                  patients know our recommendations are honest, not profit-driven. We believe in long-term aesthetic planning, 
                  not quick fixes that leave you looking overdone.
                </p>
                
                <p>
                  Our philosophy centres on natural outcomes over trends. Whilst social media may celebrate exaggerated lips or 
                  frozen foreheads, we champion subtle refinement — the kind that makes people wonder if you've had work done 
                  rather than know it. It's aesthetic medicine designed for real life, not Instagram filters.
                </p>
              </div>
            </motion.div>
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
              
              <div className="space-y-6 text-white/70 leading-relaxed mb-10">
                <p>
                  Our comprehensive treatment menu spans facial aesthetics, skin quality, hair restoration, and medical aesthetics — 
                  all delivered with a non-surgical focus that prioritises safety and natural results. Rather than offering a 
                  one-size-fits-all solution, we create personalised treatment plans that evolve with you.
                </p>
                
                <p>
                  Whether you're considering <Link to="/botox-london" className="text-[#C9A050] hover:underline">anti-wrinkle injections</Link> to 
                  soften expression lines, <Link to="/lip-fillers" className="text-[#C9A050] hover:underline">lip enhancement</Link> for 
                  subtle volume, or <Link to="/dermal-fillers" className="text-[#C9A050] hover:underline">dermal fillers</Link> to restore 
                  youthful contours, our doctors will guide you toward treatments that complement your unique facial structure. 
                  For those seeking to improve skin texture and radiance, our <Link to="/skin-treatments" className="text-[#C9A050] hover:underline">skin rejuvenation treatments</Link> offer 
                  results that speak for themselves.
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
                  As London's leading aesthetic clinic on Harley Street, we've refined our craft over 17 years. 
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
                  <Link to="/team">
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

        {/* CTA - Dark gradient */}
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
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                Ready to <span className="font-semibold text-[#C9A050]">begin</span>?
              </h2>
              <p className="text-xl text-white/50 mb-10 font-light">
                Book a consultation at our Harley Street clinic
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
