import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (!isHomePage) return; // Only run scroll spy on home page

    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'experience', 'certifications', 'contact'];
      const scrollPos = window.scrollY + 120;

      if (window.scrollY < 50) {
        setActiveSection('home');
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          return;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const navClass = (path) =>
    `transition-colors hover:text-[#53ddfc] text-sm md:text-base ${activeSection === path ? 'text-[#ba9eff] font-bold border-b-2 border-[#ba9eff] pb-1' : 'text-slate-400'}`;

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'certifications', label: 'Certificates' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-4 right-4 md:left-0 md:right-0 z-50 flex justify-between items-center px-6 md:px-8 py-3 bg-[#091328]/60 backdrop-blur-xl rounded-full mt-4 md:mt-6 mx-auto max-w-6xl shadow-2xl transition-all duration-300 border border-outline-variant/10">
        <a href={isHomePage ? '#home' : '/'} className="text-lg md:text-xl font-bold tracking-tighter text-[#ba9eff] font-headline shrink-0">Student Portfolio</a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 font-['Manrope'] tracking-[-0.02em] font-medium">
          {navLinks.map(({ id, label }) => (
            <a key={id} href={isHomePage ? `#${id}` : `/#${id}`} className={navClass(id)}>{label}</a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href={isHomePage ? '#contact' : '/#contact'} className="bg-gradient-to-br from-primary to-primary-dim px-4 md:px-6 py-2 rounded-lg text-on-primary-container font-bold text-xs md:text-sm hover:scale-95 active:scale-90 transition-transform whitespace-nowrap">
            Let's Talk
          </a>
          {/* Mobile Hamburger Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-menu"
            className="lg:hidden flex flex-col justify-center items-center w-9 h-9 rounded-lg border border-outline-variant/20 bg-surface-container-high/50 gap-1.5 hover:border-primary/40 transition-colors"
          >
            <span className={`w-4.5 h-0.5 bg-slate-300 rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} style={{width:'18px', height:'2px', display:'block', background:'rgb(148 163 184)', borderRadius:'9999px', transition:'all 300ms'}} />
            <span className={`bg-slate-300 rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} style={{width:'18px', height:'2px', display:'block', background:'rgb(148 163 184)', borderRadius:'9999px', transition:'all 300ms'}} />
            <span className={`w-4.5 h-0.5 bg-slate-300 rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{width:'18px', height:'2px', display:'block', background:'rgb(148 163 184)', borderRadius:'9999px', transition:'all 300ms'}} />
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        id="mobile-nav-menu"
        role="navigation"
        aria-label="Mobile navigation"
        className={`fixed top-0 left-0 right-0 z-40 lg:hidden transition-all duration-300 ease-in-out ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ paddingTop: '5rem' }}
      >
        <div className={`mx-4 bg-[#091328]/95 backdrop-blur-xl rounded-2xl border border-outline-variant/20 shadow-2xl overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-screen' : 'max-h-0'}`}>
          <div className="flex flex-col p-4 gap-1">
            {navLinks.map(({ id, label }) => (
              <a
                key={id}
                href={isHomePage ? `#${id}` : `/#${id}`}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 flex items-center gap-3 ${activeSection === id ? 'bg-primary/10 text-primary border border-primary/20' : 'text-slate-400 hover:bg-surface-container-high/50 hover:text-slate-200'}`}
              >
                {label}
              </a>
            ))}
            <a
              href={isHomePage ? '#contact' : '/#contact'}
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-4 py-3 rounded-xl text-sm font-bold bg-gradient-to-br from-primary to-primary-dim text-on-primary-container text-center"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>

      {/* Backdrop to close menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}

