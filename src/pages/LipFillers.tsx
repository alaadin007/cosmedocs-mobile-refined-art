
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import { generateSEOMetadata } from "@/App";

const LipFillers = () => {
  const seoData = generateSEOMetadata(
    "Lip Fillers London | Expert Lip Enhancement | Cosmedocs Harley Street",
    "Professional lip fillers in London by expert cosmetic doctors. Natural-looking lip enhancement with premium dermal fillers. Book consultation at Harley Street clinic.",
    "/lip-fillers"
  );

  const beforeAfterImages = [
    { src: "/lovable-uploads/a9533a9b-0dd5-4e65-8c88-8e415e07f1ff.png", alt: "Lip fillers before and after 2016-2019", caption: "Dramatic lip transformation over 3 years showing natural progression" },
    { src: "/lovable-uploads/0fc2f9cc-be54-45a6-b6ac-11c1f0dc04ad.png", alt: "Lip fillers showing defined peaks", caption: "Enhanced lip definition with improved ratio and natural-looking peaks" },
    { src: "/lovable-uploads/ca0d519c-295a-47a5-ad68-27462c0fa778.png", alt: "Natural lip enhancement", caption: "Subtle, natural-looking lip enhancement maintaining facial harmony" },
    { src: "/lovable-uploads/94868651-44b6-4cfb-b3a4-8d3629c1358b.png", alt: "Lip fillers progression", caption: "Before, immediately after, and 5 weeks later showing settled results" },
    { src: "/lovable-uploads/a91d9151-e465-4ba8-82e8-f59fee576396.png", alt: "Lip fillers progressive enhancement", caption: "Progressive enhancement from no treatment to two syringes of dermal filler" },
    { src: "/lovable-uploads/155a5ab6-6a67-4fe4-a246-f77856aba78d.png", alt: "Lip volume progression", caption: "Before treatment, after 1ml, and after 2ml showing gradual volume increase" }
  ];

  const faqs = [
    {
      question: "How long do lip fillers last?",
      answer: "Lip fillers typically last 6-12 months, depending on the type of filler used, your metabolism, and lifestyle factors. Premium hyaluronic acid fillers used at Cosmedocs provide long-lasting, natural results."
    },
    {
      question: "Are lip fillers painful?",
      answer: "We use topical anaesthetic and premium fillers containing lidocaine to minimize discomfort. Most clients describe the sensation as mild pressure rather than pain. Our expert technique ensures maximum comfort throughout the procedure."
    },
    {
      question: "How much filler do I need for my lips?",
      answer: "The amount varies based on your natural lip size and desired outcome. Typically, 0.5-1ml is used for subtle enhancement, while 1-2ml creates more dramatic results. Our doctors will assess and recommend the optimal amount during consultation."
    },
    {
      question: "What's the recovery time after lip fillers?",
      answer: "Most clients return to normal activities immediately. You may experience mild swelling for 24-48 hours and minor bruising. Ice packs and avoiding strenuous exercise for 24 hours helps minimize side effects."
    },
    {
      question: "Can lip fillers look natural?",
      answer: "Absolutely. Our 'invisible art' philosophy ensures natural-looking results. We enhance your natural lip shape and proportions rather than creating an artificial appearance. The key is expert technique and appropriate product selection."
    },
    {
      question: "What are the risks of lip fillers?",
      answer: "When performed by qualified medical professionals using premium products, risks are minimal. Possible side effects include temporary swelling, bruising, or asymmetry. Our doctors have extensive experience minimizing complications."
    },
    {
      question: "How much do lip fillers cost?",
      answer: "Lip filler prices vary based on the amount of product used and specific requirements. We offer competitive pricing for premium treatments. Contact us for a detailed quote tailored to your needs."
    },
    {
      question: "When will I see final results?",
      answer: "Initial results are visible immediately, but final results appear after 2 weeks once swelling subsides. The filler continues to integrate naturally with your tissues over this period for optimal results."
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
        <meta name="keywords" content="lip fillers London, lip enhancement, dermal fillers, Harley Street, cosmetic treatment, lip augmentation, hyaluronic acid, natural lips" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Cosmedocs",
            "description": "Expert lip filler treatments in London",
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
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20"></div>
          <div className="page-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Expert Lip Fillers in London
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Transform your lips with our premium hyaluronic acid fillers. Natural-looking enhancement 
                  by expert cosmetic doctors at our Harley Street clinic.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6">
                    Book Consultation
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6">
                    View Price List
                  </Button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <img 
                  src="/lovable-uploads/260e5e43-8abc-49e7-b420-1fe5cc984ac5.png" 
                  alt="Professional lip filler treatment results showing natural enhancement"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </motion.div>
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
                See the natural, beautiful results achieved with our expert lip filler treatments. 
                Each patient receives a personalized approach for optimal outcomes.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
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
                title="Lip Filler Results Gallery"
                description="Comprehensive gallery of our lip enhancement treatments"
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
                <h2 className="text-3xl font-bold mb-6">Lip Filler Treatment Summary</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Treatment Duration</h3>
                    <p className="text-gray-300">30-45 minutes including consultation</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Results Duration</h3>
                    <p className="text-gray-300">6-12 months with premium hyaluronic acid</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Recovery Time</h3>
                    <p className="text-gray-300">Minimal downtime, return to work same day</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Anaesthesia</h3>
                    <p className="text-gray-300">Topical anaesthetic + lidocaine in filler</p>
                  </div>
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
                    <CardTitle className="text-white">Why Choose Cosmedocs?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Over 1 million injections performed since 2007</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Harley Street Academy certified trainers</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Premium FDA-approved dermal fillers only</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">'Invisible art' philosophy for natural results</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Comprehensive aftercare and follow-up</p>
                    </div>
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
                Get answers to common questions about lip filler treatments at our London clinic.
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
              <h2 className="text-3xl font-bold mb-4">Ready for Beautiful, Natural Lips?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert cosmetic doctors and discover how lip fillers 
                can enhance your natural beauty with subtle, sophisticated results.
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

        {/* Hidden SEO content for search engines */}
        <div className="sr-only">
          <p>
            Cosmedocs Harley Street clinic offers premium lip filler treatments in London using advanced hyaluronic acid dermal fillers. Our expert cosmetic doctors specialize in natural lip enhancement, lip augmentation, and subtle lip contouring procedures. Located at 10 Harley Street, we provide safe, effective lip injections with minimal downtime and natural-looking results. Our lip filler treatments use only FDA-approved products including Juvederm, Restylane, and other premium brands. We offer comprehensive lip enhancement services including lip volume increase, lip shape correction, lip symmetry adjustment, and lip border definition. Our experienced practitioners have performed over one million aesthetic injections since 2007, making us one of London's most trusted cosmetic clinics. Lip filler procedures typically take 30-45 minutes with immediate results and 6-12 months duration. We provide detailed aftercare instructions and follow-up appointments to ensure optimal healing and satisfaction. Our 'invisible art' philosophy ensures natural-looking lip enhancement that complements your facial features. Book your lip filler consultation today by calling 0333 0551 503 or visiting our Harley Street clinic. We offer competitive pricing and flexible payment options for all lip enhancement treatments.
          </p>
        </div>
      </div>
    </>
  );
};

export default LipFillers;
