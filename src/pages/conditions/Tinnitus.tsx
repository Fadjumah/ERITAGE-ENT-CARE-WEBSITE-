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
  Music,
} from "lucide-react";
import { Link } from "react-router-dom";
import { SITE } from "@/config/site";

const Tinnitus = () => {
  const causes = [
    { title: "Hearing changes", detail: "Age-related changes or exposure to loud noise affecting the inner ear hair cells." },
    { title: "Earwax buildup", detail: "Impacted wax blocking the canal can cause or worsen ringing sounds." },
    { title: "Ear infections", detail: "Fluid or inflammation from middle or outer ear infections often triggers tinnitus." },
    { title: "Meniere's disease", detail: "A specific inner ear condition involving balance problems and hearing loss." },
    { title: "Stress & Anxiety", detail: "While not a direct cause, stress can significantly increase how much you notice the sound." },
  ];

  const soundTypes = [
    "Ringing or high-pitched tones",
    "Buzzing or electrical hums",
    "Hissing like escaping air",
    "Roaring like wind or waves",
    "Clicking or rhythmic sounds",
    "Pulsing that matches your heartbeat",
  ];

  const redFlags = [
    "Tinnitus in only one ear (unilateral tinnitus)",
    "Pulsatile tinnitus (sounds like your heartbeat)",
    "Sudden onset tinnitus after an injury",
    "Tinnitus accompanied by sudden hearing loss",
    "Significant dizziness or vertigo with the sound",
    "Tinnitus that prevents sleep or affects mental health",
  ];

  const management = [
    { step: "ENT Assessment", detail: "A thorough examination to rule out medical causes like infections or wax." },
    { step: "Hearing Evaluation", detail: "Professional audiology tests to check for underlying hearing loss." },
    { step: "Sound Therapy", detail: "Using background white noise or specialized devices to mask the ringing." },
    { step: "Lifestyle Coaching", detail: "Strategies for stress management and hearing protection to prevent worsening." },
    { step: "Specialist Referral", detail: "If needed, referral for Tinnitus Retraining Therapy (TRT) or CBT." },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can tinnitus be cured in Entebbe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If tinnitus is caused by a treatable condition like earwax or an infection, it often resolves once treated. For chronic tinnitus, our ENT specialists in Entebbe focus on management strategies that help the brain 'tune out' the sound (habituation)."
        }
      },
      {
        "@type": "Question",
        "name": "Is ringing in the ears a sign of hearing loss?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, tinnitus is often the first sign of hearing changes. At Eritage ENT Care, we recommend a hearing test for anyone experiencing persistent ringing in the ears."
        }
      },
      {
        "@type": "Question",
        "name": "What should I do if my ears are ringing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Avoid loud noises, manage stress, and book an ENT consultation. If the ringing is in only one ear or is pulsing, you should seek a specialist assessment promptly."
        }
      }
    ]
  };

  const conditionSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Tinnitus",
    "alternateName": ["Ringing in ears", "Buzzing in ears", "Ear noise"],
    "description": "Tinnitus is the perception of noise or ringing in the ears when no external sound is present. It is a common symptom of underlying conditions such as age-related hearing loss, ear injury, or a circulatory system disorder.",
    "possibleTreatment": [
      { "@type": "MedicalTherapy", "name": "Earwax removal" },
      { "@type": "MedicalTherapy", "name": "Sound masking therapy" },
      { "@type": "MedicalTherapy", "name": "Tinnitus retraining therapy" }
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
      { "@type": "ListItem", "position": 3, "name": "Tinnitus Treatment Entebbe", "item": "https://eritageentcare.com/conditions/tinnitus-entebbe" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Tinnitus Treatment in Entebbe, Uganda | Ringing in Ears | Eritage ENT Care</title>
        <meta name="description" content="Persistent ringing in your ears? Get expert tinnitus assessment and management at Eritage ENT Care in Entebbe. We help identify causes and provide relief strategies. Call +256 740 166 778." />
        <meta property="og:title" content="Tinnitus Treatment in Entebbe, Uganda | Eritage ENT Care" />
        <meta property="og:description" content="Expert tinnitus assessment and management in Entebbe. Identify the cause of your ear ringing and find effective relief. Book today." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eritageentcare.com/conditions/tinnitus-entebbe" />
        <meta property="og:image" content="https://eritageentcare.com/eritage-logo.png" />
        <meta name="keywords" content="tinnitus treatment Entebbe, ringing in ears Uganda, ear buzzing specialist Entebbe, tinnitus management Uganda, ENT specialist tinnitus Entebbe" />
        <link rel="canonical" href="https://eritageentcare.com/conditions/tinnitus-entebbe" />
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
                Entebbe ENT Clinic · Specialized Ear Care
              </p>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Tinnitus Treatment in Entebbe, Uganda
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
                Tinnitus (ringing or buzzing in the ears) can be distressing. At Eritage ENT Care, our specialists
                provide comprehensive assessments to identify the underlying cause and develop a personalized
                management plan to help you find relief.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2 text-base px-6 py-5 h-auto" asChild>
                  <a href={`${SITE.whatsapp}?text=Hello%2C%20I%20have%20persistent%20ringing%20in%20my%20ears%20and%20would%20like%20to%20book%20a%20consultation.`} target="_blank" rel="noopener noreferrer">
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

        {/* What is Tinnitus */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                What causes ringing in the ears?
              </h2>
              <p className="text-muted-foreground mb-8">
                Tinnitus is not a disease itself, but a symptom of an underlying condition.
                Common causes identified at our Entebbe clinic include:
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

        {/* Sound Types */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Common types of tinnitus sounds
              </h2>
              <p className="text-muted-foreground">Patients often describe hearing one or more of these sounds:</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {soundTypes.map((sound, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-6 bg-background rounded-xl border border-border text-center hover:border-primary transition-colors">
                  <Music className="h-8 w-8 text-primary mb-3" />
                  <span className="text-foreground font-medium">{sound}</span>
                </div>
              ))}
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
                    When tinnitus requires urgent assessment
                  </h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  While most tinnitus is not an emergency, some symptoms require prompt evaluation:
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
                    <a href={`${SITE.whatsapp}?text=Hello%2C%20I%20have%20an%20urgent%20ear%20problem%20(pulsing%20or%20one-sided%20ringing)%20and%20need%20advice.`} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-5 w-5" />
                      Message for urgent advice
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Management Strategy */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Our approach to Tinnitus management
              </h2>
              <p className="text-muted-foreground mb-8">
                At Eritage ENT Care, we follow an evidence-based pathway to help you manage ear ringing.
              </p>
              <div className="space-y-4">
                {management.map((m, i) => (
                  <div key={i} className="flex gap-4 bg-background rounded-lg p-5 border border-border">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{m.step}</h3>
                      <p className="text-sm text-muted-foreground">{m.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sound Therapy Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Find relief with Sound Therapy
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Sound therapy uses external noise to distract the brain from the tinnitus sound.
                  This can include white noise, soft music, or specialized hearing aids that generate
                  masking sounds. Many of our patients in Entebbe find significant relief during sleep
                  and quiet periods using these simple techniques.
                </p>
                <div className="flex items-center gap-2 text-primary font-medium">
                  <Link to="/hearing-tests" className="flex items-center gap-1 hover:underline">
                    Learn about our hearing evaluation <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="flex-1 bg-primary/5 p-8 rounded-2xl border border-primary/20 text-center">
                <Music className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="font-semibold text-foreground text-lg mb-2">Did you know?</p>
                <p className="text-muted-foreground text-sm">
                  Up to 90% of tinnitus patients also have some degree of hearing loss. Treating the hearing
                  loss often makes the tinnitus less noticeable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                Tinnitus FAQs
              </h2>
              <div className="space-y-6">
                <Card className="bg-background">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">Can tinnitus be cured?</h3>
                    <p className="text-muted-foreground">
                      If tinnitus is a symptom of a treatable condition like earwax or infection, it usually
                      goes away after treatment. For permanent tinnitus, we focus on habituation — training
                      the brain to ignore the sound, which provides significant relief for most patients.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-background">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">Does stress make ringing worse?</h3>
                    <p className="text-muted-foreground">
                      Yes. Stress, anxiety, and lack of sleep can increase the brain's focus on the internal
                      sound, making it feel louder or more intrusive. Managing stress is a core part of
                      tinnitus management.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-background">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">Why is it only in one ear?</h3>
                    <p className="text-muted-foreground">
                      One-sided tinnitus can be caused by many things, but it always requires a specialist
                      ENT assessment to rule out specific conditions affecting that ear or the auditory nerve.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Primary CTA */}
        <section className="py-16 bg-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Schedule your tinnitus assessment today
              </h2>
              <p className="text-muted-foreground mb-8">
                Our clinic in Entebbe is equipped to help you understand and manage your symptoms.
                Consultations available 24/7 for urgent concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2 text-base px-6 py-5 h-auto" asChild>
                  <a href={`${SITE.whatsapp}?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation%20for%20ringing%20in%20my%20ears.`} target="_blank" rel="noopener noreferrer">
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
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl font-bold text-foreground mb-6 text-center">Related services & resources</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <Link to="/hearing-tests" className="flex items-center justify-between p-4 bg-secondary/10 rounded-lg border border-border hover:border-primary transition-colors">
                  <div>
                    <p className="text-sm text-muted-foreground">Underlying cause?</p>
                    <p className="font-semibold text-foreground">Audiology & Hearing Tests</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-primary" />
                </Link>
                <Link to="/conditions/blocked-ear-entebbe" className="flex items-center justify-between p-4 bg-secondary/10 rounded-lg border border-border hover:border-primary transition-colors">
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
                  <Link to="/blog/tinnitus-ringing-sound-ears" className="text-primary hover:underline text-sm font-medium">Tinnitus: A Complete Guide</Link>
                  <Link to="/blog/preventing-hearing-loss" className="text-primary hover:underline text-sm font-medium">Preventing Hearing Damage</Link>
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

export default Tinnitus;
