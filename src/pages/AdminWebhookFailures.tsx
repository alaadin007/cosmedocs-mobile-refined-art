import { useCallback, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, Navigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { AlertTriangle, ArrowLeft, CheckCircle2, RefreshCw } from "lucide-react";

interface Failure {
  id: string;
  hook_name: string;
  request_id: number | null;
  status_code: number | null;
  error_message: string | null;
  response_body: string | null;
  created_at: string;
  resolved_at: string | null;
}

export default function AdminWebhookFailures() {
  const { user, loading: authLoading } = useAuth();
  const [items, setItems] = useState<Failure[]>([]);
  const [loading, setLoading] = useState(true);
  const [scanning, setScanning] = useState(false);
  const [lastScan, setLastScan] = useState<string | null>(null);
  const [showResolved, setShowResolved] = useState(false);

  const load = useCallback(async () => {
    const sb = supabase as any;
    const q = sb
      .from("webhook_failures")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(200);
    const { data } = showResolved ? await q : await q.is("resolved_at", null);
    setItems((data as Failure[]) || []);
    setLoading(false);
  }, [showResolved]);

  const scan = useCallback(async () => {
    setScanning(true);
    try {
      const { data, error } = await (supabase as any).rpc("reconcile_webhook_failures", {
        _lookback_minutes: 10080, // 7 days
      });
      setLastScan(
        error
          ? `Scan error: ${error.message}`
          : `Scan complete — ${data ?? 0} new failure${data === 1 ? "" : "s"} logged.`,
      );
      await load();
    } finally {
      setScanning(false);
    }
  }, [load]);

  const resolve = async (id: string) => {
    await (supabase as any).rpc("resolve_webhook_failure", { _id: id });
    await load();
  };

  useEffect(() => {
    if (!user) return;
    load();
    scan(); // auto-scan on open
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, showResolved]);

  if (authLoading) return <div className="min-h-screen bg-black" />;
  if (!user) return <Navigate to="/auth" replace />;

  const unresolvedCount = items.filter((i) => !i.resolved_at).length;

  return (
    <>
      <Helmet>
        <title>Webhook Failures | Cosmedocs Admin</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      <div className="min-h-screen bg-black text-white p-6">
        <div className="max-w-5xl mx-auto">
          <Link to="/dashboard" className="inline-flex items-center gap-1.5 text-white/50 hover:text-white text-xs uppercase tracking-[0.25em] mb-6">
            <ArrowLeft className="h-3 w-3" /> Command Centre
          </Link>

          <div className="flex items-start justify-between gap-4 flex-wrap mb-8">
            <div>
              <div className="text-[#C9A050] text-xs uppercase tracking-[0.3em]">Delivery health</div>
              <h1 className="text-3xl md:text-4xl font-extralight mt-2">Contact form → email webhook</h1>
              <p className="text-white/50 text-sm mt-3 max-w-2xl">
                Every contact form submission is forwarded to the Cosmedocs email inbox via an n8n webhook.
                Failed deliveries are logged here so no enquiry silently goes missing.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={scan}
                disabled={scanning}
                className="text-xs px-3 py-1.5 rounded-full border border-[#C9A050]/40 text-[#C9A050] hover:bg-[#C9A050]/10 inline-flex items-center gap-1.5 disabled:opacity-50"
              >
                <RefreshCw className={`h-3 w-3 ${scanning ? "animate-spin" : ""}`} />
                {scanning ? "Scanning…" : "Scan recent deliveries"}
              </button>
              <button
                onClick={() => setShowResolved((s) => !s)}
                className="text-xs px-3 py-1.5 rounded-full border border-white/15 text-white/70 hover:text-white"
              >
                {showResolved ? "Hide resolved" : "Show resolved"}
              </button>
            </div>
          </div>

          {lastScan && (
            <div className="text-[11px] text-white/40 mb-4">{lastScan}</div>
          )}

          <div
            className={`rounded-2xl border p-5 mb-6 ${
              unresolvedCount > 0
                ? "border-red-500/40 bg-red-500/[0.06]"
                : "border-emerald-500/30 bg-emerald-500/[0.05]"
            }`}
          >
            <div className="flex items-center gap-3">
              {unresolvedCount > 0 ? (
                <AlertTriangle className="h-5 w-5 text-red-400" />
              ) : (
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
              )}
              <div>
                <div className="text-lg font-light">
                  {unresolvedCount > 0
                    ? `${unresolvedCount} unresolved webhook failure${unresolvedCount === 1 ? "" : "s"}`
                    : "All contact form emails delivering normally."}
                </div>
                <div className="text-xs text-white/50 mt-0.5">
                  Endpoint: <code className="text-white/70">medacles.app.n8n.cloud/webhook/cosmedocs-contact-us</code>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 overflow-hidden">
            <div className="px-5 py-3 border-b border-white/10 text-xs uppercase tracking-[0.25em] text-white/50">
              Failure log
            </div>
            <div className="divide-y divide-white/5">
              {loading ? (
                <div className="p-6 text-white/40 text-sm">Loading…</div>
              ) : items.length === 0 ? (
                <div className="p-6 text-white/40 text-sm">
                  No {showResolved ? "" : "unresolved "}failures recorded. Quiet is good.
                </div>
              ) : (
                items.map((f) => (
                  <div key={f.id} className="p-5 flex flex-col gap-2">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-[10px] uppercase tracking-[0.2em] rounded-full px-2 py-0.5 border ${
                            f.resolved_at
                              ? "border-emerald-400/40 text-emerald-300 bg-emerald-400/5"
                              : "border-red-400/40 text-red-300 bg-red-400/5"
                          }`}
                        >
                          {f.resolved_at ? "Resolved" : `HTTP ${f.status_code ?? "—"}`}
                        </span>
                        <span className="text-white/40 text-xs">
                          {new Date(f.created_at).toLocaleString("en-GB")}
                        </span>
                        {f.request_id && (
                          <span className="text-white/30 text-[11px]">req #{f.request_id}</span>
                        )}
                      </div>
                      {!f.resolved_at && (
                        <button
                          onClick={() => resolve(f.id)}
                          className="text-[11px] px-2.5 py-1 rounded-full border border-[#C9A050]/40 text-[#C9A050] hover:bg-[#C9A050]/10 inline-flex items-center gap-1"
                        >
                          <CheckCircle2 className="h-3 w-3" /> Mark resolved
                        </button>
                      )}
                    </div>
                    {f.error_message && (
                      <div className="text-sm text-red-200/80">{f.error_message}</div>
                    )}
                    {f.response_body && (
                      <pre className="text-[11px] text-white/50 bg-white/[0.03] border border-white/5 rounded-lg p-3 whitespace-pre-wrap break-all max-h-40 overflow-y-auto">
                        {f.response_body}
                      </pre>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>

          <p className="text-[11px] text-white/30 mt-6">
            Scan reads recent HTTP responses from the Postgres net extension and logs any non-2xx or network error,
            deduplicated by request id. Our aesthetics is invisible — so is our delivery monitoring.
          </p>
        </div>
      </div>
    </>
  );
}
