import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { generateSEOMetadata } from '@/utils/seo';
import Home2Header from '@/components/home2/Home2Header';
import Footer from '@/components/Footer';

const About = () => {
  const seoData = generateSEOMetadata(
    "About Cosmedocs | Doctor-Led Aesthetic Medicine Since 2007",
    "Discover the Cosmedocs philosophy of invisible art. GMC-registered practitioners on Harley Street, London. Doctor-led aesthetic medicine since 2007.",
    "/about"
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
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="keywords" content="about Cosmedocs, Harley Street aesthetic clinic philosophy, doctor-led aesthetic clinic, GMC registered, invisible art aesthetics, London" />
      </Helmet>

      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        <Home2Header />

        {/* Flowing Gold Gradient Orbs */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, #C9A050 0%, transparent 70%)',
              filter: 'blur(80px)',
            }}
            animate={{
              x: ['-10%', '5%', '-10%'],
              y: ['10%', '25%', '10%'],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute right-0 w-[500px] h-[500px] rounded-full opacity-15"
            style={{
              background: 'radial-gradient(circle, #C9A050 0%, transparent 70%)',
              filter: 'blur(100px)',
            }}
            animate={{
              x: ['10%', '-5%', '10%'],
              y: ['40%', '60%', '40%'],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[#C9A050] text-sm tracking-[0.3em] uppercase mb-4">
                Harley Street, London
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight">
                About <span className="text-[#C9A050]">Cosmedocs</span>
              </h1>
              <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Doctor-led aesthetic medicine since 2007. GMC-registered practitioners 
                dedicated to the philosophy of invisible art.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="relative py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-2 gap-16 items-center"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-light mb-8">
                  Our <span className="text-[#C9A050]">Philosophy</span>
                </h2>
                <div className="space-y-6 text-white/70 leading-relaxed">
                  <p>
                    Aesthetic medicine by Cosmedocs is minimal. Quiet, not loud. 
                    Invisible, not exaggerated. It's transformation that speaks — 
                    without saying a word.
                  </p>
                  <p>
                    We believe the most powerful enhancements are those that go unnoticed. 
                    Our approach centres on refining what already exists — creating 
                    subtle shifts that leave others wondering what's changed, but unable 
                    to pinpoint exactly what.
                  </p>
                  <p className="text-white/90 italic">
                    This is our invisible art: results that look natural because they are natural. 
                    Simply the best version of you.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A050]/20 to-transparent rounded-3xl blur-3xl" />
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10">
                  <blockquote className="text-2xl md:text-3xl font-light text-white/90 leading-relaxed">
                    "Bold • Natural • Always Your Way"
                  </blockquote>
                  <p className="mt-6 text-[#C9A050] text-sm tracking-wider uppercase">
                    The Cosmedocs Ethos
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why We Say No Section */}
        <section className="relative py-20 px-6 bg-white/[0.02]">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
                Why We Sometimes Say <span className="text-[#C9A050]">No</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Integrity Over Revenue",
                    description: "We never recommend treatments that aren't in your best interest, even when asked. Your wellbeing comes before commercial considerations."
                  },
                  {
                    title: "Longevity Over Trends",
                    description: "We focus on approaches that age gracefully with you, not fleeting aesthetic trends that may not serve you in years to come."
                  },
                  {
                    title: "Less Is Often More",
                    description: "Sometimes the most powerful recommendation is restraint. Knowing when not to treat is as important as knowing how to treat."
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                  >
                    <h3 className="text-xl font-medium text-[#C9A050] mb-4">{item.title}</h3>
                    <p className="text-white/60 leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Heritage Section */}
        <section className="relative py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-2 gap-16 items-center"
            >
              <div className="order-2 md:order-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
                    <p className="text-4xl md:text-5xl font-light text-[#C9A050]">2007</p>
                    <p className="text-white/50 text-sm mt-2">Established</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
                    <p className="text-4xl md:text-5xl font-light text-[#C9A050]">1M+</p>
                    <p className="text-white/50 text-sm mt-2">Treatments</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
                    <p className="text-4xl md:text-5xl font-light text-[#C9A050]">GMC</p>
                    <p className="text-white/50 text-sm mt-2">Registered</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
                    <p className="text-4xl md:text-5xl font-light text-[#C9A050]">4.9★</p>
                    <p className="text-white/50 text-sm mt-2">Rating</p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-light mb-8">
                  Harley Street <span className="text-[#C9A050]">Heritage</span>
                </h2>
                <div className="space-y-6 text-white/70 leading-relaxed">
                  <p>
                    Located in the heart of London's renowned medical district, Cosmedocs 
                    has been a trusted name in aesthetic medicine for nearly two decades.
                  </p>
                  <p>
                    Our GMC-registered practitioners bring together decades of combined 
                    experience, advanced training, and an unwavering commitment to the 
                    highest standards of patient care and safety.
                  </p>
                  <p>
                    Every consultation is doctor-led, ensuring you receive expert guidance 
                    tailored to your individual needs and aspirations.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Regulatory Standards Section */}
        <section className="relative py-20 px-6 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-light mb-8">
                Our <span className="text-[#C9A050]">Standards</span>
              </h2>
              <p className="text-white/70 leading-relaxed mb-12 max-w-2xl mx-auto">
                We operate under the strictest regulatory frameworks, ensuring your 
                safety and care meet the highest professional standards.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                {['GMC Registered', 'CQC Compliant', 'Save Face Accredited', 'Fully Insured'].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm border border-[#C9A050]/30 rounded-full px-6 py-3"
                  >
                    <span className="text-[#C9A050] text-sm tracking-wider">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Your Consultation <span className="text-[#C9A050]">Begins Here</span>
              </h2>
              <p className="text-white/60 mb-10 max-w-xl mx-auto">
                Considered care from Harley Street doctors
              </p>
              <a
                href="/contact"
                className="inline-block bg-[#C9A050] hover:bg-[#B8913F] text-black px-10 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default About;
