import { contact, navigation, site, socials } from "@/data/site";
import { AtSign, Camera, CirclePlay, Globe, Mail, MapPin, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const socialIcons: Record<(typeof socials)[number]["icon"], LucideIcon> = {
  facebook: Globe,
  instagram: Camera,
  youtube: CirclePlay,
  twitter: AtSign,
};

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-saffron bg-navy text-white">
      <div className="container-custom grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:gap-10 lg:py-20">
        <div className="max-w-sm">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center border border-saffron/70 font-display text-sm font-bold text-saffron">
              {site.initials}
            </span>
            <span className="text-sm font-bold uppercase tracking-[0.16em]">{site.name}</span>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-white/55">{site.intro}</p>
          <p className="mt-4 text-xs leading-relaxed text-white/60">
            {site.alternateName} · {site.location}
          </p>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-saffron">Quick Navigation</h2>
          <nav aria-label="Footer navigation" className="mt-6 grid gap-3">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/60 transition-colors hover:text-saffron"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-saffron">Contact</h2>
          <div className="mt-6 space-y-5 text-sm text-white/60">
            <p className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-saffron/70" aria-hidden="true" />
              {contact.phone.value}
            </p>
            <p className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-saffron/70" aria-hidden="true" />
              {contact.email.value}
            </p>
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-saffron/70" aria-hidden="true" />
              {contact.location.value}
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-saffron">Follow Us</h2>
          <p className="mt-6 text-xs leading-relaxed text-white/60">
            Official social media links will be added here once verified accounts are confirmed.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {socials.map((social) => {
              const SocialIcon = socialIcons[social.icon];
              if (!social.href) {
                return (
                  <span
                    key={social.label}
                    title={`${social.label} link to be added`}
                    className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/30"
                  >
                    <SocialIcon className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">{social.label} link to be added</span>
                  </span>
                );
              }
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center border border-white/20 text-white/70 transition-colors hover:border-saffron hover:text-saffron"
                >
                  <SocialIcon className="h-4 w-4" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-custom flex flex-col justify-between gap-3 py-6 text-xs text-white/60 sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <p>{site.footerText}</p>
            <a
              href={site.imageCreditsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-white/25 underline-offset-4 transition-colors hover:text-saffron"
            >
              {site.imageCreditsLabel}
            </a>
          </div>
          <p className="uppercase tracking-[0.16em]">Hasayan · Hathras · Uttar Pradesh</p>
        </div>
      </div>
    </footer>
  );
}
