import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Locations from "@/components/sections/Locations";
import HealthTips from "@/components/sections/HealthTips";
import AppointmentForm from "@/components/sections/AppointmentForm";
import GoogleMap from "@/components/sections/GoogleMap";
import FAQSection from "@/components/sections/FAQSection";
import AskENTQuestion from "@/components/sections/AskENTQuestion";
import Footer from "@/components/layout/Footer";
import FloatingContactButtons from "@/components/layout/FloatingContactButtons";
import AnimatedImageShowcase from "@/components/sections/AnimatedImageShowcase";

const Index = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "@id": "https://eritageentcare.com/#organization",
    "name": "Eritage ENT Care",
    "alternateName": "Eritage ENT Care Uganda",
    "description": "Uganda's leading ENT specialists providing expert diagnosis and treatment for ear, nose, and throat conditions. Over 10 years clinical experience serving patients nationwide.",
    "url": "https://eritageentcare.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://eritageentcare.com/eritage-logo.png",
      "width": 512,
      "height": 512
    },
    "image": "https://eritageentcare.com/eritage-logo.png",
    "medicalSpecialty": "Otolaryngology",
    "knowsAbout": [
      "Ear infections",
      "Hearing loss",
      "Sinusitis",
      "Tonsillitis",
      "Allergic rhinitis",
      "Vertigo and balance disorders",
      "Voice disorders",
      "Sleep apnea",
      "Nasal polyps"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Uganda"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+256740166778",
        "contactType": "customer service",
        "availableLanguage": ["English", "Luganda"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+256772332909",
        "contactType": "customer service",
        "availableLanguage": ["English", "Luganda"]
      }
    ],
    "sameAs": [
      "https://maps.app.goo.gl/jyV5xBRkD95u2i4B8",
      "https://g.page/r/Ceg235aaSzr6EBI",
      "https://twitter.com/eritageentcare"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://eritageentcare.com/#business",
    "name": "Eritage ENT Care",
    "description": "Professional ENT clinic offering expert ear, nose, and throat care including hearing tests, sinus treatment, and emergency ENT services across Uganda.",
    "url": "https://eritageentcare.com",
    "telephone": "+256740166778",
    "email": "info@eritageentcare.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot 34, 48 Berkeley Road, Entebbe Road",
      "addressLocality": "Entebbe",
      "addressRegion": "Central Region",
      "addressCountry": "UG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "0.0527778",
      "longitude": "32.4580556"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Uganda"
    },
    "medicalSpecialty": "Otolaryngology",
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "12",
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "ENT Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Hearing Tests (Pure Tone Audiometry)"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Ear Wax Removal"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Sinusitis Treatment"
          }
        }
      ]
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "parentOrganization": {
      "@type": "MedicalOrganization",
      "@id": "https://eritageentcare.com/#organization",
      "name": "Eritage ENT Care"
    },
    "sameAs": [
      "https://maps.app.goo.gl/jyV5xBRkD95u2i4B8",
      "https://g.page/r/Ceg235aaSzr6EBI",
      "https://twitter.com/eritageentcare"
    ]
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://eritageentcare.com/#website",
    "name": "Eritage ENT Care",
    "alternateName": "Eritage ENT Care Uganda",
    "description": "Uganda's leading ENT specialists — expert ear, nose & throat care in Entebbe.",
    "url": "https://eritageentcare.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://eritageentcare.com/blog?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const physiciansSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "@id": "https://eritageentcare.com/about#dr-fahad-juma",
      "name": "Dr. Lubega Fahad Juma",
      "jobTitle": "ENT Specialist",
      "medicalSpecialty": "Otolaryngology",
      "description": "ENT specialist with over 10 years of clinical experience in ear, nose, and throat medicine, serving patients across Uganda.",
      "url": "https://eritageentcare.com/about",
      "telephone": "+256740166778",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot 34, 48 Berkeley Road, Entebbe Road",
        "addressLocality": "Entebbe",
        "addressRegion": "Central Region",
        "addressCountry": "UG"
      },
      "worksFor": {
        "@type": "MedicalOrganization",
        "@id": "https://eritageentcare.com/#organization",
        "name": "Eritage ENT Care"
      },
      "knowsAbout": [
        "Ear infections and otitis media",
        "Hearing loss diagnosis and treatment",
        "Sinusitis and nasal conditions",
        "Tonsillitis and adenoid disorders",
        "Vertigo and balance disorders",
        "Pediatric ENT care",
        "Voice and swallowing disorders"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "@id": "https://eritageentcare.com/about#dr-mukisa-joseph",
      "name": "Dr. Mukisa Joseph",
      "jobTitle": "ENT Specialist",
      "medicalSpecialty": "Otolaryngology",
      "description": "ENT specialist with over 13 years of clinical experience in otolaryngology, serving patients across Uganda.",
      "url": "https://eritageentcare.com/about",
      "telephone": "+256740166778",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot 34, 48 Berkeley Road, Entebbe Road",
        "addressLocality": "Entebbe",
        "addressRegion": "Central Region",
        "addressCountry": "UG"
      },
      "worksFor": {
        "@type": "MedicalOrganization",
        "@id": "https://eritageentcare.com/#organization",
        "name": "Eritage ENT Care"
      },
      "knowsAbout": [
        "Ear surgery and microsurgery",
        "Hearing loss and audiology",
        "Chronic sinusitis management",
        "Throat and laryngeal disorders",
        "Sleep apnea and snoring",
        "Head and neck conditions",
        "Adult and pediatric ENT care"
      ]
    }
  ];

  const siteNavigationSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Eritage ENT Care — Main Navigation",
    "itemListElement": [
      {
        "@type": "SiteNavigationElement",
        "position": 1,
        "name": "Book an Appointment",
        "description": "Book your ENT consultation online — same-week slots available",
        "url": "https://eritageentcare.com/bookings"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 2,
        "name": "ENT Services",
        "description": "Comprehensive ear, nose & throat diagnosis and treatment",
        "url": "https://eritageentcare.com/ent-services"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 3,
        "name": "Hearing Tests & Audiology",
        "description": "Pure tone audiometry, hearing loss screening, and audiology services",
        "url": "https://eritageentcare.com/hearing-tests"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 4,
        "name": "Urgent ENT Guidance",
        "description": "Emergency ENT advice — when to seek urgent care",
        "url": "https://eritageentcare.com/urgent-ent-guidance"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 5,
        "name": "Contact Us",
        "description": "Get in touch with Eritage ENT Care in Entebbe, Uganda",
        "url": "https://eritageentcare.com/contact"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 6,
        "name": "ENT Health Blog",
        "description": "Expert ENT health articles and tips from our specialists",
        "url": "https://eritageentcare.com/blog"
      }
    ]
  };

   return (
    <>
      <Helmet>
        <title>Eritage ENT Care | Expert Ear, Nose & Throat Specialists in Uganda</title>
        <meta name="description" content="Uganda's leading ENT specialists providing expert diagnosis and treatment for ear infections, hearing loss, sinusitis, and tonsillitis. Over 10 years clinical experience." />
        <meta property="og:title" content="Eritage ENT Care | Expert ENT Specialists in Uganda" />
        <meta property="og:description" content="Uganda's trusted ENT specialists. Expert diagnosis and treatment for ear, nose, and throat conditions for adults and children nationwide." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eritageentcare.com/" />
        <meta property="og:image" content="https://eritageentcare.com/eritage-logo.png" />
        <meta name="keywords" content="ENT specialist Uganda, ear doctor Uganda, nose doctor Uganda, throat doctor Uganda, hearing test Uganda, sinusitis treatment, tonsillitis treatment, ear infection treatment, Eritage ENT Care" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="UG-C" />
        <meta name="geo.placename" content="Entebbe, Uganda" />
        <meta name="geo.position" content="0.0527778;32.4580556" />
        <meta name="ICBM" content="0.0527778, 32.4580556" />
        <link rel="canonical" href="https://eritageentcare.com/" />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(webSiteSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(siteNavigationSchema)}
        </script>
        {physiciansSchema.map((schema, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <Hero />
        
        <Services />
        <About />

        {/* ENT Procedures Showcase */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
                Our ENT Procedures
              </h2>
              <p className="text-muted-foreground">
                Advanced diagnostic and treatment equipment for ear, nose &amp; throat conditions
              </p>
            </div>
            <AnimatedImageShowcase variant="slideLeft" />
          </div>
        </section>
        
        <Locations />
        <HealthTips />
        <AppointmentForm />
        <GoogleMap />
        <FAQSection variant="compact" />
        <AskENTQuestion />
        <Footer />
        <FloatingContactButtons />
      </div>
    </>
  );
};

export default Index;
