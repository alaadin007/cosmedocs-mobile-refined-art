import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, User, CheckCircle, Star, Calendar, Shield, Award, MapPin, GraduationCap, Activity, Syringe } from 'lucide-react';
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
  "PDO Thread Face Lift London | Thread Lift Before and After - CosmeDocs",
  "Expert PDO thread lifting in London. See real thread lift before and after results. Threading face lift treatments with 2-3 year results. PDO threads London specialists.",
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
    question: "How long do thread lifts before and after results last?",
    answer: "Thread lift before and after results typically last 2-3 years. The PDO threads gradually dissolve over 12-18 months, but the collagen stimulation continues to provide lifting effects for up to 3 years. You'll see continued improvement even after 3 months thread lift healing."
  },
  {
    question: "Is PDO threading painful for facial thread lift?",
    answer: "The facial threading procedure is performed under local anaesthetic, so discomfort is minimal. You may experience mild soreness for a few days after treatment, which can be managed with over-the-counter pain relief."
  },
  {
    question: "How soon can I see thread face lift before after results?",
    answer: "Thread face lift before after results are visible immediately after treatment, with continued improvement over 2-3 months as collagen production increases and swelling subsides. Many clients see dramatic changes even 2 weeks after thread lift."
  },
  {
    question: "What is the recovery time for PDO threads before after treatment?",
    answer: "Most patients return to work within 0-2 days after their threading face lift. Full recovery takes about one week, during which you should avoid strenuous exercise and facial massage to optimize PDO threads before after results."
  },
  {
    question: "Are there any side effects from face threads treatment?",
    answer: "Common side effects from threads face treatment include mild swelling, bruising, and tenderness at insertion points. Serious complications are rare when thread lifting is performed by qualified practitioners."
  },
  {
    question: "Who is a good candidate for facial threads facelift?",
    answer: "Ideal candidates for facial threads facelift are those with mild to moderate skin laxity, typically aged 30-60, who want facial rejuvenation without surgery. A consultation will determine your suitability for face threading before and after treatment."
  },
  {
    question: "What's the difference between mono threads before and after vs lifting threads?",
    answer: "Mono threads before and after results focus on skin texture and tightening, while lifting threads provide more dramatic face lift threading results. Both contribute to natural facial thread lift outcomes when used appropriately."
  },
  {
    question: "Can I see before and after PDO thread lift eyes results?",
    answer: "Yes, before and after PDO thread lift eyes treatments show excellent results for reducing under-eye sagging and lifting the brow area. Eye area thread lifting provides subtle yet effective rejuvenation."
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
             <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
               PDO Thread
               <span className="block text-purple-300">Face Lift London</span>
             </h1>
            <p className="text-xl text-white mb-8">
              Non-surgical face thread lift with premium PDO threading for natural facial rejuvenation
            </p>
            <p className="text-xl mb-2">
              <span className="text-purple-300 font-semibold">Invisible Art</span>
            </p>
            <p className="text-white mb-8">
              Transformation that speaks without saying a word
            </p>
            <p className="text-sm text-gray-300 mb-8">
              #threadlift #pdothreads #facethreadlift - Natural threading face lift results lasting 2-3 years
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => window.open("https://med.as.me/harleystreet", "_blank")}
                className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-4 text-lg font-semibold"
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
                className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-4 text-lg font-semibold"
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
            <h2 className="text-3xl font-bold mb-8 text-white">PDO Threading & Face Thread Lift Treatment London</h2>
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
              <p className="text-gray-300">60-90 minutes including consultation</p>
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
              <p className="text-gray-300">2-3 years with premium PDO threads</p>
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
              <p className="text-gray-300">0-2 days downtime, full recovery in 1 week</p>
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
            <h2 className="text-3xl font-bold mb-4">PDO Threads Before and After Results London</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore authentic PDO threads before and after results from our London clinic. 
              See real thread face lift before after transformations, including mono threads before and after, 
              and collagen threads before and after results showing natural facial thread lift outcomes.
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
              title="PDO Thread Lift Results Gallery"
              description="Comprehensive gallery of our thread lift treatments showing natural facial rejuvenation"
            />
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
              <h2 className="text-3xl font-bold mb-6">What Are PDO Threads? Face Lift Using Threads Explained</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  A PDO thread face lift is a revolutionary non-surgical threading face lift procedure that uses 
                  specialized PDO lifting threads made from polydioxanone to lift and tighten sagging facial skin. 
                  These medical-grade threads for face treatment are inserted under the skin to create an immediate 
                  lifting effect while stimulating natural collagen production for long-term facial rejuvenation.
                </p>
                <p>
                  PDO threads London treatments have been safely used in surgical procedures for decades and are 
                  completely biocompatible and biodegradable. This face threading lift treatment is ideal for 
                  addressing early signs of aging, including sagging jowls, loose neck skin, and loss of facial definition. 
                  The threading facelift process offers a non-surgical alternative to traditional surgical procedures.
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
            <h2 className="text-3xl font-bold mb-4 text-white">What Areas Can Thread Lifts Treat?</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Face lift using threads can address multiple areas for comprehensive facial threading lift rejuvenation. 
              Our threads face treatments provide natural-looking thread facelift results across various facial zones.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { area: "Sagging Facial Skin", description: "Lift and tighten loose, sagging skin with PDO threading across the face" },
              { area: "Cheek Lift with Threads", description: "Restore volume and lift to the mid-face area using PDO threads" },
              { area: "Forehead and Brow Threading", description: "Smooth forehead lines and lift drooping brows with thread lifting" },
              { area: "PDO Thread Lift Eyes", description: "Address crow's feet and under-eye sagging with specialized eye threads" },
              { area: "Neck, Jawline Thread Lift", description: "Define jawline and tighten neck skin with facial threads" },
              { area: "Deep Wrinkles Treatment", description: "Soften nasolabial folds and marionette lines using threading techniques" },
              { area: "Facial Threading Lift", description: "Lift downturned mouth corners for a youthful appearance with threads" },
              { area: "Perioral Thread Treatment", description: "Reduce smoker's lines and perioral wrinkles with PDO threads" },
              { area: "Body Thread Lifting", description: "Treat abdomen, arms, and other body areas requiring thread lifting" }
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
            <h2 className="text-3xl font-bold mb-4 text-white">Thread Face Lift Cost & Thread Lift Cost UK</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Transparent thread lift cost pricing for premium PDO threads London treatments. 
              Our thread face lift price includes consultation, facial threading lift procedure, 
              and aftercare support from our expert medical team.
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
                  <CardTitle className="text-white text-2xl">Complete Threads Face Lift</CardTitle>
                  <div className="text-purple-300 text-4xl font-bold">£2,750</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300">Comprehensive face lift by threading for dramatic facial thread lift results</p>
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
                  <CardTitle className="text-white text-2xl">Cheek Lift with Threads</CardTitle>
                  <div className="text-white text-4xl font-bold">£650-£950</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-purple-100">Perfect for cheek lift with threads and facial threading enhancement</p>
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
            <h3 className="text-2xl font-bold text-white mb-8 text-center">PDO Mono Threads & Facial Threading Lift Prices</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { area: "Face Threading Lift (Lower Face)", price: "£650" },
                { area: "Face Lift Threading Cost (Chin)", price: "£500-£750" },
                { area: "PDO Thread Before and After (Under Eye)", price: "£400" },
                { area: "Facial Threading (Eyebrow Lift)", price: "£600" },
                { area: "Face Threads Before and After (Combined)", price: "£900" }
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
              *Thread face lift price includes consultation fee when proceeding same day. 
              Contact us for detailed thread lift cost UK information and threading face lift pricing options.
            </p>
            <Button 
              onClick={() => window.open("https://med.as.me/harleystreet", "_blank")}
              className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 text-lg font-semibold"
            >
              Book Your Consultation
            </Button>
          </motion.div>
        </div>
      </section>

      {/* PDO Thread Lift Procedure Section */}
      <section className="py-20 bg-accent">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-white">
                PDO Threading Procedure: How Thread Lifting Works
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  During the PDO threading procedure, our experienced medical professional uses a thin needle or cannula 
                  to insert the PDO lifting threads into the skin. These threads in face create a scaffolding effect 
                  that lifts and supports sagging facial skin. Some types of lifting threads have small hooks that aid 
                  in uplifting the skin for enhanced thread facelift results. See the thread lifting procedure video below.
                </p>
                <p>
                  As the threads dissolve over time (usually 2 weeks after thread lift treatment), they continue to 
                  stimulate collagen production, enhancing skin tightness and elasticity for long-lasting thread lift 
                  before after results.
                </p>
                <h3 className="text-xl font-semibold text-white mt-6 mb-4">The specific benefits of PDO thread lift include:</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <p>The ultra-fine threads naturally break down within the body over 6-8 months, with results lasting about 18 months.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <p>The transparent material is invisible under the skin.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <p>The threads are cone-free, preventing tissue damage.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <p>They have an excellent safety record, the same type used in cardiac and other surgical sutures.</p>
                  </div>
                </div>
                <p className="mt-4">
                  The PDO thread lift London treatment is designed to reposition the facial skin and trigger the body's 
                  natural response by producing collagen and improving blood circulation, which tightens the tissue. 
                  Results continue to improve even 3 months after thread lift treatment, with optimal thread lift after 
                  3 months outcomes visible as swelling subsides and collagen remodeling continues.
                </p>
              </div>
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
            <h2 className="text-3xl font-bold mb-4">Ready for Your Thread Face Lift Transformation?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Book your consultation with our expert cosmetic doctors and discover how PDO threading 
              can enhance your natural beauty with subtle, long-lasting thread lift results. See our 
              impressive thread lifts before and after gallery and join thousands of satisfied clients.
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
                onClick={() => window.open("tel:0333 0551 503")} 
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
        <h2>PDO Threads Before and After: Complete Thread Face Lift London Guide</h2>
        <p>
          Our comprehensive PDO thread lift London clinic specializes in delivering exceptional thread face lift 
          before after results using premium PDO threading techniques. With extensive experience in facial threading 
          lift procedures, we provide natural-looking thread facelift transformations that showcase dramatic 
          PDO threads before after outcomes. Our expert practitioners utilize advanced threading face lift methods 
          to achieve optimal thread lift before after results, with detailed documentation showing the effectiveness 
          of our PDO threads London treatments.
        </p>
        <p>
          Whether you're seeking mono threads before and after improvements, comprehensive threads face lift procedures, 
          or specialized before and after PDO thread lift eyes treatments, our London clinic offers premier face 
          threading solutions. We provide transparent thread face lift cost information and competitive thread lift 
          cost UK pricing for all facial threading lift procedures, making professional thread lifting accessible 
          to clients throughout London and beyond.
        </p>
        <p>
          Our extensive PDO mono threads before and after gallery demonstrates exceptional results from thread lifts 
          before and after treatments, including targeted cheek lift with threads, complete face lift by threading, 
          and comprehensive threads face procedures. Clients consistently experience remarkable improvement 2 weeks 
          after thread lift treatment, with optimal thread lift after 3 months results as the PDO threading settles 
          and natural collagen production enhances the facial rejuvenation process.
        </p>
        <p>
          The impressive face threading before and after transformations from our London clinic showcase the 
          remarkable effectiveness of facial threads facelift treatments. Our natural threading face lift outcomes 
          enhance facial contours without invasive surgery, while our expertise in face lift threading cost-effective 
          solutions ensures premium PDO threads London treatments remain accessible. From individual facial threads 
          procedures to comprehensive threadlift treatments, our thread face lift price options accommodate various 
          budgets while maintaining the highest quality standards.
        </p>
        <p>
          Experience the transformative power of professional thread lifting with our PDO thread lift before and 
          after portfolio, which demonstrates the exceptional results achievable through expert thread face lift 
          treatments. Our specialized face threads treatments help clients achieve their aesthetic goals through 
          natural-looking thread facelift results, enhanced by ongoing collagen threads before and after improvements 
          that continue developing months after the initial facial threading procedure.
        </p>
        <h3>Thread Lift London: Advanced PDO Threading Techniques</h3>
        <p>
          Our London clinic's approach to face lift using threads combines cutting-edge PDO lifting threads with 
          artistic technique to deliver superior threads face lift results. The threading facelift process involves 
          strategic placement of facial threads to achieve natural-looking enhancement, with comprehensive thread 
          lift before after documentation demonstrating the effectiveness of our threading approaches across diverse 
          facial structures and aesthetic goals.
        </p>
      </div>

      <PopularTreatments />
    </div>
  );
}