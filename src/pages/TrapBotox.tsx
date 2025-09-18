import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Award, GraduationCap, CheckCircle, Palette, Heart, Clock, Calendar, Activity, Syringe } from 'lucide-react';
import BeforeAfterImageViewer from '@/components/BeforeAfterImageViewer';
import { generateSEOMetadata } from '@/utils/seo';

const TrapBotox = () => {
  const seoData = generateSEOMetadata(
    "Trap Botox London | Shoulder Slimming & Neck Contouring",
    "Professional trap botox treatments in London. Reduce shoulder bulk, slim your trapezius muscles, and achieve elegant neck contouring. Book a consultation.",
    "/trap-botox"
  );

  const beforeAfterImages = [
    { src: "/lovable-uploads/trap-botox-1.png", alt: "Trap botox before and after", caption: "Dramatic shoulder slimming after trap botox treatment" },
    { src: "/lovable-uploads/trap-botox-2.png", alt: "Trapezius muscle contouring", caption: "Enhanced neck line and reduced shoulder bulk" },
    { src: "/lovable-uploads/trap-botox-3.png", alt: "Trap botox progression", caption: "Progressive muscle relaxation over 2-4 weeks" },
    { src: "/lovable-uploads/trap-botox-4.png", alt: "Trap botox results", caption: "Elegant shoulder profile and improved posture" },
    { src: "/lovable-uploads/trap-botox-5.png", alt: "Neck contouring with trap botox", caption: "Refined neck contour and shoulder definition" },
    { src: "/lovable-uploads/trap-botox-6.png", alt: "Shoulder slimming treatment", caption: "Natural-looking shoulder slimming results" }
  ];

  const faqs = [
    {
      question: "What is trap botox?",
      answer: "Trap botox involves injecting botulinum toxin into the trapezius muscles to reduce their size and create a more elegant, slender shoulder profile. It's particularly popular for those who want to reduce shoulder bulk and achieve a more feminine silhouette."
    },
    {
      question: "How does trap botox work?",
      answer: "Botox temporarily relaxes the trapezius muscles, causing them to atrophy slightly over time. This creates a slimming effect on the shoulders and can improve the overall neck and shoulder contour."
    },
    {
      question: "Is trap botox painful?",
      answer: "The treatment involves multiple small injections into the trapezius muscles. Most patients experience mild discomfort, similar to other botox treatments. We use very fine needles to minimize any pain."
    },
    {
      question: "How long do results last?",
      answer: "Results typically last 4-6 months. With regular treatments, the muscles may become smaller over time, potentially extending the duration of results."
    },
    {
      question: "When will I see results?",
      answer: "Initial effects may be noticed within 1-2 weeks, with full results visible after 4-6 weeks as the muscles gradually relax and reduce in size."
    },
    {
      question: "Are there any side effects?",
      answer: "Possible side effects include temporary weakness in the treated area, mild bruising, or headache. Our experienced practitioners minimize risks through precise injection techniques."
    },
    {
      question: "How much does trap botox cost?",
      answer: "The cost starts from £350. Final pricing depends on the amount of botox needed and your individual treatment plan."
    },
    {
      question: "Who is a good candidate for trap botox?",
      answer: "Ideal candidates have well-developed trapezius muscles and desire a more slender shoulder profile. We assess each patient individually during consultation to determine suitability."
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
        <meta name="keywords" content="trap botox London, shoulder slimming, trapezius botox, neck contouring, shoulder reduction, cosmetic treatment" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Cosmedocs",
            "description": "Expert trap botox treatments in London",
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
                  <span className="text-purple-300">Trap Botox</span>
                  <span className="block text-sm mt-4">Invisible art - elegant shoulder slimming & neck contouring</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Refined Shoulder Contouring</p>
                  <p className="text-sm text-gray-300">#trapbotox - See our before & after gallery for real patient results</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl">
                    Book Consultation
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm">
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
              <h2 className="text-3xl font-bold mb-8 text-white">Trap Botox Treatment</h2>
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
                <p className="text-gray-300">4-6 months with gradual muscle reduction</p>
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
                <p className="text-gray-300">No downtime, immediate return to activities</p>
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
                <p className="text-gray-300">Not required, well-tolerated treatment</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Before & After Gallery */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Real Patient Results</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See how our expert trap botox treatments can slim your shoulders, 
                enhance your neck contour, and create an elegant silhouette.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {beforeAfterImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group cursor-pointer"
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg"></div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <BeforeAfterImageViewer 
                images={beforeAfterImages}
                triggerLabel="View Full Gallery"
                title="Trap Botox Results"
                description="Comprehensive gallery of our shoulder slimming treatments"
              />
            </div>
          </div>
        </section>


        {/* What is Trapezius Botox */}
        <section className="py-20 bg-gray-900/30">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">What is Trapezius Botox?</h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    Trapezius Botox, also known as Trap Botox, is an injectable treatment that relaxes the trapezius muscles, 
                    often referred to as the 'traps'. When these muscles become overworked and tense, it can lead to discomfort 
                    and postural issues in the neck, shoulders, and upper back.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Consequently, the Trap Botox injection aims to alleviate this muscle tension by temporarily relaxing the 
                    trapezius muscles, creating a more elegant shoulder profile and improved posture.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <img 
                  src="/lovable-uploads/trapezius-muscle-anatomy.png" 
                  alt="Trapezius muscle anatomy diagram showing injection points"
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                />
                <p className="text-gray-400 text-sm mt-4">Trapezius muscle anatomy and injection points</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What is Trapezius Muscle */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">What Is the Trapezius Muscle?</h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <p className="text-gray-300 leading-relaxed text-lg">
                  The trapezius muscle is a large muscle that extends from the back of your head and neck down to your shoulders, 
                  playing a super important role in defining your upper body's structure.
                </p>
                
                <p className="text-gray-300 leading-relaxed">
                  When the trapezius muscle experiences hypertrophy, it grows bigger and more developed, it can be due to 
                  tenderness, tightness, and pain. Furthermore, various factors contribute to the development of these trigger points, including:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  {[
                    { title: "Muscle Overuse", description: "Frequent muscle movement and repetitive strain" },
                    { title: "Injury", description: "Direct trauma or strain to the trapezius muscle" },
                    { title: "Improper Posture", description: "Poor ergonomics leading to muscle tension" },
                    { title: "Stress", description: "Mental stress manifesting as physical muscle tension" }
                  ].map((factor, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-black/50 rounded-lg p-6"
                    >
                      <h4 className="text-purple-300 font-semibold mb-2">{factor.title}</h4>
                      <p className="text-gray-300">{factor.description}</p>
                    </motion.div>
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed mt-6">
                  However, Trap Botox injections can address all of these issues effectively.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How Does Botox Work */}
        <section className="py-20 bg-gray-900/30">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">How Does Botox Work For Trapezius Muscle?</h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <p className="text-gray-300 leading-relaxed text-lg">
                  By receiving Botox injections in the trapezius muscles, or "traps", the nerve signals that cause these 
                  muscles to become overworked from constant movement can be blocked. Additionally, this temporary muscle 
                  relaxation helps:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-white font-medium">Alleviate stiffness and pain</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-white font-medium">Leading to improved posture</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-white font-medium">Creates longer neck appearance</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-white font-medium">Smoother shoulders and upper back</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mt-6">
                  Hence, the absence of tension in the traps also creates the appearance of a longer neck and smoother 
                  shoulders and upper back.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Benefits of Trap Botox Procedure</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Here are the key benefits of Trap Botox injections that make it a popular choice for aesthetic enhancement
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Relieves Muscle Tension and Pain",
                  description: "Effectively reduces trapezius muscle tension, alleviating chronic pain and discomfort"
                },
                {
                  title: "Improves Posture and Alignment",
                  description: "Helps correct forward head posture and rounded shoulders for better spinal alignment"
                },
                {
                  title: "Creates Longer, Smoother Neck",
                  description: "Elongates the neck appearance and creates smoother shoulder lines for elegant silhouette"
                },
                {
                  title: "Relief from Headaches/Migraines",
                  description: "Reduces tension-related headaches caused by overactive trapezius muscles"
                },
                {
                  title: "Quick, Convenient Treatment",
                  description: "15-20 minute procedure with no downtime required for busy lifestyles"
                },
                {
                  title: "Long-Lasting Results",
                  description: "Effects typically last 4-6 months with progressive muscle reduction over time"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-black/50 border-gray-700 h-full hover:border-purple-400 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-white text-lg">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
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
                <p className="text-gray-300">Over 2 million treatments completed</p>
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
                <p className="text-gray-300">Premium FDA-approved Botox only</p>
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

        {/* Pricing Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Treatment Pricing</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Transparent pricing for professional trap botox treatments
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Trapezius Botox</CardTitle>
                    <div className="text-3xl font-bold text-purple-300">£350 - £650</div>
                    <p className="text-gray-300">Professional treatment</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        Expert consultation included
                      </li>
                      <li className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        Precise injection technique
                      </li>
                      <li className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        Follow-up care included
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 border-blue-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Full Barbie Botox</CardTitle>
                    <div className="text-3xl font-bold text-blue-300">£650</div>
                    <p className="text-gray-300">Shoulder reduction package</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        Comprehensive shoulder slimming
                      </li>
                      <li className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        Multiple injection points
                      </li>
                      <li className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        Complete neck contouring
                      </li>
                    </ul>
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
              <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 text-lg font-semibold" asChild>
                <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">Book Your Consultation</a>
              </Button>
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
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Get answers to common questions about trap botox treatments at our London clinic.
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
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Silhouette?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert cosmetic doctors and discover how trap botox 
                can create elegant shoulder contours and enhance your confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6">
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
          <p>
            Cosmedocs Harley Street clinic offers expert trap botox treatments in London for shoulder slimming and neck contouring. Our experienced cosmetic doctors specialize in trapezius muscle botox injections to create elegant shoulder profiles and refined silhouettes. Located at 10 Harley Street, we provide personalized treatment plans with precise injection techniques. Our trap botox procedures can reduce shoulder bulk, enhance neck definition, and improve overall posture. Results typically last 4-6 months with minimal downtime required. The treatment involves multiple small injections into the trapezius muscles using very fine needles. Book your trap botox consultation today by calling 0333 0551 503 or visiting our Harley Street clinic. We offer competitive pricing starting from £350 and flexible payment options for all shoulder slimming treatments. Our aesthetics is invisible art - bold, natural, always your way.
          </p>
        </div>
      </div>
    </>
  );
};

export default TrapBotox;