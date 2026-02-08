import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Phone, Clock, ShieldCheck, Award, Users, Activity, GraduationCap, CheckCircle, Palette, Heart } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { generateSEOMetadata } from "@/utils/seo";
import Breadcrumb from "@/components/Breadcrumb";

const HyperpigmentationTreatment = () => {
  const seoData = generateSEOMetadata(
    "Hyperpigmentation Treatment London | Cosmedocs",
    "Eliminate dark spots, melasma & uneven skin tone. IPL laser, chemical peels & prescription treatments for pigmentation.",
    "/concerns/pigmentation-melasma/"
  );

  const beforeAfterImages = [
    { 
      src: "/lovable-uploads/0573fff6-1f9b-4393-a953-0c3f4b654eed.png", 
      alt: "Pigmentation treatment before and after", 
      caption: "Significant improvement in hyperpigmentation and skin evenness" 
    },
    { 
      src: "/lovable-uploads/4d5e6f7a-8b9c-1d2e-3f4a-5b6c7d8e9f0a.png", 
      alt: "Melasma treatment results", 
      caption: "Dramatic reduction in melasma patches" 
    }
  ];

  const faqData = [
    {
      question: "Do these hyperpigmentation treatments completely cure hyperpigmentation?",
      answer: "No, you should have realistic expectations. These hyperpigmentation treatments do not completely eliminate hyperpigmentation however it will be significantly lightened and will almost become invisible."
    },
    {
      question: "Which hyperpigmentation treatment is best for me?",
      answer: "The choice of the hyperpigmentation treatment depends largely on the types of skin and extent of skin condition. The doctor will conduct a complete examination of the skin in initial consultation and will recommend a hyperpigmentation treatment which will suit best to your condition and skin type."
    },
    {
      question: "How many hyperpigmentation treatments do I require to improve my skin condition?",
      answer: "This is largely determined by the severity of your hyperpigmentation. However, 40%-50% improvement is mostly observed after the first treatment session. You can have significant reduction in hyperpigmentation after receiving 2-3 treatments."
    },
    {
      question: "What causes hyperpigmentation?",
      answer: "The overactivity of pigment-producing cells called melanocytes is responsible for hyperpigmentation. This can also occur in many ways, including sun exposure, hormonal changes, acne, and breakouts that may result in hyperpigmentation."
    },
    {
      question: "Can hyperpigmentation go away naturally?",
      answer: "It's more or less permanent in some situations. There are treatments available that will help. Some won't fully remove black marks, but they will significantly lighten them."
    },
    {
      question: "There are dark spots on my skin, is it hyperpigmentation?",
      answer: "There is a possibility of hyperpigmentation. If you observe any darker area on your body as compared to rest of skin, it is most likely to be hyperpigmentation."
    },
    {
      question: "What measures can I take to prevent hyperpigmentation?",
      answer: "You can take some preventive measures in your daily life: Whenever you go out wear SPF 30 or higher and avoid excessive sun exposure. By adopting a regular skin exfoliation regime you can remove the accumulation of dead skin cells which are contributing factor to hyperpigmentation. Avoid picking on your acne or skin that can develop dark spots. There are some medications which can cause skin discoloration, so its better to consult your doctor about it."
    },
    {
      question: "Will retinol remove dark spots?",
      answer: "Surprisingly, Retinol is one of the best ingredients for fading dark spots."
    },
    {
      question: "Can a dermatologist remove dark spots?",
      answer: "A dermatologist can offer creams or procedures to lighten dark spots, or in some cases, eliminate them."
    },
    {
      question: "How long after IPL treatment do you see results?",
      answer: "IPL uses the intense pulse light that usually needs 3-6 treatments sessions to clear and even out skin tone. The treatment has no downtime."
    },
    {
      question: "What are the side effects?",
      answer: "Common side effects include mild redness, slight itching, and temporary discomfort. In professional hands at Cosmedocs, side effects are minimal."
    },
    {
      question: "Is there any downtime?",
      answer: "Most hyperpigmentation treatments have minimal to no downtime. Patients can typically resume daily activities immediately after treatment."
    }
  ];

  const treatmentMethods = [
    {
      title: "IPL Treatment",
      description: "Intense Pulsed Light uses broad spectrum light to clear dark spots, age spots, and sun damage. Typically requires 3-6 sessions with no downtime.",
      icon: "💡"
    },
    {
      title: "Chemical Peels",
      description: "Professional peels with glycolic, lactic, and salicylic acids help resurface skin and increase cell turnover for improved pigmentation.",
      icon: "🧪"
    },
    {
      title: "Prescription Skincare",
      description: "Medical-grade products including hydroquinone (the 'Gold Standard'), kojic acid, and vitamin A products for targeted treatment.",
      icon: "💊"
    },
    {
      title: "Microdermabrasion",
      description: "Effective for mild pigmentation, improving rough and sun-damaged skin through gentle exfoliation and enhanced product absorption.",
      icon: "✨"
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
        <meta name="keywords" content="hyperpigmentation treatment London, hyperpigmentation treatment, skin pigmentation disorders, pigmentation treatment London, hyperpigmentation treatment for face, best treatment for hyperpigmentation, hyperpigmentation treatment for dark skin, post hyperpigmentation treatment, body hyperpigmentation treatment, hyperpigmentation treatment UK, skin hyperpigmentation treatment, hyperpigmentation treatment near me" />
        <meta name="geo.region" content="GB-LND" />
        <meta name="geo.placename" content="London" />
        <meta name="geo.position" content="51.518642;-0.145044" />
        
        {/* LocalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Cosmedocs - Hyperpigmentation Treatment London",
            "image": seoData.image,
            "description": "Expert hyperpigmentation treatment London for face, body, and skin pigmentation disorders serving Marylebone, Mayfair, Westminster, and Central London",
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
            "description": "Expert hyperpigmentation treatment London for face, body, and skin pigmentation disorders",
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
              "reviewCount": "127"
            },
            "availableService": {
              "@type": "MedicalProcedure",
              "name": "Hyperpigmentation Treatment",
              "description": "Expert treatment for face, body, and skin pigmentation disorders"
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
                "name": "Hyperpigmentation Treatment",
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
            "mainEntity": faqData.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>

        {/* MedicalProcedure Schema - IPL Treatment */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "IPL Hyperpigmentation Treatment",
            "description": "Intense Pulsed Light therapy for treating hyperpigmentation, melasma, and skin pigmentation disorders on face and body",
            "procedureType": "Cosmetic",
            "followup": "3-6 sessions typically required",
            "preparation": "Avoid sun exposure before treatment",
            "howPerformed": "Broad spectrum light targets melanin deposits in skin"
          })}
        </script>

        {/* MedicalProcedure Schema - Chemical Peels */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "Chemical Peel for Hyperpigmentation",
            "description": "Professional chemical peels for treating post-inflammatory hyperpigmentation, dark skin pigmentation, and uneven skin tone",
            "procedureType": "Cosmetic",
            "followup": "Multiple sessions recommended",
            "preparation": "Skin assessment and preparation protocol",
            "howPerformed": "Application of medical-grade glycolic, lactic, or salicylic acid solutions"
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        {/* Breadcrumb Navigation */}
        <div className="page-container pt-8">
          <Breadcrumb 
            items={[
              { label: "Treatments", path: "/treatments" }
            ]} 
            currentPage="Hyperpigmentation Treatment"
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
                  <span className="text-purple-300">Best Hyperpigmentation Treatment London</span>
                  <span className="block text-sm mt-4">Invisible art - natural skin transformation that speaks without words</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Advanced Treatment for Face & Body Hyperpigmentation</p>
                  <p className="text-sm text-gray-300">Expert Solutions for Skin Pigmentation Disorders & Post-Inflammatory Hyperpigmentation</p>
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
                <h2 className="text-3xl font-bold mb-8 text-white">Hyperpigmentation Treatments for Face & Body</h2>
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
                <p className="text-gray-300">30-60 minutes</p>
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
                <p className="text-gray-300">Long-lasting with maintenance</p>
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
                <p className="text-gray-300">Same day return to work</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Anaesthesia</h3>
                <p className="text-gray-300">Topical if required</p>
              </motion.div>
            </div>
          </div>
        </section>


        {/* What is Hyperpigmentation */}
        <section className="py-20 bg-accent text-white">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Understanding Skin Pigmentation Disorders</h2>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Hyperpigmentation is a common skin pigmentation disorder where melanin, the natural pigment that gives your skin its colour, is overproduced. When melanocytes (pigment-producing cells) become overactive, they create excess melanin in certain areas, leading to uneven skin tone, dark patches on face and body, and post-inflammatory hyperpigmentation. According to the <a href="https://www.nhs.uk/conditions/skin-pigmentation-disorders/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">NHS</a>, these conditions are common and can affect people of all skin types.
              </p>
            </motion.div>

            {/* What is Hyperpigmentation Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/40 border border-purple-500/20 h-full hover:border-purple-500/40 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-white text-2xl">What is Hyperpigmentation?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">
                      Hyperpigmentation is a common skin pigmentation disorder where patches of skin on the face or body become darker than the surrounding areas. This occurs when melanin, the pigment that gives skin its colour, is produced in excess in certain areas. Treatment for hyperpigmentation on face and body can effectively address these concerns.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">Affects all skin types and ethnicities</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">Can appear as dark spots, patches, or areas</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">Usually harmless but aesthetically concerning</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">Most common on face, hands, and sun-exposed areas</p>
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
                <Card className="bg-black/40 border border-purple-500/20 h-full hover:border-purple-500/40 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-white text-2xl">How is Hyperpigmentation Formed?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">
                      Hyperpigmentation forms when melanocytes (pigment-producing cells) become overactive 
                      and produce excess melanin. This can be triggered by various internal and external factors 
                      that stimulate melanin production.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">UV radiation and sun exposure</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">Hormonal changes (pregnancy, birth control)</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">Post-inflammatory response (acne, injury)</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">Genetic predisposition and aging</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>


        {/* Comprehensive Treatment Approach */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 text-white">Best Treatment for Hyperpigmentation on Face & Body</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Our multi-modal approach combines the best treatments for hyperpigmentation, including cosmeceuticals and advanced procedures for optimal results. Every hyperpigmentation treatment UK is tailored to your skin type, whether treating facial hyperpigmentation, body hyperpigmentation, lip hyperpigmentation, or hyperpigmentation treatment for dark skin.
              </p>
            </motion.div>

            {/* Treatment Categories Grid */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Topical & Cosmeceutical Treatments */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Topical & Cosmeceutical Hyperpigmentation Treatments</h3>
                  <p className="text-gray-300">Medical-grade skin hyperpigmentation treatment products for targeted correction</p>
                </div>

                <div className="space-y-6">
                  <Card className="bg-black/40 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                    <CardContent className="p-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Broad Spectrum Sunscreen</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          SPF 30 and above protection essential for preventing further UV damage and maintaining treatment results. Often combined with <Link to="/skin-boosters" className="text-purple-300 hover:text-purple-200 underline">skin booster treatments</Link> for enhanced skin health.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/40 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                    <CardContent className="p-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Hydroquinone & Kojic Acid 
                          <span className="text-xs text-purple-300 ml-2">GOLD STANDARD</span>
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Most effective cosmeceutical skin lighteners. Enhanced when combined 
                          with antioxidants, hydroxy acids, and retinoids for superior results.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/40 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                    <CardContent className="p-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Vitamin A Products</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Retinol and Tretinoin accelerate skin rejuvenation, resurfacing, and cellular turnover for improved pigmentation. Works synergistically with <Link to="/prp-treatment" className="text-purple-300 hover:text-purple-200 underline">regenerative treatments</Link>.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/40 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                    <CardContent className="p-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Alpha Hydroxy Acids</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Gentle exfoliation and increased cell turnover for smoother, 
                          more even-toned skin texture.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>

              {/* Professional Procedures */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Professional Hyperpigmentation Face Treatment</h3>
                  <p className="text-gray-300">Advanced in-clinic treatments for hyperpigmentation near me in London</p>
                </div>

                <div className="space-y-6">
                  <Card className="bg-black/40 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                    <CardContent className="p-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">IPL Hyperpigmentation Treatment</h4>
                        <p className="text-gray-300 text-sm leading-relaxed mb-3">
                          Intense Pulsed Light therapy is one of the best treatments for hyperpigmentation, targeting dark spots, age spots, and sun damage on face and body. Typically 3-6 sessions needed with no downtime required. Effective for post-hyperpigmentation treatment. Learn more about <Link to="/profhilo" className="text-purple-300 hover:text-purple-200 underline">advanced skin treatments</Link>.
                        </p>
                        <div className="text-xs text-purple-300">✓ No downtime • ✓ 3-6 sessions • ✓ All skin types • ✓ Face & body</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/40 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                    <CardContent className="p-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Chemical Peels for Hyperpigmentation</h4>
                        <p className="text-gray-300 text-sm leading-relaxed mb-3">
                          Professional-grade chemical peels are among the best hyperpigmentation treatments, using Lactic, Salicylic, and Glycolic acids for facial and body hyperpigmentation treatment. Available in varying depths to suit different skin types, including hyperpigmentation treatment for dark skin. The <a href="https://www.bad.org.uk/healthcare-professionals/clinical-standards/clinical-guidelines/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">British Association of Dermatologists</a> recommends professional peels for effective pigmentation management.
                        </p>
                        <div className="text-xs text-purple-300">✓ Customisable depth • ✓ Natural ingredients • ✓ Face & body treatment</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/40 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                    <CardContent className="p-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Microdermabrasion</h4>
                        <p className="text-gray-300 text-sm leading-relaxed mb-3">
                          Effective for mild pigmentation. Improves rough, sun-damaged skin through exfoliation whilst enhancing product absorption. Can be combined with other <Link to="/microneedling" className="text-purple-300 hover:text-purple-200 underline">skin rejuvenation treatments</Link> for optimal results.
                        </p>
                        <div className="text-xs text-purple-300">✓ Mild pigmentation • ✓ Enhanced absorption • ✓ Combines with peels</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/40 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                    <CardContent className="p-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Dermaroller Treatment</h4>
                        <p className="text-gray-300 text-sm leading-relaxed mb-3">
                          Micro-needling technology promoting skin rejuvenation whilst infusing powerful antioxidants and brightening agents into the skin. According to <a href="https://dermnetnz.org/topics/post-inflammatory-hyperpigmentation" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">DermNet NZ</a>, micro-needling can be effective for treating post-inflammatory hyperpigmentation when combined with appropriate skincare.
                        </p>
                        <div className="text-xs text-purple-300">✓ Micro-needling • ✓ Antioxidant infusion • ✓ Cell turnover</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>

            {/* Treatment Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <Card className="bg-gradient-to-r from-purple-900/20 to-black/40 border border-purple-500/30">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Our Treatment Philosophy</h3>
                  <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
                    At Cosmedocs, we believe in <span className="text-purple-300 font-semibold">invisible art</span> — transformation that speaks without saying a word. Our comprehensive approach ensures natural-looking results that enhance your confidence whilst maintaining skin health. We also offer complementary treatments including <Link to="/botox-london" className="text-purple-300 hover:text-purple-200 underline">anti-wrinkle treatments</Link> and <Link to="/dermal-fillers" className="text-purple-300 hover:text-purple-200 underline">dermal fillers</Link> for complete facial rejuvenation.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
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
              <h2 className="text-3xl font-bold mb-4">Hyperpigmentation Treatment Pricing London</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Transparent pricing for all hyperpigmentation treatments London. All consultations include detailed skin pigmentation disorder assessment and personalised treatment plan for face and body.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-accent rounded-lg p-8 border border-gray-800"
              >
                <h3 className="text-xl font-semibold text-white mb-4">IPL Hyperpigmentation Treatment</h3>
                <div className="text-3xl font-bold text-purple-300 mb-4">From £200</div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Single session treatment</li>
                  <li>• Best for face hyperpigmentation</li>
                  <li>• 3-6 sessions typically needed</li>
                  <li>• No downtime required</li>
                  <li>• Free consultation included</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-accent rounded-lg p-8 border border-purple-500 relative"
              >
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm">Most Popular</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Chemical Peels for Pigmentation</h3>
                <div className="text-3xl font-bold text-purple-300 mb-4">From £150</div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Professional grade peels</li>
                  <li>• Best for post-hyperpigmentation</li>
                  <li>• Multiple peel depths available</li>
                  <li>• Customised for all skin types</li>
                  <li>• Free consultation included</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-accent rounded-lg p-8 border border-gray-800"
              >
                <h3 className="text-xl font-semibold text-white mb-4">Consultation</h3>
                <div className="text-3xl font-bold text-purple-300 mb-4">£50</div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Comprehensive skin assessment</li>
                  <li>• Personalized treatment plan</li>
                  <li>• Redeemable against treatment</li>
                  <li>• Expert medical advice</li>
                </ul>
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
              <h2 className="text-3xl font-bold mb-8 text-white">Why Choose Cosmedocs for Hyperpigmentation Treatment?</h2>
              <p className="text-gray-300 max-w-3xl mx-auto mb-12">
                Conveniently located in Harley Street, serving patients from Marylebone, Mayfair, Westminster, Fitzrovia, Bloomsbury, Regent's Park, and across Central London and Greater London.
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
                <p className="text-gray-300">Premium medical-grade IPL and skin treatments</p>
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

        {/* Client Reviews */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Client Reviews for Hyperpigmentation Treatment London</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See what our clients say about their pigmentation treatment London experience at our clinic near you.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-black rounded-lg p-6 border border-gray-800"
              >
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-lg">★</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 italic mb-4">
                  "The IPL treatment at Cosmedocs completely transformed my melasma. After 4 sessions, 
                  the dark patches on my face have significantly faded. The staff is professional and the results speak for themselves!"
                </p>
                <p className="text-purple-300 font-semibold">- Verified Client</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-black rounded-lg p-6 border border-gray-800"
              >
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-lg">★</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 italic mb-4">
                  "I was skeptical about chemical peels, but the results exceeded my expectations. 
                  My acne scars and hyperpigmentation have visibly improved. The treatment was comfortable and professional."
                </p>
                <p className="text-purple-300 font-semibold">- Verified Client</p>
              </motion.div>
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                Read More Reviews
              </Button>
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
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions About Hyperpigmentation Treatment</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Get answers to common questions about hyperpigmentation treatments, skin hyperpigmentation treatment options, and pigmentation treatment London at our clinic.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqData.map((faq, index) => (
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
              <h2 className="text-3xl font-bold mb-4">Ready for the Best Hyperpigmentation Treatment London?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert cosmetic doctors and discover how our skin hyperpigmentation treatments can restore your confidence with beautifully even, natural-looking results. Whether you need treatment for hyperpigmentation on face, body hyperpigmentation treatment, or lip hyperpigmentation treatment, we're here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6">
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
          <h2>Best Hyperpigmentation Treatment London - Face & Body Solutions</h2>
          <p>
            Hyperpigmentation treatment London at Cosmedocs offers the best treatment for hyperpigmentation on face and body. Our comprehensive skin pigmentation disorder solutions include advanced pigmentation treatment London using IPL therapy, professional chemical peels, and medical-grade skincare to effectively treat melanin irregularities and restore even skin tone. We specialise in hyperpigmentation treatment for dark skin, post-hyperpigmentation treatment, and lip hyperpigmentation treatment.
          </p>
          <p>
            Our hyperpigmentation treatment clinic near me in central London specialises in treating various skin pigmentation disorders including post-inflammatory hyperpigmentation, age spots, sun damage, melasma, and facial hyperpigmentation. We understand that skin hyperpigmentation affects confidence and self-esteem, which is why our hyperpigmentation face treatment options are designed to deliver natural-looking results that enhance your skin's natural beauty. Whether you need hyperpigmentation treatment for face or body hyperpigmentation treatment, we provide personalised care.
          </p>
          <p>
            The Cosmedocs approach to hyperpigmentation treatments combines cutting-edge technology with medical expertise for the best hyperpigmentation treatment results. Our IPL hyperpigmentation treatment uses broad-spectrum light to target melanin deposits, whilst our chemical peels for hyperpigmentation promote cell turnover and skin renewal. For maintenance and prevention of skin pigmentation disorders, we offer prescription-grade skincare including hydroquinone, kojic acid, and vitamin A products. These treatments for hyperpigmentation are suitable for all skin types.
          </p>
          <p>
            Located at 10 Harley Street in the heart of London, our clinic provides a comfortable and professional environment for all hyperpigmentation treatment UK services. We're easily accessible from Marylebone, Mayfair, Westminster, Fitzrovia, Bloomsbury, Regent's Park, and all areas of Central London and Greater London. Our expert team serves patients throughout the UK seeking the best pigmentation treatment London has to offer. We believe in the philosophy of invisible art - creating transformations that speak without saying a word. Our natural approach to treatment for hyperpigmentation on face and body ensures results that enhance rather than alter your appearance. If you're searching for "hyperpigmentation treatment near me" in London, Cosmedocs offers the best solutions for skin pigmentation treatment.
          </p>
          <p>
            Treatment sessions for hyperpigmentation on face treatment typically last 30-60 minutes with minimal downtime, allowing you to return to daily activities immediately. Most patients see significant improvement after 2-3 sessions, with 40-50% reduction in pigmentation after the first hyperpigmentation face treatment. Our comprehensive aftercare for body hyperpigmentation treatment and facial treatments includes sun protection advice and skincare recommendations to maintain results. Whether you need post hyperpigmentation treatment or preventative care, we provide complete support for all skin hyperpigmentation treatment needs.
          </p>
          <h3>Hyperpigmentation Treatment Options London</h3>
          <p>
            Our range of treatments for hyperpigmentation includes IPL treatment, chemical peels, microdermabrasion, dermaroller, and prescription skincare. Each hyperpigmentation treatment is customised for your specific skin pigmentation disorder, whether you have facial hyperpigmentation, body hyperpigmentation, or lip hyperpigmentation. We offer the best treatment for hyperpigmentation UK with proven results for all skin types and tones.
          </p>
          <h3>Medical Review Information</h3>
          <p>
            All hyperpigmentation treatment information reviewed by GMC-registered aesthetic doctors with over 15 years of experience in dermatological treatments and skin pigmentation disorders. Our medical team includes Harley Street Institute trainers specialising in advanced IPL therapy, chemical peels, and cosmeceutical treatments for hyperpigmentation.
          </p>
        </div>
      </div>
    </>
  );
};

export default HyperpigmentationTreatment;