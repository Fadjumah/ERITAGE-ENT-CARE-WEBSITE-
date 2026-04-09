import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContactButtons from "@/components/layout/FloatingContactButtons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Ear, 
  Wind, 
  Mic2, 
  Phone, 
  MessageCircle, 
  AlertTriangle,
  Stethoscope,
  Baby,
  HeartPulse,
  AudioLines,
  ArrowRight,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import entSpecialistImage from "@/assets/ent-specialist-doctor.jpg";

const ENTServices = () => {
  const earConditions = [
    "Ear infections (Otitis Media & Externa)",
    "Hearing loss & deafness",
    "Tinnitus (ringing in ears)",
    "Earwax buildup & removal",
    "Perforated eardrum",
    "Swimmer's ear",
    "Cholesteatoma",
    "Vertigo & balance disorders"
  ];

  const noseConditions = [
    "Sinusitis (acute & chronic)",
    "Nasal congestion & blockage",
    "Allergic rhinitis",
    "Deviated septum",
    "Nasal polyps",
    "Nosebleeds (Epistaxis)",
    "Loss of smell (Anosmia)",
    "Foreign body removal"
  ];

  const throatConditions = [
    "Tonsillitis & adenoid problems",
    "Sore throat & pharyngitis",
    "Voice disorders & hoarseness",
    "Swallowing difficulties (Dysphagia)",
    "Laryngitis",
    "Sleep apnea & snoring",
    "Thyroid & neck lumps",
    "Acid reflux (GERD) affecting throat"
  ];

  const entEmergencies = [
    "Severe nosebleeds that won't stop",
    "Foreign objects in ear, nose, or throat",
    "Sudden hearing loss",
    "Difficulty breathing due to throat swelling",
    "Severe ear pain with discharge",
    "Fish bone or food stuck in throat",
    "Facial trauma affecting ENT areas"
  ];

  const whenToSeeENT = [
    "Persistent ear pain or discharge lasting more than 3 days",
    "Hearing difficulties affecting daily life",
    "Chronic nasal congestion not responding to medication",
    "Recurring sinus infections (more than 4 per year)",
    "Persistent sore throat lasting over 2 weeks",
    "Voice changes lasting more than 2 weeks",
    "Difficulty swallowing or breathing",
    "Unexplained neck lumps or swelling"
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Eritage ENT Care",
    "description": "Specialist-led ENT care providing comprehensive ear, nose, and throat services across Uganda. Expert diagnosis and treatment for all ENT conditions.",
    "url": "https://eritageentcare.com/ent-services",
    "telephone": "+256740166778",
    "areaServed": {
      "@type": "Country",
      "name": "Uganda"
    },
    "medicalSpecialty": "Otolaryngology",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "ENT Services",
      "itemListElement": [
        {
          "@type": "MedicalProcedure",
          "name": "Ear Infection Treatment",
          "procedureType": "http://schema.org/TherapeuticProcedure"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Hearing Tests & Audiometry",
          "procedureType": "http://schema.org/DiagnosticProcedure"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Sinus Treatment",
          "procedureType": "http://schema.org/TherapeuticProcedure"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Tonsillitis Treatment",
          "procedureType": "http://schema.org/TherapeuticProcedure"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Foreign Body Removal",
          "procedureType": "http://schema.org/TherapeuticProcedure"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Voice Disorder Treatment",
          "procedureType": "http://schema.org/TherapeuticProcedure"
        }
      ]
    },
    "sameAs": [
      "https://maps.app.goo.gl/jyV5xBRkD95u2i4B8"
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://eritageentcare.com" },
      { "@type": "ListItem", "position": 2, "name": "ENT Specialist Services", "item": "https://eritageentcare.com/ent-services" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>ENT Specialist Services | Ear, Nose & Throat Care | Eritage ENT Care</title>
        <meta name="description" content="Comprehensive ear, nose, and throat care from experienced ENT specialists. Expert diagnosis and treatment for hearing loss, sinus conditions, throat disorders, and more. Book your consultation today." />
        <meta property="og:title" content="ENT Specialist Services | Ear, Nose & Throat Care" />
        <meta property="og:description" content="Trusted ENT specialists providing expert treatment for ear infections, hearing loss, sinus problems, tonsillitis, and all ENT conditions across Uganda." />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="ENT specialist Uganda, ENT clinic, ear doctor, nose doctor, throat doctor, hearing test, sinus treatment Uganda, tonsillitis treatment, audiology Uganda" />
        <link rel="canonical" href="https://eritageentcare.com/ent-services" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
                Comprehensive Ear, Nose & Throat Specialist Services
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Eritage ENT Care provides expert ENT specialist diagnosis and treatment for all ear, nose, and throat conditions. Our experienced ENT specialists are dedicated to improving your quality of life with evidence-based care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2" asChild>
                  <a href="tel:+256740166778">
                    <Phone className="h-5 w-5" />
                    Call Now: +256 740 166 778
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2" asChild>
                  <a href="https://wa.me/256740166778" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What is ENT Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6 text-center">
                What is an ENT Specialist?
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-base leading-relaxed">
                    An ENT (Ear, Nose, and Throat) specialist, also known as an Otolaryngologist, is a medical doctor who specializes in diagnosing and treating conditions affecting the ears, nose, throat, and related structures of the head and neck.
                  </p>
                  <p className="text-base leading-relaxed">
                    At <span className="font-semibold text-foreground">Eritage ENT Care</span>, our ENT specialists are trained to handle both medical and surgical treatments for a wide range of conditions. Whether you're experiencing hearing difficulties, chronic sinusitis, or throat problems, our team provides comprehensive care tailored to your needs.
                  </p>
                  <p className="text-base leading-relaxed">
                    We combine modern diagnostic equipment with compassionate patient care to ensure the best outcomes for our patients across Uganda.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img 
                    src={entSpecialistImage} 
                    alt="ENT Specialist Doctor performing ear examination at Eritage ENT Care Clinic Entebbe Uganda" 
                    className="rounded-lg shadow-lg w-full max-w-md object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ear Conditions Section */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 justify-center mb-8">
              <Ear className="h-10 w-10 text-primary" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                Ear Conditions Our ENT Specialists Treat
              </h2>
            </div>
            <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Our ENT specialists diagnose and treat all ear-related conditions, from common infections to complex hearing disorders.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {earConditions.map((condition, index) => (
                <Card key={index} className="bg-background border-border hover:shadow-md transition-shadow">
                  <CardContent className="p-4 flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{condition}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8 space-y-2">
              <p className="text-muted-foreground">
                Experiencing ear problems? Read our guides on{" "}
                <Link to="/blog/understanding-ear-infections" className="text-primary hover:underline font-medium">
                  Understanding Ear Infections
                </Link>
                {" "}and{" "}
                <Link to="/blog/ear-discharge-otorrhea" className="text-primary hover:underline font-medium">
                  Ear Discharge: When to Seek Urgent Care
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Nose Conditions Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 justify-center mb-8">
              <Wind className="h-10 w-10 text-primary" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                Nose & Sinus Conditions Our ENT Specialists Treat
              </h2>
            </div>
            <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Our ENT specialists provide expert treatment for nasal and sinus problems, helping you breathe easier and live better.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {noseConditions.map((condition, index) => (
                <Card key={index} className="bg-background border-border hover:shadow-md transition-shadow">
                  <CardContent className="p-4 flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{condition}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                Struggling with allergies? Learn more about{" "}
                <Link to="/blog/managing-allergies-naturally" className="text-primary hover:underline font-medium">
                  Managing Allergies Naturally
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Throat Conditions Section */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 justify-center mb-8">
              <Mic2 className="h-10 w-10 text-primary" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                Throat Conditions Our ENT Specialists Treat
              </h2>
            </div>
            <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Our ENT specialists offer comprehensive care for voice, swallowing, and throat disorders.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {throatConditions.map((condition, index) => (
                <Card key={index} className="bg-background border-border hover:shadow-md transition-shadow">
                  <CardContent className="p-4 flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{condition}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                Having voice problems? Check out our{" "}
                <Link to="/blog/voice-care-tips" className="text-primary hover:underline font-medium">
                  Voice Care Tips
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Audiology & Hearing Tests Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <Card className="max-w-5xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardHeader className="text-center pb-4">
                <div className="flex items-center gap-3 justify-center mb-4">
                  <AudioLines className="h-10 w-10 text-primary" />
                  <CardTitle className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                    ENT Specialist Audiology & Hearing Tests
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-center text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Eritage ENT Care offers comprehensive audiology services and hearing tests in partnership with certified audiology centers. Our ENT specialists interpret results and guide appropriate treatment for hearing loss.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-foreground">Our Hearing Services Include:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Pure Tone Audiometry (PTA)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Tympanometry
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Otoacoustic Emissions (OAE)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Newborn Hearing Screening
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-foreground">Who Should Get Tested:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Adults experiencing hearing difficulties
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Children with speech delays
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Newborns (screening)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Workers exposed to loud noise
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="text-center pt-4">
                  <Button asChild className="gap-2">
                    <Link to="/hearing-tests">
                      View All Hearing Test Services
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <p className="text-center text-muted-foreground text-sm">
                  Learn more about{" "}
                  <Link to="/blog/preventing-hearing-loss" className="text-primary hover:underline">
                    Preventing Hearing Loss
                  </Link>
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ENT Emergencies Section */}
        <section className="py-16 bg-destructive/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 justify-center mb-8">
                <AlertTriangle className="h-10 w-10 text-destructive" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  ENT Specialist Emergency Care
                </h2>
              </div>
              <p className="text-center text-muted-foreground mb-8 leading-relaxed">
                Some ENT conditions require urgent ENT specialist attention. If you experience any of the following, contact our ENT specialists immediately:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {entEmergencies.map((emergency, index) => (
                  <Card key={index} className="bg-background border-destructive/20">
                    <CardContent className="p-4 flex items-center gap-3">
                      <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0" />
                      <span className="text-foreground">{emergency}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <p className="text-muted-foreground mb-4">
                  Read about{" "}
                  <Link to="/blog/foreign-bodies-uganda" className="text-primary hover:underline font-medium">
                    Foreign Bodies in ENT - A Common Emergency
                  </Link>
                </p>
                <Button variant="destructive" size="lg" className="gap-2" asChild>
                  <a href="tel:+256740166778">
                    <Phone className="h-5 w-5" />
                    Emergency: Call +256 740 166 778
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* When to See an ENT Specialist */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 justify-center mb-8">
                <Stethoscope className="h-10 w-10 text-primary" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  When to See an ENT Specialist
                </h2>
              </div>
              <p className="text-center text-muted-foreground mb-8 leading-relaxed">
                Not sure if you need to see an ENT specialist? Here are signs that indicate you should book an appointment with our ENT specialists:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {whenToSeeENT.map((sign, index) => (
                  <Card key={index} className="bg-secondary/10 border-border">
                    <CardContent className="p-4 flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{sign}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pediatric & Adult Care */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8 text-center">
                ENT Specialist Care for All Ages
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-background">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Baby className="h-8 w-8 text-primary" />
                      <CardTitle className="font-serif">Pediatric ENT Specialist Care</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="text-muted-foreground leading-relaxed">
                    <p className="mb-4">
                      Children often experience ENT problems differently from adults. Our clinic provides gentle, child-friendly care for:
                    </p>
                    <ul className="space-y-2">
                      <li>• Recurrent ear infections</li>
                      <li>• Enlarged tonsils and adenoids</li>
                      <li>• Hearing problems affecting speech development</li>
                      <li>• Chronic runny nose and allergies</li>
                      <li>• Sleep-disordered breathing</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-background">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <HeartPulse className="h-8 w-8 text-primary" />
                      <CardTitle className="font-serif">Adult ENT Specialist Care</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="text-muted-foreground leading-relaxed">
                    <p className="mb-4">
                      Adults face unique ENT challenges that require specialized expertise. We treat:
                    </p>
                    <ul className="space-y-2">
                      <li>• Age-related hearing loss</li>
                      <li>• Chronic sinusitis and nasal problems</li>
                      <li>• Voice and swallowing disorders</li>
                      <li>• Sleep apnea and snoring</li>
                      <li>• Head and neck concerns</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8">
                Why Choose Our ENT Specialists?
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                <Card className="bg-secondary/10">
                  <CardContent className="p-6 text-center">
                    <Stethoscope className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Experienced ENT Specialists</h3>
                    <p className="text-muted-foreground text-sm">Over 10 years of clinical ENT specialist experience</p>
                  </CardContent>
                </Card>
                <Card className="bg-secondary/10">
                  <CardContent className="p-6 text-center">
                    <HeartPulse className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Comprehensive Care</h3>
                    <p className="text-muted-foreground text-sm">Full range of ENT services under one roof</p>
                  </CardContent>
                </Card>
                <Card className="bg-secondary/10">
                  <CardContent className="p-6 text-center">
                    <Baby className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">All Ages Welcome</h3>
                    <p className="text-muted-foreground text-sm">Pediatric and adult ENT care available</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                Book Your ENT Specialist Consultation Today
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Don't let ENT problems affect your quality of life. Our ENT specialists are ready to help you. Contact us now to schedule your appointment with an experienced ENT specialist.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2" asChild>
                  <a href="tel:+256740166778">
                    <Phone className="h-5 w-5" />
                    Call: +256 740 166 778
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2" asChild>
                  <a href="https://wa.me/256740166778" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Appointment
                  </a>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                Multiple locations across Uganda — <a href="/#locations" className="text-primary hover:underline">View our clinics</a>
              </p>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6 text-center">
                Helpful ENT Specialist Resources
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                <Link to="/urgent-ent-guidance" className="block">
                  <Card className="hover:shadow-md transition-shadow h-full border-primary/30 bg-primary/5">
                    <CardContent className="p-4 flex items-center gap-3">
                      <AlertCircle className="h-5 w-5 text-primary" />
                      <span className="text-foreground font-medium">Urgent ENT Guidance</span>
                    </CardContent>
                  </Card>
                </Link>
                <Link to="/hearing-tests" className="block">
                  <Card className="hover:shadow-md transition-shadow h-full">
                    <CardContent className="p-4 flex items-center gap-3">
                      <AudioLines className="h-5 w-5 text-primary" />
                      <span className="text-foreground">Hearing Tests</span>
                    </CardContent>
                  </Card>
                </Link>
                <Link to="/faq" className="block">
                  <Card className="hover:shadow-md transition-shadow h-full">
                    <CardContent className="p-4 flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span className="text-foreground">FAQs</span>
                    </CardContent>
                  </Card>
                </Link>
                <Link to="/blog" className="block">
                  <Card className="hover:shadow-md transition-shadow h-full">
                    <CardContent className="p-4 flex items-center gap-3">
                      <ArrowRight className="h-5 w-5 text-primary" />
                      <span className="text-foreground">Health Articles</span>
                    </CardContent>
                  </Card>
                </Link>
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

export default ENTServices;
