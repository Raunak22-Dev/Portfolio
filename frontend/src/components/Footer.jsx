import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="pt-24 pb-8 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden flex flex-col items-center">
      {/* Massive subtle background text for structural aesthetics */}
      <div className="absolute top-0 w-full flex justify-center text-center pointer-events-none select-none z-0 overflow-hidden">
        <h2 className="text-[12vw] font-black text-on-surface-variant opacity-[0.03] tracking-tighter leading-none mt-4">ENGINEER</h2>
      </div>
      
      <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-12 border-b border-outline-variant/10 pb-12 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8">
           <a href="/#home" className="text-3xl font-black tracking-tighter text-primary font-headline">Student Portfolio</a>
           <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant font-bold border-l-0 md:border-l-2 border-outline-variant/20 pl-0 md:pl-8 py-1 md:py-2 text-center md:text-left">
             Building High-Performance <br/> Digital Systems.
           </p>
        </div>

        <div className="flex gap-4 sm:gap-6">
          <a href="mailto:raunakgangwal22@gmail.com" className="group w-12 h-12 rounded-full bg-surface-container-high border border-outline-variant/30 flex items-center justify-center text-on-surface hover:text-[#53ddfc] hover:bg-[#53ddfc]/10 hover:border-[#53ddfc]/50 transition-all duration-300 hover:-translate-y-1 shadow-lg">
            <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">mail</span>
          </a>
          <a href="https://github.com/Raunak22-Dev" target="_blank" rel="noopener noreferrer" className="group w-12 h-12 rounded-full bg-surface-container-high border border-outline-variant/30 flex items-center justify-center text-on-surface hover:text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-lg">
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
          </a>
          <a href="https://www.linkedin.com/in/raunakgangwal/" target="_blank" rel="noopener noreferrer" className="group w-12 h-12 rounded-full bg-surface-container-high border border-outline-variant/30 flex items-center justify-center text-on-surface hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/50 transition-all duration-300 hover:-translate-y-1 shadow-lg">
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
        </div>
        
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between items-center pt-8 text-[10px] md:text-xs font-bold text-on-surface-variant uppercase tracking-widest gap-4 relative z-10 text-center md:text-left">
        <p>
          © {new Date().getFullYear()} Premium Portfolio Architecture
          <Link to="/admin" title="Admin Login Vault" className="cursor-default hover:text-primary transition-colors px-1" style={{ outline: 'none' }}>.</Link>
        </p>
        
        <div className="flex items-center gap-6">
          <a href="/#about" className="hover:text-primary transition-colors">Platform</a>
          <a href="/#projects" className="hover:text-primary transition-colors">Systems</a>
          <a href="/#contact" className="hover:text-primary transition-colors">Connect</a>
        </div>
      </div>
    </footer>
  );
}
