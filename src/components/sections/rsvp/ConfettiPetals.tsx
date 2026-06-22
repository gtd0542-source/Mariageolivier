"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

const colors = ["#C9A86A", "#9CAF88", "#E8DDC7", "#87A08F", "#E3CF9D"];

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export function ConfettiPetals({ count = 26 }: { count?: number }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const angle = (i / count) * Math.PI * 2 + seededRandom(i) * 0.6;
        const distance = 120 + seededRandom(i * 1.5) * 180;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance - 60;
        const rotate = seededRandom(i * 2.3) * 360;
        const size = 8 + seededRandom(i * 3.1) * 10;
        const color = colors[i % colors.length];
        const delay = seededRandom(i * 4.7) * 0.3;
        return { id: i, x, y, rotate, size, color, delay };
      }),
    [count]
  );

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 flex items-center justify-center"
    >
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-[60%_40%_60%_40%]"
          style={{ width: p.size, height: p.size * 0.8, backgroundColor: p.color }}
          initial={{ x: 0, y: 0, opacity: 1, rotate: 0, scale: 0.4 }}
          animate={{ x: p.x, y: p.y, opacity: 0, rotate: p.rotate, scale: 1 }}
          transition={{ duration: 1.6, delay: p.delay, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}
