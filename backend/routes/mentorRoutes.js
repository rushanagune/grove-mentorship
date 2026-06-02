const express = require('express');
const router = express.Router();
const Mentor = require('../models/Mentor');

// GET /api/mentors 
router.get('/', async (req, res) => {
  try {
    const mentors = await Mentor.find({ isActive: true });
    res.json(mentors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST /api/mentors 
router.post('/', async (req, res) => {
  try {
    const mentor = new Mentor(req.body);
    await mentor.save();
    res.status(201).json(mentor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;