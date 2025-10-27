import { Button } from "@/components/ui/button";
import { Mail, MapPin, Github, Linkedin, Youtube, GraduationCap, BookOpen } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden pt-24 pb-16">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-light rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
            
            {/* Image Section with Unique Shape */}
            <div className="relative animate-fade-in">
              {/* Decorative rings */}
              <div className="absolute -inset-4 rounded-full border-2 border-accent/30 animate-pulse"></div>
              <div className="absolute -inset-8 rounded-full border border-primary-light/20"></div>
              
              {/* Hexagonal image container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary-light/20 rounded-full blur-xl"></div>
                <div 
                  className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary-foreground/20 shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  style={{
                    clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"
                  }}
                >
                  <img 
                    src={profilePhoto} 
                    alt="Kazi Shawpnil"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating accent elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/30 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-light/40 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }}></div>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 text-center lg:text-left max-w-2xl">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 animate-fade-in-up">
                Kazi Shawpnil
              </h1>
              
              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-6 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                Computer Science Researcher & Educator
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8 text-primary-foreground/80 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span>Columbus, Ohio, USA</span>
                </div>
                <div className="hidden sm:block text-primary-foreground/40">•</div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-accent" />
                  <a href="mailto:kshawpnil@gmail.com" className="hover:text-accent transition-colors">
                    kshawpnil@gmail.com
                  </a>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex items-center justify-center lg:justify-start gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <a 
                  href="https://www.linkedin.com/in/kazi-shawpnil-8430561b9/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative p-3 bg-primary-foreground/10 backdrop-blur-sm rounded-full border border-primary-foreground/20 hover:border-accent hover:bg-accent/20 transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-6 h-6 text-primary-foreground group-hover:text-accent transition-colors" />
                </a>
                <a 
                  href="https://github.com/KShawpnil" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative p-3 bg-primary-foreground/10 backdrop-blur-sm rounded-full border border-primary-foreground/20 hover:border-accent hover:bg-accent/20 transition-all duration-300 hover:scale-110"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-6 h-6 text-primary-foreground group-hover:text-accent transition-colors" />
                </a>
                <a 
                  href="https://www.youtube.com/@EverydayELearning24" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative p-3 bg-primary-foreground/10 backdrop-blur-sm rounded-full border border-primary-foreground/20 hover:border-accent hover:bg-accent/20 transition-all duration-300 hover:scale-110"
                  aria-label="YouTube Channel"
                >
                  <Youtube className="w-6 h-6 text-primary-foreground group-hover:text-accent transition-colors" />
                </a>
                <a 
                  href="https://orcid.org/0000-0002-5063-7996" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative p-3 bg-primary-foreground/10 backdrop-blur-sm rounded-full border border-primary-foreground/20 hover:border-accent hover:bg-accent/20 transition-all duration-300 hover:scale-110"
                  aria-label="ORCiD Profile"
                >
                  <GraduationCap className="w-6 h-6 text-primary-foreground group-hover:text-accent transition-colors" />
                </a>
                <a 
                  href="https://www.researchgate.net/profile/Kazi-Shawpnil?ev=hdr_xprf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative p-3 bg-primary-foreground/10 backdrop-blur-sm rounded-full border border-primary-foreground/20 hover:border-accent hover:bg-accent/20 transition-all duration-300 hover:scale-110"
                  aria-label="ResearchGate Profile"
                >
                  <BookOpen className="w-6 h-6 text-primary-foreground group-hover:text-accent transition-colors" />
                </a>
              </div>
            </div>
            
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
