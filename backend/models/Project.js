const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  tech: [{ type: String }],
  link: { type: String },
  github: { type: String },
  image: { type: String },
  shortDescription: { type: String },
  longDescription: { type: String },
  features: [{ type: String }],
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
