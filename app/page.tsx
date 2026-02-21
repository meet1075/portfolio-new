import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import GitHubContributions from "@/components/GitHubContributions";
import Connect from "@/components/Connect";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0d0d] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-12">
        <Hero />
        <About />
        <Projects limit={3} showViewAll={true} showFull={true} />
        <Skills />
        <GitHubContributions />
        <Connect />
      </div>
    </main>
  );
}
