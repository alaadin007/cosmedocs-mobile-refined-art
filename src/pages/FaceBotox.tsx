import React from 'react';
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { generateSEOMetadata } from '@/utils/seo';
import { Clock, Users, Award, Calendar, MapPin, Phone, CheckCircle, Star, ArrowRight, Shield, Heart, Check, Activity, Syringe, GraduationCap, Brain, User, Sparkles, Building, Stethoscope, MessageCircle } from "lucide-react";
import ClientReviews from '@/components/ClientReviews';
import Breadcrumb from '@/components/Breadcrumb';

export default function FaceBotox() {
  const seoData = generateSEOMetadata(
    "Botox London | Anti-Wrinkle Treatment Guide | Cosmedocs Harley Street",
    "Complete guide to Botox in London. Learn what Botox is, how it works, treatment areas, results timeline, and how to choose the right clinic. Doctor-led care at Harley Street.",
    "/botox-london"
  );

  const medicalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Cosmedocs",
    "image": ["https://www.cosmedocs.co.uk/default-og-image.jpg"],
    "url": "https://www.cosmedocs.co.uk",
    "telephone": "+44 20 3733 3227",
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
      "latitude": 51.5074,
      "longitude": -0.1278
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+44 20 3733 3227",
      "contactType": "customer service",
      "availableLanguage": ["English"]
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
        "dayOfWeek": ["Saturday"],
        "opens": "10:00",
        "closes": "16:00"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Botox and how does it work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Botox (botulinum toxin type A) is a purified protein that temporarily relaxes targeted facial muscles by blocking nerve signals. This reduces the appearance of dynamic wrinkles caused by repeated facial expressions. The treatment has been safely used for over 30 years in both medical and cosmetic applications."
        }
      },
      {
        "@type": "Question",
        "name": "Who is a suitable candidate for Botox?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Botox is suitable for adults aged 18 and over. It works well for those in their mid-20s to 30s seeking preventative treatment, as well as those with established lines seeking corrective treatment. Botox is not recommended during pregnancy or breastfeeding."
        }
      },
      {
        "@type": "Question",
        "name": "How long do Botox results last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Botox results typically last 3-6 months. Initial effects appear within 3-5 days, with full results visible at 10-14 days. Duration varies based on individual metabolism, treatment area, and dosage used."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between Botox and fillers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Botox relaxes muscles to reduce dynamic wrinkles (lines that appear with movement). Dermal fillers add volume to restore lost facial fullness and soften static lines. Many patients benefit from combining both treatments for comprehensive facial rejuvenation."
        }
      },
      {
        "@type": "Question",
        "name": "How do I choose a Botox clinic in London?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Look for doctor-led clinics with qualified medical practitioners, transparent pricing, proper consultation processes, and strong patient reviews. Check for CQC registration and ensure practitioners have specific training in facial aesthetics."
        }
      }
    ]
  };

  // Treatment areas for summary cards
  const treatmentAreaCards = [
    {
      title: "Upper Face",
      areas: ["Forehead Lines", "Frown Lines (Glabella)", "Crow's Feet", "Brow Lift"],
      link: "/forehead-lines-botox",
      description: "The most common Botox treatment areas, addressing lines caused by facial expressions."
    },
    {
      title: "Mid & Lower Face",
      areas: ["Bunny Lines", "Lip Flip", "Gummy Smile", "Chin Dimpling"],
      link: "/lower-face-botox",
      description: "Refined treatments for the nose, lips, and chin areas."
    },
    {
      title: "Jawline & Neck",
      areas: ["Masseter (Jaw Slimming)", "Nefertiti Lift", "Platysmal Bands"],
      link: "/nefertiti-botox-face-jaw-lift",
      description: "Contouring and lifting treatments for the lower face and neck."
    },
    {
      title: "Specialist Areas",
      areas: ["Trap Tox (Shoulders)", "Hyperhidrosis", "Migraines"],
      link: "/trap-botox",
      description: "Therapeutic and body applications beyond cosmetic use."
    }
  ];

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:image" content={seoData.image} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.image} />
        <meta name="keywords" content="botox london, anti-wrinkle injections london, botulinum toxin, botox harley street, cosmetic botox, preventative botox, botox for men, facial rejuvenation london" />
        <script type="application/ld+json">
          {JSON.stringify(medicalBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        {/* Breadcrumb */}
        <div className="page-container pt-20">
          <Breadcrumb 
            items={[
              { label: 'Treatments', path: '/treatments' }
            ]}
            currentPage="Botox London"
          />
        </div>

        {/* Hero Section - Educational Hub Style */}
        <section className="relative py-24 overflow-hidden">
          <div className="page-container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                  Botox London
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Your comprehensive guide to anti-wrinkle treatment. Understanding Botox, its applications, 
                  and how to achieve natural results with doctor-led care.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 mb-8">
                  <span className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-purple-400" />
                    Doctor-led treatments
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-purple-400" />
                    Harley Street, London
                  </span>
                  <span className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-purple-400" />
                    Since 2007
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={() => window.open("https://med.as.me/harleystreet", "_blank")}
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold"
                  >
                    Book Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg"
                    onClick={() => document.getElementById('what-is-botox')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Learn More
                  </Button>
                </div>
              </motion.div>
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
              <h2 className="text-3xl font-bold mb-8 text-white">Botox Treatment at a Glance</h2>
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
                <p className="text-gray-300">10-20 minutes</p>
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
                <h3 className="text-lg font-semibold text-white mb-2">Results Last</h3>
                <p className="text-gray-300">3-6 months typically</p>
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
                <p className="text-gray-300">No downtime required</p>
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
                <h3 className="text-lg font-semibold text-white mb-2">Onset of Results</h3>
                <p className="text-gray-300">3-5 days, full at 10-14 days</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="py-8 bg-black border-y border-gray-800">
          <div className="page-container">
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="#what-is-botox" className="text-gray-400 hover:text-purple-300 transition-colors">What is Botox?</a>
              <span className="text-gray-600">•</span>
              <a href="#how-it-works" className="text-gray-400 hover:text-purple-300 transition-colors">How It Works</a>
              <span className="text-gray-600">•</span>
              <a href="#treatment-areas" className="text-gray-400 hover:text-purple-300 transition-colors">Treatment Areas</a>
              <span className="text-gray-600">•</span>
              <a href="#who-is-suitable" className="text-gray-400 hover:text-purple-300 transition-colors">Who Is Suitable?</a>
              <span className="text-gray-600">•</span>
              <a href="#results-timeline" className="text-gray-400 hover:text-purple-300 transition-colors">Results Timeline</a>
              <span className="text-gray-600">•</span>
              <a href="#choosing-clinic" className="text-gray-400 hover:text-purple-300 transition-colors">Choosing a Clinic</a>
              <span className="text-gray-600">•</span>
              <a href="#faqs" className="text-gray-400 hover:text-purple-300 transition-colors">FAQs</a>
            </div>
          </div>
        </section>

        {/* What is Botox Section */}
        <section id="what-is-botox" className="py-20 bg-black">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-8 text-white">What is Botox?</h2>
                
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 text-lg mb-6">
                    Botox is the brand name for botulinum toxin type A, a purified protein derived from 
                    the bacterium <em>Clostridium botulinum</em>. When injected in controlled, tiny doses, 
                    it temporarily relaxes targeted muscles by blocking nerve signals.
                  </p>
                  
                  <p className="text-gray-300 mb-6">
                    Originally developed for medical conditions like muscle spasms and crossed eyes, 
                    Botox gained <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/103000s5316s5319s5323s5326s5331lbl.pdf" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">FDA approval</a> for 
                    cosmetic use in 2002. Today, it's the world's most popular non-surgical aesthetic treatment, 
                    with millions of procedures performed annually.
                  </p>

                  <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Key Facts About Botox</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                        <span>Over 30 years of clinical use with an excellent safety record</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                        <span>Approved by the FDA, MHRA, and regulatory bodies worldwide</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                        <span>Treatment takes 10-20 minutes with no downtime</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                        <span>Effects are temporary and fully reversible</span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-gray-300">
                    The term "Botox" is often used generically, but several brands exist including 
                    Azzalure, Bocouture, and Dysport. At Cosmedocs, we use premium, licensed products 
                    to ensure consistent, predictable results.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How Botox Works */}
        <section id="how-it-works" className="py-20 bg-accent">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-8 text-white">How Botox Works</h2>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <Card className="bg-gray-900/50 border-gray-800">
                    <CardContent className="p-6 text-center">
                      <div className="bg-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-purple-300">1</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">Injection</h3>
                      <p className="text-gray-400 text-sm">
                        Small amounts are precisely injected into targeted muscles using ultra-fine needles.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gray-900/50 border-gray-800">
                    <CardContent className="p-6 text-center">
                      <div className="bg-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-purple-300">2</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">Nerve Block</h3>
                      <p className="text-gray-400 text-sm">
                        Botox blocks the release of acetylcholine, preventing nerve signals from reaching muscles.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gray-900/50 border-gray-800">
                    <CardContent className="p-6 text-center">
                      <div className="bg-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-purple-300">3</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">Muscle Relaxation</h3>
                      <p className="text-gray-400 text-sm">
                        Targeted muscles relax, smoothing overlying skin and reducing wrinkle appearance.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 mb-6">
                    Dynamic wrinkles form from repeated muscle contractions over years—think of the 
                    lines that appear when you frown or squint. By temporarily relaxing these muscles, 
                    Botox softens existing lines and prevents new ones from forming.
                  </p>
                  
                  <p className="text-gray-300">
                    The key to natural results lies in precise dosing and placement. A skilled practitioner 
                    relaxes the muscles causing wrinkles whilst preserving natural facial expression. 
                    This is why technique and experience matter significantly.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Treatment Areas Overview */}
        <section id="treatment-areas" className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Botox Treatment Areas</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Botox can address various areas of the face and body. Click through to learn about 
                specific treatments, techniques, and what to expect.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {treatmentAreaCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-900/50 border-gray-800 h-full hover:border-purple-500/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-white mb-3">{card.title}</h3>
                      <p className="text-gray-400 text-sm mb-4">{card.description}</p>
                      <ul className="space-y-2 mb-6">
                        {card.areas.map((area) => (
                          <li key={area} className="flex items-center gap-2 text-sm text-gray-300">
                            <Check className="w-4 h-4 text-purple-400" />
                            {area}
                          </li>
                        ))}
                      </ul>
                      <Link 
                        to={card.link}
                        className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 text-sm font-medium"
                      >
                        Learn more <ArrowRight className="w-4 h-4" />
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Quick Links to Specific Treatments */}
            <div className="mt-12 bg-gray-900/30 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Popular Treatment Pages</h3>
              <div className="flex flex-wrap gap-3">
                <Link to="/forehead-lines-botox" className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-full text-sm text-gray-300 transition-colors">Forehead Lines</Link>
                <Link to="/frown-line-botox" className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-full text-sm text-gray-300 transition-colors">Frown Lines</Link>
                <Link to="/crows-feet-botox" className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-full text-sm text-gray-300 transition-colors">Crow's Feet</Link>
                <Link to="/masseter-botox" className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-full text-sm text-gray-300 transition-colors">Jaw Slimming</Link>
                <Link to="/lip-flip" className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-full text-sm text-gray-300 transition-colors">Lip Flip</Link>
                <Link to="/gummy-smile-botox" className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-full text-sm text-gray-300 transition-colors">Gummy Smile</Link>
                <Link to="/trap-botox" className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-full text-sm text-gray-300 transition-colors">Trap Tox</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Who is Suitable */}
        <section id="who-is-suitable" className="py-20 bg-accent">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-8 text-white">Who is Suitable for Botox?</h2>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Preventative vs Corrective */}
                  <Card className="bg-gray-900/50 border-gray-800">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-purple-500/20 rounded-full p-3">
                          <Sparkles className="w-6 h-6 text-purple-300" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">Preventative Botox</h3>
                      </div>
                      <p className="text-gray-300 mb-4">
                        For those in their mid-20s to early 30s with minimal lines. Prevents wrinkles 
                        from forming by stopping repetitive muscle movements before they create permanent creases.
                      </p>
                      <p className="text-sm text-gray-400">
                        <strong className="text-purple-300">Best for:</strong> Those noticing early dynamic lines 
                        with facial expressions who want to delay visible ageing.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gray-900/50 border-gray-800">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-purple-500/20 rounded-full p-3">
                          <Activity className="w-6 h-6 text-purple-300" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">Corrective Botox</h3>
                      </div>
                      <p className="text-gray-300 mb-4">
                        For established lines and wrinkles at rest. Softens existing creases and prevents 
                        them from deepening further. May be combined with other treatments for optimal results.
                      </p>
                      <p className="text-sm text-gray-400">
                        <strong className="text-purple-300">Best for:</strong> Those with visible lines at rest 
                        seeking to smooth and refresh their appearance.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Age Ranges */}
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Age Considerations</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <p className="text-purple-300 font-semibold mb-2">20s-30s</p>
                      <p className="text-gray-400 text-sm">
                        Preventative treatment. Low doses to slow early dynamic lines. 
                        Focus on preserving natural expression.
                      </p>
                    </div>
                    <div>
                      <p className="text-purple-300 font-semibold mb-2">40s-50s</p>
                      <p className="text-gray-400 text-sm">
                        Corrective treatment. Moderate doses to soften established lines. 
                        Often combined with <Link to="/dermal-fillers" className="text-purple-300 hover:underline">fillers</Link> for volume.
                      </p>
                    </div>
                    <div>
                      <p className="text-purple-300 font-semibold mb-2">60s+</p>
                      <p className="text-gray-400 text-sm">
                        Part of comprehensive rejuvenation. Works alongside other treatments 
                        to refresh appearance naturally.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Medical vs Aesthetic */}
                <div className="bg-gradient-to-r from-purple-900/30 to-gray-900/50 border border-purple-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Medical vs Aesthetic Botox</h3>
                  <p className="text-gray-300 mb-4">
                    Beyond cosmetic applications, Botox is licensed for various medical conditions 
                    including chronic migraines, muscle spasticity, and hyperhidrosis (excessive sweating).
                  </p>
                  <p className="text-gray-400 text-sm">
                    At Cosmedocs, our doctor-led approach means we can assess both aesthetic and 
                    therapeutic applications during your consultation. For specific medical conditions, 
                    please visit our dedicated treatment pages or consult with our medical team.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-4">
                    <Link to="/migraine-botox" className="text-purple-300 hover:text-purple-200 text-sm underline">Migraine Treatment</Link>
                    <Link to="/bruxism-botox" className="text-purple-300 hover:text-purple-200 text-sm underline">Bruxism & TMJ</Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Baby Botox */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 text-white">Baby Botox: The Natural Approach</h2>
                
                <p className="text-gray-300 text-lg mb-6">
                  "Baby Botox" refers to a technique using smaller doses distributed across more 
                  injection points. This creates subtle, natural-looking results that soften lines 
                  whilst maintaining facial expression and movement.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Benefits of Baby Botox</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-purple-400" />
                        Maintains natural facial expressions
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-purple-400" />
                        Subtle, "untouched" appearance
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-purple-400" />
                        Ideal for first-time patients
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-purple-400" />
                        Lower risk of "frozen" look
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Who It's For</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-purple-400" />
                        Those new to aesthetic treatments
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-purple-400" />
                        Patients wanting subtle enhancement
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-purple-400" />
                        Preventative treatment seekers
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-purple-400" />
                        Anyone prioritising natural results
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="text-gray-400 text-sm italic">
                  At Cosmedocs, we advocate for the "invisible art" philosophy—results that 
                  enhance your appearance without anyone knowing you've had treatment.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Botox for Men */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 text-white">Botox for Men</h2>
                
                <p className="text-gray-300 text-lg mb-6">
                  Male Botox treatments have seen significant growth, with the <a href="https://www.plasticsurgery.org/news/press-releases/new-statistics-reveal-the-shape-of-plastic-surgery" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:underline">American Society of Plastic Surgeons</a> reporting 
                  over 400% increase since 2010. Men typically seek treatment to maintain a 
                  competitive professional appearance whilst looking refreshed, not "done."
                </p>

                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Key Differences for Male Treatment</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-purple-300 font-medium mb-2">Higher Dosage Required</p>
                      <p className="text-gray-400 text-sm">
                        Men typically have larger, stronger facial muscles requiring 25-40% more 
                        product for equivalent results.
                      </p>
                    </div>
                    <div>
                      <p className="text-purple-300 font-medium mb-2">Masculine Aesthetics</p>
                      <p className="text-gray-400 text-sm">
                        Treatment is tailored to preserve masculine features—strong brows, 
                        defined forehead—whilst reducing lines.
                      </p>
                    </div>
                    <div>
                      <p className="text-purple-300 font-medium mb-2">Different Goals</p>
                      <p className="text-gray-400 text-sm">
                        Most men want to look less tired or stressed, not younger. Subtle 
                        treatment achieves this naturally.
                      </p>
                    </div>
                    <div>
                      <p className="text-purple-300 font-medium mb-2">Discreet Results</p>
                      <p className="text-gray-400 text-sm">
                        The goal is undetectable improvement—colleagues notice you look better, 
                        not that you've had treatment.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 text-sm">
                  Our practitioners have extensive experience with male facial anatomy and aesthetics, 
                  ensuring results that look natural and maintain masculine characteristics.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Results Timeline */}
        <section id="results-timeline" className="py-20 bg-black">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-8 text-white">Results Timeline & Longevity</h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-500/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-purple-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Days 1-3: Onset</h3>
                      <p className="text-gray-400">
                        Initial effects begin. You may notice subtle changes in muscle movement. 
                        Some patients experience mild redness or swelling at injection sites.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-500/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <Activity className="w-6 h-6 text-purple-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Days 7-14: Peak Effect</h3>
                      <p className="text-gray-400">
                        Full results become visible. Lines are smoothed and treated muscles are 
                        relaxed. This is the optimal time for a follow-up assessment if needed.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-500/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-purple-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Months 3-6: Duration</h3>
                      <p className="text-gray-400">
                        Results typically last 3-6 months. Duration varies by individual metabolism, 
                        treatment area, dosage, and lifestyle factors. Regular treatments often 
                        extend longevity over time.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Factors Affecting Duration</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-purple-400 mt-1" />
                      <span><strong className="text-gray-300">Metabolism:</strong> Faster metabolism may reduce longevity</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-purple-400 mt-1" />
                      <span><strong className="text-gray-300">Treatment area:</strong> High-movement areas may wear faster</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-purple-400 mt-1" />
                      <span><strong className="text-gray-300">Dosage:</strong> Higher doses may last longer</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-purple-400 mt-1" />
                      <span><strong className="text-gray-300">Consistency:</strong> Regular treatments often extend duration</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Botox vs Fillers */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 text-white">How Botox Fits Into Facial Rejuvenation</h2>
                
                <p className="text-gray-300 mb-8">
                  Understanding the difference between Botox and <Link to="/dermal-fillers" className="text-purple-300 hover:underline">dermal fillers</Link> helps 
                  you make informed decisions about your treatment plan.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card className="bg-gray-900/50 border-gray-800">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-4">Botox</h3>
                      <p className="text-purple-300 text-sm mb-4">Relaxes muscles → Reduces dynamic wrinkles</p>
                      <ul className="space-y-2 text-gray-400 text-sm">
                        <li>• Lines that appear with expression</li>
                        <li>• Forehead, frown lines, crow's feet</li>
                        <li>• Preventative treatment</li>
                        <li>• Results last 3-6 months</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gray-900/50 border-gray-800">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-4">Dermal Fillers</h3>
                      <p className="text-purple-300 text-sm mb-4">Adds volume → Restores lost fullness</p>
                      <ul className="space-y-2 text-gray-400 text-sm">
                        <li>• Lines present at rest</li>
                        <li>• Cheeks, lips, nasolabial folds</li>
                        <li>• Volume restoration</li>
                        <li>• Results last 6-18 months</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <p className="text-gray-400 text-sm">
                  Many patients benefit from combining both treatments. Botox addresses muscle-related 
                  lines whilst fillers restore volume and contour. During your consultation, we'll 
                  recommend the best approach for your goals.
                </p>
                
                <div className="mt-6">
                  <Link 
                    to="/dermal-fillers" 
                    className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 font-medium"
                  >
                    Learn about Dermal Fillers <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Choosing a Clinic */}
        <section id="choosing-clinic" className="py-20 bg-black">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 text-white">Choosing a Botox Clinic in London</h2>
                
                <p className="text-gray-300 text-lg mb-8">
                  With countless clinics offering Botox in London, knowing what to look for 
                  ensures you receive safe, effective treatment with natural results.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card className="bg-gray-900/50 border-gray-800">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Stethoscope className="w-6 h-6 text-purple-300" />
                        <h3 className="text-lg font-semibold text-white">Doctor-Led Care</h3>
                      </div>
                      <p className="text-gray-400 text-sm">
                        Ensure treatments are performed or supervised by qualified medical professionals. 
                        Doctors and prescribing nurses have comprehensive training in facial anatomy and 
                        can handle any complications.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gray-900/50 border-gray-800">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Building className="w-6 h-6 text-purple-300" />
                        <h3 className="text-lg font-semibold text-white">Clinic Credentials</h3>
                      </div>
                      <p className="text-gray-400 text-sm">
                        Look for CQC registration, professional memberships, and established reputation. 
                        Harley Street clinics typically maintain high standards due to the area's 
                        medical heritage.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gray-900/50 border-gray-800">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Users className="w-6 h-6 text-purple-300" />
                        <h3 className="text-lg font-semibold text-white">Consultation Process</h3>
                      </div>
                      <p className="text-gray-400 text-sm">
                        A thorough consultation should assess your concerns, explain options, 
                        and set realistic expectations. Avoid clinics that pressure you or skip 
                        this essential step.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gray-900/50 border-gray-800">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Star className="w-6 h-6 text-purple-300" />
                        <h3 className="text-lg font-semibold text-white">Reviews & Results</h3>
                      </div>
                      <p className="text-gray-400 text-sm">
                        Check verified reviews and before/after galleries. Consistent positive 
                        feedback and natural-looking results indicate reliable practitioners.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Why Cosmedocs */}
                <div className="bg-gradient-to-r from-purple-900/30 to-gray-900/50 border border-purple-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Why Patients Choose Cosmedocs</h3>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <p className="text-3xl font-bold text-purple-300 mb-2">Since 2007</p>
                      <p className="text-gray-400 text-sm">Harley Street presence</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-purple-300 mb-2">1M+</p>
                      <p className="text-gray-400 text-sm">Treatments performed</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-purple-300 mb-2">4.9★</p>
                      <p className="text-gray-400 text-sm">Patient rating</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-700">
                    <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-300">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-purple-400" />
                        Doctor-led treatments
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-purple-400" />
                        CQC registered clinic
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-purple-400" />
                        Premium, licensed products
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-purple-400" />
                        Comprehensive aftercare
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Safety, Regulation & Consultation */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 text-white">Safety, Regulation & Your Consultation</h2>
                
                <div className="prose prose-invert max-w-none mb-8">
                  <p className="text-gray-300 mb-6">
                    Botox has an excellent safety profile when administered by trained medical professionals. 
                    It's approved by the <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/103000s5316s5319s5323s5326s5331lbl.pdf" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:underline">FDA</a>, 
                    MHRA, and regulatory bodies worldwide, with over 30 years of clinical use.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-purple-300" />
                      UK Regulations
                    </h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                      <li>• Botox is a prescription-only medicine (POM)</li>
                      <li>• Must be prescribed by a doctor, nurse prescriber, or dentist</li>
                      <li>• Face-to-face consultation required before prescription</li>
                      <li>• Clinics must be CQC registered</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-purple-300" />
                      During Your Consultation
                    </h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                      <li>• Full medical history review</li>
                      <li>• Discussion of concerns and goals</li>
                      <li>• Explanation of treatment options</li>
                      <li>• Realistic expectations set</li>
                      <li>• Informed consent obtained</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-900/30 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Contraindications</h3>
                  <p className="text-gray-400 text-sm mb-3">
                    Botox is not suitable if you:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-2 text-gray-400 text-sm">
                    <li>• Are pregnant or breastfeeding</li>
                    <li>• Have a neuromuscular disorder</li>
                    <li>• Have infection at the injection site</li>
                    <li>• Are allergic to botulinum toxin</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Condensed Preparation & Aftercare */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-8 text-white">Preparation & Aftercare</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-gray-900/50 border-gray-800">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-white mb-4">Before Treatment</h3>
                      <ul className="space-y-2 text-gray-400 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-purple-400 mt-1" />
                          <span>Avoid blood thinners (aspirin, ibuprofen) for 7 days</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-purple-400 mt-1" />
                          <span>Limit alcohol 24-48 hours before</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-purple-400 mt-1" />
                          <span>Arrive with clean, makeup-free skin</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-purple-400 mt-1" />
                          <span>Inform practitioner of all medications</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gray-900/50 border-gray-800">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-white mb-4">After Treatment</h3>
                      <ul className="space-y-2 text-gray-400 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-purple-400 mt-1" />
                          <span>Stay upright for 4 hours post-treatment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-purple-400 mt-1" />
                          <span>Avoid touching or rubbing treated areas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-purple-400 mt-1" />
                          <span>Skip exercise, saunas, and alcohol for 24 hours</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-purple-400 mt-1" />
                          <span>Avoid facials and massages for 2 weeks</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
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
                <p className="text-gray-300">Over 2 million treatments since 2007</p>
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
                  <Shield className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Quality</h3>
                <p className="text-gray-300">Premium FDA-approved products only</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="text-purple-600" size={24} />
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
                  <Stethoscope className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Doctor-Led</h3>
                <p className="text-gray-300">All treatments by qualified doctors</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section id="faqs" className="py-20 bg-accent">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-8 text-white">Frequently Asked Questions</h2>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="what-is" className="border-gray-700">
                    <AccordionTrigger className="text-white hover:text-purple-300">What exactly is Botox?</AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      Botox is a brand name for botulinum toxin type A, a purified protein that temporarily 
                      relaxes targeted muscles. It has been safely used for over 30 years in both medical 
                      and cosmetic applications.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="pain" className="border-gray-700">
                    <AccordionTrigger className="text-white hover:text-purple-300">Does Botox hurt?</AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      Most patients describe Botox injections as a minor pinch. We use ultra-fine needles 
                      and can apply numbing cream if desired. The procedure is quick, typically completed 
                      in 10-20 minutes.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="safe" className="border-gray-700">
                    <AccordionTrigger className="text-white hover:text-purple-300">Is Botox safe?</AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      When administered by qualified medical professionals, Botox has an excellent safety 
                      record. It is approved by regulatory bodies worldwide and has been used clinically 
                      for over three decades. Side effects are typically mild and temporary.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="results" className="border-gray-700">
                    <AccordionTrigger className="text-white hover:text-purple-300">When will I see results?</AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      Initial effects typically appear within 3-5 days, with full results visible at 
                      10-14 days. Results generally last 3-6 months, depending on individual factors 
                      and treatment area.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="natural" className="border-gray-700">
                    <AccordionTrigger className="text-white hover:text-purple-300">Will I look frozen or unnatural?</AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      Not with skilled practitioners. The goal is to relax muscles enough to reduce 
                      wrinkles whilst maintaining natural facial expression. The "frozen" look comes from 
                      over-treatment, which we avoid through careful dosing and technique.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="suitable" className="border-gray-700">
                    <AccordionTrigger className="text-white hover:text-purple-300">Who is Botox suitable for?</AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      Botox is suitable for adults aged 18+ seeking to reduce or prevent facial lines. 
                      It works well for preventative treatment in your 20s-30s and corrective treatment 
                      for established lines. It is not recommended during pregnancy or breastfeeding.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="difference" className="border-gray-700">
                    <AccordionTrigger className="text-white hover:text-purple-300">What is the difference between Botox and fillers?</AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      Botox relaxes muscles to reduce dynamic wrinkles (lines with movement). Fillers 
                      add volume to restore lost fullness and soften static lines. They treat different 
                      concerns and are often used together for comprehensive results. Learn more on our{' '}
                      <Link to="/dermal-fillers" className="text-purple-300 hover:underline">dermal fillers page</Link>.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="mt-8 text-center">
                  <Link 
                    to="/botox-faqs" 
                    className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 font-medium"
                  >
                    View all Botox FAQs <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Client Reviews */}
        <ClientReviews />

        {/* Soft CTA */}
        <section className="py-20 bg-black">
          <div className="page-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-900/30 to-gray-900/50 border border-purple-500/30 rounded-2xl p-12 max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Ready to Learn More?</h2>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                Book a consultation to discuss your concerns and discover whether Botox is right for you. 
                Our doctors provide personalised advice with no pressure or obligation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6"
                  onClick={() => window.open('https://med.as.me/harleystreet', '_blank')}
                >
                  Book Consultation
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6"
                  onClick={() => window.location.href = 'tel:03330551503'}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  0333 055 1503
                </Button>
                <Button 
                  variant="outline" 
                  className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white rounded-full px-8 py-6"
                  onClick={() => window.open('https://wa.me/447535076003', '_blank')}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h2>Botox London - Complete Guide to Anti-Wrinkle Treatment</h2>
          <p>
            Botox London is the most popular non-surgical cosmetic treatment in the UK. This comprehensive guide covers 
            everything you need to know about anti-wrinkle injections, from how botulinum toxin works to choosing the 
            right clinic. Cosmedocs on Harley Street has been providing doctor-led Botox treatments since 2007, with 
            over 1 million procedures performed. Our approach focuses on natural results that enhance your appearance 
            without looking "done." Whether you're considering preventative Botox in your 20s or seeking corrective 
            treatment for established lines, understanding the science and selecting qualified practitioners is essential. 
            Botox works by temporarily relaxing targeted facial muscles, reducing dynamic wrinkles caused by repeated 
            expressions. Results typically appear within 3-5 days, with full effects visible at 10-14 days, lasting 
            3-6 months. Popular treatment areas include forehead lines, frown lines (glabella), crow's feet, and lower 
            face applications. The procedure takes just 10-20 minutes with no downtime, making it convenient for busy 
            lifestyles. For men, Botox treatments are tailored to maintain masculine features whilst addressing concerns 
            like looking tired or stressed. Baby Botox offers a subtle approach using lower doses for natural-looking 
            results. When choosing a Botox clinic in London, look for doctor-led care, CQC registration, transparent 
            consultation processes, and verified patient reviews. Harley Street remains the gold standard for aesthetic 
            medicine, with clinics maintaining the highest professional standards. At Cosmedocs, we believe in the 
            "invisible art" philosophy—results that speak without words.
          </p>
        </div>
      </div>
    </>
  );
}
