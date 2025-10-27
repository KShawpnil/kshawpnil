import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";

export const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "kshawpnil@gmail.com",
      link: "mailto:kshawpnil@gmail.com",
      gradient: "from-primary/20 to-primary/5",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (614) 378-7010",
      link: "tel:+16143787010",
      gradient: "from-secondary/20 to-secondary/5",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Columbus, Ohio, USA",
      gradient: "from-accent/20 to-accent/5",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Contact Me
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              I'm currently seeking PhD opportunities in Computer Science with a focus on HCI and AI in Healthcare. 
              Feel free to reach out for collaborations or inquiries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              
              return (
                <Card 
                  key={index} 
                  className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-elegant"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative p-6 text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-2">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="text-primary hover:text-accent transition-colors font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="group shadow-lg hover:shadow-elegant" asChild>
              <a href="mailto:kshawpnil@gmail.com">
                <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Send Email
              </a>
            </Button>
            <Button variant="outline" size="lg" className="group" asChild>
              <a href="https://linkedin.com/in/kazishawpnil" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                LinkedIn Profile
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
