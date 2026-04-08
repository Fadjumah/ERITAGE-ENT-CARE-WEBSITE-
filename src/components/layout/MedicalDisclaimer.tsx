import { AlertTriangle } from 'lucide-react';

const MedicalDisclaimer = () => {
  return (
    <div className="bg-muted/50 border-t border-border py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-start gap-3 text-sm text-muted-foreground">
          <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0" />
          <p className="leading-relaxed">
            <strong className="text-foreground">Medical Disclaimer:</strong> The information provided on this website is for educational purposes only and should not be considered as medical advice, diagnosis, or treatment. Always consult a qualified ENT specialist or healthcare provider for personalized medical guidance. If you are experiencing a medical emergency, please call emergency services or visit the nearest hospital immediately.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MedicalDisclaimer;
