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
  Moon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { SITE } from "@/config/site";

const Snoring = () => {
  const causes = [
    { title: "Nasal Obstruction", detail: "Deviated septum, nasal polyps, or chronic congestion forcing mouth breathing." },
    { title: "Soft Tissue Issues", detail: "Large tonsils, a long soft palate, or a bulky uvula that vibrates during sleep." },
    { title: "Poor Muscle Tone", detail: "Overly relaxed throat and tongue muscles falling back into the airway." },
    { title: "Weight Factors", detail: "Excess tissue in the neck area putting pressure on the airway when lying down." },
    { title: "Lifestyle Triggers", detail: "Alcohol consumption or sedative use before bed, which over-relaxes throat muscles." },
  ];

  const symptoms = [
    "Loud, disruptive snoring noticed by a partner",
    "Waking up with a dry mouth or sore throat",
    "Restless sleep or frequent waking",
    "Morning headaches",
    "Excessive daytime sleepiness",
    "Difficulty concentrating during the day",
    "Irritability or mood changes",
  ];

  const redFlags = [
    "Witnessed pauses in breathing during sleep (apnea)",
    "Choking or gasping sounds that wake you up",
    "Sudden waking with a sensation of gasping",
    "Severe daytime sleepiness that leads to falling asleep while driving or working",
    "High blood pressure that is difficult to control",
  ];

  const treatments = [
    { step: "Sleep Assessment", detail: "Detailed history and clinical examination of the nose and throat to find the source of vibration." },
    { step: "Nasal Endoscopy", detail: "Checking for polyps or a deviated septum that may be forcing mouth breathing." },
    { step: "Lifestyle Modifications", detail: "Weight loss, side-sleeping, and avoiding alcohol before bed." },
    { step: "Medical Devices", detail: "Nasal strips, oral appliances (mandibular advancement), or CPAP for diagnosed sleep apnea." },
    { step: "Surgical Options", detail: "Tonsillectomy, septoplasty, or uvulopalatopharyngoplasty (UPPP) for severe cases." },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is snoring dangerous?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simple snoring is usually harmless but can disrupt sleep. However, it can be a sign of Obstructive Sleep Apnea (OSA), a serious condition where breathing repeatedly stops and starts. An ENT assessment in Entebbe can determine if your snoring is high-risk."
        }
      },
      {
        "@type": "Question",
        "name": "How can I stop snoring at home?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Try sleeping on your side, maintaining a healthy weight, and avoiding alcohol before bed. If these don't work, a specialist assessment is needed to check for physical obstructions in the nose or throat."
        }
      },
      {
        "@type": "Question",
        "name": "Can an ENT specialist cure snoring?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, if the snoring is caused by a physical issue like large tonsils or a deviated septum, surgical or medical intervention can often eliminate or significantly reduce it."
        }
      }
    ]
  };

  const conditionSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Snoring and Sleep Apnea",
    "alternateName": ["Obstructive Sleep Apnea", "OSA", "Sleep disordered breathing"],
    "description": "Snoring is the hoarse or harsh sound that occurs when air flows past relaxed tissues in your throat, causing the tissues to vibrate as you breathe. It can be a symptom of Obstructive Sleep Apnea.",
    "possibleTreatment": [
      { "@type": "MedicalTherapy", "name": "CPAP therapy" },
      { "@type": "MedicalDevice", "name": "Mandibular advancement device" },
      { "@type": "MedicalProcedure", "name": "Septoplasty" },
      { "@type": "MedicalProcedure", "name": "Tonsillectomy" }
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
      { "@type": "ListItem", "position": 3, "name": "Snoring & Sleep Apnea Entebbe", "item": "https://eritageentcare.com/conditions/snoring-entebbe" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Snoring & Sleep Apnea Treatment in Entebbe, Uganda | Eritage ENT Care</title>
        <meta name="description" content="Loud snoring or gasping at night? Get expert sleep apnea and snoring assessment at Eritage ENT Care in Entebbe. We offer nasal endoscopy and surgical solutions. Call +256 740 166 778." />
        <meta property="og:title" content="Snoring & Sleep Apnea Treatment in Entebbe, Uganda | Eritage ENT Care" />
        <meta property="og:description" content="Expert snoring and sleep apnea diagnosis in Entebbe. Identify the cause of your sleep disruption and find effective medical or surgical relief. Book today." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eritageentcare.com/conditions/snoring-entebbe" />
        <meta property="og:image" content="https://eritageentcare.com/eritage-logo.png" />
        <meta name="keywords" content="snoring treatment Entebbe, sleep apnea specialist Uganda, OSA treatment Entebbe, stop snoring Uganda, ENT sleep specialist Entebbe Road, tonsillectomy for snoring" />
        <link rel="canonical" href="https://eritageentcare.com/conditions/snoring-entebbe" />
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
                Entebbe ENT Clinic · Sleep Medicine
              </p>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Snoring & Sleep Apnea Treatment in Entebbe
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
                Loud snoring is more than just a nuisance — it can be a sign of sleep apnea, which
                affects your heart health and daily energy. At Eritage ENT Care, we provide expert
                assessments to find the source of your snoring and provide lasting relief.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2 text-base px-6 py-5 h-auto" asChild>
                  <a href={`${SITE.whatsapp}?text=Hello%2C%20I%20am%20struggling%20with%20loud%20snoring%20and%20would%20like%20to%20book%20a%20specialist%20sleep%20assessment.`} target="_blank" rel="noopener noreferrer">
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

        {/* Causes */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                What causes snoring?
              </h2>
              <p className="text-muted-foreground mb-8">
                Snoring occurs when air cannot flow freely through your nose and throat during sleep.
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
                Signs of disrupted sleep
              </h2>
              <p className="text-muted-foreground mb-8 text-center">
                Loud noise is just one symptom. You might also notice:
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

        {/* Sleep Apnea Warning */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0" />
                  <h2 className="text-xl md:text-2xl font-bold text-foreground">
                    Obstructive Sleep Apnea (OSA)
                  </h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  If your snoring is accompanied by these signs, you may have sleep apnea, which
                  requires medical intervention:
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
                    <a href={`${SITE.whatsapp}?text=Hello%2C%20I%20am%20gasping%20for%20air%20at%20night%20and%20would%20like%20to%20book%20an%20urgent%20sleep%20consultation.`} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-5 w-5" />
                      Book Urgent Sleep Assessment
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Diagnosis & Treatment */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                How we treat snoring at Eritage ENT Care
              </h2>
              <p className="text-muted-foreground mb-8">
                Our specialists provide a comprehensive pathway to better sleep.
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

        {/* Lifestyle Highlight */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Better sleep, better health
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Treating snoring and sleep apnea does more than just quiet the bedroom. It
                  reduces your risk of heart disease, stroke, and high blood pressure, and it
                  gives you back the energy you need for your day in Entebbe.
                </p>
              </div>
              <div className="flex-1 bg-primary/5 p-8 rounded-2xl border border-primary/20 text-center">
                <Moon className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="font-semibold text-foreground text-lg mb-2">Did you know?</p>
                <p className="text-muted-foreground text-sm">
                  Up to 25% of men and 10% of women have sleep apnea. Most go undiagnosed.
                  An ENT specialist is often the first person to identify physical causes of sleep apnea.
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
                Book your sleep consultation today
              </h2>
              <p className="text-muted-foreground mb-8">
                Eritage ENT Care is located at Plot 34, 48 Berkeley Road, Entebbe Road, Entebbe.
                Available 24/7 for appointments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2 text-base px-6 py-5 h-auto" asChild>
                  <a href={`${SITE.whatsapp}?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation%20for%20snoring%20and%20sleep%20issues.`} target="_blank" rel="noopener noreferrer">
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
                <Link to="/conditions/tonsillitis-entebbe" className="flex items-center justify-between p-4 bg-background rounded-lg border border-border hover:border-primary transition-colors">
                  <div>
                    <p className="text-sm text-muted-foreground">Enlarged tonsils?</p>
                    <p className="font-semibold text-foreground">Tonsillitis Treatment</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-primary" />
                </Link>
                <Link to="/conditions/nasal-polyps-entebbe" className="flex items-center justify-between p-4 bg-background rounded-lg border border-border hover:border-primary transition-colors">
                  <div>
                    <p className="text-sm text-muted-foreground">Blocked nose?</p>
                    <p className="font-semibold text-foreground">Nasal Polyps Care</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-primary" />
                </Link>
              </div>
              <div className="text-center">
                <p className="text-muted-foreground mb-3 text-sm">Learn more on our blog:</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/blog/snoring-sleep-apnea" className="text-primary hover:underline text-sm font-medium">Snoring & Sleep Apnea Guide</Link>
                  <Link to="/blog/tonsillitis-causes-symptoms" className="text-primary hover:underline text-sm font-medium">Tonsils & Breathing</Link>
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

export default Snoring;
