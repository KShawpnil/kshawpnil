import { Button } from "@/components/ui/button";
import { Mail, MapPin, Github, Linkedin, Youtube, GraduationCap, BookOpen } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden pt-32 pb-16">
      <div className="container mx-auto px-6 py-6">
        <div className="relative w-full">

          {/* Main Content - Image Left, Content Right */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 min-h-[400px]">
            
            {/* Left - Image with Shape */}
            <div className="flex items-center justify-center lg:justify-start animate-fade-in lg:self-center" style={{ animationDelay: "0.2s" }}>
              <div className="relative w-48 md:w-56 lg:w-64">
                <div className="absolute inset-0 bg-accent/10 rounded-full blur-2xl"></div>
                <div className="relative rounded-full overflow-hidden border-4 border-accent/20 shadow-2xl">
                  <img 
                    src={profilePhoto} 
                    alt="Kazi Shawpnil"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right - Title and Links */}
            <div className="flex flex-col items-center lg:items-start lg:pl-12 animate-fade-in flex-1" style={{ animationDelay: "0.3s" }}>
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground italic tracking-tight leading-tight">
                  My
                </h1>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground italic tracking-tight leading-tight mb-4">
                  Portfolio
                </h1>
                <p className="text-xl md:text-2xl font-semibold text-muted-foreground">
                  Kazi Shawpnil
                </p>
              </div>
              
              {/* Social Links - Icons with Names Below */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                <a href="https://www.linkedin.com/in/kazi-shawpnil-8430561b9/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-4 bg-muted/50 hover:bg-accent/20 rounded-lg hover:scale-105 transition-all border border-transparent hover:border-accent min-w-[100px]" aria-label="LinkedIn">
                  <Linkedin className="w-6 h-6 text-foreground" />
                  <span className="text-foreground font-medium text-xs">LinkedIn</span>
                </a>
                <a href="https://www.researchgate.net/profile/Kazi-Shawpnil?ev=hdr_xprf" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-4 bg-muted/50 hover:bg-accent/20 rounded-lg hover:scale-105 transition-all border border-transparent hover:border-accent min-w-[100px]" aria-label="ResearchGate">
                  <BookOpen className="w-6 h-6 text-foreground" />
                  <span className="text-foreground font-medium text-xs">ResearchGate</span>
                </a>
                <a href="https://github.com/KShawpnil" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-4 bg-muted/50 hover:bg-accent/20 rounded-lg hover:scale-105 transition-all border border-transparent hover:border-accent min-w-[100px]" aria-label="GitHub">
                  <Github className="w-6 h-6 text-foreground" />
                  <span className="text-foreground font-medium text-xs">GitHub</span>
                </a>
                <a href="https://orcid.org/0000-0002-5063-7996" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-4 bg-muted/50 hover:bg-accent/20 rounded-lg hover:scale-105 transition-all border border-transparent hover:border-accent min-w-[100px]" aria-label="ORCiD">
                  <GraduationCap className="w-6 h-6 text-foreground" />
                  <span className="text-foreground font-medium text-xs">ORCiD</span>
                </a>
                <a href="https://www.youtube.com/@EverydayELearning24" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-4 bg-muted/50 hover:bg-accent/20 rounded-lg hover:scale-105 transition-all border border-transparent hover:border-accent min-w-[100px]" aria-label="YouTube">
                  <Youtube className="w-6 h-6 text-foreground" />
                  <span className="text-foreground font-medium text-xs">YouTube</span>
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
