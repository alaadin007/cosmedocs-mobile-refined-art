
import { motion, AnimatePresence } from "framer-motion";
import { X, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactOption {
  icon: LucideIcon;
  label: string;
  action: () => void;
  subtitle?: string;
}

interface LiquidGlassContactMenuProps {
  isOpen: boolean;
  onClose: () => void;
  options: ContactOption[];
}

export default function LiquidGlassContactMenu({ isOpen, onClose, options }: LiquidGlassContactMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          
          {/* Contact Menu Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Liquid glass background */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20" />
            
            <div className="relative p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">Get in Touch</h2>
                <Button
                  onClick={onClose}
                  variant="ghost"
                  size="icon"
                  className="text-white/70 hover:text-white hover:bg-white/10 rounded-full"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              {/* Contact Options */}
              <div className="space-y-2">
                {options.map((option, index) => (
                  <motion.button
                    key={option.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                    onClick={() => {
                      option.action();
                      onClose();
                    }}
                    className="w-full flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all duration-300 hover:scale-105 border border-white/10"
                  >
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                      <option.icon className="h-5 w-5 text-white/80" />
                    </div>
                    <div className="flex-1 text-left">
                      <span className="text-white/90 font-medium block">{option.label}</span>
                      {option.subtitle && (
                        <span className="text-white/60 text-sm block">{option.subtitle}</span>
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>
              
              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="text-white/60 text-xs text-center">
                  Choose how you'd like to connect with our team
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
