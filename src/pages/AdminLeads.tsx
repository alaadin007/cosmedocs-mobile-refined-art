import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, Navigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { ArrowLeft, UserPlus, Mail, Phone, RefreshCw, Download } from "lucide-react";

interface Lead {
  id: string;
  name: string | null;
  email: string | null;
  phone: string | null;
  skin_concerns: string | null;
  chat_history: any;
  email_sent: boolean | null;
  created_at: string;
}

export default function AdminLeads() {
  const { user, loading: authLoading } = useAuth();
  const [rows, setRows] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    const { data } = await (supabase as any)
      .from("visitor_leads")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(500);
    setRows(data || []);
    setLoading(false);
  };

  useEffect(() => {
    if (user) load();
  }, [user]);

  const exportCsv = () => {
    const header = ["created_at", "name", "email", "phone", "skin_concerns", "email_sent"];
    const lines = [header.join(",")].concat(
      rows.map((r) =>
        header
          .map((h) => {
            const v = (r as any)[h] ?? "";
            return `"${String(v).replace(/"/g, '""')}"`;
          })
          .join(","),
      ),
    );
    const blob = new Blob([lines.join("\n")], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `cosmedocs-leads-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (authLoading) return <div className="min-h-screen bg-black" />;
  if (!user) return <Navigate to="/auth" replace />;

  return (
    <>
      <Helmet>
        <title>Visitor Leads | Cosmedocs Admin</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      <div className="min-h-screen bg-black text-white p-6">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/admin"
            className="inline-flex items-center gap-2 text-white/50 hover:text-[#C9A050] text-xs uppercase tracking-[0.25em] mb-6"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Admin
          </Link>

          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-2 text-[#C9A050] text-xs uppercase tracking-[0.25em]">
                <UserPlus className="h-3.5 w-3.5" /> Leads
              </div>
              <h1 className="text-3xl md:text-4xl font-extralight mt-2">Visitor Leads</h1>
              <p className="text-white/50 text-sm mt-2">
                {rows.length.toLocaleString("en-GB")} captured leads — skin concerns + AI chat context
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={exportCsv}
                className="text-xs px-3 py-1.5 rounded-full border border-[#C9A050]/40 text-[#C9A050] hover:bg-[#C9A050]/10 inline-flex items-center gap-1.5"
              >
                <Download className="h-3 w-3" /> Export CSV
              </button>
              <button
                onClick={load}
                className="text-xs px-3 py-1.5 rounded-full border border-white/15 text-white/70 hover:text-white inline-flex items-center gap-1.5"
              >
                <RefreshCw className="h-3 w-3" /> Refresh
              </button>
            </div>
          </div>

          <div className="border border-white/10 rounded-2xl overflow-hidden divide-y divide-white/5">
            {loading ? (
              <div className="p-6 text-white/40 text-sm">Loading…</div>
            ) : rows.length === 0 ? (
              <div className="p-6 text-white/40 text-sm">No leads captured yet.</div>
            ) : (
              rows.map((r) => {
                const isOpen = open === r.id;
                const chat = Array.isArray(r.chat_history) ? r.chat_history : [];
                return (
                  <div key={r.id} className="bg-white/[0.01]">
                    <button
                      onClick={() => setOpen(isOpen ? null : r.id)}
                      className="w-full text-left px-4 py-4 hover:bg-white/[0.03]"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-3 flex-wrap">
                            <span className="text-white font-light">
                              {r.name || <span className="text-white/40 italic">Anonymous</span>}
                            </span>
                            {r.email && <span className="text-white/45 text-xs">{r.email}</span>}
                            {r.phone && <span className="text-white/45 text-xs">· {r.phone}</span>}
                            {r.email_sent && (
                              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C9A050]/80 border border-[#C9A050]/30 rounded-full px-2 py-0.5">
                                Emailed
                              </span>
                            )}
                          </div>
                          {r.skin_concerns && (
                            <div className="text-white/55 text-sm mt-1 truncate">
                              {r.skin_concerns}
                            </div>
                          )}
                          {chat.length > 0 && (
                            <div className="text-white/35 text-[11px] mt-1">
                              {chat.length} chat message{chat.length === 1 ? "" : "s"}
                            </div>
                          )}
                        </div>
                        <div className="text-white/35 text-xs whitespace-nowrap">
                          {new Date(r.created_at).toLocaleString("en-GB")}
                        </div>
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-5 pt-1 space-y-3">
                        {r.skin_concerns && (
                          <div className="rounded-xl bg-black border border-white/10 p-4 text-white/80 text-sm">
                            <div className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-2">
                              Stated concerns
                            </div>
                            {r.skin_concerns}
                          </div>
                        )}
                        {chat.length > 0 && (
                          <div className="rounded-xl bg-black border border-white/10 p-4 text-white/80 text-sm">
                            <div className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-2">
                              AI conversation
                            </div>
                            <div className="space-y-2 max-h-72 overflow-y-auto">
                              {chat.map((m: any, i: number) => (
                                <div key={i} className="text-xs">
                                  <span
                                    className={`uppercase tracking-[0.2em] mr-2 ${
                                      m.role === "user" ? "text-[#C9A050]" : "text-white/40"
                                    }`}
                                  >
                                    {m.role || "msg"}:
                                  </span>
                                  <span className="text-white/75">{m.content || m.text || ""}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        <div className="flex gap-2">
                          {r.email && (
                            <a
                              href={`mailto:${r.email}`}
                              className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-[#C9A050]/40 text-[#C9A050] hover:bg-[#C9A050]/10"
                            >
                              <Mail className="h-3 w-3" /> Reply
                            </a>
                          )}
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
