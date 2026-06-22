import Image from "next/image";
import { Reveal } from "@/components/animations/Reveal";
import type { ImageAsset } from "@/data/images";

type RoomCardProps = {
  name: string;
  description: string;
  capacity: string;
  amenities: string[];
  image: ImageAsset;
  delay?: number;
  onReserve: () => void;
};

export function RoomCard({
  name,
  description,
  capacity,
  amenities,
  image,
  delay = 0,
  onReserve,
}: RoomCardProps) {
  return (
    <Reveal delay={delay} className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl text-charcoal">{name}</h3>
        <p className="mt-2 font-body text-sm text-stone">{description}</p>
        <p className="mt-3 font-body text-sm font-medium text-sage-dark">
          Capacité : {capacity}
        </p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {amenities.map((amenity) => (
            <li
              key={amenity}
              className="rounded-full bg-mist px-3 py-1 font-body text-xs text-charcoal"
            >
              {amenity}
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={onReserve}
          className="mt-6 w-full cursor-pointer rounded-full border border-gold-deep px-6 py-2.5 font-body text-sm uppercase tracking-[0.15em] text-gold-deep transition-colors hover:bg-gold-deep hover:text-white"
        >
          Réserver
        </button>
      </div>
    </Reveal>
  );
}
