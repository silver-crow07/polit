"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Landmark, MapPin } from "lucide-react";
import Image from "next/image";
import { hero, images, site } from "@/data/site";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const rise = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section id="home" className="hero-atmosphere relative isolate overflow-hidden text-white">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />

      {/* Subtle Indian-inspired arch and concentric line work */}
      <svg
        className="pointer-events-none absolute -right-24 top-10 h-[720px] w-[720px] opacity-40 lg:right-[-120px]"
        viewBox="0 0 720 720"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="360" cy="360" r="330" stroke="#FFFFFF" strokeOpacity="0.08" />
        <circle cx="360" cy="360" r="260" stroke="#E89B27" strokeOpacity="0.13" />
        <circle cx="360" cy="360" r="190" stroke="#FFFFFF" strokeOpacity="0.06" />
        <path
          d="M170 650V330a190 190 0 0 1 380 0v320"
          stroke="#FFFFFF"
          strokeOpacity="0.13"
          strokeWidth="1.5"
        />
        <path
          d="M215 650V335a145 145 0 0 1 290 0v315"
          stroke="#E89B27"
          strokeOpacity="0.16"
          strokeWidth="1.5"
        />
        <path
          d="M360 80c34 52 34 96 0 140-34-44-34-88 0-140ZM360 500c34 52 34 96 0 140-34-44-34-88 0-140Z"
          stroke="#E89B27"
          strokeOpacity="0.2"
        />
      </svg>

      <div className="container-custom relative grid min-h-[100svh] items-center gap-14 pb-24 pt-32 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20 lg:pb-28 lg:pt-36">
        <div className="relative z-10 max-w-2xl">
          <motion.div {...rise(0.05)} className="mb-8 flex items-center gap-4">
            <span className="eyebrow-line" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-saffron sm:text-xs">
              {hero.eyebrow}
            </span>
          </motion.div>

          <motion.h1
            {...rise(0.12)}
            className="font-display text-[3.25rem] font-semibold leading-[0.92] tracking-[-0.035em] sm:text-6xl lg:text-[5.2rem] xl:text-[5.8rem]"
          >
            {hero.nameLines.map((line, index) => (
              <span
                key={line}
                className={`block ${index === hero.nameLines.length - 1 ? "text-saffron" : "text-white"}`}
              >
                {line}
              </span>
            ))}
          </motion.h1>

          <motion.div {...rise(0.2)} className="mt-8 flex items-center gap-4">
            <span className="h-px w-14 bg-saffron/80" />
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/45">
              Public Service · Leadership · Community
            </span>
          </motion.div>

          <motion.h2
            {...rise(0.26)}
            className="mt-6 max-w-xl font-display text-xl font-normal leading-snug text-white/90 sm:text-2xl lg:text-[1.7rem]"
          >
            {site.tagline}
          </motion.h2>

          <motion.p {...rise(0.32)} className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/60">
            {hero.description}
          </motion.p>

          <motion.div {...rise(0.38)} className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
            {hero.facts.map((fact) => (
              <span key={fact} className="flex items-center gap-2 text-sm text-white/70">
                {fact.includes("Hathras") ? (
                  <MapPin className="h-4 w-4 text-saffron" strokeWidth={1.6} aria-hidden="true" />
                ) : (
                  <Landmark className="h-4 w-4 text-saffron" strokeWidth={1.6} aria-hidden="true" />
                )}
                {fact}
              </span>
            ))}
          </motion.div>

          <motion.div {...rise(0.44)} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={hero.primaryCta.href}
              className="group inline-flex items-center gap-3 bg-saffron px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-navy transition-all hover:bg-[#f3ad45] hover:shadow-[0_16px_40px_-18px_rgba(232,155,39,0.9)]"
            >
              {hero.primaryCta.label}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center gap-3 border border-white/25 px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:border-white/60 hover:bg-white/5"
            >
              {hero.secondaryCta.label}
            </a>
          </motion.div>
        </div>

        <motion.div
          {...(reduceMotion
            ? {}
            : {
                initial: { opacity: 0, y: 30, scale: 0.98 },
                animate: { opacity: 1, y: 0, scale: 1 },
                transition: { duration: 0.9, delay: 0.16, ease: [0.22, 1, 0.36, 1] as const },
              })}
          className="relative mx-auto w-full max-w-[480px]"
        >
          <div className="absolute -inset-5 border border-white/10" aria-hidden="true" />
          <div className="absolute -left-6 top-10 h-24 w-24 border-l border-t border-saffron/60" aria-hidden="true" />
          <div className="absolute -bottom-6 -right-6 h-28 w-28 border-b border-r border-saffron/60" aria-hidden="true" />

          <div className="arch-frame relative aspect-[3/3.75] overflow-hidden border border-white/15 bg-royal shadow-[0_40px_100px_-40px_rgba(0,0,0,0.9)]">
            <Image
              src={images.portrait}
              alt={hero.portraitAlt}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 480px"
              className="object-cover"
              style={{ objectPosition: "50% 30%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/45 via-transparent to-transparent" aria-hidden="true" />
          </div>

          <div className="absolute -bottom-8 left-4 flex items-center gap-4 bg-white px-5 py-4 text-navy shadow-lift sm:left-[-28px]">
            <span className="h-10 w-1 bg-saffron" aria-hidden="true" />
            <span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
                Former Block Pramukh
              </span>
              <span className="mt-1 block font-display text-lg leading-none">Hasayan</span>
            </span>
          </div>

          <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 rotate-90 text-[10px] font-semibold uppercase tracking-[0.35em] text-white/35 sm:block">
            Hasayan · Hathras · U.P.
          </div>

          <p className="mt-12 text-center text-[10px] uppercase tracking-[0.22em] text-white/35 sm:mt-14">
            {hero.portraitCaption}
          </p>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60 transition-colors hover:text-saffron lg:flex"
      >
        Scroll to explore
        <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </section>
  );
}
