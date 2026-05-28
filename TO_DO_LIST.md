# Eritage ENT Care — Growth Execution System

> **Mission**: Dominate local ENT search in Entebbe. Win AI citations. Convert visitors into patients.
> **Last updated**: 2026-05-28
> **Owner**: Claude Code growth agent

---

## DASHBOARD

| Metric | Target | Status |
|--------|--------|--------|
| Condition landing pages live | 10 | 10 / 10 |
| Blog articles (AI-optimized) | 15 | 11 / 15 |
| Routes in sitemap | 40+ | 36 current |
| Structured data (MedicalCondition) | On all condition pages | 10 |
| Internal links (condition ↔ blog) | Full mesh | Full |
| GBP reviews | 50+ | Unknown |

---

## SPRINT 1 — HIGHEST ROI (Do This First)

### P0: Condition Landing Pages

These are NOT blog posts. They are high-intent, conversion-optimized pages at `/conditions/*`.
Each page must have: direct answer → causes → symptoms → when to seek help → CTA.

---

#### 1. Blocked Ear Treatment Entebbe
**Route**: `/conditions/blocked-ear-entebbe`
**Target query**: "blocked ear treatment Entebbe" / "ear feels blocked Uganda"

- [x] **Create** `src/pages/conditions/BlockedEar.tsx`
  - H1: "Blocked Ear Treatment in Entebbe, Uganda"
  - Section: What causes a blocked ear (earwax, fluid, infection, Eustachian tube)
  - Section: Symptoms (muffled hearing, fullness, pain, tinnitus)
  - Section: When to seek help (red flags: fever, sudden hearing loss, discharge)
  - Section: How we treat it at Eritage ENT Care, Entebbe
  - CTA: Book appointment / WhatsApp / Call button (above fold + bottom)
  - Schema: `MedicalCondition` JSON-LD + `MedicalClinic` breadcrumb
  - Canonical: `https://eritageentcare.com/conditions/blocked-ear-entebbe`
- [x] **Register** route in `src/App.tsx`
- [x] **Add** to `prerender.mjs` routes array
- [x] **Add** to `public/sitemap.xml`
- [x] **Internal links**: Link FROM `/ent-services`, `/blog/understanding-ear-infections`, `/blog/ear-discharge-otorrhea`
- [x] **Internal links**: Link TO `/conditions/ear-pain-entebbe`, `/conditions/ear-discharge-entebbe`, `/hearing-tests`

---

#### 2. Ear Pain Relief — Entebbe
**Route**: `/conditions/ear-pain-entebbe`
**Target query**: "ear pain relief Entebbe" / "otalgia treatment Uganda"

- [x] **Create** `src/pages/conditions/EarPain.tsx`
  - H1: "Ear Pain Relief in Entebbe, Uganda"
  - Section: Common causes (infection, wax, referred pain from throat/jaw, swimmer's ear)
  - Section: Symptoms to watch (sharp pain, throbbing, discharge, fever)
  - Section: Red flags — come in today (sudden severe pain, facial weakness, high fever)
  - Section: Treatment options at Eritage ENT Care
  - CTA: WhatsApp for urgent triage + book appointment
  - Schema: `MedicalCondition` JSON-LD
  - Canonical: `https://eritageentcare.com/conditions/ear-pain-entebbe`
- [x] **Register** route in `src/App.tsx`
- [x] **Add** to `prerender.mjs`
- [x] **Add** to `public/sitemap.xml`
- [x] **Internal links**: Link FROM `/urgent-ent-guidance`, `/ent-services`, `/blog/understanding-ear-infections`
- [x] **Internal links**: Link TO `/conditions/blocked-ear-entebbe`, `/conditions/ear-discharge-entebbe`

---

#### 3. Ear Discharge Urgent Care — Entebbe
**Route**: `/conditions/ear-discharge-entebbe`
**Target query**: "ear discharge treatment Entebbe" / "otorrhea specialist Uganda"

- [x] **Create** `src/pages/conditions/EarDischarge.tsx`
  - H1: "Ear Discharge (Otorrhea) — Urgent ENT Care in Entebbe"
  - Section: What ear discharge means (infection, perforation, cholesteatoma)
  - Section: Types (clear, yellow/green pus, bloody — what each means)
  - Section: Why you must NOT ignore it
  - Section: How we diagnose and treat at Eritage ENT Care
  - CTA: "This is urgent — WhatsApp us now" (styled as alert)
  - Schema: `MedicalCondition` JSON-LD
  - Canonical: `https://eritageentcare.com/conditions/ear-discharge-entebbe`
- [x] **Register** route in `src/App.tsx`
- [x] **Add** to `prerender.mjs`
- [x] **Add** to `public/sitemap.xml`
- [x] **Internal links**: Link FROM `/urgent-ent-guidance`, `/blog/ear-discharge-otorrhea`
- [x] **Internal links**: Link TO `/conditions/ear-pain-entebbe`, `/conditions/blocked-ear-entebbe`

---

## SPRINT 2 — EXPAND CONDITION AUTHORITY

Build topical cluster. Each page = one condition, one Entebbe intent.

### P1: Additional Condition Pages (build after Sprint 1)

| # | Route | Target Query | Priority | Status |
|---|-------|-------------|----------|--------|
| 4 | `/conditions/tinnitus-entebbe` | "ringing in ears treatment Entebbe" | HIGH | DONE |
| 5 | `/conditions/hearing-loss-entebbe` | "hearing loss specialist Entebbe Uganda" | HIGH | DONE |
| 6 | `/conditions/sinusitis-entebbe` | "sinusitis treatment Entebbe" | HIGH | DONE |
| 7 | `/conditions/tonsillitis-entebbe` | "tonsillitis specialist Entebbe" | MEDIUM | DONE |
| 8 | `/conditions/nasal-polyps-entebbe` | "nasal polyps Uganda" | MEDIUM | DONE |
| 9 | `/conditions/vertigo-entebbe` | "vertigo dizziness ENT Entebbe" | MEDIUM | DONE |
| 10 | `/conditions/snoring-entebbe` | "snoring treatment Entebbe" | LOW | DONE |

For each:
- [x] Create `src/pages/conditions/[ConditionName].tsx`
- [x] Register route in `src/App.tsx`
- [x] Add to `prerender.mjs`
- [x] Add to `public/sitemap.xml`
- [x] Add `MedicalCondition` schema
- [x] Wire internal links

---

## SPRINT 3 — AI-OPTIMIZE EXISTING CONTENT

**Why**: AI (ChatGPT, Gemini, Perplexity) answers patient questions by extracting structured content.
Pages with clear Q&A structure, concise answers, and explicit location signals get cited.

### Existing Blog Articles — AI-Optimization Checklist

For each article, check and fix:
- [ ] First 150 words must answer the core question directly
- [ ] Use H2 subheadings that match patient questions exactly (e.g. "What causes ear discharge?")
- [ ] Include "in Entebbe" or "in Uganda" naturally in at least 2 headings
- [ ] Add "When to see an ENT specialist in Entebbe" section
- [ ] End with explicit CTA: "Book at Eritage ENT Care, Entebbe"
- [ ] Remove filler/fluff paragraphs (if it doesn't answer a question, cut it)

| Article | AI-Optimized | Location Signal | Condition CTA |
|---------|-------------|-----------------|---------------|
| `ear-discharge-otorrhea.md` | [x] | [x] | [x] |
| `tinnitus-ringing-sound-ears.md` | [x] | [x] | [x] |
| `understanding-ear-infections.md` | [x] | [x] | [x] |
| `sinusitis-treatment-guide.md` | [x] | [x] | [x] |
| `nasal-polyps-chronic-sinusitis.md` | [x] | [x] | [x] |
| `tonsillitis-causes-symptoms.md` | [x] | [x] | [x] |
| `throat-pain-swallowing-difficulty.md` | [ ] | [ ] | [ ] |
| `preventing-hearing-loss.md` | [x] | [x] | [x] |
| `balance-problems-dizziness.md` | [x] | [x] | [x] |
| `snoring-sleep-apnea.md` | [x] | [x] | [x] |
| `childhood-ent-problems.md` | [ ] | [ ] | [ ] |
| `foreign-bodies-uganda.md` | [ ] | [ ] | [ ] |
| `managing-allergies-naturally.md` | [ ] | [ ] | [ ] |
| `submandibular-lump-sensation.md` | [ ] | [ ] | [ ] |
| `voice-care-tips.md` | [ ] | [ ] | [ ] |
| `uganda-seasonal-weather-changes-ent-health.md` | [x] | [x] | [x] |

**New article needed** (gap identified — zero coverage):
- [ ] **Create** `src/content/articles/blocked-ear-earwax-removal-entebbe.md`
  - Slug: `blocked-ear-earwax-removal-entebbe`
  - Title: "Blocked Ear & Earwax Removal in Entebbe: When to See a Specialist"
  - Target: "blocked ear Entebbe" / "earwax removal Uganda"
  - Must link to: `/conditions/blocked-ear-entebbe`
  - Add to sitemap

---

## SPRINT 4 — ENTITY AUTHORITY

Making Google and AI systems understand: **Eritage ENT Care = the ENT clinic in Entebbe**.

### Identity Standardization

- [x] Audit every page for NAP consistency:
  - Name: `Eritage ENT Care - Entebbe` (exact GBP match)
  - Address: `Plot 34, 48 Berkeley Road, Entebbe Road, Entebbe`
  - Phone: `+256740166778`
- [x] Verify Footer NAP block matches exactly
- [x] Verify Contact page matches exactly
- [x] Verify LocationEntebbe schema matches exactly

### Structured Data Audit

- [x] `Index.tsx`: Confirm `LocalBusiness` + `MedicalOrganization` + `FAQPage` schema present
- [x] `LocationEntebbe.tsx`: Confirm full `MedicalClinic` schema with NAP + hours + geo
- [x] `About.tsx`: Confirm `Physician` schema for both specialists
- [x] `Bookings.tsx`: Confirm `ReserveAction` schema present
- [x] All new condition pages: Add `MedicalCondition` schema (see template below)
- [x] Add `BreadcrumbList` schema to all condition pages

### MedicalCondition Schema Template
```json
{
  "@context": "https://schema.org",
  "@type": "MedicalCondition",
  "name": "[Condition Name]",
  "description": "[One sentence description]",
  "possibleTreatment": {
    "@type": "MedicalTherapy",
    "name": "[Treatment name]"
  },
  "recognizingAuthority": {
    "@type": "MedicalOrganization",
    "name": "Eritage ENT Care - Entebbe",
    "url": "https://eritageentcare.com"
  }
}
```

### Internal Linking Map (build this mesh)

```
/ent-services
  → /conditions/blocked-ear-entebbe
  → /conditions/ear-pain-entebbe
  → /conditions/ear-discharge-entebbe
  → /conditions/tinnitus-entebbe
  → /conditions/hearing-loss-entebbe
  → /conditions/sinusitis-entebbe

/urgent-ent-guidance
  → /conditions/ear-pain-entebbe
  → /conditions/ear-discharge-entebbe
  → /hearing-tests

/hearing-tests
  → /conditions/tinnitus-entebbe
  → /conditions/hearing-loss-entebbe

/blog/ear-discharge-otorrhea
  → /conditions/ear-discharge-entebbe (exact match anchor)

/blog/understanding-ear-infections
  → /conditions/blocked-ear-entebbe
  → /conditions/ear-pain-entebbe

/blog/tinnitus-ringing-sound-ears
  → /conditions/tinnitus-entebbe

/locations/entebbe
  → /conditions/* (all 10 conditions)
```

- [ ] Audit and add missing links per map above

---

## SPRINT 5 — GBP SUPPORT (Track Manually)

These tasks require action outside the codebase. Track status here.

### Weekly GBP Checklist

| Task | Week 1 | Week 2 | Week 3 | Week 4 |
|------|--------|--------|--------|--------|
| Post a GBP update (condition tip or service announcement) | [ ] | [ ] | [ ] | [ ] |
| Upload 2 new photos (clinic, equipment, team) | [ ] | [ ] | [ ] | [ ] |
| Request reviews from 2+ patients via WhatsApp | [ ] | [ ] | [ ] | [ ] |
| Respond to all new reviews within 24h | [ ] | [ ] | [ ] | [ ] |
| Check GBP for Q&A to answer | [ ] | [ ] | [ ] | [ ] |

### GBP Posts — Content Bank (write these next)
- [ ] "Blocked ear? Don't use cotton buds — here's what works" (links to condition page)
- [ ] "Ear discharge is never normal — see an ENT if it lasts >24h"
- [ ] "We offer same-day ENT consultations in Entebbe"
- [ ] "Hearing test now available at Eritage ENT Care, Entebbe"
- [ ] "What to do if your child has ear pain at night"

---

## SPRINT 6 — AI CITATION STRATEGY

### What gets cited by AI (Perplexity, ChatGPT, Gemini)

1. Pages with a clear, direct answer in the first paragraph
2. Structured content (H2s that are questions, bullet lists)
3. Explicit location context (Entebbe, Uganda)
4. Authoritative authorship (specialist name, credentials)
5. Schema markup (MedicalCondition, Physician, MedicalClinic)

### Citation Readiness Checklist (per condition page)

- [ ] Opens with 1–2 sentence direct answer: "Blocked ears in Entebbe are treated by..."
- [ ] Contains "Entebbe" in H1
- [ ] Contains specialist name + credential in author block
- [ ] Has FAQ section with real patient questions
- [ ] Structured data present
- [ ] Internal links to 2+ related pages
- [ ] Page is prerendered (static HTML for crawlers)

### Target AI Queries to Win

| Query | Target Page | Status |
|-------|------------|--------|
| "blocked ear treatment Entebbe" | `/conditions/blocked-ear-entebbe` | Not built |
| "ear pain ENT Entebbe Uganda" | `/conditions/ear-pain-entebbe` | Not built |
| "ear discharge specialist Uganda" | `/conditions/ear-discharge-entebbe` | Not built |
| "best ENT clinic Entebbe" | `/locations/entebbe` | Built — needs AI-opt |
| "hearing test Entebbe Uganda" | `/hearing-tests` | Built — needs AI-opt |
| "tinnitus treatment Entebbe" | `/conditions/tinnitus-entebbe` | Not built |
| "sinusitis clinic Uganda" | `/conditions/sinusitis-entebbe` | Not built |

---

## BACKLOG (Not Prioritized Yet)

- [ ] Add `FAQPage` schema to all condition pages (use top 3 patient questions)
- [ ] Create `/conditions` index page listing all conditions (helps crawl depth)
- [ ] Add "Specialists" bio block to condition pages (E-E-A-T signal)
- [ ] Patient journey pages: "What to expect at your first ENT visit in Entebbe"
- [ ] Referral page for GPs: "Refer your patient to Eritage ENT Care"
- [ ] Multilingual: Luganda condition page titles (for local searches)
- [ ] Add `speakable` schema to condition pages (for voice search)
- [ ] Build review schema pipeline (aggregate rating on all pages)
- [ ] Compress/WebP-convert all images for Core Web Vitals
- [ ] Add breadcrumbs UI component to condition pages

---

## EXECUTION NOTES

### File creation pattern for condition pages

All condition pages go in: `src/pages/conditions/`

After creating a page:
1. Import + add route to `src/App.tsx`
2. Add path to `prerender.mjs` routes array
3. Add `<url>` entry to `public/sitemap.xml` with today's date
4. Add internal links per the linking map above

### What "done" means for a condition page

- [ ] Page renders without console errors
- [ ] H1 contains condition + "Entebbe"
- [ ] Booking CTA visible above the fold on mobile
- [ ] `MedicalCondition` JSON-LD present in page source
- [ ] Canonical URL set correctly
- [ ] Linked from at least 2 existing pages
- [ ] Added to sitemap.xml
- [ ] Added to prerender.mjs

---

*This file is the single source of truth for growth execution. Update task status as work is completed.*
