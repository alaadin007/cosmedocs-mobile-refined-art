import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { generateSEOMetadata } from "@/utils/seo";
import { Stethoscope, Shield, Clock, MapPin, Phone, Calendar } from "lucide-react";

export default function PrivateGPDoctor() {
  const seoData = generateSEOMetadata(
    "Private GP Doctor London | CQC Regulated Healthcare | Cosmedocs",
    "Expert private GP consultations in Harley Street London. CQC regulated healthcare with flexible scheduling, blood tests, sexual health services, and concierge care to hotels.",
    "/private-gp-doctor"
  );

  const services = [
    {
      title: "GP Services & Consultations",
      description: "Comprehensive primary care consultations with experienced doctors",
      icon: Stethoscope
    },
    {
      title: "Blood Tests & Health Screens",
      description: "Basic, Standard, Plus health screens, fertility panels, menopause diagnosis",
      icon: Shield
    },
    {
      title: "Sexual Health Services",
      description: "HRT, contraception, coil fitting, emergency contraception, STI screens",
      icon: Shield
    },
    {
      title: "Vaccinations & Travel Medicine",
      description: "Flu vaccines, travel vaccinations, and prescription services for travelers",
      icon: Shield
    },
    {
      title: "Genetic Testing",
      description: "Hereditary cancer risk, cardiac risk, coeliac disease, and other genetic tests",
      icon: Shield
    },
    {
      title: "Concierge Services",
      description: "Private consultations at major London hotels or in your home",
      icon: MapPin
    }
  ];

  const wellnessServices = [
    "General Health Screens (Basic, Standard, Plus)",
    "Well Man Annual Check (suitable for >40s)",
    "Well Woman Annual Check (suitable for >40s)",
    "Tired All The Time investigations",
    "Male and Female Fertility Panels",
    "Menopause Diagnosis",
    "Long Covid assessments",
    "Unexpected Weight Loss investigations"
  ];

  const faqItems = [
    {
      question: "Are your services CQC regulated?",
      answer: "Yes, we are fully CQC regulated. The Care Quality Commission is the independent regulator of health and social care in England, ensuring we meet fundamental standards of quality and safety."
    },
    {
      question: "Do you offer home visits or hotel consultations?",
      answer: "Yes, we provide concierge services to major London hotels and home visits for added convenience. Our private doctors can provide discreet, in-room consultations and treatments, including blood tests if required."
    },
    {
      question: "What blood tests do you offer?",
      answer: "We offer over 100 test options including general health screens, fertility panels, genetic tests, menopause diagnosis, Long Covid assessments, and specialized combination blood tests tailored to your needs."
    },
    {
      question: "Can you help with prescriptions for travelers?",
      answer: "Absolutely. We offer dedicated prescription services for travelers and tourists, ensuring you have access to necessary medications during your stay in London, including routine prescriptions and travel-related medications."
    },
    {
      question: "What genetic tests are available?",
      answer: "We offer comprehensive genetic testing including hereditary cancer risk (29 genes), breast and ovarian genetic testing, coeliac disease genetic testing, haemochromatosis genetic testing, lactose intolerance testing, and hereditary cardiac risk assessments."
    }
  ];

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={seoData.canonical} />
        
        {/* Open Graph */}
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.image} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.image} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Cosmedocs Private GP Doctor London",
            "description": seoData.description,
            "url": seoData.canonical,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Harley Street",
              "addressLocality": "London",
              "addressCountry": "GB"
            },
            "medicalSpecialty": "General Practice",
            "availableService": [
              {
                "@type": "MedicalProcedure",
                "name": "GP Consultations"
              },
              {
                "@type": "MedicalTest",
                "name": "Blood Tests"
              },
              {
                "@type": "MedicalProcedure", 
                "name": "Sexual Health Services"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        {/* Hero Section - Styled like LipFillers */}
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
                  Private GP
                  <span className="block text-purple-300">Doctor London</span>
                  <span className="block text-sm mt-4">CQC Regulated Healthcare Excellence</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl">
                  <span className="text-purple-300 font-semibold">Your health, our priority</span>
                  <br />
                  Comprehensive private healthcare in the heart of Harley Street
                </p>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Harley Street Location</p>
                  <p className="text-sm text-gray-300">Concierge services available to major London hotels</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl">
                    Book GP Consultation
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm">
                    View Services
                  </Button>
                </div>
              </motion.div>
              
              <div className="hidden lg:block"></div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-primary/5">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Why Choose Cosmedocs Private GP?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We stand out for our commitment to excellence in private healthcare, based at the heart of the medical hub in London. 
                Our team of highly experienced doctors provides a patient-centered approach with comprehensive services, 
                flexible scheduling, and dedication to confidentiality.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-accent p-6 rounded-lg border border-gray-800"
                >
                  <service.icon className="w-12 h-12 text-purple-300 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comprehensive Health Services */}
        <section className="py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Comprehensive Health Assessments</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our specialized clinics provide gender-specific health assessments, focusing on reproductive health, 
                disease prevention, and lifestyle modifications to support overall wellbeing through all life stages.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-accent p-8 rounded-lg border border-gray-800"
              >
                <h3 className="text-2xl font-semibold mb-6 text-purple-300">Health Screening Services</h3>
                <ul className="space-y-3">
                  {wellnessServices.map((service, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <Shield className="w-5 h-5 text-purple-300 mr-3 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-accent p-8 rounded-lg border border-gray-800"
              >
                <h3 className="text-2xl font-semibold mb-6 text-purple-300">Additional Services</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-purple-300 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Vitamin Injections</h4>
                      <p className="text-gray-300 text-sm">Vitamin D and B12 injections for optimal health</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Calendar className="w-5 h-5 text-purple-300 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Weight Management</h4>
                      <p className="text-gray-300 text-sm">Comprehensive weight and fat reduction clinic</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Stethoscope className="w-5 h-5 text-purple-300 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">IV Therapy</h4>
                      <p className="text-gray-300 text-sm">IV drips for wellness and recovery</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-primary/5">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Common questions about our private GP services and healthcare offerings.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-accent border-gray-800 rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:text-purple-300 transition-colors">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 pt-4">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Begin Your Health Journey?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Contact us today to book your private GP consultation. Our experienced doctors are here to provide 
                the highest standard of healthcare with complete confidentiality and convenience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-6 text-lg font-semibold">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
                <Button variant="outline" className="border-purple-300 text-purple-300 hover:bg-purple-300 hover:text-black rounded-full px-8 py-6 text-lg font-semibold">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Online
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h2>Private GP Doctor Services in London - Comprehensive Healthcare</h2>
          <p>
            Cosmedocs offers premium private GP services in London's prestigious Harley Street medical district. 
            Our CQC regulated clinic provides comprehensive healthcare solutions including general practice consultations, 
            blood tests, sexual health services, genetic testing, and wellness assessments. With over 40 specialized 
            clinics for Well Woman and Well Man health checks, we cater to patients of all ages and health needs.
          </p>
          <p>
            Our experienced private doctors offer flexible scheduling and concierge services, including home visits 
            and consultations at major London hotels. Whether you're a London resident or visiting tourist, 
            we provide discreet, high-quality healthcare with complete confidentiality. Services include fertility 
            assessments, menopause diagnosis, Long Covid investigations, travel medicine, vaccinations, and emergency 
            contraception. Our genetic testing covers hereditary cancer risks, cardiac conditions, and metabolic disorders.
          </p>
          <p>
            Located in the heart of London's medical hub, Cosmedocs combines traditional GP services with modern 
            wellness treatments including vitamin injections, IV therapy, and weight management programs. 
            Our patient-centered approach ensures personalized care tailored to your individual health goals and lifestyle requirements.
          </p>
        </div>
      </div>
    </>
  );
}