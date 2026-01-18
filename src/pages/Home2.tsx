import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Star, ChevronRight, ChevronLeft, Award, MapPin, Quote } from "lucide-react";
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

const trustPoints = [
  { icon: Shield, text: "GMC-registered doctors" },
  { icon: Clock, text: "17+ years experience" },
  { icon: Star, text: "4.9★ Google rating" },
  { icon: MapPin, text: "Harley Street, London" },
];

// Real Google reviews from CosmeDocs
const googleReviews = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Absolutely fantastic experience at CosmeDocs. Dr. Ahmed was so professional and made me feel completely at ease. The results are natural and exactly what I wanted.",
    treatment: "Lip Fillers",
    date: "2 weeks ago"
  },
  {
    name: "James T.",
    rating: 5,
    text: "Best aesthetic clinic in London by far. I've been coming here for years for Botox and the team always delivers impeccable results. Highly recommend!",
    treatment: "Botox",
    date: "1 month ago"
  },
  {
    name: "Emma K.",
    rating: 5,
    text: "The attention to detail is incredible. They really listen to what you want and give honest advice. My jawline filler looks so natural, no one can tell!",
    treatment: "Jawline Filler",
    date: "3 weeks ago"
  },
  {
    name: "Priya S.",
    rating: 5,
    text: "I was nervous about my first treatment but the staff made me feel so comfortable. The clinic is beautiful and hygienic. Results exceeded expectations!",
    treatment: "Cheek Filler",
    date: "1 month ago"
  },
  {
    name: "Michael R.",
    rating: 5,
    text: "Professional from start to finish. The consultation was thorough and they took time to explain everything. Very pleased with my non-surgical nose job.",
    treatment: "Non-Surgical Rhinoplasty",
    date: "2 months ago"
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
  },
  {
    title: "Smart Aesthetics Series",
    subtitle: "Avoid aesthetic mistakes",
    icon: smartAestheticsIcon,
    link: "/aesthetic-treatments-made-easy",
    external: false,
  },
  {
    title: "Chat With Our AIesthetics Doctor",
    subtitle: "Ask anything about treatments",
    icon: aiDoctorChatIcon,
    link: null,
    action: "chatbot",
  },
];

export default function Home2() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  // Auto-scroll for reviews
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>CosmeDocs | Aesthetic Clinic Harley Street London | Botox & Fillers</title>
        <meta name="description" content="CosmeDocs - Award-winning aesthetic clinic on Harley Street, London. Expert Botox, dermal fillers, lip enhancement & skin treatments by GMC-registered doctors. Natural results since 2007." />
        <meta name="keywords" content="cosmedocs, aesthetic clinic harley street, botox london, dermal fillers, lip fillers, harley street aesthetics" />
      </Helmet>

      <Home2Header />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 md:pt-40 pb-20 md:pb-32 overflow-hidden">
          {/* Subtle gold gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50/40 via-white to-stone-50/20" />
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-br from-amber-100/30 to-yellow-50/10 rounded-full blur-3xl" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-amber-700 font-medium mb-4 flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  8-10 Harley Street, London W1G 9PF
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  The art of looking
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600"> naturally you</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
                  CosmeDocs is London's premier aesthetic clinic. Our aesthetics is invisible art — quiet, not loud. Transformations that whisper rather than shout.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  onClick={() => window.open('https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29', '_blank')}
                  className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white rounded-full px-8 py-6 text-base font-medium shadow-lg shadow-amber-200/50"
                >
                  Book Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.dispatchEvent(new CustomEvent('open-chatbot'))}
                  className="border-amber-300 text-amber-700 hover:bg-amber-50 rounded-full px-8 py-6 text-base font-medium"
                >
                  Ask Our AI Doctor
                </Button>
              </motion.div>

              {/* Trust strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-12 flex flex-wrap gap-6"
              >
                {trustPoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <point.icon className="h-4 w-4 text-amber-600" />
                    <span>{point.text}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Google Reviews Slider */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <img 
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
                    alt="Google" 
                    className="h-6"
                  />
                  <span className="text-white font-medium">Reviews</span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-white ml-2 font-semibold">4.9</span>
                  <span className="text-gray-400 ml-1">• 500+ reviews</span>
                </div>
              </div>
              <div className="hidden md:flex gap-2">
                <button
                  onClick={scrollPrev}
                  disabled={!canScrollPrev}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors disabled:opacity-50"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={scrollNext}
                  disabled={!canScrollNext}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors disabled:opacity-50"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-6">
                {googleReviews.map((review, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex-none w-[90%] md:w-[45%] lg:w-[30%] bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center text-white font-semibold">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-white font-medium">{review.name}</div>
                        <div className="flex items-center gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <Quote className="h-6 w-6 text-amber-500/50 mb-2" />
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {review.text}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="text-amber-500">{review.treatment}</span>
                      <span>{review.date}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-8 text-center">
              <a 
                href="https://www.google.com/search?q=COSMEDOCS+Reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300 transition-colors"
              >
                View all reviews on Google
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* AI Tools Section */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <p className="text-amber-500 font-medium mb-2">AI-Powered Tools</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Explore Your Aesthetic Journey
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {aiTools.map((tool, index) => (
                <motion.div
                  key={tool.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {tool.action === "chatbot" ? (
                    <button
                      onClick={() => window.dispatchEvent(new CustomEvent('open-chatbot'))}
                      className="w-full group flex flex-col items-center gap-4 p-8 bg-gray-900 border border-gray-800 hover:border-amber-500/50 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10"
                    >
                      <div className="w-20 h-20 rounded-2xl bg-gray-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img src={tool.icon} alt={tool.title} className="w-12 h-12" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        Chat With Our <span className="text-amber-500">AI</span>esthetics Doctor
                      </h3>
                      <p className="text-sm text-gray-400">{tool.subtitle}</p>
                    </button>
                  ) : tool.external ? (
                    <a
                      href={tool.link!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center gap-4 p-8 bg-gray-900 border border-gray-800 hover:border-amber-500/50 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10"
                    >
                      <div className="w-20 h-20 rounded-2xl bg-gray-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img src={tool.icon} alt={tool.title} className="w-12 h-12" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">{tool.title}</h3>
                      <p className="text-sm text-gray-400">{tool.subtitle}</p>
                    </a>
                  ) : (
                    <Link
                      to={tool.link!}
                      className="group flex flex-col items-center gap-4 p-8 bg-gray-900 border border-gray-800 hover:border-amber-500/50 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10"
                    >
                      <div className="w-20 h-20 rounded-2xl bg-gray-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img src={tool.icon} alt={tool.title} className="w-12 h-12" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">{tool.title}</h3>
                      <p className="text-sm text-gray-400">{tool.subtitle}</p>
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Treatments */}
        <section className="py-20 md:py-32 bg-stone-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-amber-700 font-medium mb-2">Our Treatments</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Most Popular at CosmeDocs
                </h2>
              </div>
              <Link 
                to="/treatments" 
                className="hidden md:flex items-center gap-1 text-sm font-medium text-amber-700 hover:text-amber-800 transition-colors"
              >
                View all treatments
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularTreatments.map((treatment, index) => (
                <motion.div
                  key={treatment.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link
                    to={treatment.link}
                    className="group block bg-white rounded-2xl p-6 border border-stone-200 hover:border-amber-300 hover:shadow-xl hover:shadow-amber-100/50 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-amber-700 transition-colors">
                          {treatment.title}
                        </h3>
                        <p className="text-sm text-amber-600">{treatment.subtitle}</p>
                      </div>
                      {treatment.popular && (
                        <span className="bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-700 text-xs font-medium px-2.5 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{treatment.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-900">{treatment.price}</span>
                      <span className="text-sm text-gray-500 group-hover:text-amber-600 transition-colors flex items-center gap-1">
                        Learn more
                        <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center md:hidden">
              <Link 
                to="/treatments" 
                className="inline-flex items-center gap-1 text-sm font-medium text-amber-700 hover:text-amber-800"
              >
                View all treatments
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Real Gallery Preview */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <p className="text-amber-700 font-medium mb-2">Results Gallery</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Real Patient Transformations
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Authentic before and after results from our Harley Street clinic. Every transformation follows our invisible art philosophy.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
                >
                  <img 
                    src={item.src} 
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-sm font-medium">{item.treatment}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link to="/before-after-gallery">
                <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-8">
                  View Full Gallery
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-stone-100 via-amber-50/30 to-stone-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-amber-700 font-medium mb-4">Our Philosophy</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Bold. Natural. Always Your Way.
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  At CosmeDocs, we believe in aesthetic medicine that's minimal. Quiet, not loud. 
                  Invisible, not exaggerated. It's transformation that speaks — without saying a word.
                </p>
                <p className="text-gray-600 mb-8">
                  As London's leading aesthetic clinic on Harley Street, we've refined our craft over 17 years. 
                  Our GMC-registered doctors specialise in natural-looking enhancements that honour your unique features.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/about">
                    <Button
                      variant="outline"
                      className="border-amber-300 text-amber-700 hover:bg-amber-50 rounded-full px-6"
                    >
                      About Our Approach
                    </Button>
                  </Link>
                  <Link to="/team">
                    <Button
                      variant="outline"
                      className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full px-6"
                    >
                      Meet Our Doctors
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-amber-100 to-yellow-50 rounded-3xl p-8 md:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <Award className="h-10 w-10 text-amber-600" />
                    <div>
                      <div className="font-bold text-gray-900">Award-Winning Clinic</div>
                      <div className="text-sm text-gray-600">Harley Street, London</div>
                    </div>
                  </div>
                  <div className="space-y-4 text-gray-700">
                    <p className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-amber-500 rounded-full" />
                      Evidence-based treatments
                    </p>
                    <p className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-amber-500 rounded-full" />
                      GMC-registered practitioners
                    </p>
                    <p className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-amber-500 rounded-full" />
                      Natural, undetectable results
                    </p>
                    <p className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-amber-500 rounded-full" />
                      Personalised treatment plans
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose CosmeDocs */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <p className="text-amber-700 font-medium mb-2">Why CosmeDocs</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                London's Most Trusted Aesthetic Clinic
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Harley Street Excellence",
                  description: "Located at 8-10 Harley Street, the heart of London's medical district. World-class facilities with premium patient care."
                },
                {
                  title: "Expert Medical Team",
                  description: "All treatments performed by GMC-registered doctors with extensive training in aesthetic medicine and facial anatomy."
                },
                {
                  title: "Natural Results",
                  description: "Our invisible art philosophy means results that enhance your natural beauty without looking 'done' or artificial."
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center p-8 rounded-2xl bg-gradient-to-b from-stone-50 to-white border border-stone-100"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to begin your journey?
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                Book a consultation with our GMC-registered doctors at our Harley Street clinic in London. Experience the CosmeDocs difference.
              </p>
              <Button
                onClick={() => window.open('https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29', '_blank')}
                className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-gray-900 font-medium rounded-full px-8 py-6 text-base shadow-lg shadow-amber-500/20"
              >
                Book Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
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
