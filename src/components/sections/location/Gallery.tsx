"use client";

import Image from "next/image";
import { useState } from "react";
import { images } from "@/data/images";
import { Reveal } from "@/components/animations/Reveal";
import { Lightbox } from "./Lightbox";

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const gallery = images.gallery;

  return (
    <div className="mt-16">
      {/* Desktop : masonry grid */}
      <Reveal className="hidden gap-4 sm:block sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {gallery.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setActiveIndex(i)}
            className="block w-full cursor-pointer overflow-hidden rounded-xl"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </button>
        ))}
      </Reveal>

      {/* Mobile : carousel swipe */}
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:hidden">
        {gallery.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setActiveIndex(i)}
            className="relative aspect-[4/3] w-[80%] shrink-0 snap-center overflow-hidden rounded-xl"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="80vw"
              className="object-cover"
            />
          </button>
        ))}
      </div>

      <Lightbox
        images={gallery}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onIndexChange={setActiveIndex}
      />
    </div>
  );
}
