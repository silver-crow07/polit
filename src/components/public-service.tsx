import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { service } from "@/data/site";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function PublicService() {
  return (
    <section id="public-service" className="section-spacing bg-white">
      <div className="container-custom">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal>
            <SectionHeading
              eyebrow={service.eyebrow}
              heading={service.heading}
              description={service.description}
              note={service.note}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <span className="hidden shrink-0 border-l-2 border-saffron pl-5 text-sm leading-relaxed text-slate-500 lg:block">
              Public service is at the heart of
              <br />
              the public narrative.
            </span>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {service.items.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.07}>
              <article className="group relative h-full overflow-hidden border border-slate-200 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-saffron/40 hover:shadow-lift">
                <div className="relative aspect-[16/9] overflow-hidden bg-navy">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/35 to-transparent" aria-hidden="true" />
                  <span className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center bg-white/95 text-saffron shadow-sm">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-2xl leading-snug text-navy">{item.title}</h3>
                    <ArrowUpRight
                      className="mt-1 h-5 w-5 shrink-0 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-saffron"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
                  <span className="mt-5 block h-px w-10 bg-saffron/70" aria-hidden="true" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
