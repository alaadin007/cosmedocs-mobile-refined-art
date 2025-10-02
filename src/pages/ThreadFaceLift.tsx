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

const medicalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Cosmedocs",
  "description": "Expert PDO thread face lift and facial threading treatments in London - Harley Street aesthetic clinic",
  "url": "https://www.cosmedocs.co.uk/thread-face-lift",
  "telephone": "0333 0551 503",
  "email": "info@cosmedocs.com",
  "priceRange": "£££",
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
};

const medicalProcedureSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "name": "PDO Thread Face Lift",
  "description": "Non-surgical thread face lift using PDO threads for skin tightening and face slimming",
  "provider": {
    "@type": "MedicalOrganization",
    "name": "CosmeDocs",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "10 Harley Street",
      "addressLocality": "London",
      "addressCountry": "UK"
    }
  },
  "procedureType": "Cosmetic and Medical Injectable Treatment",
  "bodyLocation": "Face and neck",
  "duration": "PT45M",
  "recovery": "P7D",
  "preparation": "Avoid blood-thinning medications, inform doctor of medical conditions",
  "followup": "Follow-up assessment after 2 weeks",
  "howPerformed": "PDO threads inserted into facial tissue to lift and tighten skin",
  "medicalSpecialty": "Cosmetic Medicine"
};

const offerSchema = {
  "@context": "https://schema.org",
  "@type": "Offer",
  "name": "PDO Thread Face Lift Treatment",
  "description": "Professional thread face lift treatment for facial rejuvenation",
  "priceCurrency": "GBP",
  "price": "850",
  "priceValidUntil": "2025-12-31",
  "availability": "https://schema.org/InStock",
  "url": "https://www.cosmedocs.co.uk/thread-face-lift",
  "seller": {
    "@type": "MedicalBusiness",
    "name": "Cosmedocs"
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.cosmedocs.co.uk"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Treatments",
      "item": "https://www.cosmedocs.co.uk/treatments"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "PDO Thread Face Lift",
      "item": "https://www.cosmedocs.co.uk/thread-face-lift"
    }
  ]
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="pdo threads before and after, face thread lift, pdo threading, thread face lift cost, thread face lift, pdo threads lift before and after, face threading lift, thread lifts, thread lift london, facial threading, pdo thread lift london, thread facelift, collagen threads before and after, facial threading lift, before and after pdo thread lift eyes, mono threads before and after, thread face lift before after, thread lift cost uk, pdo threads before after, thread lifting, cheek lift with threads, threads face, thread lifts before and after, facial thread lift, pdo mono threads before and after, face lift by threading, pdo thread before and after, face threads before and after, thread face lift price, facial threads facelift, thread lift, face threads, face lift using threads, thread lift cost, face lift threading cost, thread lift before after, threads for face, pdo lifting threads, thread face lift before and after, pdo threads london, thread lift before and after, threads face lift, face threading before and after, facial threads, threadlift, threads in face, pdo thread lift before and after, face lift threading, threading face lift, before and after thread face lift" />
        <meta name="author" content="Cosmedocs Medical Team" />
        <meta name="publish-date" content="2024-01-15" />
        <meta name="last-modified" content="2025-10-02" />
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
          {JSON.stringify(medicalBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(medicalProcedureSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(offerSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
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
                      width="400"
                      height="300"
                      loading="lazy"
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

      {/* Understanding Thread Lifts - New Comprehensive Content Section */}
      <section className="py-20 bg-accent">
        <div className="page-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 text-white text-center">Understanding PDO Thread Lifts: A Complete Guide</h2>
            
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                The PDO thread lift London treatment represents a breakthrough in non-surgical facial rejuvenation. 
                This innovative threading face lift procedure uses dissolvable PDO lifting threads to provide immediate 
                lifting whilst stimulating your body's natural collagen production for lasting results. Our thread lifts 
                before and after gallery demonstrates the remarkable transformations achievable through this minimally invasive procedure.
              </p>

              <p>
                <a href="https://pubmed.ncbi.nlm.nih.gov/30547035/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:underline">
                  According to research published in Plastic and Reconstructive Surgery
                </a>, PDO threads have shown excellent safety profiles and patient satisfaction rates exceeding 90%. 
                The thread facelift works by inserting biocompatible threads in face tissue, creating a supportive mesh 
                that lifts sagging skin whilst encouraging natural collagen threads before and after production over time.
              </p>



            </div>
          </motion.div>
        </div>
      </section>

      {/* Types of Threads Section */}
      <section className="py-20 bg-black">
        <div className="page-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Types of Threads in Face Treatments</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Premium PDO threads tailored to your specific rejuvenation needs. <a href="https://pubmed.ncbi.nlm.nih.gov/32766067/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Peer-reviewed research</a> demonstrates consistently high patient satisfaction rates of 80–95% following PDO thread lift procedures.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Mono Threads */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500 h-full hover:border-purple-400 transition-all duration-300">
                <CardHeader>
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Activity className="text-purple-600" size={28} />
                  </div>
                  <CardTitle className="text-white text-2xl text-center">Mono Threads</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 text-center text-sm">
                    Smooth threads for skin rejuvenation and texture improvement
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-purple-400 flex-shrink-0" size={16} />
                      <span className="text-gray-300 text-sm">Collagen stimulation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-purple-400 flex-shrink-0" size={16} />
                      <span className="text-gray-300 text-sm">Skin tightening</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-purple-400 flex-shrink-0" size={16} />
                      <span className="text-gray-300 text-sm">Fine line reduction</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Cog Threads */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-pink-900/30 to-purple-900/30 border-pink-500 h-full hover:border-pink-400 transition-all duration-300">
                <CardHeader>
                  <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Star className="text-pink-600" size={28} />
                  </div>
                  <CardTitle className="text-white text-2xl text-center">Cog Threads</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 text-center text-sm">
                    Barbed threads for powerful lifting and repositioning
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-pink-400 flex-shrink-0" size={16} />
                      <span className="text-gray-300 text-sm">Maximum lifting</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-pink-400 flex-shrink-0" size={16} />
                      <span className="text-gray-300 text-sm">Facial contouring</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-pink-400 flex-shrink-0" size={16} />
                      <span className="text-gray-300 text-sm">Immediate results</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Screw Threads */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-blue-500 h-full hover:border-blue-400 transition-all duration-300">
                <CardHeader>
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Shield className="text-blue-600" size={28} />
                  </div>
                  <CardTitle className="text-white text-2xl text-center">Screw Threads</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 text-center text-sm">
                    Intertwined threads for volume restoration
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-blue-400 flex-shrink-0" size={16} />
                      <span className="text-gray-300 text-sm">Volume enhancement</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-blue-400 flex-shrink-0" size={16} />
                      <span className="text-gray-300 text-sm">Deep support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-blue-400 flex-shrink-0" size={16} />
                      <span className="text-gray-300 text-sm">Hollow area treatment</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline and Aftercare Section */}
      <section className="py-20 bg-accent">
        <div className="page-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-8 text-white">Thread Lift Journey & Care</h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Expected Timeline and Results Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-black border-gray-800 h-full">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Expected Timeline and Results</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-300">
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-24 font-semibold text-purple-300">Immediate:</div>
                      <div>Visible lifting effect from thread placement</div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-24 font-semibold text-purple-300">2-7 days:</div>
                      <div>Initial swelling subsides, mechanical lift becomes apparent</div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-24 font-semibold text-purple-300">2 weeks:</div>
                      <div>Significant improvement visible as swelling reduces</div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-24 font-semibold text-purple-300">3 months:</div>
                      <div>Optimal results as collagen production peaks</div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-24 font-semibold text-purple-300">2-3 years:</div>
                      <div>Long-lasting natural-looking results maintained</div>
                    </div>
                  </div>
                  <p className="pt-4 border-t border-gray-800">
                    Results develop gradually, with the true beauty of PDO threading emerging over subsequent months as collagen production increases, ensuring natural-looking facial rejuvenation.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Aftercare Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-black border-gray-800 h-full">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Aftercare Guidelines</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-300">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white">First 24 hours:</strong> Keep head elevated and avoid lying flat
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white">First week:</strong> Avoid strenuous exercise and facial massage
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white">Facial expressions:</strong> Avoid excessive facial movements for 2 weeks
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white">Skincare:</strong> Use gentle products and avoid harsh treatments
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white">Sun protection:</strong> Apply SPF daily to protect treated areas
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white">Follow-up:</strong> Attend scheduled appointments for optimal results
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Benefits Card - Centered below both columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">The Specific Benefits of PDO Thread Lift Include:</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300">The ultra-fine threads naturally break down within the body over 6-8 months, with results lasting about 18 months.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300">The transparent material is invisible under the skin.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300">The threads are cone-free, preventing tissue damage.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300">They have an excellent safety record, the same type used in cardiac and other surgical sutures.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PDO Thread Lift Procedure Section */}
      <section className="py-20 bg-black">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-white">
                How Does Face Threading Lift Work?
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  During a face thread lift procedure, our expert practitioners insert specialized threads for face treatment 
                  beneath the skin using fine needles. These PDO mono threads before and after treatment create an immediate 
                  lifting effect, whilst also triggering your body's healing response. Over the following weeks, new collagen 
                  forms around the threads, enhancing the lift and improving skin quality. The thread lift after 3 months 
                  shows optimal results as collagen production peaks.
                </p>
                <p>
                  What are PDO threads exactly? PDO (polydioxanone) is a synthetic absorbable surgical suture material that's 
                  been used safely in medical procedures for over 30 years. When used for facial threading lift treatments, 
                  these threads dissolve naturally over 12-18 months, but the collagen framework they create continues providing 
                  support, meaning your thread lift before and after results can last 2-3 years.
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
            <p className="text-gray-300 max-w-3xl mx-auto mt-4">
              The PDO thread lift London treatment is designed to reposition the facial skin and trigger the body's 
              natural response by producing collagen and improving blood circulation, which tightens the tissue. 
              Results continue to improve even 3 months after thread lift treatment, with optimal thread lift after 
              3 months outcomes visible as swelling subsides and collagen remodeling continues.
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
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
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
        <h2>Additional Thread Lift Information</h2>
        <p>
          Our PDO thread lift London clinic provides comprehensive facial threading lift services with transparent 
          thread face lift cost information. The thread lift cost UK varies based on treatment areas, with our 
          thread face lift price reflecting the quality of premium PDO threads and expert technique. Face lift 
          threading cost typically ranges from £850-£2,500 depending on the extent of thread lifting required.
        </p>
        <p>
          Patients seeking face lift by threading appreciate our detailed before and after thread face lift 
          documentation, including specialized before and after PDO thread lift eyes results. The face threading 
          before and after images demonstrate natural threadlift outcomes achievable through expert PDO thread 
          before and after treatment planning and execution.
        </p>
        <p>
          Whether interested in cheek lift with threads, comprehensive threads face lift procedures, or targeted 
          facial threads facelift treatments, our London clinic offers personalized threading face lift solutions 
          that deliver impressive pdo threads lift before and after transformations whilst maintaining the natural 
          character that makes each face unique.
        </p>
      </div>

      <PopularTreatments />
    </div>
  );
}