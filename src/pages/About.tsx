import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContactButtons from "@/components/layout/FloatingContactButtons";
import Specialist from "@/components/shared/Specialist";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Award, 
  Users, 
  Stethoscope, 
  MapPin, 
  Phone, 
  MessageCircle,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Every treatment plan is tailored to your unique needs, ensuring personalized and compassionate care."
    },
    {
      icon: Award,
      title: "Evidence-Based Practice",
      description: "Over 10 years of specialized ENT experience with continuous professional development and medical education."
    },
    {
      icon: Users,
      title: "Nationwide Accessibility",
      description: "Serving patients across Uganda with multiple locations and digital consultation options."
    }
  ];

  const services = [
    "Comprehensive ear examinations and treatment",
    "Nasal and sinus care",
    "Throat and voice disorders",
    "Hearing assessments and audiology referrals",
    "Pediatric and adult ENT care",
    "ENT emergency guidance"
  ];

  const locations = [
    {
      name: "Entebbe",
      address: "Along Entebbe Road, Entebbe, Central Region",
      phone: "+256 740 166 778",
      mapLink: "https://maps.app.goo.gl/jyV5xBRkD95u2i4B8",
      isOpen: true
    },
    {
      name: "Kampala",
      address: "Coming Soon",
      phone: "+256 740 166 778",
      mapLink: "",
      isOpen: false
    }
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "@id": "https://eritageentcare.com/#organization",
    "name": "Eritage ENT Care",
    "description": "Specialist-led ENT platform providing evidence-based ear, nose, and throat care across Uganda with over 10 years of clinical experience.",
    "url": "https://eritageentcare.com",
    "medicalSpecialty": "Otolaryngology",
    "areaServed": {
      "@type": "Country",
      "name": "Uganda"
    },
    "founder": {
      "@type": "Person",
      "name": "Fahad Juma",
      "jobTitle": "ENT Specialist",
      "description": "ENT specialist with over 10 years of clinical experience in ear, nose, and throat medicine."
    },
    "sameAs": [
      "https://maps.app.goo.gl/jyV5xBRkD95u2i4B8"
    ]
  };

  const specialistsSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": "Lubega Fahad Juma",
      "jobTitle": "ENT Specialist",
      "medicalSpecialty": "Otolaryngology",
      "description": "ENT specialist with over 10 years of clinical experience in ear, nose, and throat medicine, serving patients across Uganda.",
      "worksFor": {
        "@type": "MedicalOrganization",
        "@id": "https://eritageentcare.com/#organization",
        "name": "Eritage ENT Care"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": "Dr. Mukisa Joseph",
      "jobTitle": "ENT Specialist",
      "medicalSpecialty": "Otolaryngology",
      "description": "ENT specialist with over 13 years of clinical experience in otolaryngology, serving patients across Uganda.",
      "worksFor": {
        "@type": "MedicalOrganization",
        "@id": "https://eritageentcare.com/#organization",
        "name": "Eritage ENT Care"
      }
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Eritage ENT Care | Expert ENT Specialists in Uganda</title>
        <meta name="description" content="Meet the specialists behind Eritage ENT Care. Over 10 years of clinical experience delivering evidence-based ear, nose, and throat care to patients across Uganda." />
        <meta property="og:title" content="About Eritage ENT Care | ENT Specialists in Uganda" />
        <meta property="og:description" content="Specialist-led ENT platform with over 10 years of clinical experience. Evidence-based care and patient education for all ages across Uganda." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eritageentcare.com/about" />
        <meta property="og:image" content="https://eritageentcare.com/eritage-logo.png" />
        <meta name="keywords" content="about Eritage ENT Care, ENT specialists Uganda, ear nose throat experts, Fahad Juma ENT, evidence-based ENT care" />
        <link rel="canonical" href="https://eritageentcare.com/about" />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        {specialistsSchema.map((schema, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wide">
                Our Mission & Values
              </p>
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
                About Eritage ENT Care
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Specialist-led ENT education and evidence-based care from experienced ENT specialists. Trusted by patients across Uganda for expert diagnosis and treatment.
              </p>
            </div>
          </div>
        </section>

        {/* About Introduction */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">
                  Our Approach to ENT Specialist Care
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-base leading-relaxed">
                    <span className="font-semibold text-foreground">Eritage ENT Care</span> is an ENT specialist-led medical platform dedicated to evidence-based diagnosis and treatment of ear, nose, and throat conditions. Our ENT specialists combine clinical expertise with patient education to empower informed healthcare decisions for patients across Uganda.
                  </p>
                  <p className="text-base leading-relaxed">
                    Our team of ENT specialists delivers personalized treatment plans designed to improve quality of life. With multiple locations and digital consultation options, we ensure expert ENT specialist guidance is accessible to all Ugandans while maintaining the highest standards of medical care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Specialists - Full Component */}
        <Specialist />

        {/* Our Values */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8 text-center">
                Our ENT Specialist Values
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {values.map((value, index) => (
                  <Card key={index} className="bg-secondary/10 border-border">
                    <CardContent className="p-6 text-center">
                      <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                      <p className="text-muted-foreground text-sm">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8 text-center">
                What Our ENT Specialists Offer
              </h2>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{service}</span>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Button asChild className="gap-2">
                  <Link to="/ent-services">
                    Explore All ENT Specialist Services
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Our Locations */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wide">
                  Where to Find Us
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Our Locations
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Eritage ENT Care serves patients across Uganda. Visit us at one of our locations or schedule a digital consultation.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {locations.map((location, index) => (
                  <Card key={index} className={`${!location.isOpen ? 'opacity-75' : ''}`}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <MapPin className="h-5 w-5 text-primary" />
                        <h3 className="font-bold text-foreground text-lg">
                          Eritage ENT Care – {location.name}
                        </h3>
                      </div>
                      {!location.isOpen && (
                        <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full mb-3">
                          Coming Soon
                        </span>
                      )}
                      <p className="text-muted-foreground mb-2">{location.address}</p>
                      <p className="text-muted-foreground mb-4">{location.phone}</p>
                      {location.isOpen && location.mapLink && (
                        <Button asChild variant="outline" size="sm">
                          <a 
                            href={location.mapLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            Get Directions
                          </a>
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                Start Your ENT Specialist Consultation
              </h2>
              <p className="text-muted-foreground mb-8">
                Connect with our ENT specialists today. Whether you prefer an in-person visit or digital consultation, our ENT specialists are here to help with all your ear, nose, and throat concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2" asChild>
                  <a href="tel:+256740166778">
                    <Phone className="h-5 w-5" />
                    Call: +256 740 166 778
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2" asChild>
                  <a href="https://wa.me/256740166778" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Us
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
                Explore More
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
                <Link to="/blog" className="block">
                  <Card className="hover:shadow-md transition-shadow h-full">
                    <CardContent className="p-4 flex items-center gap-3">
                      <ArrowRight className="h-5 w-5 text-primary" />
                      <span className="text-foreground">Health Articles</span>
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

export default About;
