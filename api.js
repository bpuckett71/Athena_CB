name:$api.js

const express = require('express');
const router = express.Router();
const chatbot = require('./chatbot');

router.post('/chat', async (req, res) => {
  const message = req.body.message;
  const response = await chatbot.sendMessage(message);
  res.json({ response });
});

module.exports = router;
