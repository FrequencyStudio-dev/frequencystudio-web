import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedProjects} from "@/components/sections/FeaturedProjects";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <FeaturedProjects />
        <ProjectsSection />
        <ServicesSection />
      </main>
    </>
  );
}
