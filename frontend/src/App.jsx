import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import Home from './pages/Home';
import AllProjects from './pages/AllProjects';
import ProjectDetails from './pages/ProjectDetails';
import AllCertificates from './pages/AllCertificates';
import ResumeViewer from './pages/ResumeViewer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-on-surface font-body selection:bg-primary/30 relative overflow-x-hidden">
        <ParticleBackground />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/certifications" element={<AllCertificates />} />
          <Route path="/resume" element={<ResumeViewer />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
