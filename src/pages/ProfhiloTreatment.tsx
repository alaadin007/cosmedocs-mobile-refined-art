import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram, Users, Award, Calendar, MapPin, Phone, Mail, ChevronDown, ChevronUp, Syringe, Star, Clock, Shield, Heart, Briefcase, Activity, CheckCircle, Smile, GraduationCap, Palette } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { generateSEOMetadata } from "@/utils/seo";
import BeforeAfterGrid from "@/components/BeforeAfterGrid";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

// Import before/after images
import profhiloFaceBeforeAfter from "@/assets/profhilo-face-before-after.jpg";
import profhiloNeckBeforeAfter03 from "@/assets/profhilo-neck-before-after-03.jpg";
import profhiloCheekBeforeAfter from "@/assets/profhilo-cheek-before-after.jpg";
import profhiloArmBeforeAfter from "@/assets/profhilo-arm-before-after.jpg";
import profhiloNeckBeforeAfter2 from "@/assets/profhilo-neck-before-after-2.jpg";
import profhiloNeckBeforeAfter02 from "@/assets/profhilo-neck-before-after-02.jpg";
import profhiloInjectionPointsFace from "@/assets/profhilo-injection-points-face.jpg";

const ProfhiloTreatment = () => {
  const seoData = generateSEOMetadata(
    "Profhilo Treatment London | £350 | Bio-Remodelling | Cosmedocs Harley Street",
    "Profhilo London from £350. See profhilo before and after results. Expert profhilo treatment, neck injections & skin booster. Book consultation.",
    "/profhilo-treatment"
  );

  const bookingUrl = "https://med.as.me/harleystreet";

  // Before/after images for the viewer
  const beforeAfterImages = [
    {
      src: profhiloFaceBeforeAfter,
      alt: "Profhilo face treatment before and after results London Harley Street Cosmedocs",
      caption: "Complete facial bio-remodelling with improved skin texture and hydration"
    },
    {
      src: profhiloNeckBeforeAfter03,
      alt: "Profhilo neck treatment before and after transformation London",
      caption: "Neck area bio-remodelling showing enhanced skin texture and firmness"
    },
    {
      src: profhiloCheekBeforeAfter,
      alt: "Profhilo cheek treatment before and after sun damaged skin improvement",
      caption: "Significant improvement in severe sun-damaged skin with wrinkles after Profhilo"
    },
    {
      src: profhiloArmBeforeAfter,
      alt: "Profhilo arm treatment before and after skin thickness improvement",
      caption: "Enhanced skin thickness and reduced wrinkles on the arm with Profhilo"
    },
    {
      src: profhiloNeckBeforeAfter2,
      alt: "Profhilo neck and lower face treatment enhanced skin texture",
      caption: "Enhanced skin texture following Profhilo neck and lower face treatment"
    },
    {
      src: profhiloNeckBeforeAfter02,
      alt: "Profhilo neck treatment enhancing skin texture before and after",
      caption: "Enhanced skin texture following Profhilo neck treatment"
    }
  ];

  const leftColumnFaqs = [
    {
      question: "What is Profhilo treatment?",
      answer: "Profhilo is an advanced skin bio-remodelling therapy that replenishes hyaluronic acid levels in your skin. It stimulates collagen and elastin production, improving overall skin tone and quality over multiple sessions."
    },
    {
      question: "How much does Profhilo cost in London?",
      answer: "At Cosmedocs Harley Street, Profhilo treatment starts from £350 for the first session. Successive sessions are £300 and are usually scheduled 4-6 weeks apart for optimal results."
    },
    {
      question: "How does Profhilo work?",
      answer: "Profhilo works in two stages: first hydrating and nourishing your skin, then stimulating the synthesis of new collagen and elastin. The high concentration of hyaluronic acid spreads naturally under the skin to support existing HA layers."
    },
    {
      question: "How many Profhilo treatments do I need?",
      answer: "Usually, experts recommend at least two treatment sessions performed a month apart. The exact number depends on your age, cosmetic concerns, and desired skin goals."
    },
    {
      question: "Are there any Profhilo side effects?",
      answer: "Profhilo is very safe with minimal side effects. You may experience slight redness, bruising, and swelling at injection sites, which typically resolve within 1-2 days."
    },
    {
      question: "What happens during a Profhilo treatment?",
      answer: "Profhilo is a speedy treatment with no downtime, lasting under 30 minutes. Topical numbing cream is applied followed by injection with a very thin needle. High-concentration HA is injected in 10 strategic locations, five on each side of the face. Some patients may experience a slight prick sensation during injection."
    }
  ];

  const rightColumnFaqs = [
    {
      question: "Does Profhilo hurt?",
      answer: "Like any injectable treatment, you may feel a slight pin prick during Profhilo treatment. We use topical numbing cream to minimize discomfort, and most patients report minimal pain."
    },
    {
      question: "How long does it take for Profhilo to work?",
      answer: "Profhilo delivers dewy, plumping results in as little as 5 days. However, achieving visibly youthful-looking skin may require several treatments at least 30 days apart."
    },
    {
      question: "How long does Profhilo last?",
      answer: "The treatment effects may last up to 6 months, depending on the patient's age. Results gradually develop as the hyaluronic acid stimulates natural collagen production."
    },
    {
      question: "What's the difference between Profhilo and dermal fillers?",
      answer: "While both contain hyaluronic acid, Profhilo uses non-crosslinked HA for bio-remodelling and hydration, whereas dermal fillers use cross-linked HA to volumise and fill specific areas."
    },
    {
      question: "Who is an ideal candidate for Profhilo?",
      answer: "Profhilo is suitable for men and women with slight to mild signs of ageing. Patients over 25 can benefit as preventative care, with optimal results for those aged 30-50 showing dull skin, fine lines, or volume loss."
    },
    {
      question: "What should I expect after Profhilo treatment?",
      answer: "Two treatments are suggested one month apart for maximum performance with final results becoming visible gradually. Mild bruising or swelling around injection sites may occur but usually subsides within a few days."
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
        <meta name="keywords" content="profhilo neck before and after, profhilo before and after neck, profhilo for neck, profhilo before after, profilo before and after, profhilo neck, profhilo treatment before and after, profhilo skin booster before and after, prophilo before and after, profhilo gone wrong pictures, profilo facial, profhilo results, profhilo after 1 week, how much is profhilo, profhilo results week by week, profhilo before and after, profhilo before and after 40s, profhilo before and after jowls, before and after profhilo, profhilo price, profilo, does profhilo hurt, gone wrong profhilo before and after eyes, profhilo before and after eyes, profhilo structura before and after, before and after profhilo injection points, profhilo under eyes, profhilo treatment london, profhilo london, what does profhilo do, profhilo treatment, profhilo injection, how long does profhilo last, how long does profhilo take to work, profhilo injection points, profhilo neck injection points, profhilo cost, profhilo treatment price uk, is profhilo worth it, skin booster, skin booster injection, profhilo skin booster" />
        
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
            "name": "Cosmedocs - Profhilo Treatment",
            "description": "Premium Profhilo bio-remodelling treatments in London's Harley Street",
            "url": "https://cosmedocs.com/profhilo-treatment",
            "telephone": "0333 0551 503",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Harley Street",
              "addressLocality": "London",
              "addressCountry": "GB"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 51.5074,
              "longitude": -0.1278
            },
            "medicalSpecialty": "Cosmetic Surgery",
            "priceRange": "£350"
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        {/* Hero Section - Updated to match LipFillers design */}
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
                  <span className="text-purple-300">Profhilo Bio-Remodelling</span>
                  <span className="block text-sm mt-4">Invisible art - advanced injectable skincare for natural skin rejuvenation</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Advanced Bio-Remodelling</p>
                  <p className="text-sm text-gray-300">#cosmeprofhilo - Check out our IG for hundreds more natural, subtle transformations</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://med.as.me/harleystreet" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl inline-flex items-center justify-center transition-all duration-300"
                  >
                    Book Consultation
                  </a>
                  <a 
                    href="#pricing" 
                    className="border border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm inline-flex items-center justify-center transition-all duration-300"
                  >
                    View Price List
                  </a>
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
              <h2 className="text-3xl font-bold mb-8 text-white">Profhilo Treatment</h2>
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
                <p className="text-gray-300">30 minutes including consultation</p>
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
                <p className="text-gray-300">Immediate | 6-12 months with progressive improvement</p>
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
                <p className="text-gray-300">Minimal downtime, return to work same day</p>
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
                <p className="text-gray-300">Topical anaesthetic for comfort</p>
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
              <h2 className="text-3xl font-bold mb-4">Before & After Profhilo Results</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Witness the transformative power of Profhilo bio-remodelling. Our aesthetics is invisible art - 
                creating natural, bold transformations that speak without saying a word.
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

            <div className="text-center mt-12">
              <div className="text-center mt-8">
                <p className="text-gray-400 text-sm">
                  Individual results may vary. Results shown after 2 treatment sessions spaced 4 weeks apart. 
                  Full effects visible in 6-8 weeks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What is Profhilo Section */}
        <section className="py-32 bg-accent">
          <div className="page-container">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="text-center mb-20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">What Is Profhilo?</h2>
                <div className="max-w-4xl mx-auto mb-12">
                  <p className="text-white/80 font-light leading-relaxed mb-6 text-lg">
                    Profhilo before and after demonstrate its powerful results as a skin booster injection. Profhilo treatment before and after results show dramatic improvement in skin quality. Profhilo neck before and after results are particularly impressive, with profhilo for neck treatments showing excellent skin tightening. What does profhilo do? It causes the production of new collagen, elastic and hyaluronic acid in the deeper skin layers.
                  </p>
                  <p className="text-white/80 font-light leading-relaxed text-lg">
                    This cutting-edge profhilo treatment delays the appearance of wrinkles and skin laxity while promoting a naturally radiant glow. Profhilo before and after 40s clients show remarkable rejuvenation, with profhilo before and after jowls improvement being particularly noticeable. How long does profhilo last? Results typically last 6-12 months with progressive improvement.
                  </p>
                </div>
              </motion.div>
              
              <div className="max-w-4xl mx-auto">
                <div className="bg-black/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
                  <p className="text-gray-300 text-center mb-4 italic">"Advanced skin bio-remodelling treatment that stimulates natural collagen and elastin production"</p>
                  <h4 className="text-white text-xl font-semibold mb-6 text-center">How Profhilo Works</h4>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center mt-1">
                        <span className="text-purple-600 text-sm font-medium">1</span>
                      </div>
                      <div>
                        <h5 className="text-white font-medium mb-2">Hydrating and Nourishing</h5>
                        <p className="text-gray-300 font-light">
                          First stage focuses on deeply hydrating and nourishing your skin layers
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center mt-1">
                        <span className="text-purple-600 text-sm font-medium">2</span>
                      </div>
                      <div>
                        <h5 className="text-white font-medium mb-2">Neo-Collagenesis</h5>
                        <p className="text-gray-300 font-light">
                          Stimulates synthesis of new collagen and elastin for long-term skin improvement
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Profhilo Injection Points Section */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 text-white">Profhilo Injection Points</h2>
                <div className="space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    The latest injectable skin remodelling treatment corrects the ageing signs and their source.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    To achieve remarkable results, experts use the BAP (Bio Aesthetic Points) technique.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    This reduces the required injections and ensures an even and efficient dispersal of the hyaluronic acid into the skin layers, enabling Profhilo to battle signs of ageing more efficiently.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Moreover, the BAP approach ensures your comfort throughout the process.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img 
                  src={profhiloInjectionPointsFace} 
                  alt="Profhilo injection points diagram showing BAP technique on face"
                  className="rounded-3xl shadow-2xl w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Profhilo Vs Dermal Fillers Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Profhilo Vs. Dermal Fillers</h2>
            </motion.div>

            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-purple-900/20 backdrop-blur-lg rounded-3xl p-8 border border-purple-500/20"
              >
                <h3 className="text-2xl font-bold mb-4 text-purple-300">Profhilo</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-purple-500 mt-1" size={16} />
                    <span>Non-crosslinked hyaluronic acid for bio-remodelling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-purple-500 mt-1" size={16} />
                    <span>Delivers natural hydration to deeper skin layers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-purple-500 mt-1" size={16} />
                    <span>Skin tightening, brightening, and collagen boost</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-purple-500 mt-1" size={16} />
                    <span>Injectable skin hydration therapy</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
              >
                <h3 className="text-2xl font-bold mb-4 text-white">Dermal Fillers</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-gray-500 mt-1" size={16} />
                    <span>Cross-linked hyaluronic acid to volumise and fill</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-gray-500 mt-1" size={16} />
                    <span>Adds volume to specific areas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-gray-500 mt-1" size={16} />
                    <span>Contours, reshapes and reverses volume loss</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-gray-500 mt-1" size={16} />
                    <span>Targeted area enhancement</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-300 max-w-3xl mx-auto">
                Even though Profhilo and dermal fillers both contain hyaluronic acid as their core element, they are technically not alike. 
                Profhilo provides injectable skin hydration, while dermal fillers add volume and contour.
              </p>
            </div>
          </div>
        </section>



        {/* Injectable Moisturiser Section */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 text-white">Injectable Moisturiser, Intense Skin Quencher</h2>
                <div className="space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    Unlike your typical topical skin moisturizer, a profhilo treatment London slowly releases pure Hyaluronic acid. When injected directly into your skin layers, it spreads like thin honey. Profhilo results become visible after 1 week, with profhilo results week by week showing progressive improvement.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    This intense and long-lasting profhilo skin booster injection complements your <a href="/anti-wrinkle-injections" className="text-purple-300 hover:text-purple-200 underline">anti-wrinkle injections</a>. Profhilo injection points include face and profhilo neck injection points for comprehensive bio-remodelling.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Aftercare Section */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Recovery Timeline</h2>
                <p className="text-gray-300 mb-6">
                  Understanding what to expect during your Profhilo healing process
                </p>
                <div className="space-y-4">
                  <div className="bg-accent rounded-lg p-4">
                    <h4 className="font-semibold text-purple-300 mb-2">First 24 Hours</h4>
                    <p className="text-gray-300">Mild redness and minor swelling at injection sites may occur</p>
                  </div>
                  <div className="bg-accent rounded-lg p-4">
                    <h4 className="font-semibold text-purple-300 mb-2">1-3 Days</h4>
                    <p className="text-gray-300">Any bruising or swelling begins to subside, skin feels refreshed</p>
                  </div>
                  <div className="bg-accent rounded-lg p-4">
                    <h4 className="font-semibold text-purple-300 mb-2">5-7 Days</h4>
                    <p className="text-gray-300">Initial plumping and hydration effects become visible</p>
                  </div>
                  <div className="bg-accent rounded-lg p-4">
                    <h4 className="font-semibold text-purple-300 mb-2">4-6 Weeks</h4>
                    <p className="text-gray-300">Progressive improvement in skin texture, firmness, and glow</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Profhilo Aftercare Guide</h2>
                <p className="text-gray-300 mb-6">
                  Essential guidelines to ensure optimal results and proper healing from your 
                  Profhilo bio-remodelling treatment.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">First 24 Hours</h4>
                      <p className="text-gray-300">Avoid touching or rubbing the treated area to prevent irritation</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Exercise Restrictions</h4>
                      <p className="text-gray-300">Avoid strenuous exercise for 24 hours to ensure optimal healing</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Heat Avoidance</h4>
                      <p className="text-gray-300">Avoid saunas, steam rooms, and excessive sun exposure for 48 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Hydration Support</h4>
                      <p className="text-gray-300">Maintain good hydration and use gentle skincare products</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Follow-up Treatment</h4>
                      <p className="text-gray-300">Schedule second session 4-6 weeks apart for maximum results</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Profhilo Pricing London</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Transparent pricing for premium Profhilo bio-remodelling treatments. All prices include consultation, 
                treatment, and comprehensive aftercare support from our expert medical team.
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
                    <CardTitle className="text-white text-2xl">First Session</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£350</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Initial Profhilo bio-remodelling treatment</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Comprehensive consultation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">10 injection points</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Progress photos</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Aftercare guidance</span>
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
                <Card className="bg-accent border-purple-500 h-full text-center">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Follow-up Sessions</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£300</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Subsequent treatments (4-6 weeks apart)</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Progress review</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Bio-remodelling treatment</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Results monitoring</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Ongoing support</span>
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
                <Card className="bg-gradient-to-br from-purple-900 to-purple-800 border-2 border-purple-400 h-full text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-purple-400 text-black px-3 py-1 text-xs font-semibold">
                    SPECIAL OFFER
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Glow & Go Package</CardTitle>
                    <div className="text-purple-200 text-4xl font-bold">£900</div>
                    <p className="text-purple-200 text-sm">Save £200</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-purple-100">Three sessions + free Hydrafacial (worth £200)</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-300" size={16} />
                        <span className="text-purple-100 text-sm">Complete treatment course</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-300" size={16} />
                        <span className="text-purple-100 text-sm">Free Hydrafacial session</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-300" size={16} />
                        <span className="text-purple-100 text-sm">Priority booking</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-300" size={16} />
                        <span className="text-purple-100 text-sm">Extended aftercare</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-400 text-sm">
                Consultation fee: FREE when booking treatment • All prices include VAT
              </p>
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
                <p className="text-gray-300">Premium FDA-approved bio-remodelling treatments</p>
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
                Everything you need to know about Profhilo bio-remodelling treatment
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="space-y-4">
                {leftColumnFaqs.map((faq, index) => (
                  <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
              </div>
              <div className="space-y-4">
                {rightColumnFaqs.map((faq, index) => (
                  <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
              </div>
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
              <h2 className="text-3xl font-bold mb-4">Ready for Beautiful, Natural Skin?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert cosmetic doctors and discover how Profhilo 
                can rejuvenate your skin with subtle, sophisticated bio-remodelling results.
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

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <Button
          variant="ghost"
          className="w-full justify-between text-left p-6 h-auto bg-white/5 hover:bg-white/10 rounded-xl border border-white/10"
        >
          <span className="text-white font-medium text-base">{question}</span>
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-white" />
          ) : (
            <ChevronDown className="h-5 w-5 text-white" />
          )}
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="px-6 pb-6">
        <p className="text-gray-300 leading-relaxed">{answer}</p>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default ProfhiloTreatment;