const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.get('/', async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
});

router.post('/post', async (req, res) => {
  const newContact = new Contact(req.body);
  const saved = await newContact.save();
  res.json(saved);
});

module.exports = router;
