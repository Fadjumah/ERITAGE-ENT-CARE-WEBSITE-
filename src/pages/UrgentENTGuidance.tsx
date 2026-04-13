import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContactButtons from "@/components/layout/FloatingContactButtons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const UrgentENTGuidance = () => {
  const suitableSymptoms = [
    "Severe or sudden ear pain",
    "Ear blockage or reduced hearing",
    "Bleeding after tonsil or throat procedures",
    "Persistent sore throat with fever or difficulty swallowing",
    "Ear discharge or ringing",
    "Sudden hearing changes in adults or children"
  ];

  const whatYouGet = [
    "Review of your symptoms (text, voice, or images via WhatsApp)",
    "Professional ENT guidance on urgency and next steps",
    "Clear direction: home care, clinic visit, hearing test, or emergency care"
  ];

  const howItWorks = [
    "Click the WhatsApp button below",
    "Receive service details and payment instructions",
    "Share your symptoms securely",
    "Get clear ENT guidance promptly"
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://eritageentcare.com" },
      { "@type": "ListItem", "position": 2, "name": "Urgent ENT Guidance", "item": "https://eritageentcare.com/urgent-ent-guidance" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Urgent ENT Guidance | Ear, Nose & Throat Help | Eritage ENT Care</title>
        <meta name="description" content="Get urgent ENT guidance for sudden ear pain, throat bleeding, blocked ears, or hearing changes. Professional symptom review via WhatsApp from Eritage ENT Care." />
        <meta property="og:title" content="Urgent ENT Guidance | Ear, Nose & Throat Help" />
        <meta property="og:description" content="Professional ENT guidance for urgent symptoms. Review your symptoms via WhatsApp and get clear direction on next steps." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eritageentcare.com/urgent-ent-guidance" />
        <meta property="og:image" content="https://eritageentcare.com/eritage-logo.png" />
        <meta name="keywords" content="urgent ENT help, ear pain guidance, throat bleeding help, blocked ear advice, hearing changes, ENT symptoms Uganda, ENT WhatsApp consultation" />
        <link rel="canonical" href="https://eritageentcare.com/urgent-ent-guidance" />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Urgent ENT Guidance for Ear, Nose & Throat Problems
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Sudden ear pain, throat bleeding, blocked ears, or hearing changes can be frightening.
                This page offers professional ENT guidance to help you understand what's happening, how urgent it is, and what to do next — quickly and safely.
              </p>
              <p className="text-xl font-semibold text-foreground">
                You are not alone, and you don't need to guess.
              </p>
            </div>
          </div>
        </section>

        {/* When this service is right for you */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
                When this service is right for you
              </h2>
              <p className="text-center text-muted-foreground mb-8">
                This urgent ENT guidance is suitable if you are experiencing:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {suitableSymptoms.map((symptom, index) => (
                  <Card key={index} className="bg-background border-border hover:shadow-md transition-shadow">
                    <CardContent className="p-4 flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{symptom}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="text-center text-muted-foreground italic">
                If your concern is urgent but you are unsure whether to rush to a facility, this service helps you decide correctly.
              </p>
            </div>
          </div>
        </section>

        {/* What you get */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                What you get
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-4">What this service provides:</h3>
                  <ul className="space-y-3">
                    {whatYouGet.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-4">What this service does not provide:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5 text-center font-bold">✕</span>
                      <span className="text-muted-foreground">Online diagnosis and prescriptions</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-muted-foreground italic">
                    This ensures safety, clarity, and ethical care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                How it works
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                {howItWorks.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                      {index + 1}
                    </div>
                    <p className="text-foreground">{step}</p>
                  </div>
                ))}
              </div>
              <p className="text-center mt-8 text-lg font-semibold text-primary">
                Fast. Private. Professional.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Pricing
              </h2>
              <Card className="bg-background border-primary/20">
                <CardContent className="p-8">
                  <p className="text-lg text-muted-foreground mb-2">Urgent ENT Guidance Fee:</p>
                  <p className="text-4xl md:text-5xl font-bold text-primary mb-4">
                    UGX 25,000
                  </p>
                  <p className="text-muted-foreground">
                    This is a one-time fee for professional assessment and direction.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Primary CTA */}
        <section className="py-16 bg-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <Button 
                size="lg" 
                className="gap-2 text-lg px-8 py-6 h-auto" 
                asChild
              >
                <a href="https://wa.me/256740166778?text=Hello%2C%20I%20need%20urgent%20ENT%20guidance." target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-6 w-6" />
                  👉 Get Urgent ENT Guidance on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                This service is provided by ENT specialists with clinical experience in ear, nose, and throat conditions, coordinated through Eritage ENT Care.
              </p>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <Link 
                  to="/ent-services" 
                  className="flex items-center justify-between p-4 bg-background rounded-lg border border-border hover:border-primary transition-colors"
                >
                  <div>
                    <p className="text-sm text-muted-foreground">Need a full assessment?</p>
                    <p className="font-semibold text-foreground">All ENT Services</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-primary" />
                </Link>
                <Link 
                  to="/hearing-tests" 
                  className="flex items-center justify-between p-4 bg-background rounded-lg border border-border hover:border-primary transition-colors"
                >
                  <div>
                    <p className="text-sm text-muted-foreground">Concerned about hearing?</p>
                    <p className="font-semibold text-foreground">Hearing Tests & Audiology Services</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-primary" />
                </Link>
              </div>

              {/* Condition-specific pages */}
              <div className="mb-6">
                <p className="text-muted-foreground mb-3 text-sm font-semibold text-center">Condition-specific pages — Entebbe:</p>
                <div className="grid md:grid-cols-3 gap-3">
                  <Link to="/conditions/ear-pain-entebbe" className="flex items-center justify-between p-3 bg-background rounded-lg border border-border hover:border-primary transition-colors">
                    <span className="font-medium text-foreground text-sm">Ear Pain Relief</span>
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </Link>
                  <Link to="/conditions/ear-discharge-entebbe" className="flex items-center justify-between p-3 bg-background rounded-lg border border-border hover:border-primary transition-colors">
                    <span className="font-medium text-foreground text-sm">Ear Discharge Urgent Care</span>
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </Link>
                  <Link to="/conditions/blocked-ear-entebbe" className="flex items-center justify-between p-3 bg-background rounded-lg border border-border hover:border-primary transition-colors">
                    <span className="font-medium text-foreground text-sm">Blocked Ear Treatment</span>
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </Link>
                </div>
              </div>

              {/* Additional Related Links */}
              <div className="text-center">
                <p className="text-muted-foreground mb-4 text-sm">Related Health Articles:</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/blog/ear-discharge-otorrhea" className="text-primary hover:underline text-sm font-medium">
                    Ear Discharge — When to Seek Urgent Care
                  </Link>
                  <Link to="/blog/understanding-ear-infections" className="text-primary hover:underline text-sm">
                    Understanding Ear Infections
                  </Link>
                  <Link to="/blog/foreign-bodies-uganda" className="text-primary hover:underline text-sm">
                    Foreign Bodies in ENT
                  </Link>
                  <Link to="/about" className="text-primary hover:underline text-sm">
                    About Our ENT Clinic
                  </Link>
                </div>
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

export default UrgentENTGuidance;
