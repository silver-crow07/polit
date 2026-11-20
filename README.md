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

- The Home/Hero and About sections use two different official photographs of Sumant Kishore Singh from his verified Facebook and Instagram profiles, optimized as WebP in `public/images/leader/`. Sources and permission notes are recorded in `IMAGE_SOURCES.md` and `public/IMAGE_CREDITS.txt`.
- Supporting sections use 16 unique, openly licensed Wikimedia Commons photographs. They are **illustrative only** and are explicitly described as not depicting Sumant Kishore Singh or his activities. Original sources, authors and licences are recorded in `IMAGE_SOURCES.md` and in the public credits file `public/IMAGE_CREDITS.txt` (linked from the footer).
- Gallery, Public Service and News images were resized and converted to WebP in `public/images/{gallery,community,news}/`.

To replace illustrative images:

1. Add an official photograph to the relevant folder in `public/images/`.
2. Update the matching path in the `images` object in `src/data/site.ts`.
3. Update the related `alt` text so it describes the real photograph.
4. Update `IMAGE_SOURCES.md` and `public/IMAGE_CREDITS.txt` if the replacement image requires different attribution.

## Contact form and WhatsApp

- Set `contact.formEndpoint` in `src/data/site.ts` to a URL that accepts `POST` JSON with `fullName`, `mobile`, `email` and `message`. Until then the form runs in a clearly-labelled demo mode and does not send data.
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
public/images/    placeholder artwork (replace with official photos)
```

## Verification

- `npm run build` — passes with TypeScript checks.
- Lighthouse (desktop): Accessibility 100, Best Practices 100, SEO 100.
- Mobile navigation, gallery filtering, lightbox keyboard controls and demo form submission were browser-tested.
