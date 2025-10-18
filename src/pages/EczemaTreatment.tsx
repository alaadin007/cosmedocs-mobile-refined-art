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

export default function EczemaTreatment() {
  const seoData = generateSEOMetadata(
    "Eczema Treatment London | Cosmedocs",
    "Expert eczema treatment London for atopic dermatitis, severe eczema, hand eczema, scalp eczema, and facial eczema. Advanced dermatology care for all eczema types. Book consultation today.",
    "/eczema-treatment"
  );

  const beforeAfterImages = [
    {
      src: "/images/eczema-before-after-1.jpg",
      alt: "Eczema treatment before and after - Patient 1",
      caption: "Significant improvement in skin inflammation and texture"
    },
    {
      src: "/images/eczema-before-after-2.jpg", 
      alt: "Eczema treatment before and after - Patient 2",
      caption: "Reduced redness and restored skin barrier function"
    },
    {
      src: "/images/eczema-before-after-3.jpg",
      alt: "Eczema treatment before and after - Patient 3", 
      caption: "Dramatic healing of dry, scaly patches"
    }
  ];

  const faqs = [
    {
      question: "How long does eczema treatment take to work?",
      answer: "Results typically begin to show within 1-2 weeks for acute flares, with significant improvement visible after 4-6 weeks. Long-term management requires ongoing care and lifestyle adjustments to prevent future flare-ups."
    },
    {
      question: "Is eczema treatment painful?",
      answer: "Most eczema treatments are painless and focus on soothing irritated skin. Topical medications may cause temporary mild stinging, but this usually subsides quickly. Our treatments prioritize comfort and gentle healing."
    },
    {
      question: "What types of eczema can you treat?",
      answer: "We treat all forms of eczema including atopic dermatitis, contact dermatitis, dyshidrotic eczema, and seborrheic dermatitis. Our comprehensive approach addresses both active symptoms and long-term prevention."
    },
    {
      question: "Are there any side effects?",
      answer: "Side effects are generally minimal. Topical corticosteroids may cause temporary skin thinning with prolonged use. Our dermatologists carefully monitor treatment progress and adjust medications as needed to minimize risks."
    },
    {
      question: "How much does eczema treatment cost?",
      answer: "Eczema treatment costs vary depending on the severity and type of treatment required. We offer comprehensive consultations to create personalized treatment plans with transparent pricing and flexible payment options."
    },
    {
      question: "Can eczema be cured permanently?",
      answer: "While there's no permanent cure for eczema, it can be effectively managed and controlled. Many patients achieve long periods of clear skin with proper treatment and lifestyle management. Our goal is to minimize symptoms and prevent flare-ups."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Eczema Treatment",
    "description": "Professional eczema treatment for dry, red, and scaly skin conditions",
    "serviceType": "Dermatological Treatment",
    "provider": {
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
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "bestRating": "5",
      "ratingCount": "156"
    }
  };

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={seoData.canonical} />
        <meta name="keywords" content="eczema treatment London, eczema treatment, atopic eczema treatment, atopic dermatitis treatment, best eczema treatment, severe eczema treatment, hand eczema treatment, scalp eczema treatment, eczema treatment UK, face eczema treatment, eczema treatment for face, best treatment for eczema, eczema treatment near me, treatment for eczema" />
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
            "name": "Cosmedocs - Eczema Treatment London",
            "image": seoData.image,
            "description": "Expert eczema treatment London for atopic dermatitis, severe eczema, hand eczema, scalp eczema serving Marylebone, Mayfair, Westminster, and Central London",
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
            "description": "Expert eczema treatment London for all types including atopic dermatitis, severe eczema, and eczema flare up treatment",
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
              "reviewCount": "156"
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
                "name": "Eczema Treatment",
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
            currentPage="Eczema Treatment"
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
                  <span className="text-purple-300">Best Eczema Treatment London</span>
                  <span className="block text-sm mt-4">Invisible art - natural skin transformation that speaks without words</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Expert Treatment for Atopic Dermatitis & Severe Eczema</p>
                  <p className="text-sm text-gray-300">Advanced Dermatology Care for All Eczema Types in Central London</p>
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
              <h2 className="text-3xl font-bold mb-8 text-white">Comprehensive Eczema Treatments UK</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Expert eczema treatment options including hand eczema treatment, scalp eczema treatment, face eczema treatment, foot eczema treatment, and treatments for eczema on eyes, ears, and lips. Specialising in severe eczema treatment, atopic dermatitis treatment, infected eczema treatment, and eczema flare up treatment for all ages.
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
                <p className="text-gray-300">Ongoing therapy and maintenance</p>
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
                <p className="text-gray-300">1-2 weeks to long-term management</p>
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
                <p className="text-gray-300">Gentle, soothing treatments</p>
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
              <h2 className="text-3xl font-bold mb-4">Before and After Eczema Treatment Results</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See authentic transformations from our eczema treatment clinic near you in London. Our comprehensive eczema treatments significantly reduce atopic dermatitis symptoms, severe eczema, and improve skin health for naturally healthy, comfortable skin. According to the <a href="https://www.nhs.uk/conditions/atopic-eczema/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">NHS</a>, professional treatment is essential for managing chronic eczema.
              </p>
            </motion.div>

            <BeforeAfterImageViewer images={beforeAfterImages} />
          </div>
        </section>

        {/* What is Eczema - Two Column Layout */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Understanding Eczema & Atopic Dermatitis</h2>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Eczema, also known as atopic dermatitis, is a chronic inflammatory skin condition affecting millions in London and the UK. Our expert dermatologists specialise in treating all forms including severe eczema treatment, hand eczema treatment, scalp eczema treatment, facial eczema treatment, and extreme eczema treatment for serious eczema cases.
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
                      <h3 className="text-xl font-bold text-white mb-4">Understanding Atopic Eczema</h3>
                      <p className="text-gray-300">
                        Eczema, also known as atopic dermatitis, is a chronic inflammatory skin condition that causes dry, red, and intensely itchy patches of skin. It affects people of all ages but is most common in children. The <a href="https://eczema.org/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">National Eczema Society</a> provides comprehensive resources for managing this condition.
                      </p>
                      <p className="text-gray-300">
                        Our comprehensive treatment for eczema approach addresses:
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                          <span className="text-gray-300">Active inflammation and itching including eczema flare up treatment</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                          <span className="text-gray-300">Skin barrier restoration for eczema on face treatment and hand eczema treatment</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                          <span className="text-gray-300">Trigger identification including treatment for eczema on head and scalp</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                          <span className="text-gray-300">Long-term prevention strategies for all eczema and treatment needs</span>
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
                      <h3 className="text-xl font-bold text-white mb-4">What Causes Eczema?</h3>
                      <p className="text-gray-300 mb-4">
                        Understanding the root causes helps us develop effective, personalized treatment strategies.
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                          <div>
                            <span className="text-white font-medium">Genetic Factors:</span>
                            <span className="text-gray-300"> Family history and inherited skin barrier dysfunction</span>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                          <div>
                            <span className="text-white font-medium">Environmental Triggers:</span>
                            <span className="text-gray-300"> Allergens, irritants, and weather conditions</span>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                          <div>
                            <span className="text-white font-medium">Immune System:</span>
                            <span className="text-gray-300"> Overactive immune response to triggers</span>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                          <div>
                            <span className="text-white font-medium">Skin Barrier Issues:</span>
                            <span className="text-gray-300"> Impaired moisture retention and increased permeability</span>
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
              <h2 className="text-3xl font-bold mb-4">Best Treatment for Eczema UK</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our multi-faceted approach combines the latest dermatological advances with personalised care. From topical treatments to light treatment for eczema, we offer the best eczema treatment options for atopic dermatitis eczema treatment, infected eczema treatment, and serious eczema treatment including eczema rash treatment.
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
                    <CardTitle className="text-white text-xl">Topical Eczema Treatments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Advanced topical therapies for eczema on face treatment, treatment eczema face, and best treatment for eczema on face. Essential for treating facial eczema treatment, eyelid eczema treatment, and eczema under eye treatment. Can be combined with <Link to="/skin-boosters" className="text-purple-300 hover:text-purple-200 underline">skin barrier repair treatments</Link>.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>Topical corticosteroids</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>Calcineurin inhibitors</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>Barrier repair moisturizers</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>Ceramide-rich formulations</span>
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
                    <CardTitle className="text-white text-xl">Advanced Eczema Therapies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Specialised treatments for severe eczema treatment and extreme eczema treatment cases. Includes light treatment eczema (phototherapy) for serious eczema treatment. According to the <a href="https://www.bad.org.uk/healthcare-professionals/clinical-standards/clinical-guidelines/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">British Association of Dermatologists</a>, these advanced therapies are essential for moderate to severe cases.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>Phototherapy (UV treatment)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>Wet wrap therapy</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>Oral antihistamines</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>Immunosuppressive therapy</span>
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
                    <CardTitle className="text-white text-xl">Lifestyle & Area-Specific Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Comprehensive approach for eczema on hands treatment, eczema treatment for the scalp, foot eczema treatment, ear eczema treatment, and eye eczema treatment. Includes trigger management and can be combined with <Link to="/microneedling" className="text-purple-300 hover:text-purple-200 underline">skin rejuvenation treatments</Link> for enhanced results.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>Trigger identification</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>Stress reduction techniques</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>Dietary recommendations</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>Sleep hygiene optimization</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Types of Eczema */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Types of Eczema We Treat</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Understanding different eczema types helps us create targeted treatments for eczema. We treat all types including atopic eczema treatment, atopic dermatitis eczema treatment, and microbial eczema treatment from mild to extreme eczema.
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
                    <CardTitle className="text-purple-300">Atopic Dermatitis</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300 mb-4">
                      The most common form of eczema, typically appearing in childhood but can affect adults. Often associated with allergies and asthma.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-medium">Symptoms:</span>
                          <span className="text-gray-300"> Red, itchy, dry patches of skin</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-medium">Location:</span>
                          <span className="text-gray-300"> Face, hands, feet, inner elbows, behind knees</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-medium">Triggers:</span>
                          <span className="text-gray-300"> Allergens, stress, temperature changes</span>
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
                    <CardTitle className="text-purple-300">Contact Dermatitis</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300 mb-4">
                      Caused by direct contact with irritants or allergens. Can be acute or chronic depending on exposure.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-medium">Irritant Contact:</span>
                          <span className="text-gray-300"> Caused by harsh chemicals, soaps, detergents</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-medium">Allergic Contact:</span>
                          <span className="text-gray-300"> Reaction to specific allergens like nickel, fragrances</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-medium">Treatment:</span>
                          <span className="text-gray-300"> Trigger avoidance and anti-inflammatory treatments</span>
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
        <section id="pricing-section" className="py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Eczema Treatment Pricing London</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Professional eczema treatment UK with personalised care plans. Every treatment includes comprehensive consultation, assessment, and ongoing support from our expert dermatologists. We offer the best eczema treatment for all types including eczema treatment on feet, eczema on scalp treatment, eczema on lips treatment, eczema around eyes treatment, and eczema under the eyes treatment.
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
                    <CardTitle className="text-white text-2xl">Eczema Treatment</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">Price on Consultation</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Customized treatment plan based on your specific eczema type and severity</p>
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
              <h2 className="text-3xl font-bold mb-8 text-white">Why Choose Cosmedocs for Eczema Treatment?</h2>
              <p className="text-gray-300 max-w-3xl mx-auto mb-12">
                Conveniently located at 10 Harley Street, serving patients seeking eczema treatment near me from Marylebone, Mayfair, Westminster, Fitzrovia, Bloomsbury, Regent's Park, and across Central London and Greater London.
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
                <p className="text-gray-300">Specialized dermatologists with extensive eczema treatment experience</p>
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
                <p className="text-gray-300">Treatment plans tailored to your specific eczema type and triggers</p>
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
                <p className="text-gray-300">Latest options including light treatment eczema and <Link to="/prp-treatment" className="text-purple-300 hover:text-purple-200 underline">regenerative therapies</Link></p>
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
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions About Eczema Treatment</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Get answers to common questions about eczema treatment London, atopic dermatitis treatment, severe eczema treatment, and treatments for eczema at our clinic.
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
              <h2 className="text-3xl font-bold mb-4">Ready for Healthy, Comfortable Skin?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert dermatologists and discover how our advanced eczema treatments can transform your skin health with lasting, natural results. Whether you need atopic eczema treatment, severe eczema treatment, or treatment for eczema on face, hands, scalp, or feet, we're here to help.
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
          <h2>Best Eczema Treatment London - Expert Dermatology Care</h2>
          <p>
            Eczema treatment at Cosmedocs offers the best eczema treatment UK for all types including atopic eczema treatment, atopic dermatitis treatment, atopic dermatitis eczema treatment, severe eczema treatment, serious eczema treatment, extreme eczema treatment, and infected eczema treatment. Our comprehensive approach to treatment for eczema includes advanced dermatological therapies, topical eczema treatments, light treatment for eczema (phototherapy), and professional procedures. We specialise in eczema treatment for face, best treatment for eczema on face, treatment eczema face, facial eczema treatment, and eczema on face treatment. We also provide hand eczema treatment, eczema of the hands treatment, eczema on hands treatment, scalp eczema treatment, eczema treatment for the scalp, treatment for eczema on head, eczema on scalp treatment, foot eczema treatment, eczema on feet treatment, and eczema treatment on feet.
          </p>
          
          <h3>Comprehensive Area-Specific Eczema Treatments</h3>
          <p>
            Our expert dermatologists provide specialised treatments for eczema in all areas including eyelid eczema treatment, eye eczema treatment, eczema around eyes treatment, eczema under eye treatment, eczema under the eyes treatment, ear eczema treatment, and eczema on lips treatment. We understand that eczema and treatment needs vary by location, which is why we offer targeted eczema treatments for each specific area. Whether you're seeking eczema treatment near me in London or the best treatment for eczema for your specific condition, our central London location makes professional care easily accessible. We treat all forms of eczema rash treatment and eczema flare up treatment with evidence-based approaches.
          </p>
          
          <h3>Advanced Eczema Treatment Options London</h3>
          <p>
            Our best eczema treatment arsenal includes topical treatments for managing inflammation and restoring skin barrier function. For more extensive severe eczema treatment and serious eczema treatment cases, we offer light treatment eczema (phototherapy), wet wrap therapy, and immunosuppressive treatments that have proven highly effective in reducing inflammation. These advanced eczema treatments UK options are particularly effective for extreme eczema treatment and infected eczema treatment. Our approach to atopic dermatitis eczema treatment combines multiple modalities including prescription medications, barrier repair moisturisers, and lifestyle modifications for optimal results in treating atopic eczema treatment and atopic dermatitis treatment.
          </p>
          
          <h3>Specialist Facial & Hand Eczema Treatment</h3>
          <p>
            Facial areas require special attention, which is why we provide expert eczema on face treatment, facial eczema treatment, best treatment for eczema on face, and treatment for eczema on face options. Our approach to face eczema treatment includes gentle formulations suitable for sensitive facial skin whilst treating eyelid eczema treatment, eczema around eyes treatment, and eczema under eye treatment concerns. For hand eczema treatment, we address eczema of the hands treatment and eczema on hands treatment with barrier repair and occupational therapy approaches. We also specialise in scalp eczema treatment, eczema treatment for the scalp, treatment for eczema on head, and eczema on scalp treatment using medicated shampoos and topical therapies.
          </p>
          
          <h3>Personalised Eczema Treatment Care</h3>
          <p>
            Located at 10 Harley Street in the heart of London, our clinic provides the best eczema treatment near me for patients from Marylebone, Mayfair, Westminster, Fitzrovia, Bloomsbury, Regent's Park, and all areas of Central London and Greater London. Every patient's eczema journey is unique, which is why we develop personalised eczema treatment plans tailored to your specific needs, whether you need severe eczema treatment, atopic eczema treatment, or treatments for eczema in specific body areas. Our holistic approach to eczema treatment UK and eczema treatments considers not only the physical aspects but also the psychological impact, providing support throughout your treatment journey. We work closely with you to monitor progress, adjust treatments as needed, and ensure optimal long-term outcomes for clear, healthy skin with our comprehensive eczema and treatment solutions.
          </p>
          
          <h3>Why Choose Our Eczema Treatment London</h3>
          <p>
            As leading dermatologists in London, we combine over 15 years of experience with the latest eczema treatment technologies including light treatment for eczema. Our GMC-registered doctors are Harley Street Institute trainers, ensuring you receive the highest standard of care for all eczema types including microbial eczema treatment, infected eczema treatment, and eczema rash treatment. Whether you're searching for "eczema treatment near me", "best eczema treatment", "best eczema treatment UK", "atopic dermatitis treatment", "severe eczema treatment", or "treatment for eczema on face", Cosmedocs offers evidence-based solutions with proven results. We believe in invisible art - creating natural transformations that restore your skin health and confidence.
          </p>
          
          <h3>Medical Review Information</h3>
          <p>
            All eczema treatment information reviewed by GMC-registered dermatologists with over 15 years of experience in treating atopic eczema, atopic dermatitis, severe eczema, and all eczema types. Our medical team includes Harley Street Institute trainers specialising in advanced eczema therapies including light treatment eczema, barrier repair treatments, and comprehensive eczema management for face eczema treatment, hand eczema treatment, scalp eczema treatment, and body eczema treatments.
          </p>
        </div>
      </div>
    </>
  );
}