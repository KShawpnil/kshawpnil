import { Hero } from "@/components/Hero";
import { ResearchSection } from "@/components/ResearchSection";
import { EducationSection } from "@/components/EducationSection";
import { PublicationsSection } from "@/components/PublicationsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { AwardsSection } from "@/components/AwardsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="font-sans">
      <Hero />
      <ResearchSection />
      <EducationSection />
      <PublicationsSection />
      <ProjectsSection />
      <ExperienceSection />
      <AwardsSection />
      <SkillsSection />
      <ContactSection />
      
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Kazi Shawpnil. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
