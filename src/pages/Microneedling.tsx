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
import { generateSEOMetadata } from "@/utils/seo";
import { Clock, Calendar, Activity, Syringe, Award, GraduationCap, CheckCircle, Palette, Heart } from "lucide-react";

const Microneedling = () => {
  const bookingUrl = "https://med.as.me/harleystreet";
  const seoData = generateSEOMetadata(
    "Microneedling London Price | Face Needling Treatment Cost UK | Cosmedocs",
    "Professional microneedling London from £250. Face needling therapy for wrinkles, acne scars & skin tightening. Book micro needle treatment today.",
    "/microneedling"
  );

  const beforeAfterImages = [
    { 
      src: "/lovable-uploads/687bbacf-7f97-4101-9c38-74d4bd9ce746.png", 
      alt: "Microneedling 7-day transformation journey", 
      caption: "7-day microneedling transformation journey showing the progressive healing and improvement in skin texture and tone" 
    },
    { 
      src: "/lovable-uploads/e2ca4841-297f-4f7d-808d-cdc8bf831b6e.png", 
      alt: "Microneedling before and after results", 
      caption: "Remarkable improvement in skin texture, pore size, and overall complexion achieved through advanced microneedling" 
    },
    { 
      src: "/lovable-uploads/779cf100-48e1-4e15-adbf-19ab9946904e.png", 
      alt: "Mixed peel and microneedling treatment results", 
      caption: "Combined mixed peel and microneedling treatment showing dramatic improvement in skin clarity and smoothness over time" 
    }
  ];

  const faqs = [
    {
      question: "What is microneedling and how does it work?",
      answer: "Microneedling, also known as collagen induction therapy or skin needling, uses fine needles to create controlled micro-injuries in the skin. This triggers the body's natural healing response, promoting collagen and elastin production for improved skin texture, tone, and firmness. What does micro needling do? It stimulates deep dermal regeneration for lasting improvements."
    },
    {
      question: "How long do microneedling results last?",
      answer: "Microneedling results typically last 6-12 months, with optimal benefits appearing 4-6 weeks after treatment. Regular maintenance sessions every 3-6 months help maintain long-lasting improvements in skin quality and texture. The microneedling procedure creates progressive improvements that continue developing over time."
    },
    {
      question: "Is microneedling painful?",
      answer: "We apply a topical anaesthetic before treatment to minimise discomfort. Most patients describe the sensation as mild to moderate, similar to light sandpaper being moved across the skin. Any discomfort subsides quickly after treatment. The needle facial treatment is well-tolerated by the vast majority of patients."
    },
    {
      question: "What skin concerns does microneedling address?",
      answer: "Microneedling effectively treats acne scars, fine lines, wrinkles, enlarged pores, stretch marks, uneven skin tone, and texture irregularities. Micro needling wrinkles show particularly impressive results. It's also excellent for overall skin rejuvenation and achieving flawless skin quality through professional micro needle treatment."
    },
    {
      question: "What's the recovery time after microneedling?",
      answer: "Initial redness and mild swelling typically subside within 24-48 hours. Skin may feel slightly sensitive for 2-3 days. Most patients return to normal activities within 24 hours with proper aftercare and sun protection. Using the right cream for microneedling aftercare optimises healing."
    },
    {
      question: "How many microneedling sessions do I need?",
      answer: "Most patients see improvement after one session, but optimal results typically require 3-6 treatments spaced 4-6 weeks apart. How many sessions of microneedling depends on your skin concerns and desired outcomes, which we'll assess during consultation. Facial micro needling courses deliver the best long-term results."
    },
    {
      question: "Can microneedling be combined with other treatments?",
      answer: "Yes, micro needling treatment combines excellently with chemical peels, PRP (platelet-rich plasma), and skincare serums. Microneedling with skin booster is particularly popular for enhanced hydration and results. We often recommend combination treatments for comprehensive skin rejuvenation."
    },
    {
      question: "Who is not suitable for microneedling?",
      answer: "Microneedling is not recommended for pregnant women, those with active acne, open wounds, blood clotting disorders, or certain skin conditions. Our doctors will assess your suitability during a comprehensive consultation to ensure micro needling for face treatments are safe and effective for you."
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
        <meta name="keywords" content="microneedling london price, micro needle price, microneedling cost, how much is microneedling uk, microneedle cost, microneedling with skin booster, microneedling skin tightening, micro needle for face, microneedling treatment, benefits of microneedling face, face microneedling, face needling therapy, needle facial treatment, cost for microneedling, what is microneedling facial, micro needling facial, what does microneedling do, microneedling for wrinkles, micro needling face, skin needling, microneedling london, microneedling for face, micro needle treatment, cost of microneedling, microneedling face, derma needling, microneedling facial, microneedling price uk, micro needling for face, microneedling price, needling treatment, microneedling procedure, facial micro needling, microneedling uk, microneedling on face, needle treatment, micro needling cost, microneedling, micro needle facial, micro needling uk, microneedling for skin tightening, skin microneedling, how many sessions of microneedling, microneedling cost uk, facial microneedling, microneedling collagen, body microneedling, how much does microneedling cost, how long does microneedling take, microneedling reviews, micro needle therapy, microneedling how much, what is microneedling, micro derma needling, medical microneedling, best microneedling london, face needling, what is micro needling" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Cosmedocs",
            "description": "Expert microneedling treatments in London for flawless skin rejuvenation",
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
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "Microneedling Treatment",
            "alternateName": ["Collagen Induction Therapy", "Skin Needling", "Face Needling"],
            "description": "Professional microneedling treatment using medical-grade devices to stimulate collagen production and improve skin texture, tone, and firmness",
            "procedureType": "Cosmetic",
            "bodyLocation": {
              "@type": "AnatomicalStructure",
              "name": "Facial Skin"
            },
            "preparation": "Topical anaesthetic applied before treatment",
            "followup": "Comprehensive aftercare and follow-up support",
            "howPerformed": "Using fine needles to create controlled micro-injuries in the skin, triggering natural healing response",
            "status": "Available",
            "availableService": {
              "@type": "MedicalTherapy",
              "name": "Microneedling Therapy",
              "offers": {
                "@type": "Offer",
                "price": "250",
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
      </Helmet>

      <div className="bg-black text-white">
        {/* Hero Section */}
        <header className="relative py-32 overflow-hidden min-h-screen flex items-center">
          <div className="page-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-white">
                  Microneedling
                  <span className="block text-purple-300">London</span>
                  <span className="block text-sm mt-4">Professional micro needle treatment for flawless skin rejuvenation</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl">
                  <span className="text-purple-300 font-semibold">Invisible Art</span>
                  <br />
                  Transformation that speaks without saying a word
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={() => window.open(bookingUrl, "_blank")}
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
              <h2 className="text-3xl font-bold mb-4 text-white">Microneedling Treatment</h2>
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
                <p className="text-gray-300">45-60 minutes including consultation</p>
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
                <p className="text-gray-300">3-5 months with progressive improvement</p>
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
                <p className="text-gray-300">24-48 hours mild redness, return to normal activities next day</p>
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
                <p className="text-gray-300">Topical anaesthetic for maximum comfort</p>
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
              <h2 className="text-3xl font-bold mb-4">Microneedling Before and After</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See the transformative results achieved with our advanced microneedling treatments. 
                Each patient receives personalized care for optimal skin rejuvenation.
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
              <CarouselPrevious className="text-white border-white hover:bg-white hover:text-black" />
              <CarouselNext className="text-white border-white hover:bg-white hover:text-black" />
            </Carousel>

          </div>
        </section>

        {/* About Microneedling Treatment Section */}
        <article className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-8 text-white">What is Microneedling?</h2>
              <div className="max-w-4xl mx-auto text-left">
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                  Microneedling (also known as skin needling, face needling therapy, or percutaneous collagen induction therapy) is a minimally 
                  invasive micro needle treatment that involves creating precise, microscopic punctures in the stratum corneum of your 
                  skin with small needles. This needle facial treatment is perfect for face microneedling and skin tightening. Similar to other advanced treatments like <a href="/dermal-fillers" className="text-purple-300 hover:text-purple-200 underline">dermal fillers</a> and <a href="/chemical-peels" className="text-purple-300 hover:text-purple-200 underline">chemical peels</a>, microneedling offers transformative results.
                </p>
                <p className="text-gray-300 leading-relaxed mb-12 text-lg">
                  These "micro-injuries" act by encouraging the skin to heal itself naturally through a process known as 
                  dermal remodelling, without causing any scars. Medical microneedling cost UK starts from £250 for professional facial microneedling treatment. Many patients combine this treatment with <a href="/prp-treatment" className="text-purple-300 hover:text-purple-200 underline">PRP therapy</a> for enhanced results.
                </p>
              </div>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-black/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
                  <h4 className="text-white text-xl font-semibold mb-6 text-center">Why Choose Microneedling?</h4>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    This minimally invasive skin perfecting procedure improves skin texture and minimises wrinkles through microneedling collagen induction. 
                    What does microneedling do? It helps with hyper-pigmentation, disfiguring scars and acne scarring, stretch marks and 
                    promotes new collagen fibres. Microneedling for skin tightening delivers exceptional results with minimal downtime. Similar benefits to derma roller treatment but with professional medical-grade precision.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Our derma needling therapy serves your skin in more ways than you can imagine! From correcting 
                    pitted acne scarring to stretch marks, skin laxity and unwanted fine lines with minimal discomfort and 
                    practically no recovery. Benefits of microneedling face include improved texture, reduced pore size, and enhanced collagen production. Whether you're considering micro-needling or microderm needling, our advanced techniques deliver superior results.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </article>

        {/* How Does Microneedling Work Section */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">How Does Microneedling Work?</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Understanding the science behind collagen induction therapy. Independent research published in the British Journal of Dermatology and UK academic centres — including randomised controlled trials — supports microneedling as a safe, effective treatment for acne scarring, texture improvement and skin rejuvenation. <a href="https://academic.oup.com/bjd/article/192/1/19/7749284?" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">Peer reviewed research</a> demonstrates measurable improvements in scars and wrinkles with an excellent safety profile.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="bg-gradient-to-r from-purple-600/20 to-purple-800/20 border border-purple-500/30 rounded-xl p-8">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    An ultimate skin rejuvenating experience with powerful wand micro-needles, trending for all the right reasons. 
                    How long does microneedling take? In just under 30-40 minutes, the medical microneedling prepares your skin for fresh collagen and elastin and 
                    helps your skincare topicals perform their best. Cost for microneedling includes comprehensive aftercare support.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    What is microneedling facial therapy? Microneedling therapy uses your body's natural healing response to deliver a wide range of skin benefits. 
                    From correcting pitted acne scarring to stretch marks, skin laxity and unwanted fine lines, microneedling for wrinkles provides 
                    lacklustre complexion improvement with minimal discomfort and practically no recovery. Face needling delivers exceptional results.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl">
                  {/* Microneedling Treatment Video */}
                  <div className="relative">
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/tjbOemp3Dro"
                      title="Microneedling Treatment Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      className="w-full aspect-video"
                    ></iframe>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-white text-sm font-medium">Professional Microneedling Treatment Demonstration</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Duration of Results Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">How Long Do Results Last?</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Microneedling results don't last forever — but they also don't vanish right away. 
                The duration depends on the skin concern treated, the number of sessions, and aftercare.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-black/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 h-full">
                  <h3 className="text-white text-xl font-semibold mb-6 flex items-center gap-2">
                    <Clock className="text-purple-400" size={24} />
                    Duration of Results
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-purple-300 font-semibold mb-2">General Improvement</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Skin texture, glow, and fine lines: lasts about <span className="text-white font-semibold">3–5 months</span> after a full course of sessions.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-purple-300 font-semibold mb-2">Collagen Stimulation</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Your body produces new collagen and elastin for up to <span className="text-white font-semibold">3–6 months</span> post-treatment, 
                        so results can even improve gradually before tapering.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-purple-300 font-semibold mb-2">Acne Scars & Deeper Issues</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Often need a series of 3–6 sessions spaced 4–6 weeks apart; the improvements can be long-lasting if 
                        maintained with yearly touch-ups.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-purple-300 font-semibold mb-2">Pigmentation / Tone Correction</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Typically lasts several months, but can fade faster if sun protection is neglected.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-purple-600/30 to-purple-800/30 rounded-xl p-8 border border-purple-500/20 h-full">
                  <h3 className="text-white text-xl font-semibold mb-6 flex items-center gap-2">
                    <Calendar className="text-purple-400" size={24} />
                    Maintenance
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="text-purple-400 flex-shrink-0 mt-1" size={20} />
                      <p className="text-gray-300 leading-relaxed">
                        A maintenance session every <span className="text-white font-semibold">4–6 months</span> is commonly recommended.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="text-purple-400 flex-shrink-0 mt-1" size={20} />
                      <p className="text-gray-300 leading-relaxed">
                        For anti-ageing, some dermatologists suggest <span className="text-white font-semibold">2–3 sessions per year</span>.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="text-purple-400 flex-shrink-0 mt-1" size={20} />
                      <p className="text-gray-300 leading-relaxed">
                        Using SPF, a good skincare routine, and avoiding smoking can extend results.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-black/30 rounded-lg border border-purple-400/30">
                    <p className="text-purple-200 text-sm leading-relaxed italic">
                      "Results are maximised when combined with proper skincare and sun protection. 
                      Your personalised maintenance plan will be discussed during your consultation. Using the right cream for microneedling aftercare is essential for optimal healing."
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits and Treatment Process Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Microneedling Price UK & Benefits</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Discover the comprehensive benefits and understand our professional microneedling cost UK pricing. Microneedling how much does it cost? From £250 per session with competitive packages available.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-accent border border-purple-500/20 rounded-xl p-6 h-full">
                  <h3 className="text-white text-xl font-semibold mb-6">Microneedling Benefits for Face</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="text-purple-400 flex-shrink-0 mt-1" size={16} />
                      <span className="text-gray-300">Corrects fine lines and wrinkles through microneedling collagen boost</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="text-purple-400 flex-shrink-0 mt-1" size={16} />
                      <span className="text-gray-300">Addresses sun damage and hyperpigmentation</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="text-purple-400 flex-shrink-0 mt-1" size={16} />
                      <span className="text-gray-300">Fades acne and acne scars effectively through micro needle therapy</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="text-purple-400 flex-shrink-0 mt-1" size={16} />
                      <span className="text-gray-300">Minimizes large open pores</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="text-purple-400 flex-shrink-0 mt-1" size={16} />
                      <span className="text-gray-300">Rejuvenates hands, neck and décolletage with body microneedling</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="text-purple-400 flex-shrink-0 mt-1" size={16} />
                      <span className="text-gray-300">Enhances skincare product absorption - cream for microneedling works better</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="text-purple-400 flex-shrink-0 mt-1" size={16} />
                      <span className="text-gray-300">Safe for all skin types and tones - what is micro needling's safest form</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-purple-600/30 to-purple-800/30 rounded-xl p-6 border border-purple-500/20 h-full">
                  <h3 className="text-white text-xl font-semibold mb-6">Microneedling Procedure & Cost</h3>
                  <div className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">
                      After applying a topical numbing cream, the skin is thoroughly cleansed. The eDermastamp single-use, 
                      sterile needle microneedling device is then set to the correct speed, needle lengths and depth for the 
                      treatment area. How much is microneedling? Our facial micro needling starts from £250. For comprehensive facial rejuvenation, many patients combine microneedling with <a href="/face-botox-areas" className="text-purple-300 hover:text-purple-200 underline">anti-wrinkle treatments</a>. How much is micro needling varies based on treatment areas and session packages.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      With microneedling treatment, the depth is within the papillary dermal layer of the skin, where microneedling collagen 
                      and elastin fibres are located. The tiny holes close over almost immediately as the channels are small. 
                      What is a microneedling facial? It's professional needle treatment for optimal skin rejuvenation, often recommended alongside <a href="/profhilo" className="text-purple-300 hover:text-purple-200 underline">Profhilo</a> for enhanced hydration. We also offer microneedling with skin booster for maximum results.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      The 'micro tears' to the dermis encourages the skin to repair itself by activating skin's healing process 
                      and promoting collagen production and elastin generation. How many sessions of microneedling are needed? 
                      Typically 3-6 sessions for optimal results, with microneedling reviews showing excellent satisfaction. What does micro needling do in the long term? It creates lasting improvements through natural collagen regeneration.
                    </p>
                    
                    <div className="mt-6 pt-4 border-t border-purple-500/20">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-xl font-bold text-purple-300 mb-1">30-40</div>
                          <div className="text-sm text-gray-300">Minutes Treatment</div>
                        </div>
                        <div>
                          <div className="text-xl font-bold text-purple-300 mb-1">15-18</div>
                          <div className="text-sm text-gray-300">Months Results</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
              <h2 className="text-3xl font-bold mb-4 text-white">Microneedling Pricing London</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Transparent pricing for premium microneedling treatments. All prices include consultation, 
                treatment, and aftercare support from our expert medical team. Micro needle price and microneedle cost vary by treatment area.
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
                    <CardTitle className="text-white text-2xl">Single Session</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£250</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Perfect for first-time treatments and maintenance</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Consultation included</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Professional-grade microneedling</span>
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
                    <CardTitle className="text-white text-2xl">Course of 3</CardTitle>
                    <div className="text-white text-4xl font-bold">£600</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-purple-100">Best value for optimal results and transformation</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Save £150 on single sessions</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Comprehensive treatment plan</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Extended aftercare support</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Progress monitoring</span>
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
                        <span className="text-gray-300 text-sm">Full skin assessment</span>
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
              <Button 
                onClick={() => window.open(bookingUrl, "_blank")}
                className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 text-lg font-semibold"
              >
                Book Your Consultation
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Cosmedocs */}
        <section className="py-20 bg-accent">
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
                <p className="text-gray-300">Advanced medical-grade equipment only</p>
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
                Everything you need to know about our advanced microneedling treatments
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <AccordionItem value={`item-${index}`} className="bg-background rounded-lg border border-gray-800">
                      <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                        <span className="text-lg font-semibold">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
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
              <h2 className="text-3xl font-bold mb-4">Ready for Flawless Skin?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book a consultation with our expert practitioners and discover how microneedling can transform your skin.
              </p>
              <Button 
                onClick={() => window.open(bookingUrl, "_blank")}
                className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl"
              >
                Book Consultation
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h2>Microneedling London Harley Street Cosmedocs</h2>
          <p>
            Microneedling London Harley Street expert treatments for flawless skin rejuvenation. Professional collagen induction therapy using advanced medical-grade devices for natural skin transformation. Cosmedocs offers the finest microneedling treatments in London, combining scientific precision with artistic excellence to achieve remarkable improvements in skin texture, tone, and quality. Our experienced practitioners specialize in addressing acne scars, fine lines, enlarged pores, and overall skin rejuvenation through carefully calibrated microneedling protocols. Serving patients from across the UK including those seeking microneedling Cambridge consultations.
          </p>
          <p>
            Located in the heart of Harley Street, our clinic provides comprehensive microneedling consultations and personalized treatment plans designed to deliver optimal results while maintaining the highest safety standards. Each microneedling session is performed by qualified medical professionals using premium equipment and proven techniques that stimulate natural collagen production for long-lasting skin improvements. We understand that microneedling cost UK is an important consideration, which is why we offer transparent pricing starting from £250 for single sessions and competitive course packages for multiple treatments. How much is microneedling UK? Cost for microneedling varies based on treatment areas, with facial microneedling being our most popular service.
          </p>
          <p>
            Our microneedling London clinic specializes in face needling therapy, skin needling, and derma needling treatments suitable for all skin types and tones. Whether you're seeking microneedling for wrinkles, acne scar reduction, or overall facial rejuvenation, our medical team creates bespoke treatment protocols tailored to your specific concerns. The benefits of microneedling face treatments extend beyond surface improvements, promoting deeper dermal remodeling and enhanced skincare product absorption for comprehensive skin transformation. Micro needling wrinkles respond exceptionally well to our professional protocols, delivering visible improvements within weeks.
          </p>
          <p>
            What is microneedling facial treatment? It's a minimally invasive procedure that uses micro needle therapy to trigger your body's natural healing mechanisms. The microneedling procedure takes approximately 45-60 minutes including consultation, with results duration of 3-5 months and progressive improvement continuing for months after treatment. Our medical microneedling protocols combine precise needle depths with optimal treatment frequency to maximize collagen induction whilst ensuring patient comfort and safety throughout the process. How long does microneedling take? Most treatments are completed within 30-40 minutes, making it an ideal lunchtime procedure for busy professionals.
          </p>
          <p>
            Discover why patients choose Cosmedocs for their microneedling treatments and experience the transformative power of professional skin rejuvenation in London's premier medical district. From microneedling with skin booster enhancements to body microneedling for stretch marks, our comprehensive service range addresses diverse aesthetic concerns with proven efficacy. Best microneedling London clinics provide not just the treatment but comprehensive aftercare guidance, including recommendations for cream for microneedling post-treatment care. Book your microneedling consultation today and join the thousands of satisfied patients who have achieved remarkable skin improvements through our expert needle facial treatments at our Harley Street London location. Microneedling UK standards are maintained across all our treatments, ensuring you receive world-class care.
          </p>
        </div>
      </div>
    </>
  );
};

export default Microneedling;