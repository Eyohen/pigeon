import React, { useState } from 'react';
import ChatRoom from './ChatRoom';
import { useAuth } from '../context/AuthContext';

function AdminMessage() {
  const {user} = useAuth() 
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  const [joined, setJoined] = useState(false);

  

  const handleJoin = (e) => {
    e.preventDefault();
    if (username && room) {
      setJoined(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {!joined ? (
        <form onSubmit={handleJoin} className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Join Chat</h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
          />
          <input
            type="text"
            placeholder="Room"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
          />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
            Join
          </button>
        </form>
      ) : (
        <ChatRoom username={username} room={room} />
      )}
    </div>
  );
}

export default AdminMessage;