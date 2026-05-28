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
  AudioLines,
} from "lucide-react";
import { Link } from "react-router-dom";
import { SITE } from "@/config/site";

const HearingLoss = () => {
  const types = [
    { title: "Conductive Hearing Loss", detail: "When sound cannot get through the outer or middle ear. Often caused by fluid, earwax, or a perforated eardrum." },
    { title: "Sensorineural Hearing Loss", detail: "Caused by damage to the inner ear hair cells or the auditory nerve. Often age-related or noise-induced." },
    { title: "Mixed Hearing Loss", detail: "A combination of both conductive and sensorineural hearing loss." },
    { title: "Sudden Hearing Loss", detail: "A rapid loss of hearing that happens all at once or over a few days. This is a medical emergency." },
  ];

  const symptoms = [
    "Difficulty understanding words, especially against background noise",
    "Muffled quality to speech and other sounds",
    "Frequently asking others to speak more slowly, clearly, or loudly",
    "Needing to turn up the volume of the television or radio",
    "Withdrawal from conversations or social settings",
    "Ringing in the ears (tinnitus)",
  ];

  const redFlags = [
    "Sudden hearing loss in one ear (within 72 hours)",
    "Hearing loss accompanied by severe dizziness or vertigo",
    "Hearing loss following a head injury or loud blast",
    "Ear pain or discharge with the hearing change",
    "Sudden hearing loss in a child or infant",
  ];

  const diagnosis = [
    { step: "ENT Clinical Exam", detail: "We look for physical causes like wax, infections, or eardrum issues." },
    { step: "Pure Tone Audiometry (PTA)", detail: "The standard test to determine the type and degree of hearing loss." },
    { step: "Tympanometry", detail: "Tests the movement of the eardrum and the health of the middle ear." },
    { step: "Speech Testing", detail: "Evaluates how well you can understand words at different volumes." },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can hearing loss be reversed in Entebbe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Conductive hearing loss caused by earwax or fluid can often be fully reversed. Sensorineural hearing loss is usually permanent but can be managed effectively with hearing aids or other assistive devices. Sudden hearing loss requires immediate treatment for the best chance of recovery."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I get a hearing test in Entebbe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Eritage ENT Care in Entebbe provides professional audiological assessments including PTA and Tympanometry. Our ENT specialists interpret the results and guide your treatment."
        }
      },
      {
        "@type": "Question",
        "name": "What are the first signs of hearing loss?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Common early signs include difficulty following conversations in noisy places, muffled sounds, and needing higher volume on devices. Many people also experience ringing in the ears (tinnitus)."
        }
      }
    ]
  };

  const conditionSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Hearing Loss",
    "alternateName": ["Deafness", "Hard of hearing", "Hearing impairment"],
    "description": "Hearing loss is a partial or total inability to hear. It can be caused by various factors, including aging, noise exposure, infections, and structural problems in the ear.",
    "possibleTreatment": [
      { "@type": "MedicalTherapy", "name": "Earwax removal" },
      { "@type": "MedicalTherapy", "name": "Antibiotic treatment for infections" },
      { "@type": "MedicalDevice", "name": "Hearing aids" },
      { "@type": "MedicalProcedure", "name": "Myringotomy (ear tubes)" }
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
      { "@type": "ListItem", "position": 3, "name": "Hearing Loss Treatment Entebbe", "item": "https://eritageentcare.com/conditions/hearing-loss-entebbe" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Hearing Loss Specialist in Entebbe, Uganda | Eritage ENT Care</title>
        <meta name="description" content="Experiencing hearing loss in Entebbe? Get expert audiological assessment and treatment at Eritage ENT Care. We treat all types of hearing impairment in adults and children. Call +256 740 166 778." />
        <meta property="og:title" content="Hearing Loss Specialist in Entebbe, Uganda | Eritage ENT Care" />
        <meta property="og:description" content="Specialist hearing loss diagnosis and treatment in Entebbe. Professional hearing tests (PTA, Tympanometry) and expert ENT care. Book your assessment today." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eritageentcare.com/conditions/hearing-loss-entebbe" />
        <meta property="og:image" content="https://eritageentcare.com/eritage-logo.png" />
        <meta name="keywords" content="hearing loss specialist Entebbe, hearing test Uganda, audiology Entebbe, sudden hearing loss treatment Uganda, ear doctor Entebbe, hearing aids Uganda" />
        <link rel="canonical" href="https://eritageentcare.com/conditions/hearing-loss-entebbe" />
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
                Entebbe ENT Clinic · Audiology Services
              </p>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Hearing Loss Specialist in Entebbe, Uganda
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
                If you or a loved one are struggling to hear clearly, early intervention is key. At Eritage ENT Care,
                we provide professional hearing assessments and expert specialist care to identify the cause
                and improve your hearing health.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2 text-base px-6 py-5 h-auto" asChild>
                  <a href={`${SITE.whatsapp}?text=Hello%2C%20I%20am%20experiencing%20hearing%20changes%20and%20would%20like%20to%20book%20a%20hearing%20test.`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp for Hearing Test
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

        {/* Types of Hearing Loss */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Understanding types of hearing loss
              </h2>
              <p className="text-muted-foreground mb-8">
                Hearing loss is complex. Our specialists in Entebbe help determine exactly which type you are experiencing.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {types.map((type, i) => (
                  <Card key={i} className="bg-background border-border hover:shadow-md transition-shadow">
                    <CardContent className="p-5">
                      <h3 className="font-semibold text-foreground mb-1">{type.title}</h3>
                      <p className="text-sm text-muted-foreground">{type.detail}</p>
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
                Signs you may have hearing loss
              </h2>
              <p className="text-muted-foreground mb-8 text-center">
                Hearing loss often develops gradually. Watch for these common indicators:
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

        {/* Red flags - SUDDEN LOSS */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0" />
                  <h2 className="text-xl md:text-2xl font-bold text-foreground">
                    Sudden hearing loss is a medical emergency
                  </h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  If you experience a rapid drop in hearing, you must see an ENT specialist immediately.
                  Treatment is most effective when started within 48 hours.
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
                    <a href={`${SITE.whatsapp}?text=Hello%2C%20I%20have%20had%20a%20sudden%20loss%20of%20hearing%20and%20need%20urgent%20specialist%20care.`} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-5 w-5" />
                      Urgent Appointment — Message Now
                    </a>
                  </Button>
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
                Professional hearing diagnosis in Entebbe
              </h2>
              <p className="text-muted-foreground mb-8">
                We use advanced audiological tools to assess your hearing accurately.
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
              <div className="text-center mt-10">
                <Button asChild className="gap-2">
                  <Link to="/hearing-tests">
                    Full Audiology Service Details
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Pediatric Hearing Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 bg-primary/5 p-8 rounded-2xl border border-primary/20 text-center order-2 md:order-1">
                <AudioLines className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-foreground text-xl mb-2">Children & Newborns</h3>
                <p className="text-muted-foreground text-sm">
                  Hearing is vital for speech and language development. We provide pediatric hearing checks
                  and newborn screening to ensure every child has the best start in life.
                </p>
              </div>
              <div className="flex-1 order-1 md:order-2">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Hearing care for all ages
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  From newborn screening to age-related hearing loss management, Eritage ENT Care
                  is dedicated to the hearing health of the Entebbe community. We partner with
                  leading audiology centers to provide the most accurate testing and the best
                  fitting hearing aids when needed.
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
                Don't ignore hearing changes
              </h2>
              <p className="text-muted-foreground mb-8">
                Book your hearing assessment at Eritage ENT Care in Entebbe today.
                Our clinic is open 24/7 at Plot 34, 48 Berkeley Road.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2 text-base px-6 py-5 h-auto" asChild>
                  <a href={`${SITE.whatsapp}?text=Hello%2C%20I%20would%20like%20to%20book%20a%20hearing%20test%20at%20the%20Entebbe%20clinic.`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    Book Hearing Test
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
                <Link to="/conditions/tinnitus-entebbe" className="flex items-center justify-between p-4 bg-background rounded-lg border border-border hover:border-primary transition-colors">
                  <div>
                    <p className="text-sm text-muted-foreground">Ringing in ears?</p>
                    <p className="font-semibold text-foreground">Tinnitus Treatment</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-primary" />
                </Link>
                <Link to="/conditions/blocked-ear-entebbe" className="flex items-center justify-between p-4 bg-background rounded-lg border border-border hover:border-primary transition-colors">
                  <div>
                    <p className="text-sm text-muted-foreground">Feeling of fullness?</p>
                    <p className="font-semibold text-foreground">Blocked Ear Treatment</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-primary" />
                </Link>
              </div>
              <div className="text-center">
                <p className="text-muted-foreground mb-3 text-sm">Learn more on our blog:</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/blog/preventing-hearing-loss" className="text-primary hover:underline text-sm font-medium">Preventing Hearing Loss</Link>
                  <Link to="/blog/understanding-ear-infections" className="text-primary hover:underline text-sm font-medium">Ear Infections & Hearing</Link>
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

export default HearingLoss;
