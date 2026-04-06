import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Track scroll position for visual states
  useEffect(() => {
    const handleScrollState = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScrollState, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollState);
  }, []);

  // Scroll spy for active section highlighting
  useEffect(() => {
    if (!isHomePage) return;

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
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && menuOpen) setMenuOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [menuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'certifications', label: 'Certificates' },
  ];

  const getNavHref = (id) => isHomePage ? `#${id}` : `/#${id}`;

  const handleNavClick = useCallback((e, id) => {
    if (isHomePage) {
      e.preventDefault();
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setMenuOpen(false);
  }, [isHomePage]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4 md:py-6'}`}>
      <nav
        className={`flex justify-between items-center px-6 md:px-8 py-3 mx-4 md:mx-auto max-w-6xl rounded-full transition-all duration-300 border ${
          scrolled
            ? 'bg-[#091328]/80 backdrop-blur-xl shadow-2xl border-outline-variant/20'
            : 'bg-[#091328]/60 backdrop-blur-xl shadow-2xl border-outline-variant/10'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo / Brand */}
        <a
          href={isHomePage ? '#home' : '/'}
          className="flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
          aria-label="Go to homepage"
          onClick={(e) => isHomePage && handleNavClick(e, 'home')}
        >
          <svg className="w-auto h-10 md:h-12 drop-shadow-md" viewBox="0 0 432 281" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <g transform="translate(0, 281) scale(0.1, -0.1)" fill="#5d007cff">
              <path d="M663 2403c3-10 8-31 12-48 12-53 65-124 122-162 87-58 124-63 424-63 240 0 274-2 333-20 103-32 193-110 243-210 26-50 28-65 28-165 0-99-3-115-27-165-46-92-134-175-219-205-52-18-98-23-275-30-158-6-238-23-328-70-86-45-139-88-184-150-20-27-39-52-42-55-18-16-71-166-80-225-5-38-10-177-10-307v-238h150h149l-1 198c-1 211 11 321 44 385 30 60 87 116 152 150 56 29 69 31 156 31 86 0 102-4 165-33 129-61 168-91 378-285 54-50 117-108 140-129 197-182 443-309 650-337 296-39 575 36 781 210 102 86 257 262 243 276-5 6-6 4-59-61-18-23-52-58-75-78-48-43-201-137-223-137-9 0-24-6-35-14-40-27-176-50-300-50-169 0-254 21-410 101-63 33-162 97-175 112-3 4-18 17-35 30-31 23-170 150-259 234-81 78-207 190-254 226l-44 34 30 13c42 17 152 128 197 198 66 103 97 204 102 336 8 182-31 313-134 451-77 101-170 169-323 233-72 29-179 36-595 36-392 0-416-1-412-17z" />
              <path d="M1230 956c-83-23-122-62-161-158-25-61-42-287-20-274 6 4 11 17 11 30 0 46 33 117 76 165 58 65 111 85 201 79 100-7 176-49 394-214 170-128 319-213 472-268 103-37 175-55 143-35-10 6-44 22-75 34-69 27-182 100-276 178-57 48-236 210-279 253-6 6-48 40-94 77-90 73-185 122-264 137-61 12-70 12-128-4z" />
              <path d="M2655 2453c-152-21-356-112-480-213-88-72-91-76-72-98 36-41 96-196 110-282l3-25 12 27c23 55 108 174 167 233 131 132 293 209 499 236 117 15 302-7 396-48 102-44 183-90 226-129 54-49 59-52 44-25-23 43-266 231-299 231-3 0-23 9-44 20-21 11-90 34-153 50-102 27-131 30-247 29-73-1-145-4-162-6z" />
              <path d="M3618 1479c-170-8-348-44-478-96-183-72-382-204-502-331-120-128-181-213-99-139 22 19 50 41 63 48 12 6 26 16 29 21 9 14 279 148 298 148 9 0 21 4 26 9 23 21 268 71 391 80 71 5 132 7 135 5 21-13-51-218-107-304-128-199-310-306-540-317-100-5-120-3-205 21-51 15-115 41-142 57-66 40-55 14 14-33 277-192 582-216 854-67 33 18 65 37 70 41 123 97 184 159 215 218 7 14 16 27 20 30 14 11 61 109 90 189 34 96 50 204 50 338 0 69-3 93-12 91-7 0-84-5-170-9z" />
            </g>
          </svg>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8 font-['Manrope'] tracking-[-0.02em] font-medium list-none m-0 p-0" role="menubar">
          {navLinks.map(({ id, label }) => (
            <li key={id} role="none">
              <a
                href={getNavHref(id)}
                role="menuitem"
                onClick={(e) => handleNavClick(e, id)}
                className={`transition-colors hover:text-[#53ddfc] text-sm md:text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1 py-0.5 ${
                  activeSection === id
                    ? 'text-[#ba9eff] font-bold border-b-2 border-[#ba9eff] pb-1'
                    : 'text-slate-400'
                }`}
                aria-current={activeSection === id ? 'true' : undefined}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* CTA Button */}
          <a
            href={isHomePage ? '#contact' : '/#contact'}
            onClick={(e) => handleNavClick(e, 'contact')}
            className="bg-gradient-to-br from-primary to-primary-dim px-4 md:px-6 py-2 rounded-lg text-on-primary-container font-bold text-xs md:text-sm hover:scale-95 active:scale-90 transition-transform whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Let's Talk
          </a>

          {/* Mobile Hamburger Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-menu"
            className="lg:hidden flex flex-col justify-center items-center w-9 h-9 rounded-lg border border-outline-variant/20 bg-surface-container-high/50 gap-1.5 hover:border-primary/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <span
              className={`block rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}
              style={{ width: '18px', height: '2px', background: 'rgb(148 163 184)', borderRadius: '9999px' }}
              aria-hidden="true"
            />
            <span
              className={`block rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0 scale-0' : ''}`}
              style={{ width: '18px', height: '2px', background: 'rgb(148 163 184)', borderRadius: '9999px' }}
              aria-hidden="true"
            />
            <span
              className={`block rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}
              style={{ width: '18px', height: '2px', background: 'rgb(148 163 184)', borderRadius: '9999px' }}
              aria-hidden="true"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        id="mobile-nav-menu"
        role="menu"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        className={`fixed top-0 left-0 right-0 z-40 lg:hidden transition-all duration-300 ease-in-out ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ paddingTop: '5rem' }}
      >
        <div className={`mx-4 bg-[#091328]/95 backdrop-blur-xl rounded-2xl border border-outline-variant/20 shadow-2xl overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-[80vh]' : 'max-h-0'}`}>
          <ul className="flex flex-col p-4 gap-1 list-none m-0" role="menu">
            {navLinks.map(({ id, label }) => (
              <li key={id} role="none">
                <a
                  href={getNavHref(id)}
                  role="menuitem"
                  tabIndex={menuOpen ? 0 : -1}
                  onClick={(e) => handleNavClick(e, id)}
                  className={`block px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    activeSection === id
                      ? 'bg-primary/10 text-primary border border-primary/20'
                      : 'text-slate-400 hover:bg-surface-container-high/50 hover:text-slate-200'
                  }`}
                  aria-current={activeSection === id ? 'true' : undefined}
                >
                  {label}
                </a>
              </li>
            ))}
            <li role="none">
              <a
                href={isHomePage ? '#contact' : '/#contact'}
                role="menuitem"
                tabIndex={menuOpen ? 0 : -1}
                onClick={(e) => handleNavClick(e, 'contact')}
                className="block mt-2 px-4 py-3 rounded-xl text-sm font-bold bg-gradient-to-br from-primary to-primary-dim text-on-primary-container text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Let's Talk
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Backdrop overlay to close mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 lg:hidden bg-black/30 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
