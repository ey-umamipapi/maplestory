import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Nav({ siteName }) {
  return (
    <nav className="border-b border-slate-200 bg-white/70 backdrop-blur-sm px-6 py-4 flex items-center justify-between">
      <Link href="/" className="font-visby text-2xl maple-gradient-text tracking-wide hover:opacity-80 transition-opacity flex items-center gap-2">
        <span>🍁</span>
        <span>{siteName}</span>
      </Link>
      <div className="flex gap-3 flex-wrap items-center">
        <Link href="/database" className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:border-maple-accent hover:text-maple-accent transition-all text-sm font-semibold">
          Database
        </Link>
        <Link href="/guides" className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:border-maple-accent hover:text-maple-accent transition-all text-sm font-semibold">
          Guides
        </Link>
        <Link href="/tools" className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:border-maple-accent hover:text-maple-accent transition-all text-sm font-semibold">
          Tools
        </Link>
        <Link href="/download" className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:border-maple-accent hover:text-maple-accent transition-all text-sm font-semibold">
          Download
        </Link>
        <Link href="/login" className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:border-maple-accent hover:text-maple-accent transition-all text-sm font-semibold">
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
