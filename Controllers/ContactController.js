const Contact = require('../Models/ContactModel');

// POST /api/contact
const submitContact = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, department, message } = req.body;
    if (!firstName || !lastName || !email || !department || !message)
      return res.status(400).json({ message: 'All required fields must be filled.' });

    await Contact.create({ firstName, lastName, email, phone, department, message });
    res.status(201).json({ message: "Message received! We'll get back to you within 24 hours." });
  } catch (err) {
    res.status(500).json({ message: 'Server error.', error: err.message });
  }
};

module.exports = { submitContact };
