import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import ImageZoomModal from "@/components/ImageZoomModal";
import { generateSEOMetadata } from "@/utils/seo";
import { Clock, Calendar, Activity, Syringe, Award, GraduationCap, CheckCircle, Palette, Heart, ShieldCheck, RefreshCw, AlertTriangle } from "lucide-react";

const TearTroughFiller = () => {
  const [zoomedImage, setZoomedImage] = useState<{
    src: string;
    alt: string;
    title: string;
  } | null>(null);

  const handleImageClick = (src: string, alt: string, title: string) => {
    setZoomedImage({ src, alt, title });
  };

  const closeZoom = () => {
    setZoomedImage(null);
  };
  const seoData = generateSEOMetadata(
    "Tear Trough Filler London | Under Eye Fillers & Dark Circles | Cosmedocs",
    "Expert tear trough filler treatments in London. Brighten under eyes, reduce dark circles & eye bags. Professional under eye fillers at Harley Street clinic.",
    "/tear-trough-filler"
  );

  const beforeAfterImages = [
    { src: "/lovable-uploads/c26ed70e-4dce-4f99-b43a-5e674aa1b4bb.png", alt: "Tear trough filler before and after transformation", caption: "Dramatic improvement in under eye hollowness and dark circles" },
    { src: "/lovable-uploads/5d69dde0-2e2b-497a-a1eb-bbed6071beb7.png", alt: "Under eye filler results showing brighter eyes", caption: "Restored volume and reduced shadows under the eyes" },
    { src: "/lovable-uploads/624f9f45-8144-43e0-a979-20cc3a591f28.png", alt: "Dark circles treatment with tear trough fillers", caption: "Comparison showing treated vs untreated under eye area" },
    { src: "/lovable-uploads/4843c9ce-f56d-4ee5-b3a0-6b7486d88d5c.png", alt: "Eye bag improvement with dermal fillers", caption: "Smoother under eye area with reduced puffiness" },
    { src: "/lovable-uploads/fc2c9a14-126c-4030-93b3-d5b5bd99feff.png", alt: "Tear trough rejuvenation results", caption: "Natural-looking under eye enhancement and brightening" },
    { src: "/lovable-uploads/ec372a42-0e65-42ff-a9d2-1d4f92c7b7e3.png", alt: "Complete under eye makeover", caption: "Side profile showing tear trough improvement" }
  ];

  const faqs = [
    {
      question: "What is a tear trough filler?",
      answer: "Tear trough filler is a minimally invasive treatment using hyaluronic acid-based dermal fillers for under eye bags to restore volume, reduce dark circles, and minimize under-eye puffiness. This eye bag filler targets the hollow tear through eyes area between your lower eyelids and upper cheek."
    },
    {
      question: "What types of under eye treatments do you offer?",
      answer: "We offer comprehensive under eye filler london solutions including: tear trough dermal filler for volume restoration, eye fillers for dark circles to address pigmentation, fillers for eye bags reduction for puffiness, injectables for under eyes wrinkle treatment, and specialized undereye filler for natural-looking results."
    },
    {
      question: "How do tear trough fillers differ from other under eye treatments?",
      answer: "Tear trough fillers specifically target volume loss and hollowing, while dark circle treatments focus on pigmentation and skin thickening. Eye bag reduction addresses puffiness, and wrinkle treatments concentrate on fine lines. Each treatment can be combined for comprehensive rejuvenation."
    },
    {
      question: "Which under eye treatment is right for me?",
      answer: "The best treatment depends on your specific concerns. Tear trough fillers work best for volume loss and shadowing, dark circle treatments for pigmentation issues, eye bag reduction for puffiness, and wrinkle treatments for fine lines. Our consultation will determine the optimal approach for your needs."
    },
    {
      question: "How long does tear trough filler last?",
      answer: "How long does tear trough filler last depends on individual factors, but typically 12-18 months. The longevity depends on your metabolism, lifestyle factors, and what filler for tear trough is used. Results are not permanent, so maintenance treatments are needed to sustain the under eye dermal filler before and after results."
    },
    {
      question: "Who is a good candidate for tear trough fillers?",
      answer: "Ideal candidates have realistic expectations and experience genetic discoloration, volume loss under the eyes, or early signs of aging. Not suitable for pregnant/breastfeeding individuals or those with lidocaine allergies."
    },
    {
      question: "Does tear trough filler hurt?",
      answer: "Does tear trough filler hurt? Most patients experience little to no pain due to our expert injection techniques and use of topical anesthetic numbing cream. Any discomfort is minimal and brief during the eye circle filler procedure."
    },
    {
      question: "What's the recovery time and tear trough filler aftercare?",
      answer: "Recovery is typically swift with immediate visible results. You may experience tear trough filler swelling stages and slight bruising for a few days. Proper tear trough filler aftercare includes avoiding excessive touching and following our post-treatment guidelines. Most patients return to normal activities immediately with no significant downtime."
    },
    {
      question: "What are the possible side effects and risks of lumpy filler under eye?",
      answer: "Main side effects include mild swelling or bruising around injection sites that resolve naturally. Lumpy filler under eye complications are rare when performed by experienced professionals using quality products. Our expert technique minimizes risks of uneven results."
    },
    {
      question: "Can tear trough fillers be combined with other treatments?",
      answer: "Yes, they work well with Botox for crow's feet, cheek fillers, and other facial treatments. We often recommend combining treatments for comprehensive under-eye rejuvenation and optimal results."
    },
    {
      question: "What is the tear trough filler price and price of under eye filler?",
      answer: "Tear trough filler price starts from £425. The price of under eye filler and dermal filler tear trough cost varies based on individual needs. We also offer polynucleotide treatments at £450/session with package deals available. Our tear trough filler cost uk is competitive for London clinic standards."
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
        <meta name="keywords" content="tear trough filler, under eye fillers, eye bag fillers, tear trough dermal filler, dermal fillers for under eye bags, eye fillers for dark circles, under eye filler london, fillers for eye bags, tear trough filler before after, tear trough filler aftercare, tear trough filler cost uk, dermal filler under eyes, eye circle filler, tear trough filler swelling stages, does tear trough filler hurt, how long does tear trough filler last, tear trough treatment, London, Harley Street" />
        <meta name="author" content="Cosmedocs Medical Team" />
        <meta name="publish-date" content="2024-01-15" />
        <meta name="last-modified" content="2025-10-02" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Cosmedocs",
            "description": "Expert tear trough filler and under eye treatments in London",
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
            "priceRange": "£££"
          })}
        </script>

        {/* MedicalProcedure Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "Tear Trough Filler Treatment",
            "description": "Non-surgical under eye treatment using hyaluronic acid dermal fillers to reduce dark circles, eye bags, and restore volume",
            "procedureType": "Cosmetic",
            "followup": "2-week follow-up included",
            "preparation": "Avoid blood thinners, alcohol, and certain supplements 24 hours before treatment",
            "howPerformed": "Injection of hyaluronic acid dermal fillers into the tear trough area using advanced cannula or needle techniques for natural results",
            "bodyLocation": "Under eye area, tear trough region"
          })}
        </script>

        {/* Offer Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Offer",
            "name": "Tear Trough Filler Treatment",
            "description": "Professional under eye filler treatment to reduce dark circles and restore volume",
            "price": "425",
            "priceCurrency": "GBP",
            "availability": "https://schema.org/InStock",
            "url": seoData.canonical,
            "priceValidUntil": "2025-12-31",
            "seller": {
              "@type": "MedicalBusiness",
              "name": "Cosmedocs"
            }
          })}
        </script>

        {/* FAQPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>

        {/* BreadcrumbList Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
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
                "name": "Tear Trough Filler",
                "item": "https://www.cosmedocs.co.uk/tear-trough-filler"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        {/* Hero Section - Matching LipFillers style */}
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
                  <span className="text-purple-300">Tear Trough Filler London</span>
                  <span className="block text-sm mt-4">Invisible art - brighten your eyes, naturally refresh your appearance</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Under Eye Transformation</p>
                  <p className="text-sm text-gray-300">Expert treatment for dark circles, eye bags & tear troughs</p>
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

        {/* Tear Trough Filler Treatment */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Tear Trough Filler Treatment</h2>
            </motion.div>

            <div className="grid grid-cols-5 gap-2 md:gap-4 lg:gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-2 md:mb-4">
                  <Clock className="text-purple-600" size={16} />
                </div>
                <h3 className="text-sm md:text-lg font-semibold text-white mb-1 md:mb-2">Treatment Duration</h3>
                <p className="text-xs md:text-sm text-gray-300">10-25 minutes including consultation</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-2 md:mb-4">
                  <Calendar className="text-purple-600" size={16} />
                </div>
                <h3 className="text-sm md:text-lg font-semibold text-white mb-1 md:mb-2">Results Duration</h3>
                <p className="text-xs md:text-sm text-gray-300">12-18 months with premium hyaluronic acid</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-2 md:mb-4">
                  <Activity className="text-purple-600" size={16} />
                </div>
                <h3 className="text-sm md:text-lg font-semibold text-white mb-1 md:mb-2">Recovery Time</h3>
                <p className="text-xs md:text-sm text-gray-300">Minimal downtime, return to work same day</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-2 md:mb-4">
                  <RefreshCw className="text-purple-600" size={16} />
                </div>
                <h3 className="text-sm md:text-lg font-semibold text-white mb-1 md:mb-2">Full Recovery</h3>
                <p className="text-xs md:text-sm text-gray-300">1-2 weeks for complete healing</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-2 md:mb-4">
                  <AlertTriangle className="text-purple-600" size={16} />
                </div>
                <h3 className="text-sm md:text-lg font-semibold text-white mb-1 md:mb-2">Risks</h3>
                <p className="text-xs md:text-sm text-gray-300">Minimal: bruising, swelling (rare complications)</p>
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
              <h2 className="text-3xl font-bold mb-4">Tear Trough Filler Before and After</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Discover authentic tear trough filler before after results from our London clinic. 
                Our expert eye bag fillers and dermal fillers for under eye bags restore volume, brighten under eyes, 
                and reduce dark circles for natural-looking rejuvenation without lumpy filler under eye issues.
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
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>

          </div>
        </section>

        {/* Under Eye Circles & Tear Troughs Anatomy */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Under Eye Circles | Tear Troughs</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Understanding tear through eyes anatomy is crucial for effective eye fillers for eye bags treatment. 
                The tear trough area consists of fat spaces, ligaments, and muscles that change with age, 
                leading to eye bags and under eye circles that require specialized injectables for under eyes.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-purple-500/20">
                  <CardHeader>
                    <CardTitle className="text-white text-xl text-center">What Is A Tear Trough Filler?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-6">
                      The tear trough dermal filler or eye bag filler is a minimally invasive treatment using what filler for tear trough - 
                      premium hyaluronic acid. This undereye filler treatment aims to restore volume, reduce fillers for under eye circles, 
                      and minimize puffiness while addressing how to remove eye circles effectively. Similar to our <a href="/cheek-filler" className="text-purple-300 hover:underline">cheek filler treatments</a>, tear trough fillers use advanced injection techniques for natural results.
                    </p>
                    <p className="text-gray-300 mb-6">
                      Our tear trough filler cost uk starts from £425. For comprehensive facial rejuvenation, many patients combine this with <a href="/lip-filler" className="text-purple-300 hover:underline">lip filler treatments</a> or <a href="/face-botox" className="text-purple-300 hover:underline">anti-wrinkle injections</a>.
                    </p>
                    
                    <div className="bg-purple-900/30 border-l-4 border-purple-500 p-4 rounded-r-lg">
                      <h4 className="text-purple-300 font-semibold mb-2">Did you know?</h4>
                      <p className="text-gray-300 text-sm">
                        The eye area is very sensitive and the skin around the eyes is up to 10 times more fragile than the skin of your face.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Reason Behind Under Eye Dark Circles */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Reason Behind Under Eye Dark Circles & Eye Bags</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Understanding the root causes behind eye bags, tear through eyes, and under eye circles helps us provide 
                the most effective fillers for dark circles and eye fillers for eye bags treatment approach for lasting results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-6 text-purple-300">Common Causes</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h4 className="font-semibold text-white mb-2">Volume Loss</h4>
                    <p className="text-gray-300 text-sm">Natural aging causes fat pad descent and bone resorption, creating hollow tear troughs that cast shadows.</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h4 className="font-semibold text-white mb-2">Genetics</h4>
                    <p className="text-gray-300 text-sm">Inherited facial structure and skin thickness can predispose to prominent tear troughs from a young age.</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h4 className="font-semibold text-white mb-2">Lifestyle Factors</h4>
                    <p className="text-gray-300 text-sm">Sleep deprivation, dehydration, and excessive screen time can worsen the appearance of dark circles.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-6 text-purple-300">Anatomical Changes</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-pink-500 pl-6">
                    <h4 className="font-semibold text-white mb-2">Collagen Breakdown</h4>
                    <p className="text-gray-300 text-sm">Reduced collagen production leads to thinner skin, making underlying blood vessels more visible.</p>
                  </div>
                  <div className="border-l-4 border-pink-500 pl-6">
                    <h4 className="font-semibold text-white mb-2">Fat Displacement</h4>
                    <p className="text-gray-300 text-sm">Orbital fat pads shift downward with age, creating a hollow appearance in the tear trough area.</p>
                  </div>
                  <div className="border-l-4 border-pink-500 pl-6">
                    <h4 className="font-semibold text-white mb-2">Muscle Changes</h4>
                    <p className="text-gray-300 text-sm">Weakening of the orbicularis oculi muscle contributes to the development of tear trough deformity.</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-black border-purple-500/20 p-6">
                <h3 className="text-lg font-semibold mb-4 text-center text-white">How Tear Trough Fillers Address These Issues</h3>
                <p className="text-gray-300 text-center">
                  Our precisely placed trough filler and eye circle filler treatments restore lost volume, smooth the transition between 
                  the lower eyelid and cheek, and eliminate the shadowing effect. This teardrop filler approach creates a more youthful, 
                  refreshed look while maintaining natural facial expressions - our invisible art approach to aesthetic medicine.
                </p>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Treatment Process Section - NEW */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Tear Trough Filler Treatment Process</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Our comprehensive step-by-step approach ensures safe, comfortable, and effective tear trough filler treatments 
                with optimal results and minimal downtime.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-purple-900/20 border-purple-500/30">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Initial Consultation</h3>
                        <p className="text-gray-300">
                          Comprehensive facial assessment to evaluate your under-eye concerns, discuss expectations, and create a personalised treatment plan. 
                          We review your medical history and explain the procedure in detail, similar to our <a href="/dermal-fillers" className="text-purple-300 hover:underline">dermal filler consultations</a>.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-purple-900/20 border-purple-500/30">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Preparation & Numbing</h3>
                        <p className="text-gray-300">
                          The treatment area is thoroughly cleansed and a topical anaesthetic cream is applied to ensure maximum comfort. 
                          We mark the precise injection points for optimal filler placement.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-purple-900/20 border-purple-500/30">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Precise Injection Technique</h3>
                        <p className="text-gray-300">
                          Using advanced cannula or needle techniques, we carefully inject premium hyaluronic acid filler into the tear trough area. 
                          The procedure typically takes 10-25 minutes with immediate visible results.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="bg-purple-900/20 border-purple-500/30">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Massage & Moulding</h3>
                        <p className="text-gray-300">
                          After injection, we gently massage and mould the filler to ensure smooth, even distribution and natural-looking results. 
                          This prevents lumpy filler under eye complications.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="bg-purple-900/20 border-purple-500/30">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                        5
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Aftercare & Follow-up</h3>
                        <p className="text-gray-300">
                          You receive comprehensive tear trough filler aftercare instructions and a complimentary 2-week follow-up appointment. 
                          Most patients return to normal activities immediately. For optimal facial results, consider combining with <a href="/chin-filler" className="text-purple-300 hover:underline">chin filler</a> or <a href="/masseter-botox" className="text-purple-300 hover:underline">jawline slimming treatments</a>.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tear Troughs Vs. Dark Circles Vs. Eye Bags Comparison */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Tear Troughs Vs. Dark Circles Vs. Eye Bags</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                It is essential to know what condition you are dealing with and what has caused it to happen in the first place. 
                Here is the breakdown of different under-eye concerns and how they can be effectively treated.
              </p>
            </motion.div>

            {/* Treatment Images Display */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div 
                  className="rounded-lg overflow-hidden mb-4 cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => handleImageClick(
                    "/lovable-uploads/c26ed70e-4dce-4f99-b43a-5e674aa1b4bb.png",
                    "Tear trough treatment before and after comparison",
                    "Tear Troughs Treatment Results"
                  )}
                >
                  <img 
                    src="/lovable-uploads/c26ed70e-4dce-4f99-b43a-5e674aa1b4bb.png" 
                    alt="Tear trough treatment before and after comparison"
                    loading="lazy"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <h3 className="text-white text-xl font-semibold">Tear Troughs</h3>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div 
                  className="rounded-lg overflow-hidden mb-4 cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => handleImageClick(
                    "/lovable-uploads/5d69dde0-2e2b-497a-a1eb-bbed6071beb7.png",
                    "Dark circles before and after treatment",
                    "Dark Circles Treatment Results"
                  )}
                >
                  <img 
                    src="/lovable-uploads/5d69dde0-2e2b-497a-a1eb-bbed6071beb7.png" 
                    alt="Dark circles before and after treatment"
                    loading="lazy"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <h3 className="text-white text-xl font-semibold">Dark Circles</h3>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div 
                  className="rounded-lg overflow-hidden mb-4 cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => handleImageClick(
                    "/lovable-uploads/624f9f45-8144-43e0-a979-20cc3a591f28.png",
                    "Eye bags treatment before and after",
                    "Eye Bags Treatment Results"
                  )}
                >
                  <img 
                    src="/lovable-uploads/624f9f45-8144-43e0-a979-20cc3a591f28.png" 
                    alt="Eye bags treatment before and after"
                    loading="lazy"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <h3 className="text-white text-xl font-semibold">Eye Bags</h3>
              </motion.div>
            </div>

            {/* Information Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-purple-500/20 h-full">
                  <CardHeader className="text-center">
                    <CardTitle className="text-white text-xl">Tear Troughs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-center mb-4">
                      A deep groove or crease between your lower eyelid and upper cheek. Depending on its depth, 
                      it can cast a shadow below your eyes, giving a tired, aged, and sad look.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-300 text-sm">Often hereditary</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-300 text-sm">Volume loss under eyes</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-300 text-sm">Creates tired appearance</span>
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
                <Card className="bg-black border-purple-500/20 h-full">
                  <CardHeader className="text-center">
                    <CardTitle className="text-white text-xl">Dark Circles</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-center mb-4">
                      Common condition characterized by visible discoloration. May involve dermal fillers to address 
                      volume loss and combination treatments for comprehensive rejuvenation.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-300 text-sm">Iron deposits (bluish hue)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-300 text-sm">Pigmentation (brownish hue)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-300 text-sm">Genetic predisposition</span>
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
                <Card className="bg-black border-purple-500/20 h-full">
                  <CardHeader className="text-center">
                    <CardTitle className="text-white text-xl">Eye Bags</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-center mb-4">
                      Small bulges or pouches underneath the eyes. Can be hereditary or caused by excessive salt intake, 
                      thyroid issues, or aging. Natural aging process is the primary cause.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                        <span className="text-gray-300 text-sm">Often hereditary</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                        <span className="text-gray-300 text-sm">Lifestyle factors</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                        <span className="text-gray-300 text-sm">Aging process</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

          </div>
        </section>

        {/* Treatment Benefits Section - Simplified Design */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Tear Trough Filler Benefits</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Transform your under-eye area with our expert tear trough filler treatments. 
                Address multiple concerns with one comprehensive solution.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/32022863/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:underline">
                  According to Aesthetic Surgery Journal,
                </a>{" "}
                80–95% patient satisfaction with tear trough filler outcomes. Many patients enhance their results by combining this with 
                <a href="/nose-filler" className="text-purple-300 hover:underline"> non-surgical nose reshaping</a> for complete facial harmony.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Dark Circles Reduction</h3>
                      <p className="text-gray-300">Improves dark circles and discoloration by restoring volume and reducing shadows</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Wrinkle Smoothing</h3>
                      <p className="text-gray-300">Softens and smoothes fine lines and wrinkles around the eye area</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Eye Bag Minimization</h3>
                      <p className="text-gray-300">Reduces the appearance of puffy eye bags and under-eye hollowness</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Instant Results</h3>
                      <p className="text-gray-300">Visible improvements immediately after treatment with natural-looking results</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Skin Quality Enhancement</h3>
                      <p className="text-gray-300">Boosts hydration and stimulates collagen production for healthier skin</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Natural Enhancement</h3>
                      <p className="text-gray-300">Subtle results that maintain your unique facial features</p>
                    </div>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </section>
        {/* Video Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Watch Our Expert Technique</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                See how our experienced cosmetic doctors perform tear trough filler treatments using advanced techniques 
                for natural-looking results that brighten and rejuvenate your under-eye area.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <Card className="bg-black border-purple-500/20 overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video">
                    <iframe
                      src="https://www.youtube.com/embed/DI7U2IuSSRY"
                      title="Tear Trough Filler Treatment - Expert Technique"
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Professional Tear Trough Filler Procedure
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Watch our expert cosmetic doctors demonstrate the precise injection technique used for tear trough fillers. 
                      This video showcases our invisible art approach - achieving natural enhancement that brightens the under-eye 
                      area while maintaining your unique facial features. Our aesthetic medicine philosophy ensures bold, 
                      natural results that are always your way.
                    </p>
                  </div>
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
              <h2 className="text-3xl font-bold mb-4 text-white">Tear Trough Filler Price & Cost in London</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Transparent tear trough filler cost uk pricing for premium under eye filler london treatments. 
                All prices include consultation, dermal filler under eyes treatment, and comprehensive tear trough before and after support from our expert medical team. 
                View our complete <a href="/price-list" className="text-purple-300 hover:underline">price list</a> for all aesthetic treatments.
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
                    <CardTitle className="text-white text-2xl">Tear Trough Filler</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£425</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Professional eye bag fillers and teardrop filler enhancement with premium hyaluronic acid for natural-looking results</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Consultation included</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Premium hyaluronic acid</span>
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
                    <CardTitle className="text-white text-2xl">Polynucleotides</CardTitle>
                    <div className="text-white text-4xl font-bold">£450</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-purple-100">Advanced skin regeneration and hydration treatment</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Comprehensive consultation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Skin regeneration treatment</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Extended aftercare support</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Package deals available</span>
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
                    <CardTitle className="text-white text-2xl">Consultation Only</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£50</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Professional assessment and treatment planning</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Full under eye assessment</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Treatment recommendations</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Deducted from treatment cost</span>
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
                *Consultation fee is deducted from treatment cost if you proceed on the same day
              </p>
            </motion.div>
          </div>
        </section>

        {/* Recovery Period Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Recovery Timeline</h2>
                <p className="text-gray-300 mb-6">
                  Understanding what to expect during your tear trough filler recovery helps ensure 
                  optimal healing and the best possible results.
                </p>
                <div className="space-y-4">
                  <div className="bg-accent rounded-lg p-4">
                    <h4 className="font-semibold text-purple-300 mb-2">First 24-48 Hours</h4>
                    <p className="text-gray-300">Minimal swelling and tenderness around injection sites. Some redness may be visible.</p>
                  </div>
                  <div className="bg-accent rounded-lg p-4">
                    <h4 className="font-semibold text-purple-300 mb-2">2-7 Days</h4>
                    <p className="text-gray-300">Any initial swelling subsides. Bruising, if present, begins to fade.</p>
                  </div>
                  <div className="bg-accent rounded-lg p-4">
                    <h4 className="font-semibold text-purple-300 mb-2">1-2 Weeks</h4>
                    <p className="text-gray-300">Full results become visible as filler settles naturally. Under-eye area appears refreshed and rejuvenated.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Tear Trough Filler Aftercare</h2>
                <p className="text-gray-300 mb-6">
                  Proper aftercare ensures optimal healing and maintains the longevity of your 
                  tear trough filler results.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">First 24 Hours</h4>
                      <p className="text-gray-300">Avoid touching the treated area and applying makeup</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Cold Compress</h4>
                      <p className="text-gray-300">Apply ice packs gently to reduce any swelling or discomfort</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Sleep Position</h4>
                      <p className="text-gray-300">Sleep with your head elevated for the first few nights</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Activity Restrictions</h4>
                      <p className="text-gray-300">Avoid intense exercise and excessive heat for 48 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Sun Protection</h4>
                      <p className="text-gray-300">Use SPF and sunglasses to protect the delicate under-eye area</p>
                    </div>
                  </div>
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
                <p className="text-gray-300">Premium FDA-approved dermal fillers only</p>
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
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Get answers to common questions about tear trough filler treatments and under eye enhancement.
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
              <h2 className="text-3xl font-bold mb-4">Ready to Brighten Your Eyes?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert cosmetic doctors and discover how tear trough fillers 
                can transform your under-eye area for a more refreshed, youthful appearance.
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

        {/* Hidden SEO content for search engines */}
        <div className="sr-only">
          <p>
            Tear trough filler treatments at Cosmedocs London address multiple under-eye concerns including dark circles, 
            eye bags, hollowness, and fine lines. Our expert cosmetic doctors use premium hyaluronic acid-based dermal 
            fillers like Teosyal Redensity II specifically designed for the delicate under-eye area. Located on Harley Street, 
            our clinic offers comprehensive tear trough solutions that brighten and rejuvenate the eye area for a more 
            youthful appearance. The tear trough is the groove between your lower eyelid and upper cheek that can create 
            shadows and make you look tired or aged. Our multi-layered injection approach ensures optimal safety and results, 
            with treatments typically lasting 12-18 months. Under eye fillers work by restoring lost volume, improving skin 
            hydration, and stimulating collagen production for long-term benefits. The procedure takes 10-25 minutes with 
            minimal downtime and immediate visible results. We treat various under-eye concerns including genetic dark circles, 
            volume loss, early-stage eye bags, and fine lines around the eyes. Our aesthetic medicine approach follows the 
            invisible art philosophy, ensuring natural-looking results that enhance your features rather than creating an 
            artificial appearance. Tear trough filler side effects are minimal when performed by experienced professionals, 
            with only mild swelling or bruising possible. The treatment can be combined with other facial treatments like 
            Botox for crow's feet or cheek fillers for comprehensive facial rejuvenation.
          </p>
          <p>
            Understanding the anatomy of tear troughs is essential for successful treatment outcomes. The tear trough area consists 
            of delicate skin overlying the orbital bone, where natural aging processes lead to volume loss and skin thinning. 
            Factors contributing to tear trough concerns include genetics, aging, lifestyle factors, and bone structure. Our 
            tear trough filler London treatments specifically target these anatomical concerns using precise injection techniques 
            that avoid complications. The dermal fillers for under eye bags we use are carefully selected for their safety profile 
            and natural integration with existing tissue. Eye fillers for dark circles work by reflecting light differently and 
            reducing the shadowing effect that makes dark circles visible. Fillers for eye bags help smooth the transition between 
            the lower eyelid and cheek, creating a more refreshed appearance.
          </p>
          <p>
            Our tear trough filler cost UK pricing is transparent and competitive, starting from £425 for professional treatment. 
            The price of under eye filler reflects the expertise of our practitioners, the quality of products used, and comprehensive 
            aftercare support. Tear trough filler aftercare is crucial for optimal results and includes avoiding excessive touching, 
            staying hydrated, and following specific post-treatment guidelines. Understanding tear trough filler swelling stages 
            helps patients know what to expect during recovery. Most patients ask "does tear trough filler hurt?" and are pleased 
            to learn that with our numbing techniques and gentle approach, discomfort is minimal. The question "how long does tear 
            trough filler last?" depends on individual metabolism, lifestyle, and the specific filler used, but typically ranges 
            from 12-18 months. Before and after tear trough filler results demonstrate dramatic improvements in under-eye appearance, 
            with patients reporting looking more rested, youthful, and refreshed. Our clinic specialises in preventing lumpy filler 
            under eye complications through expert technique and appropriate product selection. We offer both traditional needle and 
            advanced cannula techniques for tear trough filler injections, choosing the method best suited to each patient's anatomy.
          </p>
          <p>
            Cosmedocs maintains the highest standards of safety and hygiene in all tear trough treatment procedures. Our medical 
            professionals undergo continuous training in the latest injection techniques and safety protocols. We provide comprehensive 
            consultations where we assess your individual concerns, discuss realistic expectations, and create personalised treatment 
            plans. The under eye filler London market has many providers, but our commitment to natural results and patient safety 
            sets us apart. Every patient receives detailed pre-treatment and post-treatment instructions to ensure optimal outcomes 
            and minimise any potential side effects. Our approach combines medical expertise with artistic vision, ensuring eye bag 
            filler treatments enhance your natural beauty whilst maintaining facial harmony and balance. Learn more about our comprehensive 
            aesthetic medicine approach on our treatments page.
          </p>
        </div>

        <ImageZoomModal
          isOpen={zoomedImage !== null}
          onClose={closeZoom}
          imageSrc={zoomedImage?.src || ""}
          imageAlt={zoomedImage?.alt || ""}
          title={zoomedImage?.title || ""}
        />
      </div>
    </>
  );
};

export default TearTroughFiller;
