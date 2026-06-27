import { Navbar } from "@/components/Navbar";
import { ScrollyCanvas } from "@/components/ScrollyCanvas";
import { Education } from "@/components/Education";
import { TechStack } from "@/components/TechStack";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative bg-[#121212] min-h-screen selection:bg-emerald-500/30 selection:text-white">
      {/* 1. Hero & 2. Engineering Philosophy (LOCKED inside ScrollyCanvas) */}
      <Navbar />
      <ScrollyCanvas />

      {/* 3. Education Section (Vertical Laser Timeline) */}
      <Education />

      {/* 4. Tech Stack Section */}
      <TechStack />

      {/* 5. Projects Section (Existing) */}
      <div id="works">
        <Projects />
      </div>

      {/* 6. Contact Section (Existing) */}
      <Contact />
    </main>
  );
}
