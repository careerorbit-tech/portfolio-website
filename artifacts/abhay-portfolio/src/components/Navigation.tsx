import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { name: 'About', href: '#about' },
  { name: 'Journey', href: '#journey' },
  { name: 'Arsenal', href: '#arsenal' },
  { name: 'Projects', href: '#projects' },
  { name: 'GitHub', href: '#github' },
  { name: 'Astronomy', href: '#astronomy' },
  { name: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = links.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 100; // offset

      let currentSection = '';
      sections.forEach((section) => {
        if (section && section instanceof HTMLElement) {
          if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
            currentSection = section.getAttribute('id') || '';
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#hero" onClick={(e) => handleClick(e, '#hero')} className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center bg-black/50 group-hover:border-primary transition-colors duration-300 shadow-[0_0_10px_rgba(0,212,255,0)] group-hover:shadow-[0_0_10px_rgba(0,212,255,0.4)]">
            <span className="font-display font-bold text-primary">AA</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-md rounded-full px-2 py-1 border border-white/10">
          {links.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  isActive ? 'text-primary-foreground' : 'text-muted-foreground hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </div>

        {/* Mobile menu button could go here */}
        <div className="md:hidden">
          <div className="w-8 h-8 rounded border border-white/20 flex items-center justify-center">
            {/* simple hamburger */}
            <div className="space-y-1">
              <div className="w-4 h-0.5 bg-white"></div>
              <div className="w-4 h-0.5 bg-white"></div>
              <div className="w-4 h-0.5 bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
