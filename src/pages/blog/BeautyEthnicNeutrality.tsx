import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { generateSEOMetadata } from "@/utils/seo";
import { Card, CardContent } from "@/components/ui/card";
import Home2Header from "@/components/home2/Home2Header";
import BlogSidebar from "@/components/blog/BlogSidebar";
import Footer from "@/components/Footer";

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const BeautyEthnicNeutrality = () => {
  const seoData = generateSEOMetadata(
    "Beauty as Ethnic Neutrality: Aesthetic Harmony Beyond Race | CosmeTalk™",
    "Universal beauty transcends ethnicity. Facial harmony, balance & symmetry define aesthetic excellence across all races.",
    "/blog/beauty-ethnic-neutrality"
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Beauty as Ethnic Neutrality: Aesthetic Harmony Beyond Race",
    description: "Exploring how universal beauty standards transcend ethnicity through facial harmony and balance",
    author: {
      "@type": "Organization",
      name: "CosmeDocs",
      address: {
        "@type": "PostalAddress",
        streetAddress: "10 Harley Street",
        addressLocality: "London",
        addressRegion: "Greater London",
        postalCode: "W1G 9PF",
        addressCountry: "GB",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "CosmeDocs",
      logo: { "@type": "ImageObject", url: "https://www.cosmedocs.com/logo.png" },
      address: {
        "@type": "PostalAddress",
        streetAddress: "10 Harley Street",
        addressLocality: "London",
        addressRegion: "Greater London",
        postalCode: "W1G 9PF",
        addressCountry: "GB",
      },
    },
    datePublished: "2024-01-15",
    dateModified: "2024-01-15",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.cosmedocs.com/blog/beauty-ethnic-neutrality",
    },
  };

  const modelAnalysis = [
    { label: "a", origin: "Southeast Asia (Philippines/Malaysia)", features: "Warm undertones, almond-shaped eyes, balanced facial thirds" },
    { label: "b", origin: "East Asia (China/Korea)", features: "Refined bone structure, gentle canthal tilt, harmonious proportions" },
    { label: "c", origin: "Northern Europe (Scandinavia)", features: "Soft facial contours, symmetrical features, balanced midface projection" },
    { label: "d", origin: "South Asia (India/Pakistan)", features: "Strong bone structure, defined jawline, expressive eyes" },
    { label: "e", origin: "East Asia (Japan/Korea)", features: "Delicate features, smooth facial transitions, natural harmony" },
    { label: "f", origin: "Middle East/Mediterranean", features: "Striking facial balance, defined features, natural symmetry" },
  ];

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
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.image} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-black text-white">
        <Home2Header />

        {/* Hero */}
        <header className="relative pt-28 pb-12 px-6 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              className="absolute w-[500px] h-[500px] rounded-full opacity-10 -top-40 -right-40"
              style={{ background: "radial-gradient(circle, #C9A050 0%, transparent 70%)", filter: "blur(100px)" }}
            />
          </div>
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="text-[#C9A050] text-xs tracking-[0.25em] uppercase font-medium">
                CosmeTalk™ Series
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight mt-4 mb-4 leading-[1.1]">
                🧬 Beauty as Ethnic Neutrality:{" "}
                <span className="text-[#C9A050] font-light">Aesthetic Harmony Beyond Race</span>
              </h1>
              <p className="text-white/40 text-sm font-light">By CosmeDocs • Published January 15, 2024</p>
            </motion.div>
          </div>
        </header>

        {/* Content + Sidebar */}
        <div className="max-w-7xl mx-auto px-4 pb-20">
          <div className="grid lg:grid-cols-[1fr_240px] gap-10">
            {/* Main Content */}
            <article className="max-w-3xl">

              {/* Key Reference */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="mb-10">
                <div className="p-5 bg-white/[0.03] border border-[#C9A050]/20 rounded-xl">
                  <h3 className="text-sm font-medium text-[#C9A050] mb-2">📖 Key Reference</h3>
                  <p className="text-white/45 text-sm font-light leading-relaxed">
                    Liew S, et al. Consensus on Changing Trends, Attitudes and Concepts of Asian Beauty.{" "}
                    <em>Aesthetic Plastic Surgery</em>. 2016.{" "}
                    <a href="#" className="text-[#C9A050] hover:underline ml-1">View Study</a>
                  </p>
                </div>
              </motion.div>

              {/* Featured Image — natural aspect ratio, no cropping */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="mb-10">
                <div className="rounded-xl overflow-hidden border border-white/[0.08]">
                  <img
                    src="/lovable-uploads/95a2c194-5d44-4495-8025-de676d437b8d.png"
                    alt="Models from different continents demonstrating ethnic neutrality in beauty"
                    className="w-full object-contain"
                  />
                </div>
                <p className="text-center text-white/35 text-xs italic mt-3 font-light">
                  Models from across the globe — beauty lies in balance and harmony, not origin.
                </p>
              </motion.div>

              {/* Model Analysis Grid */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-14"
              >
                {modelAnalysis.map((model) => (
                  <motion.div key={model.label} variants={fade}>
                    <div className="p-4 bg-white/[0.03] border border-white/[0.08] rounded-lg hover:border-[#C9A050]/20 transition-colors">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-7 h-7 bg-[#C9A050]/10 text-[#C9A050] rounded-full flex items-center justify-center font-medium text-xs">
                          {model.label.toUpperCase()}
                        </div>
                        <h4 className="font-medium text-white/70 text-xs">{model.origin}</h4>
                      </div>
                      <p className="text-white/40 text-xs font-light">{model.features}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Article Sections */}
              <div className="space-y-14">

                {/* Introduction */}
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
                  <h2 className="text-2xl font-light mb-5">👁️‍🗨️ Introduction</h2>
                  <div className="space-y-4 text-white/55 text-base font-light leading-relaxed">
                    <p>What do we find beautiful — and why do some faces captivate across all cultures?</p>
                    <p>
                      In the world of aesthetics, the idea of "universal beauty" is no longer just a theory. As more
                      global research and clinical consensus emerges, one fascinating concept rises above the rest:
                    </p>
                    <p className="text-white/70 font-medium">
                      The most attractive faces, across all ethnicities, tend to share traits of what can be called
                      "ethnic neutrality."
                    </p>
                    <p>
                      This doesn't mean erasing identity or conforming to one race's standards. Instead, it highlights a
                      powerful truth: beauty lies in balance, harmony, and symmetry, regardless of background.
                    </p>
                  </div>
                </motion.section>

                <div className="h-px bg-white/[0.06]" />

                {/* What Is Ethnic Neutrality */}
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
                  <h2 className="text-2xl font-light mb-5">🔍 What Is Ethnic Neutrality?</h2>
                  <div className="space-y-4 text-white/55 text-base font-light leading-relaxed">
                    <p>
                      Ethnic neutrality in beauty refers to a set of facial proportions, contours, and symmetries that
                      transcend race or region. It's not about homogenising features — it's about how refinement and
                      balance make a face appear universally appealing.
                    </p>
                  </div>
                  <blockquote className="my-8 py-5 px-8 border-l-2 border-[#C9A050]/40 bg-white/[0.02] rounded-r-xl">
                    <p className="text-lg font-light italic text-white/60 leading-relaxed">
                      "The most beautiful and attractive people of each and all races tend to look similar in terms of
                      face shape, and harmonious delicacy of features, balance, and symmetry."
                    </p>
                    <p className="text-white/30 text-sm mt-2 font-light">
                      — Liew et al., Aesthetic Plastic Surgery, 2016
                    </p>
                  </blockquote>
                  <p className="text-white/55 text-base font-light leading-relaxed">
                    In contrast, as faces become less balanced, more distinct ethnic markers become dominant.
                  </p>
                </motion.section>

                <div className="h-px bg-white/[0.06]" />

                {/* Aesthetic Practice */}
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
                  <h2 className="text-2xl font-light mb-5">🎯 What This Means in Aesthetic Practice</h2>
                  <div className="space-y-4 text-white/55 text-base font-light leading-relaxed">
                    <p>In clinic, we often see this play out subtly. Patients don't request to "look Western," but instead ask for:</p>
                    <ul className="space-y-2 pl-5">
                      <li className="flex items-start gap-2">
                        <span className="text-[#C9A050] mt-1.5">•</span> Softer contours
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C9A050] mt-1.5">•</span> Sharper definition
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C9A050] mt-1.5">•</span> Balanced proportions
                      </li>
                    </ul>
                    <p>The most sought-after looks increasingly include:</p>
                    <ul className="space-y-2 pl-5">
                      <li className="flex items-start gap-2"><span className="text-[#C9A050] mt-1.5">•</span> Midface projection</li>
                      <li className="flex items-start gap-2"><span className="text-[#C9A050] mt-1.5">•</span> Defined but soft jawlines</li>
                      <li className="flex items-start gap-2"><span className="text-[#C9A050] mt-1.5">•</span> Lifted lateral brows</li>
                      <li className="flex items-start gap-2"><span className="text-[#C9A050] mt-1.5">•</span> Fuller lips with natural vermillion balance</li>
                      <li className="flex items-start gap-2"><span className="text-[#C9A050] mt-1.5">•</span> Straighter nose bridges — not necessarily high, but smooth</li>
                    </ul>
                    <p className="text-white/70 font-medium">These changes reflect a desire for facial harmony, not racial conformity.</p>
                  </div>
                </motion.section>

                <div className="h-px bg-white/[0.06]" />

                {/* Cultural Identity */}
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
                  <h2 className="text-2xl font-light mb-5">🧠 Is Ethnic Neutrality a Risk to Cultural Identity?</h2>
                  <p className="text-white/70 font-medium mb-4">Absolutely not.</p>
                  <p className="text-white/55 text-base font-light leading-relaxed mb-6">
                    The point is not to erase ethnicity — but rather to celebrate how beauty refines diversity.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    {[
                      { title: "Korean Beauty", desc: "Retains Korean identity but often shows stronger canthal tilt and higher midface projection." },
                      { title: "African Beauty", desc: "Maintains ethnic beauty while displaying proportional features and symmetry." },
                      { title: "Indian Beauty", desc: "Showcases cultural traits with smoothed contours and brighter skin tone." },
                    ].map((item) => (
                      <div key={item.title} className="p-4 bg-white/[0.03] border border-white/[0.08] rounded-lg">
                        <h4 className="font-medium text-white/70 text-sm mb-2">{item.title}</h4>
                        <p className="text-white/40 text-xs font-light leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-white/70 font-medium text-sm">Ethnic neutrality is the balance point, not a blank slate.</p>
                </motion.section>

                <div className="h-px bg-white/[0.06]" />

                {/* Science of Aesthetic Balance */}
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
                  <h2 className="text-2xl font-light mb-5">🔬 The Science of Aesthetic Balance</h2>
                  <p className="text-white/55 text-base font-light leading-relaxed mb-6">
                    Across facial aesthetics research, certain constants emerge:
                  </p>
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-white/[0.04]">
                          <th className="border border-white/[0.08] p-3 text-left text-sm font-medium text-white/60">Trait</th>
                          <th className="border border-white/[0.08] p-3 text-center text-sm font-medium text-white/60">Universally Attractive</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          "Facial symmetry",
                          "Smooth jawline-to-neck transition",
                          "Balanced facial thirds",
                          "Gentle canthal tilt",
                          "Lip-to-chin harmony",
                          "Defined yet natural midface",
                        ].map((trait) => (
                          <tr key={trait}>
                            <td className="border border-white/[0.08] p-3 text-sm text-white/50 font-light">{trait}</td>
                            <td className="border border-white/[0.08] p-3 text-center text-[#C9A050]">✅</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.section>

                <div className="h-px bg-white/[0.06]" />

                {/* Aesthetic Treatments */}
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
                  <h2 className="text-2xl font-light mb-5">💉 Treatments That Enhance Neutral Harmony</h2>
                  <p className="text-white/55 text-base font-light leading-relaxed mb-6">
                    If a patient seeks subtle refinement while maintaining identity, we recommend:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="p-5 bg-white/[0.03] border border-[#C9A050]/15 rounded-xl">
                      <h4 className="font-medium text-[#C9A050] text-sm mb-3">✔️ Non-Surgical</h4>
                      <ul className="space-y-2 text-white/45 text-sm font-light">
                        <li>• Hyaluronic acid fillers (midface, chin, nose)</li>
                        <li>• Botulinum toxin for shaping brow & jawline</li>
                        <li>• Skin resurfacing for even tone and texture</li>
                        <li>• Polynucleotides / PRP for dermal quality</li>
                      </ul>
                    </div>
                    <div className="p-5 bg-white/[0.03] border border-white/[0.08] rounded-xl">
                      <h4 className="font-medium text-white/70 text-sm mb-3">✔️ Surgical or Hybrid</h4>
                      <ul className="space-y-2 text-white/45 text-sm font-light">
                        <li>• Buccal fat adjustment</li>
                        <li>• Alar base modification</li>
                        <li>• Brow lifts</li>
                        <li>• Jawline contouring (Asian V-line, etc.)</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-white/70 font-medium text-sm">These are never about erasing ethnicity — they're about sculpting harmony.</p>
                </motion.section>

                <div className="h-px bg-white/[0.06]" />

                {/* Final Thought */}
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
                  <h2 className="text-2xl font-light mb-5">🌍 Final Thought: Harmony is Global, Beauty is Local</h2>
                  <div className="space-y-4 text-white/55 text-base font-light leading-relaxed">
                    <p>
                      Ethnic neutrality doesn't erase your background — it elevates it to its best form. Whether you're
                      from Seoul, São Paulo, or Southall, the path to beauty lies not in looking like someone else, but in
                      refining what's already uniquely yours.
                    </p>
                    <p className="text-white/70 font-medium text-lg">
                      In an increasingly globalised world, beauty isn't about becoming the same. It's about becoming your
                      most symmetrical, balanced, radiant self — and that, across all borders, is something universally
                      understood.
                    </p>
                  </div>
                </motion.section>
              </div>
            </article>

            {/* Sidebar */}
            <BlogSidebar />
          </div>
        </div>

        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true">
          <p>
            CosmeDocs believes that true aesthetic medicine is invisible art - bold, natural, and always your way.
            Our approach to ethnic neutrality in beauty standards embraces the philosophy that minimal, quiet
            transformations speak louder than exaggerated changes. This comprehensive guide explores how facial
            aesthetics can enhance natural beauty across all ethnicities while maintaining cultural identity.
          </p>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default BeautyEthnicNeutrality;
