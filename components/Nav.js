import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Nav({ siteName }) {
  return (
    <nav className="border-b backdrop-blur-sm px-6 py-4 flex items-center justify-between" style={{ background: "var(--nav-bg)", borderColor: "var(--border-color)", color: "var(--text-primary)" }}>
      <Link href="/" className="font-visby text-2xl maple-gradient-text tracking-wide hover:opacity-80 transition-opacity flex items-center gap-2">
        <span>🍁</span>
        <span>{siteName}</span>
      </Link>
      <div className="flex gap-3 flex-wrap items-center">
        <Link href="/database" className="px-4 py-2 rounded-lg border hover:border-maple-accent hover:text-maple-accent transition-all text-sm font-semibold" style={{ borderColor: "var(--border-color)", color: "var(--text-primary)" }}>
          Database
        </Link>
        <Link href="/guides" className="px-4 py-2 rounded-lg border hover:border-maple-accent hover:text-maple-accent transition-all text-sm font-semibold" style={{ borderColor: "var(--border-color)", color: "var(--text-primary)" }}>
          Guides
        </Link>
        <Link href="/tools" className="px-4 py-2 rounded-lg border hover:border-maple-accent hover:text-maple-accent transition-all text-sm font-semibold" style={{ borderColor: "var(--border-color)", color: "var(--text-primary)" }}>
          Tools
        </Link>
        <Link href="/download" className="px-4 py-2 rounded-lg border hover:border-maple-accent hover:text-maple-accent transition-all text-sm font-semibold" style={{ borderColor: "var(--border-color)", color: "var(--text-primary)" }}>
          Download
        </Link>
        <Link href="/login" className="px-4 py-2 rounded-lg border hover:border-maple-accent hover:text-maple-accent transition-all text-sm font-semibold" style={{ borderColor: "var(--border-color)", color: "var(--text-primary)" }}>
          Login
        </Link>
        <Link href="/register" className="btn-maple px-4 py-2 rounded-lg text-white font-bold text-sm">
          Register
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
