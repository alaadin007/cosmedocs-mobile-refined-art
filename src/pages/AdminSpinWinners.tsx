import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, Navigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { ArrowLeft, Gift, RefreshCw } from "lucide-react";

interface Winner {
  id: string;
  name: string | null;
  email: string | null;
  phone: string | null;
  postcode: string | null;
  prize: string | null;
  prize_code: string | null;
  redeemed: boolean | null;
  created_at: string;
}

export default function AdminSpinWinners() {
  const { user, loading: authLoading } = useAuth();
  const [rows, setRows] = useState<Winner[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const { data } = await (supabase as any)
      .from("spin_winners")
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
        <title>Spin to Win Winners | Cosmedocs Admin</title>
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
                <Gift className="h-3.5 w-3.5" /> Spin to Win
              </div>
              <h1 className="text-3xl md:text-4xl font-extralight mt-2">Prize Winners</h1>
              <p className="text-white/50 text-sm mt-2">
                {rows.length.toLocaleString("en-GB")} entries
              </p>
            </div>
            <button
              onClick={load}
              className="text-xs px-3 py-1.5 rounded-full border border-white/15 text-white/70 hover:text-white inline-flex items-center gap-1.5"
            >
              <RefreshCw className="h-3 w-3" /> Refresh
            </button>
          </div>

          <div className="border border-white/10 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-12 text-[10px] uppercase tracking-[0.2em] text-white/40 bg-white/[0.03] px-4 py-3">
              <div className="col-span-3">Name / Email</div>
              <div className="col-span-2">Phone</div>
              <div className="col-span-3">Prize</div>
              <div className="col-span-2">Code</div>
              <div className="col-span-1">Status</div>
              <div className="col-span-1 text-right">When</div>
            </div>
            {loading ? (
              <div className="p-6 text-white/40 text-sm">Loading…</div>
            ) : rows.length === 0 ? (
              <div className="p-6 text-white/40 text-sm">No entries yet.</div>
            ) : (
              rows.map((r) => (
                <div
                  key={r.id}
                  className="grid grid-cols-12 px-4 py-3 text-sm border-t border-white/5 items-center"
                >
                  <div className="col-span-3 truncate">
                    <div className="text-white/85">{r.name || "—"}</div>
                    <div className="text-white/40 text-xs">{r.email}</div>
                  </div>
                  <div className="col-span-2 text-white/60 text-xs">{r.phone || "—"}</div>
                  <div className="col-span-3 text-white/80">{r.prize || "—"}</div>
                  <div className="col-span-2 text-[#C9A050] font-mono text-xs">{r.prize_code || "—"}</div>
                  <div className="col-span-1">
                    {r.redeemed ? (
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#C9A050]">
                        Redeemed
                      </span>
                    ) : (
                      <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                        Open
                      </span>
                    )}
                  </div>
                  <div className="col-span-1 text-right text-white/40 text-xs">
                    {new Date(r.created_at).toLocaleDateString("en-GB")}
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
