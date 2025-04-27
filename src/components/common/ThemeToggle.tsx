"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "react-feather";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const shouldBeDark = saved === "dark" || (!saved && prefersDark);

    document.documentElement.classList.toggle("dark", shouldBeDark);
    setIsDark(shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const currentlyDark = document.documentElement.classList.contains("dark");
    const newTheme = currentlyDark ? "light" : "dark";

    document.documentElement.classList.toggle("dark", !currentlyDark);
    localStorage.setItem("theme", newTheme);
    setIsDark(!currentlyDark);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="p-2 rounded-full transition-colors duration-300"
      style={{
        backgroundColor: "var(--card-border)",
        color: "var(--foreground)",
      }}
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
