/**
 * ERITAGE ENT CARE — CENTRAL SITE CONFIGURATION
 * ================================================
 * Single source of truth for all site-wide constants.
 * Edit here and every page/component updates automatically.
 * NEVER hardcode URLs, phone numbers, or branding strings elsewhere.
 */

export const SITE = {
  // === DOMAIN — always non-www, no trailing slash ===
  url: "https://eritageentcare.com",

  // === BRAND ===
  name: "Eritage ENT Care",
  tagline: "Uganda's Trusted ENT Specialists",
  description:
    "Uganda's leading ENT specialists providing expert diagnosis and treatment for ear, nose, and throat conditions. Over 10 years clinical experience serving patients nationwide.",

  // === CONTACT ===
  phone: {
    primary: "+256740166778",
    primaryFormatted: "+256 740 166 778",
    secondary: "+256769616091",
    secondaryFormatted: "+256 769 616 091",
  },
  email: "info@eritageentcare.com",
  whatsapp: "https://wa.me/256740166778",

  // === LOCATIONS ===
  locations: {
    entebbe: {
      // GBP-exact name — MUST match Google Business Profile precisely
      name: "Eritage ENT Care - Entebbe",
      // Display name (em-dash variant, used in UI headings)
      displayName: "Eritage ENT Care – Entebbe",
      // Full NAP address — MUST match Google Business Profile precisely
      address: "Plot 34, 48 Berkeley Road, Entebbe Road, Entebbe, Uganda",
      // Schema-split address fields for structured data
      streetAddress: "Plot 34, 48 Berkeley Road, Entebbe Road",
      addressLocality: "Entebbe",
      addressRegion: "Central Region",
      addressCountry: "UG",
      hours: "Open 24 Hours",
      mapUrl: "https://maps.app.goo.gl/jyV5xBRkD95u2i4B8",
      reviewUrl: "https://g.page/r/Ceg235aaSzr6EBI/review",
      gbpUrl: "https://maps.app.goo.gl/jyV5xBRkD95u2i4B8",
      lat: "0.0527778",
      lng: "32.4580556",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7584444444444!2d32.4580556!3d0.0527778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177d8a4b5c6d7e8f%3A0x1234567890abcdef!2sEritage%20Ear%2C%20Nose%20and%20throat%20home%20%E2%80%93Entebbe%20road!5e0!3m2!1sen!2sug!4v1701907200000!5m2!1sen!2sug",
    },
  },

  // === SPECIALISTS ===
  specialists: [
    {
      name: "Lubega Fahad Juma",
      title: "ENT Specialist",
      qualification: "Clinical Otolaryngology",
      experience: "10 years",
    },
    {
      name: "Dr. Mukisa Joseph",
      title: "ENT Specialist",
      qualification: "Clinical Otolaryngology",
      experience: "13 years",
    },
  ],

  // === SEO ===
  ogImage: "https://eritageentcare.com/eritage-logo.png",
  twitterHandle: "@eritageentcare",

  // === ADSENSE ===
  adsense: {
    publisherId: "ca-pub-1241677876393680",
    slots: {
      articleTop: "1234567890",
      articleBottom: "0987654321",
      blogList: "1122334455",
    },
  },
} as const;

/**
 * Helper: build a canonical URL for a given path
 * Usage: canonical("/about") => "https://eritageentcare.com/about"
 */
export const canonical = (path: string = "/"): string => {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${clean}`;
};
