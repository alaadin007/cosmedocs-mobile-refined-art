import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { generateSEOMetadata } from '@/utils/seo';
import Home2Header from '@/components/home2/Home2Header';
import Footer from '@/components/Footer';

const ConcernsHub = () => {
  const seoData = generateSEOMetadata(
    "Skin Concerns | Understanding Your Aesthetic Goals | Cosmedocs",
    "Explore common skin and facial concerns including ageing, volume loss, pigmentation, and acne. Doctor-led guidance to help you understand your options.",
    "/concerns/"
  );

  const concerns = [
    {
      title: "Facial Ageing & Volume Loss",
      description: "As we age, the natural fat pads beneath the skin shift and diminish, while collagen production slows. This leads to hollowing in the temples and cheeks, deeper folds around the nose and mouth, and an overall loss of youthful contour.",
      relatedTreatments: [
        { name: "Cheek Enhancement", path: "/treatments/cheek-filler/" },
        { name: "Jawline Definition", path: "/treatments/jawline-filler/" },
        { name: "Temple Restoration", path: "/treatments/temple-filler/" }
      ]
    },
    {
      title: "Lines & Wrinkles",
      description: "Dynamic lines form from repeated facial expressions—frowning, squinting, smiling. Over time, these become static lines that remain visible even at rest. Understanding the difference helps determine the most appropriate approach.",
      relatedTreatments: [
        { name: "Anti-Wrinkle Treatments", path: "/treatments/botox/" },
        { name: "Skin Rejuvenation", path: "/treatments/profhilo/" }
      ]
    },
    {
      title: "Skin Texture & Tone",
      description: "Uneven skin texture, enlarged pores, dullness, and rough patches often result from sun damage, environmental factors, and the natural ageing process. Addressing texture concerns requires understanding the underlying causes.",
      relatedTreatments: [
        { name: "Chemical Peels", path: "/treatments/chemical-peel/" },
        { name: "Microneedling", path: "/treatments/microneedling/" },
        { name: "HydraFacial", path: "/treatments/hydrafacial/" }
      ]
    },
    {
      title: "Pigmentation & Discolouration",
      description: "Hyperpigmentation, melasma, age spots, and post-inflammatory marks can significantly impact skin clarity. These conditions require careful assessment as treatment approaches vary considerably based on the type and cause.",
      relatedTreatments: [
        { name: "Prescription Skincare", path: "/treatments/prescription-skincare/" },
        { name: "Chemical Peels", path: "/treatments/chemical-peel/" }
      ]
    },
    {
      title: "Acne & Scarring",
      description: "Active acne and the scars it leaves behind require different treatment strategies. Understanding your skin type, the severity of your condition, and any underlying hormonal factors is essential before determining the right path forward.",
      relatedTreatments: [
        { name: "Acne Treatment", path: "/treatments/acne-treatment/" },
        { name: "Microneedling", path: "/treatments/microneedling/" }
      ]
    },
    {
      title: "Skin Laxity & Sagging",
      description: "Loss of skin firmness occurs as collagen and elastin fibres weaken over time. The jawline softens, jowls form, and the neck loses definition. Addressing laxity often requires stimulating the skin's own regenerative processes.",
      relatedTreatments: [
        { name: "Thread Lift", path: "/treatments/thread-lift/" },
        { name: "Profhilo", path: "/treatments/profhilo/" },
        { name: "Polynucleotides", path: "/treatments/polynucleotide/" }
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
        <meta name="keywords" content="skin concerns, facial ageing, volume loss, wrinkles, pigmentation, acne scarring, skin laxity, aesthetic concerns London" />
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
                Understanding Your Concerns
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight">
                Skin & Facial <span className="text-[#C9A050]">Concerns</span>
              </h1>
              <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
                Before considering any treatment, it's essential to understand what's actually 
                happening beneath the surface. This educational guide explores common concerns 
                and their underlying causes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Philosophy Note */}
        <section className="relative py-12 px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-[#C9A050]/20 rounded-2xl p-8 text-center"
            >
              <p className="text-white/80 leading-relaxed italic">
                "Assessment matters more than treatment selection. Understanding why a concern exists 
                is the first step toward addressing it appropriately. We believe in education before 
                intervention."
              </p>
              <p className="text-[#C9A050] text-sm mt-4 tracking-wider">
                The Cosmedocs Philosophy
              </p>
            </motion.div>
          </div>
        </section>

        {/* Concerns Grid */}
        <section className="relative py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {concerns.map((concern, i) => (
                <motion.div
                  key={concern.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#C9A050]/30 transition-colors"
                >
                  <h3 className="text-xl font-medium text-[#C9A050] mb-4">{concern.title}</h3>
                  <p className="text-white/60 leading-relaxed mb-6">{concern.description}</p>
                  
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-3">Related Treatments</p>
                    <div className="flex flex-wrap gap-2">
                      {concern.relatedTreatments.map((treatment) => (
                        <Link
                          key={treatment.path}
                          to={treatment.path}
                          className="text-sm text-white/70 hover:text-[#C9A050] transition-colors"
                        >
                          {treatment.name} →
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Assessment CTA */}
        <section className="relative py-20 px-6 bg-white/[0.02]">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Not Sure Where to <span className="text-[#C9A050]">Start?</span>
              </h2>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                A consultation with our doctors will help identify the underlying causes of your 
                concerns and determine whether treatment is appropriate for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/advanced-consultation/"
                  className="inline-block bg-[#C9A050] hover:bg-[#B8913F] text-black px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105"
                >
                  Book Consultation
                </Link>
                <Link
                  to="/treatments/"
                  className="inline-block border border-white/20 hover:border-[#C9A050]/50 text-white px-8 py-4 rounded-full font-medium transition-all duration-300"
                >
                  Browse Treatments
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ConcernsHub;
