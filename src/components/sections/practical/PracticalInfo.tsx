import { MapPin, Phone, Mail, Clock, Info } from "lucide-react";
import { practicalInfo } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { WeatherWidget } from "./WeatherWidget";

const items = [
  { icon: MapPin, label: "Adresse", value: practicalInfo.address },
  { icon: Phone, label: "Téléphone", value: practicalInfo.phone },
  { icon: Mail, label: "Email", value: practicalInfo.email },
  { icon: Clock, label: "Arrivée recommandée", value: practicalInfo.arrivalTime },
  { icon: Clock, label: "Début de la cérémonie", value: practicalInfo.ceremonyStart },
  { icon: Info, label: "Consignes particulières", value: practicalInfo.notes },
];

export function PracticalInfo() {
  return (
    <section id="informations" className="bg-mist py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <SectionHeading kicker="Informations utiles" title={practicalInfo.title} />

        <Reveal delay={0.1} className="mt-14 grid gap-5 sm:grid-cols-2">
          {items.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex items-start gap-4 rounded-2xl border border-sand bg-white px-6 py-5"
            >
              <Icon size={22} className="mt-0.5 shrink-0 text-sage-dark" />
              <div>
                <p className="font-body text-xs uppercase tracking-[0.15em] text-stone">
                  {label}
                </p>
                <p className="mt-1 font-body text-charcoal">{value}</p>
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.2} className="mt-8">
          <WeatherWidget />
        </Reveal>
      </div>
    </section>
  );
}
