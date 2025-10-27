import { Button } from "@/components/ui/button";
import { Mail, MapPin, Github, Linkedin, Youtube, GraduationCap, BookOpen } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden pt-16 pb-16">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center">
            
            {/* Name and Title Above Image */}
            <div className="mb-8 animate-fade-in-up">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-3">
                Kazi Shawpnil
              </h1>
              <div className="w-32 h-1 bg-accent mx-auto mb-4"></div>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Computer Science Researcher & Educator
              </p>
            </div>

            {/* Image in Center */}
            <div className="relative mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-64 md:w-72 lg:w-80">
                <img 
                  src={profilePhoto} 
                  alt="Kazi Shawpnil"
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            {/* Social Links Below Image in Grid */}
            <div className="flex flex-wrap items-center justify-center gap-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <a 
                href="https://www.linkedin.com/in/kazi-shawpnil-8430561b9/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 p-4 hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <div className="p-3 bg-muted/50 hover:bg-accent/20 rounded-full border-2 border-transparent hover:border-accent transition-all duration-300">
                  <Linkedin className="w-7 h-7 text-foreground group-hover:text-accent transition-colors" />
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-accent transition-colors">LinkedIn</span>
              </a>
              
              <a 
                href="https://github.com/KShawpnil" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 p-4 hover:scale-110 transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <div className="p-3 bg-muted/50 hover:bg-accent/20 rounded-full border-2 border-transparent hover:border-accent transition-all duration-300">
                  <Github className="w-7 h-7 text-foreground group-hover:text-accent transition-colors" />
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-accent transition-colors">GitHub</span>
              </a>
              
              <a 
                href="https://www.youtube.com/@EverydayELearning24" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 p-4 hover:scale-110 transition-all duration-300"
                aria-label="YouTube Channel"
              >
                <div className="p-3 bg-muted/50 hover:bg-accent/20 rounded-full border-2 border-transparent hover:border-accent transition-all duration-300">
                  <Youtube className="w-7 h-7 text-foreground group-hover:text-accent transition-colors" />
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-accent transition-colors">YouTube</span>
              </a>
              
              <a 
                href="https://orcid.org/0000-0002-5063-7996" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 p-4 hover:scale-110 transition-all duration-300"
                aria-label="ORCiD Profile"
              >
                <div className="p-3 bg-muted/50 hover:bg-accent/20 rounded-full border-2 border-transparent hover:border-accent transition-all duration-300">
                  <GraduationCap className="w-7 h-7 text-foreground group-hover:text-accent transition-colors" />
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-accent transition-colors">ORCiD</span>
              </a>
              
              <a 
                href="https://www.researchgate.net/profile/Kazi-Shawpnil?ev=hdr_xprf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 p-4 hover:scale-110 transition-all duration-300"
                aria-label="ResearchGate Profile"
              >
                <div className="p-3 bg-muted/50 hover:bg-accent/20 rounded-full border-2 border-transparent hover:border-accent transition-all duration-300">
                  <BookOpen className="w-7 h-7 text-foreground group-hover:text-accent transition-colors" />
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-accent transition-colors">ResearchGate</span>
              </a>
            </div>
            
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
