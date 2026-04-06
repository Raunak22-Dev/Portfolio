import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';

// Skeleton card for loading state
function ProjectSkeleton() {
  return (
    <div className="glass-card p-8 rounded-2xl border border-outline-variant/10 flex flex-col h-full bg-surface-container-lowest/80 backdrop-blur-xl animate-pulse">
      <div className="w-20 h-3 bg-surface-container-high rounded-full mb-4" />
      <div className="w-3/4 h-6 bg-surface-container-high rounded-lg mb-3" />
      <div className="w-full h-4 bg-surface-container-high/60 rounded mb-2" />
      <div className="flex flex-wrap gap-2 mb-8 mt-2">
        <div className="w-14 h-5 bg-surface-container-high rounded" />
        <div className="w-20 h-5 bg-surface-container-high rounded" />
        <div className="w-12 h-5 bg-surface-container-high rounded" />
      </div>
      <div className="mt-auto pt-6 border-t border-outline-variant/10 flex justify-between items-center">
        <div className="w-24 h-8 bg-surface-container-high rounded-lg" />
        <div className="w-16 h-5 bg-surface-container-high/60 rounded" />
      </div>
    </div>
  );
}

export default function AllProjects() {
  const [archive, setArchive] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchProjects = async () => {
      try {
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
        const response = await fetch(`${API_URL}/projects`);
        if (!response.ok) throw new Error('Failed to fetch from Database');
        const data = await response.json();
        setArchive(data);
      } catch (error) {
        console.error('Failed to fetch projects from backend:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <main className="min-h-screen pt-20 pb-24 px-6 md:px-12 max-w-7xl mx-auto animate-fade-in relative">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-[30%] h-[50%] bg-primary/20 blur-[120px] rounded-full"></div>
      </div>
      
      <div className="relative z-10">
        <div className="mb-16 md:mb-20 text-center md:text-left">
          <Link to="/" className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-dim transition-all duration-300 mb-8 bg-surface-container-high/60 backdrop-blur px-5 py-2.5 rounded-full border border-primary/20 hover:border-primary/50 hover:-translate-x-1 shadow-lg">
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Back to Portfolio
          </Link>
          <h1 className="font-headline text-5xl md:text-7xl font-black text-on-surface mb-6">Project Archive</h1>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl">A comprehensive collection of academic, professional, and independent software engineering works.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            // Skeleton grid — 6 placeholder cards
            Array.from({ length: 6 }).map((_, i) => (
              <ProjectSkeleton key={i} />
            ))
          ) : archive.length === 0 ? (
            <div className="col-span-full w-full h-64 flex flex-col items-center justify-center gap-4 text-on-surface-variant">
              <span className="material-symbols-outlined text-5xl text-primary/40">folder_open</span>
              <p className="font-bold text-lg">No projects found in the database.</p>
              <p className="text-sm">Add projects via the Admin Dashboard to see them here.</p>
            </div>
          ) : archive.map((project, idx) => (
            <Tilt key={project._id || idx} glareEnable={true} glareMaxOpacity={0.15} glareColor="#ba9eff" scale={1.02} transitionSpeed={400} className="h-full">
              <div className="glass-card p-8 rounded-2xl border border-outline-variant/10 hover:border-secondary/30 transition-all duration-300 group flex flex-col h-full bg-surface-container-lowest/80 backdrop-blur-xl hover:shadow-[0_0_40px_rgba(83,221,252,0.1)]">
              <span className="text-[10px] md:text-xs font-label uppercase tracking-widest text-primary mb-4">{project.type}</span>
              <h3 className="text-2xl font-bold font-headline text-on-surface mb-6 group-hover:text-secondary transition-colors">{project.title}</h3>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {(project.tech || []).map((tool, i) => (
                  <span key={i} className="px-3 py-1 bg-surface-container-high rounded text-xs font-medium text-on-surface-variant border border-outline-variant/10">{tool}</span>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-outline-variant/10 flex justify-between items-center">
                <Link to={`/projects/${project._id}`} className="flex items-center gap-1.5 text-sm font-bold bg-primary text-on-primary px-4 py-2 rounded-lg hover:scale-105 transition-transform shadow-lg">
                  Read More <span className="material-symbols-outlined text-[16px]">menu_book</span>
                </Link>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-on-surface hover:text-primary transition-colors flex items-center gap-1.5" title="Source Code">
                  Source <span className="material-symbols-outlined text-[18px]">code</span>
                </a>
              </div>
            </div>
            </Tilt>
          ))}
        </div>
      </div>
    </main>
  );
}
