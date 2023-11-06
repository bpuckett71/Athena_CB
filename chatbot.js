name:$chatbot.js

const openai = require('openai');

// Initialize OpenAI API
const openaiApi = new openai.OpenAI('<YOUR_API_KEY>');

// Function to send message to the chatbot
async function sendMessage(message) {
  try {
    // Generate a response from the chatbot
    const response = await openaiApi.complete({
      engine: 'davinci',
      prompt: message,
      maxTokens: 100,
      temperature: 0.6,
      n: 1,
      stop: '\n'
    });

    // Extract the generated response from the API response
    const generatedResponse = response.choices[0].text.trim();

    return generatedResponse;
  } catch (error) {
    console.error('Error:', error);
    return 'Sorry, I am unable to process your request at the moment.';
  }
}

module.exports = {
  sendMessage
};
