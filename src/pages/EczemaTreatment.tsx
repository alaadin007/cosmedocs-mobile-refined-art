import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { generateSEOMetadata } from "@/utils/seo";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import { Stethoscope, Target, Sparkles, HandHeart, Shield, Clock } from "lucide-react";

export default function EczemaTreatment() {
  const seoData = generateSEOMetadata(
    "Eczema Treatment | Expert Dermatology Care - Cosmedocs",
    "Professional eczema treatment by expert dermatologists. Effective solutions for dry, red, and scaly skin. Book consultation today.",
    "https://cosmedocs.com/eczema-treatment"
  );

  const beforeAfterImages = [
    {
      src: "/images/eczema-before-after-1.jpg",
      alt: "Eczema treatment before and after - Patient 1",
      caption: "Significant improvement in skin inflammation and texture"
    },
    {
      src: "/images/eczema-before-after-2.jpg", 
      alt: "Eczema treatment before and after - Patient 2",
      caption: "Reduced redness and restored skin barrier function"
    },
    {
      src: "/images/eczema-before-after-3.jpg",
      alt: "Eczema treatment before and after - Patient 3", 
      caption: "Dramatic healing of dry, scaly patches"
    }
  ];

  const faqs = [
    {
      question: "How long does eczema treatment take to work?",
      answer: "Results typically begin to show within 1-2 weeks for acute flares, with significant improvement visible after 4-6 weeks. Long-term management requires ongoing care and lifestyle adjustments to prevent future flare-ups."
    },
    {
      question: "Is eczema treatment painful?",
      answer: "Most eczema treatments are painless and focus on soothing irritated skin. Topical medications may cause temporary mild stinging, but this usually subsides quickly. Our treatments prioritize comfort and gentle healing."
    },
    {
      question: "What types of eczema can you treat?",
      answer: "We treat all forms of eczema including atopic dermatitis, contact dermatitis, dyshidrotic eczema, and seborrheic dermatitis. Our comprehensive approach addresses both active symptoms and long-term prevention."
    },
    {
      question: "Are there any side effects?",
      answer: "Side effects are generally minimal. Topical corticosteroids may cause temporary skin thinning with prolonged use. Our dermatologists carefully monitor treatment progress and adjust medications as needed to minimize risks."
    },
    {
      question: "How much does eczema treatment cost?",
      answer: "Eczema treatment costs vary depending on the severity and type of treatment required. We offer comprehensive consultations to create personalized treatment plans with transparent pricing and flexible payment options."
    },
    {
      question: "Can eczema be cured permanently?",
      answer: "While there's no permanent cure for eczema, it can be effectively managed and controlled. Many patients achieve long periods of clear skin with proper treatment and lifestyle management. Our goal is to minimize symptoms and prevent flare-ups."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Eczema Treatment",
    "description": "Professional eczema treatment for dry, red, and scaly skin conditions",
    "procedureType": "Dermatological Treatment",
    "bodyLocation": "Skin",
    "preparation": "Consultation with dermatologist",
    "followup": "Regular monitoring and skincare regime",
    "howPerformed": "Topical treatments, emollients, and professional dermatological care",
    "provider": {
      "@type": "MedicalOrganization",
      "name": "Cosmedocs",
      "url": "https://cosmedocs.com"
    },
    "location": {
      "@type": "Place", 
      "name": "UK"
    },
    "offers": {
      "@type": "Offer",
      "description": "Eczema treatment consultation and therapy"
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
        <meta property="og:image" content="https://cosmedocs.com/images/eczema-treatment-og.jpg" />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content="https://cosmedocs.com/images/eczema-treatment-og.jpg" />
        
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
                  <span className="text-purple-300">Expert Eczema Treatment</span>
                  <span className="block text-sm mt-4">Invisible art - natural skin transformation that speaks without words</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Advanced Dermatological Care</p>
                  <p className="text-sm text-gray-300">Comprehensive treatment for all types of eczema</p>
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
              <h2 className="text-3xl font-bold mb-8 text-white">Eczema Treatment</h2>
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
                <p className="text-gray-300">Ongoing therapy and maintenance</p>
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
                <p className="text-gray-300">1-2 weeks to long-term management</p>
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
                <h3 className="text-lg font-semibold text-white mb-2">Return to Activities</h3>
                <p className="text-gray-300">Immediate return to normal activities</p>
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
                <h3 className="text-lg font-semibold text-white mb-2">Comfort Level</h3>
                <p className="text-gray-300">Gentle, soothing treatments</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Before and After Gallery */}
        <section className="py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Before and After Eczema Treatment Results</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See authentic transformations from our clinic. Our comprehensive treatments significantly reduce 
                eczema symptoms and improve skin health for naturally healthy, comfortable skin.
              </p>
            </motion.div>

            <BeforeAfterImageViewer images={beforeAfterImages} />
          </div>
        </section>

        {/* What is Eczema - Two Column Layout */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">What is Eczema?</h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/50 backdrop-blur-sm border-purple-500/20 h-full hover:border-purple-500/40 transition-colors">
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-white mb-4">Understanding Eczema</h3>
                      <p className="text-gray-300">
                        Eczema, also known as atopic dermatitis, is a chronic inflammatory skin condition that causes dry, red, 
                        and intensely itchy patches of skin. It affects people of all ages but is most common in children.
                      </p>
                      <p className="text-gray-300">
                        Our comprehensive eczema treatment approach addresses:
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                          <span className="text-gray-300">Active inflammation and itching</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                          <span className="text-gray-300">Skin barrier restoration</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                          <span className="text-gray-300">Trigger identification and avoidance</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                          <span className="text-gray-300">Long-term prevention strategies</span>
                        </li>
                      </ul>
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
                <Card className="bg-black/50 backdrop-blur-sm border-purple-500/20 h-full hover:border-purple-500/40 transition-colors">
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-white mb-4">What Causes Eczema?</h3>
                      <p className="text-gray-300 mb-4">
                        Understanding the root causes helps us develop effective, personalized treatment strategies.
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                          <div>
                            <span className="text-white font-medium">Genetic Factors:</span>
                            <span className="text-gray-300"> Family history and inherited skin barrier dysfunction</span>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                          <div>
                            <span className="text-white font-medium">Environmental Triggers:</span>
                            <span className="text-gray-300"> Allergens, irritants, and weather conditions</span>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                          <div>
                            <span className="text-white font-medium">Immune System:</span>
                            <span className="text-gray-300"> Overactive immune response to triggers</span>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                          <div>
                            <span className="text-white font-medium">Skin Barrier Issues:</span>
                            <span className="text-gray-300"> Impaired moisture retention and increased permeability</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Comprehensive Treatment Approach */}
        <section className="py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">Comprehensive Treatment Approach</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our multi-faceted approach combines the latest dermatological advances with personalized care for optimal eczema management.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/20 to-black border-purple-500/30 h-full hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <CardHeader>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <Stethoscope className="text-purple-600" size={24} />
                    </div>
                    <CardTitle className="text-white text-xl">Topical Treatments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Advanced topical therapies to reduce inflammation and restore skin barrier function.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>Topical corticosteroids</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>Calcineurin inhibitors</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>Barrier repair moisturizers</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>Ceramide-rich formulations</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/20 to-black border-purple-500/30 h-full hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <CardHeader>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <Target className="text-purple-600" size={24} />
                    </div>
                    <CardTitle className="text-white text-xl">Advanced Therapies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Specialized treatments for moderate to severe eczema cases.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>Phototherapy (UV treatment)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>Wet wrap therapy</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>Oral antihistamines</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>Immunosuppressive therapy</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/20 to-black border-purple-500/30 h-full hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <CardHeader>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <Sparkles className="text-purple-600" size={24} />
                    </div>
                    <CardTitle className="text-white text-xl">Lifestyle Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Comprehensive approach including trigger avoidance and stress management.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>Trigger identification</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>Stress reduction techniques</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>Dietary recommendations</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>Sleep hygiene optimization</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Types of Eczema */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Types of Eczema</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Understanding the different types of eczema helps us create targeted treatment plans for optimal results.
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
                    <CardTitle className="text-purple-300">Atopic Dermatitis</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300 mb-4">
                      The most common form of eczema, typically appearing in childhood but can affect adults. Often associated with allergies and asthma.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-medium">Symptoms:</span>
                          <span className="text-gray-300"> Red, itchy, dry patches of skin</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-medium">Location:</span>
                          <span className="text-gray-300"> Face, hands, feet, inner elbows, behind knees</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-medium">Triggers:</span>
                          <span className="text-gray-300"> Allergens, stress, temperature changes</span>
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
                    <CardTitle className="text-purple-300">Contact Dermatitis</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300 mb-4">
                      Caused by direct contact with irritants or allergens. Can be acute or chronic depending on exposure.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-medium">Irritant Contact:</span>
                          <span className="text-gray-300"> Caused by harsh chemicals, soaps, detergents</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-medium">Allergic Contact:</span>
                          <span className="text-gray-300"> Reaction to specific allergens like nickel, fragrances</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-medium">Treatment:</span>
                          <span className="text-gray-300"> Trigger avoidance and anti-inflammatory treatments</span>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing-section" className="py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Eczema Treatment Pricing</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Professional eczema treatment with personalized care plans. Every treatment includes comprehensive consultation, 
                assessment, and ongoing support from our expert dermatologists.
              </p>
            </motion.div>

            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="max-w-md"
              >
                <Card className="bg-black border-purple-500 h-full text-center">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Eczema Treatment</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">Price on Consultation</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Customized treatment plan based on your specific eczema type and severity</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">Comprehensive skin assessment</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">Personalized treatment plan</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">Ongoing support and monitoring</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">Follow-up appointments included</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
                <p className="text-gray-300">Specialized dermatologists with extensive eczema treatment experience</p>
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
                <p className="text-gray-300">Treatment plans tailored to your specific eczema type and triggers</p>
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
                <p className="text-gray-300">Latest treatment options including phototherapy and barrier repair</p>
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
                Get answers to common questions about eczema treatment at our clinic.
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
              <h2 className="text-3xl font-bold mb-4">Ready for Healthy, Comfortable Skin?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert dermatologists and discover how our advanced eczema treatments 
                can transform your skin health with lasting, natural results.
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

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h2>Comprehensive Eczema Treatment</h2>
          <p>
            Eczema is a chronic inflammatory skin condition that affects millions of people worldwide. 
            At Cosmedocs, we understand the physical and emotional impact that eczema can have on your daily life. 
            Our team of expert dermatologists specializes in providing comprehensive, evidence-based treatments 
            that target the root causes of eczema while addressing the visible symptoms.
          </p>
          
          <h3>Understanding Eczema and Its Types</h3>
          <p>
            Eczema manifests in several forms, each requiring specialized treatment approaches. Atopic dermatitis is 
            the most common type, often appearing in childhood and associated with allergies. Contact dermatitis 
            occurs from direct contact with irritants or allergens. Our dermatologists are experienced in diagnosing 
            and treating all types of eczema, ensuring you receive the most appropriate care for your specific condition.
          </p>
          
          <h3>Advanced Treatment Options</h3>
          <p>
            Our treatment arsenal includes topical corticosteroids, calcineurin inhibitors, and barrier repair 
            moisturizers for managing inflammation and restoring skin function. For more severe cases, we offer 
            phototherapy, wet wrap therapy, and immunosuppressive treatments. Our comprehensive approach also 
            includes trigger identification and lifestyle management strategies.
          </p>
          
          <h3>Personalized Care Approach</h3>
          <p>
            Every patient's eczema journey is unique, which is why we develop personalized treatment plans tailored 
            to your specific needs, triggers, and lifestyle. Our holistic approach considers not only the physical 
            aspects of the condition but also the psychological impact, providing support and guidance throughout your 
            treatment journey. We work closely with you to monitor progress, adjust treatments as needed, and ensure 
            optimal long-term skin health.
          </p>
        </div>
      </div>
    </>
  );
}