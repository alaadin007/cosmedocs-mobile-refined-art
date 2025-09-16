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
import BeforeAfterImageViewer from '@/components/BeforeAfterImageViewer';
import { Check, Clock, Calendar, Activity, Syringe, CheckCircle, Award, GraduationCap, Palette, Heart } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";

const ChinBotox = () => {
  const seoData = generateSEOMetadata(
    "Chin Botox London | Dimpled Chin Treatment | Cosmedocs Harley Street",
    "Expert chin botox treatment in London for dimpled and pebble chin. Professional mentalis muscle botox by cosmetic doctors. Natural results at Harley Street clinic.",
    "/chin-botox"
  );

  const beforeAfterImages = [
    { src: "/lovable-uploads/2d50a34b-eb5c-40fd-849d-79e90a7cf03c.png", alt: "Chin botox before and after treatment", caption: "Chin Botox Treatment: Smooth, refined chin texture eliminating dimpling and cobblestone appearance. Natural results achieved with precision DAO muscle botox - transformation that speaks without saying a word." }
  ];

  const faqs = [
    {
      question: "What is chin botox and how does it work?",
      answer: "Chin botox involves injecting botulinum toxin into the mentalis muscle to relax overactive contractions that cause chin dimpling, pebble chin texture, and excessive chin protrusion. This creates a smoother, more refined chin appearance."
    },
    {
      question: "What causes chin dimpling and pebble chin texture?",
      answer: "Chin dimpling is caused by overactive mentalis muscle contractions when you speak, smile, or show emotion. This creates an uneven, cobblestone-like texture that can age your appearance and affect facial harmony."
    },
    {
      question: "How long do chin botox results last?",
      answer: "Chin botox results typically last 3-4 months. The duration depends on your metabolism, muscle strength, and lifestyle factors. Regular treatments help maintain optimal results and may extend the duration over time."
    },
    {
      question: "Is chin botox painful?",
      answer: "Chin botox involves minimal discomfort. Most clients describe it as a brief pinching sensation. The treatment takes just 10-15 minutes, and we use fine needles to ensure maximum comfort throughout the procedure."
    },
    {
      question: "What can I expect after chin botox treatment?",
      answer: "You may experience mild swelling or redness at injection sites for a few hours. Results begin appearing within 3-5 days, with full effects visible after 2 weeks. Most clients return to normal activities immediately after treatment."
    },
    {
      question: "Am I a good candidate for chin botox?",
      answer: "Ideal candidates have chin dimpling when speaking or smiling, downturned mouth corners, or an overactive mentalis muscle. A consultation with our expert doctors will determine if chin botox is right for your specific concerns."
    },
    {
      question: "How much does chin botox cost?",
      answer: "Chin botox at Cosmedocs costs £175 when done independently, or £50 extra when combined with other botox areas like frown lines, forehead, or crow's feet. We provide transparent pricing during your consultation with no hidden fees."
    },
    {
      question: "Can chin botox be combined with other treatments?",
      answer: "Yes! Chin botox works excellently with other facial treatments like dermal fillers for comprehensive facial enhancement. Our doctors can create a personalized treatment plan combining multiple procedures for optimal results."
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
        <meta name="keywords" content="chin botox London, dimpled chin treatment, pebble chin, mentalis muscle botox, chin smoothing, cosmetic botox, Harley Street clinic, chin enhancement" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Cosmedocs",
            "description": "Expert chin botox treatments in London",
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
                  <span className="text-purple-300">Chin Botox London</span>
                  <span className="block text-sm mt-4">Invisible art - smooth chin enhancement that speaks without words</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Expert Dimpled Chin Treatment</p>
                  <p className="text-sm text-gray-300">15-20 minutes • Results last 3-4 months</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl"
                    onClick={() => window.open('https://med.as.me/harleystreet', '_blank')}
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
              <h2 className="text-3xl font-bold mb-8 text-white">Chin Botox Treatment</h2>
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
                <p className="text-gray-300">15-20 minutes including consultation</p>
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
                <p className="text-gray-300">3-4 months with gradual muscle return</p>
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
                <p className="text-gray-300">Immediate return to activities</p>
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
                <p className="text-gray-300">Topical anaesthetic if required</p>
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
              <h2 className="text-3xl font-bold mb-4">Chin Botox Before and After Results</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See how our expert chin botox treatments smooth dimpled chins and lift downturned mouth corners for natural, youthful results.
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
                title="Chin Botox Results Gallery"
                description="Comprehensive gallery of our chin botox treatments"
              />
            </div>
          </div>
        </section>

        {/* What is Chin Botox */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">What is Chin Botox?</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Chin botox is a minimally invasive treatment that targets the mentalis muscle responsible for chin dimpling, 
                pebble chin texture, and excessive chin protrusion. Our invisible art approach creates natural smoothness.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-white">Understanding the Mentalis Muscle</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  The mentalis muscle is located in your chin and contracts when you speak, smile, or show emotion. 
                  When overactive, it creates an uneven, dimpled, or "pebble" texture that can age your appearance 
                  and detract from your natural beauty.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="text-white font-semibold">Dimpled Chin Treatment</h4>
                      <p className="text-gray-300 text-sm">Smooths the irregular texture for elegant refinement</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="text-white font-semibold">Pebble Chin Correction</h4>
                      <p className="text-gray-300 text-sm">Eliminates cobblestone appearance for smooth contours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="text-white font-semibold">Muscle Relaxation</h4>
                      <p className="text-gray-300 text-sm">Reduces overactive contractions for balanced proportions</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-8">
                  <h4 className="text-white text-xl font-bold mb-4 text-center">Chin Botox Benefits</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-purple-400" size={20} />
                      <span className="text-gray-300">Smoother chin texture</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-purple-400" size={20} />
                      <span className="text-gray-300">Reduced dimpling when speaking</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-purple-400" size={20} />
                      <span className="text-gray-300">More balanced facial proportions</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-purple-400" size={20} />
                      <span className="text-gray-300">Natural, subtle enhancement</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-purple-400" size={20} />
                      <span className="text-gray-300">Quick 15-minute treatment</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-purple-400" size={20} />
                      <span className="text-gray-300">Results visible within days</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Combination Treatments with Chin Botox */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Combination Treatments with Chin Botox</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Enhance your chin botox results with complementary treatments for comprehensive facial rejuvenation. 
                Our expert doctors create personalized treatment plans that deliver natural, harmonious results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl text-center">Chin Botox + Dermal Fillers</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300 text-center">
                      Combine smooth muscle relaxation with volume enhancement for complete chin transformation.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span className="text-gray-300 text-sm">Enhanced chin projection</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span className="text-gray-300 text-sm">Improved facial balance</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span className="text-gray-300 text-sm">Defined jawline contours</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span className="text-gray-300 text-sm">Long-lasting results</span>
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
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl text-center">Chin Botox + Facial Botox</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300 text-center">
                      Add chin botox to your existing facial botox routine for comprehensive muscle relaxation.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span className="text-gray-300 text-sm">Full facial rejuvenation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span className="text-gray-300 text-sm">Cost-effective pricing</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span className="text-gray-300 text-sm">Single appointment</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span className="text-gray-300 text-sm">Harmonious results</span>
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
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl text-center">Chin Botox + Thread Lift</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300 text-center">
                      Combine muscle relaxation with lifting for enhanced jawline definition and facial contouring.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span className="text-gray-300 text-sm">Lifted facial contours</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span className="text-gray-300 text-sm">Enhanced skin tightening</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span className="text-gray-300 text-sm">Non-surgical facelift effect</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span className="text-gray-300 text-sm">Natural rejuvenation</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Aftercare & Recovery Guide */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Chin Botox Aftercare & Recovery</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Proper aftercare ensures optimal results and minimizes any potential side effects. Follow our 
                comprehensive guide for the best chin botox experience and longest-lasting results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/50 border-green-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl text-center text-green-400">Immediate Aftercare (First 24 Hours)</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <Check className="text-green-400 mt-1" size={16} />
                        <div>
                          <p className="font-semibold text-white">Stay Upright</p>
                          <p className="text-sm text-gray-300">Remain upright for 4 hours post-treatment to prevent migration</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Check className="text-green-400 mt-1" size={16} />
                        <div>
                          <p className="font-semibold text-white">Gentle Ice Application</p>
                          <p className="text-sm text-gray-300">Apply ice wrapped in cloth for 10 minutes if swelling occurs</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Check className="text-green-400 mt-1" size={16} />
                        <div>
                          <p className="font-semibold text-white">Avoid Touching</p>
                          <p className="text-sm text-gray-300">Don't massage or touch the treated area for 24 hours</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Check className="text-green-400 mt-1" size={16} />
                        <div>
                          <p className="font-semibold text-white">Normal Activities</p>
                          <p className="text-sm text-gray-300">Return to work and light activities immediately</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/50 border-orange-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl text-center text-orange-400">First Week Guidelines</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <Check className="text-orange-400 mt-1" size={16} />
                        <div>
                          <p className="font-semibold text-white">Avoid Intense Exercise</p>
                          <p className="text-sm text-gray-300">Skip heavy workouts for 24-48 hours to prevent swelling</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Check className="text-orange-400 mt-1" size={16} />
                        <div>
                          <p className="font-semibold text-white">No Facial Treatments</p>
                          <p className="text-sm text-gray-300">Avoid facials, microdermabrasion, or laser treatments</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Check className="text-orange-400 mt-1" size={16} />
                        <div>
                          <p className="font-semibold text-white">Gentle Skincare</p>
                          <p className="text-sm text-gray-300">Use mild cleansers and avoid harsh exfoliants</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Check className="text-orange-400 mt-1" size={16} />
                        <div>
                          <p className="font-semibold text-white">Monitor Progress</p>
                          <p className="text-sm text-gray-300">Results begin appearing within 3-5 days</p>
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
        <section id="pricing-section" className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Chin Botox Pricing London</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Transparent pricing for expert chin botox treatments. All prices include consultation, 
                treatment, and aftercare support from our qualified medical team.
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
                    <CardTitle className="text-white text-2xl">Chin Botox Standalone</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£175</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Complete chin botox treatment when done independently</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Full consultation included</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Expert DAO muscle treatment</span>
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
                    <CardTitle className="text-white text-2xl">Combined Treatment</CardTitle>
                    <div className="text-white text-4xl font-bold">+£50</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-purple-100">When combined with other botox areas for maximum value</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Combines with forehead, frown, or crow's feet</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Comprehensive facial treatment</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Maximum cost savings</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Single appointment convenience</span>
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
                    <div className="text-purple-300 text-4xl font-bold">£50</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Expert assessment and treatment planning</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Comprehensive facial analysis</span>
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <p className="text-gray-300 mb-6">
                *Consultation fee is deducted from treatment cost if you proceed on the same day
              </p>
              <Button 
                onClick={() => window.open('https://med.as.me/harleystreet', '_blank')}
                className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 text-lg font-semibold"
              >
                Book Your Consultation
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Related Chin Treatments Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Related Chin Treatments</h2>
              <p className="text-xl text-gray-300">Complete your chin transformation with our complementary treatments</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">V-Line Chin Contouring</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Enhance your chin botox results with our signature V-Line treatment. Using advanced dermal fillers, 
                    we create defined jawline contours that complement the smooth chin texture achieved with botox.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-400">
                      <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      Enhanced jawline definition
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      Natural, elegant contouring
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      Complements chin botox treatment
                    </div>
                  </div>
                  <Button 
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-6 py-3"
                    onClick={() => window.open('https://med.as.me/harleystreet', '_blank')}
                  >
                    Learn More About V-Line
                  </Button>
                </div>
                
                <div className="relative max-w-md mx-auto">
                  <img 
                    src="/lovable-uploads/b71849b7-d2b9-40c0-99c3-4f8589f8341b.png"
                    alt="V-Line chin contouring before and after results"
                    className="w-full h-auto max-h-96 object-cover rounded-lg shadow-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                </div>
              </div>
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
                <h3 className="text-lg font-semibold text-white mb-2">Expert Doctors</h3>
                <p className="text-gray-300">GMC-registered cosmetic doctors</p>
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
                <h3 className="text-lg font-semibold text-white mb-2">Experience</h3>
                <p className="text-gray-300">15+ years in cosmetic medicine</p>
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
                <h3 className="text-lg font-semibold text-white mb-2">Safety First</h3>
                <p className="text-gray-300">Premium products and protocols</p>
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
                Get answers to common questions about chin botox treatments at our London clinic.
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
              <h2 className="text-3xl font-bold mb-4">Ready to Smooth Your Chin?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert cosmetic doctors and discover how chin botox 
                can enhance your natural beauty with subtle, sophisticated results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.open('https://med.as.me/harleystreet', '_blank')}
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6"
                >
                  Book Consultation
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6"
                  onClick={() => window.open('tel:0333055150', '_self')}
                >
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

export default ChinBotox;