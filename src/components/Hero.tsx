import { Button } from "@/components/ui/button";
import { Mail, MapPin, Github, Linkedin, Youtube, GraduationCap, BookOpen } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden pt-24 pb-16">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Image Section with Decorative Blob */}
            <div className="relative flex justify-center lg:justify-start animate-fade-in">
              {/* Abstract decorative blob shape */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] md:w-[420px] md:h-[420px]">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path 
                    fill="hsl(var(--accent))" 
                    opacity="0.3"
                    d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.2C64.8,55.2,53.8,66.6,40.3,73.8C26.8,81,10.8,83.9,-4.8,82.4C-20.4,80.9,-35.6,75,-48.9,66.4C-62.2,57.8,-73.6,46.5,-80.5,32.8C-87.4,19.1,-89.8,3,-86.7,-11.5C-83.6,-26,-75,-39,-63.8,-49.6C-52.6,-60.2,-38.8,-68.4,-24.3,-75.3C-9.8,-82.2,5.4,-87.8,20.8,-87.1C36.2,-86.4,51.8,-79.4,44.7,-76.4Z" 
                    transform="translate(100 100)" 
                  />
                </svg>
              </div>
              
              {/* Circular profile image */}
              <div className="relative z-10 w-72 h-72 md:w-80 md:h-80">
                <div className="w-full h-full rounded-full overflow-hidden border-8 border-background shadow-2xl">
                  <img 
                    src={profilePhoto} 
                    alt="Kazi Shawpnil"
                    className="w-full h-full object-cover"
                  />
                </div>
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
