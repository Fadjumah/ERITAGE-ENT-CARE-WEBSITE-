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
  RotateCcw,
} from "lucide-react";
import { Link } from "react-router-dom";
import { SITE } from "@/config/site";

const Vertigo = () => {
  const causes = [
    { title: "BPPV", detail: "Benign Paroxysmal Positional Vertigo — caused by tiny calcium particles (canaliths) clumping in the inner ear canals." },
    { title: "Labyrinthitis", detail: "Inner ear infection (usually viral) causing inflammation of the delicate structure that controls hearing and balance." },
    { title: "Vestibular Neuritis", detail: "Inflammation of the vestibular nerve, which sends balance signals from the inner ear to the brain." },
    { title: "Meniere's Disease", detail: "A build-up of fluid in the inner ear, leading to episodes of vertigo, tinnitus, and hearing loss." },
    { title: "Vestibular Migraine", detail: "A type of migraine that primarily causes dizziness and balance issues rather than just headache." },
  ];

  const symptoms = [
    "Sensation of spinning or swaying (even when still)",
    "Dizziness or lightheadedness",
    "Nausea and vomiting during episodes",
    "Loss of balance or unsteadiness",
    "Abnormal eye movements (nystagmus)",
    "Ringing in the ears (tinnitus)",
    "A feeling of fullness in the ear",
  ];

  const redFlags = [
    "Sudden, severe headache unlike any you've had before",
    "Fever accompanied by vertigo",
    "Double vision or loss of vision",
    "Hearing loss that comes on suddenly",
    "Weakness in arms or legs, or difficulty speaking",
    "Loss of consciousness or fainting",
  ];

  const treatments = [
    { step: "Clinical Evaluation", detail: "History taking and physical examination including specialized balance tests (e.g., Dix-Hallpike maneuver)." },
    { step: "Epley Maneuver", detail: "A specific series of head movements used to treat BPPV by repositioning the canaliths in the inner ear." },
    { step: "Vestibular Rehabilitation", detail: "Specialized exercises to help the brain compensate for inner ear balance problems." },
    { step: "Medication", detail: "Vestibular suppressants or anti-nausea medications to manage symptoms during acute episodes." },
    { step: "Dietary Adjustments", detail: "Low-salt diets can be helpful for conditions like Meniere's disease." },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is vertigo a sign of a serious condition?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most vertigo is caused by inner ear problems and is not life-threatening. However, it can sometimes be a sign of more serious neurological issues. An ENT specialist in Entebbe can determine the cause."
        }
      },
      {
        "@type": "Question",
        "name": "How long does vertigo last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BPPV episodes often last seconds to minutes, while labyrinthitis can cause symptoms for days. Chronic conditions like Meniere's involve recurring episodes. Treatment can significantly shorten recovery time."
        }
      },
      {
        "@type": "Question",
        "name": "Can vertigo be cured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many types of vertigo, like BPPV, can be effectively 'cured' with simple maneuvers in the clinic. Other conditions are managed through medication, exercise, and lifestyle changes."
        }
      }
    ]
  };

  const conditionSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Vertigo",
    "description": "Vertigo is a sensation of spinning or dizziness, often caused by problems in the inner ear or brain. It is a symptom, not a disease itself.",
    "possibleTreatment": [
      { "@type": "MedicalTherapy", "name": "Canalith repositioning maneuvers (e.g., Epley maneuver)" },
      { "@type": "MedicalTherapy", "name": "Vestibular rehabilitation therapy" },
      { "@type": "Drug", "name": "Vestibular suppressants" }
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
      { "@type": "ListItem", "position": 3, "name": "Vertigo & Dizziness Treatment Entebbe", "item": "https://eritageentcare.com/conditions/vertigo-entebbe" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Vertigo & Dizziness Treatment in Entebbe, Uganda | ENT Specialist | Eritage ENT Care</title>
        <meta name="description" content="Struggling with vertigo or dizziness in Entebbe? Get expert diagnosis and treatment at Eritage ENT Care. We specialize in balance disorders and inner ear health. Call +256 740 166 778." />
        <meta property="og:title" content="Vertigo & Dizziness Treatment in Entebbe, Uganda | Eritage ENT Care" />
        <meta property="og:description" content="Expert care for vertigo and balance disorders in Entebbe. Identify the cause of your dizziness and find effective relief with our ENT specialists. Book today." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eritageentcare.com/conditions/vertigo-entebbe" />
        <meta property="og:image" content="https://eritageentcare.com/eritage-logo.png" />
        <meta name="keywords" content="vertigo treatment Entebbe, dizziness specialist Uganda, balance disorder ENT Entebbe, Epley maneuver Uganda, inner ear doctor Entebbe, spinning sensation treatment" />
        <link rel="canonical" href="https://eritageentcare.com/conditions/vertigo-entebbe" />
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
                Entebbe ENT Clinic · Balance & Dizziness
              </p>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Vertigo & Dizziness Treatment in Entebbe
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
                If the world feels like it's spinning or you're struggling to stay balanced, you need
                expert evaluation. At Eritage ENT Care, our specialists identify the inner ear
                causes of vertigo and provide targeted treatments to restore your steady footing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2 text-base px-6 py-5 h-auto" asChild>
                  <a href={`${SITE.whatsapp}?text=Hello%2C%20I%20am%20experiencing%20vertigo%20and%20dizziness%20and%20would%20like%20to%20book%20a%20specialist%20assessment.`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp for Assessment
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

        {/* Causes of Vertigo */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Common causes of vertigo
              </h2>
              <p className="text-muted-foreground mb-8">
                Vertigo is a symptom of many different conditions, most involving the inner ear.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {causes.map((cause, i) => (
                  <Card key={i} className="bg-background border-border hover:shadow-md transition-shadow">
                    <CardContent className="p-5">
                      <h3 className="font-semibold text-foreground mb-1">{cause.title}</h3>
                      <p className="text-sm text-muted-foreground">{cause.detail}</p>
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
                Signs and symptoms
              </h2>
              <p className="text-muted-foreground mb-8 text-center">
                Beyond the spinning sensation, patients often experience:
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

        {/* Red flags */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0" />
                  <h2 className="text-xl md:text-2xl font-bold text-foreground">
                    When vertigo is an emergency
                  </h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  If your vertigo is accompanied by any of these "red flags," seek emergency care immediately:
                </p>
                <ul className="space-y-3">
                  {redFlags.map((flag, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{flag}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Diagnosis & Treatment Pathway */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Specialized balance care pathway
              </h2>
              <p className="text-muted-foreground mb-8">
                At Eritage ENT Care, we use a systematic approach to resolve your dizziness.
              </p>
              <div className="space-y-4">
                {treatments.map((t, i) => (
                  <div key={i} className="flex gap-4 bg-background rounded-lg p-5 border border-border">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{t.step}</h3>
                      <p className="text-sm text-muted-foreground">{t.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Epley Maneuver Highlight */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  The Epley Maneuver
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  For many patients with BPPV (the most common cause of vertigo), relief can be
                  achieved in a single session using the Epley maneuver. This painless, non-invasive
                  procedure uses gravity to move the crystals out of the sensitive part of your
                  inner ear, stopping the spinning sensation almost immediately.
                </p>
              </div>
              <div className="flex-1 bg-primary/5 p-8 rounded-2xl border border-primary/20 text-center">
                <RotateCcw className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="font-semibold text-foreground text-lg mb-2">Fast Relief</p>
                <p className="text-muted-foreground text-sm">
                  Most BPPV patients notice an immediate reduction in symptoms after just one or two
                  guided maneuvers by our ENT specialists.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Primary CTA */}
        <section className="py-16 bg-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Stop the spinning today
              </h2>
              <p className="text-muted-foreground mb-8">
                Book your specialist vertigo assessment at Eritage ENT Care in Entebbe.
                Available 24/7 for urgent balance concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2 text-base px-6 py-5 h-auto" asChild>
                  <a href={`${SITE.whatsapp}?text=Hello%2C%20I%20am%20experiencing%20vertigo%20and%20would%20like%20to%20book%20a%20specialist%20consultation.`} target="_blank" rel="noopener noreferrer">
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
                <Link to="/conditions/hearing-loss-entebbe" className="flex items-center justify-between p-4 bg-background rounded-lg border border-border hover:border-primary transition-colors">
                  <div>
                    <p className="text-sm text-muted-foreground">Hearing changes too?</p>
                    <p className="font-semibold text-foreground">Hearing Loss Specialist</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-primary" />
                </Link>
                <Link to="/conditions/tinnitus-entebbe" className="flex items-center justify-between p-4 bg-background rounded-lg border border-border hover:border-primary transition-colors">
                  <div>
                    <p className="text-sm text-muted-foreground">Ringing in ears?</p>
                    <p className="font-semibold text-foreground">Tinnitus Treatment</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-primary" />
                </Link>
              </div>
              <div className="text-center">
                <p className="text-muted-foreground mb-3 text-sm">Learn more on our blog:</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/blog/balance-problems-dizziness" className="text-primary hover:underline text-sm font-medium">Balance Problems & Dizziness</Link>
                  <Link to="/blog/preventing-hearing-loss" className="text-primary hover:underline text-sm font-medium">Hearing Protection Tips</Link>
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

export default Vertigo;
