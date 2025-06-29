import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import MyExperiences from "@/components/MyExperiences";
import Quiz from "@/components/Quiz";
import Capybara from "@/components/Capybara";
export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl relative">
      <Capybara />

      <HeroSection />
      <AboutSection />
      <MyExperiences />
      <Quiz />
      <ProjectsSection />
    </main>
  );
}
