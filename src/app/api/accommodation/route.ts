import { NextResponse } from "next/server";
import { createAccommodationEntry } from "@/integrations/notion";

export async function POST(request: Request) {
  const body = await request.json();
  const { fullName, phone, whatsappNumber, email, roomType, guestCount, checkIn, checkOut } = body;

  if (!fullName || !phone || !email || !roomType || !checkIn || !checkOut) {
    return NextResponse.json(
      { error: "Merci de renseigner tous les champs obligatoires." },
      { status: 400 }
    );
  }

  try {
    await createAccommodationEntry({
      fullName,
      phone,
      whatsappNumber: whatsappNumber || phone,
      email,
      roomType,
      guestCount: Number(guestCount) || 1,
      checkIn,
      checkOut,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur Hébergement Notion:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de la réservation. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
