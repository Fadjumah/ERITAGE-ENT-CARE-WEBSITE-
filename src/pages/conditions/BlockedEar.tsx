import {{ Helmet }} from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContactButtons from "@/components/layout/FloatingContactButtons";
import {{ Button }} from "@/components/ui/button";
import {{ Card, CardContent }} from "@/components/ui/card";
import {{ Phone, MessageCircle, AlertTriangle, CheckCircle, LifeBuoy, Info }} from "lucide-react";
import {{ Link }} from "react-router-dom";

const BlockedEar = () => {
  const breadcrumbSchema = {{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://eritageentcare.com" }},
      {{ "@type": "ListItem", "position": 2, "name": "Conditions", "item": "https://eritageentcare.com/conditions" }},
      {{ "@type": "ListItem", "position": 3, "name": "Blocked Ear Treatment Entebbe", "item": "https://eritageentcare.com/conditions/blocked-ear-entebbe" }}
    ]
  }};

  const medicalConditionSchema = {{
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Blocked Ear",
    "description": "A common condition characterized by a feeling of fullness or pressure in the ear, often affecting hearing.",
    "possibleTreatment": {{
      "@type": "MedicalTherapy",
      "name": "Earwax removal, treatment of underlying infections, or management of Eustachian tube dysfunction.",
      "medicalClinic": {{
        "@type": "MedicalClinic",
        "name": "Eritage ENT Care - Entebbe",
        "url": "https://eritageentcare.com/locations/entebbe"
      }}
    }},
    "recognizingAuthority": {{
      "@type": "MedicalOrganization",
      "name": "Eritage ENT Care",
      "url": "https://eritageentcare.com"
    }}
  }};

  return (
    <>
      <Helmet>
        <title>Blocked Ear Treatment in Entebbe, Uganda | Eritage ENT Care</title>
        <meta name="description" content="Expert diagnosis and treatment for blocked ears in Entebbe, Uganda. Learn causes, symptoms, and when to see an ENT specialist at Eritage ENT Care for effective relief." />
        <meta property="og:title" content="Blocked Ear Treatment in Entebbe, Uganda | Eritage ENT Care" />
        <meta property="og:description" content="Struggling with a blocked ear? Find specialist ENT care in Entebbe for issues like earwax, infections, or Eustachian tube dysfunction. Book your consultation today." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eritageentcare.com/conditions/blocked-ear-entebbe" />
        <meta property="og:image" content="https://eritageentcare.com/images/og/blocked-ear-og.png" />
        <meta name="keywords" content="blocked ear treatment Entebbe, ear feels blocked Uganda, earwax removal Entebbe, ENT specialist Entebbe" />
        <link rel="canonical" href="https://eritageentcare.com/conditions/blocked-ear-entebbe" />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(medicalConditionSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <section className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
              Blocked Ear Treatment in Entebbe, Uganda
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A feeling of fullness, pressure, or muffled hearing in your ear requires expert diagnosis. Our ENT specialists are here to help.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">What Causes a Blocked Ear?</h2>
            <Card>
              <CardContent className="p-6 space-y-4 text-muted-foreground">
                <p>A blocked ear is a common complaint our specialists in Entebbe encounter daily. The feeling of pressure or muffled sound can be caused by several factors, ranging from simple to complex:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong className="text-foreground">Earwax Buildup (Cerumen Impaction):</strong> The most common cause. Earwax is natural, but excessive production or improper cleaning can lead to a hard plug blocking the ear canal.</li>
                  <li><strong className="text-foreground">Eustachian Tube Dysfunction:</strong> The Eustachian tube connects your middle ear to the back of your throat and regulates pressure. Colds, allergies, or sinus infections can cause it to swell, trapping fluid and creating a blocked sensation.</li>
                  <li><strong className="text-foreground">Middle Ear Infection (Otitis Media):</strong> Often follows a cold or flu. Fluid builds up behind the eardrum, causing pain, pressure, and muffled hearing.</li>
                  <li><strong className="text-foreground">Swimmer's Ear (Otitis Externa):</strong> An infection of the outer ear canal, usually caused by water trapped after swimming. It leads to swelling, pain, and a feeling of blockage.</li>
                  <li><strong className="text-foreground">Altitude Changes:</strong> Rapid changes in air pressure during flying or diving can cause the Eustachian tube to fail to equalize pressure, leading to temporary blockage.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">Symptoms of a Blocked Ear</h2>
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">While a feeling of fullness is the primary symptom, you may also experience:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start p-3 bg-background rounded-lg">
                    <Info className="h-5 w-5 text-primary flex-shrink-0 mt-1 mr-3" />
                    <span>Muffled or diminished hearing</span>
                  </div>
                  <div className="flex items-start p-3 bg-background rounded-lg">
                    <Info className="h-5 w-5 text-primary flex-shrink-0 mt-1 mr-3" />
                    <span>A popping or crackling sensation</span>
                  </div>
                  <div className="flex items-start p-3 bg-background rounded-lg">
                    <Info className="h-5 w-5 text-primary flex-shrink-0 mt-1 mr-3" />
                    <span>Ear pain (otalgia) or discomfort</span>
                  </div>
                  <div className="flex items-start p-3 bg-background rounded-lg">
                    <Info className="h-5 w-5 text-primary flex-shrink-0 mt-1 mr-3" />
                    <span>Ringing in the ear (tinnitus)</span>
                  </div>
                  <div className="flex items-start p-3 bg-background rounded-lg">
                    <Info className="h-5 w-5 text-primary flex-shrink-0 mt-1 mr-3" />
                    <span>Dizziness or a feeling of being off-balance</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6 text-red-600 flex items-center"><AlertTriangle className="mr-2" /> When to Seek Help in Entebbe</h2>
            <Card className="border-red-600/50 bg-red-500/5">
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">While many cases of blocked ears resolve on their own, you should see an ENT specialist immediately if you experience:</p>
                <ul className="space-y-3">
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-red-600 mr-3" /><strong>Sudden, severe pain or complete hearing loss.</strong></li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-red-600 mr-3" /><strong>Discharge from the ear (fluid, pus, or blood).</strong></li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-red-600 mr-3" /><strong>High fever or persistent dizziness (vertigo).</strong></li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-red-600 mr-3" /><strong>A blocked sensation that lasts for more than a few days.</strong></li>
                </ul>
                <p className="mt-4 text-sm text-red-700">Ignoring these symptoms can lead to permanent damage. Our clinic in Entebbe is equipped for urgent ENT assessments.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-primary/10 to-transparent">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">How We Treat It at Eritage ENT Care, Entebbe</h2>
            <Card>
              <CardContent className="p-6 space-y-4 text-muted-foreground">
                <p>As specialist ENT doctors in Uganda, we provide a definitive diagnosis and treatment plan tailored to your specific condition. Trying to remove earwax at home with cotton swabs can push it deeper and worsen the blockage.</p>
                <p>Our professional treatments include:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong className="text-foreground">Microsuction:</strong> A safe and highly effective method where our specialist uses a microscope and a tiny suction device to gently remove earwax or debris.</li>
                  <li><strong className="text-foreground">Instrument Removal:</strong> Using specialized tools like forceps or a Jobson Horne probe to carefully extract the blockage.</li>
                  <li><strong className="text-foreground">Medication:</strong> If an infection is present, we will prescribe appropriate antibiotic ear drops or oral medication. For Eustachian tube dysfunction, nasal sprays or decongestants may be recommended.</li>
                </ul>
                <p className="pt-4 font-semibold">Your visit will start with a thorough examination to accurately identify the cause of the blockage, ensuring you receive the most effective and safest treatment available in Entebbe.</p>
              </CardContent>
            </Card>
          </div>
        </section>
        

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8 text-center">Related Conditions & Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/conditions/ear-pain-entebbe" className="block">
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">Ear Pain</h3>
                    <p className="text-sm text-muted-foreground">Pain is a common symptom of ear issues. Learn about the causes of ear pain and how we treat it.</p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/conditions/ear-discharge-entebbe" className="block">
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">Ear Discharge</h3>
                    <p className="text-sm text-muted-foreground">Discharge from the ear is never normal. Discover the potential causes and why it needs urgent attention.</p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/hearing-tests" className="block">
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">Hearing Tests</h3>
                    <p className="text-sm text-muted-foreground">A blocked ear can affect your hearing. We offer comprehensive hearing assessments to check your auditory health.</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                Get Relief from Your Blocked Ear Today
              </h2>
              <p className="text-muted-foreground mb-8">
                Don't let a blocked ear affect your quality of life. Our specialists in Entebbe are ready to diagnose the cause and provide effective treatment.
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
                    WhatsApp Us
                  </a>
                </Button>
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
