import { create } from 'zustand';

interface ThemeState {
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
  toggleDarkMode: () => void;
}

type ThemeStore = {
  set: (partial: Partial<ThemeState> | ((state: ThemeState) => Partial<ThemeState>)) => void;
};

export const useThemeStore = create<ThemeState>((set: ThemeStore['set']) => ({
  isDarkMode: typeof window !== 'undefined' ? 
    (localStorage.getItem('theme') === 'dark' || 
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) : 
    false,
  setIsDarkMode: (isDark: boolean) => {
    set({ isDarkMode: isDark });
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', isDark);
    }
  },
  toggleDarkMode: () => set((state: ThemeState) => {
    const newState = !state.isDarkMode;
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newState ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', newState);
    }
    return { isDarkMode: newState };
  }),
})); 