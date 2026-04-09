import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Clock, Star, ExternalLink, Navigation, CheckCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContactButtons from "@/components/layout/FloatingContactButtons";
import { useState } from "react";

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
    "@id": "https://eritageentcare.com/locations/entebbe#business",
    "name": "ERITAGE ENT CARE - ENTEBBE",
    "alternateName": ["Eritage ENT Care – Entebbe", "Eritage ENT Clinic Entebbe", "Eritage Ear Nose Throat Entebbe", "ENT Specialist Entebbe"],
    "description": "Professional ENT specialist clinic in Entebbe offering expert ear, nose, and throat care including hearing tests, sinus treatment, tonsillitis care, and emergency ENT services. Trusted ENT specialists serving Uganda.",
    "url": "https://eritageentcare.com/locations/entebbe",
    "telephone": "+256740166778",
    "email": "info@eritageentcare.com",
    "image": "https://eritageentcare.com/eritage-logo.png",
    "logo": "https://eritageentcare.com/eritage-logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Along Entebbe Road",
      "addressLocality": "Entebbe",
      "addressRegion": "Central Region",
      "postalCode": "",
      "addressCountry": "UG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "0.0527778",
      "longitude": "32.4580556"
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
      "@id": "https://eritageentcare.com/#organization",
      "name": "Eritage ENT Care",
      "url": "https://eritageentcare.com"
    },
    "sameAs": [
      "https://maps.app.goo.gl/jyV5xBRkD95u2i4B8",
      "https://g.page/r/Ceg235aaSzr6EBI"
    ],
    "hasMap": "https://maps.app.goo.gl/jyV5xBRkD95u2i4B8",
    "isAcceptingNewPatients": true,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "50",
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
        "item": "https://eritageentcare.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Locations",
        "item": "https://eritageentcare.com/#locations"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Eritage ENT Care – Entebbe",
        "item": "https://eritageentcare.com/locations/entebbe"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where is the Eritage ENT Specialist clinic in Entebbe located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Eritage ENT Care – Entebbe is located along Entebbe Road, Entebbe, Central Region, Uganda. Our ENT specialist clinic is easily accessible from Kampala via the Kampala-Entebbe expressway."
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
          "text": "Our Entebbe ENT specialist clinic is available 24/7 for consultations. We recommend booking appointments in advance for routine visits, but we also handle emergency ENT cases immediately."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Eritage ENT Care – Entebbe | ENT Specialist Clinic in Entebbe, Uganda</title>
        <meta name="description" content="Visit Eritage ENT Care in Entebbe for expert ENT specialist ear, nose, and throat treatment. Located along Entebbe Road with hearing tests, sinus care, and urgent ENT services. Call +256 740 166 778." />
        <meta name="keywords" content="ENT specialist Entebbe, ENT clinic Entebbe, ear doctor Entebbe, ENT doctor Entebbe Uganda, hearing test Entebbe, sinus treatment Entebbe, throat doctor Entebbe Uganda, otolaryngologist Entebbe, ear nose throat specialist Entebbe" />
        <meta property="og:title" content="Eritage ENT Care – Entebbe | ENT Specialist Clinic in Entebbe" />
        <meta property="og:description" content="Expert ENT specialist care in Entebbe. Comprehensive ear, nose, and throat services along Entebbe Road." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eritageentcare.com/locations/entebbe" />
        <meta property="og:locale" content="en_UG" />
        <meta name="geo.region" content="UG-C" />
        <meta name="geo.placename" content="Entebbe" />
        <meta name="geo.position" content="0.0527778;32.4580556" />
        <meta name="ICBM" content="0.0527778, 32.4580556" />
        <link rel="canonical" href="https://eritageentcare.com/locations/entebbe" />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Eritage ENT Care – Entebbe
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Your trusted ENT specialist clinic in Entebbe, providing comprehensive ear, nose, and throat care for the community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="gap-2">
                <a href="tel:+256740166778">
                  <Phone className="h-5 w-5" />
                  Call ENT Specialist: +256 740 166 778
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="gap-2">
                <a 
                  href="https://maps.app.goo.gl/jyV5xBRkD95u2i4B8" 
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
                            Along Entebbe Road<br />
                            Entebbe, Central Region<br />
                            Uganda
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                          <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Contact ENT Specialist</h3>
                          <p className="text-muted-foreground">
                            Phone: <a href="tel:+256740166778" className="text-primary hover:underline">+256 740 166 778</a><br />
                            Email: <a href="mailto:info@eritageentcare.com" className="text-primary hover:underline">info@eritageentcare.com</a>
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
                            Available 24/7 for ENT specialist consultations<br />
                            Appointments recommended
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t">
                      <Button asChild className="w-full gap-2" size="lg">
                        <a 
                          href="https://g.page/r/Ceg235aaSzr6EBI/review" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <Star className="h-5 w-5" />
                          Leave a Review on Google
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
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7584444444444!2d32.4580556!3d0.0527778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177d8a4b5c6d7e8f%3A0x1234567890abcdef!2sEritage%20Ear%2C%20Nose%20and%20throat%20home%20%E2%80%93Entebbe%20road!5e0!3m2!1sen!2sug!4v1701907200000!5m2!1sen!2sug"
                      width="100%"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Eritage ENT Specialist Clinic Entebbe Location"
                    ></iframe>
                  </div>
                  
                  <div className="text-center mt-6">
                    <a
                      href="https://maps.app.goo.gl/jyV5xBRkD95u2i4B8"
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
                    24/7 ENT specialist availability with same-day appointments for urgent concerns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Ready to Visit Our Entebbe ENT Specialist Clinic?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book your appointment today and experience expert ENT specialist care at our flagship Entebbe location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="gap-2">
                <a href="tel:+256740166778">
                  <Phone className="h-5 w-5" />
                  Call ENT Specialist: +256 740 166 778
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="gap-2">
                <a 
                  href="https://wa.me/256740166778?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20with%20the%20ENT%20specialist%20at%20the%20Entebbe%20clinic." 
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