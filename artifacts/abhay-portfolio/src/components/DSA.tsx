import { useEffect, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { BarChart, Bar, XAxis, YAxis, Tooltip as RechartsTooltip, ResponsiveContainer, Cell } from 'recharts';
import { Code2, Trophy, Flame, Target, Award, Hexagon, Star } from 'lucide-react';

const categoryData = [
  { name: 'Arrays', count: 120 },
  { name: 'Strings', count: 85 },
  { name: 'DP', count: 65 },
  { name: 'Trees', count: 55 },
  { name: 'Graphs', count: 45 },
  { name: 'Math', count: 40 },
  { name: 'Greedy', count: 35 },
];

export function DSA() {
  const containerRef = useScrollAnimation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="dsa" className="py-24 relative overflow-hidden" ref={containerRef}>
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
            Solving the <span className="text-gradient">Unsolvable</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Competitive programming and data structures form the foundation of my problem-solving approach.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* LeetCode Card */}
          <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group hover:border-primary/40 transition-colors duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-bl-[100px] -z-10 group-hover:bg-yellow-500/20 transition-colors"></div>
            
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#FFA116]/10 flex items-center justify-center text-[#FFA116]">
                  <Code2 size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-display">LeetCode</h3>
                  <p className="text-sm text-[#FFA116] flex items-center gap-1 font-medium">
                    <Trophy size={14} /> Knight Badge
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-white">300<span className="text-muted-foreground text-xl">+</span></div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Solved</div>
              </div>
            </div>

            <div className="flex items-center gap-8 mb-8">
              {/* Fake circular progress */}
              <div className="relative w-32 h-32 shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#00b8a3" strokeWidth="8" strokeDasharray="283" strokeDashoffset="120" strokeLinecap="round" />
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#ffc01e" strokeWidth="8" strokeDasharray="283" strokeDashoffset="200" strokeLinecap="round" className="opacity-80" />
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#ef4743" strokeWidth="8" strokeDasharray="283" strokeDashoffset="250" strokeLinecap="round" className="opacity-90" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-white">300</span>
                  <span className="text-[10px] text-muted-foreground uppercase">Total</span>
                </div>
              </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-[#00b8a3]">Easy</span>
                    <span className="text-white font-medium">120</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-[#00b8a3]" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-[#ffc01e]">Medium</span>
                    <span className="text-white font-medium">140</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-[#ffc01e]" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-[#ef4743]">Hard</span>
                    <span className="text-white font-medium">40</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-[#ef4743]" style={{ width: '20%' }}></div>
                  </div>
                </div>
            </div>

            <div className="flex gap-2">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs font-medium text-white flex items-center gap-1.5">
                <Target size={12} className="text-[#FFA116]" /> Top 15% Globally
              </span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs font-medium text-white flex items-center gap-1.5">
                <Flame size={12} className="text-orange-500" /> 100 Day Streak
              </span>
            </div>
          </div>

          {/* HackerRank & Chart */}
          <div className="space-y-8">
            <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group hover:border-[#00EA64]/40 transition-colors duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00EA64]/5 rounded-bl-[100px] -z-10 group-hover:bg-[#00EA64]/10 transition-colors"></div>
              
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#00EA64]/10 flex items-center justify-center text-[#00EA64]">
                    <Hexagon size={24} className="rotate-90" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white font-display">HackerRank</h3>
                    <div className="flex gap-1 text-[#00EA64] mt-1">
                      {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {['Algorithms', 'Data Structures', 'Python'].map((badge) => (
                  <div key={badge} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 group-hover:border-white/10 transition-colors">
                    <span className="text-sm font-medium text-white">{badge}</span>
                    <span className="flex items-center gap-1.5 text-xs text-yellow-500 font-bold bg-yellow-500/10 px-2 py-1 rounded">
                      <Award size={12} /> Gold Badge
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl h-[220px] flex flex-col">
              <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Top Topics</h3>
              <div className="flex-1 min-h-[120px]">
                {mounted && (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={categoryData} layout="vertical" margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                      <XAxis type="number" hide />
                      <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fill: '#8b949e', fontSize: 12 }} width={80} />
                      <RechartsTooltip 
                        cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                        contentStyle={{ backgroundColor: 'rgba(5, 10, 20, 0.9)', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}
                        itemStyle={{ color: '#00d4ff' }}
                      />
                      <Bar dataKey="count" radius={[0, 4, 4, 0]}>
                        {categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={`hsl(191, 100%, ${Math.max(30, 70 - index * 5)}%)`} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
