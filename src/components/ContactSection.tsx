import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Youtube, ExternalLink } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            I'm currently seeking PhD opportunities in Computer Science with a focus on HCI and AI in Healthcare. 
            Feel free to reach out for collaborations or inquiries.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col items-center p-6 bg-muted/50 rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:kshawpnil@gmail.com" className="text-primary hover:text-accent transition-colors">
                kshawpnil@gmail.com
              </a>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-muted/50 rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <a href="tel:+16143787010" className="text-primary hover:text-accent transition-colors">
                +1 (614) 378-7010
              </a>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-muted/50 rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">Columbus, Ohio, USA</p>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button variant="default" size="lg" asChild>
              <a href="mailto:kshawpnil@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://linkedin.com/in/kazishawpnil" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
