import { IntroScreen } from "@/components/layout/IntroScreen";
import { Navigation } from "@/components/layout/Navigation";
import { FloatingPetals } from "@/components/animations/FloatingPetals";
import { Hero } from "@/components/sections/hero/Hero";
import { Story } from "@/components/sections/story/Story";
import { Rsvp } from "@/components/sections/rsvp/Rsvp";
import { Accommodation } from "@/components/sections/accommodation/Accommodation";
import { DressCode } from "@/components/sections/dresscode/DressCode";
import { DayOf } from "@/components/sections/dayof/DayOf";
import { Traditions } from "@/components/sections/traditions/Traditions";
import { Location } from "@/components/sections/location/Location";
import { PracticalInfo } from "@/components/sections/practical/PracticalInfo";
import { Footer } from "@/components/sections/footer/Footer";
import { couple } from "@/data/content";
import { images } from "@/data/images";

export default function Home() {
  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `Mariage de ${couple.fullNames}`,
    startDate: couple.weddingDate,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: couple.venueName,
      address: couple.venueFullAddress,
      geo: {
        "@type": "GeoCoordinates",
        latitude: couple.venueCoordinates.lat,
        longitude: couple.venueCoordinates.lng,
      },
    },
    image: [images.ogImage.src],
    description: `Mariage d'Olivier et Céline au ${couple.venueName}, ${couple.venueCity}.`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      <IntroScreen />
      <FloatingPetals position="fixed" count={13} className="z-30 opacity-70" />
      <Navigation />
      <main>
        <Hero />
        <Story />
        <Rsvp />
        <Accommodation />
        <DressCode />
        <DayOf />
        <Traditions />
        <Location />
        <PracticalInfo />
      </main>
      <Footer />
    </>
  );
}
