import { useState, useEffect, useMemo, useRef } from "react";
import { useLocation } from "react-router-dom";
import { MessageCircle, X, Send, Phone, Mail, MapPin, Calendar, MessageSquare, Plus, Sparkles, Camera, ImagePlus, Shield, ChevronLeft, Check, User, ArrowLeft, ArrowRight, ZoomIn, Sparkle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "./ui/use-toast";
import TypewriterText from "./TypewriterText";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface FloatingChatBotProps {
  externalOpen?: boolean;
  onExternalOpenChange?: (open: boolean) => void;
}

type ConcernSeed = { id: string; label: string; emoji: string; bucket: "Anti-ageing" | "Facial contouring" | "Skin health" | "Medical Botox" | "Body contouring"; asksAge?: boolean };

// Page-specific concern chips. Shown ABOVE the default global concerns when set.
const MASSETER_CONCERNS: ConcernSeed[] = [
  { id: "jaw-slim",     label: "Slim a wide/square jaw",         emoji: "📐", bucket: "Facial contouring" },
  { id: "jaw-grind",    label: "Stop teeth grinding (bruxism)",  emoji: "🦷", bucket: "Medical Botox" },
  { id: "jaw-tmj",      label: "TMJ pain / jaw clicking",        emoji: "🩺", bucket: "Medical Botox" },
  { id: "jaw-headache", label: "Tension headaches from clenching", emoji: "💢", bucket: "Medical Botox" },
  { id: "jaw-units",    label: "How many units do I need?",      emoji: "💉", bucket: "Medical Botox" },
];

const NOSE_CONCERNS: ConcernSeed[] = [
  { id: "nose-bump",    label: "Smooth a dorsal bump",           emoji: "📏", bucket: "Facial contouring" },
  { id: "nose-tip",     label: "Lift a drooping tip",            emoji: "⬆️", bucket: "Facial contouring" },
  { id: "nose-profile", label: "Refine my side profile",         emoji: "🪞", bucket: "Facial contouring" },
  { id: "nose-fill-vs-thread", label: "Filler vs PCL threads?",  emoji: "❓", bucket: "Facial contouring" },
];

const LIP_CONCERNS: ConcernSeed[] = [
  { id: "lip-subtle",   label: "Subtle natural hydration (0.5ml)", emoji: "💧", bucket: "Facial contouring" },
  { id: "lip-shape",    label: "Define shape & cupid's bow",     emoji: "💋", bucket: "Facial contouring" },
  { id: "lip-volume",   label: "More volume (1ml)",              emoji: "🌹", bucket: "Facial contouring" },
  { id: "lip-russian",  label: "Russian lift vs classic?",       emoji: "❓", bucket: "Facial contouring" },
  { id: "lip-asym",     label: "Fix asymmetric / thin lips",     emoji: "⚖️", bucket: "Facial contouring" },
];

const ANTIWRINKLE_CONCERNS: ConcernSeed[] = [
  { id: "aw-forehead",  label: "Forehead lines",                 emoji: "〰️", bucket: "Anti-ageing", asksAge: true },
  { id: "aw-frown",     label: "Frown / 11 lines",               emoji: "😠", bucket: "Anti-ageing", asksAge: true },
  { id: "aw-crows",     label: "Crow's feet",                    emoji: "👁️", bucket: "Anti-ageing", asksAge: true },
  { id: "aw-bunny",     label: "Bunny lines on nose",            emoji: "🐰", bucket: "Anti-ageing" },
  { id: "aw-all",       label: "All three areas (£175 +)",       emoji: "✨", bucket: "Anti-ageing", asksAge: true },
];

const CHEEK_CONCERNS: ConcernSeed[] = [
  { id: "cheek-flat",   label: "Flat / hollow cheeks (1ml)",     emoji: "🍑", bucket: "Facial contouring", asksAge: true },
  { id: "cheek-lift",   label: "Midface lift (2ml)",             emoji: "⬆️", bucket: "Facial contouring", asksAge: true },
  { id: "cheek-restore",label: "Full restoration (4ml)",         emoji: "✨", bucket: "Facial contouring", asksAge: true },
];

const SKIN_CONCERNS: ConcernSeed[] = [
  { id: "skin-glow",    label: "Glow & hydration (Profhilo)",    emoji: "💧", bucket: "Skin health" },
  { id: "skin-poly",    label: "Repair with polynucleotides",    emoji: "🧬", bucket: "Skin health" },
  { id: "skin-eyes",    label: "Under-eye dark circles",         emoji: "👁️", bucket: "Skin health" },
  { id: "skin-tone",    label: "Pigmentation / melasma",         emoji: "🌿", bucket: "Skin health" },
];

const THREADS_CONCERNS: ConcernSeed[] = [
  { id: "th-jowls",     label: "Lift jowls",                     emoji: "⬆️", bucket: "Anti-ageing", asksAge: true },
  { id: "th-eyebrow",   label: "Brow lift",                      emoji: "👁️", bucket: "Anti-ageing", asksAge: true },
  { id: "th-ha",        label: "8/11-point HA makeover",         emoji: "✨", bucket: "Facial contouring", asksAge: true },
  { id: "th-cog-mono",  label: "Cog vs Mono threads?",           emoji: "❓", bucket: "Anti-ageing" },
];

const CELLULITE_CONCERNS: ConcernSeed[] = [
  { id: "cell-thighs",   label: "Dimpling on thighs",             emoji: "🦵", bucket: "Body contouring" },
  { id: "cell-buttocks", label: "Cellulite on buttocks",          emoji: "🍑", bucket: "Body contouring" },
  { id: "cell-arms",     label: "Loose skin on upper arms",       emoji: "💪", bucket: "Body contouring" },
  { id: "cell-tummy",    label: "Tummy laxity post-pregnancy",    emoji: "🤱", bucket: "Body contouring" },
  { id: "cell-knees",    label: "Crepey skin above knees",        emoji: "🦴", bucket: "Body contouring" },
  { id: "cell-sessions", label: "How many sessions will I need?", emoji: "📅", bucket: "Body contouring" },
  { id: "cell-vs",       label: "Endolaser vs radiofrequency?",   emoji: "❓", bucket: "Body contouring" },
];
const PAGE_PROMPTS: Array<{ match: RegExp; topic: string; teaser: string; opener: string; cta: string; concerns?: ConcernSeed[]; bento?: "antiwrinkle" }> = [
  {
    match: /\/treatments\/dermal-fillers\/nose|nose-filler|non-surgical-rhinoplasty/i,
    topic: "non-surgical nose reshaping",
    teaser: "Curious how a 15-minute nose tweak could look on you?",
    opener: "Hi — I see you're exploring our non-surgical nose reshaping. Would you like a quick price guide, or shall I tell you whether you're better suited to filler (£450) or PCL threads (£950)?",
    cta: "Get my nose plan",
    concerns: NOSE_CONCERNS,
  },
  {
    match: /masseter|jaw-botox|teeth-grinding|bruxism|tmj/i,
    topic: "masseter Botox",
    teaser: "Jaw tension or a wider jaw? Two minutes and I can guide you.",
    opener: "Hi — masseter Botox is one of our most-requested treatments (£350 female / £400 male). Tell me: is your priority jaw slimming, teeth grinding, or both?",
    cta: "Tell me what I need",
    concerns: MASSETER_CONCERNS,
  },
  {
    match: /\/treatments\/dermal-fillers\/lip|lip-filler/i,
    topic: "lip fillers",
    teaser: "Want lips that look like yours, only better? Ask me anything.",
    opener: "Hi — our doctor-led lip filler starts from £250 for 0.5ml. Are you after subtle hydration, definition, or a fuller shape? I'll match you to the right plan.",
    cta: "Find my perfect lip plan",
    concerns: LIP_CONCERNS,
  },
  {
    match: /\/treatments\/dermal-fillers\/cheek|cheek-filler|midface/i,
    topic: "cheek filler",
    teaser: "Lifted cheeks without surgery — see if you're a candidate.",
    opener: "Hi — cheek filler is the #1 way to lift the midface without surgery. Would you like to know how much volume you'd need (1ml, 2ml or 4ml)?",
    cta: "Check my cheek plan",
    concerns: CHEEK_CONCERNS,
  },
  {
    match: /\/treatments\/botox|anti-wrinkle/i,
    topic: "anti-wrinkle treatment",
    teaser: "Doctor-led Anti-Wrinkle from £175. Build your plan.",
    opener: "Hi — our doctor-led Anti-Wrinkle Treatment starts at £175. Tell me your main concern (forehead, frown, crow's feet, or all three) and I'll suggest the best package.",
    cta: "Build my Botox plan",
    concerns: ANTIWRINKLE_CONCERNS,
    bento: "antiwrinkle" as const,
  },
  {
    match: /endolaser-cellulite|cellulite/i,
    topic: "Endolaser for cellulite & body contouring",
    teaser: "Dimpling on thighs or arms? See how Endolaser smooths skin in one session.",
    opener: "Hi — our dual-wavelength Endolaser melts fibrous bands under cellulite and tightens loose skin in a single doctor-led session. Tell me which area bothers you most — thighs, buttocks, arms, tummy or knees — and I'll outline expected results, sessions and price.",
    cta: "Plan my Endolaser session",
    concerns: CELLULITE_CONCERNS,
  },
  {
    match: /endolift|endolaser|laser-fibre/i,
    topic: "Endolift / Endolaser",
    teaser: "One-session lift, no scars — want the details?",
    opener: "Hi — Endolift uses a fibre laser to lift and tighten in a single doctor-led session. Want to know if you're a good candidate?",
    cta: "Check my suitability",
  },
  {
    match: /profhilo|polynucleotides|skin-rejuvenation|skin-booster/i,
    topic: "regenerative skin treatments",
    teaser: "Glassy, hydrated skin — without filler. Ask me about it.",
    opener: "Hi — Profhilo and polynucleotides regenerate skin from the inside. Would you like to know which suits your skin and the price difference?",
    cta: "Recommend my treatment",
    concerns: SKIN_CONCERNS,
  },
  {
    match: /thread-lift|pdo-threads|mini-facelift|non-surgical-facelift/i,
    topic: "thread lifting & non-surgical facelifts",
    teaser: "Lift without surgery — see what's possible in 60 seconds.",
    opener: "Hi — thread lifts and HA makeovers give a real lift without surgery. Tell me your age and the area that bothers you most and I'll match you to the right protocol.",
    cta: "Plan my lift",
    concerns: THREADS_CONCERNS,
  },
  {
    match: /chemical-peel|skin-specialist|facial/i,
    topic: "medical chemical peels",
    teaser: "Glow in a week? Ask about our medical peels.",
    opener: "Hi — our skin-specialist-led peels treat pigmentation, acne and dullness. Want me to recommend the right level for your skin?",
    cta: "Find my peel",
  },
  {
    match: /laser-hair-removal|glow-and-go/i,
    topic: "laser hair removal",
    teaser: "Pain-free, doctor-grade laser — see today's price.",
    opener: "Hi — our 3000W AI laser is fast and virtually pain-free. Which area are you thinking of? I'll send today's price right away.",
    cta: "Get my price",
  },
  {
    match: /before-after/i,
    topic: "real patient results",
    teaser: "Like what you see? I'll match you to the same treatment.",
    opener: "Hi — every result on this page is a real CosmeDocs patient. Tell me which one you love and I'll explain exactly what was done and what it would cost for you.",
    cta: "Match me to this look",
  },
  {
    match: /skincare|shop/i,
    topic: "doctor-led skincare",
    teaser: "Not sure which product? 3 questions and I'll match you.",
    opener: "Hi — our Revitalise C20 and Retinol+ are formulated by our doctors. Tell me your skin type and main concern and I'll build a routine for you.",
    cta: "Build my routine",
  },
  {
    match: /.*/,
    topic: "your aesthetic goals",
    teaser: "Got 30 seconds? Let's plan your treatment.",
    opener: "Hi — I'm CosmeDocs' aesthetic concierge. Tell me one thing you'd love to change and I'll suggest the most efficient, doctor-led plan (with pricing).",
    cta: "Start my plan",
  },
];

// Quick-pick concerns shown when user taps "Start my plan"
type Concern = {
  id: string;
  label: string;
  emoji: string;
  bucket: "Anti-ageing" | "Facial contouring" | "Skin health" | "Medical Botox" | "Body contouring";
  asksAge?: boolean;
};
const QUICK_CONCERNS: Concern[] = [
  { id: "lines",   label: "Lines & wrinkles",            emoji: "〰️", bucket: "Anti-ageing",       asksAge: true },
  { id: "volume",  label: "Volume loss / cheeks",        emoji: "🍑", bucket: "Facial contouring", asksAge: true },
  { id: "lips",    label: "Lips",                        emoji: "💋", bucket: "Facial contouring" },
  { id: "jowls",   label: "Jowls / sagging skin",        emoji: "⬇️", bucket: "Anti-ageing",       asksAge: true },
  { id: "skin",    label: "Skin tone, texture, pigment", emoji: "🌿", bucket: "Skin health" },
  { id: "medical", label: "Medical Botox (jaw, sweating, migraines)", emoji: "🩺", bucket: "Medical Botox" },
];
const AGE_BANDS = ["Under 25", "25–34", "35–44", "45–54", "55+"];

type AngleId = "front" | "left" | "right" | "closeup" | "detail";
const PHOTO_ANGLES: Array<{ id: AngleId; label: string; hint: string; icon: typeof User; required: boolean }> = [
  { id: "front",   label: "Front",     hint: "Eyes level, neutral expression",      icon: User,      required: true },
  { id: "left",    label: "Left 45°",  hint: "Turn head gently to your right",      icon: ArrowLeft, required: true },
  { id: "right",   label: "Right 45°", hint: "Turn head gently to your left",       icon: ArrowRight,required: true },
  { id: "closeup", label: "Close-up",  hint: "The area you'd like assessed",        icon: ZoomIn,    required: false },
  { id: "detail",  label: "Detail",    hint: "Optional — any extra concern",        icon: Sparkle,   required: false },
];
const MIN_REQUIRED_ANGLES = 3;

const FloatingChatBot = ({ externalOpen, onExternalOpenChange }: FloatingChatBotProps = {}) => {
  const location = useLocation();
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [peekExpanded, setPeekExpanded] = useState(false);
  const [showTeaser, setShowTeaser] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [planStep, setPlanStep] = useState<"closed" | "concern" | "age">("closed");
  const [planConcern, setPlanConcern] = useState<Concern | null>(null);
  const [attachedImages, setAttachedImages] = useState<string[]>([]); // data URLs, up to 5
  const [imageAngles, setImageAngles] = useState<string[]>([]); // angle id parallel to attachedImages
  const fileInputRef = useRef<HTMLInputElement>(null);
  const pendingAngleRef = useRef<string | null>(null);
  const MAX_IMAGES = 5;
  const { toast } = useToast();

  const pageConfig = useMemo(
    () => PAGE_PROMPTS.find((p) => p.match.test(location.pathname)) || PAGE_PROMPTS[PAGE_PROMPTS.length - 1],
    [location.pathname]
  );

  const [messages, setMessages] = useState<Message[]>([
    { id: "1", text: pageConfig.opener, isUser: false, timestamp: new Date() },
  ]);

  // Use external control if provided, otherwise use internal state
  const isOpen = externalOpen !== undefined ? externalOpen : internalIsOpen;
  const setIsOpen = (open: boolean) => {
    if (onExternalOpenChange) onExternalOpenChange(open);
    setInternalIsOpen(open);
    if (open) setShowTeaser(false);
  };

  // Refresh opener and teaser when the route changes
  useEffect(() => {
    setMessages([{ id: "1", text: pageConfig.opener, isUser: false, timestamp: new Date() }]);
    setShowTeaser(false);

    // Auto-pop teaser once per page per session
    const key = `chat-teaser-shown:${location.pathname}`;
    if (sessionStorage.getItem(key)) return;
    const t = setTimeout(() => {
      if (!isOpen) {
        setShowTeaser(true);
        sessionStorage.setItem(key, "1");
      }
    }, 6000);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, pageConfig.opener]);

  const whatsappNumber = "+447735606447";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, "")}?text=Hello, I'm interested in ${pageConfig.topic} at CosmeDocs.`;

  const contactOptions = [
    { icon: MessageCircle, label: "WhatsApp", action: () => { window.open(whatsappUrl, "_blank"); setIsExpanded(false); }, color: "from-green-400 to-green-500" },
    { icon: Phone, label: "Call", action: () => { window.open("tel:+448008600178", "_blank"); setIsExpanded(false); }, color: "from-blue-400 to-blue-500" },
    { icon: Mail, label: "Email", action: () => { window.open("mailto:info@cosmedocs.com", "_blank"); setIsExpanded(false); }, color: "from-purple-400 to-purple-500" },
    { icon: Calendar, label: "Book", action: () => { window.open("https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29", "_blank"); setIsExpanded(false); }, color: "from-pink-400 to-pink-500" },
    { icon: MapPin, label: "Maps", action: () => { window.open("https://www.google.com/maps/search/?api=1&query=8-10+Harley+Street+London+W1G+9PF", "_blank"); setIsExpanded(false); }, color: "from-orange-400 to-orange-500" },
    { icon: MessageSquare, label: "Chat", action: () => { setIsOpen(true); setIsExpanded(false); }, color: "from-purple-400 to-purple-500" },
  ];

  const sendMessage = async (text: string, displayText?: string) => {
    const hasImages = attachedImages.length > 0;
    if ((!text.trim() && !hasImages) || isLoading) return;
    const userMessage: Message = {
      id: Date.now().toString(),
      text: displayText || text || (hasImages ? `📸 ${attachedImages.length} photo${attachedImages.length > 1 ? "s" : ""} shared for assessment` : ""),
      isUser: true,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    const imagesToSend = attachedImages;
    const anglesToSend = imageAngles;
    setAttachedImages([]);
    setImageAngles([]);
    setIsLoading(true);

    // Build prior history for the model (everything before the brand-new user turn)
    const history = messages
      .filter((m) => m.id !== "1") // skip the initial canned opener
      .map((m) => ({ role: m.isUser ? "user" as const : "assistant" as const, content: m.text }));

    try {
      const { data, error } = await supabase.functions.invoke("ai-knowledge-chat", {
        body: {
          messages: history,
          question: text || undefined,
          images: imagesToSend.length > 0 ? imagesToSend : undefined,
          context: `Patient is on page ${location.pathname} (topic: ${pageConfig.topic}).${anglesToSend.length ? ` Photo angles supplied: ${anglesToSend.join(", ")}.` : ""}`,
        },
      });
      if (error) throw error;
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.answer || "I apologise, I couldn't process that request.",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error: any) {
      console.error("Chat error:", error);
      let errorMessage = "Sorry, I'm having trouble connecting. Please try again.";
      if (error.message?.includes("429")) errorMessage = "I'm receiving too many requests. Please wait a moment and try again.";
      else if (error.message?.includes("402")) errorMessage = "The AI service is temporarily unavailable. Please contact us directly.";
      toast({ title: "Error", description: errorMessage, variant: "destructive" });
      setMessages((prev) => [...prev, { id: (Date.now() + 1).toString(), text: errorMessage, isUser: false, timestamp: new Date() }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = () => sendMessage(inputMessage);

  const openPickerForAngle = (angle: AngleId | null) => {
    pendingAngleRef.current = angle;
    if (fileInputRef.current) {
      // single-file mode when targeting an angle, multi otherwise
      fileInputRef.current.multiple = angle === null;
      fileInputRef.current.click();
    }
  };

  const removeAngle = (angle: AngleId) => {
    setAttachedImages((prev) => prev.filter((_, i) => imageAngles[i] !== angle));
    setImageAngles((prev) => prev.filter((a) => a !== angle));
  };

  const nextOpenAngle = (): AngleId | null => {
    const filled = new Set(imageAngles);
    const next = PHOTO_ANGLES.find((a) => !filled.has(a.id));
    return next ? next.id : null;
  };

  const handleImagesSelected = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const targetAngle = pendingAngleRef.current;
    pendingAngleRef.current = null;

    const readAsDataURL = (file: File): Promise<string | null> =>
      new Promise((resolve) => {
        if (file.size > 8 * 1024 * 1024) {
          toast({ title: "Photo too large", description: `${file.name} is over 8 MB — skipped.`, variant: "destructive" });
          resolve(null);
          return;
        }
        const reader = new FileReader();
        reader.onload = (e) => resolve((e.target?.result as string) || null);
        reader.onerror = () => resolve(null);
        reader.readAsDataURL(file);
      });

    if (targetAngle) {
      readAsDataURL(files[0]).then((url) => {
        if (!url) return;
        setAttachedImages((prevImgs) => {
          setImageAngles((prevAng) => {
            const idx = prevAng.indexOf(targetAngle);
            if (idx >= 0) return prevAng;
            if (prevAng.length >= MAX_IMAGES) return prevAng;
            return [...prevAng, targetAngle];
          });
          const idx = prevImgs.findIndex((_, i) => imageAngles[i] === targetAngle);
          if (idx >= 0) {
            const next = [...prevImgs];
            next[idx] = url;
            return next;
          }
          return prevImgs.length >= MAX_IMAGES ? prevImgs : [...prevImgs, url];
        });
      });
      return;
    }

    // Multi/untagged fallback — assign each to the next open angle in sequence
    const remaining = MAX_IMAGES - attachedImages.length;
    if (remaining <= 0) {
      toast({ title: "Maximum photos reached", description: `You can attach up to ${MAX_IMAGES} photos.`, variant: "destructive" });
      return;
    }
    const list = Array.from(files).slice(0, remaining);
    Promise.all(list.map(readAsDataURL)).then((urls) => {
      const validUrls = urls.filter((u): u is string => !!u);
      if (validUrls.length === 0) return;
      setImageAngles((prevAng) => {
        const filled = new Set(prevAng);
        const assigned: string[] = [];
        for (const _ of validUrls) {
          const next = PHOTO_ANGLES.find((a) => !filled.has(a.id));
          const id = next ? next.id : "detail";
          assigned.push(id);
          filled.add(id);
        }
        return [...prevAng, ...assigned].slice(0, MAX_IMAGES);
      });
      setAttachedImages((prev) => [...prev, ...validUrls].slice(0, MAX_IMAGES));
    });
  };

  const openPlanPicker = () => {
    setIsOpen(true);
    setShowTeaser(false);
    setPlanConcern(null);
    setPlanStep("concern");
  };

  const submitPlan = (concern: Concern, age?: string) => {
    setPlanStep("closed");
    const lines = [
      `Patient is on the ${pageConfig.topic} page. Their concern: ${concern.label} (${concern.bucket}).`,
      age ? `Age: ${age}.` : null,
      `Reply as the Cosmedocs AI assistant — stay strictly on-topic for ${pageConfig.topic}. Empathic, doctor-led, 1–2 options with price and rationale, one next step. Under 80 words.`,
    ].filter(Boolean).join(" ");
    const display = age ? `${concern.label} · ${age}` : concern.label;
    sendMessage(lines, display);
  };

  // Page-relevant follow-up chips shown after each AI reply.
  const followUpChips = useMemo(() => {
    if (isLoading) return [];
    const last = messages[messages.length - 1];
    if (!last || last.isUser || last.id === "1") return [];
    const asked = new Set(messages.filter((m) => m.isUser).map((m) => m.text.toLowerCase()));
    const pool = (pageConfig.concerns ?? []).filter((c) => !asked.has(c.label.toLowerCase()));
    return pool.slice(0, 3);
  }, [messages, pageConfig.concerns, isLoading]);

  const sendChipMessage = (label: string) => {
    sendMessage(
      `Patient is on the ${pageConfig.topic} page. They asked: "${label}". Stay strictly on-topic. Under 80 words, doctor-led, include price if relevant, one next step.`,
      label
    );
  };


  return (
    <>
      {/* Slim right-edge tab — opens a full contact sidebar */}
      <AnimatePresence>
        {!isOpen && !isExpanded && (
          <motion.button
            key="rail-tab"
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 60, opacity: 0 }}
            transition={{ type: "spring", stiffness: 240, damping: 28, delay: 0.3 }}
            onClick={() => setIsExpanded(true)}
            aria-label="Open contact options"
            className="fixed right-0 top-1/2 -translate-y-1/2 z-[60] flex items-center gap-2 pl-2 pr-2.5 py-4 rounded-l-2xl bg-black/90 backdrop-blur-md border border-r-0 border-[#C9A050]/40 shadow-[0_10px_40px_rgba(0,0,0,0.6)] hover:bg-black transition-colors"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600">
              <Plus className="h-4 w-4 text-black" />
            </span>
            <span
              className="text-[10px] tracking-[0.32em] uppercase text-[#C9A050] font-medium"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              Contact
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Full contact sidebar */}
      <AnimatePresence>
        {isExpanded && !isOpen && (
          <>
            <motion.div
              key="contact-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsExpanded(false)}
              className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
            />
            <motion.aside
              key="contact-panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              aria-label="Contact Cosmedocs"
              className="fixed right-0 top-0 h-full w-[88%] max-w-sm z-[61] bg-gradient-to-b from-zinc-950 to-black border-l border-[#C9A050]/30 shadow-2xl overflow-y-auto"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                <div>
                  <p className="text-[10px] tracking-[0.28em] uppercase text-[#C9A050]">Cosmedocs</p>
                  <h2 className="text-white text-lg font-light mt-0.5">Get in touch</h2>
                </div>
                <button
                  onClick={() => setIsExpanded(false)}
                  aria-label="Close"
                  className="h-9 w-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/80"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="px-5 py-5 space-y-2">
                {/* Chat with AI — primary */}
                <button
                  onClick={() => { setIsOpen(true); setIsExpanded(false); setShowTeaser(false); }}
                  className="w-full flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-br from-violet-600/20 via-fuchsia-500/15 to-rose-500/20 border border-fuchsia-400/30 hover:border-fuchsia-300/60 transition-colors text-left"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 via-fuchsia-500 to-rose-500">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-white text-sm font-medium">Ask Cosmedocs AI</span>
                    <span className="block text-white/60 text-xs mt-0.5">Instant doctor-led answers</span>
                  </span>
                </button>

                {/* Research */}
                <button
                  onClick={() => { window.dispatchEvent(new Event("open-research-survey")); setIsExpanded(false); }}
                  className="w-full flex items-center gap-3 p-4 rounded-2xl bg-white/[0.03] border border-[#C9A050]/30 hover:border-[#C9A050]/60 transition-colors text-left"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C9A050]/60 bg-black">
                    <Sparkles className="h-5 w-5 text-[#C9A050]" />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-white text-sm font-medium">Contribute to research</span>
                    <span className="block text-white/60 text-xs mt-0.5">Shape aesthetic medicine</span>
                  </span>
                </button>

                <div className="pt-3 pb-1">
                  <p className="text-[10px] tracking-[0.24em] uppercase text-white/40 px-1">Direct contact</p>
                </div>

                {contactOptions
                  .filter((o) => o.label !== "Chat")
                  .map((option) => (
                    <button
                      key={option.label}
                      onClick={option.action}
                      className="w-full flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-white/20 transition-colors text-left"
                    >
                      <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${option.color}`}>
                        <option.icon className="h-5 w-5 text-white" />
                      </span>
                      <span className="text-white text-sm font-light">{option.label}</span>
                    </button>
                  ))}
              </div>

              <div className="px-5 pb-6 pt-2 text-center">
                <p className="text-[10px] text-white/30 tracking-wide">
                  Invisible art. Quiet, never loud.
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>


      {/* Auto teaser bubble (positioned bottom-right, independent of rail) */}
      <div className="fixed bottom-4 right-4 z-50 pointer-events-none">
        <AnimatePresence>
          {showTeaser && !isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="pointer-events-auto mb-2 max-w-[260px] rounded-2xl bg-black/90 border border-amber-300/30 p-3 text-xs text-white shadow-2xl backdrop-blur-md"
            >
              <button
                onClick={() => setShowTeaser(false)}
                className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-black border border-white/20 flex items-center justify-center"
                aria-label="Dismiss"
              >
                <X className="h-3 w-3 text-white/70" />
              </button>
              <p className="leading-snug text-white/90">{pageConfig.teaser}</p>
              <div className="mt-2 flex gap-2">
                <button
                  onClick={() => { setIsOpen(true); setShowTeaser(false); }}
                  className="flex-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 px-3 py-1.5 text-[11px] font-medium text-black hover:opacity-95"
                >
                  {pageConfig.cta}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>


      {/* Immersive iOS-style full-screen chat layer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="ai-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-stretch justify-center bg-black/55 backdrop-blur-2xl"
            style={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Inter", system-ui, sans-serif',
              WebkitFontSmoothing: "antialiased",
            }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsOpen(false);
            }}
          >
            <motion.div
              initial={{ y: 24, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 24, opacity: 0, scale: 0.98 }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="relative flex h-[100dvh] w-full max-w-xl flex-col overflow-hidden bg-[#0a0a0a]/90 backdrop-saturate-150 sm:my-6 sm:h-[min(92dvh,820px)] sm:rounded-[2.25rem] sm:border sm:border-amber-300/15 sm:shadow-[0_30px_120px_-20px_rgba(201,160,80,0.35)]"
            >
              {/* iOS-style top bar */}
              <div
                className="flex items-center justify-between px-5 pt-[max(env(safe-area-inset-top),1rem)] pb-3 border-b border-white/[0.06]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(20,16,10,0.85) 0%, rgba(10,10,10,0.6) 100%)",
                  backdropFilter: "blur(20px)",
                }}
              >
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-1 text-amber-400 active:opacity-60 -ml-1 px-1 py-2"
                  aria-label="Close"
                >
                  <ChevronLeft className="h-6 w-6" strokeWidth={2.5} />
                  <span className="text-[17px]">Done</span>
                </button>
                <div className="text-center">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-amber-400/80">Cosmedocs</p>
                  <p className="text-[13px] font-medium text-white/70">Harley Street</p>
                </div>
                <div className="w-[60px]" />
              </div>

              {/* Hero title — compact */}
              <div className="px-6 pt-4 pb-3">
                <h2 className="text-[22px] leading-[1.15] font-semibold text-white tracking-tight">
                  Aesthetic <span className="text-amber-400">Intelligence</span>
                </h2>
                <p className="mt-0.5 text-[13px] text-white/55 leading-snug">
                  A doctor-led plan, in plain English · {pageConfig.topic}
                </p>
              </div>

              {/* Messages */}
              <ScrollArea className="flex-1 px-5">
                <div className="space-y-4 pb-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[88%] rounded-[1.6rem] px-5 py-3.5 shadow-sm ${
                          message.isUser
                            ? "bg-gradient-to-br from-amber-300 via-amber-400 to-amber-500 text-black"
                            : "bg-white/[0.06] border border-white/10 text-white"
                        }`}
                      >
                        {message.isUser ? (
                          <p className="text-[17px] leading-[1.4] whitespace-pre-wrap font-normal">
                            {formatMessage(message.text)}
                          </p>
                        ) : (
                          <TypewriterText
                            className="text-[17px] leading-[1.45] whitespace-pre-wrap block font-normal"
                            text={formatMessage(message.text)}
                            enabled={
                              message.id === messages[messages.length - 1]?.id &&
                              messages[messages.length - 1]?.isUser === false &&
                              message.id !== "1"
                            }
                          />
                        )}
                        <span
                          className={`mt-1.5 block text-[11px] tracking-wide ${
                            message.isUser ? "text-black/55" : "text-white/35"
                          }`}
                        >
                          {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                  {/* Inline page-relevant chips — shown under the opener and after each AI reply */}
                  {!isLoading && (() => {
                    const last = messages[messages.length - 1];
                    const showOpenerChips = messages.length === 1 && (pageConfig.concerns?.length ?? 0) > 0;
                    const chips = showOpenerChips ? (pageConfig.concerns ?? []) : followUpChips;
                    if (chips.length === 0) return null;
                    return (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="grid grid-cols-2 gap-2 pt-1"
                      >
                        {chips.map((c) => (
                          <button
                            key={c.id}
                            onClick={() => {
                              if (c.asksAge) { setPlanConcern(c); setPlanStep("age"); }
                              else sendChipMessage(c.label);
                            }}
                            className="flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-amber-400/[0.08] border border-amber-400/30 active:bg-amber-400/20 text-white text-[13.5px] leading-tight text-left"
                          >
                            <span className="text-[15px] shrink-0">{c.emoji}</span>
                            <span className="truncate">{c.label}</span>
                          </button>
                        ))}
                      </motion.div>
                    );
                  })()}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-white/[0.06] border border-white/10 rounded-[1.6rem] px-5 py-4">
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                          <div className="w-2.5 h-2.5 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                          <div className="w-2.5 h-2.5 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>

              {/* Scrollable bottom region — keeps pickers, angle checklist and CTAs visible above composer */}
              <div className="flex-shrink-0 max-h-[55dvh] overflow-y-auto overscroll-contain pb-2">
              {/* Plan picker — iOS-sized cards */}
              {planStep === "age" && planConcern && (
                <div className="px-5 pt-3 pb-2 border-t border-white/[0.06]">


                  {planStep === "age" && planConcern && (
                    <>
                      <p className="text-[12px] uppercase tracking-[0.22em] text-amber-400 mb-3 font-medium">
                        Roughly how old are you?
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {AGE_BANDS.map((a) => (
                          <button
                            key={a}
                            onClick={() => submitPlan(planConcern, a)}
                            className="px-5 py-3 min-h-[48px] rounded-full bg-white/[0.05] border border-white/10 active:bg-amber-400/[0.12] active:border-amber-400/50 text-white text-[16px]"
                          >
                            {a}
                          </button>
                        ))}
                        <button
                          onClick={() => submitPlan(planConcern)}
                          className="px-5 py-3 rounded-full text-white/50 text-[15px] hover:text-white"
                        >
                          Prefer not to say
                        </button>
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Angle checklist — front / left / right / close-up / detail */}
              {attachedImages.length > 0 && (
                <div className="px-5 pt-3">
                  <div className="p-3 rounded-2xl bg-white/[0.05] border border-amber-400/30">
                    <div className="flex items-center justify-between mb-2.5">
                      <div>
                        <p className="text-[13px] text-white font-medium leading-tight">
                          {attachedImages.length} of {MAX_IMAGES} angles captured
                          {attachedImages.length >= MIN_REQUIRED_ANGLES && (
                            <span className="text-amber-400"> · high accuracy</span>
                          )}
                        </p>
                        <p className="text-[11px] text-white/55 mt-0.5">
                          Tap a tile to add or replace that angle
                        </p>
                      </div>
                      <button
                        onClick={() => { setAttachedImages([]); setImageAngles([]); }}
                        className="text-white/50 hover:text-white text-[12px]"
                      >
                        Clear all
                      </button>
                    </div>

                    {/* Progress bar */}
                    <div className="h-1 w-full rounded-full bg-white/10 overflow-hidden mb-3">
                      <div
                        className="h-full bg-gradient-to-r from-amber-300 to-amber-500 transition-all"
                        style={{ width: `${Math.min(100, (attachedImages.length / MAX_IMAGES) * 100)}%` }}
                      />
                    </div>

                    {/* Angle tiles */}
                    <div className="grid grid-cols-5 gap-2">
                      {PHOTO_ANGLES.map((angle) => {
                        const idx = imageAngles.indexOf(angle.id);
                        const imgUrl = idx >= 0 ? attachedImages[idx] : null;
                        const Icon = angle.icon;
                        return (
                          <div key={angle.id} className="flex flex-col items-center text-center">
                            <button
                              onClick={() => openPickerForAngle(angle.id)}
                              className={`relative h-16 w-16 rounded-xl overflow-hidden flex items-center justify-center transition-all ${
                                imgUrl
                                  ? "border-2 border-amber-400 shadow-md shadow-amber-500/20"
                                  : angle.required
                                    ? "border border-dashed border-amber-400/60 bg-white/[0.04] active:bg-amber-400/10"
                                    : "border border-dashed border-white/15 bg-white/[0.02] active:bg-white/[0.06]"
                              }`}
                              aria-label={imgUrl ? `Replace ${angle.label} photo` : `Add ${angle.label} photo`}
                              title={angle.hint}
                            >
                              {imgUrl ? (
                                <>
                                  <img src={imgUrl} alt={`${angle.label} angle`} className="h-full w-full object-cover" />
                                  <span className="absolute top-1 right-1 h-4 w-4 rounded-full bg-amber-400 flex items-center justify-center">
                                    <Check className="h-2.5 w-2.5 text-black" strokeWidth={3} />
                                  </span>
                                </>
                              ) : (
                                <Icon className={`h-5 w-5 ${angle.required ? "text-amber-400" : "text-white/40"}`} />
                              )}
                            </button>
                            <span className={`mt-1 text-[10px] leading-tight ${imgUrl ? "text-amber-400" : angle.required ? "text-white/80" : "text-white/45"}`}>
                              {angle.label}
                            </span>
                            {imgUrl && (
                              <button
                                onClick={() => removeAngle(angle.id)}
                                className="mt-0.5 text-[9px] text-white/40 hover:text-white"
                              >
                                Remove
                              </button>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    <p className="text-[11px] text-white/55 flex items-start gap-1 mt-3">
                      <Shield className="h-3 w-3 text-amber-400 shrink-0 mt-0.5" />
                      <span>
                        {attachedImages.length < MIN_REQUIRED_ANGLES
                          ? `Add at least ${MIN_REQUIRED_ANGLES} angles (front, left, right) for an accurate plan.`
                          : "Discarded after this reply — never stored."}
                      </span>
                    </p>
                  </div>
                </div>
              )}

              </div>

              {/* iOS-style composer */}
              <div
                className="px-4 pt-3 pb-[max(env(safe-area-inset-bottom),1rem)] border-t border-white/[0.06]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0.9) 100%)",
                  backdropFilter: "blur(20px)",
                }}
              >
                <div className="flex items-end gap-2">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={(e) => {
                      handleImagesSelected(e.target.files);
                      if (fileInputRef.current) fileInputRef.current.value = "";
                    }}
                  />
                  <button
                    onClick={() => openPickerForAngle(nextOpenAngle())}
                    aria-label="Attach photos"
                    disabled={attachedImages.length >= MAX_IMAGES}
                    className="shrink-0 h-12 w-12 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-amber-400 active:bg-amber-400/10 disabled:opacity-40"
                  >
                    <Camera className="h-5 w-5" />
                  </button>
                  <div className="flex-1 flex items-center rounded-3xl bg-white/[0.06] border border-white/10 px-4 py-2">
                    <input
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                      placeholder={attachedImages.length > 0 ? "Add a note (optional)…" : "Ask AI anything…"}
                      className="flex-1 bg-transparent outline-none text-[17px] text-white placeholder:text-white/40 py-2"
                      disabled={isLoading}
                    />
                  </div>
                  <button
                    onClick={handleSendMessage}
                    disabled={isLoading || (!inputMessage.trim() && attachedImages.length === 0)}
                    aria-label="Send"
                    className="shrink-0 h-12 w-12 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 text-black flex items-center justify-center active:opacity-90 disabled:opacity-40 shadow-md shadow-amber-500/30"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </div>
                <p className="mt-2 text-center text-[10.5px] text-white/35 flex items-center justify-center gap-1">
                  <Shield className="h-3 w-3" />
                  Add up to {MAX_IMAGES} photos — analysed in-session, never stored.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Helper function to strip markdown from AI responses for clean chat rendering
const formatMessage = (text: string): string => {
  let f = text;
  // Code fences and inline code
  f = f.replace(/```[\s\S]*?```/g, (m) => m.replace(/```\w*\n?/g, "").replace(/```/g, "").trim());
  f = f.replace(/`([^`]+)`/g, "$1");
  // Headings (###, ##, #) at line start
  f = f.replace(/^\s{0,3}#{1,6}\s+/gm, "");
  // Blockquotes
  f = f.replace(/^\s{0,3}>\s?/gm, "");
  // Horizontal rules
  f = f.replace(/^\s*([-*_])\1{2,}\s*$/gm, "");
  // Bullet markers (*, -, +) -> clean bullet
  f = f.replace(/^\s*[\*\-\+]\s+/gm, "• ");
  // Numbered lists tidy
  f = f.replace(/^\s*(\d+)\.\s+/gm, "$1. ");
  // Bold/italic
  f = f.replace(/\*\*([^\*]+)\*\*/g, "$1");
  f = f.replace(/__([^_]+)__/g, "$1");
  f = f.replace(/\*([^\*\n]+)\*/g, "$1");
  f = f.replace(/(^|[^a-zA-Z0-9])_([^_\n]+)_/g, "$1$2");
  // Links [text](url) -> text
  f = f.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
  // Stray remaining # or * at line start
  f = f.replace(/^[#\*]+\s*/gm, "");
  // Collapse 3+ blank lines
  f = f.replace(/\n{3,}/g, "\n\n");
  return f.trim();
};

export default FloatingChatBot;
