'use client';

import { useState } from 'react';
interface NameForm {
  onSubmit: (name: string) => void;
}

export default function NameForm({ onSubmit }: NameForm) {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(name);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="名前を入力"
      />
      <button type="submit">送信</button>
    </form>
  );
}
