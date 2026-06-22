"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { dayOf, couple } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";

export function DayOf() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.3"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="jour-j" className="bg-mist py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-12">
        <SectionHeading
          kicker={couple.weddingDateLabel}
          title={dayOf.title}
          subtitle={dayOf.subtitle}
        />

        <div ref={ref} className="relative mt-16 pl-10 sm:pl-14">
          <div className="absolute left-2 top-0 h-full w-px bg-sand sm:left-3" />
          <motion.div
            className="absolute left-2 top-0 w-px bg-gold sm:left-3"
            style={{ height: lineHeight }}
          />

          <div className="flex flex-col gap-12">
            {dayOf.schedule.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.05} className="relative">
                <span className="absolute -left-10 top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-gold bg-mist sm:-left-14">
                  <span className="h-2 w-2 rounded-full bg-gold" />
                </span>
                <p className="font-display text-sm uppercase tracking-[0.2em] text-gold-deep">
                  {step.time}
                </p>
                <h3 className="mt-1 font-display text-2xl text-charcoal">{step.title}</h3>
                <p className="mt-2 font-body text-stone">{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
