import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
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
      question: "What is psoriasis and what causes it?",
      answer: "Psoriasis is an autoimmune disease where the immune system mistakenly attacks healthy skin cells. This leads to red, inflamed patches covered with silver-white scales, commonly found on elbows, knees, scalp, face, and skin folds. The exact cause isn't fully understood, but it involves genetic and environmental factors."
    },
    {
      question: "What are the different types of psoriasis?",
      answer: "The main types include: Plaque psoriasis (most common, 80-90% of cases), Guttate psoriasis (small scaly spots), Inverse psoriasis (smooth red patches in skin folds), Pustular psoriasis (pus-filled bumps), and Erythrodermic psoriasis (widespread severe form requiring immediate medical attention)."
    },
    {
      question: "What treatment options are available?",
      answer: "Treatment options range from topical creams and gels for mild cases, to light therapy (phototherapy), and oral or injectable medications for severe cases. Our dermatologists will create a personalized treatment plan based on your specific type and severity of psoriasis."
    },
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

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-500/10 to-teal-500/10" />
          <div className="relative max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent mb-6">
                Psoriasis Treatment
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                Expert dermatological care for all types of psoriasis. From topical therapies to advanced treatments, 
                regain control over your skin health with our comprehensive approach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Book Consultation
                </Button>
                <Button variant="outline" size="lg">
                  Call Now: 020 7851 6616
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Before & After Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Real Results from Our Patients
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                See the transformative results achieved through our expert psoriasis treatment protocols.
              </p>
            </motion.div>

            <div className="flex justify-center">
              <BeforeAfterImageViewer
                images={beforeAfterImages}
                triggerLabel="View Before & After Gallery"
                title="Psoriasis Treatment Results"
                description="Browse through real patient transformations"
              />
            </div>
          </div>
        </section>

        {/* Treatment Summary */}
        <section className="py-16 px-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 p-6 rounded-2xl shadow-lg"
              >
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Treatment Duration</h3>
                <p className="text-gray-600 dark:text-gray-300">Varies by type: 15 minutes for topical consultation to ongoing therapy sessions</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-100 to-teal-100 dark:from-blue-900/30 dark:to-teal-900/30 p-6 rounded-2xl shadow-lg"
              >
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Results Timeline</h3>
                <p className="text-gray-600 dark:text-gray-300">Improvement typically seen within 2-4 weeks, optimal results in 3-6 months</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-teal-100 to-green-100 dark:from-teal-900/30 dark:to-green-900/30 p-6 rounded-2xl shadow-lg"
              >
                <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Recovery</h3>
                <p className="text-gray-600 dark:text-gray-300">Minimal downtime for topical treatments, gradual improvement with ongoing care</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Cosmedocs */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Why Choose Cosmedocs for Psoriasis Treatment?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our aesthetics is invisible art - Bold • Natural • Always Your Way
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Expert Dermatologists",
                  description: "Qualified specialists with extensive experience in psoriasis diagnosis and treatment",
                  icon: Stethoscope
                },
                {
                  title: "Comprehensive Care", 
                  description: "Full range of treatments from topical therapies to advanced systemic medications",
                  icon: Target
                },
                {
                  title: "Proven Results",
                  description: "Evidence-based treatments that effectively manage symptoms and improve quality of life",
                  icon: Sparkles
                },
                {
                  title: "Ongoing Support",
                  description: "Long-term monitoring and care to maintain healthy skin and prevent flare-ups",
                  icon: HandHeart
                }
              ].map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-6 bg-white/70 dark:bg-gray-800/70 rounded-2xl shadow-lg backdrop-blur-sm hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/20 rounded-full flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Common questions about psoriasis treatment
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-white/70 dark:bg-gray-800/70 rounded-lg px-6 border-none shadow-sm"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300 pt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Take Control of Your Psoriasis?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Book your consultation today and start your journey to healthier skin
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="outline" className="bg-white text-purple-600 hover:bg-gray-100">
                  Book Free Consultation
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  Call: 020 7851 6616
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