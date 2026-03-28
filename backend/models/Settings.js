const mongoose = require('mongoose');

// Stores singleton settings document - featured project order
const settingsSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true },
  value: { type: mongoose.Schema.Types.Mixed }
}, { timestamps: true });

module.exports = mongoose.model('Settings', settingsSchema);
