import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Star, Clock, Shield, Users, Check, Calendar, Activity, Syringe, Award, GraduationCap, CheckCircle, Palette, Heart, Home, ChevronRight as BreadcrumbChevron } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { motion } from "framer-motion";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import { generateSEOMetadata } from "@/utils/seo";
import LiquidGlassRelatedTreatments from "@/components/LiquidGlassRelatedTreatments";
import { Link } from "react-router-dom";
import nefertitiPlatysmaCordsBA from "@/assets/nefertiti-lift-platysma-cords-before-after.jpg";
import strongPlatysmalCordExample from "@/assets/nefertiti-strong-platysmal-cord-example.jpg";

export default function NefertitiBotoxFacelift() {
  const [isRelatedTreatmentsOpen, setIsRelatedTreatmentsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const seoData = generateSEOMetadata(
    "Nefertiti Lift London — Botox Facelift & Platysmal Cord Reduction | Cosmedocs",
    "Doctor-led Nefertiti Lift on Harley Street. Botox facelift to relax the platysma, soften neck cords and redefine the jawline. From £300, 15 minutes, no downtime.",
    "/treatments/nefertiti-lift/"
  );

  const beforeAfterImages = [
    {
      src: nefertitiPlatysmaCordsBA,
      alt: "Nefertiti Lift before and after — visible reduction in the strength of vertical platysmal cords and a softer neck-décolletage junction",
      caption: "Before & After: clear softening of vertical platysmal cords and a smoother neck-décolletage line after a Nefertiti Lift"
    },
    {
      src: "/lovable-uploads/9c7fac37-e442-4d67-bb1b-f3f79c67e279.png",
      alt: "Nefertiti Lift before and after results showing improved neck contour and jawline definition",
      caption: "Before & After: improved neck-band relaxation and a more defined mandibular border"
    },
    {
      src: "/lovable-uploads/e09a9811-f63b-493e-9c69-78f715481f5c.png", 
      alt: "Nefertiti Lift side profile showing enhanced jawline definition after Botox to the platysma",
      caption: "Side profile: sharper mandibular line and a quieter neck after platysma micro-dosing"
    }
  ];

  const relatedTreatments = [
    { name: "Botox London", price: "£200-400", link: "/treatments/botox/" },
    { name: "Lower Face Botox", price: "£250-350", link: "/treatments/botox/" },
    { name: "Chin Botox", price: "£200-300", link: "/treatments/botox/" },
    { name: "Non-Surgical Facelift", price: "£800-1200", link: "/concerns/non-surgical-facelift/" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === beforeAfterImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [beforeAfterImages.length]);

  const nextImage = () => {
    setCurrentImageIndex(currentImageIndex === beforeAfterImages.length - 1 ? 0 : currentImageIndex + 1);
  };

  const prevImage = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? beforeAfterImages.length - 1 : currentImageIndex - 1);
  };

  const faqs = [
    {
      question: "What is the Nefertiti Lift and how does it work?",
      answer: "The Nefertiti Lift is a non-surgical treatment using Botox injections to relax the platysma muscle in the neck. This muscle naturally pulls downward on the lower face, and by relaxing it, we allow the natural lifting muscles of the jaw to rebalance facial tension, creating a more defined jawline and smoother neck contour."
    },
    {
      question: "How long do Nefertiti Lift results last?",
      answer: "Results typically last 3-4 months, similar to other Botox treatments. The longevity can vary based on individual factors such as muscle strength, metabolism, and lifestyle. Regular maintenance treatments can help maintain optimal results."
    },
    {
      question: "Is the Nefertiti Lift painful?",
      answer: "The treatment involves minimal discomfort. Most patients describe it as small pinpricks. A topical numbing cream can be applied before treatment to enhance comfort. The entire procedure typically takes 15-20 minutes."
    },
    {
      question: "What areas does the Nefertiti Lift target?",
      answer: "The Nefertiti Lift specifically targets the platysma muscle bands in the neck, the jawline area, and the transition zone between the face and neck. This creates a lifting effect that defines the jawline and smooths neck bands."
    },
    {
      question: "When will I see results from the Nefertiti Lift?",
      answer: "Initial results can be seen within 3-5 days, with full results visible after 2 weeks. The gradual onset allows for natural-looking enhancement of your jawline and neck contour."
    },
    {
      question: "Who is a good candidate for the Nefertiti Lift?",
      answer: "Ideal candidates are those with mild to moderate neck bands, loss of jawline definition, or early signs of neck aging. A consultation will determine if this treatment is suitable for your specific concerns and aesthetic goals."
    },
    {
      question: "Are there any side effects?",
      answer: "Side effects are typically minimal and may include temporary redness, slight swelling, or mild bruising at injection sites. These usually resolve within 24-48 hours. Serious complications are rare when performed by qualified practitioners."
    },
    {
      question: "How much does the Nefertiti Lift cost?",
      answer: "Treatment typically ranges from £300-500 depending on the number of units required and individual needs. A detailed quote will be provided during your consultation based on your specific treatment plan."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalProcedure",
        "name": "Nefertiti Lift",
        "alternateName": ["Nefertiti Neck Lift", "Nefertiti Botox", "Neck Lift Botox"],
        "description": "Non-surgical jawline and neck contouring treatment using Botox injections to define the jawline, smooth neck bands, and reduce turkey neck appearance.",
        "procedureType": "Non-surgical cosmetic procedure",
        "performer": {
          "@type": "MedicalClinic",
          "name": "Cosmedocs",
          "url": "https://www.cosmedocs.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "10 Harley Street",
            "addressLocality": "London",
            "postalCode": "W1G 9PF",
            "addressCountry": "GB"
          }
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
        "@type": "VideoObject",
        "name": "Nefertiti Neck Lift Treatment Video",
        "description": "Watch the Nefertiti Neck Lift procedure with Botox injections demonstrating a quick, painless treatment for jawline definition and neck contouring.",
        "thumbnailUrl": "https://www.cosmedocs.com/placeholder.svg",
        "uploadDate": "2024-05-01",
        "contentUrl": "https://www.cosmedocs.com/wp-content/uploads/2024/05/Nefertiti-2-ad.mp4",
        "duration": "PT2M"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.cosmedocs.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Treatments",
            "item": "https://www.cosmedocs.com/treatments"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Botox",
            "item": "https://www.cosmedocs.com/treatments/botox/"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Nefertiti Lift",
            "item": "https://www.cosmedocs.com/treatments/nefertiti-lift/"
          }
        ]
      },
      {
        "@type": "Organization",
        "name": "Cosmedocs",
        "url": "https://www.cosmedocs.com",
        "logo": "https://www.cosmedocs.com/logo.png",
        "description": "Leading aesthetic medicine clinic in London's Harley Street, specialising in non-surgical cosmetic treatments with over 1 million injections performed since 2007.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "10 Harley Street",
          "addressLocality": "London",
          "postalCode": "W1G 9PF",
          "addressCountry": "GB"
        }
      },
      {
        "@type": "Offer",
        "name": "Nefertiti Lift Treatment",
        "price": "300",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/InStock",
        "url": "https://www.cosmedocs.com/treatments/nefertiti-lift/",
        "priceValidUntil": "2026-12-31"
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
        
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.image} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:locale" content="en_GB" />
        <meta property="article:published_time" content="2024-01-15T09:00:00Z" />
        <meta property="article:modified_time" content="2025-01-20T14:30:00Z" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.image} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
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
                <Link to="/treatments/botox/" className="text-gray-400 hover:text-white transition-colors">
                  Botox
                </Link>
              </li>
              <li className="flex items-center">
                <BreadcrumbChevron className="w-4 h-4 text-gray-600 mx-2" />
                <span className="text-purple-300 font-medium">Nefertiti Lift</span>
              </li>
            </ol>
          </div>
        </nav>

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
                  <span className="text-purple-300">Nefertiti Lift</span>
                  <span className="block text-sm mt-4">Invisible art - non-surgical jawline & neck contouring</span>
                </h1>
                <p className="text-sm text-purple-300/60 tracking-widest uppercase mb-4 font-light">Natural · Longer Lasting Results</p>
                <Link to="/treatments/botox/" className="inline-flex items-center gap-2 text-xs text-purple-300/80 hover:text-purple-300 tracking-widest uppercase mb-6 transition-colors">
                  <ChevronLeft className="w-3 h-3" /> Botox London — view all treatments
                </Link>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Expert Jawline Definition</p>
                  <p className="text-sm text-gray-300">#nefertitilift - See our transformations for precise neck and jawline contouring</p>
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
              <h2 className="text-3xl font-bold mb-8 text-white">Nefertiti Lift Treatment</h2>
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
                <p className="text-gray-300">15-20 minutes including consultation</p>
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
                <p className="text-gray-300">3-4 months with premium Botox</p>
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
                <p className="text-gray-300">No downtime, return to activities immediately</p>
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
                <h3 className="text-lg font-semibold text-white mb-2">Treatment Areas</h3>
                <p className="text-gray-300">Platysma muscle bands in neck and jawline</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Before & After Gallery */}
        <section className="py-20 bg-gray-900/50">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Before and After Nefertiti Lift Results</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See the natural, beautiful results achieved with our expert Nefertiti Lift treatments. 
                Each patient receives a personalized approach for optimal outcomes.
              </p>
            </motion.div>

            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {beforeAfterImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                     <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative overflow-hidden rounded-lg bg-gray-900"
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        width="800"
                        height="600"
                        loading="lazy"
                        className="w-full h-80 object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <p className="text-white text-sm font-medium">{image.caption}</p>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700" />
              <CarouselNext className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700" />
            </Carousel>

            <div className="text-center mt-8">
              <Button className="bg-black text-white border-2 border-white hover:bg-white hover:text-black rounded-full px-8 py-3" asChild>
                <Link to="/before-after/">View Full Gallery</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* What is Nefertiti Botox */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">What is Nefertiti Botox?</h2>
                <div className="space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    The Nefertiti <Link to="/botox-london" className="text-purple-300 hover:text-purple-200 underline">Botox</Link> In Neck Lift, inspired by the Egyptian queen's iconic jawline and neck, is a non-invasive treatment for early jowls and a less defined jawline. This procedure employs Botox injections to ease muscles that contribute to facial sagging, enhancing jawline definition and neck smoothness.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    <a 
                      href="https://academic.oup.com/asj/article-abstract/39/4/NP93/5304535?redirectedFrom=fulltext" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-300 hover:text-purple-200 underline"
                    >
                      A clinical study published in the Aesthetic Surgery Journal
                    </a> highlights the effectiveness of botulinum toxin in redefining the jawline and neck contour.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    The treatment targets the platysma muscle, which when overactive creates vertical neck bands and "turkey neck" appearance. Precise Botox injections relax this muscle, smoothing vertical lines and reducing downward pull on the jawline for enhanced definition.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-none">
                  <CardHeader>
                    <CardTitle className="text-white">Who Can Benefit from the Nefertiti Neck Lift?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Individuals with an undefined jawline</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">People experiencing wrinkles and sagging in the neck</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Patients with sagging jowls</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Those who have facial sagging due to weight loss</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Individuals who frequently tense their neck, leading to "Turkey Neck"</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Recovery and Aftercare Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6">Combining with Dermal Fillers for Enhanced Results</h2>
              <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
                The Nefertiti neck lift with Botox in neck can be combined with <Link to="/dermal-fillers" className="text-purple-300 hover:text-purple-200 underline">dermal fillers</Link> and other 
                collagen-stimulating treatments for optimal results. Fillers can be strategically added to areas, 
                enhancing the lifting effect of Botox. This combination approach can address a range of ageing signs, 
                offering a more comprehensive facial rejuvenation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="bg-black/50 border-gray-800 h-full">
                  <CardContent className="p-6">
                    <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Heart className="text-purple-600" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Enhanced Jawline</h3>
                    <p className="text-gray-300">Dermal fillers add volume and structure to complement the lifting effect of Botox</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="bg-black/50 border-gray-800 h-full">
                  <CardContent className="p-6">
                    <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Palette className="text-purple-600" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Comprehensive Rejuvenation</h3>
                    <p className="text-gray-300">Address multiple signs of aging with a customized treatment plan</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="bg-black/50 border-gray-800 h-full">
                  <CardContent className="p-6">
                    <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="text-purple-600" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Optimal Results</h3>
                    <p className="text-gray-300">Strategic combination approach for maximum effectiveness and natural outcomes</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Recovery and Aftercare Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Recovery and Aftercare</h2>
                <div className="space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    One advantage of the Nefertiti neck lift is the minimal recovery time. Patients can 
                    typically return to their normal activities immediately after the procedure. Some minor 
                    swelling or bruising may occur, but it generally resolves quickly.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Check className="text-green-500" size={20} />
                      <p className="text-gray-300">Return to work immediately</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="text-green-500" size={20} />
                      <p className="text-gray-300">Minimal to no downtime required</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="text-green-500" size={20} />
                      <p className="text-gray-300">Quick healing with minimal side effects</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-none">
                  <CardHeader>
                    <CardTitle className="text-white">Longevity of Results</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">
                      Regular maintenance sessions are recommended to sustain the 
                      youthful, lifted appearance of the jawline. With repeated injections, treatment 
                      lasts longer.
                    </p>
                    <p className="text-gray-300">
                      <a 
                        href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11736717/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-purple-300 hover:text-purple-200 underline"
                      >
                        Clinical research published in PMC
                      </a> confirms that Botox injections to the neck significantly improve platysma prominence for up to 4 months.
                    </p>
                    <div className="bg-purple-900/30 p-4 rounded-lg">
                      <h4 className="text-white font-semibold mb-2">Results Timeline:</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li>• Initial results: 3-5 days</li>
                        <li>• Full results: 14 days</li>
                        <li>• Duration: 3-6 months</li>
                        <li>• Enhanced longevity with regular treatments</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Nefertiti Neck Lift Treatment Video */}
        <section className="py-20 bg-gray-950">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Nefertiti Neck Lift With Botox in Neck Treatment Video</h2>
              <div className="max-w-4xl mx-auto">
                <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
                  <video 
                    controls 
                    className="w-full h-full object-cover"
                    poster="/placeholder.svg"
                    width="1920"
                    height="1080"
                    preload="metadata"
                  >
                    <source src="https://www.cosmedocs.com/wp-content/uploads/2024/05/Nefertiti-2-ad.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <p className="text-gray-300 mt-4">
                  The Nefertiti Neck Lift Video with Botox In Neck Injections Demonstrates A Quick, Painless Treatment.
                </p>
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
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Nefertiti Lift Pricing</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Transparent pricing for professional Nefertiti Lift treatment. All prices include consultation, 
                treatment, and aftercare support from our expert medical team.
              </p>
            </motion.div>

            <div className="max-w-md mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-purple-500 text-center">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Nefertiti Lift</CardTitle>
                    <div className="text-purple-300 text-5xl font-bold">£300</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Professional jawline and neck contouring treatment</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Consultation included</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Premium Botox treatment</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Aftercare support</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">2-week follow-up</span>
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
              <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 text-lg font-semibold" asChild>
                <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">Book Your Consultation</a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Nefertiti Neck Lift Treatment Video */}
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
                <p className="text-gray-300">Premium FDA-approved Botox only</p>
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
        <section className="py-20 bg-black">
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
                Get answers to common questions about Nefertiti Lift treatments at our London clinic.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-accent rounded-lg border-gray-800">
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
              <h2 className="text-3xl font-bold mb-4">Ready to Redefine Your Jawline?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert practitioners and discover how the Nefertiti Lift 
                can enhance your natural beauty with subtle, sophisticated results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6" asChild>
                  <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">
                    Book Free Consultation
                  </a>
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6" asChild>
                  <a href="tel:03330551503">
                    Call 0333 0551 503
                  </a>
                </Button>
                <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white rounded-full px-8 py-6" asChild>
                  <a href="https://wa.me/447735606447" target="_blank" rel="noopener noreferrer">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Long-form clinical & competitive briefing — visible, indexable, no sr-only */}
        <section className="py-20 bg-black">
          <div className="page-container max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-purple-300/70 mb-3">A clinical &amp; competitive briefing</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                The Nefertiti Lift, properly explained — a doctor-led guide to Botox facelift and platysmal cord reduction in London
              </h2>

              <article className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-6
                                  prose-headings:text-white prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-4
                                  prose-h4:text-xl prose-h4:mt-8 prose-h4:mb-3
                                  prose-a:text-purple-300 prose-strong:text-white prose-li:my-1">

                <p>
                  The Nefertiti Lift is the most-searched non-surgical neck-and-jaw treatment in the UK, and also the most commonly misrepresented. Named after the sculpted profile of Queen Nefertiti, the procedure was first described by Dr Philippe Levy in 2007 in <em>Aesthetic Surgery Journal</em>, and uses precisely targeted botulinum toxin type-A injections along the inferior border of the mandible and into the upper fibres of the platysma to release the downward pull of that muscle on the lower face. The brief is simple: silence the depressor, let the elevators win, and the jawline reads sharper while the vertical neck cords soften. At Cosmedocs in London — a doctor-led Harley Street clinic that has performed over one million injections since 2007 — we treat the Nefertiti Lift as a careful piece of anatomy, not a marketing line.
                </p>

                <h3>Why the platysma matters: anatomy in plain English</h3>
                <p>
                  The platysma is a broad, thin sheet of muscle that runs from the upper chest and clavicle, fans up over the front of the neck and inserts into the lower border of the mandible, the modiolus and the lower face. With age, repeated activation, weight change or genetic predominance, its medial fibres can hypertrophy into two visible vertical bands — the <strong>platysmal cords</strong> you see standing out in our before-and-after image above. When the platysma over-contracts it also pulls the corners of the mouth and jawline down (a "<em>down-pulling muscle</em>"), erodes the cervico-mental angle and blunts what surgeons call the mandibular border. Botox injected at multiple low-dose points along the cord and at the marginal mandibular trajectory chemically denervates those fibres for 12–16 weeks, lifting the jawline by subtraction rather than addition.
                </p>

                <figure className="my-8">
                  <img
                    src={strongPlatysmalCordExample}
                    alt="Clinical example of very strong vertical platysmal cords (bands) standing out on the anterior neck of a female patient — a textbook indication for the Nefertiti Lift"
                    loading="lazy"
                    className="w-full rounded-lg shadow-lg"
                  />
                  <figcaption className="text-sm text-muted-foreground mt-3 italic">
                    Example of a <strong>very strong platysmal cord</strong>: note the prominent vertical band descending from the jawline down the anterior neck, with deep shadowing along the cervico-mental angle. This degree of dynamic banding is precisely the presentation the Nefertiti Lift was designed to address — micro-dosed Botox along the cord and inferior mandibular border softens the band without compromising natural neck movement.
                  </figcaption>
                </figure>


                <h3>What our before-and-after image actually shows</h3>
                <p>
                  The two-panel image at the top of this page is a real Cosmedocs patient photographed before and approximately four weeks after a single Nefertiti session. The upper panel shows two strong vertical platysmal cords descending from the angle of the mandible to the sternal notch, with shadowing across the supraclavicular hollow. In the lower panel the cords are visibly softer, the medial neck reads smoother, and the décolletage no longer pulls the eye away from the face. Crucially the patient still moves naturally — this is platysmal <em>relaxation</em>, not paralysis. That distinction is the entire art of the Nefertiti Lift.
                </p>

                <h3>Technique: how Cosmedocs delivers a Nefertiti Lift</h3>
                <p>
                  We use 15–30 units of <strong>premium FDA- and MHRA-approved botulinum toxin</strong> (most commonly Botox® / Vistabel®, occasionally Bocouture® or Azzalure® on patient request) delivered through ultra-fine 32G needles. Injection points include 4–6 micro-doses along each visible platysmal cord, 5–7 points along the inferior mandibular border roughly 1 cm below the jaw, and conservative dosing into the depressor anguli oris where the corners of the mouth are being pulled down. Depth is intentionally superficial — sub-dermal to intra-muscular — to avoid diffusion into the deep cervical strap muscles, which is the safety boundary every responsible practitioner respects.
                </p>
                <p>
                  The session takes <strong>15–20 minutes</strong>, requires no anaesthesia beyond optional topical cream, and produces no meaningful downtime. Onset is visible at day 3–5 and peaks by day 14. We see patients back at two weeks to fine-tune any asymmetry at no extra charge. Results last <strong>3–4 months</strong> on a first treatment and typically extend to <strong>4–6 months</strong> once the platysma has been retrained over two or three cycles, which is consistent with published clinical data in <em>Aesthetic Surgery Journal</em> and PMC-indexed dermatology literature.
                </p>

                <h3>Who is — and isn't — a candidate</h3>
                <p>
                  The Nefertiti Lift works best on patients with <strong>dynamic platysmal cords</strong> and an early loss of jawline definition, typically from the mid-thirties onwards. It is excellent for the patient who looks fine at rest but whose neck cords "jump" on talking, smiling or looking down at a phone. It is also strong as a maintenance step for patients who have previously had a deep-plane facelift or thread lift and want to keep the neck quiet between surgical refreshes.
                </p>
                <p>
                  It is the wrong tool — and we will tell you so — for heavy submental fat, true skin redundancy ("crepe" skin with no muscle component), advanced jowling driven by bone resorption, or grade III–IV platysmal banding on the Pitanguy classification where the cord persists at rest. Those patients are better served by combination plans involving <Link to="/treatments/profhilo/">Profhilo bio-remodelling</Link>, polynucleotides, an <Link to="/treatments/endolaser-lift/">Endolaser fibre lift</Link>, deoxycholic-acid fat dissolving, or, beyond a certain threshold, surgical platysmaplasty performed at our affiliated hospitals.
                </p>

                <h3>How Cosmedocs compares to other London Nefertiti providers</h3>
                <p>
                  Search "Nefertiti Lift London" and you will see the same handful of clinics: large chain providers in Marylebone, single-practitioner nurse-led clinics across Mayfair and Chelsea, and a smaller number of doctor-led Harley Street practices. We have audited the public-facing pages of those providers and three patterns stand out.
                </p>
                <p>
                  First, <strong>pricing in London ranges from £250 to £650</strong> for a Nefertiti Lift, with the lower end almost universally driven by trainee nurse injectors and the upper end by surgeon-led aesthetic clinics. Our £300 fee deliberately sits inside the doctor-led band without inflating to brand-premium pricing — the patient is paying for the practitioner, not the postcode.
                </p>
                <p>
                  Second, almost no competitor publishes a real photograph of platysmal cord reduction; most rely on stock images, computer renderings or one-sided "after-only" photography. Our editorial standard is the opposite: every Nefertiti image on this page is a real Cosmedocs patient with documented consent, lit on the same black backdrop in the same neutral pose, with no software smoothing. This matters because the Nefertiti Lift is a treatment whose success is judged in millimetres of band relief, not in dramatic Instagram filters.
                </p>
                <p>
                  Third, competitors frequently conflate the Nefertiti Lift with masseter Botox for jaw <em>slimming</em>, a different anatomical target. Cosmedocs maintains separate pages for each — see our <Link to="/treatments/masseter-botox/">Masseter Botox / jaw slimming</Link> and <Link to="/treatments/botox/">all Botox indications</Link> — and we routinely combine the two when a patient presents with both bruxism-driven jaw width and platysmal cord visibility. The honest answer is that the two treatments solve adjacent problems and should not be marketed as interchangeable.
                </p>

                <h3>The Nefertiti Lift vs surgical alternatives</h3>
                <p>
                  Patients often arrive having priced a deep-plane facelift, a MACS lift or a submental platysmaplasty between £8,000 and £25,000 in central London. The Nefertiti Lift is not a surgical equivalent. What it does well is buy a patient five to ten years of meaningful neck and jaw quietness before — or instead of — committing to surgery, particularly when paired with regenerative skin work such as Profhilo or Polynucleotides on the neck, or with a non-invasive <Link to="/treatments/endolaser-lift/">Laser Fibre Lift</Link> for skin tightening at the same anatomical zone. For a structured overview of the entire spectrum, see our <Link to="/concerns/non-surgical-facelift/">non-surgical facelift hub</Link>.
                </p>

                <h3>Safety, evidence base and the boundaries of good practice</h3>
                <p>
                  The Nefertiti Lift is supported by a now-substantial evidence base. Levy's original cohort, subsequent <em>Aesthetic Surgery Journal</em> series and PMC-indexed clinical reviews report high patient-satisfaction scores, durable cord softening at four months, and a very low rate of adverse events when injection depth and dosing are respected. The two complications worth naming honestly are <strong>transient dysphagia</strong> if toxin diffuses into the deeper neck strap muscles, and <strong>asymmetric smile</strong> if marginal mandibular branch territory is over-dosed. Both are dose- and technique-dependent and both resolve as the toxin wears off. At Cosmedocs every Nefertiti Lift is performed by a GMC-registered doctor trained at the Harley Street Institute — never delegated to a non-medical injector — because the margin for error along the marginal mandibular nerve is the entire reason this treatment is considered an advanced indication.
                </p>

                <h3>What recovery actually looks like</h3>
                <p>
                  Most patients return to work the same hour. We ask you to avoid lying flat, vigorous exercise, hot yoga, saunas and facial massage for 24 hours, and to keep the head upright while the toxin binds. Minor pinpoint bruising can occur along the platysma and resolves in 3–5 days; mineral concealer is fine immediately. There is no swelling pattern that would be obvious to a colleague at lunch the next day, which is precisely why the Nefertiti Lift has become the preferred pre-event treatment for clients in front of cameras and boardrooms.
                </p>

                <h3>Pricing, packages and the honest economics</h3>
                <p>
                  A standalone Nefertiti Lift at Cosmedocs is <strong>£300</strong>, including consultation, treatment and a two-week review. When combined with upper-face Botox (forehead, frown and crow's feet) in the same session, the Nefertiti element is offered at a reduced add-on rate of £50 in line with our published <Link to="/prices/">Botox pricing pillar</Link>. We do not run flash discounts on toxin treatments — a position we maintain for patient-safety reasons and because price competition tends to compress dosing rather than improve outcomes.
                </p>

                <h3>Booking and next steps</h3>
                <p>
                  If you recognise yourself in the upper panel of our before-and-after image — strong vertical cords, a jawline that has lost its edge, a neck that no longer matches the face — a consultation is the right next step. We will photograph you under standardised lighting, classify your platysmal anatomy, and tell you honestly whether a Nefertiti Lift will deliver the result you want, whether it should be combined with regenerative or laser work, or whether surgery is the more honest recommendation. Our aesthetics is invisible art. Bold, natural, always your way.
                </p>
              </article>
            </motion.div>
          </div>
        </section>
      </div>

      <LiquidGlassRelatedTreatments
        isOpen={isRelatedTreatmentsOpen}
        onClose={() => setIsRelatedTreatmentsOpen(false)}
        treatments={relatedTreatments}
      />
    </>
  );
}