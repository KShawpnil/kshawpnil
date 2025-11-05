import { Card } from "@/components/ui/card";
import { GraduationCap, Brain, Heart, BookOpen, Sparkles, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const ResearchSection = () => {
  const researchAreas = [
    {
      icon: Brain,
      title: "Human-Computer Interaction",
      description: "Designing intuitive interfaces for diverse user groups including elderly and individuals with impairments.",
      color: "primary",
      gradient: "from-primary/20 to-primary/5",
    },
    {
      icon: Heart,
      title: "AI in Healthcare",
      description: "Applying artificial intelligence to enhance healthcare systems and patient experiences.",
      color: "secondary",
      gradient: "from-secondary/20 to-secondary/5",
    },
    {
      icon: Sparkles,
      title: "Accessible Technology",
      description: "Creating efficient and safe technologies that enable smooth interactions for all users.",
      color: "accent",
      gradient: "from-accent/20 to-accent/5",
    },
  ];

  return (
    <section id="research" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Research Focus
            </h2>
            <p className="text-muted-foreground text-lg max-w-4xl mx-auto whitespace-nowrap">
              Exploring innovative solutions that bridge technology and human interaction.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {researchAreas.map((area, index) => {
              const Icon = area.icon;
              const colorClass = `text-${area.color}`;
              const bgClass = `bg-${area.color}/10`;
              
              return (
                <Card 
                  key={index} 
                  className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-elegant hover:-translate-y-2"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative p-6 space-y-4">
                    <div className={`w-14 h-14 rounded-xl ${bgClass} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-7 h-7 ${colorClass}`} />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
          
          <Card className="group relative overflow-hidden border-2 hover:border-secondary/50 transition-all duration-500 hover:shadow-elegant">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative p-8 md:p-10">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-8 h-8 text-secondary" />
                  </div>
                </div>
                
                <div className="flex-1 space-y-4">
                  <div>
                    <Badge className="mb-3 bg-secondary/10 text-secondary border-secondary/20">
                      Bachelor's Thesis
                    </Badge>
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                        CEHRSR: Conveying Electronic Health Records and Synopsis Repository - Using Cutting-edge Technology.
                      </h3>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="flex-shrink-0 hover:bg-secondary/10 h-9 w-9" 
                        asChild
                      >
                        <a href="https://github.com/KShawpnil/CEHRSR.git" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Developed a permissioned blockchain-based web application that allows patients and doctors to securely 
                    enter and store medical data. The system integrates Natural Language Processing (NLP) to efficiently 
                    summarize patient records and applies Human-Computer Interaction (HCI) principles to create an intuitive, 
                    user-friendly, and accessible interface. The project also investigates the usability challenges faced by 
                    elderly users unfamiliar with digital systems, evaluating the effectiveness of healthcare technologies 
                    across diverse user groups.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Multichain</Badge>
                    <Badge variant="secondary">NLP (spaCy)</Badge>
                    <Badge variant="secondary">NextJS</Badge>
                    <Badge variant="secondary">Tailwind</Badge>
                    <Badge variant="secondary">JSON</Badge>
                    <Badge variant="secondary">Prisma</Badge>
                    <Badge variant="secondary">Firebase</Badge>
                  </div>
                  
                  <div className="pt-2 border-t border-border/50">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Supervisor:</span> Dr. Suman Ahmmed, Head and Associate Professor, Department of Computer Science and Engineering
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
