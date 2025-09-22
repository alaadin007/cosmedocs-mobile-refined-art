import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Phone, Clock, ShieldCheck, Award, Users, Activity, Syringe, CheckCircle } from "lucide-react";
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

const LipFillerDissolve = () => {
  const seoData = generateSEOMetadata(
    "Lip Filler Dissolve London | Hyaluronidase Treatment | Expert Filler Correction | Cosmedocs",
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
        <meta name="keywords" content="lip filler dissolve London, hyaluronidase injections London, lip filler correction UK, dissolve lip filler London, filler complications London, lip filler removal London, overfilled lips correction, migrated filler treatment, Harley Street" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Cosmedocs",
            "description": "Expert lip filler dissolve and correction treatments in London UK",
            "url": seoData.canonical,
            "telephone": "0333 0551 503",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "10 Harley Street",
              "addressLocality": "London",
              "postalCode": "W1G 9PF",
              "addressCountry": "GB"
            },
            "medicalSpecialty": "Cosmetic Medicine",
            "priceRange": "££"
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white">
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
                  <span className="text-purple-300">Expert Lip Filler Dissolve London</span>
                  <span className="block text-sm mt-4">Invisible art - safe correction that restores without words</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Professional Hyaluronidase Treatment</p>
                  <p className="text-sm text-gray-300">#lipdissolve - Check out our IG for hundreds more filler correction transformations</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl">
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
              <h2 className="text-3xl font-bold mb-4">Before and After Lip Filler Dissolve Results in London</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Explore authentic before and after lip filler dissolve results from our London clinic. 
                Our expert hyaluronidase treatments safely correct unwanted filler for natural, beautiful lips.
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
              <h2 className="text-3xl font-bold mb-4 text-white">What is Lip Filler Dissolve?</h2>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Lip filler dissolve uses hyaluronidase enzyme to safely break down hyaluronic acid-based fillers. 
                This treatment corrects unwanted results, complications, or simply restores your natural lip shape.
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
                      When injected into areas with unwanted filler, it dissolves the gel structure safely and effectively.
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
                      to medical complications requiring immediate correction.
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
                Our expert approach combines precise assessment, safe dissolving techniques, and comprehensive aftercare 
                to achieve optimal correction results with minimal discomfort.
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

        {/* Client Reviews */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Client Reviews</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                See what our clients say about their lip filler dissolve experience at Cosmedocs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border border-purple-500/20 h-full hover:border-purple-500/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        ★★★★★
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4 italic">
                      "I had overfilled lips from another clinic and Dr. Sarah at Cosmedocs dissolved them perfectly. 
                      The treatment was quick and painless, and my lips look natural again. So grateful!"
                    </p>
                    <p className="text-white font-semibold">Emma L.</p>
                    <p className="text-purple-300 text-sm">Verified Patient</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border border-purple-500/20 h-full hover:border-purple-500/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        ★★★★★
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4 italic">
                      "My filler had migrated and created an unnatural shape. The team at Cosmedocs corrected it beautifully. 
                      Professional, caring, and the results exceeded my expectations."
                    </p>
                    <p className="text-white font-semibold">Sophie K.</p>
                    <p className="text-purple-300 text-sm">Verified Patient</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border border-purple-500/20 h-full hover:border-purple-500/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        ★★★★★
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4 italic">
                      "Emergency dissolve service was incredible. I had vascular compromise and they saw me immediately. 
                      Professional emergency care that saved my lips. Cannot recommend enough."
                    </p>
                    <p className="text-white font-semibold">Jessica M.</p>
                    <p className="text-purple-300 text-sm">Verified Patient</p>
                  </CardContent>
                </Card>
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

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h2>Professional Lip Filler Dissolve London</h2>
          <p>
            Lip filler dissolve London at Cosmedocs offers expert hyaluronidase treatments to safely correct unwanted filler results. Our experienced cosmetic doctors specialize in dissolving lip filler complications including overfilled lips, filler migration, asymmetry, and vascular issues. Located at 10 Harley Street, we provide same-day emergency dissolving services and comprehensive filler correction treatments.
          </p>
          <p>
            Our London clinic uses medical-grade hyaluronidase enzyme to safely break down hyaluronic acid-based fillers without damaging natural lip tissue. We can dissolve fillers from any clinic, providing immediate relief from unwanted results. Treatment takes 15-30 minutes with results visible within 24-48 hours.
          </p>
          <p>
            The Cosmedocs approach to lip filler dissolve combines medical expertise with aesthetic artistry. Our practitioners assess each case individually, creating precise treatment plans for optimal correction. We offer standard dissolving from £250, complex corrections from £350, and emergency treatments from £450.
          </p>
          <p>
            Common reasons for lip filler dissolving include overfilled lips, filler migration creating unnatural shapes, asymmetry or lumps, vascular complications, and aesthetic dissatisfaction. Our expert team provides comprehensive care from emergency dissolving to planned aesthetic corrections, with follow-up care and planning for future treatments.
          </p>
          <p>
            Book your lip filler dissolve consultation at our Harley Street clinic by calling 0333 0551 503. We offer same-day emergency appointments for vascular complications and urgent corrections. Our invisible art philosophy ensures natural restoration that enhances rather than alters your appearance.
          </p>
        </div>
      </div>
    </>
  );
};

export default LipFillerDissolve;