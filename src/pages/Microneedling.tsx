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
import { Clock, Calendar, Activity, Syringe, Award, Users, CheckCircle, Palette, Heart } from "lucide-react";

const Microneedling = () => {
  const seoData = generateSEOMetadata(
    "Microneedling London Harley Street | Expert Skin Rejuvenation | Cosmedocs",
    "Professional microneedling treatments in London. Advanced skin rejuvenation for flawless skin texture, acne scars, and anti-aging. Expert treatments at Harley Street clinic.",
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
      answer: "Microneedling, also known as collagen induction therapy, uses fine needles to create controlled micro-injuries in the skin. This triggers the body's natural healing response, promoting collagen and elastin production for improved skin texture, tone, and firmness."
    },
    {
      question: "How long do microneedling results last?",
      answer: "Microneedling results typically last 6-12 months, with optimal benefits appearing 4-6 weeks after treatment. Regular maintenance sessions every 3-6 months help maintain long-lasting improvements in skin quality and texture."
    },
    {
      question: "Is microneedling painful?",
      answer: "We apply a topical anaesthetic before treatment to minimize discomfort. Most patients describe the sensation as mild to moderate, similar to light sandpaper being moved across the skin. Any discomfort subsides quickly after treatment."
    },
    {
      question: "What skin concerns does microneedling address?",
      answer: "Microneedling effectively treats acne scars, fine lines, wrinkles, enlarged pores, stretch marks, uneven skin tone, and texture irregularities. It's also excellent for overall skin rejuvenation and achieving flawless skin quality."
    },
    {
      question: "What's the recovery time after microneedling?",
      answer: "Initial redness and mild swelling typically subside within 24-48 hours. Skin may feel slightly sensitive for 2-3 days. Most patients return to normal activities within 24 hours with proper aftercare and sun protection."
    },
    {
      question: "How many microneedling sessions do I need?",
      answer: "Most patients see improvement after one session, but optimal results typically require 3-6 treatments spaced 4-6 weeks apart. The exact number depends on your skin concerns and desired outcomes, which we'll assess during consultation."
    },
    {
      question: "Can microneedling be combined with other treatments?",
      answer: "Yes, microneedling combines excellently with chemical peels, PRP (platelet-rich plasma), and skincare serums. We often recommend combination treatments for enhanced results and comprehensive skin rejuvenation."
    },
    {
      question: "Who is not suitable for microneedling?",
      answer: "Microneedling is not recommended for pregnant women, those with active acne, open wounds, blood clotting disorders, or certain skin conditions. Our doctors will assess your suitability during a comprehensive consultation."
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
        <meta name="keywords" content="microneedling London, Harley Street microneedling, collagen induction therapy, skin rejuvenation, acne scars, fine lines, skin texture, flawless skin, cosmetic dermatology" />
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
                  Flawless Skin
                  <span className="block text-purple-300">Microneedling</span>
                  <span className="block text-sm mt-4">Advanced collagen induction therapy</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl">
                  <span className="text-purple-300 font-semibold">Invisible Art</span>
                  <br />
                  Transformation that speaks without saying a word
                </p>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Starting from £250</p>
                  <p className="text-sm text-gray-300">Professional microneedling for radiant, rejuvenated skin</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl">
                    Book Consultation
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm">
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
              <h2 className="text-3xl font-bold mb-8 text-white">Microneedling Treatment</h2>
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
                <p className="text-gray-300">6-12 months with progressive improvement</p>
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
              <h2 className="text-3xl font-bold mb-4">Real Patient Results</h2>
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

            <div className="text-center mt-12">
              <BeforeAfterImageViewer 
                images={beforeAfterImages}
                triggerLabel="View All Before & After Photos"
                title="Microneedling Results Gallery"
                description="Comprehensive gallery of our advanced microneedling treatments"
              />
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-20">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="prose prose-lg prose-invert max-w-none"
              >
                <h2 className="text-3xl font-bold mb-6">Achieve Flawless Skin with Advanced Microneedling</h2>
                
                <p className="text-gray-300 mb-6">
                  At Cosmedocs, we understand that flawless skin is not just about perfection—it's about confidence, radiance, and feeling comfortable in your own skin. Our advanced microneedling treatments represent the pinnacle of non-invasive skin rejuvenation, offering a scientifically-proven approach to achieving the smooth, luminous complexion you've always desired.
                </p>

                <p className="text-gray-300 mb-6">
                  Microneedling, also known as collagen induction therapy, harnesses your body's natural healing mechanisms to transform your skin from within. Using state-of-the-art medical-grade devices, our expert practitioners create controlled micro-channels in the skin, triggering a cascade of regenerative processes that result in visibly improved texture, tone, and overall skin quality.
                </p>

                <h3 className="text-2xl font-bold mb-4 text-purple-300">The Science Behind Flawless Skin</h3>
                
                <p className="text-gray-300 mb-6">
                  Our microneedling treatments work on a cellular level to address the fundamental causes of skin imperfections. The precisely controlled micro-injuries stimulate fibroblast activity, dramatically increasing collagen and elastin production—the building blocks of youthful, resilient skin. This natural regeneration process continues for months after treatment, ensuring long-lasting improvements that enhance your skin's inherent beauty.
                </p>

                <p className="text-gray-300 mb-6">
                  What sets our approach apart is our commitment to 'invisible art'—achieving transformative results that look completely natural. We don't believe in dramatic, artificial changes. Instead, we focus on revealing your skin's best possible version, enhancing what nature gave you while addressing specific concerns with surgical precision.
                </p>

                <h3 className="text-2xl font-bold mb-4 text-purple-300">Comprehensive Skin Transformation</h3>
                
                <p className="text-gray-300 mb-6">
                  Our microneedling treatments excel in addressing a wide spectrum of skin concerns. From stubborn acne scarring and enlarged pores to fine lines, wrinkles, and uneven texture, this versatile treatment delivers remarkable improvements across all skin types and tones. Patients consistently report not just visual improvements, but enhanced skin feel, increased firmness, and a natural, healthy glow that speaks to improved skin health at the deepest level.
                </p>

                <p className="text-gray-300 mb-6">
                  The beauty of microneedling lies in its ability to work with your skin's natural processes rather than against them. Unlike more aggressive treatments that can cause trauma or lengthy downtime, our carefully calibrated approach stimulates renewal while maintaining skin integrity. This means you can achieve significant improvements while continuing your normal activities with minimal disruption.
                </p>

                <h3 className="text-2xl font-bold mb-4 text-purple-300">Our Expert Approach</h3>
                
                <p className="text-gray-300 mb-6">
                  At Cosmedocs, every microneedling treatment begins with a comprehensive skin analysis and consultation. Our experienced practitioners assess your unique skin characteristics, concerns, and goals to develop a personalized treatment plan. We consider factors such as skin type, sensitivity, lifestyle, and desired outcomes to ensure optimal results while maintaining the highest safety standards.
                </p>

                <p className="text-gray-300 mb-6">
                  Our practitioners are not just skilled technicians—they are artists who understand the nuances of facial anatomy and skin physiology. With over a million injections performed since 2007 and our role as trainers for the prestigious Harley Street Institute, we bring unparalleled expertise to every treatment. This experience allows us to achieve consistently superior results while minimizing any discomfort or side effects.
                </p>

                <h3 className="text-2xl font-bold mb-4 text-purple-300">Advanced Treatment Protocols</h3>
                
                <p className="text-gray-300 mb-6">
                  We utilize the latest microneedling technology and techniques to maximize treatment efficacy. Our protocols often incorporate complementary treatments such as specialized serums, growth factors, or combination therapies to enhance results. The depth and pattern of needling are precisely calibrated based on the specific area being treated and the particular concerns being addressed.
                </p>

                <p className="text-gray-300 mb-6">
                  For patients seeking comprehensive skin transformation, we frequently recommend combining microneedling with other advanced treatments such as chemical peels or skin boosters. These carefully planned combination approaches can accelerate results and address multiple skin concerns simultaneously, creating a truly customized rejuvenation experience.
                </p>

                <h3 className="text-2xl font-bold mb-4 text-purple-300">The Cosmedocs Difference</h3>
                
                <p className="text-gray-300 mb-6">
                  What distinguishes Cosmedocs is our unwavering commitment to excellence and our philosophy of 'bold, natural, always your way.' We believe that the best cosmetic treatments are those that enhance rather than alter, that boost confidence while maintaining authenticity. Our microneedling treatments embody this philosophy, delivering transformative results that look and feel completely natural.
                </p>

                <p className="text-gray-300 mb-6">
                  Our commitment extends beyond the treatment itself to comprehensive aftercare and ongoing support. We provide detailed post-treatment instructions, high-quality skincare recommendations, and follow-up consultations to ensure optimal healing and long-lasting results. This holistic approach ensures that your investment in flawless skin continues to pay dividends long after your treatment.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Treatment Summary */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Microneedling Treatment Summary</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Treatment Duration</h3>
                    <p className="text-gray-300">45-60 minutes including consultation and aftercare</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Results Duration</h3>
                    <p className="text-gray-300">6-12 months with progressive improvement over 4-6 weeks</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Recovery Time</h3>
                    <p className="text-gray-300">24-48 hours mild redness, return to normal activities next day</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Anaesthesia</h3>
                    <p className="text-gray-300">Topical anaesthetic cream for maximum comfort</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white">Why Choose Cosmedocs?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Over 1 million treatments performed since 2007</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">
                        <a 
                          href="https://www.harleystreetinstitute.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-purple-300 hover:text-purple-200 underline"
                        >
                          Harley Street Institute
                        </a> trainers - we train the professionals
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Medical-grade microneedling devices only</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">'Invisible art' philosophy for natural results</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Comprehensive aftercare and follow-up support</p>
                    </div>
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
              <h2 className="text-3xl font-bold mb-4 text-white">Microneedling Pricing London</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Transparent pricing for advanced microneedling treatments. All prices include consultation, 
                treatment, and comprehensive aftercare support from our expert practitioners.
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
                    <p className="text-gray-300">Individual microneedling treatment session</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Consultation included</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Medical-grade equipment</span>
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
                    <CardTitle className="text-white text-2xl">Treatment Course</CardTitle>
                    <div className="text-white text-4xl font-bold">£650</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-purple-100">Three sessions for optimal skin transformation</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Three treatment sessions</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">4-6 week intervals</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Extended aftercare support</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Follow-up consultations</span>
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
                    <p className="text-gray-300">Professional skin assessment and treatment planning</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Comprehensive skin analysis</span>
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
                  <Users className="text-purple-600" size={24} />
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
                <p className="text-gray-300">Premium medical-grade equipment only</p>
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
        <section className="py-20">
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
                Get answers to common questions about microneedling treatments at our London clinic.
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
        <section className="py-20 bg-accent">
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
                Book your consultation with our expert cosmetic doctors and discover how microneedling 
                can transform your skin for natural, radiant beauty.
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
            Microneedling London Harley Street expert treatments for flawless skin rejuvenation. Professional collagen induction therapy using advanced medical-grade devices for natural skin transformation. Cosmedocs offers the finest microneedling treatments in London, combining scientific precision with artistic excellence to achieve remarkable improvements in skin texture, tone, and quality. Our experienced practitioners specialize in addressing acne scars, fine lines, enlarged pores, and overall skin rejuvenation through carefully calibrated microneedling protocols. Located in the heart of Harley Street, our clinic provides comprehensive microneedling consultations and personalized treatment plans designed to deliver optimal results while maintaining the highest safety standards. Each microneedling session is performed by qualified medical professionals using premium equipment and proven techniques that stimulate natural collagen production for long-lasting skin improvements. Discover why patients choose Cosmedocs for their microneedling treatments and experience the transformative power of professional skin rejuvenation in London's premier medical district.
          </p>
        </div>
      </div>
    </>
  );
};

export default Microneedling;