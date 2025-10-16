import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Phone, Clock, ShieldCheck, Award, Users, Activity, Syringe, CheckCircle, Home, ChevronRight } from "lucide-react";
import ClientReviews from "@/components/ClientReviews";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { generateSEOMetadata } from "@/utils/seo";

const LipFillerDissolve = () => {
  const seoData = generateSEOMetadata(
    "Lip Filler Dissolve London | £250 | Cosmedocs",
    "Professional lip filler dissolve London treatments. Expert hyaluronidase injections to correct unwanted filler complications. Safe dissolving from £250. Book consultation.",
    "/lip-filler-dissolve"
  );

  const beforeAfterImages = [
    { 
      src: "/lovable-uploads/6979990b-3579-4571-b139-3501a368919b.png", 
      alt: "Before and after lip filler dissolve showing immediate volume reduction London", 
      caption: "Immediate volume reduction after expert hyaluronidase treatment" 
    },
    { 
      src: "/lovable-uploads/4208979a-6544-4949-898f-4915a9791946.png", 
      alt: "Before and after lip filler correction dissolving migrated filler London", 
      caption: "Correcting migrated filler for restored natural lip shape" 
    },
    { 
      src: "/lovable-uploads/9992894b-4419-4f19-b98c-ca99a940c00c.png", 
      alt: "Before and after lip filler dissolve progression 24 hours London", 
      caption: "Progressive dissolving over 24 hours showing gradual improvement" 
    },
    { 
      src: "/lovable-uploads/012d959d-8c75-4a11-8259-57e3ac1ca493.png", 
      alt: "Before and after lip filler dissolve overfilled lips correction London", 
      caption: "Restoring natural proportions after dissolving overfilled lips" 
    },
    { 
      src: "/lovable-uploads/06549691-a99f-4a9f-a59c-590759bb449c.png", 
      alt: "Before and after lip filler dissolve asymmetry correction London", 
      caption: "Correcting asymmetry caused by uneven filler placement" 
    },
    { 
      src: "/lovable-uploads/04b9419a-7929-4b13-b879-4c94269599a9.png", 
      alt: "Before and after lip filler dissolve preparation for new treatment London", 
      caption: "Dissolving old filler before fresh lip enhancement treatment" 
    }
  ];

  const faqData = [
    {
      question: "How quickly does hyaluronidase dissolve lip filler?",
      answer: "Hyaluronidase begins dissolving lip filler immediately. You'll see noticeable volume reduction within 30 minutes, with full dissolution effects visible within 24-48 hours. The enzyme continues working for up to 2 weeks to completely break down all hyaluronic acid."
    },
    {
      question: "Is lip filler dissolving painful and what anaesthesia is used?",
      answer: "Lip filler dissolving involves minimal discomfort. We use topical anaesthetic cream and very fine needles. Most clients describe the sensation as mild stinging or pressure. The treatment is much more comfortable than the original filler injection."
    },
    {
      question: "Why might I need my lip fillers dissolved?",
      answer: "Common reasons include: overfilled or disproportionate lips, filler migration creating unnatural shapes, asymmetry or lumps, vascular complications, allergic reactions, or simply wanting to return to your natural lip shape before new treatment."
    },
    {
      question: "Can you dissolve lip filler done at other clinics?",
      answer: "Yes, we can safely dissolve lip filler regardless of where it was originally injected. Hyaluronidase works on all hyaluronic acid-based fillers. However, knowing the original filler brand helps us determine the optimal dissolving approach."
    },
    {
      question: "What are the side effects of lip filler dissolving?",
      answer: "Common side effects include temporary swelling, bruising, redness, and tenderness for 24-48 hours. Rare complications include allergic reaction to hyaluronidase or temporary over-dissolution. Our expert practitioners minimize all risks through careful assessment."
    },
    {
      question: "When can I get new lip filler after dissolving?",
      answer: "We recommend waiting 2-4 weeks after dissolving before new lip filler treatment. This allows complete healing, reduces inflammation, and ensures optimal placement of new filler for the best possible results."
    },
    {
      question: "How much does lip filler dissolving cost in London?",
      answer: "Our lip filler dissolving treatments start from £250, depending on the amount of hyaluronidase required and complexity of correction needed. We provide transparent pricing during your consultation with no hidden costs."
    },
    {
      question: "Will dissolving lip filler damage my natural lips?",
      answer: "No, hyaluronidase specifically targets hyaluronic acid filler without damaging your natural lip tissue. Your lips will return to their pre-filler state. Some clients report improved lip texture due to the hydrating effects of the treatment."
    },
    {
      question: "Can lip filler dissolving correct lumps and bumps?",
      answer: "Yes, hyaluronidase is highly effective at dissolving lumps, bumps, and irregularities caused by filler placement issues. The enzyme specifically targets these problem areas, smoothing out the lip texture for natural-looking results."
    },
    {
      question: "How do I know if I need lip filler dissolved?",
      answer: "Consider dissolving if you experience: unnatural lip shape, asymmetry, overfilling, filler migration, lumps or hardness, vascular compromise (blanching), or simply dissatisfaction with results. Our consultation will assess your specific situation."
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
        <meta name="keywords" content="lip filler dissolve London, dissolving lip filler, lip filler dissolver, lip filler dissolving, lip filler dissolving near me, dissolved lip filler, dissolve lip filler, lip filler dissolved before and after, dissolving lip filler before and after, how to dissolve lip filler, hyaluronidase injections London, lip filler correction UK, Harley Street" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "Cosmedocs",
            "description": "Expert lip filler dissolve and correction treatments in London UK",
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
            "availableService": {
              "@type": "MedicalProcedure",
              "name": "Lip Filler Dissolve Treatment"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "Lip Filler Dissolve Treatment",
            "description": "Professional hyaluronidase treatment to safely dissolve unwanted lip filler and correct complications",
            "procedureType": "Non-surgical cosmetic procedure",
            "followup": "Results visible within 24-48 hours, reassessment after 2 weeks",
            "preparation": "Consultation to assess filler type and treatment plan",
            "howPerformed": "Hyaluronidase enzyme injected to break down hyaluronic acid filler",
            "bodyLocation": "Lips"
          })}
        </script>
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
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Offer",
            "name": "Lip Filler Dissolve Treatment Packages",
            "description": "Professional lip filler correction and dissolving treatments",
            "priceCurrency": "GBP",
            "price": "250",
            "priceValidUntil": "2025-12-31",
            "availability": "https://schema.org/InStock",
            "url": seoData.canonical,
            "seller": {
              "@type": "MedicalBusiness",
              "name": "Cosmedocs"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.cosmedocs.com"
            }, {
              "@type": "ListItem",
              "position": 2,
              "name": "Lip Filler Dissolve",
              "item": seoData.canonical
            }]
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        {/* Breadcrumb Navigation */}
        <section className="py-4 bg-black border-b border-gray-800">
          <div className="page-container">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="text-gray-400 hover:text-purple-300 flex items-center gap-1">
                    <Home className="h-4 w-4" />
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-gray-600">
                  <ChevronRight className="h-4 w-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-purple-300">Lip Filler Dissolve</BreadcrumbPage>
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
                  <span className="text-purple-300">Lip Filler Dissolve London</span>
                  <span className="block text-sm mt-4">Invisible art - safe correction that restores without words</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Professional Hyaluronidase Treatment</p>
                  <p className="text-sm text-gray-300">Expert correction of unwanted filler results • Safe dissolving in 24-48 hours • Return to natural lip shape</p>
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
              <h2 className="text-3xl font-bold mb-8 text-white">Lip Filler Dissolve Treatment</h2>
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
                <p className="text-gray-300">15-30 minutes including consultation</p>
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
                <p className="text-gray-300">Permanent removal of hyaluronic acid</p>
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
                <p className="text-gray-300">Topical anaesthetic if required</p>
              </motion.div>
            </div>
          </div>
        </section>


        {/* What is Lip Filler Dissolve */}
        <section className="py-20 bg-accent text-white">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">What is Lip Filler Dissolve Procedure?</h2>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Lip filler dissolve uses hyaluronidase enzyme to safely break down hyaluronic acid-based fillers. 
                This treatment corrects unwanted results, complications, or simply restores your natural lip shape. Whether you're searching for "lip filler dissolving near me" or need expert <a href="/dermal-fillers" className="text-purple-300 hover:text-purple-200 underline">dermal filler</a> correction, our London clinic provides professional solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/40 border border-purple-500/20 h-full hover:border-purple-500/40 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-white text-2xl">How Hyaluronidase Works</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">
                      Hyaluronidase is a naturally occurring enzyme that breaks down hyaluronic acid molecules. 
                      When injected into areas with unwanted filler, it dissolves the gel structure safely and effectively. This is the primary lip filler dissolver used by aesthetic professionals worldwide for safe correction.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">Specifically targets hyaluronic acid fillers</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">Does not damage natural lip tissue</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">Works immediately upon injection</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">Allows for precise correction</p>
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
                    <CardTitle className="text-white text-2xl">When You Need Dissolving</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">
                      Various situations may require lip filler dissolving, from aesthetic dissatisfaction 
                      to <a href="https://www.nhs.uk/conditions/cosmetic-procedures/dermal-fillers/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">medical complications</a> requiring immediate correction. Whether you need emergency treatment or simply want to refresh your look before new <a href="/lip-filler" className="text-purple-300 hover:text-purple-200 underline">lip filler</a> treatment.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">Overfilled or disproportionate lips</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">Filler migration creating unnatural shape</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">Asymmetry or lumps and bumps</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">Vascular complications or allergic reactions</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Comprehensive Treatment Approach */}
        <section className="py-20 bg-black text-white">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Comprehensive Dissolve Treatment Approach</h2>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Our expert approach at our <a href="/contact" className="text-purple-300 hover:text-purple-200 underline">Harley Street clinic</a> combines precise assessment, safe dissolving techniques, and comprehensive aftercare 
                to achieve optimal correction results with minimal discomfort. We provide the same high standards across all our <a href="/treatments" className="text-purple-300 hover:text-purple-200 underline">aesthetic treatments</a>.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="bg-accent border border-purple-500/20 h-full hover:border-purple-500/40 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-white text-lg">Assessment & Planning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Detailed evaluation of filler placement, identifying problem areas, and creating 
                      a precise treatment plan for optimal correction.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="bg-accent border border-purple-500/20 h-full hover:border-purple-500/40 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-white text-lg">Precise Injection</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Expert hyaluronidase injection using ultra-fine needles for targeted dissolving 
                      with minimal discomfort and maximum precision.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="bg-accent border border-purple-500/20 h-full hover:border-purple-500/40 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-white text-lg">Immediate Monitoring</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Real-time assessment of dissolving progress, ensuring appropriate correction 
                      and immediate response to any complications.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="bg-accent border border-purple-500/20 h-full hover:border-purple-500/40 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-white text-lg">Follow-up Care</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Comprehensive aftercare guidance and follow-up appointments to monitor 
                      healing and plan future treatments if desired.
                    </p>
                  </CardContent>
                </Card>
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
              <h2 className="text-3xl font-bold mb-4 text-white">Lip Filler Dissolve Pricing London</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Transparent pricing for professional lip filler dissolve treatments. All prices include consultation, 
                treatment, and aftercare support from our expert medical team.
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
                    <CardTitle className="text-white text-2xl">Standard Dissolve</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£250</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Single area treatment with up to 1ml hyaluronidase</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Consultation included</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Medical-grade hyaluronidase</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Aftercare support</span>
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
                <Card className="bg-purple-600 border-purple-400 h-full text-center relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-white text-purple-600 px-4 py-1 rounded-full text-sm font-semibold">POPULAR</span>
                  </div>
                  <CardHeader className="pt-8">
                    <CardTitle className="text-white text-2xl">Complex Correction</CardTitle>
                    <div className="text-white text-4xl font-bold">£350</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-purple-100">Multiple areas with up to 2ml hyaluronidase</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Comprehensive consultation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Premium hyaluronidase</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Extended aftercare support</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Follow-up assessment</span>
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
                <Card className="bg-accent border-gray-700 h-full text-center">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Emergency Dissolve</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£450</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Same-day emergency treatment for complications</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Immediate assessment</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Unlimited hyaluronidase</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Extended monitoring</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <p className="text-gray-300 mb-6">
                *All prices include VAT. Follow-up consultations available at no extra charge
              </p>
              <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 text-lg font-semibold">
                Book Your Consultation
              </Button>
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
                <p className="text-gray-300 text-sm">Over 1 million injections performed since 2007</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Safety</h3>
                <p className="text-gray-300 text-sm">Medical-grade products and emergency protocols</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Syringe className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Expertise</h3>
                <p className="text-gray-300 text-sm">Specialist filler correction and dissolving techniques</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Care</h3>
                <p className="text-gray-300 text-sm">Comprehensive consultation and aftercare support</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Availability</h3>
                <p className="text-gray-300 text-sm">Same-day emergency dissolving appointments</p>
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
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Get answers to common questions about lip filler dissolve treatments at our London clinic.
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
              <h2 className="text-3xl font-bold mb-4">Ready to Correct Your Lip Filler?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert cosmetic doctors and discover how lip filler dissolve treatments 
                can restore your natural lip shape with safe, effective correction.
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

        {/* Client Reviews */}
        <ClientReviews />

        {/* Medical Review Banner */}
        <div className="bg-purple-900/20 border-t border-purple-500/30 py-6">
        </div>

        {/* Hidden SEO Content */}
        <section className="sr-only" aria-hidden="true">
          <div className="page-container">
            <h2>Comprehensive Guide to Dissolving Lip Filler in London</h2>
            
            <h3>Understanding Lip Filler Dissolving: How the Process Works</h3>
            <p>
              Dissolving lip filler is a safe and effective procedure using hyaluronidase, the primary lip filler dissolver enzyme that specifically targets hyaluronic acid-based fillers. When people ask "how to dissolve lip filler" or search for "lip filler dissolving near me", they're seeking professional correction of unwanted filler results. The process of lip filler dissolving begins immediately upon injection, with noticeable volume reduction within 30 minutes. Full lip filler dissolving stages progress over 24-48 hours, though the enzyme continues working for up to 2 weeks. Understanding the dissolving lip filler stages helps clients know what to expect: initial swelling from the injection, gradual volume reduction over the first day, and final results visible within 48 hours. Many clients wonder "does lip filler dissolve on its own?" - while hyaluronic acid fillers do gradually break down naturally over 6-18 months, professional lip filler dissolving London treatments provide immediate correction when needed.
            </p>

            <h3>Lip Filler Dissolved Before and After: What Results to Expect</h3>
            <p>
              Lip filler dissolved before and after photographs demonstrate the remarkable effectiveness of hyaluronidase treatments. Dissolving lip filler before and after images show immediate volume reduction and restoration of natural lip contours. Clients searching for "dissolved lip fillers before and after" or "lip filler dissolving before and after" want to see realistic outcomes. Our London clinic maintains extensive before and after documentation showing various scenarios: overfilled lips returned to natural proportions, migrated filler correction, and asymmetry correction. The lip filler dissolving before and after progression typically shows: pre-treatment state with unwanted filler, immediate post-injection appearance with some swelling, 24-hour results showing significant reduction, and final results at 48 hours revealing restored natural lip shape. Some clients report that lip fillers dissolved after 1 week show even more refined results as residual swelling completely subsides. When comparing dissolved lip filler outcomes, it's important to remember that results depend on the amount of filler present and individual healing response.
            </p>

            <h3>Does Lip Filler Dissolve Naturally? Understanding Your Options</h3>
            <p>
              A common question we receive is "do lip fillers dissolve" naturally over time, and "does lip filler dissolve on its own?" The answer is yes - hyaluronic acid-based lip fillers do gradually break down through natural body processes over 6-18 months depending on the product used. However, when immediate correction is needed, professional lip filler dissolve treatments provide instant results rather than waiting months for natural dissolution. Many people wonder "does lip filler dissolve" completely with hyaluronidase treatment - the answer is that we can achieve near-complete dissolution with precise dosing. The decision between waiting for natural dissolution versus active lip filler dissolving depends on your individual circumstances: if you're experiencing complications like vascular compromise, immediate dissolving is essential; if you simply want to adjust your look, you can choose either approach. Our <a href="/lip-filler" className="text-purple-300">lip filler</a> specialists help determine the best course of action during consultation.
            </p>

            <h3>Finding Expert Lip Filler Dissolving Near Me in London</h3>
            <p>
              When searching for "lip filler dissolving near me" or "lip filler dissolve" services in London, choosing an experienced aesthetic clinic is crucial for optimal results and safety. Our Harley Street location provides convenient access for anyone searching "dissolving lip filler" or "dissolve lip filler" treatments in central London. We specialize in correcting work from other clinics, offering expertise in all aspects of lip filler dissolving including emergency vascular compromise treatment, migration correction, and aesthetic refinement. The process of dissolving lip filler requires expert knowledge of facial anatomy, filler types, and precise hyaluronidase dosing. Whether you need complete filler removal or subtle correction, our practitioners create individualised treatment plans. Many clients find us when searching "lip filler dissolver" or "dissolved lip filler" correction, appreciating our transparent pricing and <a href="https://www.aestheticsjournal.com/feature/how-to-dissolve-dermal-filler" target="_blank" rel="noopener noreferrer" className="text-purple-300">expert approach</a> to filler correction.
            </p>

            <h3>The Dissolving Lip Filler Stages: A Timeline Guide</h3>
            <p>
              Understanding the dissolving lip filler stages helps prepare for your treatment journey. Stage 1 (0-30 minutes): Immediate enzyme activation begins breaking down hyaluronic acid molecules, with some clients noticing slight volume reduction. Stage 2 (2-6 hours): Progressive dissolution continues, swelling from the injection procedure begins to subside, initial shape changes become visible. Stage 3 (24 hours): Significant volume reduction achieved, approximately 70-80% of final results visible, before and after differences clearly noticeable. Stage 4 (48 hours): Near-complete dissolution for most cases, residual swelling minimal, final lip shape revealed. Stage 5 (1-2 weeks): Complete enzyme activity conclusion, any remaining filler fully dissolved, final assessment and planning for future treatments if desired. The lip filler dissolving stages may vary slightly depending on the amount of filler present and individual metabolism. Our practitioners provide detailed aftercare instructions and monitor progress throughout all dissolving lip filler stages to ensure optimal outcomes.
            </p>

            <h3>Lip Filler Dissolving London: Why Choose Cosmedocs</h3>
            <p>
              For professional lip filler dissolving London treatments, Cosmedocs offers unmatched expertise in filler correction and aesthetic restoration. Our Harley Street clinic specialises in all aspects of dissolving lip filler, from routine corrections to complex emergency cases. We understand that deciding to dissolve lip filler is significant, whether due to complications or aesthetic preference changes. Our invisible art philosophy applies to correction work - we restore natural beauty that speaks without saying a word. When you search "lip filler dissolving London" or need urgent filler correction, our same-day emergency appointments ensure immediate access to expert care. We also offer comprehensive aesthetic services including <a href="/anti-wrinkle" className="text-purple-300">anti-wrinkle treatments</a>, <a href="/profhilo" className="text-purple-300">Profhilo</a>, and advanced skin rejuvenation. Book your lip filler dissolve consultation by calling 0333 0551 503 or visit our <a href="/contact" className="text-purple-300">Harley Street clinic</a> for expert assessment and treatment planning.
            </p>

            <h3>Safety and Expertise in Lip Filler Dissolving</h3>
            <p>
              Professional lip filler dissolving requires extensive knowledge of facial anatomy and <a href="https://www.mayoclinic.org/tests-procedures/dermal-fillers/about/pac-20384845" target="_blank" rel="noopener noreferrer" className="text-purple-300">dermal filler science</a>. Our practitioners have performed thousands of successful dissolving procedures, managing everything from simple corrections to complex vascular complications. We use medical-grade hyaluronidase and follow strict safety protocols to minimize risks and optimize outcomes. Whether you need routine filler correction or emergency treatment, our team provides expert care with transparent pricing from £250. The combination of technical expertise, aesthetic judgment, and comprehensive aftercare makes Cosmedocs the preferred choice for lip filler dissolve treatments in London.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default LipFillerDissolve;