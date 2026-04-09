import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContactButtons from "@/components/layout/FloatingContactButtons";
import FAQSection from "@/components/sections/FAQSection";
import AskENTQuestion from "@/components/sections/AskENTQuestion";

const FAQ = () => {
  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does an ENT specialist provide at Eritage ENT Care?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our ENT specialists provide comprehensive ear, nose, and throat treatments for both children and adults. Services include ENT consultations, hearing tests (PTA, Tympanometry, OAE), treatment for ear infections, sinus conditions, allergies, voice disorders, tonsillitis, adenoid problems, and surgical referrals when needed."
        }
      },
      {
        "@type": "Question",
        "name": "How do I know if I need to see an ENT specialist?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You should consult an ENT specialist if you experience persistent ear pain, hearing loss, chronic nasal congestion, recurring sinus infections, sore throat lasting more than 2 weeks, voice changes, difficulty swallowing, or unexplained neck lumps. Early consultation with an ENT specialist ensures proper diagnosis and treatment."
        }
      },
      {
        "@type": "Question",
        "name": "Do you perform Hearing Tests (PTA, Tympanometry, OAE)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Our ENT specialists partner with certified audiology centers to provide comprehensive hearing tests including Pure Tone Audiometry (PTA), Tympanometry, Otoacoustic Emissions (OAE), Auditory Brainstem Response (ABR), and newborn hearing screening. Our ENT specialist interprets results and provides personalized care plans."
        }
      },
      {
        "@type": "Question",
        "name": "What ENT conditions do you treat in children?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our ENT specialists provide pediatric care for recurrent ear infections, enlarged tonsils and adenoids, hearing problems affecting speech development, chronic runny nose and allergies, sleep-disordered breathing, and foreign body removal. We offer gentle, child-friendly ENT specialist care tailored to each age group."
        }
      },
      {
        "@type": "Question",
        "name": "How can I book an appointment with an ENT specialist?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can easily book an appointment with our ENT specialists by calling +256 740 166 778 or +256 769 616 091. You can also reach us via WhatsApp for quick ENT specialist appointment scheduling. We recommend booking in advance, though walk-ins are also welcome."
        }
      },
      {
        "@type": "Question",
        "name": "Where are your ENT specialist clinics located in Uganda?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Eritage ENT Care operates ENT specialist clinics across Uganda. Our flagship clinic is located along Entebbe Road, Entebbe, Central Region. We're expanding with a new ENT specialist clinic coming soon in Kampala. Visit our locations page for directions and contact details."
        }
      },
      {
        "@type": "Question",
        "name": "Do your ENT specialists treat both children and adults?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! Our ENT specialists are experienced in treating patients of all ages, from newborns requiring hearing screening to elderly patients with age-related hearing concerns. We provide compassionate ENT specialist care tailored to each age group and condition."
        }
      },
      {
        "@type": "Question",
        "name": "What should I expect during my first ENT specialist consultation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "During your first visit, our ENT specialist will review your medical history, discuss your symptoms, and perform a thorough examination of your ears, nose, and throat. Depending on your condition, the ENT specialist may recommend diagnostic tests like hearing assessments or imaging studies to ensure accurate diagnosis."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer emergency ENT specialist services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our ENT specialists handle urgent cases including severe nosebleeds, foreign objects in ear/nose/throat, sudden hearing loss, difficulty breathing due to throat swelling, and fish bones stuck in the throat. Contact our ENT specialists immediately for emergency care."
        }
      },
      {
        "@type": "Question",
        "name": "What is the cost of seeing an ENT specialist at Eritage ENT Care?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our ENT specialist consultation fees are competitive and transparent. We offer affordable ENT specialist care without compromising quality. Contact us for specific pricing, and remember that early consultation with an ENT specialist often prevents more costly treatments later."
        }
      },
      {
        "@type": "Question",
        "name": "Do you accept walk-ins for ENT specialist consultations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we welcome walk-in patients for ENT specialist consultations! However, to ensure minimal waiting time and guarantee availability with our ENT specialists, we recommend scheduling an appointment in advance by calling or messaging us on WhatsApp."
        }
      },
      {
        "@type": "Question",
        "name": "How do ENT specialists diagnose hearing problems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our ENT specialists use comprehensive hearing assessments including Pure Tone Audiometry to measure hearing sensitivity, Tympanometry to evaluate middle ear function, and Otoacoustic Emissions to assess inner ear health. The ENT specialist interprets results and recommends appropriate treatment or hearing aids if needed."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>FAQ – Eritage ENT Care | Common Questions About ENT Services</title>
        <meta name="description" content="Find answers to frequently asked questions about Eritage ENT Care. Learn about our ENT services, hearing tests, appointments, and clinic locations across Uganda." />
        <meta name="keywords" content="ENT FAQ Uganda, Eritage EntCare questions, hearing test FAQ, ENT clinic questions, ENT services information" />
        <meta property="og:title" content="FAQ – Eritage ENT Care" />
        <meta property="og:description" content="Find answers to common questions about our ENT services across Uganda." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://eritageentcare.com/faq" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchemaData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-secondary to-accent/20 py-20 md:py-28">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to know about our ENT services across Uganda
            </p>
          </div>
        </section>

        {/* Full FAQ Section */}
        <FAQSection variant="full" className="bg-background" />

        {/* Ask ENT Question Form */}
        <AskENTQuestion />

        {/* Map Section */}
        <section className="py-16 bg-accent/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-center text-foreground mb-8">
                Visit ERITAGE ENT CARE - ENTEBBE
              </h2>
              <p className="text-center text-muted-foreground mb-6">
                Along Entebbe Road, Entebbe, Central Region, Uganda
              </p>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7584444444444!2d32.4580556!3d0.0527778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177d8a4b5c6d7e8f%3A0x1234567890abcdef!2sEritage%20Ear%2C%20Nose%20and%20throat%20home%20%E2%80%93Entebbe%20road!5e0!3m2!1sen!2sug!4v1701907200000!5m2!1sen!2sug"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ERITAGE ENT CARE - ENTEBBE Location Map"
                  aria-label="Google Maps showing ERITAGE ENT CARE - ENTEBBE clinic location along Entebbe Road"
                ></iframe>
              </div>
              <div className="text-center mt-6">
                <p className="text-sm text-muted-foreground mb-2">ERITAGE ENT CARE - ENTEBBE</p>
                <a
                  href="https://maps.app.goo.gl/jyV5xBRkD95u2i4B8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold"
                >
                  Get Directions to ERITAGE ENT CARE - ENTEBBE →
                </a>
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

export default FAQ;
