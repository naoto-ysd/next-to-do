'use client';

import { useTheme } from '@/contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2
        ${theme === 'light' 
          ? 'bg-gray-800 text-white hover:bg-gray-700' 
          : 'bg-yellow-400 text-gray-900 hover:bg-yellow-300'
        }
      `}
    >
      {theme === 'light' ? (
        <>
          🌙 ダークモード
        </>
      ) : (
        <>
          ☀️ ライトモード
        </>
      )}
    </button>
  );
}
