import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { couple } from "@/data/content";
import { images } from "@/data/images";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const siteUrl = "https://olivier-et-celine.com"; // [PLACEHOLDER] domaine définitif (Hostinger)

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${couple.fullNames} — ${couple.weddingDateLabel}`,
  description: `Rejoignez Olivier et Céline pour célébrer leur mariage le ${couple.weddingDateLabel} au ${couple.venueName}, ${couple.venueCity}. Confirmez votre présence, réservez votre hébergement et découvrez le programme complet.`,
  keywords: [
    "mariage",
    "Olivier et Céline",
    "Complexe Mundi",
    "Yaoundé",
    "Cameroun",
    "mariage 2027",
  ],
  openGraph: {
    title: `${couple.fullNames} — ${couple.weddingDateLabel}`,
    description: `Célébrons ensemble l'union d'Olivier et Céline, le ${couple.weddingDateLabel} au ${couple.venueName}, ${couple.venueCity}.`,
    url: siteUrl,
    siteName: `${couple.fullNames}`,
    images: [{ url: images.ogImage.src, width: 1200, height: 630 }],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${couple.fullNames} — ${couple.weddingDateLabel}`,
    description: `Célébrons ensemble l'union d'Olivier et Céline, le ${couple.weddingDateLabel}.`,
    images: [images.ogImage.src],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-charcoal">
        {children}
      </body>
    </html>
  );
}
