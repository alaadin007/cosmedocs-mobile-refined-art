import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, Navigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { ArrowLeft, BarChart3, RefreshCw, Eye, ExternalLink, Smartphone, Monitor, X } from "lucide-react";

interface Raw { path: string; referrer: string | null; user_agent: string | null; created_at: string; }
interface Row { path: string; views: number; last_seen: string; }

const norm = (p: string) => (p || "/").replace(/\/+$/, "") || "/";
const isMobile = (ua: string | null) => !!ua && /Mobile|Android|iPhone|iPad|iPod/i.test(ua);
const shortRef = (r: string | null) => {
  if (!r) return "Direct";
  try { return new URL(r).hostname.replace(/^www\./, ""); } catch { return r; }
};
const uaLabel = (ua: string | null) => {
  if (!ua) return "Unknown";
  if (/iPhone|iPad|iPod/i.test(ua)) return "iOS";
  if (/Android/i.test(ua)) return "Android";
  if (/Windows/i.test(ua)) return "Windows";
  if (/Mac OS X|Macintosh/i.test(ua)) return "macOS";
  if (/Linux/i.test(ua)) return "Linux";
  return "Other";
};

export default function AdminPageViews() {
  const { user, loading: authLoading } = useAuth();
  const [raws, setRaws] = useState<Raw[]>([]);
  const [loading, setLoading] = useState(true);
  const [days, setDays] = useState(30);
  const [selected, setSelected] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    const since = new Date(Date.now() - days * 86400000).toISOString();
    const { data } = await (supabase as any)
      .from("page_views")
      .select("path, referrer, user_agent, created_at")
      .gte("created_at", since)
      .order("created_at", { ascending: false })
      .limit(10000);
    setRaws((data || []).map((r: any) => ({ ...r, path: norm(r.path) })));
    setLoading(false);
  };

  useEffect(() => { if (user) load(); /* eslint-disable-next-line */ }, [user, days]);

  const { rows, total, today, dailyTrend, deviceSplit, topReferrers } = useMemo(() => {
    const map = new Map<string, { views: number; last_seen: string }>();
    const startOfToday = new Date(); startOfToday.setHours(0, 0, 0, 0);
    let todayCount = 0;
    const dayMap = new Map<string, number>();
    const refMap = new Map<string, number>();
    let mobile = 0, desktop = 0;
    raws.forEach((r) => {
      const cur = map.get(r.path);
      if (cur) cur.views += 1;
      else map.set(r.path, { views: 1, last_seen: r.created_at });
      const d = new Date(r.created_at);
      if (d >= startOfToday) todayCount += 1;
      const key = d.toISOString().slice(0, 10);
      dayMap.set(key, (dayMap.get(key) || 0) + 1);
      const rf = shortRef(r.referrer);
      if (rf !== "Direct" && !rf.includes(window.location.hostname)) {
        refMap.set(rf, (refMap.get(rf) || 0) + 1);
      }
      if (isMobile(r.user_agent)) mobile += 1; else desktop += 1;
    });
    const rows: Row[] = Array.from(map.entries())
      .map(([path, v]) => ({ path, ...v }))
      .sort((a, b) => b.views - a.views);
    // Fill daily trend for last N days
    const trend: { day: string; count: number }[] = [];
    for (let i = days - 1; i >= 0; i--) {
      const d = new Date(Date.now() - i * 86400000);
      const key = d.toISOString().slice(0, 10);
      trend.push({ day: key, count: dayMap.get(key) || 0 });
    }
    const refs = Array.from(refMap.entries())
      .sort((a, b) => b[1] - a[1]).slice(0, 8)
      .map(([host, count]) => ({ host, count }));
    return {
      rows, total: raws.length, today: todayCount,
      dailyTrend: trend,
      deviceSplit: { mobile, desktop },
      topReferrers: refs,
    };
  }, [raws, days]);

  if (authLoading) return <div className="min-h-screen bg-black" />;
  if (!user) return <Navigate to="/auth" replace />;

  const maxDaily = Math.max(1, ...dailyTrend.map((d) => d.count));
  const totalDevice = deviceSplit.mobile + deviceSplit.desktop || 1;
  const mobilePct = Math.round((deviceSplit.mobile / totalDevice) * 100);

  const detail = selected ? raws.filter((r) => r.path === selected) : [];
  const detailReferrers = new Map<string, number>();
  const detailUA = new Map<string, number>();
  detail.forEach((r) => {
    const rf = shortRef(r.referrer);
    detailReferrers.set(rf, (detailReferrers.get(rf) || 0) + 1);
    const u = uaLabel(r.user_agent);
    detailUA.set(u, (detailUA.get(u) || 0) + 1);
  });

  return (
    <>
      <Helmet>
        <title>Page Views | Cosmedocs Admin</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      <div className="min-h-screen bg-black text-white p-6">
        <div className="max-w-6xl mx-auto">
          <Link to="/admin" className="inline-flex items-center gap-2 text-white/50 hover:text-[#C9A050] text-xs uppercase tracking-[0.25em] mb-6">
            <ArrowLeft className="h-3.5 w-3.5" /> Admin
          </Link>

          <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-[#C9A050] text-xs uppercase tracking-[0.25em]">
                <BarChart3 className="h-3.5 w-3.5" /> Visitor Analytics
              </div>
              <h1 className="text-3xl md:text-4xl font-extralight mt-2">Who's visiting what</h1>
              <p className="text-white/50 text-sm mt-2">Anonymous first-party analytics — last {days} days.</p>
            </div>
            <div className="flex items-center gap-2">
              {[7, 30, 90].map((d) => (
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <Kpi label="Total views" value={total} />
            <Kpi label="Today" value={today} highlight />
            <Kpi label="Unique pages" value={rows.length} />
            <Kpi label="Mobile share" value={mobilePct} suffix="%" />
          </div>

          {/* Daily trend chart */}
          <div className="border border-white/10 rounded-2xl p-5 mb-6 bg-white/[0.02]">
            <div className="flex items-center justify-between mb-4">
              <div className="text-xs uppercase tracking-[0.2em] text-white/50">Daily visits</div>
              <div className="text-[10px] text-white/30">Peak: {maxDaily.toLocaleString("en-GB")}</div>
            </div>
            <div className="flex items-end gap-[3px] h-32">
              {dailyTrend.map((d) => (
                <div key={d.day} className="flex-1 group relative">
                  <div
                    className="w-full bg-gradient-to-t from-[#C9A050]/70 to-[#C9A050]/30 rounded-t hover:from-[#C9A050] hover:to-[#C9A050]/60 transition-all"
                    style={{ height: `${(d.count / maxDaily) * 100}%`, minHeight: d.count > 0 ? "2px" : "0" }}
                  />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 text-[10px] whitespace-nowrap bg-black border border-white/10 px-2 py-0.5 rounded pointer-events-none">
                    {d.day.slice(5)} · {d.count}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-[10px] text-white/30 mt-2">
              <span>{dailyTrend[0]?.day.slice(5)}</span>
              <span>{dailyTrend[dailyTrend.length - 1]?.day.slice(5)}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Referrers */}
            <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
              <div className="text-xs uppercase tracking-[0.2em] text-white/50 mb-4">Top referrers</div>
              {topReferrers.length === 0 ? (
                <div className="text-white/30 text-xs">No external referrers yet.</div>
              ) : (
                <div className="space-y-2">
                  {topReferrers.map((r) => (
                    <div key={r.host} className="flex items-center justify-between text-sm">
                      <span className="text-white/80 truncate flex items-center gap-1.5">
                        <ExternalLink className="h-3 w-3 text-white/30" /> {r.host}
                      </span>
                      <span className="tabular-nums text-[#C9A050]">{r.count}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Devices */}
            <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
              <div className="text-xs uppercase tracking-[0.2em] text-white/50 mb-4">Device split</div>
              <div className="space-y-4">
                <DeviceBar icon={Smartphone} label="Mobile" count={deviceSplit.mobile} total={totalDevice} />
                <DeviceBar icon={Monitor} label="Desktop" count={deviceSplit.desktop} total={totalDevice} />
              </div>
            </div>

            {/* Quick insight */}
            <div className="border border-[#C9A050]/40 rounded-2xl p-5 bg-gradient-to-br from-[#C9A050]/[0.08] to-transparent">
              <div className="text-xs uppercase tracking-[0.2em] text-[#C9A050] mb-4">Top page</div>
              {rows[0] ? (
                <>
                  <div className="text-lg font-extralight text-white truncate">{rows[0].path}</div>
                  <div className="text-3xl font-extralight text-[#C9A050] mt-2">{rows[0].views.toLocaleString("en-GB")}</div>
                  <div className="text-[11px] text-white/40 mt-1">views · {Math.round((rows[0].views / (total || 1)) * 100)}% of traffic</div>
                </>
              ) : <div className="text-white/30 text-xs">No data yet.</div>}
            </div>
          </div>

          {/* Pages table */}
          <div className="border border-white/10 rounded-2xl overflow-hidden">
            <div className="px-5 py-3 border-b border-white/5 flex items-center justify-between">
              <div className="text-xs uppercase tracking-[0.2em] text-white/50">All pages</div>
              <div className="text-[10px] text-white/30">Click any row for detail</div>
            </div>
            <div className="grid grid-cols-12 text-[10px] uppercase tracking-[0.2em] text-white/40 bg-white/[0.03] px-4 py-3">
              <div className="col-span-7">Path</div>
              <div className="col-span-2 text-right">Views</div>
              <div className="col-span-2 text-right">Share</div>
              <div className="col-span-1 text-right">Last</div>
            </div>
            {loading ? (
              <div className="p-6 text-white/40 text-sm">Loading…</div>
            ) : rows.length === 0 ? (
              <div className="p-6 text-white/40 text-sm">No page views recorded yet. Every route visit is captured — visit a few pages and refresh.</div>
            ) : (
              rows.slice(0, 200).map((r) => {
                const share = Math.round((r.views / (total || 1)) * 100);
                return (
                  <button
                    key={r.path}
                    onClick={() => setSelected(r.path)}
                    className="w-full grid grid-cols-12 px-4 py-3 text-sm border-t border-white/5 hover:bg-[#C9A050]/[0.05] text-left transition-colors"
                  >
                    <div className="col-span-7 truncate text-white/85 flex items-center gap-1.5">
                      <Eye className="h-3 w-3 text-white/30 shrink-0" />
                      <span className="truncate">{r.path}</span>
                    </div>
                    <div className="col-span-2 text-right tabular-nums text-white">{r.views.toLocaleString("en-GB")}</div>
                    <div className="col-span-2 text-right tabular-nums text-[#C9A050]/80">{share}%</div>
                    <div className="col-span-1 text-right text-white/40 text-xs">{new Date(r.last_seen).toLocaleDateString("en-GB", { day: "2-digit", month: "short" })}</div>
                  </button>
                );
              })
            )}
          </div>

          <p className="text-[11px] text-white/30 mt-4">
            Anonymous, no cookies. Admin paths excluded. Stored in <code>public.page_views</code> — admin-only via RLS.
          </p>
        </div>
      </div>

      {/* Drill-down drawer */}
      {selected && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-start md:items-center justify-center p-4 overflow-y-auto" onClick={() => setSelected(null)}>
          <div className="bg-neutral-950 border border-[#C9A050]/30 rounded-2xl max-w-3xl w-full my-8" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between p-5 border-b border-white/10">
              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-[0.25em] text-[#C9A050]">Page detail</div>
                <div className="text-lg font-extralight text-white truncate mt-1">{selected}</div>
                <a href={selected} target="_blank" rel="noreferrer" className="text-[11px] text-white/40 hover:text-[#C9A050] inline-flex items-center gap-1 mt-1">
                  Open page <ExternalLink className="h-3 w-3" />
                </a>
              </div>
              <button onClick={() => setSelected(null)} className="text-white/50 hover:text-white p-1"><X className="h-5 w-5" /></button>
            </div>

            <div className="p-5 grid grid-cols-3 gap-3">
              <Kpi label="Views" value={detail.length} />
              <Kpi label="Referrers" value={detailReferrers.size} />
              <Kpi label="Devices" value={detailUA.size} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 pt-0">
              <div className="border border-white/10 rounded-xl p-4">
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-3">Referrer sources</div>
                {Array.from(detailReferrers.entries()).sort((a, b) => b[1] - a[1]).map(([host, count]) => (
                  <div key={host} className="flex justify-between text-sm py-1">
                    <span className="text-white/80 truncate">{host}</span>
                    <span className="tabular-nums text-[#C9A050]">{count}</span>
                  </div>
                ))}
              </div>
              <div className="border border-white/10 rounded-xl p-4">
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-3">Devices / OS</div>
                {Array.from(detailUA.entries()).sort((a, b) => b[1] - a[1]).map(([u, count]) => (
                  <div key={u} className="flex justify-between text-sm py-1">
                    <span className="text-white/80">{u}</span>
                    <span className="tabular-nums text-[#C9A050]">{count}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 pt-0">
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-3">Recent visits</div>
              <div className="border border-white/10 rounded-xl divide-y divide-white/5 max-h-80 overflow-y-auto">
                {detail.slice(0, 50).map((r, i) => (
                  <div key={i} className="px-4 py-2 text-xs flex items-center justify-between gap-3">
                    <span className="text-white/60 tabular-nums whitespace-nowrap">
                      {new Date(r.created_at).toLocaleString("en-GB", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" })}
                    </span>
                    <span className="text-white/80 truncate flex-1">{shortRef(r.referrer)}</span>
                    <span className="text-white/40 whitespace-nowrap">{uaLabel(r.user_agent)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Kpi({ label, value, highlight = false, suffix = "" }: { label: string; value: number; highlight?: boolean; suffix?: string }) {
  return (
    <div className={`rounded-2xl border p-4 ${highlight ? "border-[#C9A050]/50 bg-gradient-to-br from-[#C9A050]/[0.12] to-transparent" : "border-white/10 bg-white/[0.02]"}`}>
      <div className="text-[10px] uppercase tracking-[0.22em] text-white/50">{label}</div>
      <div className={`mt-2 text-2xl md:text-3xl font-extralight ${highlight ? "text-[#C9A050]" : "text-white"}`}>
        {value.toLocaleString("en-GB")}{suffix}
      </div>
    </div>
  );
}

function DeviceBar({ icon: Icon, label, count, total }: { icon: any; label: string; count: number; total: number }) {
  const pct = Math.round((count / (total || 1)) * 100);
  return (
    <div>
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-white/80 inline-flex items-center gap-1.5"><Icon className="h-3.5 w-3.5 text-white/40" /> {label}</span>
        <span className="tabular-nums text-white/60">{count} · {pct}%</span>
      </div>
      <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
        <div className="h-full bg-[#C9A050]/70" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
