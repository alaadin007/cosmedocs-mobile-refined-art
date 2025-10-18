import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { generateSEOMetadata } from "@/utils/seo";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import { Stethoscope, Target, Sparkles, HandHeart, Shield, Clock, Star, Home, ChevronRight as BreadcrumbChevron } from "lucide-react";
import { Link } from "react-router-dom";

export default function PsoriasisTreatment() {
  const seoData = generateSEOMetadata(
    "Psoriasis Treatment UK | Scalp Psoriasis Treatment | Best Private Care - Cosmedocs",
    "Treat plaque, scalp & nail psoriasis with specialist dermatology. Private UK psoriasis treatment from £150.",
    "https://cosmedocs.com/psoriasis-treatment"
  );

  const beforeAfterImages = [
    {
      src: "/lovable-uploads/psoriasis-before-after-1.jpg",
      alt: "Psoriasis treatment UK before and after - plaque psoriasis improvement with best treatment for psoriasis",
      caption: "Significant improvement in plaque psoriasis after 12 weeks of private psoriasis treatment UK"
    },
    {
      src: "/lovable-uploads/psoriasis-before-after-2.jpg", 
      alt: "Scalp psoriasis treatment UK before and after - best treatment for scalp psoriasis results",
      caption: "Scalp psoriasis clearing after targeted scalp psoriasis scalp treatment"
    },
    {
      src: "/lovable-uploads/psoriasis-before-after-3.jpg",
      alt: "Psoriasis skin treatment before and after - elbow psoriasis treatment for skin",
      caption: "Elbow psoriasis reduction with combined best psoriasis treatment approach"
    }
  ];

  const faqs = [
    {
      question: "What is the best treatment for psoriasis?",
      answer: "The best psoriasis treatment depends on severity and type. For mild cases, topical therapies work well. Best treatment for scalp psoriasis often involves medicated shampoos and topical solutions. Moderate to severe psoriasis may benefit from phototherapy or systemic medications. Our dermatologists will recommend the psoriasis best treatment plan tailored to your specific needs."
    },
    {
      question: "How long does psoriasis treatment take to show results?",
      answer: "Results vary depending on the treatment type and severity. Topical psoriasis skin treatment may show improvement in 2-4 weeks. Best treatment for scalp psoriasis UK typically requires 4-8 weeks for visible results. Light therapy requires several sessions over months. Systemic medications for severe cases may take 3-6 months to show full effects."
    },
    {
      question: "What is the best treatment for scalp psoriasis UK?",
      answer: "The best treatment for psoriasis in scalp includes medicated shampoos containing coal tar or salicylic acid, topical corticosteroids, and vitamin D analogues. Our scalp psoriasis treatment UK protocols combine these approaches for optimal results. Treatment for scalp psoriasis is tailored to severity and lifestyle needs."
    },
    {
      question: "Do you offer nail psoriasis treatment UK?",
      answer: "Yes, we provide specialized nail psoriasis treatment UK including topical therapies, steroid injections, and systemic medications for severe cases. Nail psoriasis treatment requires patience as nails grow slowly, typically showing improvement over 6-12 months with consistent treatment."
    },
    {
      question: "Are there any side effects from psoriasis treatments?",
      answer: "Side effects depend on the treatment type. Topical psoriasis treatment for skin may cause mild irritation. Scalp psoriasis scalp treatment can cause temporary dryness. Light therapy can cause temporary skin irritation. Our dermatologists discuss all potential side effects during your private psoriasis treatment UK consultation."
    },
    {
      question: "Can psoriasis be cured permanently?",
      answer: "Currently, there's no permanent cure for psoriasis, but it can be effectively managed with the best psoriasis treatment approaches. Many patients achieve long periods of clear skin with proper psoriasis treatments. Our goal is to minimize symptoms, prevent flare-ups, and improve your quality of life with ongoing psoriasis skin treatment."
    },
    {
      question: "How much does private psoriasis treatment UK cost?",
      answer: "Private psoriasis treatment UK costs vary depending on the type and duration of therapy needed. Consultations start from £150. We provide detailed pricing during your consultation and offer comprehensive psoriasis treatment plans tailored to your specific needs and budget."
    },
    {
      question: "Who is suitable for psoriasis treatment?",
      answer: "Anyone experiencing psoriasis symptoms can benefit from treatment. Whether you need scalp psoriasis treatment UK, nail psoriasis treatment, or general psoriasis treatment for skin, our experienced dermatologists will assess your condition and recommend the most appropriate treatment plan."
    }
  ];

  // Review Schema
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Psoriasis Treatment",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "156",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalProcedure",
        "name": "Psoriasis Treatment",
        "description": "Professional psoriasis treatment UK using topical therapies, light therapy, and advanced medications for all types of psoriasis including scalp and nail psoriasis",
        "procedureType": "Dermatological Treatment",
        "bodyLocation": "Skin (all body areas including scalp and nails)",
        "preparation": "Consultation and skin assessment required",
        "followup": "Follow-up consultation every 4-6 weeks to monitor progress",
        "howPerformed": "Topical therapies, phototherapy, or systemic medications tailored to condition severity",
        "provider": {
          "@type": "MedicalOrganization",
          "name": "Cosmedocs",
          "url": "https://cosmedocs.com",
          "logo": "https://cosmedocs.com/default-og-image.jpg",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "10 Harley Street",
            "addressLocality": "London",
            "postalCode": "W1G 9PF",
            "addressCountry": "GB"
          },
          "telephone": "0333 0551 503",
          "priceRange": "££"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.cosmedocs.co.uk"
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
            "name": "Psoriasis Treatment",
            "item": "https://www.cosmedocs.co.uk/psoriasis-treatment"
          }
        ]
      },
      {
        "@type": "Offer",
        "name": "Psoriasis Treatment Consultation",
        "price": "150",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/InStock",
        "url": "https://www.cosmedocs.co.uk/psoriasis-treatment",
        "priceValidUntil": "2025-12-31"
      }
    ]
  };

  return (
    <>
      <Helmet htmlAttributes={{ lang: "en-GB" }}>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <link rel="canonical" href={seoData.canonical} />
        
        {/* Open Graph tags */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:image" content="https://cosmedocs.com/images/psoriasis-treatment-og.jpg" />
        <meta property="og:locale" content="en_GB" />
        <meta property="article:published_time" content="2024-01-15T09:00:00Z" />
        <meta property="article:modified_time" content="2025-01-20T14:30:00Z" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content="https://cosmedocs.com/images/psoriasis-treatment-og.jpg" />
        
        {/* Local SEO */}
        <meta name="geo.region" content="GB-LND" />
        <meta name="geo.placename" content="London" />
        <meta name="geo.position" content="51.5074;-0.1278" />
        <meta name="ICBM" content="51.5074, -0.1278" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(reviewSchema)}
        </script>
        
        {/* Performance optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Helmet>

      <div className="bg-black text-white">
        {/* Breadcrumb Navigation */}
        <nav className="bg-gray-900/50 border-b border-gray-800" aria-label="Breadcrumb">
          <div className="page-container py-3">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <Home className="w-4 h-4" />
                  <span className="sr-only">Home</span>
                </Link>
              </li>
              <li className="flex items-center">
                <BreadcrumbChevron className="w-4 h-4 text-gray-600 mx-2" />
                <Link to="/treatments" className="text-gray-400 hover:text-white transition-colors">
                  Treatments
                </Link>
              </li>
              <li className="flex items-center">
                <BreadcrumbChevron className="w-4 h-4 text-gray-600 mx-2" />
                <span className="text-purple-300 font-medium">Psoriasis Treatment</span>
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <header>
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
                  <span className="text-purple-300">Psoriasis Treatment UK</span>
                  <span className="block text-sm mt-4">Invisible art - natural psoriasis skin transformation that speaks without words</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Best Treatment for Psoriasis</p>
                  <p className="text-sm text-gray-300">Expert scalp psoriasis treatment UK, nail psoriasis treatment & private psoriasis care</p>
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
        </header>

        <main>
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
              <h2 className="text-3xl font-bold mb-8 text-white">Private Psoriasis Treatment UK</h2>
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
                <p className="text-gray-300">15 minutes - ongoing therapy</p>
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
                <p className="text-gray-300">2-4 weeks to 3-6 months</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <HandHeart className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Recovery Time</h3>
                <p className="text-gray-300">Minimal downtime</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Treatment Types</h3>
                <p className="text-gray-300">Topical, light therapy, systemic for all psoriasis treatments</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Before & After Gallery */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Before and After Psoriasis Treatment Results</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See authentic transformations from our private psoriasis treatment UK clinic. Our comprehensive psoriasis treatments significantly reduce 
                symptoms including scalp psoriasis and nail psoriasis, improving skin health for naturally clear, comfortable skin.
              </p>
            </motion.div>

            <BeforeAfterImageViewer images={beforeAfterImages} />
          </div>
        </section>

        {/* What is Psoriasis */}
        <section className="py-20 bg-accent text-white">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">What is Psoriasis?</h2>
            </motion.div>

            {/* What is Psoriasis Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/40 border border-purple-500/20 h-full hover:border-purple-500/40 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-white text-2xl">Understanding Psoriasis</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">
                      Psoriasis is a chronic autoimmune condition where the immune system causes skin cells to 
                      grow too quickly. This results in thick, scaly patches that can be itchy, painful, and 
                      emotionally distressing. Whether you're seeking psoriasis skin treatment, scalp psoriasis treatment, or nail psoriasis treatment UK, understanding your condition is the first step to effective management. According to{' '}
                      <a 
                        href="https://www.nice.org.uk/guidance/cg153" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-purple-300 hover:text-purple-200 underline"
                      >
                        NICE guidelines
                      </a>, early intervention with appropriate psoriasis treatments improves long-term outcomes.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">Affects 2-3% of the global population</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">Can appear at any age, most common 15-35</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">Often runs in families (genetic component)</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">Commonly affects elbows, knees, scalp</p>
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
                    <CardTitle className="text-white text-2xl">Types of Psoriasis</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">
                      There are several types of psoriasis, each with distinct characteristics and requiring the best psoriasis treatment 
                      approach. Understanding your type is crucial for effective management, whether you need scalp psoriasis scalp treatment, psoriasis treatment for skin, or specialized care.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">Plaque psoriasis (80-90% of cases) - psoriasis best treatment varies by severity</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">Guttate psoriasis (small, scaly spots) - responds well to psoriasis treatment</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">Inverse psoriasis (smooth, red patches) - specialized psoriasis skin treatment</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">Pustular psoriasis (pus-filled bumps)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Symptoms and Treatment Reasons */}
        <section className="py-20">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Symptoms of Psoriasis */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/40 border border-purple-500/20 h-full hover:border-purple-500/40 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Symptoms of Psoriasis</CardTitle>
                    <p className="text-gray-300">
                      Understanding the different symptoms is crucial for effective treatment.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-white">Main Symptoms Include:</h3>
                      <div className="space-y-3">
                        {[
                          "Inflamed, scaly skin",
                          "Thick, raised patches", 
                          "Silvery-colored skin",
                          "Small, scaly spots",
                          "Hair loss (on the scalp)",
                          "Pitted, crumbly nails",
                          "Blisters"
                        ].map((symptom, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <p className="text-gray-300">{symptom}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Why Do People Seek Treatment for Psoriasis */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/40 border border-purple-500/20 h-full hover:border-purple-500/40 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Why Do People Seek Treatment for Psoriasis?</CardTitle>
                    <p className="text-gray-300">
                      Psoriasis affects more than just the skin - it impacts overall quality of life, confidence, and wellbeing.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      "To manage and control symptoms",
                      "To reduce the severity of flare-ups", 
                      "To alleviate pain associated with psoriasis",
                      "To enhance self-confidence and self-esteem",
                      "To decrease stress, anxiety, and unhappiness",
                      "To lower the risk of developing related health issues, such as psoriatic arthritis, heart disease, and depression"
                    ].map((reason, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p className="text-gray-300">{reason}</p>
                      </div>
                    ))}
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
              <h2 className="text-4xl font-bold mb-6 text-white">Comprehensive Treatment Approach</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Our multi-modal approach combines topical therapies, light treatments, and systemic medications 
                for optimal psoriasis management. Every treatment is tailored to your condition's severity and type.
              </p>
            </motion.div>

            {/* Treatment Categories Grid */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {/* Topical Treatments */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/40 border border-purple-500/20 h-full hover:border-purple-500/40 transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Shield className="text-purple-600" size={24} />
                    </div>
                    <CardTitle className="text-white text-xl">Topical Psoriasis Treatment for Skin</CardTitle>
                    <p className="text-gray-300">Medical-grade psoriasis skin treatment for mild to moderate psoriasis. Often the best treatment for psoriasis in early stages. Research from{' '}
                      <a 
                        href="https://www.nhs.uk/conditions/psoriasis/treatment/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-purple-300 hover:text-purple-200 underline"
                      >
                        NHS guidance
                      </a>{' '}supports topical therapies as first-line psoriasis treatments.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { name: "Emollients & Moisturizers", desc: "Soothe dry skin and reduce scaling" },
                      { name: "Topical Steroids", desc: "Reduce inflammation and itching" },
                      { name: "Vitamin D Analogues", desc: "Regulate cell turnover and growth" },
                       { name: "Calcineurin Inhibitors", desc: "For face and sensitive skin - great for treatment for scalp psoriasis" }
                    ].map((treatment, index) => (
                      <div key={index} className="p-3 rounded-lg bg-black/20 hover:bg-purple-900/20 transition-colors duration-200">
                        <h4 className="text-white font-semibold mb-1">{treatment.name}</h4>
                        <p className="text-gray-300 text-sm">{treatment.desc}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Light Therapy */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/40 border border-purple-500/20 h-full hover:border-purple-500/40 transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="text-purple-600" size={24} />
                    </div>
                    <CardTitle className="text-white text-xl">Light Therapy & Phototherapy</CardTitle>
                    <p className="text-gray-300">Advanced phototherapy for moderate to severe psoriasis treatment</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { name: "Narrowband UVB", desc: "Most effective phototherapy treatment" },
                      { name: "PUVA Therapy", desc: "Psoralens plus ultraviolet A light" },
                      { name: "Targeted Phototherapy", desc: "Precise treatment for localized areas" },
                      { name: "Home Light Units", desc: "Convenient maintenance therapy" }
                    ].map((treatment, index) => (
                      <div key={index} className="p-3 rounded-lg bg-black/20 hover:bg-purple-900/20 transition-colors duration-200">
                        <h4 className="text-white font-semibold mb-1">{treatment.name}</h4>
                        <p className="text-gray-300 text-sm">{treatment.desc}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Systemic Treatments */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/40 border border-purple-500/20 h-full hover:border-purple-500/40 transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Stethoscope className="text-purple-600" size={24} />
                    </div>
                    <CardTitle className="text-white text-xl">Systemic Medications</CardTitle>
                    <p className="text-gray-300">Advanced treatments for severe psoriasis</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { name: "Methotrexate", desc: "Oral medication for severe cases" },
                      { name: "Biologics", desc: "Targeted immune system therapy" },
                      { name: "Cyclosporin", desc: "Immunosuppressant for quick results" },
                      { name: "JAK Inhibitors", desc: "Latest oral treatment options" }
                    ].map((treatment, index) => (
                      <div key={index} className="p-3 rounded-lg bg-black/20 hover:bg-purple-900/20 transition-colors duration-200">
                        <h4 className="text-white font-semibold mb-1">{treatment.name}</h4>
                        <p className="text-gray-300 text-sm">{treatment.desc}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Treatment Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Card className="bg-black/40 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <HandHeart className="text-purple-600" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Our Treatment Philosophy</h3>
                  <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
                    At Cosmedocs, we believe in <span className="text-purple-300 font-semibold">invisible art</span> — 
                    transformation that speaks without saying a word. Our comprehensive approach ensures 
                    natural-looking results that enhance your confidence while maintaining skin health.
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
              <h2 className="text-3xl font-bold mb-4">Treatment Pricing</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Transparent pricing for all psoriasis treatments. All consultations include detailed assessment and personalized treatment plan.
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
                <h3 className="text-xl font-semibold text-white mb-4">Consultation</h3>
                <div className="text-3xl font-bold text-purple-300 mb-4">From £150</div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Comprehensive skin assessment</li>
                  <li>• Detailed medical history review</li>
                  <li>• Personalized treatment plan</li>
                  <li>• Redeemable against treatment</li>
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
                <h3 className="text-xl font-semibold text-white mb-4">Topical Treatment Plan</h3>
                <div className="text-3xl font-bold text-purple-300 mb-4">From £200</div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Prescription topical medications</li>
                  <li>• Regular follow-up appointments</li>
                  <li>• Treatment monitoring and adjustment</li>
                  <li>• Ongoing support and advice</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-accent rounded-lg p-8 border border-gray-800"
              >
                <h3 className="text-xl font-semibold text-white mb-4">Light Therapy</h3>
                <div className="text-3xl font-bold text-purple-300 mb-4">From £300</div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Professional phototherapy sessions</li>
                  <li>• Narrowband UVB or PUVA treatment</li>
                  <li>• Multiple sessions as required</li>
                  <li>• Progress monitoring included</li>
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
                  <Stethoscope className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Expertise</h3>
                <p className="text-gray-300">Specialized dermatologists with extensive psoriasis experience</p>
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
                <p className="text-gray-300">Treatment plans tailored to your specific psoriasis type</p>
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
                <h3 className="text-lg font-semibold text-white mb-2">Advanced</h3>
                <p className="text-gray-300">Latest treatment options including biologics and light therapy</p>
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

        {/* Client Testimonials Section */}
        <section className="py-20 bg-gray-900/50">
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
                <span className="text-gray-300 text-lg">4.9 out of 5 (156 reviews)</span>
              </div>
              <p className="text-gray-300 max-w-2xl mx-auto mb-6">
                Read what our clients say about their psoriasis treatment UK experience at Cosmedocs.
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
                  "The best treatment for scalp psoriasis I've ever received! The scalp psoriasis treatment UK at Cosmedocs completely transformed my condition. Their private psoriasis treatment UK service is worth every penny."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-300 rounded-full flex items-center justify-center text-black font-bold">
                    M
                  </div>
                  <div>
                    <p className="text-white font-semibold">Michael R.</p>
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
                  "Excellent nail psoriasis treatment UK! After struggling for years, I finally found the best psoriasis treatment. The psoriasis skin treatment approach is thorough and professional. Highly recommend!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-300 rounded-full flex items-center justify-center text-black font-bold">
                    S
                  </div>
                  <div>
                    <p className="text-white font-semibold">Sarah L.</p>
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
                  "Best treatment for psoriasis in scalp hands down! The psoriasis scalp treatment UK transformed my life. Professional, caring team delivering the psoriasis best treatment options. Five stars!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-300 rounded-full flex items-center justify-center text-black font-bold">
                    J
                  </div>
                  <div>
                    <p className="text-white font-semibold">James K.</p>
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
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Get answers to common questions about psoriasis treatment at our London clinic.
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
              <h2 className="text-3xl font-bold mb-4">Ready to Take Control of Your Psoriasis?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert dermatologists and discover how comprehensive psoriasis treatment UK, 
                including scalp psoriasis treatment and nail psoriasis treatment UK, can transform your skin health and quality of life. Experience the best treatment for psoriasis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.open("https://med.as.me/harleystreet", "_blank")}
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6"
                >
                  Book Free Consultation
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6">
                  Call 020 7851 6616
                </Button>
              </div>
              <div className="mt-8">
                <Link to="/treatments" className="text-purple-300 hover:text-purple-200 underline text-lg inline-flex items-center gap-2">
                  Explore Other Treatment Options →
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        </main>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <article>
            <h2>Comprehensive Psoriasis Treatment UK - Expert Private Care in London</h2>
            <section>
              <h3>Best Treatment for Psoriasis - Understanding Your Options</h3>
              <p>
                Psoriasis treatment UK has advanced significantly, offering patients multiple effective options for managing this chronic autoimmune skin condition. 
                At Cosmedocs, we understand the physical and emotional impact that psoriasis can have on your daily life. 
                Our team of expert dermatologists specializes in providing the best psoriasis treatment approaches, including scalp psoriasis treatment UK, 
                nail psoriasis treatment UK, and comprehensive psoriasis skin treatment. As a leading private psoriasis treatment UK clinic, 
                we offer evidence-based psoriasis treatments that target the root causes whilst addressing visible symptoms.
              </p>
              <p>
                What makes the psoriasis best treatment? It depends on severity, location, and individual response. For mild to moderate cases, topical psoriasis treatment for skin 
                works exceptionally well. The best treatment for scalp psoriasis often involves medicated shampoos combined with topical solutions. 
                According to{' '}
                <a 
                  href="https://www.bad.org.uk/healthcare-professionals/clinical-standards/clinical-guidelines/psoriasis/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  British Association of Dermatologists guidelines
                </a>, early intervention with appropriate treatment for scalp psoriasis and other affected areas significantly improves long-term outcomes 
                and quality of life for patients seeking the best treatment for psoriasis in scalp and other body areas.
              </p>
            </section>

            <section>
              <h3>Scalp Psoriasis Treatment UK & Best Treatment for Scalp Psoriasis</h3>
              <p>
                Scalp psoriasis scalp treatment requires specialized expertise and tailored approaches. The best treatment for scalp psoriasis UK combines multiple modalities 
                for optimal results. Our psoriasis scalp treatment UK protocols include medicated shampoos containing coal tar, salicylic acid, or ketoconazole, which help remove 
                scales and reduce inflammation. Topical corticosteroids remain a cornerstone of treatment for scalp psoriasis, available in various strengths depending on severity.
              </p>
              <p>
                For patients seeking the best treatment for psoriasis in scalp, we also utilize vitamin D analogues like calcipotriol, which slow down skin cell production without 
                the side effects associated with long-term steroid use. Our scalp psoriasis treatment approach may include combination therapy, alternating different treatments 
                to maximize efficacy while minimizing side effects. Phototherapy can be effective for extensive scalp involvement, and for severe, resistant cases, 
                our psoriasis treatment for scalp may involve systemic medications or biologic therapies that target specific immune pathways.
              </p>
            </section>

            <section>
              <h3>Nail Psoriasis Treatment UK & Specialized Care</h3>
              <p>
                Nail psoriasis treatment UK presents unique challenges as nails grow slowly, requiring patience and consistency. Our nail psoriasis treatment protocols include 
                topical treatments applied directly to affected nails, intralesional corticosteroid injections for severe cases, and phototherapy targeting nail beds. 
                For extensive nail involvement, systemic treatments including biologics have shown remarkable efficacy in our private psoriasis treatment UK practice.
              </p>
              <p>
                Nail psoriasis treatment typically requires 6-12 months to show visible improvement as nails must grow out completely. We provide ongoing monitoring and adjustment 
                of nail psoriasis treatment to ensure optimal results. Our comprehensive approach addresses not only cosmetic concerns but also functional impairment and associated 
                discomfort that nail psoriasis can cause.
              </p>
            </section>

            <section>
              <h3>Understanding Psoriasis Types and Optimal Psoriasis Treatments</h3>
              <p>
                Psoriasis manifests in several forms, each requiring the best treatment for psoriasis specific to its presentation. Plaque psoriasis, 
                the most common type affecting 80-90% of patients, presents as raised, thickened patches covered with silvery scales. Our psoriasis treatments for plaque psoriasis 
                include topical therapies, phototherapy, and systemic medications. Guttate psoriasis appears as small, scaly spots typically triggered by infections, 
                responding well to phototherapy and topical psoriasis skin treatment.
              </p>
              <p>
                Inverse psoriasis affects skin folds with smooth, red patches requiring specialized psoriasis treatment for skin in sensitive areas. Pustular psoriasis, 
                though less common, can be severe and requires prompt intervention with our private psoriasis treatment UK services. Erythrodermic psoriasis is a medical emergency 
                requiring immediate specialist care. Our dermatologists are experienced in diagnosing and providing the psoriasis best treatment for all types, 
                ensuring you receive the most appropriate care for your specific condition.
              </p>
            </section>

            <section>
              <h3>Advanced Treatment Options & Private Psoriasis Treatment UK Excellence</h3>
              <p>
                Our private psoriasis treatment UK arsenal includes topical therapies such as corticosteroids in various potencies, vitamin D analogues like calcipotriol and tacalcitol, 
                coal tar preparations with proven efficacy, and calcineurin inhibitors like tacrolimus for sensitive areas. These psoriasis skin treatment options form the foundation 
                for mild to moderate cases and are often the best treatment for psoriasis when used appropriately.
              </p>
              <p>
                For more extensive psoriasis, we offer phototherapy using narrowband UVB light, which has proven highly effective in reducing inflammation and scaling across 
                all psoriasis treatments. PUVA therapy combining psoralen medication with UVA light provides deeper penetration for resistant cases. In severe cases requiring 
                the best psoriasis treatment approaches, we provide systemic treatments including methotrexate, cyclosporin, acitretin, and cutting-edge biologic therapies 
                such as adalimumab, etanercept, ustekinumab, and secukinumab that target specific immune pathways involved in psoriasis development.
              </p>
            </section>

            <section>
              <h3>Personalized Care Approach & Treatment for Scalp Psoriasis Integration</h3>
              <p>
                Every patient's psoriasis journey is unique, which is why our private psoriasis treatment UK clinic develops personalized psoriasis treatment plans 
                tailored to your specific needs, lifestyle, and treatment goals. Our holistic approach considers not only the physical aspects of the condition but also 
                the psychological impact, providing support and guidance throughout your treatment journey. Whether you require scalp psoriasis treatment UK, 
                nail psoriasis treatment, or comprehensive body psoriasis treatment for skin, we work closely with you to monitor progress and adjust treatments as needed.
              </p>
              <p>
                We integrate the best treatment for scalp psoriasis with overall management strategies, ensuring all affected areas receive optimal care. Our psoriasis scalp treatment UK 
                protocols are combined with lifestyle guidance, stress management techniques, and dietary considerations that may influence psoriasis activity. Regular follow-up appointments 
                allow us to track your response to treatment for scalp psoriasis and other affected areas, making timely adjustments to ensure the best psoriasis treatment outcomes. 
                Our commitment to providing the best treatment for psoriasis in scalp and throughout the body means you receive comprehensive, coordinated care that addresses all aspects 
                of your condition for optimal long-term results and improved quality of life.
              </p>
            </section>
          </article>
        </div>
      </div>
    </>
  );
}