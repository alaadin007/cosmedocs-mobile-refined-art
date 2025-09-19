import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Zap, Sparkles, Calendar, MapPin, Phone, Mail, ChevronDown, ChevronUp, Activity, Droplets, Shield, Star } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";

const PeelToReveal = () => {
  const seoData = generateSEOMetadata("Peel to Reveal London | £120 | Deep Skin Rejuvenation | Harley Street", "Revolutionary Peel to Reveal treatment in London's Harley Street. Deep skin cleansing, repairing & rejuvenation with powerful antioxidants. From £120.", "/peel-to-reveal");
  const bookingUrl = "https://med.as.me/harleystreet";

  // Before/after images for the viewer - Real Cosmedocs results
  const beforeAfterImages = [{
    src: "/lovable-uploads/bd706998-fd71-4df5-a58b-4f4d5185ee0d.png",
    alt: "Peel to Reveal before and after showing improved skin tone and reduced pigmentation",
    caption: "Dramatic improvement in skin tone and pigmentation reduction"
  }, {
    src: "/lovable-uploads/3be6db97-ef72-4352-abbb-8a0891d46c87.png",
    alt: "Peel to Reveal treatment results showing enhanced skin texture and clarity",
    caption: "Enhanced skin texture and improved overall clarity"
  }, {
    src: "/lovable-uploads/c040756c-623e-4569-b07b-ff9f9ae5aefd.png",
    alt: "Peel to Reveal results demonstrating smoother complexion and refined skin",
    caption: "Smoother complexion with refined skin texture and tone"
  }];

  const treatmentSteps = [{
    step: "01",
    title: "Cleanse",
    description: "Deep cleansing removes impurities and prepares skin for treatment with powerful cleansing agents."
  }, {
    step: "02",
    title: "Revitalise",
    description: "Antioxidant cocktail including Glutathione boosts skin immunity and cellular repair mechanisms."
  }, {
    step: "03",
    title: "Exfoliate",
    description: "Multi-acid fusion (Glycolic, Lactic, Salicylic, TCA) removes dead skin cells and promotes renewal."
  }, {
    step: "04",
    title: "Stimulate",
    description: "Natural extracts from papaya, licorice, and bearberry brighten and smooth skin texture."
  }, {
    step: "05",
    title: "Restore",
    description: "Final restoration phase locks in benefits and reveals clearer, brighter, more radiant skin."
  }];

  const benefits = [{
    title: "Skin Dullness & Aging",
    description: "Targets general skin dullness and aging concerns from mid-20s onwards, restoring natural radiance and vitality."
  }, {
    title: "Pigmentation and Melasma",
    description: "Effectively reduces hyperpigmentation, melasma patches, and uneven skin discoloration for a clearer complexion."
  }, {
    title: "Uneven Skin Tone and Texture",
    description: "Smooths irregular texture and evens skin tone for a refined, polished appearance."
  }, {
    title: "Sun Damage and Fine Lines",
    description: "Repairs UV damage and reduces the appearance of fine lines for rejuvenated, youthful-looking skin."
  }, {
    title: "Acne and Enlarged Pores",
    description: "Controls acne breakouts and minimizes enlarged pores for clearer, smoother skin texture."
  }, {
    title: "Whiteheads and Blackheads",
    description: "Deep cleanses and removes comedones, preventing future blockages and congestion."
  }, {
    title: "Wrinkles and Age Spots",
    description: "Diminishes wrinkles and age spots, promoting cellular renewal for more youthful skin."
  }, {
    title: "Skin Rejuvenation Maintenance",
    description: "Maintains optimal skin health and prevents future aging signs with regular treatment sessions."
  }, {
    title: "Powerful Antioxidant Fusion",
    description: "Contains Glutathione, Kojic, Mandelic, and Azelaic acids combined with natural extracts for comprehensive skin renewal."
  }, {
    title: "Fast Results",
    description: "Notice improvements within 10 days with clearer, brighter, and more radiant skin."
  }, {
    title: "Suitable for All Skin Types",
    description: "Controllable depth and intensity allows customized treatment based on individual skin needs and concerns."
  }, {
    title: "Modern Fusion Technology",
    description: "CRES system (Cleanse, Revitalise, Exfoliate, Stimulate) combines multiple acids with antioxidants for optimal results."
  }];

  const leftColumnFaqs = [{
    question: "How much does Peel to Reveal cost?",
    answer: "Peel to Reveal Lite starts from £120, and Peel to Reveal Plus is £250. We offer 25% off your second treatment if performed within 6 months, making it an affordable ongoing skincare solution."
  }, {
    question: "How long does the Peel to Reveal treatment take?",
    answer: "The treatment takes only 10-15 minutes, making it perfect for lunch breaks or busy schedules. The controllable depth and intensity allow for customized treatment based on your skin needs."
  }, {
    question: "What skin concerns does Peel to Reveal address?",
    answer: "Peel to Reveal treats multiple skin concerns simultaneously including dullness, pigmentation, melasma, sun damage, fine lines, acne, enlarged pores, whiteheads, and blackheads. It's suitable for all skin types."
  }, {
    question: "Is there any downtime after Peel to Reveal?",
    answer: "Minimal downtime is required. You can return to work immediately with minimal skin changes and apply light cover-up straight after. Some mild redness may occur for a few hours, with gentle peeling starting day 3-4."
  }];

  const rightColumnFaqs = [{
    question: "What makes Peel to Reveal different from other peels?",
    answer: "Peel to Reveal is a modern fusion peel combining multiple acids (Glycolic, Lactic, Salicylic, TCA) with powerful antioxidants like Glutathione. This CRES system (Cleanse, Revitalise, Exfoliate, Stimulate) treats over a dozen skin issues at once."
  }, {
    question: "What are the key ingredients in Peel to Reveal?",
    answer: "The treatment includes Salicylic Acid, Tea Tree Oil, Glutathione, Kojic/Mandelic/Azelaic acids, TCA, Lactic and Glycolic acids, plus natural extracts from papaya, licorice, and bearberry for comprehensive skin rejuvenation."
  }, {
    question: "Are there any side effects?",
    answer: "Common minor side effects include mild redness for a few hours, gentle peeling/flaking of old skin starting day 3-4 lasting a few days, and temporary dry skin for 7-10 days. These are normal signs of skin renewal."
  }, {
    question: "How often should I have Peel to Reveal treatments?",
    answer: "For optimal results, treatments can be repeated every 4-6 weeks. The frequency depends on your skin concerns and goals. Our practitioners will create a personalized treatment plan during your consultation."
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
          "name": "Cosmedocs - Peel to Reveal Treatment",
          "description": "Revolutionary skin peel treatment for deep cleansing, repairing & rejuvenation",
          "url": "https://cosmedocs.com/peel-to-reveal",
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
          "priceRange": "£120-£250"
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
                  <span className="text-purple-300">Peel to Reveal London</span>
                  <span className="block text-sm mt-4">Invisible art - revolutionary skin transformation that speaks without words</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Deep Skin Rejuvenation</p>
                  <p className="text-sm text-gray-300">Fusion peel technology for clearer, brighter skin in 10 days</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl"
                    onClick={() => window.open(bookingUrl, '_blank')}
                  >
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
              <h2 className="text-3xl font-bold mb-8 text-white">Peel to Reveal Treatment</h2>
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
                <p className="text-gray-300">10-15 minutes per session</p>
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
                <h3 className="text-lg font-semibold text-white mb-2">Results Timeline</h3>
                <p className="text-gray-300">Visible in 10 days</p>
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
                <p className="text-gray-300">Minimal downtime required</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Technology</h3>
                <p className="text-gray-300">CRES fusion system</p>
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
              <h2 className="text-3xl font-bold mb-4">Peel to Reveal Before & After Results</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See real transformations from our Peel to Reveal treatments at Cosmedocs London. 
                Advanced fusion technology delivers dramatic skin improvements and renewed radiance.
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
                title="Peel to Reveal Results Gallery"
                description="Comprehensive gallery of our skin transformation treatments"
              />
            </div>
          </div>
        </section>

        {/* What is Peel to Reveal Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-8 text-white">What is Peel to Reveal?</h2>
              <div className="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed space-y-6">
                <p>
                  Peel to Reveal is a revolutionary fusion peel treatment that combines advanced chemical exfoliation with powerful antioxidants to deliver comprehensive skin renewal. Using our proprietary CRES (Cleanse, Revitalise, Exfoliate, Stimulate) system, this innovative treatment addresses multiple skin concerns simultaneously.
                </p>
                <p>
                  The treatment features a unique blend of multi-acid formulations including Glycolic, Lactic, Salicylic, and TCA acids, enhanced with potent antioxidants like Glutathione, Kojic, Mandelic, and Azelaic acids. Natural extracts from papaya, licorice, and bearberry further boost the treatment's brightening and smoothing effects.
                </p>
              </div>

              {/* Understanding Aging Card */}
              <div className="mt-12 max-w-4xl mx-auto">
                <Card className="bg-white/5 backdrop-blur-sm border-purple-400/30 hover:border-purple-400/50 hover:bg-white/10 transition-all duration-300">
                  <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold text-white mb-4">Understanding Aging</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <p className="text-gray-300 text-lg leading-relaxed text-center">
                      Our skin cells become dormant and cellular regeneration slows down as we age, leaving dull, damaged, dead skin cells on the surface. Collagen, elastin, hyaluronic acid and other structural elements vital for skin health start to decrease from our mid-20s, and increasing layers of dead skin and micro-pigmentation cause unevenly toned skins with an irregular texture and enlarged pores.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Treatment Benefits */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-white">Peel to Reveal Benefits</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Unlike traditional single-acid peels, Peel to Reveal's fusion technology allows for controllable depth and intensity, making it suitable for all skin types while delivering dramatic results with minimal downtime. The treatment effectively addresses:
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
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">The CRES Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our 5-step CRES system delivers comprehensive skin rejuvenation and renewal
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
              <h2 className="text-4xl font-bold mb-4 text-white">Peel to Reveal Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transparent pricing for revolutionary skin transformation treatments in London
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
                    <CardTitle className="text-white text-xl">Peel to Reveal Lite</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-3xl font-bold text-purple-300">£120</div>
                    <p className="text-gray-300">Perfect for first-time treatment</p>
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
                    <CardTitle className="text-white text-xl">Peel to Reveal Plus</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-3xl font-bold text-purple-300">£250</div>
                    <p className="text-gray-300">Advanced fusion treatment</p>
                    <Button 
                      className="w-full bg-purple-600 text-white hover:bg-purple-700 rounded-full"
                      onClick={() => window.open(bookingUrl, '_blank')}
                    >
                      Book Treatment
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
                    <CardTitle className="text-white text-xl">Second Treatment</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-3xl font-bold text-purple-300">25% Off</div>
                    <p className="text-gray-300">Within 6 months</p>
                    <p className="text-sm text-gray-400">Ongoing skincare solution</p>
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
                Everything you need to know about Peel to Reveal treatments
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

        {/* Additional Information Section - Moved to bottom before CTA */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div 
              className="max-w-5xl mx-auto" 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }} 
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-thin text-white mb-12 text-center tracking-tight">
                Understanding Skin Aging
              </h2>
              
              <div className="space-y-8 text-lg text-white/80 font-light leading-relaxed">
                <p>
                  Our skin cells become dormant and cellular regeneration slows down as we age, leaving dull, damaged, dead skin cells on the surface. Collagen, elastin, hyaluronic acid and other structural elements vital for skin health start to decrease from our mid-20s, and increasing layers of dead skin and micro-pigmentation cause unevenly toned skins with an irregular texture and enlarged pores.
                </p>
                
                <p>
                  Although make-up, moisturisers and other beauty products may temporarily conceal some of these signs of ageing, they cannot reverse them and may accelerate the process. Our cosmetic doctors from Harley Street, London, are passionate about skincare and have formulated an in-clinic skin peel treatment called Peel To Reveal.
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 my-12">
                  <h3 className="text-2xl font-light text-white mb-6">When is Peel to Reveal used?</h3>
                  <div className="grid md:grid-cols-2 gap-6 text-white/70">
                    <div>
                      <h4 className="text-lg font-light text-white mb-3">Ideal for treating:</h4>
                      <ul className="space-y-2">
                        <li>• General skin dullness & aging (mid-20s onwards)</li>
                        <li>• Pigmentation and melasma</li>
                        <li>• Uneven skin tone and texture</li>
                        <li>• Sun damage and fine lines</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-light text-white mb-3">Also effective for:</h4>
                      <ul className="space-y-2">
                        <li>• Acne and enlarged pores</li>
                        <li>• Whiteheads and blackheads</li>
                        <li>• Wrinkles and age spots</li>
                        <li>• Skin rejuvenation maintenance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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
                Ready for Clearer, Brighter Skin?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Book your Peel to Reveal consultation at Cosmedocs Harley Street and experience the transformation.
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

export default PeelToReveal;