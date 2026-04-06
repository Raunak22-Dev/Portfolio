import { Navigate, useLocation } from 'react-router-dom';

/**
 * Decode a JWT payload without a library.
 * Returns the parsed payload object or null if invalid.
 */
const decodeJwtPayload = (token) => {
  try {
    const base64Url = token.split('.')[1];
    if (!base64Url) return null;
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const payload = JSON.parse(atob(base64));
    return payload;
  } catch {
    return null;
  }
};

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const token = localStorage.getItem('master_admin_token');
  
  // Validate token exists and hasn't expired by reading the JWT's own exp claim
  // This is more secure than a separate localStorage timestamp which can be tampered with
  let isValid = false;
  if (token) {
    const payload = decodeJwtPayload(token);
    if (payload && payload.exp) {
      // JWT exp is in seconds, Date.now() is in milliseconds
      isValid = Date.now() < payload.exp * 1000;
    }
  }

  if (!isValid) {
    // Session is invalid or expired. Purge local storage
    localStorage.removeItem('master_admin_token');
    localStorage.removeItem('master_admin_expires');
    
    // Immediate deflection to the lock screen
    return <Navigate to="/admin" state={{ from: location }} replace />;
  }
  
  // Render the internal dashboard engine securely
  return children;
};

export default ProtectedRoute;
