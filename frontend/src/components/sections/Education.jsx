export default function Education() {
  const education = [
    {
      degree: "Bachelor of Engineering (B.E.) in Computer Engineering",
      school: "SNJB's K.B. Jain College of Engineering",
      location: "Chandwad, Maharashtra",
      date: "2022 – 2026",
      gpa: "",
      color: "from-secondary/30",
      description: [
        "Pursuing a comprehensive curriculum in Computer Engineering with focus on software development, data structures, and modern web technologies."
      ],
      tech: ["Data Structures", "Algorithms", "Operating Systems", "Databases", "Machine Learning", "Web Development"]
    },
    {
      degree: "Higher Secondary Education (12th)",
      school: "Gokhale Education Society Arts Commerce & Science Junior College",
      location: "Nashik Road, Nashik",
      date: "2020 – 2022",
      gpa: "53%",
      color: "from-primary/30",
      description: [
        "Completed higher secondary education with a focus on Science stream.",
      ],
      tech: ["Physics", "Chemistry", "Mathematics"]
    },
    {
      degree: "Secondary Education (10th)",
      school: "R.A.A.R. English Medium School",
      location: "Nashik Road, Nashik",
      date: "2019 – 2020",
      gpa: "72%",
      color: "from-tertiary/30",
      description: [
        "Completed secondary education building a strong academic foundation.",
      ],
      tech: ["Science", "Mathematics", "English"]
    }
  ];

  return (
    <section id="education" className="py-24 px-6 md:px-12 max-w-5xl mx-auto relative z-10">
      <div className="mb-16 md:mb-24 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-outline-variant/30 bg-surface-container-high/50 backdrop-blur-md mb-4 shadow-inner">
          <span className="material-symbols-outlined text-secondary text-[16px]">history_edu</span>
          <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant font-bold">Academic Foundation</span>
        </div>
        <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black text-on-surface tracking-tight leading-tight">
          Education <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-[#53ddfc]">& Academia</span>
        </h2>
      </div>

      <div className="relative border-l-2 border-outline-variant/20 ml-4 md:ml-8 pl-8 md:pl-16 space-y-16">
        {education.map((edu, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Node */}
            <div className="absolute -left-[41px] md:-left-[73px] top-0 w-8 h-8 rounded-full bg-surface-container-highest border-4 border-background flex items-center justify-center group-hover:scale-125 transition-transform duration-500 z-10">
              <div className="w-2.5 h-2.5 rounded-full bg-secondary group-hover:bg-[#53ddfc] group-hover:animate-ping transition-colors"></div>
            </div>

            {/* Content Card */}
            <div className={`bg-gradient-to-br ${edu.color} to-surface-container-low/20 backdrop-blur-md border border-outline-variant/20 p-6 md:p-10 rounded-3xl shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-2`}>
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 border-b border-outline-variant/10 pb-6 mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold font-headline text-on-surface mb-2 leading-tight">{edu.degree}</h3>
                  <div className="flex items-center gap-2 text-secondary font-bold text-sm md:text-base">
                    <span className="material-symbols-outlined text-[18px]">school</span> {edu.school}
                  </div>
                </div>
                <div className="flex flex-col lg:items-end gap-1">
                  <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest bg-surface-variant/50 px-3 py-1 rounded w-fit">{edu.date}</span>
                  <div className="flex gap-2 items-center">
                    <span className="text-xs text-on-surface-variant/70 font-bold">{edu.location}</span>
                    {edu.gpa && <span className="text-xs text-[#a3e635] font-black border-l border-outline-variant/30 pl-2">{edu.gpa}</span>}
                  </div>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {edu.description.map((item, i) => (
                  <li key={i} className="flex items-start text-sm md:text-base text-on-surface-variant leading-relaxed">
                    <span className="material-symbols-outlined text-secondary text-[18px] mr-3 mt-0.5 shrink-0 opacity-80">arrow_right</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {edu.tech.map((tool, i) => (
                  <span key={i} className="px-3 py-1 bg-background/60 border border-outline-variant/10 rounded-md text-xs font-bold text-slate-300">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Ambient Line Glow attached to Node */}
            <div className="absolute -left-[41px] md:-left-[73px] top-8 w-[2px] h-full bg-gradient-to-b from-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
