import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Music, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface WaitlistModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const WaitlistModal = ({ open, onOpenChange }: WaitlistModalProps) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !name) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Insert into waitlist table
      const { error: insertError } = await supabase
        .from('waitlist')
        .insert([
          {
            email: email.toLowerCase().trim(),
            name: name.trim(),
            created_at: new Date().toISOString(),
          }
        ]);

      if (insertError) {
        if (insertError.code === '23505') { // Unique constraint violation
          toast({
            title: "Already on the waitlist!",
            description: "This email is already registered for early access.",
            variant: "destructive",
          });
        } else {
          throw insertError;
        }
        return;
      }

      // Send notification email to admin
      const { error: emailError } = await supabase.functions.invoke('send-waitlist-notification', {
        body: {
          email,
          name,
          adminEmail: 'darshsenthil@gmail.com'
        }
      });

      if (emailError) {
        console.error('Email notification error:', emailError);
        // Don't fail the whole process if email fails
      }

      toast({
        title: "Welcome to the waitlist! 🎵",
        description: "You'll be the first to know when GraceAI launches.",
      });

      setEmail("");
      setName("");
      onOpenChange(false);
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-primary/20">
        <DialogHeader className="space-y-4">
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow-primary">
                <Music className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -top-1 -right-1">
                <Sparkles className="w-6 h-6 text-primary animate-pulse" />
              </div>
            </div>
          </div>
          
          <DialogTitle className="text-center text-2xl bg-gradient-primary bg-clip-text text-transparent">
            Join the GraceAI Waitlist
          </DialogTitle>
          
          <p className="text-center text-muted-foreground">
            Be the first to experience AI-powered music practice analysis. 
            Get early access when we launch!
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-background/50 border-primary/20 focus:border-primary"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 bg-background/50 border-primary/20 focus:border-primary"
                  required
                />
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={() => onOpenChange(false)}
            >
              Maybe Later
            </Button>
            <Button
              type="submit"
              variant="hero"
              className="flex-1"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Joining..." : "Join Waitlist"}
            </Button>
          </div>
        </form>

        <div className="text-center text-xs text-muted-foreground pt-4 border-t border-border/50">
          🎵 Join thousands of musicians already on the waitlist
        </div>
      </DialogContent>
    </Dialog>
  );
};