import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { generateSEOMetadata } from "@/utils/seo";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import Breadcrumb from "@/components/Breadcrumb";
import { Stethoscope, Target, Sparkles, HandHeart, Shield, Clock } from "lucide-react";

export default function AcneTreatment() {
  const seoData = generateSEOMetadata(
    "Acne Treatment London | Cosmedocs",
    "Clear cystic & hormonal acne with advanced dermatology. Treat active breakouts, scars & texture. Medical-grade solutions.",
    "/acne-treatment"
  );

  const beforeAfterImages = [
    {
      src: "/images/acne-before-after-1.jpg",
      alt: "Acne treatment before and after - severe to clear",
      caption: "Dramatic improvement from severe acne to clear, healthy skin"
    },
    {
      src: "/images/acne-before-after-2.jpg", 
      alt: "Acne scarring treatment results",
      caption: "Significant reduction in acne scarring and improved skin texture"
    },
    {
      src: "/images/acne-before-after-3.jpg",
      alt: "Hormonal acne treatment",
      caption: "Hormonal acne successfully treated with minimal scarring"
    }
  ];

  const faqs = [
    {
      question: "How long does treatment take to show results?",
      answer: "Results typically begin to show within 4-6 weeks, with significant improvement visible after 3 months. Full treatment results are usually achieved within 15-18 months, depending on the severity of acne and individual response."
    },
    {
      question: "Is acne treatment painful?",
      answer: "Most acne treatments are well-tolerated with minimal discomfort. We use topical anaesthetic when necessary and ensure your comfort throughout all procedures. Any mild discomfort usually subsides within hours."
    },
    {
      question: "What types of acne can you treat?",
      answer: "We treat all forms of acne including mild to severe acne vulgaris, cystic acne, hormonal acne, and acne scarring. Our comprehensive approach addresses both active acne and prevents future breakouts."
    },
    {
      question: "Are there any side effects?",
      answer: "Temporary side effects may include mild swelling, redness, itching, or bruising at treatment sites. These typically resolve within 24-48 hours. Our expert team monitors your progress and adjusts treatment as needed."
    },
    {
      question: "How much does acne treatment cost?",
      answer: "Acne treatment costs vary depending on the severity and type of treatment required. We offer comprehensive consultations to create personalized treatment plans with transparent pricing and flexible payment options."
    },
    {
      question: "Can acne scars be treated?",
      answer: "Yes, we offer advanced acne scar treatments including laser therapy, chemical peels, and dermal fillers. The best approach depends on the type and severity of scarring, which we'll assess during your consultation."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Cosmedocs",
    "url": "https://www.cosmedocs.co.uk",
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
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "bestRating": "5",
      "ratingCount": "95"
    },
    "availableService": {
      "@type": "MedicalProcedure",
      "name": "Acne Treatment",
      "description": "Professional acne treatment for clear, blemish-free skin"
    },
    "priceRange": "££"
  };

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={seoData.canonical} />
        <meta name="keywords" content="acne treatment London, acne treatment, best acne treatment, cystic acne treatment, hormonal acne treatment, acne treatment near me, acne scar treatment, acne treatment UK, acne treatment for face, best acne treatment London, severe acne treatment, adult acne treatment, teenage acne treatment, acne dermatologist London" />
        <meta name="geo.region" content="GB-LND" />
        <meta name="geo.placename" content="London" />
        <meta name="geo.position" content="51.518642;-0.145044" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.image} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.image} />
        
        {/* LocalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Cosmedocs - Acne Treatment London",
            "image": seoData.image,
            "description": "Expert acne treatment London for cystic acne, hormonal acne, acne scars serving Marylebone, Mayfair, Westminster, and Central London",
            "url": seoData.canonical,
            "telephone": "0333 0551 503",
            "priceRange": "££",
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
              "latitude": "51.518642",
              "longitude": "-0.145044"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "10:00",
                "closes": "16:00"
              }
            ],
            "areaServed": [
              "Marylebone",
              "Mayfair",
              "Westminster",
              "Fitzrovia",
              "Bloomsbury",
              "Regent's Park",
              "Central London",
              "Greater London"
            ]
          })}
        </script>

        {/* MedicalClinic Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "Cosmedocs",
            "description": "Expert acne treatment London for all types of acne including cystic, hormonal, and acne scarring",
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
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "143"
            }
          })}
        </script>

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.cosmedocs.co.uk/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Treatments",
                "item": "https://www.cosmedocs.co.uk/treatments"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Acne Treatment",
                "item": seoData.canonical
              }
            ]
          })}
        </script>

        {/* FAQ Schema */}
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
        
        {/* MedicalProcedure Schema */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        {/* Breadcrumb Navigation */}
        <div className="page-container pt-8">
          <Breadcrumb 
            items={[
              { label: "Treatments", path: "/treatments" }
            ]} 
            currentPage="Acne Treatment"
          />
        </div>

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
                  <span className="text-purple-300">Best Acne Treatment London</span>
                  <span className="block text-sm mt-4">Invisible art - natural skin transformation that speaks without words</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Expert Treatment for Cystic, Hormonal & Acne Scars</p>
                  <p className="text-sm text-gray-300">Advanced Dermatology Care for All Acne Types in Central London</p>
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
              <h2 className="text-3xl font-bold mb-8 text-white">Comprehensive Acne Treatments UK</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Expert acne treatment options for face, back acne treatment, chest acne treatment, and body acne treatment. We specialise in cystic acne treatment UK, hormonal acne treatment UK, acne scar treatment near me, bacterial acne treatment, fungal acne treatment, and comedonal acne treatment for all ages including teenage acne treatment and best acne treatment for adults.
              </p>
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
                <p className="text-gray-300">30 minutes - ongoing therapy</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Target className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Results Duration</h3>
                <p className="text-gray-300">4-6 weeks to 15-18 months</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Return to Activities</h3>
                <p className="text-gray-300">Immediate return to normal activities</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <HandHeart className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Comfort Level</h3>
                <p className="text-gray-300">Minimal discomfort with anaesthetic</p>
              </motion.div>
            </div>
          </div>
        </section>


        {/* What is Acne - Two Column Layout */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Understanding Acne & Related Skin Conditions</h2>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Acne vulgaris is one of the most common skin diseases affecting adolescents and adults in London and across the UK. Our expert dermatologist acne treatment services specialise in treating all forms including severe acne treatment, cystic acne treatment UK, hormonal acne treatment UK, back acne treatment UK, fungal acne treatment, bacterial acne treatment, comedonal acne treatment, and private acne treatment for acne scars treatment near me.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/50 backdrop-blur-sm border-purple-500/20 h-full hover:border-purple-500/40 transition-colors">
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-white mb-4">Understanding Acne Vulgaris</h3>
                      <p className="text-gray-300">
                        Acne vulgaris is the most common chronic skin disease, causing lesions, spots, and oily skin primarily on the face, chest, and back due to infected skin pores. While it especially affects adolescents, adult acne treatment is increasingly common. The <a href="https://www.bad.org.uk/healthcare-professionals/clinical-standards/clinical-guidelines/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">British Association of Dermatologists</a> provides comprehensive clinical guidelines for acne management.
                      </p>
                      <p className="text-gray-300">
                        Our comprehensive acne treatment dermatologist approach addresses:
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                          <span className="text-gray-300">Active acne lesions including spot treatment for acne and best acne spot treatment</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                          <span className="text-gray-300">Best treatment for acne scar removal and skin treatment for acne scarring</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                          <span className="text-gray-300">Treatment of acne cyst, hormonal treatment of acne, and PCOS acne treatment</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                          <span className="text-gray-300">Prevention including treatment acne dark spots and acne marks treatment</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                          <span className="text-gray-300">Specialised acne treatment on the back, chest acne treatment, and scalp acne treatment</span>
                        </li>
                      </ul>
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
                <Card className="bg-black/50 backdrop-blur-sm border-purple-500/20 h-full hover:border-purple-500/40 transition-colors">
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-white mb-4">What Causes Acne?</h3>
                      <p className="text-gray-300 mb-4">
                        Understanding the root causes helps us develop effective, personalized treatment strategies.
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                          <div>
                            <span className="text-white font-medium">Excess Oil Production:</span>
                            <span className="text-gray-300"> Overactive sebaceous glands produce too much oil, clogging pores</span>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                          <div>
                            <span className="text-white font-medium">Hormonal Changes:</span>
                            <span className="text-gray-300"> Fluctuations during puberty, menstruation, or stress trigger breakouts</span>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                          <div>
                            <span className="text-white font-medium">Bacterial Growth:</span>
                            <span className="text-gray-300"> P. acnes bacteria thrive in clogged pores, causing inflammation</span>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                          <div>
                            <span className="text-white font-medium">Genetic Factors:</span>
                            <span className="text-gray-300"> Family history plays a significant role in acne susceptibility</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Comprehensive Treatment Approach */}
        <section className="py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">Best Treatment for Acne UK</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our multi-faceted dermatologist acne treatment approach combines the latest advances with personalised care. From topical acne treatment and acne treatment prescription to light acne treatments and Accutane acne treatment, we offer top acne treatment UK solutions for all acne disease treatments including treatment for hormonal acne, chin acne treatment, and menopause and acne treatment.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/20 to-black border-purple-500/30 h-full hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <CardHeader>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <Stethoscope className="text-purple-600" size={24} />
                    </div>
                    <CardTitle className="text-white text-xl">Topical Acne Treatment Options</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Advanced topical treatment for acne targeting bacteria and reducing inflammation. Essential for mild to moderate treatment for acne including spot treatment for acne and natural acne treatment approaches.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>Retinoids (tretinoin, adapalene)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>Benzoyl peroxide</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>Topical antibiotics</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>Salicylic acid</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>Azelaic acid</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/20 to-black border-purple-500/30 h-full hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <CardHeader>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <Target className="text-purple-600" size={24} />
                    </div>
                    <CardTitle className="text-white text-xl">Advanced Acne Scar Treatment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Professional treatments including best acne scar treatment, best acne scar removal treatment, and treatment for deep acne scar. Includes skin care treatments for acne scars, treatment for acne scars London, and <Link to="/microneedling" className="text-purple-300 hover:text-purple-200 underline">microneedling</Link> for acne scarring treatment.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>Chemical peels</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>Laser therapy</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>Light therapy (LED)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>Microneedling</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>Professional extractions</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/20 to-black border-purple-500/30 h-full hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <CardHeader>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <Sparkles className="text-purple-600" size={24} />
                    </div>
                    <CardTitle className="text-white text-xl">Prescription Acne Treatment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Systemic acne treatment prescription for moderate to severe cases including best hormonal acne treatment, treatment for hormonal acne, and treatment of acne cyst. Options include Accutane acne treatment (isotretinoin) and can be combined with <Link to="/skin-boosters" className="text-purple-300 hover:text-purple-200 underline">skin booster treatments</Link>.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>Oral antibiotics</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>Birth control pills</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>Spironolactone</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>Isotretinoin (Accutane)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Body Acne Treatment Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <Card className="bg-gradient-to-br from-purple-900/20 to-black border-purple-500/30 hover:border-purple-500/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white text-lg">Body Acne Treatment - Back, Chest & Scalp</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    We treat acne beyond the face including back acne treatment, acne back treatment, acne treatment on the back, chest acne treatment, butt acne treatment, treatment for butt acne, and scalp acne treatment. Our body acne treatment addresses all areas affected by acne disease treatments with the same expertise as facial treatments.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Acne Scarring Treatment Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <Card className="bg-gradient-to-br from-purple-900/20 to-black border-purple-500/30 hover:border-purple-500/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white text-lg">Acne Scarring Treatment & Pigmentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Acne patients may experience pigmentation, discolouration, and scarring. Our best acne acne scar treatment options include treatment for acne scars products, skin treatment for acne scarring, and specialist skincare. According to <a href="https://dermnetnz.org/topics/acne" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">DermNet NZ</a>, professional treatment significantly reduces post-acne complications.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Types of Acne */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Types of Acne We Treat</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Understanding acne types helps us create targeted good acne treatments UK. We treat all acne including comedonal acne treatment, bacterial acne treatment, fungal acne treatment, severe acne treatment, and topical treatment for rosacea acne from mild to severe cases.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-gray-800 h-full">
                  <CardHeader>
                    <CardTitle className="text-purple-300">Non-Inflamed Acne</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300 mb-4">
                      Less severe than inflamed types, these blemishes don't cause swelling or pain but may lead to inflamed acne if left untreated.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-medium">Milia:</span>
                          <span className="text-gray-300"> Non-inflamed whiteheads</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-medium">Whiteheads:</span>
                          <span className="text-gray-300"> Closed plugged pores</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-medium">Blackheads:</span>
                          <span className="text-gray-300"> Open blocked pores</span>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-gray-800 h-full">
                  <CardHeader>
                    <CardTitle className="text-purple-300">Inflamed Acne</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300 mb-4">
                      Inflammatory acne includes blemishes that are red, swollen, inflamed, and warm to touch.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-medium">Papules:</span>
                          <span className="text-gray-300"> Small, red, tender, raised bumps from inflamed hair follicles</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-medium">Pustules:</span>
                          <span className="text-gray-300"> Pus-filled lesions that are red at the base</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-medium">Nodules:</span>
                          <span className="text-gray-300"> Large, painful, solid lesions deep beneath the skin surface</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-medium">Cysts:</span>
                          <span className="text-gray-300"> Deep, painful, pus-filled lesions that can cause scarring</span>
                        </div>
                      </li>
                    </ul>
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
              <h2 className="text-3xl font-bold mb-4 text-white">Private Acne Treatment Pricing</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Professional private acne treatment with personalised care plans. Every treatment includes comprehensive consultation, assessment, and ongoing support from our expert acne treatment dermatologist team. We offer the best acne treatment UK and top acne treatment UK with transparent pricing for all acne treatments including acne treatment for teen boys, adult acne treatment, and baby acne treatment.
              </p>
            </motion.div>

            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="max-w-md"
              >
                <Card className="bg-black border-purple-500 h-full text-center">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Acne Treatment</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">Price on Consultation</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Customized treatment plan based on your specific acne type and severity</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">Comprehensive skin assessment</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">Personalized treatment plan</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">Ongoing support and monitoring</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">Follow-up appointments included</span>
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
              <h2 className="text-3xl font-bold mb-8 text-white">Why Choose Cosmedocs for Acne Treatment?</h2>
              <p className="text-gray-300 max-w-3xl mx-auto mb-12">
                Conveniently located at 10 Harley Street, serving patients seeking acne treatment near me from Marylebone, Mayfair, Westminster, Fitzrovia, Bloomsbury, Regent's Park, and across Central London and Greater London.
              </p>
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
                  <Stethoscope className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Expertise</h3>
                <p className="text-gray-300">Specialized dermatologists with extensive acne treatment experience</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Target className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Personalized</h3>
                <p className="text-gray-300">Treatment plans tailored to your specific acne type and skin</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Advanced Technology</h3>
                <p className="text-gray-300">Latest acne treatment options including laser therapy and <Link to="/treatments/prp-vampire-facial/" className="text-purple-300 hover:text-purple-200 underline">advanced therapies</Link></p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <HandHeart className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Support</h3>
                <p className="text-gray-300">Ongoing care and emotional support throughout treatment</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Philosophy</h3>
                <p className="text-gray-300">'Invisible art' for natural skin health restoration</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions About Acne Treatment</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Get answers to common questions about acne treatment London, cystic acne treatment, hormonal acne treatment, and acne scar treatment at our clinic.
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
              <h2 className="text-3xl font-bold mb-4">Ready for Clear, Blemish-Free Skin?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert dermatologists and discover how our advanced acne treatments can transform your skin with lasting, natural results. Whether you need cystic acne treatment, hormonal acne treatment, or acne scar treatment London, we're here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button 
                  onClick={() => window.open("https://med.as.me/harleystreet", "_blank")}
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6"
                >
                  Book Free Consultation
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6">
                  Call 0333 0551 503
                </Button>
              </div>
              <div className="mt-8 text-center">
                <Link to="/treatments" className="text-purple-300 hover:text-purple-200 underline text-lg inline-flex items-center gap-2">
                  Explore Other Skin Treatment Options →
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h2>Best Acne Treatment London - Expert Dermatology Care</h2>
          <p>
            Acne treatment at Cosmedocs offers the best acne treatment UK for all types including cystic acne treatment, cystic acne treatment UK, hormonal acne treatment, hormonal acne treatment UK, best hormonal acne treatment, treatment for hormonal acne, severe acne treatment, private acne treatment, and acne scar treatment near me. Our comprehensive approach to treating acne includes advanced dermatological therapies, topical acne treatment, acne treatment prescription, Accutane acne treatment, and professional procedures. We specialise in acne treatment for face, teenage acne treatment, acne treatment for teen boys, best acne treatment for adults, adult acne treatment, and body acne treatment UK including back acne treatment, back acne treatment UK, acne back treatment, acne treatment on the back, chest acne treatment, butt acne treatment, treatment for butt acne, and scalp acne treatment.
          </p>
          
          <h3>Comprehensive Acne Treatment Dermatologist Services</h3>
          <p>
            Our dermatologist acne treatment London team treats all forms of acne vulgaris including comedonal acne treatment (blackheads and whiteheads), bacterial acne treatment, fungal acne treatment, and severe acne forms like nodules requiring treatment of acne cyst. Whether you're seeking good acne treatments UK, top acne treatment UK, best treatment for acne, or acne treatment near me searches reflect the urgent need for professional help, our central London location makes us easily accessible. We provide specialised hormonal treatment of acne for conditions including PCOS acne treatment, menopause and acne treatment, and chin acne treatment.
          </p>
          
          <h3>Advanced Acne Disease Treatments & Options</h3>
          <p>
            Our best acne treatment UK arsenal includes topical treatment for acne such as retinoids, benzoyl peroxide for spot treatment for acne, best acne spot treatment, and topical antibiotics for mild to moderate treatment for acne. We also offer natural acne treatment approaches and topical treatment for rosacea acne. For more extensive acne treatments, we offer chemical peels, laser therapy, light acne treatments, and microneedling that have proven highly effective in reducing inflammation. These advanced acne disease treatments are particularly effective for acne scarring treatment and best treatment for acne scar removal. In severe cases, we provide acne treatment prescription including oral antibiotics, hormonal treatments, and Accutane acne treatment (isotretinoin) for comprehensive acne management and skin and acne treatment.
          </p>
          
          <h3>Best Acne Scar Treatment & Removal Options</h3>
          <p>
            Post-acne scarring is a common concern that we address with specialist acne scar treatment, acne scars treatment, best acne scar treatment, best acne acne scar treatment, best acne scar removal treatment, acne scar treatment near me, and treatment for acne scars London options. Our treatment for acne scars products include laser therapy, dermal fillers, chemical peels, skin care treatments for acne scars, skin treatment for acne scarring, and microneedling. The best treatment for acne scar removal depends on scar type including treatment for deep acne scar. We also treat acne marks treatment, treatment acne dark spots, and ensure both active acne spot treatment and scar prevention.
          </p>
          
          <h3>Personalised Acne Treatment Care for All Ages</h3>
          <p>
            Located at 10 Harley Street in the heart of London, our clinic provides the best acne treatment for all ages including teenage acne treatment, acne treatment for teen boys, best acne treatment for adults, adult acne treatment, and even baby acne treatment when needed. Every patient's acne journey is unique, which is why we develop personalised private acne treatment plans tailored to your specific needs, whether you need hormonal acne treatment UK, cystic acne treatment UK, or body acne treatment. Our holistic approach to good acne treatments UK and top acne treatment UK considers not only the physical aspects but also the psychological impact of acne, providing support throughout your acne treatment dermatologist journey. We work closely with you to monitor progress, adjust treatments as needed, and ensure optimal long-term outcomes for clear, healthy skin with our comprehensive acne treatments.
          </p>
          
          <h3>Why Choose Our Dermatologist Acne Treatment London</h3>
          <p>
            As leading acne dermatologists in London, we combine over 15 years of experience with the latest acne disease treatments technologies. Our GMC-registered doctors are Harley Street Institute trainers, ensuring you receive the highest standard of care for all acne types including bacterial acne treatment, fungal acne treatment, comedonal acne treatment, and topical treatment for rosacea acne. Whether you're searching for "acne treatment near me", "best acne treatment UK", "best acne treatment London", "cystic acne treatment", "acne scar treatment near me", or "treatment for acne scars London", Cosmedocs offers evidence-based solutions with proven results. We believe in invisible art - creating natural transformations that restore your confidence and skin health through the best treatment for acne available.
          </p>
          
          <h3>Medical Review Information</h3>
          <p>
            All acne treatment information reviewed by GMC-registered dermatologists with over 15 years of experience in treating acne vulgaris, cystic acne, hormonal acne, bacterial acne, fungal acne, and acne scarring. Our medical team includes Harley Street Institute trainers specialising in advanced acne therapies including Accutane acne treatment, laser treatments, light acne treatments, topical acne treatment, and cosmeceutical acne management for comprehensive skin and acne treatment.
          </p>
        </div>
      </div>
    </>
  );
}