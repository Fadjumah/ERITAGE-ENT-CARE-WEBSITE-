# Eritage ENT Care — Claude Code Project Memory

Eritage ENT Care (`eritageentcare.com`) is a production ENT clinic website for a specialist ear, nose & throat clinic in Entebbe, Uganda. The goal is to rank highly on Google for local ENT searches, drive appointment bookings, and maintain a strong Google Business Profile (GBP) correlation for the Entebbe location.

---

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18.3 + Vite 5.4 (SPA) |
| Language | TypeScript 5.8 |
| Routing | React Router DOM v6 |
| Styling | Tailwind CSS 3.4 + shadcn/ui (Radix UI) |
| SEO metadata | React Helmet Async |
| Static prerender | `prerender.mjs` — runs after `vite build`, generates static HTML for all 31 routes so Googlebot can crawl the SPA |
| Blog | Markdown files in `src/content/articles/`, parsed by `src/utils/blogLoader.ts` |
| Backend/DB | Supabase (client in `src/integrations/supabase/`) |
| Analytics | `@vercel/analytics` |
| Ads | Google AdSense (`ca-pub-1241677876393680`) |
| Deployment | Vercel (auto-deploy on push to `main`) |

---

## How to Run Locally

```bash
npm install
npm run dev        # dev server at http://localhost:8080
npm run build      # vite build + prerender (generates dist/)
npm run preview    # preview the production build
```

---

## Key Environment Variables

These are needed for full functionality. Copy `.env.example` if it exists, or create `.env`:

```
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

No other runtime secrets — AdSense and analytics IDs are hardcoded in `src/config/site.ts`.

---

## Central Config — Single Source of Truth

**`src/config/site.ts`** — edit this file and all pages update automatically:
- Site URL, brand name, tagline
- Phone numbers, email, WhatsApp link
- **Entebbe location** (GBP-exact name, full address, map URLs, review URL, coordinates)
- Specialist names and credentials
- AdSense slot IDs

> **NEVER hardcode phone numbers, addresses, or URLs directly in page components.**

---

## File & Folder Structure

```
ERITAGE-ENT-CARE-WEBSITE-/
├── CLAUDE.md                        ← This file (auto-updated by stop hook)
├── index.html                       ← HTML entry + static fallback SEO meta + org schema
├── prerender.mjs                    ← Post-build static HTML generator (31 routes)
├── vercel.json                      ← Deployment config (www redirect, SPA rewrites, caching)
├── public/
│   ├── sitemap.xml                  ← 30 routes with lastmod dates
│   └── robots.txt
├── src/
│   ├── config/site.ts               ← SINGLE SOURCE OF TRUTH for all constants
│   ├── App.tsx                      ← React Router route definitions
│   ├── pages/
│   │   ├── Index.tsx                ← Homepage (3 JSON-LD schemas)
│   │   ├── About.tsx                ← About + Physician schemas (E-E-A-T)
│   │   ├── ENTServices.tsx
│   │   ├── HearingTests.tsx
│   │   ├── UrgentENTGuidance.tsx
│   │   ├── FAQ.tsx
│   │   ├── Reviews.tsx
│   │   ├── Blog.tsx                 ← Blog listing
│   │   ├── BlogArticle.tsx          ← Dynamic blog post (Article + FAQ schema)
│   │   ├── Contact.tsx
│   │   ├── Bookings.tsx             ← GBP booking URL page (/bookings) — ReserveAction schema
│   │   ├── locations/
│   │   │   ├── LocationEntebbe.tsx  ← PRIMARY GBP-correlated location page
│   │   │   └── LocationKampala.tsx  ← Coming Soon
│   │   └── legal/
│   ├── components/
│   │   ├── layout/                  ← Header, Footer (NAP block), FloatingContactButtons
│   │   ├── sections/                ← Hero, Services, Locations, AppointmentForm, etc.
│   │   └── shared/
│   │       └── SEO.tsx              ← Reusable Helmet wrapper (og:locale, twitter:site, schema)
│   ├── content/articles/            ← 15 blog articles as Markdown with YAML frontmatter
│   └── utils/blogLoader.ts          ← Vite glob-based Markdown parser
└── .claude/
    ├── settings.json                ← Hook configuration
    └── hooks/
        ├── session-start.sh         ← Installs deps on session start
        └── session-stop.sh          ← Auto-updates CLAUDE.md + commits + pushes to origin
```

---

## Routes (31 total)

| Path | Page |
|------|------|
| `/` | Homepage |
| `/about` | About |
| `/ent-services` | ENT Services |
| `/hearing-tests` | Hearing Tests |
| `/urgent-ent-guidance` | Urgent ENT |
| `/faq` | FAQ |
| `/reviews` | Reviews |
| `/contact` | Contact |
| `/bookings` | **GBP Booking URL** — inline form + ReserveAction schema |
| `/locations/entebbe` | **Primary GBP location page** |
| `/locations/kampala` | Coming Soon |
| `/blog` | Blog index |
| `/blog/:slug` | 15 blog articles |
| `/privacy-policy` | Privacy |
| `/terms-of-service` | Terms |

---

## Google Business Profile — Entebbe

The website is tightly correlated with the GBP listing. **Do not change these without updating GBP too:**

| Field | Value |
|-------|-------|
| GBP Name | `Eritage ENT Care - Entebbe` |
| Street | `Plot 34, 48 Berkeley Road, Entebbe Road` |
| City | `Entebbe` |
| Region | `Central Region` |
| Country | `Uganda` |
| Maps URL | `https://maps.app.goo.gl/jyV5xBRkD95u2i4B8` |
| Review URL | `https://g.page/r/Ceg235aaSzr6EBI/review` |
| Coordinates | `0.0527778, 32.4580556` |

> NAP (Name, Address, Phone) must be identical in `site.ts`, all page schemas, Footer, and Contact page.

---

## SEO Architecture

- **Prerender**: `prerender.mjs` generates static HTML (title, description, canonical, og:title, og:description, og:url) for every route — Googlebot sees pre-populated meta, not a blank SPA shell.
- **Schemas live in page files** (not a shared component) because each page needs unique structured data.
- **`SEO.tsx`** is a lightweight Helmet wrapper used by pages that don't need custom schema.
- **Sitemap**: `/public/sitemap.xml` — 30 entries with `lastmod` dates from article frontmatter.

---

## Active Remote & Branch

- **Remote**: `origin` → `https://github.com/fadjumah/eritage-ent-care-website-`
- **Production branch**: `main` (Vercel auto-deploys on push)
- **Feature work**: branch off `main`, merge back when done

---

## Auto-Push on Session End

The `session-stop.sh` hook runs automatically at the end of every Claude Code session and:
1. Updates the **Last Session Snapshot** block in this file
2. Commits the update (`chore: auto-update CLAUDE.md ...`)
3. **Pushes the current branch to `origin`** (retries up to 4×, exponential backoff)

This means every committed change — including the bookings page and any future work — is automatically pushed to GitHub so Vercel deploys without manual intervention.

> Only committed changes are pushed. Uncommitted/WIP files are never auto-committed by the hook.

---

## Last Session Snapshot (auto-updated: 2026-04-10 21:27 UTC)
- **Branch:** `main`
- **Last 5 commits:**
```
02f5f90 chore: auto-update CLAUDE.md session snapshot [2026-04-10 21:23 UTC]
e863910 chore: auto-update CLAUDE.md session snapshot [2026-04-10 21:19 UTC]
3e7ce41 chore: auto-push on session end + update CLAUDE.md
c07443f chore: auto-update CLAUDE.md session snapshot [2026-04-10 21:15 UTC]
cf6d383 chore: auto-update CLAUDE.md session snapshot [2026-04-10 21:15 UTC]
```
