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
    "Non-Surgical Nose Job London | Nose Botox & Fillers | £450 | Harley Street",
    "Leading non-surgical nose job & nose botox treatments in London. Expert nose reshaping without surgery from £450. Harley Street clinic.",
    "/non-surgical-nose-job"
  );

  const bookingUrl = "https://med.as.me/harleystreet";

  const beforeAfterImages = [
    {
      src: "/lovable-uploads/8f741338-3fd5-4feb-9d34-270856fb99c5.png",
      alt: "Non-surgical nose job before after 3 year progression London Harley Street nose botox dermal filler transformation results",
      caption: "Progressive transformation over 3 years showing natural enhancement with #cosmenose technique"
    },
    {
      src: "/lovable-uploads/16fa7311-00af-4ea7-b353-73f981f6d87c.png",
      alt: "Liquid nose job before after profile view nose filler cost London Harley Street non-surgical rhinoplasty results",
      caption: "Subtle profile enhancement achieving perfect nasal proportions"
    },
    {
      src: "/lovable-uploads/717753b3-1c9d-43bd-bdc1-ca245fc3c284.png",
      alt: "Non-invasive nose job immediate results nose tip filler London Dr Ahmed Haq Cosmedocs nose reshaping without surgery",
      caption: "Immediate transformation showing refined nasal bridge and tip"
    },
    {
      src: "/lovable-uploads/d5cec131-9f61-4b49-9dba-8658eda2eddf.png",
      alt: "Nose injection filler treatment progression 5 and 10 minutes nonsurgical rhinoplasty London Harley Street results",
      caption: "Treatment progression showing results developing over 10 minutes"
    },
    {
      src: "/lovable-uploads/a9ac5188-66f2-420b-9b39-3449dc02ff7b.png",
      alt: "Non-surgical nose job side profile comparison nose lift botox London Cosmedocs Harley Street before after",
      caption: "Profile view showing enhanced nasal projection and definition"
    },
    {
      src: "/lovable-uploads/97c76ea5-245e-43c2-8b89-533f365f4969.png",
      alt: "Advanced nose reshaping technique raised bridge bump correction liquid nose job London Harley Street Cosmedocs",
      caption: "Advanced technique demonstrating raised bridge and concealed bump correction"
    },
    {
      src: "/lovable-uploads/7b2a209c-3203-44b6-8cff-83e3a40896b9.png",
      alt: "Non-surgical nose reshaping before after profile view nose botox London Harley Street nose slimming injection results",
      caption: "Profile transformation showing refined nasal bridge and enhanced projection with #cosmenose technique"
    },
    {
      src: "/lovable-uploads/62475a93-6144-4596-bca9-7e70d52cb7c1.png",
      alt: "Non-surgical nose job bottom view before after nose tip botox London Cosmedocs Harley Street nasal tip filler",
      caption: "Underneath view demonstrating improved nasal tip projection and symmetry"
    },
    {
      src: "/lovable-uploads/cc387da3-1543-4b06-8b11-a48d29f03456.png",
      alt: "Non-surgical nose job side profile before after pixie tip nose filler London Harley Street Cosmedocs results",
      caption: "Side profile enhancement demonstrating subtle yet significant improvement in nasal contours"
    },
    {
      src: "/lovable-uploads/1cceb92b-eacb-48b4-9c9f-04c4cb2b025e.png",
      alt: "Nose reshaping without surgery profile transformation dermal filler nose London Cosmedocs Dr Ahmed Haq",
      caption: "Natural-looking profile enhancement achieved with advanced dermal filler techniques"
    },
    {
      src: "/lovable-uploads/bf8a69d8-6776-4187-857d-a009e9fd6147.png",
      alt: "Non-surgical rhinoplasty Cosmedocs London Harley Street before after nose job london cost results Dr Ahmed Haq",
      caption: "Remarkable transformation achieving perfect nasal proportions and facial harmony"
    }
  ];

  const leftColumnFaqs = [
    {
      question: "What is the non-surgical nose job cost and nose filler cost in London?",
      answer: "At Cosmedocs Harley Street, non-surgical nose job cost starts from £450, while nose botox treatments are £200. Our nose filler cost varies based on the amount needed. The cost for non-surgical nose job includes consultation, premium dermal fillers, and follow-up care."
    },
    {
      question: "What are the nose lift side effects and non-surgical nose job before after results?",
      answer: "Nose lift side effects are minimal with our advanced techniques. You may experience slight swelling or tenderness. Our extensive non-surgical nose job before after gallery shows natural-looking results that typically last 12-18 months."
    },
    {
      question: "How safe is nose botox and botox in the nose treatments?",
      answer: "Nose botox and botox in the nose treatments are very safe when performed by Dr. Ahmed Haq at our Harley Street clinic. These nose slimming injections have been refined since 2010, using advanced botox nose techniques to minimize any risks."
    },
    {
      question: "What's the difference between nose tip filler and nose tip botox?",
      answer: "Nose tip filler adds volume and projection for pixie tip lifts, while nose tip botox reduces muscle activity for subtle lifting. Our nasal tip botox and dermal filler nose tip treatments can be combined for optimal nose reshaping Harley Street results."
    },
    {
      question: "Can you achieve nose reduction without surgery using non-invasive methods?",
      answer: "Yes, our non-invasive nose job techniques can create the illusion of nose reduction without surgery. Using strategic nose injection placements and our advanced nonsurgical rhinoplasty methods, we can refine and balance your nasal proportions."
    }
  ];

  const rightColumnFaqs = [
    {
      question: "How do liquid nose job and non-surgical nose surgery compare?",
      answer: "Our liquid nose job offers immediate results with minimal downtime compared to traditional nose surgery. This non-surgical nose surgery alternative uses nose injection filler techniques to reshape your nose without the risks of invasive procedures."
    },
    {
      question: "What makes nose jobs Harley Street treatments at Cosmedocs unique?",
      answer: "Our nose jobs Harley Street treatments combine botox nose reshaping with advanced dermal fillers nose techniques. We specialize in nose slimming botox, pixie tip nose enhancements, and comprehensive non-surgical rhinoplasty in London."
    },
    {
      question: "How quickly will I see my nose lift and botox nose before after results?",
      answer: "Results from nose lift and botox nose treatments are visible immediately, with final botox nose before after results apparent within 2 weeks. Our nose lift botox effects develop progressively as swelling subsides."
    },
    {
      question: "What's included in your non-surgical rhinoplasty cost consultation?",
      answer: "Our non-surgical rhinoplasty cost includes comprehensive assessment, treatment planning with our nose job injectable fillers, and discussion of botox for nose tip options. Dr. Ahmed Haq will show you nose job london before after examples during consultation."
    },
    {
      question: "Are your nose job dermal fillers and nose injection treatments reversible?",
      answer: "Yes, our nose job dermal fillers and filler tip of nose treatments can be dissolved with hyaluronidase if needed. This reversibility makes our nose injection treatments safer than permanent nose job london procedures."
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
                  <span className="block text-purple-300">Nose Job London</span>
                  <span className="block text-sm mt-4">nose reshaping with dermal filler | Harley Street</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl">
                  <span className="text-purple-300 font-semibold">Invisible art - Premium nose fillers</span>
                </p>
                <div className="mb-8">
                  <p className="text-sm text-gray-300">#cosmenose - Advanced liquid nose job techniques | Non-invasive nose surgery alternative</p>
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
                  <a 
                    href="#pricing-section"
                    className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm border inline-flex items-center justify-center transition-all duration-300"
                  >
                    View Price List
                  </a>
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
              <h2 className="text-3xl font-bold mb-8 text-white">Non-Surgical Nose Reshaping London</h2>
              <p className="text-center text-gray-300 mb-8 max-w-3xl mx-auto">
                Experience the latest in non-invasive nose job techniques at our Harley Street clinic. From nose botox for slimming to dermal filler nose tip enhancement, we offer comprehensive nose reshaping without surgery.
              </p>
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
              <h2 className="text-3xl font-bold mb-4">Non-Surgical Nose Job Before and After Results</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Explore authentic non-surgical nose job before and after results from our London Harley Street clinic. 
                See the transformation achieved through nose botox, nose tip fillers, and our signature liquid nose job technique. 
                Our nose reshaping without surgery delivers natural enhancement using advanced nose injection methods.
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
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">Nose Botox & Non-Surgical Rhinoplasty in London</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Experience the art of non-invasive nose surgery at our Harley Street clinic. Our liquid nose job treatments combine nose botox for slimming with sophisticated dermal filler nose techniques to achieve your perfect profile without surgery.<br/><br/>
                Dr. Ahmed Haq pioneered the innovative #cosmenose technique, specializing in nose tip botox, nasal tip filler, and comprehensive nose reshaping Harley Street treatments. 
                From pixie tip nose lifts to nose reduction without surgery, our non-surgical rhinoplasty cost offers exceptional value for transformative results.
              </p>
            </motion.div>

            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-8 text-white">What Can Be Treated with Non-Surgical Nose Reshaping?</h3>
              <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-300 text-left">Nose botox for slimming wide noses and nasal flare reduction</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-300 text-left">Nose tip filler for pixie tip lifts and enhanced projection</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-300 text-left">Dermal filler nose bridge enhancement and bump smoothing</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-300 text-left">Nose lift botox for subtle tip elevation and refinement</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-300 text-left">Non-surgical nose job before after transformations tailored to your features</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-300 text-left">Nonsurgical rhinoplasty for comprehensive nose reshaping without surgery</p>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* Nose Fracture Case */}
        <section className="py-20 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/10 via-transparent to-blue-900/10"></div>
          <div className="page-container relative z-10">
            
            
            <div className="max-w-6xl mx-auto">
              <motion.div 
                className="grid lg:grid-cols-2 gap-16 items-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                <div className="order-2 lg:order-1 relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <img 
                    src="/lovable-uploads/0cac590b-9991-4176-b5d7-541992920464.png" 
                    alt="Complex nose fracture non-surgical reconstruction before after nose botox nose filler London Harley Street Cosmedocs Dr Ahmed Haq advanced nose reshaping without surgery fibrosis cartilage bone treatment cannula technique"
                    className="w-full h-auto rounded-3xl shadow-2xl object-cover max-w-full relative z-10 group-hover:scale-105 transition-transform duration-500"
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
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl blur-lg"></div>
                    <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                      <h3 className="text-3xl font-bold text-white mb-6">
                        Nose Fracture Case
                      </h3>
                      <p className="text-lg text-white/80 font-light leading-relaxed mb-8">
                        Advanced non-surgical reconstruction of complex nose fracture cases using pioneering techniques and expert precision. 
                        Our specialized approach combines nose botox treatments with strategic dermal filler nose placement to address structural damage 
                        from previous trauma. This non-invasive nose surgery alternative offers remarkable results for patients seeking nose reshaping 
                        without surgery after fracture complications.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-6 mb-8">
                        <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                          <p className="text-purple-300 font-semibold text-sm uppercase tracking-wide mb-2">Technique Used</p>
                          <p className="text-white font-light">Advanced Cannula</p>
                        </div>
                        <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                          <p className="text-purple-300 font-semibold text-sm uppercase tracking-wide mb-2">Duration</p>
                          <p className="text-white font-light">45 Minutes</p>
                        </div>
                      </div>
                      
                      <FractureDebriefCard />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Complex Deviated Nose Corrections */}
        <section className="py-32 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/10 via-transparent to-blue-900/10"></div>
          <div className="page-container relative z-10">
            
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4 text-white">
                Complex Deviated Nose Corrections
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Specialized expertise in correcting even the most challenging deviated nose cases using advanced non-surgical techniques
              </p>
            </motion.div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 mb-12">
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-black/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                    <div className="text-center mb-6">
                      <span className="inline-block px-4 py-2 bg-red-500/20 text-red-300 rounded-full text-sm font-medium mb-4">BEFORE</span>
                    </div>
                    <img 
                      src="/lovable-uploads/461ed1b4-14e5-4864-863b-2e30db23adfc.png" 
                      alt="Before non-surgical deviated nose correction London Harley Street Cosmedocs Dr Ahmed Haq complex case treatment"
                      className="w-full h-auto rounded-2xl mb-6 shadow-2xl group-hover:scale-105 transition-transform duration-500"
                    />
                    <p className="text-white/70 text-lg font-light leading-relaxed">Complex deviated nose requiring specialized correction technique with significant asymmetry challenges</p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-black/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                    <div className="text-center mb-6">
                      <span className="inline-block px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm font-medium mb-4">AFTER</span>
                    </div>
                    <img 
                      src="/lovable-uploads/8f4b0286-bd8c-4aaa-8ac1-51ddc5e4c73b.png" 
                      alt="After non-surgical deviated nose correction London Harley Street Cosmedocs Dr Ahmed Haq complex case results"
                      className="w-full h-auto rounded-2xl mb-6 shadow-2xl group-hover:scale-105 transition-transform duration-500"
                    />
                    <p className="text-white/70 text-lg font-light leading-relaxed">Remarkable improvement in nasal symmetry and profile using advanced #cosmenose technique</p>
                  </div>
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
              </motion.div>
            </div>
          </div>
        </section>

        {/* Patient Experience Video */}
        <section className="py-32 bg-accent">
          <div className="page-container">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4 text-white">
                Non-Surgical Nose Job Patient Review London
              </h2>
              <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
                Real patient testimonial sharing her complete non-surgical nose reshaping journey at our Harley Street clinic. See firsthand experience with nose botox and dermal filler treatments by Dr. Ahmed Haq.
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
                Watch this detailed non-surgical nose job before and after review from our London patient. She discusses her consultation experience, treatment process, nose filler results, recovery timeline, and final transformation achieved through our liquid nose job technique.
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
              <h2 className="text-3xl font-bold mb-4 text-white">Non-Surgical Nose Job Price & Nose Filler Cost London</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Transparent non-surgical nose job price and nose injection filler cost at our Harley Street clinic. Our competitive non-surgical rhinoplasty cost includes consultation, 
                premium nose botox or dermal filler treatments, and comprehensive aftercare. Best nose job london cost with no hidden fees.
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
                    <CardTitle className="text-white text-2xl">Liquid Nose Job & Dermal Fillers</CardTitle>
                    <div className="text-white text-4xl font-bold">£450</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-purple-100">Complete nose reshaping without surgery using premium nose filler treatments</p>
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
                    <CardTitle className="text-white text-2xl">Nose Botox & Nasal Botox</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£200</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Nose slimming botox and nose tip lift botox treatments</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Nose slimming injection for wide noses</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Botox nose tip lift for drooping tips</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Nasal tip botox results last 3-4 months</span>
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

        {/* Non-Surgical Rhinoplasty Benefits - Simplified Design */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Non-Surgical Nose Job Benefits & Procedures</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Transform your nose with our expert liquid nose job and nose botox treatments in London. 
                Our non-surgical nose surgery alternatives deliver remarkable results without the need for invasive procedures.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Nose Tip Lift & Pixie Tip Enhancement</h3>
                      <p className="text-gray-300">Specialized nose tip filler and botox to lift nose tip for pixie tip nose results and enhanced projection</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Hooked & Crooked Nose</h3>
                      <p className="text-gray-300">Correct asymmetries and improve the overall shape of hooked or crooked noses</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Nose Bridge Filler & Bump Correction</h3>
                      <p className="text-gray-300">Filler in bridge of nose to smooth bumps and dermal filler nose tip enhancement for refined profiles</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Raise Low Nasal Bridge</h3>
                      <p className="text-gray-300">Enhance low nasal bridges, particularly beneficial for Asian nose enhancement</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Balance Facial Profile</h3>
                      <p className="text-gray-300">Create harmonious facial proportions by improving overall nasal balance</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Nose Definition & Contour</h3>
                      <p className="text-gray-300">Enhance nasal definition and create refined contours for a more sculpted appearance</p>
                    </div>
                  </div>
                </motion.div>
              </div>

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

        {/* Call to Action */}
        <section className="py-20 bg-black">
          <div className="page-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-12"
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Nose Naturally?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with Dr. Ahmed Haq and discover how our advanced #cosmenose technique 
                can enhance your profile with natural, sophisticated results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={bookingUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold inline-flex items-center justify-center transition-all duration-300"
                >
                  Book Free Consultation
                </a>
                <a 
                  href="tel:03330551503"
                  className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold border inline-flex items-center justify-center transition-all duration-300"
                >
                  Call 0333 0551 503
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Related Treatments Section */}
        <section className="py-16 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Related Aesthetic Treatments</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Enhance your results with our complementary aesthetic treatments available at our Harley Street clinic.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10 h-full hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <Syringe className="text-purple-400 mb-4 mx-auto" size={48} />
                    <h3 className="text-2xl font-bold text-white mb-4">Dermal Fillers London</h3>
                    <p className="text-gray-300 mb-6">
                      Comprehensive facial enhancement using premium dermal fillers for lips, cheeks, and jawline contouring.
                    </p>
                    <a 
                      href="/dermal-fillers"
                      className="inline-flex items-center text-purple-300 hover:text-white transition-colors font-semibold"
                    >
                      Learn More About Dermal Fillers →
                    </a>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10 h-full hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <Activity className="text-purple-400 mb-4 mx-auto" size={48} />
                    <h3 className="text-2xl font-bold text-white mb-4">Botox Injections London</h3>
                    <p className="text-gray-300 mb-6">
                      Advanced anti-aging treatments targeting wrinkles, frown lines, and facial muscle refinement.
                    </p>
                    <a 
                      href="/advanced-upper-face-botox"
                      className="inline-flex items-center text-purple-300 hover:text-white transition-colors font-semibold"
                    >
                      Discover Botox Treatments →
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Hidden SEO content */}
        <div className="sr-only">
          <h2>Non-Surgical Nose Job London - Nose Botox & Dermal Fillers Harley Street</h2>
          <p>
            Leading non-surgical nose job London and nose botox specialist Dr. Ahmed Haq at Cosmedocs Harley Street. Expert non-surgical rhinoplasty cost from £450, nose botox treatments £200 at our prestigious 10 Harley Street clinic. Specializing in liquid nose job, non-invasive nose job, and nose reshaping without surgery using advanced nose injection techniques. Our nose slimming injection and nose tip filler treatments deliver exceptional non-surgical nose job before and after results. The #cosmenose method combines nose botox, nasal botox, and dermal filler nose techniques for natural enhancement.
          </p>
          <p>
            Comprehensive nose reshaping Harley Street treatments including nose lift botox, pixie tip nose enhancement, and filler on nose tip procedures. Our non-surgical nose surgery alternatives include botox nose slimming, nose tip lift botox, and nose reduction without surgery techniques. Dr. Ahmed Haq's expertise in nose job dermal fillers and nose injection filler cost provides excellent value for nose jobs Harley Street. From subtle nose job enhancements to dramatic nose lift transformations, our non-invasive nose surgery delivers remarkable botox nose before after results.
          </p>
          <p>
            Expert in handling nose fillers for wide nose correction, dermal filler nose tip enhancement, and filler in bridge of nose treatments. Our nonsurgical rhinoplasty and non-surgical rhinoplasty in London practice offers the best nose job london cost with transparent nose filler cost pricing. Specializing in nose tip botox, nasal tip botox, and botox for nose tip lifting for natural-looking nose enhancement. Whether seeking pixie tip lift, nose lift no surgery, or comprehensive nose reshaping without surgery, our nose jobs london deliver exceptional results.
          </p>
          <p>
            Advanced botox nose reshaping and liquid nose job techniques at our nose job london harley street clinic. From basic nose botox slimming to complex nose reduction without surgery procedures, we offer comprehensive non-surgical nose job london treatments. Our nose injection treatments include botox in nose, botox on nose, and strategic filler tip of nose applications for optimal facial harmony. Trust London's leading nose filler london specialist for your non-surgical rhinoplasty cost consultation.
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
    >
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="w-full p-6 text-left hover:bg-white/5 transition-colors">
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-semibold text-white">Treatment Debrief</h4>
            {isOpen ? (
              <ChevronUp className="text-purple-300" size={20} />
            ) : (
              <ChevronDown className="text-purple-300" size={20} />
            )}
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="px-6 pb-6">
            <p className="text-white/80 leading-relaxed font-light">
              This challenging case involved a patient with previous nose fracture complications including 
              fibrosis adhesion to the cartilage and bone. Using advanced cannula dissection techniques 
              and gradual dermal filler reconstruction over multiple sessions, we achieved remarkable 
              results that restored both function and aesthetic appearance.
            </p>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </motion.div>
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
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
    >
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="w-full p-6 text-left hover:bg-white/5 transition-colors">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white pr-4">{question}</h3>
            {isOpen ? (
              <ChevronUp className="text-purple-300 flex-shrink-0" size={20} />
            ) : (
              <ChevronDown className="text-purple-300 flex-shrink-0" size={20} />
            )}
          </div>
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
