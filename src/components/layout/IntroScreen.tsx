"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { couple, intro } from "@/data/content";
import { FloatingPetals } from "@/components/animations/FloatingPetals";

export function IntroScreen() {
  const [visible, setVisible] = useState(true);
  const [revealNames, setRevealNames] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const revealTimer = setTimeout(() => setRevealNames(true), 1200);
    return () => {
      clearTimeout(revealTimer);
    };
  }, []);

  function handleDismiss() {
    setVisible(false);
    document.body.style.overflow = "";
    const story = document.getElementById("notre-histoire");
    story?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-charcoal text-ivory"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <FloatingPetals count={20} />

          <motion.div
            className="relative z-10 flex flex-col items-center gap-6 px-6 text-center"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              className="font-display text-2xl tracking-[0.3em] text-gold-light uppercase"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {couple.groom[0]} &amp; {couple.bride[0]}
            </motion.div>

            <motion.p
              className="max-w-md font-display text-lg italic text-ivory/90 sm:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {intro.welcomeText}
            </motion.p>

            <AnimatePresence>
              {revealNames && (
                <motion.h1
                  className="font-display text-4xl text-ivory sm:text-5xl md:text-6xl"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                >
                  {couple.fullNames}
                </motion.h1>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {revealNames && (
                <motion.button
                  type="button"
                  onClick={handleDismiss}
                  className="mt-4 cursor-pointer rounded-full border border-gold-light/60 px-8 py-3 font-body text-sm uppercase tracking-[0.2em] text-ivory transition-colors duration-300 hover:bg-gold-light hover:text-charcoal"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  {intro.ctaLabel}
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
