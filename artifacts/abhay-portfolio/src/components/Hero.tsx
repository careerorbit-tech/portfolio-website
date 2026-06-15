import { useEffect, useRef } from 'react';
import { useTypewriter } from '@/hooks/useTypewriter';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter, Code2, Database } from 'lucide-react';
import { motion } from 'framer-motion';
import { profileConfig } from '@/profileConfig';

function StarCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const STAR_COUNT = 220;
    const NEBULA_COUNT = 6;

    type Star = { x: number; y: number; r: number; alpha: number; speed: number; color: string };
    type Nebula = { x: number; y: number; rx: number; ry: number; color: string; alpha: number };

    const stars: Star[] = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.5 + 0.3,
      alpha: Math.random() * 0.6 + 0.2,
      speed: Math.random() * 0.3 + 0.05,
      color: Math.random() > 0.7 ? '#00d4ff' : Math.random() > 0.5 ? '#c4b5fd' : '#ffffff',
    }));

    const nebulae: Nebula[] = Array.from({ length: NEBULA_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      rx: Math.random() * 180 + 80,
      ry: Math.random() * 120 + 60,
      color: Math.random() > 0.5 ? '0,212,255' : '124,58,237',
      alpha: Math.random() * 0.06 + 0.02,
    }));

    let tick = 0;

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = '#050a14';
      ctx.fillRect(0, 0, width, height);

      nebulae.forEach(n => {
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.rx);
        grad.addColorStop(0, `rgba(${n.color},${n.alpha})`);
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.beginPath();
        ctx.ellipse(n.x, n.y, n.rx, n.ry, 0, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      stars.forEach((s, i) => {
        const twinkle = 0.5 + 0.5 * Math.sin(tick * 0.02 + i * 0.7);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = s.alpha * twinkle;
        ctx.shadowBlur = s.r > 1 ? 6 : 2;
        ctx.shadowColor = s.color;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;

        s.y -= s.speed * 0.15;
        if (s.y < -2) { s.y = height + 2; s.x = Math.random() * width; }
      });

      tick++;
      animationId = requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />;
}

export function Hero() {
  const { text, isTypingComplete } = useTypewriter({
    strings: [
      "Some people watch the future.",
      "I build it.",
      "Hi, I'm Abhay Ayare.",
    ],
    typingSpeed: 60,
    deletingSpeed: 30,
    pauseDuration: 1500,
  });

  const isComplete = isTypingComplete;

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <StarCanvas />

      <div className="z-10 relative flex flex-col items-center max-w-4xl px-4 text-center">
        <div className="min-h-[6rem] md:min-h-[8rem] flex items-end justify-center mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-[0_0_15px_rgba(0,212,255,0.3)] font-display">
            {text}
            <span className="animate-pulse text-primary">|</span>
          </h1>
        </div>

        {isComplete && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col items-center space-y-8"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse" />
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-primary/50 bg-[#050a14] flex items-center justify-center">
                {profileConfig.profileImage ? (
                  <img src={profileConfig.profileImage} alt={profileConfig.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white font-display">{profileConfig.initials}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="#projects">
                <Button
                  size="lg"
                  data-testid="button-view-work"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 shadow-[0_0_20px_rgba(0,212,255,0.4)] hover:shadow-[0_0_30px_rgba(0,212,255,0.6)] transition-all"
                >
                  View My Work
                </Button>
              </a>
              <a href="#contact">
                <Button
                  size="lg"
                  variant="outline"
                  data-testid="button-lets-talk"
                  className="border-secondary/60 text-white hover:bg-secondary/10 hover:border-secondary"
                >
                  Let's Talk
                </Button>
              </a>
              <a href="https://github.com/AbhayAyare" target="_blank" rel="noreferrer">
                <Button
                  size="lg"
                  variant="ghost"
                  data-testid="button-github"
                  className="text-muted-foreground hover:text-white"
                >
                  <Github className="mr-2 h-5 w-5" /> GitHub
                </Button>
              </a>
            </div>

            <div className="flex space-x-6 pt-2">
              {[
                { icon: <Github className="h-6 w-6" />, label: 'GitHub', href: 'https://github.com/AbhayAyare' },
                { icon: <Linkedin className="h-6 w-6" />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/abhay-ayare' },
                { icon: <Database className="h-6 w-6" />, label: 'Database', href: 'https://www.kaggle.com/abhayayare' },
                { icon: <Code2 className="h-6 w-6" />, label: 'LeetCode', href: 'https://leetcode.com/u/Abhay6116' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  data-testid={`link-${s.label.toLowerCase()}`}
                  className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
                >
                  <span className="sr-only">{s.label}</span>
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted-foreground"
      >
        <span className="text-xs uppercase tracking-widest mb-2 font-display">Scroll to explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
