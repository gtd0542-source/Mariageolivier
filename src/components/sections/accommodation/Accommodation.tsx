"use client";

import { useRef, useState } from "react";
import { accommodation } from "@/data/content";
import { images } from "@/data/images";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { RoomCard } from "./RoomCard";
import { AccommodationForm } from "./AccommodationForm";

const roomImages = {
  standard: images.accommodation.standard,
  premium: images.accommodation.premium,
  suite: images.accommodation.suite,
};

export function Accommodation() {
  const [selectedRoom, setSelectedRoom] = useState(accommodation.categories[0].name);
  const formRef = useRef<HTMLDivElement>(null);

  function handleReserve(roomName: string) {
    setSelectedRoom(roomName);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section id="hebergement" className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <SectionHeading
          kicker="Hébergement"
          title={accommodation.title}
          subtitle={accommodation.subtitle}
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {accommodation.categories.map((cat, i) => (
            <RoomCard
              key={cat.id}
              name={cat.name}
              description={cat.description}
              capacity={cat.capacity}
              price={cat.price}
              amenities={cat.amenities}
              image={roomImages[cat.id as keyof typeof roomImages]}
              delay={i * 0.1}
              onReserve={() => handleReserve(cat.name)}
            />
          ))}
        </div>

        <Reveal delay={0.1}>
          <div
            ref={formRef}
            className="mt-16 rounded-2xl bg-mist p-6 shadow-sm sm:p-10"
          >
            <h3 className="font-display text-2xl text-charcoal">
              Formulaire de réservation
            </h3>
            <p className="mt-2 font-body text-sm text-stone">
              Chambre sélectionnée : <span className="text-sage-dark">{selectedRoom}</span>
            </p>
            <div className="mt-6">
              <AccommodationForm selectedRoom={selectedRoom} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
