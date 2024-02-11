import About from "@/components/main/about";
import Experience from "@/components/main/experience";
import Intro from "@/components/main/intro";
import MySkills from "@/components/main/my-skills";
import Projects from "@/components/main/projects";
import SectionDivider from "@/components/main/section-divider";

export default function Home() {
  return (
    <main className="pt-40 pb-12 sm:pt-28 flex flex-col items-center gap-20">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <MySkills />
      <Experience />
    </main>
  );
}
