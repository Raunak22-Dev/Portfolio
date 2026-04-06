const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  let token;

  const jwtSecret = process.env.JWT_SECRET;

  // Fail safe: refuse to operate if JWT_SECRET is missing
  if (!jwtSecret) {
    console.error('CRITICAL: JWT_SECRET is not set in environment.');
    return res.status(500).json({ message: 'Server configuration error.' });
  }

  // Check if authorization header exists and starts with Bearer
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Get token from header (Format: "Bearer <token>")
      token = req.headers.authorization.split(' ')[1];

      // Verify and decode cryptographic signature — no fallback secret
      const decoded = jwt.verify(token, jwtSecret);
      
      // Inject decoded payload downstream
      req.admin = decoded; 
      return next();
    } catch (error) {
      // This catches both expired and invalid tokens
      const msg = error.name === 'TokenExpiredError' 
        ? 'Session expired. Please log in again.' 
        : 'Not authorized: Token invalid.';
      return res.status(401).json({ message: msg });
    }
  }

  if (!token) {
    return res.status(401).json({ message: 'Not authorized: No token provided.' });
  }
};

module.exports = { protect };
