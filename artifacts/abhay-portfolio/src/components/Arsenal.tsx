import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer,
  SiNodedotjs, SiExpress, SiPython, SiFastapi,
  SiPostgresql, SiMongodb, SiRedis, SiDrizzle,
  SiTensorflow, SiPytorch, SiOpencv, SiScikitlearn,
  SiDocker, SiGit, SiGithubactions, SiLinux, SiVercel
} from 'react-icons/si';

const skills = {
  frontend: [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Framer Motion', icon: SiFramer, color: '#0055FF' },
  ],
  backend: [
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Express', icon: SiExpress, color: '#000000' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
  ],
  database: [
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'Redis', icon: SiRedis, color: '#DC382D' },
    { name: 'Drizzle ORM', icon: SiDrizzle, color: '#C5F74F' },
  ],
  aiml: [
    { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
    { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
    { name: 'OpenCV', icon: SiOpencv, color: '#5C3EE8' },
    { name: 'Scikit-learn', icon: SiScikitlearn, color: '#F7931E' },
  ],
  devops: [
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' },
    { name: 'Linux', icon: SiLinux, color: '#FCC624' },
    { name: 'Vercel', icon: SiVercel, color: '#000000' },
  ]
};

export function Arsenal() {
  const containerRef = useScrollAnimation();

  return (
    <section id="arsenal" className="py-24 relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-16 text-center">
          My <span className="text-gradient">Arsenal</span>
        </h2>
        
        {/* Mobile grid view */}
        <div className="md:hidden space-y-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="glass-panel p-6 rounded-xl">
              <h3 className="text-sm uppercase tracking-widest text-primary mb-4 border-b border-white/10 pb-2">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full border border-white/10">
                    <skill.icon style={{ color: skill.color === '#000000' ? '#fff' : skill.color }} />
                    <span className="text-sm text-white">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Orbit View - simplified via CSS for now */}
        <div className="hidden md:flex justify-center items-center relative h-[800px] w-full max-w-4xl mx-auto">
          {/* Rings */}
          {[1, 2, 3, 4, 5].map((ring) => (
            <div 
              key={ring} 
              className="absolute rounded-full border border-white/5"
              style={{
                width: `${ring * 150 + 100}px`,
                height: `${ring * 150 + 100}px`,
              }}
            />
          ))}

          {/* Core */}
          <div className="absolute z-10 w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary p-[2px] shadow-[0_0_30px_rgba(0,212,255,0.4)] animate-pulse">
            <div className="w-full h-full bg-background rounded-full flex items-center justify-center p-4 text-center">
              <span className="font-bold text-white leading-tight">Full Stack<br/>AI Engineer</span>
            </div>
          </div>

          {/* Simulate planets on rings - simplified approach using grid since full math orbiting needs significant code */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Just render them scattered for now or we can use fixed positioning */}
            <div className="w-full h-full relative">
              {Object.entries(skills).map(([category, items], catIdx) => {
                const ringRadius = (catIdx + 1) * 75 + 50; // pixels
                return items.map((skill, i) => {
                  const angle = (i / items.length) * Math.PI * 2 + (catIdx * 0.5);
                  const x = Math.cos(angle) * ringRadius;
                  const y = Math.sin(angle) * ringRadius;
                  
                  return (
                    <div 
                      key={skill.name}
                      className="absolute top-1/2 left-1/2 w-12 h-12 -ml-6 -mt-6 rounded-full bg-card border border-white/10 flex items-center justify-center pointer-events-auto hover:scale-125 hover:z-20 transition-transform duration-300 group cursor-pointer"
                      style={{
                        transform: `translate(${x}px, ${y}px)`,
                        boxShadow: `0 0 15px ${skill.color}30`
                      }}
                    >
                      <skill.icon size={20} style={{ color: skill.color === '#000000' ? '#fff' : skill.color }} />
                      
                      {/* Tooltip */}
                      <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-black/90 border border-white/20 px-3 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                        {skill.name}
                      </div>
                    </div>
                  );
                });
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
