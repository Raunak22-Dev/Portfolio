const express = require('express');
const router = express.Router();
const { getProjects, getProjectById, createProject, deleteProject } = require('../controllers/projectController');
const { protect } = require('../middleware/auth');

router.get('/', getProjects);
router.get('/:id', getProjectById);
router.post('/', protect, createProject);
router.delete('/:id', protect, deleteProject);

module.exports = router;
