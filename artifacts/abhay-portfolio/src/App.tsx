import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { useLenis } from "@/hooks/useLenis";

// Components
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Journey } from "@/components/Journey";
import { Arsenal } from "@/components/Arsenal";
import { Projects } from "@/components/Projects";
import { GitHub } from "@/components/GitHub";
import { DSA } from "@/components/DSA";
import { AIResearch } from "@/components/AIResearch";
import { Astronomy } from "@/components/Astronomy";
import { BeyondCode } from "@/components/BeyondCode";
import { Contact } from "@/components/Contact";

function App() {
  useLenis(); // Initialize smooth scrolling

  return (
    <div className="dark bg-background text-foreground min-h-screen">
      <TooltipProvider>
        <Navigation />
        
        <main>
          <Hero />
          <About />
          <Journey />
          <Arsenal />
          <Projects />
          <GitHub />
          <DSA />
          <AIResearch />
          <Astronomy />
          <BeyondCode />
          <Contact />
        </main>
        
        <Toaster />
      </TooltipProvider>
    </div>
  );
}

export default App;
