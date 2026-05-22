import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, Sparkles, ArrowLeft, Share2, FlaskConical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

interface Study {
  id: string;
  slug: string;
  title: string;
  subtitle: string | null;
  description: string | null;
  intro: string | null;
  status: string;
  seo_title: string | null;
  seo_description: string | null;
  created_at?: string;
  updated_at?: string;
}

interface Question {
  id: string;
  question_order: number;
  question_text: string;
  question_type: "single" | "multi" | "text" | "demographics";
  options: Array<{ value: string; label: string; emoji?: string }>;
  required: boolean;
  allow_other: boolean;
}

const AGE_GROUPS = ["Under 25", "25–34", "35–44", "45–54", "55–64", "65+"];
const GENDERS = ["Female", "Male", "Non-binary / Other", "Prefer not to say"];

// Apple iOS-style font stack — same standard as questionnaire popup
// (see mem://design/questionnaire-ios-typography)
const IOS_FONT = `-apple-system, "SF Pro Display", "SF Pro Text", "Segoe UI", system-ui, sans-serif`;

const ResearchStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const [study, setStudy] = useState<Study | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [otherText, setOtherText] = useState<Record<string, string>>({});
  const [demographics, setDemographics] = useState({ age_group: "", gender: "", gender_other: "", ethnicity: "", notes: "" });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!slug) return;
    (async () => {
      const { data: s } = await supabase
        .from("research_studies")
        .select("*")
        .eq("slug", slug)
        .maybeSingle();
      if (!s) { setNotFound(true); setLoading(false); return; }
      setStudy(s as Study);
      const { data: qs } = await supabase
        .from("research_questions")
        .select("*")
        .eq("study_id", s.id)
        .order("question_order", { ascending: true });
      setQuestions(((qs as any[]) || []) as Question[]);
      setLoading(false);
    })();
  }, [slug]);

  if (notFound) return <Navigate to="/research" replace />;

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const copy = async () => {
    try { await navigator.clipboard.writeText(shareUrl); setCopied(true); setTimeout(() => setCopied(false), 1800); } catch {}
  };

  const setSingle = (qid: string, value: string) => setAnswers(a => ({ ...a, [qid]: value }));
  const toggleMulti = (qid: string, value: string) => {
    setAnswers(a => {
      const cur: string[] = Array.isArray(a[qid]) ? a[qid] : [];
      return { ...a, [qid]: cur.includes(value) ? cur.filter(v => v !== value) : [...cur, value] };
    });
  };

  const canSubmit = () => questions.filter(q => q.required).every(q => {
    const v = answers[q.id];
    if (q.question_type === "multi") return Array.isArray(v) && v.length > 0;
    return v !== undefined && v !== "";
  });

  const submit = async () => {
    if (!study) return;
    setSubmitting(true);
    const finalAnswers: Record<string, any> = {};
    questions.forEach(q => {
      const v = answers[q.id];
      if (v === "__other__" && otherText[q.id]) finalAnswers[q.id] = { other: otherText[q.id] };
      else if (Array.isArray(v) && v.includes("__other__") && otherText[q.id]) {
        finalAnswers[q.id] = [...v.filter(x => x !== "__other__"), { other: otherText[q.id] }];
      } else if (v !== undefined) finalAnswers[q.id] = v;
    });
    const demo = {
      age_group: demographics.age_group || null,
      gender: demographics.gender === "Non-binary / Other" && demographics.gender_other ? demographics.gender_other : demographics.gender || null,
      ethnicity: demographics.ethnicity || null,
      notes: demographics.notes || null,
    };
    const { error } = await supabase.from("research_responses").insert({
      study_id: study.id,
      answers: finalAnswers,
      demographics: demo,
    });
    setSubmitting(false);
    if (error) {
      toast({ title: "Could not save", description: "Please try again in a moment.", variant: "destructive" });
      return;
    }
    setDone(true);
  };

  if (loading || !study) {
    return <div className="min-h-screen bg-black" />;
  }

  const isClosed = study.status === "closed";

  return (
    <>
      <Helmet>
        <title>{study.seo_title || `${study.title} | Cosmedocs Research`}</title>
        <meta name="description" content={study.seo_description || study.description || ""} />
        <link rel="canonical" href={`https://cosmedocs.com/research/${study.slug}`} data-rh="true" />
        <meta property="og:title" content={study.title} />
        <meta property="og:description" content={study.seo_description || study.description || ""} />
        <meta property="og:url" content={`https://cosmedocs.com/research/${study.slug}`} />
        <meta name="robots" content="index,follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                "@id": `https://cosmedocs.com/research/${study.slug}`,
                "url": `https://cosmedocs.com/research/${study.slug}`,
                "headline": study.title,
                "description": study.seo_description || study.description || `Take part in ${study.title}, a doctor-led research study by Cosmedocs.`,
                "inLanguage": "en-GB",
                "datePublished": study.created_at ? new Date(study.created_at).toISOString().split("T")[0] : "2026-05-22",
                "dateModified": study.updated_at ? new Date(study.updated_at).toISOString().split("T")[0] : "2026-05-22",
                "author": {
                  "@id": "https://cosmedocs.com/#medical-org",
                },
                "publisher": {
                  "@id": "https://cosmedocs.com/#medical-org",
                },
                "about": {
                  "@type": "MedicalBusiness",
                  "name": "Cosmedocs Aesthetic Research",
                  "medicalSpecialty": "Aesthetic Medicine",
                },
                "isPartOf": {
                  "@type": "CollectionPage",
                  "@id": "https://cosmedocs.com/research",
                  "name": "Cosmedocs Research Studies",
                },
                "speakable": {
                  "@type": "SpeakableSpecification",
                  "cssSelector": ["h1", ".text-white\\/70"],
                },
                "mainEntity": {
                  "@type": "Survey",
                  "name": study.title,
                  "description": study.description,
                  "url": `https://cosmedocs.com/research/${study.slug}`,
                  "publisher": { "@id": "https://cosmedocs.com/#medical-org" },
                  "inLanguage": "en-GB",
                  "numberOfQuestions": questions.length,
                },
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
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://cosmedocs.com",
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Research",
                    "item": "https://cosmedocs.com/research",
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": study.title,
                    "item": `https://cosmedocs.com/research/${study.slug}`,
                  },
                ],
              },
            ],
          })}
        </script>
      </Helmet>

      <main
        className="min-h-screen bg-black text-white"
        style={{
          fontFamily: IOS_FONT,
          paddingLeft: "env(safe-area-inset-left)",
          paddingRight: "env(safe-area-inset-right)",
          paddingTop: "env(safe-area-inset-top)",
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
      >
        {/* Reading width: phone full, tablet ~620, iPad-pro ~720 */}
        <section className="max-w-[620px] xl:max-w-[720px] mx-auto px-6 md:px-10 lg:px-12 pt-16 md:pt-20 lg:pt-24 pb-16 md:pb-24">
          <Link
            to="/research"
            className="inline-flex items-center gap-2 text-white/50 hover:text-[#C9A050] text-[11px] md:text-xs uppercase tracking-[0.28em] mb-8 md:mb-10"
          >
            <ArrowLeft className="h-3.5 w-3.5 md:h-4 md:w-4" /> All studies
          </Link>

          <div className="text-center mb-10 md:mb-14">
            {/* New icon: refined dual-ring flask badge */}
            <div className="relative mx-auto mb-6 md:mb-7 h-16 w-16 md:h-20 md:w-20 flex items-center justify-center">
              <span className="absolute inset-0 rounded-full border border-[#C9A050]/25" />
              <span className="absolute inset-1.5 rounded-full border border-[#C9A050]/45 bg-gradient-to-br from-[#C9A050]/20 to-transparent" />
              <FlaskConical
                className="relative h-7 w-7 md:h-8 md:w-8 text-[#C9A050]"
                strokeWidth={1.4}
              />
            </div>
            {study.subtitle && (
              <p className="text-[11px] md:text-[12px] tracking-[0.32em] uppercase text-[#C9A050] mb-3 md:mb-4">
                {study.subtitle}
              </p>
            )}
            <h1
              className="text-[28px] md:text-[40px] lg:text-[44px] font-light leading-[1.12] mb-4 md:mb-5"
              style={{ letterSpacing: "-0.022em" }}
            >
              {study.title}
            </h1>
            {study.intro && (
              <p className="text-white/70 text-[16px] md:text-[18px] leading-[1.55] max-w-[58ch] mx-auto font-normal">
                {study.intro}
              </p>
            )}
          </div>

          {isClosed ? (
            <div className="text-center py-14 md:py-16 border border-white/10 rounded-2xl">
              <p className="text-white/60 text-[16px] md:text-[17px]">This study is now closed. Thank you to everyone who took part.</p>
            </div>
          ) : done ? (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center py-14 md:py-16 border border-[#C9A050]/30 rounded-3xl bg-[#C9A050]/5">
              <div className="mx-auto h-16 w-16 md:h-18 md:w-18 rounded-full bg-[#C9A050]/20 border border-[#C9A050]/50 flex items-center justify-center mb-5">
                <Check className="h-7 w-7 text-[#C9A050]" strokeWidth={2.2} />
              </div>
              <p className="text-white text-[20px] md:text-[22px] font-semibold" style={{ letterSpacing: "-0.02em" }}>
                Thank you — truly.
              </p>
              <p className="text-white/55 text-[15px] md:text-[16px] mt-2">Your voice shapes our research.</p>
              <button onClick={copy} className="mt-7 inline-flex items-center gap-2 text-[13px] md:text-[14px] text-[#C9A050] border border-[#C9A050]/40 rounded-full px-5 py-2.5 hover:bg-[#C9A050]/10 transition-colors">
                {copied ? <><Check className="h-4 w-4" /> Link copied</> : <><Share2 className="h-4 w-4" /> Share this study</>}
              </button>
            </motion.div>
          ) : questions.length === 0 ? (
            <p className="text-white/50 text-center py-14 text-[16px]">Questions are being prepared. Please check back soon.</p>
          ) : (
            <div className="space-y-6 md:space-y-8">
              {questions.map((q, idx) => (
                <div key={q.id} className="border border-white/10 rounded-3xl p-6 md:p-8 bg-white/[0.025]">
                  <p className="text-[10px] md:text-[11px] tracking-[0.26em] uppercase text-[#C9A050] mb-2.5">
                    Question {idx + 1}{q.required && " · required"}
                  </p>
                  <p
                    className="text-white text-[20px] md:text-[24px] font-semibold mb-5 md:mb-6 leading-[1.25]"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {q.question_text}
                  </p>

                  {q.question_type === "single" && (
                    <div className="space-y-2.5">
                      {q.options.map(o => {
                        const active = answers[q.id] === o.value;
                        return (
                          <button
                            key={o.value}
                            onClick={() => setSingle(q.id, o.value)}
                            className={`w-full text-left px-4 md:px-5 rounded-2xl border transition-all flex items-center gap-3.5 active:scale-[0.99] ${
                              active
                                ? "bg-[#C9A050]/12 border-[#C9A050]/70 text-white"
                                : "bg-white/[0.035] border-white/10 text-white/90 hover:border-[#C9A050]/30"
                            }`}
                            style={{ minHeight: 64 }}
                          >
                            {o.emoji && <span className="text-[22px] md:text-[24px] leading-none">{o.emoji}</span>}
                            <span className="text-[17px] md:text-[18px] font-medium flex-1" style={{ letterSpacing: "-0.01em" }}>{o.label}</span>
                            {active && <Check className="h-5 w-5 text-[#C9A050]" />}
                          </button>
                        );
                      })}
                      {q.allow_other && (
                        <button
                          onClick={() => setSingle(q.id, "__other__")}
                          className={`w-full text-left px-4 md:px-5 rounded-2xl border flex items-center gap-3.5 ${
                            answers[q.id] === "__other__" ? "bg-[#C9A050]/12 border-[#C9A050]/70 text-white" : "bg-white/[0.035] border-white/10 text-white/90"
                          }`}
                          style={{ minHeight: 64 }}
                        >
                          <span className="text-[22px] leading-none">💭</span>
                          <span className="text-[17px] md:text-[18px] font-medium">Something else</span>
                        </button>
                      )}
                      {answers[q.id] === "__other__" && (
                        <Input
                          value={otherText[q.id] || ""}
                          onChange={e => setOtherText(t => ({ ...t, [q.id]: e.target.value }))}
                          placeholder="Tell us in a few words…"
                          maxLength={200}
                          className="h-14 text-[17px] rounded-2xl bg-white/5 border-white/10 text-white placeholder:text-white/30 px-4"
                        />
                      )}
                    </div>
                  )}

                  {q.question_type === "multi" && (
                    <div className="space-y-2.5">
                      {q.options.map(o => {
                        const checked = Array.isArray(answers[q.id]) && answers[q.id].includes(o.value);
                        return (
                          <button
                            key={o.value}
                            onClick={() => toggleMulti(q.id, o.value)}
                            className={`w-full text-left px-4 md:px-5 rounded-2xl border flex items-center gap-3.5 active:scale-[0.99] ${
                              checked ? "bg-[#C9A050]/12 border-[#C9A050]/70 text-white" : "bg-white/[0.035] border-white/10 text-white/90"
                            }`}
                            style={{ minHeight: 64 }}
                          >
                            <span className={`h-6 w-6 rounded-md border flex items-center justify-center shrink-0 ${checked ? "bg-[#C9A050] border-[#C9A050]" : "border-white/30"}`}>
                              {checked && <Check className="h-4 w-4 text-black" strokeWidth={2.5} />}
                            </span>
                            {o.emoji && <span className="text-[22px] leading-none">{o.emoji}</span>}
                            <span className="text-[17px] md:text-[18px] font-medium flex-1">{o.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {q.question_type === "text" && (
                    <Textarea
                      value={answers[q.id] || ""}
                      onChange={e => setAnswers(a => ({ ...a, [q.id]: e.target.value }))}
                      placeholder="Your answer…"
                      maxLength={600}
                      className="text-[17px] rounded-2xl bg-white/5 border-white/10 text-white placeholder:text-white/30 min-h-[120px] px-4 py-3.5"
                    />
                  )}

                  {q.question_type === "demographics" && (
                    <div className="space-y-5 md:space-y-6">
                      <DemoSection title="Age group">
                        <Chips options={AGE_GROUPS} value={demographics.age_group} onChange={v => setDemographics(d => ({ ...d, age_group: v }))} />
                      </DemoSection>
                      <DemoSection title="Gender">
                        <Chips options={GENDERS} value={demographics.gender} onChange={v => setDemographics(d => ({ ...d, gender: v }))} />
                        {demographics.gender === "Non-binary / Other" && (
                          <Input
                            value={demographics.gender_other}
                            onChange={e => setDemographics(d => ({ ...d, gender_other: e.target.value }))}
                            placeholder="If you'd like to specify"
                            maxLength={60}
                            className="mt-3 h-12 text-[16px] rounded-2xl bg-white/5 border-white/10 text-white placeholder:text-white/30 px-4"
                          />
                        )}
                      </DemoSection>
                      <DemoSection title="Ethnicity">
                        <Input
                          value={demographics.ethnicity}
                          onChange={e => setDemographics(d => ({ ...d, ethnicity: e.target.value }))}
                          placeholder="e.g. South Asian, White British…"
                          maxLength={80}
                          className="h-12 text-[16px] rounded-2xl bg-white/5 border-white/10 text-white placeholder:text-white/30 px-4"
                        />
                      </DemoSection>
                      <DemoSection title="Anything else?">
                        <Textarea
                          value={demographics.notes}
                          onChange={e => setDemographics(d => ({ ...d, notes: e.target.value }))}
                          placeholder="Optional…"
                          maxLength={400}
                          className="text-[16px] rounded-2xl bg-white/5 border-white/10 text-white placeholder:text-white/30 min-h-[96px] px-4 py-3"
                        />
                      </DemoSection>
                    </div>
                  )}
                </div>
              ))}

              <Button
                disabled={!canSubmit() || submitting}
                onClick={submit}
                className="w-full bg-[#C9A050] hover:bg-[#B8913F] text-black rounded-full h-[60px] md:h-[64px] text-[17px] md:text-[18px] font-semibold active:scale-[0.99] transition-transform"
                style={{ letterSpacing: "-0.01em" }}
              >
                {submitting ? "Sending…" : (<><Sparkles className="h-5 w-5 mr-2" /> Submit anonymously</>)}
              </Button>

              <p className="text-[12px] md:text-[13px] text-white/35 text-center leading-relaxed pt-1">
                Anonymous · No personal data stored · Internal clinical research only
              </p>
            </div>
          )}
        </section>
      </main>
    </>
  );
};

const DemoSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <p className="text-white text-[15px] md:text-[16px] font-semibold mb-2.5" style={{ letterSpacing: "-0.01em" }}>
      {title}
      <span className="text-white/35 text-[12px] md:text-[13px] font-normal ml-1.5">Optional</span>
    </p>
    {children}
  </div>
);

const Chips = ({ options, value, onChange }: { options: string[]; value: string; onChange: (v: string) => void }) => (
  <div className="flex flex-wrap gap-2">
    {options.map(o => {
      const active = value === o;
      return (
        <button
          key={o}
          onClick={() => onChange(o)}
          className={`px-4 md:px-5 h-12 md:h-[52px] rounded-full text-[15px] md:text-[16px] font-medium border transition-all active:scale-[0.97] ${
            active
              ? "bg-[#C9A050]/15 border-[#C9A050]/70 text-white"
              : "bg-white/[0.04] border-white/10 text-white/80 hover:border-[#C9A050]/30"
          }`}
          style={{ letterSpacing: "-0.01em" }}
        >
          {o}
        </button>
      );
    })}
  </div>
);

export default ResearchStudy;
