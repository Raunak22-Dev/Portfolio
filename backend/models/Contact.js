const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: 100, trim: true },
  email: { type: String, required: true, maxlength: 254, trim: true, lowercase: true },
  subject: { type: String, maxlength: 200, trim: true },
  message: { type: String, required: true, maxlength: 2000, trim: true },
}, { timestamps: true }); // timestamps automatically adds createdAt and updatedAt

module.exports = mongoose.model('Contact', contactSchema);
