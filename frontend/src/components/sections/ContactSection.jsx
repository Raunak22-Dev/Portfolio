export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      {/* Background Orbs */}
      <div className="absolute top-[20%] right-[-10%] w-[40%] h-[50%] bg-primary/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[40%] bg-secondary/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        {/* Left Side: Contact Info */}
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-outline-variant/30 bg-surface-container-high/50 backdrop-blur-md mb-6 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="text-xs font-label uppercase tracking-widest text-secondary font-bold">Actively Interviewing</span>
          </div>

          <h2 className="font-headline text-5xl md:text-6xl font-black text-on-surface mb-6 leading-tight tracking-tight">
            Let's build something <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">extraordinary.</span>
          </h2>
          
          <p className="text-on-surface-variant text-lg leading-relaxed mb-10 max-w-lg">
            Whether you are looking for a highly capable engineer to join your team, or you have a freelance project that requires robust technical architecture, I am ready to jump in.
          </p>

          <div className="space-y-4">
            <a href="mailto:hello@student.edu" className="group flex items-center p-4 bg-surface-container-lowest rounded-2xl border border-outline-variant/20 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(186,158,255,0.1)] transition-all overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 mr-4 relative z-10 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary">mail</span>
              </div>
              <div className="relative z-10">
                <p className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant font-bold mb-1">Email Me Directly</p>
                <p className="text-base font-bold text-on-surface group-hover:text-primary transition-colors">hello@student.edu</p>
              </div>
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group flex items-center p-4 bg-surface-container-lowest rounded-2xl border border-outline-variant/20 hover:border-[#0A66C2]/40 hover:shadow-[0_0_30px_rgba(10,102,194,0.1)] transition-all overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A66C2]/5 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
              <div className="w-12 h-12 bg-[#0A66C2]/10 rounded-xl flex items-center justify-center border border-[#0A66C2]/20 mr-4 relative z-10 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </div>
              <div className="relative z-10">
                <p className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant font-bold mb-1">Professional Network</p>
                <p className="text-base font-bold text-on-surface group-hover:text-[#0A66C2] transition-colors">Connect on LinkedIn</p>
              </div>
            </a>
          </div>
        </div>

        {/* Right Side: High-End Contact Form */}
        <div className="lg:col-span-7 mt-8 lg:mt-0">
          <div className="bg-surface-container-low/40 backdrop-blur-2xl border border-outline-variant/30 rounded-[2rem] p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative overflow-hidden">
            {/* Form decorative accents */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-background via-primary to-background opacity-50"></div>
            
            <h3 className="text-2xl font-bold font-headline text-on-surface mb-8">Send an Inquiry</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <input type="text" id="name" placeholder=" " required className="peer w-full bg-background/50 border border-outline-variant/30 text-on-surface px-5 py-4 rounded-xl focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/60 transition-all font-body shadow-inner" />
                  <label htmlFor="name" className="absolute text-on-surface-variant text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-surface-container-low px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-4 font-bold rounded">Your Name</label>
                </div>
                <div className="relative group">
                  <input type="email" id="email" placeholder=" " required className="peer w-full bg-background/50 border border-outline-variant/30 text-on-surface px-5 py-4 rounded-xl focus:outline-none focus:border-secondary/60 focus:ring-1 focus:ring-secondary/60 transition-all font-body shadow-inner" />
                  <label htmlFor="email" className="absolute text-on-surface-variant text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-surface-container-low px-2 peer-focus:px-2 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-4 font-bold rounded">Your Email</label>
                </div>
              </div>
              
              <div className="relative group">
                <input type="text" id="subject" placeholder=" " required className="peer w-full bg-background/50 border border-outline-variant/30 text-on-surface px-5 py-4 rounded-xl focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/60 transition-all font-body shadow-inner" />
                <label htmlFor="subject" className="absolute text-on-surface-variant text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-surface-container-low px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-4 font-bold rounded">Project Subject</label>
              </div>

              <div className="relative group">
                <textarea id="message" rows="5" placeholder=" " required className="peer w-full bg-background/50 border border-outline-variant/30 text-on-surface px-5 py-4 rounded-xl focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/60 transition-all font-body shadow-inner resize-none"></textarea>
                <label htmlFor="message" className="absolute text-on-surface-variant text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-surface-container-low px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:top-2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-4 font-bold rounded">Message Details</label>
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-primary via-[#ba9eff] to-secondary text-[#091328] font-black tracking-widest uppercase py-4 rounded-xl hover:shadow-[0_0_30px_rgba(186,158,255,0.4)] hover:-translate-y-1 transition-all duration-300 flex justify-center items-center gap-2">
                Launch Mission <span className="material-symbols-outlined text-lg">send</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
