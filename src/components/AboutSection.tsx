import { Card } from "@/components/ui/card";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <Card className="p-8 shadow-elegant">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                I am a recent Computer Science graduate with a strong foundation in Software Engineering 
                from United International University, Dhaka. Currently based in Columbus, Ohio, I am passionate 
                about leveraging technology to create meaningful impact in people's lives.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                My research interests lie at the intersection of <span className="text-primary font-semibold">Human-Computer Interaction (HCI)</span> and <span className="text-secondary font-semibold">Artificial Intelligence in Healthcare</span>. 
                I am particularly focused on designing intuitive, efficient, and accessible technologies that 
                enable smooth interactions for diverse user groups, including elderly individuals, non-technical 
                users, and people with physical impairments.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                Throughout my academic journey, I have gained hands-on experience in developing innovative solutions 
                across various domains including IoT systems, blockchain technology, embedded systems, and web 
                applications. My work has been recognized at international competitions and published in peer-reviewed 
                conferences and journals.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Beyond research, I am committed to education and sharing knowledge. As the founder of <span className="text-accent font-semibold">Everyday E-Learning</span>, 
                a YouTube channel, I create educational content to help students learn and grow. I have also served 
                as a Teaching Assistant and Grader, supporting the next generation of computer science students.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
