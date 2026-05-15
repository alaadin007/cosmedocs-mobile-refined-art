import { motion } from "framer-motion";

/**
 * Animated hyaluronic acid droplet graphic for the Liquid Facelift card front.
 * Golden droplets fall onto cheek, mid-face, jaw and chin points of a face
 * silhouette and "penetrate" with an absorbing ripple.
 */
const HADropletFace = () => {
  // 4 anatomical landing points on the face (viewBox 0 0 200 240)
  const points = [
    { id: "cheek-l",  x: 70,  y: 118, delay: 0.0 },
    { id: "cheek-r",  x: 130, y: 118, delay: 0.7 },
    { id: "midface",  x: 100, y: 138, delay: 1.4 },
    { id: "jaw",      x: 135, y: 178, delay: 2.1 },
    { id: "chin",     x: 100, y: 198, delay: 2.8 },
  ];
  const cycle = 3.6; // total loop seconds per droplet

  return (
    <svg
      viewBox="0 0 200 240"
      className="w-40 h-48 sm:w-44 sm:h-52"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ha-drop-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F0D78C" />
          <stop offset="60%" stopColor="#C9A050" />
          <stop offset="100%" stopColor="#8a6a2c" />
        </linearGradient>
        <radialGradient id="ha-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F0D78C" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#F0D78C" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Face silhouette — minimal, line-only */}
      <g stroke="#C9A050" strokeOpacity="0.55" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        {/* face outline */}
        <path d="M100 40
                 C 60 40, 42 78, 46 120
                 C 48 158, 70 198, 100 212
                 C 130 198, 152 158, 154 120
                 C 158 78, 140 40, 100 40 Z" />
        {/* brow line */}
        <path d="M68 88 Q 82 80 96 86" opacity="0.6" />
        <path d="M104 86 Q 118 80 132 88" opacity="0.6" />
        {/* nose */}
        <path d="M100 96 L 96 130 L 100 138 L 104 130 L 100 96" opacity="0.5" />
        {/* lips */}
        <path d="M86 158 Q 100 152 114 158 Q 100 166 86 158 Z" opacity="0.55" />
      </g>

      {/* Falling droplets + landing absorption per point */}
      {points.map((p) => (
        <g key={p.id}>
          {/* Drop — falls from top to landing point */}
          <motion.g
            initial={false}
            animate={{
              y: [-90, p.y - 8, p.y - 2],
              opacity: [0, 1, 1, 0],
              scale: [0.85, 1, 0.6],
            }}
            transition={{
              duration: 1.6,
              times: [0, 0.7, 0.85, 1],
              ease: ["easeIn", "easeOut", "easeOut"] as any,
              repeat: Infinity,
              repeatDelay: cycle - 1.6 + (points.length - 1) * 0.0,
              delay: p.delay,
            }}
            style={{ transformOrigin: `${p.x}px 0px` }}
          >
            {/* teardrop shape centred at (p.x, 0); we translate via y animation */}
            <path
              d={`M${p.x} -10
                  C ${p.x - 5} -2, ${p.x - 5} 6, ${p.x} 10
                  C ${p.x + 5} 6, ${p.x + 5} -2, ${p.x} -10 Z`}
              fill="url(#ha-drop-grad)"
            />
            <ellipse cx={p.x - 1.5} cy={-2} rx="1.4" ry="2.2" fill="#FFFFFF" opacity="0.7" />
          </motion.g>

          {/* Landing splash — small ring */}
          <motion.circle
            cx={p.x}
            cy={p.y}
            r={2}
            stroke="#F0D78C"
            strokeWidth="1.4"
            fill="none"
            initial={false}
            animate={{
              r: [2, 10, 14],
              opacity: [0, 0.9, 0],
            }}
            transition={{
              duration: 1.0,
              ease: "easeOut",
              repeat: Infinity,
              repeatDelay: cycle - 1.0,
              delay: p.delay + 1.4,
            }}
          />

          {/* Penetration glow — fades in then out underneath the skin */}
          <motion.circle
            cx={p.x}
            cy={p.y}
            r={14}
            fill="url(#ha-glow)"
            initial={false}
            animate={{ opacity: [0, 0.85, 0] }}
            transition={{
              duration: 1.4,
              ease: "easeOut",
              repeat: Infinity,
              repeatDelay: cycle - 1.4,
              delay: p.delay + 1.5,
            }}
          />

          {/* Anchor pin — always visible, marks the landing point */}
          <circle cx={p.x} cy={p.y} r={1.4} fill="#C9A050" opacity="0.7" />
        </g>
      ))}
    </svg>
  );
};

export default HADropletFace;
