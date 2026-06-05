import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { Brain, Cpu, Eye, Network, BookMarked } from 'lucide-react';

const researchAreas = [
  {
    icon: <Eye className="w-8 h-8 text-primary" />,
    title: 'Computer Vision',
    desc: 'Teaching machines to see and understand visual data from cameras and telescopes. Focusing on object detection and real-time inference.'
  },
  {
    icon: <BookMarked className="w-8 h-8 text-secondary" />,
    title: 'Natural Language Processing',
    desc: 'Building systems that understand, generate, and reason with human language. Exploring semantic search and context-aware LLM agents.'
  },
  {
    icon: <Cpu className="w-8 h-8 text-accent" />,
    title: 'Embedded AI',
    desc: 'Deploying intelligence to edge devices, microcontrollers, and prosthetics. Optimizing models for constrained hardware environments.'
  },
  {
    icon: <Network className="w-8 h-8 text-primary" />,
    title: 'Astro-ML',
    desc: 'Applying machine learning to astronomical data for object detection and classification in wide-field deep sky imagery.'
  }
];

const papers = [
  {
    title: 'Attention Is All You Need',
    authors: 'Vaswani et al. (2017)',
    topic: 'Transformer Architecture'
  },
  {
    title: 'YOLOv9: Fast and Accurate Object Detection',
    authors: 'Wang et al. (2024)',
    topic: 'Computer Vision'
  },
  {
    title: 'Deep Residual Learning for Image Recognition',
    authors: 'He et al. (2015)',
    topic: 'ResNet Architecture'
  }
];

export function AIResearch() {
  const containerRef = useScrollAnimation();

  return (
    <section id="research" className="py-24 relative overflow-hidden bg-black" ref={containerRef}>
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-16 text-center">
          Exploring <span className="text-gradient">Intelligence</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <Brain className="text-primary" /> Active Research Domains
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {researchAreas.map((area, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent hover:from-white/[0.08] hover:border-white/20 transition-all group"
                >
                  <div className="mb-4 group-hover:scale-110 transition-transform origin-left">{area.icon}</div>
                  <h4 className="font-bold text-white mb-2">{area.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{area.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-8 flex flex-col">
            <div className="glass-panel p-8 rounded-2xl flex-1 relative overflow-hidden flex flex-col justify-center items-center group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              
              {/* Fake Neural Network SVG Animation */}
              <svg width="100%" height="200" viewBox="0 0 400 200" className="max-w-[400px]">
                {/* Connections */}
                <g stroke="rgba(255,255,255,0.1)" strokeWidth="1">
                  {[1, 2, 3].map(layer1 => 
                    [1, 2, 3, 4].map(layer2 => (
                      <line key={`${layer1}-${layer2}`} x1="50" y1={layer1 * 50} x2="200" y2={layer2 * 40} className="animate-[pulse_4s_ease-in-out_infinite]" style={{ animationDelay: `${layer1*0.2 + layer2*0.1}s` }} />
                    ))
                  )}
                  {[1, 2, 3, 4].map(layer2 => 
                    [1, 2].map(layer3 => (
                      <line key={`l2-${layer2}-${layer3}`} x1="200" y1={layer2 * 40} x2="350" y2={layer3 * 66 + 10} className="animate-[pulse_3s_ease-in-out_infinite]" style={{ animationDelay: `${layer2*0.3 + layer3*0.2}s` }} />
                    ))
                  )}
                </g>
                {/* Nodes */}
                <g fill="hsl(var(--background))" stroke="hsl(var(--primary))" strokeWidth="2">
                  {[1, 2, 3].map(n => <circle key={`n1-${n}`} cx="50" cy={n * 50} r="8" className="animate-pulse" style={{ animationDelay: `${n*0.5}s` }} />)}
                  {[1, 2, 3, 4].map(n => <circle key={`n2-${n}`} cx="200" cy={n * 40} r="8" fill="hsl(var(--secondary))" className="animate-pulse" style={{ animationDelay: `${n*0.3}s` }} />)}
                  {[1, 2].map(n => <circle key={`n3-${n}`} cx="350" cy={n * 66 + 10} r="10" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDelay: `${n*0.7}s` }} />)}
                </g>
              </svg>
              
              <div className="absolute bottom-4 left-0 w-full text-center text-xs text-muted-foreground uppercase tracking-widest font-mono">
                Model Architecture Inference
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl">
              <h3 className="text-sm uppercase tracking-widest text-white/50 mb-4 font-bold">Currently Reading</h3>
              <div className="space-y-3">
                {papers.map((paper, i) => (
                  <div key={i} className="pl-4 border-l-2 border-white/10 hover:border-primary transition-colors py-1">
                    <h4 className="text-sm font-medium text-white mb-1">{paper.title}</h4>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{paper.authors}</span>
                      <span className="text-primary/70">{paper.topic}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
