require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

// Import Route modules
const projectRoutes = require('./routes/projectRoutes');
const contactRoutes = require('./routes/contactRoutes');
const certificationRoutes = require('./routes/certificationRoutes');
const authRoutes = require('./routes/authRoutes');
const settingsRoutes = require('./routes/settingsRoutes');

const app = express();
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

// ── Security Middleware ─────────────────────────────────────────────────────

// Helmet: Sets secure HTTP headers (XSS protection, clickjacking prevention, MIME sniffing block)
app.use(helmet({
  contentSecurityPolicy: IS_PRODUCTION ? undefined : false, // Disable CSP in dev for easier debugging
  crossOriginEmbedderPolicy: false, // Allow loading cross-origin images (Unsplash etc.)
}));

// CORS: Restrict to known origins only
const allowedOrigins = [
  'http://localhost:5173',  // Vite dev server
  'http://localhost:4173',  // Vite preview
  process.env.FRONTEND_URL, // Production frontend URL (set in .env)
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    // In development, allow requests with no origin (Postman, curl)
    // In production, require a valid origin
    if (!origin && !IS_PRODUCTION) return callback(null, true);
    if (!origin && IS_PRODUCTION) return callback(new Error('Blocked by CORS policy'));
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error('Blocked by CORS policy'));
  },
  credentials: true,
}));

// Body parser with size limit to prevent DoS payload flooding
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

// NoSQL Injection Sanitization — disabled due to Express getter bug

// Global rate limiter: 100 requests per 15 minutes per IP
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: 'Too many requests, please try again later.' },
});
app.use('/api', globalLimiter);

// Dedicated contact form rate limiter: 10 submissions per 15 minutes per IP
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: 'Too many messages sent. Please try again later.' },
});
app.use('/api/contact', contactLimiter);

// ── Routes ──────────────────────────────────────────────────────────────────
app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/certifications', certificationRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/settings', settingsRoutes);

// Root Endpoint for health checking
app.get('/', (req, res) => {
  res.json({ message: 'Portfolio Backend API is running.' });
});

// ── Global Error Handler ────────────────────────────────────────────────────
app.use((err, req, res, next) => {
  // Catch CORS errors and other unhandled errors
  console.error('Unhandled error:', err.message);
  res.status(err.status || 500).json({ 
    message: IS_PRODUCTION ? 'Internal Server Error' : err.message 
  });
});

// ── Database Connection ─────────────────────────────────────────────────────
const PORT = process.env.PORT || 5000;
const DB_URI = process.env.MONGO_URI;

if (!DB_URI) {
  console.error('FATAL ERROR: MONGO_URI is not defined in .env file.');
  process.exit(1);
}

mongoose.connect(DB_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
    app.listen(PORT, () => {
      console.log(`Server running dynamically on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Database connection failed:', error.message);
  });
