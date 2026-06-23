"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import type { ImageAsset } from "@/data/images";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type PhotoCardProps = {
  image: ImageAsset;
  direction?: "left" | "right";
};

export function PhotoCard({ image, direction = "left" }: PhotoCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fromX = direction === "left" ? -90 : 90;
    const fromRotate = direction === "left" ? -12 : 12;

    const tween = gsap.fromTo(
      el,
      { x: fromX, y: 70, rotate: fromRotate, opacity: 0, scale: 0.88 },
      {
        x: 0,
        y: 0,
        rotate: 0,
        opacity: 1,
        scale: 1,
        duration: 1.1,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [direction]);

  return (
    <div
      ref={ref}
      className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-xl"
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 hover:scale-105"
      />
    </div>
  );
}
