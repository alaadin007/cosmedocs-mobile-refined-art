import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download, Microscope } from "lucide-react";

interface Row {
  id: string;
  motivation: string;
  motivation_detail: string | null;
  age_group: string | null;
  gender: string | null;
  ethnicity: string | null;
  desired_outcome: string | null;
  created_at: string;
}

const MOTIVATION_LABEL: Record<string, string> = {
  confidence: "Confidence",
  career: "Career",
  dating: "Dating",
  social_media: "Social media",
  ageing_anxiety: "Ageing anxiety",
  skin_health: "Skin health",
  other: "Other",
};

const AdminResearchSurvey = () => {
  const { user, loading: authLoading } = useAuth();
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const [denied, setDenied] = useState(false);

  useEffect(() => {
    if (!user) return;
    (async () => {
      const { data, error } = await supabase
        .from("patient_research_survey")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) {
        setDenied(true);
      } else {
        setRows((data as Row[]) || []);
      }
      setLoading(false);
    })();
  }, [user]);

  if (authLoading) return <div className="min-h-screen bg-black" />;
  if (!user) return <Navigate to="/auth" replace />;

  const total = rows.length;
  const counts: Record<string, number> = {};
  rows.forEach(r => { counts[r.motivation] = (counts[r.motivation] || 0) + 1; });

  const exportCsv = () => {
    const header = ["created_at","motivation","motivation_detail","age_group","gender","ethnicity","desired_outcome"];
    const escape = (v: any) => `"${String(v ?? "").replace(/"/g, '""')}"`;
    const csv = [header.join(","), ...rows.map(r => header.map(h => escape((r as any)[h])).join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = `research-survey-${new Date().toISOString().slice(0,10)}.csv`; a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <Helmet>
        <title>Research Survey Results | Cosmedocs Admin</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      <div className="min-h-screen bg-black text-white p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[#C9A050]/15 border border-[#C9A050]/40 flex items-center justify-center">
                <Microscope className="h-5 w-5 text-[#C9A050]" />
              </div>
              <div>
                <p className="text-[10px] tracking-[0.25em] uppercase text-[#C9A050]">Cosmedocs Research</p>
                <h1 className="text-2xl font-light">Patient Psychology Survey</h1>
              </div>
            </div>
            <Button onClick={exportCsv} className="bg-[#C9A050] hover:bg-[#B8913F] text-black">
              <Download className="h-4 w-4 mr-2" /> Export CSV
            </Button>
          </div>

          {denied && <p className="text-red-400 text-sm">Access denied — admin role required.</p>}
          {loading ? (
            <p className="text-white/60">Loading…</p>
          ) : (
            <>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-3xl font-light text-[#C9A050]">{total}</p>
                  <p className="text-xs text-white/50 mt-1">Total responses</p>
                </div>
                {Object.entries(counts).slice(0, 3).map(([k, v]) => (
                  <div key={k} className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-3xl font-light text-[#C9A050]">{v}</p>
                    <p className="text-xs text-white/50 mt-1">{MOTIVATION_LABEL[k] || k}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4 mb-6">
                <p className="text-xs uppercase tracking-wider text-white/40 mb-3">Motivation breakdown</p>
                <div className="space-y-1.5">
                  {Object.entries(counts).sort((a,b) => b[1]-a[1]).map(([k,v]) => (
                    <div key={k} className="flex items-center gap-3 text-sm">
                      <span className="w-32 text-white/70">{MOTIVATION_LABEL[k] || k}</span>
                      <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-[#C9A050]" style={{ width: `${(v/total)*100}%` }} />
                      </div>
                      <span className="text-white/60 w-12 text-right">{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-white/10 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-white/[0.04] text-white/50 text-xs uppercase tracking-wider">
                    <tr>
                      <th className="text-left p-3">When</th>
                      <th className="text-left p-3">Motivation</th>
                      <th className="text-left p-3">Age</th>
                      <th className="text-left p-3">Gender</th>
                      <th className="text-left p-3">Ethnicity</th>
                      <th className="text-left p-3">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map(r => (
                      <tr key={r.id} className="border-t border-white/5 align-top">
                        <td className="p-3 text-white/50 text-xs whitespace-nowrap">{new Date(r.created_at).toLocaleString()}</td>
                        <td className="p-3">
                          <div className="text-white/90">{MOTIVATION_LABEL[r.motivation] || r.motivation}</div>
                          {r.motivation_detail && <div className="text-white/50 text-xs mt-0.5">"{r.motivation_detail}"</div>}
                        </td>
                        <td className="p-3 text-white/70">{r.age_group || "—"}</td>
                        <td className="p-3 text-white/70">{r.gender || "—"}</td>
                        <td className="p-3 text-white/70">{r.ethnicity || "—"}</td>
                        <td className="p-3 text-white/70 max-w-xs">{r.desired_outcome || "—"}</td>
                      </tr>
                    ))}
                    {rows.length === 0 && (
                      <tr><td colSpan={6} className="p-8 text-center text-white/40">No responses yet.</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminResearchSurvey;
