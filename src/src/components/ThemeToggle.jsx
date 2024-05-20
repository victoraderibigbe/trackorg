"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center justify-center w-8 h-8 rounded-full bg-light-hover dark:bg-dark-hover"
    >
      {theme === "dark" ? (
        <FaSun className="text-yellow-500" />
      ) : (
        <FaMoon className="text-gray-900" />
      )}
    </button>
  );
};

export default ThemeToggle;
