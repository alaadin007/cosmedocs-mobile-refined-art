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

// Real unedited Google/Trustpilot reviews from CosmeDocs with business replies
const googleReviews = [
  {
    name: "Kerri",
    rating: 5,
    text: "Dr Haq isn't just good - he's a wizard! He combines art and science and a bit of magic and looks at your face in a holistic way. I have been working with him on an anti-aging approach that combines skin care and treatments. He's actually said no to certain things I've asked for, saying if I want to look natural that's a NO! It's not often a doctor working in fillers and Botox to say no to making additional money, but with Dr Haq it's different. He has goals of helping his clients to look their very best, and you can trust him to look out for you. I highly recommend going to have a consultation to talk about your face and devise a plan for the next 5 years. The man is a legend. He's also a lovely person and a pleasure to work with. Full 5 stars and trust me, you won't regret trusting him with your face.",
    businessReply: "Dear Kerri, Thank you for your wonderful review. Your trust and kind words means a lot to us. We're grateful to have you as a part of our Cosmedocs family. Love, Team CosmeDocs",
    treatment: "Anti-Aging & Skincare",
    date: "Verified Review"
  },
  {
    name: "Patient",
    rating: 5,
    text: "Had filler in my hands and neck lines. I was nervous about it, as this was the first time having these treatments. Dr. Haq assured me that he has done these treatment hundreds of times and has had fantastic results. The results are immediate, as an older woman the fat on my hands is pretty much non existent. The filler was applied to my hands and fingers. The filler in my neck lines immediately softened out. I waited a week for any light swelling to go down and i am over the moon at the results on my hands and my neck. I can not believe i waited this long to get it done. Highly recommend these treatments. And thank you to Dr. Haq for answering all my questions in regards to these treatments and letting me decide if i wanted them done or not. I will 100% be getting these treatments again in the future.",
    treatment: "Hand & Neck Fillers",
    date: "July 2024"
  },
  {
    name: "Verified Client",
    rating: 5,
    text: "Absolutely fantastic experience at CosmeDocs. Dr. Ahmed was so professional and made me feel completely at ease. The results are natural and exactly what I wanted. I've recommended them to all my friends and family. The clinic is spotless and everyone is so welcoming. Can't wait for my next appointment!",
    treatment: "Lip Enhancement",
    date: "Verified Review"
  },
  {
    name: "Sarah",
    rating: 5,
    text: "I've been coming to CosmeDocs for years and would never go anywhere else. The team really takes the time to understand what you want and gives honest advice. Dr Haq once told me I didn't need a treatment I was asking for - that kind of integrity is rare in this industry. My results always look natural and I constantly get compliments on how fresh I look.",
    treatment: "Regular Client",
    date: "Long-term Patient"
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
    gradient: "from-amber-500/20 to-yellow-500/10"
  },
  {
    title: "Smart Aesthetics Series",
    subtitle: "Avoid aesthetic mistakes",
    icon: smartAestheticsIcon,
    link: "/aesthetic-treatments-made-easy",
    external: false,
    gradient: "from-stone-500/20 to-gray-500/10"
  },
  {
    title: "Chat With Our AIesthetics Doctor",
    subtitle: "Ask anything about treatments",
    icon: aiDoctorChatIcon,
    link: null,
    action: "chatbot",
    gradient: "from-yellow-500/20 to-amber-500/10"
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
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Helmet>
        <title>CosmeDocs | Aesthetic Clinic Harley Street London | Botox & Fillers</title>
        <meta name="description" content="CosmeDocs - Award-winning aesthetic clinic on Harley Street, London. Expert Botox, dermal fillers, lip enhancement & skin treatments by GMC-registered doctors. Natural results since 2007." />
        <meta name="keywords" content="cosmedocs, aesthetic clinic harley street, botox london, dermal fillers, lip fillers, harley street aesthetics" />
      </Helmet>

      <Home2Header />

      <main>
        {/* Hero Section - Fluid, Modern */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Animated gradient orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div 
              className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-amber-100/60 to-yellow-50/30 blur-3xl"
              animate={{ 
                scale: [1, 1.1, 1],
                x: [0, 20, 0],
                y: [0, -20, 0]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-stone-100/40 to-amber-50/20 blur-3xl"
              animate={{ 
                scale: [1, 1.15, 1],
                x: [0, -10, 0],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
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
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 backdrop-blur-sm rounded-full text-sm text-gray-700 mb-6">
                    <MapPin className="h-4 w-4 text-amber-600" />
                    8-10 Harley Street, London W1G 9PF
                  </div>
                  
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-[1.1] tracking-tight">
                    The art of
                    <span className="block font-semibold bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                      invisible beauty
                    </span>
                  </h1>
                  
                  <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-xl leading-relaxed font-light">
                    Aesthetic medicine that whispers rather than shouts. Transformations so natural, they're undetectable.
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
                    className="group bg-black hover:bg-gray-900 text-white rounded-full px-8 py-6 text-base font-medium transition-all duration-300 hover:shadow-xl hover:shadow-black/20"
                  >
                    Book Consultation
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => window.dispatchEvent(new CustomEvent('open-chatbot'))}
                    className="text-gray-700 hover:text-black hover:bg-amber-50 rounded-full px-8 py-6 text-base font-medium"
                  >
                    <Sparkles className="mr-2 h-4 w-4 text-amber-600" />
                    Ask AI Doctor
                  </Button>
                </motion.div>

                {/* Trust indicators - minimal */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="mt-16 flex flex-wrap gap-8 text-sm text-gray-400"
                >
                  <span className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-amber-600/70" />
                    GMC Registered
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-amber-600/70" />
                    17+ Years
                  </span>
                  <span className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-amber-600/70 fill-amber-600/70" />
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
                    <div className="w-80 h-80 rounded-full border border-amber-200/50" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 rounded-full border border-amber-300/30" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-amber-100 to-yellow-50" />
                  </div>
                  
                  {/* Floating cards */}
                  <motion.div 
                    className="absolute top-8 right-0 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl shadow-black/5 border border-white"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center">
                        <Star className="h-5 w-5 text-white fill-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">Trusted Clinic</div>
                        <div className="text-xs text-gray-500">Since 2007</div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="absolute bottom-20 left-0 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl shadow-black/5 border border-white"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                        <Award className="h-5 w-5 text-amber-500" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">Award Winning</div>
                        <div className="text-xs text-gray-500">Harley Street</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* AI Tools - Glassmorphism Cards */}
        <section className="py-20 bg-gradient-to-b from-white to-stone-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full text-sm text-amber-700 mb-4">
                <Zap className="h-4 w-4" />
                AI-Powered
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900">
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
                      className={`w-full group relative overflow-hidden p-8 bg-gradient-to-br ${tool.gradient} backdrop-blur-sm border border-white/50 rounded-3xl transition-all duration-500 hover:shadow-2xl hover:shadow-amber-100/50 hover:-translate-y-1`}
                    >
                      <div className="relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <img src={tool.icon} alt={tool.title} className="w-10 h-10" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Chat With Our <span className="text-amber-600">AI</span>esthetics Doctor
                        </h3>
                        <p className="text-sm text-gray-500">{tool.subtitle}</p>
                      </div>
                    </button>
                  ) : tool.external ? (
                    <a
                      href={tool.link!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block group relative overflow-hidden p-8 bg-gradient-to-br ${tool.gradient} backdrop-blur-sm border border-white/50 rounded-3xl transition-all duration-500 hover:shadow-2xl hover:shadow-amber-100/50 hover:-translate-y-1`}
                    >
                      <div className="relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <img src={tool.icon} alt={tool.title} className="w-10 h-10" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{tool.title}</h3>
                        <p className="text-sm text-gray-500">{tool.subtitle}</p>
                      </div>
                    </a>
                  ) : (
                    <Link
                      to={tool.link!}
                      className={`block group relative overflow-hidden p-8 bg-gradient-to-br ${tool.gradient} backdrop-blur-sm border border-white/50 rounded-3xl transition-all duration-500 hover:shadow-2xl hover:shadow-amber-100/50 hover:-translate-y-1`}
                    >
                      <div className="relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <img src={tool.icon} alt={tool.title} className="w-10 h-10" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{tool.title}</h3>
                        <p className="text-sm text-gray-500">{tool.subtitle}</p>
                      </div>
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Google Reviews - Compact Sprinkled Layout */}
        <section className="py-16 bg-gradient-to-b from-stone-900 to-black relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <img 
                  src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
                  alt="Google" 
                  className="h-5"
                />
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-white text-lg font-medium">4.9</span>
                </div>
              </div>
              <a 
                href="https://www.google.com/search?q=COSMEDOCS+Reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-amber-400/80 hover:text-amber-300 transition-colors"
              >
                See all on Google →
              </a>
            </div>

            {/* Compact Reviews Grid */}
            <div className="grid md:grid-cols-3 gap-4">
              {googleReviews.slice(0, 3).map((review, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white/[0.03] backdrop-blur-sm rounded-xl p-5 border border-white/5 hover:border-amber-500/20 transition-all"
                >
                  {/* Compact Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-yellow-400 flex items-center justify-center text-black font-semibold text-xs">
                      {review.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-sm font-medium truncate">{review.name}</div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Truncated Review */}
                  <p className="text-white/70 text-xs leading-relaxed line-clamp-3">
                    "{review.text.slice(0, 150)}..."
                  </p>
                  
                  <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between">
                    <span className="text-amber-400/60 text-[10px]">{review.treatment}</span>
                    <span className="text-white/30 text-[10px]">{review.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatments - Fluid Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-end justify-between mb-16"
            >
              <div>
                <p className="text-amber-600 text-sm font-medium mb-3 tracking-wide uppercase">Treatments</p>
                <h2 className="text-3xl md:text-4xl font-light text-gray-900">
                  Most <span className="font-semibold">popular</span>
                </h2>
              </div>
              <Link 
                to="/treatments" 
                className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black transition-colors group"
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
                    className="group block bg-stone-50/50 hover:bg-white rounded-2xl p-6 border border-transparent hover:border-amber-200 hover:shadow-xl hover:shadow-amber-50 transition-all duration-500"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-medium text-gray-900 group-hover:text-amber-700 transition-colors">
                          {treatment.title}
                        </h3>
                        <p className="text-sm text-amber-600/80">{treatment.subtitle}</p>
                      </div>
                      {treatment.popular && (
                        <span className="bg-black text-white text-xs font-medium px-3 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                    <p className="text-gray-500 text-sm mb-6 leading-relaxed">{treatment.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-900">{treatment.price}</span>
                      <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-amber-600 transition-all group-hover:translate-x-1" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery - Immersive Scroll */}
        <section className="py-24 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-amber-600 text-sm font-medium mb-3 tracking-wide uppercase">Results</p>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                Real <span className="font-semibold">transformations</span>
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
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
                    className="flex-none w-72 md:w-80 aspect-[4/5] group relative rounded-2xl overflow-hidden"
                  >
                    <img 
                      src={item.src} 
                      alt={item.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-white font-medium">{item.treatment}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link to="/before-after-gallery">
                <Button className="bg-black hover:bg-gray-900 text-white rounded-full px-8 py-6 text-sm font-medium group">
                  View Full Gallery
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Philosophy - Split Section */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-amber-600 text-sm font-medium mb-4 tracking-wide uppercase">Our Philosophy</p>
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 leading-tight">
                  Bold. Natural.
                  <span className="block font-semibold">Always your way.</span>
                </h2>
                <p className="text-xl text-gray-500 mb-8 leading-relaxed font-light">
                  At CosmeDocs, we believe in aesthetic medicine that's minimal. Quiet, not loud. 
                  Invisible, not exaggerated.
                </p>
                <p className="text-gray-500 mb-10 leading-relaxed">
                  As London's leading aesthetic clinic on Harley Street, we've refined our craft over 17 years. 
                  Our GMC-registered doctors specialise in natural-looking enhancements that honour your unique features.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/about">
                    <Button
                      variant="outline"
                      className="border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 rounded-full px-6 py-5"
                    >
                      Our Approach
                    </Button>
                  </Link>
                  <Link to="/team">
                    <Button
                      variant="ghost"
                      className="text-gray-500 hover:text-black rounded-full px-6 py-5"
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
                  <div className="absolute -inset-4 bg-gradient-to-br from-amber-100 to-yellow-50 rounded-[2rem] -rotate-3" />
                  <div className="relative bg-white rounded-[2rem] p-10 shadow-xl shadow-amber-100/50">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center">
                        <Award className="h-7 w-7 text-amber-500" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-lg">Award-Winning</div>
                        <div className="text-gray-500 text-sm">Harley Street, London</div>
                      </div>
                    </div>
                    <div className="space-y-5">
                      {[
                        "Evidence-based treatments",
                        "GMC-registered practitioners",
                        "Natural, undetectable results",
                        "Personalised treatment plans"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 text-gray-700">
                          <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full" />
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

        {/* CTA - Minimal */}
        <section className="py-32 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                Ready to <span className="font-semibold">begin</span>?
              </h2>
              <p className="text-xl text-white/50 mb-10 font-light">
                Book a consultation at our Harley Street clinic
              </p>
              <Button
                onClick={() => window.open('https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29', '_blank')}
                className="bg-white hover:bg-gray-100 text-black rounded-full px-10 py-7 text-base font-medium group"
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
