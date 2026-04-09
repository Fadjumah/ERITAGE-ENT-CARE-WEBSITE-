/**
 * ERITAGE ENT CARE — STATIC PRERENDERER
 * =======================================
 * Runs after `vite build` to generate a static HTML file for every route.
 * This ensures Google can crawl all pages even though the app is a React SPA.
 *
 * Usage: node prerender.mjs   (called automatically by `npm run build`)
 */

import fs from "fs";
import path from "path";

const BASE_URL = "https://eritageentcare.com";
const DIST_DIR = "./dist";

// ── All routes with their SEO metadata ────────────────────────────────────────
const ROUTES = [
  {
    path: "/",
    title: "Eritage ENT Care | Expert Ear, Nose & Throat Specialists in Uganda",
    description:
      "Uganda's leading ENT specialists providing expert diagnosis and treatment for ear infections, hearing loss, sinusitis, tonsillitis, and more. Over 10 years clinical experience.",
  },
  {
    path: "/about",
    title: "About Us | Eritage ENT Care | Expert ENT Specialists in Uganda",
    description:
      "Meet the specialists behind Eritage ENT Care. Over 10 years of clinical experience delivering evidence-based ear, nose, and throat care across Uganda.",
  },
  {
    path: "/ent-services",
    title: "ENT Specialist Services | Ear, Nose & Throat Care | Eritage ENT Care",
    description:
      "Comprehensive ear, nose, and throat care from experienced ENT specialists. Expert diagnosis and treatment for all ENT conditions. Book your consultation today.",
  },
  {
    path: "/hearing-tests",
    title: "Hearing Tests – PTA, Tympanometry & Audiology Screening | Eritage ENT Care",
    description:
      "Professional hearing tests including PTA, tympanometry, OAE, ABR, and full audiology screening. Book your hearing test at Eritage ENT Care today.",
  },
  {
    path: "/urgent-ent-guidance",
    title: "Urgent ENT Guidance | Ear, Nose & Throat Help | Eritage ENT Care",
    description:
      "Get urgent ENT guidance for sudden ear pain, throat bleeding, blocked ears, or hearing changes. Professional symptom review via WhatsApp.",
  },
  {
    path: "/faq",
    title: "FAQ – Eritage ENT Care | Common Questions About ENT Services",
    description:
      "Find answers to frequently asked questions about Eritage ENT Care. Learn about our ENT services, hearing tests, appointments, and clinic locations.",
  },
  {
    path: "/reviews",
    title: "Patient Reviews – Eritage ENT Care | ENT Clinic Reviews Uganda",
    description:
      "Read patient reviews and testimonials about Eritage ENT Care. See what our patients say about our ENT services, hearing tests, and medical care.",
  },
  {
    path: "/contact",
    title: "Contact & Locations | Eritage ENT Care | Book Consultation in Uganda",
    description:
      "Contact Eritage ENT Care for ear, nose, and throat consultations. Reach us at +256 740 166 778, via WhatsApp, or visit our clinics.",
  },
  {
    path: "/locations/entebbe",
    title: "Eritage ENT Care – Entebbe | ENT Specialist Clinic in Entebbe, Uganda",
    description:
      "Visit Eritage ENT Care in Entebbe for expert ENT specialist ear, nose, and throat treatment. Located along Entebbe Road. Call +256 740 166 778.",
  },
  {
    path: "/locations/kampala",
    title: "Eritage ENT Care – Kampala | Coming Soon | ENT Clinic Kampala",
    description:
      "Eritage ENT Care is expanding to Kampala. Join our waitlist to be notified when our new ENT clinic opens.",
  },
  {
    path: "/blog",
    title: "Health Articles & Tips | Eritage ENT Care",
    description:
      "Expert ENT health articles and tips from Eritage ENT Care specialists. Learn about ear infections, hearing loss prevention, allergies, and voice care.",
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy | Eritage ENT Care",
    description: "Privacy Policy for Eritage ENT Care. Learn how we collect, use, and protect your personal information.",
  },
  {
    path: "/terms-of-service",
    title: "Terms of Service | Eritage ENT Care",
    description: "Terms of Service for Eritage ENT Care. Read our terms and conditions for using our website and healthcare services.",
  },
  // Blog articles
  { path: "/blog/sinusitis-treatment-guide", title: "Sinusitis Treatment Guide | Eritage ENT Care", description: "A comprehensive guide to understanding sinusitis, its causes, symptoms, and effective treatment options from ENT specialists." },
  { path: "/blog/foreign-bodies-uganda", title: "Foreign Bodies in ENT – A Common Emergency in Uganda | Eritage ENT Care", description: "Learn about foreign bodies in the ear, nose, and throat – a common ENT emergency in Uganda. When to seek care and what to expect." },
  { path: "/blog/tinnitus-ringing-sound-ears", title: "Tinnitus: Understanding Ringing in Your Ears | Eritage ENT Care", description: "Expert guide on tinnitus causes, symptoms, and treatment options from ENT specialists at Eritage ENT Care." },
  { path: "/blog/understanding-ear-infections", title: "Understanding Ear Infections | Eritage ENT Care", description: "Everything you need to know about ear infections: causes, symptoms, treatment, and when to see an ENT specialist." },
  { path: "/blog/snoring-sleep-apnea", title: "Snoring and Sleep Apnea: ENT Causes and Solutions | Eritage ENT Care", description: "ENT specialist guide to snoring and sleep apnea – causes, risks, and treatment options available in Uganda." },
  { path: "/blog/throat-pain-swallowing-difficulty", title: "Throat Pain and Swallowing Difficulty | Eritage ENT Care", description: "Understanding throat pain and difficulty swallowing – when to see an ENT specialist and what treatments are available." },
  { path: "/blog/preventing-hearing-loss", title: "Preventing Hearing Loss: Expert ENT Advice | Eritage ENT Care", description: "Practical tips from ENT specialists on preventing noise-induced and age-related hearing loss in Uganda." },
  { path: "/blog/managing-allergies-naturally", title: "Managing Allergies Naturally | Eritage ENT Care", description: "ENT specialist advice on managing nasal allergies naturally alongside medical treatment in Uganda." },
  { path: "/blog/balance-problems-dizziness", title: "Balance Problems and Dizziness: ENT Causes | Eritage ENT Care", description: "Understanding vertigo, dizziness, and balance disorders from an ENT perspective. When to seek specialist care." },
  { path: "/blog/tonsillitis-causes-symptoms", title: "Tonsillitis: Causes, Symptoms and Treatment | Eritage ENT Care", description: "Complete guide to tonsillitis – recognising symptoms, understanding causes, and knowing when surgery may be needed." },
  { path: "/blog/ear-discharge-otorrhea", title: "Ear Discharge (Otorrhea): When to Seek Urgent Care | Eritage ENT Care", description: "ENT specialist guide to ear discharge – what different types mean and when you need urgent care." },
  { path: "/blog/voice-care-tips", title: "Voice Care Tips from ENT Specialists | Eritage ENT Care", description: "Expert voice care tips from ENT specialists. How to protect and maintain your voice health." },
  { path: "/blog/nasal-polyps-chronic-sinusitis", title: "Nasal Polyps and Chronic Sinusitis | Eritage ENT Care", description: "Understanding nasal polyps and their relationship to chronic sinusitis. Treatment options from ENT specialists." },
  { path: "/blog/childhood-ent-problems", title: "Common ENT Problems in Children | Eritage ENT Care", description: "ENT specialist guide to common ear, nose, and throat problems in children – when to seek specialist care." },
  { path: "/blog/submandibular-lump-sensation", title: "Neck Lumps and Submandibular Swelling | Eritage ENT Care", description: "Understanding neck lumps and submandibular swelling – causes, when to worry, and ENT specialist evaluation." },
];

// ── Read the built index.html template ────────────────────────────────────────
const template = fs.readFileSync(path.join(DIST_DIR, "index.html"), "utf-8");

let generated = 0;

for (const route of ROUTES) {
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
