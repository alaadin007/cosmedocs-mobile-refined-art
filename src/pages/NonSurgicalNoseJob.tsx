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
    "Reshape your nose without surgery. Liquid rhinoplasty corrects bumps, asymmetry & drooping tips. Nose job from £450.",
    "/non-surgical-nose-job"
  );

  const bookingUrl = "https://med.as.me/harleystreet";

  const beforeAfterImages = [
    {
      src: "/lovable-uploads/8f741338-3fd5-4feb-9d34-270856fb99c5.png",
      alt: "Non-surgical nose job 3 year progression London Harley Street botox filler results",
      caption: "Progressive transformation over 3 years showing natural enhancement with #cosmenose technique"
    },
    {
      src: "/lovable-uploads/16fa7311-00af-4ea7-b353-73f981f6d87c.png",
      alt: "Liquid nose job profile view London Harley Street non-surgical rhinoplasty results",
      caption: "Subtle profile enhancement achieving perfect nasal proportions"
    },
    {
      src: "/lovable-uploads/717753b3-1c9d-43bd-bdc1-ca245fc3c284.png",
      alt: "Non-invasive nose job immediate results London Cosmedocs Dr Ahmed Haq",
      caption: "Immediate transformation showing refined nasal bridge and tip"
    },
    {
      src: "/lovable-uploads/d5cec131-9f61-4b49-9dba-8658eda2eddf.png",
      alt: "Nose filler treatment progression nonsurgical rhinoplasty London Harley Street",
      caption: "Treatment progression showing results developing over 10 minutes"
    },
    {
      src: "/lovable-uploads/a9ac5188-66f2-420b-9b39-3449dc02ff7b.png",
      alt: "Non-surgical nose job profile comparison botox London Cosmedocs Harley Street",
      caption: "Profile view showing enhanced nasal projection and definition"
    },
    {
      src: "/lovable-uploads/97c76ea5-245e-43c2-8b89-533f365f4969.png",
      alt: "Bridge bump correction liquid nose job London Harley Street Cosmedocs",
      caption: "Advanced technique demonstrating raised bridge and concealed bump correction"
    },
    {
      src: "/lovable-uploads/7b2a209c-3203-44b6-8cff-83e3a40896b9.png",
      alt: "Non-surgical nose reshaping profile botox London Harley Street results",
      caption: "Profile transformation showing refined nasal bridge and enhanced projection with #cosmenose technique"
    },
    {
      src: "/lovable-uploads/62475a93-6144-4596-bca9-7e70d52cb7c1.png",
      alt: "Non-surgical nose job bottom view nasal tip filler London Cosmedocs",
      caption: "Underneath view demonstrating improved nasal tip projection and symmetry"
    },
    {
      src: "/lovable-uploads/cc387da3-1543-4b06-8b11-a48d29f03456.png",
      alt: "Non-surgical nose job profile pixie tip filler London Harley Street",
      caption: "Side profile enhancement demonstrating subtle yet significant improvement in nasal contours"
    },
    {
      src: "/lovable-uploads/1cceb92b-eacb-48b4-9c9f-04c4cb2b025e.png",
      alt: "Nose reshaping profile dermal filler London Cosmedocs Dr Ahmed Haq",
      caption: "Natural-looking profile enhancement achieved with advanced dermal filler techniques"
    },
    {
      src: "/lovable-uploads/bf8a69d8-6776-4187-857d-a009e9fd6147.png",
      alt: "Non-surgical rhinoplasty before after London Harley Street Dr Ahmed Haq",
      caption: "Remarkable transformation achieving perfect nasal proportions and facial harmony"
    }
  ];

  const leftColumnFaqs = [
    {
      question: "How much does a non-surgical nose job cost in London?",
      answer: "At Cosmedocs, the cost for non surgical nose job starts from £450 for dermal filler treatments. Botox nose slimming treatments begin at £200. Our non surgical rhinoplasty cost includes your consultation, premium products, and aftercare. We're proud to offer competitive nose job london price without compromising on quality. The nose filler cost varies depending on the amount needed and your specific goals."
    },
    {
      question: "What are the side effects of nose reshaping treatments?",
      answer: "Nose lift side effects are typically minimal with our advanced techniques. You may experience slight temporary swelling or tenderness at injection sites. Most patients return to normal activities the same day. Our extensive before after non surgical nose job gallery demonstrates natural-looking results that last 12-18 months. The non invasive nature of these treatments means recovery is much easier than traditional surgery."
    },
    {
      question: "Is botox safe for nose treatments?",
      answer: "Yes, botox in the nose is very safe when performed by experienced practitioners like Dr. Ahmed Haq. We've been perfecting nose slimming injection techniques since 2010. Botox for nose treatments including botox nose tip lift and nasal botox are minimally invasive with excellent safety profiles. Our botox nose before after results showcase the effectiveness of these treatments."
    },
    {
      question: "What's the difference between filler and botox for the nose?",
      answer: "Nose tip filler adds volume and shape to create subtle nose job enhancements, perfect for achieving a pixie tip nose or correcting asymmetry. Botox on nose works differently by relaxing muscles for nose slimming botox effects. We can use filler on nose tip for projection, filler in bridge of nose for smoothing bumps, or botox for nose tip lifting. Often these are combined for optimal nose reshaping harley street results."
    },
    {
      question: "Can you make a wide nose slimmer without surgery?",
      answer: "Absolutely. Our slim nose procedure uses strategic placement techniques to create the appearance of nose reduction without surgery. Using nose fillers for wide nose, we can refine proportions and achieve nose slimming botox before and after transformations. This non invasive nose surgery alternative is ideal for patients seeking subtle changes without downtime."
    }
  ];

  const rightColumnFaqs = [
    {
      question: "What is a liquid rhinoplasty?",
      answer: "A liquid nose job uses dermal fillers nose injections to reshape your nose instantly. Unlike traditional surgery, this non surgical nose surgery offers immediate results with minimal downtime. The procedure involves precise nose injection filler cost-effective techniques that can smooth bumps, lift the tip, or improve symmetry. It's become the best nose job london option for many seeking natural enhancement."
    },
    {
      question: "Why choose Harley Street for nose treatments?",
      answer: "Our nose jobs harley street clinic offers world-class expertise in non surgical nose reshaping london. Dr. Ahmed Haq specialises in advanced techniques including botox nose reshaping, dermal filler nose tip enhancement, and comprehensive nonsurgical rhinoplasty. The nose job london harley street reputation means you're accessing the highest standards of aesthetic medicine."
    },
    {
      question: "How quickly will I see results?",
      answer: "Results from dermal fillers are visible immediately after your non surgical nose job before and after comparison. For botox in nose treatments, you'll see progressive improvement over 7-14 days as the botox nose lift before and after effects develop. Our non surgical nose lift price includes follow-up appointments to ensure optimal outcomes."
    },
    {
      question: "What's included in the consultation?",
      answer: "Your non surgical rhinoplasty cost includes a comprehensive facial assessment where we discuss your goals for nose reshaping without surgery. We'll review nose job injectable fillers options, show you similar non surgical nose job before after cases, and create a personalised treatment plan. We'll also discuss options like pixie tip lift, nasal tip botox, and botox to lift nose tip depending on your desired outcome."
    },
    {
      question: "Are the results reversible?",
      answer: "Yes, one major advantage of non-surgical nose jobs is that nose job dermal fillers can be dissolved with hyaluronidase if needed. This makes filler tip of nose and other nose injection treatments much safer than permanent procedures. Whether it's botox on tip of nose or dermal filler nose tip treatments, we ensure you feel confident about your nose lift no surgery approach."
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
        
        {/* Structured Data - Medical Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "Cosmedocs - Non-Surgical Nose Job",
            "description": "Premium non-surgical nose job treatments in London's Harley Street",
            "url": "https://www.cosmedocs.co.uk/non-surgical-nose-job",
            "telephone": "+44 20 3733 3227",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "10 Harley Street",
              "addressLocality": "London",
              "addressRegion": "Greater London",
              "postalCode": "W1G 9PF",
              "addressCountry": "GB"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 51.5074,
              "longitude": -0.1278
            },
            "priceRange": "£450"
          })}
        </script>

        {/* Structured Data - FAQPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              ...leftColumnFaqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              })),
              ...rightColumnFaqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            ]
          })}
        </script>

        {/* Structured Data - Breadcrumbs */}
        <script type="application/ld+json">
          {JSON.stringify({
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
                "name": "Non-Surgical Nose Job",
                "item": "https://www.cosmedocs.co.uk/non-surgical-nose-job"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        <main>
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
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-purple-300">
                  Non-Surgical Nose Job London
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-xl">
                  Expert nose reshaping without surgery from £450. Harley Street's leading liquid rhinoplasty clinic using advanced #cosmenose technique.
                </p>
                <div className="mb-8">
                  <p className="text-sm text-gray-400">Botox & dermal filler specialists | Invisible art philosophy | Natural-looking results</p>
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
                Experience the best nose job london at our Harley Street clinic. From botox in the nose for slimming to filler on nose tip enhancement, we offer comprehensive non surgical nose reshaping treatments. Our non surgical nose job price is transparent with no hidden costs.
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
              <h2 className="text-3xl font-bold mb-4">Before and After Results</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Explore authentic non surgical nose job before after results from our London clinic. 
                See the transformation achieved through botox for nose treatments, filler on nose tip, and our signature liquid nose job technique. 
                Our non surgical rhinoplasty before after gallery showcases natural enhancement using advanced botox nose slimming before and after methods.
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
              <h2 className="text-3xl font-bold mb-4">London's Leading Non-Surgical Rhinoplasty Clinic</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Experience the art of non surgical nose reshaping london at our prestigious Harley Street location. Our treatments combine botox on nose techniques with advanced nose filler procedures to achieve your perfect profile. Whether you're considering a subtle nose job or more significant reshaping, we deliver natural results.<br/><br/>
                Dr. Ahmed Haq pioneered the innovative #cosmenose technique, specialising in nose tip lift procedures, pixie tip nose filler, and botox nose slimming. 
                From nose lift no surgery options to comprehensive non surgical rhinoplasty in london, our approach offers exceptional london nose job cost value with natural, transformative results.
              </p>
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
                    alt="Complex nose fracture reconstruction London Harley Street Dr Ahmed Haq"
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
                        Our specialised approach combines <a href="/advanced-upper-face-botox" className="text-purple-300 hover:text-purple-200 underline">botox treatments</a> with strategic <a href="/dermal-fillers" className="text-purple-300 hover:text-purple-200 underline">dermal filler</a> placement to address structural damage 
                        from previous trauma. This non-invasive alternative offers remarkable results for patients seeking nose reshaping 
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
                      alt="Before deviated nose correction London Harley Street Cosmedocs"
                      className="w-full h-auto rounded-2xl mb-6 shadow-2xl group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
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
                      alt="After deviated nose correction London Harley Street Cosmedocs results"
                      className="w-full h-auto rounded-2xl mb-6 shadow-2xl group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
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

        {/* What Can Be Treated Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4 text-white">What Can Be Treated with Non-Surgical Techniques?</h2>
              <p className="text-gray-300 max-w-4xl mx-auto mb-8 text-center">
                Non-surgical rhinoplasty has proven remarkably effective, with an <a href="https://pubmed.ncbi.nlm.nih.gov/38862661/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">updated systematic review</a> of nonsurgical rhinoplasty techniques, outcomes, and complications demonstrating a 99.1% satisfaction rate across 9,657 patients. This evidence-backed approach can address:
              </p>
              <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-300 text-left">Nose slimming injection treatments and nasal flare reduction</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-300 text-left">Pixie tip lift and nose tip lift botox for improved projection</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-300 text-left">Bridge enhancement using filler in bridge of nose techniques</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-300 text-left">Botox on tip of nose for subtle elevation and refinement</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-300 text-left">Dermal filler nose tip enhancements tailored to your features</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-300 text-left">Complete non invasive nose job transformations</p>
                </div>
              </div>
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
              <h2 className="text-3xl font-bold mb-4 text-white">Non-Surgical Nose Job Pricing</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Transparent nose job cost london with no hidden fees. Our competitive non surgical nose lift price includes consultation, 
                premium nose job injectable fillers, and comprehensive aftercare. Compare our nose injection filler cost and discover exceptional value.
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
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4 text-white">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
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

        {/* Additional SEO Content */}
        <article className="py-16 bg-accent">
          <div className="page-container max-w-4xl">
            <h2 className="text-3xl font-bold mb-6 text-white">Expert Non-Surgical Nose Reshaping in London</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-4">
                At Cosmedocs, we're proud to offer the best non-surgical nose jobs in London. Our nose job in london clinic specialises in advanced nonsurgical rhinoplasty techniques that deliver natural, sophisticated results. Dr. Ahmed Haq has pioneered the #cosmenose method, combining expert knowledge of facial anatomy with the latest nose filler and botox nose technologies to create harmonious enhancements without surgery.
              </p>
              <p className="text-gray-300 mb-4">
                Our prestigious location at 10 Harley Street offers comprehensive treatments including <a href="/advanced-upper-face-botox" className="text-purple-300 hover:text-purple-200 underline">botox to lift nose tip</a>, nose reduction without surgery, and liquid nose job procedures. Whether you're seeking a pixie tip nose enhancement, nasal tip botox treatment, or complete non surgical nose reshaping, we provide personalised plans using premium <a href="/dermal-fillers" className="text-purple-300 hover:text-purple-200 underline">dermal fillers</a>. Our transparent nose job london cost makes world-class treatment accessible.
              </p>
              <p className="text-gray-300 mb-4">
                The non invasive nose surgery approach offers remarkable advantages: minimal downtime, immediate results, and reversible treatments. Our botox for nose procedures including botox nose lift and nose slimming injection options provide subtle, natural-looking refinements. The cost of non surgical nose job uk at Cosmedocs includes consultation, treatment, and follow-up care. Results from our dermal fillers nose treatments typically last 12-18 months, making it an excellent alternative to traditional surgery.
              </p>
              <p className="text-gray-300 mb-4">
                We specialise in various techniques including filler tip of nose for projection, botox tip of nose for lifting, and nose fillers for wide nose to create a slimmer appearance. Our non surgical rhinoplasty before after gallery demonstrates the transformative power of our slim nose procedure approach. From subtle adjustments to significant reshaping, our nose injection treatments deliver exceptional outcomes.
              </p>
              <p className="text-gray-300">
                For complex cases including post-fracture reconstruction and deviated noses, Dr. Ahmed Haq employs specialised techniques developed over years of experience. Whether you're looking for the best nose job london or exploring non-surgical nose jobs as a safer alternative, our Harley Street clinic offers unmatched expertise. Book your consultation today by calling 0333 0551 503 to discuss your nose lift options and discover our competitive non surgical nose reshaping cost.
              </p>
            </div>
          </div>
        </article>
        </main>
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
