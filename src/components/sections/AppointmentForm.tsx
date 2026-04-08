import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Calendar } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const AppointmentForm = () => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    const message = `*New Appointment Request*%0A%0A*Name:* ${encodeURIComponent(formData.fullName)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Email:* ${encodeURIComponent(formData.email || 'Not provided')}%0A*Message:* ${encodeURIComponent(formData.message || 'Not provided')}`;
    
    window.open(`https://wa.me/256740166778?text=${message}`, '_blank');

    toast({
      title: "Redirecting to WhatsApp",
      description: "Your appointment request will be sent via WhatsApp.",
    });

    setFormData({
      fullName: "",
      phone: "",
      email: "",
      message: ""
    });
    setOpen(false);
  };

  return (
    <section id="appointment" className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Ready to Book?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Schedule your consultation with our ENT specialists today
          </p>
          
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button size="lg" className="gap-2">
                <Calendar className="w-5 h-5" />
                Request Appointment
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-md overflow-y-auto">
              <SheetHeader>
                <SheetTitle className="font-serif">Book Your Appointment</SheetTitle>
                <SheetDescription>
                  Fill out the form and we'll get back to you shortly
                </SheetDescription>
              </SheetHeader>
              
              <form onSubmit={handleSubmit} className="space-y-5 mt-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message / Reason for Visit</Label>
                  <Textarea
                    id="message"
                    placeholder="Please describe your symptoms or reason for consultation..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                
                <Button type="submit" className="w-full" size="lg">
                  Submit Request
                </Button>
              </form>
              
              <div className="mt-6 pt-6 border-t text-sm text-muted-foreground space-y-1">
                <p><span className="font-medium">Phone:</span> +256 740 166 778</p>
                <p><span className="font-medium">Email:</span> info@eritageentcare.com</p>
                <p><span className="font-medium">Location:</span> Along Entebbe Road, Entebbe</p>
              </div>
            </SheetContent>
          </Sheet>
          
          <p className="mt-4 text-sm text-muted-foreground">
            Or call us directly: <a href="tel:+256740166778" className="text-primary font-medium hover:underline">+256 740 166 778</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
