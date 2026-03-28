const Settings = require('../models/Settings');

// GET /api/settings/featured — returns ordered array of 4 project IDs
const getFeaturedProjects = async (req, res) => {
  try {
    const setting = await Settings.findOne({ key: 'featuredProjects' });
    res.json(setting ? setting.value : []);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// PUT /api/settings/featured — saves ordered array of up to 4 project IDs
const setFeaturedProjects = async (req, res) => {
  try {
    const { projectIds } = req.body;
    if (!Array.isArray(projectIds) || projectIds.length > 4) {
      return res.status(400).json({ message: 'Provide an array of up to 4 project IDs.' });
    }
    const setting = await Settings.findOneAndUpdate(
      { key: 'featuredProjects' },
      { value: projectIds },
      { upsert: true, new: true }
    );
    res.json({ message: 'Featured projects updated.', data: setting.value });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

module.exports = { getFeaturedProjects, setFeaturedProjects };
