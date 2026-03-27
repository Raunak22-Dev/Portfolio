import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('projects'); // 'projects' | 'certifications' | 'inbox'
  const token = localStorage.getItem('master_admin_token');

  const [projectForm, setProjectForm] = useState({ title: '', type: '', tech: '', link: '', github: '', image: '', shortDescription: '', longDescription: '', features: '' });
  const [certForm, setCertForm] = useState({ title: '', issuer: '', date: '', credentialId: '', link: '', image: '', skills: '' });
  const [status, setStatus] = useState('');
  const [certStatus, setCertStatus] = useState('');

  const handleLogout = () => {
    localStorage.removeItem('master_admin_token');
    navigate('/admin');
  };

  const handleCertSubmit = async (e) => {
    e.preventDefault();
    setCertStatus('Transmitting to MongoDB...');
    
    const formattedData = {
      ...certForm,
      image: certForm.image || "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop",
      skills: certForm.skills ? certForm.skills.split(',').map(s => s.trim()) : []
    };

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
      const response = await fetch(`${API_URL}/certifications`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formattedData)
      });

      if (!response.ok) throw new Error('Database Injection Failed');
      setCertStatus('Successfully pushed to Cloud Cluster!');
      setCertForm({ title: '', issuer: '', date: '', credentialId: '', link: '', image: '', skills: '' });
      setTimeout(()=>setCertStatus(''), 3000);
    } catch (error) {
      console.error(error);
      setCertStatus('Write failure. Unauthorized or Offline.');
    }
  };

  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    setStatus('Transmitting to MongoDB...');
    
    // Convert comma-separated strings to Array mappings
    const formattedData = {
      ...projectForm,
      image: projectForm.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop",
      tech: projectForm.tech.split(',').map(s => s.trim()),
      features: projectForm.features.split(',').map(s => s.trim())
    };

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
      const response = await fetch(`${API_URL}/projects`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Injects the cryptograph into the middleware
        },
        body: JSON.stringify(formattedData)
      });

      if (!response.ok) throw new Error('Database Injection Failed');
      setStatus('Successfully pushed to Cloud Cluster!');
      setProjectForm({ title: '', type: '', tech: '', link: '', github: '', image: '', shortDescription: '', longDescription: '', features: '' });
      setTimeout(()=>setStatus(''), 3000);
    } catch (error) {
      console.error(error);
      setStatus('Write failure. Unauthorized or Offline.');
    }
  };

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 bg-surface-container-low/50 backdrop-blur-md p-6 rounded-2xl border border-outline-variant/20">
        <div>
          <h1 className="text-3xl font-black font-headline text-on-surface">Mission Control</h1>
          <p className="text-sm font-label text-primary uppercase tracking-widest mt-1">Direct Database Pipe Active</p>
        </div>
        <button onClick={handleLogout} className="px-6 py-2.5 bg-red-500/10 text-red-500 font-bold text-sm uppercase tracking-widest rounded-full hover:bg-red-500 hover:text-white transition-colors border border-red-500/20">
          Terminate Session
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Nav Tabs */}
        <div className="lg:col-span-1 space-y-3">
           <button onClick={() => setActiveTab('projects')} className={`w-full text-left px-5 py-4 rounded-xl font-bold flex items-center justify-between transition-all ${activeTab === 'projects' ? 'bg-primary text-on-primary' : 'bg-surface-container hover:bg-surface-container-high text-on-surface'}`}>
             <span>Deploy Project</span>
             <span className="material-symbols-outlined text-[18px]">rocket_launch</span>
           </button>
           <button onClick={() => setActiveTab('certifications')} className={`w-full text-left px-5 py-4 rounded-xl font-bold flex items-center justify-between transition-all ${activeTab === 'certifications' ? 'bg-primary text-on-primary' : 'bg-surface-container hover:bg-surface-container-high text-on-surface'}`}>
             <span>Deploy Certificate</span>
             <span className="material-symbols-outlined text-[18px]">workspace_premium</span>
           </button>
           <button onClick={() => setActiveTab('inbox')} className={`w-full text-left px-5 py-4 rounded-xl font-bold flex items-center justify-between transition-all ${activeTab === 'inbox' ? 'bg-primary text-on-primary' : 'bg-surface-container hover:bg-surface-container-high text-on-surface'}`}>
             <span>Intel Inbox</span>
             <span className="material-symbols-outlined text-[18px]">inbox</span>
           </button>
        </div>

        {/* Dashboard Frame */}
        <div className="lg:col-span-3 bg-surface-container-low/50 backdrop-blur-lg rounded-2xl border border-outline-variant/20 p-8">
           {activeTab === 'projects' && (
             <div>
                <h2 className="text-xl font-bold font-headline mb-6 text-on-surface pb-4 border-b border-outline-variant/10">Project Factory Configuration</h2>
                {status && <p className="mb-6 p-4 bg-primary/20 text-primary font-bold rounded-lg uppercase tracking-widest text-xs">{status}</p>}
                
                <form onSubmit={handleProjectSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Project Classification</label>
                      <input type="text" placeholder="Title (Ex: Weather Dashboard)" className="w-full bg-background/50 border border-outline-variant/30 text-on-surface px-4 py-3 rounded-lg focus:outline-none focus:border-primary/60" value={projectForm.title} onChange={(e) => setProjectForm({...projectForm, title: e.target.value})} required/>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Technical Archetype</label>
                      <input type="text" placeholder="Type (Ex: Full-Stack App)" className="w-full bg-background/50 border border-outline-variant/30 text-on-surface px-4 py-3 rounded-lg focus:outline-none focus:border-primary/60" value={projectForm.type} onChange={(e) => setProjectForm({...projectForm, type: e.target.value})} required/>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Cover Image URL</label>
                    <input type="text" placeholder="https://... (Leave blank for default)" className="w-full bg-background/50 border border-outline-variant/30 text-on-surface px-4 py-3 rounded-lg focus:outline-none focus:border-primary/60" value={projectForm.image} onChange={(e) => setProjectForm({...projectForm, image: e.target.value})} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Source Code Repository</label>
                      <input type="text" placeholder="GitHub URL" className="w-full bg-background/50 border border-outline-variant/30 text-on-surface px-4 py-3 rounded-lg focus:outline-none focus:border-primary/60" value={projectForm.github} onChange={(e) => setProjectForm({...projectForm, github: e.target.value})} />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Live Production Build</label>
                      <input type="text" placeholder="Live Demo URL" className="w-full bg-background/50 border border-outline-variant/30 text-on-surface px-4 py-3 rounded-lg focus:outline-none focus:border-primary/60" value={projectForm.link} onChange={(e) => setProjectForm({...projectForm, link: e.target.value})} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Array Mappings (Comma Separated)</label>
                    <input type="text" placeholder="Tech Stack: React, Express, MongoDB..." className="w-full bg-background/50 border border-outline-variant/30 text-on-surface px-4 py-3 rounded-lg mb-4 focus:outline-none focus:border-primary/60" value={projectForm.tech} onChange={(e) => setProjectForm({...projectForm, tech: e.target.value})} required/>
                    <input type="text" placeholder="Features: WebSocket Chat, JWT Auth..." className="w-full bg-background/50 border border-outline-variant/30 text-on-surface px-4 py-3 rounded-lg focus:outline-none focus:border-primary/60" value={projectForm.features} onChange={(e) => setProjectForm({...projectForm, features: e.target.value})} required/>
                  </div>

                  <div className="space-y-4">
                    <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant">Narrative Abstracts</label>
                    <textarea placeholder="Short Thumbnail Teaser..." rows="2" className="w-full bg-background/50 border border-outline-variant/30 text-on-surface px-4 py-3 rounded-lg focus:outline-none focus:border-primary/60 resize-none" value={projectForm.shortDescription} onChange={(e) => setProjectForm({...projectForm, shortDescription: e.target.value})} required></textarea>
                    <textarea placeholder="Deep Dive Long Description for Case Study..." rows="4" className="w-full bg-background/50 border border-outline-variant/30 text-on-surface px-4 py-3 rounded-lg focus:outline-none focus:border-primary/60 resize-none" value={projectForm.longDescription} onChange={(e) => setProjectForm({...projectForm, longDescription: e.target.value})} required></textarea>
                  </div>

                  <button type="submit" className="w-full bg-primary text-on-primary py-4 font-black uppercase tracking-widest rounded-xl hover:scale-[1.01] transition-transform">Execute Master Pipeline</button>
                </form>
             </div>
           )}

           {activeTab === 'inbox' && (
              <div>
                 <h2 className="text-xl font-bold font-headline mb-6 text-on-surface pb-4 border-b border-outline-variant/10">Encrypted Communications Feed</h2>
                 <p className="text-on-surface-variant italic">Inbox monitoring is currently fetching from backend/api/contact... (Implement feed mapping here)</p>
              </div>
           )}
           
           {activeTab === 'certifications' && (
              <div>
                 <h2 className="text-xl font-bold font-headline mb-6 text-on-surface pb-4 border-b border-outline-variant/10">Credential Ingestion Protocol</h2>
                 {certStatus && <p className="mb-6 p-4 bg-primary/20 text-primary font-bold rounded-lg uppercase tracking-widest text-xs">{certStatus}</p>}
                 
                 <form onSubmit={handleCertSubmit} className="space-y-6">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div>
                       <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Certification Title</label>
                       <input type="text" placeholder="Ex: AWS Certified Solutions Architect" className="w-full bg-background/50 border border-outline-variant/30 text-on-surface px-4 py-3 rounded-lg focus:outline-none focus:border-primary/60" value={certForm.title} onChange={(e) => setCertForm({...certForm, title: e.target.value})} required/>
                     </div>
                     <div>
                       <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Issuing Authority</label>
                       <input type="text" placeholder="Ex: Amazon Web Services" className="w-full bg-background/50 border border-outline-variant/30 text-on-surface px-4 py-3 rounded-lg focus:outline-none focus:border-primary/60" value={certForm.issuer} onChange={(e) => setCertForm({...certForm, issuer: e.target.value})} required/>
                     </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div>
                       <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Issue Date</label>
                       <input type="text" placeholder="Ex: March 2026" className="w-full bg-background/50 border border-outline-variant/30 text-on-surface px-4 py-3 rounded-lg focus:outline-none focus:border-primary/60" value={certForm.date} onChange={(e) => setCertForm({...certForm, date: e.target.value})} />
                     </div>
                     <div>
                       <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Credential ID</label>
                       <input type="text" placeholder="Optional License Code" className="w-full bg-background/50 border border-outline-variant/30 text-on-surface px-4 py-3 rounded-lg focus:outline-none focus:border-primary/60" value={certForm.credentialId} onChange={(e) => setCertForm({...certForm, credentialId: e.target.value})} />
                     </div>
                   </div>

                   <div>
                     <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Validation URL</label>
                     <input type="text" placeholder="Link to verify credential" className="w-full bg-background/50 border border-outline-variant/30 text-on-surface px-4 py-3 rounded-lg focus:outline-none focus:border-primary/60" value={certForm.link} onChange={(e) => setCertForm({...certForm, link: e.target.value})} />
                   </div>

                   <div>
                     <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Cover Image URL</label>
                     <input type="text" placeholder="https://... (Leave blank for default)" className="w-full bg-background/50 border border-outline-variant/30 text-on-surface px-4 py-3 rounded-lg focus:outline-none focus:border-primary/60" value={certForm.image} onChange={(e) => setCertForm({...certForm, image: e.target.value})} />
                   </div>

                   <div>
                     <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Acquired Skills (Comma Separated)</label>
                     <input type="text" placeholder="Cloud Computing, Security, Networking..." className="w-full bg-background/50 border border-outline-variant/30 text-on-surface px-4 py-3 rounded-lg focus:outline-none focus:border-primary/60" value={certForm.skills} onChange={(e) => setCertForm({...certForm, skills: e.target.value})} />
                   </div>

                   <button type="submit" className="w-full bg-primary text-on-primary py-4 font-black uppercase tracking-widest rounded-xl hover:scale-[1.01] transition-transform">Deploy Certification</button>
                 </form>
              </div>
           )}
        </div>
      </div>
    </main>
  );
}
