import { traditions } from "@/data/content";
import { images } from "@/data/images";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { ImageOrPlaceholder } from "@/components/ui/ImageOrPlaceholder";

export function Traditions() {
  return (
    <section id="traditions" className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <SectionHeading
          kicker="Tenues & Repas Traditionnels"
          title={traditions.title}
          subtitle={traditions.subtitle}
        />

        <div className="mt-16">
          <Reveal>
            <h3 className="font-display text-2xl text-charcoal">Tenues traditionnelles</h3>
          </Reveal>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {traditions.outfits.map((outfit, i) => {
              const img = images.traditions.outfits[i % images.traditions.outfits.length];
              return (
                <Reveal key={outfit.name} delay={i * 0.1} className="overflow-hidden rounded-2xl bg-mist shadow-sm">
                  <div className="relative aspect-[3/4]">
                    <ImageOrPlaceholder
                      image={img}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-display text-lg text-charcoal">{outfit.name}</h4>
                    {outfit.description && (
                      <p className="mt-2 font-body text-sm text-stone">{outfit.description}</p>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delay={0.1} className="mt-16 rounded-2xl border border-sage/30 bg-mist p-8 text-center">
          <h3 className="font-display text-2xl text-charcoal">Nos coutumes</h3>
          <p className="mx-auto mt-3 max-w-2xl font-body text-stone">{traditions.customs}</p>
        </Reveal>

        <div className="mt-16">
          <Reveal>
            <h3 className="font-display text-2xl text-charcoal">Menu traditionnel</h3>
          </Reveal>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {traditions.menu.map((dish, i) => {
              const img = images.traditions.menu[i % images.traditions.menu.length];
              return (
                <Reveal key={dish.name} delay={i * 0.1} className="overflow-hidden rounded-2xl bg-mist shadow-sm">
                  <div className="relative aspect-[3/4]">
                    <ImageOrPlaceholder
                      image={img}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="font-display text-base text-charcoal">{dish.name}</h4>
                    {dish.description && (
                      <p className="mt-2 font-body text-sm text-stone">{dish.description}</p>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
