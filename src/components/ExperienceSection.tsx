import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap, Youtube } from "lucide-react";

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
    },
    {
      icon: Briefcase,
      title: "Business Coordinator",
      organization: "AKIJ iBOS",
      location: "Dhaka, Bangladesh",
      period: "Oct 2024 - Feb 2025",
      description: "Coordinating business operations and managing project workflows.",
      type: "work",
    },
    {
      icon: GraduationCap,
      title: "Undergraduate Teaching Assistant",
      organization: "Department of CSE, United International University",
      location: "Dhaka, Bangladesh",
      period: "Nov 2022 - May 2024",
      description: "Assisted in teaching courses, mentoring students, and supporting laboratory sessions.",
      type: "teaching",
    },
    {
      icon: GraduationCap,
      title: "Grader",
      organization: "Department of CSE, United International University",
      location: "Dhaka, Bangladesh",
      period: "Jan 2023 - Jan 2024",
      description: "Evaluated student assignments and provided constructive feedback.",
      type: "teaching",
    },
  ];

  return (
    <section id="experience" className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Experience
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <Card key={index} className="p-6 shadow-card hover:shadow-elegant transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 ${exp.type === 'teaching' ? 'bg-secondary/10' : 'bg-primary/10'} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-6 h-6 ${exp.type === 'teaching' ? 'text-secondary' : 'text-primary'}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                        <h3 className="font-semibold text-xl text-foreground">{exp.title}</h3>
                        <span className="text-sm text-muted-foreground">{exp.period}</span>
                      </div>
                      <p className={`${exp.type === 'teaching' ? 'text-secondary' : 'text-primary'} font-medium mb-1`}>
                        {exp.organization}
                      </p>
                      <p className="text-muted-foreground text-sm mb-2">{exp.location}</p>
                      <p className="text-muted-foreground">{exp.description}</p>
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
