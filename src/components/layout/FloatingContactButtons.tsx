import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Phone, X } from "lucide-react";

const FloatingContactButtons = () => {
  const [showPhones, setShowPhones] = useState(false);

  return (
    <>
      {/* Fixed Call Button - Left with expandable phone numbers */}
      <div className="fixed left-4 bottom-8 z-50">
        {showPhones && (
          <div className="absolute bottom-16 left-0 bg-background rounded-lg shadow-xl border border-border p-3 mb-2 animate-fade-in min-w-[180px]">
            <p className="text-xs text-muted-foreground mb-2 font-medium">Call Us:</p>
            <a 
              href="tel:+256740166778" 
              className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors py-1"
            >
              <Phone className="h-4 w-4" />
              +256 740 166 778
            </a>
            <a 
              href="tel:+256769616091" 
              className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors py-1"
            >
              <Phone className="h-4 w-4" />
              +256 769 616 091
            </a>
          </div>
        )}
        <Button 
          size="lg"
          className="rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-110 bg-primary hover:bg-primary/90 h-14 w-14 p-0"
          onClick={() => setShowPhones(!showPhones)}
          aria-label={showPhones ? "Close phone menu" : "Show phone numbers"}
        >
          {showPhones ? (
            <X className="h-7 w-7" />
          ) : (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="h-7 w-7"
            >
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
            </svg>
          )}
        </Button>
      </div>

      {/* Fixed WhatsApp Button - Right */}
      <div className="fixed right-4 bottom-8 z-50">
        <Button 
          size="lg"
          className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-110 h-14 w-14 p-0"
          asChild
        >
          <a href="https://wa.me/256740166778" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="h-7 w-7"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </a>
        </Button>
      </div>
    </>
  );
};

export default FloatingContactButtons;
