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
    if (!text.trim() || isLoading) return;
    const userMessage: Message = { id: Date.now().toString(), text: displayText || text, isUser: true, timestamp: new Date() };
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("ai-knowledge-chat", {
        body: {
          question: text,
          includeWebSearch: true,
          context: `User is currently on page: ${location.pathname} (topic: ${pageConfig.topic}). Be warm, concise, conversion-focused. Keep replies under 60 words. No long monologues, no headings, no bullet lists unless explicitly asked. Always quote prices when known, recommend a clear next step (book consultation or WhatsApp +44 7735 606447), and ask one short qualifying question per reply.`,
        },
      });
      if (error) throw error;
      const aiMessage: Message = { id: (Date.now() + 1).toString(), text: data.answer || "I apologise, I couldn't process that request.", isUser: false, timestamp: new Date() };
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
      "Please reply in 3 short lines only:",
      "1) one-line empathy,",
      "2) two best doctor-led options with price,",
      "3) one-line next step (book or WhatsApp +44 7735 606447).",
      "No long paragraphs, no bullet lists, under 60 words total.",
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

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-4 right-4 w-[min(96vw,24rem)] h-[min(86vh,600px)] bg-black rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-white/10"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-black via-gray-900 to-black p-4 text-white flex justify-between items-center border-b border-white/10">
              <div>
                <h3 className="font-bold text-lg">Aesthetic <span className="text-primary">Intelligence</span></h3>
                <p className="text-sm text-gray-400">Cosmedocs • Harley Street · {pageConfig.topic}</p>
              </div>
              <Button onClick={() => setIsOpen(false)} variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4 bg-black">
              <div className="space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl p-3 ${
                        message.isUser
                          ? "bg-gradient-to-r from-primary to-amber-600 text-black"
                          : "bg-white/5 border border-white/10 text-gray-100"
                      }`}
                    >
                      {message.isUser ? (
                        <p className="text-sm whitespace-pre-wrap">{formatMessage(message.text)}</p>
                      ) : (
                        <TypewriterText
                          className="text-sm whitespace-pre-wrap block"
                          text={formatMessage(message.text)}
                          enabled={message.id === messages[messages.length - 1]?.id && messages[messages.length - 1]?.isUser === false && message.id !== "1"}
                        />
                      )}
                      <span className={`text-xs mt-1 block ${message.isUser ? "text-black/70" : "text-gray-500"}`}>
                        {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </span>
                    </div>
                  </motion.div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-3">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Plan picker — quick concern + age */}
            {planStep !== "closed" && (
              <div className="px-4 pt-3 pb-1 bg-black border-t border-white/10">
                {planStep === "concern" && (
                  <>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-amber-400 mb-2">
                      What's bothering you?
                    </p>
                    <div className="grid grid-cols-1 gap-1.5 max-h-[42vh] overflow-y-auto pr-1">
                      {QUICK_CONCERNS.map((c) => (
                        <button
                          key={c.id}
                          onClick={() => {
                            setPlanConcern(c);
                            if (c.asksAge) setPlanStep("age");
                            else submitPlan(c);
                          }}
                          className="flex items-center gap-2.5 text-left px-3 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-amber-400/40 hover:bg-amber-400/[0.06] text-white text-sm transition-colors"
                        >
                          <span className="text-base leading-none">{c.emoji}</span>
                          <span className="flex-1">{c.label}</span>
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={() => setPlanStep("closed")}
                      className="mt-2 text-[11px] text-white/40 hover:text-white/70"
                    >
                      Skip — just chat
                    </button>
                  </>
                )}
                {planStep === "age" && planConcern && (
                  <>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-amber-400 mb-2">
                      Roughly how old are you?
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {AGE_BANDS.map((a) => (
                        <button
                          key={a}
                          onClick={() => submitPlan(planConcern, a)}
                          className="px-3 py-2 rounded-full bg-white/[0.04] border border-white/10 hover:border-amber-400/40 hover:bg-amber-400/[0.06] text-white text-xs"
                        >
                          {a}
                        </button>
                      ))}
                      <button
                        onClick={() => submitPlan(planConcern)}
                        className="px-3 py-2 rounded-full text-white/50 text-xs hover:text-white"
                      >
                        Prefer not to say
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Quick reply — open the structured picker */}
            {planStep === "closed" && (
              <div className="px-4 pt-2 bg-black">
                <button
                  onClick={openPlanPicker}
                  disabled={isLoading}
                  className="w-full rounded-full bg-gradient-to-r from-amber-400 to-amber-600 px-3 py-2 text-xs font-medium text-black hover:opacity-95 disabled:opacity-60"
                >
                  Start my plan
                </button>
              </div>
            )}


            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-black">
              <div className="flex gap-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                  disabled={isLoading}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={isLoading || !inputMessage.trim()}
                  className="bg-gradient-to-r from-primary to-amber-600 hover:from-amber-600 hover:to-primary text-black"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
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
