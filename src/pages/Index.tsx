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
import { Footer } from "@/components/Footer";

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
      <Footer />
    </main>
  );
};

export default Index;
