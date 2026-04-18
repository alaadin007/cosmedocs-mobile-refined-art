import { useEffect, useRef, useState, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  Sparkles,
  Sun,
  ChevronRight,
  RotateCcw,
  Check,
  X,
  ArrowLeft,
  Loader2,
  Download,
  Mail,
  Phone,
  MapPin,
  User,
  ShieldCheck,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import jsPDF from "jspdf";

type Stage = "intro" | "capture" | "review" | "consent" | "analysing" | "results";

interface ConsentDetails {
  name: string;
  email: string;
  phone: string;
  city: string;
  consent: boolean;
}

interface ExpressionStep {
  key: string;
  label: string;
  cue: string;
  why: string;
}

const STEPS: ExpressionStep[] = [
  { key: "neutral", label: "Resting Face", cue: "Relax. Look straight at the camera.", why: "Baseline tone, static lines, volume." },
  { key: "frown", label: "Frown", cue: "Frown hard — pull eyebrows together.", why: "Glabella '11s' lines." },
  { key: "raise-eyebrows", label: "Raise Eyebrows", cue: "Lift eyebrows high in surprise.", why: "Forehead lines & brow lift." },
  { key: "smile", label: "Big Smile", cue: "Full natural smile, show teeth.", why: "Crow's feet, smile lines, cheek lift." },
  { key: "squint", label: "Squint", cue: "Squint as if in bright sun.", why: "Bunny lines, deep crow's feet." },
  { key: "sad", label: "Sad / Down-Turn", cue: "Pull mouth corners down.", why: "Marionette lines, neck bands." },
];

interface Captured {
  step: ExpressionStep;
  dataUrl: string;
}

interface ScoreNode { score: number; note: string }
interface Analysis {
  perceivedAge: number;
  overallSummary: string;
  dynamicLines: Record<string, ScoreNode>;
  staticLines: Record<string, ScoreNode>;
  volumeLoss: Record<string, ScoreNode>;
  skin: Record<string, ScoreNode>;
  recommendations: { treatment: string; rationale: string; dose: string; priority: string; indicativePrice: string }[];
  skincare: string[];
  motto: string;
}

const scoreColour = (s: number) => {
  if (s === 0) return "bg-emerald-500/20 text-emerald-300 border-emerald-500/40";
  if (s === 1) return "bg-amber-400/20 text-amber-300 border-amber-400/40";
  if (s === 2) return "bg-orange-500/20 text-orange-300 border-orange-500/40";
  return "bg-rose-500/20 text-rose-300 border-rose-500/40";
};
const scoreLabel = (s: number) =>
  s === 0 ? "None" : s === 1 ? "Mild" : s === 2 ? "Moderate" : "Severe";

const prettyKey = (k: string) =>
  k.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase());

const TestApp = () => {
  const [stage, setStage] = useState<Stage>("intro");
  const [stepIndex, setStepIndex] = useState(0);
  const [captures, setCaptures] = useState<Captured[]>([]);
  const [pendingPhoto, setPendingPhoto] = useState<string | null>(null);
  const [streamReady, setStreamReady] = useState(false);
  const [analysis, setAnalysis] = useState<Analysis | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [details, setDetails] = useState<ConsentDetails>({
    name: "",
    email: "",
    phone: "",
    city: "",
    consent: false,
  });

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Lock body scroll for full-screen feel
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = original; };
  }, []);

  const stopStream = useCallback(() => {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
    setStreamReady(false);
  }, []);

  const startCamera = useCallback(async () => {
    try {
      stopStream();
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user", width: { ideal: 1280 }, height: { ideal: 1280 } },
        audio: false,
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
        setStreamReady(true);
      }
    } catch (e) {
      console.error(e);
      toast.error("Camera access denied. Please allow camera permissions.");
      setError("Camera access denied.");
    }
  }, [stopStream]);

  useEffect(() => {
    if (stage === "capture" && !pendingPhoto) {
      startCamera();
    } else if (stage !== "capture") {
      stopStream();
    }
    return () => { if (stage !== "capture") stopStream(); };
  }, [stage, pendingPhoto, startCamera, stopStream]);

  const takePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;
    const w = video.videoWidth;
    const h = video.videoHeight;
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    // mirror like front-facing preview
    ctx.translate(w, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(video, 0, 0, w, h);
    const dataUrl = canvas.toDataURL("image/jpeg", 0.85);
    setPendingPhoto(dataUrl);
    stopStream();
  };

  const retake = () => {
    setPendingPhoto(null);
  };

  const acceptPhoto = () => {
    if (!pendingPhoto) return;
    const step = STEPS[stepIndex];
    const next = [...captures.filter((c) => c.step.key !== step.key), { step, dataUrl: pendingPhoto }];
    setCaptures(next);
    setPendingPhoto(null);
    if (stepIndex < STEPS.length - 1) {
      setStepIndex(stepIndex + 1);
    } else {
      setStage("review");
    }
  };

  const runAnalysis = async () => {
    setStage("analysing");
    setError(null);
    try {
      const { data, error: fnError } = await supabase.functions.invoke("analyze-face-scan", {
        body: {
          photos: captures.map((c) => ({
            expression: c.step.key,
            label: c.step.label,
            dataUrl: c.dataUrl,
          })),
        },
      });
      if (fnError) throw fnError;
      if (data?.error) throw new Error(data.error);
      setAnalysis(data.analysis);
      setStage("results");
    } catch (e: any) {
      console.error(e);
      const msg = e?.message ?? "Analysis failed. Please try again.";
      setError(msg);
      toast.error(msg);
      setStage("consent");
    }
  };

  const submitConsent = () => {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email.trim());
    if (!details.name.trim() || details.name.length < 2) return toast.error("Please enter your name.");
    if (!emailOk) return toast.error("Please enter a valid email.");
    if (!details.phone.trim() || details.phone.replace(/\D/g, "").length < 7) return toast.error("Please enter a valid phone number.");
    if (!details.city.trim()) return toast.error("Please enter your city.");
    if (!details.consent) return toast.error("Please confirm AI consent to continue.");
    runAnalysis();
  };

  const restart = () => {
    setCaptures([]);
    setStepIndex(0);
    setPendingPhoto(null);
    setAnalysis(null);
    setError(null);
    setDetails({ name: "", email: "", phone: "", city: "", consent: false });
    setStage("intro");
  };

  const currentStep = STEPS[stepIndex];

  return (
    <>
      <Helmet>
        <title>Face Scan — Cosmedocs Aesthetic Intelligence</title>
        <meta name="robots" content="noindex,nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
        <meta name="theme-color" content="#000000" />
      </Helmet>

      <div className="fixed inset-0 z-[9999] bg-black text-white overflow-hidden flex flex-col" style={{ paddingTop: "env(safe-area-inset-top)", paddingBottom: "env(safe-area-inset-bottom)" }}>
        <AnimatePresence mode="wait">
          {/* INTRO */}
          {stage === "intro" && (
            <motion.div
              key="intro"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col items-center justify-between p-6 text-center bg-gradient-to-b from-black via-zinc-950 to-black"
            >
              <div className="pt-8">
                <p className="text-[10px] tracking-[0.4em] text-amber-200/80 uppercase">Cosmedocs</p>
                <p className="text-[10px] tracking-[0.3em] text-white/40 uppercase mt-1">Aesthetic Intelligence</p>
              </div>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex flex-col items-center gap-6"
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-amber-300/20 blur-2xl" />
                  <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-amber-200 to-amber-500 flex items-center justify-center">
                    <Sparkles className="w-14 h-14 text-black" strokeWidth={1.5} />
                  </div>
                </div>

                <div className="space-y-3">
                  <h1 className="text-3xl font-light tracking-tight">Your Face,<br />Read by Science.</h1>
                  <p className="text-sm text-white/60 max-w-xs leading-relaxed">
                    Six photographs across natural expressions. Our doctor-led AI scores lines, volume and skin from 0–3 — then prescribes the lightest possible touch.
                  </p>
                </div>

                <div className="flex flex-col gap-2 text-xs text-white/50 max-w-[260px]">
                  <div className="flex items-center gap-2 justify-center"><Sun className="w-3.5 h-3.5 text-amber-200" /> Use natural daylight</div>
                  <div className="flex items-center gap-2 justify-center"><Camera className="w-3.5 h-3.5 text-amber-200" /> Remove makeup if possible</div>
                  <div className="flex items-center gap-2 justify-center"><Sparkles className="w-3.5 h-3.5 text-amber-200" /> Hair off the face</div>
                </div>
              </motion.div>

              <div className="w-full max-w-sm space-y-3">
                <button
                  onClick={() => { setStage("capture"); setStepIndex(0); }}
                  className="w-full bg-gradient-to-r from-amber-300 to-amber-500 text-black font-medium py-4 rounded-2xl flex items-center justify-center gap-2 active:scale-[0.98] transition"
                >
                  Begin Scan <ChevronRight className="w-4 h-4" />
                </button>
                <p className="text-[10px] text-white/30 leading-relaxed">
                  Photos are sent securely for analysis only — never stored. Educational use; not a substitute for in-clinic consultation.
                </p>
                <p className="text-[10px] text-amber-200/60 italic">Bold • Natural • Always Your Way</p>
              </div>
            </motion.div>
          )}

          {/* CAPTURE */}
          {stage === "capture" && (
            <motion.div
              key="capture"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col bg-black"
            >
              {/* top bar */}
              <div className="flex items-center justify-between px-4 py-3">
                <button onClick={restart} className="text-white/60 p-2 -ml-2"><ArrowLeft className="w-5 h-5" /></button>
                <div className="text-center">
                  <p className="text-[10px] tracking-[0.3em] text-amber-200/80 uppercase">Step {stepIndex + 1} of {STEPS.length}</p>
                  <p className="text-sm font-medium">{currentStep.label}</p>
                </div>
                <div className="w-9" />
              </div>

              {/* progress dots */}
              <div className="flex gap-1.5 px-4 pb-3">
                {STEPS.map((_, i) => (
                  <div key={i} className={`h-1 flex-1 rounded-full transition ${i < stepIndex ? "bg-amber-400" : i === stepIndex ? "bg-amber-200/80" : "bg-white/10"}`} />
                ))}
              </div>

              {/* viewfinder */}
              <div className="relative flex-1 bg-zinc-950 overflow-hidden">
                {pendingPhoto ? (
                  <img src={pendingPhoto} alt="captured" className="absolute inset-0 w-full h-full object-cover" />
                ) : (
                  <>
                    <video
                      ref={videoRef}
                      playsInline
                      muted
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{ transform: "scaleX(-1)" }}
                    />
                    {/* face guide oval */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-[70%] aspect-[3/4] rounded-[50%] border-2 border-amber-200/50 shadow-[0_0_60px_rgba(0,0,0,0.6)_inset]" />
                    </div>
                    {!streamReady && (
                      <div className="absolute inset-0 flex items-center justify-center text-white/50 text-sm">
                        <Loader2 className="w-5 h-5 animate-spin mr-2" /> Starting camera…
                      </div>
                    )}
                  </>
                )}

                {/* cue card */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-3">
                  <p className="text-amber-200 text-sm font-medium">{currentStep.cue}</p>
                  <p className="text-white/50 text-xs mt-0.5">{currentStep.why}</p>
                </div>
              </div>

              {/* shutter / actions */}
              <div className="px-6 py-6 bg-black flex items-center justify-between">
                {pendingPhoto ? (
                  <>
                    <button onClick={retake} className="flex items-center gap-2 text-white/70 px-4 py-2">
                      <RotateCcw className="w-4 h-4" /> Retake
                    </button>
                    <button
                      onClick={acceptPhoto}
                      className="bg-gradient-to-r from-amber-300 to-amber-500 text-black font-medium px-6 py-3 rounded-full flex items-center gap-2 active:scale-95 transition"
                    >
                      <Check className="w-4 h-4" /> Use Photo
                    </button>
                  </>
                ) : (
                  <>
                    <div className="w-12" />
                    <button
                      onClick={takePhoto}
                      disabled={!streamReady}
                      className="w-20 h-20 rounded-full bg-white border-4 border-white/30 active:scale-90 transition disabled:opacity-40"
                      aria-label="Take photo"
                    />
                    <button onClick={startCamera} className="text-white/50 p-3" aria-label="Restart camera">
                      <RotateCcw className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>
              <canvas ref={canvasRef} className="hidden" />
            </motion.div>
          )}

          {/* REVIEW */}
          {stage === "review" && (
            <motion.div
              key="review"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col bg-black overflow-y-auto"
            >
              <div className="px-6 pt-6 pb-3">
                <p className="text-[10px] tracking-[0.3em] text-amber-200/80 uppercase">Review</p>
                <h2 className="text-2xl font-light mt-1">All six captured.</h2>
                <p className="text-sm text-white/50 mt-1">Tap any tile to retake before we analyse.</p>
              </div>

              <div className="grid grid-cols-3 gap-2 px-4">
                {STEPS.map((s) => {
                  const cap = captures.find((c) => c.step.key === s.key);
                  return (
                    <button
                      key={s.key}
                      onClick={() => {
                        const i = STEPS.findIndex((x) => x.key === s.key);
                        setStepIndex(i);
                        setPendingPhoto(null);
                        setStage("capture");
                      }}
                      className="relative aspect-[3/4] rounded-xl overflow-hidden border border-white/10 active:scale-95 transition"
                    >
                      {cap && <img src={cap.dataUrl} alt={s.label} className="w-full h-full object-cover" />}
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-2">
                        <p className="text-[10px] text-white/90">{s.label}</p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {error && (
                <div className="mx-4 mt-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-200 text-xs flex items-start gap-2">
                  <X className="w-4 h-4 shrink-0 mt-0.5" /> {error}
                </div>
              )}

              <div className="mt-auto p-6 space-y-2">
                <button
                  onClick={() => setStage("consent")}
                  className="w-full bg-gradient-to-r from-amber-300 to-amber-500 text-black font-medium py-4 rounded-2xl flex items-center justify-center gap-2 active:scale-[0.98] transition"
                >
                  <Sparkles className="w-4 h-4" /> Continue
                </button>
                <button onClick={restart} className="w-full text-white/50 text-sm py-2">Start over</button>
              </div>
            </motion.div>
          )}

          {/* CONSENT */}
          {stage === "consent" && (
            <motion.div
              key="consent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col bg-black overflow-y-auto"
            >
              <div className="px-6 pt-6 pb-2 flex items-center justify-between">
                <button onClick={() => setStage("review")} className="text-white/60 p-2 -ml-2"><ArrowLeft className="w-5 h-5" /></button>
                <p className="text-[10px] tracking-[0.3em] text-amber-200/80 uppercase">Final Step</p>
                <div className="w-9" />
              </div>

              <div className="px-6 pb-4">
                <h2 className="text-2xl font-light">Release your reading.</h2>
                <p className="text-sm text-white/50 mt-2 leading-relaxed">
                  Add a few details so we can prepare your downloadable report. Your photographs are processed for analysis only — never published, never sold.
                </p>
              </div>

              <div className="px-6 space-y-3">
                <ConsentField icon={<User className="w-4 h-4" />} placeholder="Full name" value={details.name}
                  onChange={(v) => setDetails({ ...details, name: v })} />
                <ConsentField icon={<Mail className="w-4 h-4" />} placeholder="Email" type="email" value={details.email}
                  onChange={(v) => setDetails({ ...details, email: v })} />
                <ConsentField icon={<Phone className="w-4 h-4" />} placeholder="Phone" type="tel" value={details.phone}
                  onChange={(v) => setDetails({ ...details, phone: v })} />
                <ConsentField icon={<MapPin className="w-4 h-4" />} placeholder="City" value={details.city}
                  onChange={(v) => setDetails({ ...details, city: v })} />

                <button
                  type="button"
                  onClick={() => setDetails({ ...details, consent: !details.consent })}
                  className="w-full text-left flex gap-3 items-start p-4 rounded-2xl border border-white/10 bg-white/[0.03] active:scale-[0.99] transition"
                >
                  <div className={`mt-0.5 w-5 h-5 rounded border flex items-center justify-center shrink-0 transition ${details.consent ? "bg-amber-300 border-amber-300" : "border-white/30"}`}>
                    {details.consent && <Check className="w-3.5 h-3.5 text-black" strokeWidth={3} />}
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed">
                    I consent to my photographs being analysed by Cosmedocs Aesthetic Intelligence and to receiving my personalised reading. I understand this is educational and not a substitute for in-clinic consultation.
                  </p>
                </button>
              </div>

              {error && (
                <div className="mx-6 mt-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-200 text-xs flex items-start gap-2">
                  <X className="w-4 h-4 shrink-0 mt-0.5" /> {error}
                </div>
              )}

              <div className="mt-auto p-6 space-y-2">
                <button
                  onClick={submitConsent}
                  className="w-full bg-gradient-to-r from-amber-300 to-amber-500 text-black font-medium py-4 rounded-2xl flex items-center justify-center gap-2 active:scale-[0.98] transition"
                >
                  <ShieldCheck className="w-4 h-4" /> Release & Analyse
                </button>
                <p className="text-[10px] text-white/30 text-center leading-relaxed">
                  Bold • Natural • Always Your Way
                </p>
              </div>
            </motion.div>
          )}

          {/* ANALYSING */}
          {stage === "analysing" && (
            <motion.div
              key="analysing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col items-center justify-center bg-black text-center px-6 gap-6"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-amber-300/30 blur-3xl animate-pulse" />
                <div className="relative w-28 h-28 rounded-full border-2 border-amber-300/60 flex items-center justify-center">
                  <Loader2 className="w-10 h-10 text-amber-200 animate-spin" />
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-lg font-light">Reading your face…</p>
                <p className="text-xs text-white/50 max-w-[260px] leading-relaxed">
                  Mapping dynamic lines, volume and skin quality. This usually takes 20–40 seconds.
                </p>
              </div>
              <p className="text-[10px] text-amber-200/60 italic">Invisible art • Quiet, not loud</p>
            </motion.div>
          )}

          {/* RESULTS */}
          {stage === "results" && analysis && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex-1 overflow-y-auto bg-black"
            >
              <div className="px-6 pt-6 pb-4 sticky top-0 bg-black/90 backdrop-blur-md z-10 border-b border-white/5">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[10px] tracking-[0.3em] text-amber-200/80 uppercase">Your Reading</p>
                    <h2 className="text-2xl font-light mt-1">Perceived age <span className="text-amber-200">{analysis.perceivedAge}</span></h2>
                  </div>
                  <button onClick={restart} className="text-white/50 text-xs underline">New scan</button>
                </div>
                <p className="text-sm text-white/70 mt-3 leading-relaxed">{analysis.overallSummary}</p>
              </div>

              <div className="p-4 space-y-6">
                <ResultGroup title="Dynamic Lines" subtitle="Visible only on expression" data={analysis.dynamicLines} />
                <ResultGroup title="Static Lines" subtitle="Etched at rest" data={analysis.staticLines} />
                <ResultGroup title="Volume Loss" subtitle="Filler-zone mapping" data={analysis.volumeLoss} />
                <ResultGroup title="Skin" subtitle="Surface, tone & clarity" data={analysis.skin} />

                <div>
                  <p className="text-[10px] tracking-[0.3em] text-amber-200/80 uppercase mb-2">Treatment Plan</p>
                  <div className="space-y-2">
                    {analysis.recommendations.map((r, i) => (
                      <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                        <div className="flex items-start justify-between gap-2">
                          <p className="font-medium text-white">{r.treatment}</p>
                          <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                            r.priority === "high" ? "bg-rose-500/15 text-rose-300 border-rose-500/30" :
                            r.priority === "medium" ? "bg-amber-400/15 text-amber-200 border-amber-400/30" :
                            "bg-emerald-500/15 text-emerald-300 border-emerald-500/30"
                          }`}>{r.priority}</span>
                        </div>
                        <p className="text-xs text-white/60 mt-1.5 leading-relaxed">{r.rationale}</p>
                        <div className="flex items-center justify-between mt-3 text-xs">
                          <span className="text-white/50">{r.dose}</span>
                          <span className="text-amber-200">{r.indicativePrice}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[10px] tracking-[0.3em] text-amber-200/80 uppercase mb-2">Daily Skincare</p>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 space-y-1.5">
                    {analysis.skincare.map((s, i) => (
                      <p key={i} className="text-sm text-white/80 flex gap-2"><span className="text-amber-200">•</span>{s}</p>
                    ))}
                  </div>
                </div>

                <div className="text-center py-4">
                  <p className="text-[11px] text-amber-200/70 italic">{analysis.motto}</p>
                  <p className="text-[10px] text-white/30 mt-2">Cosmedocs · Harley Street · London</p>
                </div>

                <button
                  onClick={() => analysis && generatePdf(details, analysis)}
                  className="w-full bg-white/[0.04] border border-amber-300/40 text-amber-100 font-medium py-4 rounded-2xl flex items-center justify-center gap-2 active:scale-[0.98] transition"
                >
                  <Download className="w-4 h-4" /> Download My Report (PDF)
                </button>

                <a
                  href="https://med.as.me/harleystreet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-amber-300 to-amber-500 text-black font-medium py-4 rounded-2xl text-center active:scale-[0.98] transition"
                >
                  Book a Consultation
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

const ResultGroup = ({ title, subtitle, data }: { title: string; subtitle: string; data: Record<string, ScoreNode> }) => (
  <div>
    <div className="flex items-baseline justify-between mb-2">
      <p className="text-[10px] tracking-[0.3em] text-amber-200/80 uppercase">{title}</p>
      <p className="text-[10px] text-white/40">{subtitle}</p>
    </div>
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] divide-y divide-white/5 overflow-hidden">
      {Object.entries(data).map(([key, val]) => (
        <div key={key} className="p-3 flex items-center gap-3">
          <div className="flex-1 min-w-0">
            <p className="text-sm text-white">{prettyKey(key)}</p>
            <p className="text-xs text-white/50 leading-snug mt-0.5">{val.note}</p>
          </div>
          <div className={`text-[10px] uppercase tracking-wider px-2 py-1 rounded-full border ${scoreColour(val.score)} shrink-0`}>
            {val.score} · {scoreLabel(val.score)}
          </div>
        </div>
      ))}
    </div>
  </div>
);


const ConsentField = ({
  icon, placeholder, value, onChange, type = "text",
}: {
  icon: React.ReactNode;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) => (
  <div className="flex items-center gap-3 px-4 py-3 rounded-2xl border border-white/10 bg-white/[0.03] focus-within:border-amber-300/50 transition">
    <span className="text-amber-200/70">{icon}</span>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="flex-1 bg-transparent outline-none text-white placeholder:text-white/30 text-sm"
    />
  </div>
);

const generatePdf = (details: ConsentDetails, analysis: Analysis) => {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const margin = 48;
  let y = margin;

  const gold: [number, number, number] = [201, 160, 80];
  const ink: [number, number, number] = [25, 25, 28];
  const muted: [number, number, number] = [110, 110, 115];

  const ensureSpace = (h: number) => {
    if (y + h > pageH - margin) {
      doc.addPage();
      y = margin;
    }
  };

  // Header band
  doc.setFillColor(...ink);
  doc.rect(0, 0, pageW, 90, "F");
  doc.setTextColor(...gold);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.text("COSMEDOCS · AESTHETIC INTELLIGENCE", margin, 38);
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(20);
  doc.setFont("helvetica", "bold");
  doc.text("Your Personalised Reading", margin, 66);
  doc.setFont("helvetica", "italic");
  doc.setFontSize(9);
  doc.setTextColor(...gold);
  doc.text("Bold • Natural • Always Your Way", margin, 82);
  y = 120;

  // Patient block
  doc.setTextColor(...ink);
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text("PREPARED FOR", margin, y);
  y += 14;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.text(`${details.name}`, margin, y); y += 14;
  doc.setTextColor(...muted);
  doc.setFontSize(10);
  doc.text(`${details.email}  ·  ${details.phone}`, margin, y); y += 12;
  doc.text(`${details.city}  ·  ${new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}`, margin, y);
  y += 22;

  // Summary
  doc.setDrawColor(...gold);
  doc.setLineWidth(0.6);
  doc.line(margin, y, pageW - margin, y);
  y += 18;
  doc.setTextColor(...ink);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text(`Perceived Age: ${analysis.perceivedAge}`, margin, y);
  y += 16;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(60, 60, 65);
  const summaryLines = doc.splitTextToSize(analysis.overallSummary, pageW - margin * 2);
  doc.text(summaryLines, margin, y);
  y += summaryLines.length * 12 + 14;

  const renderGroup = (title: string, data: Record<string, ScoreNode>) => {
    ensureSpace(40);
    doc.setFillColor(245, 240, 230);
    doc.rect(margin, y, pageW - margin * 2, 20, "F");
    doc.setTextColor(...ink);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text(title.toUpperCase(), margin + 8, y + 14);
    y += 28;

    Object.entries(data).forEach(([k, v]) => {
      const noteLines = doc.splitTextToSize(v.note, pageW - margin * 2 - 90);
      const blockH = Math.max(28, noteLines.length * 11 + 14);
      ensureSpace(blockH);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(...ink);
      doc.text(prettyKey(k), margin, y);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(...muted);
      doc.text(noteLines, margin, y + 12);
      // Score chip
      const chipLabel = `${v.score} · ${scoreLabel(v.score).toUpperCase()}`;
      const chipW = doc.getTextWidth(chipLabel) + 14;
      const chipColors: Record<number, [number, number, number]> = {
        0: [220, 240, 220], 1: [250, 240, 200], 2: [250, 220, 195], 3: [250, 210, 215],
      };
      doc.setFillColor(...(chipColors[v.score] ?? [240, 240, 240]));
      doc.roundedRect(pageW - margin - chipW, y - 10, chipW, 16, 8, 8, "F");
      doc.setTextColor(...ink);
      doc.setFontSize(8);
      doc.text(chipLabel, pageW - margin - chipW + 7, y + 1);
      y += blockH;
    });
    y += 6;
  };

  renderGroup("Dynamic Lines (on expression)", analysis.dynamicLines);
  renderGroup("Static Lines (at rest)", analysis.staticLines);
  renderGroup("Volume Loss", analysis.volumeLoss);
  renderGroup("Skin", analysis.skin);

  // Treatment plan
  ensureSpace(40);
  doc.setFillColor(...ink);
  doc.rect(margin, y, pageW - margin * 2, 22, "F");
  doc.setTextColor(...gold);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("PRESCRIBED TREATMENT PLAN", margin + 8, y + 15);
  y += 32;

  analysis.recommendations.forEach((r) => {
    const rationaleLines = doc.splitTextToSize(r.rationale, pageW - margin * 2 - 16);
    const blockH = 30 + rationaleLines.length * 11 + 18;
    ensureSpace(blockH);
    doc.setDrawColor(...gold);
    doc.setLineWidth(0.4);
    doc.roundedRect(margin, y, pageW - margin * 2, blockH - 6, 6, 6, "S");
    doc.setTextColor(...ink);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text(r.treatment, margin + 10, y + 16);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(...muted);
    doc.text(rationaleLines, margin + 10, y + 30);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(...ink);
    doc.text(`Dose: ${r.dose}`, margin + 10, y + blockH - 14);
    doc.setTextColor(...gold);
    doc.text(r.indicativePrice, pageW - margin - 10 - doc.getTextWidth(r.indicativePrice), y + blockH - 14);
    y += blockH + 6;
  });

  // Skincare
  ensureSpace(50);
  doc.setFillColor(245, 240, 230);
  doc.rect(margin, y, pageW - margin * 2, 20, "F");
  doc.setTextColor(...ink);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("DAILY SKINCARE", margin + 8, y + 14);
  y += 28;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  analysis.skincare.forEach((s) => {
    const lines = doc.splitTextToSize(`•  ${s}`, pageW - margin * 2);
    ensureSpace(lines.length * 12 + 4);
    doc.setTextColor(50, 50, 55);
    doc.text(lines, margin, y);
    y += lines.length * 12 + 4;
  });

  // Footer on last page
  const pageCount = (doc as any).internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setDrawColor(...gold);
    doc.setLineWidth(0.4);
    doc.line(margin, pageH - 50, pageW - margin, pageH - 50);
    doc.setTextColor(...muted);
    doc.setFontSize(8);
    doc.setFont("helvetica", "italic");
    doc.text(analysis.motto, margin, pageH - 34);
    doc.setFont("helvetica", "normal");
    doc.text(`Cosmedocs · Harley Street · London    Page ${i} / ${pageCount}`, pageW - margin, pageH - 34, { align: "right" });
    doc.setFontSize(7);
    doc.text(
      "Educational reading. Not a substitute for in-clinic medical consultation. Indicative pricing — confirmed at consultation.",
      margin, pageH - 22
    );
  }

  const fname = `cosmedocs-reading-${details.name.trim().split(/\s+/)[0].toLowerCase() || "patient"}.pdf`;
  doc.save(fname);
  toast.success("Your reading has been downloaded.");
};

export default TestApp;
