"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { couple, hero } from "@/data/content";
import { images } from "@/data/images";
import { Countdown } from "./Countdown";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.45, 0.75]);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      id="accueil"
      ref={ref}
      className="relative flex h-screen min-h-[680px] w-full items-center justify-center overflow-hidden"
    >
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-charcoal"
        style={{ opacity: overlayOpacity }}
      />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center text-ivory">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-body text-sm uppercase tracking-[0.3em] text-gold-light text-shadow-soft"
        >
          {hero.kicker}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
          className="mt-4 font-display text-5xl text-shadow-soft sm:text-6xl md:text-7xl"
        >
          {couple.fullNames}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-4 font-body text-base uppercase tracking-[0.2em] text-ivory/90 text-shadow-soft sm:text-lg"
        >
          {couple.weddingDateLabel} · {couple.venueName}, {couple.venueCity}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10"
        >
          <Countdown targetIso={couple.weddingDate} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <button
            type="button"
            onClick={() => scrollTo("rsvp")}
            className="cursor-pointer rounded-full bg-gold-light px-8 py-3 font-body text-sm uppercase tracking-[0.15em] text-charcoal transition-transform duration-300 hover:scale-105"
          >
            {hero.ctaPrimary}
          </button>
          <button
            type="button"
            onClick={() => scrollTo("hebergement")}
            className="cursor-pointer rounded-full border border-ivory/70 px-8 py-3 font-body text-sm uppercase tracking-[0.15em] text-ivory transition-colors duration-300 hover:bg-ivory hover:text-charcoal"
          >
            {hero.ctaSecondary}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
