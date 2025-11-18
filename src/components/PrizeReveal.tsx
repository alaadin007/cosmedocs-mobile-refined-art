import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Sparkles, Star } from "lucide-react";
import { Button } from "./ui/button";
import { SpinForm } from "./SpinForm";

interface PrizeRevealProps {
  onComplete: (userDetails: { name: string; email: string }) => void;
}

export const PrizeReveal = ({ onComplete }: PrizeRevealProps) => {
  const [stage, setStage] = useState<'initial' | 'animating' | 'form'>('initial');

  const handleClick = () => {
    setStage('animating');
    setTimeout(() => {
      setStage('form');
    }, 3500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-12 relative overflow-hidden">
      {/* Ambient particles background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {stage === 'initial' && (
          <motion.div
            key="button"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-center space-y-8 relative z-10"
          >
            {/* Premium golden gift box */}
            <motion.div
              animate={{ 
                y: [0, -15, 0],
              }}
              transition={{ 
                duration: 2.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              className="inline-block relative"
            >
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 blur-3xl bg-gradient-to-br from-amber-400/40 via-yellow-500/40 to-orange-400/40 rounded-full scale-150"
                animate={{ 
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1.3, 1.5, 1.3],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              {/* Gift container */}
              <div className="relative w-40 h-40 mx-auto mb-6">
                {/* Shining rays */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-1 h-20 bg-gradient-to-t from-amber-400/50 to-transparent origin-bottom"
                    style={{
                      transform: `translate(-50%, -100%) rotate(${i * 45}deg)`,
                    }}
                    animate={{
                      opacity: [0.3, 0.7, 0.3],
                      scaleY: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                  />
                ))}
                
                {/* Main gift box */}
                <motion.div
                  className="absolute inset-0 rounded-3xl overflow-hidden"
                  animate={{
                    rotate: [-2, 2, -2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-500 relative shadow-2xl shadow-amber-500/50">
                    {/* Shine overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent"
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                    />
                    
                    {/* Ribbon */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-full bg-gradient-to-r from-red-500 via-red-600 to-red-500" />
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-10 bg-gradient-to-b from-red-500 via-red-600 to-red-500" />
                    
                    {/* Bow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <Gift className="w-16 h-16 text-red-600 drop-shadow-lg" />
                    </div>
                  </div>
                </motion.div>

                {/* Floating sparkles */}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: `${50 + Math.cos(i * 30 * Math.PI / 180) * 80}%`,
                      top: `${50 + Math.sin(i * 30 * Math.PI / 180) * 80}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      rotate: [0, 180, 360],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.15,
                    }}
                  >
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="space-y-4">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                Your Free Gift Awaits!
              </motion.h2>
              <p className="text-lg text-muted-foreground max-w-md mx-auto">
                Click below to reveal your exclusive Cosmedocs treatment
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={handleClick}
                size="lg"
                className="relative text-xl px-12 py-8 h-auto bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 hover:from-amber-600 hover:via-yellow-600 hover:to-amber-600 text-white font-bold shadow-2xl shadow-amber-500/50 border-2 border-amber-300 overflow-hidden group"
              >
                {/* Button shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 0.5,
                  }}
                />
                <Gift className="w-6 h-6 mr-3 relative z-10" />
                <span className="relative z-10">Click to Claim Your Free Gift!</span>
              </Button>
            </motion.div>
          </motion.div>
        )}

        {stage === 'animating' && (
          <motion.div
            key="animation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center space-y-8 relative z-10"
          >
            {/* Cracking golden egg animation */}
            <motion.div className="relative w-64 h-64 mx-auto">
              {/* Radial glow burst */}
              <motion.div
                className="absolute inset-0 rounded-full"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ 
                  scale: [0.5, 2.5, 2.5],
                  opacity: [0, 0.8, 0],
                }}
                transition={{ duration: 2, times: [0, 0.3, 1] }}
              >
                <div className="w-full h-full bg-gradient-radial from-amber-400 via-yellow-500 to-transparent blur-2xl" />
              </motion.div>

              {/* Egg splitting */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  scale: [1, 1.2, 1.1],
                }}
                transition={{ duration: 1.5 }}
              >
                {/* Left half */}
                <motion.div
                  className="absolute top-0 left-0 w-1/2 h-full origin-right"
                  animate={{
                    rotateY: [0, -45, -60],
                    x: [0, -20, -40],
                  }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                >
                  <div className="w-full h-full rounded-l-full bg-gradient-to-br from-amber-200 via-yellow-300 to-amber-400 border-4 border-amber-500 shadow-xl" />
                </motion.div>

                {/* Right half */}
                <motion.div
                  className="absolute top-0 right-0 w-1/2 h-full origin-left"
                  animate={{
                    rotateY: [0, 45, 60],
                    x: [0, 20, 40],
                  }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                >
                  <div className="w-full h-full rounded-r-full bg-gradient-to-bl from-amber-200 via-yellow-300 to-amber-400 border-4 border-amber-500 shadow-xl" />
                </motion.div>

                {/* Center gift reveal */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [0, 1.3, 1], opacity: [0, 1, 1] }}
                  transition={{ delay: 1, duration: 1 }}
                >
                  <div className="relative">
                    <motion.div
                      className="absolute inset-0 blur-xl bg-amber-400"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.8, 0.5] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                    <Sparkles className="w-24 h-24 text-amber-400 relative z-10" />
                  </div>
                </motion.div>
              </motion.div>

              {/* Explosion particles */}
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2"
                  initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
                  animate={{
                    scale: [0, 1, 0.5],
                    x: [(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 200],
                    y: [(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 200],
                    opacity: [1, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: 1 + Math.random() * 0.3,
                    ease: "easeOut",
                  }}
                >
                  <div className={`w-2 h-2 rounded-full ${
                    i % 3 === 0 ? 'bg-amber-400' : i % 3 === 1 ? 'bg-yellow-400' : 'bg-orange-400'
                  }`} />
                </motion.div>
              ))}

              {/* Large sparkle burst */}
              {[...Array(16)].map((_, i) => (
                <motion.div
                  key={`spark-${i}`}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{
                    scale: [0, 1.5, 0],
                    x: [0, Math.cos(i * 22.5 * Math.PI / 180) * 150],
                    y: [0, Math.sin(i * 22.5 * Math.PI / 180) * 150],
                    opacity: [1, 1, 0],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 1.8,
                    delay: 1.2 + (i * 0.03),
                    ease: "easeOut",
                  }}
                >
                  <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="space-y-2"
            >
              <motion.h3 
                className="text-3xl font-bold bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 bg-clip-text text-transparent"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
              >
                Revealing Your Prize...
              </motion.h3>
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
