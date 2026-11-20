import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { contact, site } from "@/data/site";
import { Mail, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type DetailKey = "phone" | "email" | "office" | "location";

const details: { key: DetailKey; icon: LucideIcon }[] = [
  { key: "phone", icon: Phone },
  { key: "email", icon: Mail },
  { key: "office", icon: MapPin },
  { key: "location", icon: Navigation },
];

const whatsappHref = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
  `Hello ${site.name}, I would like to get in touch.`,
)}`;

export function ContactSection() {
  return (
    <section id="contact" className="section-spacing bg-mist">
      <div className="container-custom grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <div className="relative h-full overflow-hidden bg-navy p-8 text-white sm:p-12">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full border border-saffron/20"
              aria-hidden="true"
            />

            <div className="relative">
              <SectionHeading eyebrow={contact.eyebrow} heading={contact.heading} light />
              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/60">{contact.description}</p>

              <div className="mt-10 space-y-6">
                {details.map(({ key, icon: IconComponent }) => {
                  const item = contact[key];
                  return (
                    <div key={key} className="flex items-start gap-4 border-b border-white/10 pb-6 last:border-0">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-saffron/40 text-saffron">
                        <IconComponent className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
                      </span>
                      <div>
                        <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
                          {item.label}
                        </span>
                        <span className="mt-1 block text-[15px] font-medium text-white">{item.value}</span>
                        <span className="mt-0.5 block text-[11px] text-saffron/70">{item.note}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex items-center gap-3 border border-white/25 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:border-[#25D366] hover:bg-[#25D366] hover:text-white"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Chat on WhatsApp
              </a>
              <p className="mt-3 text-[11px] text-white/60">{contact.whatsappNote}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="h-full bg-white p-8 shadow-[0_25px_70px_-45px_rgba(16,29,53,0.55)] sm:p-12">
            <div className="mb-8 flex items-center gap-4">
              <span className="eyebrow-line" />
              <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-saffron-ink">Write to us</span>
            </div>
            <h2 className="font-display text-3xl leading-tight text-navy sm:text-4xl">Send a Message</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              Fill in the details below. This form is ready to be connected to your preferred email or CRM service.
            </p>
            <div className="mt-9">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
