import ThemeToggle from "./ThemeToggle";
import ServerStatus from "./ServerStatus";

export default function Nav({ siteName, onMenuToggle }) {
  return (
    <nav
      className="border-b backdrop-blur-sm px-4 py-2 flex items-center justify-between"
      style={{ background: "var(--nav-bg)", borderColor: "var(--border-color)" }}
    >
      <div className="flex items-center gap-3">
        {/* Hamburger — always visible */}
        <button
          onClick={onMenuToggle}
          className="flex flex-col gap-1.5 p-1.5 rounded-lg transition-colors hover:text-maple-accent"
          style={{ color: 'var(--text-muted)' }}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 rounded-full bg-current" />
          <span className="block w-5 h-0.5 rounded-full bg-current" />
          <span className="block w-5 h-0.5 rounded-full bg-current" />
        </button>
        <ServerStatus />
      </div>
      <ThemeToggle />
    </nav>
  );
}
