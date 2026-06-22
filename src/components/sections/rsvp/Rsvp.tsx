import { rsvp } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RsvpForm } from "./RsvpForm";

export function Rsvp() {
  return (
    <section id="rsvp" className="bg-mist py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-12">
        <SectionHeading kicker={rsvp.title} title="Votre présence compte" subtitle={rsvp.subtitle} />
        <div className="mt-12 rounded-2xl bg-white p-6 shadow-sm sm:p-10">
          <RsvpForm />
        </div>
      </div>
    </section>
  );
}
