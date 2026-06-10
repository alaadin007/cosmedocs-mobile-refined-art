import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, Navigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { ArrowLeft, BarChart3, RefreshCw, Eye } from "lucide-react";

interface Row { path: string; views: number; last_seen: string; }

const HIGHLIGHTED = "/aesthetic-treatments-made-easy";

export default function AdminPageViews() {
  const { user, loading: authLoading } = useAuth();
  const [rows, setRows] = useState<Row[]>([]);
  const [total, setTotal] = useState(0);
  const [today, setToday] = useState(0);
  const [smartCount, setSmartCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [days, setDays] = useState(30);

  const load = async () => {
    setLoading(true);
    const since = new Date(Date.now() - days * 86400000).toISOString();
    const { data, error } = await (supabase as any)
      .from("page_views")
      .select("path, created_at")
      .gte("created_at", since)
      .order("created_at", { ascending: false })
      .limit(10000);

    if (error) { setLoading(false); return; }

    const map = new Map<string, { views: number; last_seen: string }>();
    const startOfToday = new Date(); startOfToday.setHours(0,0,0,0);
    let todayCount = 0;
    let smart = 0;
    (data || []).forEach((r: any) => {
      const p = (r.path || "").replace(/\/$/, "") || "/";
      const cur = map.get(p);
      if (cur) { cur.views += 1; }
      else { map.set(p, { views: 1, last_seen: r.created_at }); }
      if (new Date(r.created_at) >= startOfToday) todayCount += 1;
      if (p === HIGHLIGHTED) smart += 1;
    });

    const aggregated: Row[] = Array.from(map.entries())
      .map(([path, v]) => ({ path, views: v.views, last_seen: v.last_seen }))
      .sort((a, b) => b.views - a.views);

    setRows(aggregated);
    setTotal((data || []).length);
    setToday(todayCount);
    setSmartCount(smart);
    setLoading(false);
  };

  useEffect(() => { if (user) load(); /* eslint-disable-next-line */ }, [user, days]);

  if (authLoading) return <div className="min-h-screen bg-black" />;
  if (!user) return <Navigate to="/auth" replace />;

  return (
    <>
      <Helmet>
        <title>Page Views | Cosmedocs Admin</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      <div className="min-h-screen bg-black text-white p-6">
        <div className="max-w-5xl mx-auto">
          <Link to="/admin/research" className="inline-flex items-center gap-2 text-white/50 hover:text-[#C9A050] text-xs uppercase tracking-[0.25em] mb-6">
            <ArrowLeft className="h-3.5 w-3.5" /> Admin
          </Link>

          <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-[#C9A050] text-xs uppercase tracking-[0.25em]">
                <BarChart3 className="h-3.5 w-3.5" /> Analytics
              </div>
              <h1 className="text-3xl md:text-4xl font-extralight mt-2">Page Views</h1>
              <p className="text-white/50 text-sm mt-2">Aggregated visits over the last {days} days.</p>
            </div>
            <div className="flex items-center gap-2">
              {[7, 30, 90].map(d => (
                <button key={d} onClick={() => setDays(d)}
                  className={`text-xs px-3 py-1.5 rounded-full border ${days === d ? "bg-[#C9A050] text-black border-[#C9A050]" : "border-white/15 text-white/70 hover:border-[#C9A050]/50"}`}>
                  {d}d
                </button>
              ))}
              <button onClick={load} className="text-xs px-3 py-1.5 rounded-full border border-white/15 text-white/70 hover:text-white inline-flex items-center gap-1.5">
                <RefreshCw className="h-3 w-3" /> Refresh
              </button>
            </div>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <Kpi label="Total views" value={total} />
            <Kpi label="Today" value={today} />
            <Kpi label="Smart Aesthetics reads" value={smartCount} highlight />
          </div>

          <div className="border border-white/10 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-12 text-[10px] uppercase tracking-[0.2em] text-white/40 bg-white/[0.03] px-4 py-3">
              <div className="col-span-8">Path</div>
              <div className="col-span-2 text-right">Views</div>
              <div className="col-span-2 text-right">Last seen</div>
            </div>
            {loading ? (
              <div className="p-6 text-white/40 text-sm">Loading…</div>
            ) : rows.length === 0 ? (
              <div className="p-6 text-white/40 text-sm">No page views yet.</div>
            ) : (
              rows.map(r => (
                <div key={r.path}
                  className={`grid grid-cols-12 px-4 py-3 text-sm border-t border-white/5 ${r.path === HIGHLIGHTED ? "bg-[#C9A050]/[0.08]" : ""}`}>
                  <div className="col-span-8 truncate text-white/85">
                    {r.path === HIGHLIGHTED && <Eye className="inline w-3.5 h-3.5 mr-1.5 text-[#C9A050]" />}
                    <a href={r.path} target="_blank" rel="noreferrer" className="hover:text-[#C9A050]">{r.path}</a>
                  </div>
                  <div className="col-span-2 text-right tabular-nums text-white">{r.views.toLocaleString("en-GB")}</div>
                  <div className="col-span-2 text-right text-white/40 text-xs">{new Date(r.last_seen).toLocaleDateString("en-GB")}</div>
                </div>
              ))
            )}
          </div>

          <p className="text-[11px] text-white/30 mt-4">
            Anonymous, no cookies. Stored in <code>public.page_views</code>. Admin-only via RLS.
          </p>
        </div>
      </div>
    </>
  );
}

function Kpi({ label, value, highlight = false }: { label: string; value: number; highlight?: boolean }) {
  return (
    <div className={`rounded-2xl border p-5 ${highlight ? "border-[#C9A050]/50 bg-gradient-to-br from-[#C9A050]/[0.12] to-transparent" : "border-white/10 bg-white/[0.02]"}`}>
      <div className="text-[10px] uppercase tracking-[0.22em] text-white/50">{label}</div>
      <div className={`mt-2 text-3xl font-extralight ${highlight ? "text-[#C9A050]" : "text-white"}`}>{value.toLocaleString("en-GB")}</div>
    </div>
  );
}
