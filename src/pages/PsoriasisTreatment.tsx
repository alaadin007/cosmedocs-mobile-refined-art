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

      <div className="bg-black text-white">
        {/* Hero Section - Matching LipFillers style */}
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
                  Expert Psoriasis
                  <span className="block text-purple-300">Treatment</span>
                  <span className="block text-sm mt-4">Professional dermatological care for all types of psoriasis</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl">
                  <span className="text-purple-300 font-semibold">Invisible Art</span>
                  <br />
                  Transformation that speaks without saying a word
                </p>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Consultation from £150</p>
                  <p className="text-sm text-gray-300">Comprehensive treatment plans tailored to your specific needs</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl">
                    Book Consultation
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm">
                    Call: 020 7851 6616
                  </Button>
                </div>
              </motion.div>
              
              <div className="hidden lg:block"></div>
            </div>
          </div>
        </section>

        {/* Before & After Gallery */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Real Patient Results</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See the transformative results achieved through our expert psoriasis treatment protocols.
              </p>
            </motion.div>

            <div className="text-center">
              <BeforeAfterImageViewer 
                images={beforeAfterImages}
                triggerLabel="View All Before & After Photos"
                title="Psoriasis Treatment Results Gallery"
                description="Comprehensive gallery of our psoriasis treatment outcomes"
              />
            </div>
          </div>
        </section>

        {/* Treatment Summary */}
        <section className="py-20">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Psoriasis Treatment Summary</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Treatment Duration</h3>
                    <p className="text-gray-300">Varies by type: 15 minutes for topical consultation to ongoing therapy sessions</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Results Timeline</h3>
                    <p className="text-gray-300">Improvement typically seen within 2-4 weeks, optimal results in 3-6 months</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Recovery Time</h3>
                    <p className="text-gray-300">Minimal downtime for topical treatments, gradual improvement with ongoing care</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Treatment Types</h3>
                    <p className="text-gray-300">Topical therapies, phototherapy, and systemic medications</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-accent rounded-lg p-8">
                  <h3 className="text-xl font-bold mb-6 text-white">Why Choose Cosmedocs?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Expert dermatologists specializing in psoriasis treatment</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Comprehensive range of treatment options available</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Evidence-based treatments with proven results</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">'Invisible art' philosophy for natural-looking skin health</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Ongoing support and personalized care plans</p>
                    </div>
                  </div>
                </div>
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