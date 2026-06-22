import { NextResponse } from "next/server";
import { couple } from "@/data/content";

export const dynamic = "force-dynamic";

type ForecastItem = {
  dt: number;
  main: { temp: number };
  weather: Array<{ description: string; icon: string }>;
};

export async function GET() {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  const { lat, lng } = couple.venueCoordinates;

  if (!apiKey) {
    return NextResponse.json(
      { available: false, reason: "OPENWEATHER_API_KEY non configurée." },
      { status: 200 }
    );
  }

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&units=metric&lang=fr&appid=${apiKey}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) throw new Error("OpenWeather request failed");
    const data: { list: ForecastItem[] } = await res.json();

    const target = new Date(couple.weddingDate).getTime();
    const closest = data.list.reduce((best, item) => {
      const itemTime = new Date(item.dt * 1000).getTime();
      const bestTime = new Date(best.dt * 1000).getTime();
      return Math.abs(itemTime - target) < Math.abs(bestTime - target) ? item : best;
    });

    const daysAway = Math.abs(new Date(closest.dt * 1000).getTime() - target) / (1000 * 60 * 60 * 24);
    if (daysAway > 10) {
      return NextResponse.json({
        available: false,
        reason: "Les prévisions météo ne sont disponibles qu'à l'approche du mariage.",
      });
    }

    return NextResponse.json({
      available: true,
      temperature: Math.round(closest.main.temp),
      condition: closest.weather[0]?.description ?? "",
      icon: closest.weather[0]?.icon ?? "",
      forecastDate: new Date(closest.dt * 1000).toISOString(),
    });
  } catch (error) {
    console.error("Erreur météo:", error);
    return NextResponse.json(
      { available: false, reason: "Service météo indisponible." },
      { status: 200 }
    );
  }
}
