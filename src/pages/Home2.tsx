import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Shield, Clock, Star, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Home2Header from "@/components/home2/Home2Header";
import Footer from "@/components/Footer";

const popularTreatments = [
  {
    title: "Botox",
    subtitle: "Anti-Wrinkle",
    description: "Smooth forehead lines, frown lines & crow's feet",
    price: "From £195",
    link: "/botox-london",
    popular: true,
  },
  {
    title: "Lip Fillers",
    subtitle: "Enhancement",
    description: "Natural-looking volume & definition",
    price: "From £320",
    link: "/lip-fillers",
    popular: true,
  },
  {
    title: "Cheek Filler",
    subtitle: "Contouring",
    description: "Restore volume & sculpt cheekbones",
    price: "From £380",
    link: "/cheek-filler",
  },
  {
    title: "Jawline Filler",
    subtitle: "Definition",
    description: "Create a sharper, more defined jawline",
    price: "From £450",
    link: "/jawline-filler",
  },
  {
    title: "Profhilo",
    subtitle: "Skin Quality",
    description: "Bio-remodelling for radiant, hydrated skin",
    price: "From £300",
    link: "/profhilo",
  },
  {
    title: "Tear Trough",
    subtitle: "Under Eye",
    description: "Reduce dark circles & hollowing",
    price: "From £450",
    link: "/tear-trough-filler",
  },
];

const trustPoints = [
  { icon: Shield, text: "GMC-registered doctors" },
  { icon: Clock, text: "17+ years experience" },
  { icon: Star, text: "1M+ treatments performed" },
  { icon: Sparkles, text: "Harley Street clinic" },
];

export default function Home2() {
  return (
    <>
      <Helmet>
        <title>CosmeDocs | Aesthetic Medicine | Harley Street London</title>
        <meta name="description" content="Award-winning aesthetic clinic on Harley Street. Botox, dermal fillers, skin treatments by GMC-registered doctors. Natural results, invisible art." />
      </Helmet>

      <Home2Header />

      <main className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 md:pt-40 pb-20 md:pb-32 overflow-hidden">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-amber-50/50 via-white to-white" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-100/50 rounded-full blur-3xl" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-amber-600 font-medium mb-4">Harley Street, London</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Aesthetic medicine that speaks
                  <span className="text-amber-600"> without saying a word</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
                  Our aesthetics is invisible art. Quiet, not loud. 
                  Transformations that whisper rather than shout.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  onClick={() => window.open('https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29', '_blank')}
                  className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-8 py-6 text-base font-medium"
                >
                  Book Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.dispatchEvent(new CustomEvent('open-chatbot'))}
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full px-8 py-6 text-base font-medium"
                >
                  Ask Our AI Doctor
                </Button>
              </motion.div>

              {/* Trust strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-12 flex flex-wrap gap-6"
              >
                {trustPoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <point.icon className="h-4 w-4 text-amber-600" />
                    <span>{point.text}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Popular Treatments */}
        <section className="py-20 md:py-32 bg-gray-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-amber-600 font-medium mb-2">Treatments</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Most Popular
                </h2>
              </div>
              <Link 
                to="/treatments" 
                className="hidden md:flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                View all treatments
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularTreatments.map((treatment, index) => (
                <motion.div
                  key={treatment.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link
                    to={treatment.link}
                    className="group block bg-white rounded-2xl p-6 border border-gray-100 hover:border-amber-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">
                          {treatment.title}
                        </h3>
                        <p className="text-sm text-amber-600">{treatment.subtitle}</p>
                      </div>
                      {treatment.popular && (
                        <span className="bg-amber-100 text-amber-700 text-xs font-medium px-2 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{treatment.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-900">{treatment.price}</span>
                      <span className="text-sm text-gray-500 group-hover:text-amber-600 transition-colors flex items-center gap-1">
                        Learn more
                        <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center md:hidden">
              <Link 
                to="/treatments" 
                className="inline-flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                View all treatments
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-amber-600 font-medium mb-4">Our Philosophy</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Bold. Natural. Always Your Way.
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Aesthetic medicine by CosmeDocs is minimal. Quiet, not loud. 
                  Invisible, not exaggerated. It's transformation that speaks — 
                  without saying a word.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/about">
                    <Button
                      variant="outline"
                      className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full px-6"
                    >
                      About Our Approach
                    </Button>
                  </Link>
                  <Link to="/before-after-gallery">
                    <Button
                      variant="outline"
                      className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full px-6"
                    >
                      View Results
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to begin your journey?
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                Book a consultation with our GMC-registered doctors at our Harley Street clinic.
              </p>
              <Button
                onClick={() => window.open('https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29', '_blank')}
                className="bg-white hover:bg-gray-100 text-gray-900 rounded-full px-8 py-6 text-base font-medium"
              >
                Book Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Hidden SEO content */}
      <div className="sr-only">
        <p>
          CosmeDocs is London's premier aesthetic medicine clinic located on prestigious Harley Street, offering advanced cosmetic treatments since 2007. Our expert practitioners specialise in Botox injections, dermal fillers, lip enhancement, non-surgical nose jobs, skin boosters, and comprehensive facial rejuvenation treatments. With over 1 million injections performed, we are recognised leaders in aesthetic medicine, providing natural-looking results through our invisible art philosophy.
        </p>
      </div>
    </>
  );
}
