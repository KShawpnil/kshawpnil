import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { EducationSection } from "@/components/EducationSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ResearchSection } from "@/components/ResearchSection";
import { PublicationsSection } from "@/components/PublicationsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { AwardsSection } from "@/components/AwardsSection";
import { ContactSection } from "@/components/ContactSection";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <main className="font-sans">
      <Navbar />
      <Hero />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <ResearchSection />
      <PublicationsSection />
      <ProjectsSection />
      <SkillsSection />
      <AwardsSection />
      <ContactSection />
      
      <footer className="bg-muted/30 py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Kazi Shawpnil. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
