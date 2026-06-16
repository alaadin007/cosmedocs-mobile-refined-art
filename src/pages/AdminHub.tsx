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
} from "lucide-react";

interface Counts {
  messages: number;
  leads: number;
  training: number;
  spinWinners: number;
  views7d: number;
  surveys: number;
}

export default function AdminHub() {
  const { user, loading: authLoading } = useAuth();
  const [counts, setCounts] = useState<Counts>({
    messages: 0,
    leads: 0,
    training: 0,
    spinWinners: 0,
    views7d: 0,
    surveys: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    const sevenDays = new Date(Date.now() - 7 * 86400000).toISOString();
    (async () => {
      const sb = supabase as any;
      const [m, l, t, s, pv, rs] = await Promise.all([
        sb.from("contact_us").select("id", { count: "exact", head: true }),
        sb.from("visitor_leads").select("id", { count: "exact", head: true }),
        sb.from("training_enquiries").select("id", { count: "exact", head: true }),
        sb.from("spin_winners").select("id", { count: "exact", head: true }),
        sb.from("page_views").select("id", { count: "exact", head: true }).gte("created_at", sevenDays),
        sb.from("patient_research_survey").select("id", { count: "exact", head: true }),
      ]);
      setCounts({
        messages: m.count || 0,
        leads: l.count || 0,
        training: t.count || 0,
        spinWinners: s.count || 0,
        views7d: pv.count || 0,
        surveys: rs.count || 0,
      });
      setLoading(false);
    })();
  }, [user]);

  if (authLoading) return <div className="min-h-screen bg-black" />;
  if (!user) return <Navigate to="/auth" replace />;

  const tiles = [
    {
      label: "Incoming Messages",
      desc: "Contact form submissions",
      icon: MessageSquare,
      to: "/admin/messages",
      count: counts.messages,
      highlight: true,
    },
    {
      label: "Visitor Leads",
      desc: "Skin concern + AI chat captures",
      icon: UserPlus,
      to: "/admin/leads",
      count: counts.leads,
      highlight: true,
    },
    {
      label: "Training Enquiries",
      desc: "Doctor & medical professional course interest",
      icon: GraduationCap,
      to: "/admin/training-enquiries",
      count: counts.training,
    },
    {
      label: "Spin to Win",
      desc: "Gamified prize entries",
      icon: Gift,
      to: "/admin/spin-winners",
      count: counts.spinWinners,
    },
    {
      label: "Page Views",
      desc: "Last 7 days of anonymous traffic",
      icon: BarChart3,
      to: "/admin/page-views",
      count: counts.views7d,
    },
    {
      label: "Research Survey",
      desc: "Patient psychology responses",
      icon: FlaskConical,
      to: "/admin/research-survey",
      count: counts.surveys,
    },
    {
      label: "Research Studies",
      desc: "Manage active research",
      icon: Eye,
      to: "/admin/research",
      count: null,
    },
    {
      label: "Video Upload",
      desc: "Treatment video library",
      icon: Video,
      to: "/admin/video-upload",
      count: null,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Admin | Cosmedocs</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      <div className="min-h-screen bg-black text-white p-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <div className="text-[#C9A050] text-xs uppercase tracking-[0.3em]">Cosmedocs</div>
            <h1 className="text-3xl md:text-5xl font-extralight mt-2">Admin & Development</h1>
            <p className="text-white/50 text-sm mt-3 max-w-2xl">
              Operations command centre — incoming messages, captured leads, training enquiries,
              visitor analytics and research data, in one quiet place.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tiles.map((t) => (
              <Link
                key={t.to}
                to={t.to}
                className={`group rounded-2xl border p-5 transition-all ${
                  t.highlight
                    ? "border-[#C9A050]/40 bg-gradient-to-br from-[#C9A050]/[0.08] to-transparent hover:border-[#C9A050]"
                    : "border-white/10 bg-white/[0.02] hover:border-white/30"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      t.highlight
                        ? "bg-[#C9A050]/15 text-[#C9A050]"
                        : "bg-white/[0.04] text-white/70"
                    }`}
                  >
                    <t.icon className="h-5 w-5" />
                  </div>
                  {t.count !== null && (
                    <div
                      className={`text-2xl font-extralight tabular-nums ${
                        t.highlight ? "text-[#C9A050]" : "text-white"
                      }`}
                    >
                      {loading ? "—" : t.count.toLocaleString("en-GB")}
                    </div>
                  )}
                </div>
                <div className="mt-4 text-base text-white">{t.label}</div>
                <div className="text-xs text-white/45 mt-1">{t.desc}</div>
                <div className="mt-4 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] text-white/40 group-hover:text-[#C9A050]">
                  Open <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>

          <p className="text-[11px] text-white/30 mt-10">
            All data lives in Supabase. Reads protected by admin RLS. Our aesthetics is invisible — so is the data layer.
          </p>
        </div>
      </div>
    </>
  );
}
