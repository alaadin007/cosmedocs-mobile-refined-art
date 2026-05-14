import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb";
import { generateSEOMetadata } from "@/utils/seo";
import { ArrowRight, Sparkles, ShieldCheck, Stethoscope } from "lucide-react";

export default function ThinLipsAsymmetricLips() {
  const seo = generateSEOMetadata(
    "Thin Lips, Lip Lines & Asymmetric Lips | Doctor-Led London",
    "Doctor-led correction of thin, dry, lined or asymmetric lips at our Harley Street clinic. Honest assessment, conservative dosing, invisible art.",
    "/concerns/thin-lips-asymmetric-lips/"
  );

  const faqs = [
    {
      q: "Why are my lips thin or asymmetric?",
      a: "Most thin or uneven lips are either constitutional (the way your lips have always been) or age-related — vermillion border softening, philtral column flattening, and loss of the cupid's bow definition typically begin in the late twenties. Asymmetry is almost universal; the question is whether yours is noticeable enough to correct.",
    },
    {
      q: "Will lip filler make my lips look 'done'?",
      a: "Not when dosed correctly. Our standard correction starts at 0.5ml — barely a quarter teaspoon — placed precisely along the vermillion border and philtral columns rather than the body. The goal is hydration, definition and balance, not volume for the sake of it.",
    },
    {
      q: "Can vertical lip lines (smoker's lines) be treated?",
      a: "Yes, with a layered approach: micro-droplets of soft hyaluronic acid into the lines themselves, plus a small dose of anti-wrinkle treatment to reduce the puckering muscle action. Profhilo or polynucleotides may be added for skin quality.",
    },
    {
      q: "What if I just want my lips to look hydrated, not bigger?",
      a: "We routinely treat patients who want zero size change. The Lip Hydration protocol uses a very soft skin-booster filler micro-droplet technique — the result is moisture and a healthy sheen, not volume.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" data-rh="true" href={seo.canonical} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          name: seo.title,
          url: seo.canonical,
          about: { "@type": "MedicalCondition", name: "Thin lips, lip lines and lip asymmetry" },
          mainEntity: {
            "@type": "FAQPage",
            mainEntity: faqs.map(f => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        })}</script>
      </Helmet>

      <main className="bg-[#F5F5F3] text-[#1a1a1a]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-6">
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Concerns", href: "/concerns/" },
            { label: "Thin & Asymmetric Lips" },
          ]} />
        </div>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block text-[10px] tracking-[0.24em] uppercase text-[#C9A050] font-medium">
              Concern · Lip Anatomy
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extralight leading-[1.05]">
              Thin, dry or asymmetric lips —{" "}
              <span className="italic font-light">corrected, not exaggerated.</span>
            </h1>
            <p className="mt-6 text-lg text-black/65 max-w-2xl font-light leading-relaxed">
              Most lip concerns are not about size. They're about <strong>border definition</strong>,{" "}
              <strong>hydration</strong>, <strong>vertical lines</strong> and <strong>side-to-side balance</strong>.
              Our doctors correct each layer separately — that's why our patients leave looking like themselves,
              just well-rested.
            </p>
          </motion.div>
        </section>

        <section className="bg-white border-y border-black/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 grid md:grid-cols-3 gap-6">
            {[
              { icon: Stethoscope, t: "Border, not body", d: "Definition along the vermillion and philtrum — not the lip body — restores a youthful pout without size change." },
              { icon: Sparkles, t: "0.5ml is enough", d: "Most natural results start at 0.5ml. We rarely place 1ml in a single session unless restoring significant volume loss." },
              { icon: ShieldCheck, t: "Reversible", d: "All hyaluronic acid lip filler is fully dissolvable with hyalase if you ever change your mind." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="border border-black/10 rounded-xl p-6 bg-[#FAFAF8]">
                <Icon className="w-5 h-5 text-[#C9A050]" />
                <h3 className="mt-3 font-medium">{t}</h3>
                <p className="mt-2 text-sm text-black/60 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-20">
          <h2 className="text-3xl sm:text-4xl font-extralight">The four lip concerns we actually treat</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            {[
              { t: "Thin lips (constitutional)", d: "Lips that have always been narrow. Treated with conservative border-led filler, building over 2–3 sessions if desired." , to: "/treatments/lip-filler/" },
              { t: "Asymmetric lips", d: "One side fuller, higher or longer than the other. Mapped pre-treatment with photography; corrected with micro-aliquots of 0.05–0.1ml at a time.", to: "/treatments/lip-filler/" },
              { t: "Lip lines (smoker's lines)", d: "Vertical lines from muscle action and dehydration. Treated with micro-filler + a small unit dose of anti-wrinkle treatment.", to: "/treatments/botox/" },
              { t: "Dry, deflated lips", d: "Loss of moisture and pillow. Treated with skin-booster micro-droplet protocol — hydration without size change.", to: "/treatments/profhilo/" },
            ].map(c => (
              <Link key={c.t} to={c.to} className="group block border border-black/10 rounded-2xl p-6 bg-white hover:border-[#C9A050]/60 transition-colors">
                <h3 className="font-medium text-lg">{c.t}</h3>
                <p className="mt-2 text-sm text-black/60 leading-relaxed">{c.d}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-[#C9A050] font-medium">
                  See the protocol <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-black text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 md:py-20">
            <h2 className="text-3xl sm:text-4xl font-extralight">
              How much filler do I actually need?
            </h2>
            <p className="mt-4 text-white/65 font-light max-w-2xl">
              Read our doctor-written explainer comparing the two most common starting doses.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/lip-filler-0-5ml-vs-1ml/" className="inline-flex items-center gap-2 bg-[#C9A050] text-black font-semibold px-5 py-3 rounded-full hover:scale-[1.03] transition-transform">
                0.5ml vs 1ml lip filler <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/treatments/lip-filler/" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-[#C9A050]">
                Or jump to the Lip Filler page →
              </Link>
            </div>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-20">
          <h2 className="text-3xl font-extralight">Common questions</h2>
          <div className="mt-6 divide-y divide-black/10">
            {faqs.map(f => (
              <details key={f.q} className="py-4 group">
                <summary className="cursor-pointer font-medium list-none flex justify-between items-center">
                  {f.q}
                  <span className="text-[#C9A050] group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                </summary>
                <p className="mt-3 text-black/65 text-sm leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
