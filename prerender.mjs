/**
 * ERITAGE ENT CARE — STATIC PRERENDERER + SITEMAP GENERATOR
 * ===========================================================
 * Runs after `vite build` to:
 *  1. Generate a static HTML file for every route (SPA → crawlable)
 *  2. Auto-generate public/sitemap.xml from article frontmatter
 *
 * Blog articles are read dynamically from src/content/articles/*.md —
 * no manual updates needed when new articles are added.
 *
 * Usage: node prerender.mjs   (called automatically by `npm run build`)
 */

import fs from "fs";
import path from "path";

const BASE_URL = "https://eritageentcare.com";
const DIST_DIR = "./dist";

// ── Parse YAML-style frontmatter from a markdown file ─────────────────────────
function parseFrontmatter(content) {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!match) return {};
  const data = {};
  match[1].split("\n").forEach((line) => {
    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) return;
    const key = line.slice(0, colonIdx).trim();
    const value = line.slice(colonIdx + 1).trim().replace(/^["']|["']$/g, "");
    if (key) data[key] = value;
  });
  return data;
}

// ── Static routes with their SEO metadata ─────────────────────────────────────
const STATIC_ROUTES = [
  {
    path: "/",
    title: "Eritage ENT Care | Expert Ear, Nose & Throat Specialists in Uganda",
    description:
      "Uganda's leading ENT specialists providing expert diagnosis and treatment for ear infections, hearing loss, sinusitis, tonsillitis, and more. Over 10 years clinical experience.",
    lastmod: "2026-03-06",
    changefreq: "weekly",
    priority: 1.0,
  },
  {
    path: "/about",
    title: "About Us | Eritage ENT Care | Expert ENT Specialists in Uganda",
    description:
      "Meet the specialists behind Eritage ENT Care. Over 10 years of clinical experience delivering evidence-based ear, nose, and throat care across Uganda.",
    lastmod: "2026-03-06",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    path: "/ent-services",
    title: "ENT Specialist Services | Ear, Nose & Throat Care | Eritage ENT Care",
    description:
      "Comprehensive ear, nose, and throat care from experienced ENT specialists. Expert diagnosis and treatment for all ENT conditions. Book your consultation today.",
    lastmod: "2026-03-06",
    changefreq: "monthly",
    priority: 0.9,
  },
  {
    path: "/hearing-tests",
    title: "Hearing Tests – PTA, Tympanometry & Audiology Screening | Eritage ENT Care",
    description:
      "Professional hearing tests including PTA, tympanometry, OAE, ABR, and full audiology screening. Book your hearing test at Eritage ENT Care today.",
    lastmod: "2026-03-06",
    changefreq: "monthly",
    priority: 0.9,
  },
  {
    path: "/urgent-ent-guidance",
    title: "Urgent ENT Guidance | Ear, Nose & Throat Help | Eritage ENT Care",
    description:
      "Get urgent ENT guidance for sudden ear pain, throat bleeding, blocked ears, or hearing changes. Professional symptom review via WhatsApp.",
    lastmod: "2026-03-06",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    path: "/faq",
    title: "FAQ – Eritage ENT Care | Common Questions About ENT Services",
    description:
      "Find answers to frequently asked questions about Eritage ENT Care. Learn about our ENT services, hearing tests, appointments, and clinic locations.",
    lastmod: "2026-03-06",
    changefreq: "monthly",
    priority: 0.7,
  },
  {
    path: "/reviews",
    title: "Patient Reviews – Eritage ENT Care | ENT Clinic Reviews Uganda",
    description:
      "Read patient reviews and testimonials about Eritage ENT Care. See what our patients say about our ENT services, hearing tests, and medical care.",
    lastmod: "2026-03-06",
    changefreq: "weekly",
    priority: 0.7,
  },
  {
    path: "/contact",
    title: "Contact & Locations | Eritage ENT Care | Book Consultation in Uganda",
    description:
      "Contact Eritage ENT Care for ear, nose, and throat consultations. Reach us at +256 740 166 778, via WhatsApp, or visit our clinics.",
    lastmod: "2026-03-06",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    path: "/bookings",
    title: "Book an ENT Appointment | Eritage ENT Care | Entebbe, Uganda",
    description:
      "Book your ENT consultation at Eritage ENT Care – Entebbe. Schedule via WhatsApp, phone, or our online booking form. Specialists available 24 hours.",
    lastmod: "2026-04-10",
    changefreq: "monthly",
    priority: 0.9,
  },
  {
    path: "/locations/entebbe",
    title: "Eritage ENT Care - Entebbe | ENT Clinic, Plot 34 Berkeley Road, Entebbe",
    description:
      "Eritage ENT Care - Entebbe. ENT specialist clinic at Plot 34, 48 Berkeley Road, Entebbe Road, Entebbe, Uganda. Hearing tests, sinus care, urgent ENT. Call +256 740 166 778.",
    lastmod: "2026-03-06",
    changefreq: "monthly",
    priority: 0.9,
  },
  {
    path: "/blog",
    title: "Health Articles & Tips | Eritage ENT Care",
    description:
      "Expert ENT health articles and tips from Eritage ENT Care specialists. Learn about ear infections, hearing loss prevention, allergies, and voice care.",
    lastmod: "2026-03-06",
    changefreq: "weekly",
    priority: 0.8,
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy | Eritage ENT Care",
    description: "Privacy Policy for Eritage ENT Care. Learn how we collect, use, and protect your personal information.",
    lastmod: "2026-03-06",
    changefreq: "yearly",
    priority: 0.3,
  },
  {
    path: "/terms-of-service",
    title: "Terms of Service | Eritage ENT Care",
    description: "Terms of Service for Eritage ENT Care. Read our terms and conditions for using our website and healthcare services.",
    lastmod: "2026-03-06",
    changefreq: "yearly",
    priority: 0.3,
  },
  {
    path: "/conditions/blocked-ear-entebbe",
    title: "Blocked Ear Treatment in Entebbe, Uganda | Eritage ENT Care",
    description: "Blocked ear in Entebbe? Same-day treatment at Eritage ENT Care. We treat earwax buildup, fluid, infection, and Eustachian tube problems. Call +256 740 166 778.",
    lastmod: "2026-04-13",
    changefreq: "monthly",
    priority: 0.9,
  },
  {
    path: "/conditions/ear-pain-entebbe",
    title: "Ear Pain Relief in Entebbe, Uganda | ENT Specialist | Eritage ENT Care",
    description: "Ear pain in Entebbe? Same-day ENT assessment at Eritage ENT Care. We diagnose and treat ear infections, earwax, perforated eardrums, and referred pain. Call +256 740 166 778.",
    lastmod: "2026-04-13",
    changefreq: "monthly",
    priority: 0.9,
  },
  {
    path: "/conditions/ear-discharge-entebbe",
    title: "Ear Discharge Treatment in Entebbe, Uganda | Urgent ENT Care | Eritage ENT Care",
    description: "Ear discharge in Entebbe? This is never normal. Get same-day ENT assessment at Eritage ENT Care. We treat otorrhea, perforated eardrums, and ear infections. Call +256 740 166 778.",
    lastmod: "2026-04-13",
    changefreq: "monthly",
    priority: 0.9,
  },
  {
    path: "/conditions/sinusitis-entebbe",
    title: "Sinusitis Treatment in Entebbe, Uganda | ENT Specialist | Eritage ENT Care",
    description: "Sinusitis in Entebbe? Get expert diagnosis and treatment at Eritage ENT Care. We treat acute and chronic sinusitis, nasal polyps, and recurring sinus infections. Call +256 740 166 778.",
    lastmod: "2026-04-14",
    changefreq: "monthly",
    priority: 0.9,
  },
  {
    path: "/conditions/tonsillitis-entebbe",
    title: "Tonsillitis Treatment in Entebbe, Uganda | ENT Specialist | Eritage ENT Care",
    description: "Tonsillitis in Entebbe? Get expert ENT assessment and treatment at Eritage ENT Care. We treat sore throat, strep throat, peritonsillar abscess, and recurrent tonsillitis. Call +256 740 166 778.",
    lastmod: "2026-04-14",
    changefreq: "monthly",
    priority: 0.9,
  },
];

// ── Dynamically read blog articles from src/content/articles/ ─────────────────
const articlesDir = path.resolve("src/content/articles");
const articleFiles = fs.readdirSync(articlesDir).filter((f) => f.endsWith(".md"));

const BLOG_ROUTES = articleFiles
  .map((file) => {
    const content = fs.readFileSync(path.join(articlesDir, file), "utf-8");
    const fm = parseFrontmatter(content);
    if (!fm.slug) return null;
    return {
      path: `/blog/${fm.slug}`,
      title: fm.title ? `${fm.title} | Eritage ENT Care` : "Eritage ENT Care Blog",
      description: fm.description || "",
      lastmod: fm.date || null,
      changefreq: "monthly",
      priority: 0.7,
    };
  })
  .filter(Boolean)
  .sort((a, b) => (b.lastmod || "").localeCompare(a.lastmod || ""));

const ALL_ROUTES = [...STATIC_ROUTES, ...BLOG_ROUTES];

// ── Read the built index.html template ────────────────────────────────────────
const template = fs.readFileSync(path.join(DIST_DIR, "index.html"), "utf-8");

let generated = 0;

for (const route of ALL_ROUTES) {
  const routePath = route.path === "/" ? "" : route.path;
  const dir = path.join(DIST_DIR, routePath);
  const file = path.join(dir, "index.html");

  // Inject per-page title, description, canonical, and Open Graph tags
  let html = template
    .replace(/<title>[^<]*<\/title>/, `<title>${route.title}</title>`)
    .replace(
      /<meta name="description"[^>]*>/,
      `<meta name="description" content="${route.description}" />`
    )
    .replace(
      /<link rel="canonical"[^>]*>/,
      `<link rel="canonical" href="${BASE_URL}${route.path}" />`
    )
    .replace(
      /<meta property="og:url"[^>]*>/,
      `<meta property="og:url" content="${BASE_URL}${route.path}" />`
    )
    .replace(
      /<meta property="og:title"[^>]*>/,
      `<meta property="og:title" content="${route.title}" />`
    )
    .replace(
      /<meta property="og:description"[^>]*>/,
      `<meta property="og:description" content="${route.description}" />`
    );

  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(file, html);
  generated++;
  console.log(`✓ Prerendered: ${route.path}`);
}

console.log(`\n✅ Prerendering complete — ${generated} pages generated.`);

// ── Auto-generate public/sitemap.xml ──────────────────────────────────────────
const sitemapEntries = ALL_ROUTES.map((r) => {
  const lastmodTag = r.lastmod ? `<lastmod>${r.lastmod}</lastmod>` : "";
  return `  <url><loc>${BASE_URL}${r.path}</loc>${lastmodTag}<changefreq>${r.changefreq}</changefreq><priority>${r.priority}</priority></url>`;
});

const sitemapXml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  sitemapEntries.join("\n") +
  `\n</urlset>`;

// Write to both public/ (source of truth for git) and dist/ (served by Vercel)
fs.writeFileSync("public/sitemap.xml", sitemapXml);
fs.writeFileSync(path.join(DIST_DIR, "sitemap.xml"), sitemapXml);
console.log(`✅ Sitemap generated — ${sitemapEntries.length} URLs written to public/sitemap.xml and dist/sitemap.xml`);
