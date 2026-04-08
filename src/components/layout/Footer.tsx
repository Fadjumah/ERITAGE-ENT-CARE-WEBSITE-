import { Phone, MessageCircle, Shield, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import MedicalDisclaimer from "./MedicalDisclaimer";

const Footer = () => {
  return (
    <>
      <MedicalDisclaimer />
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand & Mission */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4">Eritage ENT Care</h3>
              <p className="mb-4 max-w-md text-sm leading-relaxed">
                Specialist-led ENT education and evidence-based care. Trusted by patients across Uganda for expert ear, nose, and throat treatment.
              </p>
              <p className="text-sm opacity-90">
                Delivering clinical excellence through patient-centered care nationwide.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-4">ENT Services</h4>
              <nav className="space-y-2 text-sm">
                <Link to="/ent-services" className="block hover:underline opacity-90 hover:opacity-100">
                  All ENT Services
                </Link>
                <Link to="/hearing-tests" className="block hover:underline opacity-90 hover:opacity-100">
                  Hearing Tests & Audiology
                </Link>
                <Link to="/urgent-ent-guidance" className="block hover:underline opacity-90 hover:opacity-100">
                  Urgent ENT Guidance
                </Link>
                <Link to="/faq" className="block hover:underline opacity-90 hover:opacity-100">
                  Frequently Asked Questions
                </Link>
              </nav>
            </div>

            {/* Resources */}
            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-4">Resources</h4>
              <nav className="space-y-2 text-sm">
                <Link to="/blog" className="block hover:underline opacity-90 hover:opacity-100">
                  Health Articles & Education
                </Link>
                <Link to="/about" className="block hover:underline opacity-90 hover:opacity-100">
                  About Our Specialists
                </Link>
                <Link to="/reviews" className="block hover:underline opacity-90 hover:opacity-100">
                  Patient Reviews
                </Link>
                <Link to="/contact" className="block hover:underline opacity-90 hover:opacity-100">
                  Contact Us
                </Link>
              </nav>
            </div>

            {/* Locations & Contact */}
            <div className="text-center md:text-right">
              <h4 className="font-semibold mb-4">Our Locations</h4>
              <nav className="space-y-2 text-sm mb-4">
                <Link to="/locations/entebbe" className="block hover:underline opacity-90 hover:opacity-100">
                  Eritage ENT Care – Entebbe
                </Link>
                <Link to="/locations/kampala" className="block hover:underline opacity-90 hover:opacity-100">
                  Eritage ENT Care – Kampala (Coming Soon)
                </Link>
              </nav>
              <p className="text-sm opacity-80 mb-4">+256 740 166 778</p>
              <div className="flex items-center justify-center md:justify-end gap-3">
                <Button 
                  variant="outline"
                  size="sm"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  asChild
                >
                  <a href="tel:+256740166778">
                    <Phone className="h-4 w-4 mr-2" />
                    Call
                  </a>
                </Button>
                <Button 
                  size="sm"
                  className="bg-[#25D366] hover:bg-[#25D366]/90 text-white border-0"
                  asChild
                >
                  <a href="https://wa.me/256740166778" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Legal Links - Prominent placement for AdSense */}
          <div className="border-t border-primary-foreground/20 pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm opacity-80">
                © {new Date().getFullYear()} Eritage ENT Care. All rights reserved. Serving patients across Uganda.
              </p>
              <nav className="flex items-center gap-6 text-sm">
                <Link to="/privacy-policy" className="flex items-center gap-2 opacity-90 hover:opacity-100 hover:underline">
                  <Shield className="h-4 w-4" />
                  Privacy Policy
                </Link>
                <Link to="/terms-of-service" className="flex items-center gap-2 opacity-90 hover:opacity-100 hover:underline">
                  <FileText className="h-4 w-4" />
                  Terms of Service
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
