import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Silent lookup for the signed authorization payload
  const token = localStorage.getItem('master_admin_token');
  
  if (!token) {
    // Immediate deflection to the lock screen on authentication failure
    return <Navigate to="/admin" replace />;
  }
  
  // Render the internal dashboard engine securely
  return children;
};

export default ProtectedRoute;
