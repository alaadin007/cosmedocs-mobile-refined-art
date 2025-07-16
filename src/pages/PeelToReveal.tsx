import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Zap, Sparkles, Calendar, MapPin, Phone, Mail, ChevronDown, ChevronUp } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
const PeelToReveal = () => {
  const seoData = generateSEOMetadata("Peel to Reveal London | £120 | Deep Skin Rejuvenation | Harley Street", "Revolutionary Peel to Reveal treatment in London's Harley Street. Deep skin cleansing, repairing & rejuvenation with powerful antioxidants. From £120.", "/peel-to-reveal");
  const bookingUrl = "https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29";

  // Before/after images for the viewer - Real Cosmedocs results
  const beforeAfterImages = [{
    src: "/lovable-uploads/bd706998-fd71-4df5-a58b-4f4d5185ee0d.png",
    alt: "Peel to Reveal before and after showing improved skin tone and reduced pigmentation",
    caption: "Dramatic improvement in skin tone and pigmentation reduction"
  }, {
    src: "/lovable-uploads/3be6db97-ef72-4352-abbb-8a0891d46c87.png",
    alt: "Peel to Reveal treatment results showing enhanced skin texture and clarity",
    caption: "Enhanced skin texture and improved overall clarity"
  }, {
    src: "/lovable-uploads/c040756c-623e-4569-b07b-ff9f9ae5aefd.png",
    alt: "Peel to Reveal results demonstrating smoother complexion and refined skin",
    caption: "Smoother complexion with refined skin texture and tone"
  }];
  const [isOpenIngredients, setIsOpenIngredients] = useState(false);
  const [isOpenProcess, setIsOpenProcess] = useState(false);
  const [showMoreImages, setShowMoreImages] = useState(false);
  const leftColumnFaqs = [{
    question: "How much does Peel to Reveal cost?",
    answer: "Peel to Reveal Lite starts from £120, and Peel to Reveal Plus is £250. We offer 25% off your second treatment if performed within 6 months, making it an affordable ongoing skincare solution."
  }, {
    question: "How long does the Peel to Reveal treatment take?",
    answer: "The treatment takes only 10-15 minutes, making it perfect for lunch breaks or busy schedules. The controllable depth and intensity allow for customized treatment based on your skin needs."
  }, {
    question: "What skin concerns does Peel to Reveal address?",
    answer: "Peel to Reveal treats multiple skin concerns simultaneously including dullness, pigmentation, melasma, sun damage, fine lines, acne, enlarged pores, whiteheads, and blackheads. It's suitable for all skin types."
  }, {
    question: "Is there any downtime after Peel to Reveal?",
    answer: "Minimal downtime is required. You can return to work immediately with minimal skin changes and apply light cover-up straight after. Some mild redness may occur for a few hours, with gentle peeling starting day 3-4."
  }, {
    question: "How soon will I see results?",
    answer: "You'll notice improvements within 10 days, with clearer, brighter, and more radiant skin. The powerful antioxidant cocktail and natural extracts work to reveal your skin's natural glow progressively."
  }];
  const rightColumnFaqs = [{
    question: "What makes Peel to Reveal different from other peels?",
    answer: "Peel to Reveal is a modern fusion peel combining multiple acids (Glycolic, Lactic, Salicylic, TCA) with powerful antioxidants like Glutathione. This CRES system (Cleanse, Revitalise, Exfoliate, Stimulate) treats over a dozen skin issues at once."
  }, {
    question: "What are the key ingredients in Peel to Reveal?",
    answer: "The treatment includes Salicylic Acid, Tea Tree Oil, Glutathione, Kojic/Mandelic/Azelaic acids, TCA, Lactic and Glycolic acids, plus natural extracts from papaya, licorice, and bearberry for comprehensive skin rejuvenation."
  }, {
    question: "Are there any side effects?",
    answer: "Common minor side effects include mild redness for a few hours, gentle peeling/flaking of old skin starting day 3-4 lasting a few days, and temporary dry skin for 7-10 days. These are normal signs of skin renewal."
  }, {
    question: "Who is suitable for Peel to Reveal?",
    answer: "Peel to Reveal is suitable for anyone from their mid-20s onwards experiencing skin dullness, ageing signs, or specific concerns like acne or pigmentation. It's designed for all skin types with minimal side effects."
  }, {
    question: "How often should I have Peel to Reveal treatments?",
    answer: "For optimal results, treatments can be repeated every 4-6 weeks. The frequency depends on your skin concerns and goals. Our practitioners will create a personalized treatment plan during your consultation."
  }];
  return <>
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
          "name": "Cosmedocs - Peel to Reveal Treatment",
          "description": "Revolutionary skin peel treatment for deep cleansing, repairing & rejuvenation",
          "url": "https://cosmedocs.com/peel-to-reveal",
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
          "medicalSpecialty": "Dermatology",
          "priceRange": "£120-£250"
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
                  Peel to
                  <span className="block text-purple-300">Reveal</span>
                  <span className="block text-sm mt-4">Revolutionary skin treatment for deep cleansing & rejuvenation</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl">
                  <span className="text-purple-300 font-semibold">Invisible Art</span>
                  <br />
                  Transformation that speaks without saying a word
                </p>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Starting from £120</p>
                  <p className="text-sm text-gray-300">#cosmepeel - Check out our IG for hundreds more natural, subtle transformations</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl">
                    Book Consultation
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm">
                    View Price List
                  </Button>
                </div>
              </motion.div>
              
              <div className="hidden lg:block"></div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="bg-gradient-to-b from-black to-[#0A0A0A] py-[45px]">
          <div className="page-container">
            <motion.div className="max-w-5xl mx-auto" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }} viewport={{
            once: true
          }}>
              <h2 className="text-4xl md:text-5xl font-thin text-white mb-12 text-center tracking-tight">
                Reverse the Signs of Aging
              </h2>
              
              <div className="space-y-8 text-lg text-white/80 font-light leading-relaxed">
                <p>
                  Our skin cells become dormant and cellular regeneration slows down as we age, leaving dull, damaged, dead skin cells on the surface. Collagen, elastin, hyaluronic acid and other structural elements vital for skin health start to decrease from our mid-20s, and increasing layers of dead skin and micro-pigmentation cause unevenly toned skins with an irregular texture and enlarged pores.
                </p>
                
                <p>
                  Although make-up, moisturisers and other beauty products may temporarily conceal some of these signs of ageing, they cannot reverse them and may accelerate the process. Our cosmetic doctors from Harley Street, London, are passionate about skincare and have formulated an in-clinic skin peel treatment called Peel To Reveal.
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 my-12">
                  <h3 className="text-2xl font-light text-white mb-6">When is Peel to Reveal used?</h3>
                  <div className="grid md:grid-cols-2 gap-6 text-white/70">
                    <div>
                      <h4 className="text-lg font-light text-white mb-3">Ideal for treating:</h4>
                      <ul className="space-y-2">
                        <li>• General skin dullness & aging (mid-20s onwards)</li>
                        <li>• Pigmentation and melasma</li>
                        <li>• Uneven skin tone and texture</li>
                        <li>• Sun damage and fine lines</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-light text-white mb-3">Also effective for:</h4>
                      <ul className="space-y-2">
                        <li>• Acne and enlarged pores</li>
                        <li>• Whiteheads and blackheads</li>
                        <li>• Wrinkles and age spots</li>
                        <li>• Skin rejuvenation maintenance</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <p className="text-center text-xl">
                  <span className="text-white font-light">Peel to Reveal is a modern fusion skin peel</span> using multiple superficial to medium peeling agents such as Glycolic, Lactic, Salicylic Acids and TCA, treating more than a dozen skin issues at once. Combined with powerful antioxidants including Glutathione, it's probably the quickest skin rejuvenation treatment for any skin type with minimal side effects.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Treatment Benefits Section */}
        <section className="bg-[#0A0A0A] py-[28px]">
          <div className="page-container">
            <motion.div className="text-center mb-20" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }} viewport={{
            once: true
          }}>
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
                Reveal Your Best Skin
              </h2>
              <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
                A revolutionary fusion peel that treats multiple skin concerns simultaneously with minimal downtime
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {/* Duration */}
              <motion.div className="text-center" initial={{
              opacity: 0,
              y: 40
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.1
            }} viewport={{
              once: true
            }}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 h-full">
                  <Clock className="h-12 w-12 text-white mx-auto mb-6" />
                  <h3 className="text-2xl font-light text-white mb-4">Duration</h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    Treatment time of 10-15 minutes with controllable depth and intensity
                  </p>
                </div>
              </motion.div>

              {/* Powerful Antioxidants */}
              <motion.div className="text-center" initial={{
              opacity: 0,
              y: 40
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.2
            }} viewport={{
              once: true
            }}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 h-full">
                  <Zap className="h-12 w-12 text-white mx-auto mb-6" />
                  <h3 className="text-2xl font-light text-white mb-4">Powerful Antioxidants</h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    Cocktail of powerful antioxidants, immune boosters, natural extracts & skin brighteners
                  </p>
                </div>
              </motion.div>

              {/* Results */}
              <motion.div className="text-center" initial={{
              opacity: 0,
              y: 40
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.3
            }} viewport={{
              once: true
            }}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 h-full">
                  <Sparkles className="h-12 w-12 text-white mx-auto mb-6" />
                  <h3 className="text-2xl font-light text-white mb-4">Clearer & Brighter</h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    Multiple skin indications treated simultaneously. 10 days to clearer, brighter skin
                  </p>
                </div>
              </motion.div>

              {/* Downtime */}
              <motion.div className="text-center" initial={{
              opacity: 0,
              y: 40
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.4
            }} viewport={{
              once: true
            }}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 h-full">
                  <Calendar className="h-12 w-12 text-white mx-auto mb-6" />
                  <h3 className="text-2xl font-light text-white mb-4">Minimal Downtime</h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    Return to work directly with minimal skin changes. Apply light cover-up straight after
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Before & After Gallery */}
        <section className="py-16 bg-[#0A0A0A]">
          <div className="page-container">
            <motion.div className="text-center mb-12" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }} viewport={{
            once: true
          }}>
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
                Transformation Results
              </h2>
              <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
                Real patient transformations showcasing the power of our revolutionary peel treatment
              </p>
            </motion.div>
            
            {/* Images Grid */}
            <div className="max-w-6xl mx-auto">
              {/* First Row - Always Visible */}
              <motion.div className="grid md:grid-cols-3 gap-8 mb-8" initial={{
              opacity: 0,
              y: 40
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8
            }} viewport={{
              once: true
            }}>
                {beforeAfterImages.slice(0, 3).map((image, index) => <motion.div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300" initial={{
                opacity: 0,
                y: 30
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.6,
                delay: index * 0.1
              }} viewport={{
                once: true
              }}>
                    <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4">
                      <img src={image.src} alt={image.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                    <p className="text-white/80 text-center font-light text-sm leading-relaxed">
                      {image.caption}
                    </p>
                  </motion.div>)}
              </motion.div>

              {/* Second Row - Conditional */}
              {beforeAfterImages.length > 3 && <motion.div className={`grid md:grid-cols-3 gap-8 mb-12 transition-all duration-500 ${showMoreImages ? 'opacity-100 max-h-none' : 'opacity-0 max-h-0 overflow-hidden'}`} initial={{
              opacity: 0,
              y: 40
            }} animate={{
              opacity: showMoreImages ? 1 : 0,
              y: showMoreImages ? 0 : 40
            }} transition={{
              duration: 0.8
            }}>
                  {beforeAfterImages.slice(3).map((image, index) => <motion.div key={index + 3} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300" initial={{
                opacity: 0,
                y: 30
              }} animate={{
                opacity: showMoreImages ? 1 : 0,
                y: showMoreImages ? 0 : 30
              }} transition={{
                duration: 0.6,
                delay: index * 0.1
              }}>
                      <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4">
                        <img src={image.src} alt={image.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                      </div>
                      <p className="text-white/80 text-center font-light text-sm leading-relaxed">
                        {image.caption}
                      </p>
                    </motion.div>)}
                </motion.div>}

              {/* Load More Button */}
              {beforeAfterImages.length > 3 && <div className="text-center">
                  <button onClick={() => setShowMoreImages(!showMoreImages)} className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 rounded-full px-10 py-4 inline-flex items-center justify-center text-lg font-light transition-all duration-300 border border-white/20 hover:scale-105">
                    {showMoreImages ? 'Show Less' : 'Load More Results'}
                    <ChevronDown className={`h-5 w-5 ml-2 transition-transform duration-300 ${showMoreImages ? 'rotate-180' : ''}`} />
                  </button>
                </div>}
            </div>
          </div>
        </section>

        {/* CRES System Explanation */}
        <section className="bg-gradient-to-b from-[#0A0A0A] to-black py-[32px]">
          <div className="page-container">
            <motion.div className="text-center mb-20" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }} viewport={{
            once: true
          }}>
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
                CRES System Technology
              </h2>
              <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
                Formulated to Cleanse, Revitalise, Exfoliate & Stimulate for complete facial rejuvenation
              </p>
            </motion.div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Performance Ingredients - Enhanced UI */}
                <motion.div initial={{
                opacity: 0,
                y: 40
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.8,
                delay: 0.2
              }} viewport={{
                once: true
              }}>
                  <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-2xl">
                    <h3 className="text-3xl font-light text-white mb-8 text-center">Performance Ingredients</h3>
                    
                    <div className="space-y-6">
                      {/* Cleanse Phase */}
                      <Collapsible>
                        <CollapsibleTrigger className="w-full group">
                          <div className="bg-white/10 hover:bg-white/20 rounded-2xl p-6 border border-white/20 transition-all duration-300 cursor-pointer">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4">
                                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                                <h4 className="text-xl font-light text-white">Cleanse</h4>
                              </div>
                              <ChevronDown className="h-5 w-5 text-white/70 group-data-[state=open]:rotate-180 transition-transform duration-300" />
                            </div>
                          </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="mt-3">
                          <div className="bg-white/5 rounded-xl p-6 border border-white/10 ml-7">
                            <div className="space-y-3 text-white/80">
                              <div className="flex items-center space-x-3">
                                <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                                <span className="font-light">Salicylic Acid</span>
                              </div>
                              <div className="flex items-center space-x-3">
                                <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                                <span className="font-light">Tea Tree Oil</span>
                              </div>
                              <div className="flex items-center space-x-3">
                                <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                                <span className="font-light">Willow Bark Extract</span>
                              </div>
                            </div>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>

                      {/* Revitalise Phase */}
                      <Collapsible>
                        <CollapsibleTrigger className="w-full group">
                          <div className="bg-white/10 hover:bg-white/20 rounded-2xl p-6 border border-white/20 transition-all duration-300 cursor-pointer">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4">
                                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                <h4 className="text-xl font-light text-white">Revitalise</h4>
                              </div>
                              <ChevronDown className="h-5 w-5 text-white/70 group-data-[state=open]:rotate-180 transition-transform duration-300" />
                            </div>
                          </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="mt-3">
                          <div className="bg-white/5 rounded-xl p-6 border border-white/10 ml-7">
                            <div className="space-y-3 text-white/80">
                              <div className="flex items-center space-x-3">
                                <span className="w-2 h-2 bg-green-300 rounded-full"></span>
                                <span className="font-light">Glutathione</span>
                              </div>
                              <div className="flex items-center space-x-3">
                                <span className="w-2 h-2 bg-green-300 rounded-full"></span>
                                <span className="font-light">Kojic/Mandelic/Azelaic Acids</span>
                              </div>
                              <div className="flex items-center space-x-3">
                                <span className="w-2 h-2 bg-green-300 rounded-full"></span>
                                <span className="font-light">Natural Extracts (Papaya, Licorice, Bearberry)</span>
                              </div>
                              <div className="flex items-center space-x-3">
                                <span className="w-2 h-2 bg-green-300 rounded-full"></span>
                                <span className="font-light">Arginine</span>
                              </div>
                            </div>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>

                      {/* Exfoliate & Stimulate Phase */}
                      <Collapsible>
                        <CollapsibleTrigger className="w-full group">
                          <div className="bg-white/10 hover:bg-white/20 rounded-2xl p-6 border border-white/20 transition-all duration-300 cursor-pointer">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4">
                                <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                                <h4 className="text-xl font-light text-white">Exfoliate & Stimulate</h4>
                              </div>
                              <ChevronDown className="h-5 w-5 text-white/70 group-data-[state=open]:rotate-180 transition-transform duration-300" />
                            </div>
                          </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="mt-3">
                          <div className="bg-white/5 rounded-xl p-6 border border-white/10 ml-7">
                            <div className="space-y-3 text-white/80">
                              <div className="flex items-center space-x-3">
                                <span className="w-2 h-2 bg-purple-300 rounded-full"></span>
                                <span className="font-light">TCA</span>
                              </div>
                              <div className="flex items-center space-x-3">
                                <span className="w-2 h-2 bg-purple-300 rounded-full"></span>
                                <span className="font-light">Lactic Acid</span>
                              </div>
                              <div className="flex items-center space-x-3">
                                <span className="w-2 h-2 bg-purple-300 rounded-full"></span>
                                <span className="font-light">Glycolic Acid</span>
                              </div>
                              <div className="flex items-center space-x-3">
                                <span className="w-2 h-2 bg-purple-300 rounded-full"></span>
                                <span className="font-light">Malic/Citric Acids</span>
                              </div>
                            </div>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    </div>
                  </div>
                </motion.div>

                {/* Treatment Benefits - Enhanced UI */}
                <motion.div initial={{
                opacity: 0,
                y: 40
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.8,
                delay: 0.4
              }} viewport={{
                once: true
              }}>
                  <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-2xl h-full">
                    <h3 className="text-3xl font-light text-white mb-8 text-center">Treatment Benefits</h3>
                    
                    <div className="space-y-4">
                      {[{
                      icon: "🛡️",
                      text: "Anti-inflammatory, anti-fungal, anti-microbial"
                    }, {
                      icon: "🧽",
                      text: "Deep pore cleansing"
                    }, {
                      icon: "⚡",
                      text: "Neutralise free radicals"
                    }, {
                      icon: "✨",
                      text: "Decrease skin dullness and melasma"
                    }, {
                      icon: "🩸",
                      text: "Improve skin blood flow"
                    }, {
                      icon: "🎯",
                      text: "Improve skin texture, pores, and acne"
                    }, {
                      icon: "🔄",
                      text: "Increase cellular turnover"
                    }, {
                      icon: "🏗️",
                      text: "Stimulate collagen production"
                    }, {
                      icon: "📈",
                      text: "Improve fine lines and wrinkles"
                    }].map((benefit, index) => <motion.div key={index} className="bg-white/10 hover:bg-white/15 rounded-xl p-4 border border-white/20 transition-all duration-300 cursor-pointer group" initial={{
                      opacity: 0,
                      x: -20
                    }} whileInView={{
                      opacity: 1,
                      x: 0
                    }} transition={{
                      duration: 0.5,
                      delay: index * 0.1
                    }} viewport={{
                      once: true
                    }}>
                          <div className="flex items-center space-x-4">
                            <span className="text-2xl">{benefit.icon}</span>
                            <span className="text-white/80 font-light group-hover:text-white transition-colors duration-300">
                              {benefit.text}
                            </span>
                          </div>
                        </motion.div>)}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-32 bg-[#0A0A0A]">
          <div className="page-container">
            <motion.div className="text-center mb-20" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }} viewport={{
            once: true
          }}>
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
                Treatment Options
              </h2>
              <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
                Choose the perfect treatment level for your skin needs
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {/* Peel to Reveal Lite */}
              <motion.div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20" initial={{
              opacity: 0,
              y: 40
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.1
            }} viewport={{
              once: true
            }}>
                <h3 className="text-3xl font-light text-white mb-4">Peel to Reveal Lite</h3>
                <div className="text-4xl font-thin text-white mb-6">£120</div>
                <p className="text-white/70 font-light mb-8 leading-relaxed">
                  Perfect introduction to our revolutionary peel treatment. Gentle yet effective for first-time users or maintenance treatments.
                </p>
                <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="bg-white/15 backdrop-blur-sm text-white hover:bg-white/25 rounded-full px-8 py-4 inline-flex items-center justify-center text-lg font-light transition-all duration-300 border border-white/20 w-full">
                  Book Lite Treatment
                </a>
              </motion.div>

              {/* Peel to Reveal Plus */}
              <motion.div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/30 relative overflow-hidden" initial={{
              opacity: 0,
              y: 40
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.2
            }} viewport={{
              once: true
            }}>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-light text-white border border-white/30">
                  Most Popular
                </div>
                <h3 className="text-3xl font-light text-white mb-4">Peel to Reveal Plus</h3>
                <div className="text-4xl font-thin text-white mb-6">£250</div>
                <p className="text-white/70 font-light mb-8 leading-relaxed">
                  Our comprehensive treatment with maximum strength formulation for optimal results and complete skin transformation.
                </p>
                <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="bg-white/95 backdrop-blur-sm text-black hover:bg-white rounded-full px-8 py-4 inline-flex items-center justify-center text-lg font-light transition-all duration-300 border border-white/20 w-full">
                  Book Plus Treatment
                </a>
                <p className="text-white/60 font-light text-sm mt-4 text-center">
                  25% off your next treatment within 6 months
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gradient-to-b from-[#0A0A0A] to-black py-[15px]">
          <div className="page-container">
            <motion.div className="text-center mb-20" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }} viewport={{
            once: true
          }}>
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
                Everything you need to know about our Peel to Reveal treatment
              </p>
            </motion.div>
            
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-4">
                {leftColumnFaqs.map((faq, index) => <FAQItem key={`left-${index}`} question={faq.question} answer={faq.answer} index={index} />)}
              </div>
              
              {/* Right Column */}
              <div className="space-y-4">
                {rightColumnFaqs.map((faq, index) => <FAQItem key={`right-${index}`} question={faq.question} answer={faq.answer} index={index + 5} />)}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-32 bg-black">
          <div className="page-container">
            <motion.div className="text-center mb-20" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }} viewport={{
            once: true
          }}>
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
                Ready to Reveal Your Best Skin?
              </h2>
              <p className="text-xl text-white/70 font-light max-w-2xl mx-auto mb-12">
                Book your Peel to Reveal consultation today and discover the transformative power of our revolutionary treatment
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="bg-white/95 backdrop-blur-sm text-black hover:bg-white rounded-full px-12 py-5 inline-flex items-center justify-center text-xl font-light transition-all duration-500 border border-white/20 hover:scale-[1.02] hover:shadow-2xl">
                  Book Your Treatment
                </a>
                <a href="tel:03330551503" className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 rounded-full px-12 py-5 inline-flex items-center justify-center text-xl font-light transition-all duration-300 border border-white/20">
                  <Phone className="h-5 w-5 mr-3" />
                  Call Now
                </a>
              </div>
            </motion.div>
            
            <motion.div className="text-center space-y-4" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} viewport={{
            once: true
          }}>
              <div className="flex items-center justify-center space-x-2 text-white/70">
                <MapPin className="h-5 w-5" />
                <span className="font-light">10 Harley Street, London W1G 9PF</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-white/70">
                <Phone className="h-5 w-5" />
                <span className="font-light">0333 0551 503</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-white/70">
                <Mail className="h-5 w-5" />
                <span className="font-light">info@cosmedocs.com</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="hidden">
          <h2>Peel to Reveal - Revolutionary Skin Rejuvenation Treatment in London</h2>
          <p>Transform your skin with our revolutionary Peel to Reveal treatment at Cosmedocs Harley Street. This innovative fusion peel combines the power of multiple active ingredients including Glycolic Acid, Lactic Acid, Salicylic Acid, and TCA (Trichloroacetic Acid) with powerful antioxidants like Glutathione to deliver comprehensive skin rejuvenation in just 10-15 minutes.</p>
          
          <p>Our CRES system (Cleanse, Revitalise, Exfoliate, Stimulate) addresses multiple skin concerns simultaneously, making it one of the most effective treatments for achieving clearer, brighter, and more radiant skin. Unlike traditional chemical peels that target single issues, Peel to Reveal treats over a dozen skin conditions at once, including general skin dullness, premature aging, pigmentation, melasma, uneven skin tone and texture, sun damage, fine lines, wrinkles, acne, enlarged pores, whiteheads, and blackheads.</p>

          <p>The treatment begins with a thorough cleansing phase using Salicylic Acid, Tea Tree Oil, and Willow Bark Extract to deeply cleanse pores and remove impurities. The revitalisation phase introduces Glutathione, a powerful antioxidant naturally produced by the liver, along with Kojic Acid, Mandelic Acid, and Azelaic Acid, complemented by natural extracts from papaya, licorice, and bearberry. Finally, the exfoliation and stimulation phase employs TCA, Lactic Acid, Glycolic Acid, and Malic/Citric Acids to promote cellular turnover and stimulate collagen production.</p>

          <p>What sets Peel to Reveal apart is its minimal downtime and immediate return to daily activities. Patients can resume work immediately after treatment with only minimal skin changes that can be easily concealed with light makeup. The treatment offers controllable depth and intensity, allowing our experienced practitioners to customize the procedure based on individual skin types and concerns.</p>

          <p>Results become apparent within 10 days, with patients experiencing clearer, brighter, and more radiant skin. The treatment's anti-inflammatory, anti-fungal, and antimicrobial properties provide comprehensive skin health benefits while neutralizing free radicals that contribute to premature aging. Improved skin blood flow enhances natural radiance, while increased cellular turnover reveals fresh, healthy skin cells.</p>

          <p>Our Harley Street clinic offers two treatment options: Peel to Reveal Lite at £120, perfect for first-time users or maintenance treatments, and Peel to Reveal Plus at £250, our comprehensive treatment with maximum strength formulation for optimal results. We offer a 25% discount on the second treatment when performed within 6 months, making ongoing skin care more affordable.</p>

          <p>The treatment is suitable for all skin types and ages, particularly beneficial for individuals from their mid-20s onwards experiencing signs of aging or specific skin concerns. Common minor side effects include mild redness for a few hours post-treatment, gentle peeling or flaking of old skin starting on day 3-4 and lasting a few days, and temporary dry skin for 7-10 days. These effects are normal indicators of the skin renewal process and resolve naturally.</p>

          <p>Located in the prestigious Harley Street medical district, Cosmedocs has established itself as a renowned leader in cosmetic treatments and aesthetic medicine. Our modern, well-equipped clinic serves patients from across London and beyond, offering the latest innovations in skin rejuvenation technology. We also provide comprehensive training to physicians worldwide, sharing our expertise in advanced aesthetic procedures.</p>

          <p>The Peel to Reveal treatment represents a significant advancement in cosmetic dermatology, offering a safe, effective, and convenient solution for comprehensive skin rejuvenation. By combining multiple proven ingredients and techniques in a single treatment session, we deliver exceptional results that traditional single-ingredient peels cannot match. Book your consultation today to discover how Peel to Reveal can transform your skin and restore your natural radiance.</p>
        </div>
      </div>
    </>;
};

// FAQ Item Component
const FAQItem = ({
  question,
  answer,
  index
}: {
  question: string;
  answer: string;
  index: number;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} transition={{
    delay: index * 0.05,
    duration: 0.6,
    ease: [0.25, 0.46, 0.45, 0.94]
  }} viewport={{
    once: true
  }}>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="w-full">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-left font-light text-white text-lg">{question}</h3>
                {isOpen ? <ChevronUp className="h-5 w-5 text-white/70 flex-shrink-0 ml-4" /> : <ChevronDown className="h-5 w-5 text-white/70 flex-shrink-0 ml-4" />}
              </div>
            </CardContent>
          </Card>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="px-6 pb-6">
            <p className="text-white/80 leading-relaxed font-light">{answer}</p>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </motion.div>;
};
export default PeelToReveal;