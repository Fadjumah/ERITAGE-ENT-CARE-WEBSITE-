# Eritage ENT Care — Website

**eritageentcare.com** | React + Vite SPA | Deployed on Vercel via GitHub

---

## 🗂 Project Structure

```
eritage-ent-care/
├── index.html              ← SEO-correct canonical (no www)
├── vercel.json             ← www→non-www redirect + security headers
├── prerender.mjs           ← Static HTML generator (runs after build)
├── package.json            ← build script: vite build && node prerender.mjs
│
├── public/
│   ├── robots.txt          ← No Disallow on .json, sitemap correct URL
│   ├── sitemap.xml         ← All 30 routes, no www
│   └── favicon.png
│
└── src/
    ├── config/
    │   └── site.ts         ← ⭐ SINGLE SOURCE OF TRUTH (URL, phone, etc.)
    │
    ├── components/
    │   ├── ui/             ← shadcn/ui components (don't edit manually)
    │   ├── layout/         ← Header, Footer, FloatingContactButtons, MedicalDisclaimer, ScrollToTop
    │   ├── sections/       ← Page sections: Hero, Services, About, Locations, FAQSection...
    │   └── shared/         ← Reusable: AuthorSection, RelatedArticles, AdSense, ScrollReveal...
    │
    ├── pages/
    │   ├── Index.tsx
    │   ├── About.tsx
    │   ├── Blog.tsx / BlogArticle.tsx
    │   ├── ENTServices.tsx / HearingTests.tsx / UrgentENTGuidance.tsx
    │   ├── FAQ.tsx / Reviews.tsx / Contact.tsx
    │   ├── locations/
    │   │   ├── LocationEntebbe.tsx
    │   │   └── LocationKampala.tsx
    │   └── legal/
    │       ├── PrivacyPolicy.tsx
    │       └── TermsOfService.tsx
    │
    ├── content/
    │   └── articles/       ← 15 blog articles as Markdown (.md)
    │
    ├── utils/
    │   └── blogLoader.ts   ← Reads .md articles via Vite glob import
    │
    └── hooks/              ← useScrollReveal, use-toast
```

---

## ⚡ Key SEO Fixes Applied

| Bug | Fix |
|-----|-----|
| `index.html` canonical pointed to `/locations/entebbe` | Now points to `https://eritageentcare.com/` |
| All URLs used `www.` | All URLs now use non-www throughout |
| No prerendering (CSR only) | `prerender.mjs` generates static HTML for every route |
| `robots.txt` blocked `.json` files | Removed; only blocks `/api/` and `/_supabase/` |
| No www→non-www redirect | `vercel.json` has permanent 301 redirect |

---

## 🛠 Development

```bash
npm install
npm run dev          # starts on localhost:8080
npm run build        # vite build + prerender all routes
npm run preview      # preview production build
```

---

## 📝 Adding a Blog Article

1. Create `src/content/articles/your-slug.md`
2. Add frontmatter:
   ```markdown
   ---
   title: "Your Article Title"
   description: "SEO description"
   slug: "your-slug"
   icon: "BookOpen"
   date: "2026-03-07"
   author: "Lubega Fahad Juma"
   authorTitle: "Clinical Otolaryngologist"
   authorExperience: "10+ years"
   ---
   ```
3. Add the route to `prerender.mjs` ROUTES array
4. Add the URL to `public/sitemap.xml`

---

## ⚙️ Changing Site-Wide Settings

Edit **`src/config/site.ts`** — this is the single source of truth for:
- Domain URL (no www)
- Phone numbers
- Email
- WhatsApp link
- Location details
- AdSense publisher ID

---

## 🚀 Deploy

Push to GitHub → Vercel auto-deploys. The build command `vite build && node prerender.mjs` runs automatically.

After first deploy, submit sitemap in Google Search Console:
`https://eritageentcare.com/sitemap.xml`
