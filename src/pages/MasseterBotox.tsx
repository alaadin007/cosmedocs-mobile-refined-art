import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { generateSEOMetadata } from "@/utils/seo";
import { Clock, Zap, Users, Shield, ChevronLeft, ChevronRight, CheckCircle, Award, GraduationCap, Palette, Heart, Calendar, Activity, Syringe, AlertCircle, Sparkles } from "lucide-react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ClientReviews from '@/components/ClientReviews';

const MasseterBotox = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openImageModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
    setSelectedImageIndex(null);
  };

  const goToNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % beforeAfterImages.length);
    }
  };

  const goToPrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === 0 ? beforeAfterImages.length - 1 : selectedImageIndex - 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      goToPrevious();
    } else if (e.key === "ArrowRight") {
      goToNext();
    } else if (e.key === "Escape") {
      closeImageModal();
    }
  };
  const seoData = generateSEOMetadata(
    "Masseter Botox London | Jaw Slimming & Bruxism Treatment | Cosmedocs Harley Street",
    "Expert Masseter Botox for jaw slimming & bruxism treatment. Reduce jaw muscle size & relieve teeth grinding. £350 both sides. Book consultation at Harley Street clinic.",
    "/masseter-botox"
  );

  const beforeAfterImages = [
    { src: "/lovable-uploads/387f8164-1ea6-491f-8553-3effea5fd956.png", alt: "Masseter Botox comprehensive results gallery", caption: "Remarkable result post masseter muscle reduction • Masseter Botox reduces muscle size • Jaw contouring before and after • Subtle jaw slimming impact of one session" },
    { src: "/lovable-uploads/a1d2708c-a7cd-49c2-b531-aabf0b52b8b5.png", alt: "Masseter Botox transformation showcase", caption: "Jawline transformation from square to oval face shape • Shoulder muscle reduction for oro-facial neck pain • Botox jawline for facial slimming • Complete transformation results" },
    { src: "/lovable-uploads/8f820207-ab70-4e87-8092-eb39e3eda82d.png", alt: "Masseter Botox before and after showing facial slimming results", caption: "Dramatic facial slimming and jaw contouring with masseter muscle reduction" },
    { src: "/lovable-uploads/0f53b9e7-85da-4c39-98c4-b5e3d8023764.png", alt: "Jawline slimming before and after masseter Botox treatment", caption: "Enhanced jawline definition and facial balance after masseter treatment" },
    { src: "/lovable-uploads/59c20a72-3b99-454f-9b1a-478326a8856a.png", alt: "Male masseter Botox before and after jaw reduction", caption: "Male jaw slimming results showing refined masculine facial contours" },
    { src: "/lovable-uploads/16101df9-2d69-49bd-90d1-4d2e313a6c42.png", alt: "Jaw angle reduction before and after masseter Botox", caption: "Precise jaw angle refinement creating softer facial profile" },
    { src: "/lovable-uploads/5f942469-fc79-4e02-adc3-87bd12a6076b.png", alt: "Jawline contouring before and after with masseter Botox", caption: "Natural jawline contouring achieving elegant facial proportions" },
    { src: "/lovable-uploads/feb85f00-5226-47ab-8f5a-26c9f27c9e9c.png", alt: "Masseter Botox progression 2018 to 2019", caption: "Long-term results showing sustained jaw slimming over time" }
  ];

  const treatmentBenefits = [
    {
      icon: Zap,
      title: "Quick Results",
      description: "Visible jaw slimming within 1-2 weeks, lasting 4-6 months"
    },
    {
      icon: Shield,
      title: "Medical Relief",
      description: "Effective treatment for bruxism, TMJ, and jaw pain relief"
    },
    {
      icon: Users,
      title: "Dual Benefits",
      description: "Cosmetic jaw slimming with medical teeth grinding treatment"
    },
    {
      icon: Clock,
      title: "Minimal Downtime",
      description: "15-20 minute procedure with immediate return to activities"
    }
  ];

  const faqs = [
    {
      question: "How long does masseter botox last?",
      answer: "How long does masseter botox last depends on individual factors, but typically botox into masseter muscles lasts 3-4 months. How long do masseter botox last varies by muscle size – larger masseter muscles often need three sessions in the first year, two in the second, and fewer afterwards for maintenance. How long does masseter botox take to work? Results appear within 1-2 weeks. CosmeDocs experts recommend maintenance treatments 2-3 times a year for sustained jaw slimming and relief from teeth grinding."
    },
    {
      question: "What are masseter botox side effects?",
      answer: "Masseter botox side effects are generally minimal when performed by experienced doctors. Common masseter botox aftercare concerns include slight pain, minor bruising, redness, or swelling at injection site. Some patients experience temporary muscle weakness during chewing. Serious side effects are rare – the risk of complications like crooked smile is less than 0.5%. Proper masseter botox aftercare includes avoiding strenuous exercise for 24 hours and following all post-treatment guidelines."
    },
    {
      question: "Am I the right candidate for jaw reduction Botox?",
      answer: "Ideal candidates include those with masseter hypertrophy from nighttime teeth grinding or excessive gum chewing, leading to an enlarged masseter muscle and squarish jawline. You may benefit if you desire jawline slimming, want to reduce jaw pain and tension, need masseter botox for TMJ symptoms, want a symmetrical jawline, or suffer from frequent migraine and tension headaches. Masseter botox jowls improvement can also be achieved through strategic treatment placement."
    },
    {
      question: "Does Jawline Botox Hurt?",
      answer: "Botox in masseter is not painful for most patients. At CosmeDocs, we use skin-numbing agents before injecting Botox to avoid discomfort. We use very tiny needles during the procedure to minimize any painful experience. Many patients report a mere pinch during injections and slight soreness immediately after, which usually subsides with or without icing."
    },
    {
      question: "What if I do not like the results?",
      answer: "Masseter Botox naturally wears off within 4-6 months. If you're not satisfied, your jawline will gradually return to its previous shape. Although there's no instant reversal, our experienced staff at CosmeDocs London can confidently guide you. We use a safe and effective approach, but remember it's temporary. We advise waiting and assessing your feelings before considering additional treatments."
    },
    {
      question: "Will I have problems speaking and chewing after jaw botox injections?",
      answer: "No. The non-surgical jaw reduction partially relaxes your masseter muscles, causing them to be less active. Your bulky chewing muscle shrinks in just a few weeks. You may experience slight fatigue around the muscle area after chewing, but this is momentary and subsides within a week. Masseter Botox will not affect your speech or eating activity while significantly relieving jaw pain."
    },
    {
      question: "What is the difference between Jaw Botox and Jawline Fillers?",
      answer: "Jaw Botox relaxes overactive chewing muscles (masseter hypertrophy) to shrink jaw muscle size without surgery. Jaw Fillers restore volume along the jawline where contour has been lost due to age. Botox slims the jaw, while fillers add definition. Many patients benefit from both treatments simultaneously for optimal facial balance after detailed consultation."
    },
    {
      question: "How much is masseter botox and what does the price include?",
      answer: "Masseter muscle botox cost at CosmeDocs is £350 for both sides. Our masseter botox price includes comprehensive consultation, precise dosing from 25 to 45 units per side depending on muscle mass, premium Botox products, and aftercare support. The masseter botox pricing UK represents excellent value with no hidden fees. Consultation fee is deducted if you proceed with treatment on the same day."
    }
  ];

  const bookingUrl = "https://med.as.me/harleystreet";

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.image} />
        <meta property="og:url" content={seoData.canonical} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Cosmedocs",
            "description": "Expert Masseter Botox for jaw slimming and bruxism treatment in London - Harley Street aesthetic clinic",
            "url": seoData.canonical,
            "telephone": "0333 0551 503",
            "email": "info@cosmedocs.com",
            "priceRange": "££",
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
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "Masseter Botox Treatment",
            "description": "Professional Botox treatment for masseter muscle reduction, jaw slimming, and bruxism (teeth grinding) relief",
            "procedureType": "Cosmetic and Medical Injectable Treatment",
            "bodyLocation": "Masseter Muscle (Jaw)",
            "preparation": "Avoid blood-thinning medications, inform doctor of medical conditions",
            "followup": "Follow-up assessment after 2 weeks",
            "howPerformed": "Botox injections administered into masseter muscles on both sides of jaw",
            "medicalSpecialty": "Cosmetic Medicine"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Offer",
            "name": "Masseter Botox Treatment - Both Sides",
            "description": "Professional masseter Botox treatment for jaw slimming and bruxism relief",
            "priceCurrency": "GBP",
            "price": "350",
            "priceValidUntil": "2025-12-31",
            "availability": "https://schema.org/InStock",
            "url": seoData.canonical,
            "seller": {
              "@type": "MedicalBusiness",
              "name": "Cosmedocs"
            }
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        {/* Breadcrumb Navigation */}
        <div className="page-container">
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Treatments", href: "/treatments" },
            { label: "Masseter Botox" }
          ]} />
        </div>

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
                  Masseter
                  <span className="block text-purple-300">Botox</span>
                  <span className="block text-sm mt-4">Botox For Jaw Slimming & Wide Jaw Reduction</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl">
                  <span className="text-purple-300 font-semibold">Invisible Art</span>
                  <br />
                  Expert jaw slimming and bruxism treatment with dual medical and cosmetic benefits
                </p>
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
              <h2 className="text-3xl font-bold mb-8 text-white">Masseter Botox Treatment</h2>
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
                  <Clock className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Treatment Duration</h3>
                <p className="text-gray-300">15-20 minutes including consultation</p>
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
                <p className="text-gray-300">4-6 months with visible results in 1-2 weeks</p>
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
                <p className="text-gray-300">No downtime, return to work immediately</p>
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
                <h3 className="text-lg font-semibold text-white mb-2">Medical Relief</h3>
                <p className="text-gray-300">Effective treatment for bruxism, TMJ, and jaw pain relief</p>
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
                <h3 className="text-lg font-semibold text-white mb-2">Dual Benefits</h3>
                <p className="text-gray-300">Cosmetic jaw slimming with medical teeth grinding treatment</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Before & After Gallery */}
        <section className="py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Masseter Botox Before and After</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                View authentic masseter botox before and after results from our London clinic. Botox masseter before after images demonstrate jawline slimming and facial contouring achieved through botox to the masseter muscle. Side profile transformations show the remarkable jaw slimming botox before and after effects within weeks of treatment.
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
                      onClick={() => openImageModal(index)}
                    >
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-2 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
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

        {/* What is Masseter Botox Treatment */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-8 text-white">What is Masseter Botox Treatment?</h2>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                Masseter Botox, also known as jawline botox or jaw botox, helps with both aesthetic and medical issues. Botox on masseter muscles can slim down a square, wide jawline through facial slimming botox techniques, correct facial asymmetry, and alleviate jaw pain. These symptoms are often related to <Link to="/bruxism-botox" className="text-purple-300 hover:text-purple-200 underline">bruxism</Link> and TMJ disorders. What does masseter botox do? It relaxes the masseter muscle, reducing its size for both cosmetic face slimming botox results and medical relief. Clinical studies have demonstrated the <a href="https://pubmed.ncbi.nlm.nih.gov/28991284/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">effectiveness of botox for masseter muscle treatment</a> and related conditions.
              </p>

              <div className="bg-purple-300/10 border-l-4 border-purple-300 p-6 mb-12 text-left">
                <p className="text-purple-300 font-semibold">
                  Did you know that the strongest muscle in your body is the one that helps you chew? It is known as the 'Masseter Muscle' or jaw muscle.
                </p>
               </div>

               <div className="mb-12 text-left">
                 <h3 className="text-2xl font-bold mb-6 text-white text-center">Jawline Slimming Botox</h3>
                 <p className="text-gray-300 leading-relaxed">
                   Masseter botox is also known as jawline slimming botox as the masseter muscle is reduced in size and action through botox injection into masseter muscles. Botox for thinner face treatments work by relaxing the bulk of the masseter muscle, creating a more V-shaped facial contour. This botox facial slimming technique reshapes the transition from temples to jawlines and neck, enhancing overall facial harmony. Treatment can be combined with <Link to="/jawline-filler" className="text-purple-300 hover:text-purple-200 underline">jawline fillers</Link> or <Link to="/chin-filler" className="text-purple-300 hover:text-purple-200 underline">chin fillers</Link> for comprehensive lower face enhancement.
                 </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                 <motion.div
                   initial={{ opacity: 0, x: -30 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.6 }}
                   viewport={{ once: true }}
                   className="bg-black/30 border border-purple-500/30 rounded-lg p-8 hover:border-purple-400/50 transition-colors"
                 >
                   <div className="mb-4">
                     <h3 className="text-2xl font-bold text-white">Where is the Masseter Muscle?</h3>
                   </div>
                    <p className="text-gray-300 leading-relaxed">
                      The masseter is a muscle on the side of your face. It interlinks the bones in your jaw to your cheekbones, making chewing effortless. It's known for its feathered pattern.
                    </p>
                   <div className="mt-4 p-3 bg-purple-600/10 rounded-lg border-l-4 border-purple-400">
                     <p className="text-purple-300 text-sm font-medium">
                       💡 Located on both sides of your jaw, these powerful muscles work together for efficient chewing.
                     </p>
                   </div>
                 </motion.div>

                 <motion.div
                   initial={{ opacity: 0, x: 30 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.6 }}
                   viewport={{ once: true }}
                   className="bg-black/30 border border-purple-500/30 rounded-lg p-8 hover:border-purple-400/50 transition-colors"
                 >
                   <div className="mb-4">
                     <h3 className="text-2xl font-bold text-white">What Is Masseter Hypertrophy?</h3>
                   </div>
                    <p className="text-gray-300 leading-relaxed">
                      Masseter hypertrophy occurs when the masseter muscle enlarges, typically due to excessive chewing or teeth grinding (bruxism). This enlargement can cause the jawline to appear more prominent and may result in discomfort from increased muscle tension.
                    </p>
                   <div className="mt-4 p-3 bg-purple-600/10 rounded-lg border-l-4 border-purple-400">
                     <p className="text-purple-300 text-sm font-medium">
                       ⚠️ Common causes include teeth grinding, gum chewing, and jaw clenching during stress.
                     </p>
                   </div>
                 </motion.div>
                </div>
            </motion.div>
          </div>
        </section>

        {/* Masseter Botox Indications */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Is Masseter Botox Right for You?</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Masseter botox London offers dual benefits for jawline slimming and masseter botox for TMJ relief. Whether searching for "botox near me" or "masseter botox near me" for facial contouring, our Harley Street clinic provides expert jaw slimming treatments. <a href="https://academic.oup.com/asj/advance-article/doi/10.1093/asj/sjaf167/8239609?" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">Large studies</a> show masseter botox is generally safe, with no significant effect on bone density after repeated treatments over a year.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-accent/30 border border-purple-500/30 rounded-lg p-8"
              >
                <h3 className="text-white text-2xl font-semibold mb-6 flex items-center">
                  <Sparkles className="text-purple-400 mr-3" size={24} />
                  Cosmetic Concerns & Benefits
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-purple-400 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-gray-300">Facial asymmetry correction</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-purple-400 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-gray-300">Wide jaw reduction and facial slimming</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-purple-400 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-gray-300">Enhanced facial contour and balance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-purple-400 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-gray-300">Softened square jawline appearance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-purple-400 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-gray-300">Aesthetic imbalance improvement</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-accent/30 border border-purple-500/30 rounded-lg p-8"
              >
                <h3 className="text-white text-2xl font-semibold mb-6 flex items-center">
                  <Heart className="text-purple-400 mr-3" size={24} />
                  Medical Concerns & Benefits
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-purple-400 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-gray-300">Teeth grinding (severe bruxism) relief</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-purple-400 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-gray-300">Reduction in jaw pain and tension</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-purple-400 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-gray-300">Treatment of TMJ symptoms</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-purple-400 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-gray-300">Reduced headaches and facial pain</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-purple-400 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-gray-300">Prevention of dental damage</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How to Assess Your Masseter Muscle */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">How To Assess Your Masseter Muscle Size?</h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Place your fingers on the jaw angle and clench your teeth to assess whether you have an enlarged masseter muscle. You should feel the muscle contract and become prominent.
              </p>
              <div className="bg-purple-300/10 border border-purple-300/20 rounded-lg p-6 max-w-3xl mx-auto">
                <p className="text-gray-300">
                  The masseter muscle size is considered XL if the lower face appears more comprehensive than the upper face (the "inverted triangle of youth"). This helps evaluate muscle size by comparing the width of the lower face.
                </p>
              </div>
            </motion.div>
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
              <h2 className="text-3xl font-bold mb-4 text-white">Masseter Muscle Botox Cost</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Transparent masseter botox pricing with no hidden fees. Our masseter botox price UK includes consultation, treatment, and aftercare. How much is masseter botox? At £350 for both sides, our masseter botox cost covers comprehensive treatment with premium products. Consultation fee is deducted from treatment if you proceed on the same day.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-purple-500 h-full text-center">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Masseter Botox Treatment</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£350</div>
                    <div className="text-purple-200 text-sm">(Both Sides)</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Professional jaw slimming and teeth grinding treatment for both masseter muscles</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Consultation included</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Premium Botox treatment</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Aftercare support</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">2-week follow-up</span>
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
                <p className="text-gray-300">Premium FDA-approved Botox treatments only</p>
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
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Everything you need to know about Masseter Botox treatment
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-accent border-gray-800 rounded-lg"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-900 rounded-lg">
                      <span className="text-white font-medium">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-300">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Related Treatments */}
        <section className="py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Related Botox Treatments</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Explore our comprehensive range of medical and cosmetic Botox treatments
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/bruxism-botox">
                <Card className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors h-full">
                  <CardHeader>
                    <CardTitle>Bruxism Treatment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm mb-4">Specialised Botox treatment for teeth grinding and TMJ disorders</p>
                    <Button variant="outline" size="sm" className="border-purple-300 text-purple-300">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/botox-calf-reduction">
                <Card className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors h-full">
                  <CardHeader>
                    <CardTitle>Calf Muscle Reduction</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm mb-4">Botox treatment for overdeveloped calf muscles</p>
                    <Button variant="outline" size="sm" className="border-purple-300 text-purple-300">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/face-botox">
                <Card className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors h-full">
                  <CardHeader>
                    <CardTitle>Face Botox</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm mb-4">Comprehensive facial Botox for wrinkles and lines</p>
                    <Button variant="outline" size="sm" className="border-purple-300 text-purple-300">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="page-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-12"
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Jawline?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book a consultation with our expert practitioners and begin your journey toward refined facial aesthetics and medical relief.
              </p>
              <Button 
                onClick={() => window.open(bookingUrl, "_blank")}
                className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl"
              >
                Book Consultation Now
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Client Reviews */}
        <ClientReviews />

        {/* Additional Information Section - Previously Hidden SEO Content */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-8 text-center">Masseter Botox London Harley Street</h2>
              
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="clinic-overview" className="bg-black/50 rounded-lg border border-gray-800 px-6">
                  <AccordionTrigger className="text-lg font-semibold text-white hover:text-purple-300">
                    About Our Masseter Botox Treatment
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed pt-4">
                    Masseter Botox treatment at CosmeDocs London provides expert jawline slimming botox and <Link to="/bruxism-botox" className="text-purple-300 hover:text-purple-200 underline">bruxism treatment</Link> with dual medical and cosmetic benefits. If you're searching for "botox treatment near me" or "botox close to me", our Harley Street clinic offers comprehensive masseter botox UK treatments. Our experienced practitioners use precision botox masseter muscle injection techniques to reduce muscle size, achieving natural jaw contouring whilst relieving teeth grinding symptoms. Masseter botox London treatments start from £350 for both sides, including thorough consultation, precise dosing from 25-45 units per side, and complimentary follow-up appointments.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="treatment-results" className="bg-black/50 rounded-lg border border-gray-800 px-6">
                  <AccordionTrigger className="text-lg font-semibold text-white hover:text-purple-300">
                    Treatment Results & Duration
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed pt-4">
                    Botox for masseter muscle before and after results appear within 1-2 weeks, with TMJ botox before and after improvements visible in facial structure. Jawline slimming botox before and after transformations last 4-6 months, making masseter reduction an effective solution for wide jaw correction, facial asymmetry, and TMJ symptom relief. Masseter botox before and after side profile views demonstrate the dramatic contouring effects. Regular maintenance treatments every 3-6 months help sustain both cosmetic improvements and medical benefits, with many patients requiring fewer sessions over time as muscle memory develops.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="philosophy-approach" className="bg-black/50 rounded-lg border border-gray-800 px-6">
                  <AccordionTrigger className="text-lg font-semibold text-white hover:text-purple-300">
                    Our Treatment Philosophy & Approach
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed pt-4">
                    Our invisible art philosophy ensures natural-looking results that enhance facial harmony whilst providing significant medical benefits for jaw pain, headaches, and dental damage prevention. Botox to thin face techniques and botox for thinner face contouring are tailored to each patient. Our treatment approach considers individual masseter muscle size assessment, facial anatomy evaluation, and personalised dosing strategies to optimise outcomes whilst minimising masseter botox side effects. Botox masseter muscle treatments can be combined with <Link to="/jawline-filler" className="text-purple-300 hover:text-purple-200 underline">jawline fillers</Link> for comprehensive facial contouring and masseter botox jowls improvement.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="safety-standards" className="bg-black/50 rounded-lg border border-gray-800 px-6">
                  <AccordionTrigger className="text-lg font-semibold text-white hover:text-purple-300">
                    Safety Standards & Clinical Excellence
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed pt-4">
                    CosmeDocs maintains the highest clinical standards with CQC registration, using only premium Botox products and sterile injection techniques. The masseter muscle, known as the strongest muscle in the human body, can be safely and effectively treated to achieve both aesthetic jawline slimming and medical relief from grinding-related symptoms.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="recovery-aftercare" className="bg-black/50 rounded-lg border border-gray-800 px-6">
                  <AccordionTrigger className="text-lg font-semibold text-white hover:text-purple-300">
                    Recovery & Aftercare
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed pt-4">
                    Patients experience minimal downtime with immediate return to normal activities, though we recommend avoiding strenuous exercise for 24 hours post-treatment. Our comprehensive aftercare guidance ensures optimal results and patient satisfaction throughout your treatment journey.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* Image Zoom Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent 
            className="bg-black border-gray-800 p-0 sm:max-w-4xl w-[95vw] max-h-[90vh] flex flex-col"
            onKeyDown={handleKeyDown}
          >
            {selectedImageIndex !== null && (
              <>
                <div className="relative flex-grow flex flex-col">
                  {/* Image counter */}
                  <div className="absolute top-4 right-6 z-10 bg-black/60 px-3 py-1 rounded-full text-sm text-white">
                    {selectedImageIndex + 1} / {beforeAfterImages.length}
                  </div>
                  
                  {/* Main image viewer */}
                  <div className="flex-grow relative overflow-hidden h-[70vh]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={selectedImageIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex items-center justify-center p-4"
                      >
                        <img
                          src={beforeAfterImages[selectedImageIndex].src}
                          alt={beforeAfterImages[selectedImageIndex].alt}
                          className="max-h-full max-w-full object-contain"
                        />
                      </motion.div>
                    </AnimatePresence>
                    
                    {/* Navigation buttons */}
                    <button 
                      onClick={goToPrevious}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 rounded-full p-3 transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-6 w-6 text-white" />
                    </button>
                    
                    <button 
                      onClick={goToNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 rounded-full p-3 transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-6 w-6 text-white" />
                    </button>
                  </div>
                  
                  {/* Caption */}
                  <div className="p-6 bg-black border-t border-gray-800/50 text-center">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Masseter Botox Results
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {beforeAfterImages[selectedImageIndex].caption}
                    </p>
                    
                    {/* Dot navigation */}
                    <div className="flex justify-center gap-2 flex-wrap">
                      {beforeAfterImages.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedImageIndex(idx)}
                          className={`w-3 h-3 rounded-full transition-all ${
                            idx === selectedImageIndex ? "bg-white scale-110" : "bg-gray-600 hover:bg-gray-400"
                          }`}
                          aria-label={`Go to image ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default MasseterBotox;