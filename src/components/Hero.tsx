import { Button } from "@/components/ui/button";
import { Mail, MapPin, Github, Linkedin, Youtube, GraduationCap, BookOpen } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden pt-8 pb-16">
      <div className="container mx-auto px-6 py-6">
        <div className="relative max-w-7xl mx-auto">
          
          {/* Decorative Hand-Drawn Elements */}
          <div className="absolute top-10 right-10 md:right-20 w-32 h-32 pointer-events-none animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <svg viewBox="0 0 100 100" className="w-full h-full stroke-foreground/40" fill="none" strokeWidth="2">
              <path d="M10,50 Q30,20 50,50 T90,50" />
              <path d="M85,45 L90,50 L85,55" />
            </svg>
          </div>
          
          <div className="absolute bottom-20 left-10 md:left-20 w-40 h-20 pointer-events-none animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <svg viewBox="0 0 120 60" className="w-full h-full stroke-foreground/40" fill="none" strokeWidth="2">
              <path d="M10,30 Q40,10 70,30 Q100,50 110,30" />
            </svg>
          </div>

          {/* Main Content - Compact Layout */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-4 min-h-[500px]">
            
            {/* Left - PORT */}
            <div className="flex items-center justify-end animate-fade-in">
              <h2 className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-black text-accent/20 leading-none tracking-tight">
                PORT
              </h2>
            </div>

            {/* Center - Image */}
            <div className="flex flex-col items-center justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-48 md:w-56 lg:w-64 mb-8">
                <img 
                  src={profilePhoto} 
                  alt="Kazi Shawpnil"
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
              
              {/* Social Links Below Image */}
              <div className="flex justify-center gap-4">
                <a href="https://www.linkedin.com/in/kazi-shawpnil-8430561b9/" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-muted/50 hover:bg-accent/20 rounded-full hover:scale-110 transition-all border-2 border-transparent hover:border-accent" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5 text-foreground hover:text-accent transition-colors" />
                </a>
                <a href="https://github.com/KShawpnil" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-muted/50 hover:bg-accent/20 rounded-full hover:scale-110 transition-all border-2 border-transparent hover:border-accent" aria-label="GitHub">
                  <Github className="w-5 h-5 text-foreground hover:text-accent transition-colors" />
                </a>
                <a href="https://www.youtube.com/@EverydayELearning24" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-muted/50 hover:bg-accent/20 rounded-full hover:scale-110 transition-all border-2 border-transparent hover:border-accent" aria-label="YouTube">
                  <Youtube className="w-5 h-5 text-foreground hover:text-accent transition-colors" />
                </a>
                <a href="https://orcid.org/0000-0002-5063-7996" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-muted/50 hover:bg-accent/20 rounded-full hover:scale-110 transition-all border-2 border-transparent hover:border-accent" aria-label="ORCiD">
                  <GraduationCap className="w-5 h-5 text-foreground hover:text-accent transition-colors" />
                </a>
                <a href="https://www.researchgate.net/profile/Kazi-Shawpnil?ev=hdr_xprf" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-muted/50 hover:bg-accent/20 rounded-full hover:scale-110 transition-all border-2 border-transparent hover:border-accent" aria-label="ResearchGate">
                  <BookOpen className="w-5 h-5 text-foreground hover:text-accent transition-colors" />
                </a>
              </div>
            </div>

            {/* Right - FOLIO */}
            <div className="flex items-center justify-start animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h2 className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-black text-accent/20 leading-none tracking-tight">
                FOLIO
              </h2>
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
