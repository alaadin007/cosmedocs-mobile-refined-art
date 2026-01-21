import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateSEOMetadata } from '@/utils/seo';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Star, Award, Users, ArrowRight, Calendar, Syringe, Heart, Shield, MapPin } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from 'react-router-dom';
import ClientReviews from '@/components/ClientReviews';

const DermalFillers = () => {
  const seoData = generateSEOMetadata(
    "Dermal Fillers London | Doctor-Led Treatment | Harley Street",
    "Expert dermal filler treatments by GMC-registered doctors on Harley Street. Natural-looking facial enhancement with premium hyaluronic acid. Book your consultation.",
    "/dermal-fillers"
  );

  const beforeAfterImages = [
    {
      src: "/lovable-uploads/64ee3f9e-7616-464d-962f-0a5ba656a82c.png",
      alt: "Dermal filler treatment result - front view"
    },
    {
      src: "/lovable-uploads/7d9d621d-c4ee-4c23-82fb-56ee04ef333f.png",
      alt: "Dermal filler treatment result - profile"
    },
    {
      src: "/lovable-uploads/a4df5f90-dda5-48a2-9bd2-19728aa1a275.png",
      alt: "Dermal filler treatment result - facial contouring"
    }
  ];

  const faqItems = [
    {
      question: "Are dermal fillers safe?",
      answer: "Yes, when administered by qualified medical professionals. At CosmeDocs, all treatments are performed by GMC-registered doctors using FDA-approved, premium hyaluronic acid fillers. These are biocompatible and can be dissolved with hyaluronidase if needed, providing an additional safety measure."
    },
    {
      question: "Who is suitable for dermal filler treatment?",
      answer: "Most healthy adults over 18 are suitable candidates. During your consultation, our doctors assess your medical history, skin condition, facial anatomy, and aesthetic goals to determine suitability. Dermal fillers may not be appropriate during pregnancy, breastfeeding, or with certain autoimmune conditions."
    },
    {
      question: "What happens during a consultation?",
      answer: "Your consultation includes a thorough facial assessment, discussion of your concerns and goals, medical history review, and a personalised treatment recommendation. Our doctors may advise a combination approach or suggest alternative treatments if more appropriate. There is no pressure to proceed."
    },
    {
      question: "Can dermal fillers be combined with other treatments?",
      answer: "Yes, many patients benefit from combining dermal fillers with anti-wrinkle injections. The two treatments work synergistically — fillers restore volume and structure while anti-wrinkle injections address dynamic expression lines. Your doctor will advise on the best approach during consultation."
    },
    {
      question: "Who performs treatments at CosmeDocs?",
      answer: "All dermal filler treatments at CosmeDocs are performed by GMC-registered doctors with extensive training in facial anatomy and injectable techniques. Our practitioners are Harley Street Institute trainers with over 17 years of experience and more than 2 million treatments performed."
    }
  ];

  const treatmentAreas = [
    { title: "Lip Fillers", description: "Volume, shape, and definition", link: "/lip-fillers" },
    { title: "Cheek Filler", description: "Restore mid-face volume", link: "/cheek-filler" },
    { title: "Jawline Filler", description: "Definition and structure", link: "/jawline-filler" },
    { title: "Chin Filler", description: "Balance and projection", link: "/chin-filler" },
    { title: "Under Eye Filler", description: "Reduce hollowing", link: "/tear-trough-filler" },
    { title: "Nose Filler", description: "Non-surgical reshaping", link: "/non-surgical-nose-job" },
    { title: "Temple Filler", description: "Restore volume", link: "/temple-filler-london" }
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
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "CosmeDocs",
            "description": "Doctor-led dermal filler treatments on Harley Street, London",
            "url": "https://cosmedocs.co.uk/dermal-fillers",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "10 Harley Street",
              "addressLocality": "London",
              "postalCode": "W1G 9PF",
              "addressCountry": "GB"
            },
            "medicalSpecialty": "Aesthetic Medicine"
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="page-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                Dermal Fillers in London
              </h1>
              <p className="text-xl md:text-2xl text-[#C9A050] font-medium mb-6">
                Doctor-led facial enhancement on Harley Street
              </p>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed mb-8 max-w-3xl">
                <p>
                  At CosmeDocs, dermal fillers are used with restraint, precision, and a deep understanding of facial anatomy. From our Harley Street clinic, GMC-registered doctors deliver subtle, natural-looking enhancement designed to restore balance — not alter identity.
                </p>
                <p>
                  Our approach to dermal fillers is grounded in medical expertise and aesthetic judgement. We focus on facial harmony, structural support, and long-term outcomes rather than isolated injections or short-term trends. The result is enhancement that looks effortless, refined, and unmistakably you.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#C9A050] text-black hover:bg-[#B8924A] rounded-full px-8 py-6 text-lg font-semibold" asChild>
                  <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">Book Consultation</a>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg"
                  asChild
                >
                  <Link to="/treatments">View All Treatments</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Treatment Summary Bar */}
        <section className="py-12 bg-accent border-y border-white/10">
          <div className="page-container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-[#C9A050]/20 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-3">
                  <Clock className="text-[#C9A050]" size={22} />
                </div>
                <p className="text-sm font-medium text-white">30-60 minutes</p>
                <p className="text-xs text-gray-400">Treatment time</p>
              </div>
              <div className="text-center">
                <div className="bg-[#C9A050]/20 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-3">
                  <Calendar className="text-[#C9A050]" size={22} />
                </div>
                <p className="text-sm font-medium text-white">12-18 months</p>
                <p className="text-xs text-gray-400">Typical duration</p>
              </div>
              <div className="text-center">
                <div className="bg-[#C9A050]/20 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-3">
                  <Syringe className="text-[#C9A050]" size={22} />
                </div>
                <p className="text-sm font-medium text-white">Hyaluronic acid</p>
                <p className="text-xs text-gray-400">Premium products</p>
              </div>
              <div className="text-center">
                <div className="bg-[#C9A050]/20 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-3">
                  <Shield className="text-[#C9A050]" size={22} />
                </div>
                <p className="text-sm font-medium text-white">Doctor-led</p>
                <p className="text-xs text-gray-400">GMC-registered</p>
              </div>
            </div>
          </div>
        </section>

        {/* What Are Dermal Fillers */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">What Are Dermal Fillers?</h2>
                <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
                  <p>
                    Dermal fillers are injectable treatments most commonly made from hyaluronic acid — a substance naturally found in the skin that helps retain hydration, volume, and elasticity.
                  </p>
                  <p>
                    When used correctly, dermal fillers can:
                  </p>
                  <ul className="space-y-3 ml-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-[#C9A050] shrink-0 mt-1" size={20} />
                      <span>Restore age-related volume loss</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-[#C9A050] shrink-0 mt-1" size={20} />
                      <span>Improve facial proportions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-[#C9A050] shrink-0 mt-1" size={20} />
                      <span>Support sagging tissues</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-[#C9A050] shrink-0 mt-1" size={20} />
                      <span>Soften lines and folds</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-[#C9A050] shrink-0 mt-1" size={20} />
                      <span>Enhance natural contours</span>
                    </li>
                  </ul>
                  <p>
                    At CosmeDocs, dermal fillers are never used to "fill lines blindly". Instead, they are placed strategically to support the face as a whole, respecting individual anatomy and natural expression.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20 bg-gray-900/30">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">A Full-Face Approach to Dermal Fillers</h2>
                <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
                  <p>
                    Facial ageing does not occur in isolation. Lines, folds, and hollowing are often the result of structural changes elsewhere in the face.
                  </p>
                  <p>
                    That's why our doctors adopt a full-face approach to dermal fillers. Rather than treating a single line or area in isolation, we assess how different regions interact — and how restoring support in one area can naturally improve another.
                  </p>
                  <div className="bg-black/40 border border-white/10 rounded-xl p-6 mt-8">
                    <p className="text-white font-medium mb-4">This approach:</p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-[#C9A050] shrink-0 mt-1" size={18} />
                        <span>Reduces the risk of overfilling</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-[#C9A050] shrink-0 mt-1" size={18} />
                        <span>Produces more natural results</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-[#C9A050] shrink-0 mt-1" size={18} />
                        <span>Preserves facial movement and expression</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-[#C9A050] shrink-0 mt-1" size={18} />
                        <span>Delivers longer-lasting, balanced outcomes</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-[#C9A050] font-medium italic mt-6">
                    Our goal is not obvious correction — it's subtle restoration.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Dermal Fillers vs Anti-Wrinkle */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Dermal Fillers vs Anti-Wrinkle Injections</h2>
                <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
                  <p>
                    Although both are injectable treatments, dermal fillers and anti-wrinkle injections work in very different ways.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-black/40 border border-white/10 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-white mb-4">Dermal Fillers</h3>
                      <ul className="space-y-2 text-gray-300">
                        <li>• Add volume and structural support</li>
                        <li>• Address static lines and facial sagging</li>
                        <li>• Restore contours and proportions</li>
                        <li>• Improve facial harmony</li>
                      </ul>
                    </div>
                    <div className="bg-black/40 border border-white/10 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-white mb-4">Anti-Wrinkle Injections</h3>
                      <ul className="space-y-2 text-gray-300">
                        <li>• Relax specific muscles</li>
                        <li>• Reduce dynamic expression lines</li>
                        <li>• Prevent wrinkle formation</li>
                        <li>• Best for forehead, frown, crow's feet</li>
                      </ul>
                    </div>
                  </div>
                  
                  <p className="mt-6">
                    Many patients benefit from a combined approach, which we tailor during consultation based on facial anatomy, ageing patterns, and aesthetic goals.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Areas & Facial Concerns - Hub Link Section */}
        <section className="py-20 bg-gray-900/30">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Areas & Facial Concerns</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Facial ageing presents differently for everyone. Lines, folds, hollowing, and volume loss can appear across multiple areas — each interconnected. Our doctors assess the face as a whole to determine where support is needed most.
              </p>
              <Link 
                to="/treatments/dermal-fillers/areas" 
                className="inline-flex items-center gap-2 text-[#C9A050] hover:text-[#B8924A] text-lg font-medium transition-colors group"
              >
                Explore common dermal filler areas & concerns
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </motion.div>

            {/* Quick Treatment Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <p className="text-center text-gray-400 text-sm mb-8 uppercase tracking-wide">Individual Treatments</p>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {treatmentAreas.map((area, index) => (
                  <Link
                    key={index}
                    to={area.link}
                    className="bg-black/40 border border-white/10 rounded-lg p-4 text-center hover:border-[#C9A050]/50 transition-colors group"
                  >
                    <p className="text-white font-medium text-sm group-hover:text-[#C9A050] transition-colors">{area.title}</p>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose CosmeDocs */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Choose CosmeDocs</h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-[#C9A050]/20 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-[#C9A050]" size={22} />
                </div>
                <p className="text-sm font-medium text-white">GMC-Registered Doctors</p>
                <p className="text-xs text-gray-400 mt-1">Qualified medical professionals</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-[#C9A050]/20 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-[#C9A050]" size={22} />
                </div>
                <p className="text-sm font-medium text-white">Harley Street</p>
                <p className="text-xs text-gray-400 mt-1">London's medical district</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-[#C9A050]/20 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                  <Award className="text-[#C9A050]" size={22} />
                </div>
                <p className="text-sm font-medium text-white">Since 2007</p>
                <p className="text-xs text-gray-400 mt-1">17+ years experience</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-[#C9A050]/20 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                  <Users className="text-[#C9A050]" size={22} />
                </div>
                <p className="text-sm font-medium text-white">2M+ Treatments</p>
                <p className="text-xs text-gray-400 mt-1">Proven track record</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-[#C9A050]/20 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-[#C9A050]" size={22} />
                </div>
                <p className="text-sm font-medium text-white">Natural Results</p>
                <p className="text-xs text-gray-400 mt-1">Invisible art philosophy</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Before & After Teaser */}
        <section className="py-20 bg-gray-900/30">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Before & After Results</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Real patients, real results. See the subtle, natural outcomes our doctors achieve.
              </p>
            </motion.div>

            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {beforeAfterImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="p-2"
                    >
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="text-white border-white/30 hover:bg-white/10" />
              <CarouselNext className="text-white border-white/30 hover:bg-white/10" />
            </Carousel>

            <div className="text-center mt-8">
              <Link 
                to="/before-after/dermal-fillers" 
                className="inline-flex items-center gap-2 text-[#C9A050] hover:text-[#B8924A] font-medium transition-colors group"
              >
                View full gallery
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* Consultation & Next Steps */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Consultation & Next Steps</h2>
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed mb-8">
                  <p>
                    Every treatment begins with a thorough consultation. Our doctors take time to understand your concerns, assess your facial anatomy, and discuss what is — and isn't — appropriate for your face.
                  </p>
                  <p>
                    We believe in honest advice. If we don't think treatment is right for you, we'll say so. Our role is to guide, not to sell.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-[#C9A050] text-black hover:bg-[#B8924A] rounded-full px-8 py-6 text-lg font-semibold" asChild>
                    <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">Book Consultation</a>
                  </Button>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg" asChild>
                    <Link to="/treatments">View Pricing</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-900/30">
          <div className="page-container">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
              </motion.div>

              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-black/40 border border-white/10 rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-white hover:text-[#C9A050] text-left py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-accent">
          <div className="page-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#C9A050]/20 to-transparent border border-[#C9A050]/20 rounded-2xl p-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Your Consultation Begins Here</h2>
              <p className="text-[#C9A050] mb-8">Considered care from Harley Street doctors</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#C9A050] text-black hover:bg-[#B8924A] rounded-full px-8 py-6 text-lg font-semibold" asChild>
                  <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">Book Consultation</a>
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg" asChild>
                  <a href="tel:03330551503">Call 0333 0551 503</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Client Reviews */}
        <ClientReviews />

        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true">
          <p>Doctor-led dermal filler treatments at CosmeDocs Harley Street clinic London. GMC-registered doctors providing natural-looking facial rejuvenation with premium hyaluronic acid. Subtle enhancement respecting facial anatomy and individual expression. Full-face approach to dermal fillers for balanced, long-lasting outcomes. Aesthetic medicine by qualified medical professionals since 2007.</p>
        </div>
      </div>
    </>
  );
};

export default DermalFillers;
