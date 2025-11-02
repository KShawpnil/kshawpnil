import { Github, Linkedin, Youtube, Mail } from "lucide-react";
import researchGateLogo from "@/assets/researchgate-logo.png";

export const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "About", href: "about" },
    { name: "Research", href: "research" },
    { name: "Publications", href: "publications" },
    { name: "Projects", href: "projects" },
    { name: "Contact", href: "contact" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/kshawpnil",
      icon: Linkedin,
      color: "hover:text-[#0077B5]",
    },
    {
      name: "GitHub",
      href: "https://github.com/kshawpnil",
      icon: Github,
      color: "hover:text-[#333333]",
    },
    {
      name: "ResearchGate",
      href: "https://www.researchgate.net/profile/Kazi-Shawpnil",
      isImage: true,
      color: "hover:opacity-80",
    },
    {
      name: "ORCID",
      href: "https://orcid.org/0000-0002-2517-6745",
      icon: () => (
        <svg className="w-5 h-5" viewBox="0 0 256 256" fill="currentColor">
          <path d="M256 128c0 70.7-57.3 128-128 128S0 198.7 0 128 57.3 0 128 0s128 57.3 128 128z" fill="#A6CE39"/>
          <path d="M86.3 186.2H70.9V79.1h15.4v107.1zM108.9 79.1h41.6c39.6 0 57 28.3 57 53.6 0 27.5-21.5 53.6-56.8 53.6h-41.8V79.1zm15.4 93.3h24.5c34.9 0 42.9-26.5 42.9-39.7C191.7 111.2 178 93 148 93h-23.7v79.4zM71.3 54.8c0 5.2-4.2 9.5-9.5 9.5s-9.5-4.2-9.5-9.5 4.2-9.5 9.5-9.5 9.5 4.3 9.5 9.5z" fill="white"/>
        </svg>
      ),
      color: "hover:scale-110",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@kshawpnil",
      icon: Youtube,
      color: "hover:text-[#FF0000]",
    },
  ];

  return (
    <footer className="bg-primary/5 border-t border-primary/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Column */}
          <div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-2">
              Kazi Shawpnil
            </h3>
            <p className="text-primary/80 font-medium text-sm mb-4 italic">
              Creating. Learning. Growing.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Researcher in HCI and Engineering Education, passionate about AI in Healthcare 
              and innovative educational technologies.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex gap-4 flex-wrap">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-muted-foreground transition-all ${social.color}`}
                  aria-label={social.name}
                >
                  {social.isImage ? (
                    <img 
                      src={researchGateLogo} 
                      alt="ResearchGate"
                      className="w-5 h-5 object-contain"
                      style={{ filter: "grayscale(100%)" }}
                    />
                  ) : social.icon ? (
                    <social.icon className="w-5 h-5" />
                  ) : null}
                </a>
              ))}
            </div>
            <div className="mt-6">
              <a
                href="mailto:kshawpnil@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                kshawpnil@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Kazi Shawpnil. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
