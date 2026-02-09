import { Lightbulb, X } from "lucide-react";
import { motion } from "framer-motion";

interface Principle {
  id: string;
  title: string;
  subtitle: string;
}

interface SmartAestheticsSidebarProps {
  principles: Principle[];
  currentIndex: number;
  onSelect: (index: number) => void;
  onClose?: () => void;
  isMobile?: boolean;
}

export default function SmartAestheticsSidebar({
  principles,
  currentIndex,
  onSelect,
  onClose,
  isMobile = false,
}: SmartAestheticsSidebarProps) {
  const handleSelect = (index: number) => {
    onSelect(index);
    if (isMobile && onClose) onClose();
  };

  return (
    <div className="p-5">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2.5">
          <Lightbulb className="h-5 w-5 text-[#C9A050]" />
          <h2 className="font-medium text-base text-white">Smart Aesthetics</h2>
        </div>
        {isMobile && onClose && (
          <button onClick={onClose} className="text-white/40 hover:text-white transition-colors" aria-label="Close menu">
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Start Here */}
      <button
        onClick={() => handleSelect(-1)}
        className={`w-full text-left px-4 py-3 rounded-xl mb-5 transition-all duration-300 ${
          currentIndex === -1
            ? "bg-[#C9A050] text-black"
            : "bg-[#C9A050]/10 hover:bg-[#C9A050]/20 text-[#C9A050]"
        }`}
      >
        <div className="font-medium text-sm">Start Here</div>
        <div className="text-xs opacity-70 mt-0.5">The entry point</div>
      </button>

      {/* Principles */}
      <p className="text-[10px] font-medium text-white/30 uppercase tracking-[0.2em] px-4 mb-3">
        Principles
      </p>
      <div className="space-y-0.5">
        {principles.map((principle, idx) => (
          <button
            key={principle.id}
            onClick={() => handleSelect(idx)}
            className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
              currentIndex === idx
                ? "bg-white/10 text-white"
                : "hover:bg-white/5 text-white/50"
            }`}
          >
            <div className="font-medium text-sm">{principle.title}</div>
            <div className="text-xs text-white/30 mt-0.5">{principle.subtitle}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
