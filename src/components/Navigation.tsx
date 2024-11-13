import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface NavigationProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          Marcos.dev
        </a>
        <div className="flex items-center gap-6">
          <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Sobre</a>
          <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projetos</a>
          <a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experiência</a>
          <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contato</a>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;