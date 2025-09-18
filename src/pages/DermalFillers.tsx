import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateSEOMetadata } from '@/utils/seo';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Star, Award, Eye, Zap, ArrowRight, Users, BookOpen, Plus, Minus, Calendar, Activity, Syringe, GraduationCap, Palette, Heart } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Link } from 'react-router-dom';

const DermalFillerMakeover = () => {
  const seoData = generateSEOMetadata(
    "Dermal Filler Makeover London | Full Face Rejuvenation | Cosmedocs",
    "Expert dermal filler makeover in London for full face rejuvenation. Achieve natural-looking results with our personalized treatment plans. Book your consultation today.",
    "/dermal-filler-makeover"
  );

  const beforeAfterImages = [
    {
      src: "/lovable-uploads/64ee3f9e-7616-464d-962f-0a5ba656a82c.png",
      alt: "Dermal filler makeover before and after front view",
      caption: "Full face rejuvenation with dermal fillers - front view transformation"
    },
    {
      src: "/lovable-uploads/7d9d621d-c4ee-4c23-82fb-56ee04ef333f.png",
      alt: "Dermal filler makeover before and after side profile",
      caption: "Enhanced facial contours and profile definition"
    },
    {
      src: "/lovable-uploads/a4df5f90-dda5-48a2-9bd2-19728aa1a275.png",
      alt: "Dermal filler makeover cheek enhancement",
      caption: "Natural cheek enhancement and facial contouring"
    },
    {
      src: "/lovable-uploads/1beab5af-7f27-4505-83ec-b0fab7ef68cc.png",
      alt: "Dermal filler makeover jawline definition",
      caption: "Defined jawline and improved facial structure"
    },
    {
      src: "/lovable-uploads/e3020fef-05e0-4022-b981-0fe5dc9a2c53.png",
      alt: "Dermal filler makeover side profile enhancement",
      caption: "Elegant side profile enhancement with dermal fillers"
    },
    {
      src: "/lovable-uploads/462ae463-011b-428b-9685-1e13d2d061d9.png",
      alt: "Dermal filler makeover male jawline",
      caption: "Masculine jawline enhancement for male clients"
    }
  ];

  const faqItems = [
    {
      question: "What is Hyaluronic Acid and why is it used in dermal fillers?",
      answer: "Hyaluronic acid (HA) is a naturally occurring substance found in your skin, joints, and eyes. It's a powerful humectant that can hold up to 1,000 times its weight in water, making it exceptional for maintaining skin hydration and volume. In dermal fillers, HA provides natural-looking results because it integrates seamlessly with your body's existing hyaluronic acid. This biocompatible substance adds volume, smooths wrinkles, and enhances facial contours while maintaining a natural feel and appearance."
    },
    {
      question: "How does hyaluronic acid leave the body naturally?",
      answer: "Hyaluronic acid is completely biodegradable and leaves the body through natural metabolic processes. Your body's enzymes, particularly hyaluronidase, gradually break down the HA molecules over time. The broken-down components are then naturally absorbed and eliminated through your lymphatic system and kidneys. This process typically takes 12-18 months, which is why dermal filler results are temporary and require maintenance treatments. The gradual breakdown ensures a natural fade without sudden changes to your appearance."
    },
    {
      question: "How long do dermal filler makeover results last?",
      answer: "Dermal filler makeover results typically last 12-18 months, depending on the areas treated, the type of filler used, your metabolism, and lifestyle factors. Areas with more movement (like lips) may require touch-ups sooner, while deeper facial areas often maintain results longer. Our expert practitioners use premium hyaluronic acid fillers that provide long-lasting, natural-looking results with optimal longevity."
    },
    {
      question: "Is a dermal filler makeover safe?",
      answer: "Yes, when performed by qualified medical professionals using FDA-approved hyaluronic acid fillers, dermal filler makeovers are very safe. At Cosmedocs, our expert practitioners have extensive training in facial anatomy and injection techniques. We use only premium, medical-grade fillers and follow strict safety protocols. Side effects are typically minimal and temporary, including slight swelling or bruising that resolves within a few days."
    },
    {
      question: "What's the difference between dermal fillers and Botox?",
      answer: "Dermal fillers and Botox work differently to achieve complementary results. Dermal fillers add volume, restore lost facial structure, and enhance contours by filling spaces beneath the skin. Botox relaxes muscles to prevent dynamic wrinkles caused by facial expressions. A comprehensive facial rejuvenation often combines both treatments - fillers for volume restoration and structural enhancement, while Botox addresses expression lines and prevents new wrinkle formation."
    }
  ];

  const antiAgeingTreatments = [
    {
      title: "Marionette Lines",
      price: "£325/ml",
      description: "Smooth vertical lines from mouth corners to chin for a more youthful appearance.",
      features: ["Long-lasting results", "Natural appearance", "Minimal downtime"]
    },
    {
      title: "Nasolabial Folds",
      price: "£325/ml",
      description: "Reduce smile lines for a smoother transition from nose to mouth.",
      features: ["Instant results", "12-18 months duration", "Natural enhancement"]
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
  ];

  const facialContouringTreatments = [
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
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
      </Helmet>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section - Matching Face Botox Style */}
        <section className="relative py-32 overflow-hidden min-h-screen flex items-center bg-black">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-white">
                  Dermal Filler
                  <span className="block text-purple-300">Makeover</span>
                  <span className="block text-sm mt-4">Professional treatment for natural-looking results</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl">
                  <span className="text-purple-300 font-semibold">Expert Practitioners</span>
                  <br />
                  Full face rejuvenation with personalized treatment plans and invisible art philosophy
                </p>

                {/* Animated Tagline */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-lg md:text-xl text-gray-400 mb-8 relative"
                >
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent animate-pulse">
                      art • science • bit of magic
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/40 to-white/20 blur-sm rounded-lg animate-pulse opacity-50"></span>
                  </span>
                </motion.p>

                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">From £350</p>
                  <p className="text-sm text-gray-300">45-60 minutes • Results last 12-18 months</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold" asChild>
                    <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">Book Consultation</a>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold"
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
              <h2 className="text-3xl font-bold mb-8 text-white">Dermal Filler Makeover Treatment</h2>
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
                <p className="text-gray-300">45-60 minutes including consultation</p>
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

        {/* Before & After Carousel */}
        <section className="w-full py-24 bg-gray-900/30">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Real Patient <span className="text-purple-300">Transformations</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See the incredible results achieved through our expert dermal filler makeover treatments
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

        {/* Treatment Details */}
        <section className="w-full py-24 bg-gray-900/50">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Treatment Details</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to know about our dermal filler makeover treatments
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="p-8 bg-gray-800/50 shadow-lg border-gray-700">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-semibold mb-6 text-white">What is a Dermal Filler Makeover?</h3>
                  <p className="text-gray-300 leading-relaxed">
                    A dermal filler makeover is a comprehensive treatment plan designed to rejuvenate the entire face using a combination of dermal fillers.
                    It addresses multiple areas to create a balanced and harmonious result that enhances your natural features.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8 bg-gray-800/50 shadow-lg border-gray-700">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-semibold mb-6 text-white">What Areas Can Be Treated?</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Common treatment areas include cheeks, temples, under-eye area, nasolabial folds, marionette lines, lips, and jawline.
                    The specific areas treated will depend on your individual needs and aesthetic goals.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Comprehensive Treatment Areas */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Comprehensive Treatment Areas</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Our dermal filler treatments target multiple facial areas for complete rejuvenation 
                and natural-looking results that enhance your overall facial harmony.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { area: "Cheek Enhancement", description: "Restore youthful volume and create natural lift for defined cheekbones" },
                { area: "Nasolabial Folds", description: "Smooth smile lines from nose to mouth corners for a more youthful appearance" },
                { area: "Marionette Lines", description: "Address downward lines from mouth corners to chin for improved facial contour" },
                { area: "Jawline Definition", description: "Create sharp, masculine or feminine jawline definition with strategic placement" },
                { area: "Tear Trough", description: "Reduce under-eye hollowing and dark circles for a refreshed, rested look" },
                { area: "Lip Enhancement", description: "Add volume, shape, and definition to lips for natural or dramatic results" },
                { area: "Temple Hollowing", description: "Restore temple volume lost with aging for improved facial proportions" },
                { area: "Non-Surgical Nose Job", description: "Reshape and refine nose contours without surgery for immediate results" },
                { area: "Forehead Enhancement", description: "Smooth bumps and irregularities for an even, youthful forehead surface" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-black/50 border-gray-700 h-full hover:border-purple-400 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-white text-lg">{item.area}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
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
              <h2 className="text-3xl font-bold mb-4 text-white">Dermal Filler Makeover Pricing</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Transparent pricing for premium dermal filler makeover treatments. All prices include consultation, 
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
                    <CardTitle className="text-white text-2xl">Mini Makeover</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£650</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">2-3 areas with 1-2ml filler</p>
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
                    <CardTitle className="text-white text-2xl">Full Makeover</CardTitle>
                    <div className="text-white text-4xl font-bold">£1,200</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-purple-100">4-5 areas with 3-4ml filler</p>
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
              <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 text-lg font-semibold" asChild>
                <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">Book Your Consultation</a>
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
        <section className="w-full py-24 bg-gray-900/30">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to know about dermal filler makeovers and hyaluronic acid treatments
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqItems.map((faq, index) => (
                <Collapsible key={index} className="bg-gray-800/50 rounded-2xl border border-gray-700">
                  <CollapsibleTrigger className="flex w-full items-center justify-between p-6 text-left hover:bg-gray-700/30 transition-colors rounded-2xl">
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                    <Plus className="h-5 w-5 text-purple-400 shrink-0" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </CollapsibleContent>
                </Collapsible>
              ))}
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

            {/* Consultation Info */}
            <div className="text-center mb-12">
              <Card className="inline-block bg-purple-600/20 border-purple-500/30 p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-white mb-2">Consultation</h3>
                  <p className="text-2xl font-bold text-purple-300">£50</p>
                  <p className="text-sm text-gray-300">(off any treatment)</p>
                </CardContent>
              </Card>
            </div>

            {/* Anti-Ageing Treatments */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Anti-Ageing Treatments</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {antiAgeingTreatments.map((treatment, index) => {
                  // Map treatment titles to their respective pages
                  const getPageLink = (title: string) => {
                    switch (title) {
                      case "Marionette Lines":
                        return "/marionette-lines";
                      case "Nasolabial Folds":
                        return "/nasolabial-folds";
                      case "Jawline (High Def/Jowls)":
                        return "/jawline-filler";
                      case "Cheek Volume":
                        return "/cheek-filler";
                      case "Tear Trough / Under Eye":
                        return "/tear-trough-filler";
                      case "Profhilo":
                        return "/profhilo-treatment";
                      default:
                        return null;
                    }
                  };

                  const pageLink = getPageLink(treatment.title);

                  return (
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
                        {pageLink ? (
                          <Link to={pageLink}>
                            <Button variant="ghost" className="text-gray-400 hover:text-white p-0 h-auto">
                              Learn more <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        ) : (
                          <Button variant="ghost" className="text-gray-400 hover:text-white p-0 h-auto">
                            Learn more <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Facial Contouring Treatments */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Facial Contouring</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {facialContouringTreatments.map((treatment, index) => {
                  // Map treatment titles to their respective pages
                  const getPageLink = (title: string) => {
                    switch (title) {
                      case "0.5ml Lip Filler (Natural)":
                      case "1ml Lip Filler (Bold & Plump)":
                        return "/lip-fillers";
                      case "Non Surgical Nose Job":
                        return "/non-surgical-nose-job";
                      case "Forehead Filler":
                        return "/forehead-fillers";
                      case "Temples Hollowing":
                        return "/temple-filler-london";
                      default:
                        return null;
                    }
                  };

                  const pageLink = getPageLink(treatment.title);

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
                        {pageLink ? (
                          <Link to={pageLink}>
                            <Button variant="ghost" className="text-gray-400 hover:text-white p-0 h-auto">
                              Learn more <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        ) : (
                          <Button variant="ghost" className="text-gray-400 hover:text-white p-0 h-auto">
                            Learn more <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        )}
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

            <div className="text-center mt-12">
              <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-4 text-lg font-semibold">
                View All Dermal Filler Treatments
              </Button>
            </div>
          </div>
        </section>


        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true">
          <h2>Dermal Filler Makeover London Full Face Rejuvenation Cosmedocs Natural Results Hyaluronic Acid</h2>
          <p>
            Dermal filler makeover London, full face rejuvenation, Cosmedocs, dermal fillers, facial enhancement, natural results, personalized treatment plans, expert practitioners, cheek fillers, temple fillers, under-eye fillers, nasolabial folds, marionette lines, lip fillers, jawline fillers, youthful appearance, refreshed appearance, invisible art, bold natural always your way, aesthetic medicine, minimal transformation, quiet enhancement, before after results, patient transformations, hyaluronic acid, HA fillers, biodegradable fillers, natural breakdown, lymphatic system, enzyme breakdown, hyaluronidase, facial contouring, anti-ageing treatments, consultation, professional medical treatment, FDA approved fillers, safety protocols, facial anatomy, injection techniques, premium fillers, medical grade, side effects, temporary results, maintenance treatments, facial rejuvenation, volume restoration, structural enhancement, biocompatible substance, humectant properties, skin hydration, wrinkle smoothing, facial proportions, natural integration.
          </p>
        </div>
      </div>
    </>
  );
};

export default DermalFillerMakeover;
