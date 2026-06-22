import { Reveal } from "@/components/animations/Reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
};

export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "mx-auto max-w-2xl",
        align === "center" ? "text-center" : "text-left"
      )}
    >
      {kicker && (
        <p
          className={cn(
            "font-body text-xs uppercase tracking-[0.3em]",
            light ? "text-gold-light" : "text-sage-dark"
          )}
        >
          {kicker}
        </p>
      )}
      <h2
        className={cn(
          "mt-3 font-display text-3xl sm:text-4xl md:text-5xl",
          light ? "text-ivory" : "text-charcoal"
        )}
      >
        {title}
      </h2>
      <div className="mx-auto mt-4 h-px w-16 bg-gold" />
      {subtitle && (
        <p
          className={cn(
            "mt-5 font-body text-base leading-relaxed sm:text-lg",
            light ? "text-ivory/85" : "text-stone"
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
