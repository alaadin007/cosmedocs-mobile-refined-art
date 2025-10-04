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
            "openingHours": "Mo-Fr 09:00-18:00",
            "medicalSpecialty": "Cosmetic Medicine",
            "priceRange": "££"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "Trap Botox Treatment",
            "alternateName": ["Trapezius Botox", "Trap Tox", "Barbie Botox"],
            "description": "Botox injections for trapezius muscles to reduce shoulder bulk and create elegant neck contouring",
            "procedureType": "Cosmetic Injectable Treatment",
            "bodyLocation": {
              "@type": "AnatomicalStructure",
              "name": "Trapezius Muscle"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Trap Botox Treatment",
            "provider": {
              "@type": "MedicalBusiness",
              "name": "Cosmedocs"
            },
            "areaServed": "London",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Trap Botox Treatments",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Trap Botox Treatment"
                  },
                  "price": "350",
                  "priceCurrency": "GBP"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Full Barbie Botox"
                  },
                  "price": "650",
                  "priceCurrency": "GBP"
                }
              ]
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
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
                  <Button 
                    onClick={() => window.open("https://med.as.me/harleystreet", "_blank")}
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl"
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
                  Trapezius Botox, also known as Trap Botox or Trap Tox, is an injectable treatment that uses <a href="/botox" className="text-purple-300 hover:text-purple-200 underline">botox for traps</a> to relax the trapezius muscles. When these trap muscles become overworked and tense, it can lead to pain in trapezius muscle, trapezius pain, and postural issues in the neck, shoulders, and upper back.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Botox in trap muscles aims to alleviate this muscle tension by temporarily relaxing the trapezius muscle, creating a more elegant shoulder profile and improved posture. Many patients search for "trap botox before and after" results to see the dramatic transformation this <a href="/aesthetic-treatments" className="text-purple-300 hover:text-purple-200 underline">aesthetic treatment</a> can achieve.
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
                  src="/src/assets/trapezius-muscle-treatment.png" 
                  alt="Trapezius muscle anatomy diagram showing injection points"
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                  loading="lazy"
                  width="400"
                  height="400"
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
                  Understanding what are traps and where the trapezius is located is essential for this treatment. The trapezius muscle is a large, diamond-shaped muscle that extends from the back of your head and neck down to your shoulders, playing a crucial role in defining your upper body's structure. Many patients ask "what are trapezius muscles" and "where are trapezius muscles located" before considering treatment.
                </p>
                
                <p className="text-gray-300 leading-relaxed">
                  When the trapezius muscle experiences hypertrophy (growing bigger and more developed), it can lead to a hurt trapezius, sore trapezius muscle, and trapezius muscle pain. Trapezius muscle trigger points and muscle knot trapezius can cause significant discomfort. Various factors contribute to m trapezius pain and these trigger points, including:
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
                  By receiving botox in traps, the nerve signals that cause these muscles to become overworked from constant movement can be blocked. Trapezius muscle botox and traps muscle botox work by temporarily paralysing the targeted areas. This trap muscle botox treatment helps address trapezius muscle hurts and provides relief from chronic trapezius pain. Additionally, this temporary muscle relaxation helps:
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
        <section id="pricing-section" className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Trap Botox Pricing London</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Transparent pricing for professional trap botox treatments. All prices include consultation, 
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
                    <CardTitle className="text-white text-2xl">Trapezius Botox</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£350</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Standard trap botox treatment for shoulder slimming</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Consultation included</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Premium botox product</span>
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
                    <CardTitle className="text-white text-2xl">Full Barbie Botox</CardTitle>
                    <div className="text-white text-4xl font-bold">£650</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-purple-100">Comprehensive shoulder reduction treatment</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Comprehensive consultation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Maximum units for best results</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Extended aftercare support</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">4-week follow-up</span>
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
                        <span className="text-gray-300 text-sm">30-minute consultation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Treatment planning</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">No obligation</span>
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
          <h2>Comprehensive Guide to Trap Botox and Trapezius Muscle Treatment in London</h2>
          <p>
            Cosmedocs Harley Street clinic offers expert trap botox treatments in London for shoulder slimming and neck contouring. Our experienced cosmetic doctors specialise in trapezius muscle botox and botox for traps to create elegant shoulder profiles and refined silhouettes. Understanding what are traps and where the trapezius is located is essential for anyone considering this transformative treatment.
          </p>
          <h3>Understanding the Trapezius Muscle and Common Issues</h3>
          <p>
            The trapezius muscle is a large, diamond-shaped muscle extending from your neck to your shoulders and down your upper back. Many patients ask "what are trapezius muscles" and "where are trapezius muscles located" before treatment. When you experience pain in trapezius muscle, trapezius pain, or m trapezius pain, it can significantly impact your daily life. A hurt trapezius or sore trapezius muscle often results from poor posture, stress, or repetitive movements. Trapezius muscle trigger points and muscle knot trapezius are common complaints that botox in trap muscles can effectively address.
          </p>
          <h3>Trap Botox Before and After: What to Expect</h3>
          <p>
            Searching for "trap botox before and after" or "trapezius botox before and after" results? Our gallery showcases dramatic transformations from traps muscle botox treatments. Botox in traps works by temporarily relaxing the trapezius muscle, reducing bulk and creating a more elegant shoulder line. This trap muscle botox procedure, also known as trap tox or trapezius botox, has become increasingly popular for its ability to address both aesthetic concerns and trapezius muscle hurts.
          </p>
          <h3>Treatment Process and Benefits</h3>
          <p>
            Our trap botox procedure involves precise botox injections in the trapezius muscles using ultra-fine needles. The treatment typically takes 15-20 minutes and addresses issues like trapezius muscle pain, poor posture, and shoulder bulk. Patients seeking botox traps treatment appreciate the dual benefits of pain relief and aesthetic enhancement. Results from trapezius muscle botox typically appear within 1-2 weeks, with full effects visible after 4-6 weeks.
          </p>
          <h3>Why Choose Cosmedocs for Trap Botox in London</h3>
          <p>
            Located at 10 Harley Street, we provide personalised treatment plans with precise injection techniques for trap botox. Our experienced practitioners understand where the trapezius is located and how to effectively target trapezius muscle trigger points. Whether you're experiencing a sore trapezius muscle or seeking aesthetic refinement, our trap muscle botox treatments deliver natural-looking results. We offer competitive pricing starting from £350, with comprehensive consultations to assess your individual needs.
          </p>
          <p>
            Book your trap botox consultation today by calling 0333 0551 503 or visiting our Harley Street clinic. We offer flexible payment options for all shoulder slimming treatments including trapezius botox and trap tox procedures. Our aesthetics is invisible art - bold, natural, always your way. Experience the transformation that botox for traps can provide, addressing both cosmetic concerns and trapezius pain with expert care and precision.
          </p>
        </div>
      </div>
    </>
  );
};

export default TrapBotox;