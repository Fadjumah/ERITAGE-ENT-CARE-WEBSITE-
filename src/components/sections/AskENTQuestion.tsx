import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const AskENTQuestion = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    question: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.question) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await supabase.functions.invoke('send-ent-question', {
        body: {
          name: formData.name,
          phone: formData.phone,
          question: formData.question,
        },
      });

      if (response.error) {
        throw new Error(response.error.message || 'Failed to send question');
      }

      toast({
        title: "Question Sent!",
        description: "We've received your question and will respond soon.",
      });

      setFormData({ name: "", phone: "", question: "" });
      setIsOpen(false);
    } catch (error) {
      console.error('Error sending question:', error);
      toast({
        title: "Error",
        description: "Failed to send question. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-8 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                <MessageCircle className="w-5 h-5" />
                Ask an ENT Question
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-auto max-h-[90vh] overflow-y-auto">
              <SheetHeader className="text-left mb-6">
                <SheetTitle className="flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-primary" />
                  Ask an ENT Question
                </SheetTitle>
                <SheetDescription>
                  Have a question about ear, nose, or throat health? Submit your question and our specialist will respond via WhatsApp.
                </SheetDescription>
              </SheetHeader>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="ask-name" className="text-foreground font-medium">
                      Full Name
                    </Label>
                    <Input
                      id="ask-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-background border-input"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ask-phone" className="text-foreground font-medium">
                      Phone Number
                    </Label>
                    <Input
                      id="ask-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-background border-input"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ask-question" className="text-foreground font-medium">
                    Your Question
                  </Label>
                  <Textarea
                    id="ask-question"
                    value={formData.question}
                    onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                    className="bg-background border-input min-h-[100px]"
                    placeholder="Describe your ENT concern or question..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-5"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Question"}
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  For urgent concerns, please call +256 740 166 778.
                </p>
              </form>
            </SheetContent>
          </Sheet>
          <p className="text-sm text-muted-foreground text-center">
            Have a question about ear, nose, or throat health?
          </p>
        </div>
      </div>
    </section>
  );
};

export default AskENTQuestion;
