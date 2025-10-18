import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram, Users, Award, Calendar, MapPin, Phone, Mail, ChevronDown, ChevronUp, Syringe, Star, Clock, Shield, Heart, Briefcase, Activity, CheckCircle, Smile, GraduationCap, Palette, Zap, TrendingUp, Sparkles, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { generateSEOMetadata } from "@/utils/seo";
import BeforeAfterGrid from "@/components/BeforeAfterGrid";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

// Import before/after images
import profhiloFaceBeforeAfter from "@/assets/profhilo-face-before-after.jpg";
import profhiloNeckBeforeAfter03 from "@/assets/profhilo-neck-before-after-03.jpg";
import profhiloCheekBeforeAfter from "@/assets/profhilo-cheek-before-after.jpg";
import profhiloArmBeforeAfter from "@/assets/profhilo-arm-before-after.jpg";
import profhiloNeckBeforeAfter2 from "@/assets/profhilo-neck-before-after-2.jpg";
import profhiloNeckBeforeAfter02 from "@/assets/profhilo-neck-before-after-02.jpg";
import profhiloInjectionPointsFace from "@/assets/profhilo-injection-points-face.jpg";

const ProfhiloTreatment = () => {
  const seoData = generateSEOMetadata(
    "Profhilo Treatment London | £350 | Cosmedocs",
    "Profhilo London from £350. See profhilo before and after results. Expert profhilo treatment, neck injections & skin booster. Book consultation.",
    "/profhilo-treatment"
  );

  const bookingUrl = "https://med.as.me/harleystreet";

  // Before/after images for the viewer
  const beforeAfterImages = [
    {
      src: profhiloFaceBeforeAfter,
      alt: "Profhilo face treatment before and after results London Harley Street Cosmedocs",
      caption: "Complete facial bio-remodelling with improved skin texture and hydration"
    },
    {
      src: profhiloNeckBeforeAfter03,
      alt: "Profhilo neck treatment before and after transformation London",
      caption: "Neck area bio-remodelling showing enhanced skin texture and firmness"
    },
    {
      src: profhiloCheekBeforeAfter,
      alt: "Profhilo cheek treatment before and after sun damaged skin improvement",
      caption: "Significant improvement in severe sun-damaged skin with wrinkles after Profhilo"
    },
    {
      src: profhiloArmBeforeAfter,
      alt: "Profhilo arm treatment before and after skin thickness improvement",
      caption: "Enhanced skin thickness and reduced wrinkles on the arm with Profhilo"
    },
    {
      src: profhiloNeckBeforeAfter2,
      alt: "Profhilo neck and lower face treatment enhanced skin texture",
      caption: "Enhanced skin texture following Profhilo neck and lower face treatment"
    },
    {
      src: profhiloNeckBeforeAfter02,
      alt: "Profhilo neck treatment enhancing skin texture before and after",
      caption: "Enhanced skin texture following Profhilo neck treatment"
    }
  ];

  const leftColumnFaqs = [
    {
      question: "What is Profhilo treatment?",
      answer: "Profhilo is an advanced skin bio-remodelling therapy that replenishes hyaluronic acid levels in your skin. It stimulates collagen and elastin production, improving overall skin tone and quality over multiple sessions."
    },
    {
      question: "How much does Profhilo cost in London?",
      answer: "At Cosmedocs Harley Street, Profhilo treatment starts from £350 for the first session. Successive sessions are £300 and are usually scheduled 4-6 weeks apart for optimal results."
    },
    {
      question: "How does Profhilo work?",
      answer: "Profhilo works in two stages: first hydrating and nourishing your skin, then stimulating the synthesis of new collagen and elastin. The high concentration of hyaluronic acid spreads naturally under the skin to support existing HA layers."
    },
    {
      question: "How many Profhilo treatments do I need?",
      answer: "Usually, experts recommend at least two treatment sessions performed a month apart. The exact number depends on your age, cosmetic concerns, and desired skin goals."
    },
    {
      question: "Are there any Profhilo side effects?",
      answer: "Profhilo is very safe with minimal side effects. You may experience slight redness, bruising, and swelling at injection sites, which typically resolve within 1-2 days."
    },
    {
      question: "What happens during a Profhilo treatment?",
      answer: "Profhilo is a speedy treatment with no downtime, lasting under 30 minutes. Topical numbing cream is applied followed by injection with a very thin needle. High-concentration HA is injected in 10 strategic locations, five on each side of the face. Some patients may experience a slight prick sensation during injection."
    }
  ];

  const rightColumnFaqs = [
    {
      question: "Does Profhilo hurt?",
      answer: "Like any injectable treatment, you may feel a slight pin prick during Profhilo treatment. We use topical numbing cream to minimize discomfort, and most patients report minimal pain."
    },
    {
      question: "How long does it take for Profhilo to work?",
      answer: "Profhilo delivers dewy, plumping results in as little as 5 days. However, achieving visibly youthful-looking skin may require several treatments at least 30 days apart."
    },
    {
      question: "How long does Profhilo last?",
      answer: "The treatment effects may last up to 6 months, depending on the patient's age. Results gradually develop as the hyaluronic acid stimulates natural collagen production."
    },
    {
      question: "What's the difference between Profhilo and dermal fillers?",
      answer: "While both contain hyaluronic acid, Profhilo uses non-crosslinked HA for bio-remodelling and hydration, whereas dermal fillers use cross-linked HA to volumise and fill specific areas."
    },
    {
      question: "Who is an ideal candidate for Profhilo?",
      answer: "Profhilo is suitable for men and women with slight to mild signs of ageing. Patients over 25 can benefit as preventative care, with optimal results for those aged 30-50 showing dull skin, fine lines, or volume loss."
    },
    {
      question: "What should I expect after Profhilo treatment?",
      answer: "Two treatments are suggested one month apart for maximum performance with final results becoming visible gradually. Mild bruising or swelling around injection sites may occur but usually subsides within a few days."
    }
  ];

  return (
    <>
      <Helmet>
        <html lang="en-GB" />
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="author" content="Cosmedocs" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={seoData.canonical} />
        
        {/* Open Graph */}
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:image" content={seoData.image} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta property="article:published_time" content="2024-01-15T09:00:00Z" />
        <meta property="article:modified_time" content="2025-01-20T14:30:00Z" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.image} />
        
        {/* Local SEO */}
        <meta name="geo.region" content="GB-LND" />
        <meta name="geo.placename" content="London" />
        <meta name="geo.position" content="51.5074;-0.1278" />
        <meta name="ICBM" content="51.5074, -0.1278" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "Cosmedocs",
            "description": "Premium Profhilo bio-remodelling treatments in London's Harley Street",
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
              "ratingValue": "4.9",
              "reviewCount": "127",
              "bestRating": "5",
              "worstRating": "1"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "Profhilo Bio-Remodelling Treatment",
            "alternateName": ["Profhilo Skin Booster", "Profhilo Injection", "Bio-Remodelling Therapy"],
            "description": "Advanced bio-remodelling treatment using high-concentration hyaluronic acid to stimulate natural collagen and elastin production for skin rejuvenation",
            "procedureType": "Cosmetic",
            "bodyLocation": "Face and Neck",
            "preparation": "Topical anaesthetic applied for comfort",
            "followup": "Second treatment session 4-6 weeks after initial treatment for optimal results",
            "howPerformed": "Strategic injection of high-concentration hyaluronic acid using BAP (Bio Aesthetic Points) technique in 10 specific points",
            "status": "Available",
            "availableService": {
              "@type": "MedicalTherapy",
              "name": "Profhilo Bio-Remodelling",
              "offers": {
                "@type": "Offer",
                "price": "350",
                "priceCurrency": "GBP",
                "priceValidUntil": "2025-12-31",
                "availability": "https://schema.org/InStock"
              }
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Dr. Ahmed Haq",
            "jobTitle": "Aesthetic Medicine Specialist",
            "affiliation": {
              "@type": "MedicalOrganization",
              "name": "Cosmedocs"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "10 Harley Street",
              "addressLocality": "London",
              "postalCode": "W1G 9PF",
              "addressCountry": "GB"
            }
          })}
        </script>
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
                "name": "Profhilo Treatment",
                "item": seoData.canonical
              }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is Profhilo treatment?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Profhilo is an advanced skin bio-remodelling therapy that replenishes hyaluronic acid levels in your skin. It stimulates collagen and elastin production, improving overall skin tone and quality over multiple sessions."
                }
              },
              {
                "@type": "Question",
                "name": "How much does Profhilo cost in London?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "At Cosmedocs Harley Street, Profhilo treatment starts from £350 for the first session. Successive sessions are £300 and are usually scheduled 4-6 weeks apart for optimal results."
                }
              },
              {
                "@type": "Question",
                "name": "How does Profhilo work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Profhilo works in two stages: first hydrating and nourishing your skin, then stimulating the synthesis of new collagen and elastin. The high concentration of hyaluronic acid spreads naturally under the skin to support existing HA layers."
                }
              },
              {
                "@type": "Question",
                "name": "How many Profhilo treatments do I need?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Usually, experts recommend at least two treatment sessions performed a month apart. The exact number depends on your age, cosmetic concerns, and desired skin goals."
                }
              },
              {
                "@type": "Question",
                "name": "Are there any Profhilo side effects?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Profhilo is very safe with minimal side effects. You may experience slight redness, bruising, and swelling at injection sites, which typically resolve within 1-2 days."
                }
              },
              {
                "@type": "Question",
                "name": "What happens during a Profhilo treatment?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Profhilo is a speedy treatment with no downtime, lasting under 30 minutes. Topical numbing cream is applied followed by injection with a very thin needle. High-concentration HA is injected in 10 strategic locations, five on each side of the face."
                }
              },
              {
                "@type": "Question",
                "name": "Does Profhilo hurt?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Like any injectable treatment, you may feel a slight pin prick during Profhilo treatment. We use topical numbing cream to minimize discomfort, and most patients report minimal pain."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take for Profhilo to work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Profhilo delivers dewy, plumping results in as little as 5 days. However, achieving visibly youthful-looking skin may require several treatments at least 30 days apart."
                }
              },
              {
                "@type": "Question",
                "name": "How long does Profhilo last?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The treatment effects may last up to 6 months, depending on the patient's age. Results gradually develop as the hyaluronic acid stimulates natural collagen production."
                }
              },
              {
                "@type": "Question",
                "name": "What's the difference between Profhilo and dermal fillers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "While both contain hyaluronic acid, Profhilo uses non-crosslinked HA for bio-remodelling and hydration, whereas dermal fillers use cross-linked HA to volumise and fill specific areas."
                }
              },
              {
                "@type": "Question",
                "name": "Who is an ideal candidate for Profhilo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Profhilo is suitable for men and women with slight to mild signs of ageing. Patients over 25 can benefit as preventative care, with optimal results for those aged 30-50 showing dull skin, fine lines, or volume loss."
                }
              },
              {
                "@type": "Question",
                "name": "What should I expect after Profhilo treatment?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Two treatments are suggested one month apart for maximum performance with final results becoming visible gradually. Mild bruising or swelling around injection sites may occur but usually subsides within a few days."
                }
              }
            ]
          })}
        </script>
        
        {/* Review Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Review",
            "itemReviewed": {
              "@type": "MedicalProcedure",
              "name": "Profhilo Bio-Remodelling Treatment"
            },
            "author": {
              "@type": "Person",
              "name": "Sarah M."
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "reviewBody": "Amazing results from Profhilo treatment at Cosmedocs. The BAP technique was virtually painless and my skin looks so much more hydrated and firm. Highly recommend!"
          })}
        </script>
        
        {/* Service Schema with Pricing */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Profhilo Bio-Remodelling Treatment",
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
            "areaServed": {
              "@type": "City",
              "name": "London"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Profhilo Treatment Pricing",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Profhilo First Session"
                  },
                  "price": "350",
                  "priceCurrency": "GBP"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Profhilo Subsequent Sessions"
                  },
                  "price": "300",
                  "priceCurrency": "GBP"
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        {/* Breadcrumb Navigation */}
        <nav className="bg-accent py-4" aria-label="Breadcrumb">
          <div className="page-container">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <a href="/" className="text-purple-300 hover:text-purple-200 transition-colors">
                  Home
                </a>
              </li>
              <li className="text-gray-500">/</li>
              <li>
                <a href="/treatments" className="text-purple-300 hover:text-purple-200 transition-colors">
                  Treatments
                </a>
              </li>
              <li className="text-gray-500">/</li>
              <li className="text-white" aria-current="page">
                Profhilo Treatment
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section - Updated to match LipFillers design */}
        <header className="relative py-32 overflow-hidden min-h-screen flex items-center">
          <div className="page-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <h1 className="text-5xl md:text-6xl font-sans font-bold mb-4 leading-tight text-white">
                  Profhilo Bio-Remodelling London
                </h1>
                <p className="text-lg text-gray-300 mb-8">Invisible art - advanced injectable skincare for natural skin rejuvenation</p>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Advanced Bio-Remodelling</p>
                  <p className="text-sm text-gray-300">#cosmeprofhilo - Check out our IG for hundreds more natural, subtle transformations</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://med.as.me/harleystreet" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl inline-flex items-center justify-center transition-all duration-300"
                  >
                    Book Consultation
                  </a>
                  <a 
                    href="#pricing" 
                    className="border border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm inline-flex items-center justify-center transition-all duration-300"
                  >
                    View Price List
                  </a>
                </div>
              </motion.div>
              
              <div className="hidden lg:block"></div>
            </div>
          </div>
        </header>

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
              <h2 className="text-3xl font-sans font-bold mb-8 text-white">Profhilo Treatment</h2>
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
                <p className="text-gray-300">30 minutes including consultation</p>
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
                <p className="text-gray-300">Immediate | 6-12 months with progressive improvement</p>
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
                <p className="text-gray-300">Minimal downtime, return to work same day</p>
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
                <p className="text-gray-300">Topical anaesthetic for comfort</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-12 bg-gradient-to-b from-accent to-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-2xl font-bold text-center mb-8 text-white">Quick Navigation</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <a 
                  href="#what-is-profhilo" 
                  className="bg-purple-900/30 hover:bg-purple-900/50 border border-purple-500/30 rounded-lg p-4 text-center transition-all duration-300 group"
                >
                  <div className="text-purple-300 group-hover:text-purple-200 font-medium text-sm">What is Profhilo?</div>
                </a>
                <a 
                  href="#before-after" 
                  className="bg-purple-900/30 hover:bg-purple-900/50 border border-purple-500/30 rounded-lg p-4 text-center transition-all duration-300 group"
                >
                  <div className="text-purple-300 group-hover:text-purple-200 font-medium text-sm">Before & After</div>
                </a>
                <a 
                  href="#pricing" 
                  className="bg-purple-900/30 hover:bg-purple-900/50 border border-purple-500/30 rounded-lg p-4 text-center transition-all duration-300 group"
                >
                  <div className="text-purple-300 group-hover:text-purple-200 font-medium text-sm">Pricing</div>
                </a>
                <a 
                  href="#safety" 
                  className="bg-purple-900/30 hover:bg-purple-900/50 border border-purple-500/30 rounded-lg p-4 text-center transition-all duration-300 group"
                >
                  <div className="text-purple-300 group-hover:text-purple-200 font-medium text-sm">Safety Info</div>
                </a>
                <a 
                  href="#faqs" 
                  className="bg-purple-900/30 hover:bg-purple-900/50 border border-purple-500/30 rounded-lg p-4 text-center transition-all duration-300 group"
                >
                  <div className="text-purple-300 group-hover:text-purple-200 font-medium text-sm">FAQs</div>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <main>
        {/* Before & After Gallery */}
        <section id="before-after" className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-sans font-bold mb-4">Before & After Profhilo Results</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Witness the transformative power of Profhilo bio-remodelling. Our aesthetics is invisible art - 
                creating natural, bold transformations that speak without saying a word.
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
                        loading="lazy"
                        width="400"
                        height="256"
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
              <div className="text-center mt-8">
                <p className="text-gray-400 text-sm">
                  Individual results may vary. Results shown after 2 treatment sessions spaced 4 weeks apart. 
                  Full effects visible in 6-8 weeks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What is Profhilo Section */}
        <article id="what-is-profhilo" className="py-32 bg-accent">
          <div className="page-container">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="text-center mb-20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-sans font-bold mb-6">What Is Profhilo?</h2>
                <div className="max-w-4xl mx-auto mb-12">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Profhilo is a revolutionary injectable skin remodelling treatment that uses one of the highest concentrations of hyaluronic acid (HA) available on the market today. Containing 64mg of highly purified HA per treatment, it represents a breakthrough in aesthetic medicine. Unlike traditional <a href="/dermal-fillers" className="text-purple-300 hover:text-purple-200 underline">dermal fillers</a> that add volume to specific areas, Profhilo works beneath the skin's surface to hydrate, lift and tighten without changing facial contours or adding unwanted volume.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    The treatment is particularly effective for addressing skin laxity, fine lines, crepiness and dullness on multiple areas including the face, neck, décolletage, hands, arms and even knees. Profhilo is ideal for patients experiencing early signs of ageing who want to improve their skin quality without the use of toxins like <a href="/face-botox-areas" className="text-purple-300 hover:text-purple-200 underline">Botox</a> or volumising fillers. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9509274/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">Clinical studies and research</a> have demonstrated Profhilo's significant efficacy for improving skin laxity and roughness, making it an evidence-based choice for natural skin rejuvenation.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Unlike other skin boosters that may require multiple injection points across the treatment area, Profhilo uses the innovative BAP (Bio Aesthetic Points) technique with just 5 injection points on each side of the face. This minimises discomfort whilst ensuring optimal distribution of the product. The treatment has minimal downtime, with most patients returning to their normal activities immediately after their appointment at our <a href="/treatments" className="text-purple-300 hover:text-purple-200 underline">Harley Street clinic</a>.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    A <a href="https://www.minervamedica.it/en/journals/gazzetta-medica-italiana/article.php?cod=R22Y2023N10A0628" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">comparative study on neck and face rejuvenation with Profhilo</a> examined outcomes in Chinese and Caucasian patient groups. The research demonstrated significant benefits in wrinkle reduction and improvement on volume loss scales across both cohorts, with some variation in responsiveness between ethnicities, confirming Profhilo's effectiveness across diverse skin types.
                  </p>
                </div>
              </motion.div>
              
              <div className="max-w-4xl mx-auto">
                <div className="bg-black/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
                  <p className="text-gray-300 text-center mb-4 italic">"Advanced skin bio-remodelling treatment that stimulates natural collagen and elastin production"</p>
                  <h3 className="text-white text-xl font-semibold mb-6 text-center">How Profhilo Works</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center mt-1">
                        <span className="text-purple-600 text-sm font-medium">1</span>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-2">Hydrating and Nourishing</h4>
                        <p className="text-gray-300 font-light">
                          First stage focuses on deeply hydrating and nourishing your skin layers with 64mg of pure hyaluronic acid, spreading evenly beneath the surface to provide intense moisture retention
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center mt-1">
                        <span className="text-purple-600 text-sm font-medium">2</span>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-2">Neo-Collagenesis & Elastogenesis</h4>
                        <p className="text-gray-300 font-light">
                          Stimulates synthesis of four types of collagen (I, III, IV, and VII) and elastin fibres for long-term skin improvement, firmness and natural rejuvenation over 4-6 weeks
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Step-by-Step Treatment Process */}
        {/* Profhilo Injection Points Section */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-sans font-bold mb-6 text-white">Profhilo Injection Points & BAP Technique</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-purple-500 mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-300 leading-relaxed">
                      The latest injectable skin remodelling treatment corrects the ageing signs and their source.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-purple-500 mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-300 leading-relaxed">
                      To achieve remarkable results, experts use the BAP (Bio Aesthetic Points) technique.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-purple-500 mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-300 leading-relaxed">
                      This reduces the required injections and ensures an even and efficient dispersal of the hyaluronic acid into the skin layers, enabling Profhilo to battle signs of ageing more efficiently.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-purple-500 mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-300 leading-relaxed">
                      Moreover, the BAP approach ensures your comfort throughout the process.
                    </p>
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
                <img 
                  src={profhiloInjectionPointsFace} 
                  alt="Profhilo injection points diagram showing BAP technique on face"
                  loading="lazy"
                  width="600"
                  height="600"
                  className="rounded-3xl shadow-2xl w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Profhilo Vs Dermal Fillers Section */}
        {/* Treatment Comparison Table */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-sans font-bold mb-4">Profhilo vs Other Treatments</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Understanding how Profhilo compares to other popular aesthetic treatments helps you choose the right option for your skin goals
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-purple-500/30">
                    <th className="text-left p-4 text-purple-300 font-semibold">Treatment</th>
                    <th className="text-left p-4 text-purple-300 font-semibold">Primary Purpose</th>
                    <th className="text-left p-4 text-purple-300 font-semibold">Duration</th>
                    <th className="text-left p-4 text-purple-300 font-semibold">Best For</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-800 bg-purple-900/10">
                    <td className="p-4 font-semibold text-white">Profhilo</td>
                    <td className="p-4">Bio-remodelling & hydration</td>
                    <td className="p-4">6-12 months</td>
                    <td className="p-4">Skin laxity, texture, overall quality</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="p-4 font-semibold">
                      <a href="/dermal-fillers" className="text-purple-300 hover:text-purple-200 underline">Dermal Fillers</a>
                    </td>
                    <td className="p-4">Volume restoration</td>
                    <td className="p-4">9-18 months</td>
                    <td className="p-4">Volume loss, contouring, wrinkles</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="p-4 font-semibold">
                      <a href="/face-botox-areas" className="text-purple-300 hover:text-purple-200 underline">Botox</a>
                    </td>
                    <td className="p-4">Muscle relaxation</td>
                    <td className="p-4">3-4 months</td>
                    <td className="p-4">Dynamic wrinkles, expression lines</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="p-4 font-semibold">Skin Boosters</td>
                    <td className="p-4">Hydration only</td>
                    <td className="p-4">3-6 months</td>
                    <td className="p-4">Superficial hydration, glow</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="p-4 font-semibold">
                      <a href="/nefertiti-botox-face-jaw-lift" className="text-purple-300 hover:text-purple-200 underline">Nefertiti Lift</a>
                    </td>
                    <td className="p-4">Jawline definition</td>
                    <td className="p-4">3-4 months</td>
                    <td className="p-4">Neck bands, jawline contouring</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-12 max-w-4xl mx-auto"
            >
              <Card className="bg-purple-900/20 border-purple-500/30">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-purple-300" />
                    Combination Treatments
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Profhilo works exceptionally well when combined with other treatments. Many patients achieve optimal results by pairing Profhilo with <a href="/face-botox-areas" className="text-purple-300 hover:text-purple-200 underline">Botox for wrinkle reduction</a> or <a href="/dermal-fillers" className="text-purple-300 hover:text-purple-200 underline">dermal fillers for volume restoration</a>. This comprehensive approach addresses multiple signs of ageing simultaneously.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>


        {/* Injectable Moisturiser Section */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-sans font-bold mb-6 text-white">Injectable Moisturiser, Intense Skin Quencher</h2>
                <div className="space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    Unlike your typical topical skin moisturiser, profhilo treatment London uses a unique injectable formulation that slowly releases pure hyaluronic acid. When injected directly into your skin layers, it spreads like thin honey throughout the treatment area. Profhilo results become visible after 1 week, with profhilo results week by week showing progressive improvement in skin texture, hydration, and firmness. The profhilo skin booster before and after transformations showcase the treatment's effectiveness across face, neck, and décolletage areas. <a href="https://academic.oup.com/asjopenforum/article/doi/10.1093/asjof/ojad110/7462690" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">Studies show</a> that Profhilo treatments administered one month apart demonstrate significant improvement in facial volume loss and wrinkle severity at 3 months, with notable increases in skin firmness and excellent tolerability across all patient groups.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    This intense and long-lasting profhilo skin booster injection complements your <a href="/anti-wrinkle-injections" className="text-purple-300 hover:text-purple-200 underline">anti-wrinkle injections</a> and works excellently alongside <a href="/polynucleotide-treatment" className="text-purple-300 hover:text-purple-200 underline">polynucleotide therapy</a> for enhanced skin rejuvenation. Profhilo injection points include strategic facial locations and profhilo neck injection points for comprehensive bio-remodelling. Before and after profhilo injection points demonstrate precise placement for optimal product diffusion. Some patients enquire about profhilo under eyes treatment, which requires specialised technique and assessment. Research on <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8313961/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">hyaluronic acid effectiveness</a> confirms its role in improving skin hydration and elasticity. Profhilo London treatments at our Harley Street clinic offer expert administration with proven results.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How Long Does Profhilo Last Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-sans font-bold mb-4 text-white">How Long Does Profhilo Last?</h2>
              <p className="text-purple-300 text-lg">Duration, Timeline & Lasting Results</p>
            </motion.div>

            {/* Duration Highlight Card */}
            <motion.div
              className="max-w-4xl mx-auto mb-16"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 border-purple-500/30 backdrop-blur-lg">
                <CardContent className="p-8 md:p-12 text-center">
                  <p className="text-white/80 leading-relaxed max-w-2xl mx-auto">
                    How long does profhilo last? Results typically last <strong className="text-purple-300">6-12 months</strong> with progressive improvement throughout. Many patients ask "is profhilo worth it?" and the consistently positive profhilo results speak for themselves.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Timeline Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/50 border-purple-500/20 backdrop-blur-sm h-full hover:border-purple-500/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-purple-500/20 rounded-full p-3">
                        <Zap className="w-6 h-6 text-purple-300" />
                      </div>
                      <h4 className="text-xl font-semibold text-white">Initial Effects</h4>
                    </div>
                    <p className="text-purple-300 font-medium mb-2">Within Days</p>
                    <p className="text-white/70 leading-relaxed">
                      How long does profhilo take to work? Initial effects appear within days, with skin feeling more hydrated and plump.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/50 border-purple-500/20 backdrop-blur-sm h-full hover:border-purple-500/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-purple-500/20 rounded-full p-3">
                        <TrendingUp className="w-6 h-6 text-purple-300" />
                      </div>
                      <h4 className="text-xl font-semibold text-white">Week-by-Week</h4>
                    </div>
                    <p className="text-purple-300 font-medium mb-2">Profhilo After 1 Week</p>
                    <p className="text-white/70 leading-relaxed">
                      Profhilo after 1 week shows initial plumping effects, with profhilo results week by week demonstrating progressive enhancement.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/50 border-purple-500/20 backdrop-blur-sm h-full hover:border-purple-500/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-purple-500/20 rounded-full p-3">
                        <Sparkles className="w-6 h-6 text-purple-300" />
                      </div>
                      <h4 className="text-xl font-semibold text-white">Full Results</h4>
                    </div>
                    <p className="text-purple-300 font-medium mb-2">4-6 Weeks</p>
                    <p className="text-white/70 leading-relaxed">
                      Complete bio-remodelling effects develop over 4-6 weeks, with optimal collagen and elastin production.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Treatment Areas & Results */}
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-sans font-bold text-white mb-6 text-center">Treatment Results Across Different Areas</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-purple-900/20 rounded-lg border border-purple-500/20">
                      <CheckCircle className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="text-white font-semibold mb-1">Profhilo Before and After 40s</h5>
                        <p className="text-white/70">Profhilo before and after 40s clients show remarkable rejuvenation, particularly effective for age-related skin laxity.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-purple-900/20 rounded-lg border border-purple-500/20">
                      <CheckCircle className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="text-white font-semibold mb-1">Profhilo Before and After Jowls</h5>
                        <p className="text-white/70">Profhilo before and after jowls improvement is particularly noticeable, with significant tightening and contouring effects.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-purple-900/20 rounded-lg border border-purple-500/20">
                      <CheckCircle className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="text-white font-semibold mb-1">Profhilo Before and After Eyes</h5>
                        <p className="text-white/70">Profhilo before and after eyes treatment can enhance the delicate periorbital area when expertly administered.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Treatment Info */}
            <motion.div
              className="max-w-4xl mx-auto mt-12 grid md:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="bg-black/50 border-purple-500/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-purple-300" />
                    <h4 className="text-lg font-semibold text-white">Injection Technique</h4>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    Profhilo injection points are strategically placed using the BAP technique, with profhilo neck injection points carefully selected for optimal diffusion.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/50 border-purple-500/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="w-6 h-6 text-purple-300" />
                    <h4 className="text-lg font-semibold text-white">Comfort Level</h4>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    Does profhilo hurt? Most patients report minimal discomfort thanks to our topical anaesthetic protocol and expert technique.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Pricing CTA */}
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-white/70 mb-4">
                The profhilo cost and profhilo price at our London clinic remain competitive whilst maintaining the highest treatment standards.
              </p>
              <a href="#pricing" className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 font-semibold transition-colors">
                View Pricing Details
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Aftercare Section */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-sans font-bold mb-6">Recovery Timeline</h2>
                <p className="text-gray-300 mb-6">
                  Understanding what to expect during your Profhilo healing process
                </p>
                <div className="space-y-4">
                  <div className="bg-accent rounded-lg p-4">
                    <h4 className="font-semibold text-purple-300 mb-2">First 24 Hours</h4>
                    <p className="text-gray-300">Mild redness and minor swelling at injection sites may occur</p>
                  </div>
                  <div className="bg-accent rounded-lg p-4">
                    <h4 className="font-semibold text-purple-300 mb-2">1-3 Days</h4>
                    <p className="text-gray-300">Any bruising or swelling begins to subside, skin feels refreshed</p>
                  </div>
                  <div className="bg-accent rounded-lg p-4">
                    <h4 className="font-semibold text-purple-300 mb-2">5-7 Days</h4>
                    <p className="text-gray-300">Initial plumping and hydration effects become visible</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-sans font-bold mb-6">Profhilo Aftercare Guide</h2>
                <p className="text-gray-300 mb-6">
                  Essential guidelines to ensure optimal results and proper healing from your 
                  Profhilo bio-remodelling treatment.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">First 24 Hours</h4>
                      <p className="text-gray-300">Avoid touching or rubbing the treated area to prevent irritation</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Exercise Restrictions</h4>
                      <p className="text-gray-300">Avoid strenuous exercise for 24 hours to ensure optimal healing</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Heat Avoidance</h4>
                      <p className="text-gray-300">Avoid saunas, steam rooms, and excessive sun exposure for 48 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Hydration Support</h4>
                      <p className="text-gray-300">Maintain good hydration and use gentle skincare products</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Follow-up Treatment</h4>
                      <p className="text-gray-300">Schedule second session 4-6 weeks apart for maximum results</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contraindications & Safety Section */}
        <section id="safety" className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-sans font-bold mb-6 text-center">Who Should Not Have Profhilo?</h2>
              <p className="text-gray-300 mb-8 text-center">
                Whilst Profhilo is suitable for most patients, certain contraindications exist to ensure your safety
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-black/50 border-purple-500/20">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-purple-300" />
                      Absolute Contraindications
                    </h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Pregnancy or breastfeeding</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Allergy to hyaluronic acid</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Active skin infections or inflammation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Autoimmune diseases affecting the skin</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-black/50 border-purple-500/20">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Activity className="w-5 h-5 text-purple-300" />
                      Relative Contraindications
                    </h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>History of keloid scarring</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Blood clotting disorders</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Recent facial surgery (wait 6 months)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Active cold sores or herpes simplex</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
                <p className="text-gray-300 text-center">
                  <strong className="text-white">Important:</strong> All patients receive a thorough medical consultation before treatment. 
                  Our experienced practitioners at <a href="/treatments" className="text-purple-300 hover:text-purple-200 underline">Cosmedocs</a> will assess your suitability and discuss any concerns during your consultation.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-sans font-bold mb-4 text-white">Profhilo Pricing London</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Transparent profhilo price and profhilo cost information for premium bio-remodelling treatments. How much is profhilo at our clinic? Our profhilo treatment price UK starts from £350 for the first session. All prices include consultation, profhilo injection treatment, and comprehensive aftercare support from our expert medical team. Many clients find the profhilo cost represents excellent value when considering the transformative results and longevity of effects.
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
                    <CardTitle className="text-white text-2xl">First Session</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£350</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Initial Profhilo bio-remodelling treatment</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Comprehensive consultation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">10 injection points</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Progress photos</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Aftercare guidance</span>
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
                <Card className="bg-accent border-purple-500 h-full text-center">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Follow-up Sessions</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£300</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Subsequent treatments (4-6 weeks apart)</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Progress review</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Bio-remodelling treatment</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Results monitoring</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Ongoing support</span>
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
                <Card className="bg-gradient-to-br from-purple-900 to-purple-800 border-2 border-purple-400 h-full text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-purple-400 text-black px-3 py-1 text-xs font-semibold">
                    SPECIAL OFFER
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Glow & Go Package</CardTitle>
                    <div className="text-purple-200 text-4xl font-bold">£900</div>
                    <p className="text-purple-200 text-sm">Save £200</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-purple-100">Three sessions + free Hydrafacial (worth £200)</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-300" size={16} />
                        <span className="text-purple-100 text-sm">Complete treatment course</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-300" size={16} />
                        <span className="text-purple-100 text-sm">Free Hydrafacial session</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-300" size={16} />
                        <span className="text-purple-100 text-sm">Priority booking</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-300" size={16} />
                        <span className="text-purple-100 text-sm">Extended aftercare</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-400 text-sm">
                Consultation fee: FREE when booking treatment • All prices include VAT
              </p>
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
              <h2 className="text-3xl font-sans font-bold mb-8 text-white">Why Choose Cosmedocs?</h2>
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
                <p className="text-gray-300">Premium FDA-approved bio-remodelling treatments</p>
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
        <section id="faqs" className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-sans font-bold mb-4 text-white">Frequently Asked Questions</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Everything you need to know about Profhilo bio-remodelling treatment
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="space-y-4">
                {leftColumnFaqs.map((faq, index) => (
                  <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
              </div>
              <div className="space-y-4">
                {rightColumnFaqs.map((faq, index) => (
                  <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
              </div>
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
              <h2 className="text-3xl font-sans font-bold mb-4">Ready for Beautiful, Natural Skin?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert cosmetic doctors and discover how Profhilo 
                can rejuvenate your skin with subtle, sophisticated bio-remodelling results.
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
        </main>

        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true">
          <h2>Comprehensive Guide to Profhilo Bio-Remodelling Treatment in London</h2>
          <p>
            Profhilo has revolutionised the field of aesthetic medicine as one of the most advanced bio-remodelling treatments available in the United Kingdom. This innovative injectable treatment utilises one of the highest concentrations of hyaluronic acid available on the market, specifically formulated to address skin laxity, fine lines, and loss of elasticity that naturally occurs with the ageing process. Unlike traditional dermal fillers that add volume to specific areas, Profhilo works by bio-remodelling the entire treatment area, stimulating the production of four different types of collagen and elastin through a unique two-stage process.
          </p>
          <p>
            The Profhilo treatment protocol typically involves two initial sessions spaced approximately four to six weeks apart, with maintenance treatments recommended every six to twelve months depending on individual patient characteristics and desired outcomes. The treatment utilises the innovative BAP (Bio Aesthetic Points) injection technique, which involves strategically placing the product at ten specific points on the face or treatment area. This technique allows the highly cohesive hyaluronic acid to spread naturally beneath the skin's surface, providing comprehensive bio-remodelling effects across the entire treatment zone rather than creating isolated pockets of volumisation.
          </p>
          <p>
            Clinical research has demonstrated that Profhilo treatment delivers measurable improvements in skin quality markers including hydration levels, elasticity measurements, and overall skin firmness. The treatment is particularly effective for addressing concerns in the face, neck, décolletage, and hands, making it an excellent choice for patients seeking comprehensive rejuvenation across multiple areas. The unique formulation of stabilised hyaluronic acid enables slow release over approximately 28 days, providing sustained bio-remodelling effects long after the initial injection procedure.
          </p>
          <p>
            Patient satisfaction rates for Profhilo treatment remain exceptionally high, with most individuals reporting visible improvements in skin texture, tone, and overall quality within the first week following treatment. The progressive nature of results means that improvements continue to develop over the subsequent four to eight weeks as the hyaluronic acid stimulates natural collagen and elastin synthesis. This biological response creates long-lasting improvements in skin architecture rather than simply providing temporary hydration, distinguishing Profhilo from conventional moisturising treatments or basic skin boosters.
          </p>
          <p>
            The safety profile of Profhilo treatment has been extensively documented through clinical trials and real-world use across thousands of patients globally. Common side effects remain minimal and typically limited to mild injection-site reactions such as temporary redness, slight swelling, or minor bruising that resolve within one to three days. The purified nature of the hyaluronic acid formulation minimises the risk of allergic reactions, and the treatment does not require pre-treatment allergy testing. Patients can typically return to normal daily activities immediately following their appointment, making Profhilo an ideal lunchtime treatment option for busy professionals seeking effective aesthetic improvements without extended downtime.
          </p>
          <p>
            When considering Profhilo treatment in London, selecting an experienced medical practitioner with comprehensive training in injectable treatments remains essential for achieving optimal outcomes. The BAP injection technique requires precise anatomical knowledge and technical expertise to ensure proper product placement and natural-looking results. At Cosmedocs Harley Street, our medical team brings extensive experience in advanced injectable treatments, having performed over one million procedures since 2007. Our practitioners regularly participate in continuing education and advanced training programmes to maintain expertise in the latest injection techniques and treatment protocols. This commitment to clinical excellence ensures that every Profhilo patient receives treatment that adheres to the highest standards of medical aesthetic practice while maintaining our philosophy of subtle, natural enhancement that respects individual facial characteristics and aesthetic goals.
          </p>
        </div>
      </div>
    </>
  );
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <Button
          variant="ghost"
          className="w-full justify-between text-left p-6 h-auto bg-white/5 hover:bg-white/10 rounded-xl border border-white/10"
        >
          <span className="text-white font-medium text-base">{question}</span>
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-white" />
          ) : (
            <ChevronDown className="h-5 w-5 text-white" />
          )}
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="px-6 pb-6">
        <p className="text-gray-300 leading-relaxed">{answer}</p>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default ProfhiloTreatment;