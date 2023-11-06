const express = require('express');
const app = express();
const chatbot = require('./chatbot');
const api = require('./api');

app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/api/chat', async (req, res) => {
  const message = req.body.message;
  const response = await chatbot.sendMessage(message);
  res.json({ response });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
