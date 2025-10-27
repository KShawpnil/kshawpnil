import { Button } from "@/components/ui/button";
import { Github, Linkedin, Youtube, GraduationCap, BookOpen, Code2, Database, Brain, Cpu, Globe, ArrowDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

export const Hero = () => {
  const scrollToWork = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden pt-20 pb-16">
      <div className="container mx-auto px-6 py-12">
        <div className="relative w-full">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left - Illustration Area with Profile Photo */}
            <div className="relative flex items-center justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative w-full max-w-md aspect-square">
                
                {/* Floating Decorative Cards */}
                <div className="absolute top-0 left-0 w-32 h-24 bg-primary/10 backdrop-blur-sm rounded-xl p-3 animate-fade-in border border-primary/20" style={{ animationDelay: "0.4s" }}>
                  <Code2 className="w-6 h-6 text-primary mb-2" />
                  <div className="space-y-1">
                    <div className="h-1.5 bg-primary/30 rounded w-full"></div>
                    <div className="h-1.5 bg-primary/20 rounded w-3/4"></div>
                    <div className="h-1.5 bg-primary/20 rounded w-1/2"></div>
                  </div>
                </div>

                <div className="absolute top-4 right-0 w-32 h-24 bg-accent/10 backdrop-blur-sm rounded-xl p-3 animate-fade-in border border-accent/20" style={{ animationDelay: "0.6s" }}>
                  <Cpu className="w-8 h-8 text-accent mx-auto" />
                  <div className="mt-2 space-y-1">
                    <div className="h-1 bg-accent/30 rounded w-full"></div>
                    <div className="h-1 bg-accent/30 rounded w-full"></div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-4 w-28 h-20 bg-secondary/10 backdrop-blur-sm rounded-xl p-3 animate-fade-in border border-secondary/20" style={{ animationDelay: "0.8s" }}>
                  <Database className="w-6 h-6 text-secondary mb-1" />
                  <div className="space-y-1">
                    <div className="h-1.5 bg-secondary/30 rounded w-full"></div>
                    <div className="h-1.5 bg-secondary/20 rounded w-2/3"></div>
                  </div>
                </div>

                <div className="absolute bottom-8 right-4 w-28 h-20 bg-primary/10 backdrop-blur-sm rounded-xl p-3 animate-fade-in border border-primary/20" style={{ animationDelay: "1s" }}>
                  <Globe className="w-6 h-6 text-primary mb-1" />
                  <div className="flex gap-1 mt-2">
                    <div className="w-2 h-2 bg-primary/40 rounded-full"></div>
                    <div className="w-2 h-2 bg-primary/40 rounded-full"></div>
                    <div className="w-2 h-2 bg-primary/40 rounded-full"></div>
                  </div>
                </div>

                {/* Central Profile Photo */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                  <div className="relative w-56 h-56">
                    <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="relative rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl bg-primary/5">
                      <img 
                        src={profilePhoto} 
                        alt="Kazi Shawpnil - Researcher in HCI and Engineering Education"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Small decorative elements */}
                <div className="absolute top-1/4 left-8 w-3 h-3 bg-accent rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                <div className="absolute top-1/3 right-12 w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0.7s" }}></div>
                <div className="absolute bottom-1/4 left-16 w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: "0.9s" }}></div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-8 animate-fade-in text-center lg:text-left" style={{ animationDelay: "0.4s" }}>
              {/* Name and Title */}
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-4 leading-tight">
                  Kazi Shawpnil
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed">
                  Researcher in Human-Computer Interaction and Engineering Education
                </p>
              </div>

              {/* Description */}
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                I design evidence-based, human-centered solutions to improve how students learn engineering. 
                My work bridges <span className="text-primary font-semibold">HCI</span> and <span className="text-accent font-semibold">AI in Healthcare</span>, 
                creating accessible technologies for diverse user groups.
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <a 
                  href="https://www.linkedin.com/in/kazi-shawpnil-8430561b9/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 hover:bg-primary/10 rounded-lg transition-all border border-transparent hover:border-primary/30 hover:scale-105"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 text-foreground" />
                  <span className="text-sm font-medium text-foreground">LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/KShawpnil" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 hover:bg-primary/10 rounded-lg transition-all border border-transparent hover:border-primary/30 hover:scale-105"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4 text-foreground" />
                  <span className="text-sm font-medium text-foreground">GitHub</span>
                </a>
                <a 
                  href="https://www.researchgate.net/profile/Kazi-Shawpnil?ev=hdr_xprf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 hover:bg-primary/10 rounded-lg transition-all border border-transparent hover:border-primary/30 hover:scale-105"
                  aria-label="ResearchGate Profile"
                >
                  <BookOpen className="w-4 h-4 text-foreground" />
                  <span className="text-sm font-medium text-foreground">ResearchGate</span>
                </a>
                <a 
                  href="https://orcid.org/0000-0002-5063-7996" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 hover:bg-primary/10 rounded-lg transition-all border border-transparent hover:border-primary/30 hover:scale-105"
                  aria-label="ORCiD Profile"
                >
                  <GraduationCap className="w-4 h-4 text-foreground" />
                  <span className="text-sm font-medium text-foreground">ORCiD</span>
                </a>
                <a 
                  href="https://www.youtube.com/@EverydayELearning24" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 hover:bg-primary/10 rounded-lg transition-all border border-transparent hover:border-primary/30 hover:scale-105"
                  aria-label="YouTube Channel"
                >
                  <Youtube className="w-4 h-4 text-foreground" />
                  <span className="text-sm font-medium text-foreground">YouTube</span>
                </a>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Button 
                  onClick={scrollToWork}
                  size="lg" 
                  className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  See My Work
                  <ArrowDown className="ml-2 w-5 h-5" />
                </Button>
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
