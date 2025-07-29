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
                  <img 
                    src="/lovable-uploads/a996e10f-5573-47a6-a71d-cde73371153e.png" 
                    alt="Psoriasis on elbow showing typical symptoms" 
                    className="w-full rounded-lg"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Symptoms of Psoriasis */}
        <section className="py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Symptoms of Psoriasis</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Understanding the different symptoms and types of psoriasis is crucial for effective treatment
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
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

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-accent rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-white">Types of Psoriasis</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <h4 className="font-semibold text-purple-300">Plaque Psoriasis (80-90% of cases)</h4>
                      <p className="text-gray-300">Raised, thickened, silvery plaques of varying sizes, often itchy</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-300">Guttate Psoriasis</h4>
                      <p className="text-gray-300">Small, scaly pink bumps, usually on torso, arms, and legs</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-300">Inverse Psoriasis</h4>
                      <p className="text-gray-300">Smooth, red patches in skin folds like armpits and genitals</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-300">Pustular Psoriasis</h4>
                      <p className="text-gray-300">Sore, pus-filled bumps on hands and feet</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Psoriasis can be treated by */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Psoriasis Can Be Treated By</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our comprehensive approach offers multiple treatment options tailored to your condition's severity
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-black rounded-lg p-6"
              >
                <h3 className="text-xl font-bold mb-4 text-purple-300">Topical Creams & Gels</h3>
                <p className="text-gray-300 mb-4">Best for mild to moderate psoriasis. Various options available:</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Emollients (moisturizers) - soothe dry skin</li>
                  <li>• Topical steroids - reduce inflammation</li>
                  <li>• Vitamin D analogues - regulate cell turnover</li>
                  <li>• Tar preparations - slow cell turnover</li>
                  <li>• Calcineurin inhibitors - for face and skin folds</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-black rounded-lg p-6"
              >
                <h3 className="text-xl font-bold mb-4 text-purple-300">Light Therapy</h3>
                <p className="text-gray-300 mb-4">Phototherapy uses controlled UV light to reduce inflammation:</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Narrowband ultraviolet B (UVB)</li>
                  <li>• Psoralens plus ultraviolet A (PUVA)</li>
                  <li>• Can complement topical treatments</li>
                  <li>• Regular sessions necessary</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-black rounded-lg p-6"
              >
                <h3 className="text-xl font-bold mb-4 text-purple-300">Medication (Severe Cases)</h3>
                <p className="text-gray-300 mb-4">For severe psoriasis unresponsive to other treatments:</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Methotrexate (oral)</li>
                  <li>• Cyclosporin (oral)</li>
                  <li>• Biologics (injections)</li>
                  <li>• Thorough consultation required</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why do people seek treatment for psoriasis */}
        <section className="py-20">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Why Do People Seek Treatment for Psoriasis?</h2>
                <p className="text-gray-300 mb-6">
                  Psoriasis affects more than just the skin - it impacts overall quality of life, confidence, and wellbeing.
                </p>
                <div className="space-y-4">
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

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-accent rounded-lg p-8"
              >
                <h3 className="text-xl font-bold mb-6 text-white">Why Choose Cosmedocs for Psoriasis Treatment?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <p className="text-gray-300">Expert dermatologists with extensive psoriasis experience</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <p className="text-gray-300">Comprehensive range of treatment options from topical to systemic</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <p className="text-gray-300">Evidence-based treatments with proven clinical outcomes</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <p className="text-gray-300">Personalized treatment plans tailored to your specific needs</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <p className="text-gray-300">Ongoing support and monitoring throughout your treatment journey</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <p className="text-gray-300">Our "invisible art" philosophy for natural-looking skin health restoration</p>
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