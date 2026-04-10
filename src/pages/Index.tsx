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
    "description": "Uganda's leading ENT specialists providing expert diagnosis and treatment for ear, nose, and throat conditions. Over 10 years clinical experience serving patients nationwide.",
    "url": "https://eritageentcare.com",
    "logo": "https://eritageentcare.com/eritage-logo.png",
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
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+256740166778",
      "contactType": "customer service",
      "availableLanguage": ["English", "Luganda"]
    },
    "sameAs": [
      "https://maps.app.goo.gl/jyV5xBRkD95u2i4B8"
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
      "ratingValue": "4.8",
      "reviewCount": "50",
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
    "parentOrganization": {
      "@type": "MedicalOrganization",
      "@id": "https://eritageentcare.com/#organization",
      "name": "Eritage ENT Care"
    },
    "sameAs": [
      "https://maps.app.goo.gl/jyV5xBRkD95u2i4B8"
    ]
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://eritageentcare.com/#website",
    "name": "Eritage ENT Care",
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
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <Hero />
        
        {/* Animated ENT Procedures Showcase */}
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-center text-foreground mb-8">
              Expert ENT Care in Action
            </h2>
            <AnimatedImageShowcase variant="staggered" />
          </div>
        </section>
        
        <Services />
        <About />
        
        {/* Second Image Showcase - Grid Style */}
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-center text-foreground mb-2">
              Our ENT Procedures
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Advanced diagnostic and treatment equipment for ear, nose & throat conditions
            </p>
            <AnimatedImageShowcase variant="grid" />
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
