export default function Footer() {
  return (
    <footer className="pt-24 pb-8 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden flex flex-col items-center">
      {/* Massive subtle background text for structural aesthetics */}
      <div className="absolute top-0 w-full flex justify-center text-center pointer-events-none select-none z-0 overflow-hidden">
        <h2 className="text-[12vw] font-black text-on-surface-variant opacity-[0.03] tracking-tighter leading-none mt-4">ENGINEER</h2>
      </div>
      
      <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-12 border-b border-outline-variant/10 pb-12 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8">
           <a href="#home" className="text-3xl font-black tracking-tighter text-primary font-headline">Student Portfolio</a>
           <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant font-bold border-l-0 md:border-l-2 border-outline-variant/20 pl-0 md:pl-8 py-1 md:py-2 text-center md:text-left">
             Building High-Performance <br/> Digital Systems.
           </p>
        </div>

        <div className="flex gap-4 sm:gap-6">
          <a href="mailto:hello@student.edu" className="group w-12 h-12 rounded-full bg-surface-container-high border border-outline-variant/30 flex items-center justify-center text-on-surface hover:text-[#53ddfc] hover:bg-[#53ddfc]/10 hover:border-[#53ddfc]/50 transition-all duration-300 hover:-translate-y-1 shadow-lg">
            <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">mail</span>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="group w-12 h-12 rounded-full bg-surface-container-high border border-outline-variant/30 flex items-center justify-center text-on-surface hover:text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-lg">
            <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">code</span>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group w-12 h-12 rounded-full bg-surface-container-high border border-outline-variant/30 flex items-center justify-center text-on-surface hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/50 transition-all duration-300 hover:-translate-y-1 shadow-lg">
            <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">person</span>
          </a>
        </div>
        
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between items-center pt-8 text-[10px] md:text-xs font-bold text-on-surface-variant uppercase tracking-widest gap-4 relative z-10 text-center md:text-left">
        <p>© {new Date().getFullYear()} Premium Portfolio Architecture.</p>
        
        <div className="flex items-center gap-6">
          <a href="#about" className="hover:text-primary transition-colors">Platform</a>
          <a href="#projects" className="hover:text-primary transition-colors">Systems</a>
          <a href="#contact" className="hover:text-primary transition-colors">Connect</a>
        </div>
      </div>
    </footer>
  );
}
