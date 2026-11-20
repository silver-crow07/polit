"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation, site } from "@/data/site";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector(item.href))
      .filter((element): element is Element => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveSection(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.15, 0.4, 0.7] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
          scrolled || menuOpen
            ? "border-white/10 bg-navy/95 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="container-custom flex h-[76px] items-center justify-between gap-6">
          <a href="#home" className="group flex items-center gap-3" onClick={() => setMenuOpen(false)}>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-saffron/70 font-display text-[13px] font-bold tracking-wide text-saffron transition-colors group-hover:bg-saffron group-hover:text-navy">
              {site.initials}
            </span>
            <span className="leading-tight">
              <span className="block text-[13px] font-bold uppercase tracking-[0.14em] text-white sm:text-sm">
                Sumant Kishore
              </span>
              <span className="block text-[10px] font-medium uppercase tracking-[0.42em] text-white/55">
                Singh
              </span>
            </span>
          </a>

          <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative py-2 text-[12px] font-semibold uppercase tracking-[0.1em] transition-colors ${
                    isActive ? "text-saffron" : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-px bg-saffron transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden items-center gap-2 border border-white/25 px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-colors hover:border-saffron hover:bg-saffron hover:text-navy xl:inline-flex"
            >
              Contact
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="flex h-11 w-11 items-center justify-center border border-white/25 text-white transition-colors hover:border-saffron hover:text-saffron lg:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-navigation"
            className="fixed inset-0 z-40 flex flex-col bg-navy px-6 pb-10 pt-28 lg:hidden"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="h-px w-full bg-white/10" />
            <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto py-6">
              {navigation.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + index * 0.045, duration: 0.35 }}
                  className="flex items-baseline gap-4 border-b border-white/10 py-4 font-display text-2xl text-white/90 transition-colors hover:text-saffron sm:text-3xl"
                >
                  <span className="font-sans text-[10px] font-semibold tracking-widest text-saffron/70">
                    0{index + 1}
                  </span>
                  {item.label}
                </motion.a>
              ))}
            </nav>
            <div className="text-xs uppercase tracking-[0.2em] text-white/60">{site.location}</div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
