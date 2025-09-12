import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram, Users, Award, Calendar, MapPin, Phone, Mail, ChevronDown, ChevronUp, Clock, Activity, Syringe, GraduationCap, CheckCircle, Palette, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateSEOMetadata } from "@/utils/seo";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const NonSurgicalNoseJob = () => {
  const seoData = generateSEOMetadata(
    "Non-Surgical Nose Job London | £450 | Dr. Ahmed Haq | Harley Street",
    "Expert non-surgical nose job treatments in London's Harley Street. Dr. Ahmed Haq offers premium nose reshaping from £450. Book your consultation today.",
    "/non-surgical-nose-job"
  );

  const bookingUrl = "https://med.as.me/harleystreet";

  // Before/after images for the viewer - updated with new images
  const beforeAfterImages = [
    {
      src: "/lovable-uploads/8f741338-3fd5-4feb-9d34-270856fb99c5.png",
      alt: "Non-surgical nose job London progression results by Dr Ahmed Haq at Cosmedocs Harley Street showing gradual improvement",
      caption: "Progressive transformation over 3 years showing natural enhancement with #cosmenose technique"
    },
    {
      src: "/lovable-uploads/16fa7311-00af-4ea7-b353-73f981f6d87c.png",
      alt: "Non-surgical nose job before and after profile view Harley Street London Cosmedocs treatment results",
      caption: "Subtle profile enhancement achieving perfect nasal proportions"
    },
    {
      src: "/lovable-uploads/717753b3-1c9d-43bd-bdc1-ca245fc3c284.png",
      alt: "Non-surgical nose job immediate results London Dr Ahmed Haq Cosmedocs Harley Street dermal filler treatment",
      caption: "Immediate transformation showing refined nasal bridge and tip"
    },
    {
      src: "/lovable-uploads/d5cec131-9f61-4b49-9dba-8658eda2eddf.png",
      alt: "Non-surgical nose job treatment progression at 5 and 10 minutes London Harley Street Cosmedocs",
      caption: "Treatment progression showing results developing over 10 minutes"
    },
    {
      src: "/lovable-uploads/a9ac5188-66f2-420b-9b39-3449dc02ff7b.png",
      alt: "Non-surgical nose job side profile comparison before after London Cosmedocs Harley Street nose filler treatment",
      caption: "Profile view showing enhanced nasal projection and definition"
    },
    {
      src: "/lovable-uploads/97c76ea5-245e-43c2-8b89-533f365f4969.png",
      alt: "Non-surgical nose job technique showing raised bridge concealed bump correction London Harley Street Cosmedocs",
      caption: "Advanced technique demonstrating raised bridge and concealed bump correction"
    },
    // New images added
    {
      src: "/lovable-uploads/7b2a209c-3203-44b6-8cff-83e3a40896b9.png",
      alt: "Non-surgical nose job before and after profile view London Harley Street Cosmedocs",
      caption: "Profile transformation showing refined nasal bridge and enhanced projection with #cosmenose technique"
    },
    {
      src: "/lovable-uploads/62475a93-6144-4596-bca9-7e70d52cb7c1.png",
      alt: "Non-surgical nose job bottom view before after London Cosmedocs Harley Street",
      caption: "Underneath view demonstrating improved nasal tip projection and symmetry"
    },
    {
      src: "/lovable-uploads/cc387da3-1543-4b06-8b11-a48d29f03456.png",
      alt: "Non-surgical nose job side profile before after London Harley Street Cosmedocs",
      caption: "Side profile enhancement demonstrating subtle yet significant improvement in nasal contours"
    },
    {
      src: "/lovable-uploads/1cceb92b-eacb-48b4-9c9f-04c4cb2b025e.png",
      alt: "Non-surgical nose job profile transformation London Cosmedocs Dr Ahmed Haq",
      caption: "Natural-looking profile enhancement achieved with advanced dermal filler techniques"
    },
    {
      src: "/lovable-uploads/bf8a69d8-6776-4187-857d-a009e9fd6147.png",
      alt: "Non-surgical nose job Cosmedocs London Harley Street before after results Dr Ahmed Haq",
      caption: "Remarkable transformation achieving perfect nasal proportions and facial harmony"
    }
  ];

  const leftColumnFaqs = [
    {
      question: "How much does a non-surgical nose job cost in London?",
      answer: "At Cosmedocs Harley Street, non-surgical nose job treatments start from £450. The final cost depends on the complexity of your case and the amount of dermal filler required to achieve your desired results."
    },
    {
      question: "How long do non-surgical nose job results last?",
      answer: "Results typically last 12-18 months. The longevity depends on factors like your metabolism, the type of filler used, and your lifestyle. Touch-up treatments can help maintain your desired look."
    },
    {
      question: "Is non-surgical nose job safe?",
      answer: "When performed by Dr. Ahmed Haq at our Harley Street clinic, non-surgical nose jobs are very safe. Dr. Haq has been performing these treatments since 2010 and uses advanced injection techniques to minimize risks."
    },
    {
      question: "What's the difference between cannula and needle techniques?",
      answer: "Dr. Ahmed Haq uses both cannula and needle techniques depending on your specific needs. Cannulas reduce bruising and provide smoother filler distribution, while needles offer more precision in targeted areas."
    },
    {
      question: "Can you fix a deviated nose without surgery?",
      answer: "Yes, non-surgical techniques can significantly improve the appearance of deviated noses. Our advanced #cosmenose technique can correct asymmetries and create a more balanced nasal profile without surgery."
    }
  ];

  const rightColumnFaqs = [
    {
      question: "How painful is a non-surgical nose job?",
      answer: "Most patients experience minimal discomfort. We use topical numbing cream and the dermal fillers contain lidocaine for additional comfort. The procedure is generally well-tolerated with minimal downtime."
    },
    {
      question: "What can't be treated with non-surgical nose job?",
      answer: "Non-surgical nose jobs cannot make your nose smaller or treat severe structural issues. They're excellent for smoothing bumps, lifting the tip, improving symmetry, and enhancing overall nasal contours."
    },
    {
      question: "How quickly will I see results?",
      answer: "Results are visible immediately after treatment, with final results apparent within 2 weeks once any minor swelling subsides. You'll see progressive improvement as the filler settles naturally."
    },
    {
      question: "What happens during the consultation at Cosmedocs?",
      answer: "Dr. Ahmed Haq will assess your nasal anatomy, discuss your goals, explain the #cosmenose technique, and create a personalized treatment plan. You'll see before/after photos and understand exactly what to expect."
    },
    {
      question: "Can non-surgical nose job results be reversed?",
      answer: "Yes, hyaluronic acid fillers used in non-surgical nose jobs can be dissolved with hyaluronidase if needed. This provides an added safety net and flexibility that surgical rhinoplasty cannot offer."
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
            "name": "Cosmedocs - Non-Surgical Nose Job",
            "description": "Premium non-surgical nose job treatments in London's Harley Street",
            "url": "https://cosmedocs.com/non-surgical-nose-job",
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
            "medicalSpecialty": "Cosmetic Surgery",
            "priceRange": "£450"
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
                  Non-Surgical
                  <span className="block text-purple-300">Nose Job</span>
                  <span className="block text-sm mt-4">Precision artistry for refined profiles</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl">
                  <span className="text-purple-300 font-semibold">Invisible Art</span>
                  <br />
                  Transformation that speaks without saying a word
                </p>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Starting from £450</p>
                  <p className="text-sm text-gray-300">#cosmenose - Advanced cannula & needle techniques for natural enhancement</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={bookingUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl inline-flex items-center justify-center"
                  >
                    Book Consultation
                  </a>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm">
                    View Results
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
              <h2 className="text-3xl font-bold mb-8 text-white">Non-Surgical Nose Job Treatment</h2>
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
                <p className="text-gray-300">15-30 minutes including consultation</p>
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
                <p className="text-gray-300">12-18 months with premium dermal fillers</p>
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
                <p className="text-gray-300">Minimal downtime, return to work same day</p>
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
                <h3 className="text-lg font-semibold text-white mb-2">Technique</h3>
                <p className="text-gray-300">Advanced cannula & needle methods</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Before & After Gallery - Carousel Style */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Before and After Non-Surgical Nose Job Results in London</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Explore authentic before and after non-surgical nose job results from our London Harley Street clinic. 
                Our advanced #cosmenose technique delivers natural enhancement tailored to your facial features.
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
                title="Non-Surgical Nose Job Results Gallery"
                description="Comprehensive gallery of our nose enhancement treatments"
              />
            </div>
          </div>
        </section>

        {/* Treatment Overview Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Non-Surgical Nose Job</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Established in 2007, our Harley Street Clinic, CosmeDocs has been at the forefront of nonsurgical nose jobs, pioneering advancements that have set new standards. Additionally, our innovative techniques, showcased at leading aesthetic conferences, offer a safe, effective, and affordable alternative to traditional rhinoplasty.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Whether you want to:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="text-purple-400 flex-shrink-0" size={20} />
                  <span className="text-white">smooth out bumps</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="text-purple-400 flex-shrink-0" size={20} />
                  <span className="text-white">refine the nasal tip</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="text-purple-400 flex-shrink-0" size={20} />
                  <span className="text-white">enhance overall nose definition</span>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Hence, our treatments promise impressive outcomes with minimal downtime.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20 bg-black">
          <div className="page-container">
            {/* Challenging Fracture Case */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <Card className="bg-gray-900 border-purple-400/20">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white text-center">Challenging Fracture Case</CardTitle>
                </CardHeader>
              </Card>
            </motion.div>

            {/* Complex Deviated Nose Corrections */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900 border-purple-400/20">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white text-center">Complex Deviated Nose Corrections</CardTitle>
                </CardHeader>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Complex Nose Fracture Case - Apple Style */}
        <section className="py-32 bg-accent">
          <div className="page-container">
            
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
                Complex Fracture Reconstruction
              </h2>
              <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
                Advanced non-surgical reconstruction of complicated nose fractures using pioneering techniques
              </p>
            </motion.div>
            
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
                Complex Deviated Nose Corrections
              </h2>
              <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
                Specialized expertise in correcting even the most challenging deviated nose cases using advanced non-surgical techniques
              </p>
            </motion.div>
            
            <div className="max-w-6xl mx-auto">
              <motion.div 
                className="grid lg:grid-cols-2 gap-16 items-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                <div className="order-2 lg:order-1">
                  <img 
                    src="/lovable-uploads/0cac590b-9991-4176-b5d7-541992920464.png" 
                    alt="Complex nose fracture non-surgical reconstruction before after London Harley Street Cosmedocs Dr Ahmed Haq fibrosis cartilage bone treatment cannula technique"
                    className="w-full h-auto rounded-2xl shadow-2xl object-cover max-w-full"
                    loading="lazy"
                    onError={(e) => {
                      console.error('Image failed to load:', e.currentTarget.src);
                      e.currentTarget.style.display = 'block';
                      e.currentTarget.style.backgroundColor = '#333';
                      e.currentTarget.style.minHeight = '300px';
                    }}
                  />
                </div>
                
                <div className="order-1 lg:order-2 space-y-8">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
                      Challenging Fracture Case
                    </h3>
                    <p className="text-lg text-white/80 font-light leading-relaxed mb-8">
                      This complex case presented unique challenges with scar tissue adhesion affecting the nasal structure. 
                      The remarkable transformation demonstrates advanced non-surgical reconstruction capabilities.
                    </p>
                  </div>
                  
                  <FractureDebriefCard />
                </div>
              </motion.div>
            </div>
          </div>
        </section>


        {/* Complicated Deviated Nose Correction */}
        <section className="py-32 bg-[#0A0A0A]">
          <div className="page-container">
            
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 mb-12">
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <img 
                    src="/lovable-uploads/461ed1b4-14e5-4864-863b-2e30db23adfc.png" 
                    alt="Before non-surgical deviated nose correction London Harley Street Cosmedocs Dr Ahmed Haq complex case treatment"
                    className="w-full h-auto rounded-2xl mb-6 shadow-xl"
                  />
                  <p className="text-white/70 text-lg font-light">Before: Complex deviated nose requiring specialized correction technique</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <img 
                    src="/lovable-uploads/8f4b0286-bd8c-4aaa-8ac1-51ddc5e4c73b.png" 
                    alt="After non-surgical deviated nose correction London Harley Street Cosmedocs Dr Ahmed Haq complex case results"
                    className="w-full h-auto rounded-2xl mb-6 shadow-xl"
                  />
                  <p className="text-white/70 text-lg font-light">After: Remarkable improvement in nasal symmetry and profile using advanced #cosmenose technique</p>
                </motion.div>
              </div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                <p className="text-white/80 mb-8 text-lg font-light leading-relaxed max-w-4xl mx-auto">
                  This case demonstrates Dr. Ahmed Haq's expertise in correcting complex deviated noses through strategic dermal filler placement, 
                  achieving significant improvement in nasal symmetry and overall facial harmony without surgical intervention.
                </p>
                <a 
                  href={bookingUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 rounded-full px-10 py-4 inline-flex items-center justify-center text-lg font-light transition-all duration-300 border border-white/20"
                >
                  Discuss Your Case
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Patient Experience Video */}
        <section className="py-32 bg-gradient-to-b from-[#0A0A0A] to-black">
          <div className="page-container">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
                Real Patient Experience
              </h2>
              <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
                Authentic stories from patients who've experienced the invisible art of transformation
              </p>
            </motion.div>
            
            <div className="max-w-5xl mx-auto">
              <motion.div 
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/_yO12RM4-34?start=7"
                    title="Non-Surgical Nose Job Experience at Cosmedocs London Harley Street Dr Ahmed Haq patient testimonial"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </motion.div>
              
              <motion.p 
                className="text-center text-white/70 mt-8 text-lg font-light"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
              >
                Watch this honest review from one of our patients sharing her complete journey and results
              </motion.p>
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
              <h2 className="text-3xl font-bold mb-4 text-white">Non-Surgical Nose Job Pricing London</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Transparent pricing for premium non-surgical nose reshaping treatments. All prices include consultation, 
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
                    <CardTitle className="text-white text-2xl">Consultation Only</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£50</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Professional assessment and treatment planning</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Full nasal assessment</span>
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
                    <CardTitle className="text-white text-2xl">Non-Surgical Nose Job</CardTitle>
                    <div className="text-white text-4xl font-bold">£450</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-purple-100">Complete nose reshaping with premium dermal fillers</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Comprehensive consultation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Premium hyaluronic acid fillers</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">#CosmeNose advanced technique</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">2-week follow-up included</span>
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
                    <CardTitle className="text-white text-2xl">Botox for Nose</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£200</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Reduce flaring and refine nasal tip</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Reduces nostril flaring</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Lifts drooping nasal tip</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Results last 3-4 months</span>
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
            </motion.div>
          </div>
        </section>

        {/* Non-Surgical Rhinoplasty Benefits */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Non-Surgical Rhinoplasty Benefits</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Rhinoplasty using dermal fillers can quickly and safely improve:
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Syringe className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Droopy Nose Tip Lift</h3>
                <p className="text-gray-300">Elevate and enhance the projection of a drooping nasal tip for better facial balance</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Activity className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Hooked & Crooked Nose</h3>
                <p className="text-gray-300">Correct asymmetries and improve the overall shape of hooked or crooked noses</p>
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
                <h3 className="text-lg font-semibold text-white mb-2">Smooth Humps & Bumps</h3>
                <p className="text-gray-300">Eliminate unsightly nasal bumps and create a smooth, refined profile</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Raise Low Nasal Bridge</h3>
                <p className="text-gray-300">Enhance low nasal bridges, particularly beneficial for Asian nose enhancement</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Balance Facial Profile</h3>
                <p className="text-gray-300">Create harmonious facial proportions by improving overall nasal balance</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Palette className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Nose Definition & Contour</h3>
                <p className="text-gray-300">Enhance nasal definition and create refined contours for a more sculpted appearance</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Nose Tip Lift & Slimming */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 text-white">Nose Tip Lift & Slimming</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Fillers can enhance the nose tip by elevating and making it look slimmer. Furthermore, this sophisticated procedure is commonly integrated when conducting nonsurgical rhinoplasty.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-300">Precise tip elevation for improved projection</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-300">Advanced slimming techniques for refined appearance</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-300">Integrated approach with full rhinoplasty treatment</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-300">Immediate results with minimal downtime</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                      <Syringe className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-4">Specialized Tip Enhancement</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Our advanced #cosmenose technique includes specialized methods for nose tip refinement, creating elegant elevation and slimming effects that complement your facial features naturally.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits & Comparison Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Why Choose Non-Surgical Over Surgical Rhinoplasty?</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Compare the benefits of non-surgical nose jobs versus traditional surgical rhinoplasty to make an informed decision.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-red-900/20 border-red-500 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Surgical Nose Job</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                        <p className="text-gray-300">Higher risks & complications</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                        <p className="text-gray-300">Less predictable results</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                        <p className="text-gray-300">Results take longer to show</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                        <p className="text-gray-300">Long recovery period</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                        <p className="text-gray-300">High cost (£4,000-£8,000)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-green-900/20 border-green-500 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Non-Surgical Nose Job</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <p className="text-gray-300">Little to no risks & complications</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <p className="text-gray-300">Subtle & natural-looking results</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <p className="text-gray-300">Instantly visible results</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <p className="text-gray-300">Minimal recovery time</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <p className="text-gray-300">Affordable pricing (£450)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Treatment Information - Apple Style */}
        <section className="py-32 bg-[#0A0A0A]">
          <div className="page-container">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
                Treatment Details
              </h2>
              <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
                Everything you need to know about our non-surgical nose enhancement procedures
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "What is it?",
                  content: "A non-surgical nose reshaping procedure using dermal fillers to improve nasal contours, straighten bumps, and enhance the nose profile without surgery."
                },
                {
                  title: "Treatment Time",
                  content: "15-30 minutes with immediate results. The procedure is quick, comfortable, and requires no downtime."
                },
                {
                  title: "Results Duration",
                  content: "Results typically last 12-18 months. Touch-up treatments can maintain and enhance your desired look."
                },
                {
                  title: "Recovery",
                  content: "Minimal downtime. Some temporary swelling may occur for 24-48 hours. You can return to normal activities immediately."
                },
                {
                  title: "Best Candidates",
                  content: "Ideal for those wanting to smooth bumps, lift the tip, or improve symmetry without surgical intervention."
                },
                {
                  title: "Safety",
                  content: "When performed by Dr. Ahmed Haq's expert hands, it's a safe procedure with high satisfaction rates and natural-looking results."
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 h-full hover:bg-white/10 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl font-light text-white">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/70 font-light leading-relaxed">{item.content}</p>
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

        {/* FAQ Section - Two Columns Apple Style */}
        <section className="py-32 bg-gradient-to-b from-[#0A0A0A] to-black">
          <div className="page-container">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
                Everything you need to know about non-surgical nose enhancement
              </p>
            </motion.div>
            
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-4">
                {leftColumnFaqs.map((faq, index) => (
                  <FAQItem key={`left-${index}`} question={faq.question} answer={faq.answer} index={index} />
                ))}
              </div>
              
              {/* Right Column */}
              <div className="space-y-4">
                {rightColumnFaqs.map((faq, index) => (
                  <FAQItem key={`right-${index}`} question={faq.question} answer={faq.answer} index={index + 5} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Location & Contact - Apple Style */}
        <section className="py-32 bg-[#111]">
          <div className="page-container">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
                Visit Us in Harley Street
              </h2>
              <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
                Located in the heart of London's prestigious medical district
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h3 className="text-3xl md:text-4xl font-light text-white">London's Premier Medical District</h3>
                <p className="text-lg text-white/80 font-light leading-relaxed">
                  Located in the heart of London's prestigious Harley Street medical district, our clinic offers the highest standards of aesthetic medicine in an elegant, professional environment.
                </p>
                
                <div className="space-y-6">
                  {[
                    { icon: MapPin, text: "10 Harley Street, London W1G 9PF" },
                    { icon: Phone, text: "0333 0551 503" },
                    { icon: Mail, text: "info@cosmedocs.com" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <item.icon className="h-6 w-6 mr-4 text-white/70" />
                      <span className="text-lg font-light text-white/90">{item.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                  <CardContent className="p-10 text-center">
                    <h3 className="text-3xl font-light text-white mb-6">Ready to Transform Your Profile?</h3>
                    <p className="text-white/80 mb-8 text-lg font-light leading-relaxed">
                      Book a consultation with Dr. Ahmed Haq and discover how the #cosmenose technique can enhance your natural beauty.
                    </p>
                    <a 
                      href={bookingUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 rounded-full px-10 py-4 inline-flex items-center justify-center text-lg font-light transition-all duration-300 w-full border border-white/20"
                    >
                      Book Your £450 Consultation
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>


        {/* Hidden SEO content */}
        <div className="sr-only">
          <h2>Non-Surgical Nose Job Treatment by Cosmedocs London Harley Street</h2>
          <p>
            Non-surgical nose job London Harley Street by Dr. Ahmed Haq at Cosmedocs. Expert non-surgical rhinoplasty treatments from £450 performed at our prestigious 10 Harley Street clinic in London W1G 9PF. Dr. Ahmed Haq has been performing non-surgical nose jobs since 2010, making him one of London's most experienced practitioners in aesthetic medicine. Our Harley Street clinic specializes in non-surgical nose reshaping using advanced dermal filler techniques including both cannula and needle methods for optimal results. The #cosmenose method developed by Dr. Haq at Cosmedocs London delivers natural-looking results with minimal downtime for patients seeking nose enhancement without surgery.
          </p>
          <p>
            Perfect for correcting nose bumps, improving nasal symmetry, lifting the tip, and enhancing overall nasal profile. Cosmedocs London Harley Street offers comprehensive non-surgical rhinoplasty treatments for deviated noses, crooked noses, and aesthetic nose enhancement. Conference presenter and international trainer Dr. Ahmed Haq ensures safe, predictable outcomes using advanced injection techniques at our London clinic. Treatment takes 15-30 minutes with results lasting 12-18 months. Immediate results with no surgery required at Cosmedocs Harley Street London.
          </p>
          <p>
            Book consultation today at London's premier Harley Street aesthetic clinic Cosmedocs. Call 0333 0551 503 or visit cosmedocs.com for non-surgical nose job London. Located at 10 Harley Street, London W1G 9PF, Cosmedocs offers premium aesthetic treatments including non-surgical rhinoplasty, liquid rhinoplasty, nose filler, nose enhancement, and comprehensive facial aesthetic medicine. Dr. Ahmed Haq's expertise in facial anatomy and Harley Street location make Cosmedocs the leading choice for non-surgical nose enhancement in London. Treatment carried out by Cosmedocs in London, Harley Street using premium dermal fillers and advanced techniques for optimal patient satisfaction and natural aesthetic results.
          </p>
          <p>
            Complex nose fracture reconstruction non-surgical London Harley Street Cosmedocs Dr Ahmed Haq fibrosis cartilage bone treatment cannula dissection technique gradual filling multiple sessions remarkable results. Advanced reconstruction of complicated nose fractures using pioneering non-surgical techniques by Dr Ahmed Haq at Cosmedocs London Harley Street clinic. Specialized treatment for nose fracture complications including fibrosis adhesion to cartilage and bone structures requiring expert cannula dissection and gradual dermal filler reconstruction over multiple treatment sessions.
          </p>
        </div>
      </div>
    </>
  );
};

// Fracture Debrief Card Component
const FractureDebriefCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="bg-white/5 backdrop-blur-sm border-white/10">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="w-full">
          <CardContent className="p-8">
            <div className="flex items-center justify-between">
              <h4 className="text-left font-light text-white text-xl">Dr. Haq's Case Debrief</h4>
              {isOpen ? (
                <ChevronUp className="h-6 w-6 text-white/70 flex-shrink-0 ml-4" />
              ) : (
                <ChevronDown className="h-6 w-6 text-white/70 flex-shrink-0 ml-4" />
              )}
            </div>
          </CardContent>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="px-8 pb-8">
            <div className="space-y-4 text-white/80 font-light leading-relaxed">
              <p>
                <strong className="text-white">Dr. Ahmed Haq's Assessment:</strong> "This case presented significant challenges due to the complex nature of the fracture and subsequent healing complications."
              </p>
              <p>
                <strong className="text-white">The Challenge:</strong> The scar tissue had formed strong adhesions, effectively 'sticking' to both the cartilage and underlying bone structures, creating a rigid, immobile area that was particularly difficult to treat.
              </p>
              <p>
                <strong className="text-white">The Technique:</strong> Using an advanced cannula approach, I performed careful dissection to gradually lift the skin away from the hard structures beneath. This required exceptional precision to avoid complications while creating the necessary space for reconstruction.
              </p>
              <p>
                <strong className="text-white">The Process:</strong> Treatment was carried out over multiple sessions, with gradual filling allowing the tissues to adapt progressively. This staged approach ensures optimal safety and natural-looking results.
              </p>
              <p>
                <strong className="text-white">The Outcome:</strong> The patient achieved remarkable improvement in both function and aesthetics, demonstrating the potential of advanced non-surgical reconstruction techniques.
              </p>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};

// FAQ Item Component
const FAQItem = ({ question, answer, index }: { question: string; answer: string; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true }}
    >
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="w-full">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-left font-light text-white text-lg">{question}</h3>
                {isOpen ? (
                  <ChevronUp className="h-5 w-5 text-white/70 flex-shrink-0 ml-4" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-white/70 flex-shrink-0 ml-4" />
                )}
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
    </motion.div>
  );
};

export default NonSurgicalNoseJob;
