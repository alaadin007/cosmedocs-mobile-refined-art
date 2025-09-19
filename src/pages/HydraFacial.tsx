import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Droplets, Star, Clock, Users, Calendar, Shield, Activity, Award, GraduationCap, CheckCircle, Palette, Heart } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import TreatmentVideoPlayer from "@/components/TreatmentVideoPlayer";
import { useVideoManagement } from "@/hooks/useVideoManagement";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const HydraFacial = () => {
  const {
    videos,
    getVideosByTreatment
  } = useVideoManagement();
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const seoData = generateSEOMetadata("HydraFacial London | £175 | Cosmedocs | Harley Street", "Premium HydraFacial treatments in London's Harley Street. Advanced vortex technology for glowing, hydrated skin. From £175. Book your session today.", "/hydrafacial-london");

  // Get HydraFacial specific videos
  const hydraFacialVideos = getVideosByTreatment('HydraFacial');
  const bookingUrl = "https://med.as.me/harleystreet";

  // Before/after images for HydraFacial
  const beforeAfterImages = [{
    src: "/lovable-uploads/38a0f044-da28-413f-afa4-d9f7955797f5.png",
    alt: "HydraFacial before and after London Cosmedocs skin texture improvement",
    caption: "Remarkable skin texture improvement and radiance achieved with HydraFacial vortex technology"
  }, {
    src: "/lovable-uploads/5a0b4122-4a4e-4dfd-90aa-7af725983356.png",
    alt: "HydraFacial pigmentation treatment before after London Harley Street Cosmedocs",
    caption: "Visible reduction in pigmentation and improved skin clarity with enhanced brightness"
  }, {
    src: "/lovable-uploads/9f5e369e-f3ac-4643-9470-bb1642025063.png",
    alt: "HydraFacial skin hydration before after London Cosmedocs glowing results",
    caption: "Deep hydration and skin rejuvenation showing improved texture and natural glow"
  }, {
    src: "/lovable-uploads/59aa52ad-4a4d-417e-8d44-3d9252fd6180.png",
    alt: "HydraFacial complexion enhancement before after London Harley Street treatment",
    caption: "Overall complexion enhancement with improved skin tone and radiant appearance"
  }];

  const treatmentSteps = [{
    step: "01",
    title: "Detoxification",
    description: "Gentle lymphatic drainage to remove toxins and reduce puffiness for firmer, more toned skin."
  }, {
    step: "02",
    title: "Deep Cleanse",
    description: "Vortex cleansing and exfoliation removes dead skin cells while AHAs and BHAs unclog pores."
  }, {
    step: "03",
    title: "Extract + Hydrate",
    description: "Powerful blend of salicylic and glycolic acid removes impurities while boosting collagen production."
  }, {
    step: "04",
    title: "Boost + Infuse",
    description: "Vortex-Fusion technology delivers antioxidants, peptides, and hyaluronic acid deep into skin."
  }, {
    step: "05",
    title: "Restore + Rejuvenate",
    description: "LED light therapy fights bacteria and boosts collagen for a luminous, flawless glow."
  }];

  const benefits = [{
    title: "Refines & Reduces Pore Size",
    description: "Enlarged and blocked pores filled with sebum, dead skin cells, and impurities are instantly purified and shrunk using the vortex-powered machine's powerful suction tip wand."
  }, {
    title: "Evens Out and Brightens Skin Tone",
    description: "Infuses skin with antioxidants and brightening agents to correct dark spots, dull skin condition, and discoloration. The skin instantly glows with a radiant and more even tone."
  }, {
    title: "HydraFacial Degreases Oily Skin",
    description: "Through vortex cleansing, exfoliation, and extraction, oily skin looks less shiny and achieves a healthy glow by removing excess sebum that leads to clogged pores and blemishes."
  }, {
    title: "Plumps Up Thirsty, Dry Skin & Lips",
    description: "Applies skin boosters, hyaluronic acid, and vortex technology to restore moisture balance. Many clients notice their dry skin improved after the first session."
  }, {
    title: "Ideal For Acne & Acne Scars",
    description: "The intense buffing action makes this an effective acne treatment. It's also very effective for acne scars as it promotes your skin's healing system."
  }, {
    title: "Soothes Sensitive Skin Signs",
    description: "Skin conditions as complex as rosacea can be easily improved. Symptoms like facial redness, enlarged pores, and bumps are directly targeted with this gentle, zero-downtime treatment."
  }, {
    title: "Tailored To Every Skin Needs",
    description: "Skin boosters, antioxidant serums, and specific acids like glycolic for dry skin and salicylic for oily skin target various issues including wrinkles, dryness, and acne."
  }];

  const leftColumnFaqs = [{
    question: "How much does HydraFacial cost in London?",
    answer: "At Cosmedocs Harley Street, HydraFacial treatments start from £175 for a single session. We offer courses of 3 sessions at £150 each, or 6 sessions at £125 each for optimal results."
  }, {
    question: "How effective is HydraFacial for acne?",
    answer: "HydraFacial is highly effective for acne-prone skin. It deeply cleanses to remove dead skin cells, impurities, and excess sebum while unclogging pores and soothing inflamed skin to prevent future breakouts."
  }, {
    question: "Are there any side effects of HydraFacial?",
    answer: "HydraFacial is widely regarded as safe with minimal side effects. Some may experience mild skin peeling, slight redness for sensitive skin, or temporary sensitivity, all of which fade quickly."
  }, {
    question: "How many treatments are needed to see results?",
    answer: "Clients notice instant glow and hydration after their first session. For optimal long-term skin health, we recommend monthly HydraFacial treatments at our London clinic."
  }];

  const rightColumnFaqs = [{
    question: "Who is the ideal candidate for HydraFacial?",
    answer: "HydraFacial is suitable for all skin types and anyone 18+ with fine lines, excess sebum, skin discoloration, rough texture, or dull complexion. Those using Accutane or with severe scarring may not be suitable."
  }, {
    question: "How to care for skin after HydraFacial?",
    answer: "Limit sun exposure for 72 hours, use daily SPF 30+, avoid harsh treatments for 2 weeks, pause strong topicals for 48 hours, and incorporate hyaluronic serum for 30 days."
  }, {
    question: "Can HydraFacial be combined with other treatments?",
    answer: "Yes, at Cosmedocs we combine HydraFacial with Dermaplaning for enhanced results. Dermaplaning removes dead skin cells, while HydraFacial deeply cleanses, exfoliates, and moisturizes."
  }, {
    question: "Is HydraFacial suitable for men?",
    answer: "Absolutely! HydraFacial is popular among men for addressing dryness, shaving irritation, congested skin, rough texture, acne, and fine lines. We recommend monthly sessions for lasting results."
  }];

  const [openFaqs, setOpenFaqs] = useState<Record<string, boolean>>({});
  
  const toggleFaq = (question: string) => {
    setOpenFaqs(prev => {
      const isCurrentlyOpen = prev[question];
      // Close all FAQs
      const newState: Record<string, boolean> = {};
      // If the clicked FAQ was closed, open only that one
      if (!isCurrentlyOpen) {
        newState[question] = true;
      }
      return newState;
    });
  };

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
          "name": "Cosmedocs - HydraFacial London",
          "description": "Premium HydraFacial treatments in London's Harley Street using advanced vortex technology",
          "url": "https://cosmedocs.com/hydrafacial-london",
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
          "medicalSpecialty": "Dermatology",
          "priceRange": "£175"
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
                  <span className="text-purple-300">Premium HydraFacial London</span>
                  <span className="block text-sm mt-4">Invisible art - glowing transformation that speaks without words</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Advanced Vortex Technology</p>
                  <p className="text-sm text-gray-300">Deep cleansing, exfoliation & hydration for all skin types</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl">
                    Book Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm"
                    onClick={() => document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    View Price List
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
              <h2 className="text-3xl font-bold mb-8 text-white">HydraFacial Treatment</h2>
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
                <h3 className="text-lg font-semibold text-white mb-2">Treatment Duration</h3>
                <p className="text-gray-300">45-60 minutes including consultation</p>
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
                <h3 className="text-lg font-semibold text-white mb-2">Results Duration</h3>
                <p className="text-gray-300">Monthly treatments recommended</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Activity className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Recovery Time</h3>
                <p className="text-gray-300">Zero downtime, immediate results</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Droplets className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Technology</h3>
                <p className="text-gray-300">Patented vortex technology</p>
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
              <h2 className="text-3xl font-bold mb-4">HydraFacial Before & After Results</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See real results from our HydraFacial treatments at Cosmedocs London. 
                Advanced vortex technology delivers immediate improvement in skin texture, hydration, and radiance.
              </p>
            </motion.div>

            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {beforeAfterImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative group cursor-pointer p-2"
                    >
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-2 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg"></div>
                      <div className="absolute bottom-2 left-2 right-2 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
                        <p className="text-white text-sm font-medium">{image.caption}</p>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="text-white border-white hover:bg-white hover:text-black" />
              <CarouselNext className="text-white border-white hover:bg-white hover:text-black" />
            </Carousel>

            <div className="text-center mt-12">
              <BeforeAfterImageViewer 
                images={beforeAfterImages}
                triggerLabel="View All Before & After Photos"
                title="HydraFacial Results Gallery"
                description="Comprehensive gallery of our HydraFacial treatments"
              />
            </div>
          </div>
        </section>

        {/* Treatment Benefits */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-white">HydraFacial Benefits</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience transformative skin improvements with our advanced HydraFacial technology
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 h-full hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Steps */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">The HydraFacial Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our 5-step HydraFacial treatment delivers comprehensive skin rejuvenation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {treatmentSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing-section" className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-white">HydraFacial Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transparent pricing for premium HydraFacial treatments in London
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 text-center h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Single Session</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-3xl font-bold text-purple-300">£175</div>
                    <p className="text-gray-300">Perfect for trying HydraFacial</p>
                    <Button 
                      className="w-full bg-white text-black hover:bg-gray-200 rounded-full"
                      onClick={() => window.open(bookingUrl, '_blank')}
                    >
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-purple-300 hover:bg-white/15 transition-all duration-300 text-center h-full relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white text-xl">3 Sessions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-3xl font-bold text-purple-300">£450</div>
                    <p className="text-gray-300">Save £75 with our package</p>
                    <p className="text-sm text-gray-400">£150 per session</p>
                    <Button 
                      className="w-full bg-purple-600 text-white hover:bg-purple-700 rounded-full"
                      onClick={() => window.open(bookingUrl, '_blank')}
                    >
                      Book Package
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 text-center h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">6 Sessions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-3xl font-bold text-purple-300">£750</div>
                    <p className="text-gray-300">Best value package</p>
                    <p className="text-sm text-gray-400">£125 per session</p>
                    <Button 
                      className="w-full bg-white text-black hover:bg-gray-200 rounded-full"
                      onClick={() => window.open(bookingUrl, '_blank')}
                    >
                      Book Package
                    </Button>
                  </CardContent>
                </Card>
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
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to know about HydraFacial treatments
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="space-y-4">
                {leftColumnFaqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card 
                      className={`bg-white/5 backdrop-blur-sm border-white/10 cursor-pointer transition-all duration-300 ${
                        openFaqs[faq.question] ? 'bg-white/10 border-purple-300' : 'hover:bg-white/8'
                      }`}
                      onClick={() => toggleFaq(faq.question)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                          {openFaqs[faq.question] ? 
                            <ChevronUp className="h-5 w-5 text-purple-300 flex-shrink-0" /> : 
                            <ChevronDown className="h-5 w-5 text-white/70 flex-shrink-0" />
                          }
                        </div>
                        {openFaqs[faq.question] && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-4 pt-4 border-t border-white/10"
                          >
                            <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                          </motion.div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-4">
                {rightColumnFaqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card 
                      className={`bg-white/5 backdrop-blur-sm border-white/10 cursor-pointer transition-all duration-300 ${
                        openFaqs[faq.question] ? 'bg-white/10 border-purple-300' : 'hover:bg-white/8'
                      }`}
                      onClick={() => toggleFaq(faq.question)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                          {openFaqs[faq.question] ? 
                            <ChevronUp className="h-5 w-5 text-purple-300 flex-shrink-0" /> : 
                            <ChevronDown className="h-5 w-5 text-white/70 flex-shrink-0" />
                          }
                        </div>
                        {openFaqs[faq.question] && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-4 pt-4 border-t border-white/10"
                          >
                            <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                          </motion.div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready for Glowing, Hydrated Skin?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Book your HydraFacial consultation at Cosmedocs Harley Street and experience the transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg font-semibold rounded-full shadow-2xl"
                  onClick={() => window.open(bookingUrl, '_blank')}
                >
                  Book Free Consultation
                </Button>
                <a 
                  href="tel:03330551503" 
                  className="text-purple-300 hover:text-white font-semibold text-lg transition-colors duration-300"
                >
                  Call 0333 0551 503
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HydraFacial;