const express = require("express");
const router = express.Router();

const {
  createContact,
  getMessages,
  deleteMessage,
} = require("../controllers/contactController");

// Submit Contact Form
router.post("/", createContact);

// Get All Messages (Admin Dashboard)
router.get("/", getMessages);

// Delete Message
router.delete("/:id", deleteMessage);

module.exports = router;