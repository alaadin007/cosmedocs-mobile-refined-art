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

        {/* About Microneedling Treatment Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">About Microneedling Treatment</h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-black/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 h-full">
                  <h3 className="text-white text-xl font-semibold mb-4">What is Microneedling Treatment?</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Microneedling (also known as skin needling or percutaneous collagen induction therapy) is a minimally 
                    invasive treatment that involves creating precise, microscopic punctures in the stratum corneum of your 
                    skin with small needles.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    These "micro-injuries" act by encouraging the skin to heal itself naturally through a process known as 
                    dermal remodelling, without causing any scars.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-black/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 h-full">
                  <h3 className="text-white text-xl font-semibold mb-4">Why Choose Microneedling?</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    This minimally invasive skin perfecting procedure improves skin texture and minimises wrinkles. 
                    It also helps with hyper-pigmentation, disfiguring scars and acne scarring, stretch marks and 
                    promotes new collagen fibres.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Clinical collagen induction therapy serves your skin in more ways than you can imagine! From correcting 
                    pitted acne scarring to stretch marks, skin laxity and unwanted fine lines with minimal discomfort and 
                    practically no recovery.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How Does Microneedling Work Section */}
        <section className="py-20 bg-accent">
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
                Understanding the science behind collagen induction therapy
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
                <div className="bg-gradient-to-br from-purple-600/30 to-purple-800/30 rounded-2xl p-8 border border-purple-500/20">
                  <h3 className="text-white text-2xl font-semibold mb-6">The Treatment Process</h3>
                  <div className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">
                      After applying a topical numbing cream, the skin is thoroughly cleansed. The eDermastamp single-use, 
                      sterile needle microneedling device is then set to the correct speed, needle lengths and depth for the 
                      treatment area.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      With microneedling treatment, the depth is within the papillary dermal layer of the skin, where collagen 
                      and elastin fibres are located. The tiny holes close over almost immediately as the channels are small.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      The 'micro tears' to the dermis encourages the skin to repair itself by activating skin's healing process 
                      and promoting collagen production and elastin and generating new skin cells.
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-purple-500/20">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-purple-300 mb-1">30</div>
                        <div className="text-sm text-gray-300">Minutes</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-purple-300 mb-1">15-18</div>
                        <div className="text-sm text-gray-300">Months Results</div>
                      </div>
                    </div>
                  </div>
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

        {/* Benefits Section */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Microneedling Benefits</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Discover how microneedling can transform your skin through natural collagen induction
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-accent border border-purple-500/20 rounded-xl p-6 hover-scale"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-purple-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">Fine Lines & Wrinkles</h3>
                <p className="text-gray-300 text-center">
                  Corrects fine lines and wrinkles through natural collagen boost, promoting firmer, more youthful skin
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-accent border border-purple-500/20 rounded-xl p-6 hover-scale"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-purple-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">Sun Damage</h3>
                <p className="text-gray-300 text-center">
                  Addresses sun damage and hyperpigmentation, evening out skin tone and reducing age spots
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-accent border border-purple-500/20 rounded-xl p-6 hover-scale"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-purple-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">Acne Scars</h3>
                <p className="text-gray-300 text-center">
                  Fades acne and acne scars effectively by breaking down scar tissue and promoting skin renewal
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-accent border border-purple-500/20 rounded-xl p-6 hover-scale"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-purple-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">Pore Reduction</h3>
                <p className="text-gray-300 text-center">
                  Minimizes large open pores by boosting collagen around each pore, making them appear smaller
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-accent border border-purple-500/20 rounded-xl p-6 hover-scale"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-purple-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">Body Areas</h3>
                <p className="text-gray-300 text-center">
                  Rejuvenates hands, neck and décolletage by rebuilding collagen in these delicate areas
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-accent border border-purple-500/20 rounded-xl p-6 hover-scale"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-purple-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">Hair Growth</h3>
                <p className="text-gray-300 text-center">
                  Reverses hair loss and boosts hair growth when combined with topical treatments like minoxidil
                </p>
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
              <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 text-lg font-semibold">
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
              <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl">
                Book Consultation
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h2>Microneedling London Harley Street Cosmedocs</h2>
          <p>
            Microneedling London Harley Street expert treatments for flawless skin rejuvenation. Professional collagen induction therapy using advanced medical-grade devices for natural skin transformation. Cosmedocs offers the finest microneedling treatments in London, combining scientific precision with artistic excellence to achieve remarkable improvements in skin texture, tone, and quality. Our experienced practitioners specialize in addressing acne scars, fine lines, enlarged pores, and overall skin rejuvenation through carefully calibrated microneedling protocols. Located in the heart of Harley Street, our clinic provides comprehensive microneedling consultations and personalized treatment plans designed to deliver optimal results while maintaining the highest safety standards. Each microneedling session is performed by qualified medical professionals using premium equipment and proven techniques that stimulate natural collagen production for long-lasting skin improvements. Discover why patients choose Cosmedocs for their microneedling treatments and experience the transformative power of professional skin rejuvenation in London's premier medical district.
          </p>
        </div>
      </div>
    </>
  );
};

export default Microneedling;