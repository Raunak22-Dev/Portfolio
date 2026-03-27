import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ResumeViewer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen pt-16 pb-24 px-6 md:px-12 flex flex-col items-center relative overflow-hidden">
       {/* Background */}
       <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
       <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[150px] rounded-full mix-blend-screen pointer-events-none"></div>
       
       <div className="w-full max-w-5xl relative z-10 animate-fade-in">
         {/* Top Toolbar */}
         <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 bg-surface-container-low/80 backdrop-blur-xl p-4 md:p-6 rounded-2xl border border-outline-variant/30 shadow-2xl">
           <Link to="/" className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-dim transition-all duration-300 bg-surface-container-high/60 backdrop-blur px-5 py-2.5 rounded-full border border-primary/20 hover:border-primary/50 hover:-translate-x-1 shadow-lg text-sm">
             <span className="material-symbols-outlined text-[18px]">arrow_back</span> Back to Portfolio
           </Link>
           <h1 className="font-headline text-lg md:text-xl font-bold text-on-surface tracking-widest uppercase">Curriculum Vitae</h1>
           <a href="/resume.pdf" download className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-primary to-primary-dim text-on-primary rounded-lg font-bold hover:-translate-y-0.5 transition-transform shadow-lg shadow-primary/20 hover:shadow-primary/40 text-sm">
             <span className="material-symbols-outlined text-[18px]">download</span> Download PDF
           </a>
         </div>

         {/* Resume Document Wrapper (A4 Ratio Placeholder) */}
         <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-outline-variant/10 aspect-auto md:aspect-[1/1.414] p-8 md:p-16 flex flex-col relative overflow-hidden text-black mt-8 transition-transform hover:scale-[1.01] duration-500">
            <div className="border-b-2 border-slate-200 pb-6 mb-8 text-center relative z-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-headline text-slate-800 tracking-tight mb-2">Student Name</h2>
              <p className="text-primary font-bold tracking-widest uppercase text-sm md:text-base">Software Engineer</p>
              <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-6 text-xs md:text-sm font-bold text-slate-500">
                <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px]">location_on</span> Global Hub</span>
                <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px]">mail</span> hello@student.edu</span>
                <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px]">code</span> github.com/student</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-4 text-left relative z-10">
               {/* Main Timeline Column */}
               <div className="md:col-span-2 space-y-10">
                 <section>
                   <h3 className="text-lg font-bold text-slate-800 border-b-2 border-slate-200 pb-2 mb-6 uppercase tracking-widest text-primary">Experience</h3>
                   <div className="space-y-8">
                     <div>
                       <div className="flex justify-between items-baseline mb-1">
                         <h4 className="font-bold text-slate-800 text-lg">Software Engineering Intern</h4>
                         <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">2023 - Present</span>
                       </div>
                       <p className="text-sm text-slate-500 font-bold mb-3">Tech Solutions Inc. • Remote</p>
                       <ul className="list-disc list-inside text-sm text-slate-600 space-y-2 leading-relaxed">
                         <li>Developed scalable REST APIs using Node.js, Express, and PostgreSQL.</li>
                         <li>Reduced database query latency by 40% using Redis caching mechanisms.</li>
                         <li>Collaborated with QA to implement automated End-to-End Cypress testing.</li>
                       </ul>
                     </div>
                     <div>
                       <div className="flex justify-between items-baseline mb-1">
                         <h4 className="font-bold text-slate-800 text-lg">Open Source Contributor</h4>
                         <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded">2022 - 2023</span>
                       </div>
                       <p className="text-sm text-slate-500 font-bold mb-3">React Foundation</p>
                       <ul className="list-disc list-inside text-sm text-slate-600 space-y-2 leading-relaxed">
                         <li>Maintained documentation and fixed critical UI rendering bugs.</li>
                         <li>Authored community plugins utilized by over 5,000 active developers.</li>
                       </ul>
                     </div>
                   </div>
                 </section>

                 <section>
                   <h3 className="text-lg font-bold text-slate-800 border-b-2 border-slate-200 pb-2 mb-6 uppercase tracking-widest text-primary">Key Projects</h3>
                   <div className="space-y-6">
                     <div>
                       <div className="flex justify-between items-baseline mb-1">
                         <h4 className="font-bold text-slate-800 text-base">Predictive Weather Model</h4>
                       </div>
                       <p className="text-xs text-primary font-bold mb-2">Python, TensorFlow, Pandas</p>
                       <p className="text-sm text-slate-600 leading-relaxed">Architected a machine learning model capable of predicting localized weather events with 89% accuracy utilizing historical meteorological datasets.</p>
                     </div>
                   </div>
                 </section>
               </div>
               
               {/* Sidebar Column */}
               <div className="md:col-span-1 space-y-8 bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-inner h-fit">
                 <section>
                   <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-5 text-primary">Education</h3>
                   <div className="mb-4">
                     <p className="font-bold text-slate-800 text-base leading-tight mb-1">B.S. Computer Science</p>
                     <p className="text-xs text-slate-500 font-bold">University of Technology</p>
                     <p className="text-xs font-bold text-primary mt-3 bg-primary/10 w-fit px-2 py-1 rounded border border-primary/20">GPA: 3.8/4.0</p>
                   </div>
                 </section>
                 
                 <section>
                   <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-5 text-primary">Core Skills</h3>
                   <div className="flex flex-wrap gap-2">
                     <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-700 shadow-sm">React</span>
                     <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-700 shadow-sm">Node.js</span>
                     <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-700 shadow-sm">TypeScript</span>
                     <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-700 shadow-sm">Python</span>
                     <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-700 shadow-sm">PostgreSQL</span>
                     <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-700 shadow-sm">Docker</span>
                     <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-700 shadow-sm">Git</span>
                   </div>
                 </section>
               </div>
            </div>
            
            {/* Watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none overflow-hidden">
              <span className="text-[10rem] md:text-[14rem] font-black rotate-[-35deg] whitespace-nowrap text-slate-900 leading-none">DUMMY RESUME</span>
            </div>
         </div>
       </div>
    </main>
  );
}
