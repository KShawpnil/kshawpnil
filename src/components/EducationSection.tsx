import { Card } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science and Engineering",
      institution: "United International University",
      location: "Dhaka, Bangladesh",
      period: "2020 - 2024",
      major: "Software Engineering",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      degree: "Higher Secondary School Certificate",
      institution: "Birshreshtha Munshi Abdur Rouf Public College",
      location: "Dhaka, Bangladesh",
      period: "2017 - 2019",
      gradient: "from-secondary/20 to-secondary/5"
    },
    {
      degree: "Secondary School Certificate",
      institution: "Dhanmondi Government Girls High School",
      location: "Dhaka, Bangladesh",
      period: "2016 - 2017",
      gradient: "from-accent/20 to-accent/5"
    }
  ];

  return (
    <section id="education" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Academic Background
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid gap-6 md:gap-8">
            {education.map((edu, index) => (
              <Card 
                key={index}
                className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-elegant"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${edu.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <GraduationCap className="w-8 h-8 text-primary-foreground" />
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm font-medium whitespace-nowrap">{edu.period}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-lg font-semibold text-primary">
                          {edu.institution}
                        </p>
                        
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{edu.location}</span>
                        </div>
                        
                        {edu.major && (
                          <div className="pt-2">
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                              Major: {edu.major}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
