"use client";

import { useState, useEffect } from "react"; // 1. useState و useEffect را اضافه می‌کنیم
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export const ThemeSwitcher = () => {
  // 2. یک state برای بررسی اینکه آیا کامپوننت در کلاینت mount شده است یا نه
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // 3. این effect فقط در سمت کلاینت و بعد از اولین رندر اجرا می‌شود
  useEffect(() => {
    setMounted(true);
  }, []);

  // 4. تا زمانی که کامپوننت در کلاینت mount نشده، چیزی رندر نمی‌کنیم تا از خطای hydration جلوگیری شود
  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 cursor-pointer rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};
