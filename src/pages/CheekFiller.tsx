import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram, Clock, Zap, Shield, Calendar, Heart, Award, Activity, Syringe, GraduationCap, CheckCircle, Palette } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import TreatmentVideoPlayer from "@/components/TreatmentVideoPlayer";
import { useState, useEffect } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronDown, ChevronUp, Play } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { supabase } from "@/integrations/supabase/client";
import { Tables } from "@/integrations/supabase/types";
import { Button } from "@/components/ui/button";
type TreatmentVideo = Tables<'treatment_videos'>;

const CheekFiller = () => {
  const seoData = generateSEOMetadata("Cheek Fillers London | From £350 | Dr. Ahmed Haq | Harley Street", "Expert cheek filler treatments in London's Harley Street. Visibly lifted & defined cheeks and cheekbones by Dr. Ahmed Haq. Premium dermal fillers from £350.", "/cheek-filler");
  const bookingUrl = "https://med.as.me/harleystreet";
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [cheekFillerVideos, setCheekFillerVideos] = useState<TreatmentVideo[]>([]);
  const [loadingVideos, setLoadingVideos] = useState(false);

  // Load cheek filler videos
  useEffect(() => {
    loadCheekFillerVideos();
  }, []);

  const loadCheekFillerVideos = async () => {
    setLoadingVideos(true);
    try {
      const { data, error } = await supabase
        .from('treatment_videos')
        .select('*')
        .ilike('treatment_name', '%cheek%')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setCheekFillerVideos(data || []);
    } catch (error) {
      console.error('Error loading cheek filler videos:', error);
    } finally {
      setLoadingVideos(false);
    }
  };

  // Before/after images for cheek fillers
  const beforeAfterImages = [{
    src: "/lovable-uploads/37f017f9-669c-4ed6-9ca4-28d0984a1965.png",
    alt: "Cheek filler before and after results London Harley Street Cosmedocs Dr Ahmed Haq",
    caption: "Natural volume enhancement with 1ml cheek filler creating youthful contours"
  }, {
    src: "/lovable-uploads/95608275-de36-4458-901d-2cc2ce2136de.png",
    alt: "Cheek enhancement dermal filler before after London Cosmedocs treatment",
    caption: "Sculpted cheekbones and lifted midface with strategic filler placement"
  }, {
    src: "/lovable-uploads/4bb9f7fc-8d28-4ce9-b09e-7ee91adbe38c.png",
    alt: "Male cheek filler before after London Harley Street masculine enhancement",
    caption: "Masculine cheek enhancement for defined facial structure"
  }, {
    src: "/lovable-uploads/93abbe25-a062-434e-a633-b9f0d329321d.png",
    alt: "Cheek volume restoration before after London Cosmedocs dermal filler treatment",
    caption: "Volume restoration creating natural lift and facial harmony"
  }, {
    src: "/lovable-uploads/97e9a4a2-debd-4216-879b-d78feffa8cba.png",
    alt: "Cheek lift dermal filler London before after midface rejuvenation",
    caption: "Midface rejuvenation with instant cheek lift and contour definition"
  }, {
    src: "/lovable-uploads/2dc938fb-78b2-4af7-a0cb-190492553cbb.png",
    alt: "Apple cheek filler before after London youthful enhancement",
    caption: "Apple cheek enhancement for youthful, plump appearance"
  }];
  const treatmentDetails = [{
    icon: Zap,
    label: "Anaesthetic",
    value: "Local / Topical"
  }, {
    icon: Calendar,
    label: "Results Duration",
    value: "15+ months"
  }, {
    icon: Clock,
    label: "Procedure Time",
    value: "20-30 mins"
  }, {
    icon: Shield,
    label: "Recovery",
    value: "24 Hours"
  }, {
    icon: Heart,
    label: "Back to Work",
    value: "Immediate"
  }, {
    icon: Award,
    label: "Safety",
    value: "Minimal Risk"
  }];
  const faqs = [{
    question: "How much do cheek fillers cost in London?",
    answer: "At Cosmedocs Harley Street, cheek filler treatments start from £350 for 1ml. We offer 2ml for £650 and 3ml for £950. The final cost depends on your individual needs and the amount of filler required to achieve your desired results."
  }, {
    question: "How long do cheek fillers last?",
    answer: "Cheek fillers typically last 15-18 months. The longevity depends on factors like your metabolism, lifestyle, physical activity, and the type of filler used. Touch-up treatments can help maintain your enhanced cheek contours."
  }, {
    question: "Are cheek fillers safe?",
    answer: "When performed by Dr. Ahmed Haq at our Harley Street clinic, cheek fillers are very safe. We use premium Swiss, USA, and French dermal fillers with advanced cannula techniques to minimize risks and ensure natural-looking results."
  }, {
    question: "Do cheek fillers hurt?",
    answer: "Cheek filler treatments cause minimal discomfort. We apply numbing cream before the procedure, and the dermal fillers contain lidocaine for additional comfort. Most patients find the treatment very tolerable."
  }, {
    question: "Who is a good candidate for cheek fillers?",
    answer: "Cheek fillers are ideal for those experiencing volume loss due to aging, wanting to enhance natural cheekbone structure, correct facial asymmetry, or achieve more defined facial contours. A consultation will determine if you're a suitable candidate."
  }, {
    question: "What's the difference between 1ml and 2ml cheek fillers?",
    answer: "1ml provides subtle, natural enhancement perfect for first-time patients or minor volume loss. 2ml offers more noticeable definition and lift, ideal for significant volume restoration or those wanting more dramatic cheekbone enhancement."
  }, {
    question: "What should I expect after cheek filler treatment?",
    answer: "Results are visible immediately with final results apparent within 2 weeks. Some mild swelling or bruising may occur but typically resolves within 24-48 hours. Most patients return to work immediately after treatment."
  }, {
    question: "Can cheek fillers be combined with other treatments?",
    answer: "Yes, cheek fillers work excellently as part of a comprehensive facial rejuvenation plan. They can be combined with treatments like lip fillers, anti-wrinkle injections, or non-surgical facelifts for complete facial harmony."
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
          "name": "Cosmedocs - Cheek Fillers London",
          "description": "Premium cheek filler treatments for lifted and defined cheeks in London's Harley Street",
          "url": "https://cosmedocs.com/cheek-filler",
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
          "priceRange": "£350-£950"
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
                  Expert Cheek
                  <span className="block text-purple-300">Enhancement</span>
                  <span className="block text-sm mt-4">Lifted and defined cheeks with precision dermal fillers</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl">
                  <span className="text-purple-300 font-semibold">Invisible Art</span>
                  <br />
                  Transformation that speaks without saying a word
                </p>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Starting from £350</p>
                  <p className="text-sm text-gray-300">#cosmecheck - Check out our IG for hundreds more natural, subtle transformations</p>
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
              <h2 className="text-3xl font-bold mb-8 text-white">Cheek Filler Treatment</h2>
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
              <h2 className="text-3xl font-bold mb-4">Before and After Cheek Filler Results in London</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Explore authentic before and after cheek filler results from our Harley Street clinic. 
                Our advanced dermal filler treatments enhance volume, contour and definition for natural-looking enhancement.
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
                title="Cheek Filler Results Gallery"
                description="Comprehensive gallery of our cheek enhancement treatments"
              />
            </div>
          </div>
        </section>

        {/* More About Cheeks Section */}
        <section className="bg-gradient-to-b from-black to-[#0A0A0A] py-[72px]">
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
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
                More About Cheeks
              </h2>
            </motion.div>

            <div className="max-w-6xl mx-auto space-y-12">
              <motion.div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10" initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6
            }} viewport={{
              once: true
            }}>
                <h3 className="text-3xl font-light text-white mb-6">Defined Cheeks Are Universally Attractive</h3>
                <p className="text-white/80 font-extralight leading-relaxed text-lg mb-4">
                  Cheek fillers have become a gold standard for natural and non-surgical face lifts because an attractive facial profile is incomplete without visibly sculpted cheeks or high cheekbones.
                </p>
                <p className="text-white/80 font-extralight leading-relaxed text-lg">
                  According to scientific studies, the presence of a prominent mid-face area or defined cheeks signals sexual maturity for both males and females, making cheek enhancement universally appealing.
                </p>
              </motion.div>

              <motion.div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10" initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.1
            }} viewport={{
              once: true
            }}>
                <h3 className="text-3xl font-light text-white mb-6">How Aging Affects Your Face Structure</h3>
                <p className="text-white/80 font-extralight leading-relaxed text-lg mb-4">
                  One of the most important face areas that show noticeable aging signs is the mid-face. As you age, the skin, bone and soft tissues undergo major changes.
                </p>
                <p className="text-white/80 font-extralight leading-relaxed text-lg mb-6">
                  The ligaments become loose, and fat pads of the face become thinner and shift, resulting in:
                </p>
                <ul className="space-y-3 text-white/80 font-extralight text-lg">
                  <li className="flex items-start">
                    <span className="block w-2 h-2 bg-white/60 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    Cheeks start to look flat or sag
                  </li>
                  <li className="flex items-start">
                    <span className="block w-2 h-2 bg-white/60 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    Jowls are created along the jawline
                  </li>
                  <li className="flex items-start">
                    <span className="block w-2 h-2 bg-white/60 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    Droopy jawline and neck skin
                  </li>
                  <li className="flex items-start">
                    <span className="block w-2 h-2 bg-white/60 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    Nasolabial folds (smile lines) become prominent
                  </li>
                </ul>
              </motion.div>

              <motion.div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10" initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }} viewport={{
              once: true
            }}>
                <h3 className="text-3xl font-light text-white mb-6">A Trending 'Liquid Facelift'</h3>
                <p className="text-white/80 font-extralight leading-relaxed text-lg mb-4">
                  This 'next generation facelift' adds volume to the sunken cheek area while subtly improving the under-eye area, aging mouth lines, and lifting the lower face.
                </p>
                <p className="text-white/80 font-extralight leading-relaxed text-lg">
                  Many young patients also get high cheekbones, cheek fillers, and apple cheek fillers to add natural angles and soft youthful contours to their cheeks.
                </p>
              </motion.div>
            </div>
          </div>
        </section>


        {/* 3ml and 4ml Cheek Filler For Men Accordion */}
        <section className="bg-black py-[78px]">
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
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
                3ml & 4ml Cheek Fillers For Men
              </h2>
              <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
                Masculine enhancement with bold, natural-looking results
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6
            }} viewport={{
              once: true
            }}>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="3ml-4ml-men-results" className="border-white/10">
                    <AccordionTrigger className="text-left hover:no-underline bg-white/5 backdrop-blur-sm rounded-xl px-6 py-6 border border-white/10 mb-2 text-white hover:bg-white/10 transition-colors">
                      <div className="flex items-center justify-between w-full">
                        <div>
                          <h3 className="text-2xl font-light text-white mb-2">3ml & 4ml Cheek Filler Results For Men</h3>
                          <p className="text-white/70 font-extralight text-left">Click to view masculine enhancement before & after images</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8">
                      <div className="space-y-8">
                        {/* Before & After Images Grid */}
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                          <div className="space-y-4">
                            <img src="/lovable-uploads/89278789-16b0-4b03-8f8e-c0aeef19db16.png" alt="3ml cheek filler before and after results for men - volume restoration" className="w-full rounded-xl border border-white/20" />
                            <p className="text-white/80 text-sm font-light text-center">
                              3ml Volume Restoration: Masculine cheek enhancement for defined structure
                            </p>
                          </div>
                          <div className="space-y-4">
                            <img src="/lovable-uploads/33b7b10d-07ef-4c95-b87c-0ab87978dd44.png" alt="4ml cheek filler before and after results London men" className="w-full rounded-xl border border-white/20" />
                            <p className="text-white/80 text-sm font-light text-center">
                              4ml Enhanced Definition: Dramatic yet natural masculine transformation
                            </p>
                          </div>
                        </div>

                        {/* Treatment Information */}
                        <div className="grid md:grid-cols-2 gap-8">
                          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                            <h4 className="text-xl font-light text-white mb-4">3ml Cheek Filler For Men</h4>
                            <p className="text-white/80 font-extralight leading-relaxed mb-4">
                              3ml cheek filler provides substantial volume enhancement ideal for men seeking more pronounced cheekbone definition. This amount delivers masculine facial structure while maintaining natural proportions.
                            </p>
                            <p className="text-white/80 font-extralight leading-relaxed">
                              Perfect for correcting age-related volume loss and creating the strong, angular features that define masculine facial aesthetics.
                            </p>
                          </div>

                          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                            <h4 className="text-xl font-light text-white mb-4">4ml Cheek Enhancement</h4>
                            <p className="text-white/80 font-extralight leading-relaxed mb-4">
                              4ml represents our premium masculine enhancement, delivering dramatic yet natural transformation. This volume creates bold cheekbone projection while maintaining facial harmony.
                            </p>
                            <p className="text-white/80 font-extralight leading-relaxed">
                              Ideal for men wanting maximum definition and those with naturally flat cheek structure requiring significant enhancement.
                            </p>
                          </div>
                        </div>

                        {/* Treatment Benefits */}
                        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                          <h4 className="text-xl font-light text-white mb-4">3ml & 4ml Masculine Enhancement Benefits</h4>
                          <div className="grid md:grid-cols-2 gap-6">
                            <ul className="space-y-3 text-white/80 font-extralight">
                              <li className="flex items-start">
                                <span className="block w-2 h-2 bg-white/60 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                Bold, masculine cheekbone definition
                              </li>
                              <li className="flex items-start">
                                <span className="block w-2 h-2 bg-white/60 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                Enhanced jawline projection and strength
                              </li>
                              <li className="flex items-start">
                                <span className="block w-2 h-2 bg-white/60 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                Correction of age-related volume loss
                              </li>
                            </ul>
                            <ul className="space-y-3 text-white/80 font-extralight">
                              <li className="flex items-start">
                                <span className="block w-2 h-2 bg-white/60 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                Improved facial symmetry and balance
                              </li>
                              <li className="flex items-start">
                                <span className="block w-2 h-2 bg-white/60 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                Natural-looking masculine enhancement
                              </li>
                              <li className="flex items-start">
                                <span className="block w-2 h-2 bg-white/60 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                Long-lasting results (15-18 months)
                              </li>
                            </ul>
                          </div>
                        </div>

                        {/* Call to Action */}
                        <div className="text-center">
                          <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 rounded-full px-10 py-4 inline-flex items-center justify-center text-lg font-light transition-all duration-300 border border-white/20">
                            Book Your 3ml or 4ml Masculine Enhancement
                          </a>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cheek Filler Treatment Videos Section */}
        <section className="bg-gradient-to-b from-black to-[#0A0A0A] py-[78px]">
          <div className="page-container">
            <motion.div 
              className="text-center mb-20" 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }} 
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
                Treatment Videos
              </h2>
              <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
                Watch real cheek filler procedures and see the artistry behind natural enhancement
              </p>
            </motion.div>

            <div className="max-w-7xl mx-auto">
              {loadingVideos ? (
                <motion.div 
                  className="flex items-center justify-center py-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white/30"></div>
                  <span className="ml-4 text-white/70 text-lg">Loading treatment videos...</span>
                </motion.div>
              ) : cheekFillerVideos.length === 0 ? (
                <motion.div 
                  className="text-center py-20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
                    <Play className="h-16 w-16 text-white/40 mx-auto mb-6" />
                    <h3 className="text-2xl font-light text-white mb-4">Treatment Videos Coming Soon</h3>
                    <p className="text-white/70 max-w-md mx-auto">
                      We are preparing exclusive treatment videos to showcase our cheek enhancement techniques. Check back soon!
                    </p>
                  </div>
                </motion.div>
              ) : (
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  {/* Left Column - Text About Cheek Fillers */}
                  <motion.div
                    className="space-y-8"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                      <h3 className="text-3xl font-light text-white mb-6">Expert Cheek Enhancement</h3>
                      <div className="space-y-6 text-white/80 font-light leading-relaxed">
                        <p>
                          Our cheek filler treatments represent the pinnacle of aesthetic medicine - where invisible art meets 
                          natural enhancement. Each procedure is meticulously planned to restore volume, define contours, 
                          and create harmonious facial proportions.
                        </p>
                        <p>
                          Using premium Swiss, French, and American dermal fillers, we achieve results that are bold yet natural, 
                          transformative yet subtle. Our approach ensures every enhancement speaks without saying a word.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                      <h4 className="text-2xl font-light text-white mb-6">Treatment Highlights</h4>
                      <div className="space-y-4">
                        {[
                          "Advanced injection techniques for natural-looking results",
                          "Precise volume restoration and cheekbone definition", 
                          "Immediate enhancement with minimal downtime",
                          "Premium dermal fillers for long-lasting effects",
                          "Personalized treatment plans for your facial structure"
                        ].map((highlight, index) => (
                          <div key={index} className="flex items-start space-x-4">
                            <div className="w-2 h-2 bg-white/60 rounded-full mt-3 flex-shrink-0"></div>
                            <p className="text-white/80 font-light">{highlight}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="text-center">
                      <a 
                        href={bookingUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 rounded-full px-8 py-4 inline-flex items-center justify-center text-lg font-light transition-all duration-300 border border-white/20"
                      >
                        Book Your Cheek Enhancement Consultation
                      </a>
                    </div>
                  </motion.div>

                  {/* Right Column - Videos */}
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    viewport={{ once: true }}
                  >
                    {cheekFillerVideos.slice(0, 2).map((video, index) => (
                      <motion.div
                        key={video.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      >
                        <TreatmentVideoPlayer
                          video={video}
                          className="h-full"
                          showControls={true}
                          editMode={false}
                          treatmentName="Cheek Fillers"
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              )}
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
              <h2 className="text-3xl font-bold mb-4 text-white">Cheek Filler Pricing London</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Transparent pricing for premium cheek enhancement treatments. All prices include consultation, 
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
                    <CardTitle className="text-white text-2xl">1ml Cheek Filler</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£350</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Usually enough for most - subtle enhancement and first-time treatments</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Consultation included</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Premium hyaluronic acid</span>
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
                    <CardTitle className="text-white text-2xl">2ml Cheek Filler</CardTitle>
                    <div className="text-white text-4xl font-bold">£650</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-purple-100">Enhanced definition - ideal for dramatic results</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Comprehensive consultation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Premium hyaluronic acid</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Extended aftercare support</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">2-week follow-up</span>
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
                    <CardTitle className="text-white text-2xl">3ml Cheek Filler</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£950</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Maximum enhancement - for dramatic transformation</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Full facial assessment</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Premium hyaluronic acid</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Complete aftercare package</span>
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
                *All prices include consultation, treatment, and comprehensive aftercare support
              </p>
              <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 text-lg font-semibold">
                Book Your Consultation
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-gradient-to-b from-black via-black to-[#0A0A0A] py-[100px] relative">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:50px_50px]"></div>
          </div>
          
          <div className="page-container relative z-10">
            <motion.div className="text-center mb-24" initial={{
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
                Benefits of Cheek Enhancement
              </h2>
              <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {[
                "More defined and plump cheeks",
                "Reduced look of nasolabial folds", 
                "Subtle lift of drooping jowls",
                "Naturally defined cheekbones",
                "Instant 'Cheek Lift' for sagging",
                "Fraction of surgery cost",
                "Plumper cheeks for thin faces",
                "Angular look for round faces"
              ].map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="group relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/[0.15] hover:border-white/30 transition-all duration-500 hover:bg-gradient-to-br hover:from-white/[0.12] hover:to-white/[0.04] hover:shadow-2xl hover:shadow-white/10 hover:-translate-y-2"
                  initial={{
                    opacity: 0,
                    y: 40
                  }} 
                  whileInView={{
                    opacity: 1,
                    y: 0
                  }} 
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }} 
                  viewport={{
                    once: true
                  }}
                >
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-white/60 to-white/40 group-hover:from-white/80 group-hover:to-white/60 transition-all duration-300"></div>
                    </div>
                    
                    <p className="text-white/90 font-light text-center leading-relaxed group-hover:text-white transition-colors duration-300 text-[15px]">
                      {benefit}
                    </p>
                  </div>
                  
                  {/* Subtle inner glow */}
                  <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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

        {/* FAQ Section */}
        <section className="bg-gradient-to-b from-black to-[#0A0A0A] py-[78px]">
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
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-4">
                {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => <motion.div key={index} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.6,
                delay: index * 0.05
              }} viewport={{
                once: true
              }}>
                    <Collapsible open={openFaqIndex === index} onOpenChange={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}>
                      <CollapsibleTrigger className="w-full bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 flex justify-between items-center text-left hover:bg-white/10 transition-colors">
                        <h3 className="text-lg font-light text-white pr-4">{faq.question}</h3>
                        {openFaqIndex === index ? <ChevronUp className="h-5 w-5 text-white/70 flex-shrink-0" /> : <ChevronDown className="h-5 w-5 text-white/70 flex-shrink-0" />}
                      </CollapsibleTrigger>
                      <CollapsibleContent className="px-6 pb-6 pt-4 bg-white/5 backdrop-blur-sm border border-white/10 border-t-0 rounded-b-xl">
                        <p className="text-white/80 font-extralight leading-relaxed">{faq.answer}</p>
                      </CollapsibleContent>
                    </Collapsible>
                  </motion.div>)}
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => {
                const actualIndex = index + Math.ceil(faqs.length / 2);
                return <motion.div key={actualIndex} initial={{
                  opacity: 0,
                  y: 20
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  duration: 0.6,
                  delay: index * 0.05
                }} viewport={{
                  once: true
                }}>
                      <Collapsible open={openFaqIndex === actualIndex} onOpenChange={() => setOpenFaqIndex(openFaqIndex === actualIndex ? null : actualIndex)}>
                        <CollapsibleTrigger className="w-full bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 flex justify-between items-center text-left hover:bg-white/10 transition-colors">
                          <h3 className="text-lg font-light text-white pr-4">{faq.question}</h3>
                          {openFaqIndex === actualIndex ? <ChevronUp className="h-5 w-5 text-white/70 flex-shrink-0" /> : <ChevronDown className="h-5 w-5 text-white/70 flex-shrink-0" />}
                        </CollapsibleTrigger>
                        <CollapsibleContent className="px-6 pb-6 pt-4 bg-white/5 backdrop-blur-sm border border-white/10 border-t-0 rounded-b-xl">
                          <p className="text-white/80 font-extralight leading-relaxed">{faq.answer}</p>
                        </CollapsibleContent>
                      </Collapsible>
                    </motion.div>;
              })}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-[#0A0A0A] py-[78px]">
          <div className="page-container text-center">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }}>
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-8 tracking-tight">
                Ready to Enhance Your Cheeks?
              </h2>
              <p className="text-xl text-white/70 font-light mb-12 max-w-2xl mx-auto">
                Book your consultation with Dr. Ahmed Haq at our Harley Street clinic
              </p>
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="bg-white/95 backdrop-blur-sm text-black hover:bg-white rounded-full px-12 py-5 inline-flex items-center justify-center text-xl font-light transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                Book Your Consultation
              </a>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Hidden SEO Content */}
      <div className="sr-only">
        <h1>Cheek Fillers London - Expert Treatments by Dr. Ahmed Haq</h1>
        <p>Discover the transformative power of cheek fillers at Cosmedocs London. Our Harley Street clinic offers premium cheek enhancement treatments designed to create visibly lifted and defined cheeks and cheekbones. Dr. Ahmed Haq, with over 15 years of experience, utilizes advanced dermal filler techniques to deliver natural-looking results that enhance your facial harmony.</p>
        
        <h2>Why Choose Cheek Fillers at Cosmedocs?</h2>
        <p>Cheek fillers have become the gold standard for non-surgical facial enhancement because they address multiple aging concerns simultaneously. As we age, the midface undergoes significant changes - the skin loses elasticity, bone density decreases, and facial fat pads shift downward. This natural aging process results in flat or sagging cheeks, prominent nasolabial folds, and loss of facial definition.</p>
        
        <p>Our cheek filler treatments use premium hyaluronic acid-based dermal fillers to restore lost volume, lift sagging tissues, and create the defined cheekbone structure that signals youth and vitality. The procedure is minimally invasive, with immediate results and minimal downtime, making it an ideal alternative to surgical cheek implants or facelifts.</p>
        
        <h2>Advanced Injection Techniques</h2>
        <p>At Cosmedocs, we employ both cannula and needle techniques depending on your specific anatomy and aesthetic goals. Our microdroplet injection technique ensures precise placement of filler for natural-looking enhancement. We follow a "less is more" approach, typically starting with 1ml of filler and gradually building to achieve your desired results while maintaining facial harmony.</p>
        
        <h2>Types of Cheek Enhancement</h2>
        <p>Our cheek filler treatments can address various aesthetic concerns: apple cheek fillers for a youthful, plump appearance; cheekbone enhancement for sculptural definition; mid-cheek groove filling for improved facial contours; and volume restoration for age-related deflation. Each treatment is customized to your unique facial structure and aesthetic preferences.</p>
        
        <h2>Safety and Quality Assurance</h2>
        <p>Patient safety is our highest priority. We exclusively use premium dermal fillers from reputable Swiss, USA, and French manufacturers. All treatments are performed in our fully regulated Harley Street clinic by Dr. Ahmed Haq, ensuring the highest standards of safety and efficacy. Our comprehensive consultation process includes detailed medical history assessment and realistic expectation setting.</p>
        
        <h2>Aftercare and Results</h2>
        <p>Cheek filler results are visible immediately, with final results apparent within two weeks as any minor swelling subsides. The enhancement typically lasts 15-18 months, depending on individual factors such as metabolism, lifestyle, and the specific filler used. We provide comprehensive aftercare instructions to optimize your results and minimize any potential side effects.</p>
        
        <p>The treatment involves minimal discomfort, with topical numbing cream applied before the procedure and lidocaine-containing fillers for additional comfort. Most patients return to work immediately after treatment, with any minor swelling or bruising typically resolving within 24-48 hours.</p>
      </div>
    </>;
};
export default CheekFiller;