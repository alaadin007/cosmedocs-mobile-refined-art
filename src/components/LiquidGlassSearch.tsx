
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X, Loader2, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface LiquidGlassSearchProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenChatbot?: () => void;
}

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export default function LiquidGlassSearch({ isOpen, onClose }: LiquidGlassSearchProps) {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
    if (!isOpen) {
      setMessages([]);
      setQuery("");
    }
  }, [isOpen]);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    const q = query.trim();
    if (!q || isLoading) return;

    const userMsg: ChatMessage = { role: "user", content: q };
    setMessages(prev => [...prev, userMsg]);
    setQuery("");
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('ai-knowledge-chat', {
        body: {
          question: q,
          includeWebSearch: true
        }
      });

      if (error) throw error;

      const cleanAnswer = (data.answer || "Sorry, I couldn't find an answer. Please try again.")
        .replace(/[*#]+/g, '')
        .replace(/\n{3,}/g, '\n\n');

      setMessages(prev => [...prev, { role: "assistant", content: cleanAnswer }]);
    } catch (error) {
      console.error('Error getting AI response:', error);
      toast.error("Unable to get a response right now. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestion = (text: string) => {
    setQuery(text);
    setTimeout(() => handleSend(), 0);
  };

  const hasMessages = messages.length > 0;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Chat Container */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-md mx-4 sm:mx-auto flex flex-col bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/50"
            style={{ maxHeight: 'min(90vh, 720px)', minHeight: '480px' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#C9A050] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-black" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Aesthetic Intelligence</p>
                  <p className="text-[11px] text-white/40">Cosmedocs • Harley Street</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4" style={{ minHeight: '200px' }}>
              {!hasMessages && (
                <div className="flex flex-col items-center justify-center h-full py-8 space-y-6">
                  {/* Welcome */}
                  <div className="text-center px-4">
                    <p className="text-base text-white/70 leading-relaxed">
                      Hello! I'm your AI aesthetics consultant. Ask me anything about treatments, prices, or booking.
                    </p>
                  </div>

                  {/* Suggestions */}
                  <div className="w-full">
                    <p className="text-[11px] text-white/30 uppercase tracking-wider mb-3 text-center">Try asking</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {[
                        "How much is Botox?",
                        "Lip filler options",
                        "How to book",
                        "Non-surgical nose job",
                      ].map((s) => (
                        <button
                          key={s}
                          onClick={() => {
                            setQuery(s);
                          }}
                          className="px-3 py-1.5 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white/80 text-xs rounded-full border border-white/10 transition-colors"
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Chat Messages */}
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-[#C9A050] text-black rounded-br-sm"
                        : "bg-white/5 text-white/80 rounded-tl-sm"
                    }`}
                  >
                    {msg.content.split('\n').map((line, j) => (
                      <p key={j} className={j > 0 ? "mt-2" : ""}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Loading indicator */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-2">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-[#C9A050]/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-[#C9A050]/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-[#C9A050]/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area — WhatsApp-style */}
            <div className="px-4 py-3 border-t border-white/10 bg-neutral-900/80">
              <div className="flex items-end gap-2">
                <textarea
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask anything..."
                  rows={1}
                  className="flex-1 resize-none bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#C9A050]/40 transition-colors max-h-32 overflow-y-auto"
                  style={{ minHeight: '44px' }}
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !query.trim()}
                  className="w-10 h-10 rounded-full bg-[#C9A050] hover:bg-[#B8924A] disabled:opacity-30 disabled:hover:bg-[#C9A050] flex items-center justify-center transition-colors flex-shrink-0"
                >
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 text-black animate-spin" />
                  ) : (
                    <Send className="w-4 h-4 text-black" />
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
