"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 cursor-pointer rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};
