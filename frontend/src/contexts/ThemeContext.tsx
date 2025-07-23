'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

// テーマの型定義
type Theme = 'light' | 'dark';

// Context の型定義
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Context を作成
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Context Provider のプロパティの型定義
interface ThemeProviderProps {
  children: ReactNode;
}

// Context Provider コンポーネント
export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// カスタムフック
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
