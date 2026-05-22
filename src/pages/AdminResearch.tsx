import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Navigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Microscope, Trash2, ExternalLink, BarChart3, Copy, Check, ArrowLeft, GripVertical } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Study {
  id: string; slug: string; title: string; subtitle: string | null;
  description: string | null; intro: string | null; status: string;
  seo_title: string | null; seo_description: string | null;
  display_order: number; created_at: string;
}
interface Question {
  id: string; study_id: string; question_order: number;
  question_text: string; question_type: string;
  options: any; required: boolean; allow_other: boolean;
}

const QTYPES = [
  { value: "single", label: "Single choice" },
  { value: "multi", label: "Multi choice" },
  { value: "text", label: "Free text" },
  { value: "demographics", label: "Demographics block" },
];

const slugify = (s: string) =>
  s.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60);

const AdminResearch = () => {
  const { user, loading: authLoading } = useAuth();
  const [studies, setStudies] = useState<Study[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Study | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [responseCounts, setResponseCounts] = useState<Record<string, number>>({});
  const [copied, setCopied] = useState<string | null>(null);

  const refresh = async () => {
    const { data } = await supabase.from("research_studies").select("*").order("display_order").order("created_at", { ascending: false });
    setStudies((data as Study[]) || []);
    // counts
    if (data) {
      const counts: Record<string, number> = {};
      await Promise.all(data.map(async (s: any) => {
        const { count } = await supabase.from("research_responses").select("*", { count: "exact", head: true }).eq("study_id", s.id);
        counts[s.id] = count || 0;
      }));
      setResponseCounts(counts);
    }
    setLoading(false);
  };

  useEffect(() => { if (user) refresh(); }, [user]);

  useEffect(() => {
    if (!editing) return;
    (async () => {
      const { data } = await supabase.from("research_questions").select("*").eq("study_id", editing.id).order("question_order");
      setQuestions((data as Question[]) || []);
    })();
  }, [editing]);

  if (authLoading) return <div className="min-h-screen bg-black" />;
  if (!user) return <Navigate to="/auth" replace />;

  const createStudy = async () => {
    const title = prompt("Study title?");
    if (!title) return;
    const slug = slugify(title);
    const { data, error } = await supabase.from("research_studies").insert({ title, slug, status: "draft" }).select().single();
    if (error) { toast({ title: "Error", description: error.message, variant: "destructive" }); return; }
    refresh();
    setEditing(data as Study);
  };

  const saveStudy = async () => {
    if (!editing) return;
    const { error } = await supabase.from("research_studies").update({
      title: editing.title, slug: editing.slug, subtitle: editing.subtitle, description: editing.description,
      intro: editing.intro, status: editing.status, seo_title: editing.seo_title, seo_description: editing.seo_description,
      display_order: editing.display_order,
    }).eq("id", editing.id);
    if (error) { toast({ title: "Save failed", description: error.message, variant: "destructive" }); return; }
    toast({ title: "Saved" });
    refresh();
  };

  const deleteStudy = async (id: string) => {
    if (!confirm("Delete this study and all its responses?")) return;
    await supabase.from("research_studies").delete().eq("id", id);
    setEditing(null);
    refresh();
  };

  const addQuestion = async () => {
    if (!editing) return;
    const order = questions.length;
    const { data, error } = await supabase.from("research_questions").insert({
      study_id: editing.id, question_order: order, question_text: "New question",
      question_type: "single", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }],
    }).select().single();
    if (error) { toast({ title: "Error", description: error.message, variant: "destructive" }); return; }
    setQuestions(q => [...q, data as Question]);
  };

  const updateQuestion = async (q: Question) => {
    await supabase.from("research_questions").update({
      question_text: q.question_text, question_type: q.question_type,
      options: q.options, required: q.required, allow_other: q.allow_other,
      question_order: q.question_order,
    }).eq("id", q.id);
  };

  const deleteQuestion = async (id: string) => {
    await supabase.from("research_questions").delete().eq("id", id);
    setQuestions(qs => qs.filter(q => q.id !== id));
  };

  const copyLink = (slug: string) => {
    const url = `${window.location.origin}/research/${slug}`;
    navigator.clipboard.writeText(url);
    setCopied(slug);
    setTimeout(() => setCopied(null), 1800);
  };

  // ---------- EDIT VIEW ----------
  if (editing) {
    const publicUrl = `/research/${editing.slug}`;
    return (
      <>
        <Helmet><title>Edit Study | Cosmedocs Admin</title><meta name="robots" content="noindex,nofollow" /></Helmet>
        <div className="min-h-screen bg-black text-white p-6">
          <div className="max-w-4xl mx-auto">
            <button onClick={() => setEditing(null)} className="inline-flex items-center gap-2 text-white/50 hover:text-[#C9A050] text-xs uppercase tracking-[0.25em] mb-6">
              <ArrowLeft className="h-3.5 w-3.5" /> All studies
            </button>

            <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
              <h1 className="text-2xl font-light">Edit study</h1>
              <div className="flex gap-2">
                <Link to={publicUrl} target="_blank" className="text-xs text-[#C9A050] border border-[#C9A050]/40 rounded-full px-4 py-2 inline-flex items-center gap-2 hover:bg-[#C9A050]/10">
                  <ExternalLink className="h-3.5 w-3.5" /> View public page
                </Link>
                <Button onClick={saveStudy} className="bg-[#C9A050] hover:bg-[#B8913F] text-black">Save study</Button>
              </div>
            </div>

            {/* Study fields */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 space-y-4 mb-8">
              <Field label="Title"><Input value={editing.title} onChange={e => setEditing({ ...editing, title: e.target.value })} className="bg-white/5 border-white/10 text-white" /></Field>
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Slug (URL: /research/…)"><Input value={editing.slug} onChange={e => setEditing({ ...editing, slug: slugify(e.target.value) })} className="bg-white/5 border-white/10 text-white" /></Field>
                <Field label="Status">
                  <select value={editing.status} onChange={e => setEditing({ ...editing, status: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-md h-10 px-3 text-white text-sm">
                    <option value="draft">Draft (hidden)</option>
                    <option value="active">Active (accepting responses)</option>
                    <option value="closed">Closed (read only)</option>
                  </select>
                </Field>
              </div>
              <Field label="Subtitle (eyebrow)"><Input value={editing.subtitle || ""} onChange={e => setEditing({ ...editing, subtitle: e.target.value })} className="bg-white/5 border-white/10 text-white" /></Field>
              <Field label="Short description (hub card + meta)"><Textarea value={editing.description || ""} onChange={e => setEditing({ ...editing, description: e.target.value })} className="bg-white/5 border-white/10 text-white" /></Field>
              <Field label="Intro (shown above the questions)"><Textarea value={editing.intro || ""} onChange={e => setEditing({ ...editing, intro: e.target.value })} className="bg-white/5 border-white/10 text-white min-h-[80px]" /></Field>
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="SEO title"><Input value={editing.seo_title || ""} onChange={e => setEditing({ ...editing, seo_title: e.target.value })} className="bg-white/5 border-white/10 text-white" /></Field>
                <Field label="SEO description"><Input value={editing.seo_description || ""} onChange={e => setEditing({ ...editing, seo_description: e.target.value })} className="bg-white/5 border-white/10 text-white" /></Field>
              </div>
            </div>

            {/* Questions */}
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-light">Questions</h2>
              <Button onClick={addQuestion} variant="outline" size="sm" className="border-[#C9A050]/40 text-[#C9A050] hover:bg-[#C9A050]/10">
                <Plus className="h-3.5 w-3.5 mr-1.5" /> Add question
              </Button>
            </div>

            <div className="space-y-3">
              {questions.map((q, i) => (
                <QuestionEditor key={q.id} q={q} index={i} onChange={(nq) => { setQuestions(qs => qs.map(x => x.id === nq.id ? nq : x)); updateQuestion(nq); }} onDelete={() => deleteQuestion(q.id)} />
              ))}
              {questions.length === 0 && (
                <p className="text-white/40 text-sm border border-dashed border-white/10 rounded-xl p-6 text-center">No questions yet. Add the first one above.</p>
              )}
            </div>

            <div className="mt-10 pt-6 border-t border-white/10 flex justify-between">
              <Link to={`/admin/research-survey`} className="text-xs text-white/50 hover:text-[#C9A050]">View all responses (legacy)</Link>
              <button onClick={() => deleteStudy(editing.id)} className="text-xs text-red-400 hover:text-red-300 inline-flex items-center gap-1.5">
                <Trash2 className="h-3.5 w-3.5" /> Delete study
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  // ---------- LIST VIEW ----------
  return (
    <>
      <Helmet><title>Research Studies | Cosmedocs Admin</title><meta name="robots" content="noindex,nofollow" /></Helmet>
      <div className="min-h-screen bg-black text-white p-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[#C9A050]/15 border border-[#C9A050]/40 flex items-center justify-center">
                <Microscope className="h-5 w-5 text-[#C9A050]" />
              </div>
              <div>
                <p className="text-[10px] tracking-[0.25em] uppercase text-[#C9A050]">Cosmedocs Research Institute</p>
                <h1 className="text-2xl font-light">Studies & questionnaires</h1>
              </div>
            </div>
            <Button onClick={createStudy} className="bg-[#C9A050] hover:bg-[#B8913F] text-black">
              <Plus className="h-4 w-4 mr-2" /> New study
            </Button>
          </div>

          {loading ? <p className="text-white/40">Loading…</p> : studies.length === 0 ? (
            <div className="text-center py-16 border border-dashed border-white/10 rounded-2xl">
              <p className="text-white/50 mb-4">No studies yet.</p>
              <Button onClick={createStudy} className="bg-[#C9A050] hover:bg-[#B8913F] text-black">Create your first study</Button>
            </div>
          ) : (
            <div className="grid gap-3">
              {studies.map(s => (
                <div key={s.id} className="rounded-xl border border-white/10 bg-white/[0.02] p-5 flex items-center gap-4 flex-wrap">
                  <div className="flex-1 min-w-[200px]">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-[9px] uppercase tracking-[0.2em] px-2 py-0.5 rounded-full border ${
                        s.status === "active" ? "border-[#C9A050]/50 bg-[#C9A050]/10 text-[#C9A050]" :
                        s.status === "closed" ? "border-white/20 text-white/50" : "border-white/15 text-white/40"
                      }`}>{s.status}</span>
                      <span className="text-white/40 text-xs">/research/{s.slug}</span>
                    </div>
                    <p className="text-white text-base font-light">{s.title}</p>
                    {s.subtitle && <p className="text-white/50 text-xs mt-0.5">{s.subtitle}</p>}
                  </div>
                  <div className="flex items-center gap-2 text-white/60 text-sm">
                    <BarChart3 className="h-4 w-4 text-[#C9A050]" /> {responseCounts[s.id] ?? 0} responses
                  </div>
                  <div className="flex gap-1.5">
                    <button onClick={() => copyLink(s.slug)} className="text-xs border border-white/15 hover:border-[#C9A050]/40 text-white/70 rounded-full px-3 py-1.5 inline-flex items-center gap-1.5">
                      {copied === s.slug ? <><Check className="h-3 w-3" /> Copied</> : <><Copy className="h-3 w-3" /> Copy link</>}
                    </button>
                    <Link to={`/research/${s.slug}`} target="_blank" className="text-xs border border-white/15 hover:border-[#C9A050]/40 text-white/70 rounded-full px-3 py-1.5 inline-flex items-center gap-1.5">
                      <ExternalLink className="h-3 w-3" /> View
                    </Link>
                    <Button size="sm" variant="outline" onClick={() => setEditing(s)} className="border-[#C9A050]/40 text-[#C9A050] hover:bg-[#C9A050]/10 h-7 text-xs">Edit</Button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap gap-4 text-xs text-white/40">
            <Link to="/research" target="_blank" className="hover:text-[#C9A050] inline-flex items-center gap-1.5">
              <ExternalLink className="h-3 w-3" /> Public hub: /research
            </Link>
            <Link to="/admin/research-survey" className="hover:text-[#C9A050]">Legacy survey results →</Link>
          </div>
        </div>
      </div>
    </>
  );
};

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <label className="block">
    <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 block mb-1.5">{label}</span>
    {children}
  </label>
);

const QuestionEditor = ({ q, index, onChange, onDelete }: { q: Question; index: number; onChange: (q: Question) => void; onDelete: () => void; }) => {
  const opts: Array<{ value: string; label: string; emoji?: string }> = Array.isArray(q.options) ? q.options : [];
  const setOpts = (next: any[]) => onChange({ ...q, options: next });

  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
      <div className="flex items-center gap-2 mb-3">
        <GripVertical className="h-4 w-4 text-white/30" />
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#C9A050]">Q{index + 1}</span>
        <select value={q.question_type} onChange={e => onChange({ ...q, question_type: e.target.value })}
          className="bg-white/5 border border-white/10 rounded-md h-7 px-2 text-white text-xs ml-auto">
          {QTYPES.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
        </select>
        <label className="text-xs text-white/60 inline-flex items-center gap-1.5">
          <input type="checkbox" checked={q.required} onChange={e => onChange({ ...q, required: e.target.checked })} /> required
        </label>
        <button onClick={onDelete} className="text-red-400 hover:text-red-300"><Trash2 className="h-4 w-4" /></button>
      </div>

      <Input value={q.question_text} onChange={e => onChange({ ...q, question_text: e.target.value })}
        placeholder="Question text" className="bg-white/5 border-white/10 text-white mb-3" />

      {(q.question_type === "single" || q.question_type === "multi") && (
        <div className="space-y-2">
          {opts.map((o, i) => (
            <div key={i} className="flex gap-2 items-center">
              <Input value={o.emoji || ""} onChange={e => { const n = [...opts]; n[i] = { ...n[i], emoji: e.target.value }; setOpts(n); }} placeholder="✨" className="w-14 bg-white/5 border-white/10 text-white text-center" maxLength={3} />
              <Input value={o.label} onChange={e => { const n = [...opts]; n[i] = { ...n[i], label: e.target.value, value: n[i].value || slugify(e.target.value) }; setOpts(n); }} placeholder="Option label" className="flex-1 bg-white/5 border-white/10 text-white" />
              <button onClick={() => setOpts(opts.filter((_, j) => j !== i))} className="text-white/40 hover:text-red-400"><Trash2 className="h-3.5 w-3.5" /></button>
            </div>
          ))}
          <div className="flex gap-3 items-center pt-1">
            <button onClick={() => setOpts([...opts, { value: `opt${opts.length+1}`, label: "" }])} className="text-xs text-[#C9A050] hover:underline inline-flex items-center gap-1">
              <Plus className="h-3 w-3" /> Add option
            </button>
            <label className="text-xs text-white/60 inline-flex items-center gap-1.5 ml-auto">
              <input type="checkbox" checked={q.allow_other} onChange={e => onChange({ ...q, allow_other: e.target.checked })} /> allow "Other"
            </label>
          </div>
        </div>
      )}

      {q.question_type === "text" && <p className="text-xs text-white/40">Free text answer — no options needed.</p>}
      {q.question_type === "demographics" && <p className="text-xs text-white/40">Renders age / gender / ethnicity / notes block.</p>}
    </div>
  );
};

export default AdminResearch;
