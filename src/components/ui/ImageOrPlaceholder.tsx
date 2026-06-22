import Image from "next/image";
import { ImageOff } from "lucide-react";
import type { ImageAsset } from "@/data/images";

type ImageOrPlaceholderProps = {
  image: ImageAsset;
  sizes: string;
  className?: string;
};

export function ImageOrPlaceholder({ image, sizes, className }: ImageOrPlaceholderProps) {
  if (image.placeholder || !image.src) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-sage/25 via-sand/40 to-gold-light/30 text-center">
        <ImageOff size={28} className="text-sage-dark" />
        <p className="px-4 font-body text-xs uppercase tracking-[0.1em] text-sage-dark">
          Photo à venir
        </p>
      </div>
    );
  }
  return (
    <Image
      src={image.src}
      alt={image.alt}
      fill
      sizes={sizes}
      className={className}
    />
  );
}
