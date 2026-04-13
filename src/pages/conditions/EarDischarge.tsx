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

const EarDischarge = () => {
  const dischargeTypes = [
    {
      type: "Yellow or green pus",
      meaning: "Active bacterial infection — otitis externa or otitis media with perforation. Needs antibiotic treatment urgently.",
      urgency: "high",
    },
    {
      type: "Clear watery fluid",
      meaning: "May be Eustachian tube fluid, a perforated eardrum, or — after head trauma — cerebrospinal fluid (CSF). Any clear discharge after head injury is an emergency.",
      urgency: "high",
    },
    {
      type: "Bloody or blood-stained discharge",
      meaning: "Trauma to the ear canal, a ruptured blood vessel in an infection, or cholesteatoma. Always requires same-day assessment.",
      urgency: "high",
    },
    {
      type: "Dark brown or black waxy discharge",
      meaning: "Often softened earwax mixed with sweat. Can be normal, but if it has an odour it may indicate fungal infection.",
      urgency: "medium",
    },
    {
      type: "White or creamy discharge with smell",
      meaning: "Strongly suggests chronic infection or cholesteatoma — a skin growth in the middle ear that destroys bone if untreated.",
      urgency: "high",
    },
  ];

  const causes = [
    { title: "Outer ear infection (Otitis externa)", detail: "Bacterial or fungal infection of the ear canal. Common after swimming. Often painful." },
    { title: "Perforated eardrum", detail: "A hole in the eardrum allows fluid from the middle ear to drain out. Can follow infection, trauma, or a sudden pressure change." },
    { title: "Chronic middle ear infection", detail: "Long-standing infection causes persistent discharge, often with hearing loss." },
    { title: "Cholesteatoma", detail: "An abnormal skin growth in the middle ear that produces foul-smelling discharge and destroys surrounding bone structures." },
    { title: "Foreign body in the ear", detail: "An insect, bead, or other object causing local infection and discharge." },
  ];

  const redFlags = [
    "Any discharge that starts suddenly after head trauma",
    "Discharge with facial weakness or drooping",
    "Discharge with severe headache and neck stiffness",
    "Bloody discharge in a child",
    "Discharge that is foul-smelling and recurring",
    "Hearing loss that started when the discharge began",
    "Discharge in one ear that has lasted more than 7 days",
  ];

  const treatments = [
    { step: "Ear examination", detail: "Full otoscopy to identify the source — canal, eardrum, or middle ear." },
    { step: "Microsuction / ear toilet", detail: "Safe removal of discharge, wax, or debris to allow full assessment and improve healing." },
    { step: "Swab if needed", detail: "A swab identifies the specific bacteria or fungus to guide the correct antibiotic or antifungal." },
    { step: "Prescription treatment", detail: "Targeted antibiotic or antifungal ear drops, or oral antibiotics for deep infection." },
    { step: "Further investigation", detail: "For persistent or complex cases — CT scan of the temporal bone to rule out cholesteatoma or bone erosion." },
  ];

  const conditionSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Ear Discharge (Otorrhea)",
    "alternateName": ["Otorrhea", "Runny ear", "Ear drainage"],
    "description": "Ear discharge (otorrhea) is any fluid that drains from the ear canal. It may be pus, blood, clear fluid, or wax. It is never normal to have persistent discharge from the ear and always requires assessment by an ENT specialist to identify the cause and prevent complications.",
    "possibleTreatment": [
      { "@type": "MedicalTherapy", "name": "Antibiotic ear drops" },
      { "@type": "MedicalTherapy", "name": "Ear microsuction and toilet" },
      { "@type": "MedicalTherapy", "name": "Oral antibiotics" },
      { "@type": "MedicalTherapy", "name": "Surgical repair of eardrum perforation" }
    ],
    "recognizingAuthority": {
      "@type": "MedicalOrganization",
      "name": "Eritage ENT Care - Entebbe",
      "url": "https://eritageentcare.com"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is ear discharge serious?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ear discharge is always a sign that something is wrong. It can range from a simple outer ear infection to a perforated eardrum or cholesteatoma. All cases of ear discharge lasting more than 24 hours should be assessed by an ENT specialist."
        }
      },
      {
        "@type": "Question",
        "name": "What does yellow ear discharge mean?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yellow or green ear discharge usually means an active bacterial infection, either in the ear canal or behind a perforated eardrum. It requires antibiotic treatment, which should be guided by an ENT specialist after identifying the exact cause."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I get ear discharge treated in Entebbe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Eritage ENT Care in Entebbe provides same-day assessment and treatment for ear discharge. We are located at Plot 34, 48 Berkeley Road, Entebbe Road, Entebbe and are open 24 hours. Call +256 740 166 778 or WhatsApp to book."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://eritageentcare.com" },
      { "@type": "ListItem", "position": 2, "name": "Conditions", "item": "https://eritageentcare.com/ent-services" },
      { "@type": "ListItem", "position": 3, "name": "Ear Discharge Urgent Care Entebbe", "item": "https://eritageentcare.com/conditions/ear-discharge-entebbe" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Ear Discharge Treatment in Entebbe, Uganda | Urgent ENT Care | Eritage ENT Care</title>
        <meta name="description" content="Ear discharge in Entebbe? This is never normal. Get same-day ENT assessment at Eritage ENT Care. We treat otorrhea, perforated eardrums, and ear infections. Call +256 740 166 778." />
        <meta property="og:title" content="Ear Discharge Treatment in Entebbe, Uganda | Eritage ENT Care" />
        <meta property="og:description" content="Ear discharge is never normal. Same-day urgent ENT care in Entebbe for otorrhea, ear infections, and perforated eardrums. Book today." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eritageentcare.com/conditions/ear-discharge-entebbe" />
        <meta property="og:image" content="https://eritageentcare.com/eritage-logo.png" />
        <meta name="keywords" content="ear discharge Entebbe, otorrhea treatment Uganda, runny ear ENT specialist Entebbe, ear pus treatment Uganda, ear discharge urgent care Entebbe" />
        <link rel="canonical" href="https://eritageentcare.com/conditions/ear-discharge-entebbe" />
        <script type="application/ld+json">{JSON.stringify(conditionSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero — urgent tone */}
        <section className="relative bg-gradient-to-br from-destructive/10 via-secondary/5 to-accent/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-destructive/15 text-destructive rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
                <AlertTriangle className="h-4 w-4" />
                Ear discharge is never normal — seek ENT care
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Ear Discharge (Otorrhea) — Urgent ENT Care in Entebbe
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
                Any fluid draining from the ear — pus, blood, clear or foul-smelling discharge — signals
                that something is wrong. At Eritage ENT Care in Entebbe, our specialists identify the cause
                on the same day and start the right treatment immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2 text-base px-6 py-5 h-auto bg-destructive hover:bg-destructive/90" asChild>
                  <a href={`${SITE.whatsapp}?text=Hello%2C%20I%20have%20ear%20discharge%20and%20need%20urgent%20ENT%20care.`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    Get urgent care — WhatsApp now
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

        {/* What the discharge colour means */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                What does the colour of ear discharge mean?
              </h2>
              <p className="text-muted-foreground mb-8">
                The appearance of discharge gives the first clue about the cause. All types require assessment.
              </p>
              <div className="space-y-4">
                {dischargeTypes.map((d, i) => (
                  <Card key={i} className={`border-l-4 ${d.urgency === "high" ? "border-l-destructive" : "border-l-amber-400"}`}>
                    <CardContent className="p-5">
                      <div className="flex items-start gap-3">
                        <div className={`w-3 h-3 rounded-full mt-1.5 flex-shrink-0 ${d.urgency === "high" ? "bg-destructive" : "bg-amber-400"}`} />
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{d.type}</h3>
                          <p className="text-sm text-muted-foreground">{d.meaning}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Causes */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Common causes of ear discharge
              </h2>
              <p className="text-muted-foreground mb-8">
                These are the conditions our ENT specialists in Entebbe treat most frequently:
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

        {/* Red flags */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0" />
                  <h2 className="text-xl md:text-2xl font-bold text-foreground">
                    These signs mean come in today — do not wait
                  </h2>
                </div>
                <ul className="space-y-3 mb-6">
                  {redFlags.map((flag, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{flag}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground italic">
                  Untreated ear discharge — especially with cholesteatoma — causes permanent hearing loss
                  and can spread infection to the skull base. Early treatment is always better.
                </p>
                <div className="mt-6">
                  <Button variant="destructive" size="lg" className="gap-2" asChild>
                    <a href={`${SITE.whatsapp}?text=Hello%2C%20I%20have%20urgent%20ear%20discharge%20and%20need%20to%20be%20seen%20today.`} target="_blank" rel="noopener noreferrer">
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
                How we treat ear discharge at Eritage ENT Care, Entebbe
              </h2>
              <p className="text-muted-foreground mb-8">
                We don't guess — we examine, identify, and treat:
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
                Frequently asked questions about ear discharge in Entebbe
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Is ear discharge serious?</h3>
                  <p className="text-muted-foreground">
                    Always. Ear discharge is never a normal finding. Even if it is painless, it signals
                    an infection, a ruptured eardrum, or — in chronic cases — cholesteatoma. Left untreated,
                    these conditions cause irreversible hearing loss or spread beyond the ear.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Can I put ear drops in a discharging ear?</h3>
                  <p className="text-muted-foreground">
                    Only if prescribed by a doctor who has confirmed the eardrum is intact. Using the wrong
                    drops in a perforated ear can worsen damage. Come to Eritage ENT Care first — we will
                    examine the ear and prescribe the correct treatment.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">How long has my ear been discharging? Does it matter?</h3>
                  <p className="text-muted-foreground">
                    Yes. Discharge for fewer than 7 days usually responds well to antibiotics. Chronic discharge
                    (weeks to months) raises concern for cholesteatoma and may require surgery. The sooner you
                    are seen, the better the outcome.
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
                Don't ignore ear discharge — get assessed today in Entebbe
              </h2>
              <p className="text-muted-foreground mb-8">
                Eritage ENT Care is open 24 hours at Plot 34, 48 Berkeley Road, Entebbe Road, Entebbe.
                Same-day assessment available. No referral needed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2 text-base px-6 py-5 h-auto" asChild>
                  <a href={`${SITE.whatsapp}?text=Hello%2C%20I%20have%20ear%20discharge%20and%20would%20like%20to%20book%20an%20appointment.`} target="_blank" rel="noopener noreferrer">
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
                    <p className="text-sm text-muted-foreground">Discharge with pain?</p>
                    <p className="font-semibold text-foreground">Ear Pain Relief — Entebbe</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-primary" />
                </Link>
                <Link to="/conditions/blocked-ear-entebbe" className="flex items-center justify-between p-4 bg-background rounded-lg border border-border hover:border-primary transition-colors">
                  <div>
                    <p className="text-sm text-muted-foreground">Hearing reduced too?</p>
                    <p className="font-semibold text-foreground">Blocked Ear Treatment — Entebbe</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-primary" />
                </Link>
                <Link to="/urgent-ent-guidance" className="flex items-center justify-between p-4 bg-background rounded-lg border border-border hover:border-primary transition-colors">
                  <div>
                    <p className="text-sm text-muted-foreground">Not sure what to do?</p>
                    <p className="font-semibold text-foreground">Urgent ENT Guidance</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-primary" />
                </Link>
                <Link to="/hearing-tests" className="flex items-center justify-between p-4 bg-background rounded-lg border border-border hover:border-primary transition-colors">
                  <div>
                    <p className="text-sm text-muted-foreground">Check hearing after discharge</p>
                    <p className="font-semibold text-foreground">Hearing Tests &amp; Audiology</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-primary" />
                </Link>
              </div>
              <div className="text-center">
                <p className="text-muted-foreground mb-3 text-sm">Related reading:</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/blog/ear-discharge-otorrhea" className="text-primary hover:underline text-sm font-medium">Ear Discharge — Causes &amp; When to Seek Care</Link>
                  <Link to="/blog/understanding-ear-infections" className="text-primary hover:underline text-sm font-medium">Understanding Ear Infections</Link>
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

export default EarDischarge;
