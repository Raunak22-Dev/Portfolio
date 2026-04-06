const Contact = require('../models/Contact');

// Allowed max lengths to prevent abuse
const MAX_NAME = 100;
const MAX_EMAIL = 254;     // RFC 5321
const MAX_SUBJECT = 200;
const MAX_MESSAGE = 2000;

/**
 * Strip HTML tags to prevent stored XSS attacks.
 * This removes any <script>, <img onerror>, etc. from user input
 * before it's persisted to the database.
 */
const stripHtml = (str) => {
  if (typeof str !== 'string') return '';
  return str.replace(/<[^>]*>/g, '').trim();
};

const createMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Required field validation
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Please provide name, email, and message.' });
    }

    // Type validation
    if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
      return res.status(400).json({ message: 'Invalid input types.' });
    }

    // Length validation to prevent spam/DoS payloads
    if (name.length > MAX_NAME || email.length > MAX_EMAIL || message.length > MAX_MESSAGE) {
      return res.status(400).json({ message: 'Input exceeds allowed length.' });
    }
    if (subject && (typeof subject !== 'string' || subject.length > MAX_SUBJECT)) {
      return res.status(400).json({ message: 'Subject is invalid or too long.' });
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Please provide a valid email address.' });
    }

    // Sanitize: trim whitespace + strip HTML tags for XSS prevention
    const newContactMessage = new Contact({
      name: stripHtml(name),
      email: email.trim().toLowerCase(),
      subject: subject ? stripHtml(subject) : '',
      message: stripHtml(message),
    });

    await newContactMessage.save();
    res.status(201).json({ message: 'Message sent successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error: Unable to send message' });
  }
};

const getMessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const deleteMessage = async (req, res) => {
  try {
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ message: 'Invalid message ID format.' });
    }
    const msg = await Contact.findByIdAndDelete(req.params.id);
    if (!msg) return res.status(404).json({ message: 'Message not found' });
    res.json({ message: 'Message deleted.' });
  } catch (error) {
    res.status(500).json({ message: 'Delete failed' });
  }
};

module.exports = { createMessage, getMessages, deleteMessage };
