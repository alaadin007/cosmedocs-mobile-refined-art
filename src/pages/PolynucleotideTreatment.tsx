import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram, Users, Award, Calendar, MapPin, Phone, Mail, ChevronDown, ChevronUp, Clock, Shield, Star, CheckCircle, Syringe, Heart, Zap, Activity } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import PopularTreatments from "@/components/PopularTreatments";
import { Button } from "@/components/ui/button";
const PolynucleotideTreatment = () => {
  const seoData = generateSEOMetadata("Polynucleotide Treatment London | £450 | Regenerative DNA Therapy | Harley Street", "Expert polynucleotide DNA therapy for skin regeneration, anti-aging, and hair restoration in London's Harley Street. Advanced regenerative medicine from £450.", "/polynucleotide-treatment");
  const bookingUrl = "https://med.as.me/harleystreet";

  // Before/after images for the viewer
  const beforeAfterImages = [{
    src: "/lovable-uploads/dd86f9a2-6530-4c94-8776-c6ede86882bb.png",
    alt: "Polynucleotide treatment London lip rejuvenation results showing enhanced texture and reduced fine lines",
    caption: "Lip rejuvenation with polynucleotide therapy showing enhanced texture and reduced fine lines - 3 months result"
  }, {
    src: "/lovable-uploads/e328b8fe-f278-418a-b7d5-fa2992d038e0.png",
    alt: "Polynucleotide treatment London under eye rejuvenation dramatic reduction dark circles improved skin texture",
    caption: "Under-eye polynucleotide therapy demonstrating dramatic reduction in dark circles and improved skin texture"
  }, {
    src: "/lovable-uploads/7bef47b3-8c8f-42e2-b301-cff179a7c8bf.png",
    alt: "Polynucleotide treatment London eyebrow area improvement skin texture fine lines reduction",
    caption: "Eyebrow area polynucleotide treatment showing improved skin texture and reduced fine lines"
  }, {
    src: "/lovable-uploads/159173ee-5192-416f-af16-0b7d13fce18d.png",
    alt: "Polynucleotide treatment London hair restoration scalp therapy follicle regeneration results",
    caption: "Scalp polynucleotide treatment showing significant hair density improvement and follicle regeneration"
  }];
  const leftColumnFaqs = [{
    question: "How much does polynucleotide treatment cost in London?",
    answer: "At Cosmedocs Harley Street, polynucleotide treatments start from £450 per session. A 3-session package costs £1,200, saving you £150. The cost depends on the treatment area and your specific aesthetic goals."
  }, {
    question: "How long do polynucleotide results last?",
    answer: "Results typically last 6-9 months and continue improving over time. The longevity depends on your skin condition, age, and lifestyle factors. Regular maintenance sessions can help sustain your natural transformation."
  }, {
    question: "Is polynucleotide treatment safe?",
    answer: "Yes, polynucleotide treatment is very safe when performed by our experienced practitioners. It uses biocompatible DNA fragments that are naturally found in the body, minimizing the risk of allergic reactions."
  }, {
    question: "What areas can be treated with polynucleotides?",
    answer: "Polynucleotides can treat the under-eye area, face, neck, décolletage, hands, and scalp. They're particularly effective for dark circles, fine lines, skin texture improvement, and hair loss conditions."
  }, {
    question: "How many sessions are needed for optimal results?",
    answer: "While improvements can be seen after one session, we recommend 3 sessions spaced 3 weeks apart for optimal and lasting results. This allows for progressive regenerative benefits and maximum collagen stimulation."
  }];
  const rightColumnFaqs = [{
    question: "How painful is polynucleotide treatment?",
    answer: "Most patients experience minimal discomfort. We use topical numbing cream and fine needles for precise injection. The treatment is generally well-tolerated with minimal downtime required."
  }, {
    question: "When will I see results from polynucleotide therapy?",
    answer: "Initial improvements can be noticed within 2-3 weeks, with progressive enhancement over the following months. Full regenerative effects are typically visible at 6-9 months as natural collagen production increases."
  }, {
    question: "Can polynucleotides help with hair loss?",
    answer: "Yes, polynucleotide therapy is highly effective for hair restoration. It stimulates follicle regeneration, improves scalp health, and promotes natural hair growth, making it excellent for androgenic alopecia and thinning hair."
  }, {
    question: "What happens during a polynucleotide consultation?",
    answer: "Our practitioners will assess your skin or scalp condition, discuss your aesthetic goals, explain the treatment process, and create a personalized treatment plan. You'll understand exactly what to expect from your transformation."
  }, {
    question: "How does polynucleotide therapy work?",
    answer: "Polynucleotides are natural DNA fragments that stimulate cellular repair, boost collagen synthesis, and enhance skin regeneration. They work with your body's natural healing processes to restore youthful skin from within."
  }];
  return <>
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
          "name": "Cosmedocs - Polynucleotide Treatment",
          "description": "Advanced polynucleotide DNA therapy for skin regeneration and hair restoration in London's Harley Street",
          "url": "https://cosmedocs.com/polynucleotide-treatment",
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
          "medicalSpecialty": "Regenerative Medicine",
          "priceRange": "£450"
        })}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        {/* Hero Section - Updated to match LipFillers design */}
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
                  Polynucleotide
                  <span className="block text-purple-300">DNA Therapy</span>
                  <span className="block text-sm mt-4">Revolutionary regenerative medicine for skin & cellular renewal</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl">
                  <span className="text-purple-300 font-semibold">Invisible Art</span>
                  <br />
                  Transformation that speaks without saying a word
                </p>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Starting from £450</p>
                  <p className="text-sm text-gray-300">#cosmepolynucleotide - Check out our IG for hundreds more natural, subtle transformations</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl"
                    onClick={() => window.open(bookingUrl, '_blank')}
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
              <h2 className="text-3xl font-bold mb-8 text-white">Polynucleotide Treatment</h2>
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
                <p className="text-gray-300">20 minutes per session</p>
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
                <p className="text-gray-300">6-9 months, improving over time</p>
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
                <p className="text-gray-300">Immediate return to activities</p>
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
                <h3 className="text-lg font-semibold text-white mb-2">Sessions Needed</h3>
                <p className="text-gray-300">3 sessions for optimal results</p>
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
              <h2 className="text-3xl font-bold mb-4">Before and After Polynucleotide DNA Therapy Results</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Explore authentic before and after polynucleotide treatment results from our London clinic. 
                Our regenerative DNA therapy stimulates natural collagen production for remarkable skin transformation.
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
                title="Polynucleotide Treatment Results Gallery"
                description="Comprehensive gallery of our DNA therapy treatments"
              />
            </div>
          </div>
        </section>

        {/* Pricing Section - Updated to match lip filler design */}
        <section id="pricing-section" className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Polynucleotide Treatment Pricing</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Transparent pricing for advanced regenerative DNA therapy. All prices include consultation, 
                treatment, and aftercare support from our expert medical team.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-none h-full text-center">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Single Session</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£450</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Perfect for trying polynucleotide therapy</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Consultation included</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Premium DNA fragments</span>
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
                    <CardTitle className="text-white text-2xl">3 Session Package</CardTitle>
                    <div className="text-white text-4xl font-bold">£1,200</div>
                    <div className="text-purple-100 text-sm">Save £150</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-purple-100">Recommended for optimal regenerative results</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Comprehensive consultation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Premium DNA therapy</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Extended aftercare support</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Progress tracking</span>
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
                <Card className="bg-accent border-none h-full text-center">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Consultation Only</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£50</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Expert assessment and treatment planning</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Detailed skin assessment</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Personalized treatment plan</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">No obligation</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <p className="text-gray-300 mb-6">
                *Consultation fee is deducted from treatment cost if you proceed on the same day
              </p>
              <Button 
                className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 text-lg font-semibold"
                onClick={() => window.open(bookingUrl, '_blank')}
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
                <p className="text-gray-300">Premium FDA-approved DNA therapy</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                <p className="text-gray-300">Prestigious Harley Street medical district</p>
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
                <h3 className="text-lg font-semibold text-white mb-2">Safety</h3>
                <p className="text-gray-300">Comprehensive safety protocols and aftercare</p>
              </motion.div>
            </div>
          </div>
        </section>


        {/* What Are Polynucleotides Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">What Are Polynucleotides?</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Polynucleotide therapy is revolutionizing aesthetic medicine in London, offering a natural approach to skin 
                restoration and hair regeneration. Supported by over three decades of clinical research, this advanced 
                treatment utilizes purified DNA fragments from salmon to harmonize with your body's innate healing mechanisms.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold mb-6 text-white">Advanced DNA Technology</h3>
                <div className="space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    These biocompatible DNA fragments work as natural cellular messengers, stimulating your skin's 
                    innate repair processes. Unlike synthetic alternatives, polynucleotides integrate seamlessly 
                    with your biology to enhance collagen synthesis, improve skin texture, and restore youthful vitality.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    The treatment addresses multiple aesthetic concerns simultaneously - from fine lines and wrinkles 
                    to hair thinning and skin laxity. This versatility makes it an ideal foundation treatment that 
                    can be enhanced with complementary procedures for comprehensive rejuvenation.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img 
                  src="/lovable-uploads/e328b8fe-f278-418a-b7d5-fa2992d038e0.png" 
                  alt="Polynucleotide treatment demonstration showing precision injection technique for under-eye rejuvenation" 
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </motion.div>
            </div>

            {/* Central Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto mt-16"
            >
              <Card className="bg-gray-900/50 border-purple-500 border-2">
                <CardHeader className="text-center">
                  <CardTitle className="text-white text-2xl">Revolutionary Regenerative Medicine</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-300 leading-relaxed">
                    Polynucleotide therapy represents the pinnacle of regenerative aesthetic medicine. By harnessing your body's 
                    natural healing mechanisms through carefully sourced DNA fragments, this treatment delivers comprehensive 
                    skin restoration that continues improving for months after treatment.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Treatment Areas Section */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Comprehensive Treatment Areas</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Targeted polynucleotide therapy for multiple aesthetic concerns across face, body, and scalp
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
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-purple-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Facial Rejuvenation</h3>
                <div className="text-gray-300 space-y-2">
                  <p>• Wrinkle-prone facial areas</p>
                  <p>• Deep forehead lines</p>
                  <p>• Sunken cheeks restoration</p>
                  <p>• Undefined jawline enhancement</p>
                  <p>• Acne scarring improvement</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-purple-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Body & Neck</h3>
                <div className="text-gray-300 space-y-2">
                  <p>• Sagging neck skin tightening</p>
                  <p>• Aging hands rejuvenation</p>
                  <p>• Sagging arm skin firming</p>
                  <p>• Rough, dry knees smoothing</p>
                  <p>• Lackluster décolletage renewal</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-purple-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Eyes & Hair</h3>
                <div className="text-gray-300 space-y-2">
                  <p>• Tired under-eyes brightening</p>
                  <p>• Dark circles reduction</p>
                  <p>• Hair follicle regeneration</p>
                  <p>• Scalp health optimization</p>
                  <p>• Androgenic alopecia treatment</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Regenerative Results - Apple Style */}
        <section className="bg-gradient-to-b from-[#0A0A0A] to-[#0A0A0A] py-[66px]">
          <div className="page-container">
            <motion.div className="text-center mb-20" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }} viewport={{
            once: true
          }}>
              <h2 className="text-3xl font-bold mb-4 text-white">Before and After Polynucleotide Treatment London</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Explore authentic before and after polynucleotide treatment results from our London clinic. 
                Our regenerative DNA therapy provides natural skin rejuvenation and hair restoration with lasting results.
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
                      className="p-1"
                    >
                      <Card className="border-0 bg-transparent">
                        <CardContent className="p-0">
                          <div className="relative overflow-hidden rounded-lg group">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                              <p className="text-white text-sm font-medium">{image.caption}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </section>

        {/* The Science of Regeneration Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">The Science of Regeneration</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Understanding how polynucleotide therapy activates your natural healing mechanisms
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img 
                  src="/lovable-uploads/dd86f9a2-6530-4c94-8776-c6ede86882bb.png" 
                  alt="Polynucleotide DNA therapy mechanism demonstration showing cellular regeneration and collagen stimulation process" 
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold mb-6 text-white">Mechanism of Action</h3>
                <div className="space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    Polynucleotides function as natural repair catalysts, working at the cellular level to restore 
                    skin's foundational structure. These purified DNA fragments stimulate fibroblast activity, 
                    enhance collagen and elastin production, and improve cellular hydration mechanisms.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Unlike temporary volumizing treatments, polynucleotides create lasting change by reactivating 
                    your skin's dormant regenerative pathways. This results in genuine improvement in skin quality, 
                    texture, and resilience that continues to enhance over 6-9 months.
                  </p>
                </div>
                
                <div className="mt-8">
                  <RegenerativeScienceCard />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Ideal Candidates Section */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Ideal Candidates</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Polynucleotide therapy delivers optimal results for these specific concerns and conditions
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-none h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl mb-4">Aging Concerns</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-purple-500" size={16} />
                      <span className="text-gray-300">Early aging signs</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-purple-500" size={16} />
                      <span className="text-gray-300">Deep wrinkles and lines</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-purple-500" size={16} />
                      <span className="text-gray-300">Loss of skin firmness</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-purple-500" size={16} />
                      <span className="text-gray-300">Collagen deficiency</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-purple-500" size={16} />
                      <span className="text-gray-300">Sagging skin areas</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-none h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl mb-4">Skin Quality</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-purple-500" size={16} />
                      <span className="text-gray-300">Dull, tired-looking skin</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-purple-500" size={16} />
                      <span className="text-gray-300">Uneven skin tone</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-purple-500" size={16} />
                      <span className="text-gray-300">Dry, damaged skin</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-purple-500" size={16} />
                      <span className="text-gray-300">Thinning, fragile areas</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-purple-500" size={16} />
                      <span className="text-gray-300">Sun damage effects</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-none h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl mb-4">Pigmentation</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-purple-500" size={16} />
                      <span className="text-gray-300">Hyperpigmentation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-purple-500" size={16} />
                      <span className="text-gray-300">Dark spots</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-purple-500" size={16} />
                      <span className="text-gray-300">Acne scars</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-purple-500" size={16} />
                      <span className="text-gray-300">Uneven texture</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-purple-500" size={16} />
                      <span className="text-gray-300">Fine line development</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-none h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl mb-4">Hair Loss</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-purple-500" size={16} />
                      <span className="text-gray-300">Androgenic alopecia</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-purple-500" size={16} />
                      <span className="text-gray-300">Thinning or weak hair</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-purple-500" size={16} />
                      <span className="text-gray-300">Bald spots or patches</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-purple-500" size={16} />
                      <span className="text-gray-300">Dry, itchy scalp</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-purple-500" size={16} />
                      <span className="text-gray-300">Damaged follicles</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Treatment Results & Benefits Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Treatment Results & Benefits</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Experience comprehensive skin and hair regeneration with polynucleotide DNA therapy
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
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-purple-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Skin Regeneration</h3>
                <div className="text-gray-300 space-y-2">
                  <p>• Deep skin nourishment</p>
                  <p>• Age-defying radiance</p>
                  <p>• Collagen boost for firmness</p>
                  <p>• Elasticity rebound</p>
                  <p>• Cellular skin repair</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Star className="text-purple-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Under-Eye Enhancement</h3>
                <div className="text-gray-300 space-y-2">
                  <p>• Under-eye rejuvenation</p>
                  <p>• Dark circles reduction</p>
                  <p>• Puffiness minimization</p>
                  <p>• Texture improvement</p>
                  <p>• Brightness restoration</p>
                </div>
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
                <h3 className="text-xl font-semibold text-white mb-4">Hair & Scalp</h3>
                <div className="text-gray-300 space-y-2">
                  <p>• Revitalized scalp & hair</p>
                  <p>• Hair follicle regeneration</p>
                  <p>• Scalp health improvement</p>
                  <p>• Natural hair growth</p>
                  <p>• Androgenic alopecia treatment</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto mt-16"
            >
              <Card className="bg-gray-900/50 border-none">
                <CardContent className="p-8 text-center">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    <span className="text-yellow-400">⭐</span> Optimal protocol: 1 session every 3 weeks, 
                    minimum of 3 sessions recommended for first-time patients. Full regenerative effects 
                    visible in 6-9 months as your body naturally produces enhanced collagen and elastin.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Polynucleotide therapy combines beautifully with Microneedling, PRP, Profhilo, Botox, 
                    and dermal fillers to enhance overall aesthetic outcomes and provide comprehensive rejuvenation.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Investment in Regeneration Section */}
        <section className="bg-[#0A0A0A] py-[33px]">
          <div className="page-container">
            <motion.div className="text-center max-w-4xl mx-auto" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }} viewport={{
            once: true
          }}>
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-8 tracking-tight">
                Investment in Regeneration
              </h2>
              <p className="text-xl text-white/70 font-light mb-12">
                Professional polynucleotide therapy pricing with package savings
              </p>
              
              <div className="mt-16 grid md:grid-cols-3 gap-8">
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/8 transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl font-light text-white mb-3 group-hover:scale-105 transition-transform duration-300">£450</div>
                    <div className="text-white/70 font-light text-lg">Single Session</div>
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <p className="text-white/50 text-sm">Perfect for first-time patients</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/8 backdrop-blur-sm border-white/20 hover:bg-white/12 transition-all duration-300 group relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-white/90 to-white/70 text-black px-4 py-1 rounded-full text-xs font-medium">
                      BEST VALUE
                    </div>
                  </div>
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl font-light text-white mb-3 group-hover:scale-105 transition-transform duration-300">£1,200</div>
                    <div className="text-white/70 font-light text-lg">3-Session Package</div>
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <p className="text-green-400 text-sm font-medium">Save £150</p>
                      <p className="text-white/50 text-sm">Optimal results guaranteed</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/8 transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl font-light text-white mb-3 group-hover:scale-105 transition-transform duration-300">6-9 Months</div>
                    <div className="text-white/70 font-light text-lg">Result Duration</div>
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <p className="text-white/50 text-sm">Long-lasting regeneration</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>


        {/* FAQ Section - Apple Style */}
        <section className="bg-gradient-to-b from-[#0A0A0A] to-black py-[66px]">
          <div className="page-container">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }} viewport={{
            once: true
          }} className="text-center mb-20">
              <h2 className="text-3xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
              <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
                Everything you need to know about polynucleotide DNA therapy
              </p>
            </motion.div>
            
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-4">
                {leftColumnFaqs.map((faq, index) => <FAQItem key={`left-${index}`} question={faq.question} answer={faq.answer} index={index} />)}
              </div>
              
              {/* Right Column */}
              <div className="space-y-4">
                {rightColumnFaqs.map((faq, index) => <FAQItem key={`right-${index}`} question={faq.question} answer={faq.answer} index={index + 5} />)}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section - Apple Style */}
        <section className="bg-black py-[64px]">
          <div className="page-container">
            <motion.div className="text-center max-w-4xl mx-auto" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }} viewport={{
            once: true
          }}>
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-8 tracking-tight">
                Transform with DNA Science
              </h2>
              <p className="text-xl text-white/70 font-light mb-12 max-w-2xl mx-auto">
                Experience the future of regenerative medicine. Our aesthetics is invisible art - 
                transformation that speaks without saying a word.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="bg-white/95 backdrop-blur-sm text-black hover:bg-white rounded-full px-12 py-5 inline-flex items-center justify-center text-xl font-light transition-all duration-300 border border-white/20 hover:scale-[1.02]">
                  Book Consultation
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Location & Contact - Apple Style */}
        <section className="py-32 bg-gradient-to-b from-black to-[#0A0A0A]">
          <div className="page-container">
            <div className="max-w-6xl mx-auto">
              <motion.div className="text-center mb-20" initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94]
            }} viewport={{
              once: true
            }}>
                <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
                  Visit Our Harley Street Clinic
                </h2>
              </motion.div>
              
              <motion.div className="grid lg:grid-cols-2 gap-16 items-center" initial={{
              opacity: 0,
              y: 40
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }} viewport={{
              once: true
            }}>
                <div className="space-y-8">
                  <div className="flex items-center gap-4 text-white/80">
                    <MapPin className="h-6 w-6 text-white/70" />
                    <div>
                      <p className="font-light text-lg">10 Harley Street</p>
                      <p className="font-light">London W1G 9PF</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-white/80">
                    <Phone className="h-6 w-6 text-white/70" />
                    <p className="font-light text-lg">0333 0551 503</p>
                  </div>
                  
                  <div className="flex items-center gap-4 text-white/80">
                    <Mail className="h-6 w-6 text-white/70" />
                    <p className="font-light text-lg">info@cosmedocs.com</p>
                  </div>
                  
                  <div className="flex items-center gap-4 text-white/80">
                    <Calendar className="h-6 w-6 text-white/70" />
                    <div>
                      <p className="font-light text-lg">Monday - Friday: 9am - 6pm</p>
                      <p className="font-light">Saturday: 9am - 5pm</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-light text-white mb-6">Expert Care</h3>
                  <p className="text-white/80 font-light leading-relaxed mb-6">
                    Our experienced practitioners combine medical expertise with artistic vision to deliver 
                    natural, transformative results using the latest in regenerative DNA therapy.
                  </p>
                  <div className="flex items-center gap-4 text-white/80">
                    <Award className="h-6 w-6 text-white/70" />
                    <p className="font-light">Harley Street Excellence</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true">
          <h2>Polynucleotide Treatment London Birmingham Manchester Cardiff DNA Therapy</h2>
          <p>
            Polynucleotide treatment London regenerative medicine skin rejuvenation DNA therapy anti-aging 
            collagen stimulation hair restoration Harley Street aesthetic clinic natural skin boosters 
            under eye treatment fine lines wrinkles cellular repair salmon DNA fragments marine collagen 
            professional aesthetic physicians Birmingham Manchester Cardiff cosmetic medicine invisible 
            art bold natural always your way polynucleotides skin health restoration facial rejuvenation 
            non-surgical aesthetic treatments advanced injectable procedures Cosmedocs London clinic.
          </p>
          <p>
            Advanced polynucleotide DNA therapy utilizes natural biocompatible fragments extracted from 
            salmon trout sperm promote cellular regeneration enhance collagen elastin production improve 
            skin texture firmness hydration reduce fine lines wrinkles target hair loss androgenic alopecia 
            stimulate follicle growth scalp health under eye rejuvenation dark circles puffiness skin 
            texture improvement acne scarring hyperpigmentation uneven tone professional medical grade 
            treatments aesthetic medicine regenerative therapy.
          </p>
          <p>
            Polynucleotide treatment pricing single session £450 three session package £1200 savings £150 
            optimal results minimum three treatments spaced three weeks apart full effects visible six nine 
            months natural collagen elastin production combines beautifully microneedling PRP Profhilo 
            botox dermal fillers enhanced aesthetic outcomes professional consultation Harley Street London 
            Birmingham Manchester Cardiff aesthetic clinics experienced physicians invisible art philosophy 
            bold natural always your way Cosmedocs.
          </p>
        </div>

        <PopularTreatments title="Related Regenerative Treatments" className="bg-black" />
      </div>
    </>;
};

// Regenerative Science Card Component
const RegenerativeScienceCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="w-full">
        <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer text-left">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-light text-white">How DNA Therapy Works</h4>
              {isOpen ? <ChevronUp className="h-5 w-5 text-white/70 flex-shrink-0" /> : <ChevronDown className="h-5 w-5 text-white/70 flex-shrink-0" />}
            </div>
          </CardContent>
        </Card>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="px-6 pb-6">
          <p className="text-white/80 leading-relaxed font-light">
            Polynucleotides work by providing biocompatible DNA building blocks that stimulate your skin's 
            natural repair mechanisms. They boost cellular regeneration, enhance collagen synthesis, and 
            improve tissue hydration, resulting in healthier, more youthful-looking skin and stronger hair growth.
          </p>
        </div>
      </CollapsibleContent>
    </Collapsible>;
};

// FAQ Item Component
const FAQItem = ({
  question,
  answer,
  index
}: {
  question: string;
  answer: string;
  index: number;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} transition={{
    delay: index * 0.05,
    duration: 0.6,
    ease: [0.25, 0.46, 0.45, 0.94]
  }} viewport={{
    once: true
  }}>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="w-full">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-left font-light text-white text-lg">{question}</h3>
                {isOpen ? <ChevronUp className="h-5 w-5 text-white/70 flex-shrink-0 ml-4" /> : <ChevronDown className="h-5 w-5 text-white/70 flex-shrink-0 ml-4" />}
              </div>
            </CardContent>
          </Card>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="px-6 pb-6">
            <p className="text-white/80 leading-relaxed font-light">{answer}</p>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </motion.div>;
};
export default PolynucleotideTreatment;