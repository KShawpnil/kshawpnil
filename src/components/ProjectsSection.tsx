import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export const ProjectsSection = () => {
  const featuredProjects = [
    {
      title: "Automating Systems for Smart Households",
      description: "An IoT integrated automated system enabling physically challenged individuals to navigate their homes with monitoring capabilities for family members.",
      technologies: ["Arduino", "ESP32", "PHP", "JavaScript"],
      achievement: "Finalist in Techkriti 2023 International Competition, IIT Kanpur, India",
      category: "IoT & Accessibility",
      link: "https://github.com/KShawpnil/techkriti.git",
    },
    {
      title: "Smart Parking System",
      description: "Arduino-based embedded system improving bike parking security against threats and environmental dangers.",
      technologies: ["Arduino", "C++"],
      achievement: "1st Runner-up in Electronics Laboratory, CSE Project Show, Spring 2022",
      category: "Embedded Systems",
      link: "https://github.com/KShawpnil/Smart-Parking-System.git",
    },
    {
      title: "UIU Student Activity Tracker",
      description: "System tracking and verifying student achievements, events, and activities to assist faculty in writing recommendation letters.",
      technologies: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
      achievement: "1st Runner-up in System Analysis and Design Laboratory, CSE Project Show, Summer 2022",
      category: "Web Development",
      link: "https://github.com/KShawpnil/UIU_Student_Activity_Tracker.git",
    },
    {
      title: "Easy E-waste Management System",
      description: "Innovative solution for efficient and sustainable e-waste management addressing environmental and logistical challenges.",
      technologies: ["Laravel", "HTML", "CSS", "JavaScript", "MySQL"],
      category: "Sustainability",
      link: "https://github.com/KShawpnil/EasyEWaste.git",
    },
    {
      title: "Fire Fighting Robot with Computer Vision",
      description: "Four-wheeled IoT robot using computer vision to detect and extinguish fires with a water pump system.",
      technologies: ["Arduino", "ESP32-CAM", "YOLOv8", "C", "C++"],
      category: "Robotics & AI",
      link: "https://github.com/KShawpnil/Firefighter-Robot.git",
    },
    {
      title: "Autonomous Fleet Control System",
      description: "Centralized system for monitoring and controlling vehicle fleets with dynamic routing, optimization, and remote operation capabilities.",
      technologies: ["Software Architecture", "System Design"],
      category: "Software Engineering",
      link: "https://drive.google.com/file/d/1w5FxkyqJF3Sa-3-6_oT_kERY9LTvAaHg/view?usp=sharing",
    },
    {
      title: "CVGen",
      description: "Web application system that allows users to choose a CV template and generate their preferred CV.",
      technologies: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
      category: "Web Development",
      link: "https://github.com/KShawpnil/CVGen.git",
    },
    {
      title: "ApacheJMeter for OrangeHRM",
      description: "Performance testing, functional testing, and load testing of web applications using Apache JMeter to simulate heavy loads with concurrent users.",
      technologies: ["Apache JMeter", "PHP"],
      category: "Software Testing",
      link: "https://github.com/KShawpnil/Apache_JMeter_Orangehrm.git",
    },
    {
      title: "Student Management System",
      description: "System to track student information including departments, courses, and scholarships with login functionality and chatting options.",
      technologies: ["PHP", "HTML", "CSS", "MySQL"],
      category: "Database Systems",
      link: "https://drive.google.com/file/d/1ccby3LnwQ04GE00bFWLcE8UOn0_iJcuB/view?usp=sharing",
    },
    {
      title: "Online Examination Management System",
      description: "Web-based application platform allowing instructors to review and assign grades while students submit quizzes.",
      technologies: ["Java", "JavaFX"],
      category: "Education Technology",
    },
    {
      title: "Online Shopping Application",
      description: "Shopping application with various categories for men's and women's clothing, discounts, invoice history, and manager portal for product control.",
      technologies: ["C"],
      category: "E-Commerce",
      link: "https://github.com/KShawpnil/Online-Shopping.git",
    },
    {
      title: "Session Security and File Upload Security",
      description: "Applied session security inactivity and file upload security measures in the UIU Student Activity Tracker project.",
      technologies: ["PHP", "Security Protocols"],
      category: "Computer Security",
      link: "https://github.com/KShawpnil/Computer_Security_Project.git",
    },
    {
      title: "Student Bicycle Tracking System",
      description: "System allowing students to borrow bicycles for a set period with location tracking capabilities for authorities if not returned on time.",
      technologies: ["Arduino", "ESP32", "PHP"],
      category: "IoT & Tracking",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Undergraduate Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              A comprehensive collection of 13 undergraduate projects showcasing expertise across IoT, AI, web development, embedded systems, and software engineering
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-elegant hover:-translate-y-1 flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <Badge variant="secondary" className="mb-2">
                      {project.category}
                    </Badge>
                    {project.link && (
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="flex-shrink-0 hover:bg-primary/10 h-8 w-8" 
                        asChild
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          {project.link.includes("github.com") 
                            ? <Github className="w-4 h-4" /> 
                            : <ExternalLink className="w-4 h-4" />
                          }
                        </a>
                      </Button>
                    )}
                  </div>
                  
                  <h3 className="font-serif text-lg font-bold text-foreground leading-tight mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="px-2.5 py-1 bg-muted text-foreground text-xs rounded-md hover:bg-muted/80 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2.5 py-1 bg-muted text-foreground text-xs rounded-md">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    
                    {project.achievement && (
                      <div className="flex items-start gap-2 p-3 bg-accent/10 rounded-lg border border-accent/20">
                        <p className="text-xs text-foreground font-medium leading-relaxed">
                          {project.achievement}
                        </p>
                      </div>
                    )}
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
