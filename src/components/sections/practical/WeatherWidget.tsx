"use client";

import { useEffect, useState } from "react";
import { Cloud, Sun, CloudRain, CloudSnow } from "lucide-react";
import { couple } from "@/data/content";

type WeatherData = {
  available: boolean;
  temperature?: number;
  condition?: string;
  icon?: string;
  reason?: string;
};

function WeatherIcon({ icon }: { icon?: string }) {
  if (!icon) return <Cloud size={28} className="text-sage-dark" />;
  if (icon.startsWith("01")) return <Sun size={28} className="text-gold" />;
  if (icon.startsWith("09") || icon.startsWith("10")) return <CloudRain size={28} className="text-sage-dark" />;
  if (icon.startsWith("13")) return <CloudSnow size={28} className="text-sage-dark" />;
  return <Cloud size={28} className="text-sage-dark" />;
}

export function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    fetch("/api/weather")
      .then((res) => res.json())
      .then(setWeather)
      .catch(() => setWeather({ available: false }));
  }, []);

  return (
    <div className="flex items-center gap-4 rounded-2xl border border-sand bg-white px-6 py-5">
      <WeatherIcon icon={weather?.icon} />
      <div>
        <p className="font-body text-xs uppercase tracking-[0.15em] text-stone">
          Prévisions du {couple.weddingDateLabel}
        </p>
        {weather?.available ? (
          <p className="mt-1 font-display text-xl text-charcoal">
            {weather.temperature}°C — <span className="font-body text-base capitalize">{weather.condition}</span>
          </p>
        ) : (
          <p className="mt-1 font-body text-sm text-stone">
            {weather?.reason ?? "Les prévisions seront disponibles à l'approche de l'événement."}
          </p>
        )}
      </div>
    </div>
  );
}
