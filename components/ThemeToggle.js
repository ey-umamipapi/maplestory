import { useEffect, useState } from "react";

const THEMES = ["light", "dusk", "night"];
const ICONS = { light: "☀️", dusk: "🌆", night: "🌙" };

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("umamims-theme") || "light";
    applyTheme(saved);
    setTheme(saved);
    setMounted(true);
  }, []);

  function applyTheme(t) {
    const html = document.documentElement;
    html.classList.remove("theme-dusk", "theme-night");
    if (t === "dusk") html.classList.add("theme-dusk");
    if (t === "night") html.classList.add("theme-night");
    localStorage.setItem("umamims-theme", t);
  }

  function handleChange(t) {
    setTheme(t);
    applyTheme(t);
  }

  if (!mounted) return null;

  return (
    <div className="flex gap-1 rounded-lg p-1" style={{ background: "var(--border-color)" }}>
      {THEMES.map(t => (
        <button
          key={t}
          onClick={() => handleChange(t)}
          title={t.charAt(0).toUpperCase() + t.slice(1)}
          className={`px-2 py-1 rounded text-sm transition-all ${
            theme === t
              ? "bg-maple-accent text-white shadow"
              : "opacity-50 hover:opacity-100"
          }`}
        >
          {ICONS[t]}
        </button>
      ))}
    </div>
  );
}
