
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedDots = () => {
  const [activeDots, setActiveDots] = useState<number[]>([]);

  // Face-like dot positions (relative to container)
  const dotPositions = [
    // Forehead area
    { x: '30%', y: '15%', delay: 0 },
    { x: '50%', y: '10%', delay: 0.5 },
    { x: '70%', y: '15%', delay: 1 },
    
    // Eye area
    { x: '35%', y: '35%', delay: 1.5 },
    { x: '45%', y: '30%', delay: 2 },
    { x: '55%', y: '30%', delay: 2.5 },
    { x: '65%', y: '35%', delay: 3 },
    
    // Cheek area
    { x: '25%', y: '50%', delay: 3.5 },
    { x: '75%', y: '50%', delay: 4 },
    
    // Nose area
    { x: '50%', y: '50%', delay: 4.5 },
    
    // Mouth area
    { x: '40%', y: '65%', delay: 5 },
    { x: '50%', y: '70%', delay: 5.5 },
    { x: '60%', y: '65%', delay: 6 },
    
    // Jaw area
    { x: '35%', y: '80%', delay: 6.5 },
    { x: '65%', y: '80%', delay: 7 },
    
    // Side points
    { x: '20%', y: '40%', delay: 7.5 },
    { x: '80%', y: '40%', delay: 8 },
    { x: '15%', y: '60%', delay: 8.5 },
    { x: '85%', y: '60%', delay: 9 },
  ];

  useEffect(() => {
    const intervals: NodeJS.Timeout[] = [];

    dotPositions.forEach((_, index) => {
      const interval = setInterval(() => {
        setActiveDots(prev => {
          const isActive = prev.includes(index);
          if (isActive) {
            return prev.filter(i => i !== index);
          } else {
            return [...prev, index];
          }
        });
      }, Math.random() * 3000 + 1000); // Random interval between 1-4 seconds

      intervals.push(interval);
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {dotPositions.map((position, index) => (
        <motion.div
          key={index}
          className="absolute w-2 h-2 rounded-full bg-white"
          style={{
            left: position.x,
            top: position.y,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: activeDots.includes(index) ? 0.6 : 0,
            scale: activeDots.includes(index) ? 1 : 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedDots;
