import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

export default function AllProjects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const archive = projectsData;

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto animate-fade-in relative">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-[30%] h-[50%] bg-primary/20 blur-[120px] rounded-full"></div>
      </div>
      
      <div className="relative z-10">
        <div className="mb-16 md:mb-24 text-center md:text-left">
          <Link to="/" className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-dim transition-all duration-300 mb-8 bg-surface-container-high/60 backdrop-blur px-5 py-2.5 rounded-full border border-primary/20 hover:border-primary/50 hover:-translate-x-1 shadow-lg">
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Back to Portfolio
          </Link>
          <h1 className="font-headline text-5xl md:text-7xl font-black text-on-surface mb-6">Project Archive</h1>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl">A comprehensive collection of academic, professional, and independent software engineering works.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {archive.map((project, idx) => (
            <div key={idx} className="glass-card p-8 rounded-2xl border border-outline-variant/10 hover:border-secondary/30 hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full">
              <span className="text-[10px] md:text-xs font-label uppercase tracking-widest text-primary mb-4">{project.type}</span>
              <h3 className="text-2xl font-bold font-headline text-on-surface mb-6 group-hover:text-secondary transition-colors">{project.title}</h3>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tool, i) => (
                  <span key={i} className="px-3 py-1 bg-surface-container-high rounded text-xs font-medium text-on-surface-variant border border-outline-variant/10">{tool}</span>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-outline-variant/10 flex justify-between items-center">
                <Link to={`/projects/${project.id}`} className="flex items-center gap-1.5 text-sm font-bold bg-primary text-on-primary px-4 py-2 rounded-lg hover:scale-105 transition-transform shadow-lg">
                  Read More <span className="material-symbols-outlined text-[16px]">menu_book</span>
                </Link>
                <a href={project.github} className="text-sm font-bold text-on-surface hover:text-primary transition-colors flex items-center gap-1.5" title="Source Code">
                  Source <span className="material-symbols-outlined text-[18px]">code</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
