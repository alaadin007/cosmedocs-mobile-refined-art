import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { SpinForm } from "./SpinForm";

interface PrizeRevealProps {
  onComplete: (userDetails: { name: string; email: string }) => void;
}

export const PrizeReveal = ({ onComplete }: PrizeRevealProps) => {
  const [stage, setStage] = useState<'initial' | 'animating' | 'form'>('initial');

  const handleClick = () => {
    setStage('animating');
    // After animation completes, show form
    setTimeout(() => {
      setStage('form');
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-12">
      <AnimatePresence mode="wait">
        {stage === 'initial' && (
          <motion.div
            key="button"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="text-center space-y-8"
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="inline-block"
            >
              <div className="w-32 h-32 mx-auto mb-6 relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Gift className="w-16 h-16 text-primary" />
                </div>
              </div>
            </motion.div>

            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Ready for Your Gift?
              </h2>
              <p className="text-lg text-muted-foreground max-w-md mx-auto">
                Click below to reveal your exclusive Cosmedocs treatment
              </p>
            </div>

            <Button
              onClick={handleClick}
              size="lg"
              className="text-xl px-12 py-8 h-auto bg-gradient-to-r from-primary via-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg shadow-primary/20"
            >
              <Gift className="w-6 h-6 mr-3" />
              Click to Claim Your Free Gift!
            </Button>
          </motion.div>
        )}

        {stage === 'animating' && (
          <motion.div
            key="animation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center space-y-8"
          >
            {/* Gift Box Animation */}
            <motion.div className="relative w-48 h-48 mx-auto">
              {/* Box */}
              <motion.div
                animate={{
                  y: [0, -20, 0, -15, 0, -10, 0],
                  rotate: [-5, 5, -5, 3, -3, 0],
                  scale: [1, 1.1, 1, 1.05, 1, 1.02, 1]
                }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div className="w-full h-full bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl border-4 border-primary shadow-2xl shadow-primary/20 relative overflow-hidden">
                  {/* Ribbon */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-full bg-primary/40" />
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-8 bg-primary/40" />
                  
                  {/* Gift icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Gift className="w-20 h-20 text-primary" />
                  </div>
                </div>
              </motion.div>

              {/* Sparkles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
                  animate={{
                    scale: [0, 1, 0],
                    x: [0, (Math.cos(i * 45 * Math.PI / 180) * 100)],
                    y: [0, (Math.sin(i * 45 * Math.PI / 180) * 100)],
                    opacity: [1, 1, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    delay: 1.5 + (i * 0.05),
                    ease: "easeOut"
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <Sparkles className="w-6 h-6 text-primary" />
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="space-y-2"
            >
              <h3 className="text-2xl font-bold text-primary animate-pulse">
                Revealing Your Prize...
              </h3>
            </motion.div>
          </motion.div>
        )}

        {stage === 'form' && (
          <motion.div
            key="form"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-2xl space-y-6"
          >
            <div className="text-center space-y-4 mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
              >
                <Sparkles className="w-16 h-16 text-primary mx-auto" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                Congratulations!
              </h2>
              <p className="text-xl text-muted-foreground">
                You've won a free Cosmedocs gift!
              </p>
              <p className="text-lg">
                Enter your details below to unlock your prize
              </p>
            </div>

            <SpinForm onSubmit={onComplete} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
