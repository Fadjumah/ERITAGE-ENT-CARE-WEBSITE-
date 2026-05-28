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
import { SITE } from "@/config/site";

const Index = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "@id": `${SITE.url}/#organization`,
    "name": SITE.name,
    "alternateName": `${SITE.name} Uganda`,
    "description": SITE.description,
    "url": SITE.url,
    "logo": {
      "@type": "ImageObject",
      "url": SITE.ogImage,
      "width": 512,
      "height": 512
    },
    "image": SITE.ogImage,
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
        "telephone": SITE.phone.primary,
        "contactType": "customer service",
        "availableLanguage": ["English", "Luganda"]
      },
      {
        "@type": "ContactPoint",
        "telephone": SITE.phone.secondary,
        "contactType": "customer service",
        "availableLanguage": ["English", "Luganda"]
      }
    ],
    "sameAs": [
      SITE.locations.entebbe.mapUrl,
      SITE.locations.entebbe.gbpUrl,
      `https://twitter.com/${SITE.twitterHandle.replace('@', '')}`
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${SITE.url}/#business`,
    "name": SITE.name,
    "description": SITE.description,
    "url": SITE.url,
    "telephone": SITE.phone.primary,
    "email": SITE.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SITE.locations.entebbe.streetAddress,
      "addressLocality": SITE.locations.entebbe.addressLocality,
      "addressRegion": SITE.locations.entebbe.addressRegion,
      "addressCountry": SITE.locations.entebbe.addressCountry
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": SITE.locations.entebbe.lat,
      "longitude": SITE.locations.entebbe.lng
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
      "@id": `${SITE.url}/#organization`,
      "name": SITE.name
    },
    "sameAs": [
      SITE.locations.entebbe.mapUrl,
      SITE.locations.entebbe.gbpUrl,
      `https://twitter.com/${SITE.twitterHandle.replace('@', '')}`
    ]
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    "name": SITE.name,
    "alternateName": `${SITE.name} Uganda`,
    "description": SITE.description,
    "url": SITE.url,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${SITE.url}/blog?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  const physiciansSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "@id": `${SITE.url}/about#dr-fahad-juma`,
      "name": SITE.specialists[0].name,
      "jobTitle": SITE.specialists[0].title,
      "medicalSpecialty": "Otolaryngology",
      "description": `ENT specialist with over ${SITE.specialists[0].experience} of clinical experience in ear, nose, and throat medicine, serving patients across Uganda.`,
      "url": `${SITE.url}/about`,
      "telephone": SITE.phone.primary,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": SITE.locations.entebbe.streetAddress,
        "addressLocality": SITE.locations.entebbe.addressLocality,
        "addressRegion": SITE.locations.entebbe.addressRegion,
        "addressCountry": SITE.locations.entebbe.addressCountry
      },
      "worksFor": {
        "@type": "MedicalOrganization",
        "@id": `${SITE.url}/#organization`,
        "name": SITE.name
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
      "@id": `${SITE.url}/about#dr-mukisa-joseph`,
      "name": SITE.specialists[1].name,
      "jobTitle": SITE.specialists[1].title,
      "medicalSpecialty": "Otolaryngology",
      "description": `ENT specialist with over ${SITE.specialists[1].experience} of clinical experience in otolaryngology, serving patients across Uganda.`,
      "url": `${SITE.url}/about`,
      "telephone": SITE.phone.primary,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": SITE.locations.entebbe.streetAddress,
        "addressLocality": SITE.locations.entebbe.addressLocality,
        "addressRegion": SITE.locations.entebbe.addressRegion,
        "addressCountry": SITE.locations.entebbe.addressCountry
      },
      "worksFor": {
        "@type": "MedicalOrganization",
        "@id": `${SITE.url}/#organization`,
        "name": SITE.name
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does an ENT specialist provide at Eritage ENT Care?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our ENT specialists provide comprehensive ear, nose, and throat treatments for both children and adults. Services include ENT consultations, hearing tests (PTA, Tympanometry, OAE), treatment for ear infections, sinus conditions, allergies, voice disorders, tonsillitis, adenoid problems, and surgical referrals when needed."
        }
      },
      {
        "@type": "Question",
        "name": "How do I know if I need to see an ENT specialist?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You should consult an ENT specialist if you experience persistent ear pain, hearing loss, chronic nasal congestion, recurring sinus infections, sore throat lasting more than 2 weeks, voice changes, difficulty swallowing, or unexplained neck lumps. Early consultation with an ENT specialist ensures proper diagnosis and treatment."
        }
      },
      {
        "@type": "Question",
        "name": "Do you perform Hearing Tests (PTA, Tympanometry, OAE)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Our ENT specialists partner with certified audiology centers to provide comprehensive hearing tests including Pure Tone Audiometry (PTA), Tympanometry, Otoacoustic Emissions (OAE), Auditory Brainstem Response (ABR), and newborn hearing screening. Our ENT specialist interprets results and provides personalized care plans."
        }
      },
      {
        "@type": "Question",
        "name": "What ENT conditions do you treat in children?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our ENT specialists provide pediatric care for recurrent ear infections, enlarged tonsils and adenoids, hearing problems affecting speech development, chronic runny nose and allergies, sleep-disordered breathing, and foreign body removal. We offer gentle, child-friendly ENT specialist care tailored to each age group."
        }
      }
    ]
  };

  const siteNavigationSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `${SITE.name} — Main Navigation`,
    "itemListElement": [
      {
        "@type": "SiteNavigationElement",
        "position": 1,
        "name": "Book an Appointment",
        "description": "Book your ENT consultation online — same-week slots available",
        "url": `${SITE.url}/bookings`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 2,
        "name": "ENT Services",
        "description": "Comprehensive ear, nose & throat diagnosis and treatment",
        "url": `${SITE.url}/ent-services`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 3,
        "name": "Hearing Tests & Audiology",
        "description": "Pure tone audiometry, hearing loss screening, and audiology services",
        "url": `${SITE.url}/hearing-tests`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 4,
        "name": "Urgent ENT Guidance",
        "description": "Emergency ENT advice — when to seek urgent care",
        "url": `${SITE.url}/urgent-ent-guidance`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 5,
        "name": "Contact Us",
        "description": `Get in touch with ${SITE.name} in Entebbe, Uganda`,
        "url": `${SITE.url}/contact`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 6,
        "name": "ENT Health Blog",
        "description": "Expert ENT health articles and tips from our specialists",
        "url": `${SITE.url}/blog`
      }
    ]
  };

   return (
    <>
      <Helmet>
        <title>{SITE.name} | Expert Ear, Nose & Throat Specialists in Uganda</title>
        <meta name="description" content={SITE.description} />
        <meta property="og:title" content={`${SITE.name} | Expert ENT Specialists in Uganda`} />
        <meta property="og:description" content={SITE.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE.url}/`} />
        <meta property="og:image" content={SITE.ogImage} />
        <meta name="keywords" content="ENT specialist Uganda, ear doctor Uganda, nose doctor Uganda, throat doctor Uganda, hearing test Uganda, sinusitis treatment, tonsillitis treatment, ear infection treatment, Eritage ENT Care" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="UG-C" />
        <meta name="geo.placename" content="Entebbe, Uganda" />
        <meta name="geo.position" content={`${SITE.locations.entebbe.lat};${SITE.locations.entebbe.lng}`} />
        <meta name="ICBM" content={`${SITE.locations.entebbe.lat}, ${SITE.locations.entebbe.lng}`} />
        <link rel="canonical" href={`${SITE.url}/`} />
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
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
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
