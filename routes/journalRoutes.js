const express = require('express');
const Journal = require('../models/Journal');
const { verifyToken } = require('../middleware/auth');
const router = express.Router();

// Get journal entries
router.get('/', verifyToken, async (req, res) => {
  const { date } = req.query;
  const userId = req.user;

  try {
    if (date) {
      const journal = await Journal.findOne({ date, userId });
      if (journal) return res.json(journal);
      return res.status(404).json({ message: "Journal entry not found" });
    } else {
      const journals = await Journal.find({ userId });
      return res.json(journals);
    }
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Create a new journal entry
router.post('/', verifyToken, async (req, res) => {
  const { date, content } = req.body;
  const userId = req.user;

  try {
    const existingJournal = await Journal.findOne({ date, userId });
    if (existingJournal) return res.status(400).json({ message: "Journal entry already exists" });

    const newJournal = new Journal({ date, content, userId });
    await newJournal.save();
    res.status(201).json(newJournal);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Update a journal entry
router.put('/:date', verifyToken, async (req, res) => {
  const { date } = req.params;
  const { content } = req.body;
  const userId = req.user;

  try {
    const updatedJournal = await Journal.findOneAndUpdate(
      { date, userId },
      { content },
      { new: true }
    );
    if (!updatedJournal) return res.status(404).json({ message: "Journal entry not found" });
    res.json(updatedJournal);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
