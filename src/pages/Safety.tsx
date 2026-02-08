import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { generateSEOMetadata } from '@/utils/seo';
import { ShieldCheck, Award, FileText, Users, AlertCircle, CheckCircle } from 'lucide-react';

const Safety = () => {
  const seoData = generateSEOMetadata(
    "Safety & Standards | GMC Registered Doctors | Cosmedocs",
    "Your safety is paramount. GMC-registered doctors, CQC compliant, Save Face accredited. Learn about our clinical protocols and patient safety standards at Cosmedocs Harley Street.",
    "/safety/"
  );

  const accreditations = [
    {
      icon: Award,
      title: "GMC Registered",
      description: "All our doctors are registered with the General Medical Council, ensuring they meet the highest professional and ethical standards required to practise medicine in the UK."
    },
    {
      icon: ShieldCheck,
      title: "CQC Compliant",
      description: "Our clinic operates in accordance with Care Quality Commission guidelines, maintaining rigorous standards for safety, effectiveness, and patient care."
    },
    {
      icon: Award,
      title: "Save Face Accredited",
      description: "Save Face is a government-approved register of accredited practitioners. Our inclusion demonstrates adherence to strict clinical and ethical standards."
    },
    {
      icon: FileText,
      title: "Fully Insured",
      description: "Comprehensive medical indemnity insurance protects both our practitioners and patients, providing peace of mind for every procedure."
    }
  ];

  const safetyPrinciples = [
    {
      title: "Doctor-Led Care",
      description: "Every patient receives a consultation with a qualified doctor before any treatment. We never delegate initial assessments to non-medical staff."
    },
    {
      title: "Informed Consent",
      description: "We take time to explain procedures, risks, alternatives, and realistic outcomes. You'll never feel rushed into a decision."
    },
    {
      title: "Right to Decline",
      description: "Our doctors will decline treatment if they believe it's not in your best interest, regardless of commercial considerations."
    },
    {
      title: "Cooling-Off Period",
      description: "For first-time patients, we recommend and respect a cooling-off period between consultation and treatment."
    },
    {
      title: "Emergency Protocols",
      description: "All practitioners are trained in complication management. Emergency equipment and medications are available on-site at all times."
    },
    {
      title: "Aftercare Support",
      description: "Post-treatment care instructions are provided, and our clinical team remains available for any concerns that arise."
    }
  ];

  const whatToExpect = [
    {
      step: "Before",
      items: [
        "Medical history review",
        "Discussion of goals and expectations",
        "Explanation of procedure and risks",
        "Written consent process",
        "Photography for records (with consent)"
      ]
    },
    {
      step: "During",
      items: [
        "Sterile clinical environment",
        "Medical-grade products only",
        "Careful technique",
        "Comfort measures as needed",
        "Real-time assessment"
      ]
    },
    {
      step: "After",
      items: [
        "Written aftercare instructions",
        "Direct contact for concerns",
        "Follow-up appointment if needed",
        "Complication support available",
        "Treatment records maintained"
      ]
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
        <meta name="keywords" content="aesthetic safety, GMC registered doctors, CQC compliant, Save Face accredited, Harley Street clinic safety, patient safety aesthetics" />
      </Helmet>

      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        

        {/* Hero Section */}
        <section className="relative pt-32 pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[#C9A050] text-sm tracking-[0.3em] uppercase mb-4">
                Your Safety First
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight">
                Safety & <span className="text-[#C9A050]">Standards</span>
              </h1>
              <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
                In aesthetic medicine, trust is earned through transparency and unwavering 
                commitment to patient safety. Here's how we protect you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Accreditations Grid */}
        <section className="relative py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-light">
                Our <span className="text-[#C9A050]">Accreditations</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {accreditations.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8"
                >
                  <item.icon className="w-10 h-10 text-[#C9A050] mb-4" />
                  <h3 className="text-xl font-medium text-white mb-3">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Principles */}
        <section className="relative py-16 px-6 bg-white/[0.02]">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-light mb-4">
                Our Safety <span className="text-[#C9A050]">Principles</span>
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                These principles guide every interaction and procedure at Cosmedocs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {safetyPrinciples.map((principle, i) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-6"
                >
                  <CheckCircle className="w-6 h-6 text-[#C9A050] mb-3" />
                  <h3 className="text-white font-medium mb-2">{principle.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="relative py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-light mb-4">
                What to <span className="text-[#C9A050]">Expect</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {whatToExpect.map((phase, i) => (
                <motion.div
                  key={phase.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6"
                >
                  <div className="text-[#C9A050] text-xs uppercase tracking-wider mb-4">
                    {phase.step} Your Appointment
                  </div>
                  <ul className="space-y-3">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-white/70 text-sm">
                        <CheckCircle className="w-4 h-4 text-[#C9A050] mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Red Flags Section */}
        <section className="relative py-16 px-6 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8"
            >
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-red-400 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-medium text-white mb-4">
                    Red Flags to Watch For
                  </h3>
                  <p className="text-white/70 mb-6">
                    When choosing an aesthetic provider, be wary of these warning signs:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-3 text-white/60 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">•</span>
                      Pressure to book immediately or "special offers" expiring today
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">•</span>
                      No face-to-face consultation before treatment
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">•</span>
                      Unable or unwilling to show qualifications
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">•</span>
                      Treatments performed in non-clinical settings
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">•</span>
                      Vague about product brands or origins
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">•</span>
                      Prices that seem too good to be true
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Team CTA */}
        <section className="relative py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Users className="w-12 h-12 text-[#C9A050] mx-auto mb-6" />
              <h2 className="text-3xl font-light mb-6">
                Meet Our <span className="text-[#C9A050]">Doctors</span>
              </h2>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                Learn about the qualifications and experience of our GMC-registered practitioners.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/our-team/"
                  className="inline-block bg-[#C9A050] hover:bg-[#B8913F] text-black px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105"
                >
                  View Our Team
                </Link>
                <Link
                  to="/contact/"
                  className="inline-block border border-white/20 hover:border-[#C9A050]/50 text-white px-8 py-4 rounded-full font-medium transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        
      </div>
    </>
  );
};

export default Safety;
