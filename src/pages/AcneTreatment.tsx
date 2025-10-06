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
    "Best Acne Treatment London | Cystic, Hormonal & Acne Scar Treatment | Cosmedocs",
    "Expert acne treatment London for cystic acne, hormonal acne, and acne scars. Advanced dermatology care with proven results. Book your consultation today.",
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
    "@type": "MedicalProcedure",
    "name": "Acne Treatment",
    "description": "Professional acne treatment for clear, blemish-free skin",
    "procedureType": "Dermatological Treatment",
    "bodyLocation": "Face, Chest, Back",
    "preparation": "Consultation with dermatologist",
    "followup": "Regular follow-up appointments",
    "howPerformed": "Advanced acne therapies and treatments",
    "provider": {
      "@type": "MedicalOrganization",
      "name": "Cosmedocs",
      "url": "https://cosmedocs.com"
    },
    "location": {
      "@type": "Place", 
      "name": "UK"
    },
    "offers": {
      "@type": "Offer",
      "description": "Acne treatment consultation and therapy"
    }
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

        {/* MedicalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Cosmedocs",
            "description": "Expert acne treatment London for all types of acne including cystic, hormonal, and acne scarring",
            "url": seoData.canonical,
            "telephone": "0333 0551 503",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "10 Harley Street",
              "addressLocality": "London",
              "postalCode": "W1G 9PF",
              "addressCountry": "GB"
            },
            "medicalSpecialty": "Dermatology",
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
              <h2 className="text-3xl font-bold mb-8 text-white">Acne Treatment London</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Comprehensive acne treatment options for face and body including advanced therapies for cystic acne, hormonal acne, and acne scar treatment.
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

        {/* Before and After Gallery */}
        <section className="py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Before and After Acne Treatment Results</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See authentic transformations from our acne treatment clinic near you in London. Our comprehensive acne treatments significantly reduce cystic acne, hormonal acne symptoms, and acne scarring for naturally clear, healthy skin. According to the <a href="https://www.nhs.uk/conditions/acne/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">NHS</a>, professional acne treatment is essential for severe cases.
              </p>
            </motion.div>

            <BeforeAfterImageViewer images={beforeAfterImages} />
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
              <h2 className="text-3xl font-bold mb-4">Understanding Acne & Skin Conditions</h2>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Acne is one of the most common chronic skin conditions affecting adolescents and adults in London and across the UK. Our expert dermatologists specialise in treating all forms of acne including severe acne, cystic acne, hormonal acne, and acne scarring.
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
                        Our comprehensive acne treatment London approach addresses:
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                          <span className="text-gray-300">Active acne lesions and breakouts</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                          <span className="text-gray-300">Acne scarring and texture issues</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                          <span className="text-gray-300">Hormonal and cystic acne</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                          <span className="text-gray-300">Prevention of future breakouts</span>
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
              <h2 className="text-3xl font-bold mb-4">Best Acne Treatment Options London</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our multi-faceted approach combines the latest dermatological advances with personalised care for optimal acne management. From cystic acne treatment to hormonal acne therapy and acne scar treatment UK, we offer comprehensive solutions.
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
                    <CardTitle className="text-white text-xl">Topical Acne Treatments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Advanced topical therapies targeting acne-causing bacteria and reducing inflammation. Essential for mild to moderate acne treatment.
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
                    <CardTitle className="text-white text-xl">Advanced Acne Procedures</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Professional treatments for faster results and acne scar prevention. Includes <Link to="/microneedling" className="text-purple-300 hover:text-purple-200 underline">microneedling</Link> for scar reduction.
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
                    <CardTitle className="text-white text-xl">Oral Medications for Severe Acne</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Systemic treatments for moderate to severe acne cases including cystic acne treatment and hormonal acne treatment. Can be combined with <Link to="/skin-boosters" className="text-purple-300 hover:text-purple-200 underline">skin booster treatments</Link> for enhanced results.
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

            {/* Additional Information Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <Card className="bg-gradient-to-br from-purple-900/20 to-black border-purple-500/30 hover:border-purple-500/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white text-lg">Acne-Related Conditions – Pigmentation And Scarring</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Acne patients may experience pigmentation, discolouration, and scarring. Our acne scar treatment London options include laser therapy, dermal fillers, and specialist skincare. According to <a href="https://dermnetnz.org/topics/acne" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">DermNet NZ</a>, professional treatment significantly reduces post-acne complications.
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
                Understanding the different types of acne helps us create targeted treatment plans for optimal results. We treat all acne types from mild to severe acne London.
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
              <h2 className="text-3xl font-bold mb-4 text-white">Acne Treatment Pricing London</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Professional acne treatment London with personalised care plans. Every treatment includes comprehensive consultation, assessment, and ongoing support from our expert acne dermatologist London team. We offer the best acne treatment UK with transparent pricing.
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
                <p className="text-gray-300">Latest acne treatment options including laser therapy and <Link to="/prp-treatment" className="text-purple-300 hover:text-purple-200 underline">advanced therapies</Link></p>
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
            Acne treatment London at Cosmedocs offers the best acne treatment for all types including cystic acne treatment, hormonal acne treatment, severe acne treatment, and acne scar treatment. Our comprehensive approach to treating acne includes advanced dermatological therapies, topical treatments, oral medications, and professional procedures. We specialise in acne treatment for face, teenage acne treatment, adult acne treatment, and body acne treatment UK.
          </p>
          
          <h3>Understanding Acne and Its Types</h3>
          <p>
            Acne is a chronic inflammatory skin condition affecting millions of people in London and across the UK. Our acne dermatologist London team treats all forms of acne vulgaris including comedonal acne (blackheads and whiteheads), inflammatory acne (papules, pustules), and severe acne forms like nodules and cysts. Whether you're seeking cystic acne treatment London, hormonal acne treatment, or teenage acne solutions, our expert dermatologists provide personalised care. We understand that acne treatment near me searches reflect the urgent need for professional help, and our central London location makes us easily accessible.
          </p>
          
          <h3>Advanced Acne Treatment Options London</h3>
          <p>
            Our best acne treatment UK arsenal includes topical therapies such as retinoids (tretinoin, adapalene), benzoyl peroxide, and topical antibiotics for mild to moderate acne treatment. For more extensive acne, we offer chemical peels, laser therapy, LED light treatments, and microneedling that have proven highly effective in reducing inflammation and preventing new breakouts. These advanced acne treatments are particularly effective for acne scar treatment London. In severe cystic acne treatment cases, we provide oral medications including antibiotics, hormonal treatments (birth control pills, spironolactone), and isotretinoin (Accutane) for comprehensive acne management.
          </p>
          
          <h3>Acne Scar Treatment London</h3>
          <p>
            Post-acne scarring is a common concern that we address with specialist acne scar treatment options. Our treatments for acne scars include laser therapy, dermal fillers, chemical peels, and microneedling. The best treatment for acne scars depends on scar type, skin type, and severity. Our acne treatment London approach ensures both active acne management and scar prevention, providing complete skin transformation.
          </p>
          
          <h3>Personalised Acne Treatment Care</h3>
          <p>
            Located at 10 Harley Street in the heart of London, our clinic provides the best acne treatment near me for patients from Marylebone, Mayfair, Westminster, Fitzrovia, Bloomsbury, Regent's Park, and all areas of Central London and Greater London. Every patient's acne journey is unique, which is why we develop personalised acne treatment plans tailored to your specific needs, whether you need hormonal acne treatment, cystic acne treatment, or teenage acne treatment. Our holistic approach to acne treatment UK considers not only the physical aspects but also the psychological impact of acne, providing support throughout your treatment journey. We work closely with you to monitor progress, adjust acne treatments as needed, and ensure optimal long-term outcomes for clear, healthy skin.
          </p>
          
          <h3>Why Choose Our Acne Treatment London</h3>
          <p>
            As leading acne dermatologists in London, we combine over 15 years of experience with the latest acne treatment technologies. Our GMC-registered doctors are Harley Street Institute trainers, ensuring you receive the highest standard of care for all acne types. Whether you're searching for "acne treatment near me", "best acne treatment London", "cystic acne treatment", or "acne scar treatment UK", Cosmedocs offers evidence-based solutions with proven results. We believe in invisible art - creating natural transformations that restore your confidence and skin health.
          </p>
          
          <h3>Medical Review Information</h3>
          <p>
            All acne treatment information reviewed by GMC-registered dermatologists with over 15 years of experience in treating acne vulgaris, cystic acne, hormonal acne, and acne scarring. Our medical team includes Harley Street Institute trainers specialising in advanced acne therapies, laser treatments, and cosmeceutical acne management.
          </p>
        </div>
      </div>
    </>
  );
}