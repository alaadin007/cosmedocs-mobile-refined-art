import { useState, useRef, useEffect } from "react";
import { Send, Sparkles, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const suggestions = [
  "How much is Botox?",
  "Lip filler options",
  "How to book",
  "Non-surgical nose job",
  "Profhilo treatment",
  "What's the best treatment for wrinkles?",
];

export default function InlineAIChat() {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    const q = query.trim();
    if (!q || isLoading) return;

    const userMsg: ChatMessage = { role: "user", content: q };
    setMessages((prev) => [...prev, userMsg]);
    setQuery("");
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("ai-knowledge-chat", {
        body: { question: q, includeWebSearch: true },
      });

      if (error) throw error;

      const cleanAnswer = (data.answer || "Sorry, I couldn't find an answer. Please try again.")
        .replace(/[*#]+/g, "")
        .replace(/\n{3,}/g, "\n\n");

      setMessages((prev) => [...prev, { role: "assistant", content: cleanAnswer }]);
    } catch (error: any) {
      console.error("AI chat error:", error);

      let errorMessage = "Unable to get a response right now. Please try again.";
      if (error.message?.includes("429")) {
        errorMessage = "Too many requests — please wait a moment and try again.";
      } else if (error.message?.includes("402")) {
        errorMessage = "The AI service is temporarily unavailable. Please contact us directly.";
      }

      toast.error(errorMessage);
      setMessages((prev) => [...prev, { role: "assistant", content: errorMessage }]);
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

  const hasMessages = messages.length > 0;

  return (
    <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden flex flex-col" style={{ minHeight: "520px", maxHeight: "680px" }}>
      {/* Header */}
      <div className="flex items-center gap-3 px-6 py-4 border-b border-white/[0.06]">
        <div className="w-10 h-10 rounded-full bg-[#C9A050] flex items-center justify-center flex-shrink-0">
          <Sparkles className="w-5 h-5 text-black" />
        </div>
        <div>
          <p className="text-base font-medium text-white">Aesthetic Intelligence</p>
          <p className="text-xs text-white/40">Cosmedocs • Harley Street</p>
        </div>
      </div>

      {/* Messages / Welcome */}
      <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
        {!hasMessages && (
          <div className="flex flex-col items-center justify-center h-full py-6 space-y-6">
            <div className="text-center px-2">
              <p className="text-lg text-white/60 font-extralight leading-relaxed">
                Hello! I'm your AI aesthetics consultant. Ask me anything about treatments, prices, or booking.
              </p>
            </div>

            <div className="w-full">
              <p className="text-[11px] text-white/30 uppercase tracking-wider mb-3 text-center">
                Try Asking
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => setQuery(s)}
                    className="px-3 py-1.5 bg-white/[0.04] hover:bg-white/[0.08] text-white/50 hover:text-white/80 text-xs rounded-full border border-white/[0.08] transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                msg.role === "user"
                  ? "bg-[#C9A050] text-black rounded-br-sm"
                  : "bg-white/[0.05] text-white/80 rounded-tl-sm border border-white/[0.06]"
              }`}
            >
              {msg.content.split("\n").map((line, j) => (
                <p key={j} className={j > 0 ? "mt-2" : ""}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white/[0.05] border border-white/[0.06] rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#C9A050]/60 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
              <span className="w-2 h-2 bg-[#C9A050]/60 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
              <span className="w-2 h-2 bg-[#C9A050]/60 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="px-5 py-4 border-t border-white/[0.06]">
        <div className="flex items-end gap-3">
          <textarea
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask anything about treatments, prices, or booking..."
            rows={1}
            className="flex-1 resize-none bg-white/[0.04] border border-white/[0.08] focus:border-[#C9A050]/40 rounded-2xl px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none transition-colors max-h-32 overflow-y-auto"
            style={{ minHeight: "48px" }}
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !query.trim()}
            className="w-11 h-11 rounded-full bg-[#C9A050] hover:bg-[#B8903F] disabled:opacity-30 disabled:hover:bg-[#C9A050] flex items-center justify-center transition-colors flex-shrink-0"
          >
            {isLoading ? (
              <Loader2 className="w-4 h-4 text-black animate-spin" />
            ) : (
              <Send className="w-4 h-4 text-black" />
            )}
          </button>
        </div>
        <p className="text-[10px] text-white/20 text-center mt-2">
          Powered by AI • Responses may not always be accurate
        </p>
      </div>
    </div>
  );
}
