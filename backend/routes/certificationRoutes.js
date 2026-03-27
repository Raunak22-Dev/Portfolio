const express = require('express');
const router = express.Router();
const { getCertifications, createCertification } = require('../controllers/certificationController');
const { protect } = require('../middleware/auth');

router.get('/', getCertifications);
router.post('/', protect, createCertification);

module.exports = router;
