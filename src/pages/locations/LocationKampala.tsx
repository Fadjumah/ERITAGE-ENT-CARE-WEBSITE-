import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Bell, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContactButtons from "@/components/layout/FloatingContactButtons";

const LocationKampala = () => {
  const plannedServices = [
    "Comprehensive ENT Consultations",
    "Advanced Hearing Tests & Audiometry",
    "Pediatric ENT Care",
    "Sinus & Allergy Management",
    "Sleep Apnea Evaluation",
    "Voice & Swallowing Therapy",
    "Minor ENT Procedures",
    "Urgent ENT Services",
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Eritage ENT Care – Kampala",
    "description": "Coming soon: Professional ENT clinic in Kampala offering expert ear, nose, and throat care. Join our waitlist to be notified when we open.",
    "url": "https://eritageentcare.com/locations/kampala",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kampala",
      "addressRegion": "Central Region",
      "addressCountry": "UG"
    },
    "parentOrganization": {
      "@type": "MedicalOrganization",
      "name": "Eritage ENT Care"
    }
  };

  return (
    <>
      <Helmet>
        <title>Eritage ENT Care – Kampala | Coming Soon | ENT Clinic Kampala</title>
        <meta name="description" content="Eritage ENT Care is expanding to Kampala! Join our waitlist to be notified when our new ENT clinic opens. Expert ear, nose, and throat care coming to Uganda's capital." />
        <meta name="keywords" content="ENT clinic Kampala, ear doctor Kampala, ENT specialist Kampala, hearing test Kampala, new clinic Kampala Uganda" />
        <meta property="og:title" content="Eritage ENT Care – Kampala | Coming Soon" />
        <meta property="og:description" content="Expert ENT care is coming to Kampala. Join our waitlist for updates on our new clinic opening." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eritageentcare.com/locations/kampala" />
        <meta property="og:image" content="https://eritageentcare.com/eritage-logo.png" />
        <link rel="canonical" href="https://eritageentcare.com/locations/kampala" />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-secondary to-accent/20 py-20 md:py-28">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Bell className="h-4 w-4" />
              Coming Soon
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Eritage ENT Care – Kampala
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Expert ENT specialist care is coming to Uganda's capital. Be the first to know when we open our doors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="gap-2">
                <a 
                  href="https://wa.me/256740166778?text=Hello%2C%20I%20would%20like%20to%20be%20notified%20when%20the%20Kampala%20clinic%20opens." 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Bell className="h-5 w-5" />
                  Join Waitlist via WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="gap-2">
                <a href="/locations/entebbe">
                  <MapPin className="h-5 w-5" />
                  Visit Entebbe Clinic Now
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Coming Soon Details */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-serif font-bold mb-4">Bringing Expert ENT Care to Kampala</h2>
                <p className="text-lg text-muted-foreground">
                  We're excited to announce that Eritage ENT Care is expanding to Kampala to better serve patients across Uganda's capital region.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Planned Services */}
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-serif font-bold mb-6">Planned Services</h3>
                    <div className="space-y-3">
                      {plannedServices.map((service) => (
                        <div key={service} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                          <span>{service}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Why Kampala */}
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-serif font-bold mb-6">Why We're Coming to Kampala</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        As Uganda's capital and largest city, Kampala deserves access to specialist-led ENT care that matches the standards of our flagship Entebbe clinic.
                      </p>
                      <p>
                        Our new location will bring the same evidence-based approach, advanced diagnostics, and compassionate care that patients have come to trust from Eritage ENT Care.
                      </p>
                      <p>
                        The Kampala clinic will be strategically located for easy access from across the city and surrounding districts.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Current Options */}
        <section className="py-16 bg-accent/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-serif font-bold mb-6">Need ENT Care Now?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                While we prepare our Kampala location, you can visit our fully operational clinic in Entebbe or connect with us virtually.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <MapPin className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Entebbe Clinic</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Our flagship location along Entebbe Road, just 40 minutes from Kampala city center.
                    </p>
                    <Button asChild variant="outline" className="gap-2">
                      <a href="/locations/entebbe">
                        Visit Entebbe
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Phone className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Virtual Consultation</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Connect with our ENT specialists via phone or WhatsApp for initial guidance.
                    </p>
                    <Button asChild variant="outline" className="gap-2">
                      <a href="tel:+256740166778">
                        Call Now
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Stay Updated */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Stay Updated on Our Kampala Opening
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our waitlist to receive updates about our Kampala location, including opening date, special offers, and booking priority.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="gap-2">
                <a 
                  href="https://wa.me/256740166778?text=Hello%2C%20I%20would%20like%20to%20join%20the%20waitlist%20for%20the%20Kampala%20clinic%20opening." 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Bell className="h-5 w-5" />
                  Join Waitlist on WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="gap-2">
                <a href="mailto:info@eritageentcare.com?subject=Kampala%20Clinic%20Waitlist">
                  Email Us for Updates
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

export default LocationKampala;
