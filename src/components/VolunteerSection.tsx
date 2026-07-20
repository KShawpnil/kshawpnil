import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, BookOpen, Lightbulb, Share2, ClipboardCheck, ShieldCheck } from "lucide-react";

export const VolunteerSection = () => {
  const activities = [
    {
      icon: Heart,
      role: "Full-Stack IoT & AI System",
      projectName: "Hearth Care AI",
      period: "2026",
      organization: (
        <>
          The Caregiver Artificial Intelligence Prize Challenge, Powered by the{" "}
          <a
            href="https://acl.gov/caregiver-ai-competition"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline font-medium"
          >
            Administration for Community Living (ACL)
          </a>
        </>
      ),
      projectDescription: [
        "Developed the full-stack software backend connecting a Raspberry Pi 5 IoT device to role-based web and mobile applications with real-time database sync and LLM-powered AI summarization.",
        "Developed the embedded hardware backend for a custom Raspberry Pi 5 IoT device including WebRTC video calling, voice activation, speech transcription.",
      ],
      supervisorName: "Laura Czuba",
      supervisorLink: "https://www.lauraczuba.com/",
      points: [
        "Contributing primarily to the technical and Human-Computer Interaction (HCI) aspects of the project.",
        "Collaborating on the development of AI-assisted solutions aimed at supporting caregivers and enhancing user experience.",
      ],
      gradient: "from-primary/20 to-primary/5",
    },
    {
      icon: BookOpen,
      role: "Reviewer",
      period: "2026",
      organization: "Academic Conferences",
      points: [
        "Reviewed research paper submissions for the RESPECT 2026 Conference, evaluating quality, relevance, and methodological rigor.",
        "Reviewed poster submissions for the COMPASS 2026 Conference, providing constructive feedback to improve clarity, impact, and presentation.",
      ],
      gradient: "from-accent/20 to-accent/5",
    },
    {
      icon: Lightbulb,
      role: "Participant",
      period: "2026",
      organization: "International Women's Day \"SheBuilds\" Initiative by Lovable",
      points: [
        "Presented an initiative aimed at reducing digital fear and helping women confidently use AI tools for income generation, branding, communication, and business management.",
        "Advocated for accessible AI adoption to support women entrepreneurs and small business growth.",
      ],
      gradient: "from-secondary/20 to-secondary/5",
    },
    {
      icon: Users,
      role: "Mentor, World Language Appathon",
      period: "2025",
      organization: "HackOHI/O, The Ohio State University, Columbus, Ohio",
      points: [
        "Supported participants by offering direction on Virtual Reality project design and implementation.",
        "Engaged in collaborative problem-solving and technical advising during the competition.",
      ],
      gradient: "from-primary/15 to-primary/5",
    },
    {
      icon: Share2,
      role: "Social Media Manager, Community Support",
      period: "",
      organization: "Multiple Local/Online Businesses",
      points: [
        "Created engaging content and maintained social media pages to help small businesses grow their digital presence.",
        "Led content planning, visual design coordination, and engagement strategies tailored to target audiences.",
      ],
      gradient: "from-accent/15 to-accent/5",
    },
    {
      icon: ClipboardCheck,
      role: "Event Monitor, CSE Project Showcase",
      period: "2024",
      organization: "Department of Computer Science and Engineering, United International University, Dhaka, Bangladesh",
      points: [
        "Facilitated the organization of student project presentations and maintained event flow.",
        "Helped participants with technical or logistical needs and supported judging procedures.",
      ],
      gradient: "from-secondary/15 to-secondary/5",
    },
    {
      icon: ShieldCheck,
      role: "Exam Invigilator",
      period: "2019",
      organization: "Udash Coaching Center, Dhaka, Bangladesh",
      points: [
        "Monitored examination sessions to ensure fairness and maintain exam integrity.",
        "Assisted with distributing materials, supervising students, and managing exam procedures.",
      ],
      gradient: "from-primary/15 to-primary/5",
    },
  ];

  return (
    <section id="volunteer" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Volunteer Activities
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Giving back through mentorship, community support, and academic service
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {activities.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden border-2 hover:border-accent/50 transition-all duration-500 hover:shadow-elegant hover:-translate-y-1"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                  <div className="relative p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-accent" />
                      </div>

                      <div className="flex-1 space-y-3">
                        <div>
                          {item.period && (
                            <Badge className="mb-2 bg-accent/10 text-accent border-accent/20">
                              {item.period}
                            </Badge>
                          )}
                          <h3 className="font-serif text-lg md:text-xl font-bold text-foreground leading-tight group-hover:text-accent transition-colors">
                            {item.role}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                            {item.organization}
                          </p>
                        </div>

                        <ul className="space-y-2 list-disc list-outside pl-5">
                          {item.points.map((point, i) => (
                            <li key={i} className="text-sm text-muted-foreground leading-relaxed">
                              {point}
                            </li>
                          ))}
                        </ul>
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
