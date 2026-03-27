const jwt = require('jsonwebtoken');

const loginAdmin = (req, res) => {
  const { password } = req.body;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!password) {
    return res.status(400).json({ message: 'Please provide a password.' });
  }

  if (password === adminPassword) {
    const token = jwt.sign(
      { id: 'master_admin' }, 
      process.env.JWT_SECRET || 'fallback_secret_portfolio_2026', 
      { expiresIn: '24h' }
    );
    res.json({ token, message: 'Authentication successful' });
  } else {
    res.status(401).json({ message: 'Invalid Admin Password.' });
  }
};

module.exports = { loginAdmin };
