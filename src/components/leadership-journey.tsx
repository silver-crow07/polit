import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { journey } from "@/data/site";
import { Check, CircleHelp } from "lucide-react";

export function LeadershipJourney() {
  return (
    <section id="journey" className="section-spacing subtle-pattern relative bg-mist">
      <div className="container-custom relative">
        <Reveal>
          <SectionHeading
            eyebrow={journey.eyebrow}
            heading={journey.heading}
            description={journey.description}
            note={journey.note}
            align="center"
          />
        </Reveal>

        <div className="relative mt-16 md:mt-20">
          <div
            className="absolute bottom-0 left-[19px] top-0 w-px bg-gradient-to-b from-transparent via-navy/20 to-transparent md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          />

          <div className="space-y-8 md:space-y-12">
            {journey.items.map((item, index) => (
              <Reveal
                key={item.id}
                delay={index * 0.06}
                className={`relative md:grid md:grid-cols-2 md:items-center md:gap-16 ${
                  index % 2 === 0 ? "" : "md:[&>article]:col-start-2"
                }`}
              >
                <article
                  className={`ml-12 rounded-lg border border-navy/10 bg-white p-6 shadow-[0_18px_45px_-32px_rgba(16,29,53,0.5)] sm:p-8 ${
                    index % 2 === 0 ? "md:ml-0 md:text-right" : "md:ml-0"
                  }`}
                >
                  <div className={`flex items-center gap-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <span className="flex h-11 w-11 items-center justify-center border border-saffron/45 bg-saffron/5 text-saffron">
                      <Icon name={item.icon} className="h-5 w-5" />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600">
                      {item.period}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl leading-snug text-navy sm:text-[1.7rem]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-[15px]">{item.description}</p>
                  <span
                    className={`mt-5 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.16em] ${
                      item.verified ? "text-royal" : "text-slate-600"
                    }`}
                  >
                    {item.verified ? (
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    ) : (
                      <CircleHelp className="h-3.5 w-3.5" aria-hidden="true" />
                    )}
                    {item.verified ? "Verified role" : "Awaiting confirmation"}
                  </span>
                </article>

                <span
                  className="absolute left-[8px] top-8 h-[22px] w-[22px] rounded-full border-[5px] border-mist bg-saffron shadow-[0_0_0_1px_rgba(232,155,39,0.5)] md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
                  aria-hidden="true"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
