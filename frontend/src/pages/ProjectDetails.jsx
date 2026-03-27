import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundProject = projectsData.find(p => p.id === id);
    if (foundProject) {
      setProject(foundProject);
    } else {
      // Redirect back if project ID doesn't exist
      navigate('/projects');
    }
  }, [id, navigate]);

  if (!project) return null; // Or a loading spinner

  return (
    <main className="min-h-screen pt-24 pb-24 px-6 md:px-12 max-w-5xl mx-auto animate-fade-in relative z-10">
      
      {/* Top Navigation */}
      <div className="mb-12">
        <Link to="/projects" className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-dim transition-all duration-300 bg-surface-container-high/60 backdrop-blur px-5 py-2.5 rounded-full border border-primary/20 hover:border-primary/50 hover:-translate-x-1 shadow-lg text-sm">
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          Back to Archive
        </Link>
      </div>

      {/* Header Section */}
      <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black text-on-surface mb-4 leading-tight">
        {project.title}
      </h1>
      
      <div className="flex flex-wrap items-center gap-4 mb-10">
        <span className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
          {project.type}
        </span>
        <div className="flex gap-2">
          {project.tech.map((tool, i) => (
            <span key={i} className="px-3 py-1 bg-surface-container-high rounded text-xs font-medium text-on-surface-variant border border-outline-variant/10">
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Media Hero Section */}
      <div className="w-full h-64 md:h-96 lg:h-[32rem] rounded-[2rem] overflow-hidden mb-12 border border-outline-variant/20 shadow-2xl relative group">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-60"></div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
        />
        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20 flex gap-4">
          <a href={project.link} className="flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-full font-bold hover:scale-105 shadow-lg transition-transform">
            Live Demo <span className="material-symbols-outlined text-[18px]">open_in_new</span>
          </a>
          <a href={project.github} className="flex items-center gap-2 bg-surface-container-high text-on-surface px-6 py-3 rounded-full font-bold hover:bg-surface-variant border border-outline-variant/20 shadow-lg transition-colors">
            Source Code <span className="material-symbols-outlined text-[18px]">code</span>
          </a>
        </div>
      </div>

      {/* Case Study Content layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-on-surface-variant">
        
        {/* Main Context */}
        <div className="md:col-span-2 space-y-8 text-base md:text-lg leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold font-headline text-on-surface mb-4">Project Overview</h2>
            <p className="text-on-surface-variant/80 font-medium">
              {project.longDescription}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-headline text-on-surface mb-4">Key Features & Architecture</h2>
            <ul className="space-y-4">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="material-symbols-outlined text-secondary mr-3 mt-1 shrink-0">check_circle</span>
                  <span className="font-medium text-on-surface-variant/80">{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Sidebar Metadata */}
        <div className="md:col-span-1 space-y-8 bg-surface-container-low p-8 rounded-3xl border border-outline-variant/10 shadow-inner h-fit">
          <div>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Role</h3>
            <p className="text-on-surface font-bold text-sm">Lead Engineer</p>
          </div>
          <div>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Timeline</h3>
            <p className="text-on-surface font-bold text-sm">3 Months</p>
          </div>
          <div>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Core Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tool, i) => (
                <span key={i} className="px-3 py-1 bg-background/60 border border-outline-variant/10 rounded-md text-xs font-bold text-slate-300">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>

    </main>
  );
}
