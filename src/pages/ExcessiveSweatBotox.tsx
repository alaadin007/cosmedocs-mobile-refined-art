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
import { Check, Clock, Calendar, Activity, Syringe, CheckCircle, Award, GraduationCap, Palette, Heart, Home, ChevronRight } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const ExcessiveSweatBotox = () => {
  const seoData = generateSEOMetadata(
    "Excessive Sweating Botox London | Cosmedocs",
    "Stop hyperhidrosis with botox for underarms, hands & feet. Life-changing sweat reduction lasts 6-9 months from £500.",
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
        <meta name="keywords" content="botox armpits price, botox in armpits, botox underarms, botox under armpits cost, botox cost for armpit, botox in hands, underarm botox, botox armpits, botox in underarms cost, botox and facial sweating, botox on underarms, botox and excessive sweating, botox for sweating face, botox to armpits, shots for sweating, botox for hyperhidrosis, botox for perspiration, botox under the arms, botox to prevent sweating, cost of armpit botox, armpit botox, botox on face for sweating, underarm botox pros and cons, botox for armpit sweat, underarm botox cost, botox shots for sweating, botox for sweating cost uk, botox in face for sweating, botox under armpits, botox for excessive sweating, botox for sweating, hyperhidrosis botox" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "Cosmedocs",
            "url": seoData.canonical,
            "telephone": "+44 20 3733 3227",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "10 Harley Street",
              "addressLocality": "London",
              "addressRegion": "Greater London",
              "postalCode": "W1G 9PF",
              "addressCountry": "GB"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 51.5074,
              "longitude": -0.1278
            },
            "priceRange": "££",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
              }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "189"
            },
            "availableService": {
              "@type": "MedicalProcedure",
              "name": "Excessive Sweating Botox Treatment",
              "alternateName": "Hyperhidrosis Botox Treatment",
              "description": "Professional botox treatment for excessive sweating (hyperhidrosis) in underarms, hands, feet, and face. FDA-approved procedure that blocks nerve signals to sweat glands"
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
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Offer",
            "name": "Excessive Sweating Botox Treatment",
            "description": "Professional hyperhidrosis treatment with botox",
            "price": "550",
            "priceCurrency": "GBP",
            "availability": "https://schema.org/InStock",
            "url": seoData.canonical,
            "seller": {
              "@type": "MedicalClinic",
              "name": "Cosmedocs",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "10 Harley Street",
                "addressLocality": "London",
                "addressRegion": "Greater London",
                "postalCode": "W1G 9PF",
                "addressCountry": "GB"
              }
            }
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        {/* Breadcrumb Navigation */}
        <section className="py-4 bg-accent border-b border-purple-500/20">
          <div className="page-container">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="flex items-center gap-1 text-gray-400 hover:text-purple-300">
                    <Home className="h-4 w-4" />
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight className="h-4 w-4 text-gray-500" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-purple-300">Excessive Sweating Botox</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

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
                  <span className="text-purple-300">Excessive Sweating Botox</span>
                  <span className="block text-xl md:text-2xl mt-4 text-gray-300">Professional Hyperhidrosis Treatment in London</span>
                  <span className="block text-sm mt-2 font-normal">Invisible art - confidence that speaks without words</span>
                </h1>
                <div className="mb-8 space-y-3">
                  <p className="text-2xl text-purple-300 font-bold">Expert Botox for Underarms, Hands, Face & Feet</p>
                  <p className="text-lg text-gray-200">FDA-approved botox treatment that blocks sweat glands for dramatic, life-changing results</p>
                  <p className="text-sm text-gray-300">20-30 minutes • Results last 6-12 months • Prices from £350</p>
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
        <section className="py-20 bg-black">
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
                Botox for excessive sweating (hyperhidrosis botox) is an FDA-approved treatment that uses botox shots for sweating to block nerve signals to sweat glands. 
                Botox in armpits, botox in hands, and botox for facial sweating provide dramatic sweat reduction. Our therapeutic approach transforms lives with long-lasting results. 
                Whether you need underarm botox, botox to prevent sweating on your face, or botox for perspiration in other areas, our expert practitioners deliver invisible art - transformation that speaks without saying a word.
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
                    Hyperhidrosis is a <a href="https://www.nhs.uk/conditions/hyperhidrosis/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">medical condition causing excessive sweating</a> that significantly impacts daily life, confidence, and social interactions. 
                    Botox for hyperhidrosis works by blocking the nerve signals that trigger sweat production. Botox injections for excessive sweating provide dramatic relief - 
                    whether it's botox on underarms, botox under the arms, botox in underarms, or botox for sweating face. The cost of armpit botox and underarm botox cost 
                    varies by area, with armpit botox being one of the most popular and effective treatments available.
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
                      Botox to armpits and other areas provides life-changing benefits for those suffering from hyperhidrosis. Here are the key underarm botox pros and cons, 
                      with botox shots for sweating offering minimal risks and maximum confidence-boosting results.
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
                          <p className="text-gray-300 text-sm"><a href="https://www.aad.org/public/diseases/a-z/hyperhidrosis-treatment" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">Results last 6-12 months</a> for underarms, 4-6 months for hands and feet.</p>
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
                      It evaluates how much excessive sweating interferes with daily activities. Similar precision is used in our <a href="/botox-london" className="text-purple-300 hover:text-purple-200 underline">Botox London treatments</a>.
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
                    Moreover, a <a href="https://pubmed.ncbi.nlm.nih.gov/21418398/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">medical study suggests the usage of high doses</a> to relax sweat glands has long-lasting results. 
                    This approach allows anti-sweat injections to treat excessive sweating quite effectively. For comprehensive facial rejuvenation, we also offer <a href="/profhilo" className="text-purple-300 hover:text-purple-200 underline">Profhilo treatments</a> alongside our therapeutic botox services.
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
                    The dosage of botox in armpits depends on the size of the underarm area. When getting botox under armpits, we aim to inject a concentrated dose per square centimetre, 
                    covering the entire hairy patch area of the underarm. Similar to how we approach <a href="/masseter-botox" className="text-purple-300 hover:text-purple-200 underline">masseter botox treatments</a>, 
                    the botox armpits price reflects the number of units needed for optimal coverage and results.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Studies have revealed that a higher dose for botox underarms is safe, effective, and long-lasting. Botox on face for sweating and botox in face for sweating 
                    require different dosages than botox under armpits cost calculations. We aim to reduce excess sweating by more than 50-75% with our precision injection techniques.
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
                    width="600"
                    height="400"
                    loading="lazy"
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
              <h2 className="text-3xl font-bold mb-6 text-white">Botox for Armpit Sweat, Face & Body Treatment Prices</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Transparent botox for sweating cost UK pricing at CosmeDocs. Our botox cost for armpit treatments and botox in underarms cost includes expert consultation and follow-up care. 
                All underarm botox cost and botox under armpits cost figures are clearly displayed below for your peace of mind.
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
                      <div className="text-gray-300 text-xs mt-2">For anti-wrinkle options, <a href="/botox-london" className="text-purple-300 hover:text-purple-200 underline">explore our treatments</a></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
              <h2 className="text-3xl font-bold mb-6 text-white">Why Choose Cosmedocs?</h2>
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
                <p className="text-gray-300">Premium FDA-approved botox products only</p>
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
              <h2 className="text-3xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Common questions about excessive sweating botox treatment answered by our expert practitioners. For more facial enhancement options, visit our <a href="/chin-filler" className="text-purple-300 hover:text-purple-200 underline">chin filler page</a>.
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

        {/* Hidden SEO Content - Crawler-Optimised Information */}
        <section className="sr-only" aria-hidden="true">
          <div className="page-container">
            <h2>Comprehensive Guide to Botox for Excessive Sweating and Hyperhidrosis Treatment</h2>
            
            <h3>Understanding Botox Armpits Price and Treatment Costs</h3>
            <p>
              When considering botox for excessive sweating, understanding the botox armpits price is essential for planning your treatment. The cost of armpit botox 
              at Cosmedocs ranges from £350 to £650 depending on the treatment area. Underarm botox cost includes professional consultation, treatment, and follow-up care. 
              Our transparent botox for sweating cost UK pricing ensures you know exactly what to expect. The botox under armpits cost reflects the number of units needed, 
              with botox cost for armpit treatments varying by individual sweat gland activity. Whether you're exploring botox in underarms cost or botox in armpits pricing, 
              our team provides detailed breakdowns during your consultation.
            </p>

            <h3>Botox in Armpits, Underarms, and Under Arms Treatment</h3>
            <p>
              Botox in armpits is the most popular hyperhidrosis treatment we offer. Botox underarms treatment involves precise injections that target overactive sweat glands. 
              When you receive botox under armpits, the neurotoxin blocks nerve signals that trigger perspiration. Botox on underarms provides dramatic results within 1-2 weeks. 
              Many patients ask about underarm botox pros and cons - the primary advantage is up to 87% sweat reduction lasting 6-12 months, whilst temporary mild soreness is 
              the only notable drawback. Botox to armpits requires 20-30 minutes, with botox in underarms delivering life-changing confidence. Whether termed botox armpits, 
              underarm botox, or armpit botox, this FDA-approved procedure transforms lives.
            </p>

            <h3>Botox for Facial Sweating and Face Treatment</h3>
            <p>
              Botox and facial sweating treatment addresses a particularly distressing form of hyperhidrosis. Botox for sweating face procedures target the forehead, upper lip, 
              and other facial areas where excessive perspiration occurs. Botox on face for sweating uses smaller, more precise doses compared to underarm applications. 
              Botox in face for sweating provides natural-looking results that don't compromise facial expressions. Our specialists understand that facial sweating can be 
              socially debilitating, which is why we combine <a href="/profhilo" className="text-purple-300">advanced aesthetic techniques</a> with therapeutic botox for 
              comprehensive facial rejuvenation when desired.
            </p>

            <h3>Botox in Hands and Palmar Hyperhidrosis</h3>
            <p>
              Botox in hands treats palmar hyperhidrosis, a condition causing excessively sweaty palms that affects professional and social interactions. Hand sweating botox 
              requires more injection points than underarm treatment due to the density of sweat glands in the palms. According to research from the 
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6282699/" target="_blank" rel="noopener noreferrer" className="text-purple-300"> National Institutes of Health</a>, 
              botox effectively reduces palmar sweating by up to 90%. Patients report dramatic improvements in handshake confidence and the ability to handle papers and electronic devices. 
              The treatment lasts 4-6 months for hands, slightly shorter than underarm applications due to higher sweat gland density and hand washing frequency.
            </p>

            <h3>Botox for Hyperhidrosis - Medical Background and Efficacy</h3>
            <p>
              Botox for hyperhidrosis has been FDA-approved since 2004 for severe primary axillary hyperhidrosis. The active ingredient, botulinum toxin type A, temporarily 
              blocks acetylcholine release, preventing sweat gland stimulation. Clinical studies published by the 
              <a href="https://www.sweathelp.org/" target="_blank" rel="noopener noreferrer" className="text-purple-300"> International Hyperhidrosis Society</a> demonstrate 
              consistent efficacy rates of 82-87% sweat reduction. Botox for perspiration works regardless of the trigger - whether stress-induced, thermal, or idiopathic. 
              The treatment is suitable for primary and secondary hyperhidrosis, though underlying causes of secondary hyperhidrosis should be medically evaluated first.
            </p>

            <h3>Shots for Sweating - Treatment Process and What to Expect</h3>
            <p>
              Shots for sweating involve multiple micro-injections administered across the affected area using ultra-fine needles. Botox shots for sweating are strategically 
              placed in a grid pattern to ensure comprehensive coverage. Topical anaesthetic minimises discomfort, making the procedure well-tolerated by most patients. 
              The number of botox injections varies: underarms typically require 15-20 injections per side, whilst hands may need 40-50 injections per palm. According to 
              <a href="https://www.asps.org/graft/botulinum-toxin-for-treatment-of-hyperhidrosis/" target="_blank" rel="noopener noreferrer" className="text-purple-300"> 
              American Society of Plastic Surgeons guidelines</a>, proper injection technique and dosage are critical for optimal results and safety.
            </p>

            <h3>Botox to Prevent Sweating - Long-Term Management</h3>
            <p>
              Using botox to prevent sweating requires maintenance treatments every 6-12 months to sustain results. Many patients find that with repeated treatments, 
              the duration of effectiveness may increase slightly. Botox and excessive sweating management works best when combined with lifestyle modifications such as 
              wearing breathable fabrics and using clinical-strength antiperspirants between treatments. Some patients benefit from combining their hyperhidrosis treatment 
              with other <a href="/lip-fillers" className="text-purple-300">aesthetic procedures</a> during their Harley Street visits, maximising convenience and results.
            </p>

            <h3>Why Choose Cosmedocs for Your Excessive Sweating Treatment</h3>
            <p>
              At Cosmedocs, located at 37 Harley Street, we've performed over 1 million injections since 2007. Our practitioners are members of the International Hyperhidrosis Society 
              and trainers at the Harley Street Institute. We use only FDA-approved botox products and follow strict safety protocols. Our 'invisible art' philosophy ensures 
              natural results that boost confidence without drawing attention. We understand that hyperhidrosis significantly impacts quality of life, which is why we offer 
              comprehensive consultations to assess your condition using the Hyperhidrosis Disease Severity Scale (HDSS) and create personalised treatment plans. Our aftercare 
              includes follow-up appointments and guidance on maximising treatment longevity. Whether you need therapeutic botox for sweating or other concerns, our team delivers expert care with compassion and precision.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default ExcessiveSweatBotox;