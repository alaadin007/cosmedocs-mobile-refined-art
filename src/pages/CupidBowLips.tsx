import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { generateSEOMetadata } from "@/utils/seo";
import { Clock, Calendar, Activity, Syringe, Heart, Target, MapPin, Star, Home } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import ClientReviews from '@/components/ClientReviews';

const CupidBowLips = () => {
  const seoData = generateSEOMetadata(
    "Cupid's Bow Lip Enhancement London | Cosmedocs",
    "Expert Cupid's bow lip enhancement in London. Define & reshape your lip peaks for a natural, elegant smile. Book consultation today.",
    "/cupid-bow-lips"
  );

  const breadcrumbItems = [
    { label: "Treatments", path: "/treatments" },
    { label: "Lip Treatments", path: "/lip-fillers" }
  ];

  const beforeAfterImages = [
    { 
      src: "/lovable-uploads/a9533a9b-0dd5-4e65-8c88-8e415e07f1ff.png", 
      alt: "Before and after Cupid's bow enhancement showing defined lip peaks", 
      caption: "Perfectly defined Cupid's bow creating elegant lip shape" 
    },
    { 
      src: "/lovable-uploads/0fc2f9cc-be54-45a6-b6ac-11c1f0dc04ad.png", 
      alt: "Before and after Cupid's bow lip filler London showing natural definition", 
      caption: "Enhanced Cupid's bow with natural-looking definition and symmetry" 
    },
    { 
      src: "/lovable-uploads/ca0d519c-295a-47a5-ad68-27462c0fa778.png", 
      alt: "Before and after subtle Cupid's bow enhancement London", 
      caption: "Subtle Cupid's bow refinement for balanced, proportionate lips" 
    }
  ];

  const faqs = [
    {
      question: "What is Cupid's bow lip enhancement?",
      answer: "Cupid's bow lip enhancement is a specialised technique that defines and reshapes the double-curved area at the centre of your upper lip. Using precise filler placement, we create or enhance the distinctive 'M' shape, adding definition, symmetry, and elegance to your lips whilst maintaining a natural appearance."
    },
    {
      question: "How long do Cupid's bow enhancement results last?",
      answer: "Results typically last 6-12 months depending on the filler used, your metabolism, and lifestyle factors. Premium hyaluronic acid fillers provide long-lasting definition whilst naturally integrating with your lip tissue for optimal results."
    },
    {
      question: "Is Cupid's bow enhancement painful?",
      answer: "The treatment is minimally uncomfortable. We use topical anaesthetic and premium fillers containing lidocaine to ensure your comfort throughout the procedure. Most clients describe only mild pressure during injection."
    },
    {
      question: "Can Cupid's bow enhancement look natural?",
      answer: "Absolutely. Our philosophy is invisible art—enhancing your natural features without exaggeration. We carefully assess your facial proportions and lip anatomy to create a Cupid's bow that complements your unique features beautifully."
    },
    {
      question: "Who is suitable for Cupid's bow lip enhancement?",
      answer: "This treatment is ideal for those with a flat or undefined Cupid's bow, asymmetrical lip peaks, or anyone seeking more defined lip contours. During consultation, our doctors will assess your lips and discuss whether this treatment suits your aesthetic goals."
    },
    {
      question: "What's the recovery time for Cupid's bow enhancement?",
      answer: "Recovery is minimal. You may experience slight swelling for 24-48 hours, but most clients return to normal activities immediately. Final results are visible after 2 weeks once any swelling subsides completely."
    },
    {
      question: "How much filler is needed for Cupid's bow enhancement?",
      answer: "Typically, 0.3-0.7ml of filler is used specifically for the Cupid's bow area. The exact amount depends on your natural lip structure and desired definition. Our doctors will recommend the optimal volume during your consultation."
    },
    {
      question: "Can Cupid's bow enhancement be combined with other treatments?",
      answer: "Yes, it's often combined with overall lip filler, lip border definition, or other facial aesthetic treatments for comprehensive enhancement. Our doctors will create a bespoke treatment plan tailored to your goals."
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
        <meta name="keywords" content="Cupid's bow enhancement, Cupid's bow lip filler, lip peak definition, lip shaping London, upper lip enhancement, lip contouring, natural lip definition, aesthetic lip enhancement, Harley Street lip treatment" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "Cupid's Bow Lip Enhancement",
            "description": "Specialised lip filler technique to define and enhance the Cupid's bow area of the upper lip",
            "procedureType": "Cosmetic",
            "bodyLocation": "Upper lip",
            "preparation": "Topical anaesthetic applied",
            "followup": "Minimal downtime, results visible immediately",
            "howPerformed": "Precise dermal filler injection to define lip peaks"
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        {/* Breadcrumb Navigation */}
        <div className="bg-accent py-4">
          <div className="page-container">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="flex items-center gap-1">
                      <Home className="h-4 w-4" />
                      <span>Home</span>
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                {breadcrumbItems.map((item, index) => (
                  <BreadcrumbItem key={item.path}>
                    <BreadcrumbLink asChild>
                      <Link to={item.path}>{item.label}</Link>
                    </BreadcrumbLink>
                    {index < breadcrumbItems.length - 1 && <BreadcrumbSeparator />}
                  </BreadcrumbItem>
                ))}
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Cupid's Bow Enhancement</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

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
                <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight text-purple-300">
                  Cupid's Bow Enhancement
                </h1>
                <p className="text-xl text-gray-200 mb-8">Invisible art - defining elegance without exaggeration</p>
                <div className="mb-8">
                  <p className="text-2xl text-white font-bold">Define Your Natural Beauty</p>
                  <p className="text-sm text-gray-300">20-30 minutes • Precise filler technique • Natural lip definition</p>
                </div>
                <div className="mb-6 flex items-center gap-6 flex-wrap">
                  <div className="flex items-center gap-2">
                    <MapPin className="text-purple-400" size={20} />
                    <span className="text-gray-300">Harley Street, London</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="text-yellow-400" size={20} fill="currentColor" />
                    <span className="text-gray-300">4.9/5 from 847 reviews</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={() => window.open("https://med.as.me/harleystreet", "_blank")}
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl"
                  >
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
              <h2 className="text-3xl font-bold mb-8 text-white">Cupid's Bow Enhancement Overview</h2>
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
                <p className="text-gray-300">20-30 minutes</p>
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
                <p className="text-gray-300">6-12 months</p>
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
                <p className="text-gray-300">Minimal, return same day</p>
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
                <h3 className="text-lg font-semibold text-white mb-2">Anaesthesia</h3>
                <p className="text-gray-300">Topical + lidocaine</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Before & After Gallery */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Before and After Cupid's Bow Enhancement</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Explore authentic before and after results showcasing beautifully defined Cupid's bows 
                achieved through precise filler placement and expert technique.
              </p>
            </motion.div>

            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {beforeAfterImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative group cursor-pointer p-2"
                    >
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-2 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg"></div>
                      <div className="absolute bottom-2 left-2 right-2 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
                        <p className="text-white text-sm font-medium">{image.caption}</p>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="text-white border-white hover:bg-white hover:text-black" />
              <CarouselNext className="text-white border-white hover:bg-white hover:text-black" />
            </Carousel>
          </div>
        </section>

        {/* What is Cupid's Bow Enhancement */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-8 text-center">What Is Cupid's Bow Enhancement?</h2>
              
              <div className="space-y-6 text-gray-300">
                <p>
                  The Cupid's bow is the distinctive double-curved area at the centre of the upper lip, 
                  resembling the shape of Cupid's archery bow. This anatomical feature defines the peaks 
                  and valleys of your upper lip, creating the characteristic 'M' shape that's essential 
                  for balanced, attractive lip aesthetics.
                </p>

                <p>
                  Cupid's bow enhancement is a specialised lip filler technique that precisely defines, 
                  reshapes, or accentuates this area. Using premium hyaluronic acid fillers and expert 
                  injection techniques, we create symmetrical, well-defined peaks that complement your 
                  natural facial proportions.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Ideal Candidates & Aftercare */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Ideal Candidates Column */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-accent border-none h-full">
                    <CardHeader>
                      <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                        <Heart className="text-purple-600" size={28} />
                      </div>
                      <CardTitle className="text-2xl text-white">Who Is This Treatment Ideal For?</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6 text-gray-300">
                      <p className="text-base">This treatment is ideal for those with:</p>
                      
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="text-purple-300 mt-1">•</span>
                          <span>Flat or undefined Cupid's bow</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-purple-300 mt-1">•</span>
                          <span>Asymmetrical lip peaks</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-purple-300 mt-1">•</span>
                          <span>Age-related loss of lip definition</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-purple-300 mt-1">•</span>
                          <span>Desire for more sculpted, elegant lip shape</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-purple-300 mt-1">•</span>
                          <span>Naturally thin upper lip lacking definition</span>
                        </li>
                      </ul>

                      <div className="pt-4 border-t border-purple-900/30">
                        <p className="text-sm leading-relaxed">
                          Unlike general lip filler treatments, Cupid's bow enhancement focuses specifically on 
                          creating precise definition in the upper lip peaks, resulting in a more refined, 
                          elegant appearance whilst maintaining natural-looking proportions.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Aftercare Column */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-accent border-none h-full">
                    <CardHeader>
                      <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                        <Target className="text-purple-600" size={28} />
                      </div>
                      <CardTitle className="text-2xl text-white">Aftercare Guidelines</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6 text-gray-300">
                      <p className="text-base">To ensure optimal results and minimise swelling:</p>
                      
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="text-purple-300 mt-1">•</span>
                          <span>Avoid touching or massaging the treated area for 24 hours</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-purple-300 mt-1">•</span>
                          <span>Apply ice packs for 10-15 minutes to reduce swelling</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-purple-300 mt-1">•</span>
                          <span>Sleep with your head elevated for the first night</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-purple-300 mt-1">•</span>
                          <span>Avoid strenuous exercise for 24-48 hours</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-purple-300 mt-1">•</span>
                          <span>Stay hydrated and avoid alcohol for 24 hours</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-purple-300 mt-1">•</span>
                          <span>Avoid extreme heat (saunas, hot yoga) for 48 hours</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-purple-300 mt-1">•</span>
                          <span>Use a gentle lip balm to keep lips moisturised</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-purple-300 mt-1">•</span>
                          <span>Avoid makeup on the treated area for 12 hours</span>
                        </li>
                      </ul>

                      <div className="pt-4 border-t border-purple-900/30">
                        <p className="text-sm leading-relaxed">
                          Mild swelling and tenderness are normal and typically subside within 48 hours. 
                          Final results will be visible after 2 weeks once any swelling has completely resolved.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Is It Rare to Have a Cupid's Bow? */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-8 text-center">Is It Rare to Have a Cupid's Bow?</h2>
              
              <Card className="bg-black border-none mb-6">
                <CardContent className="pt-6 space-y-6 text-gray-300">
                  <p>
                    No, having a Cupid's bow isn't rare—everyone naturally has this anatomical feature. 
                    However, the prominence, definition, and symmetry of the Cupid's bow varies significantly 
                    from person to person.
                  </p>

                  <p>
                    Whilst everyone possesses this double-curved area on their upper lip, many people have 
                    a subtle or flat Cupid's bow that lacks clear definition. Factors influencing the 
                    appearance of your Cupid's bow include:
                  </p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <Card className="bg-black border-purple-900/30">
                  <CardContent className="pt-6">
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-3">
                        <span className="text-purple-300 mt-1">•</span>
                        <span>Genetics and inherited facial structure</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-300 mt-1">•</span>
                        <span>Natural lip anatomy and muscle positioning</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-300 mt-1">•</span>
                        <span>Age-related volume loss in the lips</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-black border-purple-900/30">
                  <CardContent className="pt-6">
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-3">
                        <span className="text-purple-300 mt-1">•</span>
                        <span>Ethnic background and facial proportions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-300 mt-1">•</span>
                        <span>Individual variation in lip thickness and shape</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-black border-none">
                <CardContent className="pt-6 space-y-6 text-gray-300">
                  <p>
                    What is considered rare is a naturally pronounced, sharply defined Cupid's bow with 
                    perfect symmetry. Many individuals have asymmetrical peaks, one side more defined than 
                    the other, or a completely flat upper lip border lacking the characteristic 'M' shape.
                  </p>

                  <p>
                    This natural variation is precisely why Cupid's bow enhancement has become increasingly 
                    popular—it allows us to refine and define this feature for those seeking more sculpted, 
                    balanced lip aesthetics, regardless of their natural lip structure.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* The Cosmedocs Approach */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-8 text-center">The Cosmedocs Approach</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="bg-accent border-none">
                  <CardHeader>
                    <Heart className="text-purple-300 mb-4" size={32} />
                    <CardTitle className="text-white">Invisible Art Philosophy</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <p>
                      Our aesthetics is invisible art. We enhance your natural Cupid's bow with subtle 
                      precision, creating definition that speaks without words—bold yet natural, 
                      always your way.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-accent border-none">
                  <CardHeader>
                    <Target className="text-purple-300 mb-4" size={32} />
                    <CardTitle className="text-white">Precision Technique</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <p>
                      Using advanced micro-injection techniques and premium fillers, we meticulously 
                      sculpt each lip peak with millimetre precision, ensuring symmetrical, 
                      harmonious results tailored to your unique anatomy.
                    </p>
                  </CardContent>
                </Card>
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
              <h2 className="text-3xl font-bold mb-4">Pricing</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Transparent pricing for expert Cupid's bow enhancement with premium products
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-purple-300 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Subtle Definition</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <div className="text-3xl font-bold text-purple-300 mb-2">£250</div>
                      <div className="text-sm text-gray-300">0.3ml premium filler</div>
                    </div>
                    <ul className="space-y-3 text-gray-300 text-sm">
                      <li className="flex items-start">
                        <span className="text-purple-300 mr-2">✓</span>
                        Gentle Cupid's bow definition
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-300 mr-2">✓</span>
                        Natural enhancement
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-300 mr-2">✓</span>
                        Perfect for first-time treatment
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
                <Card className="bg-purple-900 border-purple-300 h-full relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-300 text-black px-4 py-1 rounded-full text-xs font-semibold">
                    MOST POPULAR
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Enhanced Definition</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <div className="text-3xl font-bold text-white mb-2">£350</div>
                      <div className="text-sm text-gray-200">0.5ml premium filler</div>
                    </div>
                    <ul className="space-y-3 text-gray-200 text-sm">
                      <li className="flex items-start">
                        <span className="text-white mr-2">✓</span>
                        Clear Cupid's bow definition
                      </li>
                      <li className="flex items-start">
                        <span className="text-white mr-2">✓</span>
                        Balanced, symmetrical peaks
                      </li>
                      <li className="flex items-start">
                        <span className="text-white mr-2">✓</span>
                        Ideal for most clients
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
                <Card className="bg-black border-purple-300 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Maximum Definition</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <div className="text-3xl font-bold text-purple-300 mb-2">£450</div>
                      <div className="text-sm text-gray-300">0.7ml premium filler</div>
                    </div>
                    <ul className="space-y-3 text-gray-300 text-sm">
                      <li className="flex items-start">
                        <span className="text-purple-300 mr-2">✓</span>
                        Dramatic Cupid's bow definition
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-300 mr-2">✓</span>
                        Sculpted, elegant appearance
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-300 mr-2">✓</span>
                        For more pronounced enhancement
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <div className="text-center mt-12">
              <Button 
                onClick={() => window.open("https://med.as.me/harleystreet", "_blank")}
                className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold"
              >
                Book Your Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-20 bg-black">
          <div className="page-container max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            </motion.div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-purple-300">
                  <AccordionTrigger className="text-white hover:text-purple-300">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Client Reviews */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <ClientReviews />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black">
          <div className="page-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Ready to Define Your Cupid's Bow?</h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Book your consultation with our expert doctors at our Harley Street clinic 
                and discover how Cupid's bow enhancement can elevate your natural beauty.
              </p>
              <Button 
                onClick={() => window.open("https://med.as.me/harleystreet", "_blank")}
                className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold"
              >
                Book Consultation Now
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <section className="sr-only" aria-hidden="true">
          <h2>Cupid's Bow Lip Enhancement London - Expert Treatment Guide</h2>
          <p>
            Cupid's bow enhancement is an advanced aesthetic treatment designed to define and refine 
            the characteristic double-curved area of the upper lip. At Cosmedocs, our expert practitioners 
            specialise in creating beautifully sculpted Cupid's bows that enhance your natural facial 
            harmony whilst maintaining subtle, elegant results.
          </p>
          <p>
            The Cupid's bow plays a crucial role in overall lip aesthetics. A well-defined Cupid's bow 
            creates the illusion of fuller, more youthful lips even without adding significant volume. 
            This treatment is particularly beneficial for individuals with naturally flat upper lip 
            borders, asymmetrical peaks, or those experiencing age-related loss of definition.
          </p>
          <p>
            Our Cupid's bow enhancement technique utilises premium hyaluronic acid-based dermal fillers, 
            carefully selected for their ability to create precise definition whilst maintaining natural 
            tissue integration. The treatment involves strategic placement of small amounts of filler 
            along the peaks and valleys of the upper lip border, creating or accentuating the distinctive 
            'M' shape that defines an attractive Cupid's bow.
          </p>
          <p>
            Located in prestigious Harley Street, London, Cosmedocs offers Cupid's bow enhancement 
            treatments performed by qualified medical professionals with extensive experience in facial 
            aesthetics. Our doctors understand the intricate anatomy of the lips and perioral region, 
            ensuring safe, effective treatments with minimal risk of complications.
          </p>
          <p>
            The treatment process begins with a comprehensive consultation where we assess your natural 
            lip anatomy, facial proportions, and aesthetic goals. Using advanced assessment techniques, 
            we determine the optimal injection points and filler volume required to create balanced, 
            symmetrical Cupid's bow definition tailored specifically to your features.
          </p>
          <p>
            Cupid's bow enhancement offers numerous aesthetic benefits beyond simple lip definition. 
            A well-defined Cupid's bow creates better lip-to-face proportions, enhances the appearance 
            of the philtrum (the vertical groove between nose and upper lip), and provides a more 
            youthful, refined appearance. The treatment can also improve lip symmetry and balance, 
            creating more harmonious facial aesthetics overall.
          </p>
          <p>
            Recovery from Cupid's bow enhancement is minimal, with most clients experiencing only mild 
            swelling that resolves within 24-48 hours. Unlike more extensive lip filler treatments, 
            Cupid's bow enhancement typically produces less swelling due to the small, precise volumes 
            used. Results are visible immediately and continue to improve as the filler settles and 
            integrates with your natural tissues over the following two weeks.
          </p>
          <p>
            At Cosmedocs, we exclusively use premium, FDA-approved hyaluronic acid fillers from leading 
            manufacturers. These medical-grade products ensure optimal safety, longevity, and natural-looking 
            results. The reversible nature of hyaluronic acid fillers provides additional peace of mind, 
            as results can be adjusted or dissolved if necessary, though this is rarely required with 
            expert treatment.
          </p>
        </section>
      </div>
    </>
  );
};

export default CupidBowLips;
