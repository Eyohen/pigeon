import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import { URL } from '../url';
import { useAuth } from '../context/AuthContext';





const API_BASE_URL = `${URL}/api/chat`;


function ChatRoom({ username, room }) {
  const {user} = useAuth()
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io(URL);
    console.log("checking socker", socketRef.current)

    socketRef.current.emit('join_room', room);

    socketRef.current.on('new_message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    fetchMessages();

    return () => {
      socketRef.current.emit('leave_room', room);
      socketRef.current.disconnect();
    };
  }, [room]);

  const fetchMessages = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/messages/${room}`);
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (inputMessage.trim() !== '') {
      try {
        await axios.post(`${API_BASE_URL}/send`, {
          sender: user?.fname,
          message: inputMessage,
          room: room,
        });
        setInputMessage('');
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
      <h2 className="text-2xl font-bold mb-4">Chat Room: {room}</h2>
      <div className="h-96 overflow-y-auto mb-4 p-4 border rounded">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 ${
              msg.sender === username ? 'text-right' : 'text-left'
            }`}
          >
            <span className="font-bold">{msg.sender}: </span>
            <span>{msg.message}</span>
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="flex">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          className="flex-grow p-2 border rounded-l"
          placeholder="Type a message..."
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-r"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatRoom;