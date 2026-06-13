import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export interface SatelliteFAQ {
  question: string;
  answer: string;
}

export interface SatellitePricingRow {
  label: string;
  price: string;
}

export interface SatelliteSection {
  heading: string;
  body: string | string[];
}

export interface SatelliteSEOPageProps {
  /** Route path WITHOUT trailing slash, e.g. "/jowl-filler" */
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  eyebrow?: string;
  intro: string;
  /** 40-60 word "top answer" for AI search and featured snippets */
  topAnswer: string;
  sections: SatelliteSection[];
  pricing?: SatellitePricingRow[];
  faqs?: SatelliteFAQ[];
  /** Canonical destination — usually the parent treatment hub */
  canonicalParent: {
    label: string;
    path: string;
  };
  /** Internal cluster links shown at the bottom */
  relatedLinks?: { label: string; path: string }[];
}

const BASE = "https://www.cosmedocs.com";

const SatelliteSEOPage = ({
  slug,
  title,
  metaDescription,
  h1,
  eyebrow = "Doctor-led · Harley Street since 2007",
  intro,
  topAnswer,
  sections,
  pricing,
  faqs,
  canonicalParent,
  relatedLinks,
}: SatelliteSEOPageProps) => {
  const url = `${BASE}${slug}/`;

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        "@id": `${BASE}/#clinic`,
        name: "CosmeDocs",
        url: `${BASE}/`,
        telephone: "+442071231123",
        address: {
          "@type": "PostalAddress",
          streetAddress: "10 Harley Street",
          addressLocality: "London",
          postalCode: "W1G 9PF",
          addressCountry: "GB",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "2387",
          bestRating: "5",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${url}#page`,
        name: title,
        description: metaDescription,
        url,
        isPartOf: { "@id": `${BASE}/#website` },
        about: { "@id": `${BASE}${canonicalParent.path}#procedure` },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
            { "@type": "ListItem", position: 2, name: canonicalParent.label, item: `${BASE}${canonicalParent.path}` },
            { "@type": "ListItem", position: 3, name: h1, item: url },
          ],
        },
      },
      ...(faqs && faqs.length
        ? [
            {
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: { "@type": "Answer", text: f.answer },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={url} data-rh="true" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <div className="min-h-screen bg-neutral-950 text-white">
        {/* Hero */}
        <section className="relative pt-28 pb-14 md:pt-36 md:pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, rgba(201,160,80,0.3) 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="relative max-w-4xl mx-auto px-5 sm:px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-[#C9A050] text-[11px] uppercase tracking-[0.25em] font-medium mb-4">
                {eyebrow}
              </p>
              <h1 className="text-3xl md:text-5xl font-light leading-tight mb-6">{h1}</h1>
              <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                {intro}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Top answer (AI-search / featured snippet target) */}
        <section className="pb-12">
          <div className="max-w-3xl mx-auto px-5 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border-l-2 border-[#C9A050] pl-5 py-2"
            >
              <p className="text-white/85 text-[17px] md:text-lg leading-relaxed font-light">
                {topAnswer}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Sections */}
        <section className="pb-16">
          <div className="max-w-3xl mx-auto px-5 sm:px-6 space-y-12">
            {sections.map((s, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl md:text-2xl font-light mb-4 text-white">{s.heading}</h2>
                <div className="text-white/65 leading-relaxed text-[15px] md:text-base space-y-4">
                  {Array.isArray(s.body)
                    ? s.body.map((p, j) => <p key={j}>{p}</p>)
                    : <p>{s.body}</p>}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Pricing */}
        {pricing && pricing.length > 0 && (
          <section className="pb-16">
            <div className="max-w-3xl mx-auto px-5 sm:px-6">
              <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-2 mb-5">
                  <Sparkles className="w-4 h-4 text-[#C9A050]" />
                  <h2 className="text-lg font-light">Treatment pricing</h2>
                </div>
                <div className="divide-y divide-white/[0.06]">
                  {pricing.map((p) => (
                    <div key={p.label} className="flex items-center justify-between py-3 text-sm">
                      <span className="text-white/70">{p.label}</span>
                      <span className="text-[#C9A050] font-medium">{p.price}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-white/40 mt-5">
                  Includes consultation, treatment and complimentary two-week review. A £50 consultation fee
                  applies and is fully redeemed against treatment on the day.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* FAQs */}
        {faqs && faqs.length > 0 && (
          <section className="pb-16">
            <div className="max-w-3xl mx-auto px-5 sm:px-6">
              <h2 className="text-xl md:text-2xl font-light mb-6">Frequently asked</h2>
              <div className="space-y-4">
                {faqs.map((f) => (
                  <div key={f.question} className="border border-white/[0.07] rounded-xl p-5 bg-white/[0.02]">
                    <h3 className="text-[15px] font-medium text-white mb-2 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C9A050] mt-1 shrink-0" />
                      {f.question}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed pl-6">{f.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Canonical authority link */}
        <section className="pb-16">
          <div className="max-w-3xl mx-auto px-5 sm:px-6">
            <div className="bg-gradient-to-br from-[#C9A050]/10 to-transparent border border-[#C9A050]/20 rounded-2xl p-6 md:p-8 text-center">
              <ShieldCheck className="w-6 h-6 text-[#C9A050] mx-auto mb-3" />
              <p className="text-white/70 text-sm mb-4">
                Full clinical detail, doctor profiles and consultation booking are on the canonical{" "}
                <span className="text-white">{canonicalParent.label}</span> page.
              </p>
              <Link
                to={canonicalParent.path}
                className="inline-flex items-center gap-2 bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full px-6 py-3 text-sm font-medium transition-all"
              >
                Visit the {canonicalParent.label} page
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Related */}
        {relatedLinks && relatedLinks.length > 0 && (
          <section className="pb-20">
            <div className="max-w-3xl mx-auto px-5 sm:px-6">
              <p className="text-white/40 text-xs uppercase tracking-wider mb-4">Related reading</p>
              <div className="flex flex-wrap gap-2.5">
                {relatedLinks.map((l) => (
                  <Link
                    key={l.path}
                    to={l.path}
                    className="text-white/55 hover:text-[#C9A050] text-sm border border-white/[0.08] hover:border-[#C9A050]/30 rounded-full px-4 py-1.5 transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Trust line */}
        <section className="pb-24">
          <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center">
            <p className="text-white/30 text-xs">
              Aesthetics by Cosmedocs — invisible art. All treatments performed by GMC-registered doctors at
              10 Harley Street, London W1G 9PF.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default SatelliteSEOPage;
