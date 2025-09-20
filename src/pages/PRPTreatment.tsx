import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, Calendar, MapPin, Phone, ChevronDown, ChevronUp, Droplets, Heart, Shield, Star, Activity, Syringe, CheckCircle, Award, GraduationCap, Palette } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { generateSEOMetadata } from "@/utils/seo";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import BeforeAfterGrid from "@/components/BeforeAfterGrid";
import TreatmentVideoPlayer from "@/components/TreatmentVideoPlayer";
import { useVideoManagement } from "@/hooks/useVideoManagement";
import { Button } from "@/components/ui/button";
const PRPTreatment = () => {
  const seoData = generateSEOMetadata("PRP Treatment London | Vampire Facial | Platelet-Rich Plasma | Cosmedocs", "Expert PRP treatments in London's Harley Street. Vampire facial, hair restoration, and skin rejuvenation using your body's natural healing power. Book consultation today.", "/prp-treatment");
  const bookingUrl = "https://med.as.me/harleystreet";
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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight text-white">
                  <span className="text-purple-300 font-extralight">PRP Treatment London</span>
                  <span className="block text-base md:text-lg mt-4 font-light">Invisible art - natural skin rejuvenation using your body's healing power</span>
                </h1>
                <div className="mb-8">
                  <p className="text-xl md:text-2xl text-purple-300 font-light">Natural Regeneration</p>
                  <p className="text-sm text-gray-300">#cosmeprp - Check out our IG for hundreds more natural, subtle transformations</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl"
                    onClick={() => window.open(bookingUrl, "_blank")}
                  >
                    Book Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm"
                    onClick={() => document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    View Pricing
                  </Button>
                </div>
              </motion.div>
              
              <div className="hidden lg:block"></div>
            </div>
          </div>
        </section>

        {/* Treatment Summary */}
        <section className="py-16 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-light mb-8 text-white">PRP Treatment</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-light text-white mb-2">Procedure Time</h3>
                <p className="text-gray-300">30 minutes</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-light text-white mb-2">Results Duration</h3>
                <p className="text-gray-300">18 months</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-light text-white mb-2">Recovery Time</h3>
                <p className="text-gray-300">24-48 hours</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-light text-white mb-2">Anaesthetic</h3>
                <p className="text-gray-300">Local numbing</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Before & After Gallery */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-light mb-4">Before and After PRP Treatment Results</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Explore authentic before and after PRP treatment results from our London clinic. 
                Our natural healing approach delivers transformative skin rejuvenation and hair restoration using your body's own platelets.
              </p>
            </motion.div>

            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative group cursor-pointer p-2"
                  >
                    <img 
                      src="/lovable-uploads/c1c5edd5-4262-4f61-8d28-74a0e9c48653.png"
                      alt="PRP facial treatment before and after"
                      className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-2 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg"></div>
                    <div className="absolute bottom-2 left-2 right-2 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
                      <p className="text-white text-sm font-medium">PRP facial rejuvenation showing improved skin texture and reduced fine lines after 3 sessions</p>
                    </div>
                  </motion.div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="relative group cursor-pointer p-2"
                  >
                    <img 
                      src="/lovable-uploads/b4495de4-9009-4381-8105-a36d078fcb76.png"
                      alt="PRP hair treatment results"
                      className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-2 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg"></div>
                    <div className="absolute bottom-2 left-2 right-2 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
                      <p className="text-white text-sm font-medium">PRP hair restoration demonstrating increased hair density and thickness after 6 months</p>
                    </div>
                  </motion.div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative group cursor-pointer p-2"
                  >
                    <img 
                      src="/lovable-uploads/8785b0dd-a50d-4e0a-b691-3254b6c5f925.png"
                      alt="PRP under-eye treatment before and after"
                      className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-2 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg"></div>
                    <div className="absolute bottom-2 left-2 right-2 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
                      <p className="text-white text-sm font-medium">Under-eye PRP treatment reducing dark circles and improving skin elasticity</p>
                    </div>
                  </motion.div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="relative group cursor-pointer p-2"
                  >
                    <img 
                      src="/lovable-uploads/97c76ea5-245e-43c2-8b89-533f365f4969.png"
                      alt="PRP acne scarring treatment results"
                      className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-2 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg"></div>
                    <div className="absolute bottom-2 left-2 right-2 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
                      <p className="text-white text-sm font-medium">PRP therapy for acne scarring showing significant improvement in skin texture and tone</p>
                    </div>
                  </motion.div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="text-white border-white hover:bg-white hover:text-black" />
              <CarouselNext className="text-white border-white hover:bg-white hover:text-black" />
            </Carousel>
          </div>
        </section>

        {/* About PRP */}
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
              <h2 className="text-2xl md:text-3xl font-light mb-6 text-white">
                PRGF / PRP Treatment
              </h2>
              <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
                PRGF / PRP<br/>
                Plasma Rich in Growth Factors (PRGF) is the most cutting-edge in advanced Platelet-Rich Plasma system (PRP). It works by using the platelets from patient's own blood for both the stimulation and acceleration of tissue regeneration and healing.
              </p>
            </motion.div>

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
          <Card className="bg-gradient-to-br from-purple-900/40 to-black/60 border-purple-400/30 border backdrop-blur-lg shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-[1.02] group">
            <CardContent className="p-12 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-300/10 to-transparent rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-light mb-8 bg-gradient-to-r from-purple-200 via-white to-purple-100 bg-clip-text text-transparent">
                  PRGF / PRP: Help Your Body Heal Itself
                </h3>
                
                <p className="text-lg text-gray-200 leading-relaxed mb-8">
                  Thanks to this process, the effects or any injury, trauma or degenerative process (including aging) can be countered in:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                  {[
                    { icon: "🦴", text: "Tendons" },
                    { icon: "💪", text: "Muscles" },
                    { icon: "💇‍♀️", text: "Hair growth and hair regrowth" },
                    { icon: "✨", text: "Skin" },
                    { icon: "🦴", text: "Cartilage" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-white/5 rounded-xl border border-purple-400/20 hover:bg-white/10 hover:border-purple-300/40 transition-all duration-300 group/item">
                      <span className="text-2xl group-hover/item:scale-110 transition-transform duration-300">{item.icon}</span>
                      <span className="text-purple-100 font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-gradient-to-r from-purple-600/20 to-purple-400/20 rounded-xl p-6 border border-purple-400/30">
                  <p className="text-xl text-purple-100 font-light leading-relaxed text-center">
                    Simply put, PRGF is the most effective way for your body to, quite literally, heal itself and it's a procedure commonly adopted by celebrities to heal scars and reverse the signs of aging.
                  </p>
                </div>
                
                <div className="flex justify-center mt-8">
                  <div className="w-24 h-1 bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 rounded-full animate-pulse"></div>
                </div>
              </div>
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
              <h2 className="text-2xl md:text-3xl font-light mb-6 text-white">
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
                <Card className="bg-gradient-to-b from-purple-900/20 to-gray-900/50 border-purple-500/30 text-white h-full hover:border-purple-400 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
                  <CardHeader className="border-b border-purple-500/20">
                    <CardTitle className="text-xl md:text-2xl font-light text-white">{type.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 pt-6">
                    <p className="text-gray-300 leading-relaxed">{type.description}</p>
                    <div className="space-y-3">
                      {type.benefits.map((benefit, idx) => <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="text-purple-400 flex-shrink-0 mt-0.5" size={16} />
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
              <h2 className="text-2xl md:text-3xl font-light mb-6 text-white">
                PRP Benefits
              </h2>
              <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
                Comprehensive rejuvenation using your body's natural healing properties
              </p>
            </motion.div>

        {/* Benefits Section */}
        <section className="py-20 bg-accent text-white">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-light mb-4 text-white">
                PRP Benefits
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Comprehensive rejuvenation using your body's natural healing properties for transformative results
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium">{benefit}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Aftercare & Results Section */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-light mb-4 text-white">Treatment Care & Timeline</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Essential information about caring for your skin after PRP treatment and understanding your results timeline
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Aftercare Column */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/20 text-white h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl md:text-2xl font-light flex items-center space-x-3">
                      <Shield className="h-6 w-6 text-purple-400" />
                      <span>Post-Treatment Care</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">
                      Proper aftercare ensures optimal results and minimizes any potential side effects from your PRP treatment.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <h4 className="text-white font-medium mb-1">First 24 Hours</h4>
                          <p className="text-gray-300 text-sm">Avoid touching the treated area, apply ice packs if needed, and stay well-hydrated</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <h4 className="text-white font-medium mb-1">First Week</h4>
                          <p className="text-gray-300 text-sm">Avoid strenuous exercise, saunas, and direct sun exposure. Use gentle skincare products</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <h4 className="text-white font-medium mb-1">Ongoing Care</h4>
                          <p className="text-gray-300 text-sm">Maintain a good skincare routine, use SPF protection, and follow our specialist recommendations</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <h4 className="text-white font-medium mb-1">What to Expect</h4>
                          <p className="text-gray-300 text-sm">Mild soreness and bruising are normal and will subside within 2-3 days</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Results & Timeline Column */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/20 text-white h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl flex items-center space-x-3">
                      <Calendar className="h-6 w-6 text-purple-400" />
                      <span>Results & Timeline</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">
                      Understanding when you'll see results and planning your treatment journey for optimal outcomes.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <h4 className="text-white font-medium mb-1">Initial Results</h4>
                          <p className="text-gray-300 text-sm">Visible improvements appear within 2-6 weeks as your body begins natural regeneration</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <h4 className="text-white font-medium mb-1">Peak Results</h4>
                          <p className="text-gray-300 text-sm">Optimal results typically develop over 3-6 months as collagen production increases</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <h4 className="text-white font-medium mb-1">Results Duration</h4>
                          <p className="text-gray-300 text-sm">Effects last approximately 18 months for skin treatments, similar for hair restoration</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <h4 className="text-white font-medium mb-1">Next Session</h4>
                          <p className="text-gray-300 text-sm">Follow-up treatments recommended every 4-6 weeks for 3 sessions, then maintenance every 6-12 months</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <h4 className="text-white font-medium mb-1">Long-term Benefits</h4>
                          <p className="text-gray-300 text-sm">Regular maintenance sessions help sustain results and continue natural regeneration processes</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
          </div>
        </section>

        {/* PRP in Action */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Column */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-2xl md:text-3xl font-light mb-6 text-white">PRP in Action</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Watch our experts perform PRP treatments and see the precise process that delivers exceptional results.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-3"></div>
                    <div>
                      <h4 className="text-white font-light mb-2">Blood Collection</h4>
                      <p className="text-gray-300">A small amount of blood is drawn from your arm, similar to a routine blood test</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-3"></div>
                    <div>
                      <h4 className="text-white font-light mb-2">Centrifuge Processing</h4>
                      <p className="text-gray-300">The blood is processed in a specialized centrifuge to separate and concentrate the platelets</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-3"></div>
                    <div>
                      <h4 className="text-white font-light mb-2">Platelet Extraction</h4>
                      <p className="text-gray-300">The platelet-rich plasma is carefully extracted, containing concentrated growth factors</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-3"></div>
                    <div>
                      <h4 className="text-white font-light mb-2">Precise Injection</h4>
                      <p className="text-gray-300">Using ultra-fine needles, the PRP is injected into targeted areas for optimal results</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 italic">
                  "The entire process takes about 30 minutes and harnesses your body's natural healing mechanisms for transformative results."
                </p>
              </motion.div>

              {/* Image Column */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {videos && videos.length > 0 ? (
                  <TreatmentVideoPlayer 
                    video={videos[0]} 
                    treatmentName="PRP Treatment" 
                    showControls={true} 
                    className="rounded-2xl overflow-hidden border border-white/20 shadow-2xl" 
                  />
                ) : (
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
                    <p className="text-white/70">PRP Treatment Process</p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>


        {/* Pricing Section */}
        <section className="py-20 bg-black" id="pricing-section">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-light mb-4 text-white">PRP Treatment Investment</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Our comprehensive PRP treatments provide natural healing and rejuvenation using your body's own platelets. 
                All treatments include consultation, procedure, and aftercare support from our expert medical team.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-purple-500 h-full text-center">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">PRP Facial</CardTitle>
                    <div className="text-purple-300 text-lg font-bold">Price on consultation</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Natural skin rejuvenation and anti-aging</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Full facial assessment</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Professional application</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Aftercare guidance</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-purple-600 border-purple-400 h-full text-center relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-white text-purple-600 px-4 py-1 rounded-full text-sm font-semibold">POPULAR</span>
                  </div>
                  <CardHeader className="pt-8">
                    <CardTitle className="text-white text-2xl">PRP Hair Treatment</CardTitle>
                    <div className="text-white text-lg font-bold">Price on consultation</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-purple-100">Hair restoration and density improvement</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Scalp analysis</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Multi-point injection</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Follow-up sessions</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Progress monitoring</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-gray-700 h-full text-center">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Consultation Only</CardTitle>
                    <div className="text-purple-300 text-lg font-bold">£50</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Professional assessment and treatment planning</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Comprehensive assessment</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Treatment recommendations</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Deducted from treatment cost</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <p className="text-gray-300 mb-6">
                *Consultation fee is deducted from treatment cost if you proceed on the same day
              </p>
              <Button 
                className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 text-lg font-semibold"
                onClick={() => window.open(bookingUrl, "_blank")}
              >
                Book Your Consultation
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Cosmedocs */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-light mb-8 text-white">Why Choose Cosmedocs?</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-light text-white mb-2">Experience</h3>
                <p className="text-gray-300">Over 1 million injections performed since 2007</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-light text-white mb-2">Training</h3>
                <p className="text-gray-300">
                  <a 
                    href="https://www.harleystreetinstitute.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-300 hover:text-purple-200 underline"
                  >
                    Harley Street Institute
                  </a> trainers
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-light text-white mb-2">Quality</h3>
                <p className="text-gray-300">Your own blood - completely natural and safe</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Palette className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-light text-white mb-2">Philosophy</h3>
                <p className="text-gray-300">'Invisible art' for natural results</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-light text-white mb-2">Aftercare</h3>
                <p className="text-gray-300">Comprehensive aftercare and follow-up</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-light mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Everything you need to know about PRP treatment and what to expect during your journey.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <AccordionItem value={`item-${index}`} className="border-gray-700">
                      <AccordionTrigger className="text-white hover:text-purple-300 text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="page-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-12"
            >
              <h2 className="text-2xl md:text-3xl font-light mb-4">Ready for Natural Rejuvenation?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert doctors and discover how PRP can harness your body's natural healing power for transformative results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6"
                  onClick={() => window.open(bookingUrl, "_blank")}
                >
                  Book Free Consultation
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6">
                  Call 0333 0551 503
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>;
};
export default PRPTreatment;