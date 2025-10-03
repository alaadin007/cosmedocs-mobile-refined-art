import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { generateSEOMetadata } from '@/utils/seo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BeforeAfterImageViewer from '@/components/BeforeAfterImageViewer';
import { Clock, Calendar, Activity, Syringe, Award, Users, CheckCircle, Palette, Heart } from "lucide-react";

const BotoxCalfReduction = () => {
  const seoData = generateSEOMetadata(
    "Botox Calf Reduction London | Slim Your Calves | Cosmedocs Harley Street",
    "Calf botox & calf reduction surgery alternative. Botox on calves for slimmer calves. Reduce calf muscle mass non-surgically. London clinic consultation.",
    "/botox-calf-reduction"
  );

  const beforeAfterImages = [
    {
      src: "/lovable-uploads/6ab37d8b-70a2-4167-a975-d2c8b7d97b4d.png",
      alt: "Botox calf reduction before and after results showing slimmer calf contours",
      caption: "Remarkable calf reduction results - Bold • Natural • Always Your Way"
    },
    {
      src: "/lovable-uploads/200e347f-34b9-434d-8904-fd6d94765a3e.png",
      alt: "Calf reduction journey showing progressive slimming results",
      caption: "Our invisible art approach to calf contouring delivers natural-looking results"
    },
    {
      src: "/lovable-uploads/c64c87d1-4d95-4691-a433-41e475c92452.png",
      alt: "Botox calf reduction before after comparison showing refined leg silhouette",
      caption: "Professional calf reduction with precise botox injections for elegant leg contours"
    },
    {
      src: "/lovable-uploads/7824e28f-766c-4f96-b021-1a523df8d42b.png",
      alt: "Calf muscle reduction results with botox treatment London",
      caption: "Transformation that speaks without saying a word - minimal, quiet, invisible"
    },
    {
      src: "/lovable-uploads/373586d7-53d2-4bc9-92c5-fc617af6c284.png",
      alt: "Timeline progression of calf reduction treatment results over months",
      caption: "Progressive results over time showing the evolution of refined calf contours"
    }
  ];

  const bookingUrl = "https://med.as.me/harleystreet";

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/lovable-uploads/6ab37d8b-70a2-4167-a975-d2c8b7d97b4d.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content="/lovable-uploads/6ab37d8b-70a2-4167-a975-d2c8b7d97b4d.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "Botox Calf Reduction",
            "description": "Professional botox calf reduction treatment for slimmer, more contoured calves",
            "provider": {
              "@type": "MedicalOrganization",
              "name": "Cosmedocs",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "10 Harley Street",
                "addressLocality": "London",
                "postalCode": "W1G 9PF",
                "addressCountry": "GB"
              }
            }
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
                  Botox Calf
                  <span className="block text-purple-300">Reduction</span>
                  <span className="block text-sm mt-4">Sculpt elegant leg contours with precision</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl">
                  <span className="text-purple-300 font-semibold">Invisible Art</span>
                  <br />
                  Transformation that speaks without saying a word
                </p>
                <div className="mb-8">
                  <p className="text-sm text-gray-300">Achieve naturally slimmer, more refined calf contours that enhance your overall leg proportions.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={() => window.open(bookingUrl, "_blank")}
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl"
                  >
                    Book Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      const pricingSection = document.getElementById('pricing-section');
                      if (pricingSection) {
                        pricingSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm"
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
              <h2 className="text-3xl font-bold mb-8 text-white">Botox Calf Reduction Treatment</h2>
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
                <p className="text-gray-300">30-45 minutes including consultation</p>
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
                <p className="text-gray-300">6-12 months with gradual muscle relaxation</p>
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
                <p className="text-gray-300">Minimal downtime, return to normal activities immediately</p>
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
                <p className="text-gray-300">Local anaesthetic for comfort</p>
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
                See the natural, beautiful results achieved with our expert calf reduction treatments. 
                Each patient receives a personalized approach for optimal outcomes.
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

        {/* What is Botox Calf Reduction Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">What is Botox Calf Reduction?</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Botox calf reduction is a non-surgical cosmetic procedure that uses botulinum toxin injections to 
                  temporarily weaken the gastrocnemius muscle in the calves. This creates a slimmer, more contoured 
                  appearance to the lower legs without invasive surgery.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  The procedure works by strategically injecting Botox into specific points of the calf muscle, 
                  causing controlled muscle relaxation. Over time, the treated muscle gradually reduces in size, 
                  resulting in visibly slimmer and more proportionate calves.
                </p>
                
                <div className="bg-black/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
                  <h3 className="text-white text-xl font-semibold mb-4">Muscle Targeting</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    The gastrocnemius muscle is the primary target for calf reduction. This large, superficial muscle 
                    forms the bulk of the calf and is responsible for the prominent appearance that some patients wish to reduce.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Botox is precisely injected into specific points of this muscle using advanced injection techniques. 
                    The treatment strategically weakens the muscle fibers, leading to a gradual reduction in muscle mass 
                    and a more refined calf contour over the following weeks.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Botox Vs Surgical Calf Reduction Section */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Botox Vs. Surgical Calf Reduction</h2>
            </motion.div>

            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-purple-900/20 backdrop-blur-lg rounded-3xl p-8 border border-purple-500/20"
              >
                <h3 className="text-2xl font-bold mb-4 text-purple-300">Botox Calf Reduction</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-purple-500 mt-1" size={16} />
                    <span>Non-invasive injection treatment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-purple-500 mt-1" size={16} />
                    <span>Minimal downtime - return to activities immediately</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-purple-500 mt-1" size={16} />
                    <span>Reversible effects lasting 6-12 months</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-purple-500 mt-1" size={16} />
                    <span>No scarring or permanent marks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-purple-500 mt-1" size={16} />
                    <span>Local anaesthetic only</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-purple-500 mt-1" size={16} />
                    <span>Starting from £400</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-purple-500 mt-1" size={16} />
                    <span>Gradual, natural-looking results</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
              >
                <h3 className="text-2xl font-bold mb-4 text-white">Surgical Calf Reduction</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-gray-500 mt-1" size={16} />
                    <span>Invasive surgical procedure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-gray-500 mt-1" size={16} />
                    <span>4-6 weeks recovery period</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-gray-500 mt-1" size={16} />
                    <span>Permanent changes - cannot be reversed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-gray-500 mt-1" size={16} />
                    <span>Visible surgical scarring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-gray-500 mt-1" size={16} />
                    <span>General anaesthesia required</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-gray-500 mt-1" size={16} />
                    <span>£3,000-£8,000+ plus hospital fees</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-gray-500 mt-1" size={16} />
                    <span>Immediate dramatic results</span>
                  </li>
                </ul>
              </motion.div>
            </div>

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
              <h2 className="text-3xl font-bold mb-4 text-white">Botox Calf Reduction Pricing London</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Transparent pricing for professional Botox calf reduction treatments. All prices include consultation, 
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
                <Card className="bg-black border-purple-500 h-full text-center">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Single Treatment</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£400</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Individual calf reduction treatment session</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Consultation included</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Premium Botox injection</span>
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
                    <CardTitle className="text-white text-2xl">Touch-up Package</CardTitle>
                    <div className="text-white text-4xl font-bold">£650</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-purple-100">Initial treatment plus 6-month touch-up session</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Initial full treatment</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">6-month touch-up session</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Extended aftercare support</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Regular progress monitoring</span>
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
                <Card className="bg-black border-gray-700 h-full text-center">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Consultation Only</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£50</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Professional leg assessment and treatment planning</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Comprehensive leg assessment</span>
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
                <p className="text-gray-300">Premium botox products and techniques</p>
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
                Everything you need to know about botox calf reduction treatment
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  {
                    question: "What are the benefits of calf reduction with botox?",
                    answer: "Botox calf reduction offers multiple benefits: non-surgical approach with no scarring, minimal downtime allowing immediate return to activities, natural-looking gradual results, reversible effects lasting 6-12 months, no general anesthesia required, and significantly lower cost compared to surgical alternatives. It's ideal for achieving slimmer, more proportionate calves safely and effectively."
                  },
                  {
                    question: "How does botox calf reduction work?",
                    answer: "Botox is injected into the gastrocnemius muscle to temporarily relax it, causing a gradual reduction in muscle bulk and creating slimmer calf contours."
                  },
                  {
                    question: "How long do results last?",
                    answer: "Results typically last 6-12 months. The effects are temporary and reversible, allowing for adjustments as needed."
                  },
                  {
                    question: "Is the treatment painful?",
                    answer: "The treatment involves minimal discomfort. Most patients experience only mild temporary soreness at injection sites."
                  },
                  {
                    question: "When will I see results?",
                    answer: "Initial changes become visible within 2-4 weeks, with full results apparent at 6-8 weeks as the muscle gradually reduces in size."
                  },
                  {
                    question: "Are there any side effects?",
                    answer: "Side effects are rare but may include temporary bruising, swelling, or mild discomfort at injection sites. These resolve within a few days."
                  }
                ].map((faq, index) => (
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
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Leg Silhouette?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert cosmetic doctors and discover how our calf reduction treatment can help you achieve the elegant leg contours you desire.
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

        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true">
          <h2>Botox Calf Reduction London Harley Street Cosmedocs Treatment Slimmer Calves Leg Contouring</h2>
          <p>
            Botox calf reduction London, calf slimming treatment, leg contouring, gastrocnemius muscle reduction, 
            non-surgical calf reduction, botulinum toxin calf treatment, Harley Street calf reduction, cosmetic 
            calf slimming, aesthetic leg contouring, calf muscle botox, professional calf reduction London, 
            minimally invasive calf treatment, leg silhouette enhancement, calf reshaping, botox for calves, 
            calf reduction specialist, London aesthetic clinic, Cosmedocs calf treatment, invisible art aesthetics, 
            bold natural always your way, refined leg contours, elegant calf shaping, medical aesthetic treatments, 
            expert practitioners Harley Street, safe calf reduction, effective leg contouring, natural looking results, 
            minimal downtime treatment, gradual calf slimming, reversible aesthetic treatment, confidence boosting 
            leg enhancement, personalized calf reduction plan, comprehensive consultation, precise injection technique, 
            progressive results, follow-up care, muscle relaxation therapy, temporary calf reduction, aesthetic medicine 
            London, cosmetic injections, professional medical care, advanced botox techniques, leg aesthetics, 
            calf muscle treatment, non-invasive body contouring, aesthetic transformation, beautiful leg proportions.
          </p>
        </div>
      </div>
    </>
  );
};

export default BotoxCalfReduction;