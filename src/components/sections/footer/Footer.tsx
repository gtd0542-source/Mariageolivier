import { MapPin, Phone, Mail } from "lucide-react";
import { couple, footer, practicalInfo, whatsapp } from "@/data/content";
import { buildWhatsAppLink } from "@/integrations/notion";

export function Footer() {
  const whatsappHref = practicalInfo.phone.includes("PLACEHOLDER")
    ? `https://wa.me/${whatsapp.countryCode}`
    : buildWhatsAppLink(practicalInfo.phone);

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
              href={`tel:${practicalInfo.phone}`}
              className="flex items-center gap-2 transition-colors hover:text-gold-light"
            >
              <Phone size={16} /> {practicalInfo.phone}
            </a>
            <a
              href={`mailto:${practicalInfo.email}`}
              className="flex items-center gap-2 transition-colors hover:text-gold-light"
            >
              <Mail size={16} /> {practicalInfo.email}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-gold-light"
            >
              WhatsApp
            </a>
          </div>

          <div className="font-display text-lg italic leading-relaxed text-ivory/90 sm:text-right">
            {footer.thankYou}
          </div>
        </div>

        <div className="mt-12 border-t border-ivory/15 pt-6 text-center font-body text-xs uppercase tracking-[0.15em] text-ivory/50">
          {couple.fullNames} · {couple.weddingDateLabel}
        </div>
      </div>
    </footer>
  );
}
