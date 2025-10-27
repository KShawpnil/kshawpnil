import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap, Youtube, MapPin, Calendar } from "lucide-react";

export const ExperienceSection = () => {
  const experiences = [
    {
      icon: Youtube,
      title: "Founder & Instructor",
      organization: "Everyday E-Learning (YouTube)",
      location: "Dhaka, Bangladesh",
      period: "June 2021 - Present",
      description: "Creating educational content and tutorials for students, building a community of learners.",
      type: "teaching",
      gradient: "from-secondary/20 to-secondary/5",
    },
    {
      icon: Briefcase,
      title: "Business Coordinator",
      organization: "AKIJ iBOS",
      location: "Dhaka, Bangladesh",
      period: "Oct 2024 - Feb 2025",
      description: "Coordinating business operations and managing project workflows.",
      type: "work",
      gradient: "from-primary/20 to-primary/5",
    },
    {
      icon: GraduationCap,
      title: "Undergraduate Teaching Assistant",
      organization: "Department of CSE, United International University",
      location: "Dhaka, Bangladesh",
      period: "Nov 2022 - May 2024",
      description: "Assisted in teaching courses, mentoring students, and supporting laboratory sessions.",
      type: "teaching",
      gradient: "from-accent/20 to-accent/5",
    },
    {
      icon: GraduationCap,
      title: "Grader",
      organization: "Department of CSE, United International University",
      location: "Dhaka, Bangladesh",
      period: "Jan 2023 - Jan 2024",
      description: "Evaluated student assignments and provided constructive feedback.",
      type: "teaching",
      gradient: "from-secondary/15 to-secondary/5",
    },
  ];

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Work Experiences
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Professional journey spanning education, business, and content creation
            </p>
          </div>
          
          <div className="grid gap-6">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const colorClass = exp.type === 'teaching' ? 'text-secondary' : 'text-primary';
              const bgClass = exp.type === 'teaching' ? 'bg-secondary/10' : 'bg-primary/10';
              
              return (
                <Card 
                  key={index} 
                  className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-elegant"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative p-6 md:p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className={`w-16 h-16 rounded-xl ${bgClass} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className={`w-8 h-8 ${colorClass}`} />
                        </div>
                      </div>
                      
                      <div className="flex-1 space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                          <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm font-medium whitespace-nowrap">{exp.period}</span>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <p className={`text-lg font-semibold ${colorClass}`}>
                            {exp.organization}
                          </p>
                          
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                          
                          <p className="text-muted-foreground pt-2">
                            {exp.description}
                          </p>
                        </div>
                      </div>
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
