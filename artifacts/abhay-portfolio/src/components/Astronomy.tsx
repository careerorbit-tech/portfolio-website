import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Telescope, MapPin, Users, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const events = [
  { title: "Perseid Meteor Shower Night", date: "Aug 2023", desc: "Coordinated observation and photography sessions for the annual meteor shower.", attendees: "200+ attendees" },
  { title: "Solar Eclipse Observation", date: "Oct 2023", desc: "Safe public viewing setup with solar filters and educational presentations.", attendees: "300+ attendees" },
  { title: "Messier Marathon", date: "Mar 2024", desc: "All-night challenge to observe as many Messier objects as possible.", attendees: "80 participants" },
  { title: "Astrophotography Workshop", date: "Jul 2024", desc: "Hands-on training for capturing deep sky objects with DSLR cameras.", attendees: "50 participants" },
  { title: "Deep Sky Object Night", date: "Nov 2024", desc: "Dark sky excursion focused on galaxies and nebulae observation.", attendees: "120 attendees" },
];

const gallery = [
  { title: 'Orion Nebula (M42)', color: 'from-pink-500/20 to-purple-600/40' },
  { title: 'Andromeda Galaxy (M31)', color: 'from-blue-500/20 to-cyan-500/40' },
  { title: 'Jupiter Transit', color: 'from-orange-400/20 to-amber-600/40' },
  { title: 'Milky Way Core', color: 'from-indigo-600/30 to-purple-800/50' },
  { title: 'Lunar Eclipse', color: 'from-red-500/20 to-orange-600/40' },
  { title: 'Saturn Opposition', color: 'from-yellow-400/20 to-yellow-600/40' },
];

export function Astronomy() {
  const containerRef = useScrollAnimation();

  return (
    <section id="astronomy" className="py-32 relative bg-[#02050A]" ref={containerRef}>
      {/* CSS Constellation Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <g stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="white">
            <circle cx="150" cy="200" r="2" />
            <circle cx="250" cy="350" r="3" className="animate-pulse" />
            <circle cx="180" cy="500" r="1.5" />
            <circle cx="300" cy="450" r="2.5" />
            <path d="M 150 200 L 250 350 L 300 450 L 180 500 Z" fill="none" />

            <circle cx="700" cy="150" r="2" />
            <circle cx="850" cy="250" r="3" className="animate-pulse" />
            <circle cx="800" cy="400" r="2" />
            <circle cx="650" cy="350" r="1.5" />
            <path d="M 700 150 L 850 250 L 800 400 L 650 350 Z" fill="none" />

            <circle cx="500" cy="700" r="3" className="animate-pulse" />
            <circle cx="400" cy="850" r="2" />
            <circle cx="600" cy="800" r="2" />
            <circle cx="550" cy="950" r="1.5" />
            <path d="M 500 700 L 400 850 L 550 950 L 600 800 Z" fill="none" />
          </g>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <ToscopeIcon className="w-12 h-12 text-primary mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
            The Sky is <span className="text-gradient">Not the Limit</span>
          </h2>
          <blockquote className="text-xl md:text-2xl text-muted-foreground italic font-serif leading-relaxed">
            "Every time I look through a telescope, I'm reminded why I build software — to help humanity understand more, reach further, and wonder deeper."
          </blockquote>
        </div>

        <div className="glass-panel p-8 md:p-12 rounded-2xl mb-16 border-primary/20 bg-background/60">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Users className="text-primary" /> Building Astronomy Communities
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded and led the astronomy club, organized 30+ stargazing events, introduced 500+ students to observational astronomy, and partnered with regional science organizations for outreach programs.
              </p>
            </div>
            <div className="w-full md:w-1/3 flex justify-center md:justify-end gap-4 text-center">
               <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                 <div className="text-3xl font-bold text-white mb-1">30+</div>
                 <div className="text-xs text-muted-foreground uppercase">Events</div>
               </div>
               <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                 <div className="text-3xl font-bold text-white mb-1">500+</div>
                 <div className="text-xs text-muted-foreground uppercase">Students</div>
               </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Events List */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-widest text-sm flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" /> Key Observations
            </h3>
            <div className="space-y-4">
              {events.map((event, i) => (
                <div key={i} className="p-5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-primary/30 transition-colors group">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-white group-hover:text-primary transition-colors">{event.title}</h4>
                    <span className="text-xs font-mono text-secondary px-2 py-1 bg-secondary/10 rounded">{event.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{event.desc}</p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Users size={12} className="mr-1" /> {event.attendees}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Astrophotography Gallery Placeholder */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-widest text-sm flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" /> Cosmic Gallery
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {gallery.map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square rounded-xl overflow-hidden relative group cursor-pointer border border-white/10"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} mix-blend-screen opacity-80 group-hover:opacity-100 transition-opacity`}></div>
                  <div className="absolute inset-0 bg-[#050a14] -z-10"></div>
                  
                  {/* Fake stars inside the image box */}
                  <div className="absolute inset-0 opacity-50">
                    <div className="w-1 h-1 bg-white rounded-full absolute top-[20%] left-[30%] shadow-[0_0_5px_#fff]"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-full absolute top-[60%] left-[70%] shadow-[0_0_8px_#fff]"></div>
                    <div className="w-0.5 h-0.5 bg-white rounded-full absolute top-[40%] left-[50%]"></div>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                    <h4 className="text-sm font-bold text-white translate-y-2 group-hover:translate-y-0 opacity-80 group-hover:opacity-100 transition-all">{item.title}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ToscopeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44" />
      <path d="m13.56 11.747 4.332-.924" />
      <path d="m16 21-3.105-6.21" />
      <path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z" />
      <path d="m6.158 13.325 1.54 6.159" />
      <path d="m8 22 4-1.5" />
      <path d="M9 8.36 5.14 9e-5" />
    </svg>
  );
}
