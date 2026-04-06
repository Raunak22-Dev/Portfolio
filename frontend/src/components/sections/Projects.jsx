import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';

const ACCENT_COLORS = ['text-secondary', 'text-tertiary', 'text-primary', 'text-[#a3e635]'];
const SPANS = [8, 4, 4, 8]; // grid col spans for the 4 featured projects

// Skeleton card
function FeaturedSkeleton({ wide }) {
  return (
    <div className={`md:col-span-${wide ? 8 : 4} h-[300px] rounded-xl bg-surface-container-high/50 animate-pulse border border-outline-variant/10`} />
  );
}

export default function Projects() {
  const [featured, setFeatured] = useState([]); // full project objects in order
  const [loading, setLoading] = useState(true);
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

  useEffect(() => {
    const load = async () => {
      try {
        // Step 1: get ordered featured IDs
        const idsRes = await fetch(`${API_URL}/settings/featured`);
        const rawIds = idsRes.ok ? await idsRes.json() : [];
        const ids = Array.isArray(rawIds) ? rawIds : [];

        if (!ids || ids.length === 0) {
          // No featured set — fall back to latest 4 projects
          const projRes = await fetch(`${API_URL}/projects`);
          const all = projRes.ok ? await projRes.json() : [];
          setFeatured(all.slice(0, 4));
        } else {
          // Fetch all and reorder by the saved IDs
          const projRes = await fetch(`${API_URL}/projects`);
          const all = projRes.ok ? await projRes.json() : [];
          const ordered = ids
            .map(id => all.find(p => String(p._id) === String(id)))
            .filter(Boolean);
          
          if (ordered.length === 0 && all.length > 0) {
            setFeatured(all.slice(0, 4));
          } else {
            setFeatured(ordered);
          }
        }
      } catch (e) {
        console.error('Failed to load featured projects:', e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [API_URL]);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-headline text-3xl md:text-4xl lg:text-[2rem] font-bold text-on-surface mb-3 md:mb-4">Featured Projects</h2>
            <p className="text-on-surface-variant text-base md:text-lg">A collection of my academic and personal technical projects.</p>
          </div>
          <Link to="/projects" className="group flex items-center text-primary font-bold gap-2 text-sm md:text-base bg-primary/10 px-6 py-3 rounded-full hover:bg-primary/20 transition-colors">
            See More
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {loading ? (
            <>
              <div className="md:col-span-8 h-[300px] rounded-xl bg-surface-container-high/50 animate-pulse border border-outline-variant/10" />
              <div className="md:col-span-4 h-[300px] rounded-xl bg-surface-container-high/50 animate-pulse border border-outline-variant/10" />
              <div className="md:col-span-4 h-[300px] rounded-xl bg-surface-container-high/50 animate-pulse border border-outline-variant/10" />
              <div className="md:col-span-8 h-[300px] rounded-xl bg-surface-container-high/50 animate-pulse border border-outline-variant/10" />
            </>
          ) : featured.length === 0 ? (
            <div className="md:col-span-12 h-48 flex flex-col items-center justify-center gap-3 text-on-surface-variant">
              <span className="material-symbols-outlined text-4xl text-primary/30">rocket_launch</span>
              <p className="font-bold">No featured projects set yet.</p>
              <p className="text-sm">Add projects and pin them in the Admin Dashboard.</p>
            </div>
          ) : featured.map((project, idx) => (
            <div
              key={project._id}
              className={`${idx % 3 === 0 ? 'md:col-span-8' : idx % 3 === 1 ? 'md:col-span-4' : idx === 2 ? 'md:col-span-4' : 'md:col-span-8'} group cursor-pointer w-full h-full`}
            >
              <Tilt glareEnable={true} glareMaxOpacity={0.1} glareColor="#ba9eff" scale={1.02} transitionSpeed={400} className="w-full h-full">
                <div className={`relative h-[300px] md:h-full aspect-auto rounded-xl overflow-hidden bg-surface-variant shadow-xl border border-outline-variant/10 ${idx === 0 || idx === 3 ? 'md:aspect-video' : ''}`}>
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={project.image || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop'}
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop'; }}
                    alt={project.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-surface-container-lowest/40 to-transparent flex flex-col justify-end p-6 md:p-8">
                    <span className={`font-label mb-1 md:mb-2 uppercase tracking-widest text-[10px] md:text-xs font-bold ${ACCENT_COLORS[idx % ACCENT_COLORS.length]}`}>
                      {project.type}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-on-surface font-headline">{project.title}</h3>
                    <div className="flex gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-primary to-primary-dim text-on-primary-container text-xs md:text-sm font-bold rounded-lg hover:scale-105 transition-transform">GitHub</a>
                      )}
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-outline-variant text-on-surface text-xs md:text-sm font-bold rounded-lg hover:bg-surface-variant/50 transition-colors">Live Demo</a>
                      )}
                      <Link to={`/projects/${project._id}`} className="px-4 py-2 border border-primary/40 text-primary text-xs md:text-sm font-bold rounded-lg hover:bg-primary/10 transition-colors">Details</Link>
                    </div>
                  </div>
                </div>
              </Tilt>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
