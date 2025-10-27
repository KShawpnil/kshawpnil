import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Lightbulb } from "lucide-react";

export const ProjectsSection = () => {
  const featuredProjects = [
    {
      title: "Automating Systems for Smart Households",
      description: "An IoT integrated automated system enabling physically challenged individuals to navigate their homes with monitoring capabilities for family members.",
      technologies: ["Arduino", "ESP32", "PHP", "JavaScript"],
      achievement: "Finalist in Techkriti 2023 International Competition, IIT Kanpur, India",
      category: "IoT & Accessibility",
    },
    {
      title: "Smart Parking System",
      description: "Arduino-based embedded system improving bike parking security against threats and environmental dangers.",
      technologies: ["Arduino", "C++"],
      achievement: "1st Runner-up in Electronics Laboratory, CSE Project Show, Spring 2022",
      category: "Embedded Systems",
    },
    {
      title: "UIU Student Activity Tracker",
      description: "System tracking and verifying student achievements, events, and activities to assist faculty in writing recommendation letters.",
      technologies: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
      achievement: "1st Runner-up in System Analysis and Design Laboratory, CSE Project Show, Summer 2022",
      category: "Web Development",
    },
    {
      title: "Easy E-waste Management System",
      description: "Innovative solution for efficient and sustainable e-waste management addressing environmental and logistical challenges.",
      technologies: ["Laravel", "HTML", "CSS", "JavaScript", "MySQL"],
      category: "Sustainability",
    },
    {
      title: "Fire Fighting Robot with Computer Vision",
      description: "Four-wheeled IoT robot using computer vision to detect and extinguish fires with a water pump system.",
      technologies: ["Arduino", "ESP32-CAM", "YOLOv8", "C", "C++"],
      category: "Robotics & AI",
    },
    {
      title: "Autonomous Fleet Control System",
      description: "Centralized system for monitoring and controlling vehicle fleets with dynamic routing, optimization, and remote operation capabilities.",
      technologies: ["Software Architecture", "System Design"],
      category: "Software Engineering",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              A selection of undergraduate projects showcasing innovation in IoT, AI, web development, and accessible technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <Badge variant="secondary" className="mb-2">{project.category}</Badge>
                    <h3 className="font-semibold text-lg text-foreground leading-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-muted text-foreground text-xs rounded">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-muted text-foreground text-xs rounded">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                {project.achievement && (
                  <div className="flex items-start gap-2 p-3 bg-accent/10 rounded-lg">
                    <Trophy className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-accent-foreground">{project.achievement}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
