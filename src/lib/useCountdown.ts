"use client";

import { useEffect, useState } from "react";

type CountdownParts = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
};

function computeParts(targetIso: string): CountdownParts {
  const diff = new Date(targetIso).getTime() - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds, isPast: false };
}

const EMPTY_PARTS: CountdownParts = { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: false };

export function useCountdown(targetIso: string): CountdownParts {
  // Starts empty so server and first client render match; real values land on mount.
  const [parts, setParts] = useState<CountdownParts>(EMPTY_PARTS);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional: syncs real time once after hydration, then on each tick.
    setParts(computeParts(targetIso));
    const interval = setInterval(() => {
      setParts(computeParts(targetIso));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetIso]);

  return parts;
}
