import About from "@/components/main/about";
import Intro from "@/components/main/intro";
import SectionDivider from "@/components/main/section-divider";

export default function Home() {
  return (
    <main className="pt-40 sm:pt-28 flex flex-col items-center gap-3">
      <Intro />
      <SectionDivider />
      <About />
    </main>
  );
}
