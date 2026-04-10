import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContactButtons from "@/components/layout/FloatingContactButtons";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Calendar,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  CheckCircle,
  User,
  Stethoscope,
} from "lucide-react";
import { Link } from "react-router-dom";
import { SITE, canonical } from "@/config/site";

const Bookings = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    preferredDate: "",
    reason: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please provide your full name and phone number.",
        variant: "destructive",
      });
      return;
    }

    const lines = [
      `*New Appointment Booking*`,
      ``,
      `*Name:* ${formData.fullName}`,
      `*Phone:* ${formData.phone}`,
      `*Email:* ${formData.email || "Not provided"}`,
      `*Preferred Date:* ${formData.preferredDate || "Not specified"}`,
      `*Reason for Visit:* ${formData.reason || "Not provided"}`,
    ];

    const message = lines
      .map((l) => encodeURIComponent(l))
      .join("%0A");

    window.open(`${SITE.whatsapp}?text=${message}`, "_blank");

    toast({
      title: "Redirecting to WhatsApp",
      description: "Your booking request will be sent via WhatsApp.",
    });

    setFormData({
      fullName: "",
      phone: "",
      email: "",
      preferredDate: "",
      reason: "",
    });
  };

  // JSON-LD schemas: MedicalOrganization with potentialAction for GBP, plus WebPage
  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalOrganization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.locations.entebbe.name,
      url: SITE.url,
      telephone: SITE.phone.primary,
      email: SITE.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE.locations.entebbe.streetAddress,
        addressLocality: SITE.locations.entebbe.addressLocality,
        addressRegion: SITE.locations.entebbe.addressRegion,
        addressCountry: SITE.locations.entebbe.addressCountry,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: SITE.locations.entebbe.lat,
        longitude: SITE.locations.entebbe.lng,
      },
      openingHours: "Mo-Su 00:00-23:59",
      medicalSpecialty: "Otolaryngology",
      hasMap: SITE.locations.entebbe.mapUrl,
      sameAs: [SITE.locations.entebbe.gbpUrl],
      potentialAction: {
        "@type": "ReserveAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: canonical("/bookings"),
          inLanguage: "en",
          actionPlatform: [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/IOSPlatform",
            "http://schema.org/AndroidPlatform",
          ],
        },
        result: {
          "@type": "Reservation",
          name: "ENT Consultation Appointment",
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": canonical("/bookings"),
      url: canonical("/bookings"),
      name: "Book an ENT Appointment | Eritage ENT Care",
      description:
        "Book your ENT consultation at Eritage ENT Care, Entebbe. Choose WhatsApp, phone, or our online form to schedule with our specialist.",
      isPartOf: { "@id": `${SITE.url}/#website` },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Book an Appointment",
            item: canonical("/bookings"),
          },
        ],
      },
    },
  ];

  return (
    <>
      <Helmet>
        <title>Book an ENT Appointment | Eritage ENT Care | Entebbe, Uganda</title>
        <meta
          name="description"
          content="Book your ENT consultation at Eritage ENT Care – Entebbe. Schedule via WhatsApp, phone, or our online booking form. Specialists available 24 hours."
        />
        <meta
          property="og:title"
          content="Book an ENT Appointment | Eritage ENT Care – Entebbe"
        />
        <meta
          property="og:description"
          content="Schedule your ENT consultation with our specialists. Easy booking via WhatsApp, phone, or online form. Eritage ENT Care, Plot 34 Berkeley Road, Entebbe."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical("/bookings")} />
        <meta property="og:image" content={SITE.ogImage} />
        <meta
          name="keywords"
          content="book ENT appointment Entebbe, ENT consultation Uganda, ear nose throat appointment, Eritage ENT booking, ENT specialist Entebbe"
        />
        <link rel="canonical" href={canonical("/bookings")} />
        {schemaData.map((schema, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wide">
                Online Booking
              </p>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
                Book Your ENT Appointment
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Schedule a consultation with our specialist at{" "}
                <span className="font-semibold text-foreground">
                  {SITE.locations.entebbe.name}
                </span>
                . Choose the booking method that works best for you.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Booking Options */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2 text-center">
                Quick Booking Options
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Fastest ways to reach us right now
              </p>
              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <Card className="bg-green-50 border-green-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <MessageCircle className="h-10 w-10 text-green-600 mx-auto mb-3" />
                    <h3 className="font-bold text-foreground text-lg mb-1">
                      WhatsApp
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Fastest response — message us directly
                    </p>
                    <Button
                      asChild
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                    >
                      <a
                        href={SITE.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Chat on WhatsApp
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5 border-primary/20 hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Phone className="h-10 w-10 text-primary mx-auto mb-3" />
                    <h3 className="font-bold text-foreground text-lg mb-1">
                      Call Us
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Speak directly with our clinic staff
                    </p>
                    <Button asChild className="w-full" variant="outline">
                      <a href={`tel:${SITE.phone.primary}`}>
                        {SITE.phone.primaryFormatted}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Online Booking Form */}
        <section className="py-12 bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <Calendar className="h-10 w-10 text-primary mx-auto mb-3" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Request an Appointment
                </h2>
                <p className="text-muted-foreground">
                  Fill in the form below — we'll confirm your appointment via
                  WhatsApp or phone.
                </p>
              </div>

              <Card className="shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="fullName"
                        placeholder="Your full name"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">
                        Phone Number <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+256 7XX XXX XXX"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com (optional)"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="preferredDate">Preferred Date</Label>
                      <Input
                        id="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            preferredDate: e.target.value,
                          })
                        }
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="reason">Reason for Visit / Symptoms</Label>
                      <Textarea
                        id="reason"
                        placeholder="Describe your symptoms or reason for consultation (e.g. ear pain, hearing loss, blocked nose)..."
                        rows={4}
                        value={formData.reason}
                        onChange={(e) =>
                          setFormData({ ...formData, reason: e.target.value })
                        }
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Send Booking Request via WhatsApp
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Submitting opens WhatsApp with your details pre-filled.
                      We'll confirm your appointment promptly.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Clinic Info */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-8 text-center">
                Clinic Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Location Card */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <MapPin className="h-5 w-5 text-primary" />
                      <h3 className="font-bold text-foreground">
                        {SITE.locations.entebbe.name}
                      </h3>
                    </div>
                    <div className="space-y-3 text-muted-foreground text-sm">
                      <p>{SITE.locations.entebbe.address}</p>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 flex-shrink-0" />
                        <span className="font-medium text-foreground">
                          {SITE.locations.entebbe.hours}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 flex-shrink-0" />
                        <a
                          href={`tel:${SITE.phone.primary}`}
                          className="hover:text-primary transition-colors"
                        >
                          {SITE.phone.primaryFormatted}
                        </a>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t space-y-2">
                      <Button asChild size="sm" className="w-full">
                        <a
                          href={SITE.locations.entebbe.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MapPin className="h-4 w-4 mr-2" />
                          Get Directions
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Trust Signals */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Stethoscope className="h-5 w-5 text-primary" />
                      <h3 className="font-bold text-foreground">Our Specialists</h3>
                    </div>
                    <div className="space-y-4">
                      {SITE.specialists.map((specialist) => (
                        <div
                          key={specialist.name}
                          className="flex items-start gap-3"
                        >
                          <User className="h-8 w-8 text-primary/60 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-foreground text-sm">
                              {specialist.name}
                            </p>
                            <p className="text-muted-foreground text-xs">
                              {specialist.title} — {specialist.qualification}
                            </p>
                            <p className="text-muted-foreground text-xs">
                              {specialist.experience} experience
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t">
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {[
                          "Ear infections & hearing loss",
                          "Sinus & nasal conditions",
                          "Throat & voice disorders",
                          "Hearing tests & audiology",
                        ].map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-10 bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-lg font-bold text-foreground mb-5">
                Learn More Before Your Visit
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                <Link to="/ent-services">
                  <Button variant="outline" size="sm">
                    ENT Services
                  </Button>
                </Link>
                <Link to="/hearing-tests">
                  <Button variant="outline" size="sm">
                    Hearing Tests
                  </Button>
                </Link>
                <Link to="/urgent-ent-guidance">
                  <Button variant="outline" size="sm">
                    Urgent ENT Help
                  </Button>
                </Link>
                <Link to="/faq">
                  <Button variant="outline" size="sm">
                    FAQ
                  </Button>
                </Link>
                <Link to="/locations/entebbe">
                  <Button variant="outline" size="sm">
                    Entebbe Clinic
                  </Button>
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

export default Bookings;
