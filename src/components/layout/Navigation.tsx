"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { couple } from "@/data/content";
import { cn } from "@/lib/utils";

const links = [
  { href: "#accueil", label: "Accueil" },
  { href: "#notre-histoire", label: "Notre Histoire" },
  { href: "#rsvp", label: "Confirmation" },
  { href: "#hebergement", label: "Hébergement" },
  { href: "#dress-code", label: "Dress Code" },
  { href: "#jour-j", label: "Jour J" },
  { href: "#traditions", label: "Tenues & Repas" },
  { href: "#localisation", label: "Localisation" },
  { href: "#informations", label: "Informations" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  function handleLinkClick(href: string) {
    setOpen(false);
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "bg-ivory/90 backdrop-blur-md shadow-[0_1px_20px_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <a
          href="#accueil"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("#accueil");
          }}
          className={cn(
            "font-display text-xl tracking-wide transition-colors",
            scrolled ? "text-charcoal" : "text-ivory text-shadow-soft"
          )}
        >
          {couple.bride[0]} &amp; {couple.groom[0]}
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={cn(
                  "font-body text-sm uppercase tracking-[0.12em] transition-colors hover:text-gold-deep",
                  scrolled ? "text-charcoal" : "text-ivory text-shadow-soft"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "z-50 lg:hidden",
            scrolled ? "text-charcoal" : "text-ivory"
          )}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 z-40 flex flex-col items-center justify-center gap-8 bg-ivory lg:hidden"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="font-display text-2xl text-charcoal transition-colors hover:text-gold-deep"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
