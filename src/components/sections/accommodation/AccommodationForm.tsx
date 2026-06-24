"use client";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { accommodation } from "@/data/content";
import { InputField } from "@/components/ui/FormField";
import { ConfettiPetals } from "@/components/sections/rsvp/ConfettiPetals";

type AccommodationFormValues = {
  fullName: string;
  phone: string;
  whatsappNumber: string;
  email: string;
  roomType: string;
  guestCount: number;
  checkIn: string;
  checkOut: string;
};

export function AccommodationForm({ selectedRoom }: { selectedRoom: string }) {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<AccommodationFormValues>({
    defaultValues: { roomType: selectedRoom, guestCount: 1 },
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    setValue("roomType", selectedRoom);
  }, [selectedRoom, setValue]);

  async function onSubmit(values: AccommodationFormValues) {
    setStatus("idle");
    try {
      const res = await fetch("/api/accommodation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      reset({ roomType: selectedRoom, guestCount: 1 });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="relative flex min-h-[320px] flex-col items-center justify-center overflow-hidden rounded-2xl bg-white px-8 py-16 text-center">
        <ConfettiPetals />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <h3 className="font-display text-2xl text-charcoal sm:text-3xl">
            Votre demande a bien été enregistrée.
          </h3>
          <p className="mt-3 max-w-md font-body text-stone">
            Nous vous contacterons rapidement pour confirmer votre réservation.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-8 cursor-pointer rounded-full border border-gold-deep px-6 py-2 font-body text-sm uppercase tracking-[0.15em] text-gold-deep transition-colors hover:bg-gold-deep hover:text-white"
          >
            Envoyer une autre demande
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 sm:grid-cols-2">
      <InputField
        label="Nom complet"
        required
        {...register("fullName", { required: "Votre nom complet est requis." })}
        error={errors.fullName?.message}
      />
      <InputField
        label="Téléphone"
        type="tel"
        required
        {...register("phone", { required: "Votre téléphone est requis." })}
        error={errors.phone?.message}
      />
      <InputField label="WhatsApp" type="tel" {...register("whatsappNumber")} />
      <InputField
        label="Email"
        type="email"
        required
        {...register("email", { required: "Votre email est requis." })}
        error={errors.email?.message}
      />

      <div className="flex flex-col gap-1.5">
        <label htmlFor="roomType" className="font-body text-sm text-charcoal">
          Type de chambre <span className="text-gold-deep">*</span>
        </label>
        <select
          id="roomType"
          {...register("roomType", { required: true })}
          className="rounded-lg border border-sand bg-white px-4 py-3 font-body text-charcoal outline-none transition-colors focus:border-sage focus-visible:ring-2 focus-visible:ring-sage/50"
        >
          {accommodation.categories.map((cat) => (
            <option key={cat.id} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      <InputField
        label="Nombre de personnes"
        type="number"
        min={1}
        {...register("guestCount", { valueAsNumber: true, min: 1 })}
      />
      <InputField
        label="Date d'arrivée"
        type="date"
        required
        {...register("checkIn", { required: "La date d'arrivée est requise." })}
        error={errors.checkIn?.message}
      />
      <InputField
        label="Date de départ"
        type="date"
        required
        {...register("checkOut", { required: "La date de départ est requise." })}
        error={errors.checkOut?.message}
      />

      {status === "error" && (
        <p role="alert" className="sm:col-span-2 text-sm text-red-600">
          Une erreur est survenue. Veuillez réessayer.
        </p>
      )}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full cursor-pointer rounded-full bg-gold px-8 py-3 font-body text-sm uppercase tracking-[0.15em] text-charcoal transition-transform duration-300 hover:scale-[1.02] disabled:opacity-60 sm:w-auto"
        >
          {isSubmitting ? "Envoi en cours..." : "Envoyer la demande"}
        </button>
      </div>
    </form>
  );
}
