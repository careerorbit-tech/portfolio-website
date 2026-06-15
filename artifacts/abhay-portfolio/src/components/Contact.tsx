import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Mail, MapPin, CalendarDays, Github, Linkedin, Twitter, Code2, Send, Database } from 'lucide-react';

export function Contact() {
  const containerRef = useScrollAnimation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Fake submit
    setTimeout(() => setIsSubmitting(false), 1500);
  };

  return (
    <section id="contact" className="min-h-screen py-24 flex flex-col justify-between relative overflow-hidden bg-[#02050A]" ref={containerRef}>
      {/* Background stars */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex-1 flex flex-col justify-center">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-white mb-6 drop-shadow-md">
            Let's Build Something <br className="hidden md:block" />
            <span className="text-gradient">Extraordinary</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether it's an AI system, a web platform, or just a fascinating conversation about black holes — I'm in.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto w-full">
          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-8 flex flex-col justify-center">
            <div className="glass-panel p-8 rounded-2xl space-y-8 border-white/5">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Email</div>
                  <a href="mailto:abhayayare@email.com" className="text-lg font-medium text-white hover:text-primary transition-colors">
                    abhayayare@email.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Location</div>
                  <div className="text-lg font-medium text-white">India</div>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                  <CalendarDays size={20} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Status</div>
                  <div className="text-lg font-medium text-white">Available for opportunities</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              {[
                { icon: <Github size={24} />, href: "https://github.com/AbhayAyare" },
                { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/abhay-ayare" },
                { icon: <Database size={24} />, href: "https://www.kaggle.com/abhayayare" },
                { icon: <Code2 size={24} />, href: "https://leetcode.com/u/Abhay6116" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-14 h-14 rounded-full glass-panel flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-panel p-8 md:p-10 rounded-2xl border-white/5 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Name</label>
                  <Input id="name" required className="bg-black/50 border-white/10 focus-visible:ring-primary h-12" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email</label>
                  <Input id="email" type="email" required className="bg-black/50 border-white/10 focus-visible:ring-primary h-12" placeholder="john@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Subject</label>
                <Select defaultValue="collab">
                  <SelectTrigger className="bg-black/50 border-white/10 focus:ring-primary h-12 text-white">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-white/10 text-white">
                    <SelectItem value="job">Job Opportunity</SelectItem>
                    <SelectItem value="collab">Collaboration</SelectItem>
                    <SelectItem value="research">Research Discussion</SelectItem>
                    <SelectItem value="hi">Just saying Hi</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</label>
                <Textarea
                  id="message"
                  required
                  className="bg-black/50 border-white/10 focus-visible:ring-primary min-h-[150px] resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 text-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] gap-2"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <Send size={18} />}
              </Button>
            </form>
          </div>
        </div>
      </div>

      <footer className="w-full border-t border-white/5 py-8 mt-24 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm font-medium">
            Abhay Ayare © 2025 · Built with React, Three.js & a passion for the cosmos
          </p>
          <p className="text-white/30 text-xs mt-2 uppercase tracking-widest">Designed to inspire</p>
        </div>
      </footer>
    </section>
  );
}
