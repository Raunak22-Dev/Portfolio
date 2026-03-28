import { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// ─── Reusable ───────────────────────────────────────────────────────────────
const inputCls = "w-full bg-[#060e20]/80 border border-outline-variant/30 text-on-surface px-4 py-3 rounded-xl focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/20 transition-all font-body text-sm placeholder:text-slate-600";
const textareaCls = `${inputCls} resize-none`;

function Field({ label, children }) {
  return (
    <div>
      <label className="block text-[10px] font-black uppercase tracking-[0.15em] text-on-surface-variant mb-2">{label}</label>
      {children}
    </div>
  );
}

// Image Upload Component (converts to base64)
function ImageUpload({ value, onChange, label = "Cover Image" }) {
  const fileRef = useRef();
  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => onChange(reader.result);
    reader.readAsDataURL(file);
  };
  return (
    <div>
      <label className="block text-[10px] font-black uppercase tracking-[0.15em] text-on-surface-variant mb-2">{label} (Upload or URL)</label>
      <div className="flex gap-3 items-start">
        <div
          onClick={() => fileRef.current.click()}
          className="cursor-pointer w-24 h-24 rounded-xl border-2 border-dashed border-outline-variant/40 hover:border-primary/60 flex flex-col items-center justify-center gap-1 transition-colors shrink-0 overflow-hidden bg-surface-container-high/30 relative group"
        >
          {value ? (
            <img src={value} alt="Preview" className="w-full h-full object-cover" />
          ) : (
            <>
              <span className="material-symbols-outlined text-[24px] text-on-surface-variant group-hover:text-primary transition-colors">upload</span>
              <span className="text-[9px] font-bold text-on-surface-variant group-hover:text-primary transition-colors uppercase tracking-wide">Upload</span>
            </>
          )}
          <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFile} />
        </div>
        <div className="flex-1">
          <input
            type="text"
            value={value || ''}
            onChange={e => onChange(e.target.value)}
            placeholder="Or paste an image URL: https://..."
            className={inputCls}
          />
          <p className="text-[10px] text-on-surface-variant mt-1.5 ml-1">Click the square to upload from your device, or paste an image URL in the field.</p>
        </div>
      </div>
    </div>
  );
}

// Toast
function Toast({ message, type, onClose }) {
  useEffect(() => { const t = setTimeout(onClose, 4000); return () => clearTimeout(t); }, [onClose]);
  const cls = type === 'success' ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
    : type === 'error' ? 'bg-red-500/10 border-red-500/30 text-red-400'
    : 'bg-primary/10 border-primary/30 text-primary';
  const icon = type === 'success' ? 'task_alt' : type === 'error' ? 'error' : 'info';
  return (
    <div className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-2xl border backdrop-blur-xl shadow-2xl animate-fade-in ${cls}`}>
      <span className="material-symbols-outlined text-[20px]">{icon}</span>
      <span className="font-bold text-sm">{message}</span>
      <button onClick={onClose} className="ml-2 opacity-60 hover:opacity-100 transition-opacity">
        <span className="material-symbols-outlined text-[16px]">close</span>
      </button>
    </div>
  );
}

// Sidebar Item
function SidebarItem({ icon, label, active, onClick, badge }) {
  return (
    <button onClick={onClick} className={`w-full flex items-center gap-3.5 px-4 py-3.5 rounded-2xl font-bold text-sm transition-all duration-200 group relative ${active ? 'bg-primary text-on-primary shadow-[0_0_20px_rgba(186,158,255,0.3)]' : 'text-on-surface-variant hover:bg-surface-container-high/50 hover:text-on-surface'}`}>
      <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">{icon}</span>
      <span className="flex-1 text-left">{label}</span>
      {badge > 0 && <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${active ? 'bg-on-primary/20 text-on-primary' : 'bg-secondary/20 text-secondary'}`}>{badge}</span>}
    </button>
  );
}

// Stat Card  
function StatCard({ icon, label, value, colorClass }) {
  return (
    <div className={`relative overflow-hidden bg-surface-container-low/60 backdrop-blur-xl border border-outline-variant/20 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group`}>
      <div className={`w-12 h-12 rounded-xl ${colorClass}/10 border ${colorClass}/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <span className={`material-symbols-outlined ${colorClass} text-[22px]`}>{icon}</span>
      </div>
      <p className="text-xs font-black uppercase tracking-widest text-on-surface-variant mb-1">{label}</p>
      <p className="text-3xl font-black text-on-surface font-headline">{value}</p>
    </div>
  );
}

// Confirm Delete Dialog
function ConfirmDialog({ message, onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-8 max-w-sm w-full mx-4 shadow-2xl">
        <span className="material-symbols-outlined text-4xl text-red-400 mb-4 block">warning</span>
        <p className="font-bold text-on-surface mb-6">{message}</p>
        <div className="flex gap-3">
          <button onClick={onCancel} className="flex-1 px-4 py-3 rounded-xl border border-outline-variant/30 text-on-surface-variant font-bold text-sm hover:bg-surface-container-high/50 transition-colors">Cancel</button>
          <button onClick={onConfirm} className="flex-1 px-4 py-3 rounded-xl bg-red-500 text-white font-bold text-sm hover:bg-red-600 transition-colors">Delete</button>
        </div>
      </div>
    </div>
  );
}

// ─── Main Dashboard ──────────────────────────────────────────────────────────
export default function AdminDashboard() {
  const navigate = useNavigate();
  const token = localStorage.getItem('master_admin_token');

  const [activeTab, setActiveTab] = useState('overview');
  const [toast, setToast] = useState(null);
  const [confirmDlg, setConfirmDlg] = useState(null);

  // Data
  const [projects, setProjects] = useState([]);
  const [certs, setCerts] = useState([]);
  const [messages, setMessages] = useState([]);
  const [featuredIds, setFeaturedIds] = useState([]); // ordered array of up to 4 IDs
  const [loadingData, setLoadingData] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // Edit state
  const [editingProject, setEditingProject] = useState(null); // project object being edited
  const [editingCert, setEditingCert] = useState(null);

  // Forms
  const emptyProject = { title: '', type: '', tech: '', link: '', github: '', image: '', shortDescription: '', longDescription: '', features: '' };
  const emptyCert = { title: '', issuer: '', date: '', credentialId: '', link: '', image: '', skills: '' };
  const [projectForm, setProjectForm] = useState(emptyProject);
  const [certForm, setCertForm] = useState(emptyCert);

  const showToast = (message, type = 'success') => setToast({ message, type });
  const authHeader = { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` };

  const handleLogout = () => { localStorage.removeItem('master_admin_token'); navigate('/admin'); };

  // ── Fetch All Data ────────────────────────────────────────────────────────
  const fetchData = useCallback(async () => {
    setLoadingData(true);
    try {
      const [projRes, certRes, msgRes, featRes] = await Promise.all([
        fetch(`${API_URL}/projects`),
        fetch(`${API_URL}/certifications`),
        fetch(`${API_URL}/contact`, { headers: { Authorization: `Bearer ${token}` } }),
        fetch(`${API_URL}/settings/featured`),
      ]);
      if (projRes.ok) setProjects(await projRes.json());
      if (certRes.ok) setCerts(await certRes.json());
      if (msgRes.ok) setMessages(await msgRes.json());
      if (featRes.ok) setFeaturedIds(await featRes.json());
    } catch (e) { console.error('Fetch error:', e); }
    finally { setLoadingData(false); }
  }, [token]);

  useEffect(() => { fetchData(); }, [fetchData]);

  // ── Project Handlers ───────────────────────────────────────────────────────
  const openEditProject = (p) => {
    setEditingProject(p);
    setProjectForm({ ...p, tech: Array.isArray(p.tech) ? p.tech.join(', ') : p.tech, features: Array.isArray(p.features) ? p.features.join(', ') : p.features });
    setActiveTab('projects');
  };

  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const payload = {
      ...projectForm,
      image: projectForm.image || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600',
      tech: projectForm.tech.split(',').map(s => s.trim()).filter(Boolean),
      features: projectForm.features.split(',').map(s => s.trim()).filter(Boolean),
    };
    try {
      const url = editingProject ? `${API_URL}/projects/${editingProject._id}` : `${API_URL}/projects`;
      const method = editingProject ? 'PUT' : 'POST';
      const res = await fetch(url, { method, headers: authHeader, body: JSON.stringify(payload) });
      if (!res.ok) throw new Error();
      showToast(editingProject ? 'Project updated!' : 'Project deployed!', 'success');
      setEditingProject(null);
      setProjectForm(emptyProject);
      fetchData();
    } catch { showToast('Operation failed. Check your connection.', 'error'); }
    finally { setSubmitting(false); }
  };

  const confirmDeleteProject = (id, title) => {
    setConfirmDlg({ message: `Delete "${title}"? This cannot be undone.`, onConfirm: async () => {
      setConfirmDlg(null);
      try {
        const res = await fetch(`${API_URL}/projects/${id}`, { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } });
        if (!res.ok) throw new Error();
        // Also remove from featured if present
        const newFeat = featuredIds.filter(fid => fid !== id);
        if (newFeat.length !== featuredIds.length) await saveFeatured(newFeat);
        showToast('Project deleted.', 'success');
        fetchData();
      } catch { showToast('Delete failed.', 'error'); }
    }});
  };

  // ── Certification Handlers ─────────────────────────────────────────────────
  const openEditCert = (c) => {
    setEditingCert(c);
    setCertForm({ ...c, skills: Array.isArray(c.skills) ? c.skills.join(', ') : c.skills });
    setActiveTab('certifications');
  };

  const handleCertSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const payload = {
      ...certForm,
      image: certForm.image || 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600',
      skills: certForm.skills ? certForm.skills.split(',').map(s => s.trim()).filter(Boolean) : [],
    };
    try {
      const url = editingCert ? `${API_URL}/certifications/${editingCert._id}` : `${API_URL}/certifications`;
      const method = editingCert ? 'PUT' : 'POST';
      const res = await fetch(url, { method, headers: authHeader, body: JSON.stringify(payload) });
      if (!res.ok) throw new Error();
      showToast(editingCert ? 'Certification updated!' : 'Certification saved!', 'success');
      setEditingCert(null);
      setCertForm(emptyCert);
      fetchData();
    } catch { showToast('Operation failed.', 'error'); }
    finally { setSubmitting(false); }
  };

  const confirmDeleteCert = (id, title) => {
    setConfirmDlg({ message: `Delete "${title}"? This cannot be undone.`, onConfirm: async () => {
      setConfirmDlg(null);
      try {
        const res = await fetch(`${API_URL}/certifications/${id}`, { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } });
        if (!res.ok) throw new Error();
        showToast('Certification deleted.', 'success');
        fetchData();
      } catch { showToast('Delete failed.', 'error'); }
    }});
  };

  // ── Message Handlers ───────────────────────────────────────────────────────
  const confirmDeleteMessage = (id) => {
    setConfirmDlg({ message: 'Delete this message permanently?', onConfirm: async () => {
      setConfirmDlg(null);
      try {
        const res = await fetch(`${API_URL}/contact/${id}`, { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } });
        if (!res.ok) throw new Error();
        showToast('Message deleted.', 'success');
        fetchData();
      } catch { showToast('Delete failed.', 'error'); }
    }});
  };

  // ── Featured Projects Handlers ─────────────────────────────────────────────
  const saveFeatured = async (ids) => {
    try {
      const res = await fetch(`${API_URL}/settings/featured`, { method: 'PUT', headers: authHeader, body: JSON.stringify({ projectIds: ids }) });
      if (!res.ok) throw new Error();
      setFeaturedIds(ids);
    } catch { showToast('Failed to save featured order.', 'error'); }
  };

  const toggleFeatured = async (projectId) => {
    let newIds = [...featuredIds];
    if (newIds.includes(projectId)) {
      newIds = newIds.filter(id => id !== projectId);
    } else {
      if (newIds.length >= 4) { showToast('Maximum 4 featured projects allowed.', 'error'); return; }
      newIds.push(projectId);
    }
    await saveFeatured(newIds);
    showToast(newIds.includes(projectId) ? 'Added to featured.' : 'Removed from featured.', 'success');
  };

  const moveFeatured = async (index, direction) => {
    const newIds = [...featuredIds];
    const swapIdx = direction === 'up' ? index - 1 : index + 1;
    if (swapIdx < 0 || swapIdx >= newIds.length) return;
    [newIds[index], newIds[swapIdx]] = [newIds[swapIdx], newIds[index]];
    await saveFeatured(newIds);
  };

  const featuredProjects = featuredIds.map(id => projects.find(p => p._id === id)).filter(Boolean);

  return (
    <div className="min-h-screen bg-background text-on-surface font-body relative overflow-x-hidden">
      {/* Ambient */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/5 blur-[120px] rounded-full translate-x-1/4 translate-y-1/4" />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#060e20]/70 backdrop-blur-2xl border-b border-outline-variant/20">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-dim flex items-center justify-center shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-on-primary text-[18px]">admin_panel_settings</span>
            </div>
            <div>
              <span className="font-headline font-black text-on-surface text-base tracking-tight">Mission Control</span>
              <span className="hidden md:inline text-xs font-label uppercase tracking-widest text-on-surface-variant ml-3 border-l border-outline-variant/30 pl-3">Portfolio CMS</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="/" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-xs font-bold text-on-surface-variant hover:text-primary transition-colors px-3 py-1.5 rounded-lg hover:bg-primary/5">
              <span className="material-symbols-outlined text-[16px]">open_in_new</span> View Live Site
            </a>
            <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-400 font-bold text-xs uppercase tracking-widest rounded-full hover:bg-red-500 hover:text-white transition-all duration-200 border border-red-500/20">
              <span className="material-symbols-outlined text-[16px]">logout</span>
              <span className="hidden sm:inline">Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      <div className="pt-16 flex min-h-screen">
        {/* Sidebar */}
        <aside className="fixed left-0 top-16 bottom-0 w-64 bg-surface-container-low/50 backdrop-blur-xl border-r border-outline-variant/20 hidden lg:flex flex-col p-4 z-30">
          <div className="mb-6 px-2">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant/60">Navigation</p>
          </div>
          <nav className="flex flex-col gap-1.5 flex-1">
            <SidebarItem icon="dashboard" label="Overview" active={activeTab === 'overview'} onClick={() => setActiveTab('overview')} />
            <SidebarItem icon="rocket_launch" label={editingProject ? 'Editing Project' : 'Add Project'} active={activeTab === 'projects'} onClick={() => { setEditingProject(null); setProjectForm(emptyProject); setActiveTab('projects'); }} />
            <SidebarItem icon="workspace_premium" label={editingCert ? 'Editing Certificate' : 'Add Certificate'} active={activeTab === 'certifications'} onClick={() => { setEditingCert(null); setCertForm(emptyCert); setActiveTab('certifications'); }} />
            <SidebarItem icon="star" label="Featured Projects" active={activeTab === 'featured'} onClick={() => setActiveTab('featured')} badge={featuredIds.length} />
            <SidebarItem icon="inbox" label="Inbox" active={activeTab === 'inbox'} onClick={() => setActiveTab('inbox')} badge={messages.length} />
          </nav>
          <div className="pt-4 border-t border-outline-variant/20">
            <div className="flex items-center gap-3 px-2 py-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined text-[#091328] text-[18px]">person</span>
              </div>
              <div>
                <p className="text-xs font-black text-on-surface">Raunak Gangwal</p>
                <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider">Administrator</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 p-6 md:p-8 max-w-full relative z-10">

          {/* ── OVERVIEW ── */}
          {activeTab === 'overview' && (
            <div className="animate-fade-in">
              <div className="mb-8">
                <h1 className="font-headline text-3xl md:text-4xl font-black text-on-surface mb-1">Dashboard Overview</h1>
                <p className="text-on-surface-variant text-sm">Real-time insight into your portfolio content.</p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                <StatCard icon="rocket_launch" label="Projects" value={loadingData ? '—' : projects.length} colorClass="text-primary" />
                <StatCard icon="workspace_premium" label="Certifications" value={loadingData ? '—' : certs.length} colorClass="text-secondary" />
                <StatCard icon="inbox" label="Messages" value={loadingData ? '—' : messages.length} colorClass="text-tertiary" />
                <StatCard icon="star" label="Featured" value={loadingData ? '—' : `${featuredIds.length}/4`} colorClass="text-[#a3e635]" />
              </div>

              {/* Projects Table */}
              <div className="bg-surface-container-low/50 backdrop-blur-xl border border-outline-variant/20 rounded-3xl overflow-hidden mb-8">
                <div className="px-6 py-5 border-b border-outline-variant/20 flex items-center justify-between">
                  <h2 className="font-headline font-black text-on-surface text-lg">Deployed Projects</h2>
                  <button onClick={() => setActiveTab('projects')} className="text-xs font-black uppercase tracking-widest text-primary hover:text-secondary transition-colors flex items-center gap-1">
                    Add New <span className="material-symbols-outlined text-[14px]">add</span>
                  </button>
                </div>
                <div className="overflow-x-auto">
                  {loadingData ? (
                    <div className="p-8 flex items-center justify-center"><div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" /></div>
                  ) : projects.length === 0 ? (
                    <div className="p-10 text-center text-on-surface-variant">
                      <span className="material-symbols-outlined text-4xl text-primary/30 mb-3 block">folder_open</span>
                      <p className="font-bold">No projects yet.</p>
                    </div>
                  ) : (
                    <table className="w-full">
                      <thead><tr className="text-left border-b border-outline-variant/10">
                        <th className="px-6 py-3 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Title</th>
                        <th className="px-6 py-3 text-[10px] font-black uppercase tracking-widest text-on-surface-variant hidden md:table-cell">Type</th>
                        <th className="px-6 py-3 text-[10px] font-black uppercase tracking-widest text-on-surface-variant hidden lg:table-cell">Tech</th>
                        <th className="px-6 py-3 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Actions</th>
                      </tr></thead>
                      <tbody>
                        {projects.map((p, i) => (
                          <tr key={p._id} className={`border-b border-outline-variant/10 hover:bg-surface-container-high/20 transition-colors ${i % 2 ? 'bg-surface-container-high/5' : ''}`}>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-sm text-on-surface">{p.title}</span>
                                {featuredIds.includes(p._id) && (
                                  <span className="text-[9px] font-black bg-[#a3e635]/10 text-[#a3e635] border border-[#a3e635]/20 px-1.5 py-0.5 rounded-full uppercase tracking-wide">
                                    #{featuredIds.indexOf(p._id) + 1} Featured
                                  </span>
                                )}
                              </div>
                            </td>
                            <td className="px-6 py-4 hidden md:table-cell">
                              <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-2 py-1 rounded-full">{p.type}</span>
                            </td>
                            <td className="px-6 py-4 hidden lg:table-cell">
                              <div className="flex gap-1 flex-wrap">
                                {(p.tech || []).slice(0, 3).map((t, j) => <span key={j} className="text-[10px] px-2 py-0.5 bg-surface-container-high rounded text-on-surface-variant font-bold">{t}</span>)}
                                {(p.tech || []).length > 3 && <span className="text-[10px] text-on-surface-variant/50">+{p.tech.length - 3}</span>}
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-1.5">
                                <button onClick={() => openEditProject(p)} title="Edit project" className="text-primary hover:text-secondary transition-colors p-1.5 rounded-lg hover:bg-primary/10">
                                  <span className="material-symbols-outlined text-[18px]">edit</span>
                                </button>
                                <button onClick={() => confirmDeleteProject(p._id, p.title)} title="Delete project" className="text-red-400 hover:text-red-300 transition-colors p-1.5 rounded-lg hover:bg-red-500/10">
                                  <span className="material-symbols-outlined text-[18px]">delete</span>
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>

              {/* Certifications Table */}
              <div className="bg-surface-container-low/50 backdrop-blur-xl border border-outline-variant/20 rounded-3xl overflow-hidden">
                <div className="px-6 py-5 border-b border-outline-variant/20 flex items-center justify-between">
                  <h2 className="font-headline font-black text-on-surface text-lg">Certifications</h2>
                  <button onClick={() => setActiveTab('certifications')} className="text-xs font-black uppercase tracking-widest text-secondary hover:text-primary transition-colors flex items-center gap-1">
                    Add New <span className="material-symbols-outlined text-[14px]">add</span>
                  </button>
                </div>
                <div className="overflow-x-auto">
                  {loadingData ? (
                    <div className="p-8 flex items-center justify-center"><div className="w-8 h-8 border-2 border-secondary/30 border-t-secondary rounded-full animate-spin" /></div>
                  ) : certs.length === 0 ? (
                    <div className="p-10 text-center text-on-surface-variant">
                      <span className="material-symbols-outlined text-4xl text-secondary/30 mb-3 block">workspace_premium</span>
                      <p className="font-bold">No certifications yet.</p>
                    </div>
                  ) : (
                    <table className="w-full">
                      <thead><tr className="text-left border-b border-outline-variant/10">
                        <th className="px-6 py-3 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Title</th>
                        <th className="px-6 py-3 text-[10px] font-black uppercase tracking-widest text-on-surface-variant hidden md:table-cell">Issuer</th>
                        <th className="px-6 py-3 text-[10px] font-black uppercase tracking-widest text-on-surface-variant hidden lg:table-cell">Date</th>
                        <th className="px-6 py-3 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Actions</th>
                      </tr></thead>
                      <tbody>
                        {certs.map((c, i) => (
                          <tr key={c._id} className={`border-b border-outline-variant/10 hover:bg-surface-container-high/20 transition-colors ${i % 2 ? 'bg-surface-container-high/5' : ''}`}>
                            <td className="px-6 py-4"><span className="font-bold text-sm text-on-surface">{c.title}</span></td>
                            <td className="px-6 py-4 hidden md:table-cell"><span className="text-xs text-on-surface-variant font-bold">{c.issuer}</span></td>
                            <td className="px-6 py-4 hidden lg:table-cell"><span className="text-xs text-on-surface-variant">{c.date}</span></td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-1.5">
                                <button onClick={() => openEditCert(c)} title="Edit" className="text-secondary hover:text-primary transition-colors p-1.5 rounded-lg hover:bg-secondary/10">
                                  <span className="material-symbols-outlined text-[18px]">edit</span>
                                </button>
                                <button onClick={() => confirmDeleteCert(c._id, c.title)} title="Delete" className="text-red-400 hover:text-red-300 transition-colors p-1.5 rounded-lg hover:bg-red-500/10">
                                  <span className="material-symbols-outlined text-[18px]">delete</span>
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ── ADD/EDIT PROJECT ── */}
          {activeTab === 'projects' && (
            <div className="animate-fade-in flex justify-center">
              <div className="w-full max-w-2xl">
                <div className="mb-8">
                  {editingProject && (
                    <button onClick={() => { setEditingProject(null); setProjectForm(emptyProject); }} className="flex items-center gap-2 text-xs text-on-surface-variant hover:text-primary font-bold mb-4 transition-colors">
                      <span className="material-symbols-outlined text-[16px]">arrow_back</span> Cancel Edit
                    </button>
                  )}
                  <h1 className="font-headline text-3xl md:text-4xl font-black text-on-surface mb-1">
                    {editingProject ? `Editing: ${editingProject.title}` : 'Deploy New Project'}
                  </h1>
                  <p className="text-on-surface-variant text-sm">
                    {editingProject ? 'Modify and save the updated project data.' : 'Push a new project directly to your live portfolio database.'}
                  </p>
                </div>

                <div className="bg-surface-container-low/50 backdrop-blur-xl border border-outline-variant/20 rounded-3xl p-6 md:p-8 relative overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                  <form onSubmit={handleProjectSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <Field label="Project Title *">
                        <input className={inputCls} type="text" placeholder="e.g. Analytics Dashboard" value={projectForm.title} onChange={e => setProjectForm({...projectForm, title: e.target.value})} required />
                      </Field>
                      <Field label="Project Type *">
                        <input className={inputCls} type="text" placeholder="e.g. Full-Stack App" value={projectForm.type} onChange={e => setProjectForm({...projectForm, type: e.target.value})} required />
                      </Field>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <Field label="GitHub Repository URL">
                        <input className={inputCls} type="text" placeholder="https://github.com/..." value={projectForm.github} onChange={e => setProjectForm({...projectForm, github: e.target.value})} />
                      </Field>
                      <Field label="Live Demo URL">
                        <input className={inputCls} type="text" placeholder="https://..." value={projectForm.link} onChange={e => setProjectForm({...projectForm, link: e.target.value})} />
                      </Field>
                    </div>
                    <ImageUpload label="Cover Image" value={projectForm.image} onChange={v => setProjectForm({...projectForm, image: v})} />
                    <Field label="Tech Stack * (comma-separated)">
                      <input className={inputCls} type="text" placeholder="React, Node.js, MongoDB..." value={projectForm.tech} onChange={e => setProjectForm({...projectForm, tech: e.target.value})} required />
                    </Field>
                    <Field label="Key Features * (comma-separated)">
                      <input className={inputCls} type="text" placeholder="JWT Auth, WebSocket Chat..." value={projectForm.features} onChange={e => setProjectForm({...projectForm, features: e.target.value})} required />
                    </Field>
                    <Field label="Short Description *">
                      <textarea className={textareaCls} rows={2} placeholder="Brief teaser for project cards..." value={projectForm.shortDescription} onChange={e => setProjectForm({...projectForm, shortDescription: e.target.value})} required />
                    </Field>
                    <Field label="Long Description *">
                      <textarea className={textareaCls} rows={4} placeholder="Deep dive into the architecture and decisions..." value={projectForm.longDescription} onChange={e => setProjectForm({...projectForm, longDescription: e.target.value})} required />
                    </Field>
                    <button type="submit" disabled={submitting} className="w-full bg-gradient-to-r from-primary to-primary-dim text-on-primary py-4 font-black uppercase tracking-[0.15em] text-sm rounded-2xl hover:shadow-[0_0_30px_rgba(186,158,255,0.35)] hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 flex items-center justify-center gap-2">
                      {submitting ? (<><div className="w-4 h-4 border-2 border-on-primary/30 border-t-on-primary rounded-full animate-spin" />Saving...</>) : (<><span className="material-symbols-outlined text-[18px]">{editingProject ? 'save' : 'rocket_launch'}</span>{editingProject ? 'Save Changes' : 'Deploy to Database'}</>)}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* ── ADD/EDIT CERTIFICATION ── */}
          {activeTab === 'certifications' && (
            <div className="animate-fade-in flex justify-center">
              <div className="w-full max-w-2xl">
                <div className="mb-8">
                  {editingCert && (
                    <button onClick={() => { setEditingCert(null); setCertForm(emptyCert); }} className="flex items-center gap-2 text-xs text-on-surface-variant hover:text-secondary font-bold mb-4 transition-colors">
                      <span className="material-symbols-outlined text-[16px]">arrow_back</span> Cancel Edit
                    </button>
                  )}
                  <h1 className="font-headline text-3xl md:text-4xl font-black text-on-surface mb-1">
                    {editingCert ? `Editing: ${editingCert.title}` : 'Add Certification'}
                  </h1>
                  <p className="text-on-surface-variant text-sm">
                    {editingCert ? 'Modify and save the updated credential.' : 'Register a new credential in your certifications library.'}
                  </p>
                </div>

                <div className="bg-surface-container-low/50 backdrop-blur-xl border border-outline-variant/20 rounded-3xl p-6 md:p-8 relative overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
                  <form onSubmit={handleCertSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <Field label="Certification Title *">
                        <input className={inputCls} type="text" placeholder="AWS Certified Solutions Architect" value={certForm.title} onChange={e => setCertForm({...certForm, title: e.target.value})} required />
                      </Field>
                      <Field label="Issuing Authority *">
                        <input className={inputCls} type="text" placeholder="Amazon Web Services" value={certForm.issuer} onChange={e => setCertForm({...certForm, issuer: e.target.value})} required />
                      </Field>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <Field label="Issue / Validity Date">
                        <input className={inputCls} type="text" placeholder="e.g. Valid through 2026" value={certForm.date} onChange={e => setCertForm({...certForm, date: e.target.value})} />
                      </Field>
                      <Field label="Credential ID (optional)">
                        <input className={inputCls} type="text" placeholder="License or credential number" value={certForm.credentialId} onChange={e => setCertForm({...certForm, credentialId: e.target.value})} />
                      </Field>
                    </div>
                    <Field label="Verification URL">
                      <input className={inputCls} type="text" placeholder="https://verify.credential.net/..." value={certForm.link} onChange={e => setCertForm({...certForm, link: e.target.value})} />
                    </Field>
                    <ImageUpload label="Cover Image" value={certForm.image} onChange={v => setCertForm({...certForm, image: v})} />
                    <Field label="Acquired Skills (comma-separated)">
                      <input className={inputCls} type="text" placeholder="Cloud Computing, Security, Kubernetes..." value={certForm.skills} onChange={e => setCertForm({...certForm, skills: e.target.value})} />
                    </Field>
                    <button type="submit" disabled={submitting} className="w-full bg-gradient-to-r from-secondary to-secondary-dim text-[#002630] py-4 font-black uppercase tracking-[0.15em] text-sm rounded-2xl hover:shadow-[0_0_30px_rgba(83,221,252,0.3)] hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 flex items-center justify-center gap-2">
                      {submitting ? (<><div className="w-4 h-4 border-2 border-[#002630]/30 border-t-[#002630] rounded-full animate-spin" />Saving...</>) : (<><span className="material-symbols-outlined text-[18px]">{editingCert ? 'save' : 'workspace_premium'}</span>{editingCert ? 'Save Changes' : 'Save Certification'}</>)}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* ── FEATURED PROJECTS ── */}
          {activeTab === 'featured' && (
            <div className="animate-fade-in">
              <div className="mb-8">
                <h1 className="font-headline text-3xl md:text-4xl font-black text-on-surface mb-1">Featured Projects</h1>
                <p className="text-on-surface-variant text-sm">Select up to 4 projects to display on your homepage. Use the arrows to change their order (1st–4th).</p>
              </div>

              {/* Current Featured Order */}
              {featuredProjects.length > 0 && (
                <div className="bg-surface-container-low/50 backdrop-blur-xl border border-outline-variant/20 rounded-3xl p-6 mb-6">
                  <h2 className="font-headline font-black text-on-surface text-base mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#a3e635] text-[18px]">star</span>
                    Current Homepage Order
                  </h2>
                  <div className="space-y-3">
                    {featuredProjects.map((p, idx) => (
                      <div key={p._id} className="flex items-center gap-4 bg-surface-container-high/30 rounded-2xl px-4 py-3 border border-outline-variant/10">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/20 flex items-center justify-center shrink-0">
                          <span className="font-black text-primary text-sm">{idx + 1}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-sm text-on-surface truncate">{p.title}</p>
                          <p className="text-[10px] font-black uppercase tracking-widest text-primary">{p.type}</p>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <button onClick={() => moveFeatured(idx, 'up')} disabled={idx === 0} className="w-8 h-8 rounded-lg border border-outline-variant/20 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed">
                            <span className="material-symbols-outlined text-[16px]">arrow_upward</span>
                          </button>
                          <button onClick={() => moveFeatured(idx, 'down')} disabled={idx === featuredProjects.length - 1} className="w-8 h-8 rounded-lg border border-outline-variant/20 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed">
                            <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
                          </button>
                          <button onClick={() => toggleFeatured(p._id)} className="w-8 h-8 rounded-lg border border-red-500/20 flex items-center justify-center text-red-400 hover:bg-red-500/10 transition-all" title="Remove from featured">
                            <span className="material-symbols-outlined text-[16px]">close</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* All Projects — toggle featured */}
              <div className="bg-surface-container-low/50 backdrop-blur-xl border border-outline-variant/20 rounded-3xl p-6">
                <h2 className="font-headline font-black text-on-surface text-base mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">list</span>
                  All Projects ({projects.length})
                  <span className="text-xs text-on-surface-variant font-normal ml-2">— click a project to toggle featured ({featuredIds.length}/4 selected)</span>
                </h2>

                {loadingData ? (
                  <div className="flex justify-center py-8"><div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" /></div>
                ) : projects.length === 0 ? (
                  <p className="text-on-surface-variant text-center py-8">No projects in database yet.</p>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {projects.map((p) => {
                      const isFeatured = featuredIds.includes(p._id);
                      const featuredPos = featuredIds.indexOf(p._id);
                      return (
                        <button
                          key={p._id}
                          onClick={() => toggleFeatured(p._id)}
                          className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all duration-200 text-left w-full ${isFeatured ? 'border-primary bg-primary/10 shadow-[0_0_20px_rgba(186,158,255,0.15)]' : 'border-outline-variant/20 hover:border-primary/40 hover:bg-surface-container-high/30'}`}
                        >
                          <div className={`w-10 h-10 rounded-xl shrink-0 flex items-center justify-center font-black text-sm border ${isFeatured ? 'bg-primary text-on-primary border-primary' : 'bg-surface-container-high border-outline-variant/30 text-on-surface-variant'}`}>
                            {isFeatured ? <><span>#{featuredPos + 1}</span></> : <span className="material-symbols-outlined text-[18px]">add</span>}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className={`font-bold text-sm truncate ${isFeatured ? 'text-primary' : 'text-on-surface'}`}>{p.title}</p>
                            <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">{p.type}</p>
                          </div>
                          {isFeatured && <span className="material-symbols-outlined text-primary text-[20px] shrink-0">star</span>}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ── INBOX ── */}
          {activeTab === 'inbox' && (
            <div className="animate-fade-in">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <h1 className="font-headline text-3xl md:text-4xl font-black text-on-surface mb-1">Inbox</h1>
                  <p className="text-on-surface-variant text-sm">{messages.length} message{messages.length !== 1 ? 's' : ''} received from the contact form.</p>
                </div>
                <button onClick={fetchData} className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary hover:text-secondary transition-colors px-4 py-2 rounded-xl hover:bg-primary/5 border border-primary/20">
                  <span className="material-symbols-outlined text-[16px]">refresh</span> Refresh
                </button>
              </div>

              {loadingData ? (
                <div className="flex items-center justify-center h-48"><div className="w-10 h-10 border-2 border-primary/30 border-t-primary rounded-full animate-spin" /></div>
              ) : messages.length === 0 ? (
                <div className="bg-surface-container-low/50 backdrop-blur-xl border border-outline-variant/20 rounded-3xl p-12 text-center">
                  <span className="material-symbols-outlined text-5xl text-primary/30 mb-4 block">mark_email_unread</span>
                  <p className="font-black text-on-surface text-lg mb-2">Inbox is clear.</p>
                  <p className="text-sm text-on-surface-variant">Contact form submissions will appear here.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((msg, i) => (
                    <div key={msg._id || i} className="bg-surface-container-low/60 backdrop-blur-xl border border-outline-variant/20 rounded-2xl p-6 hover:border-primary/30 transition-all duration-200 group">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/20 flex items-center justify-center shrink-0">
                            <span className="font-black text-primary text-sm">{msg.name?.charAt(0)?.toUpperCase() || '?'}</span>
                          </div>
                          <div>
                            <p className="font-black text-on-surface text-sm">{msg.name}</p>
                            <a href={`mailto:${msg.email}`} className="text-xs text-primary hover:text-secondary transition-colors font-bold">{msg.email}</a>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {msg.createdAt && (
                            <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant bg-surface-container-high px-3 py-1 rounded-full">
                              {new Date(msg.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            </span>
                          )}
                          <a href={`mailto:${msg.email}?subject=Re: ${msg.subject || 'Your message'}`} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary hover:text-secondary flex items-center gap-1 text-xs font-black px-3 py-1.5 rounded-lg hover:bg-primary/10 border border-primary/20">
                            Reply <span className="material-symbols-outlined text-[14px]">reply</span>
                          </a>
                          <button onClick={() => confirmDeleteMessage(msg._id)} className="opacity-0 group-hover:opacity-100 transition-opacity text-red-400 hover:text-red-300 flex items-center gap-1 text-xs font-black px-3 py-1.5 rounded-lg hover:bg-red-500/10 border border-red-500/20">
                            <span className="material-symbols-outlined text-[16px]">delete</span>
                          </button>
                        </div>
                      </div>
                      {msg.subject && <p className="text-xs font-black uppercase tracking-widest text-secondary mb-3">{msg.subject}</p>}
                      <p className="text-sm text-on-surface-variant leading-relaxed">{msg.message}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </main>
      </div>

      {/* Toast & Confirm */}
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
      {confirmDlg && <ConfirmDialog message={confirmDlg.message} onConfirm={confirmDlg.onConfirm} onCancel={() => setConfirmDlg(null)} />}
    </div>
  );
}
