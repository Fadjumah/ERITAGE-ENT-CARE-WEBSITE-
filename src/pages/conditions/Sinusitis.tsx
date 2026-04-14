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

const Sinusitis = () => {
  const causes = [
    { title: "Viral infection (common cold)", detail: "The most frequent trigger. A cold inflames the sinus lining, blocking normal drainage." },
    { title: "Bacterial infection", detail: "Bacteria colonise blocked sinuses, causing thick green or yellow discharge and persistent pressure." },
    { title: "Allergic rhinitis", detail: "Dust, pollen, and mould trigger swelling that blocks the sinus openings." },
    { title: "Nasal polyps", detail: "Benign growths inside the nasal passages that obstruct drainage and cause recurrent sinusitis." },
    { title: "Deviated nasal septum", detail: "A crooked dividing wall between nostrils reduces airflow and promotes bacterial growth in sinuses." },
    { title: "Dental infection", detail: "Upper tooth root infections can spread directly into the maxillary (cheek) sinuses." },
  ];

  const symptoms = [
    "Facial pain or pressure (cheeks, forehead, behind the eyes)",
    "Thick yellow or green nasal discharge",
    "Blocked or stuffy nose on one or both sides",
    "Reduced or lost sense of smell",
    "Post-nasal drip causing sore throat or cough",
    "Headache that worsens when bending forward",
    "Toothache in the upper jaw",
    "Fatigue and low-grade fever",
  ];

  const redFlags = [
    "Severe headache that comes on suddenly",
    "Swelling or redness around the eye or forehead",
    "Vision changes or double vision",
    "Stiff neck with fever",
    "Symptoms lasting more than 12 weeks without improvement",
    "Recurrent sinusitis (4 or more episodes per year)",
  ];

  const treatments = [
    { step: "Nasal endoscopy", detail: "We examine the nasal passages and sinus openings directly with a thin scope to identify polyps, pus, or structural problems." },
    { step: "Saline irrigation", detail: "High-volume nasal rinse to flush mucus, reduce congestion, and promote sinus drainage." },
    { step: "Steroid nasal sprays", detail: "Reduce sinus lining inflammation and shrink polyps to restore airflow." },
    { step: "Targeted antibiotics", detail: "Prescribed only for confirmed bacterial sinusitis — culture-guided where needed." },
    { step: "Allergy management", detail: "Allergy testing and immunotherapy if allergic rhinitis is the underlying driver." },
    { step: "Surgical referral", detail: "Functional Endoscopic Sinus Surgery (FESS) for chronic sinusitis not responding to medical treatment." },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is sinusitis and how do I know if I have it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sinusitis is inflammation of the sinus cavities, usually caused by a viral or bacterial infection. Signs include facial pressure or pain (especially in the cheeks and forehead), thick nasal discharge, blocked nose, and reduced sense of smell. If symptoms last more than 10 days or keep returning, see an ENT specialist at Eritage ENT Care in Entebbe."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between acute and chronic sinusitis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Acute sinusitis lasts less than 4 weeks, usually triggered by a cold or short-term infection. Chronic sinusitis persists for 12 weeks or longer and often requires specialist investigation, nasal endoscopy, and targeted treatment. Recurrent acute sinusitis (4+ episodes per year) should also be evaluated by an ENT specialist."
        }
      },
      {
        "@type": "Question",
        "name": "Can sinusitis be treated without antibiotics?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — most acute sinusitis is viral and resolves with saline nasal rinses, steroid sprays, steam inhalation, and pain relief. Antibiotics are only needed when bacterial infection is confirmed. Our ENT specialists at Eritage ENT Care will advise the right treatment based on your specific diagnosis."
        }
      },
      {
        "@type": "Question",
        "name": "How long does sinusitis last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Acute viral sinusitis usually clears in 7–10 days. Bacterial sinusitis may last 3–4 weeks. Chronic sinusitis persists beyond 12 weeks and requires specialist management. Untreated or recurring sinusitis can lead to complications — seek ENT assessment at our Entebbe clinic if symptoms linger."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I get sinusitis treatment in Entebbe, Uganda?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Eritage ENT Care offers specialist sinusitis assessment and treatment at our clinic on Plot 34, 48 Berkeley Road, Entebbe Road, Entebbe. We provide nasal endoscopy, targeted medication, and chronic sinusitis management. Call +256 740 166 778 or WhatsApp to book."
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
      "name": "Sinusitis Treatment",
      "procedureType": "http://schema.org/TherapeuticProcedure",
      "description": "Expert diagnosis and treatment of acute and chronic sinusitis including nasal endoscopy, medical management, and surgical referral."
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://eritageentcare.com" },
      { "@type": "ListItem", "position": 2, "name": "ENT Services", "item": "https://eritageentcare.com/ent-services" },
      { "@type": "ListItem", "position": 3, "name": "Sinusitis Treatment in Entebbe", "item": "https://eritageentcare.com/conditions/sinusitis-entebbe" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Sinusitis Treatment in Entebbe, Uganda | ENT Specialist | Eritage ENT Care</title>
        <meta name="description" content="Sinusitis in Entebbe? Get expert diagnosis and treatment at Eritage ENT Care. We treat acute and chronic sinusitis, nasal polyps, and recurring sinus infections. Call +256 740 166 778." />
        <meta name="keywords" content="sinusitis treatment Entebbe, sinus infection Uganda, chronic sinusitis Entebbe, ENT sinus specialist Uganda, nasal congestion treatment, sinus headache Uganda" />
        <meta property="og:title" content="Sinusitis Treatment in Entebbe, Uganda | Eritage ENT Care" />
        <meta property="og:description" content="Expert sinusitis care at Eritage ENT Care, Entebbe. Nasal endoscopy, targeted antibiotics, allergy management, and chronic sinusitis treatment. Call +256 740 166 778." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eritageentcare.com/conditions/sinusitis-entebbe" />
        <meta property="og:image" content="https://eritageentcare.com/eritage-logo.png" />
        <meta name="geo.region" content="UG-C" />
        <meta name="geo.placename" content="Entebbe, Uganda" />
        <link rel="canonical" href="https://eritageentcare.com/conditions/sinusitis-entebbe" />
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
                Sinusitis Treatment in Entebbe
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Facial pain, blocked nose, and thick discharge that won't go away? Our ENT specialists diagnose and treat acute and chronic sinusitis at our Entebbe clinic.
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

        {/* What is sinusitis */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              What is Sinusitis?
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Sinusitis — also called rhinosinusitis — is inflammation of the air-filled cavities (sinuses) surrounding the nose and eyes. When the sinus lining swells, mucus cannot drain normally, creating pressure, pain, and a breeding ground for bacteria.
              </p>
              <p>
                Sinusitis affects millions of people and is one of the most common reasons patients visit an ENT specialist. <strong className="text-foreground">Eritage ENT Care</strong> in Entebbe provides full specialist assessment: nasal endoscopy, targeted treatment, and chronic sinusitis management — all without referral delays.
              </p>
            </div>
          </div>
        </section>

        {/* Causes */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8 text-center">
              Common Causes of Sinusitis
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
              Symptoms of Sinusitis
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
              How We Treat Sinusitis at Eritage ENT Care
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
              Sinusitis — Frequently Asked Questions
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
              <Link to="/blog/sinusitis-treatment-guide" className="block">
                <Card className="hover:shadow-md transition-shadow h-full">
                  <CardContent className="p-4 flex items-center gap-3">
                    <ArrowRight className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Sinusitis Treatment Guide</span>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/blog/managing-allergies-naturally" className="block">
                <Card className="hover:shadow-md transition-shadow h-full">
                  <CardContent className="p-4 flex items-center gap-3">
                    <ArrowRight className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Managing Allergies</span>
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
              Get Sinusitis Treatment in Entebbe Today
            </h2>
            <p className="text-muted-foreground mb-2">
              Plot 34, 48 Berkeley Road, Entebbe Road, Entebbe · Open 24 Hours
            </p>
            <p className="text-muted-foreground mb-8">
              Same-day ENT assessment available. Don't let sinus pain disrupt your life.
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

export default Sinusitis;
