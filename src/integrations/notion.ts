import { Client } from "@notionhq/client";
import { whatsapp } from "@/data/content";

let cachedClient: Client | null = null;

export function getNotionClient(): Client {
  if (!process.env.NOTION_API_KEY) {
    throw new Error(
      "NOTION_API_KEY est manquant. Ajoutez-le dans .env.local (voir .env.example)."
    );
  }
  if (!cachedClient) {
    cachedClient = new Client({ auth: process.env.NOTION_API_KEY });
  }
  return cachedClient;
}

export function buildWhatsAppLink(rawPhone: string): string {
  const digitsOnly = rawPhone.replace(/[^\d]/g, "");
  const withCountryCode = digitsOnly.startsWith(whatsapp.countryCode)
    ? digitsOnly
    : `${whatsapp.countryCode}${digitsOnly.replace(/^0+/, "")}`;
  return `https://wa.me/${withCountryCode}`;
}

export type RsvpInput = {
  fullName: string;
  phone: string;
  whatsappNumber: string;
  email: string;
  guestCount: number;
  message?: string;
};

export async function createRsvpEntry(input: RsvpInput) {
  const databaseId = process.env.NOTION_RSVP_DATABASE_ID;
  if (!databaseId) {
    throw new Error(
      "NOTION_RSVP_DATABASE_ID est manquant. Lancez `npm run notion:setup` puis renseignez .env.local."
    );
  }
  const notion = getNotionClient();
  const whatsappLink = buildWhatsAppLink(input.whatsappNumber || input.phone);

  return notion.pages.create({
    parent: { database_id: databaseId },
    properties: {
      Nom: { title: [{ text: { content: input.fullName } }] },
      Téléphone: { phone_number: input.phone },
      WhatsApp: { phone_number: input.whatsappNumber || input.phone },
      "Lien WhatsApp": { url: whatsappLink },
      Email: { email: input.email },
      Accompagnants: { number: input.guestCount },
      Message: {
        rich_text: input.message ? [{ text: { content: input.message } }] : [],
      },
      "Date d'inscription": { date: { start: new Date().toISOString() } },
      Statut: { select: { name: "En attente" } },
    },
  });
}

export type AccommodationInput = {
  fullName: string;
  phone: string;
  whatsappNumber: string;
  email: string;
  roomType: string;
  guestCount: number;
  checkIn: string;
  checkOut: string;
};

export async function createAccommodationEntry(input: AccommodationInput) {
  const databaseId = process.env.NOTION_ACCOMMODATION_DATABASE_ID;
  if (!databaseId) {
    throw new Error(
      "NOTION_ACCOMMODATION_DATABASE_ID est manquant. Lancez `npm run notion:setup` puis renseignez .env.local."
    );
  }
  const notion = getNotionClient();
  const whatsappLink = buildWhatsAppLink(input.whatsappNumber || input.phone);

  return notion.pages.create({
    parent: { database_id: databaseId },
    properties: {
      Nom: { title: [{ text: { content: input.fullName } }] },
      Téléphone: { phone_number: input.phone },
      WhatsApp: { phone_number: input.whatsappNumber || input.phone },
      "Lien WhatsApp": { url: whatsappLink },
      Email: { email: input.email },
      "Type de chambre": { select: { name: input.roomType } },
      "Nombre de personnes": { number: input.guestCount },
      "Date d'arrivée": { date: { start: input.checkIn } },
      "Date de départ": { date: { start: input.checkOut } },
      Statut: { select: { name: "En attente" } },
    },
  });
}
