
import React from 'react';
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet-async';
import { generateSEOMetadata } from '../utils/seo';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Clock, Shield, Star, Users, Award, Calendar, Activity, Syringe, GraduationCap, Palette, Heart, Phone, MapPin, Zap } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import TrustBadges from '@/components/TrustBadges';
import { Link } from 'react-router-dom';

const TriggerPointBotox = () => {
  const bookingUrl = "https://med.as.me/harleystreet";
  
  const seoData = generateSEOMetadata(
    "Trigger Point Botox for Head, Neck & Shoulder Pain - £450 | Muscular Pain Relief | Cosmedocs",
    "Expert trigger point botox for chronic head, neck and shoulder pain of muscular origin. Relieve muscle tension, myofascial pain, and trigger points from £450 at Cosmedocs Harley Street London.",
    "/trigger-point-botox"
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Trigger Point Botox Treatment",
    "description": "Professional trigger point botox injections for muscle tension relief and chronic pain management",
    "serviceType": "Botulinum Toxin Injection",
    "provider": {
      "@type": "MedicalClinic",
      "name": "Cosmedocs",
      "url": "https://www.cosmedocs.co.uk",
      "logo": "https://www.cosmedocs.co.uk/default-og-image.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "10 Harley Street",
        "addressLocality": "London",
        "postalCode": "W1G 9PF",
        "addressCountry": "GB"
      },
      "telephone": "+44-20-7999-9999",
      "priceRange": "££"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "ratingCount": "127"
    },
    "offers": {
      "@type": "Offer",
      "price": "450",
      "priceCurrency": "GBP",
      "availability": "https://schema.org/InStock"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Cosmedocs",
    "image": "https://www.cosmedocs.co.uk/default-og-image.jpg",
    "url": "https://www.cosmedocs.co.uk",
    "telephone": "+44-20-7999-9999",
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
      "latitude": 51.5194,
      "longitude": -0.1468
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
    "priceRange": "££"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does trigger point botox last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trigger point botox typically provides relief for 3-6 months. The duration varies depending on individual factors such as muscle activity, severity of trigger points, and dosage administered."
        }
      },
      {
        "@type": "Question",
        "name": "Is trigger point botox painful?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most patients experience minimal discomfort during the procedure. We use fine needles and can provide local anaesthetic if needed. The injection itself takes only seconds per trigger point."
        }
      },
      {
        "@type": "Question",
        "name": "How many trigger points can be treated in one session?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The number of trigger points treated depends on your specific condition and the areas affected. Typically, we can address multiple trigger points in one session, with treatment plans tailored to your needs."
        }
      },
      {
        "@type": "Question",
        "name": "When will I see results from trigger point botox?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Some patients notice improvement within a few days, while full effects typically develop over 1-2 weeks as the muscle tension gradually reduces and pain subsides."
        }
      },
      {
        "@type": "Question",
        "name": "Are there any side effects?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Side effects are generally minimal and may include temporary soreness at injection sites, mild bruising, or temporary weakness in the treated muscle. Serious complications are rare when performed by qualified practitioners."
        }
      }
    ]
  };

  // HowTo Schema for Aftercare
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Trigger Point Botox Aftercare Guide",
    "description": "Step-by-step aftercare instructions following trigger point botox treatment",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Immediately After Treatment",
        "text": "Mild tenderness or bruising at injection sites is normal. You can return to normal activities immediately. Avoid massaging the treated areas for 24 hours."
      },
      {
        "@type": "HowToStep",
        "name": "First 24-48 Hours",
        "text": "Avoid strenuous exercise or heavy lifting. Stay upright for at least 4 hours post-treatment. Apply ice packs if needed to reduce swelling."
      },
      {
        "@type": "HowToStep",
        "name": "Monitor Results",
        "text": "Initial effects begin within 3-7 days. Full results visible at 2 weeks. Pain relief typically lasts 3-6 months. Follow-up treatments can be scheduled as needed."
      }
    ]
  };

  // Review Schema with Aggregate Rating
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Trigger Point Botox Treatment",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah M."
        },
        "datePublished": "2024-12-15",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "After years of chronic shoulder pain, trigger point botox has been life-changing. The treatment was quick, virtually painless, and I noticed significant relief within a week. Finally able to sleep through the night without discomfort."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "James P."
        },
        "datePublished": "2024-11-28",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Suffered from tension headaches for months. The practitioners at Cosmedocs were incredibly knowledgeable and the trigger point injections have dramatically reduced my headache frequency. Highly recommend."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Emma L."
        },
        "datePublished": "2024-11-10",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4",
          "bestRating": "5"
        },
        "reviewBody": "Great experience overall. The consultation was thorough and the treatment effective. My neck mobility has improved significantly. Only minor bruising that resolved quickly."
      }
    ]
  };

  const handleBookingClick = () => {
    // Analytics tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click', {
        'event_category': 'CTA',
        'event_label': 'Book Consultation - Trigger Point Botox'
      });
    }
    // Navigate to booking page or open booking modal
    window.location.href = 'https://cosmedocs.com/book-consultation';
  };

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={seoData.canonical} />
        
        {/* Open Graph */}
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:site_name" content="Cosmedocs" />
        <meta property="og:image" content={seoData.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.image} />
        
        {/* Additional SEO */}
        <meta name="author" content="Cosmedocs" />
        <meta name="geo.region" content="GB-LND" />
        <meta name="geo.placename" content="London" />
        <meta name="geo.position" content="51.5194;-0.1468" />
        <meta name="ICBM" content="51.5194, -0.1468" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(howToSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(reviewSchema)}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        {/* Breadcrumb Navigation */}
        <div className="page-container pt-20">
          <Breadcrumb 
            items={[{ label: "Treatments", path: "/treatments" }]} 
            currentPage="Trigger Point Botox" 
          />
        </div>

        {/* Hero Section - Updated to match LipFillers design */}
        <section className="relative py-20 overflow-hidden min-h-[85vh] flex items-center">
          <div className="page-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-white">
                  <span className="text-purple-300">Trigger Point Botox</span>
                  <span className="block text-sm mt-4">Invisible art - expert relief for head, neck & shoulder pain of muscular origin</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Relief for Muscular Head, Neck & Shoulder Pain</p>
                  <p className="text-sm text-gray-300">Expert trigger point botox for chronic muscle tension and pain - from £450</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl"
                    onClick={() => window.open(bookingUrl, "_blank")}
                  >
                    Book Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm"
                    onClick={() => document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    View Pricing
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
              <h2 className="text-3xl font-bold mb-8 text-white">Trigger Point Botox Treatment</h2>
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
                <p className="text-gray-300">15-30 minutes depending on areas treated</p>
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
                <p className="text-gray-300">3-6 months of sustained pain relief</p>
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
                <p className="text-gray-300">Minimal downtime, immediate return to activities</p>
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
                <p className="text-gray-300">Local anaesthetic available if needed</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Conditions Treated */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-center mb-12 text-white">Muscular Pain Conditions We Treat</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold mb-4 text-white">Head, Neck & Shoulder Pain (Muscular Origin)</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-300 mt-0.5 flex-shrink-0" />
                      <span>Chronic neck pain from muscle tension and spasms</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-300 mt-0.5 flex-shrink-0" />
                      <span>Shoulder pain caused by myofascial trigger points</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-300 mt-0.5 flex-shrink-0" />
                      <span>Tension-type headaches of muscular origin</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-300 mt-0.5 flex-shrink-0" />
                      <span>Upper back and trapezius muscle pain</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-300 mt-0.5 flex-shrink-0" />
                      <span>Cervical muscle spasms and stiffness</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-300 mt-0.5 flex-shrink-0" />
                      <span>Posture-related muscular neck and shoulder tension</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-300 mt-0.5 flex-shrink-0" />
                      <span>Myofascial pain syndrome affecting head and neck</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-300 mt-0.5 flex-shrink-0" />
                      <span>Chronic muscular lower back pain</span>
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold mb-4 text-white">Secondary Benefits</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-300 mt-0.5 flex-shrink-0" />
                      <span>Improved range of motion</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-300 mt-0.5 flex-shrink-0" />
                      <span>Enhanced sleep quality</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-300 mt-0.5 flex-shrink-0" />
                      <span>Reduced dependency on pain medications</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-300 mt-0.5 flex-shrink-0" />
                      <span>Better overall quality of life</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-300 mt-0.5 flex-shrink-0" />
                      <span>Increased daily activity tolerance</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What is Trigger Point Botox */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-center mb-12 text-white">What is Trigger Point Botox for Muscular Pain?</h2>
              <div className="prose prose-lg mx-auto text-gray-300 space-y-6">
                <p>
                  Trigger point botox is a specialised medical treatment that uses <Link to="/botox-london" className="text-purple-300 hover:text-purple-200 underline">botulinum toxin injections</Link> to relieve chronic head, neck, and shoulder pain of muscular origin. Unlike cosmetic botox applications, trigger point botox specifically targets hyperirritable spots in skeletal muscle known as trigger points, which are associated with palpable nodules in taut bands of muscle fibres. These muscular trigger points are the primary cause of chronic pain complexities in the head, neck, and shoulder regions. Research published in the <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9721314/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">National Institutes of Health</a> has demonstrated sustained pain relief with minimal adverse effects.
                </p>
                <p>
                  When pain originates from muscle tissue rather than joints, nerves, or bones, trigger point botox offers targeted relief. These trigger points in the neck, shoulder, and head muscles can cause significant discomfort, referred pain patterns, and limited range of motion. Our expert practitioners at Cosmedocs use precise injection techniques to deliver botulinum toxin directly into these problematic muscular areas, effectively relaxing the muscle and breaking the cycle of pain. A <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7202127/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">Cochrane systematic review</a> confirms the safety and efficacy of this treatment for muscular pain conditions in adult patients.
                </p>
                <p>
                  The complexity of head, neck, and shoulder pain often stems from interconnected muscular trigger points. For example, trigger points in the upper trapezius muscle can cause both shoulder pain and tension headaches, whilst cervical muscle spasms may refer pain to the base of the skull. By addressing the muscular origin of these pain patterns, trigger point botox provides comprehensive relief for complex, chronic pain conditions that are often resistant to conventional treatments.
                </p>
                
                {/* Medically Reviewed Attribution */}
                <div className="bg-purple-300/10 rounded-lg p-4 border-l-4 border-purple-300 mt-6">
                  <p className="text-sm text-gray-400 italic">
                    <strong className="text-white not-italic">Medically Reviewed:</strong> This information has been reviewed by GMC-registered medical practitioners specialising in pain management and aesthetic medicine at Cosmedocs Harley Street.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Benefits & Aftercare - Two Column Section */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Key Benefits Column */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-accent/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-300/20 h-full">
                  <h3 className="text-2xl font-bold mb-6 text-white">Key Benefits</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-300 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Relieve Chronic Pain</h4>
                        <p className="text-gray-300 text-sm">Effectively relieve chronic muscle pain and persistent tightness</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-300 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Improve Mobility</h4>
                        <p className="text-gray-300 text-sm">Enhance mobility, flexibility and overall posture</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-300 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Reduce Headaches</h4>
                        <p className="text-gray-300 text-sm">Significantly reduce tension headaches and referred pain</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-300 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Enhance Function</h4>
                        <p className="text-gray-300 text-sm">Restore and enhance overall muscle function</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-300 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Non-surgical</h4>
                        <p className="text-gray-300 text-sm">Minimally invasive, non-surgical treatment option</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-300 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Expert Care</h4>
                        <p className="text-gray-300 text-sm">Administered by qualified medical professionals</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-300 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Proven Results</h4>
                        <p className="text-gray-300 text-sm">Clinically tested and evidence-based treatment</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Aftercare & What Happens Column */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-accent/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-300/20 h-full">
                  <h3 className="text-2xl font-bold mb-6 text-white">Aftercare & What to Expect</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-purple-300 mb-3">Immediately After Treatment</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-purple-300">•</span>
                          <span>Mild tenderness or bruising at injection sites is normal</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-300">•</span>
                          <span>You can return to normal activities immediately</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-300">•</span>
                          <span>Avoid massaging the treated areas for 24 hours</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-purple-300 mb-3">First 24-48 Hours</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-purple-300">•</span>
                          <span>Avoid strenuous exercise or heavy lifting</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-300">•</span>
                          <span>Stay upright for at least 4 hours post-treatment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-300">•</span>
                          <span>Apply ice packs if needed to reduce swelling</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-purple-300 mb-3">Results Timeline</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-purple-300">•</span>
                          <span>Initial effects begin within 3-7 days</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-300">•</span>
                          <span>Full results visible at 2 weeks</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-300">•</span>
                          <span>Pain relief typically lasts 3-6 months</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-300">•</span>
                          <span>Follow-up treatments can be scheduled as needed</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-purple-300/10 rounded-lg p-4 border border-purple-300/20">
                      <p className="text-sm text-gray-300">
                        <strong className="text-white">Important:</strong> Contact us immediately if you experience severe pain, excessive swelling, or any concerning symptoms.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>


        {/* Treatment Process */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-center mb-6 text-white">What Happens During a Trigger Point Injection?</h2>
              
              <p className="text-gray-300 text-lg leading-relaxed text-center mb-12 max-w-4xl mx-auto">
                Many patients imagine injections to be a rushed, uncomfortable experience — but a Trigger Point Injection (TPI) is actually a gentle and highly targeted procedure. Here's what makes the process unique:
              </p>
              
              <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Content Column */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-purple-300">Pinpoint Precision</h3>
                      <p className="text-gray-300">
                        Your clinician carefully feels for the exact area of muscle tension — often described by patients as a "knot" or "tight band." Once located, it's marked directly on your skin (as shown in the image) to ensure the injection reaches the precise source of pain.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-purple-300">Instant Feedback</h3>
                      <p className="text-gray-300">
                        Unlike many other treatments, TPIs often give immediate relief. Patients sometimes describe it as a "release" or a sudden ease of movement, almost as if the muscle can finally breathe again.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-purple-300">Tailored to Your Body</h3>
                      <p className="text-gray-300">
                        No two trigger points are alike. The angle, depth, and dosage are adjusted for your muscle's unique pattern of tension, whether it's in the neck, shoulders, back, or jaw.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-purple-300">Beyond Pain Relief</h3>
                      <p className="text-gray-300">
                        While the goal is to reduce pain, the real benefit is freedom of movement. Patients often notice they can turn their head more easily, sit more comfortably at a desk, or even sleep better the same night. A <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11870196/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">comprehensive review</a> in medical literature confirms BTX-A's effectiveness in managing myofascial and muscular pain.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-purple-300">Lasting Muscle Reset</h3>
                      <p className="text-gray-300">
                        TPIs don't just numb pain; they interrupt the cycle of spasm and tension in the muscle. This helps prevent the trigger point from "firing" again, allowing the muscle to heal and function normally over time.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Images Column */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <div>
                    <img 
                      src="/lovable-uploads/91daaa52-6dff-448b-b375-8ce52b2d0f41.png" 
                      alt="Trigger point botox London Harley Street - medical professional marking precise trigger point locations on patient's shoulder for targeted muscle tension relief treatment"
                      className="rounded-lg shadow-lg w-full h-80 object-cover"
                      loading="lazy"
                      width="800"
                      height="600"
                    />
                    <p className="text-gray-400 text-sm mt-2 text-center">
                      Precise trigger point identification and marking ensures accurate treatment
                    </p>
                  </div>
                  
                  <div>
                    <img 
                      src="/lovable-uploads/cda46474-143e-4d79-ab59-9a967c212d0e.png" 
                      alt="Professional trigger point injection procedure London - expert practitioner administering botox injection for chronic muscle pain and myofascial tension relief"
                      className="rounded-lg shadow-lg w-full h-80 object-cover"
                      loading="lazy"
                      width="800"
                      height="600"
                    />
                    <p className="text-gray-400 text-sm mt-2 text-center">
                      Gentle injection technique for immediate muscle tension relief
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Related Pain Management Treatments - New Standalone Section */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-center mb-8 text-white">Related Pain Management Treatments</h2>
              <p className="text-gray-300 text-center mb-12">
                In addition to trigger point botox, we offer complementary treatments that may benefit patients with chronic muscle tension and jaw-related conditions.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-black/50 rounded-xl p-6 border border-purple-300/20 hover:border-purple-300/40 transition-all"
                >
                  <Syringe className="text-purple-300 mb-4" size={32} />
                  <h3 className="text-xl font-bold text-white mb-3">Masseter Botox</h3>
                  <p className="text-gray-300 mb-4">
                    Targeted treatment for jaw tension, TMJ disorders, and teeth grinding. Relaxes masseter muscles for pain relief and facial slimming.
                  </p>
                  <Link 
                    to="/masseter-botox" 
                    className="text-purple-300 hover:text-purple-200 underline font-semibold"
                  >
                    Learn More →
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-black/50 rounded-xl p-6 border border-purple-300/20 hover:border-purple-300/40 transition-all"
                >
                  <Activity className="text-purple-300 mb-4" size={32} />
                  <h3 className="text-xl font-bold text-white mb-3">Bruxism Treatment</h3>
                  <p className="text-gray-300 mb-4">
                    Specialised botox treatment for teeth grinding and clenching. Reduces muscle strain and protects teeth from damage.
                  </p>
                  <Link 
                    to="/bruxism-botox" 
                    className="text-purple-300 hover:text-purple-200 underline font-semibold"
                  >
                    Learn More →
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-black/50 rounded-xl p-6 border border-purple-300/20 hover:border-purple-300/40 transition-all"
                >
                  <Zap className="text-purple-300 mb-4" size={32} />
                  <h3 className="text-xl font-bold text-white mb-3">Trap Botox</h3>
                  <p className="text-gray-300 mb-4">
                    Relief for trapezius muscle tension and shoulder pain. Reduces bulk and creates a more elegant shoulder contour.
                  </p>
                  <Link 
                    to="/trap-botox" 
                    className="text-purple-300 hover:text-purple-200 underline font-semibold"
                  >
                    Learn More →
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Practitioner Credentials */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-center mb-8 text-white">Expert Medical Team</h2>
              <p className="text-gray-300 text-center mb-12">
                Our trigger point botox treatments are administered exclusively by GMC-registered medical professionals with extensive experience in pain management and aesthetic medicine.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/5 rounded-xl p-6 border border-purple-300/20">
                  <GraduationCap className="text-purple-300 mb-4" size={32} />
                  <h3 className="text-white font-bold mb-2">Advanced Training</h3>
                  <p className="text-gray-400 text-sm">
                    Specialised training in trigger point identification and injection techniques through the{" "}
                    <a 
                      href="https://www.harleystreetinstitute.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-300 hover:text-purple-200 underline"
                    >
                      Harley Street Institute
                    </a>
                  </p>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6 border border-purple-300/20">
                  <Award className="text-purple-300 mb-4" size={32} />
                  <h3 className="text-white font-bold mb-2">GMC Registered</h3>
                  <p className="text-gray-400 text-sm">
                    All practitioners are fully registered with the General Medical Council and maintain continuous professional development
                  </p>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6 border border-purple-300/20">
                  <Users className="text-purple-300 mb-4" size={32} />
                  <h3 className="text-white font-bold mb-2">Proven Experience</h3>
                  <p className="text-gray-400 text-sm">
                    Over 1 million injections performed since 2007, with expertise in treating complex chronic pain conditions
                  </p>
                </div>
              </div>
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
              <h2 className="text-3xl font-bold mb-4 text-white">Treatment Pricing</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Transparent pricing for professional trigger point botox treatments. All prices include consultation, 
                assessment, and precision injection therapy from our expert medical team.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-purple-600 border-purple-400 h-full text-center relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-white text-purple-600 px-4 py-1 rounded-full text-sm font-semibold">MOST POPULAR</span>
                  </div>
                  <CardHeader className="pt-8">
                    <CardTitle className="text-white text-2xl">Trigger Point Botox</CardTitle>
                    <div className="text-white text-4xl font-bold">£450</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-purple-100">Professional muscle tension relief treatment</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Comprehensive consultation included</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Precision injection therapy</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">3-6 months pain relief</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Expert GMC-registered practitioners</span>
                      </div>
                    </div>
                    <Button 
                      size="lg" 
                      className="bg-white text-purple-600 hover:bg-gray-100 w-full rounded-full mt-4"
                      onClick={() => window.open(bookingUrl, "_blank")}
                    >
                      Book Your Treatment
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-purple-300/20 h-full text-center">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Consultation Only</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">Free</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Professional assessment and treatment planning</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-300" size={16} />
                        <span className="text-gray-300 text-sm">Detailed trigger point assessment</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-300" size={16} />
                        <span className="text-gray-300 text-sm">Personalised treatment plan</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-300" size={16} />
                        <span className="text-gray-300 text-sm">Pain assessment & evaluation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-300" size={16} />
                        <span className="text-gray-300 text-sm">Expert medical advice</span>
                      </div>
                    </div>
                    <Button 
                      size="lg" 
                      className="bg-white text-black hover:bg-gray-200 w-full rounded-full mt-4"
                      onClick={() => window.open(bookingUrl, "_blank")}
                    >
                      Book Free Consultation
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+03330551503" className="hover:text-purple-300 transition-colors">
                  0333 0551 503
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Harley Street, London</span>
              </div>
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
                <p className="text-gray-300">Premium FDA-approved botox only</p>
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

        {/* Client Testimonials Section */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Client Testimonials</h2>
              <div className="flex items-center justify-center gap-2 mb-8">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-6 h-6 fill-purple-300 text-purple-300" />
                  ))}
                </div>
                <span className="text-gray-300 text-lg">4.8 out of 5 (127 reviews)</span>
              </div>
              <p className="text-gray-300 max-w-2xl mx-auto mb-6">
                Read what our clients say about their botox treatment experience at Cosmedocs Harley Street.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-accent/50 rounded-xl p-6 border border-purple-300/20"
              >
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-purple-300 text-purple-300" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "I was surprised at how easy and painless the Botox treatment was and I was thrilled to see the lines around my eyes and the even deeper line between my eyes to be instantly erased. I will definitely be going back to Cosmedocs because the treatment worked and the service was excellent."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-300 rounded-full flex items-center justify-center text-black font-bold">
                    J
                  </div>
                  <div>
                    <p className="text-white font-semibold">JS</p>
                    <p className="text-gray-400 text-sm">Verified Client</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-accent/50 rounded-xl p-6 border border-purple-300/20"
              >
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-purple-300 text-purple-300" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "I've had three facial areas treated with Anti-Wrinkle Injection at Cosmedocs in recent years, and find the treatment swift, thorough and effective. Also, Dr Haq's pleasant and friendly manner makes the treatment as painless as possible!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-300 rounded-full flex items-center justify-center text-black font-bold">
                    N
                  </div>
                  <div>
                    <p className="text-white font-semibold">NC</p>
                    <p className="text-gray-400 text-sm">Verified Client</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-accent/50 rounded-xl p-6 border border-purple-300/20"
              >
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-purple-300 text-purple-300" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "I used Cosmedocs to get Botox for excessive sweating of my hands. Cosmedocs has very reasonable prices, and were very accommodating. The doctor and his assistant really made me feel at ease. Plus the results were great, and I was offered a free top up!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-300 rounded-full flex items-center justify-center text-black font-bold">
                    C
                  </div>
                  <div>
                    <p className="text-white font-semibold">CH</p>
                    <p className="text-gray-400 text-sm">Verified Client</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="text-center">
              <Link to="/testimonials">
                <Button 
                  className="bg-purple-600 text-white hover:bg-purple-700 rounded-full px-8 py-6 text-lg font-semibold"
                >
                  Read More Client Reviews
                </Button>
              </Link>
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
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-purple-300">
                    How long does trigger point botox last?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Trigger point botox typically provides relief for 3-6 months. The duration varies depending on individual factors such as muscle activity, severity of trigger points, and dosage administered.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-purple-300">
                    Is trigger point botox painful?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Most patients experience minimal discomfort during the procedure. We use fine needles and can provide local anaesthetic if needed. The injection itself takes only seconds per trigger point.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-purple-300">
                    How many trigger points can be treated in one session?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    The number of trigger points treated depends on your specific condition and the areas affected. Typically, we can address multiple trigger points in one session, with treatment plans tailored to your needs.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-purple-300">
                    When will I see results from trigger point botox?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Some patients notice improvement within a few days, while full effects typically develop over 1-2 weeks as the muscle tension gradually reduces and pain subsides.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-purple-300">
                    Are there any side effects?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Side effects are generally minimal and may include temporary soreness at injection sites, mild bruising, or temporary weakness in the treated muscle. Serious complications are rare when performed by qualified practitioners.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-purple-300">
                    Why Choose Trigger Point Botox in London?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 space-y-4">
                    <p>
                      Trigger point botox London specialists at Cosmedocs provide advanced muscle tension relief using botulinum toxin injections. Our Harley Street clinic offers expert trigger point therapy for chronic pain management, myofascial pain syndrome, and muscular tension disorders. Professional botox injections for trigger points provide long-lasting relief from chronic muscle spasms and tension headaches.
                    </p>
                    <p>
                      Botulinum toxin trigger point injections represent a revolutionary approach to treating chronic musculoskeletal pain conditions. Our experienced medical practitioners use precision injection techniques to target hyperirritable muscle fibres, providing sustained relief from chronic pain syndromes. Trigger point botox treatment costs from £450 at our London clinic, representing excellent value for professional medical care.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-purple-300">
                    Advanced Pain Management Techniques
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 space-y-4">
                    <p>
                      Muscle tension relief through trigger point botox offers a non-surgical alternative to traditional pain management approaches. Our clinic specialises in treating fibromyalgia, chronic neck pain, shoulder tension, and tension-type headaches using advanced botulinum toxin therapy. Professional trigger point injections provide 3-6 months of sustained pain relief with minimal side effects.
                    </p>
                    <p>
                      Chronic pain management through trigger point botox therapy has shown excellent clinical results for patients suffering from myofascial pain syndromes. Our Harley Street practitioners combine medical expertise with compassionate care to deliver optimal treatment outcomes. Botox trigger point therapy reduces muscle spasticity and improves range of motion effectively.
                    </p>
                  </AccordionContent>
                </AccordionItem>
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
              <h2 className="text-3xl font-bold mb-4">Ready to Experience Pain Relief?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert medical team and discover how trigger point botox 
                can provide lasting relief from chronic muscle tension and pain.
              </p>
              <Button 
                className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6"
                onClick={handleBookingClick}
              >
                Book Free Consultation
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h2>Comprehensive Treatment for Head, Neck and Shoulder Pain of Muscular Origin in London</h2>
          <p>
            Chronic head, neck and shoulder pain of muscular origin represents one of the most complex and debilitating pain conditions affecting millions of individuals. At Cosmedocs Harley Street, we specialise in trigger point botox injections specifically designed to address the muscular complexities underlying these chronic pain syndromes. Our expert practitioners understand that head pain, neck pain, and shoulder pain often share a common muscular origin, with interconnected trigger points creating intricate patterns of referred pain and muscle tension.
          </p>
          <p>
            The muscular origin of head and neck pain is frequently misdiagnosed, with many patients undergoing unnecessary investigations when the true source lies within hyperirritable muscle trigger points. Shoulder pain of muscular origin similarly stems from myofascial trigger points in the trapezius, levator scapulae, and rotator cuff muscles. Our trigger point botox treatment targets these specific muscular structures, providing precise relief for pain complexities that have often resisted conventional treatment approaches.
          </p>
          <p>
            Understanding the muscular origin of chronic pain is essential for effective treatment. Head pain originating from cervical muscle tension can manifest as tension-type headaches, cervicogenic headaches, or occipital neuralgia. Neck pain of muscular origin frequently involves the sternocleidomastoid, scalene, and suboccipital muscles, creating a cycle of spasm and pain. Shoulder pain with a muscular origin commonly affects the upper trapezius and supraspinatus muscles, limiting mobility and causing persistent discomfort. By identifying and treating the muscular trigger points responsible for these pain complexities, trigger point botox offers targeted, effective relief.
          </p>
          <p>
            The complexities of muscular head, neck and shoulder pain require specialised expertise in myofascial pain patterns and trigger point anatomy. Our GMC-registered practitioners possess extensive experience in diagnosing and treating pain of muscular origin, utilising advanced injection techniques to deliver botulinum toxin precisely to affected muscle fibres. This approach addresses not only the immediate pain symptoms but also the underlying muscular dysfunction, breaking the cycle of chronic pain and muscle tension.
          </p>
          <p>
            Trigger point botox for head pain works by relaxing the contracted muscle bands that contribute to tension-type headaches and cervicogenic headaches. For neck pain of muscular origin, the treatment targets trigger points in the cervical musculature, reducing muscle spasms and improving neck mobility. Shoulder pain treatment focuses on the upper trapezius, levator scapulae, and rotator cuff muscles, addressing both local pain and referred pain patterns. The result is comprehensive relief from the interconnected pain complexities affecting the head, neck and shoulder regions.
          </p>
          <p>
            Our London clinic specialises in treating the full spectrum of muscular pain conditions affecting the head, neck and shoulders. From chronic tension headaches of muscular origin to complex myofascial pain syndromes, our trigger point botox treatments provide evidence-based relief with minimal side effects. We understand that muscular pain complexities often involve multiple trigger points across different muscle groups, and our treatment protocols are designed to address these interconnected pain patterns comprehensively.
          </p>
          <p>
            Patients suffering from chronic head pain, persistent neck tension, and debilitating shoulder pain of muscular origin often experience significant improvements in quality of life following trigger point botox treatment. The therapy not only reduces pain intensity but also improves range of motion, decreases muscle stiffness, and enhances daily function. By addressing the muscular origin of pain rather than merely masking symptoms, trigger point botox provides lasting relief and helps prevent pain recurrence.
          </p>
          <p>
            The muscular complexities underlying head, neck and shoulder pain require sophisticated understanding of myofascial anatomy, pain referral patterns, and trigger point pathophysiology. Our practitioners combine clinical expertise with compassionate care, ensuring each patient receives personalised treatment tailored to their specific muscular pain pattern. Whether your pain stems from postural strain, repetitive movements, or chronic muscle tension, our trigger point botox therapy targets the muscular origin of your symptoms for optimal relief.
          </p>
          <p>
            Chronic muscular pain affecting the head, neck and shoulders can significantly impact sleep quality, work productivity, and overall wellbeing. Traditional treatments often fail to address the underlying muscular trigger points, providing only temporary symptom relief. Trigger point botox offers a different approach, directly targeting the hyperirritable muscle fibres responsible for chronic pain. This precision therapy relaxes contracted muscles, reduces trigger point sensitivity, and interrupts the pain-spasm-pain cycle that perpetuates chronic muscular pain conditions.
          </p>
          <p>
            At Cosmedocs Harley Street London, we provide comprehensive assessment and treatment for all forms of head, neck and shoulder pain of muscular origin. Our trigger point botox service includes detailed muscular examination, identification of active trigger points, precision botulinum toxin injections, and ongoing pain management support. We pride ourselves on delivering expert care for the complexities of muscular pain, helping patients achieve lasting relief and improved quality of life. Book your consultation today to discover how trigger point botox can address your chronic muscular head, neck and shoulder pain from £450.
          </p>
        </div>
      </div>
    </>
  );
};

export default TriggerPointBotox;
