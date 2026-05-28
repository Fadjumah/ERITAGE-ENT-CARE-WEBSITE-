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
  Wind,
} from "lucide-react";
import { Link } from "react-router-dom";
import { SITE } from "@/config/site";

const NasalPolyps = () => {
  const features = [
    { title: "What are they?", detail: "Soft, painless, non-cancerous growths on the lining of your nasal passages or sinuses." },
    { title: "How they feel", detail: "Like a persistent cold or 'stuffed up' feeling that doesn't go away with standard medicine." },
    { title: "Common triggers", detail: "Chronic inflammation from asthma, recurring infections, allergies, or immune disorders." },
    { title: "Risk of recurrence", detail: "Polyps can return even after treatment, requiring ongoing management by a specialist." },
  ];

  const symptoms = [
    "Persistent nasal congestion or stuffiness",
    "Post-nasal drip (mucus dripping down the throat)",
    "Decreased or absent sense of smell",
    "Loss of sense of taste",
    "Facial pain or headache",
    "Pain in your upper teeth",
    "A sense of pressure over your forehead and face",
    "Snoring or mouth breathing during sleep",
  ];

  const complications = [
    "Obstructive Sleep Apnea (OSA)",
    "Asthma flare-ups",
    "Chronic Sinus Infections",
    "Permanent loss of smell",
  ];

  const diagnosis = [
    { step: "Nasal Endoscopy", detail: "Using a thin, flexible tube with a camera to see deep into your nasal passages and sinuses." },
    { step: "CT Scan", detail: "Detailed imaging to determine the size and location of polyps and assess the extent of inflammation." },
    { step: "Allergy Testing", detail: "Identifying if allergies are driving the chronic inflammation causing the polyps." },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are nasal polyps cancerous?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, nasal polyps are benign (non-cancerous) growths. However, they can cause significant discomfort and health issues by blocking your nasal passages and sinuses."
        }
      },
      {
        "@type": "Question",
        "name": "Can nasal polyps be treated without surgery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, many nasal polyps can be managed with medical treatments like corticosteroid nasal sprays or oral steroids to shrink them. Surgery is considered if medical treatment is unsuccessful."
        }
      },
      {
        "@type": "Question",
        "name": "Do nasal polyps grow back?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unfortunately, nasal polyps have a high rate of recurrence. This is why ongoing management with an ENT specialist in Entebbe is important to control the underlying inflammation."
        }
      }
    ]
  };

  const conditionSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Nasal Polyps",
    "alternateName": ["Nasal polyposis"],
    "description": "Nasal polyps are soft, painless, noncancerous growths on the lining of your nasal passages or sinuses. They hang down like teardrops or grapes and result from chronic inflammation.",
    "possibleTreatment": [
      { "@type": "MedicalTherapy", "name": "Nasal corticosteroids" },
      { "@type": "MedicalTherapy", "name": "Oral corticosteroids" },
      { "@type": "MedicalProcedure", "name": "Polypectomy" },
      { "@type": "MedicalProcedure", "name": "Endoscopic sinus surgery" }
    ],
    "recognizingAuthority": {
      "@type": "MedicalOrganization",
      "name": "Eritage ENT Care - Entebbe",
      "url": "https://eritageentcare.com"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://eritageentcare.com" },
      { "@type": "ListItem", "position": 2, "name": "Conditions", "item": "https://eritageentcare.com/ent-services" },
      { "@type": "ListItem", "position": 3, "name": "Nasal Polyps Treatment Entebbe", "item": "https://eritageentcare.com/conditions/nasal-polyps-entebbe" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Nasal Polyps Treatment in Entebbe, Uganda | ENT Specialist | Eritage ENT Care</title>
        <meta name="description" content="Struggling with nasal polyps in Entebbe? Get expert diagnosis and treatment at Eritage ENT Care. We offer nasal endoscopy and advanced medical and surgical management. Call +256 740 166 778." />
        <meta property="og:title" content="Nasal Polyps Treatment in Entebbe, Uganda | Eritage ENT Care" />
        <meta property="og:description" content="Specialist diagnosis and treatment for nasal polyps in Entebbe. Relieve congestion and restore your sense of smell with expert ENT care. Book today." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eritageentcare.com/conditions/nasal-polyps-entebbe" />
        <meta property="og:image" content="https://eritageentcare.com/eritage-logo.png" />
        <meta name="keywords" content="nasal polyps treatment Entebbe, nasal polyposis Uganda, nose growths ENT Entebbe, chronic sinusitis polyps Uganda, ear doctor Entebbe, breathing problems Entebbe" />
        <link rel="canonical" href="https://eritageentcare.com/conditions/nasal-polyps-entebbe" />
        <script type="application/ld+json">{JSON.stringify(conditionSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wide">
                Entebbe ENT Clinic · Sinus & Nasal Care
              </p>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Nasal Polyps Treatment in Entebbe, Uganda
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
                Persistent nasal blockage and loss of smell are common signs of nasal polyps. At Eritage ENT Care,
                our specialists use advanced nasal endoscopy to diagnose polyps and provide effective
                treatments to help you breathe freely again.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2 text-base px-6 py-5 h-auto" asChild>
                  <a href={`${SITE.whatsapp}?text=Hello%2C%20I%20suspect%20I%20have%20nasal%20polyps%20and%20would%20like%20to%20book%20a%20consultation.`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp for Consultation
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 text-base px-6 py-5 h-auto" asChild>
                  <a href={`tel:${SITE.phone.primary}`}>
                    <Phone className="h-5 w-5" />
                    {SITE.phone.primaryFormatted}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What are Nasal Polyps */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                What are nasal polyps?
              </h2>
              <p className="text-muted-foreground mb-8">
                Understanding nasal polyps is the first step toward finding the right treatment.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, i) => (
                  <Card key={i} className="bg-background border-border hover:shadow-md transition-shadow">
                    <CardContent className="p-5">
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.detail}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Symptoms */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
                Symptoms to watch for
              </h2>
              <p className="text-muted-foreground mb-8 text-center">
                Small polyps might not cause symptoms, but larger ones can lead to:
              </p>
              <div className="grid md:grid-cols-2 gap-3 max-w-3xl mx-auto">
                {symptoms.map((s, i) => (
                  <div key={i} className="flex items-center gap-3 bg-background rounded-lg p-4 border border-border">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Complications */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-primary flex-shrink-0" />
                  <h2 className="text-xl md:text-2xl font-bold text-foreground">
                    Potential complications
                  </h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  Untreated nasal polyps can lead to more serious health issues:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {complications.map((c, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span className="text-foreground font-medium">{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Diagnosis Pathway */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                How we diagnose nasal polyps in Entebbe
              </h2>
              <p className="text-muted-foreground mb-8">
                Our specialists use precision tools to confirm the presence and extent of polyps.
              </p>
              <div className="space-y-4">
                {diagnosis.map((d, i) => (
                  <div key={i} className="flex gap-4 bg-background rounded-lg p-5 border border-border">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{d.step}</h3>
                      <p className="text-sm text-muted-foreground">{d.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
                Treatment options
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-center mt-12">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground">Medical Management</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The first line of treatment usually involves medications to shrink the polyps and
                    reduce inflammation. This includes corticosteroid sprays, oral steroids, and
                    managing underlying allergies.
                  </p>
                  <h3 className="text-xl font-bold text-foreground mt-6">Surgical Options</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    If medical treatment isn't enough, our specialists may recommend Functional
                    Endoscopic Sinus Surgery (FESS) to remove the polyps and open up the sinus
                    cavities for better drainage.
                  </p>
                </div>
                <div className="bg-accent/30 p-8 rounded-2xl border border-border text-center">
                  <Wind className="h-16 w-16 text-primary mx-auto mb-4" />
                  <p className="font-semibold text-foreground text-lg mb-2">Breathe Easier</p>
                  <p className="text-muted-foreground text-sm">
                    Most patients experience significant improvement in breathing and sense of smell
                    after successful treatment of nasal polyps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Primary CTA */}
        <section className="py-16 bg-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Expert care for nasal polyps in Entebbe
              </h2>
              <p className="text-muted-foreground mb-8">
                Don't struggle with a blocked nose. Book your specialist consultation today at Plot 34, 48 Berkeley Road.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2 text-base px-6 py-5 h-auto" asChild>
                  <a href={`${SITE.whatsapp}?text=Hello%2C%20I%20am%20struggling%20with%20nasal%20blockage%20and%20would%20like%20to%20see%20an%20ENT%20specialist.`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    Book via WhatsApp
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 text-base px-6 py-5 h-auto" asChild>
                  <a href={`tel:${SITE.phone.primary}`}>
                    <Phone className="h-5 w-5" />
                    Call {SITE.phone.primaryFormatted}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Internal links */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl font-bold text-foreground mb-6 text-center">Related conditions & resources</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <Link to="/conditions/sinusitis-entebbe" className="flex items-center justify-between p-4 bg-background rounded-lg border border-border hover:border-primary transition-colors">
                  <div>
                    <p className="text-sm text-muted-foreground">Frequent sinus issues?</p>
                    <p className="font-semibold text-foreground">Sinusitis Treatment</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-primary" />
                </Link>
                <Link to="/ent-services" className="flex items-center justify-between p-4 bg-background rounded-lg border border-border hover:border-primary transition-colors">
                  <div>
                    <p className="text-sm text-muted-foreground">Full range of care</p>
                    <p className="font-semibold text-foreground">All ENT Services</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-primary" />
                </Link>
              </div>
              <div className="text-center">
                <p className="text-muted-foreground mb-3 text-sm">Learn more on our blog:</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/blog/nasal-polyps-chronic-sinusitis" className="text-primary hover:underline text-sm font-medium">Nasal Polyps & Sinusitis</Link>
                  <Link to="/blog/sinusitis-treatment-guide" className="text-primary hover:underline text-sm font-medium">Sinusitis Guide</Link>
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

export default NasalPolyps;
