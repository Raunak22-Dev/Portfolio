export default function About() {
  return (
    <section id="about" className="pt-24 pb-12 px-6 md:px-12 max-w-7xl mx-auto relative">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center h-full relative z-10">
        
        {/* Left Column: Authoritative Typography & Badges */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-low border border-outline-variant/30 mb-6 shadow-inner w-fit hover:border-primary/50 transition-colors cursor-default">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs md:text-sm font-label uppercase tracking-wider text-on-surface-variant font-bold">Full-Stack Software Engineer</span>
          </div>
          
          <h2 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-on-surface mb-6">
            Architecting <br className="hidden sm:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-secondary to-[#53ddfc]">High-Performance Systems.</span>
          </h2>
          
          <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed mb-8 font-normal max-w-xl">
            I am a highly driven full-stack engineer who turns complex problems into elegant, scalable solutions. With deep expertise across backend infrastructure and modern frontend ecosystems, I build resilient applications that prioritize performance, security, and exceptional user experience.
          </p>

          {/* Premium Glowing Badges */}
          <div className="flex flex-wrap gap-4 mb-10">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 rounded-xl text-primary text-sm font-bold shadow-[0_0_15px_rgba(186,158,255,0.05)] hover:-translate-y-1 hover:border-primary/40 transition-all cursor-default">
              <span className="material-symbols-outlined text-[18px]">account_tree</span> Scalable Microservices
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-secondary/10 to-transparent border border-secondary/20 rounded-xl text-secondary text-sm font-bold shadow-[0_0_15px_rgba(83,221,252,0.05)] hover:-translate-y-1 hover:border-secondary/40 transition-all cursor-default">
              <span className="material-symbols-outlined text-[18px]">speed</span> High Availability Design
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-tertiary/10 to-transparent border border-tertiary/20 rounded-xl text-tertiary text-sm font-bold shadow-[0_0_15px_rgba(255,132,57,0.05)] hover:-translate-y-1 hover:border-tertiary/40 transition-all cursor-default">
              <span className="material-symbols-outlined text-[18px]">shield_locked</span> Secure Architectures
            </div>
          </div>
          
          {/* Aesthetic Stats Bar */}
          <div className="flex items-center gap-8 md:gap-12 pt-6 border-t border-outline-variant/20 w-full max-w-xl">
            <div className="group cursor-default">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl md:text-5xl font-black text-on-surface group-hover:text-primary transition-colors duration-300">50K</span>
                <span className="text-2xl font-bold text-primary">+</span>
              </div>
              <p className="text-[10px] md:text-xs font-label uppercase tracking-widest text-on-surface-variant mt-1 group-hover:text-primary/70 transition-colors">Lines Code Written</p>
            </div>
            <div className="w-[1px] h-12 bg-outline-variant/20"></div>
            <div className="group cursor-default">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl md:text-5xl font-black text-on-surface group-hover:text-secondary transition-colors duration-300">15</span>
                <span className="text-2xl font-bold text-secondary">+</span>
              </div>
              <p className="text-[10px] md:text-xs font-label uppercase tracking-widest text-on-surface-variant mt-1 group-hover:text-secondary/70 transition-colors">Enterprise Level Repos</p>
            </div>
          </div>
        </div>

        {/* Right Column: Premium High-Fidelity Bento Grid */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-4 h-full relative group perspective-1000 mt-12 lg:mt-0">
          
          {/* Top Big Card: Visual Code Editor Showcase */}
          <div className="col-span-2 aspect-[16/9] lg:aspect-[4/3] rounded-[2rem] overflow-hidden bg-surface-container-lowest border border-outline-variant/30 relative flex items-center justify-center hover:border-primary/40 transition-all duration-500 shadow-2xl">
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/20 blur-[60px] rounded-full group-hover:scale-150 group-hover:bg-secondary/20 transition-all duration-700"></div>
            
            <div className="relative z-10 w-full max-w-sm px-6">
              {/* Fake Code Editor Block */}
              <div className="w-full bg-[#0d1627]/90 backdrop-blur-xl rounded-xl border border-outline-variant/20 shadow-2xl p-5 flex flex-col gap-3 overflow-hidden transform group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(83,221,252,0.15)] transition-all duration-500">
                <div className="flex gap-1.5 mb-2 border-b border-white/5 pb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-500 font-mono text-xs">1</span>
                  <div className="text-xs font-mono text-primary animate-pulse">import {"{ deployScale }"} from "cloud";</div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-500 font-mono text-xs">2</span>
                  <div className="text-xs font-mono text-secondary animate-pulse delay-75">const server = new Core();</div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-500 font-mono text-xs">3</span>
                  <div className="text-xs font-mono text-tertiary animate-pulse delay-150">await server.optimize(100);</div>
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-slate-500 font-mono text-xs">4</span>
                  <div className="w-1/3 h-1.5 bg-outline-variant/30 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 left-6 z-10">
              <span className="px-3 py-1.5 bg-background/80 backdrop-blur-md rounded-lg text-[10px] font-bold text-on-surface-variant uppercase tracking-widest border border-outline-variant/20 flex items-center gap-2 shadow-lg">
                <span className="material-symbols-outlined text-[14px] text-primary">cloud_done</span> Core API Infrastructure
              </span>
            </div>
          </div>
          
          {/* Bottom Left: Visual Location Map Placeholder */}
          <div className="aspect-square rounded-[2rem] bg-surface-container-low border border-outline-variant/20 p-5 lg:p-6 flex flex-col justify-between relative overflow-hidden group-hover:shadow-[0_0_30px_rgba(186,158,255,0.05)] transition-all hover:-translate-y-1 cursor-default">
            <div className="absolute -right-4 -bottom-4 w-32 h-32 opacity-[0.03] group-hover:scale-110 group-hover:opacity-10 transition-all duration-700">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-primary"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center text-primary relative z-10 shadow-inner group-hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-[24px]">location_on</span>
            </div>
            <div className="relative z-10">
              <p className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant mb-1">Global Base</p>
              <p className="font-bold text-on-surface text-lg md:text-xl leading-tight">Remote <br/><span className="text-primary">Available</span></p>
            </div>
          </div>

          {/* Bottom Right: Live Status Indicator */}
          <div className="aspect-square rounded-[2rem] bg-gradient-to-br from-surface-container-high to-surface-container-lowest border border-outline-variant/20 p-5 lg:p-6 flex flex-col justify-between relative hover:border-secondary/40 transition-all hover:-translate-y-1 cursor-default overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 blur-[40px] rounded-full"></div>
            <div className="flex items-center gap-2 bg-secondary/10 border border-secondary/20 px-3 py-1.5 rounded-lg w-fit shadow-[0_0_15px_rgba(83,221,252,0.15)] relative z-10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">Active Priority</span>
            </div>
            <div className="relative z-10">
              <p className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant mb-1 group-hover:text-secondary/80 transition-colors">Mission</p>
              <p className="font-bold text-on-surface text-lg md:text-xl leading-tight">Deploying<br/>Ecosystems</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
