export default function Skills() {
  const domains = [
    { 
      title: "Data Analytics", icon: "query_stats",
      styles: { text: "text-primary", bg: "bg-primary", border: "hover:border-primary/40", shadow: "hover:shadow-[0_0_30px_rgba(186,158,255,0.15)]" },
      description: "Extracting actionable insights and building comprehensive data pipelines.", skills: ["Python", "MySQL", "Power BI"] 
    },
    { 
      title: "Frontend", icon: "web",
      styles: { text: "text-secondary", bg: "bg-secondary", border: "hover:border-secondary/40", shadow: "hover:shadow-[0_0_30px_rgba(83,221,252,0.15)]" },
      description: "Crafting fluid, highly-responsive, and aesthetic user interfaces.", skills: ["HTML", "Tailwind CSS", "React.js"] 
    },
    { 
      title: "Backend", icon: "dns",
      styles: { text: "text-tertiary", bg: "bg-tertiary", border: "hover:border-tertiary/40", shadow: "hover:shadow-[0_0_30px_rgba(255,132,57,0.15)]" },
      description: "Designing scalable REST APIs and secure server-side logic.", skills: ["Node.js", "Express.js"] 
    },
    { 
      title: "Database", icon: "database",
      styles: { text: "text-[#a3e635]", bg: "bg-[#a3e635]", border: "hover:border-[#a3e635]/40", shadow: "hover:shadow-[0_0_30px_rgba(163,230,53,0.15)]" },
      description: "Architecting efficient data storage, retrieval, and schema designs.", skills: ["MongoDB"] 
    },
    { 
      title: "Programming Languages", icon: "code_blocks",
      styles: { text: "text-[#f43f5e]", bg: "bg-[#f43f5e]", border: "hover:border-[#f43f5e]/40", shadow: "hover:shadow-[0_0_30px_rgba(244,63,94,0.15)]" },
      description: "Applying strong foundational knowledge in programmatic logic.", skills: ["JavaScript"] 
    },
    { 
      title: "Tools & Version Control", icon: "account_tree",
      styles: { text: "text-[#facc15]", bg: "bg-[#facc15]", border: "hover:border-[#facc15]/40", shadow: "hover:shadow-[0_0_30px_rgba(250,204,21,0.15)]" },
      description: "Ensuring code reliability and collaborative project management.", skills: ["Git", "GitHub"] 
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
        <h2 className="font-headline text-4xl md:text-5xl font-black text-on-surface mb-6 tracking-tight">Technical Arsenal</h2>
        <p className="text-on-surface-variant text-base md:text-lg">A categorized overview of the languages, frameworks, and infrastructure tools I use to bring complex ideas to life.</p>
      </div>

      {/* Infinite scrolling marquee with hover toggle */}
      <div className="mb-16 md:mb-20 relative flex group cursor-default w-full overflow-hidden bg-surface-container-low/50 py-6 md:py-8 backdrop-blur-sm rounded-3xl border border-outline-variant/10 shadow-lg">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none rounded-l-3xl"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none rounded-r-3xl"></div>
        
        <div className="flex animate-infinite-scroll group-hover:[animation-play-state:paused] whitespace-nowrap min-w-max transition-all duration-300">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12 md:gap-20 px-6 md:px-10 items-center">
              {[
                { name: "Python", hover: "text-primary" },
                { name: "Power BI", hover: "text-secondary" },
                { name: "React.js", hover: "text-tertiary" },
                { name: "Node.js", hover: "text-primary" },
                { name: "MongoDB", hover: "-translate-y-1" },
                { name: "MySQL", hover: "text-secondary" },
                { name: "Tailwind CSS", hover: "-translate-y-1" }
              ].map((skill, idx) => [
                <span key={`text-${idx}`} className={`text-xl md:text-2xl font-bold font-headline text-on-surface-variant opacity-70 group-hover:opacity-100 group-hover:${skill.hover} transition-all duration-300`}>
                  {skill.name}
                </span>,
                <span key={`icon-${idx}`} className="material-symbols-outlined text-secondary opacity-30 group-hover:opacity-100 group-hover:animate-pulse text-sm transition-opacity duration-300">
                  emergency
                </span>
              ])}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 relative z-20">
        {domains.map((domain, idx) => (
          <div key={idx} className={`glass-card rounded-3xl p-6 md:p-8 border border-outline-variant/10 shadow-xl group transition-all duration-500 cursor-default relative overflow-hidden backdrop-blur-2xl bg-surface-container-low/40 ${domain.styles.border} ${domain.styles.shadow}`}>
            
            {/* Ambient Background Glow on Hover */}
            <div className={`absolute top-[-50%] right-[-10%] w-64 h-64 opacity-0 blur-[80px] rounded-full transition-opacity duration-700 pointer-events-none group-hover:opacity-20 ${domain.styles.bg}`}></div>
            
            <div className="flex items-center gap-5 mb-6 relative z-10">
              <div className={`w-14 h-14 rounded-2xl bg-surface-container-high border border-outline-variant/20 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500 ${domain.styles.text}`}>
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


    </section>
  );
}
