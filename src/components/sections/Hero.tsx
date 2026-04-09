import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ArrowRight, Users, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-doctor-patient.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative bg-background">
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm md:text-base font-medium">
            <a 
              href="tel:+256740166778" 
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Phone className="h-4 w-4" />
              <span>+256 740 166 778</span>
            </a>
            <span className="hidden md:inline text-primary-foreground/50">|</span>
            <a 
              href="tel:+256769616091" 
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Phone className="h-4 w-4" />
              <span>+256 769 616 091</span>
            </a>
            <span className="hidden md:inline text-primary-foreground/50">|</span>
            <a 
              href="https://wa.me/256740166778" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] px-3 py-1 rounded-full hover:bg-[#25D366]/90 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Hero Image with Overlay */}
      <div className="relative min-h-[600px] md:min-h-[700px]">
        <img 
          src={heroImage} 
          alt="ENT specialist providing compassionate care to a young patient at Eritage ENT Care clinic" 
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        
        {/* Content */}
        <div className="relative container mx-auto px-4 py-16 md:py-24 flex flex-col justify-center min-h-[600px] md:min-h-[700px]">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-foreground leading-tight">
              <span className="text-primary">Eritage</span> ENT Care
            </h1>
            
            <p className="text-lg md:text-xl mb-4 text-muted-foreground max-w-xl leading-relaxed">
              Uganda's trusted ENT specialists delivering expert diagnosis and personalized treatment for ear, nose, and throat conditions—caring for adults and children across the nation.
            </p>
            
            {/* Educational Value Proposition */}
            <div className="bg-secondary/30 rounded-lg p-4 mb-6 border border-border/50">
              <div className="flex items-start gap-3">
                <Stethoscope className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-foreground font-medium mb-1">Specialist-Led Care</p>
                  <p className="text-sm text-muted-foreground">
                    Our qualified ENT specialists provide evidence-based treatment for hearing loss, sinusitis, tonsillitis, ear infections, and more.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Trust Signals */}
            <div className="flex items-center gap-2 mb-8 text-sm text-muted-foreground">
              <Users className="h-4 w-4 text-primary" />
              <span className="font-medium">1,000+ patients treated by our ENT specialists</span>
            </div>
            
            {/* CTAs - Less aggressive, more informational */}
            <div className="flex flex-wrap gap-4 mb-6">
              <Button 
                size="lg" 
                variant="outline"
                asChild
                className="gap-2"
              >
                <Link to="/ent-services">
                  Explore Our ENT Services
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="ghost"
                asChild
                className="gap-2"
              >
                <Link to="/blog">
                  Read Health Articles
                </Link>
              </Button>
            </div>
            
            {/* Contact Info - Secondary placement */}
            <div className="pt-4 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-3">Need to speak with an ENT specialist?</p>
              <div className="flex flex-wrap items-center gap-4">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="gap-2 text-foreground hover:text-primary"
                  asChild
                >
                  <a href="tel:+256740166778">
                    <Phone className="h-4 w-4" />
                    +256 740 166 778
                  </a>
                </Button>
                <Button 
                  size="sm"
                  className="bg-[#25D366] hover:bg-[#25D366]/90 text-white gap-2"
                  asChild
                >
                  <a href="https://wa.me/256740166778" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
