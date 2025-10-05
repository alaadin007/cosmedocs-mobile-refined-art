
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
  const seoData = generateSEOMetadata(
    "Trigger Point Botox London - £450 | Muscle Tension Relief | Cosmedocs",
    "Expert trigger point botox injections in London from £450. Relieve chronic muscle tension, pain, and trigger points with precision botox treatments at Cosmedocs Harley Street.",
    "/trigger-point-botox"
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Trigger Point Botox Treatment",
    "description": "Professional trigger point botox injections for muscle tension relief and chronic pain management",
    "procedureType": "Botulinum Toxin Injection",
    "bodyLocation": "Muscles (neck, shoulders, back, jaw)",
    "preparation": "No special preparation required. Avoid blood-thinning medications if possible.",
    "followup": "Follow-up consultation after 2 weeks to assess results",
    "howPerformed": "Precision injection of botulinum toxin directly into trigger points using fine needles",
    "provider": {
      "@type": "MedicalOrganization",
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
                  <span className="block text-sm mt-4">Invisible art - expert muscle tension relief that speaks without words</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Precision Pain Relief</p>
                  <p className="text-sm text-gray-300">Expert trigger point botox injections for chronic muscle tension - from £450</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl"
                    onClick={handleBookingClick}
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
              <h2 className="text-3xl font-bold text-center mb-12 text-white">Conditions We Treat</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold mb-4 text-white">Primary Conditions</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-300 mt-0.5 flex-shrink-0" />
                      <span>Chronic neck and shoulder tension</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-300 mt-0.5 flex-shrink-0" />
                      <span>Myofascial pain syndrome</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-300 mt-0.5 flex-shrink-0" />
                      <span>Tension-type headaches</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-300 mt-0.5 flex-shrink-0" />
                      <span>Chronic lower back pain</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-300 mt-0.5 flex-shrink-0" />
                      <span>Fibromyalgia-related muscle pain</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-300 mt-0.5 flex-shrink-0" />
                      <span>Posture-related neck tension</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-300 mt-0.5 flex-shrink-0" />
                      <span>Hip-related musculoskeletal pain</span>
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
              <h2 className="text-3xl font-bold text-center mb-12 text-white">What is Trigger Point Botox?</h2>
              <div className="prose prose-lg mx-auto text-gray-300 space-y-6">
                <p>
                  Trigger point botox is a specialized medical treatment that uses botulinum toxin injections to relieve chronic muscle tension, spasms, and pain. Unlike cosmetic botox applications, trigger point botox specifically targets hyperirritable spots in skeletal muscle known as trigger points, which are associated with palpable nodules in taut bands of muscle fibers.
                </p>
                <p>
                  These trigger points can cause significant discomfort, referred pain, and limited range of motion. Our expert practitioners at Cosmedocs use precise injection techniques to deliver botulinum toxin directly into these problematic areas, effectively relaxing the muscle and providing long-lasting relief from chronic pain conditions.
                </p>
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
        <section className="py-20 bg-black">
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
                        While the goal is to reduce pain, the real benefit is freedom of movement. Patients often notice they can turn their head more easily, sit more comfortably at a desk, or even sleep better the same night.
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


        {/* Pricing Section */}
        <section id="pricing-section" className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-8 text-white">Treatment Pricing</h2>
              <Card className="bg-accent border-none">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-white">Trigger Point Botox</CardTitle>
                  <CardDescription className="text-gray-300">Professional muscle tension relief treatment</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-5xl font-bold text-purple-300 mb-4">£450</div>
                  <p className="text-gray-300 mb-6">
                    Starting price for trigger point botox treatment including consultation, 
                    assessment, and precision injection therapy.
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-white text-black hover:bg-gray-200 w-full rounded-full"
                    onClick={handleBookingClick}
                  >
                    Book Your Treatment
                  </Button>
                  
                  <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-400">
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
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Practitioner Credentials */}
        <section className="py-20 bg-black">
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

        {/* Additional SEO Content in Expandable Format */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-center mb-12 text-white">Comprehensive Treatment Information</h2>
              <Accordion type="single" collapsible className="w-full space-y-4">
                {/* Kept accordion items will remain here if any, but the two moved items are removed */}
              </Accordion>
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
                  className="bg-accent/50 rounded-xl p-6 border border-purple-300/20 hover:border-purple-300/40 transition-all"
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
                  className="bg-accent/50 rounded-xl p-6 border border-purple-300/20 hover:border-purple-300/40 transition-all"
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
                  className="bg-accent/50 rounded-xl p-6 border border-purple-300/20 hover:border-purple-300/40 transition-all"
                >
                  <Zap className="text-purple-300 mb-4" size={32} />
                  <h3 className="text-xl font-bold text-white mb-3">Trap Botox</h3>
                  <p className="text-gray-300 mb-4">
                    Relief for trapezius muscle tension and shoulder pain. Reduces bulk and creates a more elegant shoulder contour.
                  </p>
                  <Link 
                    to="/masseter-botox" 
                    className="text-purple-300 hover:text-purple-200 underline font-semibold"
                  >
                    Learn More →
                  </Link>
                </motion.div>
              </div>
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
      </div>
    </>
  );
};

export default TriggerPointBotox;
