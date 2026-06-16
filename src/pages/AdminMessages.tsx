import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, Navigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { ArrowLeft, MessageSquare, Mail, Phone, RefreshCw } from "lucide-react";

interface Msg {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  created_at: string;
}

export default function AdminMessages() {
  const { user, loading: authLoading } = useAuth();
  const [rows, setRows] = useState<Msg[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    const { data } = await (supabase as any)
      .from("contact_us")
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
        <title>Incoming Messages | Cosmedocs Admin</title>
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
                <MessageSquare className="h-3.5 w-3.5" /> Inbox
              </div>
              <h1 className="text-3xl md:text-4xl font-extralight mt-2">Incoming Messages</h1>
              <p className="text-white/50 text-sm mt-2">
                {rows.length.toLocaleString("en-GB")} contact submissions
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
              <div className="p-6 text-white/40 text-sm">No messages yet.</div>
            ) : (
              rows.map((r) => {
                const isOpen = open === r.id;
                return (
                  <div key={r.id} className="bg-white/[0.01]">
                    <button
                      onClick={() => setOpen(isOpen ? null : r.id)}
                      className="w-full text-left px-4 py-4 hover:bg-white/[0.03]"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-3 flex-wrap">
                            <span className="text-white font-light">{r.name}</span>
                            <span className="text-white/40 text-xs">{r.email}</span>
                            {r.phone && (
                              <span className="text-white/40 text-xs">· {r.phone}</span>
                            )}
                          </div>
                          <div className="text-white/55 text-sm mt-1 truncate">{r.message}</div>
                        </div>
                        <div className="text-white/35 text-xs whitespace-nowrap">
                          {new Date(r.created_at).toLocaleString("en-GB")}
                        </div>
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-5 pt-1">
                        <div className="rounded-xl bg-black border border-white/10 p-4 text-white/80 text-sm whitespace-pre-wrap">
                          {r.message}
                        </div>
                        <div className="flex gap-2 mt-3">
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
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
}
