import { useState } from "react";
import { Brain } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const quizQuestions: Record<string, QuizQuestion> = {
  "why-treatments-fail": {
    question: "What causes sagging first?",
    options: ["Skin loosening", "Fat loss", "Bone resorption"],
    correctIndex: 2,
    explanation: "Bone resorption begins in your 30s, causing the foundation to shrink. Fat and skin follow gravity once the structure underneath diminishes.",
  },
  "skin-not-surface": {
    question: "Where does skin hydration actually come from?",
    options: ["Moisturiser on top", "Water from dermis below", "External humidity"],
    correctIndex: 1,
    explanation: "True hydration rises from the dermis. When dead cells block this pathway, adding more cream on top won't help — you need to unblock first.",
  },
  "structure-before-lift": {
    question: "Why do some skin tightening treatments fail?",
    options: ["Wrong device brand", "No volume underneath", "Not enough sessions"],
    correctIndex: 1,
    explanation: "You can't tighten what isn't supported. Without volume beneath, you're pulling on an empty tent.",
  },
  "volume-story": {
    question: "What primarily causes under-eye hollows?",
    options: ["Thin skin", "Fat pad descent", "Dark pigment"],
    correctIndex: 1,
    explanation: "The malar fat pad descends and separates from the orbital fat, creating a visible trough. The skin above simply reveals what's happening below.",
  },
};

export default function PauseAndThink({ principleId }: { principleId: string }) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const quiz = quizQuestions[principleId];

  if (!quiz) return null;

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    setRevealed(true);
  };

  return (
    <div className="my-10 bg-white/[0.03] border border-[#C9A050]/20 rounded-2xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-5">
        <Brain className="w-5 h-5 text-[#C9A050]" />
        <span className="font-medium text-sm text-[#C9A050]">Pause & Think</span>
      </div>

      <p className="text-lg font-light text-white/80 mb-6">{quiz.question}</p>

      <div className="space-y-3">
        {quiz.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            disabled={revealed}
            className={`w-full text-left px-4 py-3 rounded-xl border transition-all duration-300 text-sm font-light ${
              revealed
                ? index === quiz.correctIndex
                  ? "bg-green-900/30 border-green-500/50 text-green-300"
                  : selectedAnswer === index
                  ? "bg-red-900/30 border-red-500/50 text-red-300"
                  : "bg-white/[0.02] border-white/[0.06] text-white/30"
                : "bg-white/[0.02] border-white/[0.08] hover:border-[#C9A050]/40 hover:bg-[#C9A050]/5 text-white/60"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <AnimatePresence>
        {revealed && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-6 p-4 bg-white/[0.03] rounded-xl border border-[#C9A050]/20"
          >
            <p className="text-white/50 text-sm font-light leading-relaxed">{quiz.explanation}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
