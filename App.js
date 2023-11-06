import React, { useState } from 'react';
import './styles.css';
import api from './api';

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSendMessage = async () => {
    try {
      const res = await api.post('/chat', { message });
      setResponse(res.data.response);
    } catch (error) {
      console.error('Error:', error);
      setResponse('Sorry, I am unable to process your request at the moment.');
    }
  };

  return (
    <div className="App">
      <h1>AI Chatbot</h1>
      <div className="chat-container">
        <div className="message-container">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
        <div className="response-container">
          {response && <p>{response}</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
</h1>