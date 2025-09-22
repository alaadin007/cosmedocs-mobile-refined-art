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
      question: "What is hyperpigmentation?",
      answer: "Hyperpigmentation is a skin condition causing darkening of certain areas due to overproduction of melanin, the skin pigment. It's common across all ethnicities but particularly noticeable in lighter complexions."
    },
    {
      question: "What treatment options are available?",
      answer: "We offer multiple treatments including IPL therapy, chemical peels, microdermabrasion, dermaroller treatment, and prescription skincare with hydroquinone and kojic acid."
    },
    {
      question: "How many treatments will I need?",
      answer: "This depends on the severity of your hyperpigmentation. Most patients see 40-50% improvement after the first session, with significant reduction after 2-3 treatments."
    },
    {
      question: "Do these treatments completely cure hyperpigmentation?",
      answer: "While treatments don't completely eliminate hyperpigmentation, they significantly lighten it to become almost invisible. Results vary based on individual skin condition and type."
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
              <p className="text-gray-300 max-w-3xl mx-auto">
                Understanding the science behind melanin overproduction and how our treatments restore natural skin balance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-none h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Understanding the Condition</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">
                      Hyperpigmentation is a skin condition that causes darkening of certain areas due to the 
                      overproduction of melanin, the skin pigment. This condition is quite common across all 
                      genders and ethnic groups, particularly noticeable in those with lighter complexions.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">Common in all ethnicities, especially lighter complexions</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">Usually harmless but aesthetically concerning</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">Caused by melanin overproduction</p>
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
                <Card className="bg-accent border-none h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Why Does It Occur?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">
                      While hyperpigmentation is usually harmless, it can sometimes be a symptom of underlying 
                      conditions. Most people seek treatment due to aesthetic concerns, as it can cause stress 
                      and affect confidence.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">High concentrations of melanocytes (melanin-producing cells)</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">Hyperactivation of existing melanocytes</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Treatment Methods */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Hyperpigmentation Treatment Options</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Comprehensive treatment solutions available at our clinic for effective hyperpigmentation management.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {treatmentMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-accent rounded-lg p-8 border border-gray-800 hover:border-purple-500 transition-colors"
                >
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{method.title}</h3>
                  <p className="text-gray-300">{method.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Treatment Information */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Comprehensive Treatment Approach</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our multi-modal approach combines the best of cosmeceuticals and advanced procedures.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="bg-black rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-purple-300">Cosmeceuticals & Prescription Skin Care</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2 text-white">Broad Spectrum Sunscreen</h4>
                      <p className="text-sm text-gray-300">SPF 30 and above is highly recommended during sun exposure to prevent further skin damage due to UV rays exposure.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-white">Hydroquinone & Kojic Acid</h4>
                      <p className="text-sm text-gray-300">Very effective cosmeceutical skin lightener products. Hydroquinone is referred to as the 'Gold Standard' for treating hyperpigmentation. Enhanced when used in combination with antioxidants, hydroxy acids retinoids.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-white">Vitamin A Products</h4>
                      <p className="text-sm text-gray-300">Including Retinol and Tretinoin that help in skin rejuvenation and resurfacing and increase cell turnover.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-white">Alpha Hydroxy Acids</h4>
                      <p className="text-sm text-gray-300">Exfoliate skin and smooth while increasing cell turnover for even skin tone.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-black rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-purple-300">Microdermabrasion</h3>
                  <p className="text-sm text-gray-300">
                    For mild pigmentation, microdermabrasion proves to be an effective treatment. It improves rough and sun damaged skin through skin exfoliation and lightens pigmentation. Also aids in diffusing active care products into skin. Highly effective when used in combination with chemical skin peel treatment.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="bg-black rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-purple-300">Skin Peel Treatment</h3>
                  <p className="text-sm text-gray-300">
                    Chemical skin peels give improved results when other topical therapies are unable to provide desired results. Essential natural ingredients including Lactic, Salicylic and Glycolic Acid help in skin resurfacing and increase cell turnover. Available in varying depths and strengths to suit different skin types.
                  </p>
                </div>

                <div className="bg-black rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-purple-300">IPL Treatment</h3>
                  <p className="text-sm text-gray-300">
                    Intense Pulse Light uses broad spectrum light contrary to single wavelength lasers. Helps in clearing dark spots, age spots and hyperpigmentation caused by sun damage and ageing. Usually needs 3-6 treatment sessions to clear skin and give even skin tone. No downtime required.
                  </p>
                </div>

                <div className="bg-black rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-purple-300">Dermaroller Treatment</h3>
                  <p className="text-sm text-gray-300">
                    Micro-needling uses a special dermaroller device which gently rejuvenates skin and improves pigmentation. Helps in reduction of pigmentation by increasing cell turnover while powerful anti-oxidants and skin brighteners are infused into the skin.
                  </p>
                </div>
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