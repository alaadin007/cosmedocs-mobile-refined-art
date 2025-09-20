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
  const seoData = generateSEOMetadata("1ml Chin Filler London | Before & After Results | From £350", "Expert 1ml chin filler treatments in London. See amazing before and after results. Double chin filler, chin shadow correction. Book consultation.", "/chin-filler");
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
    question: "What is chin injection filler cost in London?",
    answer: "At Cosmedocs Harley Street, 1ml chin filler treatments start from £350 for 1.2ml, £650 for 2.4ml, and £850 for 3.6ml. Our chin injection filler cost varies depending on the amount needed to achieve your desired results."
  }, {
    question: "How long do chin filler results last?",
    answer: "Dermal fillers in the chin last longer than fillers in the lips due to the viscosity (thickness) of the material selected. Chin filler results typically last 12-18 months, sometimes longer, depending on the type and amount of filler used."
  }, {
    question: "Is chin filler London safe?",
    answer: "Absolutely! At Cosmedocs, only the finest quality dermal filler products are used for non-surgical facial rejuvenation treatments. All procedures are carried out by skilled medical practitioners with vast experience in the field."
  }, {
    question: "How do chin fillers work?",
    answer: "The process begins with a detailed consultation to examine your unique facial proportions. Treatment involves cleaning and disinfecting the chin area, applying topical numbing cream, then liquid mentoplasty with a fine needle takes 15-30 minutes to complete."
  }, {
    question: "What is the chin filler aftercare process?",
    answer: "Proper chin filler aftercare is essential for optimal 1ml chin filler before and after results. Apply ice packs for 10-15 minutes every hour for the first 6 hours, avoid touching the filler chin area, and sleep with head elevated. You can return to work immediately but avoid strenuous exercise, saunas, and alcohol for 24-48 hours. We provide comprehensive aftercare including detailed instructions, 24/7 emergency contact, and 2-week follow-up appointments. Final results appear within 2 weeks once swelling subsides."
  }];
  const rightColumnFaqs = [{
    question: "What are chin and jawline fillers benefits?",
    answer: "Natural results with improved facial dimensions, addresses an ageing lower face and undefined jawline, minimal downtime compared to cosmetic surgery, temporary but long-lasting (12-18 months), and high patient satisfaction."
  }, {
    question: "How much dermal chin filler to use?",
    answer: "Whether to use 1ml chin filler or more depends on individual anatomy. We look at bone structure and soft tissue density. Most individuals are satisfied with 1ml chin and jaw filler. If side walls are deficient, another 0.5-1ml may be required."
  }, {
    question: "Can I have other dermal filler treatments along with chin fillers?",
    answer: "Yes! Chin filler works beautifully with <a href='/masseter-botox' className='text-purple-300 hover:text-purple-200 underline'>masseter Botox injections</a>, <a href='/jawline-filler' className='text-purple-300 hover:text-purple-200 underline'>jawline filler</a>, <a href='/lip-filler' className='text-purple-300 hover:text-purple-200 underline'>lip filler enhancement</a>, and <a href='/nose-filler' className='text-purple-300 hover:text-purple-200 underline'>non-surgical rhinoplasty</a>. The hyaluronic acid makeover (Cheeks + Chin + Jawline) is one of our most popular combinations."
  }, {
    question: "What if I do not like my chin filler results?",
    answer: "Using the hyaluronidase enzyme, your dermal filler effects can be dissolved as early as within 24 hours, making non-surgical rejuvenation a safer alternative to plastic surgery. We help set realistic expectations beforehand."
  }, {
    question: "What are chin and jawline fillers side effects?",
    answer: "Typical side effects include swelling, bruising, and a low chance of infection. Swelling in the chin region is not as prominent as in the lips. Using a cannula, we avoid injuring blood vessels, thereby decreasing complications."
  }];
  return <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:image" content={seoData.image} />
        <meta property="og:site_name" content="Cosmedocs Clinic" />
        <meta name="twitter:card" content="summary_large_image" />
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
                  Chin Fillers
                  <span className="block text-purple-300">London</span>
                  <span className="block text-sm mt-4">Transform your profile with precision dermal fillers</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl">
                  <span className="text-purple-300 font-semibold">Invisible Art</span>
                  <br />
                  Facial transformation that speaks without words
                </p>
                <div className="mb-8">
                  <p className="text-sm text-gray-300">#cosmechin - Check out our IG for hundreds more natural, subtle transformations</p>
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
              <h2 className="text-3xl font-bold mb-8 text-white">Chin Filler Treatment</h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
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
                <h3 className="text-lg font-semibold text-white mb-2">Anaesthetic</h3>
                <p className="text-gray-300">Local / Topical</p>
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
                <h3 className="text-lg font-semibold text-white mb-2">Chin Filler Results</h3>
                <p className="text-gray-300">12+ months</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Procedure Time</h3>
                <p className="text-gray-300">30 mins</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Risk & Complications</h3>
                <p className="text-gray-300">Swelling, Bruises & Infection (rare)</p>
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
                <h3 className="text-lg font-semibold text-white mb-2">Full Recovery</h3>
                <p className="text-gray-300">24-48 Hours</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Back To Work</h3>
                <p className="text-gray-300">Immediate</p>
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
              <h2 className="text-3xl font-bold mb-4">Chin Fillers Before and After London</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Explore authentic 1ml chin filler before and after results from our Harley Street clinic. 
                Our expert dermal fillers chin treatments enhance projection and facial balance, including double chin filler and chin shadow correction.
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
              <h2 className="text-3xl font-bold mb-4 text-white">What Is a Chin Filler or Liquid Mentoplasty?</h2>
              <p className="text-gray-300 max-w-3xl mx-auto mb-6">
                Liquid mentoplasty or Chin filler is a non-surgical chin enhancement procedure that involves reshaping and projecting a weak, short, or retracted chin. Dermal fillers containing hyaluronic acid are directly injected into your chin area to volumize it and project the chin forward.
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
                </div>
              </motion.div>
            </div>
          </div>
        </section>


        {/* Face Types Section */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Round Face Chin Filler Before and After</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Tailored 1 ml chin filler approaches for different facial structures including round face chin filler before and after transformations
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
                    Combined with <a href='/masseter-botox' className='text-purple-300 hover:text-purple-200 underline'>masseter Botox</a>, chin fillers create softer facial angles, 
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

        {/* Genioplasty vs Dermal Fillers Comparison */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Genioplasty vs Non-Surgical Chin Enhancement</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Understanding the key differences between surgical genioplasty and dermal filler chin enhancement to help you make an informed decision
              </p>
            </motion.div>
            
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
              {/* Genioplasty (Surgical) */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-red-900/20 border-red-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl flex items-center">
                      <Syringe className="mr-3 text-red-400" size={20} />
                      Surgical Genioplasty
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300 text-sm">
                      Invasive surgical procedure involving bone repositioning or implant placement for permanent chin enhancement.
                    </p>
                    
                    <div className="bg-red-900/30 rounded-lg p-4 border border-red-500/30">
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• General anesthesia required</li>
                        <li>• 2-4 weeks recovery time</li>
                        <li>• £5,000-£8,000+ cost</li>
                        <li>• Permanent but irreversible</li>
                        <li>• Risk of complications</li>
                        <li>• Potential implant shifting</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Dermal Fillers */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-green-900/20 border-green-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl flex items-center">
                      <Heart className="mr-3 text-green-400" size={20} />
                      Non-Surgical Fillers
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300 text-sm">
                      Hyaluronic acid-based dermal fillers for natural chin enhancement with minimal downtime and reversible results.
                    </p>
                    
                    <div className="bg-green-900/30 rounded-lg p-4 border border-green-500/30">
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Topical anesthetic only</li>
                        <li>• 24-48 hours minimal downtime</li>
                        <li>• From £350 cost-effective</li>
                        <li>• 12-18 months duration</li>
                        <li>• Fully reversible</li>
                        <li>• Natural-looking results</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Comparison Table */}
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
                  <h3 className="text-2xl font-bold text-white">Chin, Cheek & Jawline Enhancement</h3>
                  <p className="text-gray-300 leading-relaxed">
                    The chin and jawline need to be considered one entity. Using hyaluronic acid-based dermal filler, a well-defined chin can achieve visual harmony between the nose, neck, and cheeks.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Female patients benefit from <a href='/jawline-filler' className='text-purple-300 hover:text-purple-200 underline'>jawline filler</a> and <a href='/cheek-filler' className='text-purple-300 hover:text-purple-200 underline'>cheek filler</a> to effortlessly achieve softer, heart-shaped, attractive contours.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    In addition to better aesthetic projection, a stronger and more prominent chin can support voluptuous lips, whether natural or achieved through <a href='/lip-filler' className='text-purple-300 hover:text-purple-200 underline'>lip fillers</a>.
                  </p>
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
              <h2 className="text-3xl font-bold mb-4 text-white">Chin Filler Pricing</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Dermal fillers in the chin last longer than filler treatment in the lips due to the viscosity (thickness) of a material selected. 
                Transparent pricing for premium chin enhancement treatments with expert consultation and aftercare support.
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
                    <CardTitle className="text-white text-2xl">1st Syringe</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">From £350</div>
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
                    <CardTitle className="text-white text-2xl">2.4ml Treatment</CardTitle>
                    <div className="text-white text-4xl font-bold">From £650</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-purple-100">2.4ml Hyaluronic Acid</p>
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
                    <CardTitle className="text-white text-2xl">3.6ml Treatment</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">From £850</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">3.6ml Hyaluronic Acid</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Maximum volume enhancement</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Premium FDA-approved filler</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">18+ months duration</span>
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
                *Consultation fee is deducted from treatment cost if you proceed on the same day. £50 discount available for additional filler.
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
              <h2 className="text-3xl font-bold mb-4 text-white">Chin Filler Video Demonstration</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Watch our expert technique for chin augmentation using advanced dermal filler methods. 
                This professional tutorial demonstrates our precision approach to creating natural-looking results.
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