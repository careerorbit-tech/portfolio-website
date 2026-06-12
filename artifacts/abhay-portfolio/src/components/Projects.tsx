import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ProjectModal } from './ProjectModal';
import { Button } from './ui/button';
import { AnimatePresence } from 'framer-motion';
import { Github } from 'lucide-react';

export const projects = [
  {
    id: 1,
    title: 'AlgoVista',
    subtitle: 'Interactive Algorithm Visualization Platform',
    tagline: 'Watch algorithms think in real-time',
    stack: ['React', 'TypeScript', 'Canvas API', 'GSAP'],
    description: 'Interactive platform for visualizing sorting, pathfinding, and graph algorithms with step-by-step animations',
    impact: '500+ users, educational tool adopted by CS students',
    problem: 'Computer Science students often struggle to conceptualize how complex algorithms execute step-by-step.',
    architecture: 'Built a custom rendering engine using HTML5 Canvas for performance. State management handles pause/play/step operations independently of the visualization layer. GSAP manages the smooth transitions between algorithm states.',
    challenges: [
      'Synchronizing state execution with animation frames',
      'Maintaining 60fps while rendering hundreds of nodes',
      'Creating a unified interface for wildly different algorithm types (graphs vs arrays)'
    ],
    githubUrl: '#',
    liveUrl: '#',
    hasVideo: true,
  },
  {
    id: 2,
    title: 'CareerOrbit.Tech',
    subtitle: 'AI-Powered Career Platform',
    tagline: 'Your AI co-pilot for career growth',
    stack: ['Next.js', 'Python', 'FastAPI', 'OpenAI', 'PostgreSQL', 'Vercel'],
    description: 'Analyzes resumes, generates interview prep, matches job descriptions, tracks career trajectory',
    impact: 'Helped 200+ job seekers, 85% interview success rate improvement',
    problem: 'Generic career advice fails to address individual gaps in experience compared to specific job requirements.',
    architecture: 'Microservices architecture with Next.js frontend and Python FastAPI backend for heavy AI processing. Integrates OpenAI API for NLP tasks, with PostgreSQL for user data and vector embeddings for semantic search.',
    challenges: [
      'Reducing latency for AI responses',
      'Structuring unstructured resume data reliably',
      'Ensuring AI feedback remained constructive and actionable'
    ],
    githubUrl: '#',
    liveUrl: '#',
    hasVideo: true,
  },
  {
    id: 3,
    title: 'Matrix Astronomy Platform',
    subtitle: 'Full Astronomy Management System',
    tagline: 'Managing the cosmos, one event at a time',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Express', 'TailwindCSS'],
    description: 'Complete platform for astronomy club management: event planning, member management, equipment tracking, observation logs, outreach coordination',
    impact: 'Used by 150+ astronomy enthusiasts, managed 50+ events',
    problem: 'Astronomy clubs rely on fragmented tools (spreadsheets, chat apps) to manage equipment, plan observation nights, and track celestial events.',
    architecture: 'Monolithic Express server with a React SPA. Includes a custom scheduling engine that factors in lunar phases and weather APIs to suggest optimal observation times.',
    challenges: [
      'Integrating with external astronomical APIs for real-time sky data',
      'Building an inventory system for shared, fragile telescope equipment',
      'Role-based access control for different club hierarchies'
    ],
    githubUrl: '#',
    liveUrl: '#',
    hasVideo: true,
  },

  {
    id: 5,
    title: 'EmoSense AI',
    subtitle: 'Real-time Emotion Recognition System',
    tagline: 'Machines that understand human emotion',
    stack: ['Python', 'TensorFlow', 'OpenCV', 'Flask', 'React'],
    description: 'Real-time facial emotion detection using CNN with webcam input, emotion timeline tracking, and sentiment analysis',
    impact: '89% accuracy on FER2013 dataset, demo featured in college symposium',
    problem: 'Human-computer interfaces lack contextual awareness of user frustration or confusion.',
    architecture: 'Lightweight Convolutional Neural Network trained on FER2013. The frontend captures WebRTC video streams, sends frames via WebSockets to a Flask server for continuous inference without overwhelming the client.',
    challenges: [
      'Achieving real-time inference (30fps) on standard CPUs',
      'Handling variable lighting conditions in webcam feeds',
      'Smoothing temporal predictions to prevent jittery classifications'
    ],
    githubUrl: '#',
    liveUrl: '#',
    hasVideo: true,
  },
];

export function Projects() {
  const containerRef = useScrollAnimation();
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-24 relative" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group text-sm"
          >
            <Github className="w-4 h-4" />
            <span>Swipe to explore → <span className="text-primary/70 group-hover:text-primary transition-colors underline underline-offset-2">more on GitHub</span></span>
          </a>
        </div>
        
        {/* Horizontal scroll container */}
        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 gap-6 snap-x snap-mandatory hide-scrollbar style-scrollbar">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="min-w-[85vw] md:min-w-[600px] flex-shrink-0 snap-center"
            >
              <div className="glass-panel group rounded-2xl overflow-hidden h-[450px] flex flex-col relative transition-all duration-500 hover:border-primary/50">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-card to-background z-0"></div>
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                
                <div className="p-8 relative z-10 flex flex-col h-full">
                  <div className="mb-4">
                    <h3 className="text-3xl font-bold font-display text-white mb-2">{project.title}</h3>
                    <p className="text-primary font-medium">{project.tagline}</p>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-auto">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs rounded bg-white/5 border border-white/10 text-white/70">
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="px-3 py-1 text-xs rounded bg-white/5 border border-white/10 text-white/50">
                        +{project.stack.length - 4} more
                      </span>
                    )}
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
                    <div className="text-sm text-muted-foreground">
                      <span className="text-white font-medium block">Impact</span>
                      <span className="line-clamp-1">{project.impact}</span>
                    </div>
                    
                    <Button 
                      onClick={() => setSelectedProject(project)}
                      className="shrink-0 bg-white text-black hover:bg-white/90"
                    >
                      View Case Study
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* GitHub CTA card — explore more */}
          <div className="min-w-[85vw] md:min-w-[340px] flex-shrink-0 snap-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="glass-panel group rounded-2xl overflow-hidden h-[450px] flex flex-col items-center justify-center gap-6 relative transition-all duration-500 hover:border-primary/50 cursor-pointer block"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10 flex flex-col items-center gap-6 px-8 text-center">
                <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/10 transition-all duration-300">
                  <Github className="w-10 h-10 text-white/60 group-hover:text-primary transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-xl font-bold text-white mb-2 font-display">See All Projects</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">More experiments, tools, and open source work live on GitHub</p>
                </div>
                <span className="text-primary text-sm font-medium group-hover:underline underline-offset-2">Visit GitHub Profile →</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}
