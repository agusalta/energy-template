import { useEffect } from 'react';
import { useThemeStore } from '../store/themeStore';

export default function ThemeSwitch() {
  const { isDarkMode, toggleDarkMode } = useThemeStore();

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const darkModeClass = document.documentElement.classList.contains('dark');
    
    if (darkModeClass || darkModeMediaQuery.matches) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <button
      onClick={toggleDarkMode}
      className="outline-none flex relative text-heading-2 rounded-full p-2 lg:p-3 border transition-all duration-500 ease-in-out transform hover:scale-105 active:scale-95 bg-transparent border-primary hover:border-primary-800 hover:bg-primary-100/20 dark:hover:bg-primary-900/20 backdrop-blur-sm text-accent dark:text-accent-light hover:shadow-lg hover:shadow-primary/20 dark:hover:shadow-primary-900/20"
      aria-label={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
    >
      {isDarkMode ? '🌞' : '🌙'}
    </button>
  );
} 