import { Card } from "@/components/ui/card";
import { Code, Layout, Database, Wrench, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Python", "Java", "JavaFX", "C", "C++"],
      color: "primary",
      gradient: "from-primary/20 to-primary/5",
    },
    {
      icon: Layout,
      title: "Web Development",
      skills: ["HTML", "CSS", "PHP", "JavaScript", "WordPress", "Laravel", "Next.js"],
      color: "secondary",
      gradient: "from-secondary/20 to-secondary/5",
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["MySQL", "NoSQL", "Prisma", "Firebase"],
      color: "accent",
      gradient: "from-accent/20 to-accent/5",
    },
    {
      icon: Wrench,
      title: "Tools & Software",
      skills: ["Figma", "Canva", "JIRA", "Overleaf", "Git"],
      color: "primary",
      gradient: "from-primary/15 to-primary/5",
    },
  ];

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Technical Skills
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive skill set across multiple domains of software development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              const colorClass = `text-${category.color}`;
              const bgClass = `bg-${category.color}/10`;
              
              return (
                <Card 
                  key={index} 
                  className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-elegant"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative p-6 md:p-8 space-y-5">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 ${bgClass} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-7 h-7 ${colorClass}`} />
                      </div>
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {category.title}
                      </h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="secondary"
                          className="px-3 py-1.5 text-sm hover:scale-105 transition-transform cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
