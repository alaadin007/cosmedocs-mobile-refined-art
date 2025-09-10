import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram, Clock, Zap, Shield, Calendar, Heart, Award, Activity, Syringe, GraduationCap, CheckCircle, Palette, Play } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import TreatmentVideoPlayer from "@/components/TreatmentVideoPlayer";
import { useState, useEffect } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronDown, ChevronUp } from "lucide-react";
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
  const seoData = generateSEOMetadata("Cheek Fillers London | 1ml & 2ml Dermal Fillers | Before & After | From £350", "Premium cheek filler treatments London. 1ml vs 2ml cheek fillers, before and after results. Dermal fillers cheekbones enhancement by Dr. Ahmed Haq, Harley Street.", "/cheek-filler");
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
    answer: "Apple cheek filler targets the anterior cheek for youthful plumpness. Mid face fillers address broader volume loss. Mid cheek filler can lift jowls while apple cheek fillers create that youthful 'apple' shape in the cheeks."
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
                  Expert Cheek Fillers
                  <span className="block text-purple-300">London</span>
                  <span className="block text-sm mt-4">Dermal fillers cheekbones | 1ml vs 2ml cheek filler before and after</span>
                </h1>
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
              <h2 className="text-3xl font-bold mb-4">Cheek Filler Before and After Results | 1ml vs 2ml</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Explore authentic 1ml cheek filler before and after and 2ml cheek filler before and after results from our Harley Street clinic. 
                Our premium dermal fillers for cheek enhancement create natural cheekbone fillers before and after transformations.
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

        {/* Cheekbone Dermal Filler Section */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Cheekbone Dermal Filler</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Understanding the science and artistry behind natural cheek enhancement at our Harley Street clinic.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-lg p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4">Facial Anatomy</h3>
                <p className="text-gray-300 mb-4">
                  The cheek area consists of multiple fat compartments that naturally lose volume with age. 
                  Our expert practitioners understand the complex anatomy of the zygomatic arch, malar eminence, 
                  and submalar regions.
                </p>
                <div className="text-purple-300">
                  <CheckCircle className="inline mr-2" size={16} />
                  <span className="text-sm">3D facial analysis</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-lg p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4">Injection Techniques</h3>
                <p className="text-gray-300 mb-4">
                  We employ advanced microcannula and needle techniques for precise filler placement. 
                  The cannula method reduces bruising and allows for smooth, even distribution of dermal filler.
                </p>
                <div className="text-purple-300">
                  <CheckCircle className="inline mr-2" size={16} />
                  <span className="text-sm">Minimal discomfort</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-lg p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4">Premium Fillers</h3>
                <p className="text-gray-300 mb-4">
                  We exclusively use premium hyaluronic acid fillers from leading Swiss, American, 
                  and French manufacturers. These advanced formulations provide natural results lasting 15-18 months.
                </p>
                <div className="text-purple-300">
                  <CheckCircle className="inline mr-2" size={16} />
                  <span className="text-sm">FDA approved products</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-lg p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4">Natural Results</h3>
                <p className="text-gray-300 mb-4">
                  Our "invisible art" philosophy ensures enhancement that looks completely natural. 
                  Results are visible immediately with final outcome apparent within two weeks.
                </p>
                <div className="text-purple-300">
                  <CheckCircle className="inline mr-2" size={16} />
                  <span className="text-sm">Immediate results</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-lg p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4">Safety Protocol</h3>
                <p className="text-gray-300 mb-4">
                  All treatments follow strict safety protocols with comprehensive medical history assessment. 
                  Our clinic maintains full CQC regulation compliance.
                </p>
                <div className="text-purple-300">
                  <CheckCircle className="inline mr-2" size={16} />
                  <span className="text-sm">CQC regulated clinic</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-lg p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4">Aftercare Excellence</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive aftercare instructions and follow-up support ensure optimal healing. 
                  Most patients return to normal activities immediately.
                </p>
                <div className="text-purple-300">
                  <CheckCircle className="inline mr-2" size={16} />
                  <span className="text-sm">24/7 support available</span>
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

        {/* Treatment Videos Section */}
        {cheekFillerVideos.length > 0 && (
          <section className="py-20 bg-accent">
            <div className="page-container">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4 text-white">Treatment Videos</h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  Watch real cheek filler treatments performed by Dr. Ahmed Haq at our Harley Street clinic.
                </p>
              </motion.div>

              {/* Videos Section - Single Column Centered */}
              <div className="flex flex-col items-center space-y-8 max-w-4xl mx-auto">
                <div className="grid grid-cols-1 gap-6 w-full max-w-md">
                  {cheekFillerVideos.slice(0, 6).map((video, index) => (
                    <motion.div
                      key={video.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex justify-center"
                    >
                      <TreatmentVideoPlayer video={video} />
                    </motion.div>
                  ))}
                </div>

                {/* Description Section - Below Videos */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="space-y-6 text-center max-w-2xl"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">Expert Cheek Enhancement</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Our cheek filler treatments use advanced cannula techniques to create natural, 
                    lifted cheek contours. Dr. Ahmed Haq's precision approach ensures minimal 
                    discomfort and optimal results.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Watch how our expert injector strategically places premium dermal fillers 
                    to enhance volume, lift the midface, and create beautiful cheekbone definition 
                    that looks completely natural.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center space-x-3">
                      <CheckCircle className="text-purple-300" size={20} />
                      <span className="text-gray-300">Cannula technique for safety</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                      <CheckCircle className="text-purple-300" size={20} />
                      <span className="text-gray-300">Immediate visible results</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                      <CheckCircle className="text-purple-300" size={20} />
                      <span className="text-gray-300">15+ months duration</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        )}

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

        {/* Meet Dr Ahmed Haq */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Meet Dr. Ahmed Haq</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Leading aesthetic practitioner specializing in natural cheek enhancement at Harley Street, London.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">Expert Aesthetic Medicine</h3>
                  <p className="text-gray-300">
                    Dr. Ahmed Haq brings years of specialized experience in facial aesthetics to every cheek filler treatment. 
                    His expertise in facial anatomy and advanced injection techniques ensures safe, natural-looking results 
                    that enhance your unique beauty.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Advanced Techniques</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Microcannula and needle techniques</li>
                    <li>• Premium Swiss, USA & French dermal fillers</li>
                    <li>• 3D facial analysis and planning</li>
                    <li>• Minimal downtime protocols</li>
                  </ul>
                </div>

                <div className="flex items-center space-x-4">
                  <Button 
                    className="bg-white text-black hover:bg-gray-200"
                    onClick={() => window.open(bookingUrl, '_blank')}
                  >
                    Book Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-black"
                    onClick={() => window.open('https://instagram.com/cosmedocs', '_blank')}
                  >
                    <Instagram className="mr-2" size={16} />
                    Follow @cosmedocs
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-purple-600/20 rounded-2xl p-8 border border-purple-500/30">
                  <h4 className="text-xl font-bold text-white mb-4">Professional Credentials</h4>
                  <div className="space-y-3 text-gray-300">
                    <p>✓ GMC Registered Medical Practitioner</p>
                    <p>✓ Advanced Aesthetic Medicine Training</p>
                    <p>✓ Harley Street Clinic Director</p>
                    <p>✓ 1000+ Successful Treatments</p>
                    <p>✓ Patient Safety Certified</p>
                  </div>
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

        {/* Hidden SEO Content */}
        <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
          <h2>Comprehensive Cheek Filler Information</h2>
          <p>Cheek fillers represent one of the most transformative non-surgical aesthetic treatments available in London's Harley Street. Our expert practitioners utilize advanced dermal filler technology to restore volume, enhance contours, and create natural-looking facial rejuvenation that speaks volumes about our commitment to aesthetic excellence.</p>
          
          <h2>Understanding Facial Volume Loss</h2>
          <p>Natural aging processes lead to gradual volume loss in the midface region, particularly affecting the cheek area where subcutaneous fat pads diminish over time. This volume depletion results in flattened cheeks, loss of cheekbone definition, and the appearance of nasolabial folds. Professional cheek enhancement treatments address these concerns by strategically restoring volume using premium hyaluronic acid-based dermal fillers.</p>
          
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