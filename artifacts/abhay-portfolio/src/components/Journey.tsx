import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const milestones = [
  { year: '2021', title: 'Started Engineering', desc: 'B.Tech Computer Science begins', tag: 'Education' },
  { year: '2022', title: 'First Projects', desc: 'Built first web apps, discovered competitive programming', tag: 'Project' },
  { year: '2022', title: 'Astronomy Leadership', desc: 'Founded/joined astronomy club, started outreach events', tag: 'Leadership' },
  { year: '2023', title: 'AI Awakening', desc: 'Deep dive into machine learning, first ML projects', tag: 'Research' },
  { year: '2023', title: 'AlgoVista Born', desc: 'Built algorithm visualization platform', tag: 'Project' },
  { year: '2024', title: 'CareerOrbit.Tech', desc: 'Built AI-powered career platform', tag: 'Project' },
  { year: '2024', title: 'Matrix Astronomy Platform', desc: 'Full astronomy management system', tag: 'Project' },
  { year: '2024', title: 'Research Mode', desc: 'AI Prosthetic Arm research, EmoSense AI', tag: 'Research' },
  { year: '2025', title: 'AstroVision + Open Source', desc: 'Computer vision for astronomy, growing GitHub', tag: 'Project' },
  { year: 'Present', title: 'Building the Future', desc: 'Multiple active projects, seeking collaborations', tag: 'Leadership' }
];

export function Journey() {
  const containerRef = useScrollAnimation();
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="journey" className="py-24 relative" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-16 text-center">
          The <span className="text-gradient">Journey</span>
        </h2>
        
        {/* Desktop horizontal, Mobile vertical */}
        <div className="relative max-w-5xl mx-auto" ref={scrollRef}>
          {/* Vertical line connector */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 -translate-x-1/2 rounded-full overflow-hidden">
            <motion.div 
              className="w-full bg-gradient-to-b from-primary via-secondary to-primary" 
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-12">
            {milestones.map((milestone, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className={`relative flex items-center ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} flex-row`}>
                  {/* Point on timeline */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(0,212,255,0.5)]"></div>
                  
                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden md:block w-1/2 px-8"></div>
                  
                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-8 pr-4 ${isEven ? 'md:pr-16 md:pl-0 md:text-right' : ''}`}>
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="glass-panel p-6 rounded-xl hover:border-primary/30 transition-colors duration-300 group cursor-pointer"
                    >
                      <div className={`flex flex-wrap gap-2 mb-3 items-center ${isEven ? 'md:justify-end' : ''}`}>
                        <span className="text-primary font-bold">{milestone.year}</span>
                        <span className="px-2 py-0.5 text-xs rounded-full bg-white/5 border border-white/10 text-muted-foreground group-hover:border-primary/20 group-hover:text-primary transition-colors">
                          {milestone.tag}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.desc}</p>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
