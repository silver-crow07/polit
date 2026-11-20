import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { news } from "@/data/site";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import Image from "next/image";

export function News() {
  const featured = news.items.find((item) => item.featured) ?? news.items[0];
  const others = news.items.filter((item) => item.id !== featured.id);

  return (
    <section id="news" className="section-spacing bg-white">
      <div className="container-custom">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow={news.eyebrow}
              heading={news.heading}
              description={news.description}
              note={news.note}
            />
            <span className="hidden shrink-0 items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 lg:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-saffron" aria-hidden="true" />
              Verified content only
            </span>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-7 lg:grid-cols-[1.55fr_1fr]">
          <Reveal>
            <article className="group h-full overflow-hidden border border-slate-200 bg-white shadow-[0_18px_50px_-38px_rgba(16,29,53,0.6)]">
              <div className="relative aspect-[16/9] overflow-hidden bg-navy">
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-7 sm:p-9">
                <div className="flex flex-wrap items-center gap-4 text-[11px] font-bold uppercase tracking-[0.16em]">
                  <span className="text-saffron-ink">{featured.category}</span>
                  <span className="flex items-center gap-1.5 text-slate-600">
                    <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                    {featured.date}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-2xl leading-snug text-navy sm:text-[1.9rem]">
                  {featured.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                  {featured.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-royal">
                  Read when published
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </article>
          </Reveal>

          <div className="grid gap-5">
            {others.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.07}>
                <article className="group flex h-full gap-5 border border-slate-200 bg-white p-4 transition-all hover:border-saffron/40 hover:shadow-lift sm:p-5">
                  <div className="relative h-28 w-32 shrink-0 overflow-hidden bg-navy sm:h-32 sm:w-40">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="160px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="min-w-0 py-1">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-saffron-ink">
                      {item.category}
                    </span>
                    <span className="mt-1.5 block text-[10px] uppercase tracking-wider text-slate-600">
                      {item.date}
                    </span>
                    <h3 className="mt-2 line-clamp-2 font-display text-lg leading-snug text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-slate-500">{item.excerpt}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
