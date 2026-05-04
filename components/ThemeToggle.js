import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("maplesms-theme") || "light";
    setTheme(saved);
    applyTheme(saved);
    setMounted(true);
  }, []);

  const applyTheme = (t) => {
    const root = document.documentElement;
    if (t === "dusk") {
      root.style.setProperty("--bg-primary", "#1a1025");
      root.style.setProperty("--bg-secondary", "#140e1e");
      root.style.setProperty("--text-primary", "#e2e8f0");
      root.style.setProperty("--border-color", "rgba(147, 51, 234, 0.3)");
    } else if (t === "night") {
      root.style.setProperty("--bg-primary", "#0a0a14");
      root.style.setProperty("--bg-secondary", "#0f0f1e");
      root.style.setProperty("--text-primary", "#e2e8f0");
      root.style.setProperty("--border-color", "rgba(233, 69, 96, 0.2)");
    } else {
      root.style.setProperty("--bg-primary", "#f8f8fb");
      root.style.setProperty("--bg-secondary", "#ffffff");
      root.style.setProperty("--text-primary", "#1e293b");
      root.style.setProperty("--border-color", "rgba(0, 0, 0, 0.1)");
    }
  };

  const handleThemeChange = (t) => {
    setTheme(t);
    localStorage.setItem("maplesms-theme", t);
    applyTheme(t);
  };

  if (!mounted) return null;

  return (
    <div className="flex gap-1 bg-black/10 dark:bg-white/10 rounded-lg p-1">
      {[
        { key: "light", label: "☀️" },
        { key: "dusk", label: "🌆" },
        { key: "night", label: "🌙" },
      ].map(({ key, label }) => (
        <button
          key={key}
          onClick={() => handleThemeChange(key)}
          className={`px-2 py-1 rounded text-sm font-semibold transition-all ${
            theme === key
              ? "bg-white/30 text-slate-900 dark:bg-slate-700 dark:text-white"
              : "text-slate-600 dark:text-slate-300 hover:bg-white/20 dark:hover:bg-white/10"
          }`}
          title={key.charAt(0).toUpperCase() + key.slice(1)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
