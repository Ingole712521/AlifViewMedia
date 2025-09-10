import React from 'react'
import { Sun, Moon } from 'lucide-react'

interface ThemeToggleProps {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-6 rounded-full p-1 transition-all duration-300 hover:scale-110"
      style={{ backgroundColor: 'var(--border-color)' }}
    >
      <div
        className={`w-4 h-4 rounded-full shadow-md transform transition-all duration-300 flex items-center justify-center ${
          theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
        }`}
        style={{ backgroundColor: 'var(--primary-color)' }}
      >
        {theme === 'dark' ? (
          <Moon size={12} className="text-white" />
        ) : (
          <Sun size={12} className="text-white" />
        )}
      </div>
    </button>
  )
}

export default ThemeToggle
