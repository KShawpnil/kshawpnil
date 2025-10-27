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
                
                {/* Central Profile Photo */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-fade-in z-10" style={{ animationDelay: "0.3s" }}>
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

                {/* Floating Decorative Cards - Closer to image */}
                <div className="absolute top-16 left-12 w-32 h-28 bg-primary/5 backdrop-blur-sm rounded-2xl p-3 animate-fade-in border border-primary/30 shadow-lg hover:scale-105 transition-transform" style={{ animationDelay: "0.4s" }}>
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 mb-2">
                    <Code2 className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-1.5 bg-primary/30 rounded-full w-full"></div>
                    <div className="h-1.5 bg-primary/20 rounded-full w-3/4"></div>
                    <div className="h-1.5 bg-primary/15 rounded-full w-1/2"></div>
                  </div>
                </div>

                <div className="absolute top-12 right-16 w-28 h-28 bg-accent/5 backdrop-blur-sm rounded-2xl p-3 animate-fade-in border border-accent/30 shadow-lg hover:scale-105 transition-transform" style={{ animationDelay: "0.6s" }}>
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-2">
                    <Cpu className="w-7 h-7 text-accent" />
                  </div>
                  <div className="space-y-1 w-full">
                    <div className="h-1 bg-accent/30 rounded-full w-full"></div>
                    <div className="h-1 bg-accent/20 rounded-full w-3/4"></div>
                  </div>
                </div>

                <div className="absolute bottom-20 left-16 w-28 h-24 bg-secondary/5 backdrop-blur-sm rounded-2xl p-3 animate-fade-in border border-secondary/30 shadow-lg hover:scale-105 transition-transform" style={{ animationDelay: "0.8s" }}>
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-secondary/10 mb-2">
                    <Database className="w-5 h-5 text-secondary" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-1.5 bg-secondary/30 rounded-full w-full"></div>
                    <div className="h-1.5 bg-secondary/20 rounded-full w-2/3"></div>
                  </div>
                </div>

                <div className="absolute bottom-14 right-12 w-28 h-24 bg-primary/5 backdrop-blur-sm rounded-2xl p-3 animate-fade-in border border-primary/30 shadow-lg hover:scale-105 transition-transform" style={{ animationDelay: "1s" }}>
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 mb-2">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-1.5 bg-primary/30 rounded-full w-full"></div>
                    <div className="h-1.5 bg-primary/20 rounded-full w-2/3"></div>
                  </div>
                </div>

                {/* Small decorative dots and stars scattered around */}
                <div className="absolute top-8 left-6 w-2.5 h-2.5 bg-accent rounded-full animate-pulse shadow-lg" style={{ animationDelay: "0.5s" }}></div>
                <div className="absolute top-16 right-8 w-2 h-2 bg-primary rounded-full animate-pulse shadow-lg" style={{ animationDelay: "0.7s" }}></div>
                <div className="absolute bottom-24 left-10 w-2 h-2 bg-secondary rounded-full animate-pulse shadow-lg" style={{ animationDelay: "0.9s" }}></div>
                <div className="absolute bottom-32 right-6 w-1.5 h-1.5 bg-accent/70 rounded-full animate-pulse shadow-lg" style={{ animationDelay: "1.1s" }}></div>
                <div className="absolute top-32 left-4 w-2 h-2 bg-primary/60 rounded-full animate-pulse shadow-lg" style={{ animationDelay: "0.65s" }}></div>
                <div className="absolute bottom-12 left-20 w-1.5 h-1.5 bg-accent rounded-full animate-pulse shadow-lg" style={{ animationDelay: "1.3s" }}></div>
                
                {/* Star shapes scattered around */}
                <svg className="absolute top-12 left-16 w-4 h-4 text-accent animate-pulse" style={{ animationDelay: "0.6s" }} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z"/>
                </svg>
                <svg className="absolute top-28 left-2 w-3 h-3 text-primary/70 animate-pulse" style={{ animationDelay: "0.8s" }} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z"/>
                </svg>
                <svg className="absolute bottom-16 left-4 w-3.5 h-3.5 text-secondary animate-pulse" style={{ animationDelay: "1s" }} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z"/>
                </svg>
                <svg className="absolute top-20 right-4 w-3 h-3 text-accent/80 animate-pulse" style={{ animationDelay: "0.7s" }} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z"/>
                </svg>
                <svg className="absolute bottom-20 right-2 w-3.5 h-3.5 text-primary animate-pulse" style={{ animationDelay: "1.2s" }} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z"/>
                </svg>
                <svg className="absolute top-6 right-20 w-3 h-3 text-secondary/70 animate-pulse" style={{ animationDelay: "0.9s" }} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z"/>
                </svg>
                <svg className="absolute bottom-8 left-28 w-2.5 h-2.5 text-primary/80 animate-pulse" style={{ animationDelay: "1.1s" }} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z"/>
                </svg>
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
                  Creating. Learning. Growing.
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
                  <svg className="w-4 h-4 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.121 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .077.53h-.005a3.334 3.334 0 0 0 .113.438c.245.743.65 1.303 1.214 1.68.565.376 1.256.564 2.075.564.8 0 1.536-.213 2.105-.603.57-.39.94-.916 1.175-1.65.076-.235.135-.558.177-.93a10.9 10.9 0 0 0 .043-1.207v-.82a10.9 10.9 0 0 0-.043-1.207 6.61 6.61 0 0 0-.177-.93c-.235-.734-.605-1.26-1.175-1.65-.57-.39-1.305-.603-2.105-.603zm-3.873 2.23c.305-.152.673-.228 1.177-.228.504 0 .872.076 1.177.228a1.44 1.44 0 0 1 .67.687c.122.294.214.641.267 1.035.053.394.08.89.08 1.49v.82c0 .6-.027 1.096-.08 1.49a4.537 4.537 0 0 1-.267 1.035 1.44 1.44 0 0 1-.67.687c-.305.152-.673.228-1.177.228-.504 0-.872-.076-1.177-.228a1.44 1.44 0 0 1-.67-.687 4.537 4.537 0 0 1-.267-1.035 13.726 13.726 0 0 1-.08-1.49v-.82c0-.6.027-1.096.08-1.49.053-.394.145-.741.267-1.035a1.44 1.44 0 0 1 .67-.687zM1.938 4.5C.96 4.5.466 5.03.466 5.87v11.26c0 .84.493 1.37 1.472 1.37h2.91c1.336 0 2.45-.338 3.343-1.015.893-.677 1.34-1.683 1.34-3.018 0-.494-.082-.95-.245-1.368a3.857 3.857 0 0 0-.644-1.126 3.27 3.27 0 0 0-.945-.827 4.216 4.216 0 0 0-1.106-.478v-.05a3.625 3.625 0 0 0 1.394-.938c.39-.433.585-.98.585-1.641 0-1.255-.42-2.184-1.26-2.787-.84-.603-2.024-.905-3.553-.905H1.938zm1.74 1.74h2.025c.84 0 1.504.15 1.992.45.488.3.732.795.732 1.485 0 .69-.244 1.185-.732 1.485-.488.3-1.152.45-1.992.45H3.678V6.24zm0 6.18h2.33c.96 0 1.686.165 2.178.495.492.33.738.855.738 1.575 0 .72-.246 1.245-.738 1.575-.492.33-1.218.495-2.178.495H3.678v-4.14z"/>
                  </svg>
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
