import { Card } from "@/components/ui/card";
import { Trophy, Award, Medal, ExternalLink, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const AwardsSection = () => {
  const awards = [
    {
      icon: Award,
      title: "Merit-Based Tuition Waiver",
      organization: "United International University",
      period: "2020 - 2024",
      type: "scholarship",
      gradient: "from-primary/20 to-primary/5",
    },
    {
      icon: Trophy,
      title: "Finalist - Techkriti 2023 International Competition",
      organization: "Indian Institute of Technology Kanpur, India",
      period: "2023",
      type: "competition",
      link: "https://drive.google.com/file/d/1s5izywClsBl9Uv_Zi_pic_UVYEQVzk3T/view?usp=sharing",
      gradient: "from-accent/20 to-accent/5",
    },
    {
      icon: Medal,
      title: "1st Runner-up - Electronics Laboratory",
      organization: "CSE Project Show, Spring 2022, UIU",
      period: "2022",
      type: "competition",
      link: "https://drive.google.com/file/d/15XwPVG73Zxq3LM0Vkc6gtF-k1UfggFPQ/view?usp=sharing",
      gradient: "from-secondary/20 to-secondary/5",
    },
    {
      icon: Medal,
      title: "1st Runner-up - System Analysis and Design Laboratory",
      organization: "CSE Project Show, Summer 2022, UIU",
      period: "2022",
      type: "competition",
      link: "https://drive.google.com/file/d/1LhHdh1SpAhoBTYK16YFlfFf0H92BATuH/view?usp=sharing",
      gradient: "from-accent/15 to-accent/5",
    },
  ];

  return (
    <section id="awards" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Awards & Achievements
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Recognition for academic excellence and innovative project work
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => {
              const Icon = award.icon;
              
              return (
                <Card 
                  key={index} 
                  className="group relative overflow-hidden border-2 hover:border-accent/50 transition-all duration-500 hover:shadow-elegant hover:-translate-y-1"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${award.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-1 space-y-3">
                        <div>
                          <Badge className="mb-2 bg-accent/10 text-accent border-accent/20">
                            {award.type === 'scholarship' ? 'Scholarship' : 'Competition'}
                          </Badge>
                          <h3 className="font-serif text-lg md:text-xl font-bold text-foreground leading-tight group-hover:text-accent transition-colors">
                            {award.title}
                          </h3>
                        </div>
                        
                        <div className="space-y-1">
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {award.organization}
                          </p>
                          <p className="text-accent font-semibold text-sm">
                            {award.period}
                          </p>
                        </div>
                      </div>
                      
                      {award.link && (
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="flex-shrink-0 hover:bg-accent/10" 
                          asChild
                        >
                          <a href={award.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        </Button>
                      )}
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
