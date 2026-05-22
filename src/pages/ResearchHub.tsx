import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Microscope, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface Study {
  id: string;
  slug: string;
  title: string;
  subtitle: string | null;
  description: string | null;
  hero_image_url: string | null;
  status: string;
}

const ResearchHub = () => {
  const [studies, setStudies] = useState<Study[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from("research_studies")
        .select("id,slug,title,subtitle,description,hero_image_url,status")
        .in("status", ["active", "closed"])
        .order("display_order", { ascending: true })
        .order("created_at", { ascending: false });
      setStudies((data as Study[]) || []);
      setLoading(false);
    })();
  }, []);

  const active = studies.filter(s => s.status === "active");
  const closed = studies.filter(s => s.status === "closed");

  return (
    <>
      <Helmet>
        <title>Research Studies | Cosmedocs — Doctor-Led Aesthetic Research</title>
        <meta
          name="description"
          content="Anonymous research studies by Cosmedocs, a doctor-led aesthetic clinic. Contribute to clinical research shaping the future of aesthetic medicine."
        />
        <link rel="canonical" href="https://cosmedocs.com/research" data-rh="true" />
        <meta property="og:title" content="Cosmedocs Research — Doctor-Led Aesthetic Studies" />
        <meta property="og:description" content="Take part in anonymous, doctor-led research studies shaping aesthetic medicine." />
        <meta property="og:url" content="https://cosmedocs.com/research" />
        <meta name="robots" content="index,follow" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "CollectionPage",
                "@id": "https://cosmedocs.com/research",
                "url": "https://cosmedocs.com/research",
                "name": "Cosmedocs Research Studies",
                "headline": "Doctor-led Research, Shaping Aesthetic Medicine",
                "description": "Anonymous research studies by Cosmedocs, a doctor-led aesthetic clinic in London. Contribute to clinical research shaping the future of aesthetic medicine.",
                "inLanguage": "en-GB",
                "publisher": {
                  "@id": "https://cosmedocs.com/#medical-org",
                },
                "speakable": {
                  "@type": "SpeakableSpecification",
                  "cssSelector": ["h1", ".text-white\/70"],
                },
              },
              {
                "@type": "ItemList",
                "itemListElement": studies.map((s, idx) => ({
                  "@type": "ListItem",
                  "position": idx + 1,
                  "url": `https://cosmedocs.com/research/${s.slug}`,
                  "name": s.title,
                  "item": {
                    "@type": "Article",
                    "headline": s.title,
                    "description": s.description,
                    "url": `https://cosmedocs.com/research/${s.slug}`,
                    "publisher": { "@id": "https://cosmedocs.com/#medical-org" },
                  },
                })),
              },
              {
                "@type": "MedicalOrganization",
                "@id": "https://cosmedocs.com/#medical-org",
                "name": "Cosmedocs",
                "url": "https://cosmedocs.com",
                "logo": "https://cosmedocs.com/logo.png",
                "sameAs": [
                  "https://www.instagram.com/cosmedocs",
                ],
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "10 Harley Street",
                  "addressLocality": "London",
                  "postalCode": "W1G 9PF",
                  "addressCountry": "GB",
                },
                "description": "Doctor-led aesthetic clinic in London. Our aesthetics is invisible art. Bold · Natural · Always Your Way.",
              },
            ],
          })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-black text-white">
        <section className="max-w-4xl mx-auto px-6 pt-24 pb-12 text-center">
          <div className="mx-auto h-14 w-14 rounded-full bg-[#C9A050]/15 border border-[#C9A050]/40 flex items-center justify-center mb-6">
            <Microscope className="h-6 w-6 text-[#C9A050]" />
          </div>
          <p className="text-[11px] tracking-[0.32em] uppercase text-[#C9A050] mb-3">Cosmedocs Research Institute</p>
          <h1 className="text-3xl md:text-5xl font-light leading-tight mb-5">
            Doctor-led research, shaping aesthetic medicine
          </h1>
          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            We're a doctor-led clinic quietly conducting clinical and patient-experience research.
            Each study below is fully anonymous and takes a few seconds to complete. Your voice helps
            us care for patients better.
          </p>
        </section>

        <section className="max-w-4xl mx-auto px-6 pb-24">
          {loading ? (
            <p className="text-white/40 text-center py-12">Loading studies…</p>
          ) : studies.length === 0 ? (
            <div className="text-center py-16 border border-dashed border-white/10 rounded-2xl">
              <p className="text-white/50">No active studies right now. Please check back soon.</p>
            </div>
          ) : (
            <>
              {active.length > 0 && (
                <>
                  <h2 className="text-xs tracking-[0.28em] uppercase text-[#C9A050] mb-4">Open studies</h2>
                  <div className="grid gap-4 mb-12">
                    {active.map(s => <StudyCard key={s.id} study={s} />)}
                  </div>
                </>
              )}
              {closed.length > 0 && (
                <>
                  <h2 className="text-xs tracking-[0.28em] uppercase text-white/40 mb-4">Past studies</h2>
                  <div className="grid gap-4">
                    {closed.map(s => <StudyCard key={s.id} study={s} closed />)}
                  </div>
                </>
              )}
            </>
          )}
        </section>
      </main>
    </>
  );
};

const StudyCard = ({ study, closed }: { study: Study; closed?: boolean }) => (
  <Link
    to={`/research/${study.slug}`}
    className={`group block rounded-2xl border p-6 md:p-8 transition-all ${
      closed
        ? "border-white/10 bg-white/[0.02] hover:border-white/20"
        : "border-[#C9A050]/30 bg-gradient-to-br from-[#C9A050]/[0.06] to-transparent hover:border-[#C9A050]/60"
    }`}
  >
    <div className="flex items-start justify-between gap-4">
      <div className="flex-1">
        {study.subtitle && (
          <p className="text-[10px] tracking-[0.28em] uppercase text-[#C9A050] mb-2">{study.subtitle}</p>
        )}
        <h3 className="text-xl md:text-2xl font-light text-white leading-snug mb-2">{study.title}</h3>
        {study.description && (
          <p className="text-white/60 text-sm leading-relaxed line-clamp-3">{study.description}</p>
        )}
      </div>
      <ArrowRight className="h-5 w-5 text-[#C9A050] mt-1 shrink-0 group-hover:translate-x-1 transition-transform" />
    </div>
    {closed && <p className="text-[10px] uppercase tracking-[0.25em] text-white/30 mt-4">Closed — view summary</p>}
  </Link>
);

export default ResearchHub;
