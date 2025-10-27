import { Button } from "@/components/ui/button";
import { Mail, MapPin, Github, Linkedin, Youtube, GraduationCap, BookOpen } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden pt-16 pb-16">
      <div className="container mx-auto px-6 py-12">
        <div className="relative max-w-7xl mx-auto">
          
          {/* Large Background Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none select-none">
            <h2 className="text-[4rem] md:text-[7rem] lg:text-[9rem] font-black text-accent/20 text-center leading-none tracking-wider">
              PORTFOLIO
            </h2>
          </div>

          {/* Decorative Hand-Drawn Elements */}
          <div className="absolute top-20 right-10 md:right-32 w-32 h-32 pointer-events-none animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <svg viewBox="0 0 100 100" className="w-full h-full stroke-foreground/40" fill="none" strokeWidth="2">
              <path d="M10,50 Q30,20 50,50 T90,50" />
              <path d="M85,45 L90,50 L85,55" />
            </svg>
          </div>
          
          <div className="absolute bottom-32 left-10 md:left-32 w-40 h-20 pointer-events-none animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <svg viewBox="0 0 120 60" className="w-full h-full stroke-foreground/40" fill="none" strokeWidth="2">
              <path d="M10,30 Q40,10 70,30 Q100,50 110,30" />
            </svg>
          </div>

          {/* Main Content - Image Centered */}
          <div className="relative z-10 flex flex-col items-center justify-center min-h-[600px]">
            
            {/* Center Image */}
            <div className="flex justify-center animate-fade-in mb-12" style={{ animationDelay: "0.2s" }}>
              <div className="w-64 md:w-80 lg:w-96">
                <img 
                  src={profilePhoto} 
                  alt="Kazi Shawpnil"
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Social Links Below Image */}
            <div className="flex justify-center gap-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <a href="https://www.linkedin.com/in/kazi-shawpnil-8430561b9/" target="_blank" rel="noopener noreferrer" className="p-3 bg-muted/50 hover:bg-accent/20 rounded-full hover:scale-110 transition-all border-2 border-transparent hover:border-accent" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6 text-foreground hover:text-accent transition-colors" />
              </a>
              <a href="https://github.com/KShawpnil" target="_blank" rel="noopener noreferrer" className="p-3 bg-muted/50 hover:bg-accent/20 rounded-full hover:scale-110 transition-all border-2 border-transparent hover:border-accent" aria-label="GitHub">
                <Github className="w-6 h-6 text-foreground hover:text-accent transition-colors" />
              </a>
              <a href="https://www.youtube.com/@EverydayELearning24" target="_blank" rel="noopener noreferrer" className="p-3 bg-muted/50 hover:bg-accent/20 rounded-full hover:scale-110 transition-all border-2 border-transparent hover:border-accent" aria-label="YouTube">
                <Youtube className="w-6 h-6 text-foreground hover:text-accent transition-colors" />
              </a>
              <a href="https://orcid.org/0000-0002-5063-7996" target="_blank" rel="noopener noreferrer" className="p-3 bg-muted/50 hover:bg-accent/20 rounded-full hover:scale-110 transition-all border-2 border-transparent hover:border-accent" aria-label="ORCiD">
                <GraduationCap className="w-6 h-6 text-foreground hover:text-accent transition-colors" />
              </a>
              <a href="https://www.researchgate.net/profile/Kazi-Shawpnil?ev=hdr_xprf" target="_blank" rel="noopener noreferrer" className="p-3 bg-muted/50 hover:bg-accent/20 rounded-full hover:scale-110 transition-all border-2 border-transparent hover:border-accent" aria-label="ResearchGate">
                <BookOpen className="w-6 h-6 text-foreground hover:text-accent transition-colors" />
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
