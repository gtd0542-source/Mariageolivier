"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { useMounted } from "@/lib/useMounted";

type FloatingPetalsProps = {
  count?: number;
  className?: string;
};

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export function FloatingPetals({ count = 16, className }: FloatingPetalsProps) {
  const mounted = useMounted();

  const petals = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const left = seededRandom(i * 7.13) * 100;
        const delay = seededRandom(i * 3.71) * 6;
        const duration = 10 + seededRandom(i * 5.27) * 8;
        const size = 10 + seededRandom(i * 1.91) * 14;
        const drift = (seededRandom(i * 9.37) - 0.5) * 120;
        const rotateStart = seededRandom(i * 2.63) * 360;
        return { id: i, left, delay, duration, size, drift, rotateStart };
      }),
    [count]
  );

  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}
    >
      {petals.map((petal) => (
        <motion.span
          key={petal.id}
          className="absolute top-[-5%] rounded-[60%_40%_60%_40%] bg-gradient-to-br from-gold-light to-sage opacity-70"
          style={{
            left: `${petal.left}%`,
            width: petal.size,
            height: petal.size * 0.8,
          }}
          initial={{ y: "-10vh", x: 0, rotate: petal.rotateStart, opacity: 0 }}
          animate={{
            y: "110vh",
            x: petal.drift,
            rotate: petal.rotateStart + 180,
            opacity: [0, 0.8, 0.8, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
