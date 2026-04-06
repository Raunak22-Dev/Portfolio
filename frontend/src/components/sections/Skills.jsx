export default function Skills() {
  const domains = [
    { 
      title: "Frontend Engineering", 
      icon: "web",
      color: "text-primary",
      bgBorder: "hover:border-primary/40 hover:shadow-[0_0_30px_rgba(186,158,255,0.15)]",
      description: "Crafting fluid, highly-responsive, and accessible user interfaces.",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion"] 
    },
    { 
      title: "Backend Architecture", 
      icon: "dns",
      color: "text-secondary",
      bgBorder: "hover:border-secondary/40 hover:shadow-[0_0_30px_rgba(83,221,252,0.15)]",
      description: "Designing scalable REST APIs and secure, robust server-side logic.",
      skills: ["Node.js", "Express", "Python", "FastAPI", "WebSockets", "GraphQL"] 
    },
    { 
      title: "Data & Cloud", 
      icon: "cloud_sync",
      color: "text-tertiary",
      bgBorder: "hover:border-tertiary/40 hover:shadow-[0_0_30px_rgba(255,132,57,0.15)]",
      description: "Managing seamless data pipelines and automated global deployments.",
      skills: [, "MongoDB", "Redis", "Docker", "AWS EBS", "CI/CD Actions"] 
    },
    { 
      title: "Core Programming", 
      icon: "code_blocks",
      color: "text-[#a3e635]",
      bgBorder: "hover:border-[#a3e635]/40 hover:shadow-[0_0_30px_rgba(163,230,53,0.15)]",
      description: "Applying strong foundational knowledge in data structures and OOP paradigms.",
      skills: ["JavaScript","Python",] 
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
        <h2 className="font-headline text-4xl md:text-5xl font-black text-on-surface mb-6 tracking-tight">Technical Arsenal</h2>
        <p className="text-on-surface-variant text-base md:text-lg">A categorized overview of the languages, frameworks, and infrastructure tools I use to bring complex ideas to life.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 relative z-20">
        {domains.map((domain, idx) => (
          <div key={idx} className={`glass-card rounded-3xl p-6 md:p-8 border border-outline-variant/10 shadow-xl group transition-all duration-500 cursor-default relative overflow-hidden backdrop-blur-2xl bg-surface-container-low/40 ${domain.bgBorder}`}>
            
            {/* Ambient Background Glow on Hover */}
            <div className={`absolute top-[-50%] right-[-10%] w-64 h-64 opacity-0 blur-[80px] rounded-full transition-opacity duration-700 pointer-events-none group-hover:opacity-20 ${domain.color.replace('text-', 'bg-')}`}></div>
            
            <div className="flex items-center gap-5 mb-6 relative z-10">
              <div className={`w-14 h-14 rounded-2xl bg-surface-container-high border border-outline-variant/20 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500 ${domain.color}`}>
                <span className="material-symbols-outlined text-[28px]">{domain.icon}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold font-headline text-on-surface group-hover:text-white transition-colors">{domain.title}</h3>
            </div>
            
            <p className="text-sm md:text-base text-on-surface-variant mb-8 relative z-10 leading-relaxed">{domain.description}</p>
            
            <div className="flex flex-wrap gap-2.5 relative z-10">
              {domain.skills.map((skill, i) => (
                <span key={i} className="px-3.5 py-1.5 bg-background/80 backdrop-blur-md border border-outline-variant/30 rounded-lg text-xs md:text-sm font-bold text-slate-300 shadow-sm group-hover:border-outline-variant/50 group-hover:text-white transition-colors duration-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Infinite scrolling marquee with hover toggle */}
      <div className="mt-16 md:mt-24 relative flex group cursor-default w-full overflow-hidden bg-surface-container-low/50 py-6 md:py-8 backdrop-blur-sm rounded-3xl border border-outline-variant/10 shadow-lg">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none rounded-l-3xl"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none rounded-r-3xl"></div>
        
        <div className="flex animate-infinite-scroll group-hover:[animation-play-state:paused] whitespace-nowrap min-w-max transition-all duration-300">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12 md:gap-20 px-6 md:px-10 items-center">
              <span className="text-xl md:text-2xl font-bold font-headline text-on-surface-variant opacity-70 group-hover:opacity-100 group-hover:text-primary transition-all duration-300">React</span>
              <span className="material-symbols-outlined text-secondary opacity-30 group-hover:opacity-100 group-hover:animate-pulse text-sm transition-opacity duration-300">emergency</span>
              
              <span className="text-xl md:text-2xl font-bold font-headline text-on-surface-variant opacity-70 group-hover:opacity-100 group-hover:text-secondary transition-all duration-300">Node.js</span>
              <span className="material-symbols-outlined text-secondary opacity-30 group-hover:opacity-100 group-hover:animate-pulse text-sm transition-opacity duration-300">emergency</span>
              
              <span className="text-xl md:text-2xl font-bold font-headline text-on-surface-variant opacity-70 group-hover:opacity-100 group-hover:text-tertiary transition-all duration-300">Python</span>
              <span className="material-symbols-outlined text-secondary opacity-30 group-hover:opacity-100 group-hover:animate-pulse text-sm transition-opacity duration-300">emergency</span>
              
              <span className="text-xl md:text-2xl font-bold font-headline text-on-surface-variant opacity-70 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300">Tailwind CSS</span>
              <span className="material-symbols-outlined text-secondary opacity-30 group-hover:opacity-100 group-hover:animate-pulse text-sm transition-opacity duration-300">emergency</span>
              
              <span className="text-xl md:text-2xl font-bold font-headline text-on-surface-variant opacity-70 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300">Docker</span>
              <span className="material-symbols-outlined text-secondary opacity-30 group-hover:opacity-100 group-hover:animate-pulse text-sm transition-opacity duration-300">emergency</span>
              
              <span className="text-xl md:text-2xl font-bold font-headline text-on-surface-variant opacity-70 group-hover:opacity-100 group-hover:text-primary transition-all duration-300">SQL & NoSQL</span>
              <span className="material-symbols-outlined text-secondary opacity-30 group-hover:opacity-100 group-hover:animate-pulse text-sm transition-opacity duration-300">emergency</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
