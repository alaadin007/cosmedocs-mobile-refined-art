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
import { generateSEOMetadata } from "@/utils/seo";
import { Clock, Calendar, Activity, Syringe, Award, GraduationCap, CheckCircle, Palette, Heart, Shield, Star, Users } from "lucide-react";

const ClinicalConceptsToFlawlessSkin = () => {
  const seoData = generateSEOMetadata(
    "Clinical Concepts to Flawless Skin | Cosmedocs",
    "Unlock flawless skin with Cosmedocs' clinical approach. Expert treatments targeting skin health, rejuvenation, and lasting radiance. Book your consultation today.",
    "/clinical-concepts-to-flawless-skin"
  );

  const beforeAfterImages = [
    { 
      src: "/lovable-uploads/599a995b-159c-485d-a999-4145a961951f.png", 
      alt: "Before and after clinical skin treatment showing improved texture and radiance", 
      caption: "Clinical skin transformation - improved texture, tone, and radiance with personalized treatment" 
    },
    { 
      src: "/lovable-uploads/4e99956b-395a-4499-910f-59a92218f241.png", 
      alt: "Before and after acne treatment showing clearer skin", 
      caption: "Advanced acne treatment - clear, healthy skin achieved through clinical protocols" 
    },
    { 
      src: "/lovable-uploads/69999999-e999-4999-9999-999999999999.png", 
      alt: "Before and after anti-aging treatment showing reduced wrinkles", 
      caption: "Anti-aging transformation - reduced wrinkles and improved skin quality" 
    }
  ];

  const treatments = [
    {
      title: "In-Depth Skin Analysis",
      description: "Thorough assessment using advanced diagnostic tools and visual examination to identify underlying issues and create customized treatment plans."
    },
    {
      title: "Personalized Treatment Plans",
      description: "Customized combination of in-clinic procedures with tailored home care routines designed for optimal results with minimal downtime."
    },
    {
      title: "Advanced Technologies",
      description: "Cutting-edge laser therapy, chemical peels, and microdermabrasion combined with pharmaceutical-grade ingredients."
    },
    {
      title: "Acne Treatment",
      description: "Comprehensive approach to treating acne and breakouts using evidence-based clinical methods for lasting results."
    },
    {
      title: "Anti-Aging Solutions",
      description: "Scientific approach to addressing aging, wrinkles, and skin texture improvement for youthful-looking skin."
    },
    {
      title: "Pigmentation Correction",
      description: "Advanced treatments for pigmentation, sun damage, and uneven skin tone using medical-grade technologies."
    }
  ];

  const faqs = [
    {
      question: "What is clinical skin care and how is it different?",
      answer: "Clinical skin care goes beyond surface-level treatments, focusing on scientifically-backed methods to improve skin health at a cellular level. It involves thorough assessment of your skin's unique needs, followed by targeted treatments and personalized home care routines using pharmaceutical-grade ingredients."
    },
    {
      question: "What conditions can clinical skin care treat?",
      answer: "Our clinical approach addresses acne and breakouts, aging and wrinkles, pigmentation and sun damage, rosacea and redness, sensitive skin and irritation. We also improve skin texture, reduce pore size, increase hydration, and enhance overall radiance."
    },
    {
      question: "How does the treatment process work?",
      answer: "We begin with an in-depth skin analysis using advanced diagnostic tools, evaluating skin type, hydration levels, pore size, pigmentation, and signs of aging. Based on this analysis, we develop a personalized treatment plan combining in-clinic procedures with tailored home care."
    },
    {
      question: "What technologies and treatments do you use?",
      answer: "We use advanced technologies including laser therapy, chemical peels, microdermabrasion, and pharmaceutical-grade ingredients. Our practitioners stay up-to-date with the latest research and innovations in dermatology to provide evidence-based solutions."
    },
    {
      question: "How long does it take to see results?",
      answer: "Results vary depending on your specific skin concerns and treatment plan. Many patients see initial improvements within 2-4 weeks, with optimal results typically achieved after 2-3 months of consistent treatment following your personalized protocol."
    },
    {
      question: "Is there any downtime with clinical treatments?",
      answer: "Our treatment plans are designed to deliver optimal results while minimizing downtime. Most patients can return to normal activities immediately, with some treatments requiring only minimal recovery time. We'll discuss any specific aftercare requirements during consultation."
    },
    {
      question: "What is included in the consultation?",
      answer: "The comprehensive consultation includes advanced skin analysis, evaluation of skin type and concerns, discussion of your goals, and development of a personalized treatment plan. This £150 consultation provides the foundation for your journey to flawless skin."
    },
    {
      question: "Why choose Cosmedocs for clinical skin care?",
      answer: "With over 17 years of experience and our prestigious Harley Street location, we combine advanced technologies with expert knowledge. Our medical professionals provide personalized care, prioritizing safety and satisfaction while delivering lasting results."
    },
    {
      question: "Can clinical skin care help with sensitive skin?",
      answer: "Absolutely. Our clinical approach is particularly beneficial for sensitive skin as we can identify specific triggers and create gentle, effective treatment protocols. We use pharmaceutical-grade products and customize treatments to minimize irritation while maximizing results."
    },
    {
      question: "What makes your approach 'clinical'?",
      answer: "Our clinical approach is evidence-based, using scientific research and proven methodologies. We address root causes rather than just symptoms, use medical-grade products, and our treatments are performed by qualified medical professionals with extensive training."
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
        <meta name="keywords" content="clinical skin care London, skin health, anti-aging treatments, acne treatment, pigmentation correction, Harley Street, dermatology, pharmaceutical grade skincare, skin analysis" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Cosmedocs",
            "description": "Clinical concepts to flawless skin - expert treatments targeting skin health, rejuvenation, and lasting radiance",
            "url": seoData.canonical,
            "telephone": "0333 0551 503",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "10 Harley Street",
              "addressLocality": "London",
              "postalCode": "W1G 9PF",
              "addressCountry": "GB"
            },
            "medicalSpecialty": "Dermatology",
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
                  <span className="text-purple-300">Clinical Concepts to Flawless Skin</span>
                  <span className="block text-sm mt-4">Expert clinical treatments for radiant, healthy skin transformation</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Advanced Skin Health Solutions</p>
                  <p className="text-sm text-gray-300">Scientifically-backed methods for lasting skin health and rejuvenation</p>
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
                    onClick={() => document.getElementById('treatments-section')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    View Treatments
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
              <h2 className="text-3xl font-bold mb-8 text-white">Clinical Skin Care Overview</h2>
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
                <h3 className="text-lg font-semibold text-white mb-2">Consultation Duration</h3>
                <p className="text-gray-300">60-90 minutes comprehensive assessment</p>
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
                <h3 className="text-lg font-semibold text-white mb-2">Results Timeline</h3>
                <p className="text-gray-300">2-4 weeks initial, optimal at 2-3 months</p>
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
                <p className="text-gray-300">Minimal downtime, immediate activity return</p>
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
                <h3 className="text-lg font-semibold text-white mb-2">Approach</h3>
                <p className="text-gray-300">Evidence-based, pharmaceutical-grade</p>
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
              <h2 className="text-3xl font-bold mb-4">Clinical Skin Transformation Results</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See real results from our clinical approach to skin health. Advanced treatments delivering lasting improvements 
                in skin texture, tone, and overall radiance using evidence-based methods.
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

        {/* Clinical Treatments */}
        <section id="treatments-section" className="py-20 bg-accent text-white">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Our Clinical Treatment Approach</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Advanced treatments combining cutting-edge technology with pharmaceutical-grade ingredients for optimal skin health.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {treatments.map((treatment, index) => (
                <motion.div
                  key={treatment.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-black border-purple-400 h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-3 text-white">{treatment.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{treatment.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
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
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Conditions We Address</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Our clinical expertise covers a wide range of skin conditions and concerns 
                with personalized treatment approaches for optimal results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Activity className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Acne & Breakouts</h3>
                <p className="text-gray-300">Comprehensive treatment for all acne types</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Aging & Wrinkles</h3>
                <p className="text-gray-300">Anti-aging solutions for youthful skin</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Palette className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Pigmentation</h3>
                <p className="text-gray-300">Even skin tone and brightness</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Rosacea & Sensitivity</h3>
                <p className="text-gray-300">Gentle care for sensitive skin conditions</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Star className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Texture & Pores</h3>
                <p className="text-gray-300">Smooth, refined skin texture</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Overall Skin Health</h3>
                <p className="text-gray-300">Comprehensive skin wellness approach</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Investment in Your Skin</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Begin your journey to flawless skin with our comprehensive consultation 
                and personalized treatment plan development.
              </p>
            </motion.div>

            <div className="max-w-lg mx-auto">
              <Card className="bg-black border-purple-400">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-white">Clinical Skin Care Consultation</CardTitle>
                  <p className="text-gray-300">Personalized assessment and treatment plan</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-4">£150</div>
                  <p className="text-gray-300 mb-6">
                    Comprehensive skin analysis and customized treatment plan 
                    to address your specific skin concerns.
                  </p>
                  <Button 
                    onClick={() => window.open("https://med.as.me/harleystreet", "_blank")}
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-4 text-lg font-semibold w-full"
                  >
                    Book Your Consultation
                  </Button>
                </CardContent>
              </Card>
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
              <h2 className="text-3xl font-bold mb-8 text-white">Why Choose Cosmedocs for Clinical Skin Care?</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Experience the difference of medically-led clinical skin care with our evidence-based approach, 
                advanced diagnostic tools, and pharmaceutical-grade treatments for lasting skin transformation.
              </p>
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
                  <GraduationCap className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Medical Expertise</h3>
                <p className="text-gray-300">Qualified medical professionals with advanced dermatology training</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Activity className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Advanced Analysis</h3>
                <p className="text-gray-300">State-of-the-art diagnostic tools for comprehensive skin assessment</p>
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
                <h3 className="text-lg font-semibold text-white mb-2">Evidence-Based</h3>
                <p className="text-gray-300">Scientifically-proven treatments with pharmaceutical-grade products</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Personalised Care</h3>
                <p className="text-gray-300">Tailored treatment plans for your unique skin concerns and goals</p>
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
                <h3 className="text-lg font-semibold text-white mb-2">Long-term Results</h3>
                <p className="text-gray-300">Sustainable skin health improvements with ongoing support</p>
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
              <h2 className="text-3xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Learn more about our clinical approach to achieving flawless, healthy skin.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-gray-700">
                    <AccordionTrigger className="text-left text-white hover:text-purple-300">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
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
              <h2 className="text-3xl font-bold mb-4">Ready for Flawless Skin?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Transform your skin with our clinical approach combining advanced technologies, 
                pharmaceutical-grade ingredients, and expert knowledge for lasting radiance and health.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.open("https://med.as.me/harleystreet", "_blank")}
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6"
                >
                  Book Free Consultation
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6"
                >
                  Call 0333 0551 503
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true">
          <h2>Clinical Skin Care London Birmingham Manchester Cardiff</h2>
          <p>
            Clinical skin care London specialists at Cosmedocs provide advanced treatments for acne, aging, pigmentation, and rosacea. Our Harley Street clinic offers expert skin analysis, personalized treatment plans, and pharmaceutical-grade products. Professional skin care services for lasting radiance and rejuvenation. Advanced skin care treatments using laser therapy, chemical peels, and microdermabrasion. Our experienced practitioners deliver optimal results with minimal downtime. Clinical skin care consultations available for customized treatment plans. Expert skin care solutions for improving skin texture, tone, and hydration. Our clinic specializes in treating sensitive skin, reducing pore size, and enhancing overall skin health. Professional skin care services for a more youthful-looking complexion. Harley Street skin care clinic offering comprehensive treatments for various skin conditions. Our medical professionals combine expertise with compassionate care to deliver optimal treatment outcomes. Clinical skin care for long-term skin wellness and beauty.
          </p>
        </div>
      </div>
    </>
  );
};

export default ClinicalConceptsToFlawlessSkin;