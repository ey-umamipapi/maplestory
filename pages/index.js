import Head from "next/head";
import Link from "next/link";

const LEAVES = ["🍁", "🍂", "🍁", "🍂", "🍁", "🍂", "🍁"];

export default function Home() {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME  || "UmamiMS";
  const gameHost = process.env.NEXT_PUBLIC_GAME_HOST  || "localhost";
  const gamePort = process.env.NEXT_PUBLIC_GAME_PORT  || "8484";

  return (
    <>
      <Head>
        <title>{`${siteName} — MapleStory Private Server`}</title>
        <meta name="description" content={`${siteName} is a free MapleStory private server. Register and play now!`} />
      </Head>

      {/* Starfield background */}
      <div className="stars-bg" aria-hidden="true" />

      {/* Floating leaves */}
      {LEAVES.map((l, i) => (
        <span key={i} className="leaf" aria-hidden="true">{l}</span>
      ))}

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* ── Nav ───────────────────────────────────────────────────────────── */}
        <nav className="border-b border-maple-border/30 bg-black/30 backdrop-blur-sm px-6 py-4 flex items-center justify-between">
          <span className="font-fredoka text-2xl font-bold maple-gradient-text tracking-wide">
            🍁 {siteName}
          </span>
          <div className="flex gap-3">
            <Link
              href="/download"
              className="px-5 py-2 rounded-lg border border-maple-border/50 text-slate-300 hover:border-maple-accent hover:text-maple-accent transition-all text-sm font-semibold"
            >
              Download
            </Link>
            <Link
              href="/login"
              className="px-5 py-2 rounded-lg border border-maple-border/50 text-slate-300 hover:border-maple-accent hover:text-maple-accent transition-all text-sm font-semibold"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="btn-maple px-5 py-2 rounded-lg text-white font-bold text-sm"
            >
              Register
            </Link>
          </div>
        </nav>

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 bg-maple-accent/10 border border-maple-accent/30 text-maple-accent text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-maple-accent animate-pulse" />
            Server Online
          </div>

          {/* Title */}
          <h1 className="font-fredoka text-7xl md:text-9xl font-bold mb-4 maple-gradient-text drop-shadow-[0_0_40px_rgba(233,69,96,0.3)] tracking-wide">
            {siteName}
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-lg mb-3 leading-relaxed">
            A classic v83 MapleStory private server.<br />
            Built for nostalgia. Free to play. Free NX cash.<br />
            x10 exp and x10 mesos.
          </p>

          <p className="text-slate-600 text-sm mb-10">
            Create an account below and start your adventure!
          </p>

          {/* CTAs */}
          <div className="flex gap-4 flex-wrap justify-center mb-20">
            <Link href="/register" className="btn-maple px-8 py-3.5 rounded-xl text-white text-lg font-bold">
              Create Account
            </Link>
            <Link
              href="/login"
              className="px-8 py-3.5 rounded-xl border border-maple-border/50 hover:border-maple-accent hover:text-maple-accent text-slate-300 text-lg font-semibold transition-all"
            >
              Login
            </Link>
          </div>

          {/* ── Divider ───────────────────────────────────────────────────── */}
          <div className="maple-divider w-full max-w-2xl mb-14" />

          {/* ── How to Connect ──────────────────────────────────────────── */}
          <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-6 text-left">

            {/* Connection Info */}
            <div className="maple-card rounded-2xl p-6">
              <h2 className="font-cinzel text-lg font-bold text-maple-yellow mb-4 flex items-center gap-2">
                🗺 How to Connect
              </h2>
              <ol className="space-y-3 text-slate-400">
                {[
                  "Register an account using the button above",
                  "Download the MapleStory v83 client",
                  <>Set your server IP to <code className="text-maple-accent bg-maple-darker/70 px-1.5 py-0.5 rounded text-xs">{gameHost}</code></>,
                  <>Port: <code className="text-maple-accent bg-maple-darker/70 px-1.5 py-0.5 rounded text-xs">{gamePort}</code></>,
                  "Login with your username and password",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-maple-accent/20 text-maple-accent text-xs font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-sm leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Features */}
            <div className="maple-card rounded-2xl p-6">
              <h2 className="font-cinzel text-lg font-bold text-maple-yellow mb-4 flex items-center gap-2">
                ✨ Features
              </h2>
              <ul className="space-y-3 text-slate-400">
                {[
                  ["🌿", "Classic v83 gameplay"],
                  ["💰", "No pay-to-win — all cosmetics are free"],
                  ["⚔️", "All bosses & dungeons available"],
                  ["🧑‍🤝‍🧑", "Party & guild system"],
                  ["🎨", "Full cosmetic NPC — change hair, face & skin for free"],
                ].map(([icon, text], i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <span className="text-base">{icon}</span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>

        {/* ── Footer ────────────────────────────────────────────────────────── */}
        <footer className="text-center py-6 text-slate-700 border-t border-maple-border/20 text-sm">
          🍁 {siteName} — Just for fun.
        </footer>
      </div>
    </>
  );
}
