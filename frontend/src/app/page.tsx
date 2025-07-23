'use client';

import TodoList from "@/components/TodoList";
import Message from "@/components/Message";
import MyCarousel from "@/components/MyCarousel";
import ThemeToggle from "@/components/ThemeToggle";
import { useTheme } from "@/contexts/ThemeContext";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className={`min-h-screen transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
      }`}>
        <header className={`py-4 transition-colors duration-300 ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-blue-600'
        } text-white`}>
          <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Next.js TODOアプリ</h1>
            <ThemeToggle />
          </div>
        </header>
        <main className="py-8">
          <div className="max-w-4xl mx-auto px-4">
            <TodoList />
            <Message />
            <MyCarousel />
          </div>
        </main>
        <footer className={`py-4 transition-colors duration-300 ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-gray-800'
        } text-white`}>
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p>&copy; 2025 TODOアプリ</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
