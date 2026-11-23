import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { about, images, site } from "@/data/site";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="section-spacing relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-mist" aria-hidden="true" />
      <div className="container-custom relative grid items-center gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-24">
        <Reveal className="relative mx-auto w-full max-w-[460px]">
          <div className="absolute -left-5 -top-5 h-32 w-32 border-l border-t border-saffron/60" aria-hidden="true" />
          <div className="arch-frame relative aspect-[4/5] overflow-hidden bg-navy shadow-[0_35px_80px_-40px_rgba(16,29,53,0.55)]">
            <Image
              src={images.aboutPortrait}
              alt={`Portrait of ${site.name}`}
              fill
              sizes="(max-width: 1024px) 90vw, 460px"
              className="object-cover"
              style={{ objectPosition: "72% 35%" }}
            />
          </div>
          <div className="absolute -bottom-7 right-3 bg-navy px-6 py-5 text-white shadow-lift sm:right-[-24px]">
            <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-saffron">
              Based in
            </span>
            <span className="mt-1 block font-display text-xl">Hasayan, Hathras</span>
            <span className="mt-1 block text-xs text-white/55">Uttar Pradesh, India</span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <SectionHeading eyebrow={about.eyebrow} heading={about.heading} note={about.note} />
          <div className="mt-7 space-y-5 text-[15px] leading-[1.85] text-slate-600 sm:text-base">
            {about.paragraphs.map((paragraph, index) => (
              <p key={index} className={index === 0 ? "text-[17px] leading-[1.8] text-ink" : undefined}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10 grid gap-5 border-t border-slate-200 pt-8 sm:grid-cols-3">
            {about.highlights.map((highlight) => (
              <div key={highlight.title} className="flex gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-saffron/40 text-saffron">
                  <Icon name={highlight.icon} className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-bold leading-snug text-navy">{highlight.title}</span>
                  <span className="mt-1 block text-xs leading-relaxed text-slate-500">{highlight.detail}</span>
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-4">
            <span className="h-px w-12 bg-saffron" aria-hidden="true" />
            <span className="font-display text-xl italic text-navy/80">{site.name}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
