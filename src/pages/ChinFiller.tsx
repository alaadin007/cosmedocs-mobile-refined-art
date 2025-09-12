import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram, Users, Award, Calendar, MapPin, Phone, Mail, ChevronDown, ChevronUp, Play, Syringe, Clock, Heart, Shield, CalendarDays, Activity, GraduationCap, CheckCircle, Palette } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import BeforeAfterGrid from "@/components/BeforeAfterGrid";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const ChinFiller = () => {
  const seoData = generateSEOMetadata("Chin Filler London | From £350 | Dr. Ahmed Haq | Harley Street", "Professional chin filler treatments in London's Harley Street. Transform from a weak chin to a well-defined profile. Expert chin augmentation from £350.", "/chin-filler");
  const bookingUrl = "https://med.as.me/harleystreet";
  
  const beforeAfterImages = [
    {
      src: "/lovable-uploads/d8e871e3-564d-44e3-a331-3fdd8b7574f4.png",
      alt: "Chin filler before and after profile balancing natural results Cosmedocs",
      caption: "Profile balancing with chin filler achieving natural, harmonious results that enhance facial proportions."
    },
    {
      src: "/lovable-uploads/b5887047-e750-44bd-9d26-3e04579e09b3.png",
      alt: "Chin augmentation before after London jawline definition facial enhancement",
      caption: "Chin augmentation creating improved jawline definition and enhanced facial contours."
    },
    {
      src: "/lovable-uploads/b6640de3-1759-4566-bbd1-0570a29cbce2.png",
      alt: "Chin filler profile enhancement side view transformation Harley Street",
      caption: "Side profile transformation showing enhanced chin projection and improved facial balance."
    },
    {
      src: "/lovable-uploads/e664cc15-e198-4807-8fea-24b0b4507a84.png",
      alt: "Liquid mentoplasty before after chin enhancement non surgical results",
      caption: "Liquid mentoplasty demonstrating non-surgical chin enhancement with natural-looking results."
    }
  ];

  const leftColumnFaqs = [{
    question: "How much does chin filler cost in London?",
    answer: "At Cosmedocs Harley Street, chin filler treatments start from £350 for the first syringe (1.2ml). The cost varies depending on the amount of filler needed to achieve your desired results."
  }, {
    question: "How long do chin filler results last?",
    answer: "Chin filler results typically last 12-18 months, sometimes longer. The longevity depends on the type and amount of filler used, your metabolism, and individual factors."
  }, {
    question: "Is chin filler safe?",
    answer: "Yes, when performed by qualified practitioners like Dr. Ahmed Haq at our Harley Street clinic, chin fillers are very safe. We use premium hyaluronic acid fillers and follow strict safety protocols."
  }, {
    question: "What's the difference between chin filler and chin surgery?",
    answer: "Chin filler is non-surgical, temporary, and involves minimal downtime. Surgical chin augmentation is permanent but carries surgical risks, longer recovery time, and higher costs."
  }, {
    question: "Can chin filler help with a double chin?",
    answer: "Yes, chin fillers can help minimize the appearance of a double chin by enhancing the chin projection and creating better definition between the chin and neck area."
  }];
  const rightColumnFaqs = [{
    question: "How painful is chin filler treatment?",
    answer: "Most patients find chin filler treatment comfortable. We use topical numbing cream and the fillers contain lidocaine for additional comfort during the procedure."
  }, {
    question: "What happens during a chin filler consultation?",
    answer: "During your consultation, Dr. Ahmed Haq will assess your facial proportions, discuss your goals, and create a personalized treatment plan to achieve optimal facial harmony."
  }, {
    question: "Can I combine chin filler with other treatments?",
    answer: "Absolutely! Chin filler works beautifully with jawline filler, cheek filler, and other facial treatments. The 3D jawline makeover is one of our most popular combination treatments."
  }, {
    question: "How quickly will I see chin filler results?",
    answer: "Results are visible immediately after treatment, with final results apparent within 2 weeks once any minor swelling subsides."
  }, {
    question: "Can chin filler results be reversed?",
    answer: "Yes, hyaluronic acid chin fillers can be dissolved with hyaluronidase if needed, providing flexibility that surgical options cannot offer."
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
          "name": "Cosmedocs - Chin Filler Treatment",
          "description": "Professional chin filler treatments for facial enhancement and profile correction",
          "url": "https://cosmedocs.com/chin-filler",
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
          "priceRange": "£350+"
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
                  Expert Chin
                  <span className="block text-purple-300">Enhancement</span>
                  <span className="block text-sm mt-4">Transform your profile with precision dermal fillers</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl">
                  <span className="text-purple-300 font-semibold">Invisible Art</span>
                  <br />
                  Transformation that speaks without saying a word
                </p>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Starting from £350</p>
                  <p className="text-sm text-gray-300">#cosmechin - Check out our IG for hundreds more natural, subtle transformations</p>
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
              <h2 className="text-3xl font-bold mb-8 text-white">Chin Filler Treatment</h2>
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
                <p className="text-gray-300">30 minutes including consultation</p>
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
                <p className="text-gray-300">12-18 months with premium hyaluronic acid</p>
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
                <h3 className="text-lg font-semibold text-white mb-2">Anaesthesia</h3>
                <p className="text-gray-300">Topical anaesthetic + lidocaine in filler</p>
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
              <h2 className="text-3xl font-bold mb-4">Chin Filler Before and After Results</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Explore authentic chin filler before and after results from our London Harley Street clinic. 
                Our expert dermal filler treatments enhance chin projection and facial balance with natural-looking results.
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
                title="Chin Filler Results Gallery"
                description="Comprehensive gallery of our chin enhancement treatments"
              />
            </div>
          </div>
        </section>


        {/* What is Liquid Mentoplasty Section */}
        <section className="py-20 bg-accent text-white">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">What is Liquid Mentoplasty?</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Advanced non-surgical chin enhancement using precision-placed dermal fillers to create perfect facial harmony
              </p>
            </motion.div>
            
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">Precision Enhancement</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Liquid mentoplasty represents the art of invisible enhancement. Using premium hyaluronic acid fillers, 
                    we reshape and project weak or retracted chins to create perfect facial harmony. This non-surgical 
                    approach volumizes the chin area while maintaining completely natural results.
                  </p>
                </div>
                
                <div className="bg-black rounded-lg p-6 border border-gray-800">
                  <h4 className="text-lg font-semibold text-white mb-4">Why Choose Liquid Mentoplasty?</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-purple-500" size={16} />
                      <p className="text-gray-300">No surgical risks or extensive recovery</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-purple-500" size={16} />
                      <p className="text-gray-300">Reversible results with hyaluronidase</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-purple-500" size={16} />
                      <p className="text-gray-300">Enhanced facial balance and profile</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="bg-black rounded-lg p-8 border border-gray-800">
                  <h4 className="text-xl font-semibold text-white mb-6">Complete Facial Harmony</h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">1</span>
                      </div>
                      <div>
                        <h5 className="text-white font-medium">Profile Balance</h5>
                        <p className="text-gray-300 text-sm">Perfect nose-to-chin ratio</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">2</span>
                      </div>
                      <div>
                        <h5 className="text-white font-medium">Jawline Definition</h5>
                        <p className="text-gray-300 text-sm">Enhanced lower face contours</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">3</span>
                      </div>
                      <div>
                        <h5 className="text-white font-medium">Lip Support</h5>
                        <p className="text-gray-300 text-sm">Enhanced lip prominence</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Aftercare FAQ Section */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Chin Filler Aftercare</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Proper aftercare ensures optimal results and minimal downtime after your chin filler treatment
              </p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-accent rounded-lg border border-gray-800">
                    <div className="p-6">
                      <h3 className="text-white font-semibold mb-3">How long is the recovery time after chin filler?</h3>
                      <p className="text-gray-300">Recovery is minimal with professional aftercare guidance. Most patients experience 24-48 hours of minor swelling, with results continuing to improve over 2 weeks as any swelling subsides completely.</p>
                    </div>
                  </div>

                  <div className="bg-accent rounded-lg border border-gray-800">
                    <div className="p-6">
                      <h3 className="text-white font-semibold mb-3">What should I do immediately after treatment?</h3>
                      <p className="text-gray-300">Apply ice packs for 10-15 minutes every hour for the first 6 hours. Avoid touching or massaging the treated area, and sleep with your head elevated for the first night to minimize swelling.</p>
                    </div>
                  </div>

                  <div className="bg-accent rounded-lg border border-gray-800">
                    <div className="p-6">
                      <h3 className="text-white font-semibold mb-3">When can I return to normal activities?</h3>
                      <p className="text-gray-300">You can return to work immediately after treatment. However, avoid strenuous exercise, saunas, and alcohol for 24-48 hours to prevent increased swelling and ensure optimal healing.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-accent rounded-lg border border-gray-800">
                    <div className="p-6">
                      <h3 className="text-white font-semibold mb-3">What aftercare support do you provide?</h3>
                      <p className="text-gray-300">We provide comprehensive aftercare including detailed post-treatment instructions, 24/7 emergency contact, and follow-up appointments at 2 weeks to assess your results and address any concerns.</p>
                    </div>
                  </div>

                  <div className="bg-accent rounded-lg border border-gray-800">
                    <div className="p-6">
                      <h3 className="text-white font-semibold mb-3">How can I minimize swelling and bruising?</h3>
                      <p className="text-gray-300">Avoid blood-thinning medications and supplements before treatment. Post-treatment, use arnica cream, apply cold compresses, and avoid lying flat for extended periods. Most swelling resolves within 48-72 hours.</p>
                    </div>
                  </div>

                  <div className="bg-accent rounded-lg border border-gray-800">
                    <div className="p-6">
                      <h3 className="text-white font-semibold mb-3">When will I see final results?</h3>
                      <p className="text-gray-300">Initial results are visible immediately after treatment. Final results appear within 2 weeks once any minor swelling has completely subsided and the filler has fully integrated with your tissues.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Face Types Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Personalized for Every Face</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Tailored approaches for different facial structures and aesthetic goals
              </p>
            </motion.div>
            
            <div className="max-w-6xl mx-auto space-y-16">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">Round Face Enhancement</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Strategic chin filler placement creates definition and elongates the face, achieving 
                    a naturally slimmed appearance. Our specialized facial profiling expertise transforms 
                    round contours into elegant diamond or heart-shaped profiles.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-purple-500" size={16} />
                      <p className="text-gray-300">Enhanced facial definition</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-purple-500" size={16} />
                      <p className="text-gray-300">Improved facial proportions</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-purple-500" size={16} />
                      <p className="text-gray-300">Natural slimming effect</p>
                    </div>
                  </div>
                </div>
                <div className="bg-black rounded-lg p-6 border border-gray-800">
                  <h4 className="text-lg font-semibold text-white mb-4">Round Face Benefits</h4>
                  <p className="text-gray-300">
                    Precise placement redefines cheekbones and jawlines, creating natural diamond 
                    or heart-shaped contours that enhance your inherent beauty.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div className="bg-black rounded-lg p-6 border border-gray-800 lg:order-1">
                  <h4 className="text-lg font-semibold text-white mb-4">Square Face Softening</h4>
                  <p className="text-gray-300">
                    Combined with masseter Botox, chin fillers create softer facial angles, 
                    promoting a more feminine V-shaped lower face appearance.
                  </p>
                </div>
                <div className="space-y-6 lg:order-2">
                  <h3 className="text-2xl font-bold text-white">Square Face Refinement</h3>
                  <p className="text-gray-300 leading-relaxed">
                    For square facial structures, particularly common in Asian features, strategic 
                    chin enhancement combined with jawline treatments significantly softens angular 
                    features, creating harmonious V-shaped contours.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-purple-500" size={16} />
                      <p className="text-gray-300">Softened facial angles</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-purple-500" size={16} />
                      <p className="text-gray-300">V-shaped face creation</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-purple-500" size={16} />
                      <p className="text-gray-300">Enhanced femininity</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">Double Chin Reduction</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Advanced chin enhancement creates better definition between chin and neck areas. 
                    By elongating the facial profile and enhancing the under-chin area, we achieve 
                    a sleeker neck silhouette through optical refinement.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-purple-500" size={16} />
                      <p className="text-gray-300">Improved chin-neck definition</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-purple-500" size={16} />
                      <p className="text-gray-300">Elongated facial profile</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-purple-500" size={16} />
                      <p className="text-gray-300">Sleeker neck appearance</p>
                    </div>
                  </div>
                </div>
                <div className="bg-black rounded-lg p-6 border border-gray-800">
                  <h4 className="text-lg font-semibold text-white mb-4">Profile Enhancement</h4>
                  <p className="text-gray-300">
                    Strategic filler placement creates optical adjustments that make double chin 
                    concerns less prominent while defining the jawline beautifully.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>


        {/* Why Choose Chin Filler */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Why Choose Chin Filler?</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Discover the benefits of non-surgical chin enhancement and the areas we can transform
              </p>
            </motion.div>
            
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">Key Benefits</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Our aesthetics is invisible art. Chin fillers create subtle yet transformative changes that enhance your natural beauty while maintaining facial harmony.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="text-purple-500 mt-1" size={16} />
                    <div>
                      <h4 className="text-white font-medium">Immediate Results</h4>
                      <p className="text-gray-300 text-sm">Visible enhancement with minimal downtime</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="text-purple-500 mt-1" size={16} />
                    <div>
                      <h4 className="text-white font-medium">Non-Surgical Alternative</h4>
                      <p className="text-gray-300 text-sm">Avoid risks and extensive recovery of chin implants</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="text-purple-500 mt-1" size={16} />
                    <div>
                      <h4 className="text-white font-medium">Reversible Treatment</h4>
                      <p className="text-gray-300 text-sm">Can be dissolved with hyaluronidase if needed</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="text-purple-500 mt-1" size={16} />
                    <div>
                      <h4 className="text-white font-medium">Long-Lasting Results</h4>
                      <p className="text-gray-300 text-sm">Enhanced facial balance for 12-18 months</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="text-purple-500 mt-1" size={16} />
                    <div>
                      <h4 className="text-white font-medium">Enhanced Confidence</h4>
                      <p className="text-gray-300 text-sm">Improved profile and facial harmony</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">Treatment Areas</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Bold • Natural • Always Your Way. Dr. Ahmed Haq's expertise ensures precise placement for optimal results that enhance your unique features.
                  </p>
                </div>
                
                <div className="bg-accent rounded-lg p-6 border border-gray-800">
                  <h4 className="text-lg font-semibold text-white mb-6">Areas We Enhance</h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <div>
                        <h5 className="text-white font-medium">Chin Projection</h5>
                        <p className="text-gray-300 text-sm">Forward projection for better profile balance</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <div>
                        <h5 className="text-white font-medium">Chin Definition</h5>
                        <p className="text-gray-300 text-sm">Enhanced contours and definition</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <div>
                        <h5 className="text-white font-medium">Jawline Enhancement</h5>
                        <p className="text-gray-300 text-sm">Improved lower face structure</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <div>
                        <h5 className="text-white font-medium">Profile Balance</h5>
                        <p className="text-gray-300 text-sm">Harmonious nose-to-chin proportions</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <div>
                        <h5 className="text-white font-medium">Lower Face Contouring</h5>
                        <p className="text-gray-300 text-sm">Overall facial harmony and balance</p>
                      </div>
                    </div>
                  </div>
                </div>
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
              <h2 className="text-3xl font-bold mb-4 text-white">Chin Filler Pricing London</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Transparent pricing for premium chin enhancement treatments. All prices include consultation, 
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
                <Card className="bg-black border-purple-500 h-full text-center">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Single Treatment</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£350</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">1.2ml Premium Hyaluronic Acid</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Expert consultation included</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Premium FDA-approved filler</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">12+ months duration</span>
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
                    <CardTitle className="text-white text-2xl">Enhanced Treatment</CardTitle>
                    <div className="text-white text-4xl font-bold">£650</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-purple-100">2.4ml Double Volume Enhancement</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Comprehensive consultation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Double volume treatment</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Comprehensive enhancement</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Extended results</span>
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
        {/* Video Treatment Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Treatment in Action</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Watch our expert technique for chin augmentation using advanced dermal filler methods
              </p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative rounded-lg overflow-hidden bg-black border border-gray-800"
              >
                <div className="aspect-video">
                  <iframe 
                    className="w-full h-full" 
                    src="https://www.youtube.com/embed/Y3gCG1n2ioo" 
                    title="Professional chin filler demonstration - Advanced liquid mentoplasty technique" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen 
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center mt-8"
              >
                <p className="text-gray-300 text-lg">
                  Professional chin filler demonstration
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Advanced liquid mentoplasty technique
                </p>
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
                Get answers to common questions about chin filler treatments at our London clinic.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {leftColumnFaqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                  ))}
                </div>
                <div className="space-y-4">
                  {rightColumnFaqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                  ))}
                </div>
              </div>
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
              <h2 className="text-3xl font-bold mb-4">Ready for Enhanced Chin Definition?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert cosmetic doctors and discover how chin fillers 
                can enhance your facial balance with subtle, sophisticated results.
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
      </div>
    </>;
};

// FAQ Item Component
const FAQItem = ({
  question,
  answer
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-black rounded-lg border border-gray-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left hover:bg-gray-900 rounded-lg transition-colors"
      >
        <div className="flex justify-between items-center">
          <span className="text-white font-medium">{question}</span>
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-white/70 flex-shrink-0" />
          ) : (
            <ChevronDown className="h-5 w-5 text-white/70 flex-shrink-0" />
          )}
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-300">{answer}</p>
        </div>
      )}
    </div>
  );
};
export default ChinFiller;