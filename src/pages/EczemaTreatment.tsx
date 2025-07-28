import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { generateSEOMetadata } from "@/utils/seo";
import CosmeDocsAI from "@/components/CosmeDocs AI";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";

export default function EczemaTreatment() {
  const seoData = generateSEOMetadata(
    "Eczema Treatment London | Expert Dermatology Care | CosmeDocs",
    "Professional eczema treatment in London. Expert dermatologists offering effective solutions for dry, red, and scaly skin. Reduce inflammation and restore skin health.",
    "/eczema-treatment"
  );

  // Before and after images for eczema treatment
  const beforeAfterImages = [
    {
      src: "/placeholder.svg",
      alt: "Eczema treatment before and after - Patient 1",
      caption: "Significant improvement in skin inflammation and texture"
    },
    {
      src: "/placeholder.svg", 
      alt: "Eczema treatment before and after - Patient 2",
      caption: "Reduced redness and restored skin barrier function"
    },
    {
      src: "/placeholder.svg",
      alt: "Eczema treatment before and after - Patient 3", 
      caption: "Dramatic healing of dry, scaly patches"
    },
    {
      src: "/placeholder.svg",
      alt: "Eczema treatment before and after - Patient 4",
      caption: "Complete resolution of chronic eczema symptoms"
    },
    {
      src: "/placeholder.svg",
      alt: "Eczema treatment before and after - Patient 5",
      caption: "Smooth, healthy skin restoration"
    },
    {
      src: "/placeholder.svg",
      alt: "Eczema treatment before and after - Patient 6",
      caption: "Long-term eczema management success"
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
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:image" content={seoData.image} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.image} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "Eczema Treatment",
            "description": "Professional eczema treatment for dry, red, and scaly skin conditions",
            "procedureType": "Dermatological Treatment",
            "bodyLocation": "Skin",
            "preparation": "Consultation with qualified dermatologist",
            "followup": "Regular monitoring and skincare regime",
            "howPerformed": "Topical treatments, emollients, and professional dermatological care",
            "provider": {
              "@type": "MedicalOrganization",
              "name": "CosmeDocs",
              "url": "https://www.cosmedocs.com",
              "telephone": "+44-20-7043-0748",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "124 City Road",
                "addressLocality": "London",
                "postalCode": "EC1V 2NX",
                "addressCountry": "GB"
              }
            }
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        {/* Hero Section - Matching LipFillers design */}
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
                  Expert Eczema
                  <span className="block text-purple-300">Treatment</span>
                  <span className="block text-sm mt-4">Professional care for dry, red & scaly skin</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl">
                  <span className="text-purple-300 font-semibold">Invisible Art</span>
                  <br />
                  Transformation that speaks without saying a word
                </p>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Price on Consultation</p>
                  <p className="text-sm text-gray-300">Expert dermatological care for chronic skin conditions</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl">
                    Book Consultation
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm">
                    Call: 020 7043 0748
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
                See the dramatic improvements achieved with our expert eczema treatments. 
                Each patient receives personalized care for optimal skin health restoration.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                title="Eczema Treatment Results Gallery"
                description="Comprehensive gallery of our eczema treatment results"
              />
            </div>
          </div>
        </section>

        {/* Treatment Summary */}
        <section className="py-16 bg-gray-900">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-700">
                <h2 className="text-3xl font-bold text-center mb-8 text-white">Treatment Summary</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gray-700 rounded-2xl">
                    <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-white">Treatment Time</h3>
                    <p className="text-gray-300">30-45 minutes consultation</p>
                  </div>
                  <div className="text-center p-6 bg-gray-700 rounded-2xl">
                    <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-white">Results</h3>
                    <p className="text-gray-300">Gradual improvement over weeks</p>
                  </div>
                  <div className="text-center p-6 bg-gray-700 rounded-2xl">
                    <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-white">Recovery</h3>
                    <p className="text-gray-300">No downtime required</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose CosmeDocs */}
        <section className="py-16 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">Why Choose CosmeDocs?</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Our aesthetics is invisible art - Bold • Natural • Always Your Way
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Expert Dermatologists",
                  description: "Qualified specialists with extensive experience in eczema treatment",
                  icon: "👨‍⚕️"
                },
                {
                  title: "Personalized Care", 
                  description: "Tailored treatment plans based on your specific skin condition",
                  icon: "🎯"
                },
                {
                  title: "Proven Results",
                  description: "Effective treatments that reduce inflammation and restore skin health",
                  icon: "✨"
                },
                {
                  title: "Ongoing Support",
                  description: "Long-term care and monitoring to maintain healthy skin",
                  icon: "🤝"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gray-800 rounded-2xl shadow-lg border border-gray-700 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-900">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
              
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="what-is-eczema" className="bg-gray-800 border border-gray-700 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-white">
                    What is eczema and what causes it?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pt-4">
                    Eczema is a chronic skin condition characterized by dry, red, and scaly rashes. It occurs when the skin struggles to retain moisture, making it more reactive to triggers. Genetics play a significant role, with family history being a strong factor. Environmental triggers include soaps, detergents, cold weather, food allergies, and stress.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="symptoms" className="bg-gray-800 border border-gray-700 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-white">
                    What are the main symptoms of eczema?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pt-4">
                    Primary symptoms include dry, red, itchy skin, cracked or crusted skin, blisters, oozing or bleeding, sore and swollen areas, and red, purple, or grey patches. Symptoms can range from mild and localized to widespread and severe, often fluctuating between improvements and flare-ups.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="treatment-options" className="bg-gray-800 border border-gray-700 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-white">
                    What treatment options are available?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pt-4">
                    Key treatments include emollients (daily moisturizers) to prevent skin dryness, topical corticosteroids to reduce swelling and redness during flare-ups, and antihistamines for severe itching relief. Our expert team provides personalized treatment plans that help reduce inflammation without causing skin thinning.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="lifestyle-changes" className="bg-gray-800 border border-gray-700 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-white">
                    What lifestyle changes can help manage eczema?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pt-4">
                    Lifestyle modifications that can enhance treatment include minimizing scratching of affected areas, avoiding triggers such as heat and irritants like certain soaps and fabrics, and considering dietary changes to limit foods like dairy that may worsen symptoms. Stress management is also important as stress can trigger flare-ups.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="who-suitable" className="bg-gray-800 border border-gray-700 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-white">
                    Who is suitable for eczema treatment?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pt-4">
                    Treatment is suitable for anyone experiencing eczema symptoms and looking to improve their quality of life. While there's no cure for eczema, many people experience symptom improvement as they grow older. A consultation with our dermatologists will determine the best personalized treatment plan for your specific condition.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="pricing" className="bg-gray-800 border border-gray-700 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-white">
                    How much does eczema treatment cost?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pt-4">
                    Pricing is determined during consultation based on your specific condition and treatment requirements. Our team will provide a detailed treatment plan with transparent pricing after assessing your individual needs. Contact us for a consultation to discuss your treatment options and associated costs.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-black">
          <div className="page-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto space-y-8"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white">Ready to Begin Your Journey?</h2>
              <p className="text-lg text-gray-300">
                Take the first step towards healthier skin with our expert eczema treatment. 
                Book your consultation today and discover how we can help restore your skin's natural balance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl">
                  Book Consultation
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm">
                  Call: 020 7043 0748
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h2>Comprehensive Eczema Treatment in London</h2>
          <p>CosmeDocs offers advanced eczema treatment solutions for patients seeking relief from chronic skin conditions. Our expert dermatologists specialize in managing dry, red, and scaly rashes through evidence-based treatments that address both symptoms and underlying causes.</p>
          
          <h3>Understanding Eczema and Its Impact</h3>
          <p>Eczema affects approximately one in nine people in the UK at some point in their lives. This chronic inflammatory skin condition manifests through various symptoms including redness, swelling, itching, dryness, crusting, flaking, blistering, cracking, oozing, and bleeding. The condition significantly impacts quality of life, causing discomfort and potentially leading to temporary discoloration and scarring from scratching.</p>
          
          <h3>Professional Treatment Approaches</h3>
          <p>Our comprehensive treatment protocols focus on reducing inflammation and controlling symptoms without causing skin thinning. We employ a multi-faceted approach including topical corticosteroids for acute flare-ups, daily emollient therapy to maintain skin barrier function, and antihistamine therapy for severe pruritus management. Each treatment plan is personalized based on individual patient needs and condition severity.</p>
          
          <h3>Advanced Dermatological Care</h3>
          <p>At CosmeDocs, our qualified dermatologists utilize the latest evidence-based treatment modalities to achieve optimal outcomes. We understand that eczema is a fluctuating condition with periods of remission and exacerbation, requiring ongoing management and support. Our invisible art approach ensures natural-looking results while prioritizing patient comfort and long-term skin health.</p>
          
          <h3>Lifestyle Integration and Management</h3>
          <p>Effective eczema management extends beyond clinical treatment to include lifestyle modifications and trigger avoidance. Our specialists provide comprehensive education on environmental trigger identification, proper skincare routines, stress management techniques, and dietary considerations that may influence condition severity. This holistic approach maximizes treatment efficacy and promotes sustained improvement.</p>
        </div>
      </div>
      
      <CosmeDocsAI />
    </>
  );
}