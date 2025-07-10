import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram, Users, Award, Calendar, MapPin, Phone, Mail, ChevronDown, ChevronUp, Play } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const ChinFiller = () => {
  const seoData = generateSEOMetadata(
    "Chin Filler London | From £350 | Dr. Ahmed Haq | Harley Street",
    "Professional chin filler treatments in London's Harley Street. Transform from a weak chin to a well-defined profile. Expert chin augmentation from £350.",
    "/chin-filler"
  );

  const bookingUrl = "https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29";

  // Before/after images for chin filler
  const beforeAfterImages = [
    {
      src: "/lovable-uploads/8f741338-3fd5-4feb-9d34-270856fb99c5.png",
      alt: "Chin filler before and after London Cosmedocs Harley Street profile enhancement jawline definition",
      caption: "Dramatic chin enhancement showing improved profile balance and facial harmony"
    },
    {
      src: "/lovable-uploads/16fa7311-00af-4ea7-b353-73f981f6d87c.png",
      alt: "Chin filler London profile transformation Harley Street Cosmedocs weak chin correction",
      caption: "Profile transformation with enhanced chin projection and jawline definition"
    },
    {
      src: "/lovable-uploads/717753b3-1c9d-43bd-bdc1-ca245fc3c284.png",
      alt: "Chin augmentation filler London results Cosmedocs Dr Ahmed Haq liquid mentoplasty",
      caption: "Liquid mentoplasty results showing natural-looking chin enhancement"
    },
    {
      src: "/lovable-uploads/d5cec131-9f61-4b49-9dba-8658eda2eddf.png",
      alt: "Chin filler treatment progression London Harley Street immediate results",
      caption: "Treatment progression showing immediate chin enhancement results"
    },
    {
      src: "/lovable-uploads/a9ac5188-66f2-420b-9b39-3449dc02ff7b.png",
      alt: "Chin and jawline filler combination London Cosmedocs 3D jawline enhancement",
      caption: "Combined chin and jawline enhancement for complete lower face transformation"
    },
    {
      src: "/lovable-uploads/97c76ea5-245e-43c2-8b89-533f365f4969.png",
      alt: "Chin filler facial harmony London profile balance weak chin correction Harley Street",
      caption: "Enhanced facial harmony achieved through strategic chin augmentation"
    }
  ];

  const leftColumnFaqs = [
    {
      question: "How much does chin filler cost in London?",
      answer: "At Cosmedocs Harley Street, chin filler treatments start from £350 for the first syringe (1.2ml). The cost varies depending on the amount of filler needed to achieve your desired results."
    },
    {
      question: "How long do chin filler results last?",
      answer: "Chin filler results typically last 12-18 months, sometimes longer. The longevity depends on the type and amount of filler used, your metabolism, and individual factors."
    },
    {
      question: "Is chin filler safe?",
      answer: "Yes, when performed by qualified practitioners like Dr. Ahmed Haq at our Harley Street clinic, chin fillers are very safe. We use premium hyaluronic acid fillers and follow strict safety protocols."
    },
    {
      question: "What's the difference between chin filler and chin surgery?",
      answer: "Chin filler is non-surgical, temporary, and involves minimal downtime. Surgical chin augmentation is permanent but carries surgical risks, longer recovery time, and higher costs."
    },
    {
      question: "Can chin filler help with a double chin?",
      answer: "Yes, chin fillers can help minimize the appearance of a double chin by enhancing the chin projection and creating better definition between the chin and neck area."
    }
  ];

  const rightColumnFaqs = [
    {
      question: "How painful is chin filler treatment?",
      answer: "Most patients find chin filler treatment comfortable. We use topical numbing cream and the fillers contain lidocaine for additional comfort during the procedure."
    },
    {
      question: "What happens during a chin filler consultation?",
      answer: "During your consultation, Dr. Ahmed Haq will assess your facial proportions, discuss your goals, and create a personalized treatment plan to achieve optimal facial harmony."
    },
    {
      question: "Can I combine chin filler with other treatments?",
      answer: "Absolutely! Chin filler works beautifully with jawline filler, cheek filler, and other facial treatments. The 3D jawline makeover is one of our most popular combination treatments."
    },
    {
      question: "How quickly will I see chin filler results?",
      answer: "Results are visible immediately after treatment, with final results apparent within 2 weeks once any minor swelling subsides."
    },
    {
      question: "Can chin filler results be reversed?",
      answer: "Yes, hyaluronic acid chin fillers can be dissolved with hyaluronidase if needed, providing flexibility that surgical options cannot offer."
    }
  ];

  const treatmentDetails = [
    { icon: "💉", title: "Anaesthetic", detail: "Local / Topical" },
    { icon: "⏰", title: "Procedure Time", detail: "30 minutes" }, 
    { icon: "📅", title: "Results Duration", detail: "12+ months" },
    { icon: "⚕️", title: "Recovery", detail: "24-48 hours" },
    { icon: "🏢", title: "Back to Work", detail: "Immediate" },
    { icon: "⚠️", title: "Risks", detail: "Minimal - swelling, bruising" }
  ];

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:image" content={seoData.image} />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.image} />
        
        {/* Local SEO */}
        <meta name="geo.region" content="GB-LND" />
        <meta name="geo.placename" content="London" />
        <meta name="geo.position" content="51.5074;-0.1278" />
        <meta name="ICBM" content="51.5074, -0.1278" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Cosmedocs - Chin Filler Treatment",
            "description": "Professional chin filler treatments for facial enhancement and profile correction",
            "url": "https://cosmedocs.com/chin-filler",
            "telephone": "0333 0551 503",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "10 Harley Street",
              "addressLocality": "London",
              "postalCode": "W1G 9PF",
              "addressCountry": "GB"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 51.5074,
              "longitude": -0.1278
            },
            "medicalSpecialty": "Cosmetic Surgery",
            "priceRange": "£350+"
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white min-h-screen">
        {/* Hero Section - Apple Style */}
        <section className="relative min-h-screen flex items-center">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/lovable-uploads/ac269c72-30b5-4182-a990-857547c55c4f.png')"
            }}
          />
          {/* Apple-style overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent" />
          
          <div className="page-container relative z-10">
            <div className="max-w-6xl">
              <motion.div 
                className="text-left"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <motion.h1 
                  className="text-6xl md:text-7xl lg:text-8xl font-light mb-12 leading-[0.9] tracking-tight"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <span className="block text-white/95 font-thin">Chin</span>
                  <span className="block text-white font-light">Enhancement</span>
                  <span className="block text-white/85 text-5xl md:text-6xl italic font-extralight mt-2">Projected</span>
                </motion.h1>
                
                <motion.div 
                  className="mb-16 space-y-6 max-w-3xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <p className="text-2xl md:text-3xl text-white/90 font-extralight leading-relaxed">
                    Transform from a weak chin to well-defined profile with liquid mentoplasty using advanced dermal filler techniques
                  </p>
                  <div className="flex items-center space-x-8 text-xl">
                    <div className="bg-white/15 backdrop-blur-lg rounded-full px-8 py-4 border border-white/20">
                      <span className="text-white font-light">From £350</span>
                    </div>
                    <div className="text-white/80">
                      <span className="font-extralight">by </span> 
                      <span className="font-light">Dr. Ahmed Haq</span>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <a 
                    href={bookingUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group bg-white/95 backdrop-blur-sm text-black hover:bg-white rounded-full px-12 py-5 inline-flex items-center justify-center text-xl font-light transition-all duration-500 border border-white/20 hover:scale-[1.02] hover:shadow-2xl"
                  >
                    Book Consultation
                  </a>
                  <div className="flex items-center gap-3 text-white/80 px-8">
                    <Instagram className="h-6 w-6" />
                    <a 
                      href="https://instagram.com/cosmedocs" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors font-extralight text-lg"
                    >
                      Follow our results #cosmedocs
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Treatment Details Section */}
        <section className="py-24 bg-gradient-to-b from-black to-[#0A0A0A]">
          <div className="page-container">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-thin text-white mb-6 tracking-tight">
                Treatment Overview
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {treatmentDetails.map((detail, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl mb-4">{detail.icon}</div>
                  <h3 className="text-xl font-light text-white mb-2">{detail.title}</h3>
                  <p className="text-white/70 font-light">{detail.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Before & After Gallery - Apple Style */}
        <section className="py-32 bg-[#0A0A0A]">
          <div className="page-container">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
                Transformation Gallery
              </h2>
              <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
                Real patient transformations showcasing enhanced chin projection and facial harmony
              </p>
            </motion.div>
            
            <div className="text-center">
              <BeforeAfterImageViewer 
                images={beforeAfterImages}
                triggerLabel="View All Results"
                title="Chin Filler Results"
                description="Real patient transformations by Dr. Ahmed Haq"
                className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 rounded-full px-10 py-4 inline-flex items-center justify-center text-lg font-light transition-all duration-300 border border-white/20"
              />
            </div>
          </div>
        </section>

        {/* Video Treatment Section - Apple Style */}
        <section className="py-32 bg-gradient-to-b from-[#0A0A0A] to-black">
          <div className="page-container">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
                Treatment in Action
              </h2>
              <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
                Watch our expert technique for chin augmentation using advanced dermal filler methods
              </p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto">
              <motion.div 
                className="relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mb-6 mx-auto">
                      <Play className="h-8 w-8 text-white ml-1" />
                    </div>
                    <p className="text-white/70 font-light">
                      Professional chin filler demonstration
                    </p>
                    <p className="text-white/50 text-sm mt-2 font-light">
                      Advanced liquid mentoplasty technique
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-32 bg-black">
          <div className="page-container">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
                Why Choose Chin Filler?
              </h2>
            </motion.div>
            
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="space-y-6">
                  <h3 className="text-3xl font-light text-white">Enhanced Facial Balance</h3>
                  <p className="text-lg text-white/80 font-light leading-relaxed">
                    Our aesthetics is invisible art. Chin fillers create subtle yet transformative changes that enhance your natural beauty while maintaining facial harmony.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-white/70 font-light">Immediate visible results with minimal downtime</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-white/70 font-light">Non-surgical alternative to chin implants</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-white/70 font-light">Reversible treatment with hyaluronidase</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-white/70 font-light">Long-lasting results (12-18 months)</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="space-y-6">
                  <h3 className="text-3xl font-light text-white">Expert Technique</h3>
                  <p className="text-lg text-white/80 font-light leading-relaxed">
                    Bold • Natural • Always Your Way. Dr. Ahmed Haq's expertise ensures precise placement for optimal results that enhance your unique features.
                  </p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h4 className="text-xl font-light text-white mb-4">Treatment Areas</h4>
                  <div className="space-y-3">
                    <p className="text-white/70 font-light">• Chin projection and definition</p>
                    <p className="text-white/70 font-light">• Jawline enhancement</p>
                    <p className="text-white/70 font-light">• Profile balance correction</p>
                    <p className="text-white/70 font-light">• Lower face contouring</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 bg-gradient-to-b from-black to-[#0A0A0A]">
          <div className="page-container">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
                Frequently Asked Questions
              </h2>
            </motion.div>
            
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                {leftColumnFaqs.map((faq, index) => (
                  <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
              </div>
              
              <div className="space-y-6">
                {rightColumnFaqs.map((faq, index) => (
                  <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-32 bg-[#0A0A0A]">
          <div className="page-container">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl md:text-6xl font-thin text-white mb-8 tracking-tight">
                  Ready to Transform Your Profile?
                </h2>
                <p className="text-xl text-white/70 font-light mb-12 max-w-2xl mx-auto">
                  Book your consultation at our Harley Street clinic and discover how chin filler can enhance your natural beauty
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a 
                    href={bookingUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-black hover:bg-white/90 rounded-full px-12 py-5 inline-flex items-center justify-center text-lg font-medium transition-all duration-300 hover:scale-105"
                  >
                    Book Consultation
                  </a>
                  <a 
                    href="tel:03330551503"
                    className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 rounded-full px-12 py-5 inline-flex items-center justify-center text-lg font-light transition-all duration-300 border border-white/20"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call: 0333 055 1503
                  </a>
                </div>
                
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/60">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    <span className="font-light">10 Harley Street, London W1G 9PF</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    <span className="font-light">CQC Registered Clinic</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

// FAQ Item Component
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="w-full text-left">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-light text-white pr-4">{question}</h3>
            {isOpen ? (
              <ChevronUp className="h-5 w-5 text-white/70 flex-shrink-0" />
            ) : (
              <ChevronDown className="h-5 w-5 text-white/70 flex-shrink-0" />
            )}
          </div>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="px-6 pb-6 pt-2">
          <p className="text-white/80 font-light leading-relaxed">{answer}</p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default ChinFiller;