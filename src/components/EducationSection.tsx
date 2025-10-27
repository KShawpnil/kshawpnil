import { Card } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Academic Background
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>
            
            <div className="space-y-8">
              <div className="relative pl-20">
                <div className="absolute left-6 top-6 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-md"></div>
                <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                        <h3 className="font-semibold text-xl text-foreground">Bachelor of Science in Computer Science and Engineering</h3>
                        <span className="text-sm text-muted-foreground">2020 - 2024</span>
                      </div>
                      <p className="text-primary font-medium mb-2">United International University</p>
                      <p className="text-muted-foreground mb-2">Dhaka, Bangladesh</p>
                      <p className="text-foreground"><span className="font-medium">Major:</span> Software Engineering</p>
                    </div>
                  </div>
                </Card>
              </div>
              
              <div className="relative pl-20">
                <div className="absolute left-6 top-6 w-5 h-5 bg-primary/60 rounded-full border-4 border-background shadow-md"></div>
                <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                        <h3 className="font-semibold text-xl text-foreground">Higher Secondary School Certificate</h3>
                        <span className="text-sm text-muted-foreground">2017 - 2019</span>
                      </div>
                      <p className="text-primary font-medium mb-2">Birshreshtha Munshi Abdur Rouf Public College</p>
                      <p className="text-muted-foreground">Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </Card>
              </div>
              
              <div className="relative pl-20">
                <div className="absolute left-6 top-6 w-5 h-5 bg-primary/40 rounded-full border-4 border-background shadow-md"></div>
                <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                        <h3 className="font-semibold text-xl text-foreground">Secondary School Certificate</h3>
                        <span className="text-sm text-muted-foreground">2016 - 2017</span>
                      </div>
                      <p className="text-primary font-medium mb-2">Dhanmondi Government Girls High School</p>
                      <p className="text-muted-foreground">Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
