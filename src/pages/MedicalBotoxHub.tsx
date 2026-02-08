import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { generateSEOMetadata } from '@/utils/seo';
import Home2Header from '@/components/home2/Home2Header';
import Footer from '@/components/Footer';

const MedicalBotoxHub = () => {
  const seoData = generateSEOMetadata(
    "Medical Botox Treatments | Hyperhidrosis, Bruxism, Migraine | Cosmedocs",
    "Clinical botulinum toxin treatments for medical conditions including excessive sweating, jaw clenching, TMJ, and chronic migraine. GMC-registered doctors, Harley Street.",
    "/medical/"
  );

  const conditions = [
    {
      id: "hyperhidrosis",
      title: "Hyperhidrosis",
      subtitle: "Excessive Sweating",
      description: "Hyperhidrosis is a medical condition characterised by sweating that exceeds what is necessary for temperature regulation. It can significantly impact daily life, causing social anxiety and practical difficulties.",
      areas: ["Underarms (axillae)", "Palms (palmar)", "Feet (plantar)", "Forehead"],
      mechanism: "Botulinum toxin blocks the release of acetylcholine at the junction between nerve fibres and sweat glands, temporarily reducing sweat production in the treated area.",
      duration: "Results typically last 4-9 months, varying by individual and treatment area.",
      path: "/medical/botox-for-hyperhidrosis/"
    },
    {
      id: "bruxism",
      title: "Bruxism & TMJ",
      subtitle: "Jaw Clenching & Grinding",
      description: "Bruxism involves involuntary clenching or grinding of teeth, often during sleep. This can lead to jaw pain, headaches, tooth damage, and temporomandibular joint (TMJ) dysfunction.",
      areas: ["Masseter muscles", "Temporalis muscles"],
      mechanism: "By relaxing the masseter muscles, botulinum toxin reduces the force of clenching. This doesn't affect normal functions like chewing or speaking but limits the damaging grinding forces.",
      duration: "Effects typically last 3-6 months. Some patients find they can extend intervals between treatments over time.",
      path: "/treatments/masseter-botox/"
    },
    {
      id: "migraine",
      title: "Chronic Migraine",
      subtitle: "Preventive Treatment",
      description: "Chronic migraine is defined as experiencing 15 or more headache days per month, with at least 8 having migraine features. Botulinum toxin is a licensed preventive treatment for this condition.",
      areas: ["Frontalis", "Corrugator", "Procerus", "Occipitalis", "Temporalis", "Trapezius", "Cervical paraspinal"],
      mechanism: "The exact mechanism for migraine prevention isn't fully understood, but it's believed to block pain signals and reduce muscle tension that can trigger migraines.",
      duration: "Treatment involves injections at 31-39 sites every 12 weeks. Benefits may take 2-3 treatment cycles to become fully apparent.",
      path: "/medical/botox-for-migraines/"
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
        <meta name="keywords" content="medical botox, hyperhidrosis treatment, excessive sweating botox, bruxism treatment, TMJ botox, chronic migraine botox, Harley Street" />
      </Helmet>

      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        <Home2Header />

        {/* Hero Section */}
        <section className="relative pt-32 pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Link to="/treatments/botox/" className="text-white/50 hover:text-white/80 text-sm">
                  Botox Treatments
                </Link>
                <span className="text-white/30">/</span>
                <span className="text-[#C9A050] text-sm">Medical</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight">
                Medical <span className="text-[#C9A050]">Botox</span>
              </h1>
              <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
                Botulinum toxin has established medical applications beyond cosmetic use. 
                These clinical treatments address genuine health conditions that can 
                significantly impact quality of life.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Clinical Distinction Notice */}
        <section className="relative py-8 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#C9A050]/10 border border-[#C9A050]/30 rounded-2xl p-6 text-center"
            >
              <p className="text-white/80 text-sm">
                <span className="text-[#C9A050] font-medium">Clinical Treatments</span> — These pages 
                cover medical indications for botulinum toxin. For cosmetic anti-wrinkle treatments, 
                please visit our <Link to="/treatments/botox/" className="text-[#C9A050] underline hover:no-underline">Botox treatments hub</Link>.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Conditions */}
        <section className="relative py-16 px-6">
          <div className="max-w-5xl mx-auto space-y-12">
            {conditions.map((condition, i) => (
              <motion.article
                key={condition.id}
                id={condition.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  <div className="flex-1">
                    <span className="text-[#C9A050] text-xs uppercase tracking-wider bg-[#C9A050]/10 px-3 py-1 rounded-full">
                      Medical Indication
                    </span>
                    <h2 className="text-2xl md:text-3xl font-light mt-4 mb-2">{condition.title}</h2>
                    <p className="text-white/50 text-sm mb-6">{condition.subtitle}</p>
                    
                    <p className="text-white/70 leading-relaxed mb-6">{condition.description}</p>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-white/90 font-medium mb-2 text-sm uppercase tracking-wider">Treatment Areas</h3>
                        <div className="flex flex-wrap gap-2">
                          {condition.areas.map((area) => (
                            <span key={area} className="text-white/60 text-sm bg-white/5 px-3 py-1 rounded-full">
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-white/90 font-medium mb-2 text-sm uppercase tracking-wider">How It Works</h3>
                        <p className="text-white/60 text-sm leading-relaxed">{condition.mechanism}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-white/90 font-medium mb-2 text-sm uppercase tracking-wider">Expected Duration</h3>
                        <p className="text-white/60 text-sm leading-relaxed">{condition.duration}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-48 flex md:flex-col gap-3">
                    <Link
                      to={condition.path}
                      className="flex-1 md:flex-none text-center border border-[#C9A050]/50 hover:bg-[#C9A050] hover:text-black text-[#C9A050] px-6 py-3 rounded-full text-sm font-medium transition-all duration-300"
                    >
                      Full Details →
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Assessment Section */}
        <section className="relative py-16 px-6 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-light mb-4">
                Medical <span className="text-[#C9A050]">Assessment</span>
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                All medical botox treatments begin with a thorough clinical consultation to ensure 
                the treatment is appropriate for your condition.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  step: "1",
                  title: "Medical History",
                  description: "Review of your condition, previous treatments, medications, and any contraindications."
                },
                {
                  step: "2",
                  title: "Clinical Examination",
                  description: "Physical assessment relevant to your condition—muscle activity, sweating patterns, or migraine triggers."
                },
                {
                  step: "3",
                  title: "Treatment Plan",
                  description: "Discussion of expected outcomes, treatment protocol, and follow-up arrangements."
                }
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-6"
                >
                  <div className="w-10 h-10 rounded-full bg-[#C9A050]/20 text-[#C9A050] flex items-center justify-center font-medium mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-white font-medium mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
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
                Your Consultation <span className="text-[#C9A050]">Begins Here</span>
              </h2>
              <p className="text-white/60 mb-8">
                Considered care from Harley Street doctors
              </p>
              <a
                href="https://med.as.me/harleystreet"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#C9A050] hover:bg-[#B8913F] text-black px-10 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105"
              >
                Book Medical Consultation
              </a>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default MedicalBotoxHub;
