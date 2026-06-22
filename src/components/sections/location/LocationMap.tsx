import { location } from "@/data/content";

export function LocationMap() {
  const { lat, lng } = location.coordinates;
  const embedSrc = `https://www.google.com/maps?q=${lat},${lng}&hl=fr&z=15&output=embed`;
  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

  return (
    <div className="overflow-hidden rounded-2xl shadow-lg">
      <div className="relative h-[360px] w-full sm:h-[440px]">
        <iframe
          title={`Carte — ${location.venueName}`}
          src={embedSrc}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <div className="flex flex-col items-center justify-between gap-4 bg-white px-6 py-5 sm:flex-row">
        <div>
          <p className="font-display text-lg text-charcoal">{location.venueName}</p>
          <p className="font-body text-sm text-stone">{location.address}</p>
        </div>
        <a
          href={directionsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 cursor-pointer rounded-full bg-sage px-6 py-2.5 font-body text-sm uppercase tracking-[0.15em] text-white transition-transform duration-300 hover:scale-105"
        >
          {location.directionsLabel}
        </a>
      </div>
    </div>
  );
}
