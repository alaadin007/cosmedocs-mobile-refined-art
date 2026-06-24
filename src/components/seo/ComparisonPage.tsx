import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { CheckCircle2, MinusCircle, ArrowRight, MapPin } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import MedicalArticleSchema from "@/components/seo/MedicalArticleSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import DrAhmedQuote from "@/components/DrAhmedQuote";

export interface ComparisonRow {
  attribute: string;
  optionA: string;
  optionB: string;
}

interface ComparisonPageProps {
  path: string;                       // e.g. "/botox-vs-dysport/"
  optionA: string;                    // "Botox"
  optionB: string;                    // "Dysport"
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;                      // 2–3 sentence opening
  topAnswer: string;                  // 40–60 word LLM-friendly verdict
  rows: ComparisonRow[];              // comparison table rows
  whenA: string;                      // "When to choose A" prose
  whenB: string;                      // "When to choose B" prose
  bottomLine: string;                 // editorial close
  faqs: { question: string; answer: string }[];
  relatedLinks?: { label: string; path: string }[];
  datePublished?: string;
  dateModified?: string;
}

const ComparisonPage = ({
  path, optionA, optionB,
  metaTitle, metaDescription, h1, intro, topAnswer,
  rows, whenA, whenB, bottomLine, faqs, relatedLinks,
  datePublished = "2024-09-01",
  dateModified = "2026-06-24",
}: ComparisonPageProps) => {
  const canonical = `https://www.cosmedocs.com${path}`;

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <link rel="canonical" data-rh="true" href={canonical} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="article" />
      </Helmet>

      <MedicalArticleSchema
        path={path}
        headline={h1}
        description={metaDescription}
        datePublished={datePublished}
        dateModified={dateModified}
        speakableSelectors={["h1", "[data-speakable]"]}
      />
      <FAQSchema faqs={faqs} />

      <div className="bg-[#F5F5F3] overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumb
            items={[{ label: "Education", path: "/treatments" }]}
            currentPage={`${optionA} vs ${optionB}`}
           
          />
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20">
          <header className="mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full text-xs text-gray-600 mb-6 border border-gray-200">
              <MapPin className="h-4 w-4 text-[#C9A050]" />
              Doctor-led · 8–10 Harley Street, London W1G 9PF
            </div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#C9A050] mb-4 font-light">
              Clinical comparison · Reviewed by Dr Ahmed Haq
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-[1.05] tracking-tight" data-speakable>
              {h1}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">{intro}</p>
          </header>

          {/* LLM-friendly direct answer */}
          <section className="bg-white border-l-4 border-[#C9A050] p-6 mb-12 rounded-r-lg shadow-sm">
            <p className="text-xs tracking-[0.2em] uppercase text-[#C9A050] mb-2 font-medium">
              The short answer
            </p>
            <p className="text-base md:text-lg text-gray-800 leading-relaxed" data-speakable>
              {topAnswer}
            </p>
          </section>

          {/* Comparison table */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">
              Side-by-side: {optionA} vs {optionB}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-sm border border-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left px-4 py-3 text-sm font-medium text-gray-600">Attribute</th>
                    <th className="text-left px-4 py-3 text-sm font-medium text-[#C9A050]">{optionA}</th>
                    <th className="text-left px-4 py-3 text-sm font-medium text-[#C9A050]">{optionB}</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={i} className="border-t border-gray-100">
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">{r.attribute}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{r.optionA}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{r.optionB}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* When to choose */}
          <section className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="h-5 w-5 text-[#C9A050]" />
                <h3 className="text-lg font-medium text-gray-900">When we choose {optionA}</h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{whenA}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="h-5 w-5 text-[#C9A050]" />
                <h3 className="text-lg font-medium text-gray-900">When we choose {optionB}</h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{whenB}</p>
            </div>
          </section>

          {/* Bottom line */}
          <section className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-200 mb-12">
            <h2 className="text-xl md:text-2xl font-light text-gray-900 mb-4">The Cosmedocs view</h2>
            <p className="text-gray-700 leading-relaxed">{bottomLine}</p>
          </section>

          <DrAhmedQuote />

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">Frequently asked</h2>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <details key={i} className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 group">
                  <summary className="cursor-pointer font-medium text-gray-900 flex items-center justify-between">
                    {f.question}
                    <MinusCircle className="h-4 w-4 text-[#C9A050] opacity-0 group-open:opacity-100" />
                  </summary>
                  <p className="mt-3 text-sm text-gray-700 leading-relaxed">{f.answer}</p>
                </details>
              ))}
            </div>
          </section>

          {relatedLinks && relatedLinks.length > 0 && (
            <section className="mb-12">
              <h2 className="text-xl font-light text-gray-900 mb-4">Related reading</h2>
              <ul className="space-y-2">
                {relatedLinks.map((l, i) => (
                  <li key={i}>
                    <Link to={l.path} className="text-[#C9A050] hover:underline inline-flex items-center gap-1">
                      {l.label} <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <div className="text-center">
            <Link
              to="/contact/"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#C9A050] text-white rounded-full hover:bg-[#b58e44] transition"
            >
              Book a consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </article>
      </div>
    </>
  );
};

export default ComparisonPage;
