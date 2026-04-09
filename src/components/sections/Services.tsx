import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Ear, Activity, Stethoscope, Wind, Pill, Search, RotateCcw, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import entExaminationImage from "@/assets/ent-examination.jpg";
import ScrollReveal from "@/components/shared/ScrollReveal";

const services = [
  {
    icon: Ear,
    title: "ENT Specialist Ear Care",
    description: "Comprehensive ear examinations, hearing tests, and treatment for ear infections and disorders by experienced ENT specialists."
  },
  {
    icon: Search,
    title: "ENT Specialist Nasal Care",
    description: "Expert treatment for sinusitis, nasal allergies, and breathing difficulties by our ENT specialists."
  },
  {
    icon: Activity,
    title: "ENT Specialist Throat Care",
    description: "Diagnosis and treatment of throat conditions, voice disorders, and swallowing difficulties by ENT specialists."
  },
  {
    icon: Stethoscope,
    title: "ENT Specialist Surgery",
    description: "Advanced surgical procedures for complex ear, nose, and throat conditions performed by experienced ENT specialists."
  },
  {
    icon: Wind,
    title: "ENT Specialist Allergy Testing",
    description: "Comprehensive allergy testing and personalized treatment plans by our ENT specialists."
  },
  {
    icon: Pill,
    title: "ENT Specialist Medical Treatment",
    description: "Evidence-based medical management for all ENT conditions with follow-up care from our specialists."
  },
  {
    icon: Search,
    title: "ENT Specialist Foreign Body Removal",
    description: "Safe and precise removal of common foreign bodies such as insects, beads, seeds, cotton swabs, and other objects stuck in the ear or nose by our ENT specialists."
  },
  {
    icon: RotateCcw,
    title: "ENT Specialist Balance & Dizziness Treatment",
    description: "Expert diagnosis and treatment for vertigo, Meniere's disease, and other vestibular disorders causing balance problems and frequent dizziness."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        {/* Hero Image Banner */}
        <ScrollReveal animation="fade-in">
          <div className="relative rounded-2xl overflow-hidden shadow-xl mb-16 max-w-5xl mx-auto">
            <img 
              src={entExaminationImage} 
              alt="ENT Specialist Performing Professional Ear Examination - Eritage ENT Care Clinical Services" 
              className="w-full h-64 md:h-80 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 flex items-center">
              <div className="p-8 md:p-12 text-white max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Comprehensive ENT Specialist Services</h2>
                <p className="text-lg text-white/90">
                  Evidence-based ear, nose, and throat care delivered by experienced ENT specialists using advanced diagnostic equipment.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={index} animation="fade-in-up" delay={index * 100}>
              <Card className="hover:shadow-lg transition-all hover:scale-[1.02] h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-in" delay={400}>
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="gap-2 hover:scale-105 transition-transform">
              <Link to="/ent-services">
                Explore All ENT Specialist Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Services;
