import { useEffect, useState } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { profileConfig } from '@/profileConfig';

const Counter = ({ from = 0, to, duration = 2 }: { from?: number; to: number; duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      animate(count, to, { duration });
    }
  }, [inView, count, to, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

export function About() {
  const containerRef = useScrollAnimation();

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={containerRef}>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="glass-panel p-8 md:p-12 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative">
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border border-white/10 overflow-hidden relative z-10 bg-card/50 backdrop-blur-sm flex items-center justify-center">
                    {profileConfig.profileImage ? (
                      <img 
                        src={profileConfig.profileImage} 
                        alt={profileConfig.name} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-6xl text-muted-foreground font-display opacity-20">{profileConfig.initials}</span>
                    )}
                  </div>
                  {/* Decorative rings */}
                  <div className="absolute inset-0 border border-primary/30 rounded-full scale-110 animate-[spin_10s_linear_infinite]"></div>
                  <div className="absolute inset-0 border border-secondary/30 rounded-full scale-125 animate-[spin_15s_linear_infinite_reverse]"></div>
                </div>
              </div>
              
              <div className="w-full md:w-2/3 space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold font-display text-white">Meet {profileConfig.name.split(' ')[0]}</h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  {profileConfig.shortIntro}
                </p>
                
                <div className="flex flex-wrap gap-3 pt-4">
                  {profileConfig.keywords.map((keyword, i) => (
                    <span key={i} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_15px_rgba(0,212,255,0.4)] transition-all duration-300 cursor-default">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-white/10">
              {[
                { label: 'Years Experience', value: 3, suffix: '+' },
                { label: 'Projects Built', value: 10, suffix: '+' },
                { label: 'DSA Problems', value: 300, suffix: '+' },
                { label: 'Research Areas', value: 2, suffix: '+' }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-display">
                    <Counter to={stat.value} />{stat.suffix}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
