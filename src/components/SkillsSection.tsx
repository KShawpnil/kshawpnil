import { Card } from "@/components/ui/card";
import { Code, Layout, Database, Wrench } from "lucide-react";

export const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Python", "Java", "JavaFX", "C", "C++"],
      color: "primary",
    },
    {
      icon: Layout,
      title: "Web Development",
      skills: ["HTML", "CSS", "PHP", "JavaScript", "WordPress", "Laravel", "Next.js"],
      color: "secondary",
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["MySQL", "NoSQL", "Prisma", "Firebase"],
      color: "accent",
    },
    {
      icon: Wrench,
      title: "Tools & Software",
      skills: ["Figma", "Canva", "JIRA", "Overleaf", "Git"],
      color: "primary",
    },
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              const colorClass = {
                primary: "bg-primary/10 text-primary",
                secondary: "bg-secondary/10 text-secondary",
                accent: "bg-accent/10 text-accent",
              }[category.color];
              
              return (
                <Card key={index} className="p-6 shadow-card hover:shadow-elegant transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 ${colorClass} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-xl text-foreground pt-2">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1.5 bg-muted text-foreground text-sm rounded-lg hover:bg-muted/80 transition-colors">
                        {skill}
                      </span>
                    ))}
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
