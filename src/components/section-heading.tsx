import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  heading: string;
  description?: string;
  note?: string;
  align?: "left" | "center";
  light?: boolean;
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  heading,
  description,
  note,
  align = "left",
  light = false,
  children,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div className={`mb-5 flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
        <span className="eyebrow-line" />
        <span
          className={`text-xs font-semibold uppercase tracking-[0.28em] ${
            light ? "text-saffron" : "text-saffron-ink"
          }`}
        >
          {eyebrow}
        </span>
      </div>
      <h2
        className={`text-balance font-display text-3xl leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.85rem] ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {heading}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-[17px] ${
            light ? "text-white/70" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      ) : null}
      {note ? (
        <p className={`mt-3 text-xs italic ${light ? "text-white/60" : "text-slate-600"}`}>
          {note}
        </p>
      ) : null}
      {children}
    </div>
  );
}
