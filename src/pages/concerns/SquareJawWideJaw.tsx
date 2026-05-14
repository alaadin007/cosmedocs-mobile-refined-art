import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb";
import { generateSEOMetadata } from "@/utils/seo";
import { ArrowRight, Activity, ShieldCheck, Moon } from "lucide-react";

export default function SquareJawWideJaw() {
  const seo = generateSEOMetadata(
    "Square Jaw, Wide Jaw & Masseter Slimming London",
    "Soften a wide or square jaw without surgery. Doctor-led masseter botox for jaw slimming and bruxism. Harley Street, London.",
    "/concerns/square-jaw-wide-jaw/"
  );

  const faqs = [
    { q: "Why is my jaw wide or square?", a: "Almost always overdeveloped masseter muscle (chewing, clenching or grinding), occasionally bony anatomy. Muscle bulk is treatable in a few minutes; bony width is not — we'll tell you which one you have at the consultation." },
    { q: "How many units of masseter botox slim the jaw?", a: "Typical doses are 25–50 units per side depending on muscle bulk and goal. We always start conservatively — you can add more at week 2; you cannot remove it." },
    { q: "When will I see slimming?", a: "Functional relief (less clenching) is reported within 5–10 days. Visible slimming begins at week 3 and peaks at week 8–12. Maintenance is typically every 4–6 months." },
    { q: "Will it change how my face looks from the front?", a: "Yes — that's the goal. Most patients describe a softer, more 'V-shape' lower face, with a less hard outline at the angle of the jaw." },
  ];

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" data-rh="true" href={seo.canonical} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          name: seo.title,
          url: seo.canonical,
          about: { "@type": "MedicalCondition", name: "Masseter hypertrophy / wide jaw" },
          mainEntity: { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
        })}</script>
      </Helmet>

      <main className="bg-black text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-6">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Concerns", href: "/concerns/" }, { label: "Square / Wide Jaw" }]} />
        </div>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block text-[10px] tracking-[0.24em] uppercase text-[#C9A050] font-medium">Concern · Lower Face</span>
            <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extralight leading-[1.05]">
              Square or wide jaw —{" "}
              <span className="italic font-light text-[#C9A050]">softened, not surgically.</span>
            </h1>
            <p className="mt-6 text-lg text-white/65 max-w-2xl font-light leading-relaxed">
              A wide jaw is almost always an <strong className="text-white">overdeveloped masseter muscle</strong> from years of clenching or chewing. A few precisely placed units of anti-wrinkle treatment relax that muscle, the muscle slowly atrophies, and the lower face softens into a quieter V-shape over 8–12 weeks.
            </p>
          </motion.div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.02]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 grid md:grid-cols-3 gap-6">
            {[
              { icon: Activity, t: "Cosmetic + medical", d: "Same treatment slims the jaw and resolves clenching, jaw pain, headaches and tooth grinding (bruxism)." },
              { icon: Moon, t: "5–10 day relief", d: "Functional benefit (less clenching, better sleep) is the first thing patients notice — well before visible slimming." },
              { icon: ShieldCheck, t: "Conservative first", d: "We start at the low end of the dosing range. You can always add more; you cannot remove." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="border border-white/10 rounded-xl p-6">
                <Icon className="w-5 h-5 text-[#C9A050]" />
                <h3 className="mt-3 font-medium">{t}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-20">
          <h2 className="text-3xl sm:text-4xl font-extralight">Your treatment options</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            <Link to="/treatments/masseter-botox/" className="group block border border-white/10 rounded-2xl p-6 hover:border-[#C9A050]/60 transition-colors">
              <h3 className="font-medium text-lg">Masseter Botox (Jaw Slimming)</h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">25–50 units per side. Visible slimming at 3–8 weeks. Cosmetic primary intent.</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-[#C9A050] font-medium">See protocol <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
            </Link>
            <Link to="/treatments/bruxism-botox/" className="group block border border-white/10 rounded-2xl p-6 hover:border-[#C9A050]/60 transition-colors">
              <h3 className="font-medium text-lg">Bruxism (Clenching / Grinding)</h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">Same injection, medical primary intent. For tooth chipping, jaw pain and tension headaches.</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-[#C9A050] font-medium">See protocol <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
            </Link>
            <Link to="/masseter-botox-units-dosage/" className="group block border border-white/10 rounded-2xl p-6 hover:border-[#C9A050]/60 transition-colors">
              <h3 className="font-medium text-lg">How many units do I need?</h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">Doctor-written dosing guide — 25 vs 50 vs 75 units, what to expect at each.</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-[#C9A050] font-medium">Read guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
            </Link>
            <Link to="/treatments/jawline-filler/" className="group block border border-white/10 rounded-2xl p-6 hover:border-[#C9A050]/60 transition-colors">
              <h3 className="font-medium text-lg">Jawline Definition (rare combination)</h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">Where the angle is wide but the front of the jaw lacks projection — masseter relaxation plus chin/jawline filler.</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-[#C9A050] font-medium">See protocol <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
            </Link>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-20">
          <h2 className="text-3xl font-extralight">Common questions</h2>
          <div className="mt-6 divide-y divide-white/10">
            {faqs.map(f => (
              <details key={f.q} className="py-4 group">
                <summary className="cursor-pointer font-medium list-none flex justify-between items-center">
                  {f.q}
                  <span className="text-[#C9A050] group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                </summary>
                <p className="mt-3 text-white/65 text-sm leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
