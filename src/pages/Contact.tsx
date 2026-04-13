import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContactButtons from "@/components/layout/FloatingContactButtons";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  MessageCircle,
  Clock,
  Mail,
  ArrowRight,
  Stethoscope
} from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      primary: "+256 740 166 778",
      secondary: "Available nationwide",
      action: "tel:+256740166778",
      actionText: "Call Now"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      primary: "+256 740 166 778",
      secondary: "Quick responses during clinic hours",
      action: "https://wa.me/256740166778",
      actionText: "Message on WhatsApp"
    },
    {
      icon: Mail,
      title: "Email",
      primary: "info@eritageentcare.com",
      secondary: "For inquiries and appointments",
      action: "mailto:info@eritageentcare.com",
      actionText: "Send Email"
    },
    {
      icon: MapPin,
      title: "Locations",
      primary: "Entebbe, Uganda",
      secondary: "See our clinic below",
      action: "#locations",
      actionText: "View Locations"
    }
  ];

  const locations = [
    {
      name: "Entebbe",
      gbpName: "Eritage ENT Care - Entebbe",
      address: "Plot 34, 48 Berkeley Road, Entebbe Road, Entebbe, Uganda",
      phone: "+256 740 166 778",
      hours: "Open 24 hours",
      mapLink: "https://maps.app.goo.gl/jyV5xBRkD95u2i4B8",
      reviewLink: "https://g.page/r/Ceg235aaSzr6EBI/review",
      isOpen: true
    },
  ];

  // JSON-LD Schema for Organization
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "@id": "https://eritageentcare.com/#organization",
    "name": "Eritage ENT Care",
    "description": "Professional ENT care across Uganda offering expert ear, nose, and throat services.",
    "url": "https://eritageentcare.com",
    "telephone": "+256740166778",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot 34, 48 Berkeley Road, Entebbe Road",
      "addressLocality": "Entebbe",
      "addressRegion": "Central Region",
      "addressCountry": "UG"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Uganda"
    },
    "medicalSpecialty": "Otolaryngology",
    "sameAs": [
      "https://maps.app.goo.gl/jyV5xBRkD95u2i4B8"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Contact & Locations | Eritage ENT Care | Book Consultation in Uganda</title>
        <meta name="description" content="Contact Eritage ENT Care for ear, nose, and throat consultations across Uganda. Reach us at +256 740 166 778, via WhatsApp, or visit our clinics." />
        <meta property="og:title" content="Contact Eritage ENT Care | ENT Consultations in Uganda" />
        <meta property="og:description" content="Get in touch with Eritage ENT Care in Entebbe, Uganda for professional ear, nose, and throat services. Book in clinic or schedule a digital consultation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eritageentcare.com/contact" />
        <meta property="og:image" content="https://eritageentcare.com/eritage-logo.png" />
        <meta name="keywords" content="contact ENT specialist Uganda, book ENT appointment, Eritage ENT Care contact, ENT consultation Uganda" />
        <link rel="canonical" href="https://eritageentcare.com/contact" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wide">
                Get in Touch
              </p>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Contact Eritage ENT Care
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We're here to help with your ear, nose, and throat health concerns. Book an in-person consultation at one of our clinics or connect with us digitally.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                Get in Touch
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="bg-secondary/10 border-border hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <method.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="font-bold text-foreground text-lg mb-2">{method.title}</h3>
                      <p className="text-foreground font-medium mb-1">{method.primary}</p>
                      <p className="text-muted-foreground text-sm mb-4">{method.secondary}</p>
                      <Button asChild variant="outline" className="w-full">
                        <a 
                          href={method.action} 
                          target={method.action.startsWith("http") ? "_blank" : undefined}
                          rel={method.action.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {method.actionText}
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Locations */}
        <section id="locations" className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wide">
                  Visit Us
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Our Location
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Eritage ENT Care is based in Entebbe, Uganda. Visit us in clinic or schedule a digital consultation.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-full max-w-md">
                {locations.map((location, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <MapPin className="h-5 w-5 text-primary" />
                        <h3 className="font-bold text-foreground text-lg">
                          {location.gbpName ?? `Eritage ENT Care – ${location.name}`}
                        </h3>
                      </div>
                      <div className="space-y-2 mb-4">
                        <p className="text-muted-foreground">{location.address}</p>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Phone className="h-4 w-4" />
                          <span>{location.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{location.hours}</span>
                        </div>
                      </div>
                      {location.mapLink && (
                        <div className="space-y-2">
                          <Button asChild className="w-full">
                            <a
                              href={location.mapLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Get Directions on Google Maps
                            </a>
                          </Button>
                          {location.reviewLink && (
                            <Button asChild variant="outline" className="w-full">
                              <a
                                href={location.reviewLink}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Leave a Google Review ★
                              </a>
                            </Button>
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section - Primary Location */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Find Our Flagship Clinic
                </h2>
                <p className="text-muted-foreground">Eritage ENT Care – Entebbe for in-person consultations</p>
              </div>
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7582621366!2d32.4637!3d0.0512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMDMnMDQuMyJOIDMywrAyNyc0OS4zIkU!5e0!3m2!1sen!2sug!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Eritage ENT Care – Entebbe Location"
                ></iframe>
              </div>
              <div className="text-center">
                <Button asChild size="lg" className="gap-2">
                  <a 
                    href="https://maps.app.goo.gl/jyV5xBRkD95u2i4B8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <MapPin className="h-5 w-5" />
                    Get Directions to Entebbe Clinic
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Primary CTA */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to Book Your ENT Consultation?
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Contact us today for expert ear, nose, and throat care. Our specialist is ready to help you with personalized treatment at our Entebbe clinic.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2" asChild>
                  <a href="https://wa.me/256740166778" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    Book via WhatsApp
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2" asChild>
                  <a href="tel:+256740166778">
                    <Phone className="h-5 w-5" />
                    Call: +256 740 166 778
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Links Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl font-bold text-foreground mb-6 text-center">
                Explore Our Services
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                <Link to="/ent-services" className="block">
                  <Card className="hover:shadow-md transition-shadow h-full">
                    <CardContent className="p-4 flex items-center gap-3">
                      <Stethoscope className="h-5 w-5 text-primary" />
                      <span className="text-foreground">ENT Services</span>
                    </CardContent>
                  </Card>
                </Link>
                <Link to="/hearing-tests" className="block">
                  <Card className="hover:shadow-md transition-shadow h-full">
                    <CardContent className="p-4 flex items-center gap-3">
                      <ArrowRight className="h-5 w-5 text-primary" />
                      <span className="text-foreground">Hearing Tests</span>
                    </CardContent>
                  </Card>
                </Link>
                <Link to="/urgent-ent-guidance" className="block">
                  <Card className="hover:shadow-md transition-shadow h-full">
                    <CardContent className="p-4 flex items-center gap-3">
                      <ArrowRight className="h-5 w-5 text-primary" />
                      <span className="text-foreground">Urgent ENT Help</span>
                    </CardContent>
                  </Card>
                </Link>
                <Link to="/about" className="block">
                  <Card className="hover:shadow-md transition-shadow h-full">
                    <CardContent className="p-4 flex items-center gap-3">
                      <ArrowRight className="h-5 w-5 text-primary" />
                      <span className="text-foreground">About Us</span>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <FloatingContactButtons />
      </div>
    </>
  );
};

export default Contact;
