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
import { Check, Clock, Calendar, Activity, Syringe, CheckCircle, Award, GraduationCap, Palette, Heart } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";

const ExcessiveSweatBotox = () => {
  const seoData = generateSEOMetadata(
    "Excessive Sweating Botox London | Hyperhidrosis Treatment | Cosmedocs Harley Street",
    "Expert excessive sweating botox treatment in London for hyperhidrosis. Professional therapeutic botox for underarms, hands, and feet by cosmetic doctors. Life-changing results at Harley Street clinic.",
    "/excessive-sweat-botox"
  );

  const beforeAfterImages = [
    { src: "/lovable-uploads/2d50a34b-eb5c-40fd-849d-79e90a7cf03c.png", alt: "Excessive sweating botox treatment results", caption: "Excessive Sweating Botox Treatment: Significant reduction in sweat production and improved confidence. Expert therapeutic intervention - transformation that speaks without saying a word." }
  ];

  const faqs = [
    {
      question: "How does botox help with excessive sweating?",
      answer: "Botox blocks nerve signals to sweat glands, dramatically reducing sweat production. It's FDA-approved for severe underarm sweating (hyperhidrosis) and can also treat palms, feet, and other areas for life-changing results."
    },
    {
      question: "How long do excessive sweating botox results last?",
      answer: "Excessive sweating botox results typically last 6-12 months for underarms, and 4-6 months for hands and feet. Many patients experience dramatic reduction in sweating, significantly improving their quality of life and confidence."
    },
    {
      question: "Is excessive sweating botox painful?",
      answer: "Treatment involves multiple small injections which can be uncomfortable, especially for hands and feet. We use topical anesthetic and ice to minimize discomfort during the 20-30 minute procedure."
    },
    {
      question: "What can I expect after excessive sweating botox treatment?",
      answer: "You may experience mild soreness at injection sites for 24-48 hours. Sweat reduction begins within 1-2 weeks, with maximum dryness achieved by 4 weeks. Normal activities can be resumed immediately."
    },
    {
      question: "Am I a good candidate for excessive sweating botox?",
      answer: "Ideal candidates have severe sweating that significantly impacts daily life and hasn't responded to antiperspirants. A consultation will assess your condition and determine if this therapeutic treatment is suitable."
    },
    {
      question: "How much does excessive sweating botox cost?",
      answer: "Excessive sweating botox at Cosmedocs costs £450-650 depending on the area treated. Underarms require fewer units than hands or feet. This therapeutic investment can be life-changing for severe hyperhidrosis sufferers."
    },
    {
      question: "Can excessive sweating botox be combined with other treatments?",
      answer: "Yes! Excessive sweating botox can be combined with cosmetic botox treatments for comprehensive care. Our doctors create personalized treatment plans addressing both therapeutic and aesthetic concerns simultaneously."
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
        <meta name="keywords" content="excessive sweating botox London, hyperhidrosis treatment, underarm botox, palmar hyperhidrosis, therapeutic botox, sweat reduction, Harley Street clinic" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Cosmedocs",
            "description": "Expert excessive sweating botox treatments in London",
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
                  <span className="text-purple-300">Excessive Sweating Botox London</span>
                  <span className="block text-sm mt-4">Invisible art - confidence that speaks without words</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Expert Hyperhidrosis Treatment</p>
                  <p className="text-sm text-gray-300">20-30 minutes • Results last 6-12 months</p>
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
              <h2 className="text-3xl font-bold mb-8 text-white">Excessive Sweating Botox Treatment</h2>
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
                <p className="text-gray-300">20-30 minutes including consultation</p>
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
                <p className="text-gray-300">6-12 months for underarms</p>
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
                <p className="text-gray-300">Topical anaesthetic applied</p>
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
              <h2 className="text-3xl font-bold mb-4">Excessive Sweating Botox Results</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See how our expert excessive sweating botox treatments provide life-changing sweat reduction and renewed confidence.
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

        {/* What is Excessive Sweating Botox */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">What is Excessive Sweating Botox?</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Excessive sweating botox is an FDA-approved treatment for hyperhidrosis that blocks nerve signals to sweat glands. 
                Our invisible art approach provides dramatic sweat reduction, transforming the lives of those with severe sweating conditions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 max-w-4xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-white text-2xl text-center">Understanding Hyperhidrosis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-lg leading-relaxed text-center">
                    Hyperhidrosis is a medical condition causing excessive sweating that significantly impacts daily life, confidence, and social interactions. 
                    Botox treatment blocks the nerve signals that trigger sweat production, providing dramatic relief for sufferers.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-8 max-w-2xl mx-auto">
                <h4 className="text-white text-xl font-bold mb-4">Key Treatment Areas</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-purple-300 font-medium">Underarms</div>
                  <div className="text-purple-300 font-medium">Palms</div>
                  <div className="text-purple-300 font-medium">Feet</div>
                  <div className="text-purple-300 font-medium">Forehead</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Excessive Sweating Causes */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Excessive Sweating Causes</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Certain sweat glands in hyperhidrosis work overtime for no apparent reason, producing sweat that your body does not need.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { title: "Genetics", icon: GraduationCap },
                { title: "Emotional Stress", icon: Heart },
                { title: "Hormonal Changes", icon: Activity },
                { title: "Medical Conditions", icon: CheckCircle }
              ].map((cause, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <cause.icon className="text-purple-600" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{cause.title}</h3>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 max-w-4xl mx-auto">
                <CardContent className="pt-6">
                  <p className="text-gray-300 text-center">
                    Common factors that can worsen sweating include genetics, emotional or mental stress, menopause, 
                    hormonal imbalance, diabetes, obesity, and certain medications for heart health.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Benefits of Treatment */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Benefits of Botox for Excessive Sweating</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Botulinum toxin injections are considered one of the most effective treatments for excessive sweating, 
                acting as a medical-grade antiperspirant.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader className="text-center">
                    <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="text-purple-600" size={24} />
                    </div>
                    <CardTitle className="text-white text-xl">Little to No Pain</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-center">
                      Minimal discomfort with topical anaesthetic applied before treatment
                    </p>
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
                  <CardHeader className="text-center">
                    <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Activity className="text-purple-600" size={24} />
                    </div>
                    <CardTitle className="text-white text-xl">Immediate Return</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-center">
                      Resume all daily activities immediately after treatment
                    </p>
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
                  <CardHeader className="text-center">
                    <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Calendar className="text-purple-600" size={24} />
                    </div>
                    <CardTitle className="text-white text-xl">Long-Lasting Results</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-center">
                      Effects last 4-8 months depending on treatment area
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Assessment and Preparation */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 text-white">Assessing Excessive Sweating</h2>
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Hyperhidrosis Disease Severity Scale (HDSS)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      HDSS is a point scale (sweat test) that sets specific benchmarks to rate the seriousness of a patient's condition. 
                      It evaluates how much excessive sweating interferes with daily activities.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Severity assessment</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Daily impact evaluation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Treatment planning</span>
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
                <h2 className="text-3xl font-bold mb-6 text-white">How to Prepare for Treatment</h2>
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center mt-1">
                          <span className="text-purple-600 font-bold text-sm">1</span>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-1">Shave Treatment Areas</h4>
                          <p className="text-gray-300 text-sm">Arrive with shaved underarms (males and females). Preferably shave a few days before treatment.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center mt-1">
                          <span className="text-purple-600 font-bold text-sm">2</span>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-1">Wear Appropriate Clothing</h4>
                          <p className="text-gray-300 text-sm">Choose loose fitting top or sleeveless shirt to expose treatment area.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center mt-1">
                          <span className="text-purple-600 font-bold text-sm">3</span>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-1">Consultation Required</h4>
                          <p className="text-gray-300 text-sm">Professional assessment to determine suitability and treatment plan.</p>
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
              <h2 className="text-3xl font-bold mb-6 text-white">Excessive Sweating Botox Pricing</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Transparent pricing for therapeutic excessive sweating botox treatments at our Harley Street clinic.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full border-2 border-purple-400">
                  <CardHeader className="text-center">
                    <CardTitle className="text-white text-xl">Underarms</CardTitle>
                    <div className="text-3xl font-bold text-purple-300">£450</div>
                    <div className="text-sm text-purple-400">Most Popular</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Both underarms</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Lasts 6-12 months</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">FDA-approved</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Expert consultation</span>
                      </li>
                    </ul>
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
                  <CardHeader className="text-center">
                    <CardTitle className="text-white text-xl">Palms</CardTitle>
                    <div className="text-3xl font-bold text-purple-300">£550</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Both hands</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Lasts 4-6 months</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Multiple injection points</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Nerve block procedure</span>
                      </li>
                    </ul>
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
                  <CardHeader className="text-center">
                    <CardTitle className="text-white text-xl">Feet</CardTitle>
                    <div className="text-3xl font-bold text-purple-300">£650</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Both feet</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Lasts 4-6 months</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Comprehensive coverage</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Maximum units</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
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
              <h2 className="text-3xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Common questions about excessive sweating botox treatments answered by our expert doctors.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 rounded-lg px-6">
                    <AccordionTrigger className="text-white hover:text-purple-300 text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black">
          <div className="page-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Ready to Stop Excessive Sweating?</h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Book your expert consultation today and discover how therapeutic botox can transform your confidence and quality of life.
              </p>
              <Button 
                className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl"
                onClick={() => window.open('https://med.as.me/harleystreet', '_blank')}
              >
                Book Free Consultation
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h3>Expert Excessive Sweating Botox Treatment in London</h3>
          <p>Cosmedocs offers professional excessive sweating botox treatments for hyperhidrosis affecting underarms, palms, and feet. Our experienced cosmetic doctors use FDA-approved therapeutic botox protocols to dramatically reduce sweat production. Located in prestigious Harley Street, our clinic provides comprehensive assessments and life-changing treatment plans.</p>
          
          <h4>Why Choose Cosmedocs for Excessive Sweating Botox?</h4>
          <p>Our invisible art philosophy ensures effective therapeutic treatment with maximum sweat reduction. We specialize in precise nerve blocking techniques using the latest injection protocols for optimal outcomes. Our doctors have extensive experience in treating hyperhidrosis and understand the life-changing impact of successful treatment.</p>
          
          <h4>Understanding Hyperhidrosis Treatment</h4>
          <p>Hyperhidrosis is a medical condition causing excessive sweating that significantly impacts daily life, work, and social interactions. Professional botox treatment blocks nerve signals to sweat glands, providing dramatic reduction in sweat production and restoring confidence for sufferers of this challenging condition.</p>
          
          <h4>Treatment Process and Sweat Management</h4>
          <p>Our excessive sweating botox treatment begins with a comprehensive hyperhidrosis assessment and medical consultation. The injection process takes 20-30 minutes using specialized techniques and topical anesthesia. Results appear gradually over 1-4 weeks, with optimal effects lasting 6-12 months for underarms. We provide ongoing hyperhidrosis management support and regular follow-up care.</p>
        </div>
      </div>
    </>
  );
};

export default ExcessiveSweatBotox;