import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { generateSEOMetadata } from '@/utils/seo';
import Home2Header from '@/components/home2/Home2Header';
import Footer from '@/components/Footer';
import { Stethoscope, ShieldCheck, FileText, UserCheck } from 'lucide-react';

const MedicalHub = () => {
  const seoData = generateSEOMetadata(
    "Medical Treatments | Clinical Procedures | Cosmedocs Harley Street",
    "GMC-registered doctors providing medical treatments including hyperhidrosis, bruxism, TMJ, and migraine. Clinical care on Harley Street, London.",
    "/medical/"
  );

  const medicalServices = [
    {
      title: "Hyperhidrosis Treatment",
      subtitle: "Excessive Sweating",
      description: "Botulinum toxin injections can effectively reduce excessive sweating in the underarms, palms, and feet. This medical treatment blocks the nerve signals that trigger sweat glands, providing relief for several months.",
      path: "/treatments/hyperhidrosis-botox/",
      clinical: true
    },
    {
      title: "Bruxism & TMJ Management",
      subtitle: "Jaw Clenching & Tension",
      description: "Chronic jaw clenching and teeth grinding can cause significant pain and dental damage. Targeted muscle relaxation using botulinum toxin can reduce the force of clenching and alleviate associated symptoms.",
      path: "/treatments/masseter-botox/",
      clinical: true
    },
    {
      title: "Chronic Migraine",
      subtitle: "Preventive Treatment",
      description: "For patients experiencing 15 or more headache days per month, botulinum toxin is a licensed preventive treatment. Multiple injection sites around the head and neck can reduce migraine frequency and severity.",
      path: "/treatments/trigger-point-botox/",
      clinical: true
    },
    {
      title: "Private GP Services",
      subtitle: "General Medical Care",
      description: "Access to experienced private doctors for general health concerns, health screenings, referrals, and ongoing medical management in a comfortable Harley Street setting.",
      path: "/treatments/private-gp/",
      clinical: true
    }
  ];

  const clinicalStandards = [
    {
      icon: Stethoscope,
      title: "GMC-Registered Doctors",
      description: "All procedures performed by fully registered medical practitioners"
    },
    {
      icon: ShieldCheck,
      title: "Clinical Protocols",
      description: "Strict adherence to medical guidelines and safety standards"
    },
    {
      icon: FileText,
      title: "Medical Records",
      description: "Comprehensive documentation and referral pathways maintained"
    },
    {
      icon: UserCheck,
      title: "Patient Assessment",
      description: "Thorough medical history review before any treatment"
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
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="medical treatments London, hyperhidrosis treatment, bruxism treatment, TMJ botox, migraine treatment, private GP Harley Street" />
      </Helmet>

      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        <Home2Header />

        {/* Subtle gradient background */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              background: 'radial-gradient(ellipse at 50% 0%, #C9A050 0%, transparent 50%)',
            }}
          />
        </div>

        {/* Hero Section */}
        <section className="relative pt-32 pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[#C9A050] text-sm tracking-[0.3em] uppercase mb-4">
                Harley Street Clinical Care
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight">
                Medical <span className="text-[#C9A050]">Treatments</span>
              </h1>
              <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
                Doctor-led medical procedures for conditions requiring clinical expertise. 
                All treatments are provided by GMC-registered practitioners following 
                strict medical protocols.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Clinical Standards */}
        <section className="relative py-12 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {clinicalStandards.map((standard, i) => (
                <motion.div
                  key={standard.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 text-center"
                >
                  <standard.icon className="w-8 h-8 text-[#C9A050] mx-auto mb-3" />
                  <p className="text-white/90 text-sm font-medium mb-1">{standard.title}</p>
                  <p className="text-white/50 text-xs">{standard.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Medical Services */}
        <section className="relative py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-light text-center">
                Clinical <span className="text-[#C9A050]">Services</span>
              </h2>
            </motion.div>

            <div className="space-y-6">
              {medicalServices.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#C9A050]/30 transition-all group"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[#C9A050] text-xs uppercase tracking-wider bg-[#C9A050]/10 px-3 py-1 rounded-full">
                          Medical
                        </span>
                      </div>
                      <h3 className="text-xl font-medium text-white mb-1">{service.title}</h3>
                      <p className="text-white/50 text-sm mb-4">{service.subtitle}</p>
                      <p className="text-white/60 leading-relaxed">{service.description}</p>
                    </div>
                    <div className="md:text-right">
                      <Link
                        to={service.path}
                        className="inline-block border border-[#C9A050]/50 hover:bg-[#C9A050] hover:text-black text-[#C9A050] px-6 py-3 rounded-full text-sm font-medium transition-all duration-300"
                      >
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="relative py-12 px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/20 rounded-2xl p-8"
            >
              <h3 className="text-lg font-medium text-white mb-4">Important Information</h3>
              <div className="space-y-3 text-white/60 text-sm leading-relaxed">
                <p>
                  Medical treatments at Cosmedocs are provided following a thorough clinical assessment. 
                  We may decline treatment if it is not clinically appropriate for your condition.
                </p>
                <p>
                  For certain conditions, we may recommend referral to specialist services or your 
                  NHS GP for further investigation before proceeding with treatment.
                </p>
                <p>
                  All medical treatments are subject to a consultation fee. Please bring any relevant 
                  medical records, medication lists, or referral letters to your appointment.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-light mb-6">
                Book a Medical <span className="text-[#C9A050]">Consultation</span>
              </h2>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                Speak with one of our GMC-registered doctors to discuss your medical concerns 
                and explore appropriate treatment options.
              </p>
              <a
                href="https://med.as.me/harleystreet"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#C9A050] hover:bg-[#B8913F] text-black px-10 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105"
              >
                Book Consultation
              </a>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default MedicalHub;
