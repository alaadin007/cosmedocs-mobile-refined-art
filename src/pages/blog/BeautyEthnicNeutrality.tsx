import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { generateSEOMetadata } from "@/utils/seo";
import { Card, CardContent } from "@/components/ui/card";

const BeautyEthnicNeutrality = () => {
  const seoData = generateSEOMetadata(
    "Beauty as Ethnic Neutrality: Aesthetic Harmony Beyond Race | CosmeTalk™",
    "Discover how universal beauty standards transcend ethnicity through facial harmony, balance, and symmetry. Explore the science behind aesthetic treatments that enhance natural beauty.",
    "/blog/beauty-ethnic-neutrality"
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Beauty as Ethnic Neutrality: Aesthetic Harmony Beyond Race",
    "description": "Exploring how universal beauty standards transcend ethnicity through facial harmony and balance",
    "author": {
      "@type": "Organization",
      "name": "CosmeDocs"
    },
    "publisher": {
      "@type": "Organization",
      "name": "CosmeDocs",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.cosmedocs.com/logo.png"
      }
    },
    "datePublished": "2024-01-15",
    "dateModified": "2024-01-15",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.cosmedocs.com/blog/beauty-ethnic-neutrality"
    }
  };

  const modelAnalysis = [
    { 
      label: "a", 
      origin: "Southeast Asia (Philippines/Malaysia)", 
      features: "Warm undertones, almond-shaped eyes, balanced facial thirds"
    },
    { 
      label: "b", 
      origin: "East Asia (China/Korea)", 
      features: "Refined bone structure, gentle canthal tilt, harmonious proportions"
    },
    { 
      label: "c", 
      origin: "Northern Europe (Scandinavia)", 
      features: "Soft facial contours, symmetrical features, balanced midface projection"
    },
    { 
      label: "d", 
      origin: "South Asia (India/Pakistan)", 
      features: "Strong bone structure, defined jawline, expressive eyes"
    },
    { 
      label: "e", 
      origin: "East Asia (Japan/Korea)", 
      features: "Delicate features, smooth facial transitions, natural harmony"
    },
    { 
      label: "f", 
      origin: "Middle East/Mediterranean", 
      features: "Striking facial balance, defined features, natural symmetry"
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

      <div className="min-h-screen bg-gradient-subtle">
        <div className="container mx-auto px-4 py-12">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Header */}
            <header className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4"
              >
                CosmeTalk™ Series
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                🧬 Beauty as Ethnic Neutrality: Aesthetic Harmony Beyond Race
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                By CosmeDocs | Published January 15, 2024
              </p>
            </header>

            {/* Reference */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-8"
            >
              <Card className="border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-primary">📖 Key Reference</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Liew S, et al. Consensus on Changing Trends, Attitudes and Concepts of Asian Beauty. 
                    <em> Aesthetic Plastic Surgery</em>. 2016. 
                    <a href="#" className="text-primary hover:underline ml-1">
                      View Study
                    </a>
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Featured Image with Model Analysis */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-12"
            >
              <div className="rounded-2xl overflow-hidden shadow-elegant mb-6">
                <img 
                  src="/lovable-uploads/95a2c194-5d44-4495-8025-de676d437b8d.png"
                  alt="Models from different continents demonstrating ethnic neutrality in beauty"
                  className="w-full h-auto"
                />
              </div>
              
              {/* Model Analysis Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {modelAnalysis.map((model, index) => (
                  <motion.div
                    key={model.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <Card className="border border-muted hover:border-primary/30 transition-colors">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">
                            {model.label.toUpperCase()}
                          </div>
                          <h4 className="font-semibold text-sm">{model.origin}</h4>
                        </div>
                        <p className="text-xs text-muted-foreground">{model.features}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Article Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="prose prose-lg max-w-none"
            >
              {/* Introduction */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground">👁️‍🗨️ Introduction</h2>
                <p className="text-lg leading-relaxed mb-4">
                  What do we find beautiful—and why do some faces captivate across all cultures?
                </p>
                <p className="leading-relaxed mb-4">
                  In the world of aesthetics, the idea of "universal beauty" is no longer just a theory. 
                  As more global research and clinical consensus emerges, one fascinating concept rises above the rest:
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>The most attractive faces, across all ethnicities, tend to share traits of what can be called "ethnic neutrality."</strong>
                </p>
                <p className="leading-relaxed">
                  This doesn't mean erasing identity or conforming to one race's standards. Instead, it highlights a powerful truth: 
                  beauty lies in balance, harmony, and symmetry, regardless of background. And as facial aesthetics improve, 
                  distinct ethnic traits become subtler—without disappearing entirely.
                </p>
              </section>

              {/* What Is Ethnic Neutrality */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground">🔍 What Is Ethnic Neutrality?</h2>
                <p className="leading-relaxed mb-4">
                  Ethnic neutrality in beauty refers to a set of facial proportions, contours, and symmetries that transcend race or region. 
                  It's not about homogenising features — it's about how refinement and balance make a face appear universally appealing.
                </p>
                <div className="bg-muted/50 p-6 rounded-lg border-l-4 border-primary mb-4">
                  <p className="italic leading-relaxed">
                    "The most beautiful and attractive people of each and all races tend to look similar in terms of face shape, 
                    and harmonious delicacy of features, balance, and symmetry."
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    — Liew et al., Aesthetic Plastic Surgery, 2016
                  </p>
                </div>
                <p className="leading-relaxed">
                  In contrast, as faces become less balanced, more distinct ethnic markers (such as stronger jawlines, 
                  flatter nasal bridges, or orbital shape differences) become dominant.
                </p>
              </section>

              {/* Aesthetic Practice */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground">🎯 What This Means in Aesthetic Practice</h2>
                <p className="leading-relaxed mb-4">
                  In clinic, we often see this play out subtly:
                </p>
                <p className="leading-relaxed mb-4">
                  Patients don't request to "look Western," but instead ask for:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Softer contours</li>
                  <li>Sharper definition</li>
                  <li>Balanced proportions</li>
                </ul>
                <p className="leading-relaxed mb-4">
                  The most sought-after looks (in East Asia, the Middle East, or Latin America) increasingly include:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Midface projection</li>
                  <li>Defined but soft jawlines</li>
                  <li>Lifted lateral brows</li>
                  <li>Fuller lips with natural vermillion balance</li>
                  <li>Straighter nose bridges—not necessarily high, but smooth</li>
                </ul>
                <p className="leading-relaxed">
                  These changes reflect a desire for facial harmony, not racial conformity.
                </p>
              </section>

              {/* Cultural Identity */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground">🧠 Is Ethnic Neutrality a Risk to Cultural Identity?</h2>
                <p className="leading-relaxed mb-4">
                  <strong>Absolutely not.</strong> The point is not to erase ethnicity — but rather to celebrate how beauty refines diversity.
                </p>
                <p className="leading-relaxed mb-4">Think of it this way:</p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <Card className="border border-muted">
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-3">Korean Beauty</h4>
                      <p className="text-sm leading-relaxed">
                        An attractive Korean face retains its Korean identity but often shows:
                      </p>
                      <ul className="text-sm mt-2 space-y-1">
                        <li>• Stronger canthal tilt</li>
                        <li>• Higher midface projection</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="border border-muted">
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-3">African Beauty</h4>
                      <p className="text-sm leading-relaxed">
                        A striking African face maintains its ethnic beauty while displaying:
                      </p>
                      <ul className="text-sm mt-2 space-y-1">
                        <li>• Proportional features and symmetry</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="border border-muted">
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-3">Indian Beauty</h4>
                      <p className="text-sm leading-relaxed">
                        A beautiful Indian face still showcases cultural traits, but with:
                      </p>
                      <ul className="text-sm mt-2 space-y-1">
                        <li>• Smoothed contours</li>
                        <li>• Brighter skin tone</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <p className="leading-relaxed font-medium">
                  Ethnic neutrality is the balance point, not a blank slate.
                </p>
              </section>

              {/* Science of Aesthetic Balance */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground">🔬 The Science of Aesthetic Balance</h2>
                <p className="leading-relaxed mb-6">
                  Across facial aesthetics research, certain constants emerge:
                </p>
                
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse border border-muted rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="border border-muted p-4 text-left font-semibold">Trait</th>
                        <th className="border border-muted p-4 text-center font-semibold">Universally Attractive</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="border border-muted p-4">Facial symmetry</td><td className="border border-muted p-4 text-center">✅</td></tr>
                      <tr><td className="border border-muted p-4">Smooth jawline-to-neck transition</td><td className="border border-muted p-4 text-center">✅</td></tr>
                      <tr><td className="border border-muted p-4">Balanced facial thirds (forehead, midface, lower face)</td><td className="border border-muted p-4 text-center">✅</td></tr>
                      <tr><td className="border border-muted p-4">Gentle canthal tilt</td><td className="border border-muted p-4 text-center">✅</td></tr>
                      <tr><td className="border border-muted p-4">Lip-to-chin harmony</td><td className="border border-muted p-4 text-center">✅</td></tr>
                      <tr><td className="border border-muted p-4">Defined yet natural midface</td><td className="border border-muted p-4 text-center">✅</td></tr>
                    </tbody>
                  </table>
                </div>
                
                <p className="leading-relaxed">
                  These constants form the foundation of aesthetic treatments regardless of race.
                </p>
              </section>

              {/* Aesthetic Treatments */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground">💉 Aesthetic Treatments That Enhance Neutral Harmony</h2>
                <p className="leading-relaxed mb-6">
                  If a patient seeks subtle refinement while maintaining identity, we recommend:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <Card className="border border-primary/20">
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-4 text-primary">✔️ Non-Surgical Treatments:</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Hyaluronic acid fillers (midface, chin, nose)</li>
                        <li>• Botulinum toxin for shaping brow & jawline</li>
                        <li>• Skin resurfacing for even tone and texture</li>
                        <li>• Polynucleotides / PRP for dermal quality</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="border border-secondary/20">
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-4 text-secondary">✔️ Surgical or Hybrid:</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Buccal fat adjustment</li>
                        <li>• Alar base modification</li>
                        <li>• Brow lifts</li>
                        <li>• Jawline contouring (Asian V-line, etc.)</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <p className="leading-relaxed font-medium">
                  These are never about erasing ethnicity — they're about sculpting harmony.
                </p>
              </section>

              {/* Final Thought */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground">🌍 Final Thought: Harmony is Global, Beauty is Local</h2>
                <p className="leading-relaxed mb-4">
                  Ethnic neutrality doesn't erase your background — it elevates it to its best form. Whether you're from Seoul, 
                  São Paulo, or Southall, the path to beauty lies not in looking like someone else, but in refining what's already uniquely yours.
                </p>
                <p className="leading-relaxed text-lg font-medium">
                  In an increasingly globalised world, beauty isn't about becoming the same. It's about becoming your most symmetrical, 
                  balanced, radiant self — and that, across all borders, is something universally understood.
                </p>
              </section>
            </motion.div>

            {/* Hidden SEO Content */}
            <div className="sr-only">
              <p>
                CosmeDocs believes that true aesthetic medicine is invisible art - bold, natural, and always your way. 
                Our approach to ethnic neutrality in beauty standards embraces the philosophy that minimal, quiet transformations 
                speak louder than exaggerated changes. This comprehensive guide explores how facial aesthetics can enhance natural 
                beauty across all ethnicities while maintaining cultural identity. From Asian beauty standards to African facial 
                harmony, we examine how universal principles of symmetry and proportion create attractive faces regardless of ethnic 
                background. Our aesthetic treatments focus on achieving facial balance through non-surgical and surgical options, 
                including hyaluronic acid fillers, botulinum toxin injections, and advanced skin resurfacing techniques. 
                The science of beauty reveals that attractive faces share common traits: facial symmetry, balanced proportions, 
                smooth contours, and harmonious features. Whether seeking Korean V-line jawline contouring, Middle Eastern nose 
                refinement, or European facial balancing, the goal remains consistent - enhancing your unique beauty through 
                minimal intervention and maximal results. Professional aesthetic medicine recognizes that beauty transcends racial 
                boundaries while celebrating individual ethnic characteristics.
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </>
  );
};

export default BeautyEthnicNeutrality;