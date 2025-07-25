
import React from 'react';
import { SunIcon, MoonIcon } from '../constants';

interface ThemeToggleProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="absolute top-4 right-4 p-2 rounded-full text-zinc-500 dark:text-zinc-400 hover:bg-slate-200 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 focus:ring-offset-slate-100 dark:focus:ring-offset-zinc-900 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? MoonIcon : SunIcon}
    </button>
  );
};

export default ThemeToggle;
