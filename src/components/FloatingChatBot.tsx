import { useState, useEffect, useMemo, useRef } from "react";
import { useLocation } from "react-router-dom";
import { MessageCircle, X, Send, Phone, Mail, MapPin, Calendar, MessageSquare, Plus, Sparkles, Camera, ImagePlus, Shield, ChevronLeft } from "lucide-react";
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

// Page-specific sales prompts. First match wins.
const PAGE_PROMPTS: Array<{ match: RegExp; topic: string; teaser: string; opener: string; cta: string }> = [
  {
    match: /\/treatments\/dermal-fillers\/nose|nose-filler|non-surgical-rhinoplasty/i,
    topic: "non-surgical nose reshaping",
    teaser: "Curious how a 15-minute nose tweak could look on you?",
    opener: "Hi — I see you're exploring our non-surgical nose reshaping. Would you like a quick price guide, or shall I tell you whether you're better suited to filler (£450) or PCL threads (£950)?",
    cta: "Get my nose plan",
  },
  {
    match: /masseter|jaw-botox|teeth-grinding|bruxism/i,
    topic: "masseter Botox",
    teaser: "Jaw tension or a wider jaw? Two minutes and I can guide you.",
    opener: "Hi — masseter Botox is one of our most-requested treatments (£350 female / £400 male). Tell me: is your priority jaw slimming, teeth grinding, or both?",
    cta: "Tell me what I need",
  },
  {
    match: /\/treatments\/dermal-fillers\/lip|lip-filler/i,
    topic: "lip fillers",
    teaser: "Want lips that look like yours, only better? Ask me anything.",
    opener: "Hi — our doctor-led lip filler starts from £250 for 0.5ml. Are you after subtle hydration, definition, or a fuller shape? I'll match you to the right plan.",
    cta: "Find my perfect lip plan",
  },
  {
    match: /\/treatments\/dermal-fillers\/cheek|cheek-filler|midface/i,
    topic: "cheek filler",
    teaser: "Lifted cheeks without surgery — see if you're a candidate.",
    opener: "Hi — cheek filler is the #1 way to lift the midface without surgery. Would you like to know how much volume you'd need (1ml, 2ml or 4ml)?",
    cta: "Check my cheek plan",
  },
  {
    match: /\/treatments\/botox|anti-wrinkle/i,
    topic: "anti-wrinkle treatment",
    teaser: "Doctor-led Anti-Wrinkle from £175. Quick question?",
    opener: "Hi — our doctor-led Anti-Wrinkle Treatment starts at £175. Tell me your main concern (forehead, frown, crow's feet, or all three) and I'll suggest the best package.",
    cta: "Build my Botox plan",
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
  },
  {
    match: /thread-lift|pdo-threads|mini-facelift|non-surgical-facelift/i,
    topic: "thread lifting & non-surgical facelifts",
    teaser: "Lift without surgery — see what's possible in 60 seconds.",
    opener: "Hi — thread lifts and HA makeovers give a real lift without surgery. Tell me your age and the area that bothers you most and I'll match you to the right protocol.",
    cta: "Plan my lift",
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
  bucket: "Anti-ageing" | "Facial contouring" | "Skin health" | "Medical Botox";
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

const FloatingChatBot = ({ externalOpen, onExternalOpenChange }: FloatingChatBotProps = {}) => {
  const location = useLocation();
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showTeaser, setShowTeaser] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [planStep, setPlanStep] = useState<"closed" | "concern" | "age">("closed");
  const [planConcern, setPlanConcern] = useState<Concern | null>(null);
  const [attachedImages, setAttachedImages] = useState<string[]>([]); // data URLs, up to 5
  const fileInputRef = useRef<HTMLInputElement>(null);
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
    setAttachedImages([]);
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
          context: `Patient is on page ${location.pathname} (topic: ${pageConfig.topic}).`,
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

  const handleImagesSelected = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const remaining = MAX_IMAGES - attachedImages.length;
    if (remaining <= 0) {
      toast({ title: "Maximum photos reached", description: `You can attach up to ${MAX_IMAGES} photos per message.`, variant: "destructive" });
      return;
    }
    const list = Array.from(files).slice(0, remaining);
    list.forEach((file) => {
      if (file.size > 8 * 1024 * 1024) {
        toast({ title: "Photo too large", description: `${file.name} is over 8 MB — skipped.`, variant: "destructive" });
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        const url = e.target?.result as string;
        setAttachedImages((prev) => (prev.length >= MAX_IMAGES ? prev : [...prev, url]));
      };
      reader.readAsDataURL(file);
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
      `Concern: ${concern.label} (${concern.bucket}).`,
      age ? `Age: ${age}.` : null,
      "Reply as Zephra — empathic, zone-based reasoning, 1–2 doctor-led options with price and rationale, one next step. Under 90 words.",
    ].filter(Boolean).join(" ");
    const display = age ? `My concern: ${concern.label} · Age ${age}` : `My concern: ${concern.label}`;
    sendMessage(lines, display);
  };


  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        {/* Auto teaser bubble */}
        <AnimatePresence>
          {showTeaser && !isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="absolute bottom-20 right-0 mb-2 w-[min(86vw,320px)] rounded-2xl border border-amber-300/40 bg-black/95 p-4 text-white shadow-2xl backdrop-blur"
            >
              <button
                aria-label="Dismiss"
                onClick={(e) => { e.stopPropagation(); setShowTeaser(false); }}
                className="absolute right-2 top-2 rounded-full p-1 text-gray-400 hover:bg-white/10 hover:text-white"
              >
                <X className="h-3.5 w-3.5" />
              </button>
              <div className="flex items-center gap-2 text-amber-400">
                <Sparkles className="h-4 w-4" />
                <span className="text-[10px] uppercase tracking-[0.2em]">Cosmedocs · live</span>
              </div>
              <p className="mt-2 text-sm leading-snug">{pageConfig.teaser}</p>
              <div className="mt-3 flex gap-2">
                <button
                  onClick={openPlanPicker}
                  className="flex-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 px-3 py-2 text-xs font-medium text-black hover:opacity-95"
                >
                  {pageConfig.cta}
                </button>
                <button
                  onClick={() => setIsOpen(true)}
                  className="rounded-full border border-white/15 px-3 py-2 text-xs text-white hover:bg-white/10"
                >
                  Ask anything
                </button>
              </div>
              <div className="absolute -bottom-1.5 right-7 h-3 w-3 rotate-45 border-b border-r border-amber-300/40 bg-black/95" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expanded Contact Options */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="absolute bottom-20 right-0 flex flex-col gap-3 mb-2"
            >
              {contactOptions.map((option, index) => (
                <motion.button
                  key={option.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={option.action}
                  className={`bg-gradient-to-br ${option.color} text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group relative`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <option.icon className="h-6 w-6" />
                  <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black/90 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                    {option.label}
                  </span>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Gold Toggle Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => { setIsExpanded(!isExpanded); setShowTeaser(false); }}
          className="bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-white p-5 rounded-full shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 relative overflow-hidden group border-2 border-amber-300/50"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber-300 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <motion.div animate={{ rotate: isExpanded ? 45 : 0 }} transition={{ duration: 0.3 }} className="relative z-10">
            <Plus className="h-7 w-7" />
          </motion.div>
        </motion.button>
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

              {/* Hero title */}
              <div className="px-6 pt-5 pb-4">
                <h2 className="text-[28px] leading-[1.1] font-semibold text-white tracking-tight">
                  Aesthetic <span className="text-amber-400">Intelligence</span>
                </h2>
                <p className="mt-1 text-[15px] text-white/55 leading-snug">
                  A doctor-led plan, in plain English. {pageConfig.topic}.
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

              {/* Plan picker — iOS-sized cards */}
              {planStep !== "closed" && (
                <div className="px-5 pt-3 pb-2 border-t border-white/[0.06]">
                  {planStep === "concern" && (
                    <>
                      <p className="text-[12px] uppercase tracking-[0.22em] text-amber-400 mb-3 font-medium">
                        What's bothering you?
                      </p>
                      <div className="grid grid-cols-1 gap-2 max-h-[45vh] overflow-y-auto pr-1 -mr-1">
                        {QUICK_CONCERNS.map((c) => (
                          <button
                            key={c.id}
                            onClick={() => {
                              setPlanConcern(c);
                              if (c.asksAge) setPlanStep("age");
                              else submitPlan(c);
                            }}
                            className="flex items-center gap-3 text-left px-4 py-4 min-h-[56px] rounded-2xl bg-white/[0.05] border border-white/10 active:bg-amber-400/[0.12] active:border-amber-400/50 hover:border-amber-400/40 text-white text-[17px] font-normal transition-colors"
                          >
                            <span className="text-2xl leading-none">{c.emoji}</span>
                            <span className="flex-1">{c.label}</span>
                          </button>
                        ))}
                      </div>
                      <button
                        onClick={() => setPlanStep("closed")}
                        className="mt-3 w-full text-center text-[15px] text-white/50 hover:text-white/80 py-2"
                      >
                        Skip — just chat
                      </button>
                    </>
                  )}
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

              {/* Photo preview */}
              {attachedImage && (
                <div className="px-5 pt-3">
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.05] border border-amber-400/30">
                    <img src={attachedImage} alt="Attached" className="h-14 w-14 rounded-xl object-cover" />
                    <div className="flex-1 min-w-0">
                      <p className="text-[14px] text-white font-medium">Photo ready to send</p>
                      <p className="text-[12px] text-white/55 flex items-center gap-1">
                        <Shield className="h-3 w-3 text-amber-400" />
                        Discarded after this reply — never stored.
                      </p>
                    </div>
                    <button
                      onClick={() => setAttachedImage(null)}
                      className="text-white/50 hover:text-white p-1"
                      aria-label="Remove photo"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Start-plan CTA */}
              {planStep === "closed" && messages.length <= 2 && !attachedImage && (
                <div className="px-5 pt-3">
                  <button
                    onClick={openPlanPicker}
                    disabled={isLoading}
                    className="w-full rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 py-4 min-h-[54px] text-[17px] font-semibold text-black active:opacity-90 disabled:opacity-60 shadow-lg shadow-amber-500/20"
                  >
                    Build my treatment plan
                  </button>
                </div>
              )}

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
                    capture="environment"
                    className="hidden"
                    onChange={(e) => {
                      handleImageSelected(e.target.files?.[0] || null);
                      if (fileInputRef.current) fileInputRef.current.value = "";
                    }}
                  />
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    aria-label="Attach photo"
                    className="shrink-0 h-12 w-12 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-amber-400 active:bg-amber-400/10"
                  >
                    <Camera className="h-5 w-5" />
                  </button>
                  <div className="flex-1 flex items-center rounded-3xl bg-white/[0.06] border border-white/10 px-4 py-2">
                    <input
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                      placeholder={attachedImage ? "Add a note (optional)…" : "Ask Zephra anything…"}
                      className="flex-1 bg-transparent outline-none text-[17px] text-white placeholder:text-white/40 py-2"
                      disabled={isLoading}
                    />
                  </div>
                  <button
                    onClick={handleSendMessage}
                    disabled={isLoading || (!inputMessage.trim() && !attachedImage)}
                    aria-label="Send"
                    className="shrink-0 h-12 w-12 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 text-black flex items-center justify-center active:opacity-90 disabled:opacity-40 shadow-md shadow-amber-500/30"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </div>
                <p className="mt-2 text-center text-[11px] text-white/35 flex items-center justify-center gap-1">
                  <Shield className="h-3 w-3" />
                  Photos are analysed in-session and never stored.
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
