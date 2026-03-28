const express = require('express');
const router = express.Router();
const { getFeaturedProjects, setFeaturedProjects } = require('../controllers/settingsController');
const { protect } = require('../middleware/auth');

router.get('/featured', getFeaturedProjects);
router.put('/featured', protect, setFeaturedProjects);

module.exports = router;
