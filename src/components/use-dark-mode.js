import { useEffect, useState } from "react";

function useDarkMode() {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" ? window.localStorage.getItem('theme') : "light"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === "light" ? "theme-dark" : "theme-light");
    root.classList.add(theme === "light" ? "theme-light" : "theme-dark");

    if (theme === "light") {
      window.document.querySelector('html').classList.remove('dark')
    } else {
      window.document.querySelector('html').classList.add('dark')
    }


    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return [theme, setTheme];
}

export default useDarkMode;