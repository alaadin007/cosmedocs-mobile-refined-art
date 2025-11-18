import { useState } from "react";
import { Button } from "./ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const PRIZES = [
  "Vitamin C20 Sample Size",
  "Retinol Plus Sample Size",
  "15-Minute Chemical Peel",
  "Microneedling Session",
  "Laser Hair Removal (1 Area)",
  "Platinum HydraFacial",
  "Microneedling with Exosomes",
  "Full Body Laser Hair Removal"
];

const COLORS = [
  "#1a1a1a", // black
  "#ffffff", // white
  "#2a2a2a", // dark grey
  "#f5f5f5", // light grey
  "#1a1a1a",
  "#ffffff",
  "#B8860B", // gold for mega prizes
  "#B8860B", // gold for mega prizes
];

interface SpinWheelProps {
  userDetails: {
    name: string;
    email: string;
    phone: string;
    postcode: string;
  };
  onComplete: (result: any) => void;
}

export const SpinWheel = ({ userDetails, onComplete }: SpinWheelProps) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const { toast } = useToast();

  const handleSpin = async () => {
    if (isSpinning) return;

    setIsSpinning(true);

    try {
      // Call edge function to determine prize
      const { data, error } = await supabase.functions.invoke('spin-to-win', {
        body: userDetails
      });

      if (error) throw error;

      // Calculate which segment the prize is on
      const prizeIndex = PRIZES.findIndex(p => p === data.prize);
      const segmentAngle = 360 / PRIZES.length;
      const targetAngle = 360 - (prizeIndex * segmentAngle + segmentAngle / 2);
      
      // Add multiple full rotations for dramatic effect
      const finalRotation = rotation + 1440 + targetAngle;

      setRotation(finalRotation);

      // Wait for spin animation to complete
      setTimeout(() => {
        setIsSpinning(false);
        onComplete(data);
      }, 4000);

    } catch (error: any) {
      console.error('Spin error:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to process spin. Please try again.",
        variant: "destructive"
      });
      setIsSpinning(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-8 py-8">
      {/* Wheel Container */}
      <div className="relative w-full max-w-md aspect-square">
        {/* Pointer */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 z-10">
          <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-t-[30px] border-l-transparent border-r-transparent border-t-primary drop-shadow-lg" />
        </div>

        {/* Wheel */}
        <motion.div
          className="relative w-full h-full rounded-full border-8 border-primary shadow-2xl overflow-hidden"
          style={{
            rotate: rotation,
          }}
          transition={{
            duration: 4,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          {/* Center circle */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-16 h-16 rounded-full bg-primary border-4 border-background shadow-xl z-10" />
          </div>

          {/* Prize segments */}
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {PRIZES.map((prize, index) => {
              const angle = (360 / PRIZES.length) * index;
              const nextAngle = (360 / PRIZES.length) * (index + 1);
              const midAngle = (angle + nextAngle) / 2;
              
              // Convert to radians for text positioning
              const radians = (midAngle - 90) * (Math.PI / 180);
              const textRadius = 70;
              const x = 100 + textRadius * Math.cos(radians);
              const y = 100 + textRadius * Math.sin(radians);

              return (
                <g key={index}>
                  {/* Segment path */}
                  <path
                    d={`M 100 100 L ${100 + 100 * Math.cos((angle - 90) * Math.PI / 180)} ${100 + 100 * Math.sin((angle - 90) * Math.PI / 180)} A 100 100 0 0 1 ${100 + 100 * Math.cos((nextAngle - 90) * Math.PI / 180)} ${100 + 100 * Math.sin((nextAngle - 90) * Math.PI / 180)} Z`}
                    fill={COLORS[index]}
                    stroke="#B8860B"
                    strokeWidth="1"
                  />
                  
                  {/* Prize text */}
                  <text
                    x={x}
                    y={y}
                    fill={index === 0 || index === 2 || index === 4 ? "#ffffff" : "#000000"}
                    fontSize="5"
                    fontWeight="600"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    transform={`rotate(${midAngle}, ${x}, ${y})`}
                    className="pointer-events-none select-none"
                  >
                    <tspan x={x} dy="-3">{prize.split(' ').slice(0, 2).join(' ')}</tspan>
                    <tspan x={x} dy="6">{prize.split(' ').slice(2).join(' ')}</tspan>
                  </text>
                </g>
              );
            })}
          </svg>
        </motion.div>
      </div>

      {/* Spin Button */}
      <Button
        onClick={handleSpin}
        disabled={isSpinning}
        size="lg"
        className="text-lg px-12 py-6 bg-gradient-to-r from-primary via-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg shadow-primary/20"
      >
        {isSpinning ? "Spinning..." : "Click to Spin & Reveal Your Prize"}
      </Button>

      {isSpinning && (
        <p className="text-sm text-muted-foreground animate-pulse">
          Determining your prize...
        </p>
      )}
    </div>
  );
};