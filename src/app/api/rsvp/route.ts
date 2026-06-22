import { NextResponse } from "next/server";
import { createRsvpEntry } from "@/integrations/notion";

export async function POST(request: Request) {
  const body = await request.json();
  const { fullName, phone, whatsappNumber, email, guestCount, message } = body;

  if (!fullName || !phone || !email) {
    return NextResponse.json(
      { error: "Les champs nom, téléphone et email sont obligatoires." },
      { status: 400 }
    );
  }

  try {
    await createRsvpEntry({
      fullName,
      phone,
      whatsappNumber: whatsappNumber || phone,
      email,
      guestCount: Number(guestCount) || 0,
      message,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur RSVP Notion:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'enregistrement. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
