import { story } from "@/data/content";
import { images } from "@/data/images";
import { Reveal } from "@/components/animations/Reveal";
import { PhotoCard } from "@/components/animations/PhotoCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Story() {
  return (
    <section id="notre-histoire" className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <SectionHeading
          kicker="Notre Histoire"
          title="Le chemin qui nous a menés ici"
          subtitle={story.intro}
        />

        <Reveal delay={0.1} className="mx-auto mt-14 max-w-3xl rounded-2xl border border-sage/30 bg-mist px-8 py-10 text-center">
          <p className="font-display text-xl italic leading-relaxed text-charcoal sm:text-2xl">
            “{story.biblicalVerse.text}”
          </p>
          <p className="mt-4 font-body text-sm uppercase tracking-[0.2em] text-sage-dark">
            {story.biblicalVerse.reference}
          </p>
        </Reveal>

        <div className="mt-20 flex flex-col gap-20">
          {story.timeline.map((step, i) => {
            const img = images.story[i % images.story.length];
            const imageFirst = i % 2 === 0;
            return (
              <div
                key={step.title}
                className="grid items-center gap-8 md:grid-cols-2 md:gap-12"
              >
                <div className={imageFirst ? "order-1" : "order-1 md:order-2"}>
                  <PhotoCard image={img} direction={imageFirst ? "left" : "right"} />
                </div>

                <Reveal
                  delay={0.15}
                  className={imageFirst ? "order-2" : "order-2 md:order-1"}
                >
                  {(step.reference || step.year) && (
                    <p className="font-display text-sm uppercase tracking-[0.25em] text-gold-deep">
                      {step.reference || step.year}
                    </p>
                  )}
                  <h3 className="mt-3 font-display text-2xl text-charcoal sm:text-3xl">
                    {step.title}
                  </h3>
                  <p
                    className={
                      step.reference
                        ? "mt-4 font-display text-lg italic leading-relaxed text-stone"
                        : "mt-4 font-body leading-relaxed text-stone"
                    }
                  >
                    {step.text}
                  </p>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
