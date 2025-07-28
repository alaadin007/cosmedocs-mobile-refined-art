import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { generateSEOMetadata } from "@/utils/seo";
import { Syringe, Calendar, Clock, AlertTriangle, RotateCcw, Briefcase, Zap, Scissors, Snowflake } from "lucide-react";

const MoleSkinTagRemoval = () => {
  const seoData = generateSEOMetadata(
    "Mole & Skin Tag Removal London | Expert Dermatology | Cosmedocs Harley Street",
    "Professional mole and skin tag removal in London by expert dermatologists. Safe, effective removal with minimal scarring. Book consultation at Harley Street clinic.",
    "/mole-skin-tag-removal"
  );

  const treatmentDetails = [
    { label: "Anaesthetic", value: "Local", icon: Syringe },
    { label: "Procedure Time", value: "15-30 mins", icon: Clock },
    { label: "Recovery Time", value: "1-2 weeks", icon: RotateCcw },
    { label: "Back To Work", value: "Same day", icon: Briefcase },
    { label: "Results", value: "Immediate", icon: Calendar },
    { label: "Scarring", value: "Minimal", icon: AlertTriangle }
  ];

  const removalMethods = [
    {
      title: "Surgical Excision",
      icon: Scissors,
      description: "Complete removal with sterile scissors or scalpel, ideal for larger moles and skin tags.",
      benefits: ["Complete removal", "Tissue can be tested", "Minimal recurrence"]
    },
    {
      title: "Cryotherapy",
      icon: Snowflake,
      description: "Liquid nitrogen freezing treatment that causes moles and skin tags to fall off naturally.",
      benefits: ["Non-invasive", "Quick procedure", "No stitches required"]
    },
    {
      title: "Electrosurgery",
      icon: Zap,
      description: "Electric current burns away unwanted tissue with precision and control.",
      benefits: ["Precise removal", "Cauterizes bleeding", "Suitable for multiple lesions"]
    }
  ];

  const faqs = [
    {
      question: "Is mole and skin tag removal painful?",
      answer: "We use local anaesthetic to numb the area before treatment, ensuring minimal discomfort. Most patients describe the sensation as mild pressure rather than pain."
    },
    {
      question: "Will there be scarring after removal?",
      answer: "Our expert techniques minimize scarring. Small skin tags and moles typically heal with little to no visible scarring, while larger removals may leave minimal marks that fade over time."
    },
    {
      question: "How long does the procedure take?",
      answer: "Most removals take 15-30 minutes depending on the size and number of lesions. Multiple lesions can often be treated in a single session."
    },
    {
      question: "When can I return to normal activities?",
      answer: "You can return to work and normal activities immediately. We recommend avoiding strenuous exercise for 24-48 hours and keeping the area dry for the first day."
    },
    {
      question: "Do moles and skin tags grow back after removal?",
      answer: "When completely removed, moles and skin tags typically don't grow back. However, new ones may develop over time due to genetics, age, or hormonal changes."
    },
    {
      question: "When should I have a mole checked?",
      answer: "Consult us if a mole changes in size, shape, color, or texture, becomes itchy or painful, or bleeds. We follow ABCDE guidelines for mole assessment and can arrange histology if needed."
    },
    {
      question: "How much does mole and skin tag removal cost?",
      answer: "Costs vary based on the size, location, and number of lesions. We provide transparent pricing during consultation and offer competitive rates for professional removal."
    },
    {
      question: "What aftercare is required?",
      answer: "Keep the area clean and dry, apply prescribed ointment, avoid picking at scabs, and protect from sun exposure. Most areas heal completely within 1-2 weeks."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Mole and Skin Tag Removal",
    "description": "Professional mole and skin tag removal for clear, healthy skin",
    "procedureType": "Dermatological Treatment",
    "bodyLocation": "Face, Neck, Body",
    "preparation": "Consultation and examination",
    "followup": "Aftercare instructions and healing monitoring",
    "howPerformed": "Surgical excision, cryotherapy, or electrosurgery",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Cosmedocs",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "10 Harley Street",
        "addressLocality": "London",
        "postalCode": "W1G 9PF",
        "addressCountry": "GB"
      }
    }
  };

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
        <meta name="keywords" content="mole removal London, skin tag removal, dermatology, Harley Street, cosmetic dermatology, skin lesion removal, mole check" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
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
                  Mole & Skin Tag
                  <span className="block text-purple-300">Removal</span>
                  <span className="block text-sm mt-4">Safe, professional removal with minimal scarring</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl">
                  <span className="text-purple-300 font-semibold">Our Aesthetics is Invisible Art</span>
                  <br />
                  Transformation that speaks without saying a word
                </p>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Expert Dermatological Care</p>
                  <p className="text-sm text-gray-300">Quick, safe removal with comprehensive aftercare</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl">
                    Book Consultation
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm">
                    Treatment Options
                  </Button>
                </div>
              </motion.div>
              
              <div className="hidden lg:block"></div>
            </div>
          </div>
        </section>

        {/* Treatment Details */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Treatment Details</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Professional mole and skin tag removal with minimal downtime and excellent results
              </p>
            </motion.div>

            <div className="grid grid-cols-6 gap-4">
              {treatmentDetails.map((detail, index) => {
                const IconComponent = detail.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-black border-gray-800 h-full">
                      <CardContent className="p-4 text-center">
                        <IconComponent className="w-8 h-8 mb-3 mx-auto text-purple-300" />
                        <h3 className="text-sm font-semibold mb-2 text-purple-300">{detail.label}</h3>
                        <p className="text-xs text-gray-300">{detail.value}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* What Are Moles and Skin Tags */}
        <section className="py-20">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">What Are Moles?</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Moles are small, dark spots on the skin formed by clusters of pigmented cells called melanocytes. 
                    They can be flat or raised and vary in colour from brown to black, appearing anywhere on the body.
                  </p>
                  <p>
                    <strong className="text-purple-300">Formation:</strong> Moles form when melanocytes grow in clusters 
                    instead of being evenly spread. Factors include genetics, sun exposure, and hormonal changes.
                  </p>
                  <p>
                    While most moles are harmless, they should be monitored for changes in size, shape, or colour, 
                    as this can indicate potential skin issues requiring professional assessment.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">What Are Skin Tags?</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Skin tags are small, soft, benign growths that hang off the skin, typically appearing where skin 
                    rubs against skin or clothing - such as the neck, armpits, or groin areas.
                  </p>
                  <p>
                    <strong className="text-purple-300">Formation:</strong> Skin tags develop when skin cells multiply 
                    rapidly in response to friction or irritation. They're more common in people who are overweight, 
                    pregnant, or have certain health conditions like diabetes.
                  </p>
                  <p>
                    While generally harmless, many people choose to have skin tags removed for cosmetic reasons 
                    or if they become irritated by clothing or jewelry.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Removal Methods */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Removal Methods</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We offer multiple proven techniques for safe and effective mole and skin tag removal
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {removalMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-black border-gray-800 h-full">
                      <CardHeader className="text-center">
                        <IconComponent className="w-12 h-12 mb-4 mx-auto text-purple-300" />
                        <CardTitle className="text-purple-300">{method.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-gray-300">{method.description}</p>
                        <div className="space-y-2">
                          <h4 className="text-white font-semibold">Benefits:</h4>
                          <ul className="space-y-1">
                            {method.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                                <span className="text-gray-300">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* When to Seek Treatment */}
        <section className="py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">When to Seek Treatment</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Recognising when professional assessment and removal is recommended
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-gray-800 h-full">
                  <CardHeader>
                    <CardTitle className="text-purple-300">Mole Assessment (ABCDE)</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300 mb-4">
                      Consult us if you notice any of these changes in a mole:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-medium">Asymmetry:</span>
                          <span className="text-gray-300"> One half doesn't match the other</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-medium">Border:</span>
                          <span className="text-gray-300"> Irregular, scalloped, or poorly defined edges</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-medium">Color:</span>
                          <span className="text-gray-300"> Varied colors or changes in color</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-medium">Diameter:</span>
                          <span className="text-gray-300"> Larger than 6mm (pencil eraser)</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-medium">Evolving:</span>
                          <span className="text-gray-300"> Changes in size, shape, color, or feel</span>
                        </div>
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
                <Card className="bg-accent border-gray-800 h-full">
                  <CardHeader>
                    <CardTitle className="text-purple-300">Skin Tag Removal Reasons</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300 mb-4">
                      Consider removal if skin tags cause:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <span className="text-gray-300">Irritation from clothing or jewelry</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <span className="text-gray-300">Bleeding due to catching or rubbing</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <span className="text-gray-300">Cosmetic concerns in visible areas</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <span className="text-gray-300">Pain or discomfort when touched</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <span className="text-gray-300">Changes in appearance or texture</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <span className="text-gray-300">Interference with daily activities</span>
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
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Get answers to common questions about mole and skin tag removal at our London clinic.
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

        {/* CTA Section */}
        <section className="py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Journey?</h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Schedule a consultation with our expert dermatologists for professional mole and skin tag assessment and removal.
              </p>
              <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl">
                Book Your Consultation
              </Button>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Hidden SEO Content */}
      <div className="hidden">
        <p>
          Professional mole and skin tag removal services in London at Cosmedocs Harley Street clinic. 
          Our expert dermatologists provide safe, effective removal using advanced techniques including surgical excision, 
          cryotherapy, and electrosurgery. We follow strict safety protocols and offer comprehensive aftercare to ensure 
          optimal healing with minimal scarring. Whether you're concerned about changes in a mole or want cosmetic removal 
          of skin tags, our experienced team provides personalized treatment plans. We understand the importance of skin 
          health and offer thorough assessments using the ABCDE criteria for moles. Our clinic uses state-of-the-art 
          equipment and sterile techniques to ensure the highest standards of care. All procedures are performed by 
          qualified medical professionals with extensive experience in dermatological treatments. We provide detailed 
          aftercare instructions and follow-up support to monitor healing progress. Our commitment to patient safety 
          and satisfaction makes us a trusted choice for mole and skin tag removal in London. Book your consultation 
          today to discuss your concerns with our expert team and receive personalized treatment recommendations.
        </p>
        <p>
          Mole removal, skin tag removal, dermatology London, Harley Street dermatologist, cosmetic dermatology, 
          skin lesion removal, mole check, skin cancer screening, cryotherapy, electrosurgery, surgical excision, 
          dermatological procedures, skin health, aesthetic dermatology, medical dermatology, professional skin care, 
          London skin clinic, expert dermatologists, safe removal procedures, minimal scarring, quick recovery, 
          same day treatment, local anaesthetic, professional aftercare, skin assessment, ABCDE mole check, 
          benign lesion removal, cosmetic skin procedures, skin tag treatment, mole treatment, expert consultation.
        </p>
      </div>
    </>
  );
};

export default MoleSkinTagRemoval;