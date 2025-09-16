import React from 'react';
import smileLinesResult1 from '@/assets/smile-lines-before-after-1.png';
import smileLinesResult2 from '@/assets/smile-lines-before-after-2.png';
import smileLinesResult3 from '@/assets/smile-lines-before-after-3.png';
import smileLineSideView from '@/assets/smile-line-fillers-side-view.png';
import smileLineFrontView from '@/assets/smile-line-filler-front-view.png';
import smileLinesUnderEyesCheeks from '@/assets/smile-line-fillers-under-eyes-cheeks.jpg';
import nasolabialGradingSystem from '@/assets/gallery/nasolabial-fold-grading-system.png';
import nasolabialBefore1 from '@/assets/gallery/nasolabial-filler-before-1.jpg';
import nasolabialAfter1 from '@/assets/gallery/nasolabial-filler-after-1.jpg';
import nasolabialBefore2 from '@/assets/gallery/nasolabial-filler-before-2.jpg';
import nasolabialAfter2 from '@/assets/gallery/nasolabial-filler-after-2.jpg';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BeforeAfterImageViewer from '@/components/BeforeAfterImageViewer';
import AutoLinkedText from '@/components/AutoLinkedText';
import PopularTreatments from '@/components/PopularTreatments';
import { generateSEOMetadata } from '@/utils/seo';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Clock, Calendar, Activity, Syringe, Eye } from 'lucide-react';
const NasolabialFolds = () => {
  const seoData = generateSEOMetadata("Nasolabial Folds Filler London | Smile Lines Treatment | Cosmedocs", "Expert nasolabial fold filler & dermal fillers for smile lines in London. Before & after results. Natural face filler treatments.", "/nasolabial-folds");
  const beforeAfterImages = [
    { 
      src: smileLinesResult1, 
      alt: "Nasolabial folds before and after dermal filler treatment case 1",
      caption: "Before & After: Smooth nasolabial folds with natural-looking results"
    },
    { 
      src: smileLinesResult2, 
      alt: "Nasolabial folds before and after dermal filler treatment case 2",
      caption: "Before & After: Expert filler technique for age-reversing transformation"
    },
    {
      src: nasolabialGradingSystem,
      alt: "Nasolabial fold grading system from 0 to 4 showing severity levels",
      caption: "Clinical grading system: Assessing nasolabial fold depth for optimal treatment planning"
    },
    { 
      src: "/lovable-uploads/7d9d621d-c4ee-4c23-82fb-56ee04ef333f.png", 
      alt: "Nasolabial folds dermal filler treatment results showing smooth skin",
      caption: "Expert dermal filler technique for natural rejuvenation"
    },
    {
      src: smileLinesUnderEyesCheeks,
      alt: "Smile line fillers under eyes and cheeks comprehensive treatment results",
      caption: "Comprehensive facial rejuvenation: Smile lines, under eyes and cheeks"
    }
  ];

  const treatmentCases = [
    {
      title: "Smile Lines Treatment Results",
      images: [{
        src: smileLinesResult1,
        alt: "Nasolabial folds before and after dermal filler treatment case 1",
        caption: "Before & After: Smooth nasolabial folds with natural-looking results"
      }]
    },
    {
      title: "Advanced Smile Lines Correction",
      images: [{
        src: smileLinesResult2,
        alt: "Nasolabial folds before and after dermal filler treatment case 2",
        caption: "Before & After: Expert filler technique for age-reversing transformation"
      }]
    },
    {
      title: "Nasolabial Fold Grading System",
      images: [{
        src: smileLinesResult3,
        alt: "Smile line filler grading system showing treatment depth classification",
        caption: "Professional grading system: From mild to severe nasolabial fold correction"
      }]
    }
  ];
  const faqs = [{
    question: "What are nasolabial folds?",
    answer: "Nasolabial folds, also known as smile lines or laugh lines, are the creases that run from the sides of the nose down to the corners of the mouth. They become more pronounced with age due to volume loss and decreased skin elasticity."
  }, {
    question: "How do dermal fillers treat nasolabial folds?",
    answer: "Dermal fillers containing hyaluronic acid are carefully injected along the nasolabial folds to restore lost volume, smooth the creases, and create a more youthful transition from the nose to the mouth area."
  }, {
    question: "How long do nasolabial fold filler results last?",
    answer: "Results typically last 12-18 months, depending on the type of filler used, your individual metabolism, lifestyle factors, and the depth of the original folds. Touch-up treatments help maintain optimal results."
  }, {
    question: "Is nasolabial fold filler treatment painful?",
    answer: "Most patients experience minimal discomfort as we use ultra-fine needles and premium fillers that often contain lidocaine for comfort. Topical anaesthetic can also be applied if needed for sensitive patients."
  }, {
    question: "What's the recovery time for nasolabial fold fillers?",
    answer: "There's minimal downtime with most patients returning to normal activities immediately. Some temporary swelling, redness, or minor bruising may occur but typically resolves within 2-7 days."
  }, {
    question: "How much does nasolabial fold filler cost?",
    answer: "Nasolabial fold filler treatment starts from £325 per ml. The exact amount needed varies depending on the depth of your folds and desired results, which will be assessed during your consultation."
  }];
  const relatedTreatments = [{
    title: "Marionette Lines",
    description: "Smooth vertical lines from mouth corners to chin for a more youthful appearance",
    link: "/marionette-lines"
  }, {
    title: "Dermal Fillers",
    description: "Comprehensive facial rejuvenation with personalized treatment plans",
    link: "/dermal-fillers"
  }, {
    title: "Cheek Fillers",
    description: "Restore volume and enhance cheek contours for lifted appearance",
    link: "/cheek-filler"
  }, {
    title: "Lip Fillers",
    description: "Natural lip enhancement for fuller, more defined lips",
    link: "/lip-fillers"
  }, {
    title: "Jawline Fillers",
    description: "Define and contour jawline for enhanced facial structure",
    link: "/jawline-filler"
  }, {
    title: "Tear Trough Fillers",
    description: "Address under-eye hollowing and dark circles for refreshed eyes",
    link: "/tear-trough-filler"
  }];
  return <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.image} />
        <meta property="og:url" content={seoData.canonical} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="nasolabial fold filler, nasolabial fillers, smile lines filler before and after, face filler before and after, dermal fillers before and after, fillers for nasolabial folds, nasolabial lines filler, botox smile lines before after, dermal filler nasolabial folds, facial filler, hyaluronic acid fillers for face, lower face filler, skin fillers before and after, nasolabial fillers before after" />
        <script type="application/ld+json">
          {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "name": "Cosmedocs",
          "description": "Expert nasolabial fold filler treatments in London",
          "url": seoData.canonical,
          "telephone": "0333 0551 503",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "10 Harley Street",
            "addressLocality": "London",
            "postalCode": "W1G 9PF",
            "addressCountry": "GB"
          },
          "medicalSpecialty": "Cosmetic Medicine",
          "priceRange": "££"
        })}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden min-h-screen flex items-center">
          <div className="page-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{
              opacity: 0,
              x: -50
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8
            }} className="text-left">
                <Link to="/dermal-fillers" className="inline-block mb-4">
                  <h2 className="text-lg font-medium text-purple-300 hover:text-purple-200 transition-colors">
                    DERMAL FILLERS
                  </h2>
                </Link>
                <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-white drop-shadow-2xl">
                  Nasolabial Folds
                  <span className="block text-purple-300">Dermal Fillers</span>
                  <span className="block text-sm mt-4 font-normal">Smooth smile lines for natural rejuvenation</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl drop-shadow-lg">
                  <span className="text-purple-300 font-semibold">Our aesthetics is invisible art</span>
                  <br />
                  <span className="text-lg">Bold • Natural • Always Your Way</span>
                  <br />
                  Transform prominent smile lines into subtle, youthful contours
                </p>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold drop-shadow-lg">From £350/ml</p>
                  <p className="text-sm text-gray-300 drop-shadow-lg">30-45 minutes • Results last 12-18 months • Immediate improvement</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl">
                    Book Free Consultation
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm">
                    View Before & After
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
              <h2 className="text-3xl font-bold mb-8 text-white">Nasolabial Folds Treatment</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
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
                <p className="text-gray-300">Minimal downtime, return to normal activities</p>
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

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Eye className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Visible Results</h3>
                <p className="text-gray-300">Instant visible improvement after treatment</p>
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
              <h2 className="text-3xl font-bold mb-4">Before and After Nasolabial Folds Treatment in London</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Explore authentic face filler before and after results from our London clinic showcasing smile lines filler before and after transformations. Our dermal fillers before and after gallery demonstrates how fillers for nasolabial folds create natural, age-reversing results. See real nasolabial fillers before after cases and lower face filler improvements.
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
                title="Nasolabial Folds Results Gallery"
                description="Comprehensive gallery of our nasolabial folds treatments"
              />
            </div>
          </div>
        </section>

        {/* Treatment Overview */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div initial={{
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
                <h2 className="text-4xl font-bold mb-6">What are Nasolabial Folds (Smile Line/Laugh Lines)?</h2>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  Nasolabial folds, commonly known as smile lines or laugh lines, are the natural creases that run from the sides of your nose down to the corners of your mouth. These facial filler areas become more pronounced with age due to volume loss and decreased skin elasticity. Our nasolabial fold filler treatments use premium hyaluronic acid injections to restore lost volume and smooth these lines effectively.
                </p>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  <AutoLinkedText>Our expert dermal filler treatment</AutoLinkedText> provides dramatic smile line filler before and after results. We use advanced facial filler techniques with skin fillers before and after tracking to ensure optimal nasolabial fillers before after outcomes. The dermal filler nasolabial folds procedure creates natural transitions while maintaining your ability to express emotions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <p className="text-gray-300 text-center">Instant visible improvement</p>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <p className="text-gray-300 text-center">Maintains natural expressions</p>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <p className="text-gray-300 text-center">Long-lasting natural results</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits and Aftercare Section */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Benefits & Aftercare</h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                Key advantages and essential care guidelines for optimal results
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Benefits Column */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-accent rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold mb-6 text-white">Key Benefits</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-400 mt-1 shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Immediate Results</h4>
                      <p className="text-gray-300 text-sm">Instant visible improvement after treatment</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-400 mt-1 shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Natural Enhancement</h4>
                      <p className="text-gray-300 text-sm">Subtle, authentic-looking results</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-400 mt-1 shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Long-lasting</h4>
                      <p className="text-gray-300 text-sm">12-18 months duration with premium fillers</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-400 mt-1 shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Minimal Downtime</h4>
                      <p className="text-gray-300 text-sm">Return to activities immediately</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-400 mt-1 shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Reversible</h4>
                      <p className="text-gray-300 text-sm">Can be dissolved if needed</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Aftercare Column */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-accent rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold mb-6 text-white">Aftercare Guide</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-purple-300 mb-3">First 24 Hours</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        Avoid touching treated area
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        Apply ice to reduce swelling
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        Sleep with head elevated
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-purple-300 mb-3">First Week</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        Avoid sun exposure and heat
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        Use gentle skincare only
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        Stay hydrated
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-700">
                    <p className="text-gray-300 text-sm mb-4">
                      Follow-up appointments help maintain optimal results
                    </p>
                    <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-6 py-2 text-sm w-full">
                      Schedule Follow-up
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>


        {/* Combination Treatment Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Combination Treatments</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Enhance your nasolabial fold treatment with complementary procedures for comprehensive facial rejuvenation. 
                Our expert practitioners design personalized treatment plans to achieve natural, harmonious results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-black rounded-xl p-6 hover:bg-black/80 transition-colors border border-purple-500/20"
              >
                <h3 className="text-xl font-semibold mb-3 text-purple-300">Cheek Enhancement</h3>
                <p className="text-gray-300 mb-4">
                  <AutoLinkedText>Cheek fillers</AutoLinkedText> combined with nasolabial fold treatment restore volume and lift the midface, 
                  reducing the depth of smile lines naturally by addressing the underlying volume loss.
                </p>
                <Link to="/cheek-filler" className="text-purple-300 hover:text-purple-200 inline-flex items-center gap-2">
                  Learn more <ArrowRight size={16} />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-black rounded-xl p-6 hover:bg-black/80 transition-colors border border-purple-500/20"
              >
                <h3 className="text-xl font-semibold mb-3 text-purple-300">Marionette Lines</h3>
                <p className="text-gray-300 mb-4">
                  Treating both <AutoLinkedText>nasolabial folds and marionette lines</AutoLinkedText> creates a unified approach 
                  to lower face rejuvenation, smoothing all vertical lines for a more youthful appearance.
                </p>
                <Link to="/marionette-lines" className="text-purple-300 hover:text-purple-200 inline-flex items-center gap-2">
                  Learn more <ArrowRight size={16} />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-black rounded-xl p-6 hover:bg-black/80 transition-colors border border-purple-500/20"
              >
                <h3 className="text-xl font-semibold mb-3 text-purple-300">Tear Trough Treatment</h3>
                <p className="text-gray-300 mb-4">
                  <AutoLinkedText>Tear trough fillers</AutoLinkedText> address under-eye hollowing while nasolabial fold treatment 
                  focuses on smile lines, creating a comprehensive anti-aging approach for the entire midface area.
                </p>
                <Link to="/tear-trough-filler" className="text-purple-300 hover:text-purple-200 inline-flex items-center gap-2">
                  Learn more <ArrowRight size={16} />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-black rounded-xl p-6 hover:bg-black/80 transition-colors border border-purple-500/20"
              >
                <h3 className="text-xl font-semibold mb-3 text-purple-300">Lip Enhancement</h3>
                <p className="text-gray-300 mb-4">
                  <AutoLinkedText>Lip fillers</AutoLinkedText> can be combined with nasolabial fold treatment to create a balanced 
                  lower face enhancement, improving proportions and creating natural harmony between all facial features.
                </p>
                <Link to="/lip-fillers" className="text-purple-300 hover:text-purple-200 inline-flex items-center gap-2">
                  Learn more <ArrowRight size={16} />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-black rounded-xl p-6 hover:bg-black/80 transition-colors border border-purple-500/20"
              >
                <h3 className="text-xl font-semibold mb-3 text-purple-300">Jawline Definition</h3>
                <p className="text-gray-300 mb-4">
                  <AutoLinkedText>Jawline fillers</AutoLinkedText> enhance facial structure while nasolabial fold treatment 
                  smooths smile lines, creating a comprehensive approach to facial contouring and anti-aging.
                </p>
                <Link to="/jawline-filler" className="text-purple-300 hover:text-purple-200 inline-flex items-center gap-2">
                  Learn more <ArrowRight size={16} />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-black rounded-xl p-6 hover:bg-black/80 transition-colors border border-purple-500/20"
              >
                <h3 className="text-xl font-semibold mb-3 text-purple-300">Anti-Wrinkle Injections</h3>
                <p className="text-gray-300 mb-4">
                  Combining anti-wrinkle injections for dynamic lines with dermal fillers for static nasolabial folds 
                  provides comprehensive facial rejuvenation addressing both muscle movement and volume loss.
                </p>
                <Link to="/anti-wrinkle-injections" className="text-purple-300 hover:text-purple-200 inline-flex items-center gap-2">
                  Learn more <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Interested in a combination treatment plan? Our experts will assess your unique needs and design 
                a personalized approach for optimal, natural-looking results.
              </p>
              <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3">
                Book Combination Consultation
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Nasolabial Filler Pricing Section */}
        <section id="pricing-section" className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Nasolabial Fold Filler Pricing London</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Transparent pricing for premium nasolabial fold treatments. All prices include consultation, 
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
                    <CardTitle className="text-white text-2xl">0.5ml Per Side</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£350</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Perfect for mild nasolabial folds and subtle enhancement</p>
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
                    <CardTitle className="text-white text-2xl">1ml Per Side</CardTitle>
                    <div className="text-white text-4xl font-bold">£400</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-purple-100">Ideal for moderate to deep nasolabial folds</p>
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
                    <CardTitle className="text-white text-2xl">Consultation Only</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£50</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Professional assessment and treatment planning</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Expert assessment</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Treatment planning</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">No obligation</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <div className="bg-purple-600/20 border border-purple-500/30 rounded-lg p-6 max-w-4xl mx-auto">
                <h3 className="text-xl font-semibold text-white mb-4">Package Deals Available</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div className="space-y-2">
                    <h4 className="font-medium text-purple-300">Full Face Enhancement</h4>
                    <p className="text-gray-300 text-sm">Combine nasolabial folds with cheek or lip fillers for comprehensive rejuvenation</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-purple-300">Maintenance Plans</h4>
                    <p className="text-gray-300 text-sm">Regular touch-up appointments to maintain your results at discounted rates</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                Get expert answers about nasolabial fold <AutoLinkedText>dermal filler treatment</AutoLinkedText> from our experienced practitioners.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-black rounded-lg border-gray-800">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-900 rounded-lg">
                      <span className="text-white font-medium">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-300">
                      <AutoLinkedText>{faq.answer}</AutoLinkedText>
                    </AccordionContent>
                  </AccordionItem>)}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Other Dermal Filler Treatments */}
        <section className="w-full py-24 bg-gray-900/50">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Other Dermal Filler Treatments</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enhance your natural beauty with specialized dermal filler treatments for individual facial areas
              </p>
            </div>

            {/* Anti-Ageing Treatments */}
            <div className="mb-16">
              <h3 className="text-3xl font-semibold text-white text-center mb-12">Anti-Ageing Treatments</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[{
                title: "Marionette Lines",
                price: "£325/ml",
                description: "Smooth vertical lines from mouth corners to chin for a more youthful appearance.",
                features: ["Long-lasting results", "Natural appearance", "Minimal downtime"],
                link: "/marionette-lines"
              }, {
                title: "Jawline (High Def/Jowls)",
                price: "£350/ml",
                description: "Define and contour jawline while addressing jowl sagging.",
                features: ["Sculpted definition", "Youthful contour", "Professional technique"]
              }, {
                title: "Cheek Volume",
                price: "£350/ml",
                description: "Restore youthful cheek fullness and enhance facial proportions.",
                features: ["Natural volume", "Lifted appearance", "Long-lasting results"]
              }, {
                title: "Tear Trough / Under Eye",
                price: "£425",
                description: "Address under-eye hollowing and dark circles for refreshed eyes.",
                features: ["Refreshed look", "Reduced shadows", "Expert technique required"]
              }, {
                title: "Profhilo",
                price: "£350",
                description: "Bio-remodelling treatment for skin hydration and firmness.",
                features: ["Skin bio-remodelling", "Hydration boost", "Natural glow"]
              }].map((treatment, index) => {
                const CardComponent = <Card key={index} className="p-6 bg-gray-800/50 border-gray-700 hover:bg-gray-700/30 transition-colors">
                      <CardContent className="p-0">
                        <div className="flex justify-between items-start mb-4">
                          <h4 className="text-lg font-semibold text-white">{treatment.title}</h4>
                          <span className="text-xl font-bold text-yellow-400">{treatment.price}</span>
                        </div>
                        <p className="text-gray-300 text-sm mb-4">{treatment.description}</p>
                        <div className="space-y-2 mb-4">
                          {treatment.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center text-sm">
                              <CheckCircle className="h-4 w-4 text-green-400 mr-2 shrink-0" />
                              <span className="text-gray-400">{feature}</span>
                            </div>)}
                        </div>
                        <Button variant="ghost" className="text-gray-400 hover:text-white p-0 h-auto">
                          Learn more <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>;
                return treatment.link ? <Link key={index} to={treatment.link} className="block hover:no-underline">
                      {CardComponent}
                    </Link> : CardComponent;
              })}
              </div>
            </div>

            {/* Facial Contouring Treatments */}
            <div className="mb-16">
              <h3 className="text-3xl font-semibold text-white text-center mb-12">Facial Contouring</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[{
                title: "0.5ml Lip Filler (Natural)",
                price: "£300",
                description: "Subtle lip enhancement for naturally fuller lips.",
                features: ["Natural enhancement", "Subtle volume", "Perfect proportions"]
              }, {
                title: "1ml Lip Filler (Bold & Plump)",
                price: "£350",
                description: "More dramatic lip enhancement for fuller, plumper lips.",
                features: ["Bold results", "Dramatic volume", "Long-lasting effect"]
              }, {
                title: "Non Surgical Nose Job",
                price: "£450",
                description: "Reshape and refine nose contours without surgery.",
                features: ["No surgery required", "Immediate results", "Reversible treatment"]
              }, {
                title: "Forehead Filler",
                price: "£400",
                description: "Smooth forehead bumps and dips for an even surface.",
                features: ["Smooth surface", "Natural appearance", "Expert precision"]
              }, {
                title: "Temples Hollowing",
                price: "£350/ml",
                description: "Restore temple volume for a more youthful facial shape.",
                features: ["Youthful restoration", "Natural volume", "Facial harmony"],
                link: "/temple-filler-london"
              }, {
                title: "Redensity 1",
                price: "£250/ml",
                description: "Skin quality improvement with micro-injections.",
                features: ["Skin quality boost", "Hydration enhancement", "Natural glow"]
              }].map((treatment, index) => {
                const CardComponent = <Card key={index} className="p-6 bg-gray-800/50 border-gray-700 hover:bg-gray-700/30 transition-colors">
                      <CardContent className="p-0">
                        <div className="flex justify-between items-start mb-4">
                          <h4 className="text-lg font-semibold text-white">{treatment.title}</h4>
                          <span className="text-xl font-bold text-yellow-400">{treatment.price}</span>
                        </div>
                        <p className="text-gray-300 text-sm mb-4">{treatment.description}</p>
                        <div className="space-y-2 mb-4">
                          {treatment.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center text-sm">
                              <CheckCircle className="h-4 w-4 text-green-400 mr-2 shrink-0" />
                              <span className="text-gray-400">{feature}</span>
                            </div>)}
                        </div>
                        <Button variant="ghost" className="text-gray-400 hover:text-white p-0 h-auto">
                          Learn more <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>;
                return treatment.link ? <Link key={index} to={treatment.link} className="block hover:no-underline">
                      {CardComponent}
                    </Link> : CardComponent;
              })}
              </div>
            </div>
          </div>
        </section>

        {/* Related Treatments */}
        <PopularTreatments title="Related Dermal Filler Treatments" treatments={relatedTreatments} className="py-20" />

        {/* Call to Action */}
        <section className="py-20">
          <div className="page-container text-center">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-12">
              <h2 className="text-4xl font-bold mb-6">Ready to Smooth Your Smile Lines?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                Book your consultation with our expert practitioners and discover how nasolabial fold fillers can restore your natural, youthful appearance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg">
                  Book Free Consultation
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg">
                  Call 0333 0551 503
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO content */}
        <div className="sr-only">
          <h3>Expert Nasolabial Fold Filler Treatment in London</h3>
          <p>
            Cosmedocs offers advanced nasolabial fold filler and dermal filler nasolabial folds treatments at our prestigious Harley Street clinic in London. Our experienced cosmetic doctors specialize in smoothing smile lines filler before and after results using premium hyaluronic acid fillers for face rejuvenation. See dramatic face filler before and after transformations with our expert nasolabial fillers before after gallery. We provide comprehensive fillers for nasolabial folds treatments including botox smile lines before after options and lower face filler enhancements. Our full face fillers before and after results showcase natural-looking improvements with skin fillers before and after documentation. Celebrity nasolabial fold filler techniques ensure optimal nasolabial lines filler placement. We address concerns about too much filler in nasolabial folds and nasolabial fold filler gone wrong cases through expert consultation. Our hyaluronic acid injections face before and after gallery demonstrates safe, effective treatments. Learn about nasolabial fold filler cost and botox laugh lines before and after options. We also treat filler for nasolabial folds and marionette lines comprehensively. Discover how to get rid of nasolabial folds without fillers through our alternative treatments. Our nasolabial fold fillers before and after results show natural enhancement with cheek filler nasolabial combination treatments. Book consultation for filler in nasolabial folds and explore our dermal filler face lift options.
          </p>
        </div>
      </div>
    </>;
};
export default NasolabialFolds;