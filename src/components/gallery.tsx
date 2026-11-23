"use client";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { gallery } from "@/data/site";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const shapeClasses = {
  tall: "aspect-[4/5]",
  medium: "aspect-[4/3]",
  short: "aspect-square",
} as const;

export function Gallery() {
  const reduceMotion = useReducedMotion();
  const [category, setCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const visibleItems =
    category === "All"
      ? gallery.items
      : gallery.items.filter((item) => item.category === category);

  const close = useCallback(() => setActiveIndex(null), []);

  const step = useCallback(
    (direction: 1 | -1) => {
      setActiveIndex((current) => {
        if (current === null) return current;
        return (current + direction + visibleItems.length) % visibleItems.length;
      });
    },
    [visibleItems.length],
  );

  useEffect(() => {
    setActiveIndex(null);
  }, [category]);

  useEffect(() => {
    document.body.style.overflow = activeIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === null) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, close, step]);

  const activeItem = activeIndex !== null ? visibleItems[activeIndex] : undefined;

  return (
    <section id="gallery" className="section-spacing bg-mist">
      <div className="container-custom">
        <Reveal>
          <SectionHeading
            eyebrow={gallery.eyebrow}
            heading={gallery.heading}
            description={gallery.description}
            align="center"
          />
        </Reveal>

        <Reveal delay={0.08} className="mt-10 flex flex-wrap justify-center gap-2.5">
          {gallery.categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              aria-pressed={category === item}
              className={`px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.13em] transition-all ${
                category === item
                  ? "bg-navy text-white shadow-sm"
                  : "border border-navy/15 bg-white text-slate-500 hover:border-navy/40 hover:text-navy"
              }`}
            >
              {item}
            </button>
          ))}
        </Reveal>

        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {visibleItems.map((item, index) => (
            <Reveal key={item.id} delay={(index % 3) * 0.06} className="mb-5 break-inside-avoid">
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`gallery-item group relative block w-full overflow-hidden bg-navy shadow-[0_15px_40px_-30px_rgba(16,29,53,0.8)] ${shapeClasses[item.shape]}`}
              >
                <span className="sr-only">Open full-size image viewer:</span>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100" aria-hidden="true" />
                <span className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-3 p-5 text-left opacity-0 transition-all duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <span>
                    <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-saffron">
                      {item.category}
                    </span>
                    <span className="mt-1 block font-display text-lg leading-tight text-white">{item.title}</span>
                  </span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-saffron text-navy">
                    <ZoomIn className="h-4 w-4" aria-hidden="true" />
                  </span>
                </span>
                <span className="absolute left-4 top-4 bg-navy/70 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-white/80 backdrop-blur-sm">
                  Client photo
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-slate-600">
          Images are original photographs supplied by the client. Select an image to view it full size.
        </p>
      </div>

      <AnimatePresence>
        {activeItem ? (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-navy/95 p-4 backdrop-blur-sm sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Gallery image viewer"
            initial={reduceMotion ? undefined : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close image viewer"
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center border border-white/25 text-white transition-colors hover:border-saffron hover:text-saffron"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                step(-1);
              }}
              aria-label="Previous image"
              className="absolute left-3 z-10 flex h-11 w-11 items-center justify-center border border-white/25 text-white transition-colors hover:border-saffron hover:text-saffron sm:left-8"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>

            <figure
              className="mx-12 flex max-h-full w-full max-w-5xl flex-col items-center sm:mx-20"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative h-[65vh] w-full">
                <Image
                  key={activeItem.id}
                  src={activeItem.src}
                  alt={activeItem.alt}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              </div>
              <figcaption className="mt-5 text-center">
                <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-saffron">
                  {activeItem.category}
                </span>
                <span className="mt-1 block font-display text-xl text-white">{activeItem.title}</span>
                <span className="mt-1 block text-xs text-white/45">
                  {(activeIndex ?? 0) + 1} / {visibleItems.length} · Client photograph
                </span>
              </figcaption>
            </figure>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                step(1);
              }}
              aria-label="Next image"
              className="absolute right-3 z-10 flex h-11 w-11 items-center justify-center border border-white/25 text-white transition-colors hover:border-saffron hover:text-saffron sm:right-8"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
