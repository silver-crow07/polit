import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const tsvPath = process.argv[2];
const tsv = (await fs.readFile(tsvPath, "utf16le")).replace(/^\uFEFF/, "");
const rows = new Map();
for (const line of tsv.split(/\r?\n/)) {
  const cols = line.split("\t");
  if (cols.length < 7) continue;
  rows.set(cols[1], { query: cols[0], title: cols[1], license: cols[2], size: cols[3], artist: cols[4], source: cols[5], thumb: cols[6] });
}

const manifest = [
  { match: "Audience , Punjabi language Poets' Meet", out: "gallery/public-gathering.webp", label: "Public gathering" },
  { match: "Wikimedians having meetup with their community", out: "gallery/community-meeting.webp", label: "Community meeting" },
  { match: "A holi gathering in village", out: "gallery/village-gathering.webp", label: "Village gathering" },
  { match: "Volunteers of Wikipedia Kolkata Community - Bengali Wikipedia Stall", out: "gallery/community-stall.webp", label: "Community stall" },
  { match: "Tripura Medical College interns imparting health education to rural people 001", out: "gallery/rural-health-education.webp", label: "Health education" },
  { match: "Audience - Panel Discussion - Conversation With The Wikimedia Foundation Board Of Trustees", out: "gallery/public-discussion.webp", label: "Public discussion" },
  { match: "Volunteers helping at the Golden Temple langar", out: "gallery/community-service.webp", label: "Community service" },
  { match: "Women planting a tree, Umaria district", out: "gallery/tree-planting.webp", label: "Tree planting" },
  { match: "Rural Roads in Manthani Andhra Pradesh", out: "community/rural-road.webp", label: "Rural road" },
  { match: "Medical camp at Kantadih Purulia by Voice Of World and other 20201218 113026 01", out: "community/medical-camp.webp", label: "Medical camp" },
  { match: "Gram Panchayat Office, Lohangi", out: "community/gram-panchayat-office.webp", label: "Panchayat office" },
  { match: "India - Faces - Rural women driving their own change 1", out: "community/rural-women.webp", label: "Rural women" },
  { match: "Tripura Medical College interns imparting health education to rural people 002", out: "news/rural-health-outreach.webp", label: "Health outreach" },
  { match: "Audience in AAC", out: "news/public-event-audience.webp", label: "Event audience" },
  { match: "Gram Panchayat Office, Deogarh", out: "news/local-office.webp", label: "Local office" },
  { match: "Free community kitchen, daana volunteer run", out: "news/community-kitchen.webp", label: "Community kitchen" },
];

const clean = (html = "") =>
  html
    .replace(/<[^>]*>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

async function fetchWithRetry(url, attempts = 8) {
  for (let i = 0; i < attempts; i++) {
    const res = await fetch(url, { headers: { "User-Agent": "SumantPortfolioImageSetup/1.0 (asset licensing research)" } });
    if (res.ok) return res;
    if (res.status === 429 || res.status >= 500) {
      await new Promise((resolve) => setTimeout(resolve, 1200 * (i + 1)));
      continue;
    }
    throw new Error(`${res.status} ${res.statusText} for ${url}`);
  }
  throw new Error(`Failed after ${attempts} attempts: ${url}`);
}

const licenseUrls = {
  "CC BY-SA 4.0": "https://creativecommons.org/licenses/by-sa/4.0/",
  "CC BY-SA 3.0": "https://creativecommons.org/licenses/by-sa/3.0/",
  "CC BY-SA 2.0": "https://creativecommons.org/licenses/by-sa/2.0/",
  "CC BY 4.0": "https://creativecommons.org/licenses/by/4.0/",
  "CC BY 3.0": "https://creativecommons.org/licenses/by/3.0/",
  "CC BY 2.0": "https://creativecommons.org/licenses/by/2.0/",
};

const metadata = [];
const composites = [];

for (let i = 0; i < manifest.length; i++) {
  const item = manifest[i];
  const row = [...rows.values()].find((r) => r.title.includes(item.match));
  if (!row) throw new Error(`No Commons row found for ${item.match}`);

  const outPath = path.join(process.cwd(), "public", "images", item.out);
  await fs.mkdir(path.dirname(outPath), { recursive: true });
  let exists = false;
  try {
    await fs.access(outPath);
    exists = true;
  } catch {}
  let input;
  let output;
  if (exists) {
    input = await fs.readFile(outPath);
    const sourceMeta = await sharp(input).metadata();
    output = { width: sourceMeta.width, height: sourceMeta.height };
  } else {
    const imgRes = await fetchWithRetry(row.thumb);
    input = Buffer.from(await imgRes.arrayBuffer());
    output = await sharp(input, { failOn: "none" })
      .rotate()
      .resize({ width: 1400, height: 1400, fit: "inside", withoutEnlargement: true })
      .webp({ quality: 80, effort: 5 })
      .toFile(outPath);
  }

  let apiData = null;
  try {
    const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&format=json&redirects=1&prop=imageinfo&titles=${encodeURIComponent(row.title)}&iiprop=url%7Cextmetadata`;
    const apiRes = await fetchWithRetry(apiUrl);
    apiData = await apiRes.json();
  } catch (error) {
    console.warn(`Metadata API unavailable for ${row.title}; using recorded search metadata.`);
  }
  const page = apiData ? Object.values(apiData.query?.pages ?? {})[0] : undefined;
  const info = page?.imageinfo?.[0] ?? {};
  const meta = info.extmetadata ?? {};
  const license = clean(meta.LicenseShortName?.value ?? row.license);
  const record = {
    file: item.out,
    title: page?.title ?? row.title,
    source: info.descriptionurl ?? row.source,
    author: clean(meta.Artist?.value ?? row.artist) || "Wikimedia Commons contributor",
    license,
    licenseUrl: clean(meta.LicenseUrl?.value ?? "") || licenseUrls[license] || "",
    credit: clean(meta.Credit?.value ?? ""),
    dimensions: `${output.width}×${output.height}`,
    label: item.label,
  };
  metadata.push(record);

  const thumb = await sharp(input, { failOn: "none" })
    .rotate()
    .resize(304, 188, { fit: "cover", position: "centre" })
    .jpeg({ quality: 80 })
    .toBuffer();
  const col = i % 4;
  const rowIndex = Math.floor(i / 4);
  const left = 20 + col * 315;
  const top = 20 + rowIndex * 230;
  composites.push({ input: thumb, left, top });
  const labelSvg = `<svg width="304" height="34"><rect width="304" height="34" fill="#101D35"/><text x="8" y="22" font-family="Arial" font-size="12" fill="#ffffff">${String(i + 1).padStart(2, "0")} ${item.label}</text></svg>`;
  composites.push({ input: Buffer.from(labelSvg), left, top: top + 188 });

  console.log(`${item.out}\t${output.width}x${output.height}\t${record.license}`);
  await new Promise((resolve) => setTimeout(resolve, 800));
}

const sheet = await sharp({ create: { width: 1280, height: 940, channels: 3, background: "#e9ecf1" } })
  .composite(composites)
  .jpeg({ quality: 88 })
  .toFile(path.join(process.cwd(), "..", "..", "Users", "user", "AppData", "Local", "Temp", "opencode", "image-contact-sheet.jpg"));

await fs.mkdir(path.join(process.cwd(), "public"), { recursive: true });
const creditLines = [
  "ILLUSTRATIVE IMAGE CREDITS",
  "",
  "These photographs are generic, openly licensed illustrations. They do not depict",
  "Sumant Kishore Singh and do not document his activities or events.",
  "Each file was resized and converted to WebP for this website.",
  "",
  ...metadata.flatMap((m, i) => [
    `${String(i + 1).padStart(2, "0")}. ${m.file}`,
    `   ${m.title.replace(/^File:/, "")}`,
    `   Author: ${m.author}`,
    `   License: ${m.license}${m.licenseUrl ? ` — ${m.licenseUrl}` : ""}`,
    `   Source: ${m.source}`,
    "",
  ]),
];
await fs.writeFile(path.join(process.cwd(), "public", "IMAGE_CREDITS.txt"), creditLines.join("\n") + "\n", "utf8");

const markdown = [
  "# Image source and licence record",
  "",
  "## Person search result",
  "",
  "No photograph that could be verified as depicting Sumant Kishore Singh / Sumant Kishor Singh was found in the searches performed (Bing web and image search, Google News RSS, Wikimedia Commons search and Wikipedia search). Searches used the name variants, Hasayan, Hathras, Block Pramukh and Hindi transliterations. Unrelated results (other people named Sumant, a Pinterest map, and the 2020 Hathras case coverage) were excluded.",
  "",
  "The hero and About portrait slots therefore remain explicit placeholders awaiting an official photograph. No AI-generated face or unrelated person is used as his portrait.",
  "",
  "## Integrated illustrative images",
  "",
  "All images below are generic illustrations, not photographs of Sumant Kishore Singh and not evidence of any event, project or activity. They were sourced from Wikimedia Commons because the licence and author are recorded there. Files were resized and converted to WebP.",
  "",
  "| # | File | Commons file | Author | Licence | Source |",
  "| --- | --- | --- | --- | --- | --- |",
  ...metadata.map(
    (m, i) =>
      `| ${i + 1} | \`public/images/${m.file}\` | ${m.title.replace(/^File:/, "")} | ${m.author.replace(/\|/g, "\\|")} | ${m.license}${m.licenseUrl ? ` ([licence](${m.licenseUrl}))` : ""} | [Commons file page](${m.source}) |`,
  ),
  "",
  "CC BY and CC BY-SA images require attribution; CC BY-SA also requires share-alike for adaptations. The public credits file is served at `/IMAGE_CREDITS.txt` and linked from the site footer.",
  "",
  "## Still required",
  "",
  "- Official portrait for the hero and About sections.",
  "- Verified photographs of Sumant Kishore Singh at public meetings, community interactions and events for the Gallery.",
  "- Photographs that genuinely correspond to any published news item.",
];

await fs.writeFile(path.join(process.cwd(), "IMAGE_SOURCES.md"), markdown.join("\n") + "\n", "utf8");
console.log(`\nWrote IMAGE_SOURCES.md and public/IMAGE_CREDITS.txt for ${metadata.length} images.`);
