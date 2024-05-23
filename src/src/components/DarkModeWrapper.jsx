"use client";

import useDarkMode from "@/hooks/useDarkMode";

const DarkModeWrapper = ({ children }) => {
  const isDarkMode = useDarkMode();

  return children(isDarkMode);
};

export default DarkModeWrapper;
