import { Button } from "@/components/ui/button";
import { Mail, MapPin, Github, Linkedin, Youtube, GraduationCap, BookOpen } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden pt-24 pb-16">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Image Section */}
            <div className="relative flex justify-center lg:justify-start animate-fade-in">
              <div className="w-72 md:w-80 lg:w-96">
                <img 
                  src={profilePhoto} 
                  alt="Kazi Shawpnil"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="text-center lg:text-left animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
                Kazi Shawpnil
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Computer Science Researcher & Educator
              </p>
              
              {/* Social Links */}
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <a 
                  href="https://www.linkedin.com/in/kazi-shawpnil-8430561b9/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-3 bg-muted/50 hover:bg-accent/20 rounded-full border-2 border-transparent hover:border-accent transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-6 h-6 text-foreground group-hover:text-accent transition-colors" />
                </a>
                <a 
                  href="https://github.com/KShawpnil" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-3 bg-muted/50 hover:bg-accent/20 rounded-full border-2 border-transparent hover:border-accent transition-all duration-300 hover:scale-110"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-6 h-6 text-foreground group-hover:text-accent transition-colors" />
                </a>
                <a 
                  href="https://www.youtube.com/@EverydayELearning24" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-3 bg-muted/50 hover:bg-accent/20 rounded-full border-2 border-transparent hover:border-accent transition-all duration-300 hover:scale-110"
                  aria-label="YouTube Channel"
                >
                  <Youtube className="w-6 h-6 text-foreground group-hover:text-accent transition-colors" />
                </a>
                <a 
                  href="https://orcid.org/0000-0002-5063-7996" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-3 bg-muted/50 hover:bg-accent/20 rounded-full border-2 border-transparent hover:border-accent transition-all duration-300 hover:scale-110"
                  aria-label="ORCiD Profile"
                >
                  <GraduationCap className="w-6 h-6 text-foreground group-hover:text-accent transition-colors" />
                </a>
                <a 
                  href="https://www.researchgate.net/profile/Kazi-Shawpnil?ev=hdr_xprf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-3 bg-muted/50 hover:bg-accent/20 rounded-full border-2 border-transparent hover:border-accent transition-all duration-300 hover:scale-110"
                  aria-label="ResearchGate Profile"
                >
                  <BookOpen className="w-6 h-6 text-foreground group-hover:text-accent transition-colors" />
                </a>
              </div>
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
