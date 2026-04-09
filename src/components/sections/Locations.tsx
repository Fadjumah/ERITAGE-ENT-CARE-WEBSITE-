import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/shared/ScrollReveal";

interface Location {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  mapLink: string;
  services: string[];
  isComingSoon?: boolean;
}

const locations: Location[] = [
  {
    id: "entebbe",
    name: "Entebbe",
    gbpName: "Eritage ENT Care - Entebbe",
    address: "Plot 34, 48 Berkeley Road, Entebbe Road, Entebbe",
    phone: "+256 740 166 778",
    hours: "Open 24 Hours",
    mapLink: "https://maps.app.goo.gl/jyV5xBRkD95u2i4B8",
    services: ["Ear Examinations", "Hearing Tests", "Sinus Treatment", "Emergency ENT"]
  },
  {
    id: "kampala",
    name: "Kampala",
    address: "Coming Soon",
    phone: "+256 740 166 778",
    hours: "Opening Soon",
    mapLink: "",
    services: ["Full ENT Services", "Audiology", "Specialist Consultations"],
    isComingSoon: true
  }
];

const Locations = () => {
  return (
    <section id="locations" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-in">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Locations</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Eritage ENT Care serves patients across Uganda with specialized ear, nose, and throat services. 
              Find a location near you.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {locations.map((location, index) => (
            <ScrollReveal key={location.id} animation="fade-in-up" delay={index * 150}>
              <Card 
                className={`relative overflow-hidden h-full hover:shadow-lg transition-all hover:scale-[1.02] ${location.isComingSoon ? 'opacity-75' : ''}`}
              >
                {location.isComingSoon && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    Coming Soon
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <MapPin className="h-5 w-5 text-primary" />
                    Eritage ENT Care – {location.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <MapPin className="h-4 w-4 mt-1 shrink-0" />
                      <span>{location.address}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Phone className="h-4 w-4 shrink-0" />
                      <a href={`tel:${location.phone.replace(/\s/g, '')}`} className="hover:text-primary transition-colors">
                        {location.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Clock className="h-4 w-4 shrink-0" />
                      <span>{location.hours}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <p className="text-sm font-medium mb-2">Services Available:</p>
                    <div className="flex flex-wrap gap-2">
                      {location.services.map((service) => (
                        <span 
                          key={service} 
                          className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button asChild className="flex-1">
                      <Link to={`/locations/${location.id}`}>
                        {location.isComingSoon ? "Learn More" : "View Location"}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                    {!location.isComingSoon && (
                      <Button variant="outline" asChild>
                        <a href={location.mapLink} target="_blank" rel="noopener noreferrer">
                          Directions
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-in" delay={300}>
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Can't visit in person? We offer digital consultations nationwide.
            </p>
            <Button variant="outline" asChild className="hover:scale-105 transition-transform">
              <Link to="/contact">
                Schedule a Virtual Consultation
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Locations;
