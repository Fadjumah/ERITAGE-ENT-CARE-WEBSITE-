import { Helmet } from "react-helmet-async";
import { Phone, MessageCircle, MapPin, Ear, Activity, Waves, Brain, Baby, Stethoscope, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContactButtons from "@/components/layout/FloatingContactButtons";
import FAQSection from "@/components/sections/FAQSection";
import AskENTQuestion from "@/components/sections/AskENTQuestion";

const HearingTests = () => {
  const services = [
    {
      icon: Ear,
      title: "Pure Tone Audiometry (PTA)",
      description: "The standard test for measuring hearing sensitivity across different frequencies. Identifies the type and degree of hearing loss."
    },
    {
      icon: Activity,
      title: "Tympanometry",
      description: "Assesses middle ear function by measuring eardrum movement. Detects fluid, infections, or eustachian tube dysfunction."
    },
    {
      icon: Waves,
      title: "Otoacoustic Emissions (OAE)",
      description: "A quick, non-invasive test that measures inner ear (cochlear) function. Commonly used for newborn screening."
    },
    {
      icon: Brain,
      title: "Auditory Brainstem Response (ABR)",
      description: "Evaluates the auditory nerve pathway from the ear to the brainstem. Essential for diagnosing neural hearing loss."
    },
    {
      icon: Baby,
      title: "Newborn Hearing Screening",
      description: "Early detection screening for infants to identify hearing issues at birth, ensuring timely intervention and support."
    },
    {
      icon: Stethoscope,
      title: "Hearing Loss Evaluation & Referral",
      description: "Comprehensive assessment and expert referral for hearing aids, cochlear implants, or surgical intervention as needed."
    }
  ];

  const symptoms = [
    "Gradual or sudden hearing loss",
    "Blocked or clogged ears",
    "Tinnitus (ringing in the ears)",
    "Recurrent ear infections",
    "Persistent ear pain or discomfort",
    "Difficulty understanding speech",
    "Dizziness or balance problems"
  ];

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello, I would like to book a hearing test at Eritage ENT Care.");
    window.open(`https://wa.me/256740166778?text=${message}`, '_blank');
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Eritage ENT Care",
    "description": "Professional hearing tests including PTA, tympanometry, OAE, ABR, and full audiology screening services across Uganda.",
    "url": "https://eritageentcare.com/hearing-tests",
    "telephone": "+256740166778",
    "email": "info@eritageentcare.com",
    "areaServed": {
      "@type": "Country",
      "name": "Uganda"
    },
    "medicalSpecialty": ["Otolaryngology", "Audiology"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Hearing Test Services",
      "itemListElement": [
        {
          "@type": "MedicalTest",
          "name": "Pure Tone Audiometry (PTA)",
          "description": "Standard test for measuring hearing sensitivity across different frequencies"
        },
        {
          "@type": "MedicalTest",
          "name": "Tympanometry",
          "description": "Assesses middle ear function by measuring eardrum movement"
        },
        {
          "@type": "MedicalTest",
          "name": "Otoacoustic Emissions (OAE)",
          "description": "Non-invasive test measuring inner ear cochlear function"
        },
        {
          "@type": "MedicalTest",
          "name": "Auditory Brainstem Response (ABR)",
          "description": "Evaluates auditory nerve pathway from ear to brainstem"
        },
        {
          "@type": "MedicalTest",
          "name": "Newborn Hearing Screening",
          "description": "Early detection screening for infants to identify hearing issues at birth"
        }
      ]
    },
    "sameAs": [
      "https://maps.app.goo.gl/jyV5xBRkD95u2i4B8"
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://eritageentcare.com" },
      { "@type": "ListItem", "position": 2, "name": "Hearing Tests", "item": "https://eritageentcare.com/hearing-tests" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Hearing Tests – PTA, Tympanometry & Audiology Screening | Eritage ENT Care</title>
        <meta name="description" content="Professional hearing tests including PTA, tympanometry, OAE, ABR, and full audiology screening. Book your hearing test at Eritage ENT Care today." />
        <meta name="keywords" content="hearing test Uganda, PTA hearing test, tympanometry, audiology, ENT hearing test, hearing screening Uganda, audiometry Uganda, newborn hearing screening" />
        <meta property="og:title" content="Hearing Tests – PTA, Tympanometry & Audiology | Eritage ENT Care" />
        <meta property="og:description" content="Professional hearing tests including PTA, tympanometry, OAE, ABR, and full audiology screening across Uganda." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://eritageentcare.com/hearing-tests" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-secondary to-accent/20 py-20 md:py-28">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Professional Hearing Tests
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              PTA, Tympanometry, OAE, ABR & Full Audiology Screening
            </p>
            <Button 
              size="lg" 
              onClick={scrollToBooking}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg"
            >
              Book Hearing Test
            </Button>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Comprehensive Audiology Services
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At <strong className="text-primary">Eritage ENT Care</strong>, we partner with certified audiology centers 
                to provide high-quality, accurate hearing tests. Our collaborative approach ensures you receive 
                comprehensive diagnostic services with expert interpretation and personalized care for all your 
                hearing health needs.
              </p>
            </div>
          </div>
        </section>

        {/* Services Offered */}
        <section className="py-16 bg-accent/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-foreground mb-12">
              Our Hearing Test Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="p-3 rounded-full bg-primary/10">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-foreground">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why You May Need a Hearing Test */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 justify-center mb-8">
                <AlertCircle className="h-8 w-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                  When to Get a Hearing Test
                </h2>
              </div>
              <p className="text-center text-muted-foreground mb-8 text-lg">
                Consider scheduling a hearing evaluation if you experience any of the following:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {symptoms.map((symptom, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg"
                  >
                    <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-foreground">{symptom}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section id="booking" className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-foreground mb-8">
                Request a Hearing Test
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Options */}
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-foreground">
                      Get in Touch
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <a 
                      href="tel:+256740166778"
                      className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
                    >
                      <Phone className="h-5 w-5 text-primary" />
                      <span className="text-foreground font-medium">+256 740 166 778</span>
                    </a>
                    <a 
                      href="tel:+256742017229"
                      className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
                    >
                      <Phone className="h-5 w-5 text-primary" />
                      <span className="text-foreground font-medium">+256 740 166 778</span>
                    </a>
                    <button 
                      onClick={openWhatsApp}
                      className="flex items-center gap-3 p-4 bg-green-100 rounded-lg hover:bg-green-200 transition-colors w-full text-left"
                    >
                      <MessageCircle className="h-5 w-5 text-green-600" />
                      <span className="text-green-700 font-medium">Book via WhatsApp</span>
                    </button>
                    <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg">
                      <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Multiple locations across Uganda — <a href="/#locations" className="text-primary hover:underline">View our clinics</a></span>
                    </div>
                  </CardContent>
                </Card>

                {/* Map */}
                <Card className="bg-card border-border overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63836.89843940836!2d32.43986649999999!3d0.054389000000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dba3c7e5e5555%3A0x5555555555555555!2sEritage%20ENT%20Care!5e0!3m2!1sen!2sug!4v1234567890123!5m2!1sen!2sug"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '280px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Eritage ENT Care Location"
                  ></iframe>
                </Card>
              </div>
              
              <div className="text-center mt-6">
                <a
                  href="https://maps.app.goo.gl/3zxRWd4YfZDah94eA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Statement */}
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg md:text-xl text-foreground italic">
                "We collaborate with trusted audiology centers to ensure accurate and reliable hearing testing 
                for all our ENT patients at <strong className="text-primary">Eritage ENT Care</strong>."
              </p>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl font-bold text-foreground mb-6 text-center">Related ENT Services</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <a href="/ent-services" className="block p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors text-center">
                  <span className="font-medium text-foreground">All ENT Services</span>
                </a>
                <a href="/blog/preventing-hearing-loss" className="block p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors text-center">
                  <span className="font-medium text-foreground">Preventing Hearing Loss</span>
                </a>
                <a href="/blog/balance-problems-dizziness" className="block p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors text-center">
                  <span className="font-medium text-foreground">Balance & Dizziness Guide</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection variant="compact" />

        {/* Ask ENT Question Form */}
        <AskENTQuestion />

        <Footer />
        <FloatingContactButtons />
      </div>
    </>
  );
};

export default HearingTests;
