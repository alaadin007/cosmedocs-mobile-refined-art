import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, Navigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import {
  BarChart3,
  MessageSquare,
  UserPlus,
  GraduationCap,
  Gift,
  FlaskConical,
  Video,
  ArrowRight,
  Eye,
  LogOut,
  Inbox,
  Mail,
  Phone,
  AlertTriangle,
} from "lucide-react";

interface Counts {
  messages: number;
  leads: number;
  training: number;
  spinWinners: number;
  views7d: number;
  surveys: number;
  webhookFailures: number;
}

interface Counts {
  messages: number;
  leads: number;
  training: number;
  spinWinners: number;
  views7d: number;
  surveys: number;
}

interface FeedItem {
  id: string;
  kind: "message" | "lead" | "training";
  name: string;
  detail: string;
  contact?: string | null;
  phone?: string | null;
  created_at: string;
  href: string;
}

const Dashboard = () => {
  const { user, loading: authLoading, signOut } = useAuth();
  const [counts, setCounts] = useState<Counts>({
    messages: 0,
    leads: 0,
    training: 0,
    spinWinners: 0,
    views7d: 0,
    surveys: 0,
  });
  const [feed, setFeed] = useState<FeedItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "message" | "lead" | "training">("all");

  useEffect(() => {
    if (!user) return;
    const sevenDays = new Date(Date.now() - 7 * 86400000).toISOString();
    (async () => {
      const sb = supabase as any;
      const [m, l, t, s, pv, rs, recentM, recentL, recentT] = await Promise.all([
        sb.from("contact_us").select("id", { count: "exact", head: true }),
        sb.from("visitor_leads").select("id", { count: "exact", head: true }),
        sb.from("training_enquiries").select("id", { count: "exact", head: true }),
        sb.from("spin_winners").select("id", { count: "exact", head: true }),
        sb.from("page_views").select("id", { count: "exact", head: true }).gte("created_at", sevenDays),
        sb.from("patient_research_survey").select("id", { count: "exact", head: true }),
        sb.from("contact_us").select("id,name,email,phone,message,created_at").order("created_at", { ascending: false }).limit(15),
        sb.from("visitor_leads").select("id,name,email,phone,skin_concerns,created_at").order("created_at", { ascending: false }).limit(15),
        sb.from("training_enquiries").select("id,full_name,email,phone,course_interest,created_at").order("created_at", { ascending: false }).limit(15),
      ]);

      setCounts({
        messages: m.count || 0,
        leads: l.count || 0,
        training: t.count || 0,
        spinWinners: s.count || 0,
        views7d: pv.count || 0,
        surveys: rs.count || 0,
      });

      const items: FeedItem[] = [
        ...((recentM.data as any[]) || []).map((r) => ({
          id: `m-${r.id}`,
          kind: "message" as const,
          name: r.name || "Anonymous",
          detail: r.message || "",
          contact: r.email,
          phone: r.phone,
          created_at: r.created_at,
          href: "/admin/messages",
        })),
        ...((recentL.data as any[]) || []).map((r) => ({
          id: `l-${r.id}`,
          kind: "lead" as const,
          name: r.name || "Anonymous visitor",
          detail: r.skin_concerns || "Chatbot capture",
          contact: r.email,
          phone: r.phone,
          created_at: r.created_at,
          href: "/admin/leads",
        })),
        ...((recentT.data as any[]) || []).map((r) => ({
          id: `t-${r.id}`,
          kind: "training" as const,
          name: r.full_name || "Practitioner",
          detail: r.course_interest || "Training enquiry",
          contact: r.email,
          phone: r.phone,
          created_at: r.created_at,
          href: "/admin/training-enquiries",
        })),
      ].sort((a, b) => +new Date(b.created_at) - +new Date(a.created_at));

      setFeed(items);
      setLoading(false);
    })();
  }, [user]);

  if (authLoading) return <div className="min-h-screen bg-black" />;
  if (!user) return <Navigate to="/auth" replace />;

  const tiles = [
    { label: "Incoming Messages", desc: "Contact form submissions", icon: MessageSquare, to: "/admin/messages", count: counts.messages, highlight: true },
    { label: "Visitor Leads", desc: "Skin concern + AI chat captures", icon: UserPlus, to: "/admin/leads", count: counts.leads, highlight: true },
    { label: "Training Enquiries", desc: "Doctor & medical professional interest", icon: GraduationCap, to: "/admin/training-enquiries", count: counts.training, highlight: true },
    { label: "Page Views (7d)", desc: "Anonymous traffic", icon: BarChart3, to: "/admin/page-views", count: counts.views7d, highlight: false },
    { label: "Spin to Win", desc: "Gamified prize entries", icon: Gift, to: "/admin/spin-winners", count: counts.spinWinners, highlight: false },
    { label: "Research Survey", desc: "Patient psychology responses", icon: FlaskConical, to: "/admin/research-survey", count: counts.surveys, highlight: false },
    { label: "Research Studies", desc: "Manage active research", icon: Eye, to: "/admin/research", count: null, highlight: false },
    { label: "Video Upload", desc: "Treatment video library", icon: Video, to: "/admin/video-upload", count: null, highlight: false },
  ];

  const filteredFeed = filter === "all" ? feed : feed.filter((f) => f.kind === filter);

  const kindMeta = {
    message: { label: "Message", cls: "text-[#C9A050] border-[#C9A050]/30 bg-[#C9A050]/5" },
    lead: { label: "Lead", cls: "text-emerald-300 border-emerald-400/30 bg-emerald-400/5" },
    training: { label: "Training", cls: "text-sky-300 border-sky-400/30 bg-sky-400/5" },
  } as const;

  return (
    <>
      <Helmet>
        <title>Command Centre | Cosmedocs</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      <div className="min-h-screen bg-black text-white p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 flex-wrap mb-10">
            <div>
              <div className="text-[#C9A050] text-xs uppercase tracking-[0.3em]">Cosmedocs</div>
              <h1 className="text-3xl md:text-5xl font-extralight mt-2">Command Centre</h1>
              <p className="text-white/50 text-sm mt-3 max-w-2xl">
                Everything that lands with Cosmedocs — messages, leads, training enquiries and analytics — in one quiet place.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-white/40 text-xs hidden sm:inline">{user.email}</span>
              <button
                onClick={signOut}
                className="text-xs px-3 py-1.5 rounded-full border border-white/15 text-white/70 hover:text-white inline-flex items-center gap-1.5"
              >
                <LogOut className="h-3 w-3" /> Sign out
              </button>
            </div>
          </div>

          {/* Tiles */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
            {tiles.map((t) => (
              <Link
                key={t.to}
                to={t.to}
                className={`group rounded-2xl border p-4 transition-all ${
                  t.highlight
                    ? "border-[#C9A050]/40 bg-gradient-to-br from-[#C9A050]/[0.08] to-transparent hover:border-[#C9A050]"
                    : "border-white/10 bg-white/[0.02] hover:border-white/30"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                      t.highlight ? "bg-[#C9A050]/15 text-[#C9A050]" : "bg-white/[0.04] text-white/70"
                    }`}
                  >
                    <t.icon className="h-4 w-4" />
                  </div>
                  {t.count !== null && (
                    <div className={`text-2xl font-extralight tabular-nums ${t.highlight ? "text-[#C9A050]" : "text-white"}`}>
                      {loading ? "—" : t.count.toLocaleString("en-GB")}
                    </div>
                  )}
                </div>
                <div className="mt-3 text-sm text-white">{t.label}</div>
                <div className="text-[11px] text-white/40 mt-0.5">{t.desc}</div>
              </Link>
            ))}
          </div>

          {/* Unified inbox */}
          <div className="rounded-2xl border border-white/10 overflow-hidden">
            <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-white/10 flex-wrap">
              <div className="flex items-center gap-2">
                <Inbox className="h-4 w-4 text-[#C9A050]" />
                <span className="text-xs uppercase tracking-[0.25em] text-[#C9A050]">Unified Inbox</span>
                <span className="text-white/30 text-xs">· latest activity across every channel</span>
              </div>
              <div className="flex items-center gap-1 text-[11px]">
                {(["all", "message", "lead", "training"] as const).map((k) => (
                  <button
                    key={k}
                    onClick={() => setFilter(k)}
                    className={`px-2.5 py-1 rounded-full border capitalize transition-colors ${
                      filter === k
                        ? "border-[#C9A050] text-[#C9A050] bg-[#C9A050]/10"
                        : "border-white/10 text-white/50 hover:text-white"
                    }`}
                  >
                    {k === "all" ? "All" : `${k}s`}
                  </button>
                ))}
              </div>
            </div>

            <div className="divide-y divide-white/5 max-h-[540px] overflow-y-auto">
              {loading ? (
                <div className="p-6 text-white/40 text-sm">Loading incoming activity…</div>
              ) : filteredFeed.length === 0 ? (
                <div className="p-6 text-white/40 text-sm">Nothing here yet.</div>
              ) : (
                filteredFeed.slice(0, 60).map((item) => {
                  const meta = kindMeta[item.kind];
                  return (
                    <Link
                      key={item.id}
                      to={item.href}
                      className="flex items-start gap-4 px-5 py-4 hover:bg-white/[0.03] transition-colors"
                    >
                      <span className={`text-[10px] uppercase tracking-[0.2em] border rounded-full px-2 py-0.5 mt-0.5 whitespace-nowrap ${meta.cls}`}>
                        {meta.label}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-3 flex-wrap">
                          <span className="text-white font-light">{item.name}</span>
                          {item.contact && <span className="text-white/45 text-xs">{item.contact}</span>}
                          {item.phone && <span className="text-white/45 text-xs">· {item.phone}</span>}
                        </div>
                        {item.detail && (
                          <div className="text-white/55 text-sm mt-1 line-clamp-2">{item.detail}</div>
                        )}
                      </div>
                      <div className="text-white/35 text-xs whitespace-nowrap">
                        {new Date(item.created_at).toLocaleString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                      <div className="flex gap-1.5 ml-2">
                        {item.contact && (
                          <a
                            href={`mailto:${item.contact}`}
                            onClick={(e) => e.stopPropagation()}
                            className="p-1.5 rounded-full border border-[#C9A050]/30 text-[#C9A050] hover:bg-[#C9A050]/10"
                            aria-label="Email"
                          >
                            <Mail className="h-3 w-3" />
                          </a>
                        )}
                        {item.phone && (
                          <a
                            href={`tel:${item.phone}`}
                            onClick={(e) => e.stopPropagation()}
                            className="p-1.5 rounded-full border border-white/15 text-white/70 hover:text-white"
                            aria-label="Call"
                          >
                            <Phone className="h-3 w-3" />
                          </a>
                        )}
                        <ArrowRight className="h-3.5 w-3.5 text-white/30 self-center ml-1" />
                      </div>
                    </Link>
                  );
                })
              )}
            </div>
          </div>

          <p className="text-[11px] text-white/30 mt-6">
            All data lives in Supabase, protected by admin RLS. Our aesthetics is invisible — so is the data layer.
          </p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
