import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Phone, Clock, ShieldCheck, Award, Users, Activity } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { generateSEOMetadata } from "@/utils/seo";

const HyperpigmentationTreatment = () => {
  const seoData = generateSEOMetadata(
    "Hyperpigmentation Treatment London | Melasma & Dark Patches | Cosmedocs",
    "Expert hyperpigmentation treatment in London. Effective solutions for melasma, dark patches, and melanin irregulation using advanced IPL, chemical peels, and prescription skincare.",
    "/hyperpigmentation-treatment"
  );

  const beforeAfterImages = [
    { 
      src: "/lovable-uploads/0573fff6-1f9b-4393-a953-0c3f4b654eed.png", 
      alt: "Pigmentation treatment before and after", 
      caption: "Significant improvement in hyperpigmentation and skin evenness" 
    },
    { 
      src: "/lovable-uploads/4d5e6f7a-8b9c-1d2e-3f4a-5b6c7d8e9f0a.png", 
      alt: "Melasma treatment results", 
      caption: "Dramatic reduction in melasma patches" 
    }
  ];

  const faqData = [
    {
      question: "Do these hyperpigmentation treatments completely cure hyperpigmentation?",
      answer: "No, you should have realistic expectations. These hyperpigmentation treatments do not completely eliminate hyperpigmentation however it will be significantly lightened and will almost become invisible."
    },
    {
      question: "Which hyperpigmentation treatment is best for me?",
      answer: "The choice of the hyperpigmentation treatment depends largely on the types of skin and extent of skin condition. The doctor will conduct a complete examination of the skin in initial consultation and will recommend a hyperpigmentation treatment which will suit best to your condition and skin type."
    },
    {
      question: "How many hyperpigmentation treatments do I require to improve my skin condition?",
      answer: "This is largely determined by the severity of your hyperpigmentation. However, 40%-50% improvement is mostly observed after the first treatment session. You can have significant reduction in hyperpigmentation after receiving 2-3 treatments."
    },
    {
      question: "What causes hyperpigmentation?",
      answer: "The overactivity of pigment-producing cells called melanocytes is responsible for hyperpigmentation. This can also occur in many ways, including sun exposure, hormonal changes, acne, and breakouts that may result in hyperpigmentation."
    },
    {
      question: "Can hyperpigmentation go away naturally?",
      answer: "It's more or less permanent in some situations. There are treatments available that will help. Some won't fully remove black marks, but they will significantly lighten them."
    },
    {
      question: "There are dark spots on my skin, is it hyperpigmentation?",
      answer: "There is a possibility of hyperpigmentation. If you observe any darker area on your body as compared to rest of skin, it is most likely to be hyperpigmentation."
    },
    {
      question: "What measures can I take to prevent hyperpigmentation?",
      answer: "You can take some preventive measures in your daily life: Whenever you go out wear SPF 30 or higher and avoid excessive sun exposure. By adopting a regular skin exfoliation regime you can remove the accumulation of dead skin cells which are contributing factor to hyperpigmentation. Avoid picking on your acne or skin that can develop dark spots. There are some medications which can cause skin discoloration, so its better to consult your doctor about it."
    },
    {
      question: "Will retinol remove dark spots?",
      answer: "Surprisingly, Retinol is one of the best ingredients for fading dark spots."
    },
    {
      question: "Can a dermatologist remove dark spots?",
      answer: "A dermatologist can offer creams or procedures to lighten dark spots, or in some cases, eliminate them."
    },
    {
      question: "How long after IPL treatment do you see results?",
      answer: "IPL uses the intense pulse light that usually needs 3-6 treatments sessions to clear and even out skin tone. The treatment has no downtime."
    },
    {
      question: "What are the side effects?",
      answer: "Common side effects include mild redness, slight itching, and temporary discomfort. In professional hands at Cosmedocs, side effects are minimal."
    },
    {
      question: "Is there any downtime?",
      answer: "Most hyperpigmentation treatments have minimal to no downtime. Patients can typically resume daily activities immediately after treatment."
    }
  ];

  const treatmentMethods = [
    {
      title: "IPL Treatment",
      description: "Intense Pulsed Light uses broad spectrum light to clear dark spots, age spots, and sun damage. Typically requires 3-6 sessions with no downtime.",
      icon: "💡"
    },
    {
      title: "Chemical Peels",
      description: "Professional peels with glycolic, lactic, and salicylic acids help resurface skin and increase cell turnover for improved pigmentation.",
      icon: "🧪"
    },
    {
      title: "Prescription Skincare",
      description: "Medical-grade products including hydroquinone (the 'Gold Standard'), kojic acid, and vitamin A products for targeted treatment.",
      icon: "💊"
    },
    {
      title: "Microdermabrasion",
      description: "Effective for mild pigmentation, improving rough and sun-damaged skin through gentle exfoliation and enhanced product absorption.",
      icon: "✨"
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
        <meta name="keywords" content="hyperpigmentation treatment London, melasma treatment, dark patches, skin pigmentation, IPL treatment, chemical peels, skin lightening, melanin regulation, dermatology London" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Cosmedocs",
            "description": "Expert hyperpigmentation and melasma treatment in London",
            "url": seoData.canonical,
            "telephone": "0333 0551 503",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "10 Harley Street",
              "addressLocality": "London",
              "postalCode": "W1G 9PF",
              "addressCountry": "GB"
            },
            "medicalSpecialty": "Dermatology",
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
                  <span className="text-purple-300">Expert Hyperpigmentation Treatment London</span>
                  <span className="block text-sm mt-4">Invisible art - natural skin transformation that speaks without words</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Advanced Melanin Regulation</p>
                  <p className="text-sm text-gray-300">Melasma, Dark Patches & Skin Evenness Solutions</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl">
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
              <h2 className="text-3xl font-bold mb-8 text-white">Hyperpigmentation Treatment</h2>
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
                <p className="text-gray-300">30-60 minutes</p>
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
                <p className="text-gray-300">Long-lasting with maintenance</p>
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
                <p className="text-gray-300">Same day return to work</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Anaesthesia</h3>
                <p className="text-gray-300">Topical if required</p>
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
              <h2 className="text-3xl font-bold mb-4">Before and After Hyperpigmentation Treatment Results</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See authentic transformations from our London clinic. Our advanced treatments significantly reduce 
                melasma, dark patches, and skin irregularities for naturally even, beautiful skin.
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

        {/* What is Hyperpigmentation */}
        <section className="py-20 bg-accent text-white">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">What is Hyperpigmentation?</h2>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Melanin is the natural pigment that gives your skin its color. When melanocytes (pigment-producing cells) 
                become overactive, they create excess melanin in certain areas, leading to uneven skin tone and dark patches.
              </p>
            </motion.div>

            {/* What is Hyperpigmentation Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/40 border border-purple-500/20 h-full hover:border-purple-500/40 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-white text-2xl">What is Hyperpigmentation?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">
                      Hyperpigmentation is a common skin condition where patches of skin become darker than 
                      the surrounding areas. This occurs when melanin, the pigment that gives skin its color, 
                      is produced in excess in certain areas.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">Affects all skin types and ethnicities</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">Can appear as dark spots, patches, or areas</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">Usually harmless but aesthetically concerning</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">Most common on face, hands, and sun-exposed areas</p>
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
                <Card className="bg-black/40 border border-purple-500/20 h-full hover:border-purple-500/40 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-white text-2xl">How is Hyperpigmentation Formed?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">
                      Hyperpigmentation forms when melanocytes (pigment-producing cells) become overactive 
                      and produce excess melanin. This can be triggered by various internal and external factors 
                      that stimulate melanin production.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">UV radiation and sun exposure</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">Hormonal changes (pregnancy, birth control)</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">Post-inflammatory response (acne, injury)</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">Genetic predisposition and aging</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>


        {/* Comprehensive Treatment Approach */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 text-white">Comprehensive Treatment Approach</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Our multi-modal approach combines the best of cosmeceuticals and advanced procedures 
                for optimal hyperpigmentation results. Every treatment is tailored to your skin type and condition.
              </p>
            </motion.div>

            {/* Treatment Categories Grid */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Topical & Cosmeceutical Treatments */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Topical & Cosmeceutical Treatments</h3>
                  <p className="text-gray-300">Medical-grade products for targeted skin lightening</p>
                </div>

                <div className="space-y-6">
                  <Card className="bg-black/40 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                    <CardContent className="p-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Broad Spectrum Sunscreen</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          SPF 30 and above protection essential for preventing further UV damage 
                          and maintaining treatment results.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/40 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                    <CardContent className="p-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Hydroquinone & Kojic Acid 
                          <span className="text-xs text-purple-300 ml-2">GOLD STANDARD</span>
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Most effective cosmeceutical skin lighteners. Enhanced when combined 
                          with antioxidants, hydroxy acids, and retinoids for superior results.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/40 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                    <CardContent className="p-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Vitamin A Products</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Retinol and Tretinoin accelerate skin rejuvenation, resurfacing, 
                          and cellular turnover for improved pigmentation.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/40 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                    <CardContent className="p-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Alpha Hydroxy Acids</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Gentle exfoliation and increased cell turnover for smoother, 
                          more even-toned skin texture.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>

              {/* Professional Procedures */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Professional Procedures</h3>
                  <p className="text-gray-300">Advanced in-clinic treatments for enhanced results</p>
                </div>

                <div className="space-y-6">
                  <Card className="bg-black/40 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                    <CardContent className="p-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">IPL Treatment</h4>
                        <p className="text-gray-300 text-sm leading-relaxed mb-3">
                          Broad spectrum light therapy targeting dark spots, age spots, and sun damage. 
                          Typically 3-6 sessions needed with no downtime required.
                        </p>
                        <div className="text-xs text-purple-300">✓ No downtime • ✓ 3-6 sessions • ✓ All skin types</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/40 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                    <CardContent className="p-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Chemical Peels</h4>
                        <p className="text-gray-300 text-sm leading-relaxed mb-3">
                          Professional-grade peels with Lactic, Salicylic, and Glycolic acids. 
                          Available in varying depths to suit different skin types and conditions.
                        </p>
                        <div className="text-xs text-purple-300">✓ Customizable depth • ✓ Natural ingredients • ✓ Improved results</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/40 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                    <CardContent className="p-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Microdermabrasion</h4>
                        <p className="text-gray-300 text-sm leading-relaxed mb-3">
                          Effective for mild pigmentation. Improves rough, sun-damaged skin through 
                          exfoliation while enhancing product absorption.
                        </p>
                        <div className="text-xs text-purple-300">✓ Mild pigmentation • ✓ Enhanced absorption • ✓ Combines with peels</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/40 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                    <CardContent className="p-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Dermaroller Treatment</h4>
                        <p className="text-gray-300 text-sm leading-relaxed mb-3">
                          Micro-needling technology promoting skin rejuvenation while infusing 
                          powerful antioxidants and brightening agents into the skin.
                        </p>
                        <div className="text-xs text-purple-300">✓ Micro-needling • ✓ Antioxidant infusion • ✓ Cell turnover</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>

            {/* Treatment Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <Card className="bg-gradient-to-r from-purple-900/20 to-black/40 border border-purple-500/30">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Our Treatment Philosophy</h3>
                  <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
                    At Cosmedocs, we believe in <span className="text-purple-300 font-semibold">invisible art</span> — 
                    transformation that speaks without saying a word. Our comprehensive approach ensures 
                    natural-looking results that enhance your confidence while maintaining skin health.
                  </p>
                </CardContent>
              </Card>
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
              <h2 className="text-3xl font-bold mb-4">Treatment Pricing</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Transparent pricing for all hyperpigmentation treatments. All consultations include detailed assessment and treatment plan.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-accent rounded-lg p-8 border border-gray-800"
              >
                <h3 className="text-xl font-semibold text-white mb-4">IPL Treatment</h3>
                <div className="text-3xl font-bold text-purple-300 mb-4">From £200</div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Single session</li>
                  <li>• 3-6 sessions typically needed</li>
                  <li>• No downtime required</li>
                  <li>• Free consultation included</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-accent rounded-lg p-8 border border-purple-500 relative"
              >
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm">Most Popular</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Chemical Peels</h3>
                <div className="text-3xl font-bold text-purple-300 mb-4">From £150</div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Professional grade peels</li>
                  <li>• Multiple peel depths available</li>
                  <li>• Customized for skin type</li>
                  <li>• Free consultation included</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-accent rounded-lg p-8 border border-gray-800"
              >
                <h3 className="text-xl font-semibold text-white mb-4">Consultation</h3>
                <div className="text-3xl font-bold text-purple-300 mb-4">£50</div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Comprehensive skin assessment</li>
                  <li>• Personalized treatment plan</li>
                  <li>• Redeemable against treatment</li>
                  <li>• Expert medical advice</li>
                </ul>
              </motion.div>
            </div>
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
              <h2 className="text-3xl font-bold mb-4 text-white">Why Choose Cosmedocs</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our philosophy of invisible art ensures natural-looking results that enhance your confidence.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
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
                <h3 className="text-lg font-semibold text-white mb-2">Expert Medical Team</h3>
                <p className="text-gray-300 text-sm">Qualified doctors with extensive experience in hyperpigmentation treatment</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Premium Products</h3>
                <p className="text-gray-300 text-sm">Medical-grade treatments and prescription skincare for optimal results</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Natural Philosophy</h3>
                <p className="text-gray-300 text-sm">Bold • Natural • Always Your Way - transformation that speaks without words</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Cosmedocs */}
        <section className="py-20 bg-accent text-white">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Why Choose Cosmedocs for Hyperpigmentation Treatment</h2>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                At Cosmedocs, our aesthetic philosophy is invisible art—natural transformations that speak without words. 
                Our expert practitioners combine advanced technology with artistic precision to deliver subtle yet remarkable results.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Expert Practitioners</h3>
                <p className="text-gray-300">
                  Our experienced aesthetic doctors specialize in melanin regulation and pigmentation correction, 
                  ensuring safe and effective treatments for all skin types.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Award className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Advanced Technology</h3>
                <p className="text-gray-300">
                  State-of-the-art IPL systems and medical-grade treatments deliver superior results with 
                  minimal downtime and maximum comfort.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Users className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Personalized Care</h3>
                <p className="text-gray-300">
                  Every treatment plan is tailored to your specific skin type, pigmentation concerns, 
                  and aesthetic goals for optimal results.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Client Reviews */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Client Reviews</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                See what our clients say about their hyperpigmentation treatment experience at Cosmedocs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border border-purple-500/20 h-full hover:border-purple-500/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        ★★★★★
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4 italic">
                      "The IPL treatment at Cosmedocs completely transformed my melasma. After 4 sessions, 
                      the dark patches on my face have significantly faded. The staff is professional and the results speak for themselves."
                    </p>
                    <p className="text-white font-semibold">Sarah M.</p>
                    <p className="text-purple-300 text-sm">Verified Patient</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border border-purple-500/20 h-full hover:border-purple-500/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        ★★★★★
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4 italic">
                      "I was skeptical about chemical peels, but the results exceeded my expectations. 
                      My acne scars and hyperpigmentation have visibly improved. The treatment was comfortable and professional."
                    </p>
                    <p className="text-white font-semibold">James T.</p>
                    <p className="text-purple-300 text-sm">Verified Patient</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border border-purple-500/20 h-full hover:border-purple-500/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        ★★★★★
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4 italic">
                      "The prescription skincare regime combined with IPL has given me the even skin tone I've always wanted. 
                      The team at Cosmedocs is knowledgeable and creates a personalized approach."
                    </p>
                    <p className="text-white font-semibold">Rachel K.</p>
                    <p className="text-purple-300 text-sm">Verified Patient</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Possible Side Effects Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Possible Side Effects</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                All hyperpigmentation treatments are custom tailored according to skin type and severity. 
                In professional hands at Cosmedocs, side effects are minimal.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-black rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Common Side Effects</h3>
                  <p className="text-gray-300 mb-6">
                    The following mild side effects may occur with chemical skin peels, microdermabrasion, 
                    dermaroller, and IPL treatments:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <p className="text-gray-300">Mild redness of skin</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <p className="text-gray-300">Slight itching sensation</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <p className="text-gray-300">Temporary discomfort</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-black rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Professional Care</h3>
                  <p className="text-gray-300 mb-6">
                    At Cosmedocs, our experienced medical professionals ensure:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <p className="text-gray-300">Customized treatment protocols</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <p className="text-gray-300">Minimal side effects</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <p className="text-gray-300">Expert aftercare guidance</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="md:col-span-2 mt-8"
              >
                <div className="bg-purple-900/50 rounded-lg p-6 border border-purple-500">
                  <h3 className="text-xl font-semibold text-purple-300 mb-4">Prevention Measures</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
                    <div className="space-y-2">
                      <p>• Wear SPF 30 or higher daily</p>
                      <p>• Avoid excessive sun exposure</p>
                    </div>
                    <div className="space-y-2">
                      <p>• Regular skin exfoliation regime</p>
                      <p>• Avoid picking acne or skin</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Downtime Section */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Downtime</h2>
              <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
                Almost all hyperpigmentation treatments have minimal to no downtime:
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-accent rounded-lg p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <ShieldCheck className="text-green-500" size={20} />
                      <p className="text-gray-300">Instant resumption of daily activities</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <ShieldCheck className="text-green-500" size={20} />
                      <p className="text-gray-300">No severe problems or complications</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <ShieldCheck className="text-green-500" size={20} />
                      <p className="text-gray-300">Return to work same day</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <ShieldCheck className="text-green-500" size={20} />
                      <p className="text-gray-300">Minimal impact on routine activities</p>
                    </div>
                  </div>
                </div>
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
                Common questions about hyperpigmentation treatment answered by our experts.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqData.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-gray-800">
                    <AccordionTrigger className="text-left text-white hover:text-purple-300">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-purple-600 text-white">
          <div className="page-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Skin?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                Book your consultation today and discover how our expert hyperpigmentation treatments can restore your confidence with beautifully even skin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-black hover:bg-gray-200 px-8">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Free Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 0333 0551 503
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h2>Comprehensive Hyperpigmentation Treatment London</h2>
          <p>
            Hyperpigmentation treatment London at Cosmedocs offers comprehensive solutions for melasma, dark patches, and skin discoloration. Our expert dermatologists use advanced IPL therapy, professional chemical peels, and medical-grade skincare to effectively treat melanin irregularities and restore even skin tone.
          </p>
          <p>
            Our London clinic specializes in treating various forms of hyperpigmentation including post-inflammatory hyperpigmentation, age spots, sun damage, and melasma. We understand that hyperpigmentation affects confidence and self-esteem, which is why our treatments are designed to deliver natural-looking results that enhance your skin's natural beauty.
          </p>
          <p>
            The Cosmedocs approach to hyperpigmentation treatment combines cutting-edge technology with medical expertise. Our IPL treatments use broad-spectrum light to target melanin deposits, while our chemical peels promote cell turnover and skin renewal. For maintenance and prevention, we offer prescription-grade skincare including hydroquinone, kojic acid, and vitamin A products.
          </p>
          <p>
            Located in Harley Street, London, our clinic provides a comfortable and professional environment for all hyperpigmentation treatments. We believe in the philosophy of invisible art - creating transformations that speak without saying a word. Our natural approach ensures results that enhance rather than alter your appearance.
          </p>
          <p>
            Treatment sessions typically last 30-60 minutes with minimal downtime, allowing you to return to daily activities immediately. Most patients see significant improvement after 2-3 sessions, with 40-50% reduction in pigmentation after the first treatment. Our comprehensive aftercare includes sun protection advice and skincare recommendations to maintain results.
          </p>
        </div>
      </div>
    </>
  );
};

export default HyperpigmentationTreatment;