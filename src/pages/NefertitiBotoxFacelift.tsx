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

export default function NefertitiBotoxFacelift() {
  const [isRelatedTreatmentsOpen, setIsRelatedTreatmentsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const seoData = generateSEOMetadata(
    "Nefertiti Lift - Non-Surgical Jawline & Neck Contouring | Cosmedocs",
    "Define jawline & smooth neck bands with Nefertiti Lift. Non-surgical botox for sharp contours & reduced platysmal bands.",
    "/nefertiti-botox-face-jaw-lift"
  );

  const beforeAfterImages = [
    {
      src: "/lovable-uploads/9c7fac37-e442-4d67-bb1b-f3f79c67e279.png",
      alt: "Nefertiti Lift before and after results showing improved neck contour",
      caption: "Before & After: Significant improvement in neck bands and jawline definition"
    },
    {
      src: "/lovable-uploads/e09a9811-f63b-493e-9c69-78f715481f5c.png", 
      alt: "Nefertiti Lift side profile showing enhanced jawline definition",
      caption: "Side Profile: Enhanced jawline definition and smoother neck contour"
    }
  ];

  const relatedTreatments = [
    { name: "Face Botox Areas", price: "£200-400", link: "/botox-london" },
    { name: "Lower Face Botox", price: "£250-350", link: "/lower-face-botox" },
    { name: "Chin Botox", price: "£200-300", link: "/chin-botox" },
    { name: "Non-Surgical Facelift", price: "£800-1200", link: "/non-surgical-facelift" }
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
          "url": "https://www.cosmedocs.co.uk",
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
        "thumbnailUrl": "https://www.cosmedocs.co.uk/placeholder.svg",
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
            "name": "Nefertiti Lift",
            "item": "https://www.cosmedocs.co.uk/nefertiti-botox-face-jaw-lift"
          }
        ]
      },
      {
        "@type": "Organization",
        "name": "Cosmedocs",
        "url": "https://www.cosmedocs.co.uk",
        "logo": "https://www.cosmedocs.co.uk/logo.png",
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
        "url": "https://www.cosmedocs.co.uk/nefertiti-botox-face-jaw-lift",
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

        {/* Hidden SEO content for search engines - naturally incorporating target keywords */}
        <div className="sr-only" aria-hidden="true">
          <article>
            <h2>Comprehensive Guide to Nefertiti Lift and Neck Botox Treatments</h2>
            
            <section>
              <h3>Understanding Botox on Wrinkles and Neck Treatments</h3>
              <p>The nefertiti lift has revolutionised how we approach neck botox treatments for facial contouring. This sophisticated procedure uses botox on wrinkles and neck bands to create a lifted, more youthful appearance. When considering botox neck before and after results, patients consistently report remarkable improvements in jawline definition and reduced turkey neck appearance.</p>
              
              <p>Botox turkey neck treatment specifically targets the platysma muscle bands that create vertical lines and contribute to neck sagging. The botox for neck sagging before and after transformations demonstrate how strategic injections can dramatically improve the lower face and neck contour. The nefertiti lift technique precisely addresses these concerns through carefully placed injections.</p>
            </section>
            
            <section>
              <h3>The Nefertiti Neck Lift Procedure</h3>
              <p>The nefertiti neck lift before and after results speak volumes about the effectiveness of this treatment. Unlike traditional surgical procedures, nefertiti botox offers a non-invasive solution for those seeking neck lift botox alternatives. The jowl nefertiti lift specifically targets the lower face, creating a subtle yet noticeable improvement in facial contours.</p>
              
              <p>During a botox nefertiti lift session, our practitioners use precise nefertiti lift injection points along the jawline and neck. The nefertiti neck lift botox technique involves strategic placement to relax the downward-pulling platysma muscle, allowing the natural lifting muscles to create better definition. This botox for turkey neck approach delivers natural-looking results without surgery.</p>
            </section>
            
            <section>
              <h3>Before and After: Real Results</h3>
              <p>Examining botox on neck before and after photos reveals the transformative power of this treatment. Turkey neck botox has become increasingly popular for addressing age-related changes in the neck area. The botox for neck sagging before and after comparisons consistently show smoother neck contours and improved jawline definition.</p>
              
              <p>The jowls botox for neck sagging technique specifically targets the transition zone between the face and neck. Our nefertiti lift botox approach creates a harmonious improvement that looks completely natural. Patients seeking nefertiti botox treatments appreciate the minimal downtime and immediate return to daily activities.</p>
            </section>
            
            <section>
              <h4>Treatment Benefits and Injection Technique</h4>
              <p>The jowl nefertiti lift addresses multiple concerns simultaneously, making it an efficient treatment option. The nefertiti neck lift utilises precise botox neck lift techniques that have been refined over years of practice. Understanding the botox nefertiti lift injection points is crucial for achieving optimal results.</p>
              
              <p>Our practitioners specialise in the nefertiti lift injection points that deliver the most natural and effective outcomes. The treatment typically takes 15-20 minutes, with results visible within 3-5 days. The neck lift botox procedure requires minimal discomfort and offers maximum impact for those seeking jawline enhancement and neck smoothing.</p>
            </section>
            
            <section>
              <h4>Why Choose Cosmedocs for Your Treatment</h4>
              <p>At Cosmedocs, our aesthetics philosophy embodies invisible art – treatments that are bold, natural, and always your way. Our approach to aesthetic medicine is minimal, quiet not loud, invisible not exaggerated. We believe in transformation that speaks without saying a word, delivering results that enhance your natural beauty whilst maintaining complete authenticity.</p>
            </section>
          </article>
        </div>
      </div>

      <LiquidGlassRelatedTreatments
        isOpen={isRelatedTreatmentsOpen}
        onClose={() => setIsRelatedTreatmentsOpen(false)}
        treatments={relatedTreatments}
      />
    </>
  );
}