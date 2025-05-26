
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { generateSEOMetadata } from "../App";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

export default function Cosmedoc() {
  const seoData = generateSEOMetadata(
    "Cosmedoc Definition - What is a Cosmedoc?",
    "Learn what a Cosmedoc is - a medical doctor specializing in cosmetic medicine, aesthetic treatments, and non-surgical procedures to enhance appearance.",
    "/cosmedoc"
  );

  const bookingUrl = "https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29";
  const whatsappNumber = "+447735606447";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\s+/g, "")}`;

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
              "@type": "DefinedTerm",
              "name": "Cosmedoc",
              "description": "A medical doctor specializing in cosmetic medicine, including aesthetic treatments and non-surgical procedures intended to enhance appearance and rejuvenate the skin.",
              "inDefinedTermSet": "https://cosmedocs.com/cosmedoc"
            }
          `}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-white">Cosme</span>
                <span className="text-gray-300">doc</span>
              </h1>
              <div className="text-xl md:text-2xl text-gray-300 mb-8">
                <em>noun</em> | \ ˈkäz-mē-ˌdäk \<br />
                (plural: <strong>Cosmedocs</strong>)
              </div>
            </motion.div>
          </div>
        </section>

        {/* Definition Section */}
        <section className="py-16 bg-gray-50">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Definition</h2>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <p className="text-lg text-gray-700 leading-relaxed">
                  A medical doctor specializing in cosmetic medicine, including aesthetic treatments and non-surgical procedures intended to enhance appearance and rejuvenate the skin.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Examples Section */}
        <section className="py-16">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Examples</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-black">
                  <p className="text-gray-700 italic">
                    "She scheduled an appointment with her cosmedoc for dermal fillers and skin rejuvenation."
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-black">
                  <p className="text-gray-700 italic">
                    "Cosmedocs are increasingly popular due to their expertise in minimally invasive beauty treatments."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Origin Section */}
        <section className="py-16 bg-gray-50">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Origin</h2>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Blend of "cosmetic" and "doctor," coined to concisely describe medical practitioners specifically trained and qualified in cosmetic procedures.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Related Terms & Synonyms */}
        <section className="py-16">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Terms</h2>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                      Cosmetic physician
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                      Aesthetic doctor
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                      Dermatologist
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Synonyms</h2>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                      Cosmetic doctor
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                      Aesthetic practitioner
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black text-white">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl font-bold mb-6">Consult with Our Expert Cosmedocs</h2>
              <p className="text-xl text-gray-300 mb-8">
                Experience the expertise of qualified medical professionals specializing in aesthetic medicine
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 inline-flex items-center justify-center text-lg font-medium transition-colors"
                >
                  Book Consultation
                </a>
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-3 inline-flex items-center justify-center text-lg font-medium transition-colors"
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
