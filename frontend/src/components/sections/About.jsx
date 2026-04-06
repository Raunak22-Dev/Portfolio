export default function About() {
  return (
    <section id="about" className="pt-24 pb-12 px-6 md:px-12 max-w-7xl mx-auto relative">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center h-full relative z-10">

        {/* Left Column: Authoritative Typography & Badges */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-low border border-outline-variant/30 mb-6 shadow-inner w-fit hover:border-primary/50 transition-colors cursor-default">
            <span className="w-2.5 h-2.5 rounded-full bg-[#53ddfc] animate-pulse"></span>
            <span className="text-xs md:text-sm font-label uppercase tracking-wider text-on-surface-variant font-bold">Data Analyst & Python Developer</span>
          </div>

          <h2 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-on-surface mb-6">
            Building Intelligent <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-secondary to-[#53ddfc]">Data Pipelines.</span>
          </h2>

          <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed mb-8 font-normal max-w-xl">
            I am a highly analytical professional who transforms raw data into strategic business assets. With deep expertise in Python, SQL, and advanced visualization tools, I build robust analytical models that uncover hidden trends, optimize operations, and drive data-backed decision-making.
          </p>

          {/* Premium Glowing Badges */}
          <div className="flex flex-wrap gap-4 mb-10">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 rounded-xl text-primary text-sm font-bold shadow-[0_0_15px_rgba(186,158,255,0.05)] hover:-translate-y-1 hover:border-primary/40 transition-all cursor-default">
              <span className="material-symbols-outlined text-[18px]">query_stats</span> Statistical Analysis
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-secondary/10 to-transparent border border-secondary/20 rounded-xl text-secondary text-sm font-bold shadow-[0_0_15px_rgba(83,221,252,0.05)] hover:-translate-y-1 hover:border-secondary/40 transition-all cursor-default">
              <span className="material-symbols-outlined text-[18px]">dashboard_customize</span> BI Reporting
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-tertiary/10 to-transparent border border-tertiary/20 rounded-xl text-tertiary text-sm font-bold shadow-[0_0_15px_rgba(255,132,57,0.05)] hover:-translate-y-1 hover:border-tertiary/40 transition-all cursor-default">
              <span className="material-symbols-outlined text-[18px]">insights</span> Strategic Insights
            </div>
          </div>

          {/* Aesthetic Stats Bar */}
          <div className="flex items-center gap-8 md:gap-12 pt-6 border-t border-outline-variant/20 w-full max-w-xl">
            <div className="group cursor-default">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl md:text-5xl font-black text-on-surface group-hover:text-primary transition-colors duration-300">10M</span>
                <span className="text-2xl font-bold text-primary">+</span>
              </div>
              <p className="text-[10px] md:text-xs font-label uppercase tracking-widest text-on-surface-variant mt-1 group-hover:text-primary/70 transition-colors">Rows Processed</p>
            </div>
            <div className="w-[1px] h-12 bg-outline-variant/20"></div>
            <div className="group cursor-default">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl md:text-5xl font-black text-on-surface group-hover:text-secondary transition-colors duration-300">50</span>
                <span className="text-2xl font-bold text-secondary">+</span>
              </div>
              <p className="text-[10px] md:text-xs font-label uppercase tracking-widest text-on-surface-variant mt-1 group-hover:text-secondary/70 transition-colors">Dashboards Built</p>
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
                  <div className="text-xs font-mono text-primary animate-pulse">import pandas as pd</div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-500 font-mono text-xs">2</span>
                  <div className="text-xs font-mono text-secondary animate-pulse delay-75">data = pd.read_csv("metrics.csv")</div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-500 font-mono text-xs">3</span>
                  <div className="text-xs font-mono text-tertiary animate-pulse delay-150">sns.heatmap(corr,annot=True,cmap='coolwarm')</div>
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-slate-500 font-mono text-xs">4</span>
                  <div className="w-1/3 h-1.5 bg-outline-variant/30 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 left-6 z-10">
              <span className="px-3 py-1.5 bg-background/80 backdrop-blur-md rounded-lg text-[10px] font-bold text-on-surface-variant uppercase tracking-widest border border-outline-variant/20 flex items-center gap-2 shadow-lg">
                <span className="material-symbols-outlined text-[14px] text-primary">analytics</span> Predictive Modeling
              </span>
            </div>
          </div>

          {/* Bottom Left: Data Storytelling / Dashboard Graphic */}
          <div className="aspect-square rounded-[2rem] bg-gradient-to-br from-surface-container-low to-surface-container-lowest border border-outline-variant/20 p-5 lg:p-6 flex flex-col justify-between relative overflow-hidden group-hover:shadow-[0_0_30px_rgba(83,221,252,0.1)] transition-all hover:-translate-y-1 cursor-default">
            {/* Animated Bar Chart Background */}
            <div className="absolute -inset-2 opacity-30 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none flex items-end justify-center pb-8 gap-2 md:gap-3">
              <div className="w-3 md:w-4 bg-gradient-to-t from-secondary to-transparent rounded-t-sm animate-[pulse_2s_ease-in-out_infinite]" style={{ height: '30%', animationDelay: '0s' }}></div>
              <div className="w-3 md:w-4 bg-gradient-to-t from-secondary to-transparent rounded-t-sm animate-[pulse_2s_ease-in-out_infinite]" style={{ height: '50%', animationDelay: '0.2s' }}></div>
              <div className="w-3 md:w-4 bg-gradient-to-t from-secondary to-transparent rounded-t-sm animate-[pulse_2s_ease-in-out_infinite]" style={{ height: '40%', animationDelay: '0.4s' }}></div>
              <div className="w-3 md:w-4 bg-gradient-to-t from-secondary to-transparent rounded-t-sm animate-[pulse_2s_ease-in-out_infinite]" style={{ height: '70%', animationDelay: '0.6s' }}></div>
              <div className="w-3 md:w-4 bg-gradient-to-t from-secondary to-transparent rounded-t-sm animate-[pulse_2s_ease-in-out_infinite]" style={{ height: '60%', animationDelay: '0.8s' }}></div>
              <div className="w-3 md:w-4 bg-gradient-to-t from-secondary to-transparent rounded-t-sm animate-[pulse_2s_ease-in-out_infinite]" style={{ height: '90%', animationDelay: '1s' }}></div>
            </div>

            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/10 to-transparent border border-secondary/20 flex items-center justify-center text-secondary relative z-10 shadow-inner group-hover:bg-secondary/20 transition-colors">
              <span className="material-symbols-outlined text-[24px]">insert_chart</span>
            </div>
            <div className="relative z-10 mt-auto">
              <p className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant mb-1 group-hover:text-secondary/80 transition-colors">Visualization</p>
              <p className="font-bold text-on-surface text-lg md:text-xl leading-tight drop-shadow-md">Interactive<br /><span className="text-secondary">Dashboards</span></p>
            </div>
          </div>

          {/* Bottom Right: Actionable Insights / Business Impact */}
          <div className="aspect-square rounded-[2rem] bg-gradient-to-br from-surface-container-high to-surface-container-lowest border border-outline-variant/20 p-5 lg:p-6 flex flex-col justify-between relative hover:border-primary/40 transition-all hover:-translate-y-1 cursor-default overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[40px] rounded-full pointer-events-none"></div>

            <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-lg w-fit shadow-[0_0_15px_rgba(186,158,255,0.15)] relative z-10">
              <span className="material-symbols-outlined text-[14px] text-primary">trending_up</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">KPI Metric</span>
            </div>

            {/* Growth Arrow Element */}
            <div className="absolute -right-4 top-[40%] -translate-y-1/2 w-40 h-40 opacity-50 group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-700 pointer-events-none flex items-center justify-center">
              <span className="material-symbols-outlined text-[140px] text-primary drop-shadow-[0_0_20px_rgba(186,158,255,0.6)]">north_east</span>
            </div>

            <div className="relative z-10 mt-auto">
              <p className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant mb-1 group-hover:text-primary/80 transition-colors">Impact</p>
              <p className="font-bold text-on-surface text-lg md:text-xl leading-tight drop-shadow-md">Actionable<br /><span className="text-primary">Insights</span></p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
