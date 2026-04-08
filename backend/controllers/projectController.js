const Project = require('../models/Project');
const { sanitizeBody, isValidObjectId } = require('../utils/validation');

// Whitelist of allowed fields to prevent mass assignment attacks
const ALLOWED_FIELDS = ['title', 'type', 'tech', 'link', 'github', 'image', 'shortDescription', 'longDescription', 'features'];

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Server Error: Unable to fetch projects' });
  }
};

const getProjectById = async (req, res) => {
  try {
    if (!isValidObjectId(req.params.id)) {
      return res.status(400).json({ message: 'Invalid project ID format.' });
    }
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: 'Server Error: Invalid ID or fetch failed' });
  }
};

const createProject = async (req, res) => {
  try {
    const data = sanitizeBody(req.body, ALLOWED_FIELDS);
    if (!data.title || !data.type) {
      return res.status(400).json({ message: 'Title and type are required.' });
    }
    const newProject = new Project(data);
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(400).json({ message: 'Bad Request: Failed to save project' });
  }
};

const updateProject = async (req, res) => {
  try {
    if (!isValidObjectId(req.params.id)) {
      return res.status(400).json({ message: 'Invalid project ID format.' });
    }
    const data = sanitizeBody(req.body, ALLOWED_FIELDS);
    const updated = await Project.findByIdAndUpdate(req.params.id, data, { new: true, runValidators: true });
    if (!updated) return res.status(404).json({ message: 'Project not found' });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: 'Update failed' });
  }
};

const deleteProject = async (req, res) => {
  try {
    if (!isValidObjectId(req.params.id)) {
      return res.status(400).json({ message: 'Invalid project ID format.' });
    }
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json({ message: 'Project successfully deleted from database.' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error: Unable to delete project' });
  }
};

module.exports = { getProjects, getProjectById, createProject, updateProject, deleteProject };
