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
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

type Stage = "intro" | "capture" | "review" | "analysing" | "results";

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
  { key: "left-oblique", label: "Left ¾ View", cue: "Face stays straight — move the camera to your 11 o'clock.", why: "Left cheek, temple & jawline volume." },
  { key: "right-oblique", label: "Right ¾ View", cue: "Face stays straight — move the camera to your 1 o'clock.", why: "Right cheek, temple & jawline volume." },
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
      setStage("review");
    }
  };

  const restart = () => {
    setCaptures([]);
    setStepIndex(0);
    setPendingPhoto(null);
    setAnalysis(null);
    setError(null);
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
                    Eight photographs — six expressions plus two side views. Our doctor-led AI scores lines, volume and skin from 0–3 — then prescribes the lightest possible touch.
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
                <h2 className="text-2xl font-light mt-1">All eight captured.</h2>
                <p className="text-sm text-white/50 mt-1">Tap any tile to retake before we analyse.</p>
              </div>

              <div className="grid grid-cols-4 gap-2 px-4">
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
                  onClick={runAnalysis}
                  className="w-full bg-gradient-to-r from-amber-300 to-amber-500 text-black font-medium py-4 rounded-2xl flex items-center justify-center gap-2 active:scale-[0.98] transition"
                >
                  <Sparkles className="w-4 h-4" /> Analyse My Face
                </button>
                <button onClick={restart} className="w-full text-white/50 text-sm py-2">Start over</button>
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
                <div>
                  <p className="text-[10px] tracking-[0.3em] text-amber-200/80 uppercase mb-2">How we score</p>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 grid grid-cols-4 gap-2">
                    {[
                      { s: 0, label: "None", desc: "No issue" },
                      { s: 1, label: "Mild", desc: "Dynamic only" },
                      { s: 2, label: "Moderate", desc: "Treatment dose" },
                      { s: 3, label: "Severe", desc: "Higher dose" },
                    ].map((l) => (
                      <div key={l.s} className={`rounded-xl border px-2 py-2 text-center ${scoreColour(l.s)}`}>
                        <p className="text-base font-light leading-none">{l.s}</p>
                        <p className="text-[10px] uppercase tracking-wider mt-1">{l.label}</p>
                        <p className="text-[9px] opacity-70 mt-0.5 leading-tight">{l.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <ResultGroup title="Dynamic Lines" subtitle="Visible only on expression" data={analysis.dynamicLines} />
                <ResultGroup title="Static Lines" subtitle="Etched at rest" data={analysis.staticLines} />
                <ResultGroup title="Volume Loss" subtitle="Filler-zone mapping (front + side views)" data={analysis.volumeLoss} />
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

export default TestApp;
