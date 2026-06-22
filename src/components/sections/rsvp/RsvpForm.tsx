"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { rsvp } from "@/data/content";
import { InputField, TextareaField } from "@/components/ui/FormField";
import { ConfettiPetals } from "./ConfettiPetals";

type RsvpFormValues = {
  fullName: string;
  phone: string;
  whatsappNumber: string;
  email: string;
  guestCount: number;
  message: string;
};

export function RsvpForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RsvpFormValues>({
    defaultValues: { guestCount: 0 },
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function onSubmit(values: RsvpFormValues) {
    setStatus("idle");
    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="relative flex min-h-[320px] flex-col items-center justify-center overflow-hidden rounded-2xl bg-mist px-8 py-16 text-center">
        <ConfettiPetals />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <h3 className="font-display text-2xl text-charcoal sm:text-3xl">
            {rsvp.successTitle}
          </h3>
          <p className="mt-3 max-w-md font-body text-stone">{rsvp.successMessage}</p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-8 cursor-pointer rounded-full border border-sage px-6 py-2 font-body text-sm uppercase tracking-[0.15em] text-sage-dark transition-colors hover:bg-sage hover:text-white"
          >
            Envoyer une autre confirmation
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
      <InputField
        label="WhatsApp"
        type="tel"
        {...register("whatsappNumber")}
        placeholder="Si différent du téléphone"
      />
      <InputField
        label="Email"
        type="email"
        required
        {...register("email", { required: "Votre email est requis." })}
        error={errors.email?.message}
      />
      <InputField
        label="Nombre d'accompagnants"
        type="number"
        min={0}
        {...register("guestCount", { valueAsNumber: true, min: 0 })}
      />
      <div className="sm:col-span-2">
        <TextareaField label="Message" rows={4} {...register("message")} />
      </div>

      <AnimatePresence>
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="alert"
            className="sm:col-span-2 text-sm text-red-600"
          >
            Une erreur est survenue. Veuillez réessayer.
          </motion.p>
        )}
      </AnimatePresence>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full cursor-pointer rounded-full bg-sage px-8 py-3 font-body text-sm uppercase tracking-[0.15em] text-white transition-transform duration-300 hover:scale-[1.02] disabled:opacity-60 sm:w-auto"
        >
          {isSubmitting ? "Envoi en cours..." : rsvp.submitLabel}
        </button>
      </div>
    </form>
  );
}
