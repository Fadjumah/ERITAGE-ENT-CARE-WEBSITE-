import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  variant?: "full" | "compact";
  className?: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What services does an ENT specialist provide at Eritage ENT Care?",
    answer: "Our ENT specialists provide comprehensive ear, nose, and throat treatments for both children and adults. Services include ENT consultations, hearing tests (PTA, Tympanometry, OAE), treatment for ear infections, sinus conditions, allergies, voice disorders, tonsillitis, adenoid problems, and surgical referrals when needed."
  },
  {
    question: "How do I know if I need to see an ENT specialist?",
    answer: "You should consult an ENT specialist if you experience persistent ear pain, hearing loss, chronic nasal congestion, recurring sinus infections, sore throat lasting more than 2 weeks, voice changes, difficulty swallowing, or unexplained neck lumps. Early consultation with an ENT specialist ensures proper diagnosis and treatment."
  },
  {
    question: "Do you perform Hearing Tests (PTA, Tympanometry, OAE)?",
    answer: "Yes! Our ENT specialists partner with certified audiology centers to provide comprehensive hearing tests including Pure Tone Audiometry (PTA), Tympanometry, Otoacoustic Emissions (OAE), Auditory Brainstem Response (ABR), and newborn hearing screening. Our ENT specialist interprets results and provides personalized care plans."
  },
  {
    question: "What ENT conditions do you treat in children?",
    answer: "Our ENT specialists provide pediatric care for recurrent ear infections, enlarged tonsils and adenoids, hearing problems affecting speech development, chronic runny nose and allergies, sleep-disordered breathing, and foreign body removal. We offer gentle, child-friendly ENT specialist care tailored to each age group."
  },
  {
    question: "How can I book an appointment with an ENT specialist?",
    answer: "You can easily book an appointment with our ENT specialists by calling +256 740 166 778 or +256 769 616 091. You can also reach us via WhatsApp for quick ENT specialist appointment scheduling. We recommend booking in advance, though walk-ins are also welcome."
  },
  {
    question: "Where are your ENT specialist clinics located in Uganda?",
    answer: "Eritage ENT Care operates ENT specialist clinics across Uganda. Our flagship clinic is located along Entebbe Road, Entebbe, Central Region. We're expanding with a new ENT specialist clinic coming soon in Kampala. Visit our locations page for directions and contact details."
  },
  {
    question: "Do your ENT specialists treat both children and adults?",
    answer: "Absolutely! Our ENT specialists are experienced in treating patients of all ages, from newborns requiring hearing screening to elderly patients with age-related hearing concerns. We provide compassionate ENT specialist care tailored to each age group and condition."
  },
  {
    question: "What should I expect during my first ENT specialist consultation?",
    answer: "During your first visit, our ENT specialist will review your medical history, discuss your symptoms, and perform a thorough examination of your ears, nose, and throat. Depending on your condition, the ENT specialist may recommend diagnostic tests like hearing assessments or imaging studies to ensure accurate diagnosis."
  },
  {
    question: "Do you offer emergency ENT specialist services?",
    answer: "Yes, our ENT specialists handle urgent cases including severe nosebleeds, foreign objects in ear/nose/throat, sudden hearing loss, difficulty breathing due to throat swelling, and fish bones stuck in the throat. Contact our ENT specialists immediately for emergency care."
  },
  {
    question: "What is the cost of seeing an ENT specialist at Eritage ENT Care?",
    answer: "Our ENT specialist consultation fees are competitive and transparent. We offer affordable ENT specialist care without compromising quality. Contact us for specific pricing, and remember that early consultation with an ENT specialist often prevents more costly treatments later."
  },
  {
    question: "Do you accept walk-ins for ENT specialist consultations?",
    answer: "Yes, we welcome walk-in patients for ENT specialist consultations! However, to ensure minimal waiting time and guarantee availability with our ENT specialists, we recommend scheduling an appointment in advance by calling or messaging us on WhatsApp."
  },
  {
    question: "How do ENT specialists diagnose hearing problems?",
    answer: "Our ENT specialists use comprehensive hearing assessments including Pure Tone Audiometry to measure hearing sensitivity, Tympanometry to evaluate middle ear function, and Otoacoustic Emissions to assess inner ear health. The ENT specialist interprets results and recommends appropriate treatment or hearing aids if needed."
  }
];

const FAQSection = ({ variant = "full", className = "" }: FAQSectionProps) => {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello, I have a question for the ENT specialist at Eritage ENT Care.");
    window.open(`https://wa.me/256740166778?text=${message}`, '_blank');
  };

  const displayItems = variant === "compact" ? faqItems.slice(0, 4) : faqItems;

  // Generate FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": displayItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section className={`py-16 bg-accent/20 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Frequently Asked Questions About ENT Specialist Care
            </h2>
            <p className="text-muted-foreground text-lg">
              Find answers to common questions about our ENT specialist services across Uganda
            </p>
          </div>

          {/* Inject FAQ Schema */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

          <Accordion type="single" collapsible className="space-y-4">
            {displayItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-foreground font-medium hover:text-primary py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {variant === "compact" && (
            <div className="text-center mt-8">
              <a 
                href="/faq" 
                className="text-primary hover:underline font-semibold text-lg"
              >
                View All ENT Specialist FAQs →
              </a>
            </div>
          )}

          {/* Contact CTA */}
          <div className="mt-12 text-center p-8 bg-primary/10 rounded-2xl">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Need to Speak with an ENT Specialist?
            </h3>
            <p className="text-muted-foreground mb-6">
              Can't find the answer you're looking for? Contact our ENT specialists now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a href="tel:+256740166778">
                  <Phone className="mr-2 h-4 w-4" />
                  Call ENT Specialist
                </a>
              </Button>
              <Button 
                onClick={openWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;