
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import { generateSEOMetadata } from "@/utils/seo";

const LipFillers = () => {
  const seoData = generateSEOMetadata(
    "Lip Filler London | Expert Lip Augmentation UK | 1ml Lip Injection Cost | Cosmedocs",
    "Professional lip filler London treatments by expert doctors. Lip augmentation UK from £300. Natural looking lip enhancement & 1ml lip filler. How much is lip filler? Book consultation.",
    "/lip-fillers"
  );

  const beforeAfterImages = [
    { 
      src: "/lovable-uploads/a9533a9b-0dd5-4e65-8c88-8e415e07f1ff.png", 
      alt: "Before and after 0.5ml lip filler London showing natural lip augmentation progression over 3 years", 
      caption: "Before and after 0.5ml lip filler - natural enhancement that grows with confidence" 
    },
    { 
      src: "/lovable-uploads/0fc2f9cc-be54-45a6-b6ac-11c1f0dc04ad.png", 
      alt: "Before and after 1ml lip filler showing defined lip peaks and enhanced lip shape London", 
      caption: "Before and after 1ml lip filler - perfect definition with enhanced peaks and improved ratio" 
    },
    { 
      src: "/lovable-uploads/ca0d519c-295a-47a5-ad68-27462c0fa778.png", 
      alt: "Before and after 0.5ml lip filler natural looking lip enhancement London treatment", 
      caption: "Before and after 0.5ml lip filler - subtle volume maintaining perfect facial harmony" 
    },
    { 
      src: "/lovable-uploads/94868651-44b6-4cfb-b3a4-8d3629c1358b.png", 
      alt: "Before and after 1ml lip filler progression showing immediate results and healed after 5 weeks", 
      caption: "Before and after 1ml lip filler timeline - immediate results and beautiful healed outcome" 
    },
    { 
      src: "/lovable-uploads/a91d9151-e465-4ba8-82e8-f59fee576396.png", 
      alt: "Before and after 1ml lip filler progressive enhancement from natural to bold results London", 
      caption: "Before and after 1ml lip filler progression - from natural to bold enhancement" 
    },
    { 
      src: "/lovable-uploads/155a5ab6-6a67-4fe4-a246-f77856aba78d.png", 
      alt: "Before and after 0.5ml lip filler vs 1ml comparison showing different enhancement levels London", 
      caption: "Before and after 0.5ml vs 1ml lip filler - see how different volumes transform your smile" 
    }
  ];

  const faqs = [
    {
      question: "How long does it take lip filler to dissolve naturally?",
      answer: "Lip filler injection duration varies - typically lasting 6-12 months before naturally dissolving. Premium hyaluronic acid fillers used for lip augmentation at Cosmedocs provide long-lasting, natural results that gradually fade."
    },
    {
      question: "How much lip filler pain should I expect?",
      answer: "Lip filler pain is minimal - we use topical anaesthetic and premium lip augmentation filler containing lidocaine. Most clients describe lip injection pain as mild pressure rather than discomfort. Our expert technique ensures maximum comfort throughout the procedure."
    },
    {
      question: "How much filler do I need for my lips?",
      answer: "The amount varies based on your natural lip size and desired outcome. Typically, 0.5-1ml is used for subtle enhancement, while 1-2ml creates more dramatic results. Our doctors will assess and recommend the optimal amount during consultation."
    },
    {
      question: "What are the lip filler swelling stages and how to reduce lip injection swelling?",
      answer: "Lip filler swelling stages: immediate swelling peaks at 24-48 hours, then gradually reduces. How to reduce lip injection swelling: apply ice packs, avoid strenuous exercise for 24 hours, sleep elevated, and stay hydrated. Most clients return to normal activities immediately."
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
      question: "How much is lip filler in London?",
      answer: "Lip fillers cost from £300 - 0.5ml natural lip filler costs £300 while 1ml lip filler costs £350. Our lip augmentation filler pricing includes premium quality products from Swiss, French, and USA manufacturers for natural looking lip enhancement."
    },
    {
      question: "What's the difference between before and after 0.5ml lip filler vs 1ml?",
      answer: "Before and after 0.5ml lip filler shows subtle, natural enhancement perfect for first-time treatments. Before and after 1ml lip filler demonstrates more visible enhancement for bolder results. 0.5ml lasts 6-9 months while 1ml typically lasts 9-12 months."
    },
    {
      question: "Which lip filler volume should I choose?",
      answer: "For thin lips with dense elastin, we recommend starting with 0.5ml. For medium to large lips or those wanting more noticeable change, 1ml is ideal. Our doctors will assess your lips and recommend the optimal volume during consultation."
    },
    {
      question: "When will I see final results?",
      answer: "Initial results are visible immediately, but final results appear after 2 weeks once swelling subsides. The filler continues to integrate naturally with your tissues over this period for optimal results."
    },
    {
      question: "Can I see before and after 0.5ml and 1ml lip filler examples?",
      answer: "Yes! Our gallery showcases authentic before and after 0.5ml lip filler and before and after 1ml lip filler results from real patients at our London clinic. Each image demonstrates the natural, beautiful enhancement achievable with expert technique."
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
        <meta name="keywords" content="lip fillers London, lip augmentation London, lip filler UK London, lip injections London, lip enhancement London, 1ml lip filler, 0.5ml lip filler, before and after 0.5ml lip filler, before and after 1ml lip filler, natural looking lip enhancement, lip fillers cost, how much is lip filler, dermal fillers, Harley Street" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Cosmedocs",
            "description": "Expert lip augmentation and lip filler treatments in London UK",
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
        {/* Hero Section - Updated to match LipFillerDissolve design */}
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
                  Expert Lip
                  <span className="block text-purple-300">Filler London</span>
                  <span className="block text-sm mt-4">Invisible art - natural lip enhancement that speaks without words</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl">
                  Expert lip filler London treatments using our invisible art philosophy at Harley Street clinic.
                </p>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Lip fillers cost from £300</p>
                  <p className="text-sm text-gray-300">#cosmelip - Check out our IG for hundreds more natural looking lip enhancement transformations</p>
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

        {/* Lip Enhancement London Section */}
        <section className="py-16 bg-gradient-to-b from-black to-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold mb-6 text-white">Lip Enhancement London</h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Transform your lips with expert lip enhancement London treatments at our prestigious Harley Street clinic. 
                Our cosmetic doctors specialize in natural-looking results that enhance your unique beauty.
              </p>
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
              <h2 className="text-3xl font-bold mb-4">Before and After 0.5ml & 1ml Lip Fillers in London</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Explore authentic before and after 0.5ml lip filler and before and after 1ml lip filler results from our London clinic. 
                Each treatment showcases natural enhancement tailored to individual features.
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
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
                    <p className="text-white text-sm font-medium">{image.caption}</p>
                  </div>
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

        {/* Comprehensive Lip Filler Information */}
        <section className="py-20">
          <div className="page-container">
            {/* Moved introductory content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16 bg-accent rounded-2xl p-8"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Expert Lip Enhancement London</h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Our expert cosmetic doctors provide <span className="text-purple-300 font-semibold">invisible art</span> - 
                lip enhancement that speaks without saying a word. Whether you choose before and after 0.5ml lip filler 
                for natural results or before and after 1ml lip filler for bolder enhancement, every treatment is 
                crafted to complement your unique beauty.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">1ml Lip Filler vs 0.5ml Lip Augmentation - Choose Your Enhancement</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Choose between 1ml lip filler for bold enhancement or 0.5ml for natural lip augmentation. 
                Our lip injection specialists in London help achieve perfect volume with premium filler tailored to your features.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-none h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">0.5ml Natural Lip Enhancement</CardTitle>
                    <div className="text-purple-300 text-3xl font-bold">£300</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">
                      Perfect for first-time treatments and those seeking subtle enhancement. This volume provides 
                      natural-looking fullness and moisture without significant swelling.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p className="text-gray-300">Ideal for thin lips with dense elastin</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p className="text-gray-300">Natural appearance with minimal swelling</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p className="text-gray-300">Results last 6-9 months</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p className="text-gray-300">Perfect starting point for lip enhancement journey</p>
                      </div>
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
                <Card className="bg-accent border-none h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">1ml Bold Lip Augmentation</CardTitle>
                    <div className="text-purple-300 text-3xl font-bold">£350</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">
                      For those seeking more noticeable enhancement. This volume provides visible fullness 
                      and dramatic improvement in lip shape and contour.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p className="text-gray-300">Visibly enhances small lips, enlarges medium lips</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p className="text-gray-300">More apparent results in younger individuals</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p className="text-gray-300">Results last 9-12 months</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p className="text-gray-300">Perfect for those wanting noticeable change</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Understanding Lip Filler Volumes */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-accent rounded-2xl p-8 mb-12"
            >
              <h3 className="text-2xl font-bold text-white mb-6">How Full Should Lips Be?</h3>
              <p className="text-gray-300 mb-6">
                Understanding lip filler volumes is crucial for achieving your desired results. Lip fillers are supplied 
                in 1ml syringes (roughly a fifth of a teaspoon), though the effective volume is slightly higher as 
                hyaluronic acid attracts water.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-purple-300 mb-3">For Thin Lips</h4>
                  <p className="text-gray-300 mb-4">
                    Thin lips have different elasticity and collagen levels. They contain dense elastin and are 
                    difficult to stretch, making gradual volume increase the safest approach.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <span className="text-gray-300">Start with 0.5ml for natural enhancement</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <span className="text-gray-300">Consider 0.7ml for more noticeable change</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-purple-300 mb-3">For Medium to Large Lips</h4>
                  <p className="text-gray-300 mb-4">
                    Medium and large lips can accommodate more filler due to their natural elasticity and 
                    existing volume, allowing for more dramatic transformations.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <span className="text-gray-300">1ml provides visible enhancement</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <span className="text-gray-300">1.5-2ml for dramatic results</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Lip Filler Areas of Treatment */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Comprehensive Lip Enhancement Areas</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Our lip filler treatments target multiple areas around the lips for complete enhancement 
                and natural-looking results that complement your facial features.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { area: "Vermilion Border", description: "Define and enhance the natural lip line for better shape and definition" },
                { area: "Cupid's Bow", description: "Enhance the central curves of the upper lip for a more defined appearance" },
                { area: "Upper & Lower Lips", description: "Add volume to the fleshy part of both lips for natural fullness" },
                { area: "Oral Commissures", description: "Treat the corners of the mouth to prevent downward turning" },
                { area: "Marionette Lines", description: "Address puppet lines that extend downward from the mouth corners" },
                { area: "Philtrum Ridges", description: "Enhance the natural ridges between nose and upper lip for better definition" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-black border-gray-800 h-full hover:border-purple-500 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-white text-lg">{item.area}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Swelling and Recovery Information */}
        <section className="py-20">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">0.5ml Lip Filler Swelling Stages</h2>
                <p className="text-gray-300 mb-6">
                  Understanding the recovery timeline helps you plan your treatment effectively. Schedule your 
                  lip enhancement well before important events as swelling can be unpredictable.
                </p>
                <div className="space-y-4">
                  <div className="bg-accent rounded-lg p-4">
                    <h4 className="font-semibold text-purple-300 mb-2">First 24-48 Hours</h4>
                    <p className="text-gray-300">Initial swelling begins, lips may feel tender and appear larger than final result</p>
                  </div>
                  <div className="bg-accent rounded-lg p-4">
                    <h4 className="font-semibold text-purple-300 mb-2">48-72 Hours</h4>
                    <p className="text-gray-300">Peak swelling period, lips reach maximum size before beginning to settle</p>
                  </div>
                  <div className="bg-accent rounded-lg p-4">
                    <h4 className="font-semibold text-purple-300 mb-2">1-2 Weeks</h4>
                    <p className="text-gray-300">Gradual reduction in swelling, true results begin to show as lips settle naturally</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Lip Filler Aftercare Guide</h2>
                <p className="text-gray-300 mb-6">
                  Proper aftercare ensures optimal healing and the best possible results from your 
                  lip filler treatment at our London clinic.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">First 24 Hours</h4>
                      <p className="text-gray-300">Avoid touching lips, applying makeup, or consuming hot drinks</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Ice Application</h4>
                      <p className="text-gray-300">Apply ice packs carefully to reduce swelling and discomfort</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Daily Massage</h4>
                      <p className="text-gray-300">Massage lips firmly for 7-14 days to prevent lumps and ensure smooth results</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Activity Restrictions</h4>
                      <p className="text-gray-300">Avoid strenuous exercise for 24-48 hours to minimize swelling</p>
                    </div>
                  </div>
                </div>
              </motion.div>
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
                      <p className="text-gray-300">
                        <a 
                          href="https://www.harleystreetinstitute.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-purple-300 hover:text-purple-200 underline"
                        >
                          Harley Street Institute
                        </a> trainers - we are the trainers
                      </p>
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

        {/* Expert Advice Video Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Lip Filler Treatment Advice & Videos</h2>
                <p className="text-gray-300 mb-6">
                  Dr. Haq offers expert advice on{" "}
                  <span className="text-purple-300 font-semibold">lip fillers</span>, based on the training provided through our{" "}
                  <a 
                    href="https://www.harleystreetinstitute.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-300 hover:text-purple-200 underline"
                  >
                    Harley Street Institute
                  </a>
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <p className="text-gray-300">Expert technique demonstrations</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <p className="text-gray-300">Treatment planning insights</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <p className="text-gray-300">Safety protocols and aftercare</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl">
                  {/* Expert Advice Video */}
                  <video 
                    controls 
                    className="w-full aspect-video object-cover"
                    poster="/lovable-uploads/09951dc6-93ca-42a0-80e6-127bcc865484.png"
                  >
                    <source 
                      src="https://mrrdrtbarxaacmlzvgne.supabase.co/storage/v1/object/public/treatment-videos/1755264601226_oah7twobb4l.mp4" 
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
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
          <h3>Comprehensive Lip Filler Information London</h3>
          <p>
            Cosmedocs Harley Street clinic offers premium lip filler treatments in London using advanced hyaluronic acid dermal fillers. Our expert cosmetic doctors specialize in 0.5ml lip filler natural enhancement and 1ml lip filler bold enhancement procedures. Located at 10 Harley Street, we provide safe, effective lip injections with minimal downtime and natural-looking results. 0.5ml lip filler costs £275 and provides subtle enhancement perfect for thin lips and first-time treatments, lasting 6-9 months. 1ml lip filler costs £325 and offers visible enhancement for medium to large lips, lasting 9-12 months. Our lip filler treatments target vermilion border, cupid's bow, upper and lower lips, oral commissures, marionette lines, and philtrum ridges for comprehensive enhancement.
          </p>
          <p>
            We use only FDA-approved products including Juvederm, Restylane, and other premium brands from Swiss, French, and USA manufacturers. Our comprehensive lip enhancement services include lip volume increase, lip shape correction, lip symmetry adjustment, and lip border definition. Thin lips have different elasticity and collagen levels with dense elastin, making gradual volume increase with 0.5ml the safest approach. Medium and large lips can accommodate 1ml to 2ml for more dramatic transformations. Understanding lip filler volumes is crucial as fillers are supplied in 1ml syringes (roughly a fifth of a teaspoon), though effective volume is higher as hyaluronic acid attracts water.
          </p>
          <p>
            Our experienced practitioners have performed over one million aesthetic injections since 2007, making us one of London's most trusted cosmetic clinics. Lip filler procedures typically take 10-25 minutes with immediate results. Recovery involves 1-2 weeks full healing with swelling peaking at 48-72 hours then gradually subsiding. Proper aftercare includes avoiding touching lips for 24 hours, applying ice packs, daily massage for 7-14 days, and avoiding strenuous exercise. We provide detailed aftercare instructions and follow-up appointments to ensure optimal healing and satisfaction. Our 'invisible art' philosophy ensures natural-looking lip enhancement that complements your facial features. Book your lip filler consultation today by calling 0333 0551 503 or visiting our Harley Street clinic. We offer competitive pricing and flexible payment options for all lip enhancement treatments.
          </p>
        </div>
      </div>
    </>
  );
};

export default LipFillers;
