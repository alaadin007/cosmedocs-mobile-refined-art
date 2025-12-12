import { memo } from 'react';

// Pure CSS animated dots - no JS runtime cost
const AnimatedDots = memo(function AnimatedDots() {
  const dotPositions = [
    { x: '30%', y: '15%', delay: '0s' },
    { x: '50%', y: '10%', delay: '0.5s' },
    { x: '70%', y: '15%', delay: '1s' },
    { x: '35%', y: '35%', delay: '1.5s' },
    { x: '45%', y: '30%', delay: '2s' },
    { x: '55%', y: '30%', delay: '2.5s' },
    { x: '65%', y: '35%', delay: '3s' },
    { x: '25%', y: '50%', delay: '3.5s' },
    { x: '75%', y: '50%', delay: '4s' },
    { x: '50%', y: '50%', delay: '4.5s' },
    { x: '40%', y: '65%', delay: '5s' },
    { x: '50%', y: '70%', delay: '5.5s' },
    { x: '60%', y: '65%', delay: '6s' },
    { x: '35%', y: '80%', delay: '6.5s' },
    { x: '65%', y: '80%', delay: '7s' },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <style>{`
        @keyframes dot-pulse {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 0.6; transform: scale(1); }
        }
        .animated-dot {
          animation: dot-pulse 3s ease-in-out infinite;
        }
      `}</style>
      {dotPositions.map((pos, i) => (
        <div
          key={i}
          className="animated-dot absolute w-2 h-2 rounded-full bg-white"
          style={{
            left: pos.x,
            top: pos.y,
            animationDelay: pos.delay,
          }}
        />
      ))}
    </div>
  );
});

export default AnimatedDots;
