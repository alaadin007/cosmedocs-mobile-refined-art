import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Zap, Sparkles, Calendar, MapPin, Phone, Mail, Activity, Droplets, Shield, Star, CheckCircle, Award, GraduationCap, Palette, Heart } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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

  const faqs = [
    {
      question: "How much does Peel to Reveal cost?",
      answer: "Peel to Reveal Lite starts from £120, and Peel to Reveal Plus is £250. We offer 25% off your second treatment if performed within 6 months, making it an affordable ongoing skincare solution."
    },
    {
      question: "How long does the Peel to Reveal treatment take?",
      answer: "The treatment takes only 10-15 minutes, making it perfect for lunch breaks or busy schedules. The controllable depth and intensity allow for customized treatment based on your skin needs."
    },
    {
      question: "What skin concerns does Peel to Reveal address?",
      answer: "Peel to Reveal treats multiple skin concerns simultaneously including dullness, pigmentation, melasma, sun damage, fine lines, acne, enlarged pores, whiteheads, and blackheads. It's suitable for all skin types."
    },
    {
      question: "Is there any downtime after Peel to Reveal?",
      answer: "Minimal downtime is required. You can return to work immediately with minimal skin changes and apply light cover-up straight after. Some mild redness may occur for a few hours, with gentle peeling starting day 3-4."
    },
    {
      question: "What makes Peel to Reveal different from other peels?",
      answer: "Peel to Reveal is a modern fusion peel combining multiple acids (Glycolic, Lactic, Salicylic, TCA) with powerful antioxidants like Glutathione. This CRES system (Cleanse, Revitalise, Exfoliate, Stimulate) treats over a dozen skin issues at once."
    },
    {
      question: "What are the key ingredients in Peel to Reveal?",
      answer: "The treatment includes Salicylic Acid, Tea Tree Oil, Glutathione, Kojic/Mandelic/Azelaic acids, TCA, Lactic and Glycolic acids, plus natural extracts from papaya, licorice, and bearberry for comprehensive skin rejuvenation."
    },
    {
      question: "Are there any side effects?",
      answer: "Common minor side effects include mild redness for a few hours, gentle peeling/flaking of old skin starting day 3-4 lasting a few days, and temporary dry skin for 7-10 days. These are normal signs of skin renewal."
    },
    {
      question: "How often should I have Peel to Reveal treatments?",
      answer: "For optimal results, treatments can be repeated every 4-6 weeks. The frequency depends on your skin concerns and goals. Our practitioners will create a personalized treatment plan during your consultation."
    }
  ];


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
              </div>

              {/* Understanding Aging Card */}
              <div className="mt-12 max-w-4xl mx-auto">
                <Card className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 backdrop-blur-sm border-2 border-purple-400 hover:border-purple-300 hover:bg-gradient-to-br hover:from-purple-900/30 hover:to-purple-800/20 transition-all duration-300 shadow-xl">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-3xl font-bold text-white mb-2">Understanding Skin Aging</CardTitle>
                    <p className="text-purple-300 font-medium">The science behind cellular regeneration</p>
                  </CardHeader>
                  <CardContent className="p-8 pt-4">
                    <div className="space-y-4">
                      <p className="text-gray-300 text-lg leading-relaxed text-center">
                        As we age, skin cells become dormant and cellular regeneration slows down dramatically, leaving dull, damaged, dead skin cells on the surface. This natural process begins earlier than most people realize.
                      </p>
                      <div className="bg-white/5 rounded-lg p-6 border border-purple-400/30">
                        <p className="text-gray-300 text-base leading-relaxed text-center">
                          Collagen, elastin, and hyaluronic acid - the vital structural elements for healthy skin - start to decrease from our mid-20s. Increasing layers of dead skin and micro-pigmentation cause uneven skin tone with irregular texture and enlarged pores.
                        </p>
                      </div>
                    </div>
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

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 h-full hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="text-purple-600" size={20} />
                      </div>
                      <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Peel to Reveal Aftercare & Results Timeline */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Aftercare */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 backdrop-blur-sm border-2 border-purple-400/50 rounded-xl p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center">
                      <Shield className="text-purple-600" size={28} />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white">Peel to Reveal Aftercare</h2>
                      <p className="text-purple-300 font-medium">Your complete recovery guide</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-8 text-lg">
                    Follow these essential guidelines to ensure optimal healing and maximize your transformation results:
                  </p>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-red-900/20 to-red-800/10 border border-red-400/30 rounded-lg p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-red-100 rounded-full w-8 h-8 flex items-center justify-center">
                          <span className="text-red-600 font-bold text-sm">24h</span>
                        </div>
                        <h3 className="text-lg font-semibold text-white">First 24-48 Hours</h3>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="text-red-400 flex-shrink-0" size={16} />
                          <span className="text-gray-300 text-sm">Avoid direct sun exposure completely</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="text-red-400 flex-shrink-0" size={16} />
                          <span className="text-gray-300 text-sm">Use gentle, fragrance-free cleanser</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="text-red-400 flex-shrink-0" size={16} />
                          <span className="text-gray-300 text-sm">Apply provided moisturizer frequently</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="text-red-400 flex-shrink-0" size={16} />
                          <span className="text-gray-300 text-sm">No makeup or active skincare</span>
                        </div>
                        <div className="flex items-center space-x-3 sm:col-span-2">
                          <CheckCircle className="text-red-400 flex-shrink-0" size={16} />
                          <span className="text-gray-300 text-sm">Avoid touching or picking at skin</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-orange-900/20 to-orange-800/10 border border-orange-400/30 rounded-lg p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-orange-100 rounded-full w-8 h-8 flex items-center justify-center">
                          <span className="text-orange-600 font-bold text-sm">3-7</span>
                        </div>
                        <h3 className="text-lg font-semibold text-white">Days 3-7 (Peeling Phase)</h3>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="text-orange-400 flex-shrink-0" size={16} />
                          <span className="text-gray-300 text-sm">SPF 50+ mandatory when outdoors</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="text-orange-400 flex-shrink-0" size={16} />
                          <span className="text-gray-300 text-sm">Allow natural peeling process</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="text-orange-400 flex-shrink-0" size={16} />
                          <span className="text-gray-300 text-sm">Keep skin hydrated with gentle products</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="text-orange-400 flex-shrink-0" size={16} />
                          <span className="text-gray-300 text-sm">Avoid exfoliants and harsh treatments</span>
                        </div>
                        <div className="flex items-center space-x-3 sm:col-span-2">
                          <CheckCircle className="text-orange-400 flex-shrink-0" size={16} />
                          <span className="text-gray-300 text-sm">Light cover-up makeup allowed from day 3</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-900/20 to-green-800/10 border border-green-400/30 rounded-lg p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center">
                          <CheckCircle className="text-green-600" size={20} />
                        </div>
                        <h3 className="text-lg font-semibold text-white">Ongoing Care</h3>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="text-green-400 flex-shrink-0" size={16} />
                          <span className="text-gray-300 text-sm">Daily SPF protection essential</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="text-green-400 flex-shrink-0" size={16} />
                          <span className="text-gray-300 text-sm">Resume normal skincare after 10 days</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="text-green-400 flex-shrink-0" size={16} />
                          <span className="text-gray-300 text-sm">Stay well-hydrated</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="text-green-400 flex-shrink-0" size={16} />
                          <span className="text-gray-300 text-sm">Follow practitioner's recommendations</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Results Timeline */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Results Timeline</h2>
                <p className="text-gray-300 mb-6">
                  Track your skin transformation journey and know what to expect at each stage:
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">0</span>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-purple-400/30 rounded-lg p-4 flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">Immediately After</h3>
                      <p className="text-gray-300 text-sm">Skin may appear slightly red, feeling tight and refreshed</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-purple-400/30 rounded-lg p-4 flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">Day 3-4</h3>
                      <p className="text-gray-300 text-sm">Gentle peeling begins, revealing fresh skin underneath</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">7</span>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-purple-400/30 rounded-lg p-4 flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">One Week</h3>
                      <p className="text-gray-300 text-sm">Peeling complete, skin feels smoother and looks brighter</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">10</span>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-purple-400/30 rounded-lg p-4 flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">Full Results</h3>
                      <p className="text-gray-300 text-sm">Dramatic improvement in skin tone, texture, and radiance visible</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">30</span>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-purple-400/30 rounded-lg p-4 flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">Next Session Due</h3>
                      <p className="text-gray-300 text-sm">Optimal time for follow-up treatment (4-6 weeks interval)</p>
                    </div>
                  </div>
                </div>
              </motion.div>
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
        <section id="pricing-section" className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Peel to Reveal Pricing London</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Transparent pricing for premium skin transformation treatments. All prices include consultation, 
                treatment, and aftercare support from our expert medical team.
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
                    <CardTitle className="text-white text-2xl">Peel to Reveal Lite</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£120</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Perfect for first-time treatments and gentle renewal</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Consultation included</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">CRES fusion technology</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Aftercare support</span>
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
                    <CardTitle className="text-white text-2xl">Peel to Reveal Plus</CardTitle>
                    <div className="text-white text-4xl font-bold">£250</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-purple-100">Advanced fusion treatment for dramatic results</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Comprehensive consultation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Advanced CRES system</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Extended aftercare support</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">2-week follow-up</span>
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
                    <CardTitle className="text-white text-2xl">Second Treatment</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">25% Off</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Within 6 months for optimal results</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Ongoing skincare solution</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Cumulative benefits</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Maintenance program</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Cosmedocs */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-8 text-white">Why Choose Cosmedocs?</h2>
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
                <h3 className="text-lg font-semibold text-white mb-2">Experience</h3>
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
                <h3 className="text-lg font-semibold text-white mb-2">Training</h3>
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
                <h3 className="text-lg font-semibold text-white mb-2">Quality</h3>
                <p className="text-gray-300">Premium FDA-approved skin treatments only</p>
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
                <h3 className="text-lg font-semibold text-white mb-2">Philosophy</h3>
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
                <h3 className="text-lg font-semibold text-white mb-2">Aftercare</h3>
                <p className="text-gray-300">Comprehensive aftercare and follow-up</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Get answers to common questions about Peel to Reveal treatments at our London clinic.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-black rounded-lg border-gray-800">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-900 rounded-lg">
                      <span className="text-white font-medium">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-300">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
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
              <h2 className="text-3xl font-bold mb-4">Ready for Clearer, Brighter Skin?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert cosmetic doctors and discover how Peel to Reveal 
                can transform your skin with our revolutionary fusion technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6"
                  onClick={() => window.open(bookingUrl, '_blank')}
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
    </>
  );
};

export default PeelToReveal;