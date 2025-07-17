import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import { generateSEOMetadata } from "@/utils/seo";

const ChemicalPeel = () => {
  const seoData = generateSEOMetadata(
    "Chemical Peel London | Professional Skin Resurfacing | Cosmedocs Harley Street",
    "Expert chemical peel treatments in London. Professional skin resurfacing for acne, pigmentation, fine lines & wrinkles. Book consultation at Harley Street clinic.",
    "/chemical-peel"
  );

  const beforeAfterImages = [
    { src: "/lovable-uploads/c47cf752-b777-49da-b470-f6c1f7e3a292.png", alt: "Chemical peel before and after skin texture", caption: "Dramatic improvement in skin texture and tone after chemical peel treatment" },
    { src: "/lovable-uploads/d7bad7e3-fa9f-4357-8e4c-04ed2a494412.png", alt: "Chemical peel acne treatment results", caption: "Significant reduction in acne and blemishes with improved skin clarity" },
    { src: "/lovable-uploads/e3020fef-05e0-4022-b981-0fe5dc9a2c53.png", alt: "Chemical peel pigmentation treatment", caption: "Reduced pigmentation and more even skin tone after peel treatment" },
    { src: "/lovable-uploads/f30d3be7-22b0-4ba5-800f-03956e77dcc8.png", alt: "Chemical peel anti-aging results", caption: "Visible reduction in fine lines and improved skin radiance" },
    { src: "/lovable-uploads/8675e9bd-ccdf-44e5-80b3-c916c48f40e5.png", alt: "Chemical peel full face transformation", caption: "Complete facial rejuvenation with smoother, brighter skin" },
    { src: "/lovable-uploads/9f6c05a6-bd3b-4ba8-93e0-795c685b7635.png", alt: "Chemical peel sun damage treatment", caption: "Remarkable improvement in sun damage and skin clarity" }
  ];

  const faqs = [
    {
      question: "How much does a chemical peel cost?",
      answer: "Chemical peel prices at Cosmedocs start from £120 for mild peels, £170 for medium peels, and £200 for deep peels. Course packages are available for better value. Final pricing depends on your skin assessment and treatment plan."
    },
    {
      question: "Are chemical peels safe?",
      answer: "Yes, chemical peels are safe when performed by qualified practitioners. At Cosmedocs, our experienced skin experts use tested formulations suitable for all skin types and follow strict safety protocols before, during, and after treatment."
    },
    {
      question: "Do chemical peels hurt?",
      answer: "Chemical peels may cause a slight stinging sensation, but they are not unbearably painful. Our experts use gentle peeling solutions to minimize discomfort. Some redness, itching, or flaking may occur post-treatment but subsides quickly."
    },
    {
      question: "How often can I have a chemical peel?",
      answer: "Depending on the type of peel, treatments can be done once or twice a month. Mild peels can be repeated more frequently, while deeper peels require longer intervals. Our dermatologists will advise the best schedule for your skin type."
    },
    {
      question: "What should I expect after a chemical peel?",
      answer: "After treatment, you may experience mild redness, peeling, and sensitivity. This is normal and indicates the skin is regenerating. Recovery time varies from 3-5 days for mild peels to up to 2 weeks for deeper peels."
    },
    {
      question: "Which chemical peel is best for acne?",
      answer: "Salicylic acid peels are excellent for acne as they unclog pores and reduce blemishes. Jessner's peel and our signature 'Peel to Reveal' treatment are also highly effective for acne and acne scarring."
    },
    {
      question: "Can I wear makeup after a chemical peel?",
      answer: "Wait at least 24 hours before applying makeup after a mild peel. For medium to deep peels, avoid makeup for longer periods to prevent infection and allow proper healing. Our experts will provide specific aftercare instructions."
    },
    {
      question: "What skin concerns do chemical peels treat?",
      answer: "Chemical peels effectively treat aging skin, sun damage, acne, acne scars, enlarged pores, rough texture, dull complexion, uneven skin tone, melasma, and hyperpigmentation. They're versatile treatments suitable for various skin concerns."
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
        <meta name="keywords" content="chemical peel London, skin resurfacing, acne treatment, pigmentation, anti-aging, Harley Street, skin rejuvenation, glycolic acid, salicylic acid" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Cosmedocs",
            "description": "Expert chemical peel treatments in London",
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
                  Professional
                  <span className="block text-purple-300">Chemical Peels</span>
                  <span className="block text-sm mt-4">Peel away flaws, reveal flawless skin</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl">
                  <span className="text-purple-300 font-semibold">Invisible Art</span>
                  <br />
                  Transformation that speaks without saying a word
                </p>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Starting from £120</p>
                  <p className="text-sm text-gray-300">Professional skin resurfacing for all skin types</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl">
                    Book Consultation
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm">
                    View Price List
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
                See the dramatic improvements achieved with our professional chemical peel treatments. 
                Each treatment is tailored to address specific skin concerns and goals.
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
                title="Chemical Peel Results Gallery"
                description="Comprehensive gallery of our chemical peel transformations"
              />
            </div>
          </div>
        </section>

        {/* Treatment Types Section */}
        <section className="py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Types of Chemical Peels</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Choose from our comprehensive range of chemical peels, each designed to address specific skin concerns and deliver optimal results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-none h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Light Peels</CardTitle>
                    <p className="text-purple-300 font-bold text-lg">From £120</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="text-gray-300 space-y-2">
                      <li>• Salicylic Acid Peels</li>
                      <li>• Glycolic Acid Peels</li>
                      <li>• Lactic Acid Peels</li>
                    </ul>
                    <p className="text-sm text-gray-400">
                      Ideal for mild skin concerns, improving texture and reducing pigmentation with minimal downtime.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-none h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Medium Peels</CardTitle>
                    <p className="text-purple-300 font-bold text-lg">From £170</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="text-gray-300 space-y-2">
                      <li>• TCA Peels</li>
                      <li>• Jessner's Peel</li>
                      <li>• The Perfect Peel</li>
                    </ul>
                    <p className="text-sm text-gray-400">
                      More intensive treatment for sun damage, acne scars, and deeper skin concerns.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-none h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Deep Peels</CardTitle>
                    <p className="text-purple-300 font-bold text-lg">From £200</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="text-gray-300 space-y-2">
                      <li>• Phenol Peels</li>
                      <li>• Peel to Reveal</li>
                    </ul>
                    <p className="text-sm text-gray-400">
                      Most dramatic results for deep wrinkles, severe sun damage, and significant skin rejuvenation.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Treatment Summary */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Chemical Peel Treatment Summary</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Treatment Duration</h3>
                    <p className="text-gray-300">30-60 minutes depending on peel type</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Recovery Time</h3>
                    <p className="text-gray-300">3-5 days for light peels, up to 2 weeks for deep peels</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Results Duration</h3>
                    <p className="text-gray-300">Several months to years depending on peel depth</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Frequency</h3>
                    <p className="text-gray-300">Monthly for light peels, less frequent for deeper peels</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-none">
                  <CardHeader>
                    <CardTitle className="text-white">Skin Concerns Treated</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Aging skin, fine lines & wrinkles</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Sun damage & age spots</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Acne & acne scarring</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Enlarged pores & rough texture</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Melasma & hyperpigmentation</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Chemical Peel Benefits</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Discover the transformative benefits of professional chemical peel treatments for healthier, more radiant skin.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Collagen Boost",
                  description: "Encourages natural collagen and elastin production for firmer skin"
                },
                {
                  title: "Enhanced Absorption",
                  description: "Boosts efficiency of your skincare products post-treatment"
                },
                {
                  title: "Reduced Blemishes",
                  description: "Remarkably reduces acne, scars, and skin imperfections"
                },
                {
                  title: "Even Skin Tone",
                  description: "Improves tone, texture, and years of accumulated sun damage"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
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
                Get answers to common questions about chemical peel treatments at our London clinic.
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
              <h2 className="text-3xl font-bold mb-4">Ready for Radiant, Rejuvenated Skin?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert skin specialists and discover how chemical peels 
                can transform your skin with professional, safe, and effective treatments.
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
            Chemical peel treatments in London offer professional skin resurfacing solutions for a wide range of skin concerns. At Cosmedocs Harley Street, our expert practitioners provide comprehensive chemical peel treatments including glycolic acid peels, salicylic acid peels, TCA peels, and our signature Peel to Reveal treatment. Chemical peels are highly effective for treating acne, acne scarring, sun damage, age spots, fine lines, wrinkles, enlarged pores, rough skin texture, and hyperpigmentation. Our range includes light peels for subtle improvements, medium peels for more significant results, and deep peels for dramatic skin transformation. Professional chemical peel treatments stimulate collagen production, improve skin texture, reduce blemishes, and create a more even skin tone. The treatment process involves applying specially formulated chemical solutions to remove damaged skin layers, revealing fresh, healthy skin underneath. Recovery time varies from minimal downtime for light peels to up to two weeks for deeper treatments. Our experienced practitioners ensure safe, effective treatments tailored to individual skin types and concerns. Chemical peel benefits include enhanced skincare product absorption, reduced signs of aging, improved skin clarity, and long-lasting results. At our London clinic, we combine chemical peels with other treatments like dermaplaning for enhanced results. Our 'invisible art' philosophy ensures natural-looking skin improvements that enhance your confidence. Professional chemical peels are suitable for all skin types when performed by qualified practitioners using appropriate formulations and safety protocols.
          </p>
        </div>
      </div>
    </>
  );
};

export default ChemicalPeel;