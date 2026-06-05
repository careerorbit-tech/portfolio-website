import { motion } from 'framer-motion';
import { X, Github, ExternalLink, PlayCircle } from 'lucide-react';
import { Button } from './ui/button';
import { projects } from './Projects';

interface ProjectModalProps {
  project: typeof projects[0];
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 bg-background/80 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div 
        initial={{ y: 50, scale: 0.95 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 20, scale: 0.95 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-card border border-white/10 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-white/10 sticky top-0 bg-card/80 backdrop-blur-md z-20">
          <div>
            <h3 className="text-2xl font-bold font-display text-white">{project.title}</h3>
            <p className="text-primary text-sm">{project.subtitle}</p>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-muted-foreground hover:text-white transition-colors border border-white/10"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-12">
          {/* Hero Image/Video placeholder */}
          <div className="w-full aspect-video bg-muted rounded-xl border border-white/10 overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform cursor-pointer">
                <PlayCircle className="text-white w-10 h-10" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 text-xs font-mono bg-black/70 px-2 py-1 rounded border border-white/10 text-white/70">
              demo_preview.mp4
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <section>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-primary rounded-full inline-block"></span>
                  The Problem
                </h4>
                <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
              </section>

              <section>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-secondary rounded-full inline-block"></span>
                  Architecture
                </h4>
                <p className="text-muted-foreground leading-relaxed">{project.architecture}</p>
              </section>

              <section>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-accent rounded-full inline-block"></span>
                  Key Challenges
                </h4>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground">
                      <span className="text-primary/50 mt-1">▹</span>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="space-y-8">
              <div className="glass-panel p-6 rounded-xl">
                <h5 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Tech Stack</h5>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map(tech => (
                    <span key={tech} className="px-3 py-1.5 text-xs rounded bg-white/5 border border-white/10 text-white/80">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass-panel p-6 rounded-xl">
                <h5 className="font-bold text-white mb-2 text-sm uppercase tracking-wider">Impact & Results</h5>
                <p className="text-primary font-medium">{project.impact}</p>
              </div>

              <div className="flex flex-col gap-3">
                <Button className="w-full justify-start gap-2 bg-white text-black hover:bg-white/90" size="lg">
                  <ExternalLink size={18} /> Visit Live Project
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2" size="lg">
                  <Github size={18} /> View Source Code
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
