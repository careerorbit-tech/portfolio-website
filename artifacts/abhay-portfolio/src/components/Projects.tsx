import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from './ui/button';
import { ExternalLink, Play, Github } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

export const projects = [
  {
    id: 1,
    title: "AlgoVista",
    tagline: "Watch algorithms think in real-time",
    description:
      "Interactive DSA learning platform with step-by-step visualization of 14+ sorting & searching algorithms using HTML5 Canvas.",
    stack: ["React", "TypeScript", "Canvas API", "Node.js", "Docker"],
    impact: "Real-time playback controls with pseudocode sync",
    liveUrl: "https://dsa-visualizer-algo-vista.vercel.app",
    hasCaseStudy: false,
    videoUrl: "/video/AlgoVista__Under_the_Hood.mp4",
    posterUrl:
      "/images/AlgoVista.png",
    taglineColor: "#22d3ee",
  },
  {
    id: 2,
    title: "CareerOrbit.Tech",
    tagline: "Your AI co-pilot for career growth",
    description:
      "Full-stack SPA with searchable job listings, auth via Passport.js, and type-safe API handling with Drizzle ORM and Zod.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Passport.js"],
    impact: "Helped 200+ job seekers, 85% interview success rate",
    liveUrl: "https://careerorbit-tech.vercel.app",
    hasCaseStudy: false,
    videoUrl: "/video/CareerOrbit_Frontend.mp4",
    posterUrl:
      "/images/careerOrbit.png",
    taglineColor: "#a78bfa",
  },
  {
    id: 3,
    title: "Matrix Club Platform",
    tagline: "Space science, built for the community",
    description:
      "Official full-stack SPA for an astronomical club with real-time lunar phase badge, Framer Motion animations, and local SEO.",
    stack: ["React", "TypeScript", "PostgreSQL", "Tailwind CSS", "Vercel"],
    impact: "Community platform for Kolhapur astronomy events",
    liveUrl: "https://www.kolhapurstargazing.in",
    hasCaseStudy: false,
    videoUrl: "/video/Cosmic_Horizon_Tech_Stack.mp4",
    posterUrl:
      "/images/Matrix_poster.png",
    taglineColor: "#34d399",
  },
  {
    id: 4,
    title: "EmoSense-AI",
    tagline: "Real-time multimodal emotion recognition",
    description:
      "End-to-end AI system fusing facial & speech emotion detection via EfficientNet + Wav2Vec2, deployed with Streamlit and YOLOv8.",
    stack: ["Python", "PyTorch", "YOLOv8", "Wav2Vec2", "Streamlit"],
    impact: "Audio-visual fusion on FER2013, RAVDESS & AffectNet",
    liveUrl: "https://github.com/AbhayAyare/-EmoSense-AI",
    hasCaseStudy: false,
    videoUrl: "/video/EmoSense-AI_System.mp4",
    posterUrl:
      "/images/Emosense-AI.png",
    taglineColor: "#fbbf24",
  },
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl w-full flex flex-col overflow-hidden transition-all duration-300 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(139,92,246,0.1)] relative group h-full">
        {/* Video Thumbnail Area */}
        <div 
          className="w-full h-[180px] sm:h-[220px] relative bg-black shrink-0 overflow-hidden cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <img
            src={project.posterUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 bg-black/40 group-hover:bg-black/20">
            <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer shadow-xl hover:scale-110 transition-transform">
              <Play className="w-6 h-6 text-black ml-1 fill-black" />
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 flex flex-col h-full relative flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-white font-bold text-2xl leading-tight">{project.title}</h3>
          <a href={project.liveUrl} className="text-white/40 hover:text-white transition-colors mt-1 p-1 hover:bg-white/10 rounded-md">
            <ExternalLink size={18} />
          </a>
        </div>

        <p className="text-[#8b5cf6] text-sm font-medium mb-3">{project.tagline}</p>

        <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map(tech => (
            <span key={tech} className="bg-white/5 text-white/90 border border-white/10 px-2.5 py-1 rounded-full text-[11px] font-medium tracking-wide">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-4 mt-auto">
          {/* Impact Section */}
          <div className="pt-4 border-t border-white/10">
            <p className="text-[#d9f99d] text-[11px] font-bold uppercase tracking-wider mb-1.5">Impact</p>
            <p className="text-white/80 text-xs leading-relaxed">{project.impact}</p>
          </div>

          {/* Case Study Button */}
          {project.hasCaseStudy && (
            <Button
              variant="outline"
              className="w-full bg-transparent border-white/20 text-white hover:bg-white hover:text-black transition-colors text-sm py-5 rounded-xl font-medium"
            >
              View Case Study
            </Button>
          )}
        </div>
        </div>
      </div>

      {/* Video Popup Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-white/10">
          <DialogTitle className="sr-only">{project.title} Video</DialogTitle>
          <div className="relative pt-[56.25%] w-full">
            {isModalOpen && (
              <video
                src={project.videoUrl}
                poster={project.posterUrl}
                className="absolute top-0 left-0 w-full h-full object-contain"
                controls
                autoPlay
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export function Projects() {
  const containerRef = useScrollAnimation();

  return (
    <section id="projects" className="py-24 md:py-32 relative bg-[#0d0d0d]" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tight mb-4">
              <span className="text-white">Featured</span> <span className="text-[#8b5cf6]">Projects</span>
            </h2>
            <p className="text-white/60 text-lg">
              A selection of my recent work, showcasing innovative solutions and impactful results.
            </p>
          </div>
        </div>

        {/* Grid container for perfectly fitting 4 projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* GitHub Link at the end */}
        <div className="flex justify-center mt-12">
          <a
            href="https://github.com/AbhayAyare"
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 hover:border-white/20 rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:bg-white/10"
          >
            <Github size={20} className="text-white" />
            <span className="text-white font-medium">Explore more on GitHub</span>
            <ExternalLink size={16} className="text-white/50 group-hover:text-white transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
}
