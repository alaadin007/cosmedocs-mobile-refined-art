import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Star, Clock, Users, Calendar, Shield, Activity, Award, GraduationCap, CheckCircle, Heart } from "lucide-react";
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
import TreatmentVideoPlayer from "@/components/TreatmentVideoPlayer";
import { useVideoManagement } from "@/hooks/useVideoManagement";
import { useState } from "react";

const ChemicalPeel = () => {
  const {
    videos,
    getVideosByTreatment
  } = useVideoManagement();
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const seoData = generateSEOMetadata("Chemical Peel London | £120 | Cosmedocs | Harley Street", "Professional chemical peel treatments in London's Harley Street. Expert skin resurfacing for acne, pigmentation & anti-aging. From £120. Book your session today.", "/chemical-peel");

  // Get Chemical Peel specific videos
  const chemicalPeelVideos = getVideosByTreatment('Chemical Peel');
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

  const treatmentSteps = [{
    step: "01",
    title: "Skin Assessment",
    description: "Thorough consultation to determine the best peel type and strength for your skin concerns."
  }, {
    step: "02", 
    title: "Pre-Treatment",
    description: "Gentle cleansing and preparation of the skin to ensure optimal peel penetration."
  }, {
    step: "03",
    title: "Acid Application",
    description: "Careful application of chemical solution to target areas, monitored for optimal timing."
  }, {
    step: "04",
    title: "Neutralization",
    description: "Safe neutralization of acids followed by soothing treatments to calm the skin."
  }, {
    step: "05",
    title: "Aftercare Plan",
    description: "Comprehensive aftercare instructions and products to maximize results and healing."
  }];

  const benefits = [{
    title: "Reduces Acne & Breakouts",
    description: "Unclogs pores and reduces bacteria that cause acne while preventing future breakouts through deep exfoliation."
  }, {
    title: "Brightens & Evens Skin Tone",
    description: "Removes damaged surface layers to reveal brighter, more even-toned skin beneath, reducing hyperpigmentation."
  }, {
    title: "Smooths Fine Lines & Wrinkles",
    description: "Stimulates collagen production and removes damaged skin cells to reduce visible signs of aging."
  }, {
    title: "Improves Skin Texture",
    description: "Removes rough, damaged skin cells to reveal smoother, softer skin with improved overall texture."
  }, {
    title: "Minimizes Pore Appearance",
    description: "Deep exfoliation helps unclog and minimize the appearance of enlarged pores for refined skin."
  }, {
    title: "Treats Sun Damage",
    description: "Effectively addresses sun spots, age spots, and photodamage by removing damaged pigmented cells."
  }, {
    title: "Stimulates Cell Renewal",
    description: "Accelerates natural skin cell turnover for fresher, younger-looking skin and improved healing."
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
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:image" content={seoData.image} />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.image} />
        
        {/* Local SEO */}
        <meta name="geo.region" content="GB-LND" />
        <meta name="geo.placename" content="London" />
        <meta name="geo.position" content="51.5074;-0.1278" />
        <meta name="ICBM" content="51.5074, -0.1278" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "name": "Cosmedocs - Chemical Peel London",
          "description": "Professional chemical peel treatments in London's Harley Street for skin resurfacing and rejuvenation",
          "url": "https://cosmedocs.com/chemical-peel",
          "telephone": "0333 0551 503",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "10 Harley Street",
            "addressLocality": "London",
            "postalCode": "W1G 9PF",
            "addressCountry": "GB"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 51.5074,
            "longitude": -0.1278
          },
          "medicalSpecialty": "Dermatology",
          "priceRange": "£120"
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
                  Chemical peels are professional skin resurfacing treatments that use controlled acids to remove 
                  damaged layers of skin, revealing healthier, smoother skin underneath. These treatments range 
                  from light surface peels to deeper resurfacing procedures.
                </p>
                <p>
                  During the treatment, a chemical solution is applied to the skin, causing it to exfoliate and 
                  eventually peel off. The new skin is typically smoother, less wrinkled, and more even in tone.
                </p>
              </div>

              {/* Types of Peels Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-purple-600/10 backdrop-blur-sm border-2 border-purple-400/40 rounded-xl p-8"
              >
                <h3 className="text-3xl font-bold text-purple-300 mb-6 text-center">Types of Peels</h3>
                <p className="text-gray-300 text-center mb-8 text-lg">
                  We offer various chemical peel types to address different skin concerns and depths
                </p>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-purple-600/30 backdrop-blur-sm border border-purple-400/40 rounded-lg p-4 text-center hover:bg-purple-600/40 transition-all duration-300">
                    <h4 className="text-lg font-semibold text-purple-200">Light Peels</h4>
                    <p className="text-sm text-gray-300 mt-2">Glycolic & Lactic Acid</p>
                  </div>
                  
                  <div className="bg-purple-600/30 backdrop-blur-sm border border-purple-400/40 rounded-lg p-4 text-center hover:bg-purple-600/40 transition-all duration-300">
                    <h4 className="text-lg font-semibold text-purple-200">Medium Peels</h4>
                    <p className="text-sm text-gray-300 mt-2">TCA & Jessner's Peel</p>
                  </div>
                  
                  <div className="bg-purple-600/30 backdrop-blur-sm border border-purple-400/40 rounded-lg p-4 text-center hover:bg-purple-600/40 transition-all duration-300">
                    <h4 className="text-lg font-semibold text-purple-200">Deep Peels</h4>
                    <p className="text-sm text-gray-300 mt-2">Phenol Peels</p>
                  </div>
                  
                  <div className="bg-purple-600/30 backdrop-blur-sm border border-purple-400/40 rounded-lg p-4 text-center hover:bg-purple-600/40 transition-all duration-300">
                    <h4 className="text-lg font-semibold text-purple-200">Salicylic Acid</h4>
                    <p className="text-sm text-gray-300 mt-2">BHA for Acne Skin</p>
                  </div>
                  
                  <div className="bg-purple-600/30 backdrop-blur-sm border border-purple-400/40 rounded-lg p-4 text-center hover:bg-purple-600/40 transition-all duration-300">
                    <h4 className="text-lg font-semibold text-purple-200">Mandelic Acid</h4>
                    <p className="text-sm text-gray-300 mt-2">Gentle for Sensitive Skin</p>
                  </div>

                  <div className="bg-purple-600/30 backdrop-blur-sm border border-purple-400/40 rounded-lg p-4 text-center hover:bg-purple-600/40 transition-all duration-300">
                    <h4 className="text-lg font-semibold text-purple-200">Combination Peels</h4>
                    <p className="text-sm text-gray-300 mt-2">Customized Solutions</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Chemical Peel Benefits - Professional Skin Resurfacing */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Benefits of Chemical Peel
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Chemical peels use controlled acids to precisely remove damaged skin layers, stimulating natural 
                cell renewal and revealing healthier, younger-looking skin with improved texture and tone.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:from-purple-600/20 hover:to-blue-600/20 hover:border-purple-300/30 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-200 transition-colors duration-300">{benefit.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Chemical Peel Steps */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4 text-white">The Chemical Peel Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our 5-step chemical peel treatment delivers comprehensive skin rejuvenation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {treatmentSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-lg font-bold">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Chemical Peel Aftercare & Results Timeline */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Aftercare */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Chemical Peel Aftercare</h2>
                <p className="text-gray-300 mb-6">
                  Follow these essential guidelines to ensure optimal healing and maximize your chemical peel results:
                </p>

                <div className="space-y-4">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">First 24-48 Hours</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Avoid direct sun exposure completely</li>
                      <li>• No makeup or skincare products</li>
                      <li>• Gentle cleansing with cool water only</li>
                      <li>• Apply recommended healing ointment</li>
                    </ul>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">First 1-2 Weeks</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Daily SPF 50+ sunscreen application</li>
                      <li>• Avoid picking or peeling skin</li>
                      <li>• Use gentle, fragrance-free moisturizer</li>
                      <li>• No active ingredients or exfoliants</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Results Timeline */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Results Timeline</h2>
                <p className="text-gray-300 mb-6">
                  Understanding the healing process and when to expect visible improvements:
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">3-5 Days</h3>
                      <p className="text-gray-300 text-sm">Peeling begins, revealing fresh new skin underneath</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">7</span>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">One Week</h3>
                      <p className="text-gray-300 text-sm">Improved skin texture and brightness become visible</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">30</span>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">One Month</h3>
                      <p className="text-gray-300 text-sm">Full results visible with optimal skin renewal</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Combination Treatments */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-8">Combination Treatments</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enhance your chemical peel results with complementary treatments for comprehensive skin rejuvenation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-4">Chemical Peel + Microneedling</h3>
                <p className="text-gray-300 mb-4">
                  Combine peels with microneedling for enhanced collagen production and deeper skin renewal.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-purple-300 mr-2" />Enhanced collagen stimulation</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-purple-300 mr-2" />Improved scar reduction</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-purple-300 mr-2" />Deeper skin rejuvenation</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-4">Chemical Peel + HydraFacial</h3>
                <p className="text-gray-300 mb-4">
                  Follow peels with HydraFacial for gentle hydration and nourishment during the healing process.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-purple-300 mr-2" />Optimal skin hydration</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-purple-300 mr-2" />Enhanced healing process</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-purple-300 mr-2" />Improved overall results</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-4">Chemical Peel + LED Therapy</h3>
                <p className="text-gray-300 mb-4">
                  LED light therapy accelerates healing and reduces inflammation after chemical peel treatments.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-purple-300 mr-2" />Faster healing process</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-purple-300 mr-2" />Reduced inflammation</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-purple-300 mr-2" />Enhanced skin repair</li>
                </ul>
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
              <h2 className="text-4xl font-bold mb-4 text-white">Chemical Peel Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transparent pricing for professional chemical peel treatments in London
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 text-center h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Light Peels</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-3xl font-bold text-purple-300">£120</div>
                    <p className="text-gray-300">Gentle surface exfoliation</p>
                    <Button 
                      className="w-full bg-white text-black hover:bg-gray-200 rounded-full"
                      onClick={() => window.open(bookingUrl, '_blank')}
                    >
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-purple-300 hover:bg-white/15 transition-all duration-300 text-center h-full relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Medium Peels</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-3xl font-bold text-purple-300">£170</div>
                    <p className="text-gray-300">Moderate depth resurfacing</p>
                    <Button 
                      className="w-full bg-purple-600 text-white hover:bg-purple-700 rounded-full"
                      onClick={() => window.open(bookingUrl, '_blank')}
                    >
                      Book Treatment
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 text-center h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Deep Peels</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-3xl font-bold text-purple-300">£200</div>
                    <p className="text-gray-300">Intensive skin rejuvenation</p>
                    <Button 
                      className="w-full bg-white text-black hover:bg-gray-200 rounded-full"
                      onClick={() => window.open(bookingUrl, '_blank')}
                    >
                      Book Consultation
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
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
                <p className="text-gray-300">Premium medical-grade peel formulations</p>
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
                <p className="text-gray-300">"Invisible art" for natural results</p>
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
                Get answers to common questions about chemical peel treatments at our London clinic.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-white/5 rounded-lg border-gray-800">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-white/10 rounded-lg">
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
        <section className="py-20 bg-accent">
          <div className="page-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-12"
            >
              <h2 className="text-3xl font-bold mb-4">Ready for Transformative Skin Resurfacing?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert cosmetic doctors and discover how chemical peels 
                can reveal smoother, brighter, more youthful-looking skin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6"
                  onClick={() => window.open(bookingUrl, '_blank')}
                >
                  Book Free Consultation
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6">
                  Call 0333 0551 503
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ChemicalPeel;