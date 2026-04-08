const mongoose = require('mongoose');

const certificationSchema = new mongoose.Schema({
  title: { type: String, required: true, maxlength: 150, trim: true },
  issuer: { type: String, required: true, maxlength: 150, trim: true },
  date: { type: String, maxlength: 100, trim: true },
  credentialId: { type: String, maxlength: 100, trim: true },
  link: { type: String, maxlength: 500, trim: true },
  image: { type: String, maxlength: 500, trim: true },
  skills: [{ type: String, maxlength: 100, trim: true }],
}, { timestamps: true });

module.exports = mongoose.model('Certification', certificationSchema);
