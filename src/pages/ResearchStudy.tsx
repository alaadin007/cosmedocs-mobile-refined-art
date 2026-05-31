import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { Check, Sparkles, ArrowLeft, ArrowRight, Share2, FlaskConical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import {
  DigitalFaceProfileView,
  GeneratingProfile,
  ProfilePrePitch,
  type ProfileData,
} from "@/components/research/DigitalFaceProfile";

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
  const [generatingProfile, setGeneratingProfile] = useState(false);
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [profileFailed, setProfileFailed] = useState(false);

  const isFilteredFace = slug === "filtered-face-project";

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
      // Normalise options: DB may store either string[] or {value,label,emoji}[]
      const normalised = ((qs as any[]) || []).map(q => ({
        ...q,
        options: Array.isArray(q.options)
          ? q.options.map((o: any) =>
              typeof o === "string"
                ? { value: o, label: o }
                : { value: o.value ?? o.label, label: o.label ?? o.value, emoji: o.emoji }
            )
          : [],
      })) as Question[];
      setQuestions(normalised);
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

  const canSubmit = () => questions
    .filter(q => q.required && q.question_type !== "demographics")
    .every(q => {
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
    const { data: inserted, error } = await supabase.from("research_responses").insert({
      study_id: study.id,
      answers: finalAnswers,
      demographics: demo,
    }).select("id").single();
    setSubmitting(false);
    if (error) {
      toast({ title: "Could not save", description: "Please try again in a moment.", variant: "destructive" });
      return;
    }
    setDone(true);

    if (isFilteredFace && inserted?.id) {
      setGeneratingProfile(true);
      try {
        const { data, error: fnErr } = await supabase.functions.invoke(
          "generate-digital-face-profile",
          { body: { response_id: inserted.id } },
        );
        if (fnErr || !data) throw fnErr || new Error("no data");
        setProfile(data as ProfileData);
      } catch (e) {
        console.error("profile generation failed", e);
        setProfileFailed(true);
      } finally {
        setGeneratingProfile(false);
      }
    }
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

      <SlideFlow
        study={study}
        questions={questions}
        isClosed={isClosed}
        done={done}
        copied={copied}
        copy={copy}
        answers={answers}
        otherText={otherText}
        setOtherText={setOtherText}
        setSingle={setSingle}
        toggleMulti={toggleMulti}
        setAnswers={setAnswers}
        demographics={demographics}
        setDemographics={setDemographics}
        submit={submit}
        submitting={submitting}
        canSubmit={canSubmit()}
        isFilteredFace={isFilteredFace}
        generatingProfile={generatingProfile}
        profile={profile}
        profileFailed={profileFailed}
      />
    </>
  );
};

/* ---------- Slide flow (one question per screen, demographics at end) ---------- */

interface SlideFlowProps {
  study: Study;
  questions: Question[];
  isClosed: boolean;
  done: boolean;
  copied: boolean;
  copy: () => void;
  answers: Record<string, any>;
  otherText: Record<string, string>;
  setOtherText: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  setSingle: (qid: string, value: string) => void;
  toggleMulti: (qid: string, value: string) => void;
  setAnswers: React.Dispatch<React.SetStateAction<Record<string, any>>>;
  demographics: { age_group: string; gender: string; gender_other: string; ethnicity: string; notes: string };
  setDemographics: React.Dispatch<React.SetStateAction<{ age_group: string; gender: string; gender_other: string; ethnicity: string; notes: string }>>;
  submit: () => void;
  submitting: boolean;
  canSubmit: boolean;
  isFilteredFace: boolean;
  generatingProfile: boolean;
  profile: ProfileData | null;
  profileFailed: boolean;
}

const QUESTIONS_PER_PAGE = 3;

const SlideFlow = (p: SlideFlowProps) => {
  // Build the deck: intro + grouped question slides (3 per page) + demographics slide.
  // Any DB-stored 'demographics' typed question is filtered out — demographics is the
  // dedicated final slide.
  const orderedQuestions = useMemo(
    () => p.questions.filter(q => q.question_type !== "demographics"),
    [p.questions]
  );

  const slides = useMemo(() => {
    const arr: Array<{ key: string; kind: "intro" | "questions" | "demographics"; questions?: Question[]; pageIndex?: number; totalPages?: number }> = [];
    arr.push({ key: "intro", kind: "intro" });
    const groups: Question[][] = [];
    for (let i = 0; i < orderedQuestions.length; i += QUESTIONS_PER_PAGE) {
      groups.push(orderedQuestions.slice(i, i + QUESTIONS_PER_PAGE));
    }
    groups.forEach((grp, i) =>
      arr.push({ key: `g-${i}`, kind: "questions", questions: grp, pageIndex: i, totalPages: groups.length })
    );
    arr.push({ key: "demographics", kind: "demographics" });
    return arr;
  }, [orderedQuestions]);

  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);

  const total = slides.length;
  const current = slides[idx];

  const goNext = () => {
    if (idx < total - 1) {
      setDir(1);
      setIdx(idx + 1);
      if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const goBack = () => {
    if (idx > 0) {
      setDir(-1);
      setIdx(idx - 1);
      if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isQuestionAnswered = (q: Question): boolean => {
    const v = p.answers[q.id];
    if (q.question_type === "multi") return Array.isArray(v) && v.length > 0;
    if (q.question_type === "text") return typeof v === "string" && v.trim().length > 0;
    if (v === "__other__") return (p.otherText[q.id] || "").trim().length > 0;
    return v !== undefined && v !== "";
  };

  const canAdvance = (): boolean => {
    if (current.kind === "intro" || current.kind === "demographics") return true;
    return (current.questions || []).every(q => (q.required ? isQuestionAnswered(q) : true));
  };

  const onDragEnd = (_: any, info: PanInfo) => {
    const swipe = info.offset.x;
    const velocity = info.velocity.x;
    if (swipe < -60 || velocity < -400) {
      if (canAdvance()) goNext();
    } else if (swipe > 60 || velocity > 400) {
      goBack();
    }
  };

  const progressPct = ((idx) / (total - 1)) * 100;

  /* ---- Render ---- */
  return (
    <main
      className="min-h-[100dvh] bg-black text-white flex flex-col"
      style={{
        fontFamily: IOS_FONT,
        paddingLeft: "env(safe-area-inset-left)",
        paddingRight: "env(safe-area-inset-right)",
        paddingTop: "env(safe-area-inset-top)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      {/* Top bar: progress + back */}
      <header className="px-5 md:px-8 pt-4 md:pt-6 pb-3 md:pb-4 flex items-center gap-3 md:gap-4 max-w-[720px] w-full mx-auto">
        <button
          onClick={goBack}
          disabled={idx === 0}
          className="h-10 w-10 -ml-2 inline-flex items-center justify-center rounded-full text-white/60 hover:text-white disabled:opacity-25 transition-colors"
          aria-label="Back"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="flex-1 h-[3px] bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={false}
            animate={{ width: `${progressPct}%` }}
            transition={{ type: "spring", stiffness: 200, damping: 28 }}
            className="h-full bg-[#C9A050] rounded-full"
          />
        </div>
        <span className="text-[11px] tracking-[0.22em] uppercase text-white/40 tabular-nums">
          {Math.min(idx + 1, total)}/{total}
        </span>
      </header>

      {/* Slide stage */}
      <section className="flex-1 flex items-stretch overflow-hidden">
        <div className="relative w-full max-w-[640px] xl:max-w-[720px] mx-auto px-5 md:px-10 lg:px-12 py-6 md:py-10">
          {p.isClosed ? (
            <div className="h-full flex items-center justify-center">
              <div className="text-center py-14 md:py-16 border border-white/10 rounded-3xl px-8">
                <p className="text-white/60 text-[16px] md:text-[17px]">This study is now closed. Thank you to everyone who took part.</p>
                <Link to="/research" className="inline-flex items-center gap-2 mt-6 text-[#C9A050] text-[14px]">
                  <ArrowLeft className="h-4 w-4" /> All studies
                </Link>
              </div>
            </div>
          ) : p.questions.length === 0 ? (
            <p className="text-white/50 text-center py-14 text-[16px]">Questions are being prepared. Please check back soon.</p>
          ) : p.done ? (
            p.isFilteredFace && !p.profileFailed ? (
              p.generatingProfile || !p.profile ? (
                <GeneratingProfile />
              ) : (
                <DigitalFaceProfileView
                  profile={p.profile}
                  studyId={p.study.id}
                  shareUrl={typeof window !== "undefined" ? window.location.href : ""}
                />
              )
            ) : (
              <ThankYouSlide copied={p.copied} copy={p.copy} />
            )
          ) : (
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={current.key}
                custom={dir}
                initial={{ opacity: 0, x: dir * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -40 }}
                transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.18}
                onDragEnd={onDragEnd}
                className="h-full"
              >
                {current.kind === "intro" && (
                  <IntroSlide study={p.study} onStart={goNext} showProfilePitch={p.isFilteredFace} />
                )}
                {current.kind === "questions" && current.questions && (
                  <QuestionGroupSlide
                    questions={current.questions}
                    pageIndex={current.pageIndex!}
                    totalPages={current.totalPages!}
                    answers={p.answers}
                    otherText={p.otherText}
                    setOtherText={p.setOtherText}
                    onSingle={p.setSingle}
                    onToggleMulti={p.toggleMulti}
                    onSetText={(qid, v) => p.setAnswers(a => ({ ...a, [qid]: v }))}
                  />
                )}
                {current.kind === "demographics" && (
                  <DemographicsSlide
                    demographics={p.demographics}
                    setDemographics={p.setDemographics}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </section>

      {/* Footer CTA */}
      {!p.isClosed && !p.done && p.questions.length > 0 && (
        <footer className="px-5 md:px-8 pb-6 md:pb-8 pt-2 max-w-[640px] w-full mx-auto">
          {current.kind === "demographics" ? (
            <Button
              disabled={!p.canSubmit || p.submitting}
              onClick={p.submit}
              className="w-full bg-[#C9A050] hover:bg-[#B8913F] text-black rounded-full h-[60px] text-[17px] font-semibold active:scale-[0.99] transition-transform disabled:opacity-50"
              style={{ letterSpacing: "-0.01em" }}
            >
              {p.submitting ? "Sending…" : (<><Sparkles className="h-5 w-5 mr-2" /> Submit anonymously</>)}
            </Button>
          ) : current.kind === "questions" ? (
            <button
              disabled={!canAdvance()}
              onClick={goNext}
              className="w-full h-[56px] rounded-full bg-[#C9A050] hover:bg-[#B8913F] disabled:opacity-30 text-black text-[17px] font-semibold transition-colors active:scale-[0.99] inline-flex items-center justify-center gap-2"
              style={{ letterSpacing: "-0.01em" }}
            >
              Continue <ArrowRight className="h-4 w-4" />
            </button>
          ) : null}
          <p className="text-[11px] text-white/30 text-center mt-3 leading-relaxed">
            Anonymous · No personal data stored · Internal clinical research only
          </p>
        </footer>
      )}
    </main>
  );
};

/* ---------- Individual slides ---------- */

const IntroSlide = ({ study, onStart, showProfilePitch }: { study: Study; onStart: () => void; showProfilePitch?: boolean }) => (
  <div className="h-full flex flex-col items-center justify-center text-center py-6 md:py-10">
    <Link
      to="/research"
      className="inline-flex items-center gap-2 text-white/45 hover:text-[#C9A050] text-[11px] uppercase tracking-[0.28em] mb-10"
    >
      <ArrowLeft className="h-3.5 w-3.5" /> All studies
    </Link>
    <div className="relative mx-auto mb-7 h-20 w-20 flex items-center justify-center">
      <span className="absolute inset-0 rounded-full border border-[#C9A050]/25" />
      <span className="absolute inset-1.5 rounded-full border border-[#C9A050]/45 bg-gradient-to-br from-[#C9A050]/20 to-transparent" />
      <FlaskConical className="relative h-8 w-8 text-[#C9A050]" strokeWidth={1.4} />
    </div>
    {study.subtitle && (
      <p className="text-[11px] md:text-[12px] tracking-[0.32em] uppercase text-[#C9A050] mb-3">
        {study.subtitle}
      </p>
    )}
    <h1
      className="text-[30px] md:text-[40px] font-light leading-[1.1] mb-5 max-w-[20ch]"
      style={{ letterSpacing: "-0.022em" }}
    >
      {study.title}
    </h1>
    {study.intro && (
      <p className="text-white/65 text-[16px] md:text-[18px] leading-[1.55] max-w-[44ch] mx-auto font-normal mb-10">
        {study.intro}
      </p>
    )}
    <button
      onClick={onStart}
      className="inline-flex items-center justify-center gap-2 bg-[#C9A050] hover:bg-[#B8913F] text-black rounded-full px-9 h-[56px] text-[17px] font-semibold active:scale-[0.98] transition-transform"
      style={{ letterSpacing: "-0.01em" }}
    >
      Begin <ArrowRight className="h-4 w-4" />
    </button>
    <p className="text-[11px] text-white/35 mt-5 tracking-wide">Takes under 60 seconds · fully anonymous</p>
    {showProfilePitch && <ProfilePrePitch />}
  </div>
);

const QuestionGroupSlide = ({
  questions, pageIndex, totalPages, answers, otherText, setOtherText, onSingle, onToggleMulti, onSetText,
}: {
  questions: Question[];
  pageIndex: number;
  totalPages: number;
  answers: Record<string, any>;
  otherText: Record<string, string>;
  setOtherText: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  onSingle: (qid: string, value: string) => void;
  onToggleMulti: (qid: string, value: string) => void;
  onSetText: (qid: string, v: string) => void;
}) => (
  <div className="h-full flex flex-col">
    <p className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-[#C9A050] mb-6">
      Page {pageIndex + 1} of {totalPages}
    </p>
    <div className="space-y-10 md:space-y-12">
      {questions.map(q => (
        <QuestionBlock
          key={q.id}
          q={q}
          answers={answers}
          otherText={otherText}
          setOtherText={setOtherText}
          onSingle={onSingle}
          onToggleMulti={onToggleMulti}
          onSetText={onSetText}
        />
      ))}
    </div>
  </div>
);

const QuestionBlock = ({
  q, answers, otherText, setOtherText, onSingle, onToggleMulti, onSetText,
}: {
  q: Question;
  answers: Record<string, any>;
  otherText: Record<string, string>;
  setOtherText: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  onSingle: (qid: string, value: string) => void;
  onToggleMulti: (qid: string, value: string) => void;
  onSetText: (qid: string, v: string) => void;
}) => (
  <div>
    <h2
      className="text-white text-[20px] md:text-[24px] font-semibold leading-[1.25] mb-4 md:mb-5"
      style={{ letterSpacing: "-0.02em" }}
    >
      {q.question_text}
      {!q.required && <span className="text-white/35 text-[12px] md:text-[13px] font-normal ml-2 align-middle">Optional</span>}
    </h2>

    {q.question_type === "single" && (
      <div className="space-y-2">
        {q.options.map(o => {
          const active = answers[q.id] === o.value;
          return (
            <button
              key={o.value}
              onClick={() => onSingle(q.id, o.value)}
              className={`w-full text-left px-4 md:px-5 rounded-xl border transition-all flex items-center gap-3 active:scale-[0.985] ${
                active
                  ? "bg-[#C9A050]/15 border-[#C9A050]/75 text-white"
                  : "bg-white/[0.035] border-white/10 text-white/90 hover:border-[#C9A050]/30"
              }`}
              style={{ minHeight: 52 }}
            >
              {o.emoji && <span className="text-[20px] leading-none">{o.emoji}</span>}
              <span className="text-[15px] md:text-[16px] font-medium flex-1" style={{ letterSpacing: "-0.01em" }}>{o.label}</span>
              {active && <Check className="h-4 w-4 text-[#C9A050]" />}
            </button>
          );
        })}
        {q.allow_other && (
          <button
            onClick={() => onSingle(q.id, "__other__")}
            className={`w-full text-left px-4 md:px-5 rounded-xl border flex items-center gap-3 ${
              answers[q.id] === "__other__" ? "bg-[#C9A050]/15 border-[#C9A050]/75 text-white" : "bg-white/[0.035] border-white/10 text-white/90"
            }`}
            style={{ minHeight: 52 }}
          >
            <span className="text-[20px] leading-none">💭</span>
            <span className="text-[15px] md:text-[16px] font-medium">Something else</span>
          </button>
        )}
        {answers[q.id] === "__other__" && (
          <Input
            value={otherText[q.id] || ""}
            onChange={e => setOtherText(t => ({ ...t, [q.id]: e.target.value }))}
            placeholder="Tell us in a few words…"
            maxLength={200}
            className="h-12 text-[15px] rounded-xl bg-white/5 border-white/10 text-white placeholder:text-white/30 px-4"
          />
        )}
      </div>
    )}

    {q.question_type === "multi" && (
      <>
        <div className="space-y-2">
          {q.options.map(o => {
            const checked = Array.isArray(answers[q.id]) && answers[q.id].includes(o.value);
            return (
              <button
                key={o.value}
                onClick={() => onToggleMulti(q.id, o.value)}
                className={`w-full text-left px-4 md:px-5 rounded-xl border flex items-center gap-3 active:scale-[0.985] ${
                  checked ? "bg-[#C9A050]/15 border-[#C9A050]/75 text-white" : "bg-white/[0.035] border-white/10 text-white/90"
                }`}
                style={{ minHeight: 52 }}
              >
                <span className={`h-5 w-5 rounded-md border flex items-center justify-center shrink-0 ${checked ? "bg-[#C9A050] border-[#C9A050]" : "border-white/30"}`}>
                  {checked && <Check className="h-3.5 w-3.5 text-black" strokeWidth={2.5} />}
                </span>
                {o.emoji && <span className="text-[20px] leading-none">{o.emoji}</span>}
                <span className="text-[15px] md:text-[16px] font-medium flex-1">{o.label}</span>
              </button>
            );
          })}
          {q.allow_other && (
            <button
              onClick={() => onToggleMulti(q.id, "__other__")}
              className={`w-full text-left px-4 md:px-5 rounded-xl border flex items-center gap-3 ${
                Array.isArray(answers[q.id]) && answers[q.id].includes("__other__")
                  ? "bg-[#C9A050]/15 border-[#C9A050]/75 text-white"
                  : "bg-white/[0.035] border-white/10 text-white/90"
              }`}
              style={{ minHeight: 52 }}
            >
              <span className={`h-5 w-5 rounded-md border flex items-center justify-center shrink-0 ${Array.isArray(answers[q.id]) && answers[q.id].includes("__other__") ? "bg-[#C9A050] border-[#C9A050]" : "border-white/30"}`}>
                {Array.isArray(answers[q.id]) && answers[q.id].includes("__other__") && <Check className="h-3.5 w-3.5 text-black" strokeWidth={2.5} />}
              </span>
              <span className="text-[20px] leading-none">💭</span>
              <span className="text-[15px] md:text-[16px] font-medium">Something else</span>
            </button>
          )}
        </div>
        {Array.isArray(answers[q.id]) && answers[q.id].includes("__other__") && (
          <Input
            value={otherText[q.id] || ""}
            onChange={e => setOtherText(t => ({ ...t, [q.id]: e.target.value }))}
            placeholder="Tell us in a few words…"
            maxLength={200}
            className="mt-2 h-12 text-[15px] rounded-xl bg-white/5 border-white/10 text-white placeholder:text-white/30 px-4"
          />
        )}
      </>
    )}

    {q.question_type === "text" && (
      <Textarea
        value={answers[q.id] || ""}
        onChange={e => onSetText(q.id, e.target.value)}
        placeholder="Your answer…"
        maxLength={600}
        className="text-[15px] rounded-xl bg-white/5 border-white/10 text-white placeholder:text-white/30 min-h-[110px] px-4 py-3"
      />
    )}
  </div>
);

const DemographicsSlide = ({
  demographics, setDemographics,
}: {
  demographics: SlideFlowProps["demographics"];
  setDemographics: SlideFlowProps["setDemographics"];
}) => (
  <div className="h-full flex flex-col">
    <p className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-[#C9A050] mb-3">
      Final step · about you
    </p>
    <h2
      className="text-white text-[24px] md:text-[30px] font-semibold leading-[1.2] mb-2"
      style={{ letterSpacing: "-0.022em" }}
    >
      A few quiet details.
    </h2>
    <p className="text-white/55 text-[15px] md:text-[16px] mb-7 leading-[1.5]">
      All optional. Helps us understand who took part — nothing is linked to you.
    </p>

    <div className="space-y-5">
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
          className="text-[16px] rounded-2xl bg-white/5 border-white/10 text-white placeholder:text-white/30 min-h-[88px] px-4 py-3"
        />
      </DemoSection>
    </div>
  </div>
);

const ThankYouSlide = ({ copied, copy }: { copied: boolean; copy: () => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 14 }}
    animate={{ opacity: 1, y: 0 }}
    className="h-full flex flex-col items-center justify-center text-center py-14"
  >
    <div className="mx-auto h-18 w-18 md:h-20 md:w-20 rounded-full bg-[#C9A050]/15 border border-[#C9A050]/50 flex items-center justify-center mb-6">
      <Check className="h-8 w-8 text-[#C9A050]" strokeWidth={2.2} />
    </div>
    <p className="text-white text-[24px] md:text-[28px] font-semibold" style={{ letterSpacing: "-0.022em" }}>
      Thank you — truly.
    </p>
    <p className="text-white/55 text-[16px] mt-2 max-w-[36ch]">Your voice shapes our research.</p>
    <button onClick={copy} className="mt-8 inline-flex items-center gap-2 text-[14px] text-[#C9A050] border border-[#C9A050]/40 rounded-full px-6 py-3 hover:bg-[#C9A050]/10 transition-colors">
      {copied ? <><Check className="h-4 w-4" /> Link copied</> : <><Share2 className="h-4 w-4" /> Share this study</>}
    </button>
    <Link to="/research" className="mt-6 text-white/45 hover:text-white text-[13px] uppercase tracking-[0.22em]">
      All studies
    </Link>
  </motion.div>
);

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
