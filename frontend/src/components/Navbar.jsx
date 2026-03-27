import { useState, useEffect } from 'react';

export default function Navbar() {
  // Simple scroll spy logic
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'experience', 'certifications', 'contact'];
      const scrollPos = window.scrollY + 120;

      // Default to home when near the top
      if (window.scrollY < 50) {
        setActiveSection('home');
        return;
      }

      // Iterate in reverse so the topmost visible section wins
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          return;
        }
      }
    };

    handleScroll(); // Run on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = (path) => `transition-colors hover:text-[#53ddfc] text-sm md:text-base ${activeSection === path ? 'text-[#ba9eff] font-bold border-b-2 border-[#ba9eff] pb-1' : 'text-slate-400'}`;

  return (
    <nav className="fixed top-0 left-4 right-4 md:left-0 md:right-0 z-50 flex justify-between items-center px-6 md:px-8 py-3 bg-[#091328]/60 backdrop-blur-xl rounded-full mt-4 md:mt-6 mx-auto max-w-6xl shadow-2xl transition-all duration-300 border border-outline-variant/10">
      <a href="#home" className="text-lg md:text-xl font-bold tracking-tighter text-[#ba9eff] font-headline shrink-0">Student Portfolio</a>
      <div className="hidden lg:flex items-center gap-6 xl:gap-8 font-['Manrope'] tracking-[-0.02em] font-medium">
        <a href="#home" className={navClass('home')}>Home</a>
        <a href="#about" className={navClass('about')}>About</a>
        <a href="#education" className={navClass('education')}>Education</a>
        <a href="#skills" className={navClass('skills')}>Skills</a>
        <a href="#projects" className={navClass('projects')}>Projects</a>
        <a href="#experience" className={navClass('experience')}>Experience</a>
        <a href="#certifications" className={navClass('certifications')}>Certificates</a>
      </div>
      <a href="#contact" className="ml-4 md:ml-0 bg-gradient-to-br from-primary to-primary-dim px-4 md:px-6 py-2 rounded-lg text-on-primary-container font-bold text-xs md:text-sm hover:scale-95 active:scale-90 transition-transform whitespace-nowrap">
        Let's Talk
      </a>
    </nav>
  );
}
