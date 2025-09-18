import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import { generateSEOMetadata } from "@/utils/seo";
import { Clock, Calendar, Activity, Syringe, Award, GraduationCap, CheckCircle, Palette, Heart, Eye } from "lucide-react";

const NonSurgicalFacelift = () => {
  const seoData = generateSEOMetadata(
    "Non-Surgical Facelift London | Liquid Facelift | Cosmedocs",
    "Expert non-surgical facelift treatments in London. Our liquid facelift combines dermal fillers and Botox for natural rejuvenation without surgery. Book a consultation today.",
    "/non-surgical-facelift"
  );

  const bookingUrl = "https://med.as.me/harleystreet";

  const beforeAfterImages = [
    { 
      src: "/lovable-uploads/7f71ff8d-e186-45d8-a20f-70564764b7ae.png", 
      alt: "Non-surgical facelift before and after showing comprehensive facial rejuvenation", 
      caption: "Complete liquid facelift transformation with volume restoration and lifting" 
    },
    { 
      src: "/lovable-uploads/765101d1-1ff9-4425-9d8a-da5eb0bcaa17.png", 
      alt: "Liquid facelift before and after demonstrating natural lifting effects", 
      caption: "Natural facial lifting achieved through strategic dermal filler placement" 
    },
    { 
      src: "/lovable-uploads/010185b4-89b2-4e8b-b94b-8187262a436e.png", 
      alt: "Non-surgical face rejuvenation before and after results", 
      caption: "Comprehensive facial rejuvenation addressing multiple areas simultaneously" 
    },
    { 
      src: "/lovable-uploads/d13762c3-0f5e-437a-adb7-7ddf89fcf2e5.png", 
      alt: "Liquid facelift transformation showing youthful results", 
      caption: "Youthful transformation combining multiple non-surgical techniques" 
    }
  ];

  const faqs = [
    {
      question: "What is a non-surgical facelift?",
      answer: "A non-surgical facelift, also known as a liquid facelift, uses dermal fillers and Botox to lift, contour, and rejuvenate the face without surgery. It addresses volume loss, wrinkles, and sagging skin through strategic injection techniques."
    },
    {
      question: "How long does a non-surgical facelift last?",
      answer: "Results typically last 12-18 months, depending on the products used and your individual metabolism. Botox effects last 3-4 months, while dermal fillers can last 6-18 months depending on the type and area treated."
    },
    {
      question: "What areas can be treated in a liquid facelift?",
      answer: "A comprehensive liquid facelift can address cheeks, temples, under-eyes, nasolabial folds, marionette lines, jawline, chin, and lips. We also use Botox for forehead lines, crow's feet, and other dynamic wrinkles."
    },
    {
      question: "Is there downtime with a non-surgical facelift?",
      answer: "Minimal downtime is required. You may experience mild swelling, redness, or bruising for 3-7 days. Most patients return to work immediately and resume normal activities within 24-48 hours."
    },
    {
      question: "How much does a non-surgical facelift cost?",
      answer: "Costs vary depending on the areas treated and amount of product needed. A comprehensive liquid facelift typically ranges from £1,200-£3,000. We provide detailed pricing during your consultation based on your specific needs."
    },
    {
      question: "Am I a good candidate for a liquid facelift?",
      answer: "Ideal candidates have mild to moderate signs of aging, good skin elasticity, and realistic expectations. Those with severe sagging may benefit more from surgical options. A consultation will determine the best approach for your goals."
    },
    {
      question: "What's the difference between a surgical and non-surgical facelift?",
      answer: "Surgical facelifts involve incisions and physically repositioning tissues for dramatic, permanent results. Non-surgical facelifts use injectables for subtle to moderate improvements with no incisions, less downtime, and temporary but renewable results."
    },
    {
      question: "Can I combine different treatments in one session?",
      answer: "Yes! We often combine Botox, multiple dermal fillers, and other treatments in a single session for comprehensive results. This approach is more convenient and can be more cost-effective than separate appointments."
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
        <meta property="og:image" content={seoData.image} />
        <meta property="og:url" content={seoData.canonical} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="non-surgical facelift London, liquid facelift, dermal fillers, Botox, facial rejuvenation, anti-aging, Harley Street, cosmetic treatment" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Cosmedocs",
            "description": "Expert non-surgical facelift and liquid facelift treatments in London",
            "url": seoData.canonical,
            "telephone": "0333 0551 503",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "10 Harley Street",
              "addressLocality": "London",
              "postalCode": "W1G 9PF",
              "addressCountry": "GB"
            },
            "medicalSpecialty": "Cosmetic Medicine",
            "priceRange": "££"
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
                <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-white">
                  <span className="text-purple-300">Non-Surgical Facelift</span>
                  <span className="block text-sm mt-4">Invisible art - natural facial rejuvenation without surgery</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl">
                  <span className="text-purple-300 font-semibold">Invisible Art</span>
                  <br />
                  Bold • Natural • Always Your Way
                </p>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">From £1,200</p>
                  <p className="text-sm text-gray-300">Comprehensive liquid facelift combining multiple treatments</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={() => window.open(bookingUrl, "_blank")}
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl"
                  >
                    Book Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm"
                    onClick={() => {
                      const pricingSection = document.getElementById('pricing-section');
                      if (pricingSection) {
                        pricingSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
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
              <h2 className="text-3xl font-bold mb-8 text-white">Non-Surgical Facelift Treatment</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
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
                <p className="text-gray-300">2-3 hours including consultation</p>
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
                <p className="text-gray-300">12-18 months with premium treatments</p>
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
                <p className="text-gray-300">Minimal downtime, return to work same day</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Syringe className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Anaesthesia</h3>
                <p className="text-gray-300">Topical anaesthetic + lidocaine in products</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Eye className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Visible Results</h3>
                <p className="text-gray-300">Immediate visible improvement with full results in 2-4 weeks</p>
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
              <h2 className="text-3xl font-bold mb-4">Non-Surgical Facelift Results</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Explore authentic liquid facelift transformations from our London clinic. 
                Our non-surgical approach delivers natural-looking rejuvenation without the need for surgery.
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
                title="Non-Surgical Facelift Results Gallery"
                description="Comprehensive gallery of our liquid facelift treatments"
              />
            </div>
          </div>
        </section>

        {/* Non-Surgical & Liquid Facelift Procedure Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Non-Surgical & Liquid Facelift Procedure</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Understanding how our non-surgical facelift works and what makes liquid facelifts 
                so effective for natural facial rejuvenation without surgery.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* What is a Non-Surgical Facelift */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-purple-500 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl mb-4">What is a Non-Surgical Facelift?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">
                      A non-surgical facelift, also known as a <strong className="text-purple-300">liquid facelift</strong>, 
                      is an innovative cosmetic procedure that uses advanced injectable treatments to rejuvenate and lift 
                      the face without the need for surgery or general anaesthesia.
                    </p>
                    <p className="text-gray-300">
                      This comprehensive approach combines <strong className="text-purple-300">dermal fillers</strong> and 
                      <strong className="text-purple-300"> Botox</strong> injections to address multiple signs of aging 
                      simultaneously, creating natural-looking results that restore youthful contours and smooth away 
                      wrinkles and fine lines.
                    </p>
                    <div className="space-y-3 mt-6">
                      <h4 className="text-white font-semibold">Key Benefits:</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="text-purple-500" size={16} />
                          <span className="text-gray-300 text-sm">Revive temple volume loss for natural contours</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="text-purple-500" size={16} />
                          <span className="text-gray-300 text-sm">Fix wrinkles and dynamic lines naturally</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="text-purple-500" size={16} />
                          <span className="text-gray-300 text-sm">Achieve a crease-less, smooth complexion</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="text-purple-500" size={16} />
                          <span className="text-gray-300 text-sm">Restore cheek volume and lift sagging skin</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="text-purple-500" size={16} />
                          <span className="text-gray-300 text-sm">Eliminate under-eye hollows and dark circles</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="text-purple-500" size={16} />
                          <span className="text-gray-300 text-sm">Define jawline and reduce jowls naturally</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="text-purple-500" size={16} />
                          <span className="text-gray-300 text-sm">Smooth nasolabial folds and marionette lines</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="text-purple-500" size={16} />
                          <span className="text-gray-300 text-sm">No surgical incisions or scarring</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="text-purple-500" size={16} />
                          <span className="text-gray-300 text-sm">Minimal downtime and recovery</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="text-purple-500" size={16} />
                          <span className="text-gray-300 text-sm">Natural-looking, gradual results</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="text-purple-500" size={16} />
                          <span className="text-gray-300 text-sm">Customizable to individual facial needs</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="text-purple-500" size={16} />
                          <span className="text-gray-300 text-sm">Immediate visible improvement with full results in 2-4 weeks</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* How Non-Surgical Facelift is Done */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-gray-700 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl mb-4">Treatments Used in Liquid Facelift</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">
                      Our comprehensive non-surgical facelift combines premium treatments 
                      for natural, long-lasting results without surgery.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="text-white font-semibold mb-2">Dermal Fillers</h4>
                        <div className="space-y-1">
                          <p className="text-purple-300 text-sm font-medium">• Juvederm Ultra & Voluma</p>
                          <p className="text-purple-300 text-sm font-medium">• Restylane Lyft & Refyne</p>
                          <p className="text-purple-300 text-sm font-medium">• Radiesse for deep volume</p>
                          <p className="text-gray-300 text-sm">Restore volume, lift sagging areas, enhance contours</p>
                        </div>
                      </div>
                      
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="text-white font-semibold mb-2">Botulinum Toxin</h4>
                        <div className="space-y-1">
                          <p className="text-purple-300 text-sm font-medium">• Botox Cosmetic</p>
                          <p className="text-purple-300 text-sm font-medium">• Azzalure</p>
                          <p className="text-gray-300 text-sm">Smooth dynamic wrinkles and prevent new lines forming</p>
                        </div>
                      </div>
                      
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="text-white font-semibold mb-2">Skin Boosters</h4>
                        <div className="space-y-1">
                          <p className="text-purple-300 text-sm font-medium">• Profhilo</p>
                          <p className="text-purple-300 text-sm font-medium">• Seventy Hyal</p>
                          <p className="text-gray-300 text-sm">Improve skin quality, hydration and elasticity</p>
                        </div>
                      </div>
                      
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="text-white font-semibold mb-2">Combination Approach</h4>
                        <p className="text-gray-300 text-sm">
                          Multiple treatments strategically combined in one session for 
                          comprehensive facial rejuvenation and natural-looking results.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

          </div>
        </section>

        {/* Liquid Facelift vs Traditional Surgery Comparison */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Liquid Facelift vs Traditional Surgery</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Compare the benefits of non-surgical liquid facelifts against traditional surgical procedures 
                to understand which option best suits your needs and lifestyle.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Liquid Facelift */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-purple-600 border-purple-400 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl text-center mb-4">
                      <span className="bg-white text-purple-600 px-3 py-1 rounded-full text-sm font-semibold mr-2">RECOMMENDED</span>
                      <br />
                      <span className="mt-2 block">Liquid Facelift</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="bg-white rounded-full p-1">
                          <CheckCircle className="text-purple-600" size={16} />
                        </div>
                        <div>
                          <span className="text-white font-medium">30-90 minute procedure</span>
                          <p className="text-purple-100 text-sm">Quick, efficient treatment</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="bg-white rounded-full p-1">
                          <CheckCircle className="text-purple-600" size={16} />
                        </div>
                        <div>
                          <span className="text-white font-medium">Local anaesthetic only</span>
                          <p className="text-purple-100 text-sm">No general anaesthesia risks</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="bg-white rounded-full p-1">
                          <CheckCircle className="text-purple-600" size={16} />
                        </div>
                        <div>
                          <span className="text-white font-medium">Return to work same day</span>
                          <p className="text-purple-100 text-sm">Minimal disruption to life</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="bg-white rounded-full p-1">
                          <CheckCircle className="text-purple-600" size={16} />
                        </div>
                        <div>
                          <span className="text-white font-medium">Results last 12-18 months</span>
                          <p className="text-purple-100 text-sm">Long-lasting, renewable results</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="bg-white rounded-full p-1">
                          <CheckCircle className="text-purple-600" size={16} />
                        </div>
                        <div>
                          <span className="text-white font-medium">£1,200-£3,000 cost</span>
                          <p className="text-purple-100 text-sm">Affordable, cost-effective</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="bg-white rounded-full p-1">
                          <CheckCircle className="text-purple-600" size={16} />
                        </div>
                        <div>
                          <span className="text-white font-medium">Natural-looking results</span>
                          <p className="text-purple-100 text-sm">Gradual, subtle enhancement</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Traditional Surgery */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-gray-700 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl text-center mb-4">Traditional Surgery</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center">
                          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                        </div>
                        <div>
                          <span className="text-white font-medium">3-6 hour procedure</span>
                          <p className="text-gray-400 text-sm">Extensive surgical time required</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center">
                          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                        </div>
                        <div>
                          <span className="text-white font-medium">General anaesthesia</span>
                          <p className="text-gray-400 text-sm">Higher risks and complications</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center">
                          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                        </div>
                        <div>
                          <span className="text-white font-medium">2-4 weeks recovery</span>
                          <p className="text-gray-400 text-sm">Extended time off work</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center">
                          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                        </div>
                        <div>
                          <span className="text-white font-medium">Permanent results</span>
                          <p className="text-gray-400 text-sm">Cannot be reversed if unsatisfied</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center">
                          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                        </div>
                        <div>
                          <span className="text-white font-medium">£8,000-£15,000+ cost</span>
                          <p className="text-gray-400 text-sm">Significant financial investment</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center">
                          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                        </div>
                        <div>
                          <span className="text-white font-medium">Dramatic results</span>
                          <p className="text-gray-400 text-sm">Significant, immediate change</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
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
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Non-Surgical Facelift Pricing London</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Transparent pricing for premium liquid facelift treatments. All prices include consultation, 
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
                <Card className="bg-black border-purple-500 h-full text-center">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Mini Liquid Facelift</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£1,200</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Perfect for early signs of aging (2-3 areas)</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Consultation included</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Premium products</span>
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
                    <CardTitle className="text-white text-2xl">Full Liquid Facelift</CardTitle>
                    <div className="text-white text-4xl font-bold">£2,200</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-purple-100">Comprehensive treatment (4-6 areas + Botox)</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Comprehensive consultation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Multiple areas treated</span>
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
                <Card className="bg-black border-gray-700 h-full text-center">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Consultation Only</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£50</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Professional assessment and treatment planning</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Full facial assessment</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Personalized treatment plan</span>
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
                onClick={() => window.open(bookingUrl, "_blank")}
                className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 text-lg font-semibold"
              >
                Book Your Consultation
              </Button>
            </motion.div>
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
                <p className="text-gray-300">Premium FDA-approved treatments only</p>
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

        {/* Treatment Areas */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Comprehensive Facial Rejuvenation Areas</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Our non-surgical facelift targets multiple areas of the face for complete rejuvenation 
                and natural-looking results that enhance your facial harmony.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { area: "Cheek Volume Restoration", description: "Restore youthful fullness and lift to the mid-face area" },
                { area: "Temple Volume Enhancement", description: "Address hollowing in the temple areas for balanced proportions" },
                { area: "Under-Eye Rejuvenation", description: "Reduce dark circles and hollowing under the eyes" },
                { area: "Nasolabial Fold Smoothing", description: "Soften smile lines for a more youthful appearance" },
                { area: "Marionette Line Treatment", description: "Address downturned mouth lines for a happier expression" },
                { area: "Jawline Contouring", description: "Define and enhance the jawline for better facial structure" },
                { area: "Lip Enhancement", description: "Restore volume and definition to aging lips" },
                { area: "Forehead Line Treatment", description: "Smooth horizontal forehead lines with Botox" },
                { area: "Crow's Feet Reduction", description: "Eliminate fine lines around the eyes" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-black border-gray-800 h-full hover:border-purple-500 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-white text-lg">{item.area}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
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
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Get answers to common questions about non-surgical facelift treatments at our London clinic.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-accent rounded-lg border-gray-800">
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
              <h2 className="text-3xl font-bold mb-4">Ready for Your Transformation?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert cosmetic doctors and discover how a non-surgical facelift 
                can rejuvenate your appearance without surgery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.open(bookingUrl, "_blank")}
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6"
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

        {/* Hidden SEO content for search engines */}
        <div className="sr-only">
          <h3>Comprehensive Non-Surgical Facelift Information London</h3>
          <p>
            Cosmedocs Harley Street clinic offers premium non-surgical facelift treatments in London using advanced dermal fillers and Botox. Our expert cosmetic doctors specialize in liquid facelift procedures that provide natural facial rejuvenation without surgery. Located at 10 Harley Street, we provide safe, effective non-surgical facelifts with minimal downtime and natural-looking results. Our liquid facelift treatments are competitively priced with transparent rates available in our pricing section. Mini liquid facelift provides subtle rejuvenation perfect for early aging signs, lasting 12-18 months. Full liquid facelift offers comprehensive transformation for multiple facial areas, combining dermal fillers and Botox for optimal results.
          </p>
          <p>
            We use only FDA-approved products including premium dermal fillers and Botox from leading manufacturers. Our comprehensive non-surgical facelift services include cheek volume restoration, temple enhancement, under-eye rejuvenation, nasolabial fold smoothing, marionette line treatment, jawline contouring, lip enhancement, and wrinkle reduction. The treatment addresses multiple signs of aging simultaneously for harmonious facial rejuvenation. Understanding facial anatomy is crucial as our expert practitioners strategically place treatments to lift, contour, and rejuvenate the face naturally.
          </p>
          <p>
            Our experienced practitioners have performed over one million aesthetic injections since 2007, making us one of London's most trusted cosmetic clinics. Non-surgical facelift procedures typically take 2-3 hours with immediate visible improvements. Recovery involves minimal downtime with most patients returning to normal activities immediately. Proper aftercare includes avoiding strenuous exercise for 24 hours, applying ice packs as needed, and following post-treatment instructions. We provide detailed aftercare instructions and follow-up appointments to ensure optimal healing and satisfaction. Our 'invisible art' philosophy ensures natural-looking facial rejuvenation that enhances your inherent beauty. Book your non-surgical facelift consultation today by calling 0333 0551 503 or visiting our Harley Street clinic.
          </p>
        </div>
      </div>
    </>
  );
};

export default NonSurgicalFacelift;