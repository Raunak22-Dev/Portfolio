const express = require('express');
const router = express.Router();
const { createMessage, getMessages, deleteMessage } = require('../controllers/contactController');
const { protect } = require('../middleware/auth');

router.post('/', createMessage);
router.get('/', protect, getMessages);       // 🔒 Protected: admin-only inbox
router.delete('/:id', protect, deleteMessage); // 🔒 Protected: admin-only delete

module.exports = router;
