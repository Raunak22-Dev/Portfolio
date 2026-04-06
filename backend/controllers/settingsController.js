const Settings = require('../models/Settings');

// GET /api/settings/featured — returns ordered array of up to 4 project IDs
const getFeaturedProjects = async (req, res) => {
  try {
    const setting = await Settings.findOne({ key: 'featuredProjects' });
    res.json(setting ? setting.value : []);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// PUT /api/settings/featured — saves ordered array of up to 4 project IDs
const setFeaturedProjects = async (req, res) => {
  try {
    const { projectIds } = req.body;
    if (!Array.isArray(projectIds) || projectIds.length > 4) {
      return res.status(400).json({ message: 'Provide an array of up to 4 project IDs.' });
    }

    // Validate that every entry is a valid ObjectId string
    const idRegex = /^[0-9a-fA-F]{24}$/;
    const allValid = projectIds.every(id => typeof id === 'string' && idRegex.test(id));
    if (!allValid) {
      return res.status(400).json({ message: 'All IDs must be valid 24-char hex strings.' });
    }

    const setting = await Settings.findOneAndUpdate(
      { key: 'featuredProjects' },
      { value: projectIds },
      { upsert: true, new: true }
    );
    res.json({ message: 'Featured projects updated.', data: setting.value });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { getFeaturedProjects, setFeaturedProjects };
