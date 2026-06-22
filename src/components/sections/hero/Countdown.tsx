"use client";

import { motion } from "framer-motion";
import { useCountdown } from "@/lib/useCountdown";

type CountdownProps = {
  targetIso: string;
  className?: string;
};

const units: Array<{ key: "days" | "hours" | "minutes" | "seconds"; label: string }> = [
  { key: "days", label: "Jours" },
  { key: "hours", label: "Heures" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Secondes" },
];

export function Countdown({ targetIso, className }: CountdownProps) {
  const parts = useCountdown(targetIso);

  return (
    <div
      className={`flex items-center justify-center gap-3 sm:gap-5 ${className ?? ""}`}
      role="timer"
      aria-live="polite"
      aria-label="Compte à rebours jusqu'au mariage"
    >
      {units.map((unit, i) => (
        <motion.div
          key={unit.key}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + i * 0.1, duration: 0.6, ease: "easeOut" }}
          className="flex w-16 flex-col items-center rounded-xl border border-ivory/25 bg-charcoal/30 px-2 py-3 backdrop-blur-sm sm:w-20 sm:py-4"
        >
          <span className="font-display text-2xl text-ivory sm:text-3xl">
            {String(parts[unit.key]).padStart(2, "0")}
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-[0.15em] text-ivory/80 sm:text-xs">
            {unit.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
