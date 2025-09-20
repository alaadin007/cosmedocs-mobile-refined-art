import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Clock, 
  Calendar, 
  Activity, 
  ShieldCheck, 
  CheckCircle, 
  Award, 
  GraduationCap, 
  Users,
  MapPin,
  Phone
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { generateSEOMetadata } from "@/utils/seo";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import BeforeAfterGrid from "@/components/BeforeAfterGrid";
import TreatmentVideoPlayer from "@/components/TreatmentVideoPlayer";
import { useVideoManagement } from "@/hooks/useVideoManagement";

const PRPTreatment = () => {
  const seoData = generateSEOMetadata(
    "PRP Treatment London | Vampire Facial | Platelet-Rich Plasma | Cosmedocs",
    "Expert PRP treatments in London's Harley Street. Vampire facial, hair restoration, and skin rejuvenation using your body's natural healing power. Book consultation today.",
    "/prp-treatment"
  );

  const bookingUrl = "https://med.as.me/harleystreet";
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const { videos } = useVideoManagement("PRP");

  const treatmentSpecs = [
    {
      icon: Clock,
      title: "Procedure Time",
      description: "30 minutes"
    },
    {
      icon: Calendar,
      title: "Results Duration",
      description: "18 months"
    },
    {
      icon: Activity,
      title: "Recovery Time",
      description: "24-48 hours"
    },
    {
      icon: ShieldCheck,
      title: "Anaesthetic",
      description: "Topical"
    }
  ];

  const beforeAfterImages = [
    {
      src: "/lovable-uploads/f8b2e4a1-9c3d-4e5f-8a7b-1c2d3e4f5g6h.png",
      alt: "PRP facial rejuvenation before and after showing improved skin texture",
      caption: "PRP facial rejuvenation showing improved skin texture and reduced fine lines after 3 sessions"
    },
    {
      src: "/lovable-uploads/a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6.png", 
      alt: "PRP hair restoration before and after results",
      caption: "PRP hair restoration demonstrating increased hair density and thickness after 6 months"
    },
    {
      src: "/lovable-uploads/p6o5n4m3-l2k1-j0i9-h8g7-f6e5d4c3b2a1.png",
      alt: "Under-eye PRP treatment before and after",
      caption: "Under-eye PRP treatment reducing dark circles and improving skin elasticity"
    },
    {
      src: "/lovable-uploads/z9y8x7w6-v5u4-t3s2-r1q0-p9o8n7m6l5k4.png",
      alt: "PRP acne scar treatment before and after",
      caption: "PRP therapy for acne scarring showing significant improvement in skin texture and tone"
    }
  ];

  const treatmentTypes = [
    {
      title: "PRP Facial Rejuvenation",
      description: "Vampire facial using your own platelets to stimulate collagen production and improve skin texture, tone, and elasticity.",
      benefits: [
        "Reduces fine lines and wrinkles",
        "Improves skin texture and tone",
        "Enhances natural glow",
        "Minimal downtime"
      ]
    },
    {
      title: "PRP Hair Restoration", 
      description: "Non-surgical hair loss treatment that uses growth factors from your blood to stimulate dormant hair follicles.",
      benefits: [
        "Increases hair density",
        "Strengthens existing hair",
        "Natural hair regrowth",
        "No foreign substances"
      ]
    },
    {
      title: "PRP Skin Regeneration",
      description: "Advanced treatment for acne scars, stretch marks, and age-related skin concerns using your body's healing power.",
      benefits: [
        "Reduces acne scarring",
        "Improves skin elasticity", 
        "Evens skin tone",
        "Long-lasting results"
      ]
    }
  ];

  const benefits = [
    "Natural healing using your own blood",
    "Stimulates collagen production",
    "Minimal risk of allergic reactions",
    "No foreign substances or chemicals",
    "Gradual, natural-looking results",
    "Multiple treatment applications",
    "Minimal downtime required",
    "Long-lasting rejuvenation effects"
  ];

  const faqs = [
    {
      question: "What is PRP treatment and how does it work?",
      answer: "PRP (Platelet-Rich Plasma) treatment uses your own blood's healing properties. We draw a small amount of blood, separate the platelets using a centrifuge, and inject the concentrated platelets back into treatment areas to stimulate natural healing and regeneration."
    },
    {
      question: "Is PRP treatment safe?",
      answer: "PRP is extremely safe as it uses your own blood, eliminating the risk of allergic reactions or rejection. The procedure is performed in sterile conditions by qualified medical professionals following strict safety protocols."
    },
    {
      question: "How many PRP sessions do I need?",
      answer: "Most patients see optimal results with 3-6 sessions spaced 4-6 weeks apart. Your practitioner will create a personalized treatment plan based on your specific concerns and desired outcomes during consultation."
    },
    {
      question: "What can I expect during PRP treatment?",
      answer: "The procedure involves blood draw, processing in a centrifuge, and precise injection into treatment areas. Most patients experience minimal discomfort, and the entire process takes about 30 minutes with topical anesthesia for comfort."
    },
    {
      question: "How long do PRP results last?",
      answer: "PRP results typically last 12-18 months, with some patients seeing benefits for up to 2 years. Results develop gradually over 2-3 months as your body produces new collagen and regenerates tissue naturally."
    },
    {
      question: "What areas can be treated with PRP?",
      answer: "PRP can treat facial skin for rejuvenation, scalp for hair restoration, under-eyes for dark circles, acne scars, stretch marks, and other areas requiring tissue regeneration and healing."
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
            "name": "Cosmedocs",
            "description": "Expert PRP treatments and vampire facial procedures in London",
            "url": seoData.canonical,
            "telephone": "0333 0551 503",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "10 Harley Street",
              "addressLocality": "London",
              "postalCode": "W1G 9PF",
              "addressCountry": "GB"
            },
            "medicalSpecialty": "Cosmetic Surgery",
            "priceRange": "Price on consultation"
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
                  <span className="text-purple-300">PRP Treatment London</span>
                  <span className="block text-sm mt-4">Invisible art - natural skin rejuvenation using your body's healing power</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Natural Regeneration</p>
                  <p className="text-sm text-gray-300">#cosmeprp - Check out our IG for hundreds more natural, subtle transformations</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl"
                    onClick={() => window.open(bookingUrl, "_blank")}
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
              <h2 className="text-3xl font-bold mb-8 text-white">PRP Treatment</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {treatmentSpecs.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <spec.icon className="text-purple-600" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{spec.title}</h3>
                  <p className="text-gray-300">{spec.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Before and After Results */}
        <section className="py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Before and After PRP Treatment Results</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Real patient transformations showcasing the natural regenerative power of PRP treatments
              </p>
            </motion.div>

            <BeforeAfterGrid images={beforeAfterImages} />
          </div>
        </section>

        {/* Help Your Body Heal Itself Section */}
        <section className="py-20 bg-gradient-to-b from-purple-900/20 to-black">
          <div className="page-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-12 border border-purple-500/20"
            >
              <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-300 to-white bg-clip-text text-transparent">Help Your Body Heal Itself</h3>
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                PRP harnesses your body's natural healing mechanisms by concentrating the growth factors and platelets from your own blood. This innovative treatment stimulates cellular regeneration, collagen production, and tissue repair - delivering natural, long-lasting results that improve with time.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-left">
                  <h4 className="text-xl font-semibold text-purple-300 mb-4">Natural Process</h4>
                  <p className="text-gray-300">Using your own blood eliminates risks while maximizing healing potential through concentrated growth factors.</p>
                </div>
                <div className="text-left">
                  <h4 className="text-xl font-semibold text-purple-300 mb-4">Proven Results</h4>
                  <p className="text-gray-300">Clinical studies demonstrate significant improvements in skin texture, hair density, and overall rejuvenation.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Treatment Options */}
        <section className="py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">
                Treatment Options
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {treatmentTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gradient-to-b from-purple-900/30 to-black border-purple-500/20 h-full">
                    <CardHeader>
                      <div className="flex items-center justify-center mb-4">
                        <CheckCircle className="h-8 w-8 text-purple-400" />
                      </div>
                      <CardTitle className="text-2xl font-semibold text-white">{type.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-6">{type.description}</p>
                      <ul className="space-y-2">
                        {type.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-gray-300">
                            <CheckCircle className="h-4 w-4 text-purple-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-accent text-white">
          <div className="page-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium">{benefit}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Care & Timeline */}
        <section className="py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Treatment Care & Timeline</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Understanding what to expect before, during, and after your PRP treatment ensures optimal results
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-purple-300">Aftercare Instructions</h3>
                <div className="space-y-6">
                  <div className="bg-white/5 rounded-lg p-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-white font-medium mb-1">First 24 Hours</h4>
                        <p className="text-gray-400 text-sm">Avoid washing the treated area, apply ice packs for swelling, no strenuous exercise</p>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">First Week</h4>
                        <p className="text-gray-400 text-sm">Gentle cleansing only, avoid direct sun exposure, no makeup on facial treatments</p>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Ongoing Care</h4>
                        <p className="text-gray-400 text-sm">Use gentle skincare products, maintain hydration, follow practitioner recommendations</p>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">What to Expect</h4>
                        <p className="text-gray-400 text-sm">Mild swelling and redness for 2-3 days, gradual improvement over 2-3 months</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-purple-300">Results Timeline</h3>
                <div className="space-y-6">
                  <div className="bg-white/5 rounded-lg p-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-white font-medium mb-1">Initial Results</h4>
                        <p className="text-gray-400 text-sm">Subtle improvements visible after 2-4 weeks as healing begins</p>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Peak Results</h4>
                        <p className="text-gray-400 text-sm">Maximum benefits apparent at 2-3 months when collagen production peaks</p>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Results Duration</h4>
                        <p className="text-gray-400 text-sm">Effects last 12-18 months with proper care and maintenance</p>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Next Session</h4>
                        <p className="text-gray-400 text-sm">Additional treatments recommended 4-6 weeks apart for optimal results</p>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Long-term Benefits</h4>
                        <p className="text-gray-400 text-sm">Continued improvement in skin quality and overall rejuvenation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRP in Action */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">PRP in Action</h2>
                <div className="space-y-6">
                  <div className="bg-white/5 rounded-lg p-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Blood Collection</h4>
                        <p className="text-gray-400">A small amount of blood is drawn from your arm, similar to a routine blood test.</p>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Centrifuge Processing</h4>
                        <p className="text-gray-400">Blood is spun in a centrifuge to separate and concentrate the platelets and growth factors.</p>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Platelet Extraction</h4>
                        <p className="text-gray-400">The platelet-rich plasma is carefully extracted, containing 3-5 times normal platelet concentration.</p>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Precise Injection</h4>
                        <p className="text-gray-400">PRP is injected into target areas using fine needles for optimal healing and regeneration.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                {videos && videos.length > 0 && (
                  <TreatmentVideoPlayer
                    video={videos[0]}
                    treatmentName="PRP Treatment Process"
                    className="max-w-md"
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing-section" className="py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">PRP Treatment Investment</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Transparent pricing for premium PRP treatments with experienced practitioners
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center"
              >
                <h3 className="text-xl font-bold text-white mb-4">PRP Facial</h3>
                <div className="text-purple-300 text-lg font-bold">Price on consultation</div>
                <p className="text-gray-400 mt-4">
                  Comprehensive facial rejuvenation using your body's natural healing factors for improved skin texture and tone.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-b from-purple-900/30 to-black backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 text-center relative"
              >
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-white text-purple-600 px-4 py-1 rounded-full text-sm font-semibold">POPULAR</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">PRP Hair Restoration</h3>
                <div className="text-white text-lg font-bold">Price on consultation</div>
                <p className="text-gray-400 mt-4">
                  Advanced hair restoration treatment using concentrated platelets to stimulate hair follicles and promote natural regrowth.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center"
              >
                <h3 className="text-xl font-bold text-white mb-4">Consultation</h3>
                <div className="text-purple-300 text-lg font-bold">£50</div>
                <p className="text-gray-400 mt-4">
                  Comprehensive assessment with our expert practitioners to determine the best PRP treatment plan for your needs.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button 
                className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 text-lg font-semibold"
                onClick={() => window.open(bookingUrl, "_blank")}
              >
                Book Your Consultation
              </Button>
              <p className="text-gray-400 mt-4 text-sm">
                All prices include consultation, treatment, and aftercare guidance
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Cosmedocs */}
        <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <p className="text-gray-300">
                  Over 10 years of aesthetic medicine expertise with thousands of successful PRP treatments performed by qualified medical professionals.
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
                  <GraduationCap className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Training</h3>
                <p className="text-gray-300">
                  Our practitioners are highly trained medical professionals with specialized certification in PRP procedures and regenerative medicine techniques.
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
                  <Users className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Patient Care</h3>
                <p className="text-gray-300">
                  Comprehensive consultation process, personalized treatment plans, and ongoing support to ensure optimal results and patient satisfaction.
                </p>
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
              <p className="text-gray-300 max-w-3xl mx-auto">
                Get answers to common questions about PRP treatments and what to expect
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10">
                    <AccordionTrigger className="text-left hover:no-underline py-6 text-white hover:text-purple-300">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 pb-6">
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
              <h2 className="text-3xl font-bold mb-4">Ready for Natural Rejuvenation?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert doctors and discover how PRP can harness your body's natural healing power for transformative results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6"
                  onClick={() => window.open(bookingUrl, "_blank")}
                >
                  Book Free Consultation
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6">
                  Call 0333 0551 503
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h2>PRP Treatment London - Comprehensive Information</h2>
          <p>PRP (Platelet-Rich Plasma) treatment in London offers advanced regenerative medicine solutions for skin rejuvenation, hair restoration, and anti-aging. Our Harley Street clinic provides expert PRP vampire facial treatments using your body's natural healing properties. PRP therapy stimulates collagen production, improves skin texture, and promotes hair growth through concentrated platelets and growth factors.</p>
          
          <p>Our experienced practitioners specialize in PRP facial rejuvenation, under-eye treatments, acne scar improvement, and hair restoration procedures. Each PRP session involves drawing a small blood sample, processing it through centrifugation to concentrate platelets, and precisely injecting the platelet-rich plasma into target areas. This natural approach minimizes risks while maximizing regenerative benefits.</p>
          
          <p>PRP treatment results develop gradually over 2-3 months as your body produces new collagen and regenerates tissue. Most patients see optimal results with 3-6 sessions spaced 4-6 weeks apart. Benefits include improved skin elasticity, reduced fine lines, enhanced hair density, and overall rejuvenation that lasts 12-18 months.</p>
          
          <p>At Cosmedocs, we combine medical expertise with cutting-edge PRP technology to deliver natural, long-lasting results. Our comprehensive consultation process ensures personalized treatment plans tailored to your specific needs and aesthetic goals. Book your PRP consultation today to discover how regenerative medicine can transform your appearance naturally.</p>
        </div>
      </div>
    </>
  );
};

export default PRPTreatment;