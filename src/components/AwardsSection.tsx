import { Card } from "@/components/ui/card";
import { Trophy, Award, Medal, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const AwardsSection = () => {
  const awards = [
    {
      icon: Award,
      title: "Merit-Based Tuition Waiver",
      organization: "United International University",
      period: "2020 - 2024",
      type: "scholarship",
    },
    {
      icon: Trophy,
      title: "Finalist - Techkriti 2023 International Competition",
      organization: "Indian Institute of Technology Kanpur, India",
      period: "2023",
      type: "competition",
      link: "https://drive.google.com/file/d/1s5izywClsBl9Uv_Zi_pic_UVYEQVzk3T/view?usp=sharing",
    },
    {
      icon: Medal,
      title: "1st Runner-up - Electronics Laboratory",
      organization: "CSE Project Show, Spring 2022, UIU",
      period: "2022",
      type: "competition",
      link: "https://drive.google.com/file/d/15XwPVG73Zxq3LM0Vkc6gtF-k1UfggFPQ/view?usp=sharing",
    },
    {
      icon: Medal,
      title: "1st Runner-up - System Analysis and Design Laboratory",
      organization: "CSE Project Show, Summer 2022, UIU",
      period: "2022",
      type: "competition",
      link: "https://drive.google.com/file/d/1LhHdh1SpAhoBTYK16YFlfFf0H92BATuH/view?usp=sharing",
    },
  ];

  return (
    <section id="awards" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Awards & Achievements
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => {
              const Icon = award.icon;
              return (
                <Card key={index} className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-foreground mb-2">
                        {award.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-1">{award.organization}</p>
                      <p className="text-accent font-medium text-sm">{award.period}</p>
                    </div>
                    {award.link && (
                      <Button variant="ghost" size="icon" className="flex-shrink-0" asChild>
                        <a href={award.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
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
