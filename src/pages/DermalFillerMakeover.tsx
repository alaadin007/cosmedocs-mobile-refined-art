
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { generateSEOMetadata } from "../App";
import { Button } from "@/components/ui/button";
import { MessageSquare, Star, Clock, Shield, Award } from "lucide-react";

export default function DermalFillerMakeover() {
  console.log("DermalFillerMakeover component is rendering");
  
  const seoData = generateSEOMetadata(
    "Dermal Filler Makeover - Transform Your Look",
    "Transform your appearance with professional dermal filler treatments. Expert cosmetic doctors, natural results, and comprehensive makeover packages.",
    "/dermal-filler-makeover"
  );

  const bookingUrl = "https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29";
  const whatsappNumber = "+447735606447";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\s+/g, "")}`;

  console.log("Booking URL:", bookingUrl);
  console.log("WhatsApp URL:", whatsappUrl);

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
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.image} />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalProcedure",
              "name": "Dermal Filler Makeover",
              "description": "Comprehensive dermal filler treatment for facial enhancement and rejuvenation",
              "provider": {
                "@type": "MedicalBusiness",
                "name": "Cosmedocs",
                "url": "https://cosmedocs.com"
              }
            }
          `}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-12 sm:py-16 md:py-20 overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/c60a1e1c-0406-4552-9246-e93bdc4d7474.png')] bg-cover bg-center opacity-10"></div>
          <div className="page-container relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center px-4"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                Dermal Filler
                <span className="block text-gray-300 mt-2">Makeover</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
                Transform your look with expert dermal filler treatments from our qualified cosmedocs
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
                <a 
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-white text-black hover:bg-gray-200 rounded-full px-6 sm:px-8 py-3 inline-flex items-center justify-center text-base sm:text-lg font-medium transition-colors min-w-[200px]"
                >
                  Book Consultation
                </a>
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto border border-white text-white hover:bg-white hover:text-black rounded-full px-6 sm:px-8 py-3 inline-flex items-center justify-center text-base sm:text-lg font-medium transition-colors min-w-[200px]"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-12 px-4"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Why Choose Our Dermal Filler Makeover?</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the difference of professional aesthetic treatments from qualified medical practitioners
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4">
              {[
                {
                  icon: <Award className="h-6 w-6 sm:h-8 sm:w-8" />,
                  title: "Expert Cosmedocs",
                  description: "Treatment by qualified medical doctors specializing in cosmetic medicine"
                },
                {
                  icon: <Shield className="h-6 w-6 sm:h-8 sm:w-8" />,
                  title: "Safe & Regulated",
                  description: "All treatments performed in our CQC regulated Harley Street clinic"
                },
                {
                  icon: <Star className="h-6 w-6 sm:h-8 sm:w-8" />,
                  title: "Natural Results",
                  description: "Subtle enhancements that look naturally beautiful and age-appropriate"
                },
                {
                  icon: <Clock className="h-6 w-6 sm:h-8 sm:w-8" />,
                  title: "Minimal Downtime",
                  description: "Quick procedures with immediate results and minimal recovery time"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-4 sm:p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
                >
                  <div className="text-black mb-3 sm:mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Areas */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-12 px-4"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Popular Treatment Areas</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Our expert cosmedocs can enhance multiple areas for a complete facial rejuvenation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4">
              {[
                {
                  title: "Lips",
                  description: "Add volume and definition for fuller, more youthful lips"
                },
                {
                  title: "Cheeks",
                  description: "Restore volume and create beautiful cheek contours"
                },
                {
                  title: "Nasolabial Folds",
                  description: "Smooth smile lines for a more youthful appearance"
                },
                {
                  title: "Under Eyes",
                  description: "Reduce tear troughs and dark circles"
                },
                {
                  title: "Jawline",
                  description: "Define and contour for a sharper profile"
                },
                {
                  title: "Chin",
                  description: "Enhance projection and balance facial proportions"
                }
              ].map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <div className="h-32 sm:h-40 md:h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-gray-400 text-2xl sm:text-3xl md:text-4xl font-light">{area.title}</div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{area.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-12 px-4"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Your Makeover Journey</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                From consultation to transformation - here's what to expect
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 px-4">
              {[
                {
                  step: "01",
                  title: "Consultation",
                  description: "Comprehensive assessment with our qualified cosmedoc to discuss your goals and create a personalized treatment plan"
                },
                {
                  step: "02",
                  title: "Treatment",
                  description: "Professional dermal filler application using premium products and advanced injection techniques"
                },
                {
                  step: "03",
                  title: "Results",
                  description: "Immediate visible improvements with full results developing over 2-4 weeks"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-black text-white w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-lg sm:text-xl font-bold mx-auto mb-3 sm:mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-black text-white">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center px-4"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Ready for Your Transformation?</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
                Book your consultation with our expert cosmedocs and discover your enhanced natural beauty
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <a 
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-white text-black hover:bg-gray-200 rounded-full px-6 sm:px-8 py-3 inline-flex items-center justify-center text-base sm:text-lg font-medium transition-colors min-w-[200px]"
                >
                  Book Consultation
                </a>
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto border border-white text-white hover:bg-white hover:text-black rounded-full px-6 sm:px-8 py-3 inline-flex items-center justify-center text-base sm:text-lg font-medium transition-colors min-w-[200px]"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
