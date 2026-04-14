import { Helmet } from "react-helmet-async";
import { Star, ExternalLink, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContactButtons from "@/components/layout/FloatingContactButtons";

const Reviews = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://eritageentcare.com" },
      { "@type": "ListItem", "position": 2, "name": "Patient Reviews", "item": "https://eritageentcare.com/reviews" }
    ]
  };

  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://eritageentcare.com/#business",
    "name": "Eritage ENT Care",
    "url": "https://eritageentcare.com",
    "telephone": "+256740166778",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot 34, 48 Berkeley Road, Entebbe Road",
      "addressLocality": "Entebbe",
      "addressRegion": "Central Region",
      "addressCountry": "UG"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://maps.app.goo.gl/jyV5xBRkD95u2i4B8",
      "https://g.page/r/Ceg235aaSzr6EBI"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Patient Reviews – Eritage ENT Care | ENT Clinic Entebbe Uganda</title>
        <meta name="description" content="See what patients say about Eritage ENT Care on Google. Rated 4.8★ by 50+ patients. Read real reviews and share your own experience with our ENT clinic in Entebbe, Uganda." />
        <meta name="keywords" content="ENT clinic reviews, Eritage ENT Care reviews, ENT doctor Uganda reviews, hearing test reviews, patient testimonials" />
        <meta property="og:title" content="Patient Reviews – Eritage ENT Care" />
        <meta property="og:description" content="Read real patient reviews for Eritage ENT Care on Google Maps. Rated 4.8★ by 50+ patients." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eritageentcare.com/reviews" />
        <meta property="og:image" content="https://eritageentcare.com/eritage-logo.png" />
        <link rel="canonical" href="https://eritageentcare.com/reviews" />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(aggregateRatingSchema)}
        </script>
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
              Honest feedback from our patients on Google
            </p>
          </div>
        </section>

        {/* Main CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <div className="flex justify-center mb-6">
              <div className="flex gap-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className="h-8 w-8 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              Our reviews live on Google
            </h2>
            <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
              We believe in transparency. All patient feedback for Eritage ENT Care —
              Entebbe can be found directly on our Google Business Profile, where reviews
              are verified and unedited.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg"
              >
                <a
                  href="https://maps.app.goo.gl/jyV5xBRkD95u2i4B8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="mr-2 h-5 w-5" />
                  Read Our Google Reviews
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="font-semibold px-8 py-6 text-lg"
              >
                <a
                  href="https://g.page/r/Ceg235aaSzr6EBI/review"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Star className="mr-2 h-5 w-5" />
                  Leave Us a Review
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Encouragement Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              Had a visit with us?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Your honest experience helps other patients in Entebbe find the right ENT care.
              It only takes a minute and means a great deal to us.
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
