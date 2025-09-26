import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Check, Clock, Calendar, Activity, Syringe, CheckCircle, Award, GraduationCap, Palette, Heart } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";

const BruxismBotox = () => {
  const seoData = generateSEOMetadata(
    "Bruxism Botox London | TMJ Treatment | Cosmedocs Harley Street",
    "Expert bruxism botox treatment in London for teeth grinding and TMJ disorders. Professional masseter muscle botox by cosmetic doctors. Therapeutic results at Harley Street clinic.",
    "/bruxism-botox"
  );

  const beforeAfterImages = [
    { src: "/lovable-uploads/a9533a9b-0dd5-4e65-8c88-8e415e07f1ff.png", alt: "Before and after photos of masseter Botox for bruxism, showing significant muscle reduction", caption: "Note the remarkable difference in the jawline angle and muscle size before and after masseter Botox treatment." },
    { src: "/lovable-uploads/0fc2f9cc-be54-45a6-b6ac-11c1f0dc04ad.png", alt: "A doctor marking the masseter muscle on a patient's jawline in preparation for Botox treatment", caption: "TMJ Botox: Our doctor marks the masseter muscle for precise Botox for Bruxism treatment." }
  ];

  const faqs = [
    {
      question: "How does botox help with bruxism and TMJ?",
      answer: "Botox relaxes the masseter muscles responsible for jaw clenching and teeth grinding. This reduces muscle tension, alleviates TMJ pain, and prevents dental damage while creating a slimmer jawline as a cosmetic benefit."
    },
    {
      question: "How long do bruxism botox results last?",
      answer: "Bruxism botox results typically last 4-6 months. The masseter muscles gradually regain strength, requiring maintenance treatments to sustain therapeutic benefits and prevent return of grinding symptoms."
    },
    {
      question: "Is bruxism botox painful?",
      answer: "Bruxism botox involves moderate discomfort due to the thick masseter muscles. Most patients describe it as pressure sensations during injection. The treatment takes 10-15 minutes with our doctors using specialized techniques."
    },
    {
      question: "What can I expect after bruxism botox treatment?",
      answer: "You may experience mild jaw tenderness for 24-48 hours. Grinding reduction begins within 1-2 weeks, with maximum benefits at 4-6 weeks. Jawline slimming becomes noticeable after 6-8 weeks of treatment."
    },
    {
      question: "Am I a good candidate for bruxism botox?",
      answer: "Ideal candidates have teeth grinding, jaw clenching, TMJ pain, or enlarged masseter muscles. A consultation will assess your jaw function and determine if this therapeutic treatment is appropriate for your condition."
    },
    {
      question: "How much does bruxism botox cost?",
      answer: "Bruxism botox at Cosmedocs costs £300-450 depending on the severity and muscle size. This therapeutic treatment requires higher doses than cosmetic botox for effective muscle relaxation and symptom relief."
    },
    {
      question: "Can bruxism botox be combined with other treatments?",
      answer: "Yes! Bruxism botox can be combined with cosmetic facial botox and dermal fillers for comprehensive aesthetic and therapeutic benefits. Our doctors create personalized treatment plans addressing both concerns."
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
        <meta name="keywords" content="bruxism botox London, TMJ treatment, teeth grinding botox, masseter muscle botox, jaw slimming, therapeutic botox, Harley Street clinic" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Cosmedocs",
            "description": "Expert bruxism botox treatments in London",
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
                  <span className="text-purple-300">Bruxism Botox London</span>
                  <span className="block text-sm mt-4">Invisible art - jaw relief that speaks without words</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Expert TMJ & Teeth Grinding Treatment</p>
                  <p className="text-sm text-gray-300">10-15 minutes • Results last 4-6 months</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl"
                    onClick={() => window.open('https://med.as.me/harleystreet', '_blank')}
                  >
                    Book Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm"
                    onClick={() => {
                      const pricingSection = document.getElementById('pricing-section');
                      if (pricingSection) {
                        pricingSection.scrollIntoView({ behavior: 'smooth' });
                      }
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
              <h2 className="text-3xl font-bold mb-8 text-white">Bruxism Botox Treatment</h2>
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
                <p className="text-gray-300">10-15 minutes including consultation</p>
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
                <p className="text-gray-300">4-6 months with gradual muscle return</p>
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
              <h2 className="text-3xl font-bold mb-4">Bruxism Botox Before and After Results</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See how our expert bruxism botox treatments reduce jaw tension while creating a slimmer, more defined jawline.
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

        {/* What is Bruxism Botox */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">TMJ & Bruxism Botox</h2>
              <div className="text-gray-300 max-w-3xl mx-auto text-lg mb-8">
                <p>
                  Botox for TMJ and bruxism works by gently relaxing the overactive jaw muscles responsible for teeth grinding, clenching, and jaw tension. By reducing strain on the masseter and surrounding muscles, this treatment provides both functional relief and subtle aesthetic benefits.
                </p>
                
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 max-w-4xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-white text-2xl text-center">Understanding Bruxism and TMJ</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-gray-300 text-lg leading-relaxed space-y-4">
                    <p>
                      <strong className="text-white">Bruxism Botox:</strong> Helps prevent teeth damage, reduces jaw tightness, and may create a softer, more refined jawline.
                    </p>
                    
                    <p>
                      <strong className="text-white">TMJ Botox:</strong> Relieves jaw pain, headaches, and stiffness linked to temporomandibular joint disorder.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-8 max-w-2xl mx-auto">
                <p className="text-gray-300 text-center">
                  Safe, minimally invasive, and effective, this treatment targets the root cause of jaw discomfort — offering long-lasting relief and improved quality of life.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Causes of Bruxism */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Causes of Bruxism</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Bruxism, commonly known as teeth grinding, can be caused by several factors. Understanding these causes is crucial for effectively managing and treating this condition.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img 
                  src="/lovable-uploads/ca0d519c-295a-47a5-ad68-27462c0fa778.png" 
                  alt="Bruxism teeth grinding long term effects on teeth wear and tear"
                  className="w-full rounded-lg shadow-2xl"
                />
                <p className="text-gray-400 text-sm mt-2 text-center">
                  Botox for Bruxism reduces the pressure on the teeth, reducing long-term wear and tear.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Primary Causes:</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5" />
                        <span><strong>Stress and Anxiety:</strong> Major contributors leading to involuntary jaw clenching and grinding, especially during sleep</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5" />
                        <span><strong>Misaligned Teeth:</strong> Can disrupt normal jaw alignment and function</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5" />
                        <span><strong>Lifestyle Habits:</strong> Smoking, heavy alcohol consumption, and excessive caffeine</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5" />
                        <span><strong>Medications:</strong> Certain medications and medical conditions can predispose individuals to bruxism</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* TMJ Botox Helps */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">TMJ Botox Helps With:</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Jaw grinding can enlarge the masseter muscle, which is responsible for chewing. Our therapeutic botox provides relief from multiple symptoms.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Check className="w-6 h-6" />, title: "Headaches and Migraines", description: "Reduce tension-related headaches" },
                { icon: <Check className="w-6 h-6" />, title: "Earaches", description: "Relieve referred ear pain" },
                { icon: <Check className="w-6 h-6" />, title: "Facial Pain", description: "Alleviate jaw and facial discomfort" },
                { icon: <Check className="w-6 h-6" />, title: "Neck Pain", description: "Reduce tension in neck muscles" },
                { icon: <Check className="w-6 h-6" />, title: "Chipped Teeth & Sensitivity", description: "Prevent dental damage" },
                { icon: <Check className="w-6 h-6" />, title: "Chewed Tissue", description: "Protect inside of mouth" },
                { icon: <Check className="w-6 h-6" />, title: "Jaw Stiffness", description: "Improve jaw movement" },
                { icon: <Check className="w-6 h-6" />, title: "Sleep Disturbance", description: "Reduce sleep bruxism" },
                { icon: <Check className="w-6 h-6" />, title: "Shoulder Tension", description: "Relieve muscle tightness" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                    <CardContent className="p-6 text-center">
                      <div className="bg-purple-500/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                        <div className="text-purple-400">{item.icon}</div>
                      </div>
                      <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Understanding the Muscles of Mastication */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Understanding the Muscles of Mastication</h2>
              <h3 className="text-xl text-purple-300 mb-4">Size and Relevance to TMJ, Bruxism and Botox</h3>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                The muscles of mastication are key players in jaw movement and are directly involved in conditions like TMJ and bruxism.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Muscles That Botox Treatments Commonly Target</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="border-l-4 border-purple-400 pl-4">
                      <h4 className="text-white font-semibold mb-2">1. Masseter Muscle</h4>
                      <p className="text-gray-300 text-sm">
                        This is the largest and most powerful muscle of mastication. It plays a significant role in clenching the jaw and is often involved in bruxism. Botox injections in the masseter muscle can also be used for cosmetic jawline slimming.
                      </p>
                    </div>
                    <div className="border-l-4 border-purple-400 pl-4">
                      <h4 className="text-white font-semibold mb-2">2. Temporalis Muscle</h4>
                      <p className="text-gray-300 text-sm">
                        Located over the temples, the temporalis assists in closing the jaw and clenching. If symptoms indicate, administering Botox injections in the temporalis muscle can also effectively treat bruxism (e.g. associated headaches).
                      </p>
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
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Muscles That Botox Treatments Seldom Target</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="border-l-4 border-gray-400 pl-4">
                      <h4 className="text-white font-semibold mb-2">1. Medial Pterygoid</h4>
                      <p className="text-gray-300 text-sm">
                        This muscle, while smaller than the masseter and temporalis, assists in elevating the jaw and plays a role in grinding movements from side to side. It can be involved in TMJ disorders by contributing to uneven jaw movements and strain.
                      </p>
                    </div>
                    <div className="border-l-4 border-gray-400 pl-4">
                      <h4 className="text-white font-semibold mb-2">2. Lateral Pterygoid</h4>
                      <p className="text-gray-300 text-sm">
                        The smallest of the mastication muscles, the lateral pterygoid helps open the jaw and move it from side to side. Its function is crucial in the mechanics of the TMJ and can be a source of dysfunction in TMJ disorders.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Treatment Video Demonstration */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Treatment Video Demonstration</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Watch our expert demonstration of professional bruxism botox treatment techniques.
              </p>
            </motion.div>

            {/* Treatment Video */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="max-w-4xl mx-auto">
                <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/5ZRGFLus2SQ"
                    title="Botox for bruxism treatment demonstration"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0"
                  ></iframe>
                </div>
                <p className="text-gray-300 text-sm mt-4">
                  Botox for bruxism effectively targets the muscles responsible for jaw tension and teeth grinding. We primarily inject the masseter and/or temporalis muscles.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* High Risk Group for Teeth Grinding */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">High Risk Group for Teeth Grinding</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Some groups of people are more susceptible to bruxism than others. Those at the highest risk include:
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Individuals with Other Sleep Disorders</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-purple-400" />
                        <span>Snoring</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-purple-400" />
                        <span>Obstructive sleep apnea</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-purple-400" />
                        <span>Sleep talking</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-purple-400" />
                        <span>Violent behaviour during sleep</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-purple-400" />
                        <span>Sleep paralysis</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-purple-400" />
                        <span>Hypnagogic/hypnopompic hallucinations</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Individuals Leading Stressful Lifestyles</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-purple-400" />
                        <span>Smokers</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-purple-400" />
                        <span>People with high alcohol consumption</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-purple-400" />
                        <span>Patients consuming 6+ cups of tea or coffee daily</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-purple-400" />
                        <span>People taking medication for sleep, depression, and/or anxiety</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-purple-400" />
                        <span>Energetic personality types</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-purple-400" />
                        <span>Those with family history of bruxism</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Client Reviews */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Client Reviews</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Hear from our satisfied clients about their bruxism botox experience.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <CheckCircle key={i} className="w-5 h-5 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4">
                      "I've had three facial areas treated with Anti-Wrinkle Injection at CosmeDocs in recent years, and find the treatment swift, thorough and effective. Also, Dr Haq's pleasant and friendly manner makes the treatment as painless as possible!"
                    </p>
                    <p className="text-purple-300 font-semibold">- Verified Client</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <CheckCircle key={i} className="w-5 h-5 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4">
                      "I had a facial aesthetic treatment with CosmeDocs. I found the price very reasonable. Even better the results were excellent. I will definitely use this service again."
                    </p>
                    <p className="text-purple-300 font-semibold">- Verified Client</p>
                  </CardContent>
                </Card>
              </motion.div>
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
              <h2 className="text-3xl font-bold mb-6 text-white">Bruxism Botox Pricing</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Transparent pricing for therapeutic bruxism botox treatments at our Harley Street clinic.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader className="text-center">
                    <CardTitle className="text-white text-xl">Standard Treatment</CardTitle>
                    <div className="text-3xl font-bold text-purple-300">£350</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Both masseter muscles</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Lower dose treatment</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Expert consultation</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full border-2 border-purple-400">
                  <CardHeader className="text-center">
                    <CardTitle className="text-white text-xl">For Both Male & Female</CardTitle>
                    <div className="text-3xl font-bold text-purple-300">£350</div>
                    <div className="text-sm text-purple-400">Standard Price</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Both masseter muscles</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Standard dose</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">TMJ relief</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Jawline slimming</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader className="text-center">
                    <CardTitle className="text-white text-xl">Complex Cases</CardTitle>
                    <div className="text-3xl font-bold text-purple-300">£450</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Both masseter muscles</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Higher dose treatment</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Maximum relief</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Ongoing support</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
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
              <h2 className="text-3xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Common questions about bruxism botox treatments answered by our expert doctors.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 rounded-lg px-6">
                    <AccordionTrigger className="text-white hover:text-purple-300 text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black">
          <div className="page-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Ready to Relieve Your Jaw Tension?</h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Book your expert consultation today and discover how therapeutic botox can transform your comfort and appearance.
              </p>
              <Button 
                className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl"
                onClick={() => window.open('https://med.as.me/harleystreet', '_blank')}
              >
                Book Free Consultation
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h3>Expert Bruxism Botox Treatment in London</h3>
          <p>Cosmedocs offers professional bruxism botox treatments for teeth grinding and TMJ disorders. Our experienced cosmetic doctors use advanced botulinum toxin injection techniques to relax masseter muscles and provide therapeutic relief. Located in prestigious Harley Street, our clinic provides comprehensive jaw assessments and personalized treatment plans.</p>
          
          <h4>Why Choose Cosmedocs for Bruxism Botox?</h4>
          <p>Our invisible art philosophy ensures effective therapeutic treatment while providing aesthetic jawline slimming benefits. We specialize in precise masseter muscle targeting using the latest injection techniques for optimal outcomes. Our doctors have extensive experience in therapeutic botox applications and jaw anatomy, ensuring safe and effective treatments.</p>
          
          <h4>Understanding Bruxism and TMJ Disorders</h4>
          <p>Bruxism involves unconscious teeth grinding and jaw clenching that can cause dental damage, headaches, and TMJ pain. Professional botox treatment relaxes the overactive masseter muscles, reducing grinding frequency and providing significant relief from associated symptoms while creating aesthetic facial slimming.</p>
          
          <h4>Treatment Process and Jaw Care</h4>
          <p>Our bruxism botox treatment begins with a comprehensive jaw assessment and medical history review. The injection process takes 10-15 minutes using specialized techniques for the thick masseter muscles. Results appear gradually over 1-4 weeks, with optimal effects lasting 4-6 months. We provide ongoing TMJ management support and regular follow-up care.</p>
        </div>
      </div>
    </>
  );
};

export default BruxismBotox;