const Certification = require('../models/Certification');
const { sanitizeBody, isValidObjectId } = require('../utils/validation');

const ALLOWED_FIELDS = ['title', 'issuer', 'date', 'credentialId', 'link', 'image', 'skills'];

const getCertifications = async (req, res) => {
  try {
    const certs = await Certification.find().sort({ createdAt: -1 });
    res.json(certs);
  } catch (error) {
    res.status(500).json({ message: 'Server Error: Unable to fetch certifications' });
  }
};

const createCertification = async (req, res) => {
  try {
    const data = sanitizeBody(req.body, ALLOWED_FIELDS);
    if (!data.title || !data.issuer) {
      return res.status(400).json({ message: 'Title and issuer are required.' });
    }
    const newCert = new Certification(data);
    const savedCert = await newCert.save();
    res.status(201).json(savedCert);
  } catch (error) {
    res.status(400).json({ message: 'Bad Request: Failed to save certification' });
  }
};

const updateCertification = async (req, res) => {
  try {
    if (!isValidObjectId(req.params.id)) {
      return res.status(400).json({ message: 'Invalid certification ID format.' });
    }
    const data = sanitizeBody(req.body, ALLOWED_FIELDS);
    const updated = await Certification.findByIdAndUpdate(req.params.id, data, { new: true, runValidators: true });
    if (!updated) return res.status(404).json({ message: 'Certification not found' });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: 'Update failed' });
  }
};

const deleteCertification = async (req, res) => {
  try {
    if (!isValidObjectId(req.params.id)) {
      return res.status(400).json({ message: 'Invalid certification ID format.' });
    }
    const cert = await Certification.findByIdAndDelete(req.params.id);
    if (!cert) return res.status(404).json({ message: 'Certification not found' });
    res.json({ message: 'Certification deleted.' });
  } catch (error) {
    res.status(500).json({ message: 'Delete failed' });
  }
};

module.exports = { getCertifications, createCertification, updateCertification, deleteCertification };
