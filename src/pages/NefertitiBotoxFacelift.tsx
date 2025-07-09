import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Star, Clock, Shield, Users, Check } from "lucide-react";
import { motion } from "framer-motion";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import { generateSEOMetadata } from "@/utils/seo";
import LiquidGlassRelatedTreatments from "@/components/LiquidGlassRelatedTreatments";

export default function NefertitiBotoxFacelift() {
  const [isRelatedTreatmentsOpen, setIsRelatedTreatmentsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const seoData = generateSEOMetadata(
    "Nefertiti Lift - Non-Surgical Jawline & Neck Contouring | Cosmedocs",
    "Redefine your jawline with precision using the Nefertiti Lift. Non-surgical Botox treatment for sharper jawlines, improved neck contour & reduced neck bands. Book consultation.",
    "/nefertiti-botox-face-jaw-lift"
  );

  const beforeAfterImages = [
    {
      src: "/lovable-uploads/9c7fac37-e442-4d67-bb1b-f3f79c67e279.png",
      alt: "Nefertiti Lift before and after results showing improved neck contour",
      caption: "Before & After: Significant improvement in neck bands and jawline definition"
    },
    {
      src: "/lovable-uploads/e09a9811-f63b-493e-9c69-78f715481f5c.png", 
      alt: "Nefertiti Lift side profile showing enhanced jawline definition",
      caption: "Side Profile: Enhanced jawline definition and smoother neck contour"
    }
  ];

  const relatedTreatments = [
    { name: "Face Botox Areas", price: "£200-400", link: "/face-botox-areas" },
    { name: "Lower Face Botox", price: "£250-350", link: "/lower-face-botox" },
    { name: "Chin Botox", price: "£200-300", link: "/chin-botox" },
    { name: "Non-Surgical Facelift", price: "£800-1200", link: "/non-surgical-facelift" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === beforeAfterImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [beforeAfterImages.length]);

  const nextImage = () => {
    setCurrentImageIndex(currentImageIndex === beforeAfterImages.length - 1 ? 0 : currentImageIndex + 1);
  };

  const prevImage = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? beforeAfterImages.length - 1 : currentImageIndex - 1);
  };

  const faqs = [
    {
      question: "What is the Nefertiti Lift and how does it work?",
      answer: "The Nefertiti Lift is a non-surgical treatment using Botox injections to relax the platysma muscle in the neck. This muscle naturally pulls downward on the lower face, and by relaxing it, we allow the natural lifting muscles of the jaw to rebalance facial tension, creating a more defined jawline and smoother neck contour."
    },
    {
      question: "How long do Nefertiti Lift results last?",
      answer: "Results typically last 3-4 months, similar to other Botox treatments. The longevity can vary based on individual factors such as muscle strength, metabolism, and lifestyle. Regular maintenance treatments can help maintain optimal results."
    },
    {
      question: "Is the Nefertiti Lift painful?",
      answer: "The treatment involves minimal discomfort. Most patients describe it as small pinpricks. A topical numbing cream can be applied before treatment to enhance comfort. The entire procedure typically takes 15-20 minutes."
    },
    {
      question: "What areas does the Nefertiti Lift target?",
      answer: "The Nefertiti Lift specifically targets the platysma muscle bands in the neck, the jawline area, and the transition zone between the face and neck. This creates a lifting effect that defines the jawline and smooths neck bands."
    },
    {
      question: "When will I see results from the Nefertiti Lift?",
      answer: "Initial results can be seen within 3-5 days, with full results visible after 2 weeks. The gradual onset allows for natural-looking enhancement of your jawline and neck contour."
    },
    {
      question: "Who is a good candidate for the Nefertiti Lift?",
      answer: "Ideal candidates are those with mild to moderate neck bands, loss of jawline definition, or early signs of neck aging. A consultation will determine if this treatment is suitable for your specific concerns and aesthetic goals."
    },
    {
      question: "Are there any side effects?",
      answer: "Side effects are typically minimal and may include temporary redness, slight swelling, or mild bruising at injection sites. These usually resolve within 24-48 hours. Serious complications are rare when performed by qualified practitioners."
    },
    {
      question: "How much does the Nefertiti Lift cost?",
      answer: "Treatment typically ranges from £300-500 depending on the number of units required and individual needs. A detailed quote will be provided during your consultation based on your specific treatment plan."
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
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.image} />
      </Helmet>

      <div className="bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden min-h-screen flex items-center">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-white">
                  Nefertiti
                  <span className="block text-purple-300">Lift</span>
                  <span className="block text-sm mt-4">Non-surgical jawline & neck contouring</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl">
                  <span className="text-purple-300 font-semibold">Invisible Art</span>
                  <br />
                  Transformation that speaks without saying a word
                </p>
                
                {/* Animated Tagline */}
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-lg md:text-xl text-gray-400 mb-8 relative"
                >
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent animate-pulse">
                      Bold • Natural • Always Your Way
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/40 to-white/20 blur-sm rounded-lg animate-pulse opacity-50"></span>
                  </span>
                </motion.p>
                
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">From £300</p>
                  <p className="text-sm text-gray-300">15-20 minutes • Results last 3-4 months</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold">
                    Book Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold"
                    onClick={() => setIsRelatedTreatmentsOpen(true)}
                  >
                    View Related Treatments
                  </Button>
                </div>
              </motion.div>
              
              <div className="hidden lg:block"></div>
            </div>
          </div>
        </section>

        {/* Quick Info */}
        <section className="py-12 bg-gray-900/30 w-full">
          <div className="px-4 w-full max-w-none">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-light mb-2">15-20min</div>
                <div className="text-sm text-gray-400">Treatment Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light mb-2">3-5 days</div>
                <div className="text-sm text-gray-400">Takes Effect</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light mb-2">3-4 months</div>
                <div className="text-sm text-gray-400">Results Last</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light mb-2">None</div>
                <div className="text-sm text-gray-400">Downtime</div>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Summary */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Nefertiti Lift Treatment Summary</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Treatment Duration</h3>
                    <p className="text-gray-300">15-20 minutes including consultation</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Results Duration</h3>
                    <p className="text-gray-300">3-4 months with premium Botox</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Recovery Time</h3>
                    <p className="text-gray-300">No downtime, return to activities immediately</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Treatment Areas</h3>
                    <p className="text-gray-300">Platysma muscle bands in neck and jawline</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-none">
                  <CardHeader>
                    <CardTitle className="text-white">How the Nefertiti Lift Works</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300 mb-4">
                      By relaxing the platysma muscle—a thin sheet of muscle that pulls downward on the lower face—we allow the natural lifting muscles of the jaw to rebalance facial tension.
                    </p>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Sharper, more defined jawline</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Improved neck contour and smoothing</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Reduction in neck bands and sagging</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Subtle lift with no downtime required</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Natural-looking enhancement that maintains authenticity</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Before & After Gallery */}
        <section className="py-20 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Real Patient Results</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See the natural, beautiful results achieved with our expert Nefertiti Lift treatments. 
                Each patient receives a personalized approach for optimal outcomes.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
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

            <div className="text-center">
              <BeforeAfterImageViewer 
                images={beforeAfterImages}
                triggerLabel="View All Before & After Photos"
                title="Nefertiti Lift Results Gallery"
                description="Comprehensive gallery of our jawline enhancement treatments"
              />
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Treatment Investment</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Transparent pricing for professional Nefertiti Lift treatment with expert practitioners.
              </p>
            </motion.div>

            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Nefertiti Lift</h3>
                  <div className="text-4xl font-bold text-purple-300 mb-4">£300-500</div>
                  <p className="text-gray-300 mb-6">
                    Complete jawline and neck contouring treatment
                  </p>
                  <ul className="text-sm text-gray-300 space-y-3 mb-8 text-left max-w-sm mx-auto">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                      Comprehensive consultation included
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                      Precise Botox placement technique
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                      Results lasting 3-4 months
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                      No downtime required
                    </li>
                  </ul>
                  <Button className="w-full bg-white text-black hover:bg-gray-200 rounded-full py-6">
                    Book Consultation
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Get answers to common questions about Nefertiti Lift treatments at our London clinic.
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
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-12"
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Redefine Your Jawline?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert practitioners and discover how the Nefertiti Lift 
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
          <p>Nefertiti Lift botox treatment London Harley Street cosmetic enhancement jawline neck contouring platysma muscle non-surgical facelift aesthetic medicine dermal treatments facial rejuvenation anti-aging procedures cosmetic injections professional practitioners medical aesthetics beauty clinic London aesthetic treatments facial enhancement natural results subtle enhancement invisible art cosmedocs harley street medical professionals qualified practitioners premium treatments facial contouring jawline definition neck smoothing botox injections cosmetic procedures aesthetic enhancement natural beauty enhancement facial rejuvenation treatments london cosmetic clinic professional medical aesthetics qualified doctors aesthetic medicine london. Cosmedocs aesthetics is invisible art. Bold, Natural, Always Your Way. Aesthetic medicine by Cosmedocs is minimal, quiet not loud, invisible not exaggerated, transformation that speaks without saying a word.</p>
        </div>
      </div>

      <LiquidGlassRelatedTreatments
        isOpen={isRelatedTreatmentsOpen}
        onClose={() => setIsRelatedTreatmentsOpen(false)}
        treatments={relatedTreatments}
      />
    </>
  );
}