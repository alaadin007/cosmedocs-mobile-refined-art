import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, User, CheckCircle, Star, Calendar, Shield, Award, MapPin, GraduationCap } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import BeforeAfterImageViewer from '@/components/BeforeAfterImageViewer';
import PopularTreatments from '@/components/PopularTreatments';
import { generateSEOMetadata } from '@/utils/seo';
import threadLiftImage1 from '@/assets/thread-lift-before-after-1.jpg';
import pdoThreadsImage from '@/assets/pdo-threads-before-after.jpg';
import threadLiftImage2 from '@/assets/thread-lift-before-after-2.png';
import pdoThreadLiftImage from '@/assets/pdo-thread-lift-before-after.jpg';

const seoData = generateSEOMetadata(
  "PDO Thread Face Lift London | Non-Surgical Facelift - CosmeDocs",
  "Transform your face with PDO Thread Face Lift in London. Non-surgical facelift with natural-looking results. Expert practitioners, 2-3 years results. Book consultation.",
  "/thread-face-lift"
);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "name": "PDO Thread Face Lift",
  "description": "Non-surgical thread face lift using PDO threads for skin tightening and face slimming",
  "provider": {
    "@type": "MedicalOrganization",
    "name": "CosmeDocs",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "London",
      "addressCountry": "UK"
    }
  },
  "procedureType": "Non-surgical facelift",
  "bodyLocation": "Face and neck",
  "duration": "PT25M",
  "recovery": "P7D"
};

const treatmentDetails = [
  { icon: Clock, label: "Procedure Time", value: "25-45 mins" },
  { icon: User, label: "Anaesthetic", value: "Local" },
  { icon: Calendar, label: "Results Duration", value: "2-3 Years" },
  { icon: CheckCircle, label: "Back To Work", value: "0-2 Days" },
  { icon: Shield, label: "Full Recovery", value: "One week" },
  { icon: Award, label: "Risk Level", value: "Minimal" }
];

const beforeAfterImages = [
  {
    src: threadLiftImage1,
    alt: "Thread face lift before and after image 2 weeks later - combination PDO thread lift",
    caption: "Combination PDO Thread lift before and after combined with skin treatment"
  },
  {
    src: pdoThreadsImage, 
    alt: "PDO Thread Lift Before and After Image Performed In London",
    caption: "PDO Thread Face Lift Transformation in London"
  },
  {
    src: threadLiftImage2,
    alt: "PDO thread lift before and after procedure final results",
    caption: "PDO Thread Lift: Before and After Comparison - Final results in a few weeks once swelling settles"
  },
  {
    src: pdoThreadLiftImage,
    alt: "PDO thread lift before after natural facial rejuvenation",
    caption: "Natural lifting and tightening results with PDO threads"
  }
];

const faqData = [
  {
    question: "How long do PDO thread lift results last?",
    answer: "PDO thread lift results typically last 2-3 years. The threads gradually dissolve over 12-18 months, but the collagen stimulation continues to provide lifting effects for up to 3 years."
  },
  {
    question: "Is PDO thread lift painful?",
    answer: "The procedure is performed under local anaesthetic, so discomfort is minimal. You may experience mild soreness for a few days after treatment, which can be managed with over-the-counter pain relief."
  },
  {
    question: "How soon can I see results from thread face lift?",
    answer: "Results are visible immediately after treatment, with continued improvement over 2-3 months as collagen production increases and swelling subsides."
  },
  {
    question: "What is the recovery time for PDO threads?",
    answer: "Most patients return to work within 0-2 days. Full recovery takes about one week, during which you should avoid strenuous exercise and facial massage."
  },
  {
    question: "Are there any side effects?",
    answer: "Common side effects include mild swelling, bruising, and tenderness at insertion points. Serious complications are rare when performed by qualified practitioners."
  },
  {
    question: "Who is a good candidate for thread face lift?",
    answer: "Ideal candidates are those with mild to moderate skin laxity, typically aged 30-60, who want facial rejuvenation without surgery. A consultation will determine your suitability."
  }
];

const benefits = [
  "Non-surgical alternative to facelift surgery",
  "Immediate visible lifting results",
  "Stimulates natural collagen production",
  "Minimal downtime and recovery",
  "Long-lasting results (2-3 years)",
  "Enhanced facial contours and definition"
];

export function ThreadFaceLift() {
  return (
    <div className="bg-black text-white">
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:image" content={seoData.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.image} />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      {/* Hero Section - Matching LipFillers style */}
      <section className="relative py-32 overflow-hidden min-h-screen flex items-center">
        <div className="page-container relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Expert PDO Thread
              <span className="block text-purple-300">Face Lift</span>
            </h1>
            <p className="text-xl text-white mb-8">
              Non-surgical facial lifting with premium PDO threads
            </p>
            <p className="text-xl mb-2">
              <span className="text-purple-300 font-semibold">Invisible Art</span>
            </p>
            <p className="text-white mb-8">
              Transformation that speaks without saying a word
            </p>
            <p className="text-2xl text-purple-300 font-bold mb-2">Starting from £800</p>
            <p className="text-sm text-gray-300 mb-8">
              #threadlift - Natural lifting results lasting 2-3 years
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-4 text-lg font-semibold">
                Book Consultation
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-4 text-lg font-semibold">
                View Price List
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-20 bg-accent">
        <div className="page-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">PDO Thread Lift Before and After Results</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              See the natural-looking results achieved with our PDO thread face lift treatments in London. 
              Real patient transformations showing 2-3 years lasting results.
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
                    <div className="absolute top-2 left-2 bg-black/80 text-white px-3 py-1 rounded text-sm font-semibold">
                      BEFORE & AFTER
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
              title="PDO Thread Lift Results Gallery"
              description="Comprehensive gallery of our thread lift treatments showing natural facial rejuvenation"
            />
          </div>
        </div>
      </section>

      {/* Reveal Your Radiance Section */}
      <section className="py-20 bg-black">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-white">
                🌟 Reveal Your Radiance with PDO Thread Lift 🌟
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Are you ready to turn back the clock on ageing and unveil a more youthful, rejuvenated appearance? 
                Look no further than the transformative power of PDO thread face lift! This non-surgical procedure 
                utilises bio-stimulating materials to stimulate collagen production, effectively lifting and 
                tightening sagging skin. Say goodbye to fine lines, wrinkles, and loss of volume, and hello to 
                a refreshed, revitalised look that lasts.
              </p>
              <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-4 text-lg font-semibold">
                Discover Your Transformation
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/mHn0TARBHik"
                  title="PDO Thread Lift Procedure Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full aspect-video"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatment Overview */}
      <section className="py-20">
        <div className="page-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">What Is PDO Thread Face Lift?</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  A PDO thread face lift is a non-surgical cosmetic procedure that uses specialized threads 
                  made from polydioxanone (PDO) to lift and tighten sagging skin. These medical-grade threads 
                  are inserted under the skin to create an immediate lifting effect while stimulating natural 
                  collagen production for long-term rejuvenation.
                </p>
                <p>
                  PDO threads have been safely used in surgical procedures for decades and are completely 
                  biocompatible and biodegradable. The treatment is ideal for addressing early signs of aging, 
                  including sagging jowls, loose neck skin, and loss of facial definition.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
                  <div className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
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
            <h2 className="text-3xl font-bold mb-4 text-white">PDO Thread Lift Pricing London</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Transparent pricing for premium PDO thread lift treatments. All prices include consultation, 
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
                  <CardTitle className="text-white text-2xl">Full Face Thread Lift</CardTitle>
                  <div className="text-purple-300 text-4xl font-bold">£2,750</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300">Comprehensive lifting for dramatic facial rejuvenation</p>
                  <div className="space-y-2 text-left">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="text-purple-500" size={16} />
                      <span className="text-gray-300 text-sm">Full face and neck treatment</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="text-purple-500" size={16} />
                      <span className="text-gray-300 text-sm">Consultation included</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="text-purple-500" size={16} />
                      <span className="text-gray-300 text-sm">Extended aftercare support</span>
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
                  <CardTitle className="text-white text-2xl">Jawline Definition</CardTitle>
                  <div className="text-white text-4xl font-bold">£650-£950</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-purple-100">Perfect for mild jowling and jawline enhancement</p>
                  <div className="space-y-2 text-left">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="text-white" size={16} />
                      <span className="text-purple-100 text-sm">Targeted jawline treatment</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="text-white" size={16} />
                      <span className="text-purple-100 text-sm">Immediate lifting effect</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="text-white" size={16} />
                      <span className="text-purple-100 text-sm">2-3 year results</span>
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

          {/* Additional Pricing Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Small PDO Threads For Skin Tightening</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { area: "Lower Facial Slimming", price: "£650" },
                { area: "Chin Lift / Tightening", price: "£500-£750" },
                { area: "Tear Trough / Under Eye Circles", price: "£400" },
                { area: "Eyebrow Thread Lift (lateral)", price: "£600" },
                { area: "Tear Trough & Eye Brow Lift", price: "£900" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900 rounded-lg p-6 text-center border border-gray-700"
                >
                  <h4 className="text-white font-semibold mb-2">{item.area}</h4>
                  <p className="text-purple-300 text-2xl font-bold">{item.price}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

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

      {/* Treatment Areas Section */}
      <section className="py-20 bg-accent">
        <div className="page-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">What Can Be Treated?</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              PDO thread lifts can address multiple areas of concern for comprehensive facial rejuvenation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { area: "Sagging Facial Skin", description: "Lift and tighten loose, sagging skin across the face" },
              { area: "Cheeks", description: "Restore volume and lift to the mid-face area" },
              { area: "Forehead and Brow Area", description: "Smooth forehead lines and lift drooping brows" },
              { area: "Around the Eyes", description: "Address crow's feet and under-eye sagging" },
              { area: "Neck, Jawline, and Jowls", description: "Define jawline and tighten neck skin" },
              { area: "Deep Wrinkles and Folds", description: "Soften nasolabial folds and marionette lines" },
              { area: "Drooping Mouth Corners", description: "Lift downturned mouth corners for a youthful appearance" },
              { area: "Lines Around the Mouth", description: "Reduce smoker's lines and perioral wrinkles" },
              { area: "Body Areas", description: "Treat abdomen, arms, and other body areas requiring lifting" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-gray-800 h-full hover:border-purple-500 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">{item.area}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
              <p className="text-gray-300">Premium FDA-approved PDO threads only</p>
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
              <p className="text-gray-300">Harley Street, Central London</p>
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
              <p className="text-gray-300">CQC registered clinic with highest standards</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-accent">
        <div className="page-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Common questions about PDO thread face lift treatments
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
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
            <h2 className="text-3xl font-bold mb-4">Ready for Your PDO Thread Lift Transformation?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Book your consultation with our expert cosmetic doctors and discover how PDO thread lifts 
              can enhance your natural beauty with subtle, long-lasting results.
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
      <div className="hidden">
        <h2>PDO Thread Face Lift London - Expert Non-Surgical Facelift Treatment</h2>
        <p>
          At CosmeDocs, our PDO thread face lift treatments in London offer a revolutionary non-surgical 
          approach to facial rejuvenation. Using advanced polydioxanone threads, our expert practitioners 
          deliver natural-looking lifting results that can last 2-3 years. The PDO thread lift procedure 
          is perfect for patients seeking to address sagging skin, loss of facial definition, and early 
          signs of aging without undergoing invasive surgery. Our Harley Street clinic provides the highest 
          standard of aesthetic medicine, with fully qualified doctors specializing in thread lift techniques. 
          The treatment stimulates natural collagen production while providing immediate lifting effects, 
          making it an ideal choice for facial contouring and skin tightening. With minimal downtime and 
          exceptional safety profile, PDO thread lifts represent the future of non-surgical facial enhancement. 
          Our comprehensive consultation process ensures each patient receives a personalized treatment plan 
          tailored to their unique facial anatomy and aesthetic goals. Experience the art of invisible 
          aesthetics with CosmeDocs' advanced thread lift treatments in the heart of London.
        </p>
      </div>

      <PopularTreatments />
    </div>
  );
}