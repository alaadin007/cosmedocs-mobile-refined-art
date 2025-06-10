
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Eye, Frown, Smile, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { generateSEOMetadata } from "@/utils/seo";
import FaceBotoxBeforeAfterSlider from "@/components/FaceBotoxBeforeAfterSlider";

const Home2 = () => {
  const [showRelatedTreatments, setShowRelatedTreatments] = useState(false);

  const seoData = generateSEOMetadata(
    "Face Botox (1-3 Areas) | £175-£350 | Cosmedocs London",
    "Expert face Botox treatment for frown lines, forehead lines, and crow's feet. Premium aesthetic medicine on Harley Street. Natural results from £175.",
    "/home2"
  );

  const areas = [
    {
      icon: Frown,
      name: "Frown Lines",
      description: "Vertical lines between the eyebrows that appear when frowning or concentrating. These expression lines can make you look tired or angry even when relaxed.",
      benefits: ["Smoother forehead appearance", "More relaxed expression", "Prevents deepening of lines"]
    },
    {
      icon: Eye,
      name: "Forehead Lines",
      description: "Horizontal lines across the forehead caused by raising the eyebrows. These lines become more pronounced with age and repeated facial expressions.",
      benefits: ["Smoother forehead", "Youthful appearance", "Natural movement retained"]
    },
    {
      icon: Smile,
      name: "Crow's Feet",
      description: "Fine lines radiating from the outer corners of the eyes, often called 'smile lines' or 'laughter lines'. They're among the first signs of aging.",
      benefits: ["Brighter eye area", "Reduced wrinkles", "Refreshed appearance"]
    }
  ];

  const relatedTreatments = [
    { name: "Nefertiti Face Lift", price: "£300" },
    { name: "Masseter (Jawline Slimming)", price: "£350" },
    { name: "Full Face Natural Botox", price: "£500" },
    { name: "Migraines / Headaches", price: "£450-£550" },
    { name: "Trigger Point Botox", price: "£350-£550" },
    { name: "Full Barbie Botox", price: "£450" },
    { name: "Lip Flip", price: "£175" },
    { name: "Gummy Smile", price: "£50" },
    { name: "Bunny Lines", price: "£50" }
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
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-800 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        {/* Header */}
        <header className="relative z-10 p-4 md:p-6">
          <Link to="/" className="inline-flex items-center text-white/70 hover:text-cyan-400 transition-colors duration-300 group">
            <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Home
          </Link>
        </header>

        {/* Before/After Slider */}
        <FaceBotoxBeforeAfterSlider />

        {/* Hero Section */}
        <section className="py-20 px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="relative">
                <h1 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
                  Face Botox
                  <span className="block text-2xl md:text-3xl text-gray-300 font-normal mt-2 bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">
                    (1-3 Areas)
                  </span>
                </h1>
              </div>
              
              <div className="relative">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
                  £175 - £350
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-yellow-300/20 blur-xl -z-10"></div>
              </div>
              
              <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-8 max-w-3xl mx-auto">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Our signature face Botox treatment targets the most common areas of concern: 
                  frown lines, forehead lines, and crow's feet.
                </p>
                <p className="italic text-cyan-300 mt-4 text-lg">
                  Invisible art that speaks without saying a word.
                </p>
              </div>

              <div className="pt-4 space-x-4">
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-full px-8 py-3 transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40">
                  Book Consultation
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Treatment Areas */}
        <section className="py-20 px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                Treatment Areas
              </h2>
              <p className="text-gray-300 text-xl">
                Precision targeting for natural, beautiful results
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {areas.map((area, index) => (
                <motion.div
                  key={area.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-cyan-400/30">
                    <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <area.icon className="h-10 w-10 text-cyan-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-4 text-center bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                      {area.name}
                    </h3>
                    
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      {area.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-cyan-300">Benefits:</h4>
                      <ul className="space-y-1">
                        {area.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-xs text-gray-400 flex items-center">
                            <span className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Related Treatments for Crow's Feet */}
                    {area.name === "Crow's Feet" && (
                      <div className="mt-6 pt-4 border-t border-white/10">
                        <Button
                          onClick={() => setShowRelatedTreatments(!showRelatedTreatments)}
                          className="w-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 hover:from-purple-500/30 hover:to-cyan-500/30 border border-white/20 text-white rounded-xl py-2 text-sm transition-all duration-300"
                        >
                          Related Botox Treatments
                        </Button>
                        
                        {showRelatedTreatments && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-4 space-y-2"
                          >
                            {relatedTreatments.map((treatment, idx) => (
                              <div key={idx} className="flex justify-between items-center bg-white/5 rounded-lg p-2 text-xs">
                                <span className="text-gray-300">{treatment.name}</span>
                                <span className="text-yellow-400 font-medium">{treatment.price}</span>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Information */}
        <section className="py-20 px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="space-y-8"
            >
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                  The Cosmedocs Difference
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  <div className="space-y-4 backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
                    <h3 className="text-xl font-semibold text-cyan-300 flex items-center">
                      <Zap className="h-5 w-5 mr-2" />
                      Expert Technique
                    </h3>
                    <p className="text-gray-300">
                      Our practitioners use advanced injection techniques to ensure natural movement 
                      while effectively reducing wrinkles. Each treatment is tailored to your unique 
                      facial anatomy.
                    </p>
                  </div>
                  
                  <div className="space-y-4 backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
                    <h3 className="text-xl font-semibold text-cyan-300">
                      Premium Products & Expert Staff
                    </h3>
                    <p className="text-gray-300">
                      Our treatment prices include the highest quality products in the world, 
                      as well as probably the most qualified staff. We use only premium Botox 
                      products, ensuring optimal results that last 3-4 months.
                    </p>
                  </div>
                </div>
                
                <div className="pt-8">
                  <p className="text-gray-400 italic text-lg">
                    "Quiet, not loud. Invisible, not exaggerated."
                  </p>
                </div>
              </div>

              {/* Satisfaction Guarantee Section */}
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                  <Link to="/satisfaction-guaranteed" className="hover:text-cyan-300 transition-colors">
                    Satisfaction Guaranteed*
                  </Link>
                </h3>
                
                <div className="space-y-4 text-left">
                  <p className="text-gray-300">
                    We deliver what we say in terms of results by being realistic - never false promises or over-promises. 
                    There are no unexpected costs from your consultation appointment. We tell you exactly what can be achieved.
                  </p>
                  
                  <p className="text-gray-300">
                    Remember: every skin is different. Do not go only by before and after photos, but seek a consultation 
                    with our clinical staff to understand what's possible for your unique situation.
                  </p>
                  
                  <p className="text-xs text-gray-500 italic mt-4">
                    *Side effects do occur. Terms and conditions apply. Individual results may vary.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO content */}
        <div className="sr-only">
          <p>
            Face Botox treatment at Cosmedocs targets three key areas: frown lines, forehead lines, and crow's feet. Our expert practitioners on Harley Street provide premium Botox injections from £175-£350 for 1-3 areas. The treatment effectively reduces dynamic wrinkles while maintaining natural facial expressions. Frown lines, also known as glabellar lines, appear between the eyebrows and can be effectively smoothed with precise Botox placement. Forehead lines, caused by repeated eyebrow elevation, are treated with strategic injections across the forehead muscle. Crow's feet, the fine lines around the eyes, respond excellently to Botox treatment, creating a more youthful and refreshed appearance. Our invisible art philosophy ensures results that enhance your natural beauty without looking overdone. Book your consultation at our Harley Street clinic for expert face Botox treatment with over 1 million injections of experience.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home2;
