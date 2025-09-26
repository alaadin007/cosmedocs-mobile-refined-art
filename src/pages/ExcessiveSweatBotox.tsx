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
              <h2 className="text-3xl font-bold mb-6 text-white">Excessive Sweating Botox Treatment</h2>
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

          </div>
        </section>

        {/* Combined: Causes & Benefits */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* What Causes Excessive Sweating */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">What Causes Excessive Sweating?</h2>
                
                <Card className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/30">
                  <CardContent className="p-6">
                    <p className="text-gray-300 mb-6">
                      Hyperhidrosis occurs when sweat glands work overtime for no apparent reason.
                    </p>

                    <ul className="space-y-4">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h3 className="text-white font-medium mb-1">Genetics</h3>
                          <p className="text-gray-300 text-sm">Family history plays a significant role in primary hyperhidrosis.</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h3 className="text-white font-medium mb-1">Emotional Stress</h3>
                          <p className="text-gray-300 text-sm">Anxiety and stress can trigger increased sweating.</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h3 className="text-white font-medium mb-1">Hormonal Changes</h3>
                          <p className="text-gray-300 text-sm">Pregnancy, menopause, and thyroid disorders can cause excessive sweating.</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h3 className="text-white font-medium mb-1">Medical Conditions</h3>
                          <p className="text-gray-300 text-sm">Certain medications and medical conditions can trigger hyperhidrosis.</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Benefits of Botox for Excessive Sweating */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">Benefits of Botox Treatment</h2>
                
                <Card className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/30">
                  <CardContent className="p-6">
                    <p className="text-gray-300 mb-6">
                      Botox injections are an effective treatment for excessive sweating.
                    </p>

                    <ul className="space-y-4">
                      <li className="flex items-start space-x-3">
                        <Check className="text-purple-400 mt-1" size={16} />
                        <div>
                          <h3 className="text-white font-medium mb-1">Minimal Pain</h3>
                          <p className="text-gray-300 text-sm">Quick injections with topical anaesthetic for comfort.</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start space-x-3">
                        <Check className="text-purple-400 mt-1" size={16} />
                        <div>
                          <h3 className="text-white font-medium mb-1">Long-Lasting</h3>
                          <p className="text-gray-300 text-sm">Results last 6-12 months for underarms, 4-6 months for hands and feet.</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start space-x-3">
                        <Check className="text-purple-400 mt-1" size={16} />
                        <div>
                          <h3 className="text-white font-medium mb-1">Boosts Confidence</h3>
                          <p className="text-gray-300 text-sm">No more worry about sweat stains or odour in social situations.</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start space-x-3">
                        <Check className="text-purple-400 mt-1" size={16} />
                        <div>
                          <h3 className="text-white font-medium mb-1">FDA Approved</h3>
                          <p className="text-gray-300 text-sm">Clinically proven to reduce excessive sweating by up to 87%.</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
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
                          <h4 className="text-white font-semibold mb-1">Shave Treatment Area</h4>
                          <p className="text-gray-300 text-sm">For underarm treatment, shave 2-3 days before your appointment to ensure optimal injection placement.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center mt-1">
                          <span className="text-purple-600 font-bold text-sm">2</span>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-1">Wear Suitable Clothing</h4>
                          <p className="text-gray-300 text-sm">Choose loose-fitting or sleeveless top for easy access to treatment areas.</p>
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

        {/* Possible Hyperhidrosis Treatment Areas */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Possible Hyperhidrosis Treatment Areas</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                CosmeDocs is one of the first skin clinics in London to use Botox to treat hyperhidrosis.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
              {[
                { 
                  title: "Facial Areas", 
                  icon: Palette,
                  description: "Forehead and facial sweating treatment"
                },
                { 
                  title: "Armpit / Underarms", 
                  icon: Activity,
                  description: "Most common treatment area for hyperhidrosis"
                },
                { 
                  title: "Palms", 
                  icon: Heart,
                  description: "Palmar hyperhidrosis treatment for hands"
                },
                { 
                  title: "Feet", 
                  icon: CheckCircle,
                  description: "Plantar hyperhidrosis treatment for feet"
                }
              ].map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                    <CardContent className="p-6">
                      <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <area.icon className="text-purple-600" size={24} />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{area.title}</h3>
                      <p className="text-gray-300 text-sm">{area.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 max-w-4xl mx-auto">
                <CardContent className="p-8">
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    Moreover, a medical study suggests the usage of high doses to relax sweat glands has long-lasting results. 
                    This approach allows anti-sweat injections to treat excessive sweating quite effectively.
                  </p>
                  <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-4 border border-purple-500/20">
                    <p className="text-purple-200 font-medium">
                      CosmeDocs is also a member of the International Hyperhidrosis Society.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* YouTube Video */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold text-white mb-6">Watch: Hyperhidrosis Treatment Process</h3>
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/iyxFwdP15v4" 
                    title="Hyperhidrosis Treatment with Botox"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="rounded-2xl"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Doses Of Botox in Armpit */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 text-white">Doses Of Botox in Armpit</h2>
                <div className="space-y-6">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    The dosage of Botox in armpit depends on the size of the underarm area. We aim to inject a concentrated dose per square centimetre, covering the entire hairy patch area of the underarm.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Studies have revealed that a higher dose is safe, effective, and long-lasting. We aim to reduce the excess sweating in the armpit by more than 50-75%.
                  </p>
                  <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <Award className="text-purple-400" size={24} />
                        <h3 className="text-white font-semibold">Treatment Effectiveness</h3>
                      </div>
                      <p className="text-gray-300">
                        Higher doses provide safe, effective, and long-lasting results for excessive sweating reduction.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl p-8 border border-purple-500/20">
                  <img 
                    src="/images/botox-armpit-injections.png" 
                    alt="Botox in armpit injections showing treatment area" 
                    className="w-full h-64 object-contain rounded-lg mb-6 bg-white/5"
                  />
                  <div className="text-center">
                    <h3 className="text-white font-semibold mb-2">Professional Injection Technique</h3>
                    <p className="text-gray-300 text-sm">
                      Precise injection pattern covering the entire underarm area for optimal sweat reduction results.
                    </p>
                  </div>
                </div>
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
              <h2 className="text-3xl font-bold mb-6 text-white">Botox In Armpit Face & Body Treatment Prices</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Professional hyperhidrosis treatment pricing at CosmeDocs Harley Street clinic. All treatments include expert consultation and follow-up care.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full border-2 border-purple-400">
                  <CardHeader className="text-center">
                    <CardTitle className="text-white text-xl">Armpits (Underarms)</CardTitle>
                    <div className="text-3xl font-bold text-purple-300">£550</div>
                    <div className="text-sm text-purple-400">Most Popular</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Both underarms treated</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Lasts 4-6 months</span>
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
                        <span className="text-gray-300">Both hands treated</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Lasts 4-6 months</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Multiple injections</span>
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
                        <span className="text-gray-300">Both feet treated</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Top surface sweating</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Effective results</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader className="text-center">
                    <CardTitle className="text-white text-xl">Forehead</CardTitle>
                    <div className="text-3xl font-bold text-purple-300">£350</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Facial sweating</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Quick treatment</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Minimal discomfort</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Additional Treatment Areas */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 max-w-4xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-white text-2xl text-center">Additional Treatment Areas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="space-y-2">
                      <div className="text-purple-300 font-semibold">Scalp</div>
                      <div className="text-white text-lg">£600</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-purple-300 font-semibold">Nose</div>
                      <div className="text-white text-lg">£200</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-purple-300 font-semibold">Cheeks</div>
                      <div className="text-white text-lg">£200</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-purple-300 font-semibold">Other Areas</div>
                      <div className="text-white text-lg">On Consultation</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
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
                Common questions about excessive sweating botox treatment answered by our expert practitioners.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-purple-500/30 rounded-lg px-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30">
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
              <h2 className="text-3xl font-bold mb-4">Ready to Stop Excessive Sweating?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert cosmetic doctors and discover how excessive sweating botox 
                can transform your confidence with life-changing results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6"
                  onClick={() => window.open('https://med.as.me/harleystreet', '_blank')}
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

export default ExcessiveSweatBotox;