
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, CheckCircle, AlertTriangle, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { generateSEOMetadata } from "@/utils/seo";

const SatisfactionGuaranteed = () => {
  const seoData = generateSEOMetadata(
    "Satisfaction Guaranteed | Cosmedocs London",
    "Our commitment to realistic results, transparent pricing, and expert care. Read our satisfaction guarantee terms and conditions.",
    "/satisfaction-guaranteed"
  );

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
        </div>

        {/* Header */}
        <header className="relative z-10 p-4 md:p-6">
          <Link to="/home2" className="inline-flex items-center text-white/70 hover:text-cyan-400 transition-colors duration-300 group">
            <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Treatments
          </Link>
        </header>

        {/* Hero Section */}
        <section className="py-20 px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="flex items-center justify-center mb-6">
                <Shield className="h-16 w-16 text-cyan-400 mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
                  Satisfaction Guaranteed
                </h1>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Our commitment to delivering realistic, exceptional results with complete transparency
              </p>
              
              <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-8">
                <p className="italic text-cyan-300 text-lg">
                  "Bold • Natural • Always Your Way"
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Promise */}
        <section className="py-16 px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                Our Promise to You
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <CheckCircle className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-cyan-300">Realistic Results</h3>
                <p className="text-gray-300 text-sm">
                  We deliver what we say in terms of results by being realistic - never false promises 
                  or over-promises. Our experienced practitioners set appropriate expectations.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <Award className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-cyan-300">No Hidden Costs</h3>
                <p className="text-gray-300 text-sm">
                  There are no unexpected costs from your consultation appointment. We tell you exactly 
                  what can be achieved and what it will cost upfront.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <Users className="h-12 w-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-cyan-300">Expert Consultation</h3>
                <p className="text-gray-300 text-sm">
                  Remember: every skin is different. Do not go only by before and after photos, 
                  but seek a consultation with our qualified clinical staff.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8"
            >
              <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                What's Included in Our Prices
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-cyan-300">Premium Products</h3>
                  <p className="text-gray-300">
                    Our treatment prices include the highest quality products in the world. 
                    We use only premium, FDA-approved brands that deliver consistent, 
                    long-lasting results.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-cyan-300">Qualified Staff</h3>
                  <p className="text-gray-300">
                    Treatment costs include care from probably the most qualified staff in aesthetic medicine. 
                    Our practitioners have extensive training and years of experience.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Important Information */}
        <section className="py-16 px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="backdrop-blur-xl bg-red-500/10 border border-red-500/20 rounded-3xl p-8"
            >
              <div className="flex items-center mb-6">
                <AlertTriangle className="h-8 w-8 text-red-400 mr-3" />
                <h2 className="text-2xl font-bold text-red-300">Important Disclaimers</h2>
              </div>
              
              <div className="space-y-4 text-sm text-gray-300">
                <p>
                  <strong>Side Effects:</strong> All aesthetic treatments may have side effects. 
                  These will be discussed during your consultation, and you will receive detailed 
                  aftercare instructions.
                </p>
                
                <p>
                  <strong>Individual Results:</strong> Results may vary between individuals due to 
                  differences in skin type, age, lifestyle, and medical history. Your practitioner 
                  will provide realistic expectations based on your assessment.
                </p>
                
                <p>
                  <strong>Consultation Required:</strong> A thorough consultation is essential to 
                  determine suitability for treatment and set appropriate expectations. Do not rely 
                  solely on before and after photographs.
                </p>
                
                <p>
                  <strong>Terms & Conditions:</strong> Full terms and conditions apply to all treatments. 
                  These will be provided and explained during your consultation.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 text-center relative z-10">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                Ready to Start Your Journey?
              </h2>
              
              <p className="text-gray-300">
                Book your consultation today and discover what's possible with expert aesthetic care.
              </p>
              
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-full px-8 py-3 transition-all duration-300 hover:scale-105">
                Book Your Consultation
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO content */}
        <div className="sr-only">
          <p>
            Cosmedocs satisfaction guarantee ensures realistic results with no false promises. Our expert aesthetic practitioners provide transparent pricing with no hidden costs. All treatment prices include the highest quality products and most qualified staff. Individual consultation required as every skin is different. Side effects may occur with all aesthetic treatments. Terms and conditions apply to satisfaction guarantee. Book consultation at our Harley Street clinic for expert aesthetic medicine with over 1 million injections experience.
          </p>
        </div>
      </div>
    </>
  );
};

export default SatisfactionGuaranteed;
