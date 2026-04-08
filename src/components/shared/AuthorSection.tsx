import { Award, Stethoscope, GraduationCap } from 'lucide-react';
import doctorAvatar from '@/assets/doctor-avatar.jpg';

interface AuthorSectionProps {
  authorName: string;
  authorTitle?: string;
  authorExperience?: string;
}

const AuthorSection = ({ authorName, authorTitle, authorExperience }: AuthorSectionProps) => {
  // Default values for existing articles that may not have author metadata
  const displayTitle = authorTitle || "Clinical Otolaryngologist";
  const displayExperience = authorExperience || "10+ years";
  
  return (
    <div className="bg-secondary/30 rounded-xl p-6 border border-border mt-12">
      <h3 className="text-lg font-serif font-bold mb-4 flex items-center gap-2">
        <Stethoscope className="h-5 w-5 text-primary" />
        About the Author
      </h3>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-shrink-0">
          <img
            src={doctorAvatar}
            alt={authorName}
            className="w-20 h-20 rounded-full object-cover border-2 border-primary/20"
          />
        </div>
        
        <div className="flex-1">
          <h4 className="text-xl font-serif font-bold text-foreground mb-1">
            {authorName}
          </h4>
          <p className="text-primary font-medium mb-2">
            {displayTitle}
          </p>
          
          <div className="flex flex-wrap gap-3 mb-3">
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground bg-background px-3 py-1 rounded-full">
              <Award className="h-4 w-4 text-primary" />
              {displayExperience} Experience
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground bg-background px-3 py-1 rounded-full">
              <GraduationCap className="h-4 w-4 text-primary" />
              ENT Specialist
            </span>
          </div>
          
          <p className="text-sm text-muted-foreground leading-relaxed">
            {authorName.includes("Lubega") ? (
              <>
                Lubega Fahad Juma is a qualified Clinical Otolaryngologist with over 10 years of experience 
                in diagnosing and treating ear, nose, and throat conditions. He leads the clinical team at 
                Eritage ENT Care in Entebbe, providing expert care to patients across Uganda.
              </>
            ) : authorName.includes("Mukisa") ? (
              <>
                Dr. Mukisa Joseph is a seasoned Clinical Otolaryngologist with over 13 years of experience 
                in the field. He specializes in complex ENT conditions and surgical interventions, bringing 
                extensive expertise to patients at Eritage ENT Care in Entebbe.
              </>
            ) : (
              <>
                A qualified ENT specialist at Eritage ENT Care in Entebbe, providing expert diagnosis and 
                treatment for ear, nose, and throat conditions. Committed to delivering high-quality, 
                patient-centered care to the community.
              </>
            )}
          </p>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-border">
        <p className="text-xs text-muted-foreground">
          <strong>Medical Disclaimer:</strong> This article is for educational purposes only and does not 
          constitute medical advice. Always consult a qualified healthcare professional for diagnosis and 
          treatment of medical conditions.
        </p>
      </div>
    </div>
  );
};

export default AuthorSection;
