import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { generateSEOMetadata } from "@/utils/seo";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import { Stethoscope, Target, Sparkles, HandHeart, Shield, Clock } from "lucide-react";

export default function PsoriasisTreatment() {
  const seoData = generateSEOMetadata(
    "Psoriasis Treatment London | Expert Dermatology Care - Cosmedocs",
    "Professional psoriasis treatment in London. Expert dermatologists offering topical therapies, light therapy, and advanced medications for all types of psoriasis. Book consultation today.",
    "https://cosmedocs.com/psoriasis-treatment"
  );

  const beforeAfterImages = [
    {
      src: "/images/psoriasis-before-after-1.jpg",
      alt: "Psoriasis treatment before and after - plaque psoriasis improvement",
      caption: "Significant improvement in plaque psoriasis after 12 weeks of treatment"
    },
    {
      src: "/images/psoriasis-before-after-2.jpg", 
      alt: "Psoriasis treatment before and after - scalp psoriasis",
      caption: "Scalp psoriasis clearing after targeted topical therapy"
    },
    {
      src: "/images/psoriasis-before-after-3.jpg",
      alt: "Psoriasis treatment before and after - elbow psoriasis",
      caption: "Elbow psoriasis reduction with combined treatment approach"
    }
  ];

  const faqs = [
    {
      question: "How long does treatment take to show results?",
      answer: "Results vary depending on the treatment type and severity. Topical treatments may show improvement in 2-4 weeks, while light therapy typically requires several sessions over months. Systemic medications for severe cases may take 3-6 months to show full effects."
    },
    {
      question: "Are there any side effects from psoriasis treatments?",
      answer: "Side effects depend on the treatment type. Topical steroids may cause skin thinning with long-term use. Light therapy can cause temporary skin irritation. Systemic medications may have more serious side effects, which our dermatologist will discuss thoroughly during consultation."
    },
    {
      question: "Can psoriasis be cured permanently?",
      answer: "Currently, there's no permanent cure for psoriasis, but it can be effectively managed and controlled. Many patients achieve long periods of clear skin with proper treatment. Our goal is to minimize symptoms, prevent flare-ups, and improve your quality of life."
    },
    {
      question: "How much does psoriasis treatment cost?",
      answer: "Treatment costs vary depending on the type and duration of therapy needed. We provide detailed pricing during your consultation. We offer comprehensive treatment plans tailored to your specific needs and budget."
    },
    {
      question: "Who is suitable for psoriasis treatment?",
      answer: "Anyone experiencing psoriasis symptoms can benefit from treatment. Our experienced dermatologists will assess your condition and recommend the most appropriate treatment plan based on your skin type, severity, and medical history."
    },
    {
      question: "How often will I need follow-up appointments?",
      answer: "Follow-up frequency depends on your treatment plan and response. Typically, we schedule appointments every 4-6 weeks initially to monitor progress and adjust treatments as needed. Once your condition stabilizes, appointments may be less frequent."
    },
    {
      question: "Can lifestyle changes help with psoriasis management?",
      answer: "Yes, lifestyle modifications can complement medical treatment. Managing stress, maintaining a healthy diet, avoiding triggers like certain medications or infections, and proper skincare routines can help reduce flare-ups and improve treatment outcomes."
    }
  ];

  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Psoriasis Treatment",
    "description": "Professional psoriasis treatment using topical therapies, light therapy, and advanced medications",
    "provider": {
      "@type": "MedicalOrganization",
      "name": "Cosmedocs",
      "url": "https://cosmedocs.com"
    },
    "location": {
      "@type": "Place",
      "name": "London, UK"
    },
    "offers": {
      "@type": "Offer",
      "description": "Psoriasis treatment consultation and therapy"
    }
  };

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={seoData.canonical} />
        
        {/* Open Graph tags */}
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://cosmedocs.com/images/psoriasis-treatment-og.jpg" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content="https://cosmedocs.com/images/psoriasis-treatment-og.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
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
                  <span className="text-purple-300">Expert Psoriasis Treatment London</span>
                  <span className="block text-sm mt-4">Invisible art - natural skin transformation that speaks without words</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Advanced Dermatological Care</p>
                  <p className="text-sm text-gray-300">Comprehensive treatment for all types of psoriasis</p>
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
              <h2 className="text-3xl font-bold mb-8 text-white">Psoriasis Treatment</h2>
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
                <p className="text-gray-300">15 minutes - ongoing therapy</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Target className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Results Duration</h3>
                <p className="text-gray-300">2-4 weeks to 3-6 months</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <HandHeart className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Recovery Time</h3>
                <p className="text-gray-300">Minimal downtime</p>
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
                <h3 className="text-lg font-semibold text-white mb-2">Treatment Types</h3>
                <p className="text-gray-300">Topical, light therapy, systemic</p>
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
              <h2 className="text-3xl font-bold mb-4">Before and After Psoriasis Treatment Results</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See authentic transformations from our London clinic. Our comprehensive treatments significantly reduce 
                psoriasis symptoms and improve skin health for naturally clear, comfortable skin.
              </p>
            </motion.div>

            <BeforeAfterImageViewer images={beforeAfterImages} />
          </div>
        </section>

        {/* What is Psoriasis */}
        <section className="py-20 bg-accent text-white">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">What is Psoriasis?</h2>
            </motion.div>

            {/* What is Psoriasis Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/40 border border-purple-500/20 h-full hover:border-purple-500/40 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-white text-2xl">Understanding Psoriasis</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">
                      Psoriasis is a chronic autoimmune condition where the immune system causes skin cells to 
                      grow too quickly. This results in thick, scaly patches that can be itchy, painful, and 
                      emotionally distressing.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">Affects 2-3% of the global population</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">Can appear at any age, most common 15-35</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">Often runs in families (genetic component)</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">Commonly affects elbows, knees, scalp</p>
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
                    <CardTitle className="text-white text-2xl">Types of Psoriasis</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">
                      There are several types of psoriasis, each with distinct characteristics and treatment 
                      requirements. Understanding your type is crucial for effective management.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">Plaque psoriasis (80-90% of cases)</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">Guttate psoriasis (small, scaly spots)</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">Inverse psoriasis (smooth, red patches)</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                        <p className="text-gray-300 text-sm">Pustular psoriasis (pus-filled bumps)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Symptoms and Treatment Reasons */}
        <section className="py-20">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Symptoms of Psoriasis */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Symptoms of Psoriasis</h2>
                <p className="text-gray-300 mb-6">
                  Understanding the different symptoms and types of psoriasis is crucial for effective treatment
                </p>
                
                <h3 className="text-xl font-bold mb-6">Main Symptoms Include:</h3>
                <div className="space-y-4">
                  {[
                    "Inflamed, scaly skin",
                    "Thick, raised patches", 
                    "Silvery-colored skin",
                    "Small, scaly spots",
                    "Hair loss (on the scalp)",
                    "Pitted, crumbly nails",
                    "Blisters"
                  ].map((symptom, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <p className="text-gray-300">{symptom}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Why Do People Seek Treatment for Psoriasis */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Why Do People Seek Treatment for Psoriasis?</h2>
                <p className="text-gray-300 mb-6">
                  Psoriasis affects more than just the skin - it impacts overall quality of life, confidence, and wellbeing.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "To manage and control symptoms",
                    "To reduce the severity of flare-ups", 
                    "To alleviate pain associated with psoriasis",
                    "To enhance self-confidence and self-esteem",
                    "To decrease stress, anxiety, and unhappiness",
                    "To lower the risk of developing related health issues, such as psoriatic arthritis, heart disease, and depression"
                  ].map((reason, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">{reason}</p>
                    </div>
                  ))}
                </div>
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
                Our multi-modal approach combines topical therapies, light treatments, and systemic medications 
                for optimal psoriasis management. Every treatment is tailored to your condition's severity and type.
              </p>
            </motion.div>

            {/* Treatment Categories Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Topical Treatments */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Topical Treatments</h3>
                  <p className="text-gray-300">Medical-grade treatments for mild to moderate psoriasis</p>
                </div>

                <div className="space-y-4">
                  <Card className="bg-black/40 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                    <CardContent className="p-4">
                      <h4 className="text-lg font-semibold text-white mb-2">Emollients & Moisturizers</h4>
                      <p className="text-gray-300 text-sm">Soothe dry skin and reduce scaling</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/40 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                    <CardContent className="p-4">
                      <h4 className="text-lg font-semibold text-white mb-2">Topical Steroids</h4>
                      <p className="text-gray-300 text-sm">Reduce inflammation and itching</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/40 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                    <CardContent className="p-4">
                      <h4 className="text-lg font-semibold text-white mb-2">Vitamin D Analogues</h4>
                      <p className="text-gray-300 text-sm">Regulate cell turnover and growth</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/40 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                    <CardContent className="p-4">
                      <h4 className="text-lg font-semibold text-white mb-2">Calcineurin Inhibitors</h4>
                      <p className="text-gray-300 text-sm">For face and sensitive skin areas</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>

              {/* Light Therapy */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Light Therapy</h3>
                  <p className="text-gray-300">Phototherapy for moderate to severe psoriasis</p>
                </div>

                <div className="space-y-4">
                  <Card className="bg-black/40 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                    <CardContent className="p-4">
                      <h4 className="text-lg font-semibold text-white mb-2">Narrowband UVB</h4>
                      <p className="text-gray-300 text-sm">Most effective phototherapy treatment</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/40 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                    <CardContent className="p-4">
                      <h4 className="text-lg font-semibold text-white mb-2">PUVA Therapy</h4>
                      <p className="text-gray-300 text-sm">Psoralens plus ultraviolet A light</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/40 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                    <CardContent className="p-4">
                      <h4 className="text-lg font-semibold text-white mb-2">Targeted Phototherapy</h4>
                      <p className="text-gray-300 text-sm">Precise treatment for localized areas</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/40 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                    <CardContent className="p-4">
                      <h4 className="text-lg font-semibold text-white mb-2">Home Light Units</h4>
                      <p className="text-gray-300 text-sm">Convenient maintenance therapy</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>

              {/* Systemic Treatments */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Systemic Medications</h3>
                  <p className="text-gray-300">Advanced treatments for severe psoriasis</p>
                </div>

                <div className="space-y-4">
                  <Card className="bg-black/40 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                    <CardContent className="p-4">
                      <h4 className="text-lg font-semibold text-white mb-2">Methotrexate</h4>
                      <p className="text-gray-300 text-sm">Oral medication for severe cases</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/40 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                    <CardContent className="p-4">
                      <h4 className="text-lg font-semibold text-white mb-2">Biologics</h4>
                      <p className="text-gray-300 text-sm">Targeted immune system therapy</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/40 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                    <CardContent className="p-4">
                      <h4 className="text-lg font-semibold text-white mb-2">Cyclosporin</h4>
                      <p className="text-gray-300 text-sm">Immunosuppressant for quick results</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/40 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                    <CardContent className="p-4">
                      <h4 className="text-lg font-semibold text-white mb-2">JAK Inhibitors</h4>
                      <p className="text-gray-300 text-sm">Latest oral treatment options</p>
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
                Transparent pricing for all psoriasis treatments. All consultations include detailed assessment and personalized treatment plan.
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
                <h3 className="text-xl font-semibold text-white mb-4">Consultation</h3>
                <div className="text-3xl font-bold text-purple-300 mb-4">From £150</div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Comprehensive skin assessment</li>
                  <li>• Detailed medical history review</li>
                  <li>• Personalized treatment plan</li>
                  <li>• Redeemable against treatment</li>
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
                <h3 className="text-xl font-semibold text-white mb-4">Topical Treatment Plan</h3>
                <div className="text-3xl font-bold text-purple-300 mb-4">From £200</div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Prescription topical medications</li>
                  <li>• Regular follow-up appointments</li>
                  <li>• Treatment monitoring and adjustment</li>
                  <li>• Ongoing support and advice</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-accent rounded-lg p-8 border border-gray-800"
              >
                <h3 className="text-xl font-semibold text-white mb-4">Light Therapy</h3>
                <div className="text-3xl font-bold text-purple-300 mb-4">From £300</div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Professional phototherapy sessions</li>
                  <li>• Narrowband UVB or PUVA treatment</li>
                  <li>• Multiple sessions as required</li>
                  <li>• Progress monitoring included</li>
                </ul>
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
                  <Stethoscope className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Expertise</h3>
                <p className="text-gray-300">Specialized dermatologists with extensive psoriasis experience</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Target className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Personalized</h3>
                <p className="text-gray-300">Treatment plans tailored to your specific psoriasis type</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Advanced</h3>
                <p className="text-gray-300">Latest treatment options including biologics and light therapy</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <HandHeart className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Support</h3>
                <p className="text-gray-300">Ongoing care and emotional support throughout treatment</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Philosophy</h3>
                <p className="text-gray-300">'Invisible art' for natural skin health restoration</p>
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
                Get answers to common questions about psoriasis treatment at our London clinic.
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
                      {faq.answer}
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
              <h2 className="text-3xl font-bold mb-4">Ready to Take Control of Your Psoriasis?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert dermatologists and discover how comprehensive psoriasis treatment 
                can transform your skin health and quality of life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6">
                  Book Free Consultation
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6">
                  Call 020 7851 6616
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h2>Comprehensive Psoriasis Treatment in London</h2>
          <p>
            Psoriasis is a chronic autoimmune skin condition that affects millions of people worldwide. 
            At Cosmedocs, we understand the physical and emotional impact that psoriasis can have on your daily life. 
            Our team of expert dermatologists specializes in providing comprehensive, evidence-based treatments 
            that target the root causes of psoriasis while addressing the visible symptoms.
          </p>
          
          <h3>Understanding Psoriasis and Its Types</h3>
          <p>
            Psoriasis manifests in several forms, each requiring specialized treatment approaches. Plaque psoriasis, 
            the most common type, presents as raised, thickened patches covered with silvery scales. Guttate psoriasis 
            appears as small, scaly spots typically triggered by infections. Inverse psoriasis affects skin folds 
            with smooth, red patches. Our dermatologists are experienced in diagnosing and treating all types of 
            psoriasis, ensuring you receive the most appropriate care for your specific condition.
          </p>
          
          <h3>Advanced Treatment Options</h3>
          <p>
            Our treatment arsenal includes topical therapies such as corticosteroids, vitamin D analogues, and 
            calcineurin inhibitors for mild to moderate cases. For more extensive psoriasis, we offer phototherapy 
            using narrowband UVB light, which has proven highly effective in reducing inflammation and scaling. 
            In severe cases, we provide systemic treatments including methotrexate, cyclosporin, and cutting-edge 
            biologic therapies that target specific immune pathways involved in psoriasis development.
          </p>
          
          <h3>Personalized Care Approach</h3>
          <p>
            Every patient's psoriasis journey is unique, which is why we develop personalized treatment plans 
            tailored to your specific needs, lifestyle, and treatment goals. Our holistic approach considers 
            not only the physical aspects of the condition but also the psychological impact, providing support 
            and guidance throughout your treatment journey. We work closely with you to monitor progress, 
            adjust treatments as needed, and ensure optimal long-term outcomes.
          </p>
        </div>
      </div>
    </>
  );
}