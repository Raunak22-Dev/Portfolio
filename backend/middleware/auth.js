const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  let token;

  // Check if authorization header exists and starts with Bearer
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Get token from header (Format: "Bearer <token>")
      token = req.headers.authorization.split(' ')[1];

      // Verify and decode cryptographic signature
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret_portfolio_2026');
      
      // Inject decoded payload downstream
      req.admin = decoded; 
      return next();
    } catch (error) {
      return res.status(401).json({ message: 'Not authorized: Token missing or invalid.' });
    }
  }

  if (!token) {
    return res.status(401).json({ message: 'Not authorized: No token provided.' });
  }
};

module.exports = { protect };
