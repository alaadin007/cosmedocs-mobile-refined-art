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
import { Clock, Calendar, Activity, Syringe, Award, GraduationCap, CheckCircle, Palette, Heart, User } from "lucide-react";
import cosmedermImage from "@/assets/cosmederm-clinic.jpg";

const CosmeDerm = () => {
  const seoData = generateSEOMetadata(
    "CosmeDerm Dermatology Clinic UK | Online & In-Clinic Consultations | Expert Skin Treatment | Cosmedocs",
    "CosmeDerm dermatology clinic UK offering online & in-clinic consultations. Expert treatment for acne, psoriasis, eczema, hair loss. Dr Hassan Mirza MBBS MRCP.",
    "/cosmederm"
  );

  const treatmentImages = [
    { 
      src: cosmedermImage, 
      alt: "CosmeDerm dermatology clinic consultation room with modern equipment", 
      caption: "State-of-the-art dermatology clinic at Harley Street" 
    },
    { 
      src: cosmedermImage, 
      alt: "Professional dermatologist consultation for skin conditions", 
      caption: "Expert dermatological consultations available online & in-clinic" 
    },
    { 
      src: cosmedermImage, 
      alt: "Advanced dermatology equipment for skin treatment", 
      caption: "Advanced equipment for comprehensive skin analysis" 
    }
  ];

  const treatments = [
    {
      title: "Acne Treatment",
      description: "Comprehensive solutions for active breakouts, scar reduction, and prevention.",
      features: ["Active breakout treatment", "Acne scar reduction", "Pore clearing", "Prevention protocols"]
    },
    {
      title: "Psoriasis Treatment", 
      description: "Patient-centred approach to identify causes and provide effective solutions.",
      features: ["Cause identification", "Targeted treatment", "Symptom management", "Long-term care"]
    },
    {
      title: "Eczema Treatment",
      description: "Personalised treatments to soothe symptoms and restore skin health.",
      features: ["Symptom relief", "Skin barrier repair", "Flare-up prevention", "Moisturisation protocols"]
    },
    {
      title: "Hair Loss Treatment",
      description: "Comprehensive solutions identifying underlying causes for hair regrowth.",
      features: ["Cause analysis", "Treatment planning", "Regrowth protocols", "Confidence restoration"]
    },
    {
      title: "Pigmentation Treatment",
      description: "Target sun damage, uneven tone, and dark spots for clearer skin.",
      features: ["Sun damage repair", "Tone evening", "Dark spot reduction", "Skin brightening"]
    },
    {
      title: "Mole & Tag Removal",
      description: "Safe and effective removal with minimal discomfort and scarring.",
      features: ["Safe removal", "Minimal scarring", "Professional assessment", "Aftercare support"]
    }
  ];

  const faqs = [
    {
      question: "What conditions does CosmeDerm treat?",
      answer: "CosmeDerm treats a broad spectrum of dermatological conditions including acne, psoriasis, eczema, hair loss, pigmentation issues, moles, skin tags, and various other skin and hair concerns."
    },
    {
      question: "Who is Dr Hassan A. Mirza?",
      answer: "Dr Hassan A. Mirza (MBBS, MRCP) is a highly experienced Dermatology Consultant working within the NHS. He completed dermatology training in London hospitals and internal medicine training in Sheffield, with international experience in Orlando."
    },
    {
      question: "What's the difference between online and in-clinic consultations?",
      answer: "Online consultations (£100) offer comprehensive sessions from home via video call. In-person consultations provide hands-on examination and are ideal for complex conditions requiring physical assessment."
    },
    {
      question: "How do I book an appointment?",
      answer: "For online consultations, book directly through our booking system. For in-person consultations, call 0800 8600 178 to arrange your appointment at our Harley Street clinic."
    },
    {
      question: "Are treatments available immediately after consultation?",
      answer: "Many treatments can be provided immediately following consultation, subject to assessment. Complex conditions may require follow-up appointments or referrals."
    },
    {
      question: "Is the clinic regulated?",
      answer: "Yes, treatments are provided by our sister CQC registered practice Priva Dr LTD at 10 Harley Street, ensuring the highest standards of medical care."
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
        <meta name="keywords" content="CosmeDerm, dermatology clinic UK, online dermatologist consultation, Dr Hassan Mirza, acne treatment, psoriasis treatment, eczema treatment, hair loss treatment, Harley Street dermatology" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "CosmeDerm",
            "description": "Dermatology clinic offering online and in-clinic consultations for comprehensive skin and hair treatments",
            "url": seoData.canonical,
            "telephone": "0800 8600 178",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "10 Harley Street",
              "addressLocality": "London",
              "postalCode": "W1G 9PF",
              "addressCountry": "GB"
            },
            "medicalSpecialty": "Dermatology",
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
                  <span className="text-purple-300">COSME<strong>DERM</strong></span>
                  <span className="block text-sm mt-4">Dermatology Clinic UK - Visit in clinic or online</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Expert Dermatological Care</p>
                  <p className="text-sm text-gray-300">NHS consultant-led treatments for healthy skin and hair</p>
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
                    onClick={() => document.getElementById('treatments-section')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    View Treatments
                  </Button>
                </div>
              </motion.div>
              
              <div className="hidden lg:block"></div>
            </div>
          </div>
        </section>

        {/* About CosmeDerm Section */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-8 text-white">
                CosmeDerm: Dermatology Clinic UK
              </h2>
              <div className="text-lg text-gray-300 leading-relaxed space-y-6">
                <p>
                  We believe that healthy skin is essential for your overall well-being, empowering you to be your authentic self with confidence. Hence, our mission at CosmeDocs the Dermatology Clinic in the UK is to provide effective solutions that restore and enhance the natural beauty of your skin and hair.
                </p>
                <p>
                  Furthermore, with a focus on innovative treatments and a patient-centred approach, we specialise in diagnosing and treating a broad spectrum of conditions—from acne to hair loss and everything in between. Whether you are looking for cosmetic procedures or medical treatments, our team at CosmeDocs: Dermatology Clinic in the UK is dedicated to helping you achieve a healthy version of yourself!
                </p>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-8 text-white">
                CosmeDerm: Dermatology Clinic UK
              </h2>
              <div className="text-lg text-gray-300 leading-relaxed space-y-6">
                <p>
                  We believe that healthy skin is essential for your overall well-being, empowering you to be your authentic self with confidence. Hence, our mission at CosmeDocs the Dermatology Clinic in the UK is to provide effective solutions that restore and enhance the natural beauty of your skin and hair.
                </p>
                <p>
                  Furthermore, with a focus on innovative treatments and a patient-centred approach, we specialise in diagnosing and treating a broad spectrum of conditions—from acne to hair loss and everything in between. Whether you are looking for cosmetic procedures or medical treatments, our team at CosmeDocs: Dermatology Clinic in the UK is dedicated to helping you achieve a healthy version of yourself!
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Treatment Gallery */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Our Clinic</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                State-of-the-art facilities at 10 Harley Street providing comprehensive dermatological care.
              </p>
            </motion.div>

            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {treatmentImages.map((image, index) => (
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

        {/* About CosmeDerm Section */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-8 text-white">
                CosmeDerm: Dermatology Clinic UK
              </h2>
              <div className="text-lg text-gray-300 leading-relaxed space-y-6">
                <p>
                  We believe that healthy skin is essential for your overall well-being, empowering you to be your authentic self with confidence. Hence, our mission at CosmeDocs the Dermatology Clinic in the UK is to provide effective solutions that restore and enhance the natural beauty of your skin and hair.
                </p>
                <p>
                  Furthermore, with a focus on innovative treatments and a patient-centred approach, we specialise in diagnosing and treating a broad spectrum of conditions—from acne to hair loss and everything in between. Whether you are looking for cosmetic procedures or medical treatments, our team at CosmeDocs: Dermatology Clinic in the UK is dedicated to helping you achieve a healthy version of yourself!
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Treatment Gallery */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Our Clinic</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                State-of-the-art facilities at 10 Harley Street providing comprehensive dermatological care.
              </p>
            </motion.div>

            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {treatmentImages.map((image, index) => (
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



        {/* Dr Hassan Mirza Section */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">About Our Dermatologist</h2>
              <h3 className="text-2xl text-purple-300 font-bold">Dr Hassan A. Mirza</h3>
              <p className="text-lg text-gray-300 mb-8">MBBS, MRCP</p>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Skin is personal, so we ensure you are in the best hands throughout your journey with us. 
                Meet Dr Hassan A. Mirza, a highly experienced Dermatology Consultant currently working within the NHS.
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
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="text-purple-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Expert Training</h3>
                <p className="text-gray-300">
                  Completed dermatology training in London hospitals with internal medicine training in Sheffield.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="text-purple-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Professional Memberships</h3>
                <p className="text-gray-300">
                  Proud member of the Royal College of Physicians and British Association of Dermatologists.
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
                  <User className="text-purple-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-4">International Experience</h3>
                <p className="text-gray-300">
                  Gained valuable international experience through rotations in Orlando, Florida.
                </p>
              </motion.div>
            </div>
          </div>
        </section>


        {/* Targeted Treatments */}
        <section id="treatments-section" className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Targeted Treatments</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Comprehensive dermatological solutions for a wide range of skin and hair conditions with a patient-centred approach.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {treatments.map((treatment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-accent border-none h-full">
                    <CardHeader>
                      <CardTitle className="text-white text-xl">{treatment.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-300">{treatment.description}</p>
                      <div className="space-y-2">
                        {treatment.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <CheckCircle className="text-purple-400 flex-shrink-0" size={16} />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Options */}
        <section className="py-16 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-8 text-white">Choose Your Consultation Type</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-purple-400 h-full">
                  <CardHeader className="text-center">
                    <CardTitle className="text-white text-2xl">Online Consultation</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-4xl font-bold text-purple-400 mb-4">£100</div>
                    <p className="text-gray-300 mb-6">Comprehensive session from the comfort of your home</p>
                    <div className="space-y-3 text-left mb-6">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span className="text-gray-300">Video consultation with Dr Hassan Mirza</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span className="text-gray-300">Convenient home appointment</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span className="text-gray-300">Treatment recommendations</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span className="text-gray-300">Follow-up care plan</span>
                      </div>
                    </div>
                    <Button 
                      onClick={() => window.open("https://med.as.me/harleystreet", "_blank")}
                      className="w-full bg-purple-600 hover:bg-purple-700"
                    >
                      Book Online Consultation
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-purple-400 h-full">
                  <CardHeader className="text-center">
                    <CardTitle className="text-white text-2xl">In-Person Consultation</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-4xl font-bold text-purple-400 mb-4">Call for Price</div>
                    <p className="text-gray-300 mb-6">Personalised experience at our Harley Street clinic</p>
                    <div className="space-y-3 text-left mb-6">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span className="text-gray-300">Physical examination available</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span className="text-gray-300">Advanced diagnostic equipment</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span className="text-gray-300">Immediate treatment options</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span className="text-gray-300">CQC registered practice</span>
                      </div>
                    </div>
                    <Button 
                      onClick={() => window.open("tel:08008600178", "_blank")}
                      className="w-full bg-purple-600 hover:bg-purple-700"
                    >
                      Call 0800 8600 178
                    </Button>
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
              <h2 className="text-3xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
              <p className="text-gray-300">Everything you need to know about CosmeDerm services</p>
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

        {/* Why Choose CosmeDerm */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-8 text-white">Why Choose CosmeDerm?</h2>
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
                <h3 className="text-lg font-semibold text-white mb-2">NHS Consultant</h3>
                <p className="text-gray-300">Dr Hassan Mirza MBBS MRCP dermatology specialist</p>
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
                <h3 className="text-lg font-semibold text-white mb-2">Expertise</h3>
                <p className="text-gray-300">London hospital training with international experience</p>
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
                <h3 className="text-lg font-semibold text-white mb-2">Flexible Care</h3>
                <p className="text-gray-300">Online & in-person consultations available</p>
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
                <h3 className="text-lg font-semibold text-white mb-2">Comprehensive</h3>
                <p className="text-gray-300">Full spectrum dermatological conditions treated</p>
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
                <h3 className="text-lg font-semibold text-white mb-2">Patient-Centred</h3>
                <p className="text-gray-300">Personalised treatment plans for optimal results</p>
              </motion.div>
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
              <h2 className="text-3xl font-bold mb-4">Ready for Healthier, Radiant Skin?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert dermatology team and discover how 
                CosmeDerm can enhance your natural beauty with professional care.
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
      </div>
    </>
  );
};

export default CosmeDerm;