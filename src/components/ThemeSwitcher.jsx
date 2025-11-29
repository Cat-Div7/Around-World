import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const activeState =
  "flex items-center justify-center w-5 h-5 rounded-full cursor-pointer";

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // Apply theme to DOM when theme changes
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div className="m-5 flex h-8 w-14 items-center justify-between gap-1 rounded-full bg-[#2e2f33] p-1">
      <button
        className={`${activeState} ${
          theme === "light" ? "bg-white" : "bg-transparent"
        }`}
        onClick={() => toggleTheme("light")}
      >
        <Sun
          size={13}
          className={theme === "light" ? "text-gray-900" : "text-gray-100"}
        />
      </button>

      <button
        className={`${activeState} ${
          theme === "dark" ? "bg-white" : "bg-transparent"
        }`}
        onClick={() => toggleTheme("dark")}
      >
        <Moon
          size={13}
          className={theme === "dark" ? "text-gray-900" : "text-gray-100"}
        />
      </button>
    </div>
  );
};
