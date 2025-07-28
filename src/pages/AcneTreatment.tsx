import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import PopularTreatments from "@/components/PopularTreatments";
import { generateSEOMetadata } from "@/utils/seo";

const AcneTreatment = () => {
  const seoData = generateSEOMetadata(
    "Acne Treatment London | Expert Dermatology | Cosmedocs Harley Street",
    "Professional acne treatment in London by expert dermatologists. Clear, blemish-free skin with advanced acne therapies. Book consultation at Harley Street clinic.",
    "/acne-treatment"
  );

  const treatmentDetails = [
    { label: "Anaesthetic", value: "Local", icon: "💉" },
    { label: "Acne Results", value: "15-18 months", icon: "📅" },
    { label: "Procedure Time", value: "30 mins", icon: "⏱️" },
    { label: "Risk & Complications", value: "Swelling, Redness, Itching, Bruising", icon: "⚠️" },
    { label: "Full Recovery", value: "24-48 hours, no downtime", icon: "🔄" },
    { label: "Back To Work", value: "After Treatment", icon: "💼" }
  ];

  const beforeAfterImages = [
    { src: "/placeholder.svg", alt: "Acne treatment before and after - severe to clear", caption: "Dramatic improvement from severe acne to clear, healthy skin" },
    { src: "/placeholder.svg", alt: "Acne scarring treatment results", caption: "Significant reduction in acne scarring and improved skin texture" },
    { src: "/placeholder.svg", alt: "Hormonal acne treatment", caption: "Hormonal acne successfully treated with minimal scarring" },
    { src: "/placeholder.svg", alt: "Cystic acne transformation", caption: "Cystic acne transformation showing clear, smooth skin" }
  ];

  const faqs = [
    {
      question: "How long does acne treatment take to work?",
      answer: "Results typically begin to show within 4-6 weeks, with significant improvement visible after 3 months. Full treatment results are usually achieved within 15-18 months, depending on the severity of acne and individual response."
    },
    {
      question: "Is acne treatment painful?",
      answer: "Most acne treatments are well-tolerated with minimal discomfort. We use topical anaesthetic when necessary and ensure your comfort throughout all procedures. Any mild discomfort usually subsides within hours."
    },
    {
      question: "What types of acne can you treat?",
      answer: "We treat all forms of acne including mild to severe acne vulgaris, cystic acne, hormonal acne, and acne scarring. Our comprehensive approach addresses both active acne and prevents future breakouts."
    },
    {
      question: "Are there any side effects?",
      answer: "Temporary side effects may include mild swelling, redness, itching, or bruising at treatment sites. These typically resolve within 24-48 hours. Our expert team monitors your progress and adjusts treatment as needed."
    },
    {
      question: "How much does acne treatment cost?",
      answer: "Acne treatment costs vary depending on the severity and type of treatment required. We offer comprehensive consultations to create personalized treatment plans with transparent pricing and flexible payment options."
    },
    {
      question: "Can acne scars be treated?",
      answer: "Yes, we offer advanced acne scar treatments including laser therapy, chemical peels, and dermal fillers. The best approach depends on the type and severity of scarring, which we'll assess during your consultation."
    },
    {
      question: "How do I prevent acne from returning?",
      answer: "We provide comprehensive aftercare including personalized skincare routines, lifestyle recommendations, and maintenance treatments. Our approach focuses on long-term skin health and prevention strategies."
    },
    {
      question: "When can I return to normal activities?",
      answer: "Most patients can return to work and normal activities immediately after treatment. We recommend avoiding intense physical activity for 24 hours and following our specific aftercare instructions for optimal results."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Acne Treatment",
    "description": "Professional acne treatment for clear, blemish-free skin",
    "procedureType": "Dermatological Treatment",
    "bodyLocation": "Face, Chest, Back",
    "preparation": "Consultation with dermatologist",
    "followup": "Regular follow-up appointments",
    "howPerformed": "Advanced acne therapies and treatments",
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
        <meta name="keywords" content="acne treatment London, dermatology, clear skin, acne therapy, Harley Street, cosmetic dermatology, acne scarring, cystic acne" />
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
                  Clear Skin
                  <span className="block text-purple-300">Solution</span>
                  <span className="block text-sm mt-4">Say hello to blemish-free, clear & clean skin</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl">
                  <span className="text-purple-300 font-semibold">Our Aesthetics is Invisible Art</span>
                  <br />
                  Transformation that speaks without saying a word
                </p>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Advanced Acne Therapy</p>
                  <p className="text-sm text-gray-300">Long-lasting results for all types of acne and scarring</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl">
                    Book Consultation
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm">
                    View Treatment Options
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
                Comprehensive acne treatment with minimal downtime and maximum results
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {treatmentDetails.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-black border-gray-800 h-full">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl mb-3">{detail.icon}</div>
                      <h3 className="text-lg font-semibold mb-2 text-purple-300">{detail.label}</h3>
                      <p className="text-gray-300">{detail.value}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What is Acne Treatment */}
        <section className="py-20">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">What is Acne Treatment?</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Acne is the most common chronic skin disease, causing lesions, spots, and oily skin primarily on the face, 
                    chest, and back due to infected skin pores. While it especially affects adolescents, acne is not age-specific.
                  </p>
                  <p>
                    Our comprehensive acne treatment approach addresses:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <span>Active acne lesions and breakouts</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <span>Acne scarring and texture issues</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <span>Hormonal and cystic acne</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <span>Prevention of future breakouts</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-none">
                  <CardHeader>
                    <CardTitle className="text-white">Why Choose Cosmedocs for Acne Treatment?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Expert dermatologists with extensive acne treatment experience</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Advanced treatment technologies and techniques</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Personalized treatment plans for every skin type</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Comprehensive aftercare and follow-up support</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Long-term skin health and maintenance programs</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Types of Acne */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Types of Acne</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Understanding the different types of acne helps us create targeted treatment plans for optimal results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-gray-800 h-full">
                  <CardHeader>
                    <CardTitle className="text-purple-300">Non-Inflamed Acne</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300 mb-4">
                      Less severe than inflamed types, these blemishes don't cause swelling or pain but may lead to inflamed acne if left untreated.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-medium">Milia:</span>
                          <span className="text-gray-300"> Non-inflamed whiteheads</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-medium">Whiteheads:</span>
                          <span className="text-gray-300"> Closed plugged pores</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-medium">Blackheads:</span>
                          <span className="text-gray-300"> Open blocked pores</span>
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
                <Card className="bg-black border-gray-800 h-full">
                  <CardHeader>
                    <CardTitle className="text-purple-300">Inflamed Acne</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300 mb-4">
                      Inflammatory acne includes blemishes that are red, swollen, inflamed, and warm to touch.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-medium">Papules:</span>
                          <span className="text-gray-300"> Small, red, tender, raised bumps from inflamed hair follicles</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-medium">Pustules:</span>
                          <span className="text-gray-300"> Pimples with pus at their tips</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-medium">Nodules:</span>
                          <span className="text-gray-300"> Solid, painful lumps under the skin</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-medium">Cysts:</span>
                          <span className="text-gray-300"> Large, painful, pus-filled lumps under the skin</span>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Common Areas Where Acne Develops */}
        <section className="py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Common Areas Where Acne Develops</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Understanding where acne commonly occurs helps us target treatment effectively for each affected area.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-gray-800 text-center h-full">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">👤</div>
                    <h3 className="text-xl font-semibold mb-3 text-purple-300">Facial Acne</h3>
                    <p className="text-gray-300">
                      Affects every acne patient. The most visible and common area where acne develops, 
                      requiring specialized facial treatment approaches.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-gray-800 text-center h-full">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">🏃‍♂️</div>
                    <h3 className="text-xl font-semibold mb-3 text-purple-300">Back Acne</h3>
                    <p className="text-gray-300">
                      Almost 50% of acne patients experience back acne. Often more severe due to 
                      thicker skin and increased sebaceous gland activity.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-gray-800 text-center h-full">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">👕</div>
                    <h3 className="text-xl font-semibold mb-3 text-purple-300">Chest Acne</h3>
                    <p className="text-gray-300">
                      One in 6 acne patients experience chest acne. Less common but can be particularly 
                      challenging to treat due to clothing friction.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Treatment Options */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Treatment Through Which Acne is Addressed</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our expert dermatologists offer comprehensive acne treatment options tailored to your specific skin type and acne severity.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-gray-800 h-full">
                  <CardHeader>
                    <CardTitle className="text-purple-300">Skin Peels</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-medium">Comedo Extractions:</span>
                          <span className="text-gray-300"> Gently remove blackheads, milia and soft closed comedones</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-medium">Light Chemical Peels:</span>
                          <span className="text-gray-300"> Using alpha-hydroxy, beta-hydroxy, or glycolic acids</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-medium">Glycolic Peels:</span>
                          <span className="text-gray-300"> Reduce comedones and prevent acne reproduction</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-medium">Jessner's Peel:</span>
                          <span className="text-gray-300"> Combination treatment more effective than single acid peels</span>
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
                <Card className="bg-black border-gray-800 h-full">
                  <CardHeader>
                    <CardTitle className="text-purple-300">Advanced Treatments</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-medium">Microdermabrasion:</span>
                          <span className="text-gray-300"> Removes dead skin cells, ideal for non-inflamed acne</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-medium">Phototherapy:</span>
                          <span className="text-gray-300"> Blue and red light therapy to kill bacteria and reduce inflammation</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-medium">Corticosteroid Injections:</span>
                          <span className="text-gray-300"> For cystic acne to reduce inflammation and scarring</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-medium">Systemic Treatment:</span>
                          <span className="text-gray-300"> Oral antibiotics and hormonal treatments for severe cases</span>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <Card className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-none">
                <CardHeader>
                  <CardTitle className="text-white text-center">Systemic Treatment Options</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 text-center mb-6">
                    For severe acne cases, we offer prescription-only medicines that can be taken orally or by injection:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="text-purple-300 font-semibold">Oral Antibiotics</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                          <span className="text-gray-300">Erythromycin</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                          <span className="text-gray-300">Tetracycline</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                          <span className="text-gray-300">Minocycline</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                          <span className="text-gray-300">Doxycycline</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-purple-300 font-semibold">Hormonal Treatments</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                          <span className="text-gray-300">Birth control pills</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                          <span className="text-gray-300">Spironolactone</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                          <span className="text-gray-300">Isotretinoin (Accutane)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
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
                See the remarkable transformations achieved with our expert acne treatment programs. 
                Each patient receives personalized care for optimal results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {beforeAfterImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group cursor-pointer"
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg"></div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <BeforeAfterImageViewer 
                images={beforeAfterImages}
                triggerLabel="View All Before & After Photos"
                title="Acne Treatment Results Gallery"
                description="Comprehensive gallery of our acne treatment transformations"
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
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
                Get answers to common questions about acne treatment at our London clinic.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-accent rounded-lg border-gray-800">
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
              <h2 className="text-3xl font-bold mb-4">Ready for Clear, Beautiful Skin?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert dermatologists and discover how our advanced acne treatments 
                can transform your skin with lasting, natural results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6">
                  Book Free Consultation
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6">
                  Call 0333 0551 503
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Popular Treatments */}
        <PopularTreatments />

        {/* Hidden SEO content for search engines */}
        <div className="sr-only">
          <p>
            Professional acne treatment in London at Cosmedocs Harley Street clinic. Our expert dermatologists provide 
            comprehensive acne therapy for all skin types and severities. Advanced treatments for active acne, cystic acne, 
            hormonal acne, and acne scarring. Clear, blemish-free skin with minimal downtime and maximum results.
          </p>
          <p>
            Acne vulgaris affects millions of people worldwide, causing physical and emotional distress. Our evidence-based 
            approach combines the latest dermatological advances with personalized care. We treat comedonal acne, inflammatory 
            acne, nodular acne, and severe cystic acne using targeted therapies that address the root causes.
          </p>
          <p>
            Our acne treatment protocols include topical medications, oral therapies, chemical peels, laser treatments, 
            and advanced light therapies. Each treatment plan is customized based on acne severity, skin type, previous 
            treatments, and individual patient needs. We also address post-inflammatory hyperpigmentation and acne scarring.
          </p>
          <p>
            Prevention is key to long-term acne management. Our dermatologists provide comprehensive skincare education, 
            lifestyle modifications, and maintenance protocols to prevent future breakouts. Regular follow-up appointments 
            ensure optimal results and skin health maintenance.
          </p>
          <p>
            Cosmedocs uses only proven, safe, and effective acne treatments. Our clinic follows strict safety protocols 
            and maintains the highest standards of care. Patient safety and satisfaction are our top priorities in every 
            acne treatment we provide.
          </p>
        </div>
      </div>
    </>
  );
};

export default AcneTreatment;