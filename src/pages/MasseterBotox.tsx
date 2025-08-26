import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import { generateSEOMetadata } from "@/utils/seo";
import { Clock, Zap, Users, Shield } from "lucide-react";

const MasseterBotox = () => {
  const seoData = generateSEOMetadata(
    "Masseter Botox London | Jaw Slimming & Bruxism Treatment | Cosmedocs Harley Street",
    "Expert Masseter Botox for jaw slimming & bruxism treatment. Reduce jaw muscle size & relieve teeth grinding. £350 both sides. Book consultation at Harley Street clinic.",
    "/treatments/masseter-botox"
  );

  const beforeAfterImages = [
    { src: "/lovable-uploads/8f820207-ab70-4e87-8092-eb39e3eda82d.png", alt: "Masseter Botox before and after showing facial slimming results", caption: "Dramatic facial slimming and jaw contouring with masseter muscle reduction" },
    { src: "/lovable-uploads/0f53b9e7-85da-4c39-98c4-b5e3d8023764.png", alt: "Jawline slimming before and after masseter Botox treatment", caption: "Enhanced jawline definition and facial balance after masseter treatment" },
    { src: "/lovable-uploads/59c20a72-3b99-454f-9b1a-478326a8856a.png", alt: "Male masseter Botox before and after jaw reduction", caption: "Male jaw slimming results showing refined masculine facial contours" },
    { src: "/lovable-uploads/16101df9-2d69-49bd-90d1-4d2e313a6c42.png", alt: "Jaw angle reduction before and after masseter Botox", caption: "Precise jaw angle refinement creating softer facial profile" },
    { src: "/lovable-uploads/5f942469-fc79-4e02-adc3-87bd12a6076b.png", alt: "Jawline contouring before and after with masseter Botox", caption: "Natural jawline contouring achieving elegant facial proportions" },
    { src: "/lovable-uploads/feb85f00-5226-47ab-8f5a-26c9f27c9e9c.png", alt: "Masseter Botox progression 2018 to 2019", caption: "Long-term results showing sustained jaw slimming over time" },
    { src: "/lovable-uploads/207e3f44-7e36-42cf-b201-680ceda56410.png", alt: "Square to oval face transformation with masseter Botox", caption: "Face shape transformation from square to oval with expert masseter treatment" },
    { src: "/lovable-uploads/6d8b66dc-01a8-41dd-95bb-917cc53a899d.png", alt: "Masseter Botox August to October progression", caption: "Progressive jaw slimming results from August to October treatment" }
  ];

  const treatmentBenefits = [
    {
      icon: Zap,
      title: "Quick Results",
      description: "Visible jaw slimming within 1-2 weeks, lasting 4-6 months"
    },
    {
      icon: Shield,
      title: "Medical Relief",
      description: "Effective treatment for bruxism, TMJ, and jaw pain relief"
    },
    {
      icon: Users,
      title: "Dual Benefits",
      description: "Cosmetic jaw slimming with medical teeth grinding treatment"
    },
    {
      icon: Clock,
      title: "Minimal Downtime",
      description: "15-20 minute procedure with immediate return to activities"
    }
  ];

  const faqs = [
    {
      question: "How long does Botox masseter injections last?",
      answer: "Non-surgical jaw reduction with Botox typically lasts 3-4 months depending on the dose. Large masseter muscles often need three sessions in the first year, two in the second, and fewer afterwards for maintenance. CosmeDocs experts recommend maintenance treatments 2-3 times a year, especially to manage facial pain and headaches from teeth grinding."
    },
    {
      question: "Am I the right candidate for jaw reduction Botox?",
      answer: "Ideal candidates include those with masseter hypertrophy from nighttime teeth grinding or excessive gum chewing, leading to an enlarged masseter muscle and squarish jawline. You may benefit if you desire a more balanced facial profile, want to reduce jaw pain and tension, need treatment for severe bruxism, want a symmetrical jawline, struggle with TMJ symptoms, or suffer from frequent migraine and tension headaches."
    },
    {
      question: "Is jaw Botox safe?",
      answer: "Botox treatments are generally safe when performed by experienced doctors. We maintain high industry standards to ensure patient satisfaction. Possible side effects include slight pain, minor bruising, redness, swelling at injection site, muscle weakness during chewing, and rarely dizziness or headaches. The risk of side effects like crooked smile is less than 0.5%, and allergic reactions are rare."
    },
    {
      question: "Does Jawline Botox Hurt?",
      answer: "Botox in masseter is not painful for most patients. At CosmeDocs, we use skin-numbing agents before injecting Botox to avoid discomfort. We use very tiny needles during the procedure to minimize any painful experience. Many patients report a mere pinch during injections and slight soreness immediately after, which usually subsides with or without icing."
    },
    {
      question: "What if I do not like the results?",
      answer: "Masseter Botox naturally wears off within 4-6 months. If you're not satisfied, your jawline will gradually return to its previous shape. Although there's no instant reversal, our experienced staff at CosmeDocs London can confidently guide you. We use a safe and effective approach, but remember it's temporary. We advise waiting and assessing your feelings before considering additional treatments."
    },
    {
      question: "Will I have problems speaking and chewing after jaw botox injections?",
      answer: "No. The non-surgical jaw reduction partially relaxes your masseter muscles, causing them to be less active. Your bulky chewing muscle shrinks in just a few weeks. You may experience slight fatigue around the muscle area after chewing, but this is momentary and subsides within a week. Masseter Botox will not affect your speech or eating activity while significantly relieving jaw pain."
    },
    {
      question: "What is the difference between Jaw Botox and Jawline Fillers?",
      answer: "Jaw Botox relaxes overactive chewing muscles (masseter hypertrophy) to shrink jaw muscle size without surgery. Jaw Fillers restore volume along the jawline where contour has been lost due to age. Botox slims the jaw, while fillers add definition. Many patients benefit from both treatments simultaneously for optimal facial balance after detailed consultation."
    },
    {
      question: "How Many Units of Botox Are Used?",
      answer: "Masseter botox units range from 25 to 45 per side. Men generally require a higher dose than women due to greater muscle mass. The muscle starts relaxing within a week. Our £350 standard treatment price covers the maximum dose needed for effectiveness."
    }
  ];

  const bookingUrl = "https://med.as.me/harleystreet";

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
        <meta name="keywords" content="masseter botox london, jaw slimming botox, bruxism treatment, teeth grinding botox, jaw muscle reduction, TMJ treatment, wide jaw reduction, Harley Street, cosmedocs" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Cosmedocs",
            "description": "Expert Masseter Botox for jaw slimming and bruxism treatment in London",
            "url": seoData.canonical,
            "telephone": "0333 0551 503",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "10 Harley Street",
              "addressLocality": "London",
              "postalCode": "W1G 9PF",
              "addressCountry": "GB"
            },
            "medicalSpecialty": "Cosmetic Medicine",
            "priceRange": "££"
          })}
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
                  Masseter
                  <span className="block text-purple-300">Botox</span>
                  <span className="block text-sm mt-4">Botox For Jaw Slimming & Wide Jaw Reduction</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl">
                  <span className="text-purple-300 font-semibold">Invisible Art</span>
                  <br />
                  Expert jaw slimming and bruxism treatment with dual medical and cosmetic benefits
                </p>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">£350 (Both Sides)</p>
                  <p className="text-sm text-gray-300">25-45 units per side | Results in 1-2 weeks | Lasts 4-6 months</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={() => window.open(bookingUrl, "_blank")}
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl"
                  >
                    Book Consultation
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm">
                    View Treatment Info
                  </Button>
                </div>
              </motion.div>
              
              <div className="hidden lg:block"></div>
            </div>
          </div>
        </section>

        {/* Treatment Benefits */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Why Choose Masseter Botox?</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                The strongest muscle in your body can now be your most refined feature. Dual benefits for medical relief and aesthetic enhancement.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {treatmentBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/5 border-white/10 text-white h-full">
                    <CardHeader className="text-center">
                      <benefit.icon className="h-12 w-12 mx-auto mb-4 text-purple-300" />
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-sm text-center">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Before & After Gallery */}
        <section className="py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Masseter Botox Before and After</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Before and after images show apparent reduction in masseter muscle size. Jaw slimming botox relaxes the masseter muscle within two weeks, leading to noticeable jaw size reduction.
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
                title="Masseter Botox Results Gallery"
                description="Comprehensive gallery of our jaw slimming treatments"
              />
            </div>
          </div>
        </section>

        {/* What is Masseter Botox Treatment */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">What is Masseter Botox Treatment?</h2>
                <p className="text-gray-300 mb-6">
                  Masseter Botox treatment helps with both aesthetic and medical issues. It can slim down a square, wide jawline, correct facial asymmetry, and alleviate jaw pain and aches. These symptoms are often related to bruxism, which involves teeth clenching and TMJ (Temporomandibular Joint Disorders).
                </p>
                <div className="bg-purple-300/10 border-l-4 border-purple-300 p-4 mb-6">
                  <p className="text-purple-300 font-semibold">
                    Did you know that the strongest muscle in your body is the one that helps you chew? It is known as the 'Masseter Muscle' or jaw muscle.
                  </p>
                </div>
                <h3 className="text-xl font-bold mb-4">Benefits of Masseter Botox</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-purple-300 mb-2">Cosmetic Concerns</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Facial asymmetry</li>
                      <li>• Wide jaw reduction</li>
                      <li>• Aesthetic imbalance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-300 mb-2">Medical Concerns</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Teeth grinding (severe bruxism)</li>
                      <li>• Reducing jaw pain & tension</li>
                      <li>• Headaches & facial pain</li>
                      <li>• TMJ symptoms</li>
                      <li>• Dental damage prevention</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold">Treatment Journey</h3>
                <div className="space-y-4">
                  <Card className="bg-white/5 border-white/10 text-white">
                    <CardHeader>
                      <CardTitle className="text-lg">Consultation & Assessment</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-sm">Detailed facial evaluation and muscle size assessment at CosmeDocs</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-white/5 border-white/10 text-white">
                    <CardHeader>
                      <CardTitle className="text-lg">Treatment Procedure</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-sm">Quick procedure using ultra-fine needles, 2-3 injections per side, less than 60 seconds per side</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-white/5 border-white/10 text-white">
                    <CardHeader>
                      <CardTitle className="text-lg">Post-Treatment Care</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-sm">Avoid physical activities for 24 hours, complimentary follow-up after two weeks</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How to Assess Your Masseter Muscle */}
        <section className="py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">How To Assess Your Masseter Muscle Size?</h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Place your fingers on the jaw angle and clench your teeth to assess whether you have an enlarged masseter muscle. You should feel the muscle contract and become prominent.
              </p>
              <div className="bg-purple-300/10 border border-purple-300/20 rounded-lg p-6 max-w-3xl mx-auto">
                <p className="text-gray-300">
                  The masseter muscle size is considered XL if the lower face appears more comprehensive than the upper face (the "inverted triangle of youth"). This helps evaluate muscle size by comparing the width of the lower face.
                </p>
              </div>
            </motion.div>
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
                Everything you need to know about Masseter Botox treatment
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-white/5 border-white/10 rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-white hover:text-purple-300 text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Related Treatments */}
        <section className="py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Related Botox Treatments</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Explore our comprehensive range of medical and cosmetic Botox treatments
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors">
                <CardHeader>
                  <CardTitle>Bruxism Treatment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm mb-4">Specialized Botox treatment for teeth grinding and TMJ disorders</p>
                  <Button variant="outline" size="sm" className="border-purple-300 text-purple-300">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors">
                <CardHeader>
                  <CardTitle>Calf Muscle Reduction</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm mb-4">Botox treatment for overdeveloped calf muscles</p>
                  <Button variant="outline" size="sm" className="border-purple-300 text-purple-300">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors">
                <CardHeader>
                  <CardTitle>Trigger Point Botox</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm mb-4">Shoulder and neck trigger point injections for pain relief</p>
                  <Button variant="outline" size="sm" className="border-purple-300 text-purple-300">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800">
          <div className="page-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Jawline?</h2>
              <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
                Book a consultation with our expert practitioners and begin your journey toward refined facial aesthetics and medical relief.
              </p>
              <Button 
                onClick={() => window.open(bookingUrl, "_blank")}
                className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl"
              >
                Book Consultation Now
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h2>Masseter Botox London Harley Street</h2>
          <p>
            Masseter Botox treatment at CosmeDocs London provides expert jaw slimming and bruxism treatment with dual medical and cosmetic benefits. Our experienced practitioners use precision injection techniques to reduce masseter muscle size, achieving natural jaw contouring while relieving teeth grinding symptoms. Located in prestigious Harley Street, we offer comprehensive masseter Botox treatments starting from £350 for both sides, including thorough consultation, precise dosing from 25-45 units per side, and complimentary follow-up appointments. Treatment results appear within 1-2 weeks and last 4-6 months, making it an effective solution for wide jaw reduction, facial asymmetry correction, TMJ symptom relief, and severe bruxism management. Our invisible art philosophy ensures natural-looking results that enhance facial harmony while providing significant medical benefits for jaw pain, headaches, and dental damage prevention. CosmeDocs maintains the highest clinical standards with CQC registration, using only premium Botox products and sterile injection techniques. The masseter muscle, known as the strongest muscle in the human body, can be safely and effectively treated to achieve both aesthetic jawline slimming and medical relief from grinding-related symptoms. Our treatment approach considers individual muscle size assessment, facial anatomy evaluation, and personalized dosing strategies to optimize outcomes while minimizing side effects. Patients experience minimal downtime with immediate return to normal activities, though we recommend avoiding strenuous exercise for 24 hours post-treatment. Regular maintenance treatments every 3-6 months help sustain both cosmetic improvements and medical benefits, with many patients requiring fewer sessions over time as muscle memory develops.
          </p>
        </div>
      </div>
    </>
  );
};

export default MasseterBotox;