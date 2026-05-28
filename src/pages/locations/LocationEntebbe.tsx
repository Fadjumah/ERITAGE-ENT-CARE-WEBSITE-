import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Clock, Star, ExternalLink, Navigation, CheckCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContactButtons from "@/components/layout/FloatingContactButtons";
import { useState } from "react";
import { SITE } from "@/config/site";

const LocationEntebbe = () => {
  const [isMapOpen, setIsMapOpen] = useState(false);

  const services = [
    "Comprehensive ENT Specialist Consultations",
    "Hearing Tests & Audiometry by ENT Specialists",
    "Ear Infection Treatment",
    "Sinus & Allergy Management",
    "Tonsillitis & Throat Care",
    "Foreign Body Removal",
    "Voice & Swallowing Evaluation",
    "Urgent ENT Specialist Care",
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${SITE.url}/locations/entebbe#business`,
    // Exact GBP name — must match Google Business Profile character-for-character
    "name": SITE.locations.entebbe.name,
    "alternateName": [
      SITE.locations.entebbe.displayName,
      "Eritage ENT Clinic Entebbe",
      "Eritage Ear Nose Throat Entebbe",
      "ENT Specialist Entebbe",
      "ENT Clinic Entebbe Road"
    ],
    "description": `Professional ENT specialist clinic at ${SITE.locations.entebbe.address}. Expert ear, nose, and throat care including hearing tests, sinus treatment, tonsillitis care, and emergency ENT services.`,
    "url": `${SITE.url}/locations/entebbe`,
    "telephone": SITE.phone.primary,
    "email": SITE.email,
    "image": SITE.ogImage,
    "logo": SITE.ogImage,
    "address": {
      "@type": "PostalAddress",
      // Exact GBP address — must match Google Business Profile precisely
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
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "medicalSpecialty": ["Otolaryngology", "Audiology", "ENT Surgery"],
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "name": "ENT Specialist Consultation",
        "procedureType": "http://schema.org/DiagnosticProcedure"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Hearing Test (Audiometry)",
        "procedureType": "http://schema.org/DiagnosticProcedure"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Ear Infection Treatment",
        "procedureType": "http://schema.org/TherapeuticProcedure"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Sinus Treatment",
        "procedureType": "http://schema.org/TherapeuticProcedure"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Tonsillitis Treatment",
        "procedureType": "http://schema.org/TherapeuticProcedure"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Foreign Body Removal",
        "procedureType": "http://schema.org/TherapeuticProcedure"
      }
    ],
    "priceRange": "$$",
    "currenciesAccepted": "UGX",
    "paymentAccepted": "Cash, Mobile Money",
    "areaServed": [
      {
        "@type": "City",
        "name": "Entebbe"
      },
      {
        "@type": "City",
        "name": "Kampala"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Central Region"
      },
      {
        "@type": "Country",
        "name": "Uganda"
      }
    ],
    "parentOrganization": {
      "@type": "MedicalOrganization",
      "@id": `${SITE.url}/#organization`,
      "name": SITE.name,
      "url": SITE.url
    },
    "sameAs": [
      SITE.locations.entebbe.mapUrl,
      SITE.locations.entebbe.gbpUrl
    ],
    "hasMap": SITE.locations.entebbe.mapUrl,
    "isAcceptingNewPatients": true,
    "knowsAbout": [
      "Ear infections in Entebbe",
      "Hearing tests Entebbe Uganda",
      "Sinusitis treatment Entebbe",
      "ENT specialist Entebbe Road",
      "Tonsillitis treatment Uganda"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "12",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE.url
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Locations",
        "item": `${SITE.url}/#locations`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": SITE.locations.entebbe.displayName,
        "item": `${SITE.url}/locations/entebbe`
      }
    ]
  };

  const physiciansSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "@id": `${SITE.url}/about#dr-fahad-juma`,
      "name": SITE.specialists[0].name,
      "jobTitle": SITE.specialists[0].title,
      "medicalSpecialty": "Otolaryngology",
      "description": `ENT specialist with over ${SITE.specialists[0].experience} of clinical experience in ear, nose, and throat medicine, serving patients across Uganda from the Entebbe clinic.`,
      "url": `${SITE.url}/about`,
      "telephone": SITE.phone.primary,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": SITE.locations.entebbe.streetAddress,
        "addressLocality": SITE.locations.entebbe.addressLocality,
        "addressRegion": SITE.locations.entebbe.addressRegion,
        "addressCountry": SITE.locations.entebbe.addressCountry
      },
      "workLocation": {
        "@type": "MedicalBusiness",
        "@id": `${SITE.url}/locations/entebbe#business`,
        "name": SITE.locations.entebbe.name
      },
      "worksFor": {
        "@type": "MedicalOrganization",
        "@id": `${SITE.url}/#organization`,
        "name": SITE.name
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "@id": `${SITE.url}/about#dr-mukisa-joseph`,
      "name": SITE.specialists[1].name,
      "jobTitle": SITE.specialists[1].title,
      "medicalSpecialty": "Otolaryngology",
      "description": `ENT specialist with over ${SITE.specialists[1].experience} of clinical experience in otolaryngology, serving patients across Uganda from the Entebbe clinic.`,
      "url": `${SITE.url}/about`,
      "telephone": SITE.phone.primary,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": SITE.locations.entebbe.streetAddress,
        "addressLocality": SITE.locations.entebbe.addressLocality,
        "addressRegion": SITE.locations.entebbe.addressRegion,
        "addressCountry": SITE.locations.entebbe.addressCountry
      },
      "workLocation": {
        "@type": "MedicalBusiness",
        "@id": `${SITE.url}/locations/entebbe#business`,
        "name": SITE.locations.entebbe.name
      },
      "worksFor": {
        "@type": "MedicalOrganization",
        "@id": `${SITE.url}/#organization`,
        "name": SITE.name
      }
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where is the Eritage ENT Specialist clinic in Entebbe located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${SITE.locations.entebbe.displayName} is located at ${SITE.locations.entebbe.address}, ${SITE.locations.entebbe.addressRegion}, Uganda. Our ENT specialist clinic is easily accessible from Kampala via the Kampala-Entebbe expressway.`
        }
      },
      {
        "@type": "Question",
        "name": "Which ENT specialists work at the Eritage ENT clinic in Entebbe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `The ${SITE.locations.entebbe.displayName} clinic is served by ${SITE.specialists[0].name}, an ENT specialist with over ${SITE.specialists[0].experience} of clinical experience, and ${SITE.specialists[1].name}, an ENT specialist with over ${SITE.specialists[1].experience} of experience in otolaryngology. Both specialists provide comprehensive ear, nose, and throat care for adults and children.`
        }
      },
      {
        "@type": "Question",
        "name": "What ENT specialist services are available at the Entebbe clinic?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our Entebbe ENT specialist clinic offers comprehensive ear, nose, and throat services including ENT consultations, hearing tests (PTA, Tympanometry, OAE), ear infection treatment, sinus care, tonsillitis treatment, foreign body removal, and urgent ENT care."
        }
      },
      {
        "@type": "Question",
        "name": "What are the opening hours for Eritage ENT Entebbe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Our Entebbe ENT specialist clinic is ${SITE.locations.entebbe.hours} for consultations. We recommend booking appointments in advance for routine visits, but we also handle emergency ENT cases immediately.`
        }
      },
      {
        "@type": "Question",
        "name": "Does the Eritage ENT clinic in Entebbe treat children?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes. ${SITE.locations.entebbe.displayName} provides specialist paediatric ENT care for children of all ages. Our ENT specialists are experienced in managing ear infections, adenoid and tonsil problems, hearing concerns, and nasal conditions in children.`
        }
      },
      {
        "@type": "Question",
        "name": "How do I book an appointment at the Eritage ENT clinic in Entebbe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `You can book an appointment by calling ${SITE.phone.primaryFormatted}, sending a WhatsApp message to the same number, or using the online booking form at eritageentcare.com/bookings. Same-day appointments are available for urgent ENT concerns.`
        }
      },
      {
        "@type": "Question",
        "name": "Is the Eritage ENT clinic near Entebbe International Airport?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes. ${SITE.locations.entebbe.displayName} is conveniently located along Entebbe Road, close to Entebbe International Airport and easily reachable from Kampala via the Kampala-Entebbe expressway. The clinic is at ${SITE.locations.entebbe.address}.`
        }
      },
      {
        "@type": "Question",
        "name": "Can I get a hearing test at the Entebbe ENT clinic?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes. ${SITE.locations.entebbe.displayName} offers full audiological assessments including Pure Tone Audiometry (PTA), Tympanometry, and Otoacoustic Emissions (OAE) testing. These hearing tests are performed by our ENT specialists and are suitable for adults and children.`
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{SITE.locations.entebbe.name} | ENT Specialist Clinic, Plot 34 Berkeley Road</title>
        <meta name="description" content={`${SITE.locations.entebbe.name}. ENT specialist clinic at ${SITE.locations.entebbe.address}. Hearing tests, sinus care, urgent ENT services. Call ${SITE.phone.primaryFormatted}.`} />
        <meta name="keywords" content="ENT specialist Entebbe, ENT clinic Entebbe Road, ear doctor Entebbe, ENT doctor Entebbe Uganda, hearing test Entebbe, sinus treatment Entebbe, throat doctor Entebbe Uganda, Berkeley Road ENT clinic, Plot 34 Entebbe ENT" />
        <meta property="og:title" content={`${SITE.locations.entebbe.name} | ENT Specialist Clinic in Entebbe`} />
        <meta property="og:description" content={`Expert ENT specialist care at ${SITE.locations.entebbe.address}. Comprehensive ear, nose, and throat services. Call ${SITE.phone.primaryFormatted}.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE.url}/locations/entebbe`} />
        <meta property="og:locale" content="en_UG" />
        <meta name="geo.region" content="UG-C" />
        <meta name="geo.placename" content="Entebbe" />
        <meta name="geo.position" content={`${SITE.locations.entebbe.lat};${SITE.locations.entebbe.lng}`} />
        <meta name="ICBM" content={`${SITE.locations.entebbe.lat}, ${SITE.locations.entebbe.lng}`} />
        <link rel="canonical" href={`${SITE.url}/locations/entebbe`} />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
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

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-secondary to-accent/20 py-20 md:py-28">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="h-4 w-4" />
              Flagship ENT Specialist Clinic
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4">
              {SITE.locations.entebbe.name}
            </h1>
            <p className="text-base text-muted-foreground mb-2">
              {SITE.locations.entebbe.address}
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Your trusted ENT specialist clinic on Entebbe Road, providing comprehensive ear, nose, and throat care for Entebbe and the wider Central Region
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="gap-2">
                <a href={`tel:${SITE.phone.primary}`}>
                  <Phone className="h-5 w-5" />
                  Call ENT Specialist: {SITE.phone.primaryFormatted}
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="gap-2">
                <a 
                  href={SITE.locations.entebbe.mapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Navigation className="h-5 w-5" />
                  Get Directions
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Location Details */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Info Card */}
              <div>
                <Card className="h-full">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-serif font-bold mb-6">ENT Specialist Clinic Information</h2>

                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Address</h3>
                          <p className="text-muted-foreground">
                            {SITE.locations.entebbe.streetAddress}<br />
                            {SITE.locations.entebbe.addressLocality}<br />
                            {SITE.locations.entebbe.addressRegion}, Uganda
                          </p>
                          <a
                            href={SITE.locations.entebbe.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:underline mt-1 inline-block"
                          >
                            View on Google Maps →
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                          <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Contact ENT Specialist</h3>
                          <p className="text-muted-foreground">
                            Phone: <a href={`tel:${SITE.phone.primary}`} className="text-primary hover:underline">{SITE.phone.primaryFormatted}</a><br />
                            Email: <a href={`mailto:${SITE.email}`} className="text-primary hover:underline">{SITE.email}</a>
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                          <Clock className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Hours</h3>
                          <p className="text-muted-foreground">
                            {SITE.locations.entebbe.hours} for ENT specialist consultations<br />
                            Appointments recommended
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t space-y-3">
                      <Button asChild className="w-full gap-2" size="lg">
                        <a
                          href={SITE.locations.entebbe.reviewUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Star className="h-5 w-5" />
                          Leave a Review on Google
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="w-full gap-2" size="lg">
                        <a
                          href={SITE.locations.entebbe.gbpUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MapPin className="h-5 w-5" />
                          Find Us on Google Business
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-2xl font-serif font-bold mb-6">ENT Specialist Services at This Location</h2>
                <div className="grid gap-3">
                  {services.map((service) => (
                    <div key={service} className="flex items-center gap-3 p-3 bg-accent/50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                      <span className="font-medium">{service}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-muted-foreground">
                  Our Entebbe ENT specialist clinic serves patients from across the Central Region, including areas along the Kampala-Entebbe corridor. We offer same-day appointments for urgent ENT specialist concerns.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Collapsible Google Map */}
        <section className="py-12 bg-accent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Collapsible open={isMapOpen} onOpenChange={setIsMapOpen}>
                <div className="text-center mb-4">
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="gap-2 text-lg font-semibold">
                      <MapPin className="h-5 w-5 text-primary" />
                      Visit Our ENT Specialist Clinic
                      <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isMapOpen ? 'rotate-180' : ''}`} />
                    </Button>
                  </CollapsibleTrigger>
                  <p className="text-muted-foreground mt-2">
                    Click to view map and directions to our Entebbe location
                  </p>
                </div>

                <CollapsibleContent className="transition-all duration-300">
                  <div className="rounded-lg overflow-hidden shadow-lg mt-6">
                    <iframe
                      src={SITE.locations.entebbe.mapEmbed}
                      width="100%"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${SITE.locations.entebbe.displayName} Location`}
                    ></iframe>
                  </div>

                  <div className="text-center mt-6">
                    <a
                      href={SITE.locations.entebbe.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-semibold inline-flex items-center gap-2"
                    >
                      Open in Google Maps
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </section>

        {/* Why Choose Entebbe */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-serif font-bold mb-6">Why Choose Our Entebbe ENT Specialist Clinic?</h2>
              <div className="grid md:grid-cols-3 gap-8 mt-10">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Convenient Location</h3>
                  <p className="text-muted-foreground">
                    Easy access along Entebbe Road, serving patients from Kampala, Entebbe, and surrounding areas seeking ENT specialist care.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Expert ENT Specialists</h3>
                  <p className="text-muted-foreground">
                    Specialist-led consultations with experienced ENT professionals dedicated to your health.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Flexible Scheduling</h3>
                  <p className="text-muted-foreground">
                    {SITE.locations.entebbe.hours} ENT specialist availability with same-day appointments for urgent concerns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Business Profile Trust Block */}
        <section className="py-12 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-xl font-serif font-bold mb-3">Find Us on Google</h2>
              <p className="text-muted-foreground text-sm mb-6">
                Search <strong>"{SITE.locations.entebbe.name}"</strong> on Google Maps or click below to find our clinic,
                leave a review, or get turn-by-turn directions to {SITE.locations.entebbe.streetAddress}.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild variant="outline" className="gap-2">
                  <a
                    href={SITE.locations.entebbe.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="h-4 w-4" />
                    Open in Google Maps
                  </a>
                </Button>
                <Button asChild variant="outline" className="gap-2">
                  <a
                    href={SITE.locations.entebbe.reviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Star className="h-4 w-4" />
                    Leave a Google Review
                  </a>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Rated 4.9 ★ on Google Business Profile · Entebbe Road, Entebbe, Uganda
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Ready to Visit Our Entebbe ENT Specialist Clinic?
            </h2>
            <p className="text-muted-foreground mb-2 max-w-2xl mx-auto">
              Book your appointment today and experience expert ENT specialist care at our flagship Entebbe location.
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              {SITE.locations.entebbe.address} · {SITE.locations.entebbe.hours} · {SITE.phone.primaryFormatted}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="gap-2">
                <a href={`tel:${SITE.phone.primary}`}>
                  <Phone className="h-5 w-5" />
                  Call ENT Specialist: {SITE.phone.primaryFormatted}
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="gap-2">
                <a
                  href={`${SITE.whatsapp}?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20with%20the%20ENT%20specialist%20at%20the%20Entebbe%20clinic.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book via WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
        <FloatingContactButtons />
      </div>
    </>
  );
};

export default LocationEntebbe;