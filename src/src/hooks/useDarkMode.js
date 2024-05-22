"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const useDarkMode = () => {
  const { theme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, [theme]);

  return isDarkMode;
};

export default useDarkMode;
