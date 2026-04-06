import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import profilePic from "../../../public/Crop version.jpeg";

/* --- Magnetic Button --- */
function MagneticButton({ children, className, href, to }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    window.requestAnimationFrame(() => {
      if (!ref.current) return;
      const { height, width, left, top } = ref.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      ref.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });
  };

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0,0)';
  };

  const cls = `${className} transition-transform duration-300 ease-out will-change-transform`;
  if (to) return <Link to={to} ref={ref} onMouseMove={handleMove} onMouseLeave={handleLeave} className={cls}>{children}</Link>;
  return <a href={href} ref={ref} onMouseMove={handleMove} onMouseLeave={handleLeave} className={cls}>{children}</a>;
}

/* --- Typewriter Effect --- */
function Typewriter({ words, typingSpeed = 100, deletingSpeed = 60, pauseTime = 2000 }) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timer;

    if (!isDeleting) {
      if (text !== currentWord) {
        timer = setTimeout(() => setText(currentWord.substring(0, text.length + 1)), typingSpeed);
      } else {
        timer = setTimeout(() => setIsDeleting(true), pauseTime);
      }
    } else {
      if (text !== '') {
        timer = setTimeout(() => setText(currentWord.substring(0, text.length - 1)), deletingSpeed);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary-dim">
      {text}
      <span className="inline-block w-[3px] h-[0.85em] bg-secondary ml-1 align-middle animate-[blink_1s_step-end_infinite]" />
    </span>
  );
}

/* --- Hero --- */
export default function Hero() {
  const roles = ['Data Analyst', 'Python Developer'];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 px-6">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[150px] rounded-full transform-gpu"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/10 blur-[150px] rounded-full transform-gpu"></div>
      </div>

      <div className="max-w-7xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left: Text */}
        <div className="order-2 lg:order-1 lg:col-span-7 space-y-8 text-center lg:text-left">
          {/* Desktop Badge */}
          <div className="hidden lg:inline-flex items-center px-4 py-1.5 rounded-full border border-outline-variant/20 bg-surface-container-low/50 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-secondary mr-3 animate-pulse shadow-[0_0_8px_rgba(83,221,252,0.8)]"></span>
            <span className="text-xs sm:text-sm font-label uppercase tracking-widest text-on-surface-variant font-bold">Actively Seeking Opportunities</span>
          </div>

          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] leading-[1.1] font-extrabold tracking-tighter text-on-surface">
            Hi,<br />
            I'm Raunak Gangwal<br />
            <Typewriter words={roles} typingSpeed={100} deletingSpeed={60} pauseTime={2200} />
          </h1>

          <p className="text-base sm:text-lg text-on-surface-variant max-w-xl leading-relaxed mx-auto lg:mx-0">
            I am a data analyst who is passionate about using data to solve real-world problems. I am a quick learner and a team player, and I am always looking for new challenges to take on.
          </p>

          <div className="flex flex-wrap gap-5 pt-4 justify-center lg:justify-start">
            <MagneticButton href="/#projects" className="px-8 py-4 bg-gradient-to-br from-primary to-primary-dim rounded-lg font-bold text-on-primary shadow-lg shadow-primary/20 flex items-center justify-center">
              View Projects
            </MagneticButton>
            <MagneticButton to="/resume" className="px-8 py-4 border border-outline-variant/30 rounded-lg font-bold text-on-surface hover:border-outline-variant/60 flex items-center justify-center group">
              The Resume
              <span className="material-symbols-outlined ml-2 text-lg opacity-50 group-hover:opacity-100 transition-opacity">visibility</span>
            </MagneticButton>
          </div>
        </div>

        {/* Right: Image */}
        <div className="order-1 lg:order-2 lg:col-span-5 flex flex-col justify-center lg:justify-end items-center mb-6 lg:mb-0 gap-10 lg:gap-0">
          
          {/* Mobile Badge (Shown Above Image) */}
          <div className="lg:hidden inline-flex items-center px-4 py-1.5 rounded-full border border-outline-variant/20 bg-surface-container-low/50 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-secondary mr-3 animate-pulse shadow-[0_0_8px_rgba(83,221,252,0.8)]"></span>
            <span className="text-xs sm:text-sm font-label uppercase tracking-widest text-on-surface-variant font-bold">Actively Seeking Opportunities</span>
          </div>
          {/* Morphing Blob Portrait */}
          <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[26rem] lg:h-[26rem] blob-shape bg-surface-container-high border-2 border-outline-variant/30 overflow-hidden shadow-[0_0_120px_rgba(186,158,255,0.6)] group animate-[float_6s_ease-in-out_infinite]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 z-10 opacity-50 group-hover:opacity-0 transition-opacity duration-700"></div>
            <img
              alt="Professional portrait"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              src={profilePic}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
