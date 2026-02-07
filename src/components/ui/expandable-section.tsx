import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface ExpandableSectionProps {
  /** Always-visible preview content */
  preview: React.ReactNode;
  /** Content revealed on expand */
  children: React.ReactNode;
  /** Label for the toggle button */
  label?: string;
  /** Label when expanded */
  collapseLabel?: string;
}

const ExpandableSection = ({
  preview,
  children,
  label = "Read more",
  collapseLabel = "Show less",
}: ExpandableSectionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {preview}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mt-4 inline-flex items-center gap-1.5 text-[#C9A050]/80 hover:text-[#C9A050] text-xs tracking-wide uppercase transition-colors duration-200 group"
      >
        {isOpen ? collapseLabel : label}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-3.5 h-3.5" />
        </motion.span>
      </button>
    </div>
  );
};

export default ExpandableSection;
