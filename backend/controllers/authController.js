const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const rateLimit = require('express-rate-limit');

// ── Brute-Force Protection ──────────────────────────────────────────────────
// Strict rate limiter: 5 login attempts per 15 minutes per IP
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,    // 15-minute window
  max: 5,                       // 5 attempts max
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: 'Too many login attempts. Please try again after 15 minutes.' },
  skipSuccessfulRequests: true,  // Only count failed attempts
});

/**
 * Constant-time string comparison using crypto.timingSafeEqual.
 * Prevents timing attacks by ensuring comparison time is the same
 * regardless of where the strings differ.
 */
const safeCompare = (a, b) => {
  if (typeof a !== 'string' || typeof b !== 'string') return false;
  // Pad to same length to avoid leaking length info via timingSafeEqual throwing
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) {
    // Still do a comparison to avoid timing leak, but always return false
    const dummy = Buffer.alloc(bufA.length);
    crypto.timingSafeEqual(bufA, dummy);
    return false;
  }
  return crypto.timingSafeEqual(bufA, bufB);
};

const loginAdmin = (req, res) => {
  const { password } = req.body;
  const adminPassword = process.env.ADMIN_PASSWORD;
  const jwtSecret = process.env.JWT_SECRET;

  // Fail safe: refuse to operate if critical env vars are missing
  if (!adminPassword || !jwtSecret) {
    console.error('CRITICAL: ADMIN_PASSWORD or JWT_SECRET is not set in environment.');
    return res.status(500).json({ message: 'Server configuration error.' });
  }

  if (!password || typeof password !== 'string') {
    return res.status(400).json({ message: 'Please provide a password.' });
  }

  // Constant-time comparison to mitigate timing attacks
  if (safeCompare(password, adminPassword)) {
    const token = jwt.sign(
      { id: 'master_admin', iat: Math.floor(Date.now() / 1000) },
      jwtSecret,
      { expiresIn: '24h' }
    );
    res.json({ token, message: 'Authentication successful' });
  } else {
    // Intentionally vague error message — don't reveal any details
    res.status(401).json({ message: 'Invalid credentials.' });
  }
};

module.exports = { loginAdmin, loginLimiter };
