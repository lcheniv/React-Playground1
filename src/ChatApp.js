import React, { useState, useEffect } from 'react';
import io from 'socket.io-client'; // a client-side JavaScript library that enables real-time communication between the browser and the server

const socket = io('http://localhost:3000'); // assuming the chat API server is running on the same machine and port

function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message]);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    socket.emit('message', messageInput);
    setMessageInput('');
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Type your message here"
          value={messageInput}
          onChange={(event) => setMessageInput(event.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatApp;
