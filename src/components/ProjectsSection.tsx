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
    {
      title: "CVGen",
      description: "Web application system that allows users to choose a CV template and generate their preferred CV.",
      technologies: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
      category: "Web Development",
    },
    {
      title: "ApacheJMeter for OrangeHRM",
      description: "Performance testing, functional testing, and load testing of web applications using Apache JMeter to simulate heavy loads with concurrent users.",
      technologies: ["Apache JMeter", "PHP"],
      category: "Software Testing",
    },
    {
      title: "Student Management System",
      description: "System to track student information including departments, courses, and scholarships with login functionality and chatting options.",
      technologies: ["PHP", "HTML", "CSS", "MySQL"],
      category: "Database Systems",
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
    },
    {
      title: "Session Security and File Upload Security",
      description: "Applied session security inactivity and file upload security measures in the UIU Student Activity Tracker project.",
      technologies: ["PHP", "Security Protocols"],
      category: "Computer Security",
    },
    {
      title: "Student Bicycle Tracking System",
      description: "System allowing students to borrow bicycles for a set period with location tracking capabilities for authorities if not returned on time.",
      technologies: ["Arduino", "ESP32", "PHP"],
      category: "IoT & Tracking",
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
              A comprehensive collection of 13 undergraduate projects showcasing expertise across IoT, AI, web development, embedded systems, and software engineering
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
