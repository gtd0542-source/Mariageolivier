// Crée automatiquement les bases Notion "RSVP" et "Hébergement" sous la page parente indiquée.
// Usage : npm run notion:setup
// Pré-requis dans .env.local : NOTION_API_KEY, NOTION_PARENT_PAGE_ID

import { Client } from "@notionhq/client";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const apiKey = process.env.NOTION_API_KEY;
const parentPageId = process.env.NOTION_PARENT_PAGE_ID;

if (!apiKey || !parentPageId) {
  console.error(
    "Erreur : NOTION_API_KEY et NOTION_PARENT_PAGE_ID doivent être définis dans .env.local."
  );
  process.exit(1);
}

const notion = new Client({ auth: apiKey });

async function createRsvpDatabase() {
  const db = await notion.databases.create({
    parent: { type: "page_id", page_id: parentPageId },
    title: [{ type: "text", text: { content: "Mariage — Confirmations RSVP" } }],
    properties: {
      Nom: { title: {} },
      Téléphone: { phone_number: {} },
      WhatsApp: { phone_number: {} },
      "Lien WhatsApp": { url: {} },
      Email: { email: {} },
      Accompagnants: { number: {} },
      Message: { rich_text: {} },
      "Date d'inscription": { date: {} },
      Statut: {
        select: {
          options: [
            { name: "Confirmé", color: "green" },
            { name: "En attente", color: "yellow" },
            { name: "Annulé", color: "red" },
          ],
        },
      },
    },
  });
  return db.id;
}

async function createAccommodationDatabase() {
  const db = await notion.databases.create({
    parent: { type: "page_id", page_id: parentPageId },
    title: [{ type: "text", text: { content: "Mariage — Réservations Hébergement" } }],
    properties: {
      Nom: { title: {} },
      Téléphone: { phone_number: {} },
      WhatsApp: { phone_number: {} },
      "Lien WhatsApp": { url: {} },
      Email: { email: {} },
      "Type de chambre": {
        select: {
          options: [
            { name: "Chambre Standard", color: "blue" },
            { name: "Chambre Premium", color: "purple" },
            { name: "Suite", color: "pink" },
          ],
        },
      },
      "Nombre de personnes": { number: {} },
      "Date d'arrivée": { date: {} },
      "Date de départ": { date: {} },
      Statut: {
        select: {
          options: [
            { name: "En attente", color: "yellow" },
            { name: "Confirmé", color: "blue" },
            { name: "Payé", color: "green" },
            { name: "Occupé", color: "gray" },
          ],
        },
      },
    },
  });
  return db.id;
}

const [rsvpId, accommodationId] = await Promise.all([
  createRsvpDatabase(),
  createAccommodationDatabase(),
]);

console.log("\nBases Notion créées avec succès. Ajoutez ces lignes à votre .env.local :\n");
console.log(`NOTION_RSVP_DATABASE_ID=${rsvpId}`);
console.log(`NOTION_ACCOMMODATION_DATABASE_ID=${accommodationId}\n`);
