"use client";

import { motion } from "framer-motion";
import { dressCode } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";

export function DressCode() {
  return (
    <section id="dress-code" className="bg-charcoal py-24 text-ivory sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        <SectionHeading
          kicker={dressCode.title}
          title={dressCode.rule}
          subtitle={dressCode.subtitle}
          light
        />

        <Reveal delay={0.15}>
          <div className="mt-14 flex flex-wrap justify-center gap-6">
            {dressCode.palette.map((color, i) => (
              <motion.div
                key={color.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex flex-col items-center gap-3"
              >
                <span
                  className="h-20 w-20 rounded-full border border-ivory/20 shadow-lg transition-transform duration-300 hover:scale-110 sm:h-24 sm:w-24"
                  style={{ backgroundColor: color.hex }}
                />
                <span className="max-w-[7rem] text-center font-body text-xs uppercase tracking-[0.1em] text-ivory/80">
                  {color.name}
                </span>
              </motion.div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.25} className="mt-16 grid gap-6 sm:grid-cols-3">
          {dressCode.inspirations.map((inspiration) => (
            <div
              key={inspiration}
              className="rounded-2xl border border-ivory/15 bg-ivory/5 p-6 text-center font-body text-sm text-ivory/85"
            >
              {inspiration}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
