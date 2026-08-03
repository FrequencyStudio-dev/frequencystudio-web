import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ToolsSection } from "@/components/sections/ToolsSection";
import { LabSection } from "@/components/sections/LabSection";
import { AboutSection } from "@/components/sections/AboutSection";


export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <ProjectsSection />
        <ServicesSection />
        <ToolsSection />
        <LabSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
