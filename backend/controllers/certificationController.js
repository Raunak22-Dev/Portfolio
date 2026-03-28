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

const updateCertification = async (req, res) => {
  try {
    const updated = await Certification.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Certification not found' });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: 'Update failed', error: error.message });
  }
};

const deleteCertification = async (req, res) => {
  try {
    const cert = await Certification.findByIdAndDelete(req.params.id);
    if (!cert) return res.status(404).json({ message: 'Certification not found' });
    res.json({ message: 'Certification deleted.' });
  } catch (error) {
    res.status(500).json({ message: 'Delete failed', error: error.message });
  }
};

module.exports = { getCertifications, createCertification, updateCertification, deleteCertification };
