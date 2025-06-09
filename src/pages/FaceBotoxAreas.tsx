
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Eye, Frown, Smile } from "lucide-react";
import { Link } from "react-router-dom";
import { generateSEOMetadata } from "@/utils/seo";
import FaceBotoxRelatedTreatments from "@/components/FaceBotoxRelatedTreatments";

const FaceBotoxAreas = () => {
  const [isRelatedTreatmentsOpen, setIsRelatedTreatmentsOpen] = useState(false);

  const seoData = generateSEOMetadata(
    "Face Botox (1-3 Areas) | £175-£350 | Cosmedocs London",
    "Expert face Botox treatment for frown lines, forehead lines, and crow's feet. Premium aesthetic medicine on Harley Street. Natural results from £175.",
    "/face-botox-areas"
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

      <div className="min-h-screen bg-black text-white">
        {/* Header */}
        <header className="relative z-10 p-4 md:p-6">
          <Link to="/home2" className="inline-flex items-center text-white/70 hover:text-white transition-colors">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
        </header>

        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url('/lovable-uploads/c32f1151-24c9-4e9e-a7de-ee1ef761bab0.png')`
            }}
          />
          
          <div className="relative max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-6xl font-bold">
                Face Botox
                <span className="block text-2xl md:text-3xl text-gray-300 font-normal mt-2">
                  (1-3 Areas)
                </span>
              </h1>
              
              <div className="text-xl md:text-2xl text-yellow-400 font-semibold">
                £175 - £350
              </div>
              
              <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Our signature face Botox treatment targets the most common areas of concern: 
                frown lines, forehead lines, and crow's feet. 
                <span className="italic block mt-2">
                  Invisible art that speaks without saying a word.
                </span>
              </p>

              <div className="pt-4 space-x-4">
                <Button className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm rounded-full px-8 py-3 transition-all duration-300 hover:scale-105 border border-white/20">
                  Book Consultation
                </Button>
                <Button
                  onClick={() => setIsRelatedTreatmentsOpen(true)}
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm rounded-full px-8 py-3 transition-all duration-300 hover:scale-105"
                >
                  Related Treatments
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Treatment Areas */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Treatment Areas</h2>
              <p className="text-gray-300 text-lg">
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
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6 mx-auto">
                    <area.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-center">{area.name}</h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {area.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-white">Benefits:</h4>
                    <ul className="space-y-1">
                      {area.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-xs text-gray-400 flex items-center">
                          <span className="w-1 h-1 bg-yellow-400 rounded-full mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Information */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold">The Cosmedocs Difference</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Expert Technique</h3>
                  <p className="text-gray-300">
                    Our practitioners use advanced injection techniques to ensure natural movement 
                    while effectively reducing wrinkles. Each treatment is tailored to your unique 
                    facial anatomy.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Premium Products</h3>
                  <p className="text-gray-300">
                    We use only the highest quality Botox products, ensuring optimal results 
                    that last 3-4 months while maintaining the natural expressiveness of your face.
                  </p>
                </div>
              </div>
              
              <div className="pt-8">
                <p className="text-gray-400 italic">
                  "Quiet, not loud. Invisible, not exaggerated."
                </p>
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

        {/* Related Treatments Modal */}
        <FaceBotoxRelatedTreatments
          isOpen={isRelatedTreatmentsOpen}
          onClose={() => setIsRelatedTreatmentsOpen(false)}
        />
      </div>
    </>
  );
};

export default FaceBotoxAreas;
