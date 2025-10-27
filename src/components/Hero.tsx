import { Button } from "@/components/ui/button";
import { Mail, MapPin, Github, Linkedin, Youtube } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden pt-16">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-light rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
            Kazi Shawpnil
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Computer Science Researcher & Educator
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-primary-foreground/80 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Columbus, Ohio, USA</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <a href="mailto:kshawpnil@gmail.com" className="hover:text-accent transition-colors">
                kshawpnil@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" variant="accent" asChild>
              <a href="#research">View Research</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#publications">Publications</a>
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <a 
              href="https://github.com/kazishawpnil" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-accent transition-all hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/kazishawpnil" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-accent transition-all hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://youtube.com/@everydayelearning" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-accent transition-all hover:scale-110"
            >
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary-foreground/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
