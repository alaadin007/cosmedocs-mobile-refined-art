import { motion } from 'framer-motion';

interface VoiceWaveformProps {
  isActive: boolean;
  isSpeaking?: boolean;
}

const VoiceWaveform = ({ isActive, isSpeaking }: VoiceWaveformProps) => {
  const bars = 5;
  const color = isSpeaking ? '#C9A050' : '#ffffff';

  return (
    <div className="flex items-center justify-center gap-1 h-8">
      {Array.from({ length: bars }).map((_, i) => (
        <motion.div
          key={i}
          className="w-1 rounded-full"
          style={{ backgroundColor: color }}
          animate={
            isActive
              ? {
                  height: [8, 20 + Math.random() * 12, 8],
                  opacity: [0.6, 1, 0.6],
                }
              : { height: 4, opacity: 0.3 }
          }
          transition={
            isActive
              ? {
                  duration: 0.6 + Math.random() * 0.4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.1,
                }
              : { duration: 0.3 }
          }
        />
      ))}
    </div>
  );
};

export default VoiceWaveform;
