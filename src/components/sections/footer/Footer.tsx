import { MapPin, Mail } from "lucide-react";
import { couple, footer, practicalInfo } from "@/data/content";

export function Footer() {
  return (
    <footer className="bg-charcoal py-16 text-ivory">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-display text-2xl">{couple.fullNames}</p>
            <p className="mt-2 font-body text-sm text-ivory/70">{couple.weddingDateLabel}</p>
          </div>

          <div className="flex flex-col gap-3 font-body text-sm text-ivory/80">
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${couple.venueCoordinates.lat},${couple.venueCoordinates.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-gold-light"
            >
              <MapPin size={16} /> {couple.venueName}, {couple.venueCity}
            </a>
            <a
              href={`mailto:${practicalInfo.email}`}
              className="flex items-center gap-2 transition-colors hover:text-gold-light"
            >
              <Mail size={16} /> {practicalInfo.email}
            </a>
          </div>

          <div className="font-display text-lg italic leading-relaxed text-ivory/90 sm:text-right">
            {footer.thankYou}
          </div>
        </div>

        <div className="mt-12 border-t border-ivory/15 pt-6 text-center font-body text-xs uppercase tracking-[0.15em] text-ivory/50">
          {couple.fullNames} · {couple.weddingDateLabel}
        </div>

        <div className="mt-4 text-center font-body text-xs text-ivory/35">
          Réalisé par{" "}
          <a
            href="https://wa.me/237694879563"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ivory/55 underline underline-offset-2 transition-colors hover:text-gold-light"
          >
            Georges Zinga
          </a>
        </div>
      </div>
    </footer>
  );
}
