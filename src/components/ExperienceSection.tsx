import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap, Youtube, MapPin, Calendar, ChevronDown, ExternalLink } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";

export const ExperienceSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const experiences = [
    {
      icon: Youtube,
      title: "Founder & Instructor",
      organization: "Everyday E-Learning (YouTube)",
      location: "Dhaka, Bangladesh",
      period: "June 2021 - Present",
      description: "• Developed educational content to simplify computer science concepts for diverse learners.\n• Promoted accessible and self-paced digital learning.",
      type: "teaching",
      gradient: "from-secondary/20 to-secondary/5",
      link: "https://www.youtube.com/@EverydayELearning24",
    },
    {
      icon: Briefcase,
      title: "Business Coordinator",
      organization: "AKIJ iBOS",
      location: "Dhaka, Bangladesh",
      period: "Oct 2024 - Feb 2025",
      description: "• Coordinated cross-functional operations to improve workflow efficiency.\n• Engaged with stakeholders to align business and technical objectives.",
      type: "work",
      gradient: "from-primary/20 to-primary/5",
      link: "https://drive.google.com/file/d/1pdAsGWACYbyqcM-r5-O_xwxQwtzHgR90/view?usp=sharing",
    },
    {
      icon: GraduationCap,
      title: "Undergraduate Teaching Assistant",
      organization: "Department of Computer Science and Engineering, United International University",
      location: "Dhaka, Bangladesh",
      period: "Nov 2022 - May 2024",
      description: "• Assisted faculty in delivering and managing laboratory sessions for Electronics Laboratory (Fall 2022, Spring 2023), Structured Programming Language Laboratory, and Data Structure and Algorithms I Laboratory (Fall 2023, Spring 2024).\n• Guided students in implementing programming and circuit-based projects, evaluated lab reports, and supported hands-on learning with personalized feedback.",
      type: "teaching",
      gradient: "from-accent/20 to-accent/5",
    },
    {
      icon: GraduationCap,
      title: "Grader",
      organization: "Department of Computer Science and Engineering, United International University",
      location: "Dhaka, Bangladesh",
      period: "Jan 2023 - Jan 2024",
      description: "• Evaluated student submissions and ensured consistent grading for Human-Computer Interaction (HCI) (Spring & Summer 2023), Data Structure and Algorithms I (Summer 2023), and Digital Logic Design (Fall 2023).\n• Assisted instructors in providing constructive feedback and maintaining fair assessment standards.",
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
              const isOpen = openItems.includes(index);
              
              return (
                <Collapsible 
                  key={index}
                  open={isOpen}
                  onOpenChange={() => toggleItem(index)}
                >
                  <Card 
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
                            <CollapsibleTrigger asChild>
                              <button 
                                className="self-start sm:self-auto flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                                aria-label={isOpen ? "Hide details" : "Show details"}
                              >
                                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                              </button>
                            </CollapsibleTrigger>
                          </div>
                          
                          <p className={`text-lg font-semibold ${colorClass}`}>
                            {exp.organization}
                          </p>
                          
                          <CollapsibleContent className="space-y-3 animate-accordion-down">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Calendar className="w-4 h-4" />
                              <span className="text-sm font-medium">{exp.period}</span>
                            </div>
                            
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <MapPin className="w-4 h-4" />
                              <span className="text-sm">{exp.location}</span>
                            </div>
                            
                            <p className="text-muted-foreground pt-2 whitespace-pre-line">
                              {exp.description}
                            </p>

                            {exp.link && (
                              <a 
                                href={exp.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors pt-2"
                              >
                                <ExternalLink className="w-4 h-4" />
                                <span className="text-sm font-medium">View More</span>
                              </a>
                            )}
                          </CollapsibleContent>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Collapsible>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
