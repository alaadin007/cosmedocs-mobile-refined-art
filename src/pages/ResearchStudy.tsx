import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Microscope, Check, Sparkles, ArrowLeft, Share2 } from "lucide-react";
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
      setQuestions((qs as Question[]) || []);
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
    // merge "other" text into answers
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
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ResearchProject",
            name: study.title,
            description: study.description,
            url: `https://cosmedocs.com/research/${study.slug}`,
            funder: { "@type": "MedicalOrganization", name: "Cosmedocs" },
            status: study.status === "active" ? "Active" : "Completed",
          })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-black text-white">
        <section className="max-w-2xl mx-auto px-6 pt-20 pb-12">
          <Link to="/research" className="inline-flex items-center gap-2 text-white/50 hover:text-[#C9A050] text-xs uppercase tracking-[0.25em] mb-8">
            <ArrowLeft className="h-3.5 w-3.5" /> All studies
          </Link>

          <div className="text-center mb-10">
            <div className="mx-auto h-12 w-12 rounded-full bg-[#C9A050]/15 border border-[#C9A050]/40 flex items-center justify-center mb-5">
              <Microscope className="h-5 w-5 text-[#C9A050]" />
            </div>
            {study.subtitle && (
              <p className="text-[11px] tracking-[0.32em] uppercase text-[#C9A050] mb-3">{study.subtitle}</p>
            )}
            <h1 className="text-3xl md:text-4xl font-light leading-tight mb-4">{study.title}</h1>
            {study.intro && <p className="text-white/70 text-base leading-relaxed max-w-xl mx-auto">{study.intro}</p>}
          </div>

          {isClosed ? (
            <div className="text-center py-12 border border-white/10 rounded-2xl">
              <p className="text-white/60">This study is now closed. Thank you to everyone who took part.</p>
            </div>
          ) : done ? (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center py-12 border border-[#C9A050]/30 rounded-2xl bg-[#C9A050]/5">
              <div className="mx-auto h-14 w-14 rounded-full bg-[#C9A050]/20 border border-[#C9A050]/50 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-[#C9A050]" />
              </div>
              <p className="text-white/90 text-lg font-light">Thank you — truly.</p>
              <p className="text-white/50 text-sm mt-1">Your voice shapes our research.</p>
              <button onClick={copy} className="mt-6 inline-flex items-center gap-2 text-xs text-[#C9A050] border border-[#C9A050]/40 rounded-full px-4 py-2 hover:bg-[#C9A050]/10">
                {copied ? <><Check className="h-3.5 w-3.5" /> Link copied</> : <><Share2 className="h-3.5 w-3.5" /> Share this study</>}
              </button>
            </motion.div>
          ) : questions.length === 0 ? (
            <p className="text-white/50 text-center py-12">Questions are being prepared. Please check back soon.</p>
          ) : (
            <div className="space-y-8">
              {questions.map((q, idx) => (
                <div key={q.id} className="border border-white/10 rounded-2xl p-5 md:p-6 bg-white/[0.02]">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-[#C9A050] mb-1.5">Question {idx + 1}{q.required && " · required"}</p>
                  <p className="text-white text-base md:text-lg font-light mb-4">{q.question_text}</p>

                  {q.question_type === "single" && (
                    <div className="space-y-2">
                      {q.options.map(o => (
                        <button
                          key={o.value}
                          onClick={() => setSingle(q.id, o.value)}
                          className={`w-full text-left px-3.5 py-2.5 rounded-lg border text-sm transition-all flex items-center gap-3 ${
                            answers[q.id] === o.value
                              ? "bg-[#C9A050]/15 border-[#C9A050]/60 text-white"
                              : "bg-white/[0.03] border-white/10 text-white/80 hover:border-[#C9A050]/30"
                          }`}
                        >
                          {o.emoji && <span className="text-base">{o.emoji}</span>}
                          <span>{o.label}</span>
                        </button>
                      ))}
                      {q.allow_other && (
                        <button
                          onClick={() => setSingle(q.id, "__other__")}
                          className={`w-full text-left px-3.5 py-2.5 rounded-lg border text-sm flex items-center gap-3 ${
                            answers[q.id] === "__other__" ? "bg-[#C9A050]/15 border-[#C9A050]/60 text-white" : "bg-white/[0.03] border-white/10 text-white/80"
                          }`}
                        >💭 Something else</button>
                      )}
                      {answers[q.id] === "__other__" && (
                        <Input value={otherText[q.id] || ""} onChange={e => setOtherText(t => ({ ...t, [q.id]: e.target.value }))} placeholder="Tell us in a few words…" maxLength={200} className="bg-white/5 border-white/10 text-white" />
                      )}
                    </div>
                  )}

                  {q.question_type === "multi" && (
                    <div className="space-y-2">
                      {q.options.map(o => {
                        const checked = Array.isArray(answers[q.id]) && answers[q.id].includes(o.value);
                        return (
                          <button key={o.value} onClick={() => toggleMulti(q.id, o.value)} className={`w-full text-left px-3.5 py-2.5 rounded-lg border text-sm flex items-center gap-3 ${
                            checked ? "bg-[#C9A050]/15 border-[#C9A050]/60 text-white" : "bg-white/[0.03] border-white/10 text-white/80"
                          }`}>
                            <span className={`h-4 w-4 rounded border flex items-center justify-center ${checked ? "bg-[#C9A050] border-[#C9A050]" : "border-white/30"}`}>
                              {checked && <Check className="h-3 w-3 text-black" />}
                            </span>
                            {o.emoji && <span>{o.emoji}</span>}
                            <span>{o.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {q.question_type === "text" && (
                    <Textarea value={answers[q.id] || ""} onChange={e => setAnswers(a => ({ ...a, [q.id]: e.target.value }))} placeholder="Your answer…" maxLength={600} className="bg-white/5 border-white/10 text-white min-h-[90px]" />
                  )}

                  {q.question_type === "demographics" && (
                    <div className="space-y-4">
                      <div>
                        <p className="text-white/60 text-xs mb-2">Age group</p>
                        <div className="flex flex-wrap gap-1.5">
                          {AGE_GROUPS.map(a => (
                            <button key={a} onClick={() => setDemographics(d => ({ ...d, age_group: a }))} className={`px-3 py-1.5 rounded-full text-xs border ${
                              demographics.age_group === a ? "bg-[#C9A050]/15 border-[#C9A050]/60 text-white" : "bg-white/[0.03] border-white/10 text-white/70"
                            }`}>{a}</button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-white/60 text-xs mb-2">Gender</p>
                        <div className="flex flex-wrap gap-1.5">
                          {GENDERS.map(g => (
                            <button key={g} onClick={() => setDemographics(d => ({ ...d, gender: g }))} className={`px-3 py-1.5 rounded-full text-xs border ${
                              demographics.gender === g ? "bg-[#C9A050]/15 border-[#C9A050]/60 text-white" : "bg-white/[0.03] border-white/10 text-white/70"
                            }`}>{g}</button>
                          ))}
                        </div>
                        {demographics.gender === "Non-binary / Other" && (
                          <Input value={demographics.gender_other} onChange={e => setDemographics(d => ({ ...d, gender_other: e.target.value }))} placeholder="If you'd like to specify" maxLength={60} className="mt-2 bg-white/5 border-white/10 text-white" />
                        )}
                      </div>
                      <div>
                        <p className="text-white/60 text-xs mb-2">Ethnicity</p>
                        <Input value={demographics.ethnicity} onChange={e => setDemographics(d => ({ ...d, ethnicity: e.target.value }))} placeholder="e.g. South Asian, White British…" maxLength={80} className="bg-white/5 border-white/10 text-white" />
                      </div>
                      <div>
                        <p className="text-white/60 text-xs mb-2">Anything else?</p>
                        <Textarea value={demographics.notes} onChange={e => setDemographics(d => ({ ...d, notes: e.target.value }))} placeholder="Optional…" maxLength={400} className="bg-white/5 border-white/10 text-white min-h-[70px]" />
                      </div>
                    </div>
                  )}
                </div>
              ))}

              <Button disabled={!canSubmit() || submitting} onClick={submit} className="w-full bg-[#C9A050] hover:bg-[#B8913F] text-black rounded-full h-12 text-base">
                {submitting ? "Sending…" : (<><Sparkles className="h-4 w-4 mr-2" /> Submit anonymously</>)}
              </Button>

              <p className="text-[11px] text-white/30 text-center leading-relaxed">
                Anonymous • No personal data stored • Internal clinical research only
              </p>
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default ResearchStudy;
