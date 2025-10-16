import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { generateSEOMetadata } from "@/utils/seo";
import { Clock, Calendar, Activity, Syringe, Award, GraduationCap, CheckCircle, Palette, Heart, Home, ChevronRight } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";


const FatDissolve = () => {
  const seoData = generateSEOMetadata(
    "EMSCULPT London | Fat Reduction | Cosmedocs",
    "Revolutionary EMSCULPT non-invasive fat reduction treatment in London. Build muscle & burn fat simultaneously. FDA approved body contouring from £750. Book consultation.",
    "/fat-dissolve"
  );

  const faqs = [
    {
      question: "How does EMSCULPT work?",
      answer: "EMSCULPT uses HIFEM (High Intensity Focused Electro Magnetic) energy to develop 'supramaximal' contractions in your muscles. Through different muscle contraction patterns during the EMSCULPT treatment, muscle work is stimulated much more than what you can achieve through personal exercise training. A single session equals performing about 20,000 squats or sit-ups in 30 minutes."
    },
    {
      question: "What is the procedure?",
      answer: "There are no special prior-treatment preparations needed. Avoid taking a heavy full meal and empty your bladder before treatment. The procedure is simple and quick using HIFEM energy to produce supramaximal muscle contractions. The treatment is not painful - clients feel strong and frequent muscle contractions. Many people feel tingling sensations initially but the body adapts quickly."
    },
    {
      question: "What areas can EMSCULPT treat?",
      answer: "EMSCULPT is FDA approved for abdominal toning and strengthening, buttock toning and strengthening, and is medically CE marked for fat disruption. Treatment areas include abs, buttocks, arms, thighs, and calves."
    },
    {
      question: "How many EMSCULPT sessions do I need?",
      answer: "Clinical studies show optimal results with 4 treatment sessions - 2 treatments per week for 2 weeks. Each session lasts approximately 30 minutes."
    },
    {
      question: "What results can I expect?",
      answer: "Clinical studies show an average of 19% fat reduction, 16% increase in muscle mass, 96% client satisfaction rate, and average waist reduction of 4.4cm. Some people see improvement in muscle tone one day after treatment."
    },
    {
      question: "How much fat can I lose after EMSCULPT treatment series?",
      answer: "According to clinical research studies, people lost 20% of their body fat on average and experienced 1.5 inch loss in their waistline on average after taking series of 4 EMSCULPT treatments."
    },
    {
      question: "What is post-treatment like?",
      answer: "After treatment the area may feel slightly fatigued, similar to after vigorous strength training. This subsides within a few days. You can resume normal activities immediately with no special care instructions needed."
    },
    {
      question: "Is EMSCULPT painful?",
      answer: "EMSCULPT is not painful. You'll feel strong muscle contractions, and some people may experience tingling sensations initially. The body adapts to the rhythmic contractions quickly. It's similar to preparing for a rigorous strength training workout."
    },
    {
      question: "Who is not suitable for EMSCULPT?",
      answer: "EMSCULPT is not suitable for pregnant/breastfeeding women, those with pacemakers, metal implants in treatment area, cardiac pacemakers, implanted defibrillators, neurostimulators, epilepsy, malignant tumours, hemorrhagic conditions, or recent surgical procedures. People with significant fat stores (over 7cm) may not see significant results as HIFEM energy penetrates up to 7cm."
    },
    {
      question: "Are the results permanent?",
      answer: "The destruction of fat cells (lipolysis) is permanent with EMSCULPT treatment. However, weight gain after treatment may cause re-growth of remaining fat cells. The improvement in muscle mass lasts about 6 months or more. Periodic treatments can help maintain the effects."
    },
    {
      question: "Can EMSCULPT be combined with other treatments?",
      answer: "Yes, clients can combine EMSCULPT with other non-invasive fat reduction treatments such as CoolSculpting or Vanquish to improve fat reduction. Sculptra, Ultherapy, or fat transfer can be combined with EMSCULPT for buttock shaping and lifting."
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
        <meta name="keywords" content="fat dissolving injections, fat dissolving injections near me, lemon fat dissolving injections, aqualyx fat dissolving injections, fat dissolving injections london, chin fat dissolving injections, fat dissolving injections stomach, EMSCULPT London, non-invasive fat reduction, body contouring London, fat dissolving injections uk, best fat dissolving injections, are fat dissolving injections safe, Harley Street" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "Cosmedocs",
            "description": "Revolutionary EMSCULPT non-invasive fat reduction and muscle building treatments. Specialist fat dissolving injections in London.",
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
            "availableService": {
              "@type": "MedicalProcedure",
              "name": "EMSCULPT Fat Dissolving Treatment"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "EMSCULPT Fat Dissolving Treatment",
            "description": "Non-invasive fat reduction and muscle building treatment using HIFEM technology. FDA approved body contouring with proven results.",
            "procedureType": "Non-invasive body contouring",
            "followup": "4 sessions over 2 weeks recommended",
            "preparation": "No special preparation required",
            "howPerformed": "HIFEM energy produces supramaximal muscle contractions while reducing fat cells",
            "bodyLocation": ["Abdomen", "Buttocks", "Arms", "Thighs", "Calves"]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Offer",
            "name": "EMSCULPT Treatment Packages",
            "description": "Professional fat reduction and muscle building treatments",
            "priceCurrency": "GBP",
            "price": "750",
            "priceValidUntil": "2025-12-31",
            "availability": "https://schema.org/InStock",
            "url": seoData.canonical,
            "seller": {
              "@type": "MedicalClinic",
              "name": "Cosmedocs"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.cosmedocs.com"
            }, {
              "@type": "ListItem",
              "position": 2,
              "name": "EMSCULPT Fat Dissolving",
              "item": seoData.canonical
            }]
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        {/* Breadcrumb Navigation */}
        <section className="py-4 bg-black border-b border-gray-800">
          <div className="page-container">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="text-gray-400 hover:text-purple-300 flex items-center gap-1">
                    <Home className="h-4 w-4" />
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-gray-600">
                  <ChevronRight className="h-4 w-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-purple-300">EMSCULPT Fat Dissolving</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

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
                  <span className="text-purple-300">EMSCULPT Fat Dissolving & Injections</span>
                  <span className="block text-sm mt-4">Melt away stubborn fat effortlessly whilst building muscle</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Revolutionary Body Contouring & Fat Dissolving Injections London</p>
                  <p className="text-sm text-gray-300">FDA approved technology - Best fat dissolving injections for chin, stomach & belly fat</p>
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
                    View Pricing
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
              <h2 className="text-3xl font-bold mb-8 text-white">EMSCULPT Treatment Overview</h2>
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
                <p className="text-gray-300">30 minutes per session</p>
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
                <h3 className="text-lg font-semibold text-white mb-2">Treatment Course</h3>
                <p className="text-gray-300">4 sessions over 2 weeks</p>
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
                <p className="text-gray-300">No downtime, return to normal activities</p>
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
                <h3 className="text-lg font-semibold text-white mb-2">Pain Level</h3>
                <p className="text-gray-300">Pain-free, muscle contractions only</p>
              </motion.div>
            </div>
          </div>
        </section>


        {/* What is EMSCULPT Section */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-8 text-center text-white">What is EMSCULPT & Fat Dissolving Injections?</h2>
              <div className="text-gray-300 space-y-6">
                <p className="text-lg">
                  EMSCULPT is a revolutionary <a href="https://www.fda.gov/medical-devices/aesthetic-cosmetic-devices/body-contouring" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">FDA approved device</a> that builds your muscles while burning your fat. Combined with advanced fat dissolving injections like Aqualyx and Lemon Bottle, we offer the most comprehensive fat reduction treatments in London. These are fat dissolving injections that work to permanently eliminate stubborn fat cells in targeted areas such as the chin, stomach, belly, face, and legs. This is the world&apos;s first and only technology which offers this without:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-purple-400 flex-shrink-0" size={20} />
                    <span>Any downtime</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-purple-400 flex-shrink-0" size={20} />
                    <span>Pain</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-purple-400 flex-shrink-0" size={20} />
                    <span>Complications</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-purple-400 flex-shrink-0" size={20} />
                    <span>Now proven to increase muscle fibres</span>
                  </div>
                </div>
                <p>
                  This non-surgical fat burning treatment is pain-free and has no downtime. Our fat dissolving injections are safe and effective, with minimal side effects when administered by qualified practitioners. There are thirteen clinical research studies that back the results of EMSCULPT treatment. For those seeking targeted fat reduction, we also offer specialist <a href="/dermal-fillers" className="text-purple-300 hover:text-purple-200 underline">dermal filler treatments</a> for facial contouring.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Clients Love It Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-8 text-white">Why Clients Love It</h2>
              <div className="text-gray-300 space-y-6">
                <p className="text-lg">
                  People who are looking for quick and easy way to get rid of their extra body fat and build muscles for a well-toned and sculpted body love EMSCULPT.
                </p>
                <p>
                  There is no need to do intense exercises to sculpt and tone your body. EMSCULPT does it for you in few treatment sessions. Imagine that you are performing 20,000 squats or sit-ups in a single session of 30 minutes. This revolutionary approach to <a href="https://www.healthline.com/health/body-contouring" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">non-invasive body contouring</a> complements natural body processes.
                </p>
                <p>
                  It helps you to get rid of your extra body fat and build your muscles. You do not need to make changes in your diet or exercise regimen to get results. Only 2 sessions in a week for two weeks and it gives amazing results. For comprehensive facial rejuvenation, consider combining with our <a href="/profhilo" className="text-purple-300 hover:text-purple-200 underline">Profhilo treatments</a> for optimal aesthetic outcomes.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Treatment Benefits */}
        <section className="py-20 bg-black text-white">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Why Choose EMSCULPT?</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                The world's first and only technology that builds muscle whilst burning fat simultaneously.
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
                    <CardTitle className="text-white text-2xl">Build Muscle & Burn Fat</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">
                      EMSCULPT uses HIFEM technology to create supramaximal contractions that are impossible to achieve through voluntary exercise. This scientifically proven method delivers measurable results.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-300">Equivalent to 20,000 squats in 30 minutes</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-300">19% average fat reduction</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-300">16% average muscle mass increase</span>
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
                    <CardTitle className="text-white text-2xl">Non-Invasive & Safe</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">
                      FDA approved treatment with no surgery, no anaesthesia, and no downtime required.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-300">No pain or complications</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-300">No recovery time needed</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-300">96% patient satisfaction rate</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Rate of Satisfaction Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Rate of Satisfaction with EMSCULPT Treatment</h2>
              <div className="text-gray-300 space-y-6 mb-12">
                <p>Following the EMSCULPT clinical studies, participants reported following results in terms of satisfaction with the treatment outcomes:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-purple-400 flex-shrink-0" size={20} />
                    <span>95.4% of participants reported satisfaction with treatment results</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-purple-400 flex-shrink-0" size={20} />
                    <span>85% reported significant improvement in buttocks lift and muscular tone</span>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-8 text-center text-white">Client Reviews</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="bg-black border-purple-400">
                  <CardContent className="p-6">
                    <p className="text-gray-300 italic mb-4">
                      "I've had three facial areas treated with Anti-Wrinkle Injection at CosmeDocs in recent years, and find the treatment swift, thorough and effective. Also, Dr Haq's pleasant and friendly manner makes the treatment as painless as possible!"
                    </p>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-purple-400">★</span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-black border-purple-400">
                  <CardContent className="p-6">
                    <p className="text-gray-300 italic mb-4">
                      "I had a facial aesthetic treatment with cosmodocs. I found the price very reasonable. Even better the results were excellent. I will definitely use this service again."
                    </p>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-purple-400">★</span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing-section" className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">EMSCULPT Pricing</h2>
              <p className="text-gray-300">Revolutionary body contouring with transparent pricing</p>
            </motion.div>

            <div className="max-w-lg mx-auto">
              <Card className="bg-accent border-purple-400">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-white">EMSCULPT Course</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-4">From £750</div>
                  <p className="text-gray-300 mb-6">Per session - course of 4 sessions recommended</p>
                  <div className="space-y-3 text-left mb-6">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-purple-400" size={16} />
                      <span className="text-gray-300">30-minute treatment session</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-purple-400" size={16} />
                      <span className="text-gray-300">Abdominal or buttock area</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-purple-400" size={16} />
                      <span className="text-gray-300">No downtime required</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-purple-400" size={16} />
                      <span className="text-gray-300">FDA approved technology</span>
                    </div>
                  </div>
                  <Button 
                    onClick={() => window.open("https://med.as.me/harleystreet", "_blank")}
                    className="w-full bg-purple-600 hover:bg-purple-700"
                  >
                    Book Consultation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Cosmedocs */}
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
                <h3 className="text-lg font-semibold text-white mb-2">EMSCULPT Expertise</h3>
                <p className="text-gray-300">Specialist cosmetic practitioners trained in advanced EMSCULPT technology and <a href="/anti-wrinkle" className="text-purple-300 hover:text-purple-200 underline">aesthetic medicine</a></p>
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
                <h3 className="text-lg font-semibold text-white mb-2">Advanced Equipment</h3>
                <p className="text-gray-300">State-of-the-art EMSCULPT machines delivering clinically proven results</p>
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
                <h3 className="text-lg font-semibold text-white mb-2">FDA Approved</h3>
                <p className="text-gray-300">Clinically researched and <a href="https://www.mayoclinic.org/healthy-lifestyle/fitness/expert-answers/body-contouring/faq-20348166" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">tested body contouring technology</a> with proven safety record</p>
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
                <h3 className="text-lg font-semibold text-white mb-2">Body Sculpting</h3>
                <p className="text-gray-300">'Invisible art' approach for natural body contouring results</p>
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
                <h3 className="text-lg font-semibold text-white mb-2">Complete Care</h3>
                <p className="text-gray-300">Comprehensive consultation and aftercare support at our <a href="/contact" className="text-purple-300 hover:text-purple-200 underline">Harley Street clinic</a> included</p>
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
              <h2 className="text-3xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
              <p className="text-gray-300">Everything you need to know about EMSCULPT treatment</p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-black rounded-lg border border-gray-700">
                    <AccordionTrigger className="text-white hover:text-purple-400 px-6 text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 px-6 pb-6">
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
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Body?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your EMSCULPT consultation and discover how you can build muscle and burn fat 
                without surgery. Revolutionary body contouring with proven results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.open("https://med.as.me/harleystreet", "_blank")}
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6"
                >
                  Book Free Consultation
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6"
                  onClick={() => window.location.href = 'tel:03330551503'}
                >
                  Call 0333 0551 503
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <section className="sr-only" aria-hidden="true">
          <div className="page-container">
            <h2>Comprehensive Guide to Fat Dissolving Injections in London</h2>
            
            <h3>Understanding Fat Dissolving Injections: How They Work</h3>
            <p>
              Fat dissolving injections represent a breakthrough in non-surgical body contouring, offering a safe and effective alternative to traditional liposuction. These injectable treatments use specialised compounds to break down stubborn fat cells permanently. When people ask &quot;how do fat dissolving injections work?&quot;, the answer lies in the science of lipolysis - the natural breakdown of fat cells. Popular formulations like Aqualyx fat dissolving injections and Lemon Bottle fat dissolving injections contain deoxycholic acid, a naturally occurring substance that disrupts fat cell membranes, causing them to release their contents which are then metabolised and eliminated by the body. This process makes fat dissolving injections work exceptionally well for localised fat deposits that resist diet and exercise. The treatment is particularly effective for chin fat dissolving injections, addressing the common concern of double chin fat, as well as stomach fat dissolving injections for those seeking a flatter abdomen.
            </p>

            <h3>Types of Fat Dissolving Injections Available in London</h3>
            <p>
              At our Harley Street clinic, we offer the best fat dissolving injections currently available in the UK market. Aqualyx fat dissolving injections have been extensively tested and approved for use across Europe, making them one of the most trusted options for clients searching for &quot;aqualyx fat dissolving injections near me&quot;. This treatment works by liquefying fat cells in targeted areas, with excellent results shown in stomach aqualyx fat dissolving injections before and after photographs. Lemon Bottle fat dissolving injections represent a newer generation of dissolving fat injections, offering faster results with potentially fewer sessions required. When considering lemon fat dissolving injections near me, our London location provides convenient access to this innovative treatment. Both formulations are used for various body areas including fat dissolving injections chin, fat dissolving injections stomach, fat dissolving injections face, fat dissolving injections legs, arm fat dissolving injections, and fat dissolving injections cheeks. The choice between Aqualyx and Lemon Bottle depends on individual factors assessed during consultation.
            </p>

            <h3>Fat Dissolving Injections Before and After: What Results to Expect</h3>
            <p>
              One of the most common questions we receive is about fat dissolving injections before and after results. Clinical evidence demonstrates significant improvements in treated areas, with clients typically seeing noticeable reduction within 4-6 weeks. Before and after fat dissolving injections stomach treatments show an average reduction of 2-4cm in circumference after a complete treatment course. Lemon fat dissolving injections before and after results often appear slightly faster than traditional formulations. For facial treatments, chin fat dissolving injections before and after photos reveal dramatic improvements in jawline definition and profile. Double chin fat dissolving injections are particularly popular, as this area responds exceptionally well to treatment. Fat dissolving injections for belly fat demonstrate consistent results when combined with a healthy lifestyle. Face fat dissolving injections can address concerns like jowls and cheek fullness. It is important to maintain realistic expectations - while these treatments are highly effective, they work best for people within a healthy weight range seeking targeted fat reduction rather than overall weight loss.
            </p>

            <h3>Safety Profile: Are Fat Dissolving Injections Safe?</h3>
            <p>
              A frequently asked question is &quot;are fat dissolving injections safe?&quot; When administered by qualified medical professionals, fat dissolving injections are considered very safe with an excellent track record. The side effects of fat dissolving injections are typically mild and temporary, including minor swelling, redness, and tenderness at injection sites. More comprehensive <a href="https://www.aestheticsjournal.com/feature/overview-of-injectable-lipolysis-treatments" target="_blank" rel="noopener noreferrer" className="text-purple-300">clinical studies on injectable lipolysis safety</a> confirm minimal risks when proper protocols are followed. Common side effects of fat dissolving injections usually resolve within a few days to a week. Serious complications are rare, particularly when treatments are performed in medically supervised environments like our Harley Street clinic. We conduct thorough medical assessments before any treatment to ensure suitability and minimise any potential risks. The fat dissolving injection safety profile has been established through years of clinical use and research, making these treatments a reliable option for body contouring.
            </p>

            <h3>Treatment Areas and Specialised Applications</h3>
            <p>
              Fat dissolving injections offer versatility in treating multiple body areas. Chin fat dissolving injections remain the most popular application, effectively addressing submental fullness and creating a more defined jawline. Double chin fat dissolving injections can dramatically improve facial profile without surgery. Fat dissolving injections stomach treatments target abdominal fat deposits, whilst fat dissolving injections belly applications address lower abdominal concerns. Face fat dissolving injections work well for jowls, buccal fat, and cheek contouring. Fat dissolving injections legs can reduce inner and outer thigh fullness, whilst arm fat dissolving injections address the upper arm area. Fat dissolving injections cheeks create facial definition by reducing excess facial volume. Each area requires specific injection techniques and dosing, which our experienced practitioners customise for optimal results.
            </p>

            <h3>Cost and Investment: Fat Dissolving Injections Pricing in London</h3>
            <p>
              Understanding fat dissolving injections cost helps people plan their treatment journey. Aqualyx fat dissolving injections cost varies depending on the treatment area and number of sessions required. Generally, smaller areas like the chin require less product and fewer sessions than larger areas like the stomach. The fat dissolving injections cost at our clinic reflects the expertise of our practitioners, the quality of products used, and comprehensive aftercare support. When comparing fat dissolving injections uk pricing, it is essential to consider the qualifications of the practitioner and the clinic&apos;s reputation. Many clients find that investing in quality treatment at an established Harley Street practice provides better value and results than cheaper alternatives. We offer transparent pricing during consultation, with no hidden fees.
            </p>

            <h3>Client Reviews and Testimonials</h3>
            <p>
              Our fat dissolving injections reviews consistently highlight client satisfaction with both treatment results and the overall experience. Many fat dissolving injections review comments mention the professionalism of our team and the comfortable treatment environment. Clients particularly appreciate the minimal downtime and natural-looking results. Reviews of lemon fat dissolving injections often praise the faster visible results compared to earlier formulations. When reading reviews, prospective clients should look for verified testimonials from reputable clinics that demonstrate consistent results across different treatment areas.
            </p>

            <h3>Combining EMSCULPT with Fat Dissolving Injections</h3>
            <p>
              For optimal body contouring results, many people combine EMSCULPT treatments with targeted fat dissolving injections. EMSCULPT builds muscle and reduces fat through HIFEM technology, whilst fat dissolve injections precisely target stubborn localised fat deposits. This combined approach addresses both muscle tone and fat reduction simultaneously, creating comprehensive body transformation. Clients seeking dramatic results in areas like the abdomen often benefit from this dual treatment strategy. Our practitioners can recommend the most effective treatment combinations during your consultation, ensuring your aesthetic goals are achieved efficiently and safely.
            </p>

            <h3>Choosing Your Provider: Why Location Matters</h3>
            <p>
              When searching for &quot;fat dissolving injections near me&quot;, &quot;fat dissolving injection near me&quot;, or &quot;aqualyx fat dissolving injections london&quot;, choosing a reputable Harley Street clinic ensures access to the highest standards of care. Fat dissolving injections london providers should be medically qualified with extensive experience in aesthetic treatments. Our central London location at 37 Harley Street offers convenient access for clients throughout the UK seeking the best fat dissolving injections available. The combination of expert practitioners, premium products, and state-of-the-art facilities makes our clinic the preferred choice for discerning clients.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default FatDissolve;