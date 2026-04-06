const express = require('express');
const router = express.Router();
const { loginAdmin, loginLimiter } = require('../controllers/authController');

// Apply brute-force rate limiter to the login endpoint
router.post('/login', loginLimiter, loginAdmin);

module.exports = router;
