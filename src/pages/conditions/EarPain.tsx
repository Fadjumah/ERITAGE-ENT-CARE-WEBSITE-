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

const EarPain = () => {
  const causes = [
    { title: "Outer ear infection (Otitis externa)", detail: "Bacterial or fungal infection of the ear canal — common after swimming or humid conditions." },
    { title: "Middle ear infection (Otitis media)", detail: "Fluid and infection behind the eardrum. Especially common in children but occurs in adults too." },
    { title: "Earwax impaction", detail: "Hardened wax pressing against the eardrum causes deep, aching pain." },
    { title: "Referred pain from the throat or jaw", detail: "Tonsillitis, dental infections, and jaw joint (TMJ) problems all refer pain to the ear." },
    { title: "Perforated eardrum", detail: "A tear in the eardrum from infection, trauma, or a sudden loud noise causes sharp pain and possible discharge." },
    { title: "Eustachian tube dysfunction", detail: "Blocked pressure tube — common after flying, diving, or a head cold." },
  ];

  const symptoms = [
    "Sharp, throbbing, or aching pain inside the ear",
    "Pain that worsens when touching or pulling the ear",
    "Reduced hearing or muffled sound",
    "Itching deep inside the ear",
    "Feeling of fullness or pressure",
    "Fever (suggests active infection)",
    "Discharge from the ear canal",
    "Jaw or throat pain alongside ear pain",
  ];

  const redFlags = [
    "Severe ear pain with high fever (above 38.5°C)",
    "Any discharge of pus or blood from the ear",
    "Sudden hearing loss in one ear",
    "Pain spreading to the jaw, neck, or face",
    "Facial weakness, drooping, or asymmetry",
    "Ear pain in a child who is unusually drowsy or won't feed",
    "Ear pain lasting more than 3 days without improvement",
  ];

  const treatments = [
    { step: "Examination", detail: "Otoscope assessment of the ear canal, eardrum, and middle ear to identify the cause." },
    { step: "Wax removal if indicated", detail: "Safe microsuction or irrigation — often gives immediate pain relief." },
    { step: "Ear drops or antibiotic treatment", detail: "Topical antibiotic drops for outer ear infections; oral antibiotics for middle ear infections." },
    { step: "Hearing check", detail: "Tympanometry or PTA to assess any impact on hearing." },
    { step: "Referral if needed", detail: "For complex or referred pain, we coordinate with dental or maxillofacial colleagues." },
  ];

  const conditionSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Ear Pain (Otalgia)",
    "alternateName": ["Otalgia", "Earache", "Ear ache"],
    "description": "Ear pain (otalgia) is a common presenting symptom in ENT practice. It can arise from infection of the outer or middle ear, earwax, referred pain from the throat or jaw, or a perforated eardrum. Prompt ENT assessment identifies the cause and prevents complications.",
    "possibleTreatment": [
      { "@type": "MedicalTherapy", "name": "Antibiotic ear drops" },
      { "@type": "MedicalTherapy", "name": "Oral antibiotics" },
      { "@type": "MedicalTherapy", "name": "Earwax microsuction" },
      { "@type": "MedicalTherapy", "name": "Analgesics" }
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
        "name": "What causes ear pain in adults in Uganda?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The most common causes of ear pain in adults in Uganda are outer ear infections (otitis externa), middle ear infections, earwax impaction, and referred pain from the throat or jaw. An ENT specialist at Eritage ENT Care in Entebbe can diagnose and treat the cause on the same day."
        }
      },
      {
        "@type": "Question",
        "name": "When is ear pain an emergency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Seek same-day ENT care if you have severe ear pain with high fever, sudden hearing loss, discharge from the ear, or facial weakness. These may indicate serious infection or a perforated eardrum requiring urgent treatment."
        }
      },
      {
        "@type": "Question",
        "name": "Can ear pain come from the throat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Tonsillitis, throat infections, and dental or jaw problems frequently cause referred pain to the ear. This is called referred otalgia. An ENT specialist will examine both the ear and throat to find the true source."
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
      { "@type": "ListItem", "position": 3, "name": "Ear Pain Relief Entebbe", "item": "https://eritageentcare.com/conditions/ear-pain-entebbe" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Ear Pain Relief in Entebbe, Uganda | ENT Specialist | Eritage ENT Care</title>
        <meta name="description" content="Ear pain in Entebbe? Same-day ENT assessment at Eritage ENT Care. We diagnose and treat ear infections, earwax, perforated eardrums, and referred pain. Call +256 740 166 778." />
        <meta property="og:title" content="Ear Pain Relief in Entebbe, Uganda | Eritage ENT Care" />
        <meta property="og:description" content="Same-day ear pain treatment in Entebbe. ENT specialists diagnose ear infections, wax, perforated eardrums, and referred pain. Book today." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eritageentcare.com/conditions/ear-pain-entebbe" />
        <meta property="og:image" content="https://eritageentcare.com/eritage-logo.png" />
        <meta name="keywords" content="ear pain Entebbe, earache treatment Uganda, otalgia ENT specialist Entebbe, ear infection pain Uganda, ear pain relief Entebbe" />
        <link rel="canonical" href="https://eritageentcare.com/conditions/ear-pain-entebbe" />
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
                Ear Pain Relief in Entebbe, Uganda
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
                Ear pain (otalgia) is one of the most common reasons patients visit an ENT clinic in Entebbe.
                At Eritage ENT Care, our specialists identify the cause — infection, wax, perforation, or referred
                throat pain — and treat it the same day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2 text-base px-6 py-5 h-auto" asChild>
                  <a href={`${SITE.whatsapp}?text=Hello%2C%20I%20have%20ear%20pain%20and%20need%20to%20see%20an%20ENT%20specialist.`} target="_blank" rel="noopener noreferrer">
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

        {/* Causes */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                What causes ear pain?
              </h2>
              <p className="text-muted-foreground mb-8">
                Ear pain has many causes. Identifying the right one determines the right treatment.
                These are the most common causes our ENT specialists see in Entebbe:
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
                Symptoms that accompany ear pain
              </h2>
              <p className="text-muted-foreground mb-8">
                Alongside the pain itself, these associated symptoms help narrow the diagnosis:
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
                    When ear pain needs same-day ENT care in Entebbe
                  </h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  Do not wait if you have any of the following — contact us immediately:
                </p>
                <ul className="space-y-3">
                  {redFlags.map((flag, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{flag}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Button variant="destructive" size="lg" className="gap-2" asChild>
                    <a href={`${SITE.whatsapp}?text=Hello%2C%20I%20have%20urgent%20ear%20pain%20and%20need%20to%20be%20seen%20today.`} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-5 w-5" />
                      Message us now — urgent
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="gap-2" asChild>
                    <Link to="/urgent-ent-guidance">
                      Urgent ENT Guidance
                      <ArrowRight className="h-4 w-4" />
                    </Link>
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
                How we treat ear pain at Eritage ENT Care, Entebbe
              </h2>
              <p className="text-muted-foreground mb-8">
                Treatment starts with finding the cause. Here is what happens at your visit:
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
                Frequently asked questions about ear pain in Entebbe
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Can ear pain come from the throat?</h3>
                  <p className="text-muted-foreground">
                    Yes — this is called referred otalgia. Tonsillitis, throat infections, dental infections,
                    and jaw joint problems all share nerve pathways with the ear. An ENT specialist will
                    examine both the ear and throat, not just one.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Is paracetamol enough for ear pain?</h3>
                  <p className="text-muted-foreground">
                    Paracetamol reduces pain temporarily but does not treat the underlying cause. If the cause
                    is infection, it will worsen without proper treatment. See an ENT specialist if pain is
                    severe, worsening, or present for more than 48 hours.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Should I use ear drops I bought at the pharmacy?</h3>
                  <p className="text-muted-foreground">
                    Only if the eardrum is intact. Using antibiotic drops with a perforated eardrum can cause
                    further damage. An ENT specialist will examine the eardrum first before recommending drops.
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
                Get ear pain assessed and treated today in Entebbe
              </h2>
              <p className="text-muted-foreground mb-8">
                Eritage ENT Care is open 24 hours at Plot 34, 48 Berkeley Road, Entebbe Road, Entebbe.
                Walk-ins welcome. No referral required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2 text-base px-6 py-5 h-auto" asChild>
                  <a href={`${SITE.whatsapp}?text=Hello%2C%20I%20have%20ear%20pain%20and%20would%20like%20to%20book%20an%20appointment.`} target="_blank" rel="noopener noreferrer">
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
                <Link to="/conditions/blocked-ear-entebbe" className="flex items-center justify-between p-4 bg-background rounded-lg border border-border hover:border-primary transition-colors">
                  <div>
                    <p className="text-sm text-muted-foreground">Ear feels blocked?</p>
                    <p className="font-semibold text-foreground">Blocked Ear Treatment — Entebbe</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-primary" />
                </Link>
                <Link to="/conditions/ear-discharge-entebbe" className="flex items-center justify-between p-4 bg-background rounded-lg border border-border hover:border-primary transition-colors">
                  <div>
                    <p className="text-sm text-muted-foreground">Discharge with the pain?</p>
                    <p className="font-semibold text-foreground">Ear Discharge Urgent Care</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-primary" />
                </Link>
                <Link to="/urgent-ent-guidance" className="flex items-center justify-between p-4 bg-background rounded-lg border border-border hover:border-primary transition-colors">
                  <div>
                    <p className="text-sm text-muted-foreground">Not sure how urgent it is?</p>
                    <p className="font-semibold text-foreground">Urgent ENT Guidance</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-primary" />
                </Link>
                <Link to="/ent-services" className="flex items-center justify-between p-4 bg-background rounded-lg border border-border hover:border-primary transition-colors">
                  <div>
                    <p className="text-sm text-muted-foreground">Full ENT assessment</p>
                    <p className="font-semibold text-foreground">All ENT Services</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-primary" />
                </Link>
              </div>
              <div className="text-center">
                <p className="text-muted-foreground mb-3 text-sm">Related reading:</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/blog/understanding-ear-infections" className="text-primary hover:underline text-sm font-medium">Understanding Ear Infections</Link>
                  <Link to="/blog/ear-discharge-otorrhea" className="text-primary hover:underline text-sm font-medium">Ear Discharge — When to Seek Care</Link>
                  <Link to="/blog/tinnitus-ringing-sound-ears" className="text-primary hover:underline text-sm font-medium">Tinnitus — Ringing in Ears</Link>
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

export default EarPain;
