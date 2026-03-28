
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Education from '../components/sections/Education';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Certifications from '../components/sections/Certifications';
import ContactSection from '../components/sections/ContactSection';

export default function Home() {
  return (
    <main>

      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <ContactSection />
    </main>
  );
}
