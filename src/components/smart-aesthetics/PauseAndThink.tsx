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
  "three-cell-philosophy": {
    question: "Why should skincare target all three cell types?",
    options: ["It's a marketing strategy", "Most concerns involve at least two cell types", "One product can't contain enough ingredients"],
    correctIndex: 1,
    explanation: "Most visible skin concerns — ageing, dullness, pigmentation — involve dysfunction in at least two of the three key cell types. Addressing only one creates incomplete, short-lived results.",
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
    <div className="my-10 bg-white border border-[#C9A050]/20 rounded-2xl p-6 md:p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-5">
        <Brain className="w-5 h-5 text-[#C9A050]" />
        <span className="font-medium text-sm text-[#C9A050]">Pause & Think</span>
      </div>

      <p className="text-lg font-light text-gray-800 mb-6">{quiz.question}</p>

      <div className="space-y-3">
        {quiz.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            disabled={revealed}
            className={`w-full text-left px-4 py-3 rounded-xl border transition-all duration-300 text-sm font-light ${
              revealed
                ? index === quiz.correctIndex
                  ? "bg-green-50 border-green-300 text-green-700"
                  : selectedAnswer === index
                  ? "bg-red-50 border-red-300 text-red-600"
                  : "bg-gray-50 border-gray-200 text-gray-400"
                : "bg-gray-50 border-gray-200 hover:border-[#C9A050]/40 hover:bg-amber-50 text-gray-600"
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
            className="mt-6 p-4 bg-amber-50 rounded-xl border border-[#C9A050]/20"
          >
            <p className="text-gray-600 text-sm font-light leading-relaxed">{quiz.explanation}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
