import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Calendar, Shield, Activity, Award, GraduationCap, CheckCircle, Palette, Heart } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const ChemicalPeel = () => {
  const seoData = generateSEOMetadata(
    "Chemical Peel London | £120 | Cosmedocs | Harley Street",
    "Professional chemical peel treatments in London's Harley Street. Expert skin resurfacing for acne, pigmentation & anti-aging. From £120. Book your session today.",
    "/chemical-peel"
  );

  const bookingUrl = "https://med.as.me/harleystreet";

  // Before/after images for Chemical Peel
  const beforeAfterImages = [{
    src: "/lovable-uploads/3184a1ab-13a8-4518-9753-e9ad278346e6.png",
    alt: "Chemical peel before and after skin improvement London Cosmedocs",
    caption: "Dramatic improvement in skin texture and overall complexion after chemical peel treatment"
  }, {
    src: "/lovable-uploads/d947c958-7a72-47b1-8681-d32aae21773c.png",
    alt: "Chemical peel skin rejuvenation results London Harley Street",
    caption: "Significant enhancement in skin clarity and smoothness with improved overall appearance"
  }, {
    src: "/lovable-uploads/5f980404-9482-4c99-aa46-8001ce1495c8.png",
    alt: "Chemical peel eye area treatment London Cosmedocs",
    caption: "Remarkable improvement in eye area skin texture and reduction of signs of aging"
  }, {
    src: "/lovable-uploads/5dfb6e21-7126-47d6-850b-d01c94e0988a.png",
    alt: "Chemical peel profile view results London treatment",
    caption: "Visible enhancement in skin quality and texture from profile view after treatment"
  }];

  const faqs = [
    {
      question: "How much does a chemical peel cost?",
      answer: "Chemical peel prices at Cosmedocs start from £120 for mild peels, £170 for medium peels, and £200 for deep peels. Course packages are available for better value. Final pricing depends on your skin assessment and treatment plan."
    },
    {
      question: "Are chemical peels safe?",
      answer: "Yes, chemical peels are safe when performed by qualified practitioners. At Cosmedocs, our experienced skin experts use tested formulations suitable for all skin types and follow strict safety protocols before, during, and after treatment."
    },
    {
      question: "Do chemical peels hurt?",
      answer: "Chemical peels may cause a slight stinging sensation, but they are not unbearably painful. Our experts use gentle peeling solutions to minimize discomfort. Some redness, itching, or flaking may occur post-treatment but subsides quickly."
    },
    {
      question: "How often can I have a chemical peel?",
      answer: "Depending on the type of peel, treatments can be done once or twice a month. Mild peels can be repeated more frequently, while deeper peels require longer intervals. Our dermatologists will advise the best schedule for your skin type."
    },
    {
      question: "What should I expect after a chemical peel?",
      answer: "After treatment, you may experience mild redness, peeling, and sensitivity. This is normal and indicates the skin is regenerating. Recovery time varies from 3-5 days for mild peels to up to 2 weeks for deeper peels."
    },
    {
      question: "Which chemical peel is best for acne?",
      answer: "Salicylic acid peels are excellent for acne as they unclog pores and reduce blemishes. Jessner's peel and our signature 'Peel to Reveal' treatment are also highly effective for acne and acne scarring."
    },
    {
      question: "Can I wear makeup after a chemical peel?",
      answer: "Wait at least 24 hours before applying makeup after a mild peel. For medium to deep peels, avoid makeup for longer periods to prevent infection and allow proper healing. Our experts will provide specific aftercare instructions."
    },
    {
      question: "What skin concerns do chemical peels treat?",
      answer: "Chemical peels effectively treat aging skin, sun damage, acne, acne scars, enlarged pores, rough texture, dull complexion, uneven skin tone, melasma, and hyperpigmentation. They're versatile treatments suitable for various skin concerns."
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
        <meta name="keywords" content="chemical peel London, skin resurfacing, acne treatment, pigmentation, anti-aging, Harley Street, skin rejuvenation, glycolic acid, salicylic acid" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Cosmedocs",
            "description": "Expert chemical peel treatments in London",
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
                  <span className="text-purple-300">Professional Chemical Peels London</span>
                  <span className="block text-sm mt-4">Invisible art - transformative skin resurfacing that speaks without words</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Expert Skin Resurfacing</p>
                  <p className="text-sm text-gray-300">Professional treatments for acne, pigmentation & anti-aging</p>
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

        {/* Summary of Treatment */}
        <section className="py-16 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-8 text-white">Chemical Peel Treatment Summary</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-purple-300" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Treatment Duration</h3>
                <p className="text-gray-300">30-45 minutes including consultation</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="text-purple-300" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Results Duration</h3>
                <p className="text-gray-300">Monthly treatments recommended</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Activity className="text-purple-300" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Recovery Time</h3>
                <p className="text-gray-300">3-14 days depending on peel depth</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Palette className="text-purple-300" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Peel Types</h3>
                <p className="text-gray-300">Light, medium & deep peels available</p>
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
              <h2 className="text-3xl font-bold mb-4">Chemical Peel Before & After Results</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See real results from our chemical peel treatments at Cosmedocs London. 
                Professional skin resurfacing delivers dramatic improvement in skin texture, clarity, and overall appearance.
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

        {/* Treatment Types Section */}
        <section className="py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Types of Chemical Peels</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Choose from our comprehensive range of chemical peels, each designed to address specific skin concerns and deliver optimal results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-none h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Light Peels</CardTitle>
                    <p className="text-purple-300 font-bold text-lg">From £120</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="text-gray-300 space-y-2">
                      <li>• Salicylic Acid Peels</li>
                      <li>• Glycolic Acid Peels</li>
                      <li>• Lactic Acid Peels</li>
                    </ul>
                    <p className="text-sm text-gray-400">
                      Ideal for mild skin concerns, improving texture and reducing pigmentation with minimal downtime.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-none h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Medium Peels</CardTitle>
                    <p className="text-purple-300 font-bold text-lg">From £170</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="text-gray-300 space-y-2">
                      <li>• TCA Peels</li>
                      <li>• Jessner's Peel</li>
                      <li>• The Perfect Peel</li>
                    </ul>
                    <p className="text-sm text-gray-400">
                      More intensive treatment for sun damage, acne scars, and deeper skin concerns.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-none h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Deep Peels</CardTitle>
                    <p className="text-purple-300 font-bold text-lg">From £200</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="text-gray-300 space-y-2">
                      <li>• Phenol Peels</li>
                      <li>• Peel to Reveal</li>
                    </ul>
                    <p className="text-sm text-gray-400">
                      Most dramatic results for deep wrinkles, severe sun damage, and significant skin rejuvenation.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What is Chemical Peel & Who Is Chemical Peel For */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-8 text-center text-white">What is Chemical Peel?</h2>
              
              <div className="space-y-6 text-gray-300 text-lg mb-12">
                <p>
                  Chemical Peel at Cosmedocs offers you an ideal non-invasive solution for resurfacing and regenerating your skin. 
                  This treatment is highly effective in addressing various skin complaints such as fine lines, wrinkles, 
                  pigmentation issues, acne, and dull skin through controlled chemical exfoliation.
                </p>
                <p>
                  With a gentle exfoliation of the outermost layer of skin cells, our process reveals a fresher and 
                  revitalized complexion. The treatment uses carefully selected acids that penetrate the skin to remove 
                  damaged cells and stimulate new cell regeneration.
                </p>
                <p>
                  Chemical peels are versatile and can be tailored to meet specific skin concerns and needs. From mild 
                  peels for subtle improvements to deeper peels for more dramatic skin rejuvenation experience, there 
                  is a peel suitable for everyone at our Harley Street clinic.
                </p>
              </div>

              <h3 className="text-3xl font-bold mb-6 text-center text-white">Who Is Chemical Peel For?</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-purple-300">Ideal Candidates:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-purple-300 mt-1 flex-shrink-0" size={16} />
                      <span>Adults seeking skin rejuvenation and texture improvement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-purple-300 mt-1 flex-shrink-0" size={16} />
                      <span>Those with acne, acne scars, or enlarged pores</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-purple-300 mt-1 flex-shrink-0" size={16} />
                      <span>Individuals with sun damage and pigmentation issues</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-purple-300 mt-1 flex-shrink-0" size={16} />
                      <span>People with fine lines and early signs of aging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-purple-300 mt-1 flex-shrink-0" size={16} />
                      <span>Those seeking improved skin tone and texture</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-purple-300">Considerations:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <Heart className="text-purple-300 mt-1 flex-shrink-0" size={16} />
                      <span>All skin types and tones can benefit from chemical peels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Heart className="text-purple-300 mt-1 flex-shrink-0" size={16} />
                      <span>Consultation required to determine best peel type</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Heart className="text-purple-300 mt-1 flex-shrink-0" size={16} />
                      <span>Pregnancy and certain medications may require postponement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Heart className="text-purple-300 mt-1 flex-shrink-0" size={16} />
                      <span>Recent Accutane use requires waiting period</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Heart className="text-purple-300 mt-1 flex-shrink-0" size={16} />
                      <span>Active skin infections or severe scarring may not be suitable</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skin Concerns Corrected */}
        <section className="py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Skin Concerns Corrected by Chemical Peel</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Chemical peels effectively address a wide range of skin concerns, delivering visible improvements.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Ageing skin (age spots, fine lines and wrinkles)",
                  "Photo-damage (Sun damage and sun spots)",
                  "Acne and acne marks",
                  "Mild acne scarring",
                  "Enlarged pores",
                  "Rough skin texture",
                  "Dull complexion or uneven skin tone",
                  "Melasma & hyperpigmentation"
                ].map((concern, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center p-4 bg-accent rounded-lg border border-gray-800 hover:border-purple-500/50 transition-colors"
                  >
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-4 flex-shrink-0"></div>
                    <p className="text-gray-300">{concern}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* How Chemical Peels Work */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">How do Chemical Peels Work?</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our professional three-step process ensures safe, effective treatment tailored to your skin's needs.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-black p-6 rounded-lg border border-gray-800">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-purple-400">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Consultation & Analysis</h3>
                  <p className="text-gray-300">
                    During your in-depth skin consultation, our skilled skincare experts thoroughly analyse your skin health and conditions to assess your expectations.
                  </p>
                </div>
                
                <div className="bg-black p-6 rounded-lg border border-gray-800">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-purple-400">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Application Process</h3>
                  <p className="text-gray-300">
                    We cleanse and disinfect your skin, then apply a specially formulated chemical peel solution to the outermost layer, tailored to your specific needs.
                  </p>
                </div>
                
                <div className="bg-black p-6 rounded-lg border border-gray-800">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-purple-400">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Healing & Results</h3>
                  <p className="text-gray-300">
                    Small scabs form and gradually fall off within days, revealing fresh, radiant, and irresistibly smooth new skin with a youthful glow.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Treatment Summary */}
        <section className="py-20">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Chemical Peel Treatment Summary</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Treatment Duration</h3>
                    <p className="text-gray-300">30-60 minutes depending on peel type</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Recovery Time</h3>
                    <p className="text-gray-300">3-5 days for light peels, up to 2 weeks for deep peels</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Results Duration</h3>
                    <p className="text-gray-300">Several months to years depending on peel depth</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Frequency</h3>
                    <p className="text-gray-300">Monthly for light peels, less frequent for deeper peels</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-none">
                  <CardHeader>
                    <CardTitle className="text-white">Skin Concerns Treated</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Aging skin, fine lines & wrinkles</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Sun damage & age spots</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Acne & acne scarring</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Enlarged pores & rough texture</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Melasma & hyperpigmentation</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Chemical Peel Benefits</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Discover the transformative benefits of professional chemical peel treatments for healthier, more radiant skin.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Collagen Boost",
                  description: "Encourages natural collagen and elastin production for firmer skin"
                },
                {
                  title: "Enhanced Absorption",
                  description: "Boosts efficiency of your skincare products post-treatment"
                },
                {
                  title: "Reduced Blemishes",
                  description: "Remarkably reduces acne, scars, and skin imperfections"
                },
                {
                  title: "Even Skin Tone",
                  description: "Improves tone, texture, and years of accumulated sun damage"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
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
              <h2 className="text-3xl font-bold mb-4 text-white">Chemical Peel Pricing London</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Professional chemical peel treatments with transparent pricing at our Harley Street clinic.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-gray-800 h-full text-center">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-white text-xl mb-2">Light Peels</CardTitle>
                    <div className="text-3xl font-bold text-purple-300 mb-2">£120</div>
                    <p className="text-gray-400 text-sm">Per session</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="text-gray-300 space-y-2 text-left">
                      <li>• Glycolic Acid Peels</li>
                      <li>• Salicylic Acid Peels</li>
                      <li>• Lactic Acid Peels</li>
                      <li>• Minimal downtime</li>
                      <li>• Suitable for all skin types</li>
                    </ul>
                    <Button className="w-full bg-white text-black hover:bg-gray-200">
                      Book Light Peel
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-b from-purple-900/50 to-pink-900/50 border-purple-500 h-full text-center relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">POPULAR</span>
                  </div>
                  <CardHeader className="pb-4 pt-6">
                    <CardTitle className="text-white text-xl mb-2">Medium Peels</CardTitle>
                    <div className="text-3xl font-bold text-purple-300 mb-2">£170</div>
                    <p className="text-gray-400 text-sm">Per session</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="text-gray-300 space-y-2 text-left">
                      <li>• TCA Peels</li>
                      <li>• Jessner's Peel</li>
                      <li>• The Perfect Peel</li>
                      <li>• 3-7 days recovery</li>
                      <li>• Dramatic improvements</li>
                    </ul>
                    <Button className="w-full bg-white text-black hover:bg-gray-200">
                      Book Medium Peel
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-gray-800 h-full text-center">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-white text-xl mb-2">Deep Peels</CardTitle>
                    <div className="text-3xl font-bold text-purple-300 mb-2">£200</div>
                    <p className="text-gray-400 text-sm">Per session</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="text-gray-300 space-y-2 text-left">
                      <li>• Phenol Peels</li>
                      <li>• Peel to Reveal</li>
                      <li>• Maximum results</li>
                      <li>• 1-2 weeks recovery</li>
                      <li>• Long-lasting effects</li>
                    </ul>
                    <Button className="w-full bg-white text-black hover:bg-gray-200">
                      Book Deep Peel
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <p className="text-gray-400 mb-4">Course packages available for better value</p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                View Full Price List
              </Button>
            </motion.div>
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
                Get answers to common questions about chemical peel treatments at our London clinic.
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
              <h2 className="text-3xl font-bold mb-4">Ready for Radiant, Rejuvenated Skin?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert skin specialists and discover how chemical peels 
                can transform your skin with professional, safe, and effective treatments.
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
            Chemical peel treatments in London offer professional skin resurfacing solutions for a wide range of skin concerns. At Cosmedocs Harley Street, our expert practitioners provide comprehensive chemical peel treatments including glycolic acid peels, salicylic acid peels, TCA peels, and our signature Peel to Reveal treatment. Chemical peels are highly effective for treating acne, acne scarring, sun damage, age spots, fine lines, wrinkles, enlarged pores, rough skin texture, and hyperpigmentation. Our range includes light peels for subtle improvements, medium peels for more significant results, and deep peels for dramatic skin transformation. Professional chemical peel treatments stimulate collagen production, improve skin texture, reduce blemishes, and create a more even skin tone. The treatment process involves applying specially formulated chemical solutions to remove damaged skin layers, revealing fresh, healthy skin underneath. Recovery time varies from minimal downtime for light peels to up to two weeks for deeper treatments. Our experienced practitioners ensure safe, effective treatments tailored to individual skin types and concerns. Chemical peel benefits include enhanced skincare product absorption, reduced signs of aging, improved skin clarity, and long-lasting results. At our London clinic, we combine chemical peels with other treatments like dermaplaning for enhanced results. Our 'invisible art' philosophy ensures natural-looking skin improvements that enhance your confidence. Professional chemical peels are suitable for all skin types when performed by qualified practitioners using appropriate formulations and safety protocols.
          </p>
        </div>
      </div>
    </>
  );
};

export default ChemicalPeel;