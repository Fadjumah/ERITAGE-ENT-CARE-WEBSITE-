import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContactButtons from "@/components/layout/FloatingContactButtons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  MessageCircle,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { SITE } from "@/config/site";

const Tonsillitis = () => {
  const causes = [
    { title: "Streptococcal bacteria (Strep throat)", detail: "Group A Streptococcus is the most common bacterial cause and requires antibiotic treatment." },
    { title: "Viral infection", detail: "Viruses including adenovirus, influenza, and Epstein-Barr (glandular fever) frequently cause tonsillitis." },
    { title: "Recurrent infection", detail: "Repeated episodes of tonsillitis — 5 or more per year — indicate chronic tonsillitis requiring specialist review." },
    { title: "Peritonsillar abscess", detail: "A serious complication where pus collects beside the tonsil, causing severe throat pain and difficulty opening the mouth." },
  ];

  const symptoms = [
    "Severe sore throat, worse on swallowing",
    "Swollen, red tonsils — sometimes with white or yellow patches",
    "High fever (often above 38.5°C)",
    "Swollen and tender lymph nodes in the neck",
    "Muffled or 'hot potato' voice",
    "Bad breath",
    "Difficulty swallowing or drinking",
    "Ear pain (referred from the throat)",
  ];

  const redFlags = [
    "Difficulty breathing or stridor (noisy breathing)",
    "Inability to swallow saliva or drooling",
    "Swelling of the mouth floor or neck causing asymmetry",
    "Trismus (unable to open the mouth fully) — suggests peritonsillar abscess",
    "High fever with severe neck stiffness",
    "Tonsillitis in a child under 2 years old",
  ];

  const treatments = [
    { step: "Throat swab & diagnosis", detail: "We confirm whether tonsillitis is bacterial or viral so treatment is targeted — not guesswork." },
    { step: "Antibiotic therapy", detail: "Penicillin or amoxicillin for bacterial tonsillitis. Completing the full course prevents recurrence and rheumatic fever." },
    { step: "Pain & fever management", detail: "Paracetamol and ibuprofen to reduce inflammation and keep temperature down, especially in children." },
    { step: "Abscess drainage", detail: "If a peritonsillar abscess is present, incision and drainage is performed in-clinic for immediate relief." },
    { step: "Tonsillectomy assessment", detail: "If tonsillitis is recurrent (5+ episodes per year) or causing complications, we assess suitability for surgical removal." },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the signs of tonsillitis in adults and children?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tonsillitis causes a severe sore throat, high fever, swollen red tonsils (sometimes with white patches), swollen neck glands, and difficulty swallowing. In children it may also cause ear pain and refusal to eat. See an ENT specialist at Eritage ENT Care in Entebbe if symptoms are severe or persist beyond 3 days."
        }
      },
      {
        "@type": "Question",
        "name": "When does tonsillitis need antibiotics?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Antibiotics are needed when tonsillitis is caused by bacteria — particularly Group A Streptococcus (Strep throat). Viral tonsillitis does not respond to antibiotics. Our ENT specialists use a throat swab to confirm the cause so you get the right treatment without unnecessary antibiotics."
        }
      },
      {
        "@type": "Question",
        "name": "Does my child need their tonsils removed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tonsillectomy is considered when a child (or adult) has 5 or more episodes of tonsillitis per year for 2 consecutive years, 3 or more episodes per year for 3 years, or tonsils so enlarged they cause sleep apnea, breathing difficulty, or swallowing problems. Our ENT specialists will assess your child and advise whether surgery is genuinely needed."
        }
      },
      {
        "@type": "Question",
        "name": "What is a peritonsillar abscess and is it serious?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A peritonsillar abscess (quinsy) is a collection of pus beside the tonsil. It causes very severe one-sided throat pain, difficulty opening the mouth, muffled voice, and fever. It is a medical emergency requiring drainage — call Eritage ENT Care immediately at +256 740 166 778."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I get tonsillitis treatment in Entebbe, Uganda?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Eritage ENT Care provides specialist tonsillitis assessment and treatment at Plot 34, 48 Berkeley Road, Entebbe Road, Entebbe. We offer same-day throat swabs, antibiotic prescription, abscess drainage, and tonsillectomy referral where needed. Call +256 740 166 778 or WhatsApp to book."
        }
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://eritageentcare.com/#business",
    "name": "Eritage ENT Care",
    "url": "https://eritageentcare.com",
    "telephone": "+256740166778",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot 34, 48 Berkeley Road, Entebbe Road",
      "addressLocality": "Entebbe",
      "addressRegion": "Central Region",
      "addressCountry": "UG"
    },
    "availableService": {
      "@type": "MedicalProcedure",
      "name": "Tonsillitis Treatment",
      "procedureType": "http://schema.org/TherapeuticProcedure",
      "description": "Expert tonsillitis assessment and treatment including throat swabs, antibiotic therapy, peritonsillar abscess drainage, and tonsillectomy evaluation."
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://eritageentcare.com" },
      { "@type": "ListItem", "position": 2, "name": "ENT Services", "item": "https://eritageentcare.com/ent-services" },
      { "@type": "ListItem", "position": 3, "name": "Tonsillitis Treatment in Entebbe", "item": "https://eritageentcare.com/conditions/tonsillitis-entebbe" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Tonsillitis Treatment in Entebbe, Uganda | ENT Specialist | Eritage ENT Care</title>
        <meta name="description" content="Tonsillitis in Entebbe? Get expert ENT assessment and treatment at Eritage ENT Care. We treat sore throat, strep throat, peritonsillar abscess, and recurrent tonsillitis. Call +256 740 166 778." />
        <meta name="keywords" content="tonsillitis treatment Entebbe, tonsillitis Uganda, strep throat Entebbe, sore throat specialist Uganda, tonsillectomy Uganda, peritonsillar abscess treatment" />
        <meta property="og:title" content="Tonsillitis Treatment in Entebbe, Uganda | Eritage ENT Care" />
        <meta property="og:description" content="Expert tonsillitis care at Eritage ENT Care, Entebbe. Throat swabs, antibiotic treatment, abscess drainage, and tonsillectomy assessment. Call +256 740 166 778." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eritageentcare.com/conditions/tonsillitis-entebbe" />
        <meta property="og:image" content="https://eritageentcare.com/eritage-logo.png" />
        <meta name="geo.region" content="UG-C" />
        <meta name="geo.placename" content="Entebbe, Uganda" />
        <link rel="canonical" href="https://eritageentcare.com/conditions/tonsillitis-entebbe" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wide">
                Condition-Specific Care · Entebbe, Uganda
              </p>
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
                Tonsillitis Treatment in Entebbe
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Severe sore throat, high fever, and difficulty swallowing? Our ENT specialists provide same-day tonsillitis assessment, throat swabs, and treatment at our Entebbe clinic.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2" asChild>
                  <a href={`tel:${SITE.phone.primary}`}>
                    <Phone className="h-5 w-5" />
                    Call: {SITE.phone.primaryFormatted}
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2" asChild>
                  <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What is tonsillitis */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              What is Tonsillitis?
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Tonsillitis is inflammation of the tonsils — two oval-shaped lymph nodes at the back of the throat. It causes a sore throat, high fever, and difficulty swallowing and is one of the most common ENT conditions in both children and adults in Uganda.
              </p>
              <p>
                While most cases resolve with treatment, recurrent or complicated tonsillitis requires specialist assessment. <strong className="text-foreground">Eritage ENT Care</strong> in Entebbe offers same-day throat swabs, targeted antibiotic prescriptions, abscess drainage, and tonsillectomy evaluation — all under one roof.
              </p>
            </div>
          </div>
        </section>

        {/* Causes */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8 text-center">
              Causes of Tonsillitis
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {causes.map((c, i) => (
                <Card key={i} className="bg-background">
                  <CardContent className="p-5 flex gap-4 items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">{c.title}</p>
                      <p className="text-sm text-muted-foreground mt-1">{c.detail}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Symptoms */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8 text-center">
              Symptoms of Tonsillitis
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {symptoms.map((s, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-secondary/10 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-foreground">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Red flags */}
        <section className="py-16 bg-destructive/5">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-3 justify-center mb-8">
              <AlertTriangle className="h-8 w-8 text-destructive" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                When to Seek Urgent ENT Care
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {redFlags.map((f, i) => (
                <Card key={i} className="border-destructive/20 bg-background">
                  <CardContent className="p-4 flex items-center gap-3">
                    <AlertTriangle className="h-5 w-5 text-destructive shrink-0" />
                    <span className="text-foreground">{f}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button variant="destructive" size="lg" className="gap-2" asChild>
                <a href={`tel:${SITE.phone.primary}`}>
                  <Phone className="h-5 w-5" />
                  Call Urgently: {SITE.phone.primaryFormatted}
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Treatment */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8 text-center">
              How We Treat Tonsillitis at Eritage ENT Care
            </h2>
            <div className="space-y-4">
              {treatments.map((t, i) => (
                <div key={i} className="flex gap-4 p-5 bg-secondary/10 rounded-lg">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold shrink-0 text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{t.step}</p>
                    <p className="text-sm text-muted-foreground mt-1">{t.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8 text-center">
              Tonsillitis — Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqSchema.mainEntity.map((faq, i) => (
                <Card key={i} className="bg-background">
                  <CardContent className="p-5">
                    <p className="font-semibold text-foreground mb-2">{faq.name}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Related links */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-xl font-serif font-bold text-foreground mb-6 text-center">Related Pages</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link to="/ent-services" className="block">
                <Card className="hover:shadow-md transition-shadow h-full">
                  <CardContent className="p-4 flex items-center gap-3">
                    <ArrowRight className="h-5 w-5 text-primary" />
                    <span className="text-foreground">All ENT Services</span>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/blog/tonsillitis-causes-symptoms" className="block">
                <Card className="hover:shadow-md transition-shadow h-full">
                  <CardContent className="p-4 flex items-center gap-3">
                    <ArrowRight className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Tonsillitis Article</span>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/urgent-ent-guidance" className="block">
                <Card className="hover:shadow-md transition-shadow h-full">
                  <CardContent className="p-4 flex items-center gap-3">
                    <ArrowRight className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Urgent ENT Guidance</span>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              Get Tonsillitis Treatment in Entebbe Today
            </h2>
            <p className="text-muted-foreground mb-2">
              Plot 34, 48 Berkeley Road, Entebbe Road, Entebbe · Open 24 Hours
            </p>
            <p className="text-muted-foreground mb-8">
              Same-day throat swab and assessment available. Specialised ENT care for adults and children.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2" asChild>
                <a href={`tel:${SITE.phone.primary}`}>
                  <Phone className="h-5 w-5" />
                  Call: {SITE.phone.primaryFormatted}
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp for Appointment
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

export default Tonsillitis;
