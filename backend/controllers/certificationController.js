const Certification = require('../models/Certification');

const getCertifications = async (req, res) => {
  try {
    const certs = await Certification.find().sort({ createdAt: -1 });
    res.json(certs);
  } catch (error) {
    res.status(500).json({ message: 'Server Error: Unable to fetch certifications', error: error.message });
  }
};

const createCertification = async (req, res) => {
  try {
    const newCert = new Certification(req.body);
    const savedCert = await newCert.save();
    res.status(201).json(savedCert);
  } catch (error) {
    res.status(400).json({ message: 'Bad Request: Failed to save certification', error: error.message });
  }
};

module.exports = { getCertifications, createCertification };
