import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram, Clock, Zap, Shield, Calendar, Heart, Award, Activity, Syringe, GraduationCap, CheckCircle, Palette, Play } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";
import { Link } from "react-router-dom";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import TreatmentVideoPlayer from "@/components/TreatmentVideoPlayer";
import oneMLImage from "@/assets/1ml-cheek-fillers-before-after.png";
import twoMLImage from "@/assets/2ml-cheek-fillers-before-after.png";
import menCheekImage from "@/assets/cheek-filler-treatment-man.png";
import { useState, useEffect } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronDown, ChevronUp } from "lucide-react";
import ClientReviews from '@/components/ClientReviews';
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
  const seoData = generateSEOMetadata("Cheek Fillers London | From £350 | Cosmedocs", "Premium cheek filler treatments London. 1ml vs 2ml cheek fillers, before & after results. Cheekbone enhancement by Dr. Ahmed Haq, Harley Street.", "/cheek-filler");
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
    src: "/lovable-uploads/95608275-de36-4458-901d-2cc2ce2136de.png",
    alt: "Cheek enhancement dermal filler before after London Cosmedocs treatment",
    caption: "Sculpted cheekbones and lifted midface with strategic filler placement"
  }, {
    src: "/lovable-uploads/4bb9f7fc-8d28-4ce9-b09e-7ee91adbe38c.png",
    alt: "Cheek filler before after London Harley Street feminine enhancement",
    caption: "Feminine cheek enhancement creating beautiful fullness and soft contours"
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
    answer: "At Cosmedocs Harley Street, cheek filler cost starts from £350 for 1ml cheek filler. 2ml cheek filler costs £650 and 3ml costs £950. Cheekbone filler cost varies based on volume needed. Our transparent cheek fillers cost includes consultation and aftercare."
  }, {
    question: "How long do cheek fillers take to settle?",
    answer: "How long do cheek fillers take to settle varies by individual. Initial swelling subsides within 48-72 hours, but complete settlement takes 2-3 weeks. Cheek filler aftercare helps optimize settling and final results."
  }, {
    question: "What's the best filler for cheeks and cheekbones?",
    answer: "The best filler for cheeks depends on your goals. We use premium dermal fillers for cheek enhancement from Swiss, USA, and French manufacturers. The best filler for cheekbones provides structure while maintaining natural movement."
  }, {
    question: "1ml vs 2ml cheek filler - which is right for me?",
    answer: "1ml vs 2ml cheek filler depends on your anatomy and goals. 1ml cheek filler before and after shows subtle enhancement. 2ml cheek filler before and after demonstrates more dramatic cheekbone definition. Consultation determines optimal volume."
  }, {
    question: "Do you offer cheek filler for men?",
    answer: "Yes, we specialize in cheek filler man treatments. Men cheek filler requires different techniques to maintain masculine features while enhancing cheekbone structure. Our male cheek enhancement creates natural, masculine definition."
  }, {
    question: "What about apple cheek filler and mid face treatments?",
    answer: (
      <span>
        Apple cheek filler targets the anterior cheek for youthful plumpness. Mid face fillers address broader volume loss. Mid cheek filler can lift{" "}
        <Link to="/jawline-filler" className="text-purple-400 hover:text-purple-300 underline transition-colors">jowls</Link>
        {" "}while apple cheek fillers create that youthful 'apple' shape in the cheeks.
      </span>
    )
  }, {
    question: "Can cheek filler help lift jowls?",
    answer: "Yes, strategic filler in cheeks to lift jowls works by restoring midface volume. Cheek filler to lift jowls creates an overall lifting effect. This cheek lift filler technique addresses multiple areas simultaneously."
  }, {
    question: "How much filler do I need - 3ml or 4ml cheek filler?",
    answer: "3ml cheek filler before and after shows significant enhancement for moderate volume loss. 4ml cheek filler is typically for extensive restoration. Most patients achieve excellent results with 1-2ml per side."
  }];

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
          "@type": "MedicalClinic",
          "name": "Cosmedocs - Cheek Fillers London",
          "description": "Premium cheek filler treatments for lifted and defined cheeks in London's Harley Street",
          "url": "https://cosmedocs.com/cheek-filler",
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
          "priceRange": "£350-£950",
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "09:00",
              "closes": "18:00"
            }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "178"
          },
          "availableService": {
            "@type": "MedicalProcedure",
            "name": "Cheek Filler Treatment"
          }
        })}
        </script>

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://cosmedocs.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Treatments",
                "item": "https://cosmedocs.com/treatments"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Cheek Fillers",
                "item": "https://cosmedocs.com/cheek-filler"
              }
            ]
          })}
        </script>

        {/* Medical Procedure Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "Cheek Filler Treatment",
            "description": "Non-surgical cheek enhancement using premium hyaluronic acid dermal fillers to restore volume and define cheekbones",
            "procedureType": "Cosmetic",
            "bodyLocation": "Cheeks and midface",
            "preparation": "Consultation and facial analysis, topical anaesthetic applied",
            "followup": "Follow-up at 2 weeks, results last 15-18 months",
            "howPerformed": "Strategic injection of hyaluronic acid filler using microcannula or needle technique"
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.filter(faq => typeof faq.answer === 'string').map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>

        {/* Article Schema for E-A-T */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "Cheek Fillers London - Expert Guide",
            "description": "Comprehensive guide to cheek filler treatments in London",
            "datePublished": "2024-01-15",
            "dateModified": "2025-01-31",
            "author": {
              "@type": "Person",
              "name": "Dr. Ahmed Haq",
              "jobTitle": "Aesthetic Medicine Specialist",
              "url": "https://cosmedocs.com/team/dr-ahmed-haq"
            },
            "reviewedBy": {
              "@type": "Person",
              "name": "Dr. Ahmed Haq"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Cosmedocs",
              "url": "https://cosmedocs.com"
            }
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
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
                  Expert Cheek Fillers London
                </h1>
                <p className="text-lg text-gray-300 mb-8">
                  Dermal fillers cheekbones | 1ml vs 2ml cheek filler before and after
                </p>
                <p className="text-xl text-gray-200 mb-8 max-w-xl">
                  <span className="text-purple-300 font-semibold">Invisible Art</span>
                  <br />
                  Transformation that speaks without saying a word
                </p>
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
                    onClick={() => {
                      const pricingSection = document.getElementById('pricing-section');
                      pricingSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
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
              <h2 className="text-3xl font-bold mb-8 text-white">Cheek Filler Treatment</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Precise Volume</h3>
                <p className="text-gray-300">Restoration and cheekbone definition</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Immediate Enhancement</h3>
                <p className="text-gray-300">With minimal downtime</p>
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
                <h3 className="text-lg font-semibold text-white mb-2">Treatment Duration</h3>
                <p className="text-gray-300">30-45 minutes including consultation</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
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
                transition={{ duration: 0.5, delay: 0.5 }}
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


        {/* What Are Cheek Fillers Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Understanding Cheek Fillers: Purpose and Benefits</h2>
              <p className="text-gray-300 max-w-3xl mx-auto mb-8">
                Cheek fillers are advanced dermal filler treatments using hyaluronic acid to restore volume, 
                enhance contours, and rejuvenate the midface area. This non-surgical procedure creates natural-looking 
                enhancement whilst addressing multiple aesthetic concerns.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 text-white h-full hover:bg-white/10 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <CheckCircle className="text-purple-300" size={20} />
                      Volume Loss Correction
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      Restore lost volume in the cheeks that naturally diminishes with age, recreating youthful 
                      fullness and healthy facial contours.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 text-white h-full hover:bg-white/10 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <CheckCircle className="text-purple-300" size={20} />
                      Cheekbone Definition
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      Enhance and sculpt cheekbones for more prominent, defined facial structure whilst maintaining 
                      natural movement and expression.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 text-white h-full hover:bg-white/10 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <CheckCircle className="text-purple-300" size={20} />
                      Midface Lifting
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      Create a lifting effect that reduces the appearance of sagging and provides overall facial 
                      rejuvenation without surgery.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 text-white h-full hover:bg-white/10 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <CheckCircle className="text-purple-300" size={20} />
                      Facial Symmetry
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      Balance asymmetrical features and create harmonious facial proportions through strategic 
                      filler placement.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 text-white h-full hover:bg-white/10 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <CheckCircle className="text-purple-300" size={20} />
                      Hollowing Reduction
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      Address hollow or sunken cheeks that create a tired appearance, restoring a refreshed and 
                      healthy look.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 text-white h-full hover:bg-white/10 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <CheckCircle className="text-purple-300" size={20} />
                      Youthful Contours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      Recreate the high, full cheeks associated with youth, reversing age-related volume depletion 
                      for a naturally refreshed appearance.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-12 max-w-4xl mx-auto"
            >
              <p className="text-gray-300 text-lg">
                Using premium hyaluronic acid dermal fillers, our expert practitioners create bespoke treatment 
                plans that enhance your natural beauty whilst maintaining facial harmony. Results are immediate, 
                natural-looking, and can last 15-18 months.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 1ml & 2ml Cheek Filler Section */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">1ml & 2ml Cheek Filler Before And After</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                If it is the 'natural look' you are looking for then 1 ml of facial filler can help you achieve that. Similarly, below, 1ml cheek filler before and after clearly shows gradual and natural cheek augmentation. Research shows that{" "}
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/23135650/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 underline transition-colors"
                >
                  cheek augmentation significantly improves facial attractiveness perception
                </a>. The filler amount depends on your facial structure and aesthetic goals.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-2xl font-bold text-white mb-6">1ml Cheek Filler Before & After</h3>
                <div className="mb-6 relative">
                  <img 
                    src={oneMLImage}
                    alt="1ml cheek filler before and after London natural enhancement Cosmedocs"
                    width="500"
                    height="300"
                    loading="lazy"
                    className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                  />
                  <div className="absolute top-2 left-2 bg-black/80 text-white px-3 py-1 rounded text-sm font-semibold">
                    BEFORE & AFTER
                  </div>
                </div>
                <p className="text-gray-300">
                  Cheek filler treatment can create a noticeable difference in the face and provide a refreshing and youthful look to men and women of any age.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-2xl font-bold text-white mb-6">2ml Cheek Filler Before & After</h3>
                <div className="mb-6 relative">
                  <img 
                    src={twoMLImage}
                    alt="2ml cheek filler before and after dramatic cheekbone definition London"
                    width="500"
                    height="300"
                    loading="lazy"
                    className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                  />
                  <div className="absolute top-2 left-2 bg-black/80 text-white px-3 py-1 rounded text-sm font-semibold">
                    BEFORE & AFTER
                  </div>
                </div>
                <p className="text-gray-300">
                  From correcting volume loss to a visible cheek lift to reducing sagging jowls, cheek filler is an ideal approach.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3ml & 4ml Cheek Filler - Men Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">3ml & 4ml Cheek Fillers For Men</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Masculine cheek enhancement with higher volumes. Before and after results showing how 3ml and 4ml create strong, defined masculine features.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-2xl font-bold text-white mb-6">3ml Cheek Filler Men Before & After</h3>
                <div className="mb-6 relative">
                  <img 
                    src="/lovable-uploads/1e8bac0a-c2b4-4629-b56e-cce71b126dfe.png"
                    alt="3ml male cheek filler before and after volume loss correction London"
                    width="500"
                    height="300"
                    loading="lazy"
                    className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                  />
                  <div className="absolute top-2 left-2 bg-black/80 text-white px-3 py-1 rounded text-sm font-semibold">
                    BEFORE & AFTER
                  </div>
                  <div className="absolute bottom-2 right-2 bg-purple-600/90 text-white px-3 py-1 rounded text-sm font-semibold">
                    3ML VOLUME RESTORATION
                  </div>
                </div>
                <div className="text-left max-w-md mx-auto">
                  <p className="text-gray-300 mb-4">
                    <strong className="text-white">Before:</strong> Cheek volume loss, lacking midface definition.
                  </p>
                  <p className="text-gray-300">
                    <strong className="text-white">After:</strong> Transformation with 3ml cheek filler, enhancing symmetry and rejuvenating facial profile.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-2xl font-bold text-white mb-6">4ml Cheek Filler Men Before & After</h3>
                <div className="mb-6 relative">
                  <img 
                    src={menCheekImage}
                    alt="4ml male cheek filler before and after dramatic masculine transformation London"
                    width="500"
                    height="300"
                    loading="lazy"
                    className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                  />
                  <div className="absolute top-2 left-2 bg-black/80 text-white px-3 py-1 rounded text-sm font-semibold">
                    BEFORE & AFTER
                  </div>
                  <div className="absolute bottom-2 right-2 bg-purple-600/90 text-white px-3 py-1 rounded text-sm font-semibold">
                    4ML MAXIMUM ENHANCEMENT
                  </div>
                </div>
                <p className="text-gray-300">
                  This patient came for cheek filler men and was treated with 4 ml cheek filler to add cheek volume to his hollow cheeks and correct lateral volume loss.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center bg-gray-900 rounded-lg p-8"
            >
              <h3 className="text-xl font-bold text-white mb-4">Men's Cheek Enhancement Specialist</h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                <Link to="/team/dr-ahmed-haq" className="text-purple-400 hover:text-purple-300 underline transition-colors">Dr. Ahmed Haq</Link> specializes in masculine cheek enhancement, understanding the anatomical differences that create strong, defined masculine features while maintaining natural movement and expression.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Aftercare & Treatment Video Section */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Treatment Process & Aftercare</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Watch our expert technique and learn how to care for your cheek fillers for optimal results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Aftercare Column */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Comprehensive Aftercare Guide</h3>
                
                <div className="space-y-4">
                  <div className="bg-gray-900 rounded-lg p-6">
                    <h4 className="font-semibold text-purple-300 mb-3 flex items-center gap-2">
                      <Clock size={20} />
                      First 24 Hours
                    </h4>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li>• Avoid touching or massaging the treated area</li>
                      <li>• No strenuous exercise or activities</li>
                      <li>• Sleep with head elevated to reduce swelling</li>
                      <li>• Avoid excessive heat (saunas, hot baths)</li>
                      <li>• No alcohol consumption</li>
                    </ul>
                  </div>

                  <div className="bg-gray-900 rounded-lg p-6">
                    <h4 className="font-semibold text-purple-300 mb-3 flex items-center gap-2">
                      <Calendar size={20} />
                      First Week
                    </h4>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li>• Minor swelling and bruising are normal</li>
                      <li>• Apply cold compress if needed (wrapped in cloth)</li>
                      <li>• Avoid dental treatments or facial treatments</li>
                      <li>• Stay hydrated to support hyaluronic acid integration</li>
                      <li>• Avoid sleeping on your face</li>
                    </ul>
                  </div>

                  <div className="bg-gray-900 rounded-lg p-6">
                    <h4 className="font-semibold text-purple-300 mb-3 flex items-center gap-2">
                      <Shield size={20} />
                      Long-Term Care
                    </h4>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li>• Results settle completely within 2-3 weeks</li>
                      <li>• Use SPF 30+ daily to protect treatment area</li>
                      <li>• Maintain good skincare routine</li>
                      <li>• Stay well-hydrated for optimal filler longevity</li>
                      <li>• Schedule follow-up at 2 weeks if needed</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Treatment Video Column */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6 flex flex-col items-center"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Watch Our Expert Technique</h3>
                
                {cheekFillerVideos.length > 0 ? (
                  <div className="space-y-6 flex flex-col items-center w-full max-w-md">
                    {cheekFillerVideos.slice(0, 3).map((video, index) => (
                      <motion.div
                        key={video.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="w-full"
                      >
                        <TreatmentVideoPlayer video={video} />
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-gray-900 rounded-lg p-8 text-center">
                    <Play className="mx-auto mb-4 text-purple-300" size={48} />
                    <p className="text-gray-300">Treatment videos coming soon</p>
                  </div>
                )}
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
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Cheek Filler Cost London | 1ml vs 2ml Cheek Filler</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Transparent cheek filler cost for 1ml cheek filler and 2ml cheek filler treatments. Best filler for cheeks 
                and cheekbones at our Harley Street clinic. All treatments include consultation, aftercare, and follow-up support.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl mb-2">1ml Cheek Filler</CardTitle>
                    <div className="text-3xl font-bold text-purple-300">£350</div>
                    <p className="text-gray-300 text-sm">Subtle enhancement</p>
                  </CardHeader>
                  <CardContent className="text-center">
                    <ul className="space-y-2 text-sm text-gray-300 mb-6">
                      <li>• Perfect for first-time patients</li>
                      <li>• Subtle volume restoration</li>
                      <li>• Natural-looking results</li>
                      <li>• 15-18 month duration</li>
                    </ul>
                    <Button 
                      className="w-full bg-purple-600 hover:bg-purple-700"
                      onClick={() => window.open(bookingUrl, '_blank')}
                    >
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-purple-600/20 border-purple-500/50 text-white relative overflow-hidden">
                  <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-xs">
                    Most Popular
                  </div>
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl mb-2">2ml Cheek Filler</CardTitle>
                    <div className="text-3xl font-bold text-purple-300">£650</div>
                    <p className="text-gray-300 text-sm">Optimal enhancement</p>
                  </CardHeader>
                  <CardContent className="text-center">
                    <ul className="space-y-2 text-sm text-gray-300 mb-6">
                      <li>• Noticeable definition & lift</li>
                      <li>• Ideal for volume restoration</li>
                      <li>• Enhanced cheekbone structure</li>
                      <li>• Long-lasting results</li>
                    </ul>
                    <Button 
                      className="w-full bg-white text-black hover:bg-gray-200"
                      onClick={() => window.open(bookingUrl, '_blank')}
                    >
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl mb-2">3ml Cheek Filler</CardTitle>
                    <div className="text-3xl font-bold text-purple-300">£950</div>
                    <p className="text-gray-300 text-sm">Maximum transformation</p>
                  </CardHeader>
                  <CardContent className="text-center">
                    <ul className="space-y-2 text-sm text-gray-300 mb-6">
                      <li>• Dramatic enhancement</li>
                      <li>• Significant volume restoration</li>
                      <li>• Complete facial rebalancing</li>
                      <li>• Premium filler placement</li>
                    </ul>
                    <Button 
                      className="w-full bg-purple-600 hover:bg-purple-700"
                      onClick={() => window.open(bookingUrl, '_blank')}
                    >
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-300 mb-6">
                All prices include consultation, treatment, premium dermal fillers, and comprehensive aftercare support.
              </p>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-black"
                onClick={() => window.open(bookingUrl, '_blank')}
              >
                Book Free Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* Volume Comparison Table */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Cheek Filler Volume Comparison Guide</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Understanding the differences between filler volumes helps you make an informed decision about your treatment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto overflow-x-auto"
            >
              <table className="w-full border-collapse bg-gray-900/50 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-purple-600/20 border-b border-purple-500/30">
                    <th className="p-4 text-left text-white font-semibold">Feature</th>
                    <th className="p-4 text-center text-white font-semibold">1ml</th>
                    <th className="p-4 text-center text-white font-semibold">2ml</th>
                    <th className="p-4 text-center text-white font-semibold">3ml</th>
                    <th className="p-4 text-center text-white font-semibold">4ml</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-800">
                    <td className="p-4 font-medium text-white">Best For</td>
                    <td className="p-4 text-center text-sm">First-time patients, subtle enhancement</td>
                    <td className="p-4 text-center text-sm">Moderate volume loss, visible lift</td>
                    <td className="p-4 text-center text-sm">Significant restoration, male patients</td>
                    <td className="p-4 text-center text-sm">Extensive volume loss, dramatic change</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="p-4 font-medium text-white">Enhancement Level</td>
                    <td className="p-4 text-center">
                      <span className="inline-block px-3 py-1 bg-purple-900/30 rounded-full text-sm">Subtle</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="inline-block px-3 py-1 bg-purple-600/30 rounded-full text-sm">Moderate</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="inline-block px-3 py-1 bg-purple-500/40 rounded-full text-sm">Noticeable</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="inline-block px-3 py-1 bg-purple-400/50 rounded-full text-sm">Dramatic</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="p-4 font-medium text-white">Price</td>
                    <td className="p-4 text-center text-purple-300 font-bold">£350</td>
                    <td className="p-4 text-center text-purple-300 font-bold">£650</td>
                    <td className="p-4 text-center text-purple-300 font-bold">£950</td>
                    <td className="p-4 text-center text-purple-300 font-bold">£1,200</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="p-4 font-medium text-white">Treatment Time</td>
                    <td className="p-4 text-center text-sm">20-25 mins</td>
                    <td className="p-4 text-center text-sm">25-30 mins</td>
                    <td className="p-4 text-center text-sm">30-40 mins</td>
                    <td className="p-4 text-center text-sm">40-45 mins</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="p-4 font-medium text-white">Recovery Time</td>
                    <td className="p-4 text-center text-sm">24-48 hours</td>
                    <td className="p-4 text-center text-sm">48-72 hours</td>
                    <td className="p-4 text-center text-sm">3-5 days</td>
                    <td className="p-4 text-center text-sm">5-7 days</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="p-4 font-medium text-white">Results Duration</td>
                    <td className="p-4 text-center text-sm">15-18 months</td>
                    <td className="p-4 text-center text-sm">15-18 months</td>
                    <td className="p-4 text-center text-sm">18-24 months</td>
                    <td className="p-4 text-center text-sm">18-24 months</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-white">Ideal Candidates</td>
                    <td className="p-4 text-center text-sm">Age 25-40, minor hollowing</td>
                    <td className="p-4 text-center text-sm">Age 35-50, visible volume loss</td>
                    <td className="p-4 text-center text-sm">Age 45+, men, significant loss</td>
                    <td className="p-4 text-center text-sm">Advanced ageing, full restoration</td>
                  </tr>
                </tbody>
              </table>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
                During your consultation, our expert practitioners will assess your facial anatomy and aesthetic goals 
                to recommend the optimal volume for natural, balanced results.
              </p>
              <Button 
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3"
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
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Common questions about cheek filler treatments answered by our medical experts.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <AccordionItem 
                      value={`item-${index}`} 
                      className="bg-white/5 border-white/10 rounded-lg px-6 hover:bg-white/10 transition-colors"
                    >
                      <AccordionTrigger className="text-left text-white hover:no-underline py-6">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300 pb-6">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>

            <div className="text-center mt-12">
              <Button 
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3"
                onClick={() => window.open(bookingUrl, '_blank')}
              >
                Book Your Consultation
              </Button>
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
              <h2 className="text-3xl font-bold mb-4">Ready for Beautiful, Natural Cheeks?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert cosmetic doctors and discover how cheek fillers 
                can enhance your natural beauty with subtle, sophisticated results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6"
                  onClick={() => window.open(bookingUrl, '_blank')}
                >
                  Book Free Consultation
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6"
                  onClick={() => window.open('tel:03330551503', '_self')}
                >
                  Call 0333 0551 503
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Client Reviews */}
        <ClientReviews />

        {/* Hidden SEO Content */}
        <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
          <h2>Comprehensive Cheek Filler Information</h2>
          <p>Cheek fillers represent one of the most transformative non-surgical aesthetic treatments available in London's Harley Street. Our expert practitioners utilize advanced dermal filler technology to restore volume, enhance contours, and create natural-looking facial rejuvenation that speaks volumes about our commitment to aesthetic excellence.</p>
          
          <h2>Understanding Facial Volume Loss</h2>
          <p>Natural aging processes lead to gradual volume loss in the midface region, particularly affecting the cheek area where subcutaneous fat pads diminish over time. This volume depletion results in flattened cheeks, loss of cheekbone definition, and the appearance of <a href="/nasolabial-folds" className="text-purple-400 hover:text-purple-300 underline">nasolabial folds</a>. Professional cheek enhancement treatments address these concerns by strategically restoring volume using premium hyaluronic acid-based dermal fillers.</p>
          
          <h2>Advanced Injection Techniques</h2>
          <p>Our Harley Street clinic employs both microcannula and precision needle techniques for cheek filler placement. The microcannula method minimizes bruising and discomfort while allowing for smooth, even distribution of filler material. Strategic injection points target specific anatomical landmarks including the zygomatic arch, malar eminence, and submalar region to achieve optimal lifting and contouring effects.</p>
          
          <h2>Premium Dermal Filler Selection</h2>
          <p>We exclusively utilize premium dermal fillers from renowned Swiss, American, and French manufacturers, ensuring the highest quality and safety standards. These advanced formulations contain lidocaine for patient comfort and are specifically designed for midface enhancement, providing natural-looking results with excellent longevity of 15-18 months.</p>
          
          <h2>Personalized Treatment Planning</h2>
          <p>Each cheek enhancement treatment begins with comprehensive facial analysis to determine the optimal approach for your unique facial structure. Our practitioners assess bone structure, soft tissue characteristics, and aesthetic goals to create a personalized treatment plan that enhances your natural beauty while maintaining facial harmony and proportion.</p>
          
          <h2>Safety and Aftercare Excellence</h2>
          <p>Patient safety is our highest priority. We exclusively use premium dermal fillers from reputable Swiss, USA, and French manufacturers. All treatments are performed in our fully regulated Harley Street clinic by Dr. Ahmed Haq, ensuring the highest standards of safety and efficacy. Our comprehensive consultation process includes detailed medical history assessment and realistic expectation setting.</p>
          
          <h2>Aftercare and Results</h2>
          <p>Cheek filler results are visible immediately, with final results apparent within two weeks as any minor swelling subsides. The enhancement typically lasts 15-18 months, depending on individual factors such as metabolism, lifestyle, and the specific filler used. We provide comprehensive aftercare instructions to optimize your results and minimize any potential side effects.</p>
          
          <p>The treatment involves minimal discomfort, with topical numbing cream applied before the procedure and lidocaine-containing fillers for additional comfort. Most patients return to work immediately after treatment, with any minor swelling or bruising typically resolving within 24-48 hours.</p>
          
          <h2>1ml vs 2ml Cheek Filler: Volume and Results Comparison</h2>
          <p>Understanding the difference between 1ml cheek filler and 2ml cheek filler is crucial for achieving optimal results. 1ml cheek filler before and after results show subtle enhancement perfect for first-time patients or minor volume loss. 2ml cheek filler before and after demonstrates more dramatic transformation with significant cheekbone definition. For extensive volume restoration, 3ml cheek filler before and after or even 4ml cheek filler may be recommended. The choice between 1ml vs 2ml cheek filler depends on your natural anatomy, desired results, and practitioner recommendations.</p>
          
          <h2>Apple Cheek Filler and Mid Face Enhancement</h2>
          <p>Apple cheek filler targets the anterior cheek region for youthful plumpness, while mid face fillers address broader facial volume loss. Mid cheek filler placement focuses on the central facial region, creating lift that can reduce jowls and nasolabial folds. These techniques work synergistically with cheekbone fillers to create comprehensive facial rejuvenation.</p>
          
          <h2>Male Cheek Enhancement and Masculine Contouring</h2>
          <p>Cheek filler man treatments require specialized technique to maintain masculine facial characteristics. Men cheek filler focuses on creating angular definition rather than soft curves. Our practitioners understand the anatomical differences in male facial structure, ensuring natural-looking enhancement that preserves masculinity while addressing volume loss and creating more defined cheekbones filler results.</p>
          
          <h2>Cheek Filler Placement and Marking Techniques</h2>
          <p>Precise cheek filler placement is essential for optimal results. Cheek filler markings guide injection points to ensure symmetrical enhancement. Our practitioners use anatomical landmarks to determine ideal cheek filler placement, considering factors like bone structure, existing volume, and desired outcome. Proper marking ensures consistent, natural-looking results across all cheek filler treatments.</p>
          
          <h2>Aftercare and Settlement Timeline</h2>
          <p>Patients often ask how long do cheek fillers take to settle. Initial swelling subsides within 48-72 hours, but complete settlement occurs over 2-3 weeks. Cheek filler aftercare includes avoiding excessive heat, massage, and strenuous exercise for 24-48 hours. Following proper aftercare protocols ensures optimal healing and longevity of results.</p>
          
          <h2>Advanced Techniques: Cheek Lift and Jowl Improvement</h2>
          <p>Strategic filler in cheeks to lift jowls represents an advanced application of cheek enhancement. By restoring midface volume, cheek filler to lift jowls creates an overall lifting effect that improves lower facial contours. This technique demonstrates how comprehensive cheek lift filler treatments can address multiple facial concerns simultaneously.</p>
          
          <h2>London Cheek Filler Services</h2>
          <p>Our cheek fillers London clinic on Harley Street offers comprehensive cheek enhancement services. Cheek filler London treatments utilize the best filler for cheeks and cheekbones, ensuring premium results. As a leading cheek filler London provider, we maintain the highest standards of safety and aesthetic excellence. Our Harley Street location provides convenient access to world-class cheek fillers London treatments.</p>
          
          <h2>Cost Considerations and Treatment Value</h2>
          <p>Cheekbone filler cost varies based on volume required and complexity of treatment. Cheek fillers cost reflects the premium products used and expertise provided. Our transparent pricing ensures patients understand cheek filler cost before treatment. The investment in quality dermal filler cheeks treatment provides long-lasting results with excellent value compared to surgical alternatives.</p>
        </div>
      </div>
    </>
  );
};

export default CheekFiller;