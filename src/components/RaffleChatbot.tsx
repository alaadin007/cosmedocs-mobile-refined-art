import { useState } from "react";
import { Gift } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { RafflePopup } from "./RafflePopup";
const RaffleChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  return <>
      <AnimatePresence>
        {!isOpen}
      </AnimatePresence>

      <RafflePopup open={isOpen} onOpenChange={setIsOpen} />
    </>;
};
export default RaffleChatbot;