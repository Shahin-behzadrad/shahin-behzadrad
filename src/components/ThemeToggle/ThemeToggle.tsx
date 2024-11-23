"use client";

import { Theme } from "@/types/theme.type";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // Read theme from cookie instead of DOM attribute
    const themeFromCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("theme="))
      ?.split("=")[1];

    const initialTheme = themeFromCookie || "dark"; // Default to dark if no cookie
    setTheme(initialTheme as Theme);

    // Ensure DOM attribute matches
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.cookie = `theme=${newTheme}; path=/; max-age=31536000`;

    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}
