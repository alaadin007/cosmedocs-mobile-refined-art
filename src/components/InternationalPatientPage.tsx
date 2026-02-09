import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { generateSEOMetadata } from '@/utils/seo';
import type { PatientPageData } from '@/data/internationalPageTypes';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

interface Props {
  data: PatientPageData;
  images: { src: string; alt: string }[];
}

const InternationalPatientPage = ({ data, images }: Props) => {
  const seoData = generateSEOMetadata(
    data.hero.h1 + " | Cosmedocs",
    data.welcome.text.slice(0, 155),
    `/${data.slug}`
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faq.items.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  const clinicSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Cosmedocs",
    "url": `https://www.cosmedocs.co.uk/${data.slug}/`,
    "telephone": "+44 20 3733 3227",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "10 Harley Street",
      "addressLocality": "London",
      "postalCode": "W1G 9PF",
      "addressCountry": "GB"
    },
    "availableLanguage": ["English"],
    "medicalSpecialty": "Cosmetic Medicine"
  };

  return (
    <>
      <Helmet>
        <html lang={data.lang} />
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content={data.keywords} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(clinicSchema)}</script>
      </Helmet>

      <div className="bg-background text-foreground" dir={data.dir || "ltr"}>
        {/* Hero */}
        <section className="bg-black text-white py-20 md:py-28">
          <div className="page-container text-center">
            <motion.div {...fadeUp}>
              <p className="text-[hsl(var(--gold))] text-sm tracking-widest uppercase mb-4">{data.hero.badge}</p>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">{data.hero.h1}</h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-4">{data.hero.subtitle}</p>
              <p className="text-gray-400 max-w-2xl mx-auto">{data.hero.tagline}</p>
            </motion.div>
          </div>
        </section>

        {/* Welcome */}
        <section className="py-16 md:py-20 bg-black text-white">
          <div className="page-container max-w-4xl mx-auto">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">{data.welcome.title}</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">{data.welcome.text}</p>
              <p className="text-[hsl(var(--gold))] text-xl font-semibold text-center">{data.welcome.motto}</p>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-20 bg-accent">
          <div className="page-container max-w-5xl mx-auto">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">{data.whyChoose.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.whyChoose.reasons.map((r, i) => (
                  <Card key={i} className="bg-black/50 border-none">
                    <CardContent className="p-5 flex items-center gap-3">
                      <span className="text-[hsl(var(--gold))] shrink-0">✓</span>
                      <p className="text-gray-300 text-sm">{r}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {data.whyChoose.footer && <p className="text-gray-400 text-center mt-6">{data.whyChoose.footer}</p>}
            </motion.div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-16 md:py-20 bg-black text-white">
          <div className="page-container max-w-4xl mx-auto text-center">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">{data.philosophy.title}</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-red-400 font-bold text-lg mb-3">❌</p>
                  <ul className="space-y-2 text-gray-400">{data.philosophy.donts.map((d, i) => <li key={i}>{d}</li>)}</ul>
                </div>
                <div>
                  <p className="text-[hsl(var(--gold))] font-bold text-lg mb-3">✅</p>
                  <ul className="space-y-2 text-gray-300">{data.philosophy.dos.map((d, i) => <li key={i}>{d}</li>)}</ul>
                </div>
              </div>
              <p className="text-[hsl(var(--gold))] text-xl font-semibold">{data.philosophy.motto}</p>
            </motion.div>
          </div>
        </section>

        {/* HA Makeover */}
        <section className="py-16 md:py-20 bg-accent">
          <div className="page-container max-w-5xl mx-auto">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-white">{data.haMakeover.title}</h2>
              {data.haMakeover.subtitle && <p className="text-center text-gray-300 text-lg mb-4">{data.haMakeover.subtitle}</p>}
              <p className="text-center text-gray-300 mb-8 max-w-3xl mx-auto">{data.haMakeover.description}</p>
            </motion.div>
          </div>
        </section>

        {/* Age-Based */}
        <section className="py-16 md:py-20 bg-black text-white">
          <div className="page-container max-w-5xl mx-auto">
            <motion.div {...fadeUp}>
              <div className="grid md:grid-cols-3 gap-8">
                {data.haMakeover.ages.map((g, i) => (
                  <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1, duration: 0.5 }}>
                    <Card className="bg-accent border-none h-full">
                      <CardContent className="p-6">
                        <p className="text-[hsl(var(--gold))] text-sm font-bold mb-2">{g.label}</p>
                        <p className="text-xl font-bold text-white mb-4">{g.age}</p>
                        <ul className="space-y-2 text-gray-300 text-sm mb-4">
                          {g.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 shrink-0"></span>{item}
                            </li>
                          ))}
                        </ul>
                        <p className="text-[hsl(var(--gold))] text-sm font-semibold">🎯 {g.goal}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Masseter Botox (if present) */}
        {data.masseter && (
          <section className="py-16 md:py-20 bg-accent">
            <div className="page-container max-w-5xl mx-auto">
              <motion.div {...fadeUp}>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white">{data.masseter.title}</h2>
                <p className="text-gray-300 text-center mb-8 text-lg">{data.masseter.intro}</p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <ul className="space-y-3 text-gray-300">
                      {data.masseter.suitableFor.map((s, i) => (
                        <li key={i} className="flex items-start gap-3"><span className="w-2 h-2 bg-[hsl(var(--gold))] rounded-full mt-2 shrink-0"></span>{s}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-3 text-gray-300">
                      {data.masseter.advantages.map((a, i) => (
                        <li key={i} className="flex items-start gap-3"><span className="text-[hsl(var(--gold))]">✓</span>{a}</li>
                      ))}
                    </ul>
                    <p className="text-gray-400 mt-4">{data.masseter.result}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Calf Reduction (if present) */}
        {data.calfReduction && (
          <section className="py-16 md:py-20 bg-black text-white">
            <div className="page-container max-w-5xl mx-auto">
              <motion.div {...fadeUp}>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">{data.calfReduction.title}</h2>
                <p className="text-gray-300 text-center mb-8 text-lg">{data.calfReduction.intro}</p>
                <div className="grid md:grid-cols-2 gap-8">
                  <ul className="space-y-3 text-gray-300">
                    {data.calfReduction.suitableFor.map((s, i) => (
                      <li key={i} className="flex items-start gap-3"><span className="w-2 h-2 bg-[hsl(var(--gold))] rounded-full mt-2 shrink-0"></span>{s}</li>
                    ))}
                  </ul>
                  <ul className="space-y-3 text-gray-300">
                    {data.calfReduction.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3"><span className="text-[hsl(var(--gold))]">✓</span>{f}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Pricing Comparison */}
        <section className="py-16 md:py-20 bg-accent">
          <div className="page-container max-w-5xl mx-auto">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-white">{data.pricing.title}</h2>
              <p className="text-gray-300 text-center mb-8">{data.pricing.intro}</p>
              {data.pricing.comparison && data.pricing.comparison.length > 0 && (
                <div className="overflow-x-auto mb-8">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-right p-3 text-gray-400">Treatment</th>
                        <th className="text-right p-3 text-gray-400">Local</th>
                        <th className="text-right p-3 text-[hsl(var(--gold))]">Cosmedocs London</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.pricing.comparison.map((c, i) => (
                        <tr key={i} className="border-b border-gray-800">
                          <td className="p-3 text-white">{c.treatment}</td>
                          <td className="p-3 text-gray-400">{c.local}</td>
                          <td className="p-3 text-[hsl(var(--gold))] font-semibold">{c.cosmedocs}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {data.pricing.items.map((item, i) => (
                  <Card key={i} className="bg-black/50 border-none">
                    <CardContent className="p-4 text-center">
                      <p className="text-gray-400 text-xs mb-1">{item.name}</p>
                      <p className="text-[hsl(var(--gold))] font-bold">{item.price}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Treatment Menu */}
        <section className="py-16 md:py-20 bg-black text-white">
          <div className="page-container max-w-5xl mx-auto">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">{data.treatmentMenu.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.treatmentMenu.categories.map((cat, i) => (
                  <Link to={cat.link} key={i} className="block">
                    <Card className="bg-accent border-none h-full hover:bg-accent/80 transition-colors">
                      <CardContent className="p-6">
                        <p className="text-white font-semibold mb-3">{cat.name}</p>
                        <ul className="space-y-1.5">
                          {cat.items.map((item, idx) => (
                            <li key={idx} className="text-gray-400 text-sm flex items-center gap-2">
                              <span className="w-1 h-1 bg-[hsl(var(--gold))] rounded-full shrink-0"></span>{item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Us */}
        <section className="py-16 md:py-20 bg-accent">
          <div className="page-container max-w-4xl mx-auto text-center">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">{data.aboutUs.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.aboutUs.points.map((p, i) => (
                  <Card key={i} className="bg-black/50 border-none">
                    <CardContent className="p-4">
                      <p className="text-gray-300 text-sm">{p}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* B&A Gallery */}
        <section className="py-16 md:py-20 bg-black text-white">
          <div className="page-container">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">{data.gallery.title}</h2>
              <p className="text-gray-400 text-center mb-10 text-sm">{data.gallery.disclaimer}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    className="rounded-xl overflow-hidden"
                  >
                    <img src={img.src} alt={img.alt} className="w-full h-auto object-cover" loading="lazy" />
                  </motion.div>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link to="/before-after/">
                  <Button variant="outline" className="rounded-full border-gray-700 text-gray-300 hover:bg-accent">
                    View Full Gallery →
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Privacy */}
        <section className="py-16 md:py-20 bg-accent">
          <div className="page-container max-w-4xl mx-auto text-center">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">{data.privacy.title}</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {data.privacy.values.map((v, i) => (
                  <Card key={i} className="bg-black/50 border-none"><CardContent className="p-4 text-center"><p className="text-gray-300 text-sm">{v}</p></CardContent></Card>
                ))}
              </div>
              <p className="text-gray-400">{data.privacy.footer}</p>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-black text-white">
          <div className="page-container max-w-3xl mx-auto text-center">
            <motion.div {...fadeUp}>
              <p className="text-[hsl(var(--gold))] text-sm tracking-widest uppercase mb-4">Cosmedocs</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{data.cta.title}</h2>
              {data.cta.details.map((d, i) => <p key={i} className="text-gray-300 mb-2">{d}</p>)}
              <p className="text-[hsl(var(--gold))] text-xl font-semibold my-8">{data.cta.motto}</p>
              <Link to="/contact">
                <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-10 py-6 text-lg">{data.cta.buttonText}</Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20 bg-accent">
          <div className="page-container max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-white">{data.faq.title}</h2>
            <div className="space-y-6">
              {data.faq.items.map((faq, i) => (
                <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.05, duration: 0.4 }}>
                  <Card className="bg-black/50 border-none">
                    <CardContent className="p-6">
                      <p className="text-white font-semibold text-lg mb-3">{faq.q}</p>
                      <p className="text-gray-300 leading-relaxed">{faq.a}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 bg-black border-t border-gray-800">
          <div className="page-container text-center">
            <p className="text-xs text-gray-600">{data.disclaimer}</p>
          </div>
        </section>

        <div className="sr-only"><p>{data.seoText}</p></div>
      </div>
    </>
  );
};

export default InternationalPatientPage;
