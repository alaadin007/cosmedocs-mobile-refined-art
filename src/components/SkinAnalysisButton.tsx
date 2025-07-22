import { motion } from "framer-motion";
import { Scan } from "lucide-react";

const SkinAnalysisButton = () => {
  const handleSkinAnalysis = () => {
    // For now, we'll just show a toast message
    // In the future, this could open a skin analysis wizard
    window.open("https://cosmedocs.com/comprehensive-facial-assessment", "_blank");
  };

  return (
    <motion.button
      onClick={handleSkinAnalysis}
      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30 border border-purple-500/30 rounded-full text-sm text-gray-300 hover:text-white transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Scan className="w-4 h-4" />
      <span>Skin Analysis</span>
    </motion.button>
  );
};

export default SkinAnalysisButton;