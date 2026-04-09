import { Helmet } from "react-helmet-async";
import { Star, ExternalLink, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContactButtons from "@/components/layout/FloatingContactButtons";

interface Review {
  name: string;
  rating: number;
  text: string;
  initials: string;
}

const Reviews = () => {
  const reviews: Review[] = [
    {
      name: "Sarah Nakato",
      rating: 5,
      text: "Excellent ENT care! Dr. Fahad was very thorough with my ear infection treatment. The clinic is clean and professional. Highly recommend Eritage ENT Care.",
      initials: "SN"
    },
    {
      name: "James Mugisha",
      rating: 5,
      text: "I brought my son for recurring ear infections. The care we received was exceptional. The doctor explained everything clearly and the treatment worked perfectly.",
      initials: "JM"
    },
    {
      name: "Grace Namuli",
      rating: 5,
      text: "Had my hearing test done here and the process was smooth. Very professional staff and accurate results. Great partnership with audiology centers.",
      initials: "GN"
    },
    {
      name: "Peter Okello",
      rating: 5,
      text: "Best ENT clinic in Entebbe! I had chronic sinus issues for years. After treatment here, I finally feel relief. Thank you Eritage ENT Care!",
      initials: "PO"
    },
    {
      name: "Faith Achieng",
      rating: 5,
      text: "The doctor is very patient and takes time to listen. My throat condition was diagnosed quickly and treatment was effective. Will definitely return.",
      initials: "FA"
    },
    {
      name: "David Ssempijja",
      rating: 5,
      text: "I came for a tympanometry test and was impressed by the modern equipment and expertise. Results were explained in detail. Top-notch service!",
      initials: "DS"
    },
    {
      name: "Mary Birungi",
      rating: 5,
      text: "Took my elderly mother for hearing evaluation. The staff was so caring and patient with her. We got excellent referral for hearing aids.",
      initials: "MB"
    },
    {
      name: "Robert Kizza",
      rating: 5,
      text: "Professional, clean, and efficient. Had an ENT consultation and felt confident in the diagnosis. The location is convenient on Entebbe Road.",
      initials: "RK"
    },
    {
      name: "Agnes Nakimera",
      rating: 5,
      text: "My newborn had hearing screening here. The process was gentle and quick. Very grateful for the early detection services they provide.",
      initials: "AN"
    },
    {
      name: "Joseph Wasswa",
      rating: 5,
      text: "I had severe tinnitus that was affecting my work. The treatment plan from Eritage ENT Care has significantly improved my quality of life.",
      initials: "JW"
    },
    {
      name: "Christine Namutebi",
      rating: 5,
      text: "The WhatsApp booking system is so convenient! Got an appointment quickly and the consultation was worth every minute. Great ENT specialist.",
      initials: "CN"
    },
    {
      name: "Moses Tumwine",
      rating: 5,
      text: "Visited for voice issues and received comprehensive care. The doctor's expertise in ENT is evident. Highly professional clinic in Entebbe.",
      initials: "MT"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted'}`}
      />
    ));
  };

  return (
    <>
      <Helmet>
        <title>Patient Reviews – Eritage ENT Care | ENT Clinic Reviews Uganda</title>
        <meta name="description" content="Read patient reviews and testimonials about Eritage ENT Care. See what our patients say about our ENT services, hearing tests, and medical care." />
        <meta name="keywords" content="ENT clinic reviews, Eritage ENT Care reviews, ENT doctor Uganda reviews, hearing test reviews, patient testimonials" />
        <meta property="og:title" content="Patient Reviews – Eritage ENT Care" />
        <meta property="og:description" content="Read what our ENT patients say about Eritage ENT Care." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://eritageentcare.com/reviews" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-secondary to-accent/20 py-20 md:py-28">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Patient Reviews
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              What our ENT patients say about Eritage ENT Care
            </p>
          </div>
        </section>

        {/* Google Review Button - Top */}
        <section className="py-8 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <Button 
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg"
            >
              <a 
                href="https://g.page/r/Ceg235aaSzr6EBI/review" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Star className="mr-2 h-5 w-5 fill-current" />
                Leave Us a Review on Google Maps
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {reviews.map((review, index) => (
                <Card 
                  key={index} 
                  className="bg-card border-border hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary font-semibold text-sm">
                          {review.initials}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{review.name}</h3>
                        <div className="flex gap-0.5 mt-1">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      "{review.text}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Google Review Button - Bottom */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              Share Your Experience
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Had a great experience at Eritage ENT Care? We'd love to hear from you! 
              Your feedback helps us improve and helps others find quality ENT care in Entebbe.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg"
            >
              <a 
                href="https://g.page/r/Ceg235aaSzr6EBI/review" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Star className="mr-2 h-5 w-5 fill-current" />
                Leave Us a Review on Google Maps
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>

        <Footer />
        <FloatingContactButtons />
      </div>
    </>
  );
};

export default Reviews;
