import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

// Core Application Views
import Home from './pages/Home';
import AllProjects from './pages/AllProjects';
import ProjectDetails from './pages/ProjectDetails';
import AllCertificates from './pages/AllCertificates';
import ResumeViewer from './pages/ResumeViewer';

// Private Administration Sector
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoute from './guards/ProtectedRoute';

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
          
          {/* Mission Control Vault */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
