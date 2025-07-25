import { useState, useCallback } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  dueDate?: Date;
}

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = useCallback((text: string, dueDate?: Date) => {
    if (text.trim() !== '') {
      setTodos(prev => [
        ...prev,
        {
          id: Date.now(),
          text,
          completed: false,
          dueDate
        },
      ]);
    }
  }, []);

  const toggleTodo = useCallback((id: number) => {
    setTodos(prev => prev.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  }, [id]);

  const deleteTodo = useCallback((id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, []);

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    completedCount: todos.filter(todo => todo.completed).length,
    totalCount: todos.length
  };
};