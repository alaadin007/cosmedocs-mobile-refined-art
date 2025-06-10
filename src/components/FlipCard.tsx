
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface FlipCardProps {
  title: string;
  description: string;
  details: string[];
  beforeAfterImage: string;
  beforeAfterAlt: string;
}

const FlipCard = ({ title, description, details, beforeAfterImage, beforeAfterAlt }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative w-full h-80 perspective-1000 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front of card */}
        <motion.div
          className="absolute inset-0 backface-hidden bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:bg-gray-900/70 transition-all duration-300"
        >
          <h3 className="text-xl font-light mb-4 text-white">{title}</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>
          <ul className="space-y-2">
            {details.map((detail, idx) => (
              <li key={idx} className="flex items-center text-sm text-gray-400">
                <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                {detail}
              </li>
            ))}
          </ul>
          <div className="absolute bottom-4 right-4 text-xs text-gray-500">
            Hover to see results →
          </div>
        </motion.div>

        {/* Back of card */}
        <motion.div
          className="absolute inset-0 backface-hidden bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-4 hover:bg-gray-900/70 transition-all duration-300"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <h3 className="text-lg font-light mb-3 text-white text-center">{title} Results</h3>
          <div className="flex flex-col items-center h-full">
            <img 
              src={beforeAfterImage}
              alt={beforeAfterAlt}
              className="rounded-xl w-full max-h-60 object-cover border border-gray-700"
            />
            <p className="text-xs text-gray-400 mt-3 text-center">
              Before & After: Natural results with our invisible art philosophy
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FlipCard;
