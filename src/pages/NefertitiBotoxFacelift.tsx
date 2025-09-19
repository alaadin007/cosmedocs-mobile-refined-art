import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Star, Clock, Shield, Users, Check, Calendar, Activity, Syringe, Award, GraduationCap, CheckCircle, Palette, Heart } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
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
          <div className="page-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-white">
                  <span className="text-purple-300">Nefertiti Lift</span>
                  <span className="block text-sm mt-4">Invisible art - non-surgical jawline & neck contouring</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Expert Jawline Definition</p>
                  <p className="text-sm text-gray-300">#nefertitilift - See our transformations for precise neck and jawline contouring</p>
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
              <h2 className="text-3xl font-bold mb-8 text-white">Nefertiti Lift Treatment</h2>
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
                <p className="text-gray-300">15-20 minutes including consultation</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Results Duration</h3>
                <p className="text-gray-300">3-4 months with premium Botox</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Activity className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Recovery Time</h3>
                <p className="text-gray-300">No downtime, return to activities immediately</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Syringe className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Treatment Areas</h3>
                <p className="text-gray-300">Platysma muscle bands in neck and jawline</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Before & After Gallery */}
        <section className="py-20 bg-gray-900/50">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Before and After Nefertiti Lift Results</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See the natural, beautiful results achieved with our expert Nefertiti Lift treatments. 
                Each patient receives a personalized approach for optimal outcomes.
              </p>
            </motion.div>

            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {beforeAfterImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative overflow-hidden rounded-lg bg-gray-900"
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-80 object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <p className="text-white text-sm font-medium">{image.caption}</p>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700" />
              <CarouselNext className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700" />
            </Carousel>

            <div className="text-center mt-12">
              <BeforeAfterImageViewer 
                images={beforeAfterImages}
                triggerLabel="View All Before & After Photos"
                title="Nefertiti Lift Results Gallery"
                description="Comprehensive gallery of our jawline enhancement treatments"
              />
            </div>
          </div>
        </section>

        {/* What is Nefertiti Botox */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">What is Nefertiti Botox?</h2>
                <div className="space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    The Nefertiti Botox In Neck Lift, inspired by the Egyptian queen's iconic jawline and neck, is a non-invasive treatment for early jowls and a less defined jawline. This procedure employs Botox injections to ease muscles that contribute to facial sagging, enhancing jawline definition and neck smoothness.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    During the Nefertiti neck lift, small amounts of Botox are strategically injected 
                    into the muscles along the lower jawline and neck. Botox in neck and jawline relaxes 
                    the muscles, lifting the area subtly and redefining the jawline.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    The treatment targets the platysma muscle, which when overactive creates vertical neck bands and "turkey neck" appearance. Precise Botox injections relax this muscle, smoothing vertical lines and reducing downward pull on the jawline for enhanced definition.
                  </p>
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
                    <CardTitle className="text-white">Who Can Benefit from the Nefertiti Neck Lift?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Individuals with an undefined jawline</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">People experiencing wrinkles and sagging in the neck</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Patients with sagging jowls</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Those who have facial sagging due to weight loss</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Individuals who frequently tense their neck, leading to "Turkey Neck"</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Recovery and Aftercare Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6">Combining with Dermal Fillers for Enhanced Results</h2>
              <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
                The Nefertiti neck lift with Botox in neck can be combined with dermal fillers and other 
                collagen-stimulating treatments for optimal results. Fillers can be strategically added to areas, 
                enhancing the lifting effect of Botox. This combination approach can address a range of ageing signs, 
                offering a more comprehensive facial rejuvenation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="bg-black/50 border-gray-800 h-full">
                  <CardContent className="p-6">
                    <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Heart className="text-purple-600" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Enhanced Jawline</h3>
                    <p className="text-gray-300">Dermal fillers add volume and structure to complement the lifting effect of Botox</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="bg-black/50 border-gray-800 h-full">
                  <CardContent className="p-6">
                    <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Palette className="text-purple-600" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Comprehensive Rejuvenation</h3>
                    <p className="text-gray-300">Address multiple signs of aging with a customized treatment plan</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="bg-black/50 border-gray-800 h-full">
                  <CardContent className="p-6">
                    <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="text-purple-600" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Optimal Results</h3>
                    <p className="text-gray-300">Strategic combination approach for maximum effectiveness and natural outcomes</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Recovery and Aftercare Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Recovery and Aftercare</h2>
                <div className="space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    One advantage of the Nefertiti neck lift is the minimal recovery time. Patients can 
                    typically return to their normal activities immediately after the procedure. Some minor 
                    swelling or bruising may occur, but it generally resolves quickly.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Check className="text-green-500" size={20} />
                      <p className="text-gray-300">Return to work immediately</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="text-green-500" size={20} />
                      <p className="text-gray-300">Minimal to no downtime required</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="text-green-500" size={20} />
                      <p className="text-gray-300">Quick healing with minimal side effects</p>
                    </div>
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
                    <CardTitle className="text-white">Longevity of Results</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">
                      The Nefertiti Botox Facelift results can be seen within a few days and typically 
                      last 3 to 6 months. Regular maintenance sessions are recommended to sustain the 
                      youthful, lifted appearance of the jawline. With repeated injections, treatment 
                      lasts longer.
                    </p>
                    <div className="bg-purple-900/30 p-4 rounded-lg">
                      <h4 className="text-white font-semibold mb-2">Results Timeline:</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li>• Initial results: 3-5 days</li>
                        <li>• Full results: 14 days</li>
                        <li>• Duration: 3-6 months</li>
                        <li>• Enhanced longevity with regular treatments</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Nefertiti Neck Lift Treatment Video */}
        <section className="py-20 bg-gray-950">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Nefertiti Neck Lift With Botox in Neck Treatment Video</h2>
              <div className="max-w-4xl mx-auto">
                <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
                  <video 
                    controls 
                    className="w-full h-full object-cover"
                    poster="/placeholder.svg"
                  >
                    <source src="https://www.cosmedocs.com/wp-content/uploads/2024/05/Nefertiti-2-ad.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <p className="text-gray-300 mt-4">
                  The Nefertiti Neck Lift Video with Botox In Neck Injections Demonstrates A Quick, Painless Treatment.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing-section" className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Nefertiti Lift Pricing</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Transparent pricing for professional Nefertiti Lift treatment. All prices include consultation, 
                treatment, and aftercare support from our expert medical team.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-purple-500 h-full text-center">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Essential Nefertiti</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£300</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Basic neck band treatment for mild concerns</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Consultation included</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Premium Botox treatment</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Aftercare support</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-purple-600 border-purple-400 h-full text-center relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-white text-purple-600 px-4 py-1 rounded-full text-sm font-semibold">POPULAR</span>
                  </div>
                  <CardHeader className="pt-8">
                    <CardTitle className="text-white text-2xl">Complete Nefertiti</CardTitle>
                    <div className="text-white text-4xl font-bold">£400</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-purple-100">Comprehensive jawline and neck contouring</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Comprehensive consultation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Full jawline enhancement</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Extended aftercare support</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">2-week follow-up</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-gray-700 h-full text-center">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Consultation Only</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£50</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Professional assessment and treatment planning</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Full facial assessment</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Treatment recommendations</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Deducted from treatment cost</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <p className="text-gray-300 mb-6">
                *Consultation fee is deducted from treatment cost if you proceed on the same day
              </p>
              <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 text-lg font-semibold" asChild>
                <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">Book Your Consultation</a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Nefertiti Neck Lift Treatment Video */}
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
                  <Award className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Experience</h3>
                <p className="text-gray-300">Over 1 million injections performed since 2007</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Training</h3>
                <p className="text-gray-300">
                  <a 
                    href="https://www.harleystreetinstitute.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-300 hover:text-purple-200 underline"
                  >
                    Harley Street Institute
                  </a> trainers
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Quality</h3>
                <p className="text-gray-300">Premium FDA-approved Botox only</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Palette className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Philosophy</h3>
                <p className="text-gray-300">'Invisible art' for natural results</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Aftercare</h3>
                <p className="text-gray-300">Comprehensive aftercare and follow-up</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-black">
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
                Get answers to common questions about Nefertiti Lift treatments at our London clinic.
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
              <h2 className="text-3xl font-bold mb-4">Ready to Redefine Your Jawline?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert practitioners and discover how the Nefertiti Lift 
                can enhance your natural beauty with subtle, sophisticated results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6" asChild>
                  <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">
                    Book Free Consultation
                  </a>
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