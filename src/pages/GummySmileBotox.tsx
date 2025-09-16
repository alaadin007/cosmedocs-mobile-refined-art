
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
import { Clock, Calendar, Activity, Syringe, Award, GraduationCap, CheckCircle, Palette, Heart } from "lucide-react";

const GummySmileBotox = () => {
  const seoData = generateSEOMetadata(
    "Gummy Smile Botox | Fix Excessive Gum Display | Cosmedocs",
    "Gummy smile botox before and after results. Expert botox for gummy smile treatment. Fix excessive gum display naturally. Book consultation.",
    "/gummy-smile-botox"
  );

  const beforeAfterImages = [
    { 
      src: "/lovable-uploads/13ac9c3a-f117-440d-a458-ac5bc69b4d64.png", 
      alt: "Gummy smile before and after Botox treatment", 
      caption: "Dramatic reduction in gum display after targeted Botox injections - achieving perfect smile proportions" 
    },
    { 
      src: "/lovable-uploads/6979990b-3579-4571-b139-3501a368919b.png", 
      alt: "Gummy smile correction results", 
      caption: "Natural-looking smile enhancement with reduced gum visibility" 
    },
    { 
      src: "/lovable-uploads/4208979a-6544-4949-898f-4915a9791946.png", 
      alt: "Gummy smile Botox before after", 
      caption: "Precise Botox placement creating harmonious smile proportions" 
    }
  ];

  const faqs = [
    {
      question: "How does Botox treat a gummy smile?",
      answer: "Botox works by relaxing the overactive muscles that lift the upper lip too high when smiling. By strategically injecting small amounts of Botox into the levator labii superioris muscle, we reduce the lip's elevation, resulting in less gum display and a more balanced smile."
    },
    {
      question: "Is gummy smile Botox treatment painful?",
      answer: "The treatment involves minimal discomfort as we use ultra-fine needles and can apply topical anaesthetic if needed. Most patients describe the sensation as a quick pinprick. The entire procedure takes only 10-15 minutes."
    },
    {
      question: "How long do gummy smile Botox results last?",
      answer: "Results typically last 3-4 months, similar to other Botox treatments. The effects gradually wear off as the muscle activity returns to normal. Regular maintenance treatments help maintain optimal results."
    },
    {
      question: "When will I see results from gummy smile Botox?",
      answer: "Initial results begin to appear within 3-5 days, with full effects visible after 10-14 days. The improvement in smile proportions becomes increasingly noticeable as the Botox takes full effect. Gradual muscle relaxation over 5-10 days reveals your refined smile with perfect tooth-to-gum ratio and natural expression."
    },
    {
      question: "How long does the gradual enhancement process take?",
      answer: "The enhancement unfolds in stages: Days 1-3 show minimal change, Days 4-7 reveal initial muscle relaxation and subtle gum reduction, Days 8-14 demonstrate full results with optimal smile proportions. This progressive transformation ensures natural-looking results that enhance your facial harmony."
    },
    {
      question: "Are there any side effects of gummy smile Botox?",
      answer: "Side effects are rare and typically mild, including temporary bruising, swelling, or slight asymmetry. Our experienced practitioners minimize risks through precise injection techniques and thorough patient assessment."
    },
    {
      question: "Who is a good candidate for gummy smile Botox?",
      answer: "Ideal candidates are those with excessive gum display caused by overactive lip muscles, good overall health, and realistic expectations. A consultation with our expert practitioners will determine if you're suitable for this treatment."
    },
    {
      question: "How much does gummy smile Botox cost?",
      answer: "Gummy smile Botox treatment starts from £150-£300 depending on the number of units required. We provide transparent pricing during your consultation based on your specific needs."
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
        <meta name="keywords" content="gummy smile botox before and after, botox for gummy smile, gummy smile with botox, botox and gummy smile, how to fix a gummy smile, showing gum, gummy smile, gum smile, how to get rid of gummy smile, botox on mouth, gummy smile botox, botox gummy smile, Harley Street clinic" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Cosmedocs",
            "description": "Expert gummy smile Botox treatments in London",
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
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-white">
                  <span className="text-purple-300">Gummy Smile Botox</span>
                  <span className="block text-sm mt-4">Invisible art - natural smile enhancement that speaks without words</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Expert Gummy Smile Correction</p>
                  <p className="text-sm text-gray-300">Quick 15-minute treatment • Natural results • Expert precision</p>
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
              <h2 className="text-3xl font-bold mb-8 text-white">Gummy Smile Botox Treatment</h2>
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
                <p className="text-gray-300">3-4 months with gradual muscle activity return</p>
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
                <p className="text-gray-300">Immediate return to activities</p>
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
                <p className="text-gray-300">Topical anaesthetic if required</p>
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
              <h2 className="text-3xl font-bold mb-4">Gummy Smile Transformation Results</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See how our expert gummy smile <AutoLinkedText linkClassName="text-purple-400 hover:text-purple-300 underline transition-colors">Botox treatments</AutoLinkedText> create perfectly balanced smiles with natural-looking results.
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
                title="Gummy Smile Botox Results Gallery"
                description="Comprehensive collection of our gummy smile correction treatments"
              />
            </div>
          </div>
        </section>

        {/* What is Gummy Smile Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl font-bold mb-6">What is a Gummy Smile?</h2>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                A gummy smile occurs when excessive gum tissue is visible when you smile, creating an imbalanced appearance between your teeth and gums. This condition affects up to 25% of adults and can significantly impact confidence and self-esteem.
              </p>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                <AutoLinkedText linkClassName="text-purple-400 hover:text-purple-300 underline transition-colors">The ideal smile shows minimal gum tissue - typically 1-3mm above the upper teeth. When more than 4mm of gum is visible, it's considered a gummy smile that can benefit from targeted Botox treatment.</AutoLinkedText>
              </p>
              
            </motion.div>
          </div>
        </section>

        {/* Effectiveness and Causes Section */}
        <section className="py-20">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 text-white">Effectiveness of Botox for Gummy Teeth</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  In a <a href="https://pubmed.ncbi.nlm.nih.gov/28621277/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">2016 study conducted in a dermatology clinic</a>, 99.6 per cent of the women saw a significant difference in their smiles after two weeks.
                </p>
                <div className="bg-purple-900/30 border-l-4 border-purple-500 p-6 rounded-r-lg">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="text-purple-300 text-4xl font-bold">99.6%</div>
                    <div className="text-white font-semibold">Success Rate</div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Patients experienced significant improvement in their smile aesthetics within just 2 weeks of treatment
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 text-white">Common Causes Of A Gummy Smile</h2>
                <p className="text-gray-300 mb-6">
                  Among many causes behind your gummy smile, the most common ones are as follows:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">Extended or enlarged gums</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">Hyperactive upper lip that elevates excessively when smiling</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">Vertical Maxillary Axis or overgrowth of upper jaw</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">Smaller teeth in comparison to gums due to genetic factors</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">Short upper lip anatomy creating excessive gum exposure</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Surgical vs Botox Comparison */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Surgical Options vs Botox for Gummy Smile</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Understanding the key differences between surgical correction and Botox treatment to help you make an informed decision for your gummy smile
              </p>
            </motion.div>
            
            <div className="page-container">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Surgical Options */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-accent border-red-500/30 h-full">
                    <CardHeader>
                      <CardTitle className="text-white text-xl flex items-center">
                        <Syringe className="mr-3 text-red-400" size={24} />
                        Surgical Correction
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-gray-300">
                        Invasive procedures including lip lengthening surgery, crown lengthening, or orthognathic surgery for permanent gummy smile correction.
                      </p>
                      
                      <div className="bg-red-900/20 rounded-lg p-6 border border-red-500/30">
                        <ul className="text-gray-300 space-y-3">
                          <li className="flex items-center"><span className="text-red-400 mr-3">•</span> General anesthesia required</li>
                          <li className="flex items-center"><span className="text-red-400 mr-3">•</span> 2-6 weeks recovery time</li>
                          <li className="flex items-center"><span className="text-red-400 mr-3">•</span> £3,000-£15,000+ cost</li>
                          <li className="flex items-center"><span className="text-red-400 mr-3">•</span> Permanent but irreversible</li>
                          <li className="flex items-center"><span className="text-red-400 mr-3">•</span> Risk of surgical complications</li>
                          <li className="flex items-center"><span className="text-red-400 mr-3">•</span> Potential scarring</li>
                          <li className="flex items-center"><span className="text-red-400 mr-3">•</span> Extensive downtime needed</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Botox Treatment */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-accent border-primary h-full">
                    <CardHeader>
                      <CardTitle className="text-white text-xl flex items-center">
                        <Heart className="mr-3 text-purple-400" size={24} />
                        Botox Treatment
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-gray-300">
                        Non-invasive neurotoxin injections that relax the upper lip muscles for natural gummy smile reduction with minimal downtime.
                      </p>
                      
                      <div className="bg-purple-900/10 rounded-lg p-6 border border-purple-500/30">
                        <ul className="text-gray-300 space-y-3">
                          <li className="flex items-center"><span className="text-purple-400 mr-3">•</span> Topical anesthetic only</li>
                          <li className="flex items-center"><span className="text-purple-400 mr-3">•</span> Immediate return to activities</li>
                          <li className="flex items-center"><span className="text-purple-400 mr-3">•</span> £150-£300 cost-effective</li>
                          <li className="flex items-center"><span className="text-purple-400 mr-3">•</span> 3-4 months duration</li>
                          <li className="flex items-center"><span className="text-purple-400 mr-3">•</span> Fully reversible</li>
                          <li className="flex items-center"><span className="text-purple-400 mr-3">•</span> Natural-looking results</li>
                          <li className="flex items-center"><span className="text-purple-400 mr-3">•</span> No surgical risks</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
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
              <h2 className="text-3xl font-bold mb-4 text-white">Gummy Smile Botox Pricing London</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Transparent pricing for expert gummy smile correction treatments. All prices include consultation, 
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
                    <CardTitle className="text-white text-2xl">Standard Treatment</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£150</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Perfect for mild to moderate gummy smile correction</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Consultation included</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Premium Botox injection</span>
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
                    <CardTitle className="text-white text-2xl">Enhanced Treatment</CardTitle>
                    <div className="text-white text-4xl font-bold">£300</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-purple-100">Ideal for comprehensive correction with additional units</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Comprehensive consultation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Premium Botox injection</span>
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
              <Button 
                onClick={() => window.open(bookingUrl, "_blank")}
                className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 text-lg font-semibold"
              >
                Book Your Consultation
              </Button>
            </motion.div>
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
              <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                Get expert answers about gummy smile <AutoLinkedText linkClassName="text-purple-400 hover:text-purple-300 underline transition-colors">Botox treatment</AutoLinkedText> from our experienced cosmetic doctors.
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
                      <AutoLinkedText linkClassName="text-purple-400 hover:text-purple-300 underline transition-colors">{faq.answer}</AutoLinkedText>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
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
              <h2 className="text-3xl font-bold mb-4">Ready for Perfect Smile Proportions?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert cosmetic doctors and discover how gummy smile Botox 
                can enhance your natural beauty with subtle, sophisticated results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.open(bookingUrl, "_blank")}
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6"
                >
                  Book Consultation
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6">
                  Call 0333 0551 503
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO content for search engines */}
        <div className="sr-only">
          <h3>Expert Gummy Smile Treatment in London</h3>
          <p>
            Cosmedocs offers the most advanced gummy smile Botox treatments in London, located in our prestigious Harley Street clinic. Our experienced cosmetic doctors specialize in correcting excessive gum display through precise Botox injections that target the levator labii superioris muscle. This innovative approach reduces overactive muscle contraction that causes the upper lip to lift too high during smiling, revealing excessive gum tissue. Our treatment protocol begins with comprehensive facial analysis to understand your unique muscle anatomy and smile dynamics. We then strategically inject small amounts of Botox into specific muscle points to achieve optimal smile proportions while maintaining natural facial expressions. The procedure takes just 15-20 minutes and requires no downtime, making it an ideal solution for busy professionals seeking smile enhancement. Results begin appearing within 3-5 days and reach full effect after 10-14 days, lasting approximately 3-4 months. Our patients appreciate the subtle yet transformative results that enhance their confidence and create more balanced facial aesthetics. We use only premium-grade Botox products and follow strict medical protocols to ensure safety and efficacy. The treatment is suitable for most adults with excessive gum display caused by overactive lip muscles, and our expert assessment determines candidacy during your initial consultation. Post-treatment care is minimal, with patients able to return to normal activities immediately while avoiding strenuous exercise for 24 hours. Regular maintenance treatments help sustain optimal results and can be scheduled every 3-4 months. Our Harley Street location provides a luxurious and discreet environment for your treatment, with state-of-the-art facilities and the highest medical standards. Book your consultation today to discover how gummy smile Botox can transform your smile and boost your confidence.
          </p>
        </div>
      </div>
    </>
  );
};

export default GummySmileBotox;
