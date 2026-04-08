const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true, maxlength: 150, trim: true },
  type: { type: String, required: true, maxlength: 100, trim: true },
  tech: [{ type: String, maxlength: 50, trim: true }],
  link: { type: String, maxlength: 500, trim: true },
  github: { type: String, maxlength: 500, trim: true },
  image: { type: String, maxlength: 500, trim: true },
  shortDescription: { type: String, maxlength: 300, trim: true },
  longDescription: { type: String, maxlength: 5000, trim: true },
  features: [{ type: String, maxlength: 200, trim: true }],
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
