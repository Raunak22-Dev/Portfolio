import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);

    const fetchProjectDetails = async () => {
      try {
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
        const response = await fetch(`${API_URL}/projects/${id}`);
        if (!response.ok) throw new Error('Failed to fetch case study');
        const data = await response.json();
        setProject(data);
      } catch (error) {
        console.error('Error fetching project:', error);
        navigate('/projects');
      } finally {
        setLoading(false);
      }
    };

    fetchProjectDetails();
  }, [id, navigate]);

  if (loading || !project) {
    return (
      <main className="min-h-screen pt-24 pb-24 px-6 md:px-12 max-w-5xl mx-auto animate-pulse relative z-10">
        <div className="w-32 h-10 bg-surface-container border border-outline-variant/10 rounded-full mb-12"></div>
        <div className="w-3/4 md:w-1/2 h-14 bg-surface-container border border-outline-variant/10 rounded-xl mb-6"></div>
        <div className="flex gap-4 mb-10">
          <div className="w-24 h-6 bg-surface-container border border-outline-variant/10 rounded-full"></div>
          <div className="w-32 h-6 bg-surface-container border border-outline-variant/10 rounded-full"></div>
        </div>
        <div className="w-full h-64 md:h-96 lg:h-[32rem] bg-surface-container border border-outline-variant/10 rounded-[2rem] mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4">
            <div className="w-full h-4 bg-surface-container border border-outline-variant/10 rounded"></div>
            <div className="w-5/6 h-4 bg-surface-container border border-outline-variant/10 rounded"></div>
            <div className="w-4/6 h-4 bg-surface-container border border-outline-variant/10 rounded"></div>
          </div>
          <div className="md:col-span-1 h-64 bg-surface-container border border-outline-variant/10 rounded-3xl"></div>
        </div>
      </main>
    );
  }

  const techStack = Array.isArray(project.tech) ? project.tech : [];
  const features = Array.isArray(project.features) ? project.features : [];

  return (
    <main className="min-h-screen pt-24 pb-24 px-6 md:px-12 max-w-5xl mx-auto animate-fade-in relative z-10">

      {/* Top Navigation & Breadcrumbs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
        <Link to="/projects" className="inline-flex items-center w-fit gap-2 text-primary font-bold hover:text-primary-dim transition-all duration-300 transform-gpu bg-surface-container-high/60 backdrop-blur px-5 py-2.5 rounded-full border border-primary/20 hover:border-primary/50 hover:-translate-x-1 shadow-lg text-sm">
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          Back
        </Link>
        <nav className="flex items-center gap-2 text-xs md:text-sm font-bold text-on-surface-variant bg-surface-container-low/50 backdrop-blur px-4 py-2 rounded-lg border border-outline-variant/10 overflow-x-auto whitespace-nowrap" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-primary transition-colors">Portfolio</Link>
          <span className="material-symbols-outlined text-[14px] opacity-50">chevron_right</span>
          <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
          <span className="material-symbols-outlined text-[14px] opacity-50">chevron_right</span>
          <span className="text-secondary truncate">{project.title}</span>
        </nav>
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
          {techStack.map((tool, i) => (
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
          src={project.image || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop'}
          onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop'; }}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out transform-gpu will-change-transform"
        />
        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20 flex gap-4">
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-full font-bold hover:scale-105 shadow-lg transition-transform transform-gpu">
              Live Demo <span className="material-symbols-outlined text-[18px]">open_in_new</span>
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-surface-container-high text-on-surface px-6 py-3 rounded-full font-bold hover:bg-surface-variant border border-outline-variant/20 shadow-lg transition-colors">
              Source Code <span className="material-symbols-outlined text-[18px]">code</span>
            </a>
          )}
        </div>
      </div>

      {/* Case Study Content layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-on-surface-variant">

        {/* Main Context */}
        <div className="md:col-span-2 space-y-8 text-base md:text-lg leading-relaxed">
          {project.longDescription && (
            <section>
              <h2 className="text-2xl font-bold font-headline text-on-surface mb-4">Project Overview</h2>
              <p className="text-on-surface-variant/80 font-medium">
                {project.longDescription}
              </p>
            </section>
          )}

          {features.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold font-headline text-on-surface mb-4">Key Features & Architecture</h2>
              <ul className="space-y-4">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="material-symbols-outlined text-secondary mr-3 mt-1 shrink-0">check_circle</span>
                    <span className="font-medium text-on-surface-variant/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
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
          {techStack.length > 0 && (
            <div>
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Core Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tool, i) => (
                  <span key={i} className="px-3 py-1 bg-background/60 border border-outline-variant/10 rounded-md text-xs font-bold text-slate-300">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>

    </main>
  );
}
