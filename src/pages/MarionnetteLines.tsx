
import React from 'react';
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
import { generateSEOMetadata } from '@/utils/seo';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Clock, Calendar, Activity, Syringe, Award, GraduationCap, Palette, Heart } from 'lucide-react';

const MarionnetteLines = () => {
  const seoData = generateSEOMetadata(
    "Marionette Lines Filler London | 10 Years Younger | Liquid Facelift | Cosmedocs",
    "Transform marionette lines with expert dermal filler treatments in London. Part of our liquid facelift for younger individuals in their 30s. Book consultation today.",
    "/marionette-lines"
  );

  const beforeAfterImages = [
    { 
      src: "/lovable-uploads/7f71ff8d-e186-45d8-a20f-70564764b7ae.png", 
      alt: "Cheek volume enhancement before and after to improve nasolabial folds", 
      caption: "Cheek volume restoration improving nasolabial fold appearance" 
    },
    { 
      src: "/lovable-uploads/765101d1-1ff9-4425-9d8a-da5eb0bcaa17.png", 
      alt: "Marionette lines before and after dermal filler treatment", 
      caption: "Dramatic improvement in marionette lines with expert filler placement" 
    },
    { 
      src: "/lovable-uploads/8470f01b-6e88-46ac-898a-108ce73f9dd5.png", 
      alt: "Before nasolabial creases and mild lip hydration treatment", 
      caption: "Before: Nasolabial creases and lip area assessment" 
    },
    { 
      src: "/lovable-uploads/a51527f8-e826-4789-bd14-3bd8eee153bf.png", 
      alt: "After nasolabial crease and lip hydration treatment", 
      caption: "After: Smooth nasolabial area with enhanced lip hydration" 
    },
    { 
      src: "/lovable-uploads/010185b4-89b2-4e8b-b94b-8187262a436e.png", 
      alt: "Nasolabial folds before and after dermal filler treatment", 
      caption: "Complete transformation of nasolabial folds and smile lines" 
    },
    { 
      src: "/lovable-uploads/d13762c3-0f5e-437a-adb7-7ddf89fcf2e5.png", 
      alt: "Nasolabial creases and folds before after comparison", 
      caption: "Before and after: Comprehensive nasolabial area rejuvenation" 
    }
  ];

  const faqs = [
    {
      question: "What are marionette lines and how do they develop?",
      answer: "Marionette lines are vertical creases that extend from the corners of the mouth down towards the chin, resembling the lines on a marionette puppet's face. They develop due to natural aging, volume loss in the cheeks, decreased collagen production, and repetitive facial expressions. These lines can make you appear sad or aged, even when you're feeling happy."
    },
    {
      question: "How are marionette lines different from nasolabial folds?",
      answer: "While both are age-related facial lines, marionette lines run from the mouth corners to the chin, whereas nasolabial folds run from the nose to the mouth corners. Nasolabial creases are typically caused by repeated smiling and skin wrinkling, while nasolabial folds result from volume loss in the cheeks causing skin to fall. Both can be effectively treated with strategic dermal filler placement."
    },
    {
      question: "What is the '10 years younger' marionette line treatment?",
      answer: "The '10 years younger' treatment is our comprehensive approach to marionette lines that can dramatically reduce the appearance of aging. By strategically placing dermal fillers along the marionette lines and addressing related volume loss, we can restore a more youthful appearance that can take years off your face, hence the name."
    },
    {
      question: "Is marionette line treatment part of a liquid facelift?",
      answer: "Yes, marionette line treatment is often a key component of our liquid facelift procedures, especially for younger individuals in their 30s. The liquid facelift combines multiple dermal filler treatments to address various signs of aging without surgery, including marionette lines, nasolabial folds, cheek volume loss, and lip enhancement."
    },
    {
      question: "How long do marionette line filler results last?",
      answer: "Results typically last 12-18 months, depending on the type of filler used, your individual metabolism, lifestyle factors, and the depth of the original lines. The strategic placement of fillers in deeper layers often provides longer-lasting results compared to surface treatments."
    },
    {
      question: "What's the difference between treating creases and folds in the nasolabial area?",
      answer: "Nasolabial creases are typically surface-level lines caused by repeated smiling and facial expressions, while nasolabial folds are deeper and result from volume loss in the cheeks causing skin to sag. Creases require more superficial filler placement, while folds need deeper volume restoration. Our expert practitioners assess your individual needs to determine the optimal treatment approach."
    },
    {
      question: "Can marionette line treatment be combined with other procedures?",
      answer: "Absolutely! Marionette line treatment works excellently in combination with cheek volume enhancement, nasolabial fold correction, and lip hydration treatments. This comprehensive approach addresses multiple aspects of facial aging for more harmonious and natural-looking results."
    },
    {
      question: "What is the recovery time for marionette line fillers?",
      answer: "There's minimal downtime with most patients returning to normal activities immediately. Some temporary swelling, redness, or minor bruising may occur but typically resolves within 3-7 days. We recommend avoiding strenuous exercise for 24-48 hours post-treatment."
    },
    {
      question: "How much does marionette line filler treatment cost?",
      answer: "Marionette line filler treatment starts from £325 per ml. The exact cost depends on the amount of filler needed and whether additional treatments are combined. During your consultation, we'll provide a detailed treatment plan with transparent pricing."
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
        <meta property="og:image" content={seoData.image} />
        <meta property="og:url" content={seoData.canonical} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="marionette lines filler London, liquid facelift, 10 years younger, nasolabial folds, dermal fillers, anti-aging treatment, Harley Street clinic" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Cosmedocs",
            "description": "Expert marionette line filler treatments and liquid facelifts in London",
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
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/lovable-uploads/bd7c2222-e959-4253-af8d-c3a54757661d.png')`
            }}
          >
            <div className="absolute inset-0 bg-black/70"></div>
          </div>
          <div className="page-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-white drop-shadow-2xl">
                  Marionette Lines
                  <span className="block text-purple-300">10 Years Younger</span>
                  <span className="block text-sm mt-4 font-normal">Transform your appearance with our liquid facelift</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl drop-shadow-lg">
                  <span className="text-purple-300 font-semibold">Our aesthetics is invisible art</span>
                  <br />
                  <span className="text-lg">Bold • Natural • Always Your Way</span>
                  <br />
                  Smooth away years with expert marionette line treatment
                </p>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold drop-shadow-lg">From £325/ml</p>
                  <p className="text-sm text-gray-300 drop-shadow-lg">30-45 minutes • Results last 12-18 months • Instant transformation</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl"
                  onClick={() => window.open('https://med.as.me/harleystreet', '_blank')}
                >
                  Book Free Consultation
                </Button>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm"
                    onClick={() => document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' })}
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
              <h2 className="text-3xl font-bold mb-8 text-white">Marionette Lines Treatment</h2>
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
              <h2 className="text-4xl font-bold mb-6">Marionette Lines Transformation Results</h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                See the dramatic improvements achieved through our expert marionette line treatments and liquid facelift procedures.
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
                triggerLabel="View Complete Gallery"
                title="Marionette Lines & Liquid Facelift Results"
                description="Comprehensive collection of our marionette line and facial rejuvenation treatments"
              />
            </div>
          </div>
        </section>

        {/* Treatment Overview */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6">The Science Behind Marionette Lines</h2>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  Marionette lines are the vertical creases that extend from the corners of your mouth down towards your chin, creating a downturned expression that can make you appear sad or older than you feel. These lines develop due to natural aging processes, volume loss in the facial tissues, and repetitive facial expressions over time.
                </p>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  Our expert approach addresses both marionette lines and related nasolabial concerns. It's important to understand that nasolabial creases and folds represent different types of volume loss: creases are typically surface-level lines from repeated smiling, while folds result from deeper volume loss in the cheeks causing skin to fall.
                </p>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  <AutoLinkedText>Our liquid facelift approach</AutoLinkedText> is particularly effective for younger individuals in their 30s, offering a non-surgical solution that can take 10 years off your appearance through strategic dermal filler placement.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img 
                  src="/lovable-uploads/765101d1-1ff9-4425-9d8a-da5eb0bcaa17.png" 
                  alt="Marionette lines treatment results"
                  className="rounded-lg shadow-2xl w-full"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Liquid Facelift Explanation */}
        <section className="py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-6">The Liquid Facelift Advantage</h2>
              <p className="text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed">
                Our marionette line treatment is often part of a comprehensive liquid facelift approach, designed specifically for younger individuals who want to address early signs of aging without surgery. This non-invasive procedure combines multiple <AutoLinkedText>dermal filler treatments</AutoLinkedText> to restore facial volume, smooth lines, and enhance natural contours.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-purple-300">Volume Restoration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Strategic placement of dermal fillers to restore lost volume in cheeks and address the root cause of marionette lines and nasolabial folds.</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-purple-300">Comprehensive Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Treatment addresses marionette lines, nasolabial folds, and can include <AutoLinkedText>lip enhancement</AutoLinkedText> for harmonious facial rejuvenation.</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-purple-300">Natural Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Achieve a refreshed, youthful appearance that looks natural and maintains your ability to express emotions authentically.</p>
                </CardContent>
              </Card>
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
              <h2 className="text-3xl font-bold mb-4 text-white">Marionette Lines Pricing London</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Transparent pricing for premium marionette line treatments. All prices include consultation, 
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
                    <CardTitle className="text-white text-2xl">Marionette Lines Only</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£325</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Perfect for targeted marionette line treatment</p>
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
                    <CardTitle className="text-white text-2xl">Liquid Facelift</CardTitle>
                    <div className="text-white text-4xl font-bold">£650</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-purple-100">Comprehensive treatment including marionette lines + nasolabial folds</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Comprehensive consultation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Multiple areas treated</span>
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
                Get expert answers about marionette line treatments and liquid facelifts from our experienced practitioners.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-black rounded-lg border-gray-800">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-900 rounded-lg">
                      <span className="text-white font-medium">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-300">
                      <AutoLinkedText>{faq.answer}</AutoLinkedText>
                    </AccordionContent>
                  </AccordionItem>
                ))}
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
                {[
                  {
                    title: "Nasolabial Folds",
                    price: "£325/ml",
                    description: "Reduce smile lines for a smoother transition from nose to mouth.",
                    features: ["Instant results", "12-18 months duration", "Natural enhancement"],
                    link: "/nasolabial-folds"
                  },
                  {
                    title: "Jawline (High Def/Jowls)",
                    price: "£350/ml",
                    description: "Define and contour jawline while addressing jowl sagging.",
                    features: ["Sculpted definition", "Youthful contour", "Professional technique"]
                  },
                  {
                    title: "Cheek Volume",
                    price: "£350/ml",
                    description: "Restore youthful cheek fullness and enhance facial proportions.",
                    features: ["Natural volume", "Lifted appearance", "Long-lasting results"]
                  },
                  {
                    title: "Tear Trough / Under Eye",
                    price: "£425",
                    description: "Address under-eye hollowing and dark circles for refreshed eyes.",
                    features: ["Refreshed look", "Reduced shadows", "Expert technique required"]
                  },
                  {
                    title: "Profhilo",
                    price: "£350",
                    description: "Bio-remodelling treatment for skin hydration and firmness.",
                    features: ["Skin bio-remodelling", "Hydration boost", "Natural glow"]
                  }
                ].map((treatment, index) => {
                  const CardComponent = (
                    <Card key={index} className="p-6 bg-gray-800/50 border-gray-700 hover:bg-gray-700/30 transition-colors">
                      <CardContent className="p-0">
                        <div className="flex justify-between items-start mb-4">
                          <h4 className="text-lg font-semibold text-white">{treatment.title}</h4>
                          <span className="text-xl font-bold text-yellow-400">{treatment.price}</span>
                        </div>
                        <p className="text-gray-300 text-sm mb-4">{treatment.description}</p>
                        <div className="space-y-2 mb-4">
                          {treatment.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-sm">
                              <CheckCircle className="h-4 w-4 text-green-400 mr-2 shrink-0" />
                              <span className="text-gray-400">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <Button variant="ghost" className="text-gray-400 hover:text-white p-0 h-auto">
                          Learn more <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  );

                  return treatment.link ? (
                    <Link key={index} to={treatment.link} className="block hover:no-underline">
                      {CardComponent}
                    </Link>
                  ) : (
                    CardComponent
                  );
                })}
              </div>
            </div>

            {/* Facial Contouring Treatments */}
            <div className="mb-16">
              <h3 className="text-3xl font-semibold text-white text-center mb-12">Facial Contouring</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "0.5ml Lip Filler (Natural)",
                    price: "£300",
                    description: "Subtle lip enhancement for naturally fuller lips.",
                    features: ["Natural enhancement", "Subtle volume", "Perfect proportions"]
                  },
                  {
                    title: "1ml Lip Filler (Bold & Plump)",
                    price: "£350",
                    description: "More dramatic lip enhancement for fuller, plumper lips.",
                    features: ["Bold results", "Dramatic volume", "Long-lasting effect"]
                  },
                  {
                    title: "Non Surgical Nose Job",
                    price: "£450",
                    description: "Reshape and refine nose contours without surgery.",
                    features: ["No surgery required", "Immediate results", "Reversible treatment"]
                  },
                  {
                    title: "Forehead Filler",
                    price: "£400",
                    description: "Smooth forehead bumps and dips for an even surface.",
                    features: ["Smooth surface", "Natural appearance", "Expert precision"]
                  },
                  {
                    title: "Temples Hollowing",
                    price: "£350/ml",
                    description: "Restore temple volume for a more youthful facial shape.",
                    features: ["Youthful restoration", "Natural volume", "Facial harmony"],
                    link: "/temple-filler-london"
                  },
                  {
                    title: "Redensity 1",
                    price: "£250/ml",
                    description: "Skin quality improvement with micro-injections.",
                    features: ["Skin quality boost", "Hydration enhancement", "Natural glow"]
                  }
                ].map((treatment, index) => {
                  const CardComponent = (
                    <Card key={index} className="p-6 bg-gray-800/50 border-gray-700 hover:bg-gray-700/30 transition-colors">
                      <CardContent className="p-0">
                        <div className="flex justify-between items-start mb-4">
                          <h4 className="text-lg font-semibold text-white">{treatment.title}</h4>
                          <span className="text-xl font-bold text-yellow-400">{treatment.price}</span>
                        </div>
                        <p className="text-gray-300 text-sm mb-4">{treatment.description}</p>
                        <div className="space-y-2 mb-4">
                          {treatment.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-sm">
                              <CheckCircle className="h-4 w-4 text-green-400 mr-2 shrink-0" />
                              <span className="text-gray-400">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <Button variant="ghost" className="text-gray-400 hover:text-white p-0 h-auto">
                          Learn more <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  );

                  return treatment.link ? (
                    <Link key={index} to={treatment.link} className="block hover:no-underline">
                      {CardComponent}
                    </Link>
                  ) : (
                    CardComponent
                  );
                })}
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
              <h2 className="text-3xl font-bold mb-4">Ready to Look 10 Years Younger?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert cosmetic doctors and discover how marionette line treatment 
                can transform your appearance with our liquid facelift approach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6"
                  onClick={() => window.open('https://med.as.me/harleystreet', '_blank')}
                >
                  Book Free Consultation
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6">
                  Call 0333 0551 503
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO content */}
        <div className="sr-only">
          <h3>Expert Marionette Lines Treatment and Liquid Facelift in London</h3>
          <p>
            Cosmedocs offers advanced marionette line dermal filler treatments and liquid facelift procedures at our prestigious Harley Street clinic in London. Our experienced cosmetic doctors specialize in the "10 years younger" transformation, particularly for younger individuals in their 30s seeking non-surgical facial rejuvenation. Marionette lines are vertical creases extending from mouth corners to the chin, often making patients appear sad or aged. These lines develop through natural aging, volume loss, decreased collagen production, and repetitive facial expressions. Our comprehensive liquid facelift approach addresses marionette lines alongside nasolabial folds, understanding that nasolabial creases result from repeated smiling while nasolabial folds stem from cheek volume loss causing skin sagging. The treatment uses premium hyaluronic acid dermal fillers strategically placed to restore volume and smooth lines. Our liquid facelift combines multiple treatments including marionette line correction, cheek volume restoration, nasolabial fold smoothing, and lip enhancement for harmonious results. The procedure takes 30-45 minutes with immediate visible improvements lasting 12-18 months. We use ultra-fine needles and premium fillers containing lidocaine for comfort. Recovery involves minimal downtime with most patients returning to activities immediately. Our consultation includes comprehensive facial assessment to determine optimal treatment approach. We achieve natural-looking results that maintain emotional expression while dramatically reducing signs of aging. Book your consultation today for expert marionette line treatment.
          </p>
        </div>
      </div>
    </>
  );
};

export default MarionnetteLines;
