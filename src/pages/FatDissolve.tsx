import { motion } from "framer-motion";
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
import { Clock, Calendar, Activity, Syringe, Award, GraduationCap, CheckCircle, Palette, Heart } from "lucide-react";
import emsculptImage from "@/assets/emsculpt-before-after.jpg";

const FatDissolve = () => {
  const seoData = generateSEOMetadata(
    "EMSCULPT Fat Dissolving London | Non-Invasive Fat Reduction | Body Contouring UK | Cosmedocs",
    "Revolutionary EMSCULPT non-invasive fat reduction treatment in London. Build muscle & burn fat simultaneously. FDA approved body contouring from £750. Book consultation.",
    "/fat-dissolve"
  );

  const beforeAfterImages = [
    { 
      src: emsculptImage, 
      alt: "EMSCULPT before and after fat reduction results showing muscle building and fat burning", 
      caption: "EMSCULPT results - 20% fat reduction and 16% muscle mass increase" 
    },
    { 
      src: emsculptImage, 
      alt: "EMSCULPT abdominal treatment before and after showing sculpted abs", 
      caption: "Abdominal EMSCULPT - equivalent to 20,000 sit-ups in 30 minutes" 
    },
    { 
      src: emsculptImage, 
      alt: "EMSCULPT buttock lifting before and after non-surgical enhancement", 
      caption: "Non-invasive buttock lifting and toning with EMSCULPT technology" 
    }
  ];

  const faqs = [
    {
      question: "How does EMSCULPT work?",
      answer: "EMSCULPT uses HIFEM (High Intensity Focused Electro Magnetic) energy to develop 'supramaximal' contractions in your muscles. Through different muscle contraction patterns during the EMSCULPT treatment, muscle work is stimulated much more than what you can achieve through personal exercise training. A single session equals performing about 20,000 squats or sit-ups in 30 minutes."
    },
    {
      question: "What is the procedure?",
      answer: "There are no special prior-treatment preparations needed. Avoid taking a heavy full meal and empty your bladder before treatment. The procedure is simple and quick using HIFEM energy to produce supramaximal muscle contractions. The treatment is not painful - patients feel strong and frequent muscle contractions. Many patients feel tingling sensations initially but the body adapts quickly."
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
      answer: "Clinical studies show an average of 19% fat reduction, 16% increase in muscle mass, 96% patient satisfaction rate, and average waist reduction of 4.4cm. Some patients see improvement in muscle tone one day after treatment."
    },
    {
      question: "How much fat can I lose after EMSCULPT treatment series?",
      answer: "According to clinical research studies, patients lost 20% of their body fat on average and experienced 1.5 inch loss in their waistline on average after taking series of 4 EMSCULPT treatments."
    },
    {
      question: "What is post-treatment like?",
      answer: "After treatment the area may feel slightly fatigued, similar to after vigorous strength training. This subsides within a few days. You can resume normal activities immediately with no special care instructions needed."
    },
    {
      question: "Is EMSCULPT painful?",
      answer: "EMSCULPT is not painful. You'll feel strong muscle contractions, and some patients may experience tingling sensations initially. The body adapts to the rhythmic contractions quickly. It's similar to preparing for a rigorous strength training workout."
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
      answer: "Yes, patients can combine EMSCULPT with other non-invasive fat reduction treatments such as CoolSculpting or Vanquish to improve fat reduction. Sculptra, Ultherapy, or fat transfer can be combined with EMSCULPT for buttock shaping and lifting."
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
        <meta name="keywords" content="EMSCULPT London, fat dissolving London, non-invasive fat reduction, body contouring London, muscle building treatment, fat burning London, HIFEM technology, buttock lifting, abdominal sculpting, Harley Street" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Cosmedocs",
            "description": "Revolutionary EMSCULPT non-invasive fat reduction and muscle building treatments",
            "url": seoData.canonical,
            "telephone": "0333 0551 503",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "10 Harley Street",
              "addressLocality": "London",
              "postalCode": "W1G 9PF",
              "addressCountry": "GB"
            },
            "medicalSpecialty": "Body Contouring",
            "priceRange": "£££"
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
                  <span className="text-purple-300">EMSCULPT Fat Dissolving</span>
                  <span className="block text-sm mt-4">Melt away stubborn fat effortlessly whilst building muscle</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Revolutionary Body Contouring</p>
                  <p className="text-sm text-gray-300">FDA approved technology - 20% fat reduction & 16% muscle increase</p>
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
              <h2 className="text-3xl font-bold mb-4">EMSCULPT Before and After Results</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See real EMSCULPT results from our London clinic. Revolutionary fat reduction and muscle building in one treatment.
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
              <h2 className="text-3xl font-bold mb-8 text-center text-white">What is EMSCULPT?</h2>
              <div className="text-gray-300 space-y-6">
                <p className="text-lg">
                  EMSCULPT is a revolutionary FDA approved device that builds your muscles while burning your fat. This is the world's first and only technology which offers this without:
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
                  This non-surgical fat burning treatment is pain-free and has no downtime. There are thirteen clinical research studies that back the results of EMSCULPT treatment.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Patients Love It Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-8 text-white">Why Patients Love It</h2>
              <div className="text-gray-300 space-y-6">
                <p className="text-lg">
                  Patients who are looking for quick and easy way to get rid of their extra body fat and build muscles for a well-toned and sculpted body love EMSCULPT.
                </p>
                <p>
                  There is no need to do intense exercises to sculpt and tone your body. EMSCULPT does it for you in few treatment sessions. Imagine that you are performing 20,000 squats or sit-ups in a single session of 30 minutes.
                </p>
                <p>
                  It helps you to get rid of your extra body fat and build your muscles. You do not need to make changes in your diet or exercise regimen to get results. Only 2 sessions in a week for two weeks and it gives amazing results.
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
                      EMSCULPT uses HIFEM technology to create supramaximal contractions that are impossible to achieve through voluntary exercise.
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
                <p className="text-gray-300">Specialist cosmetic practitioners trained in advanced EMSCULPT technology</p>
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
                <p className="text-gray-300">Clinically researched and tested technology with proven safety record</p>
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
                <p className="text-gray-300">Comprehensive consultation and aftercare support included</p>
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
      </div>
    </>
  );
};

export default FatDissolve;