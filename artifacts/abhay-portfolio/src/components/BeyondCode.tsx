import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Telescope, BrainCircuit, Hammer, BookOpenCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const personas = [
  {
    icon: <Telescope className="w-10 h-10 text-primary mb-4" />,
    title: "The Astronomer",
    desc: "Member of the cosmos club, stargazer, astrophotography enthusiast.",
    color: "group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(0,212,255,0.15)]"
  },
  {
    icon: <BrainCircuit className="w-10 h-10 text-secondary mb-4" />,
    title: "The Researcher",
    desc: "Obsessed with understanding how intelligence works, from neurons to neural networks.",
    color: "group-hover:border-secondary/50 group-hover:shadow-[0_0_30px_rgba(124,58,237,0.15)]"
  },
  {
    icon: <Hammer className="w-10 h-10 text-accent mb-4" />,
    title: "The Builder",
    desc: "If it doesn't exist and should, I'll build it. Shipping is a discipline.",
    color: "group-hover:border-accent/50 group-hover:shadow-[0_0_30px_rgba(0,212,255,0.15)]"
  },
  {
    icon: <BookOpenCheck className="w-10 h-10 text-green-500 mb-4" />,
    title: "The Teacher",
    desc: "Running workshops, mentoring juniors, writing about what I learn.",
    color: "group-hover:border-green-500/50 group-hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]"
  }
];

export function BeyondCode() {
  const containerRef = useScrollAnimation();

  return (
    <section id="beyond" className="py-24 relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-16 text-center">
          Beyond the <span className="text-gradient">Code</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {personas.map((persona, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className={`glass-panel p-8 rounded-2xl group transition-all duration-300 border border-white/5 ${persona.color}`}
            >
              {persona.icon}
              <h3 className="text-2xl font-bold text-white mb-3 font-display">{persona.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{persona.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
