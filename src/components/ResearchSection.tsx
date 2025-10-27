import { Card } from "@/components/ui/card";
import { GraduationCap, Brain, Heart } from "lucide-react";

export const ResearchSection = () => {
  return (
    <section id="research" className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Research Focus
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2 text-foreground">Human-Computer Interaction</h3>
              <p className="text-muted-foreground">
                Designing intuitive interfaces for diverse user groups including elderly and individuals with impairments.
              </p>
            </Card>
            
            <Card className="p-6 bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-xl mb-2 text-foreground">AI in Healthcare</h3>
              <p className="text-muted-foreground">
                Applying artificial intelligence to enhance healthcare systems and patient experiences.
              </p>
            </Card>
            
            <Card className="p-6 bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-xl mb-2 text-foreground">Accessible Technology</h3>
              <p className="text-muted-foreground">
                Creating efficient and safe technologies that enable smooth interactions for all users.
              </p>
            </Card>
          </div>
          
          <Card className="p-8 bg-secondary/5 border-secondary/20">
            <div className="flex items-start gap-4">
              <div className="w-1 h-full bg-secondary rounded-full min-h-[100px]"></div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Bachelor's Thesis
                </h3>
                <h4 className="text-xl font-semibold text-secondary mb-3">
                  CEHRSR: Conveying Electronic Health Records and Synopsis Repository
                </h4>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Developed a permissioned blockchain-based web application that allows patients and doctors to securely 
                  enter and store medical data. The system integrates Natural Language Processing (NLP) to efficiently 
                  summarize patient records and applies Human-Computer Interaction (HCI) principles to create an intuitive, 
                  user-friendly, and accessible interface.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">Blockchain</span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">NLP</span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">NextJS</span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">HCI</span>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  Supervisor: Dr. Suman Ahmmed, Head and Associate Professor, Department of Computer Science and Engineering
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
