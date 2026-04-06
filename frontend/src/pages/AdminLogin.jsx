import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'error'
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });

      const data = await response.json();

      if (response.ok) {
        // Cryptographic key acquired, stash in localStorage
        localStorage.setItem('master_admin_token', data.token);
        
        // Store explicit 24hr expiration timestamp
        const expirationTime = new Date().getTime() + (24 * 60 * 60 * 1000);
        localStorage.setItem('master_admin_expires', expirationTime.toString());

        // Vault breached. Redirect to root dashboard matrix
        navigate('/admin/dashboard');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Authentication request failed:', error);
      setStatus('error');
    }
  };

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 relative z-10 flex items-center justify-center">
      {/* Immersive Dark Mode Canvas Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[50%] bg-primary/20 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[40%] bg-secondary/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="w-full max-w-lg bg-surface-container-low/40 backdrop-blur-2xl border border-outline-variant/30 rounded-[2rem] p-10 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative z-10">
        <div className="text-center mb-10">
          <span className="material-symbols-outlined text-5xl text-primary mb-4 block">admin_panel_settings</span>
          <h1 className="text-3xl font-black font-headline text-on-surface tracking-tight">System Override</h1>
          <p className="text-sm font-label uppercase tracking-widest text-on-surface-variant mt-3">Vault Authentication Required</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-8">
          <div className="relative group">
            <input 
              type="password" 
              id="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=" " 
              className="peer w-full bg-background/50 border border-outline-variant/30 text-on-surface px-5 py-4 rounded-xl focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/60 transition-all font-body text-center text-xl tracking-[0.5em] shadow-inner" 
              required
            />
            <label htmlFor="password" className="absolute text-on-surface-variant text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-surface-container px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1/2 -translate-x-1/2 font-bold rounded">Authentication Key</label>
          </div>

          <button 
            type="submit" 
            disabled={status === 'loading'}
            className="w-full bg-gradient-to-r from-primary via-[#ba9eff] to-secondary text-[#091328] font-black tracking-widest uppercase py-4 rounded-xl hover:shadow-[0_0_30px_rgba(186,158,255,0.4)] transition-all duration-300 disabled:opacity-50"
          >
            {status === 'loading' ? 'Deciphering...' : 'Breach Mainframe'}
          </button>

          {status === 'error' && (
            <p className="text-red-400 text-xs font-bold text-center uppercase tracking-widest animate-pulse mt-4">
               Access Denied: Invalid Cryptographic Key
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
