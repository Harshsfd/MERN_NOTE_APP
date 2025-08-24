const express = require("express");
const router = express.Router();
const Note = require("../models/Note");
const auth = require("../middleware/authMiddleware");

// ✅ Get all notes of logged-in user
router.get("/", auth, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user }).sort({ createdAt: -1 });
    res.json(notes);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server error while fetching notes" });
  }
});

// ✅ Create a new note
router.post("/", auth, async (req, res) => {
  const { title, content } = req.body;
  try {
    const note = new Note({
      title,
      content,
      user: req.user,
    });
    await note.save();
    res.json(note);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server error while creating note" });
  }
});

// ✅ Update a note
router.put("/:id", auth, async (req, res) => {
  const { title, content } = req.body;
  try {
    const note = await Note.findOneAndUpdate(
      { _id: req.params.id, user: req.user },
      { title, content },
      { new: true }
    );

    if (!note) return res.status(404).json({ msg: "Note not found" });

    res.json(note);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server error while updating note" });
  }
});

// ✅ Delete a note
router.delete("/:id", auth, async (req, res) => {
  try {
    const note = await Note.findOneAndDelete({
      _id: req.params.id,
      user: req.user,
    });

    if (!note) return res.status(404).json({ msg: "Note not found" });

    res.json({ msg: "Note deleted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server error while deleting note" });
  }
});

module.exports = router;