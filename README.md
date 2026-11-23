# Sumant Kishore Singh — Official Portfolio Website

A premium, responsive political leader portfolio built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Lucide icons and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Production build:

```bash
npm run build
npm run start
```

## Where to edit content

Almost all editable text, images, links and placeholder values live in one file:

**`src/data/site.ts`**

| Export | What it controls |
| --- | --- |
| `site` | Name, role, location, intro, SEO description, footer text |
| `navigation` | Navbar and footer links |
| `hero` | Hero copy, CTA labels and portrait alt text |
| `about` | Biography paragraphs and highlights |
| `journey` | Timeline entries and verified/placeholder status |
| `service` | Public service cards |
| `gallery` | Gallery categories and images |
| `news` | News cards |
| `contact` | Phone, email, address, WhatsApp number, form endpoint |
| `socials` | Social media links (empty = placeholder tile) |

## Images

- Home/Hero, About, Public Service and Gallery use original JPEG photographs supplied directly by the client. They live in `public/images/` with their filenames unchanged; `src/data/site.ts` references them with URL-encoded paths. Section-by-section mapping is recorded in `IMAGE_SOURCES.md` and `public/IMAGE_CREDITS.txt`.
- The older portraits in `public/images/leader/` remain on disk but are no longer used by these sections.
- News cards still use openly licensed Wikimedia Commons illustrations, explicitly described as not depicting Sumant Kishore Singh. Their sources, authors and licences are recorded in `IMAGE_SOURCES.md` and `public/IMAGE_CREDITS.txt` (linked from the footer).
- Leadership Journey is a text-only timeline with no image slot, so it was intentionally left unchanged.

To replace an image:

1. Add the photograph to the relevant folder in `public/images/` without renaming the client originals.
2. Update the matching path in the `images` object in `src/data/site.ts`.
3. Update the related `alt` text so it describes the real photograph.
4. Update `IMAGE_SOURCES.md` and `public/IMAGE_CREDITS.txt` if the replacement image requires different attribution.

## Contact form and WhatsApp

- Set `contact.formEndpoint` in `src/data/site.ts` to a URL that accepts `POST` JSON with `fullName`, `mobile` and `message`. `email` is optional; when the visitor leaves it blank, the key is omitted from the payload, and when provided it is sent after trimming. The browser validates its format only when a value is entered. Until an endpoint is set, the form runs in a clearly-labelled demo mode and does not send data.
- Replace `contact.whatsappNumber` with the verified number in international format, digits only (for example `919876543210`).
- Replace `contact.phone`, `contact.email` and `contact.office` with verified details.

## SEO

- Edit `NEXT_PUBLIC_SITE_URL` in your environment to set the canonical domain used in Open Graph metadata.
- Page metadata and the `Person` JSON-LD block are in `src/app/layout.tsx`.
- The JSON-LD only contains verified information from `src/data/site.ts`.

## Structure

```
src/app/          layout, page, global styles, favicon
src/components/   reusable sections and UI components
src/data/site.ts  all editable content and placeholder values
public/images/    client originals plus remaining licensed illustrations
```

## Verification

- `npm run build` — passes with TypeScript checks.
- Lighthouse (desktop): Accessibility 100, Best Practices 100, SEO 100.
- Mobile navigation, gallery filtering, lightbox keyboard controls and demo form submission were browser-tested.
