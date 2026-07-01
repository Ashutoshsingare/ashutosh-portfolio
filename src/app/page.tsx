import { AppProvider } from "@/components/AppProvider";
import { Navbar } from "@/components/Navbar";
import { ScrollyCanvas } from "@/components/ScrollyCanvas";
import { Education } from "@/components/Education";
import { TechStack } from "@/components/TechStack";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative bg-[#0d0f12] min-h-screen selection:bg-accent/25 selection:text-white">
      <AppProvider>
        {/* 1. Hero & 2. Engineering Philosophy */}
        <Navbar />
        <ScrollyCanvas />
      </AppProvider>

      {/* 3. Education Section (Vertical Laser Timeline) */}
      <Education />

      {/* 4. Tech Stack Section */}
      <TechStack />

      {/* 5. Projects Section (Existing) */}
      <div id="works" className="scroll-mt-28 sm:scroll-mt-32">
        <Projects />
      </div>

      {/* 6. Contact Section (Existing) */}
      <Contact />
    </main>
  );
}
