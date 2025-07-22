import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import { generateSEOMetadata } from "@/utils/seo";

const NeckFillers = () => {
  const seoData = generateSEOMetadata(
    "Neck Fillers London | Say Bye to Sag | Cosmedocs Harley Street",
    "Professional neck filler treatments in London. Smooth neck wrinkles and sagging skin with premium dermal fillers. Expert cosmetic doctors at Harley Street clinic.",
    "/neck-fillers"
  );

  const beforeAfterImages = [
    { src: "/lovable-uploads/bb3c489c-72d1-457d-b7f8-297e490cd639.png", alt: "Neck fillers before and after showing dramatic reduction in horizontal neck lines", caption: "Dramatic improvement in neck lines and skin texture with dermal fillers" },
    { src: "/lovable-uploads/3ab5c4cb-18a8-491d-a52e-ad5ce159af83.png", alt: "Professional neck filler results showing smoother neck contour", caption: "Professional neck filler treatment results showing enhanced neck profile" },
    { src: "/lovable-uploads/bb3c489c-72d1-457d-b7f8-297e490cd639.png", alt: "Before and after neck filler treatment reducing tech neck wrinkles", caption: "Real patient results: smoother neck with reduced horizontal lines" },
  ];

  const faqs = [
    {
      question: "How long do neck fillers last?",
      answer: "Neck fillers typically last 6-12 months, depending on the type of hyaluronic acid filler used, your metabolism, and lifestyle factors. Regular maintenance sessions help maintain optimal results."
    },
    {
      question: "Are neck fillers painful?",
      answer: "Most patients report minimal discomfort during neck filler injections. We use topical numbing cream or ice packs to minimise any potential pain during the procedure, ensuring a comfortable experience."
    },
    {
      question: "Can neck fillers treat tech neck wrinkles?",
      answer: "Yes, neck fillers are excellent for treating tech neck wrinkles caused by repetitive movements from looking down at devices. The treatment smooths horizontal neck lines and improves skin texture."
    },
    {
      question: "What's the recovery time after neck fillers?",
      answer: "There's minimal downtime with neck filler treatment. You may experience mild swelling, redness, or bruising for a few days. Avoid strenuous activities and excessive sun exposure for 24 hours."
    },
    {
      question: "Can neck fillers help with sagging skin?",
      answer: "Neck fillers are effective for mild to moderate skin laxity and sagging. For more advanced cases like pronounced turkey neck, additional treatments such as a neck lift surgery or skin-tightening procedures might be more appropriate."
    },
    {
      question: "What issues can neck fillers address?",
      answer: "Neck fillers can address horizontal neck lines (necklace lines), tech neck wrinkles caused by device use, loose skin and mild sagging, wrinkles and creases in the neck area, and loss of volume and elasticity in the neck skin."
    },
    {
      question: "Who is a good candidate for neck fillers?",
      answer: "Neck fillers are ideal for patients with mild to moderate neck wrinkles, people experiencing 'tech neck', those with crepey or thin neck skin, individuals with sun-damaged neck skin, patients with slight skin laxity, and anyone seeking a non-surgical option for neck enhancement."
    },
    {
      question: "How much do neck fillers cost?",
      answer: "Neck filler treatments at Cosmedocs start from £325 per ml. The final cost depends on the amount of product needed and your specific treatment requirements."
    },
    {
      question: "When will I see results from neck fillers?",
      answer: "Results are typically visible immediately after the procedure. However, minor swelling may temporarily obscure final results. Once swelling subsides—usually within a few days to a week—you'll notice a rejuvenated, smoother neck profile. Full results become apparent within 1-2 weeks."
    },
    {
      question: "What are the risks of neck fillers?",
      answer: "While neck filler injections are generally safe, potential risks include infection, allergic reaction, asymmetry, lumpiness, and migration of the filler. Our aesthetic doctor will thoroughly discuss these risks before your procedure."
    },
    {
      question: "Can neck fillers be reversed?",
      answer: "Yes, hyaluronic acid fillers used for neck injections are reversible. If you're not satisfied with results or encounter complications, the filler can be dissolved using hyaluronidase, ensuring flexibility and peace of mind."
    },
    {
      question: "What treatments can be combined with neck fillers?",
      answer: "Neck fillers work excellently with Botox for muscle relaxation, skin boosters and polynucleotides for hydration, Profhilo for enhanced skin quality, and PDO threads for additional lifting effects."
    },
    {
      question: "What should I do before my neck filler treatment?",
      answer: "Avoid blood-thinning agents like aspirin for two weeks before treatment, wean off retinoid products two days prior, stay out of the sun to minimize complications, and follow all pre-treatment instructions provided."
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
        <meta name="keywords" content="neck fillers London, neck wrinkles, tech neck, dermal fillers, Harley Street, cosmetic treatment, neck lines, hyaluronic acid, neck contouring" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Cosmedocs",
            "description": "Expert neck filler treatments in London",
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
                  Say Bye to
                  <span className="block text-purple-300">Sag!</span>
                  <span className="block text-sm mt-4">Expert neck filler treatments for smoother, youthful skin</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl">
                  <span className="text-purple-300 font-semibold">Invisible Art</span>
                  <br />
                  Transformation that speaks without saying a word
                </p>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Starting from £325</p>
                  <p className="text-sm text-gray-300">Smooth neck wrinkles and tech neck lines with premium dermal fillers</p>
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
                See the transformative results achieved with our expert neck filler treatments. 
                Each patient receives personalized care for optimal neck contouring outcomes.
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
                title="Neck Filler Results Gallery"
                description="Comprehensive gallery of our neck enhancement treatments"
              />
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
              <h2 className="text-4xl font-bold mb-6">Neckline Filler Treatment</h2>
              <p className="text-gray-300 max-w-4xl mx-auto text-lg">
                Neck fillers, also known as neck injections or neck contouring, are a non-surgical cosmetic 
                procedure designed to improve the overall look of the neck. This treatment targets neck wrinkles, 
                neck lines, and sagging skin, providing a smoother, more youthful look by stimulating collagen 
                and elastin production.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* What Causes Neck Wrinkles */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6 text-purple-300">What Causes Neck Wrinkles?</h3>
                <p className="text-gray-300 mb-6">
                  Necklines, often referred to as neck wrinkles, are creases or folds that develop on the neck skin. 
                  These lines can appear as horizontal neck lines or vertical neck lines, varying in depth and severity.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white">Ageing</h4>
                      <p className="text-gray-300 text-sm">Natural loss of collagen and elasticity</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white">Sun Exposure</h4>
                      <p className="text-gray-300 text-sm">Damages neck skin, accelerating wrinkle formation</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white">Tech Neck</h4>
                      <p className="text-gray-300 text-sm">Daily actions like looking down at devices lead to tech neck lines</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white">Genetics & Lifestyle</h4>
                      <p className="text-gray-300 text-sm">Predisposition to lines and smoking depleting skin elasticity</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* How Dermal Fillers Help */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6 text-purple-300">How Dermal Fillers Help</h3>
                <p className="text-gray-300 mb-6">
                  Dermal fillers provide an effective solution for treating neck wrinkles and neck lines. 
                  Using hyaluronic acid fillers, these treatments restore hydration and stimulate collagen production.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <p className="text-gray-300">Replenish lost volume in the neck area</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <p className="text-gray-300">Smooth out horizontal and vertical neck lines</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <p className="text-gray-300">Improve neck skin texture and elasticity</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <p className="text-gray-300">Reduce tech neck wrinkles and sagging skin</p>
                  </div>
                </div>
              </motion.div>
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
              <h2 className="text-3xl font-bold mb-4">Benefits of Neck Fillers</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Experience the transformative benefits of professional neck filler treatment at Cosmedocs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Smooths Horizontal Neck Lines",
                "Enhances Skin Quality",
                "Non-Invasive Rejuvenation",
                "Improves Neck Contour",
                "Natural-Looking Results",
                "Long-Lasting Effects"
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
                  <h3 className="text-white font-semibold">{benefit}</h3>
                </motion.div>
              ))}
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
                <h2 className="text-3xl font-bold mb-6">Treatment Summary</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Procedure Time</h3>
                    <p className="text-gray-300">30-40 minutes including consultation</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Results Duration</h3>
                    <p className="text-gray-300">1-2 weeks visible | 6-12 months lasting</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Full Recovery</h3>
                    <p className="text-gray-300">No downtime, immediate return to work</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Anesthetic</h3>
                    <p className="text-gray-300">Local anaesthetic for maximum comfort</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Risks & Complications</h3>
                    <p className="text-gray-300">Minimal: Allergic reactions, bruises, swelling, filler migration, asymmetry</p>
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
                      <p className="text-gray-300">Expert trainers at Harley Street Institute</p>
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
                Get answers to common questions about neck filler treatments at our London clinic.
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
              <h2 className="text-3xl font-bold mb-4">Ready for a Smoother, Youthful Neck?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert cosmetic doctors and discover how neck fillers 
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
            Neck fillers, also known as neck injections or neck contouring, are a non-surgical cosmetic procedure designed to improve the overall look of the neck. This treatment targets neck wrinkles, neck lines, and sagging skin, providing a smoother, more youthful look by stimulating collagen and elastin production. At Cosmedocs, we specialize in using premium hyaluronic acid fillers to address horizontal neck lines, vertical neck lines, tech neck wrinkles, and mild skin laxity. Our expert cosmetic doctors at our Harley Street clinic have performed over 1 million injections since 2007, making us leaders in aesthetic medicine.

            Necklines, often referred to as neck wrinkles, are creases or folds that develop on the neck skin. These lines can appear as horizontal neck lines or vertical neck lines, varying in depth and severity. Several factors can lead to their formation including natural aging with loss of collagen and elasticity, sun exposure that damages neck skin and accelerates wrinkle formation, repetitive movements from daily actions like looking down at devices leading to tech neck lines, genetics predisposing to lines and wrinkles, smoking that depletes skin elasticity, and poor skincare habits that worsen neck wrinkles.

            Dermal fillers provide an effective solution for treating neck wrinkles and neck lines. These injectable treatments replenish lost volume, smooth out horizontal lines and vertical neck lines, and improve neck skin texture and elasticity. Using hyaluronic acid fillers, these treatments restore hydration and stimulate collagen production, reducing the appearance of tech neck wrinkles, sagging skin, and loose skin over time. The treatment is minimally invasive with no downtime required, allowing patients to return to work immediately.

            Our comprehensive approach to neck filler treatment begins with a thorough consultation where our practitioner assesses neck skin elasticity, volume loss, and specific concerns like tech neck wrinkles or neck lines. We then create a personalized treatment plan that addresses whether you have horizontal neck lines or vertical neck lines, recommending neck filler injections accordingly. The procedure involves using fine needles to carefully inject neck fillers into targeted areas to smooth wrinkles and improve neck contour, followed by post-injection massage to ensure even distribution of the hyaluronic acid filler.

            The benefits of neck fillers include smoothing horizontal neck lines, enhancing skin quality, providing non-invasive rejuvenation, improving neck contour, achieving natural-looking results, and delivering long-lasting effects. Results are typically visible immediately after the procedure, with optimal results developing within one to two weeks as the hyaluronic acid settles and enhances skin hydration and elasticity. The treatment duration is typically 30-40 minutes, with results lasting 6-12 months depending on individual factors.

            At Cosmedocs, our 'invisible art' philosophy ensures natural-looking results that enhance your features rather than creating an artificial appearance. We use only premium FDA-approved dermal fillers and provide comprehensive aftercare and follow-up to ensure optimal results. Our clinics are located in prestigious Harley Street London, and we are renowned trainers to physicians from around the globe, demonstrating our expertise and commitment to excellence in aesthetic medicine.
          </p>
        </div>
      </div>
    </>
  );
};

export default NeckFillers;