import { Link } from 'react-router-dom';

export default function Certifications() {
  const certs = [
    {
      title: "AWS Certified Developer – Associate",
      issuer: "Amazon Web Services",
      date: "Valid through 2026",
      category: "Cloud Infrastructure",
      icon: "cloud",
      color: "from-[#FF9900]/20 to-[#FF9900]/5",
      textColor: "text-[#FF9900]"
    },
    {
      title: "Meta Front-End Professional Certificate",
      issuer: "Meta Platforms",
      date: "Issued Dec 2023",
      category: "Frontend Engineering",
      icon: "integration_instructions",
      color: "from-[#0668E1]/20 to-[#0668E1]/5",
      textColor: "text-[#0668E1]"
    },
    {
      title: "Google Data Analytics Professional",
      issuer: "Google",
      date: "Issued Aug 2022",
      category: "Data Science",
      icon: "query_stats",
      color: "from-[#34A853]/20 to-[#34A853]/5",
      textColor: "text-[#34A853]"
    }
  ];

  return (
    <section id="certifications" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-outline-variant/30 bg-surface-container-high/50 backdrop-blur-md mb-4 shadow-inner">
            <span className="material-symbols-outlined text-secondary text-[16px]">verified</span>
            <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant font-bold">Verified Credentials</span>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl font-black text-on-surface tracking-tight">Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Certifications</span></h2>
        </div>
        <p className="text-on-surface-variant text-base md:text-lg max-w-md">Industry-recognized distinctions validating my expertise in cloud deployment, modern UI development, and data architecture.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {certs.map((cert, idx) => (
          <div key={idx} className="glass-card rounded-3xl p-1 shadow-xl hover:-translate-y-2 transition-transform duration-500 overflow-hidden relative group">
            {/* Inner Content Wrapper */}
            <div className="bg-surface-container-lowest/80 backdrop-blur-xl w-full h-full rounded-[1.35rem] p-6 lg:p-8 flex flex-col relative z-10 border border-outline-variant/10">
              
              <div className="flex justify-between items-start mb-8">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center border border-white/5 shadow-inner group-hover:scale-110 transition-transform duration-500`}>
                  <span className={`material-symbols-outlined ${cert.textColor} text-[28px]`}>{cert.icon}</span>
                </div>
                <div className="bg-surface-container-high px-3 py-1 rounded-full border border-outline-variant/20">
                  <span className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant font-bold">{cert.category}</span>
                </div>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold font-headline text-on-surface mb-2 leading-tight group-hover:text-primary transition-colors">{cert.title}</h3>
              <p className="text-sm font-bold text-on-surface-variant mb-4">{cert.issuer}</p>
              
              <div className="mt-auto pt-6 border-t border-outline-variant/10 flex justify-between items-center">
                <span className="text-xs font-label text-slate-500 uppercase tracking-widest">{cert.date}</span>
                <a href="#" className="flex items-center gap-1.5 text-xs font-bold text-primary hover:text-secondary transition-colors" aria-label="Verify credential">
                  Verify <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* Ambient Background Glow Effect via Parent */}
            <div className={`absolute -bottom-20 -right-20 w-48 h-48 bg-gradient-to-br ${cert.color} blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-full`}></div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center relative z-10 w-full flex justify-center">
        <Link to="/certifications" className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-outline-variant/30 text-on-surface hover:bg-surface-variant hover:text-primary transition-colors font-bold group bg-surface-container-high/50 backdrop-blur shadow-lg">
          See All Certifications
          <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </Link>
      </div>
    </section>
  );
}
