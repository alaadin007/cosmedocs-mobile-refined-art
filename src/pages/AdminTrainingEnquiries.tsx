import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, Navigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { ArrowLeft, GraduationCap, Mail, Phone, RefreshCw } from "lucide-react";

interface Enquiry {
  id: string;
  full_name: string;
  email: string;
  phone: string | null;
  profession: string | null;
  registration_pin: string | null;
  course_interest: string | null;
  message: string | null;
  source: string | null;
  created_at: string;
}

export default function AdminTrainingEnquiries() {
  const { user, loading: authLoading } = useAuth();
  const [rows, setRows] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const { data } = await (supabase as any)
      .from("training_enquiries")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(500);
    setRows(data || []);
    setLoading(false);
  };

  useEffect(() => {
    if (user) load();
  }, [user]);

  if (authLoading) return <div className="min-h-screen bg-black" />;
  if (!user) return <Navigate to="/auth" replace />;

  return (
    <>
      <Helmet>
        <title>Training Enquiries | Cosmedocs Admin</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      <div className="min-h-screen bg-black text-white p-6">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/admin"
            className="inline-flex items-center gap-2 text-white/50 hover:text-[#C9A050] text-xs uppercase tracking-[0.25em] mb-6"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Admin
          </Link>

          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-2 text-[#C9A050] text-xs uppercase tracking-[0.25em]">
                <GraduationCap className="h-3.5 w-3.5" /> Training
              </div>
              <h1 className="text-3xl md:text-4xl font-extralight mt-2">Training Enquiries</h1>
              <p className="text-white/50 text-sm mt-2">
                {rows.length.toLocaleString("en-GB")} medical professional enquiries
              </p>
            </div>
            <button
              onClick={load}
              className="text-xs px-3 py-1.5 rounded-full border border-white/15 text-white/70 hover:text-white inline-flex items-center gap-1.5"
            >
              <RefreshCw className="h-3 w-3" /> Refresh
            </button>
          </div>

          <div className="border border-white/10 rounded-2xl overflow-hidden divide-y divide-white/5">
            {loading ? (
              <div className="p-6 text-white/40 text-sm">Loading…</div>
            ) : rows.length === 0 ? (
              <div className="p-6 text-white/40 text-sm">No training enquiries yet.</div>
            ) : (
              rows.map((r) => (
                <div key={r.id} className="px-4 py-4 bg-white/[0.01]">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="text-white font-light">{r.full_name}</span>
                        {r.profession && (
                          <span className="text-[10px] uppercase tracking-[0.2em] text-[#C9A050]/80 border border-[#C9A050]/30 rounded-full px-2 py-0.5">
                            {r.profession}
                          </span>
                        )}
                        {r.registration_pin && (
                          <span className="text-white/40 text-xs">PIN: {r.registration_pin}</span>
                        )}
                      </div>
                      <div className="text-white/55 text-xs mt-1">
                        {r.email}
                        {r.phone && ` · ${r.phone}`}
                      </div>
                      {r.course_interest && (
                        <div className="text-white/70 text-sm mt-2">
                          <span className="text-white/40 text-xs uppercase tracking-[0.2em] mr-2">
                            Course:
                          </span>
                          {r.course_interest}
                        </div>
                      )}
                      {r.message && (
                        <div className="text-white/55 text-sm mt-2 whitespace-pre-wrap">
                          {r.message}
                        </div>
                      )}
                      {r.source && (
                        <div className="text-white/30 text-[11px] mt-2">via {r.source}</div>
                      )}
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="text-white/35 text-xs whitespace-nowrap">
                        {new Date(r.created_at).toLocaleString("en-GB")}
                      </div>
                      <div className="flex gap-2">
                        <a
                          href={`mailto:${r.email}`}
                          className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-[#C9A050]/40 text-[#C9A050] hover:bg-[#C9A050]/10"
                        >
                          <Mail className="h-3 w-3" /> Reply
                        </a>
                        {r.phone && (
                          <a
                            href={`tel:${r.phone}`}
                            className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-white/15 text-white/70 hover:text-white"
                          >
                            <Phone className="h-3 w-3" /> Call
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
