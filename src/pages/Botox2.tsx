import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Star, ChevronRight, Award, MapPin, Sparkles, Zap, Check, Calendar, Activity, Syringe, CheckCircle, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Home2Header from "@/components/home2/Home2Header";
import Footer from "@/components/Footer";
import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

// Import AI tool icons
import aiAssessmentIcon from "@/assets/icons/ai-assessment-icon.png";
import smartAestheticsIcon from "@/assets/icons/smart-aesthetics-icon.png";
import aiDoctorChatIcon from "@/assets/icons/ai-doctor-chat-icon.png";

// Before/After Images
import crowsFeetBA1 from "@/assets/before-after/crows-feet-botox-1.png";
import crowsFeetBA2 from "@/assets/before-after/crows-feet-botox-2.jpg";
import frownLinesBA3 from "@/assets/frown-lines-before-after-3.jpg";
import foreheadBA from "@/assets/botox-forehead-before-after.jpeg";
import bunnyLinesBA1 from "@/assets/bunny-lines-before-after-1.jpg";
import gummySmileBA1 from "@/assets/gummy-smile-ba-1.jpeg";

// Treatment areas data
const botoxTreatments = [
  {
    title: "Forehead Lines",
    subtitle: "Upper Face",
    description: "Smooth horizontal forehead creases for a refreshed look",
    price: "From £195",
    link: "/forehead-lines-botox",
    popular: true,
  },
  {
    title: "Frown Lines",
    subtitle: "Glabella",
    description: "Reduce the '11 lines' between your brows",
    price: "From £195",
    link: "/frown-line-botox",
    popular: true,
  },
  {
    title: "Crow's Feet",
    subtitle: "Eye Area",
    description: "Soften lines around the eyes whilst maintaining expression",
    price: "From £195",
    link: "/crows-feet-botox",
  },
  {
    title: "Jaw Slimming",
    subtitle: "Masseter",
    description: "Create a more refined, contoured jawline",
    price: "From £450",
    link: "/masseter-botox",
  },
  {
    title: "Lip Flip",
    subtitle: "Upper Lip",
    description: "Subtle enhancement for a fuller lip appearance",
    price: "From £150",
    link: "/lip-flip",
  },
  {
    title: "Trap Tox",
    subtitle: "Shoulders",
    description: "Slim and elongate the neck and shoulders",
    price: "From £450",
    link: "/trap-botox",
  },
];

// Real unedited Google reviews
const googleReviews = [
  {
    name: "Kerri",
    treatment: "Anti-Aging & Skincare",
    points: [
      "Dr Haq isn't just good - he's a wizard! He combines art and science and a bit of magic and looks at your face in a holistic way",
      "I have been working with him on an anti-aging approach that combines skin care and treatments",
      "He's actually said no to certain things I've asked for, saying if I want to look natural that's a NO!"
    ]
  },
  {
    name: "Patient",
    treatment: "Hand & Neck Fillers",
    points: [
      "Had filler in my hands and neck lines",
      "I was nervous about it, as this was the first time having these treatments"
    ]
  },
  {
    name: "Verified Client",
    treatment: "Lip Enhancement",
    points: [
      "Absolutely fantastic experience at CosmeDocs",
      "Ahmed was so professional and made me feel completely at ease"
    ]
  },
];

// Gallery images
const galleryImages = [
  { src: crowsFeetBA1, alt: "Crow's feet Botox before and after", treatment: "Crow's Feet" },
  { src: foreheadBA, alt: "Forehead Botox before and after", treatment: "Forehead Lines" },
  { src: frownLinesBA3, alt: "Frown lines Botox treatment", treatment: "Frown Lines" },
  { src: crowsFeetBA2, alt: "Upper face Botox results", treatment: "Upper Face" },
  { src: bunnyLinesBA1, alt: "Bunny lines Botox", treatment: "Bunny Lines" },
  { src: gummySmileBA1, alt: "Gummy smile correction", treatment: "Gummy Smile" },
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

export default function Botox2() {
  const [galleryRef] = useEmblaCarousel({ loop: true, align: "start", dragFree: true });

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Helmet>
        <title>Botox London | Anti-Wrinkle Treatment Harley Street | CosmeDocs</title>
        <meta name="description" content="Expert Botox treatments on Harley Street, London. Natural-looking anti-wrinkle injections by GMC-registered doctors. Since 2007. Book your consultation today." />
        <meta name="keywords" content="botox london, botox harley street, anti-wrinkle injections london, baby botox, botox clinic london, best botox london" />
        <link rel="canonical" href="https://www.cosmedocs.co.uk/botox2" />
      </Helmet>

      <Home2Header />

      <main>
        {/* Hero Section */}
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
                    Harley Street, London
                  </div>
                  
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-[1.1] tracking-tight">
                    Botox
                    <span className="block font-semibold bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                      London
                    </span>
                  </h1>
                  
                  <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-xl leading-relaxed font-light">
                    Anti-wrinkle treatments that whisper rather than shout. Natural results, undetectable artistry.
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

                {/* Trust indicators */}
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
                      <Syringe className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">10-20 mins</div>
                      <div className="text-xs text-gray-500">Treatment time</div>
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
                      <Calendar className="h-5 w-5 text-amber-500" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">3-6 Months</div>
                      <div className="text-xs text-gray-500">Results last</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Compact Reviews at bottom of hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {googleReviews.map((review, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-amber-100/50 shadow-sm"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-black flex items-center justify-center">
                      <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                    </div>
                    <div>
                      <div className="text-gray-900 font-medium text-xs">{review.name}</div>
                      <div className="text-gray-400 text-[10px]">{review.treatment}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
                    {review.points[0]}
                  </p>
                </motion.div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <a 
                href="https://www.google.com/search?q=COSMEDOCS+Reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-amber-600 transition-colors"
              >
                <img 
                  src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
                  alt="Google" 
                  className="h-3"
                />
                <span>4.6 average • 232 reviews</span>
                <ChevronRight className="h-3 w-3" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

        {/* Treatment at a Glance */}
        <section className="py-16 bg-stone-50 relative overflow-hidden">
          {/* Scattered background treatment words */}
          <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
            {[
              { text: "Anti Wrinkle", top: "8%", left: "5%", rotate: -12 },
              { text: "Frown Lines", top: "15%", right: "8%", rotate: 8 },
              { text: "Droopy Lip Corner", top: "35%", left: "2%", rotate: -5 },
              { text: "Crow's Feet", top: "60%", right: "3%", rotate: 15 },
              { text: "Forehead Lines", top: "75%", left: "8%", rotate: -8 },
              { text: "Bunny Lines", top: "20%", left: "45%", rotate: 3 },
              { text: "Gummy Smile", top: "80%", right: "15%", rotate: -10 },
              { text: "Brow Lift", top: "45%", right: "12%", rotate: 6 },
              { text: "Jaw Slimming", top: "50%", left: "10%", rotate: -15 },
              { text: "Lip Flip", top: "25%", right: "25%", rotate: 12 },
              { text: "Neck Lines", top: "70%", left: "35%", rotate: -3 },
              { text: "11 Lines", top: "40%", left: "25%", rotate: 7 },
            ].map((word, i) => (
              <span
                key={i}
                className="absolute text-gray-200/40 font-light text-sm md:text-base whitespace-nowrap"
                style={{
                  top: word.top,
                  left: word.left,
                  right: word.right,
                  transform: `rotate(${word.rotate}deg)`,
                }}
              >
                {word.text}
              </span>
            ))}
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-amber-600 text-sm font-medium mb-3 tracking-wide uppercase">At a Glance</p>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900">
                Botox <span className="font-semibold">treatment</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Clock, label: "Treatment Duration", value: "10-20 minutes" },
                { icon: Calendar, label: "Results Last", value: "3-6 months" },
                { icon: Activity, label: "Recovery", value: "No downtime" },
                { icon: Syringe, label: "Onset", value: "3-14 days" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center p-6 bg-white rounded-2xl border border-gray-100"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-amber-600" />
                  </div>
                  <div className="text-sm text-gray-500 mb-1">{item.label}</div>
                  <div className="font-semibold text-gray-900">{item.value}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Tools */}
        <section className="py-20 bg-gradient-to-b from-stone-50 to-white">
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

        {/* Google Reviews - Removed as they're now in hero */}

        {/* What is Botox */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-amber-600 text-sm font-medium mb-3 tracking-wide uppercase">Understanding</p>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                What is <span className="font-semibold">Botox</span>?
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-6">
                Botox is the brand name for botulinum toxin type A, a purified protein that temporarily relaxes 
                targeted muscles by blocking nerve signals. This reduces the appearance of dynamic wrinkles 
                caused by repeated facial expressions.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Originally developed for medical conditions, Botox gained FDA approval for cosmetic use in 2002. 
                Today, it's the world's most popular non-surgical aesthetic treatment, with over 30 years of 
                clinical use and an excellent safety record.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Over 30 years", desc: "Clinical use with excellent safety record" },
                { title: "FDA approved", desc: "Regulated worldwide by MHRA & FDA" },
                { title: "10-20 minutes", desc: "Quick treatment with no downtime" },
                { title: "Fully reversible", desc: "Effects are temporary and fade naturally" },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-stone-50 rounded-xl"
                >
                  <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">{item.title}</div>
                    <div className="text-sm text-gray-500">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Areas Grid */}
        <section className="py-24 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-end justify-between mb-16"
            >
              <div>
                <p className="text-amber-600 text-sm font-medium mb-3 tracking-wide uppercase">Treatment Areas</p>
                <h2 className="text-3xl md:text-4xl font-light text-gray-900">
                  Botox <span className="font-semibold">treatments</span>
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
              {botoxTreatments.map((treatment, index) => (
                <motion.div
                  key={treatment.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Link
                    to={treatment.link}
                    className="group block bg-white hover:bg-white rounded-2xl p-6 border border-gray-100 hover:border-amber-200 hover:shadow-xl hover:shadow-amber-50 transition-all duration-500"
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

        {/* Before & After Gallery */}
        <section className="py-24 bg-white">
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

        {/* How It Works */}
        <section className="py-24 bg-stone-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-amber-600 text-sm font-medium mb-3 tracking-wide uppercase">The Process</p>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900">
                How Botox <span className="font-semibold">works</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Injection", desc: "Small amounts precisely injected into targeted muscles using ultra-fine needles." },
                { step: "2", title: "Nerve Block", desc: "Botox blocks acetylcholine release, preventing nerve signals from reaching muscles." },
                { step: "3", title: "Relaxation", desc: "Targeted muscles relax, smoothing overlying skin and reducing wrinkle appearance." },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-amber-600 text-sm font-medium mb-4 tracking-wide uppercase">Our Approach</p>
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 leading-tight">
                  The art of
                  <span className="block font-semibold">invisible beauty.</span>
                </h2>
                <p className="text-xl text-gray-500 mb-8 leading-relaxed font-light">
                  At CosmeDocs, we believe in aesthetic medicine that's minimal. Quiet, not loud. 
                  Invisible, not exaggerated.
                </p>
                <p className="text-gray-500 mb-10 leading-relaxed">
                  The key to natural Botox results lies in precise dosing and placement. A skilled practitioner 
                  relaxes the muscles causing wrinkles whilst preserving natural facial expression.
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
                        <GraduationCap className="h-7 w-7 text-amber-500" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-lg">Doctor-Led</div>
                        <div className="text-gray-500 text-sm">GMC Registered</div>
                      </div>
                    </div>
                    <div className="space-y-5">
                      {[
                        "Natural, undetectable results",
                        "Personalised treatment plans",
                        "Expression-preserving techniques",
                        "17+ years of expertise"
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

        {/* CTA Section */}
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
        <h2>Botox London - Expert Anti-Wrinkle Treatment at Harley Street</h2>
        <p>
          CosmeDocs offers expert Botox treatments in London, located at the prestigious 8-10 Harley Street address. 
          Since 2007, our GMC-registered doctors have refined their techniques to deliver natural-looking, 
          undetectable anti-wrinkle results.
        </p>
        <p>
          Our Botox treatments include forehead lines, frown lines, crow's feet, jaw slimming, lip flip, 
          gummy smile correction, bunny lines, and trap tox. We follow our signature philosophy: 
          "Our aesthetics is invisible art." Results that enhance your natural beauty whilst remaining 
          completely undetectable.
        </p>
      </div>
    </div>
  );
}
