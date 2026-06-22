import { location } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { LocationMap } from "./LocationMap";
import { Gallery } from "./Gallery";

export function Location() {
  return (
    <section id="localisation" className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <SectionHeading
          kicker="Localisation"
          title={location.title}
          subtitle={`${location.venueName} — ${location.address}`}
        />
        <Reveal delay={0.1} className="mt-12">
          <LocationMap />
        </Reveal>
        <Gallery />
      </div>
    </section>
  );
}
