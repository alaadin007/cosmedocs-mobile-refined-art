
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface MenuItem {
  name: string;
  path: string;
}

interface LiquidGlassMenuProps {
  menuItems: MenuItem[];
  onItemClick: () => void;
  onContactClick: () => void;
}

export default function LiquidGlassMenu({ menuItems, onItemClick, onContactClick }: LiquidGlassMenuProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="h-full"
    >
      {/* Liquid glass background */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-xl" />
      
      <div className="relative flex flex-col h-full">
        <div className="px-6 py-6 border-b border-white/10">
          <div className="text-xl font-bold text-white">
            COSMEDOCS
          </div>
          <p className="text-xs mt-1 text-gray-300">Harley Street Since 2007, 1M+ Injection</p>
        </div>
        
        <div className="px-6 py-8 flex flex-col space-y-1 flex-1">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05, duration: 0.2 }}
            >
              <Link
                to={item.path}
                className="block text-white/90 hover:text-white py-3 px-4 rounded-xl transition-all duration-300 hover:bg-white/10 hover:scale-105"
                onClick={onItemClick}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="px-6 py-6 border-t border-white/10">
          <button 
            onClick={() => window.open("https://med.as.me/harleystreet", "_blank")}
            className="w-full bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm rounded-2xl px-6 py-3 transition-all duration-300 hover:scale-105 border border-white/20"
          >
            Book Consultation
          </button>
        </div>
      </div>
    </motion.div>
  );
}
