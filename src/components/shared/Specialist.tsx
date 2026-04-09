import { Card, CardContent } from "@/components/ui/card";
import { Award, Clock } from "lucide-react";
import doctorAvatar from "@/assets/doctor-avatar.jpg";

const specialists = [
  {
    name: "Lubega Fahad Juma",
    title: "ENT Specialist",
    experience: "10 years",
    qualification: "Clinical Otolaryngology",
    image: doctorAvatar,
  },
  {
    name: "Dr. Mukisa Joseph",
    title: "ENT Specialist",
    experience: "13 years",
    qualification: "Clinical Otolaryngology",
    image: doctorAvatar,
  },
];

const Specialist = () => {
  return (
    <section id="specialist" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wide">
            Our Team
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Meet Our Specialists</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experienced ENT professionals delivering evidence-based care with a patient-first approach
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {specialists.map((specialist, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col">
                    {/* Doctor Image */}
                    <div className="relative h-64 bg-muted flex items-center justify-center">
                      <img 
                        src={specialist.image} 
                        alt={`ENT Specialist ${specialist.name} - Eritage ENT Care`} 
                        className="w-48 h-48 object-cover rounded-full border-4 border-primary/20"
                        loading="lazy"
                      />
                    </div>
                    
                    {/* Doctor Info */}
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-serif font-bold text-primary mb-1">
                        {specialist.title}
                      </h3>
                      <p className="text-lg font-serif font-semibold text-foreground mb-4">{specialist.name}</p>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-center gap-2">
                          <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            {specialist.experience} of clinical practice
                          </span>
                        </div>
                        
                        <div className="flex items-center justify-center gap-2">
                          <Award className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            {specialist.qualification}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <p className="mt-8 text-center text-muted-foreground max-w-2xl mx-auto">
            Our specialists combine clinical expertise with patient education to ensure informed healthcare decisions and optimal treatment outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Specialist;
