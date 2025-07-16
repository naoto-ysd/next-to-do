'use client';

import { useState } from 'react';

interface Message {
  id: number;
  text: string;
  speaker: string;
}

export default function Message() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [inputUser, setInputUser] = useState('');

  const addMessage = () => {
    if (inputValue.trim() !== '' && inputUser.trim() !== '') {
      setMessages([
        ...messages,
        {
          id: Date.now(),
          text: inputValue,
          speaker: inputUser,
        },
      ]);
      setInputValue('');
      setInputUser('');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        メッセージ
      </h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border border-gray-300 p-2 rounded-lg w-full"
        placeholder="メッセージを入力..."
      />
      <input
        type="text"
        value={inputUser}
        onChange={(e) => setInputUser(e.target.value)}
        className="border border-gray-300 p-2 rounded-lg w-full"
        placeholder="ユーザー名を入力..."
      />
      <button
        onClick={addMessage}
        className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        送信
      </button>
      <span>
        {messages.map((msg) => (
          <div key={msg.id}>
            <strong>{msg.speaker}:</strong> {msg.text}
          </div>
        ))}
      </span>
    </div>
  );
}
