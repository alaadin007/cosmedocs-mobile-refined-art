import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import FAQSchema from '@/components/seo/FAQSchema';
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import { generateSEOMetadata } from "@/utils/seo";

const HairTransplantSurgeon = () => {
  const seoData = generateSEOMetadata(
    "Hair Transplant Surgeon London | Cosmedocs",
    "Natural hair restoration with expert surgeon. CQC-approved clinic offering FUE & FUT transplant techniques. Contact Pashma.",
    "/hair-transplant-surgeon"
  );

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  
  const beforeAfterImages = [
    { src: "/placeholder.svg", alt: "Hair transplant before and after showing natural hairline restoration", caption: "Natural hairline restoration with expert hair transplant techniques" },
    { src: "/placeholder.svg", alt: "Professional hair transplant results showing fuller crown area", caption: "Professional hair transplant results showing enhanced hair density" },
  ];

  const faqs = [
    {
      question: "What hair transplant techniques do you offer?",
      answer: "Our R CQC approved clinic offers advanced hair transplant techniques including FUE (Follicular Unit Extraction) and FUT (Follicular Unit Transplantation), tailored to your specific hair loss pattern and goals."
    },
    {
      question: "How long does a hair transplant procedure take?",
      answer: "Hair transplant procedures typically take 4-8 hours depending on the number of grafts required. Our experienced surgeon ensures precision and comfort throughout the entire process."
    },
    {
      question: "What is the recovery time after hair transplant?",
      answer: "Most patients can return to work within 2-3 days. Full healing occurs within 10-14 days, with new hair growth visible after 3-4 months and full results after 12-18 months."
    },
    {
      question: "Are hair transplants permanent?",
      answer: "Yes, hair transplants provide permanent results. The transplanted hair follicles are genetically resistant to DHT (the hormone causing male pattern baldness) and will continue growing naturally."
    },
    {
      question: "What makes your clinic R CQC approved?",
      answer: "Our R CQC (Care Quality Commission) approval ensures we meet the highest standards of safety, quality, and patient care. This certification guarantees regulated medical practice and optimal treatment outcomes."
    },
    {
      question: "How do I consult with your hair transplant surgeon?",
      answer: "Contact Pashma to schedule your consultation with our expert hair transplant surgeon. We provide comprehensive assessment, treatment planning, and personalized care throughout your hair restoration journey."
    },
    {
      question: "What causes hair loss and who is a good candidate?",
      answer: "Hair loss can be caused by genetics, hormones, stress, or medical conditions. Good candidates have sufficient donor hair, realistic expectations, and are in good general health."
    },
    {
      question: "How much does hair transplant cost?",
      answer: "Hair transplant costs vary based on the number of grafts needed and technique used. Contact Pashma for a personalized consultation and detailed pricing information."
    },
    {
      question: "Will the results look natural?",
      answer: "Our expert surgeon creates natural-looking hairlines and density patterns. Using advanced techniques and artistic skill, we ensure results that blend seamlessly with your existing hair."
    },
    {
      question: "Can women have hair transplants?",
      answer: "Yes, women experiencing hair thinning or pattern baldness can benefit from hair transplant procedures. Our surgeon assesses each case individually to determine the best approach."
    },
    {
      question: "What is the success rate of hair transplants?",
      answer: "Hair transplants have a very high success rate of 95-98% when performed by experienced surgeons in R CQC approved facilities like ours, ensuring optimal graft survival and natural results."
    },
    {
      question: "How do I prepare for my hair transplant?",
      answer: "Preparation includes avoiding blood thinners, alcohol, and smoking before surgery. Detailed pre-operative instructions will be provided during your consultation with Pashma."
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
        <meta name="keywords" content="hair transplant surgeon London, hair restoration, FUE transplant, R CQC approved clinic, hair loss treatment, male pattern baldness, Pashma, Harley Street, natural hairline" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "Cosmedocs",
            "description": "Expert hair transplant surgeon consultation in R CQC approved clinic London",
            "url": seoData.canonical,
            "telephone": "+44 20 3733 3227",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "10 Harley Street",
              "addressLocality": "London",
              "addressRegion": "Greater London",
              "postalCode": "W1G 9PF",
              "addressCountry": "GB"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 51.5074,
              "longitude": -0.1278
            },
            "priceRange": "£££",
            "additionalProperty": {
              "@type": "PropertyValue",
              "name": "CQC Registration",
              "value": "R CQC Approved Clinic"
            }
          })}
        </script>
      </Helmet>
      <FAQSchema faqs={faqs} />

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
                  Natural Hair
                  <span className="block text-purple-300">Restoration</span>
                  <span className="block text-sm mt-4">Expert hair transplant surgeon consultation in R CQC approved clinic</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl">
                  <span className="text-purple-300 font-semibold">Invisible Art</span>
                  <br />
                  Transformation that speaks without saying a word
                </p>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Contact Pashma</p>
                  <p className="text-sm text-gray-300">Professional consultation in our R CQC approved clinic for natural hair restoration</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl">
                    Contact Pashma Today
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm">
                    Schedule Consultation
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
                See the transformative results achieved with our expert hair transplant surgeon. 
                Each patient receives personalized care in our R CQC approved clinic for optimal hair restoration outcomes.
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
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* Treatment Overview */}
        <section className="py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Expert Hair Transplant Surgeon</h2>
              <p className="text-gray-300 max-w-4xl mx-auto text-lg">
                Our expert hair transplant surgeon specializes in natural hair restoration using advanced techniques 
                in our R CQC approved clinic. We provide comprehensive consultation and personalized treatment plans 
                to restore your confidence with natural-looking results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Why Choose Our Surgeon */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6 text-purple-300">Why Choose Our Hair Transplant Surgeon?</h3>
                <p className="text-gray-300 mb-6">
                  Our experienced hair transplant surgeon combines artistic skill with medical expertise to create 
                  natural hairlines and optimal density. Working in our R CQC approved clinic ensures the highest 
                  standards of safety and care.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white">R CQC Approved Clinic</h4>
                      <p className="text-gray-300 text-sm">Regulated facility meeting highest safety and quality standards</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white">Advanced Techniques</h4>
                      <p className="text-gray-300 text-sm">FUE and FUT methods for optimal results with minimal scarring</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white">Natural Results</h4>
                      <p className="text-gray-300 text-sm">Artistic hairline design for seamless, undetectable outcomes</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white">Contact Pashma</h4>
                      <p className="text-gray-300 text-sm">Personalized consultation and comprehensive treatment planning</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Hair Transplant Benefits */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6 text-purple-300">Hair Transplant Benefits</h3>
                <p className="text-gray-300 mb-6">
                  Hair transplant surgery offers permanent hair restoration with natural results. Our expert surgeon 
                  ensures minimal discomfort and optimal graft survival for long-lasting confidence.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <p className="text-gray-300">Permanent hair restoration solution</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <p className="text-gray-300">Natural hairline design and density</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <p className="text-gray-300">Minimal scarring with advanced techniques</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <p className="text-gray-300">Boost confidence and self-esteem</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <p className="text-gray-300">No ongoing maintenance required</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* R CQC Approved Clinic Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">R CQC Approved Excellence</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our R CQC approved clinic meets the highest regulatory standards for safety, quality, and patient care in hair transplant surgery.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Regulated Safety",
                  description: "CQC approved facility ensuring highest medical safety standards"
                },
                {
                  title: "Quality Assurance",
                  description: "Continuous monitoring and improvement of treatment protocols"
                },
                {
                  title: "Expert Surgeon",
                  description: "Specialized hair transplant surgeon with proven track record"
                },
                {
                  title: "Patient Care",
                  description: "Comprehensive support from consultation through recovery"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-black rounded-lg p-6 text-center border border-gray-800"
                >
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Pashma Section */}
        <section className="py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Contact Pashma for Consultation</h2>
              <p className="text-gray-300 max-w-4xl mx-auto text-lg">
                Schedule your personalized consultation with Pashma to discuss your hair restoration goals with our 
                expert hair transplant surgeon. We provide comprehensive assessment and tailored treatment plans in 
                our R CQC approved clinic.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="bg-black border-gray-800">
                <CardHeader>
                  <CardTitle className="text-purple-300">Initial Consultation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Comprehensive hair loss assessment and treatment planning with our expert surgeon.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Hair loss pattern analysis</li>
                    <li>• Donor area evaluation</li>
                    <li>• Treatment options discussion</li>
                    <li>• Realistic expectations setting</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-black border-gray-800">
                <CardHeader>
                  <CardTitle className="text-purple-300">Advanced Techniques</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    State-of-the-art hair transplant methods performed in our R CQC approved facility.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• FUE (Follicular Unit Extraction)</li>
                    <li>• FUT (Follicular Unit Transplantation)</li>
                    <li>• Microscopic graft preparation</li>
                    <li>• Natural hairline design</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-black border-gray-800">
                <CardHeader>
                  <CardTitle className="text-purple-300">Post-Procedure Care</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Comprehensive aftercare and follow-up support for optimal healing and results.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Detailed aftercare instructions</li>
                    <li>• Regular follow-up appointments</li>
                    <li>• Progress monitoring</li>
                    <li>• Long-term support</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-2xl">
                Contact Pashma Now
              </Button>
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
                Get answers to common questions about hair transplant surgery and our R CQC approved clinic.
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
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-black rounded-lg border border-gray-800">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                      <span className="text-white font-medium">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <p className="text-gray-300">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h2>Hair Transplant Surgeon London - Expert Hair Restoration</h2>
          <p>
            Hair transplant surgery has revolutionized the treatment of hair loss, offering permanent solutions for 
            both men and women experiencing male pattern baldness, female pattern hair loss, and other forms of alopecia. 
            Our expert hair transplant surgeon specializes in advanced follicular unit extraction (FUE) and follicular 
            unit transplantation (FUT) techniques, providing natural-looking results in our R CQC approved clinic.
          </p>
          
          <h3>Understanding Hair Loss and Transplant Solutions</h3>
          <p>
            Hair loss affects millions of people worldwide, with androgenetic alopecia being the most common cause. 
            This hereditary condition leads to progressive hair thinning and eventual baldness in characteristic patterns. 
            Hair transplant surgery works by relocating healthy hair follicles from donor areas (typically the back and 
            sides of the head) to areas experiencing hair loss. These transplanted follicles retain their genetic 
            resistance to DHT (dihydrotestosterone), ensuring permanent hair growth in the recipient area.
          </p>
          
          <h3>Advanced Hair Transplant Techniques</h3>
          <p>
            Modern hair transplant surgery offers several sophisticated techniques, each with specific advantages. 
            Follicular Unit Extraction (FUE) involves individually harvesting hair follicles using specialized micro-punches, 
            leaving minimal scarring and allowing for shorter recovery times. Follicular Unit Transplantation (FUT), 
            also known as the strip method, involves removing a strip of hair-bearing skin from the donor area and 
            dissecting individual follicular units under high-powered microscopes. Our surgeon carefully selects 
            the most appropriate technique based on your hair characteristics, desired outcome, and lifestyle preferences.
          </p>
          
          <h3>R CQC Approved Clinic Excellence</h3>
          <p>
            Our R CQC (Care Quality Commission) approved clinic meets the highest regulatory standards for medical 
            facilities in the UK. This certification ensures that our hair transplant procedures are performed in 
            a safe, sterile environment with appropriate medical oversight and quality assurance protocols. The CQC 
            regularly inspects our facility to ensure compliance with safety standards, staff competency requirements, 
            and patient care protocols, providing additional peace of mind for patients seeking hair restoration treatments.
          </p>
          
          <h3>Natural Hairline Design and Artistic Approach</h3>
          <p>
            Creating a natural-looking hairline requires both technical skill and artistic vision. Our hair transplant 
            surgeon considers factors such as facial structure, age, hair characteristics, and future hair loss patterns 
            when designing the new hairline. The placement of individual follicular units follows natural hair growth 
            patterns, with single-hair grafts placed at the hairline edge and denser multi-hair grafts used to create 
            volume behind the hairline. This meticulous approach ensures results that are undetectable and age appropriately.
          </p>
        </div>
      </div>
    </>
  );
};

export default HairTransplantSurgeon;