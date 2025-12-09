import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-nav-bg z-50 flex items-center justify-between px-6 md:px-12">
      <div className="text-2xl font-bold text-primary-foreground">
        JS
      </div>
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-lg bg-nav-hover text-primary-foreground hover:opacity-80 transition-opacity"
        aria-label="Toggle dark mode"
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
    </header>
  );
};
