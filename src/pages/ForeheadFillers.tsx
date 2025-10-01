import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Link } from "react-router-dom";
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
import { Breadcrumb } from "@/components/Breadcrumb";
import { generateSEOMetadata } from "@/utils/seo";
import { Clock, Calendar, Activity, Syringe, CheckCircle, Award, GraduationCap, Palette, Heart } from "lucide-react";

const ForeheadFillers = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  
  const seoData = generateSEOMetadata(
    "Forehead Filler | Dermal Fillers for Forehead Lines & Wrinkles",
    "Professional dermal fillers forehead treatment in London. View forehead filler before and after results. Expert frown line filler & wrinkle treatment.",
    "/forehead-fillers"
  );

  const beforeAfterImages = [
    { src: "/lovable-uploads/7e486f38-8f56-40fa-9aea-f86747fd0c21.png", alt: "Forehead fillers before and after showing reduction of forehead lines and wrinkles", caption: "Dramatic reduction in forehead lines with natural-looking smoothing results" },
    { src: "/lovable-uploads/31b1d4a0-b008-41ed-b88f-e2351fccab88.png", alt: "Forehead filler treatment before and after comparison", caption: "Enhanced forehead contour and volume restoration with premium dermal fillers" },
    { src: "/lovable-uploads/f00e769d-0a61-4346-afb5-5c4f46b0a591.png", alt: "Forehead depression filled showing before and after transformation", caption: "Forehead depression successfully filled, creating smooth, natural-looking results" },
  ];

  const faqs = [
    {
      question: "Is filler better than Botox for the forehead?",
      answer: "Both treatments have their benefits, depending on your needs. Botox helps reduce muscle movement that creates wrinkles, while fillers can add volume to deeper lines and address contour issues on the forehead."
    },
    {
      question: "How long does forehead filler last?",
      answer: "When injected into the skin, hyaluronic acid binds with water molecules to hydrate and fill the skin's concavity. These dermal fillers typically last 15-18 months, though they can be dissolved earlier if desired."
    },
    {
      question: "What are the side effects of forehead fillers?",
      answer: "Common side effects may include temporary redness, swelling, bruising, or tenderness at the injection site. These side effects typically subside on their own within a few days to a week."
    },
    {
      question: "How to prepare for forehead filler treatment?",
      answer: "Avoid blood-thinning medications and supplements for a week before treatment. Stay hydrated, avoid alcohol 24 hours prior, and follow all pre-treatment instructions provided by your practitioner."
    },
    {
      question: "Can forehead fillers look overfilled or unnatural?",
      answer: "At Cosmedocs, we administer small amounts gradually, allowing you to observe real-time improvements during the procedure. This ensures natural-looking results that enhance your facial symmetry and contour."
    },
    {
      question: "Can forehead fillers be dissolved if I don't like the results?",
      answer: "Yes, hyaluronic acid fillers can be dissolved using hyaluronidase. This provides a reversible option to adjust or correct the treatment outcome if needed."
    },
    {
      question: "How long does the forehead filler procedure take?",
      answer: "The forehead filler procedure typically takes 15-20 minutes, including consultation, preparation, injection of the filler, and post-procedure instructions. It's often called a 'lunchtime procedure' due to its convenience."
    },
    {
      question: "What causes forehead indentations?",
      answer: "Forehead indentations can be caused by loss of collagen and skin elasticity, excessive sun exposure, genetics, or natural aging processes. These create hollow or depressed areas that affect facial harmony."
    },
    {
      question: "How much do forehead fillers cost?",
      answer: "Forehead fillers at Cosmedocs start from £400. We use premium fillers to deliver lasting, beautiful results. Final pricing depends on the amount of product needed and specific requirements."
    },
    {
      question: "Who is an ideal candidate for forehead fillers?",
      answer: "Ideal candidates include individuals with noticeable forehead lines, wrinkles, or indentations, those looking for non-surgical rejuvenation, people with realistic expectations, and those in good health."
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
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Cosmedocs",
            "description": "Expert forehead filler treatments in London - Harley Street aesthetic clinic",
            "url": seoData.canonical,
            "telephone": "0333 0551 503",
            "email": "info@cosmedocs.com",
            "priceRange": "££",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "10 Harley Street",
              "addressLocality": "London",
              "postalCode": "W1G 9PF",
              "addressCountry": "GB"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "51.5174",
              "longitude": "-0.1468"
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
            "medicalSpecialty": "Cosmetic Medicine",
            "sameAs": [
              "https://www.instagram.com/cosmedocs/",
              "https://www.facebook.com/cosmedocs/"
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "Forehead Filler Treatment",
            "description": "Professional dermal filler treatment for forehead lines, wrinkles, and volume restoration using premium hyaluronic acid fillers",
            "procedureType": "Cosmetic Injectable Treatment",
            "bodyLocation": "Forehead",
            "preparation": "Avoid blood-thinning medications, stay hydrated, avoid alcohol 24 hours prior",
            "followup": "2-week follow-up appointment included with treatment",
            "howPerformed": "Injectable dermal fillers carefully administered to targeted forehead areas",
            "medicalSpecialty": "Cosmetic Medicine"
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
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Offer",
            "name": "Forehead Filler Treatment",
            "description": "Premium forehead dermal filler treatments in London",
            "priceCurrency": "GBP",
            "price": "400",
            "priceValidUntil": "2025-12-31",
            "availability": "https://schema.org/InStock",
            "url": seoData.canonical,
            "seller": {
              "@type": "MedicalBusiness",
              "name": "Cosmedocs"
            }
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        {/* Breadcrumb Navigation */}
        <div className="page-container">
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Treatments", href: "/treatments" },
            { label: "Forehead Fillers" }
          ]} />
        </div>

        {/* Hero Section - Same style as LipFillers */}
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
                  <span className="text-purple-300">Forehead Wrinkles Treatment</span>
                  <span className="block text-sm mt-4">Professional dermal fillers forehead treatment with premium filler in forehead</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Expert Forehead Wrinkle Filler</p>
                  <p className="text-sm text-gray-300">Invisible art - Transformation that speaks without saying a word</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl"
                    onClick={() => window.location.href = '/contact'}
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
              <h2 className="text-3xl font-bold mb-8 text-white">Forehead Filler Treatment</h2>
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
                <p className="text-gray-300">15-20 minutes</p>
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
                <p className="text-gray-300">15-18 months</p>
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
                <p className="text-gray-300">No downtime</p>
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
                <p className="text-gray-300">Local topical</p>
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
              <h2 className="text-3xl font-bold mb-4">Forehead Filler Before and After Results</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Explore authentic fillers before and after forehead transformations from our London clinic. 
                Our dermal fillers forehead before after gallery showcases natural face fillers before and after results.
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


            <BeforeAfterImageViewer 
              images={beforeAfterImages}
              isOpen={selectedImageIndex !== null}
              onOpenChange={(open) => !open && setSelectedImageIndex(null)}
              startIndex={selectedImageIndex || 0}
              title="Forehead Filler Results Gallery"
              description="Professional forehead enhancement treatments"
            />
          </div>
        </section>

        {/* Treatment Overview */}
        <section className="py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-6">Dermal Fillers on Forehead Treatment</h2>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Forehead dermal fillers are advanced cosmetic treatments designed to restore volume, smooth wrinkles, and enhance the 
                upper facial contours. These injectable treatments work by replenishing lost volume beneath the skin's surface, filling 
                in deep lines and creases that develop over time due to ageing, sun exposure, and repeated facial expressions.
              </p>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                The procedure involves carefully injecting premium hyaluronic acid-based fillers into specific areas of the forehead 
                to address concerns such as horizontal forehead lines, frown lines between the brows, temple hollowing, and uneven contours. 
                Unlike <Link to="/face-botox" className="text-purple-300 hover:text-purple-200 underline">Botox treatments</Link> which 
                relax muscles, dermal fillers add structural volume and immediately smooth the treated areas.
              </p>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Forehead filler treatments are minimally invasive, typically taking just 15-20 minutes with immediate visible results and no 
                downtime required. The procedure can be combined with other treatments such as <Link to="/dermal-fillers" className="text-purple-300 hover:text-purple-200 underline">facial dermal fillers</Link>, <Link to="/cheek-filler" className="text-purple-300 hover:text-purple-200 underline">cheek fillers</Link>, or <Link to="/lip-fillers" className="text-purple-300 hover:text-purple-200 underline">lip enhancement</Link> for comprehensive facial rejuvenation.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Clinical studies demonstrate <a href="https://pubmed.ncbi.nlm.nih.gov/40601608/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">high patient satisfaction</a> with forehead filler treatments, 
                reflecting the excellent outcomes and lasting results achieved with this procedure.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Forehead Fillers Indications */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-6">Forehead Fillers Indications</h2>
              <p className="text-gray-300 max-w-4xl mx-auto text-lg">
                Forehead fillers are indicated for various aesthetic concerns and functional improvements. Understanding when forehead fillers are the right choice helps ensure optimal treatment outcomes.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6 text-purple-300">Primary Indications</h3>
                <div className="space-y-4">
                  {[
                    "Static forehead wrinkles and lines",
                    "Deep horizontal forehead furrows",
                    "Forehead volume loss due to ageing",
                    "Congenital forehead indentations",
                    "Post-traumatic forehead depressions",
                    "Asymmetrical forehead contours",
                    "Hollow or sunken forehead appearance"
                  ].map((indication, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">{indication}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6 text-purple-300">Secondary Indications</h3>
                <div className="space-y-4">
                  {[
                    "Enhancement of facial proportions",
                    "Improvement of brow position",
                    "Correction of forehead scarring",
                    "Balancing upper facial features",
                    "Creating smoother facial contours",
                    "Addressing genetic forehead irregularities",
                    "Restoring youthful forehead projection"
                  ].map((indication, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">{indication}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What Is Forehead Indentation (Concavity) */}
        <section className="py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-6">What Is Forehead Indentation (Concavity)?</h2>
              <p className="text-gray-300 max-w-4xl mx-auto text-lg">
                Forehead indentation, or concavity, refers to areas of the forehead that appear sunken, hollow, or depressed compared to the surrounding areas. This condition can significantly impact facial harmony and self-confidence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-lg p-6 border border-gray-800"
              >
                <h3 className="text-xl font-bold mb-4 text-purple-300">Causes of Forehead Indentation</h3>
                <div className="space-y-3">
                  {[
                    "Natural ageing process",
                    "Loss of subcutaneous fat",
                    "Genetic predisposition",
                    "Previous trauma or injury",
                    "Muscle atrophy over time",
                    "Bone resorption with age"
                  ].map((cause, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300 text-sm">{cause}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-lg p-6 border border-gray-800"
              >
                <h3 className="text-xl font-bold mb-4 text-purple-300">Types of Forehead Concavity</h3>
                <div className="space-y-3">
                  {[
                    "Temporal hollowing",
                    "Central forehead depression",
                    "Lateral forehead indentations",
                    "Post-traumatic depressions",
                    "Congenital forehead asymmetry",
                    "Age-related volume loss"
                  ].map((type, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300 text-sm">{type}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-lg p-6 border border-gray-800"
              >
                <h3 className="text-xl font-bold mb-4 text-purple-300">Treatment Benefits</h3>
                <div className="space-y-3">
                  {[
                    "Restored facial symmetry",
                    "Enhanced facial contours",
                    "Improved self-confidence",
                    "Natural-looking results",
                    "Non-surgical approach",
                    "Immediate improvement"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300 text-sm">{benefit}</p>
                    </div>
                  ))}
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
              <h2 className="text-3xl font-bold mb-4 text-white">Forehead Filler Pricing London</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Transparent pricing for premium forehead enhancement treatments. All prices include consultation, 
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
                    <CardTitle className="text-white text-2xl">0.5ml Forehead Filler</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£400</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Perfect for subtle smoothing and first-time treatments</p>
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
                    <CardTitle className="text-white text-2xl">1ml Forehead Filler</CardTitle>
                    <div className="text-white text-4xl font-bold">£500</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-purple-100">Ideal for noticeable smoothing and volume restoration</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Comprehensive consultation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Premium hyaluronic acid</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Extended aftercare support</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">2-week follow-up</span>
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
                        <span className="text-gray-300 text-sm">Full facial assessment</span>
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
                className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 text-lg font-semibold"
                onClick={() => window.location.href = '/contact'}
              >
                Book Your Consultation
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Botox vs. Fillers for the Forehead */}
        <section className="py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-6">Botox vs. Fillers for the Forehead: Which One Is Right for You?</h2>
              <p className="text-gray-300 max-w-4xl mx-auto text-lg">
                Understanding the differences between Botox and fillers helps you make an informed decision about the best treatment for your specific forehead concerns and aesthetic goals.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Botox for Forehead */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-lg p-8 border border-gray-800"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-300">Botox Treatment</h3>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-white mb-3">How It Works</h4>
                    <p className="text-gray-300 text-sm">
                      <Link to="/face-botox" className="text-blue-300 hover:text-blue-200 underline">Botox</Link> temporarily relaxes forehead muscles that cause dynamic wrinkles, preventing the formation of lines when you make facial expressions.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-white mb-3">Best For</h4>
                    <div className="space-y-2">
                      {[
                        "Dynamic forehead wrinkles",
                        "Expression lines",
                        "Prevention of new wrinkles",
                        "Horizontal forehead lines",
                        "Muscle-related wrinkles"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                          <p className="text-gray-300 text-sm">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-white mb-3">Results</h4>
                    <p className="text-gray-300 text-sm">
                      Effects last 3-4 months. Gradual muscle relaxation over 7-14 days with natural-looking wrinkle reduction.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Fillers for Forehead */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-lg p-8 border border-gray-800"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-purple-300">Filler Treatment</h3>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-white mb-3">How It Works</h4>
                    <p className="text-gray-300 text-sm">
                      Dermal fillers add volume and structure to the forehead, filling in deep lines, indentations, and restoring lost facial volume.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-white mb-3">Best For</h4>
                    <div className="space-y-2">
                      {[
                        "Deep static wrinkles",
                        "Forehead indentations",
                        "Volume loss",
                        "Facial contouring",
                        "Structural improvements"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2"></div>
                          <p className="text-gray-300 text-sm">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-white mb-3">Results</h4>
                    <p className="text-gray-300 text-sm">
                      Effects last 15-18 months. Immediate volume enhancement with gradual improvement over 2 weeks.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Combination Treatment */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-12 bg-accent rounded-lg p-8 border border-gray-800"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-4">Combination Treatment</h3>
                <p className="text-gray-300 max-w-3xl mx-auto">
                  Many patients achieve optimal results by combining both treatments. Botox addresses dynamic wrinkles while fillers restore volume and structure, creating comprehensive forehead rejuvenation.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                  </div>
                  <h4 className="font-bold text-white mb-2">Comprehensive Results</h4>
                  <p className="text-gray-300 text-sm">Addresses both muscle activity and volume loss</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                  </div>
                  <h4 className="font-bold text-white mb-2">Enhanced Longevity</h4>
                  <p className="text-gray-300 text-sm">Prolonged results with synergistic effects</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                  </div>
                  <h4 className="font-bold text-white mb-2">Natural Appearance</h4>
                  <p className="text-gray-300 text-sm">Subtle, balanced facial rejuvenation</p>
                </div>
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
                Get answers to common questions about forehead filler treatments and what to expect.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-black border border-gray-800 rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left text-white hover:text-purple-300">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-12 text-center"
            >
              <h2 className="text-3xl font-bold mb-6">Ready for Your Forehead's Second Chance?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Book a consultation with our expert practitioners at Cosmedocs Harley Street. 
                Let us help you achieve natural-looking, beautiful results with premium forehead fillers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl"
                  onClick={() => window.location.href = '/contact'}
                >
                  Book Free Consultation
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm">
                  Call 0333 0551 503
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Additional Information Section - Previously Hidden SEO Content */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-8 text-center">Professional Forehead Filler Treatments in London</h2>
              
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="about-clinic" className="bg-black/50 rounded-lg border border-gray-800 px-6">
                  <AccordionTrigger className="text-lg font-semibold text-white hover:text-purple-300">
                    About Our Harley Street Clinic
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed pt-4">
                    Cosmedocs Harley Street clinic offers the most advanced forehead filler treatments in London, utilizing premium hyaluronic acid-based dermal fillers to address forehead wrinkles, lines, and volume loss. Our experienced cosmetic doctors specialize in forehead contouring and enhancement, providing natural-looking results that restore youthful appearance and facial harmony. Our Harley Street location provides a premium treatment environment with state-of-the-art facilities and the highest safety standards.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="treatment-details" className="bg-black/50 rounded-lg border border-gray-800 px-6">
                  <AccordionTrigger className="text-lg font-semibold text-white hover:text-purple-300">
                    Treatment Details & Procedure
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed pt-4">
                    The forehead filler procedure is minimally invasive, requiring no downtime, with results lasting 15-18 months. Whether you're dealing with forehead indentations, deep furrows, or loss of volume, our expert practitioners create personalized treatment plans to achieve optimal outcomes. The procedure takes only 15-20 minutes and provides immediate results, making it an ideal lunchtime treatment. Pre-treatment consultation includes detailed assessment, medical history review, and realistic expectation setting.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="treatment-benefits" className="bg-black/50 rounded-lg border border-gray-800 px-6">
                  <AccordionTrigger className="text-lg font-semibold text-white hover:text-purple-300">
                    What Can Forehead Fillers Treat?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed pt-4">
                    The treatment effectively addresses static wrinkles, hollow temples, uneven brow height, and facial asymmetry. Using only FDA-approved fillers from renowned brands like Juvéderm, Teosyal, and Stylage, we ensure safety and efficacy in every procedure. Forehead fillers can be combined with <Link to="/face-botox" className="text-purple-300 hover:text-purple-200 underline">Botox</Link> for comprehensive facial rejuvenation, targeting both dynamic and static wrinkles. Forehead fillers restore collagen production, improve skin texture, and provide long-lasting volume enhancement.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="philosophy" className="bg-black/50 rounded-lg border border-gray-800 px-6">
                  <AccordionTrigger className="text-lg font-semibold text-white hover:text-purple-300">
                    Our Invisible Art Philosophy
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed pt-4">
                    Our invisible art philosophy ensures subtle, natural enhancement that maintains your unique facial characteristics whilst improving overall appearance. We believe in transformation that speaks without saying a word - bold, natural, always your way. Our practitioners assess each patient's facial anatomy and aesthetic goals to recommend the optimal filler type and amount for truly personalized results.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="recovery" className="bg-black/50 rounded-lg border border-gray-800 px-6">
                  <AccordionTrigger className="text-lg font-semibold text-white hover:text-purple-300">
                    Recovery & Side Effects
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed pt-4">
                    Common side effects are minimal and temporary, including mild swelling, redness, or bruising at injection sites. Recovery is immediate with no downtime required, allowing patients to return to normal activities straight away. The hyaluronic acid fillers we use can be dissolved if needed, providing peace of mind and flexibility. Post-treatment care instructions help optimise results and minimise potential side effects.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="suitability" className="bg-black/50 rounded-lg border border-gray-800 px-6">
                  <AccordionTrigger className="text-lg font-semibold text-white hover:text-purple-300">
                    Who Is Suitable for Treatment?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed pt-4">
                    The treatment is suitable for both men and women seeking non-surgical facial rejuvenation. Ideal candidates include those with forehead wrinkles, volume loss, indentations, or those looking to enhance facial harmony. Our comprehensive consultation process ensures you're a suitable candidate and helps set realistic expectations for your treatment outcomes.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ForeheadFillers;