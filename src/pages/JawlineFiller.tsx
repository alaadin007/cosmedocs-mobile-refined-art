import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram, Users, Award, Calendar, MapPin, Phone, Mail, ChevronDown, ChevronUp, Clock, Zap, Shield, RotateCcw, Briefcase, Target } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const JawlineFiller = () => {
  const seoData = generateSEOMetadata(
    "Jawline Filler London | £950 Natural HD Package | Dr. Ahmed Haq | Harley Street",
    "Expert jawline filler treatments in London's Harley Street. Dr. Ahmed Haq offers Natural HD Jawline Package from £950. Create a jaw-dropping jawline - slimmer, sleeker & sharper.",
    "/jawline-filler"
  );

  const bookingUrl = "https://med.as.me/schedule.php?appointmentType=17376873";

  // Before/after images for the viewer
  const beforeAfterImages = [
    {
      src: "/lovable-uploads/8f741338-3fd5-4feb-9d34-270856fb99c5.png",
      alt: "Jawline filler London progression results by Dr Ahmed Haq at Cosmedocs Harley Street showing gradual jaw enhancement",
      caption: "Progressive jawline transformation over 3 months showing natural enhancement"
    },
    {
      src: "/lovable-uploads/16fa7311-00af-4ea7-b353-73f981f6d87c.png",
      alt: "Jawline filler before and after profile view Harley Street London Cosmedocs treatment results",
      caption: "Dramatic profile enhancement achieving perfect jaw definition"
    },
    {
      src: "/lovable-uploads/717753b3-1c9d-43bd-bdc1-ca245fc3c284.png",
      alt: "Jawline filler immediate results London Dr Ahmed Haq Cosmedocs Harley Street dermal filler treatment",
      caption: "Immediate transformation showing sculpted jawline and enhanced definition"
    },
    {
      src: "/lovable-uploads/d5cec131-9f61-4b49-9dba-8658eda2eddf.png",
      alt: "Jawline filler treatment progression London Harley Street Cosmedocs jaw sculpting results",
      caption: "Treatment progression showing results developing over time"
    },
    {
      src: "/lovable-uploads/a9ac5188-66f2-420b-9b39-3449dc02ff7b.png",
      alt: "Jawline filler side profile comparison before after London Cosmedocs Harley Street jaw enhancement",
      caption: "Side profile showing enhanced jawline projection and masculine definition"
    },
    {
      src: "/lovable-uploads/97c76ea5-245e-43c2-8b89-533f365f4969.png",
      alt: "Jawline filler technique showing jaw sculpting correction London Harley Street Cosmedocs",
      caption: "Advanced technique demonstrating jaw contouring and facial harmony"
    }
  ];

  const leftColumnFaqs = [
    {
      question: "How much does jawline filler cost in London?",
      answer: "At Cosmedocs Harley Street, our Natural HD Jawline Package is £950. The consultation fee of £50 is included in the treatment cost if you proceed. Final costs depend on your specific requirements and desired results."
    },
    {
      question: "How long do jawline filler results last?",
      answer: "Jawline filler results typically last 15-18 months. The longevity depends on factors like your metabolism, lifestyle, and the type of dermal filler used. This is longer than most facial fillers due to the jaw area's lower muscle movement."
    },
    {
      question: "Is jawline filler safe?",
      answer: "When performed by Dr. Ahmed Haq at our Harley Street clinic, jawline filler treatments are very safe. We use premium dermal fillers and advanced injection techniques to minimize risks and achieve natural-looking results."
    },
    {
      question: "What's the recovery time for jawline filler?",
      answer: "Recovery is minimal with most patients returning to work immediately after treatment. You may experience mild swelling or redness for 24-48 hours. Full recovery typically occurs within 2-7 days with no significant downtime required."
    },
    {
      question: "Can jawline filler create a more masculine appearance?",
      answer: "Yes, jawline filler is excellent for creating a more defined, masculine jawline. The treatment can enhance jaw angles, create a sharper profile, and provide better facial balance and proportion."
    }
  ];

  const rightColumnFaqs = [
    {
      question: "How painful is jawline filler treatment?",
      answer: "Most patients experience minimal discomfort. We use local anesthetic and the dermal fillers contain lidocaine for additional comfort. The jaw area has fewer nerve endings than other facial areas, making it well-tolerated."
    },
    {
      question: "What makes a jawline attractive?",
      answer: "An attractive jawline is well-defined with clear angles, proper proportion to the face, and smooth contours. A defined jawline signifies youth and adds structure and balance to your facial features, like the perfect frame for a portrait."
    },
    {
      question: "How quickly will I see jawline filler results?",
      answer: "Results are visible immediately after treatment, with final results apparent within 2 weeks once any minor swelling subsides. The jawline will appear more defined and sculpted right away."
    },
    {
      question: "What happens during a jawline consultation at Cosmedocs?",
      answer: "Dr. Ahmed Haq will assess your facial anatomy, discuss your aesthetic goals, explain the Natural HD Jawline technique, and create a personalized treatment plan. You'll see before/after photos and understand the entire process."
    },
    {
      question: "Can jawline filler be reversed if needed?",
      answer: "Yes, hyaluronic acid fillers used in jawline treatments can be dissolved with hyaluronidase if needed. This provides flexibility and peace of mind that surgical jaw enhancement cannot offer."
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
            "name": "Cosmedocs - Jawline Filler",
            "description": "Premium jawline filler treatments in London's Harley Street",
            "url": "https://cosmedocs.com/jawline-filler",
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
            "priceRange": "£950"
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white min-h-screen">
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
                  Jawline
                  <span className="block text-purple-300">Sculpting</span>
                  <span className="block text-sm mt-4">Natural HD jawline enhancement for perfect proportions</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl">
                  <span className="text-purple-300 font-semibold">Invisible Art</span>
                  <br />
                  Transformation that speaks without saying a word
                </p>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Natural HD Package £950</p>
                  <p className="text-sm text-gray-300">Slimmer, sleeker & sharper jawline enhancement</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={bookingUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl inline-flex items-center justify-center"
                  >
                    Book Consultation
                  </a>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm">
                    View Results
                  </Button>
                </div>
              </motion.div>
              
              <div className="hidden lg:block"></div>
            </div>
          </div>
        </section>

        {/* Treatment Details Section - Apple Style */}
        <section className="py-32 bg-gradient-to-b from-black to-[#0A0A0A]">
          <div className="page-container">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
                Treatment Details
              </h2>
              <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
                Everything you need to know about our Natural HD Jawline Package
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
              {[
                { 
                  icon: Target, 
                  title: "ANAESTHETIC", 
                  detail: "Local"
                },
                { 
                  icon: Clock, 
                  title: "PROCEDURE TIME", 
                  detail: "30 mins"
                },
                { 
                  icon: Calendar, 
                  title: "RESULTS DURATION", 
                  detail: "15-18 months"
                },
                { 
                  icon: RotateCcw, 
                  title: "FULL RECOVERY", 
                  detail: "24-48 hours"
                },
                { 
                  icon: Briefcase, 
                  title: "BACK TO WORK", 
                  detail: "After Treatment"
                },
                { 
                  icon: Shield, 
                  title: "RISK & COMPLICATIONS", 
                  detail: "Swelling, Redness, Itching, Bruising"
                }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <IconComponent className="h-6 w-6 text-white/70 mx-auto mb-3" />
                    <h3 className="text-xs font-medium text-white/90 mb-2 uppercase tracking-wider">{item.title}</h3>
                    <div className="text-sm font-light text-white leading-tight">{item.detail}</div>
                  </motion.div>
                );
              })}
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
                Real patient transformations showcasing sculpted jawline enhancement
              </p>
            </motion.div>
            
            <div className="text-center">
              <BeforeAfterImageViewer 
                images={beforeAfterImages}
                triggerLabel="View All Results"
                title="Jawline Filler Results"
                description="Real patient transformations by Dr. Ahmed Haq"
                className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 rounded-full px-10 py-4 inline-flex items-center justify-center text-lg font-light transition-all duration-300 border border-white/20"
              />
            </div>
          </div>
        </section>

        {/* Jawline Signifies Youth Section - Apple Style */}
        <section className="py-32 bg-gradient-to-b from-[#0A0A0A] to-black">
          <div className="page-container">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="text-center mb-20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
                  Jawline Signifies Youth
                </h2>
                <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
                  A defined jawline is like the perfect frame for a portrait—it adds structure and balance to your face
                </p>
              </motion.div>
              
              <motion.div 
                className="grid lg:grid-cols-2 gap-16 items-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                <div className="space-y-8">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
                      The Perfect Frame
                    </h3>
                    <p className="text-lg text-white/80 font-light leading-relaxed mb-8">
                      With jawline filler treatment, you can achieve a sculpted, youthful look that enhances your natural features. 
                      Our invisible aesthetics approach ensures results that speak without saying a word - bold, natural, and always your way.
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                      <h4 className="text-xl font-light text-white mb-3">Natural Enhancement</h4>
                      <p className="text-white/70 font-light">
                        Our aesthetic medicine approach is minimal, quiet, and invisible - transformation that enhances your natural beauty.
                      </p>
                    </div>
                    
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                      <h4 className="text-xl font-light text-white mb-3">Facial Harmony</h4>
                      <p className="text-white/70 font-light">
                        A well-defined jawline creates perfect facial proportions and balance, enhancing your overall appearance.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <img 
                    src="/lovable-uploads/0cac590b-9991-4176-b5d7-541992920464.png" 
                    alt="Jawline filler natural enhancement results London Harley Street Cosmedocs Dr Ahmed Haq facial harmony"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Dr. Ahmed Haq Section - Apple Style */}
        <section className="py-32 bg-black">
          <div className="page-container">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="text-center mb-20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
                  Meet Dr. Ahmed Haq
                </h2>
                <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
                  Leading aesthetic practitioner specializing in natural jawline enhancement
                </p>
              </motion.div>
              
              <motion.div 
                className="grid lg:grid-cols-2 gap-16 items-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                <div>
                  <img 
                    src="/lovable-uploads/94868651-44b6-4cfb-b3a4-8d3629c1358b.png" 
                    alt="Dr Ahmed Haq aesthetic practitioner London Harley Street Cosmedocs jawline filler specialist"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
                      Expertise in Jawline Enhancement
                    </h3>
                    <p className="text-lg text-white/80 font-light leading-relaxed mb-8">
                      Dr. Ahmed Haq brings years of specialized experience in facial aesthetics to every jawline enhancement treatment. 
                      His approach focuses on creating natural, harmonious results that enhance your unique facial structure.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex items-center space-x-4">
                      <Award className="h-8 w-8 text-white/70" />
                      <div>
                        <div className="text-lg font-light text-white">Expert Practitioner</div>
                        <div className="text-sm text-white/60">Specialized Training</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <Users className="h-8 w-8 text-white/70" />
                      <div>
                        <div className="text-lg font-light text-white">Thousands Treated</div>
                        <div className="text-sm text-white/60">Proven Results</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-8">
                    <a 
                      href={bookingUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 rounded-full px-8 py-4 inline-flex items-center justify-center text-lg font-light transition-all duration-300 border border-white/20"
                    >
                      Consult with Dr. Haq
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Apple Style */}
        <section className="py-32 bg-gradient-to-b from-black to-[#0A0A0A]">
          <div className="page-container">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
                Everything you need to know about jawline filler treatments
              </p>
            </motion.div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Left Column */}
                <div className="space-y-6">
                  {leftColumnFaqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                  ))}
                </div>
                
                {/* Right Column */}
                <div className="space-y-6">
                  {rightColumnFaqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section - Apple Style */}
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
                Book Your Consultation
              </h2>
              <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
                Start your jawline transformation journey at our Harley Street clinic
              </p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto">
              <motion.div 
                className="grid lg:grid-cols-2 gap-16 items-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                <div className="space-y-8">
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6 text-white/70" />
                    <div>
                      <div className="text-lg font-light text-white">10 Harley Street</div>
                      <div className="text-white/60">London W1G 9PF</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-white/70" />
                    <div>
                      <div className="text-lg font-light text-white">0333 0551 503</div>
                      <div className="text-white/60">Call to book</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-white/70" />
                    <div>
                      <div className="text-lg font-light text-white">info@cosmedocs.com</div>
                      <div className="text-white/60">Email enquiries</div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center lg:text-right">
                  <a 
                    href={bookingUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-black hover:bg-white/90 rounded-full px-12 py-5 inline-flex items-center justify-center text-xl font-light transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                  >
                    Book Now - £950
                  </a>
                  <p className="mt-4 text-white/60 text-sm">
                    *Consultation fee £50 included if treatment proceeds
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="hidden">
          <h3>Jawline Filler London - Transform Your Profile</h3>
          <p>Cosmedocs offers the most advanced jawline filler treatments in London's prestigious Harley Street. Our Natural HD Jawline Package provides exceptional value at £950, delivering remarkable results that enhance your natural facial structure. Dr. Ahmed Haq, our lead aesthetic practitioner, specializes in creating sculpted, masculine jawlines that frame your face perfectly.</p>
          
          <h4>Why Choose Jawline Filler Treatment?</h4>
          <p>A well-defined jawline signifies youth and creates the perfect frame for your facial features. Our jawline enhancement treatments use premium dermal fillers to add structure, definition, and proportion to your face. The results are immediate, natural-looking, and long-lasting, typically maintaining their effect for 15-18 months.</p>
          
          <h4>The Natural HD Jawline Package</h4>
          <p>Our comprehensive Natural HD Jawline Package is designed to create a slimmer, sleeker, and sharper jawline. The treatment takes approximately 30 minutes and requires minimal downtime, allowing you to return to work immediately. Dr. Ahmed Haq uses advanced injection techniques to ensure optimal results with minimal discomfort.</p>
          
          <h4>Benefits of Jawline Filler at Cosmedocs</h4>
          <p>Choosing Cosmedocs for your jawline enhancement ensures you receive treatment from one of London's most experienced aesthetic practitioners. Our clinic in Harley Street provides a luxurious environment where safety, comfort, and exceptional results are our top priorities. The treatment enhances facial harmony, improves profile aesthetics, and boosts confidence through subtle yet transformative results.</p>
          
          <h4>Recovery and Aftercare</h4>
          <p>Recovery from jawline filler treatment is minimal, with most patients experiencing only mild swelling or redness for 24-48 hours. Full recovery typically occurs within a week, and you can resume normal activities immediately after treatment. Our team provides comprehensive aftercare guidance to ensure optimal results and patient satisfaction.</p>
        </div>
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
        <motion.div 
          className="flex justify-between items-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="text-lg font-light text-white pr-4">{question}</h3>
          {isOpen ? <ChevronUp className="h-5 w-5 text-white/70" /> : <ChevronDown className="h-5 w-5 text-white/70" />}
        </motion.div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="px-6 pb-6 pt-2">
          <p className="text-white/80 font-light leading-relaxed">{answer}</p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default JawlineFiller;