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

const BlockedEar = () => {
  const causes = [
    { title: "Earwax buildup", detail: "The most common cause. Wax accumulates and hardens, pressing against the eardrum." },
    { title: "Fluid behind the eardrum", detail: "After a cold or ear infection, fluid can become trapped in the middle ear." },
    { title: "Eustachian tube dysfunction", detail: "The tube that equalises ear pressure stops working properly — common after flying or diving." },
    { title: "Ear infection (Otitis media or externa)", detail: "Swelling from infection narrows the ear canal or fills the middle ear with fluid." },
    { title: "Foreign body in the ear", detail: "Insects, small objects, or cotton bud fragments lodged in the canal." },
  ];

  const symptoms = [
    "Muffled or dull hearing",
    "A feeling of fullness or pressure in the ear",
    "Mild ear pain or aching",
    "Ringing or buzzing sounds (tinnitus)",
    "Dizziness or balance problems",
    "Hearing your own voice echo inside your head",
  ];

  const redFlags = [
    "Sudden complete hearing loss in one or both ears",
    "Severe ear pain with fever",
    "Discharge (pus or blood) from the ear",
    "Facial weakness or drooping on one side",
    "Blocked ear that persists beyond 48 hours after a cold",
    "In a child under 2 — any ear blockage with crying or fever",
  ];

  const treatments = [
    { step: "Assessment", detail: "We examine the ear canal and eardrum with an otoscope to find the exact cause." },
    { step: "Earwax removal", detail: "Microsuction or irrigation — safe, fast, and done in-clinic. No cotton buds ever." },
    { step: "Fluid drainage", detail: "If fluid is present, we assess whether myringotomy or watchful waiting is appropriate." },
    { step: "Infection treatment", detail: "Prescription ear drops or oral antibiotics where clinically indicated." },
    { step: "Follow-up", detail: "A hearing check if needed, to confirm full recovery." },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What causes a blocked ear in Entebbe, Uganda?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The most common causes are earwax buildup, fluid after a cold or ear infection, Eustachian tube dysfunction, and ear infections. An ENT specialist at Eritage ENT Care in Entebbe can identify the exact cause and treat it the same day."
        }
      },
      {
        "@type": "Question",
        "name": "Can I unblock my ear at home?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can try swallowing, yawning, or using olive oil drops for mild wax. Never insert cotton buds or sharp objects — these push wax deeper and risk perforating the eardrum. If blockage persists beyond 48 hours, see an ENT specialist."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a blocked ear last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pressure-related blockage after flying usually resolves in hours. Wax or infection-related blockage can last days to weeks without treatment. With ENT treatment at our Entebbe clinic, most patients get relief the same day."
        }
      }
    ]
  };

  const conditionSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Blocked Ear (Ear Occlusion)",
    "alternateName": ["Ear blockage", "Occluded ear", "Blocked ear canal"],
    "description": "A blocked ear occurs when the ear canal or middle ear is obstructed, causing muffled hearing, pressure, and sometimes pain. Common causes include earwax buildup, fluid, infection, or Eustachian tube dysfunction.",
    "possibleTreatment": [
      { "@type": "MedicalTherapy", "name": "Earwax microsuction" },
      { "@type": "MedicalTherapy", "name": "Ear irrigation" },
      { "@type": "MedicalTherapy", "name": "Antibiotic ear drops" }
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
      { "@type": "ListItem", "position": 3, "name": "Blocked Ear Treatment Entebbe", "item": "https://eritageentcare.com/conditions/blocked-ear-entebbe" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Blocked Ear Treatment in Entebbe, Uganda | Eritage ENT Care</title>
        <meta name="description" content="Blocked ear in Entebbe? Get same-day treatment at Eritage ENT Care. We treat earwax buildup, fluid, infection, and Eustachian tube problems. Call +256 740 166 778." />
        <meta property="og:title" content="Blocked Ear Treatment in Entebbe, Uganda | Eritage ENT Care" />
        <meta property="og:description" content="Same-day blocked ear treatment in Entebbe. ENT specialists treat earwax, fluid, infections, and Eustachian tube problems. Book today." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eritageentcare.com/conditions/blocked-ear-entebbe" />
        <meta property="og:image" content="https://eritageentcare.com/eritage-logo.png" />
        <meta name="keywords" content="blocked ear treatment Entebbe, blocked ear Uganda, earwax removal Entebbe, ear blockage ENT specialist Uganda, muffled hearing treatment Entebbe" />
        <link rel="canonical" href="https://eritageentcare.com/conditions/blocked-ear-entebbe" />
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
                Entebbe ENT Clinic · Ear Conditions
              </p>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Blocked Ear Treatment in Entebbe, Uganda
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
                A blocked ear is treated at Eritage ENT Care in Entebbe with a same-day assessment and
                targeted treatment — whether the cause is earwax, fluid, infection, or a Eustachian tube
                problem. You do not need to wait or guess.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2 text-base px-6 py-5 h-auto" asChild>
                  <a href={`${SITE.whatsapp}?text=Hello%2C%20I%20have%20a%20blocked%20ear%20and%20would%20like%20to%20book%20an%20appointment.`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp for Appointment
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

        {/* What causes a blocked ear */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                What causes a blocked ear?
              </h2>
              <p className="text-muted-foreground mb-8">
                A blocked ear in Entebbe is most often caused by one of these five conditions.
                An ENT specialist can identify the cause in minutes.
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
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Symptoms of a blocked ear
              </h2>
              <p className="text-muted-foreground mb-8">
                These are the most common symptoms patients present with at our Entebbe clinic:
              </p>
              <div className="grid md:grid-cols-2 gap-3">
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
                    When to seek urgent ENT care in Entebbe
                  </h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  See an ENT specialist the same day if you have any of the following:
                </p>
                <ul className="space-y-3">
                  {redFlags.map((flag, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{flag}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button variant="destructive" size="lg" className="gap-2" asChild>
                    <a href={`${SITE.whatsapp}?text=Hello%2C%20I%20have%20an%20urgent%20ear%20problem%20and%20need%20to%20be%20seen%20today.`} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-5 w-5" />
                      Message us now — urgent
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                How we treat blocked ears at Eritage ENT Care, Entebbe
              </h2>
              <p className="text-muted-foreground mb-8">
                Our ENT specialists use the right tool for the right cause — not a one-size approach.
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

        {/* FAQ */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                Frequently asked questions about blocked ears in Entebbe
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Can I unblock my ear at home?</h3>
                  <p className="text-muted-foreground">
                    For mild wax, olive oil drops used for 3–5 days can soften the wax. Swallowing or yawning
                    can help pressure from flying. Never use cotton buds — they push wax deeper and risk a
                    perforated eardrum. If the blockage does not clear in 48 hours, see an ENT specialist in Entebbe.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">How long does treatment take?</h3>
                  <p className="text-muted-foreground">
                    Earwax microsuction takes 10–15 minutes. A full ENT assessment including treatment typically takes
                    30–45 minutes. Most patients leave the clinic with clear hearing.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Does earwax removal hurt?</h3>
                  <p className="text-muted-foreground">
                    Microsuction is not painful. You may feel mild vibration or a slight sensation of movement.
                    It is far safer and more comfortable than ear syringing or using cotton buds.
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
                Get your blocked ear treated today in Entebbe
              </h2>
              <p className="text-muted-foreground mb-8">
                Eritage ENT Care is open 24 hours at Plot 34, 48 Berkeley Road, Entebbe Road, Entebbe.
                No referral needed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2 text-base px-6 py-5 h-auto" asChild>
                  <a href={`${SITE.whatsapp}?text=Hello%2C%20I%20have%20a%20blocked%20ear%20and%20would%20like%20to%20book%20an%20appointment.`} target="_blank" rel="noopener noreferrer">
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
              <h2 className="text-xl font-bold text-foreground mb-6 text-center">Related conditions &amp; services</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <Link to="/conditions/ear-pain-entebbe" className="flex items-center justify-between p-4 bg-background rounded-lg border border-border hover:border-primary transition-colors">
                  <div>
                    <p className="text-sm text-muted-foreground">Also experiencing pain?</p>
                    <p className="font-semibold text-foreground">Ear Pain Relief — Entebbe</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-primary" />
                </Link>
                <Link to="/conditions/ear-discharge-entebbe" className="flex items-center justify-between p-4 bg-background rounded-lg border border-border hover:border-primary transition-colors">
                  <div>
                    <p className="text-sm text-muted-foreground">Discharge from the ear?</p>
                    <p className="font-semibold text-foreground">Ear Discharge Urgent Care</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-primary" />
                </Link>
                <Link to="/hearing-tests" className="flex items-center justify-between p-4 bg-background rounded-lg border border-border hover:border-primary transition-colors">
                  <div>
                    <p className="text-sm text-muted-foreground">Check your hearing</p>
                    <p className="font-semibold text-foreground">Hearing Tests &amp; Audiology</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-primary" />
                </Link>
                <Link to="/ent-services" className="flex items-center justify-between p-4 bg-background rounded-lg border border-border hover:border-primary transition-colors">
                  <div>
                    <p className="text-sm text-muted-foreground">All ear, nose &amp; throat care</p>
                    <p className="font-semibold text-foreground">Full ENT Services</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-primary" />
                </Link>
              </div>
              <div className="text-center">
                <p className="text-muted-foreground mb-3 text-sm">Related reading:</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/blog/understanding-ear-infections" className="text-primary hover:underline text-sm font-medium">Understanding Ear Infections</Link>
                  <Link to="/blog/ear-discharge-otorrhea" className="text-primary hover:underline text-sm font-medium">Ear Discharge — When to Seek Care</Link>
                  <Link to="/blog/preventing-hearing-loss" className="text-primary hover:underline text-sm font-medium">Preventing Hearing Loss</Link>
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

export default BlockedEar;
