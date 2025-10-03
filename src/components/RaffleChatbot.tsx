import { useState } from "react";
import { Gift } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { RafflePopup } from "./RafflePopup";

const RaffleChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ delay: 3 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
            aria-label="Play our raffle and win"
          >
            <Gift className="w-8 h-8 text-white group-hover:rotate-12 transition-transform" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      <RafflePopup open={isOpen} onOpenChange={setIsOpen} />
    </>
  );
};

export default RaffleChatbot;
