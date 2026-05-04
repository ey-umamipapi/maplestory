import Link from "next/link";

export default function Nav({ siteName }) {
  return (
    <nav className="border-b border-maple-border/30 bg-black/30 backdrop-blur-sm px-6 py-4 flex items-center justify-between">
      <Link href="/" className="font-fredoka text-2xl font-bold maple-gradient-text tracking-wide hover:opacity-80 transition-opacity">
        🍁 {siteName}
      </Link>
      <div className="flex gap-3 flex-wrap">
        <Link href="/database" className="px-4 py-2 rounded-lg border border-maple-border/50 text-slate-300 hover:border-maple-accent hover:text-maple-accent transition-all text-sm font-semibold">
          Database
        </Link>
        <Link href="/guides" className="px-4 py-2 rounded-lg border border-maple-border/50 text-slate-300 hover:border-maple-accent hover:text-maple-accent transition-all text-sm font-semibold">
          Guides
        </Link>
        <Link href="/tools" className="px-4 py-2 rounded-lg border border-maple-border/50 text-slate-300 hover:border-maple-accent hover:text-maple-accent transition-all text-sm font-semibold">
          Tools
        </Link>
        <Link href="/download" className="px-4 py-2 rounded-lg border border-maple-border/50 text-slate-300 hover:border-maple-accent hover:text-maple-accent transition-all text-sm font-semibold">
          Download
        </Link>
        <Link href="/login" className="px-4 py-2 rounded-lg border border-maple-border/50 text-slate-300 hover:border-maple-accent hover:text-maple-accent transition-all text-sm font-semibold">
          Login
        </Link>
        <Link href="/register" className="btn-maple px-4 py-2 rounded-lg text-white font-bold text-sm">
          Register
        </Link>
      </div>
    </nav>
  );
}
