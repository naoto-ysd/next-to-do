'use client';

import { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  dueDate?: Date;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');
  const { theme } = useTheme();
  const [inputDueDate, setInputDueDate] = useState<Date | undefined>(undefined);

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: inputValue,
          completed: false,
          dueDate: inputDueDate
        },
      ]);
      setInputValue('');
      setInputDueDate(undefined);
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className={`max-w-md mx-auto mt-8 p-6 rounded-lg shadow-lg transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-800' : 'bg-white'
    }`}>
      <h1 className={`text-2xl font-bold mb-6 text-center transition-colors duration-300 ${
        theme === 'dark' ? 'text-white' : 'text-gray-800'
      }`}>
        TODOリスト
      </h1>
      
      <div className="mb-4 flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="新しいタスクを入力..."
          className={`flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ${
            theme === 'dark' 
              ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
              : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
          }`}
        />
        <input
          type="date"
          value={inputDueDate ? inputDueDate.toISOString().split('T')[0] : ''}
          onChange={(e) => setInputDueDate(e.target.value ? new Date(e.target.value) : undefined)}
          className={`px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ${
            theme === 'dark' 
              ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
              : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
          }`}
          aria-label="タスクの期限を選択"
        />
        <button
          onClick={addTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          追加
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex items-center gap-3 p-3 rounded-md border transition-colors duration-300 ${
              todo.completed
                ? theme === 'dark' 
                  ? 'bg-gray-700 border-gray-600' 
                  : 'bg-gray-50 border-gray-200'
                : theme === 'dark'
                  ? 'bg-gray-800 border-gray-600'
                  : 'bg-white border-gray-300'
            }`}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              aria-label={`タスク「${todo.text}」を${todo.completed ? '未完了' : '完了'}にする`}
            />
            <span
              className={`flex-1 transition-colors duration-300 ${
                todo.completed
                  ? theme === 'dark'
                    ? 'line-through text-gray-400'
                    : 'line-through text-gray-500'
                  : theme === 'dark'
                    ? 'text-gray-200'
                    : 'text-gray-800'
              }`}
            >
              {todo.text}
            </span>
            <span>
              期限: {todo.dueDate?.toLocaleDateString('ja-JP')}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className={`px-2 py-1 text-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors ${
                theme === 'dark' ? 'hover:bg-red-900' : 'hover:bg-red-50'
              }`}
            >
              削除
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && (
        <p className={`text-center mt-8 transition-colors duration-300 ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
        }`}>
          まだタスクがありません。上記から新しいタスクを追加してください。
        </p>
      )}

      {todos.length > 0 && (
        <div className={`mt-6 text-sm text-center transition-colors duration-300 ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}>
          完了: {todos.filter(todo => todo.completed).length} / 
          全体: {todos.length}
        </div>
      )}
    </div>
  );
}
