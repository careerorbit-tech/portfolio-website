import { useEffect, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { GitCommit, Star, GitFork, BookOpen, GitMerge, Terminal } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Total Commits', value: 1250, suffix: '+' },
  { label: 'Repositories', value: 45, suffix: '' },
  { label: 'Stars Earned', value: 120, suffix: '+' },
  { label: 'Contributions', value: 850, suffix: '' },
];

const languageData = [
  { name: 'JavaScript', value: 35, color: '#f1e05a' },
  { name: 'Python', value: 30, color: '#3572A5' },
  { name: 'TypeScript', value: 20, color: '#3178c6' },
  { name: 'Other', value: 15, color: '#8b949e' },
];

const topRepos = [
  { name: 'AstroVision', desc: 'Computer vision for astronomical objects using PyTorch', stars: 45, forks: 12, lang: 'Python', color: '#3572A5' },
  { name: 'CareerOrbit', desc: 'AI-Powered Career Platform built with Next.js', stars: 32, forks: 8, lang: 'TypeScript', color: '#3178c6' },
  { name: 'AlgoVista', desc: 'Interactive Algorithm Visualization Platform', stars: 28, forks: 5, lang: 'TypeScript', color: '#3178c6' },
  { name: 'Matrix-Platform', desc: 'Astronomy club management system', stars: 15, forks: 3, lang: 'JavaScript', color: '#f1e05a' },
];

const activityFeed = [
  { msg: 'feat: add yolov8 inference pipeline', repo: 'AstroVision', time: '2 hours ago' },
  { msg: 'fix: resolve race condition in animation loop', repo: 'AlgoVista', time: '1 day ago' },
  { msg: 'docs: update architecture diagrams', repo: 'CareerOrbit', time: '2 days ago' },
  { msg: 'feat: implement OAuth2 providers', repo: 'Matrix-Platform', time: '4 days ago' },
  { msg: 'chore: bump dependencies', repo: 'AstroVision', time: '1 week ago' },
];

export function GitHub() {
  const containerRef = useScrollAnimation();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Generate fake contribution graph data
  const weeks = 52;
  const daysPerWeek = 7;
  const totalDays = weeks * daysPerWeek;
  
  const contribData = Array.from({ length: totalDays }, () => {
    // Weight towards 0 and 1, with occasional higher values
    const rand = Math.random();
    if (rand < 0.6) return 0;
    if (rand < 0.8) return 1;
    if (rand < 0.95) return 2;
    return 3;
  });

  const getIntensityColor = (level: number) => {
    switch(level) {
      case 0: return 'bg-white/5 border border-white/5';
      case 1: return 'bg-primary/30 border border-primary/20';
      case 2: return 'bg-primary/60 border border-primary/40';
      case 3: return 'bg-primary border border-primary';
      default: return 'bg-white/5';
    }
  };

  return (
    <section id="github" className="py-24 relative" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-16 text-center">
          Building in <span className="text-gradient">Public</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Left Column: Stats & Chart */}
          <div className="lg:col-span-1 space-y-8">
            <div className="glass-panel p-6 rounded-2xl grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-white mb-1 font-display">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="glass-panel p-6 rounded-2xl h-[280px] flex flex-col">
              <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
                <Terminal size={16} className="text-primary" /> Languages
              </h3>
              <div className="flex-1 min-h-[150px]">
                {mounted && (
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={languageData}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={70}
                        paddingAngle={5}
                        dataKey="value"
                        stroke="none"
                      >
                        {languageData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        formatter={(value) => `${value}%`}
                        contentStyle={{ backgroundColor: 'rgba(5, 10, 20, 0.9)', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}
                        itemStyle={{ color: '#fff' }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                )}
              </div>
              <div className="flex flex-wrap gap-3 justify-center mt-2">
                {languageData.map(lang => (
                  <div key={lang.name} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: lang.color }}></span>
                    {lang.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Repos & Activity */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contribution Graph */}
            <div className="glass-panel p-6 rounded-2xl overflow-hidden">
              <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
                <GitCommit size={16} className="text-primary" /> 850 contributions in the last year
              </h3>
              <div className="overflow-x-auto pb-4 hide-scrollbar">
                <div className="min-w-[700px]">
                  <div className="flex gap-1.5 flex-col h-[110px] flex-wrap justify-start items-start align-start">
                    {contribData.map((level, i) => (
                      <div 
                        key={i} 
                        className={`w-3 h-3 rounded-sm ${getIntensityColor(level)}`}
                        title="Contribution"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Repos */}
              <div className="space-y-4">
                <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
                  <BookOpen size={16} className="text-primary" /> Top Repositories
                </h3>
                {topRepos.map((repo, i) => (
                  <motion.a 
                    key={i}
                    href="#"
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="block p-4 rounded-xl glass-panel hover:border-primary/30 transition-colors group"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-white group-hover:text-primary transition-colors">{repo.name}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{repo.desc}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: repo.color }}></span>
                        {repo.lang}
                      </span>
                      <span className="flex items-center gap-1"><Star size={12} /> {repo.stars}</span>
                      <span className="flex items-center gap-1"><GitFork size={12} /> {repo.forks}</span>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Activity Feed */}
              <div className="glass-panel p-6 rounded-2xl">
                <h3 className="font-bold text-white mb-6 text-sm uppercase tracking-wider flex items-center gap-2">
                  <GitMerge size={16} className="text-primary" /> Latest Activity
                </h3>
                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                  {activityFeed.map((item, i) => (
                    <div key={i} className="relative flex items-start gap-4">
                      <div className="relative z-10 w-5 h-5 rounded-full bg-card border-2 border-primary mt-0.5 flex-shrink-0 shadow-[0_0_10px_rgba(0,212,255,0.3)]"></div>
                      <div>
                        <p className="text-sm font-medium text-white break-words">{item.msg}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                          <span className="text-primary/70">{item.repo}</span>
                          <span>•</span>
                          <span>{item.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <a href="#" className="mt-8 block w-full text-center py-3 rounded-lg border border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-colors font-medium">
                  Follow my journey on GitHub →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
