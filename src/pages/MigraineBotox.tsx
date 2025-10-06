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
import { Check, Clock, Calendar, Activity, Syringe, CheckCircle, Award, GraduationCap, Palette, Heart, MapPin, Star } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";

const MigraineBotox = () => {
  const seoData = generateSEOMetadata(
    "Botox for Migraines UK Cost £450 | Migraine Botox Treatment London Near Me",
    "Expert botox for migraines UK treatment. Botox injections for migraines from £450 at Harley Street, London. FDA-approved migraine relief botox. Does botox help migraines? Book consultation today.",
    "/migraine-botox"
  );

  const breadcrumbItems = [
    { label: "Treatments", path: "/treatments" },
    { label: "Botox Treatments", path: "/face-botox" }
  ];

  const beforeAfterImages = [
    { src: "/lovable-uploads/2d50a34b-eb5c-40fd-849d-79e90a7cf03c.png", alt: "Migraine botox treatment results", caption: "Migraine Botox Treatment: Significant reduction in headache frequency and intensity. Expert therapeutic muscle relaxation - transformation that speaks without saying a word." }
  ];

  const faqs = [
    {
      question: "How does botox help with migraines?",
      answer: "Botox blocks nerve signals that cause muscle contractions and pain transmission. For chronic migraines, it's injected into specific head and neck muscles to prevent headache triggers and reduce migraine frequency and severity."
    },
    {
      question: "How long do migraine botox results last?",
      answer: "Migraine botox results typically last 3-4 months. Many patients experience significant reduction in headache days and intensity. Regular treatments every 12 weeks help maintain optimal migraine prevention."
    },
    {
      question: "Is migraine botox painful?",
      answer: "Migraine botox involves multiple small injections across the head and neck. Most patients describe mild discomfort during the 15-20 minute procedure. Our doctors use fine needles and precise techniques to minimize discomfort."
    },
    {
      question: "What can I expect after migraine botox treatment?",
      answer: "You may experience mild tenderness at injection sites for 24-48 hours. Migraine relief typically begins within 2-4 weeks, with maximum benefits at 12 weeks. You can resume normal activities immediately after treatment."
    },
    {
      question: "Am I a good candidate for migraine botox?",
      answer: "Ideal candidates have chronic migraines (15+ headache days per month) that haven't responded well to other treatments. A detailed medical history and neurological assessment determine if this therapy is suitable for you."
    },
    {
      question: "How much does migraine botox cost?",
      answer: "Migraine botox at Cosmedocs costs £450 per treatment session. This therapeutic treatment requires higher doses than cosmetic botox and is administered every 12 weeks for optimal migraine prevention."
    },
    {
      question: "Can migraine botox be combined with other treatments?",
      answer: "Yes! Migraine botox can be combined with other headache prevention strategies and <Link to='/face-botox' className='text-purple-400 hover:text-purple-300 underline'>cosmetic botox treatments</Link>. Our doctors coordinate comprehensive treatment plans for both therapeutic and aesthetic benefits."
    },
    {
      question: "How many Botox shots are typically needed to treat chronic migraine headaches?",
      answer: "There are up to 31 possible injection sites in the upper face, temples, neck, and shoulders. The clinician's experience is crucial in determining which trigger points to include, thereby reducing the dose and cost. Botox works to prevent headaches and chronic migraines with different doses depending on whether the individual is experiencing an on or off phase."
    },
    {
      question: "How long does Botox for migraines take to start working?",
      answer: "Injections of Botox work from several days to two weeks however, chronic migraines do take longer to subside. While some patients do not start to see an improvement until after their second treatment 3-4 months later."
    },
    {
      question: "Who makes a good candidate for Botox headache/migraine treatment?",
      answer: "If you are someone who frequently experiences severe migraine headaches, your healthcare provider may recommend Botox injections. However, they will only administer Botox if you have 14 or fewer headache days each month. Consulting with our Botox experts can determine if Botox injections are suitable for chronic headaches."
    },
    {
      question: "How often do I need to receive Botox treatment for migraines?",
      answer: "Generally, the Botox treatment is repeated after every 4-6 months for effective results against spells of chronic migraine."
    },
    {
      question: "Why visit a cosmetic doctor for migraines?",
      answer: "Cosmetic doctors have long used Botox for medical conditions such as <Link to='/bruxism-botox' className='text-purple-400 hover:text-purple-300 underline'>bruxism (teeth clenching)</Link> and <Link to='/excessive-sweat-botox' className='text-purple-400 hover:text-purple-300 underline'>excessive sweating</Link>. Cosmedocs offers Botox injections for migraines with extensive experience. We welcome patients and provide the best care at lower costs."
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
        <meta name="keywords" content="botox for migraines uk cost, botox for migraines, migraine botox, botox injections for migraines, botox for migraines near me, botox for headaches, can botox help migraines, does botox help migraines, botox migraine headaches, migraine relief botox, botox for migraines uk, headache botox injections, botox injection sites for migraine headaches, botox shots for migraines, migraines botox treatment, botox and migraines, does botox for migraines change your face, botox for migraines side effects, how does botox help migraines, botox for migraines where is it injected" />
        <meta name="geo.region" content="GB-LND" />
        <meta name="geo.placename" content="London" />
        <meta name="geo.position" content="51.519526;-0.146061" />
        <meta name="ICBM" content="51.519526, -0.146061" />
        <meta name="author" content="Dr. Raj Thethi, Cosmetic Medicine Specialist" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["MedicalBusiness", "MedicalClinic"],
            "name": "Cosmedocs - Migraine Botox Treatment London",
            "description": "Expert botox for migraines UK treatment. Botox injections for migraines from £450. FDA-approved migraine relief botox at Harley Street, London.",
            "url": seoData.canonical,
            "telephone": "0333 0551 503",
            "priceRange": "££",
            "image": "https://www.cosmedocs.co.uk/lovable-uploads/2d50a34b-eb5c-40fd-849d-79e90a7cf03c.png",
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
              "latitude": "51.519526",
              "longitude": "-0.146061"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "London"
              },
              {
                "@type": "Place",
                "name": "Marylebone"
              },
              {
                "@type": "Place",
                "name": "Westminster"
              },
              {
                "@type": "Place",
                "name": "Mayfair"
              },
              {
                "@type": "Place",
                "name": "Fitzrovia"
              }
            ],
            "openingHours": "Mo-Fr 09:00-18:00, Sa 10:00-16:00",
            "medicalSpecialty": ["Cosmetic Medicine", "Pain Management", "Neurology"],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "847",
              "bestRating": "5",
              "worstRating": "1"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "Botox for Migraines Treatment",
            "description": "FDA-approved botox injections for migraines providing chronic headache relief. Professional migraine botox treatment at Harley Street, London.",
            "procedureType": "Therapeutic Botox Injection",
            "bodyLocation": ["Head", "Neck", "Forehead", "Temples", "Shoulders"],
            "followup": "Treatment recommended every 12 weeks for optimal migraine prevention",
            "preparation": "Medical consultation and neurological assessment required",
            "howPerformed": "Precise botox injections for migraines administered across up to 31 injection sites using FDA-approved protocol for chronic migraine headaches",
            "procedureDuration": "PT15M",
            "medicationUsed": {
              "@type": "Drug",
              "name": "Botulinum Toxin Type A (Botox)",
              "isProprietary": true
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.cosmedocs.co.uk/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Treatments",
                "item": "https://www.cosmedocs.co.uk/treatments"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Botox Treatments",
                "item": "https://www.cosmedocs.co.uk/face-botox"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Botox for Migraines",
                "item": "https://www.cosmedocs.co.uk/migraine-botox"
              }
            ]
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
                "text": faq.answer.replace(/<[^>]*>/g, '')
              }
            }))
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
                  <BreadcrumbPage>Botox for Migraines</BreadcrumbPage>
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
                <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-white">
                  <span className="text-purple-300">Botox for Migraines London</span>
                  <span className="block text-sm mt-4">Invisible art - migraine relief botox that speaks without words</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Expert Botox Injections for Migraines Near Me</p>
                  <p className="text-sm text-gray-300">15-20 minutes • Botox for headaches • Results last 3-4 months</p>
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
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl"
                    onClick={() => window.open('https://med.as.me/harleystreet', '_blank')}
                  >
                    Book Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm"
                    onClick={() => {
                      const pricingSection = document.getElementById('pricing-section');
                      if (pricingSection) {
                        pricingSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
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
              <h2 className="text-3xl font-bold mb-8 text-white">Botox for Migraines UK</h2>
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
                <p className="text-gray-300">3-4 months with regular treatments</p>
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
                <p className="text-gray-300">Immediate return to activities</p>
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
                <p className="text-gray-300">Topical anaesthetic if required</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What is Migraine Botox */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">What is Migraine Botox? Can Botox Help Migraines?</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Cosmedocs has been providing botox and migraines treatment for over a decade. Although botox for headaches was initially designed for wrinkle treatment, it was discovered to be remarkably effective for migraine relief botox. Does botox for migraines change your face? No - our invisible art approach provides migraine headache relief while maintaining completely natural expressions. Botox shots for migraines are administered at precise botox injection sites for migraine headaches.{' '}
                <a href="https://www.nhs.uk/conditions/botulinum-toxin/" target="_blank" rel="nofollow noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">
                  Learn more about botulinum toxin from the NHS
                </a>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 max-w-4xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-white text-2xl text-center">Understanding Migraines</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-lg leading-relaxed text-center mb-6">
                    Migraines are not just ordinary headaches. They are complex neurological events characterized by intense, debilitating headaches, often accompanied by nausea, vomiting, and sensitivity to light and sound.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed text-center mb-6">
                    People with chronic migraines experience 15 or more headache days per month, with migraines occurring on at least eight days.
                  </p>
                  <div className="bg-purple-900/50 rounded-lg p-6 max-w-2xl mx-auto">
                    <p className="text-purple-200 font-semibold text-center">
                      Did you know that migraine is the 3rd most common illness globally and the 6th most crippling problem for many people worldwide? Moreover, over 190,000 migraine attacks are routinely experienced in England alone.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-8 max-w-2xl mx-auto">
                <h4 className="text-white text-xl font-bold mb-4">Key Treatment Areas</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-purple-300 font-medium">Forehead Muscles</div>
                  <div className="text-purple-300 font-medium">Temple Areas</div>
                  <div className="text-purple-300 font-medium">Neck Muscles</div>
                  <div className="text-purple-300 font-medium">Shoulder Muscles</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Botox for Migraine — How Does Botox Help Migraines?</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-8">
                Understanding botox and migraines and where injected: Our expert doctors use precise headache botox injections at strategic botox injection sites for migraine headaches to prevent chronic migraine attacks.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Treatment Process</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      After a detailed consultation with a headache specialist at Cosmedocs for your migraine headaches, begin your migraine treatment. The doctor uses a very fine needle to inject botulinum toxin into the target muscles under your skin in multiple "trigger points" such as:
                    </p>
                    <ul className="space-y-3 text-gray-300 mb-6">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span>Face</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span>Forehead</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span>Temples</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span>Neck</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span>Back of the head</span>
                      </li>
                    </ul>
                    <p className="text-purple-300 font-medium">
                      Following the botox treatment you may continue normal daily activities.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Potential Side Effects</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      After receiving Botox, it causes minimal to no pain for most people. Medical experts consider it a safe treatment. However, your Botox for migraine treatment may have some slight side effects, such as:
                    </p>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Bruising, redness, or swelling around the injection sites</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Dryness in mouth</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Fatigue or tiredness</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Temporary muscle weakness</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Tension or stiffness in the neck</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Migraine Triggers */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Triggers for Migraines</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-8">
                It is important to understand that migraines can have various causes. For expert guidance on migraine triggers and management,{' '}
                <a href="https://migrainetrust.org/live-with-migraine/treatments/botox/" target="_blank" rel="nofollow noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">
                  visit The Migraine Trust
                </a>. Some of the key factors include:
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                "Fatigue",
                "Stress and bright sunlight", 
                "Changes in sleep patterns or diet",
                "Hormones",
                "Oral contraceptives",
                "Strong odours",
                "Nitrates in certain foods or alcohol"
              ].map((trigger, index) => (
                <motion.div
                  key={trigger}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg p-6 border border-purple-500/30"
                >
                  <p className="text-white font-medium text-center">{trigger}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How Botox Works */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 text-white">How Do Botox Help Migraines? Scientific Evidence</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-8">
                Research shows botox migraine treatment blocks pain signals effectively. Here's where botox for migraines is injected and how it provides relief from chronic migraine headaches.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl flex items-center justify-center gap-3">
                      <Heart className="text-purple-400" size={28} />
                      FDA-Approved Mechanism
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-8 pb-8">
                    <p className="text-gray-300 text-lg leading-relaxed mb-6 text-center">
                      Botox for migraines works by blocking the release of specific chemicals involved in transmitting pain. When botox injections for migraines are administered into targeted muscles, the medication enters nerve endings and prevents the release of neurotransmitters that carry pain signals to the brain. This is how botox helps migraines at the neurological level.
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed mb-8 text-center">
                      This creates a protective barrier against migraine triggers, effectively stopping the pain cascade before it begins. Does botox help migraine headaches? Absolutely - clinical trials show botox migraine treatment is particularly effective for chronic migraine sufferers who experience frequent, debilitating episodes. Many patients ask "can botox help with migraines" - the FDA approval confirms it can. For comprehensive clinical guidelines, see{' '}
                      <a href="https://www.nice.org.uk/guidance/ta260" target="_blank" rel="nofollow noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">
                        NICE guidance on botulinum toxin for chronic migraine
                      </a>.
                    </p>
                    <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-lg p-6 border border-purple-500/30 max-w-3xl mx-auto">
                      <div className="flex items-start gap-3">
                        <GraduationCap className="text-purple-400 mt-1" size={24} />
                        <div>
                          <p className="text-purple-200 font-medium mb-2">Johns Hopkins Medicine</p>
                          <p className="text-gray-300 italic leading-relaxed">
                            "When botulinum toxin is injected into the muscles of the face, neck, and head, the medication relaxes them. Botox for migraine affects the nerves by blocking neurotransmission or pain signals between the brain and nerves."
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Types of Headaches */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Different Types of Headaches / Migraine</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Aura Migraine or Complicated Migraine</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      During a migraine, sensory and visual problems can occur, known as aura. These problems include:
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Difficulty speaking</li>
                      <li>• Seeing black spots and zigzags</li>
                      <li>• Experiencing tingling numbness on one side of the body</li>
                    </ul>
                    <p className="text-purple-300 mt-4 font-medium">
                      Aura typically starts right before or during a migraine and lasts 10 to 30 minutes.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Aura-free Migraine or Common Migraine</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Pulsating pain on one side of the head characterizes a headache without an aura. Most patients report symptoms such as:
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Sensitivity to light</li>
                      <li>• Sound sensitivity</li>
                      <li>• Pain that becomes worse with strenuous activity</li>
                      <li>• Vomiting or nauseous feeling</li>
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
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Chronic Migraine</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      If you have a headache for more than 15 days in a row over several weeks, it may indicate chronic migraine. Although the intensity of the headache and symptoms may vary, chronic migraines usually follow a pattern.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Cluster Headaches</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      Cluster headaches cause excruciating burning and pounding pain on the sides of the head then above the eyes and behind the ears, making them one of the most painful types of headaches.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
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
              <h2 className="text-3xl font-bold mb-6 text-white">Botox for Migraines UK Cost - Affordable Pricing</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Transparent botox for migraines UK cost from £450. Competitive pricing for migraines botox treatment at our Harley Street clinic in London. Get personalised quote for botox for migraines near me.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full border-2 border-purple-400">
                  <CardHeader className="text-center">
                    <CardTitle className="text-white text-xl">Botox for Migraines Treatment</CardTitle>
                    <div className="text-2xl font-bold text-purple-300">From £450</div>
                    <div className="text-sm text-purple-400">Botox for Migraines UK Cost</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Up to 31 injection points</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Head & neck areas</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">FDA-approved protocol</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Customized treatment plan</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Follow-up care included</span>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Button 
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full"
                        onClick={() => window.open('tel:0333 0551 503', '_self')}
                      >
                        Call 0333 0551 503
                      </Button>
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
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader className="text-center">
                    <CardTitle className="text-white text-xl">Expert Consultation</CardTitle>
                    <div className="text-2xl font-bold text-purple-300">£50</div>
                    <div className="text-sm text-purple-400">Initial Assessment</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Detailed medical history</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Headache pattern analysis</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Treatment suitability assessment</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Personalized treatment plan</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">No obligation quote</span>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Button 
                        className="w-full bg-white text-black hover:bg-gray-200 rounded-full"
                        onClick={() => window.open('https://med.as.me/harleystreet', '_blank')}
                      >
                        Book Consultation
                      </Button>
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
              <h2 className="text-3xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Common questions about migraine botox treatments answered by our expert doctors.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 rounded-lg px-6">
                    <AccordionTrigger className="text-white hover:text-purple-300 text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
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
              <h2 className="text-3xl font-bold mb-4">Ready to Find Migraine Relief?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert cosmetic doctors and discover how therapeutic botox 
                can transform your quality of life with effective migraine prevention.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6"
                  onClick={() => window.open('https://med.as.me/harleystreet', '_blank')}
                >
                  Book Free Consultation
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6"
                  onClick={() => window.open('tel:0333 0551 503', '_self')}
                >
                  Call 0333 0551 503
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Medical Review Banner */}
        <div className="bg-purple-900/20 border-t border-purple-500/30 py-6">
          <div className="page-container text-center">
            <p className="text-gray-300 text-sm">
              <span className="font-semibold text-purple-300">Medically Reviewed by:</span> Dr. Raj Thethi, GMC Registered Cosmetic Medicine Specialist
            </p>
            <p className="text-gray-400 text-xs mt-1">Last updated: {new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}</p>
          </div>
        </div>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h3>Botox for Migraines UK: Comprehensive Treatment Guide Near Me</h3>
          <p>Searching for "botox for migraines near me"? Cosmedocs offers expert botox for migraines UK treatment in London's prestigious Harley Street. Our botox injections for migraines provide proven chronic headache relief using FDA-approved therapeutic botox protocols. Understanding the botox for migraines UK cost is important - we offer transparent pricing from £450 per session. Does botox help migraines? Clinical evidence confirms that botox migraine treatment significantly reduces headache frequency and severity for chronic migraine sufferers. Our experienced cosmetic doctors specialize in migraine relief botox, serving patients across Marylebone, Westminster, Mayfair, and Fitzrovia.</p>
          
          <h4>How Does Botox Help Migraines? Understanding Botox and Migraines Treatment</h4>
          <p>Many patients ask "can botox help migraines" and "how do botox help migraines work?" The answer lies in the science of botox for headaches. Botox migraine headaches treatment works by blocking neurotransmitters that carry pain signals from your brain, preventing the activation of pain networks. When considering botox for migraines where is it injected, our doctors target specific botox injection sites for migraine headaches across the forehead, temples, neck, and shoulder muscles. These headache botox injections are administered at up to 31 precise points following FDA-approved protocols. Does botox for migraines change your face? No - unlike cosmetic botox, botox shots for migraines are strategically placed to prevent migraines without affecting your natural facial expressions. This is why migraines botox treatment has become the gold standard for chronic migraine prevention in the UK.</p>
          
          <h4>Botox for Migraines Side Effects and Safety Considerations</h4>
          <p>Understanding botox for migraines side effects is crucial before treatment. While botox and migraine headaches treatment is FDA-approved and generally well-tolerated, some patients experience mild side effects. Common botox for migraines side effects include temporary injection site tenderness, mild bruising, or slight muscle weakness near treatment areas. Long-term side effects of botox for migraines are rare when administered by qualified practitioners. Our Harley Street clinic follows strict safety protocols for all botox injections for migraines. Patients often ask about the long-term side effects of botox for migraines - research shows the treatment maintains an excellent safety profile with regular use. Does botox help migraine headaches without significant risks? Yes, when administered by experienced practitioners who understand botox and migraines and where injected for optimal therapeutic benefit.</p>
          
          <h4>Botox for Migraines UK Cost: Transparent Pricing in London</h4>
          <p>The botox for migraines UK cost varies by clinic, but transparency matters. At Cosmedocs, botox for migraines UK cost starts from £450 per treatment session. This botox for migraines UK cost includes comprehensive consultation, precise botox injection sites for migraine headaches administration, and follow-up care. When comparing botox for migraines UK cost across London clinics, consider the expertise of practitioners and treatment quality. Our competitive botox for migraines UK cost reflects our commitment to making migraine relief botox accessible to chronic headache sufferers. The treatment represents excellent value considering how botox helps migraines - many patients experience 50-70% reduction in headache days. Can botox help with migraines cost-effectively? Absolutely - when you calculate the reduced need for emergency medications and improved quality of life, botox migraine treatment offers significant long-term value.</p>
          
          <h4>Finding Botox for Migraines Near Me: London's Premier Clinic</h4>
          <p>Searching "botox for migraines near me" in London? Cosmedocs is conveniently located on Harley Street, easily accessible from Marylebone, Westminster, Mayfair, Fitzrovia, and surrounding areas. Our central London location makes us the ideal choice for patients seeking botox for migraines near me with convenient transport links. For those researching "botox for migraines near me," we offer flexible appointment times and weekend availability. Our clinic specializes in headache botox injections and migraines botox treatment, with doctors who have performed thousands of successful botox shots for migraines procedures. When you search "botox for migraines near me," choose a clinic with proven expertise in botox and migraines treatment. Our team understands precisely where botox for migraines is injected for maximum therapeutic benefit.</p>
          
          <h4>Does Botox Help Migraines? Clinical Evidence and Patient Outcomes</h4>
          <p>The question "does botox help migraines" has been extensively studied. Clinical trials confirm that botox migraine treatment reduces chronic migraine attacks by an average of 8-9 days per month. Does botox help migraine headaches long-term? Research shows sustained benefits with regular treatments every 12 weeks. Can botox help migraines when other treatments fail? Many patients find relief with botox for migraines after unsuccessful trials of preventive medications. How does botox help migraines at the molecular level? The botulinum toxin in botox for headaches blocks the release of pain-transmitting neurotransmitters. Understanding how do botox help migraines helps patients make informed decisions about migraine relief botox treatment. The evidence clearly answers "can botox help with migraines" - yes, for chronic migraine sufferers meeting FDA criteria.</p>
          
          <h4>Botox Injection Sites for Migraine Headaches: Precision Treatment Protocol</h4>
          <p>Understanding botox injection sites for migraine headaches is essential for effective treatment. Our doctors administer headache botox injections across seven key muscle areas using the FDA-approved protocol. These botox injection sites for migraine headaches include the procerus muscle (between eyebrows), corrugator muscles (above eyebrows), frontalis muscle (forehead), temporalis muscles (temples), occipitalis muscles (back of head), cervical paraspinal muscles (neck), and trapezius muscles (shoulders). Each botox injection site for migraine headaches receives precise doses based on your specific headache pattern. When patients ask "botox and migraines and where injected," we provide detailed explanations of all botox injection sites for migraine headaches. This comprehensive approach to headache botox injections ensures optimal coverage of potential trigger points, maximizing the effectiveness of migraine relief botox.</p>
          
          <h4>Botox Shots for Migraines: What to Expect During Treatment</h4>
          <p>Botox shots for migraines involve a series of small injections administered during a 15-20 minute appointment. Our doctors use ultra-fine needles for botox shots for migraines to minimize discomfort. The botox shots for migraines procedure doesn't require anaesthesia, though topical numbing can be applied if preferred. During your botox shots for migraines session, you'll receive injections at predetermined botox injection sites for migraine headaches. Most patients tolerate botox shots for migraines well, describing only mild pinprick sensations. After botox shots for migraines, you can immediately return to normal activities. The botox shots for migraines take effect gradually over 2-4 weeks, with peak benefits around 12 weeks. Regular botox shots for migraines every three months maintain optimal migraine prevention.</p>
          
          <h4>Botox Migraine Headaches Treatment: Serving London Communities</h4>
          <p>Our botox migraine headaches treatment serves patients throughout London and surrounding areas. Located in Marylebone's medical district, we're easily accessible from Westminster, Mayfair, Fitzrovia, Camden, Islington, Kensington, Chelsea, and beyond. The botox migraine headaches treatment protocol we follow is recognized globally as the gold standard for chronic migraine prevention. Our expertise in botox migraine headaches treatment extends beyond just injections - we provide comprehensive headache management including trigger identification, lifestyle modifications, and coordinated care with neurologists when needed. Patients choose our botox migraine headaches treatment for the combination of medical expertise, central location, and commitment to invisible art aesthetics that ensure natural-looking results alongside therapeutic benefits.</p>
        </div>
      </div>
    </>
  );
};

export default MigraineBotox;