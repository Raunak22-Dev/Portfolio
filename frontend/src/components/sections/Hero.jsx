import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

/* --- Magnetic Button --- */
function MagneticButton({ children, className, href, to }) {
  const ref = useRef(null);
  const handleMove = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    ref.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };
  const handleLeave = () => { ref.current.style.transform = 'translate(0,0)'; };
  const cls = `${className} transition-transform duration-300 ease-out will-change-transform`;
  if (to) return <Link to={to} ref={ref} onMouseMove={handleMove} onMouseLeave={handleLeave} className={cls}>{children}</Link>;
  return <a href={href} ref={ref} onMouseMove={handleMove} onMouseLeave={handleLeave} className={cls}>{children}</a>;
}

/* --- Hero --- */
export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 px-6">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-7xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left: Text */}
        <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-outline-variant/20 bg-surface-container-low/50 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-secondary mr-3 animate-pulse shadow-[0_0_8px_rgba(83,221,252,0.8)]"></span>
            <span className="text-xs sm:text-sm font-label uppercase tracking-widest text-on-surface-variant font-bold">Actively Seeking Opportunities</span>
          </div>

          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] leading-[1.1] font-extrabold tracking-tighter text-on-surface">
            Designing <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary-dim">Digital Frontiers</span>
          </h1>

          <p className="text-base sm:text-lg text-on-surface-variant max-w-xl leading-relaxed mx-auto lg:mx-0">
            A boutique engineering approach where high-end aesthetics meet surgical precision. I curate solutions that pulsate with energy and define modern web interaction.
          </p>

          <div className="flex flex-wrap gap-5 pt-4 justify-center lg:justify-start">
            <MagneticButton href="#projects" className="px-8 py-4 bg-gradient-to-br from-primary to-primary-dim rounded-lg font-bold text-on-primary shadow-lg shadow-primary/20 flex items-center justify-center">
              View Projects
            </MagneticButton>
            <MagneticButton to="/resume" className="px-8 py-4 border border-outline-variant/30 rounded-lg font-bold text-on-surface hover:border-outline-variant/60 flex items-center justify-center group">
              The Resume
              <span className="material-symbols-outlined ml-2 text-lg opacity-50 group-hover:opacity-100 transition-opacity">visibility</span>
            </MagneticButton>
          </div>
        </div>

        {/* Right: Image */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end items-center mt-12 lg:mt-0">
          {/* Morphing Blob Portrait */}
          <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[26rem] lg:h-[26rem] blob-shape bg-surface-container-high border-2 border-outline-variant/30 overflow-hidden shadow-[0_0_120px_rgba(186,158,255,0.6)] group animate-[float_6s_ease-in-out_infinite]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 z-10 opacity-50 group-hover:opacity-0 transition-opacity duration-700"></div>
            <img
              alt="Professional portrait"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
