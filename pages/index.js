import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import ServerStatus from "../components/ServerStatus";

const LEAVES = ["🍁", "🍂", "🍁", "🍂", "🍁", "🍂", "🍁"];

const FEATURES = [
  { icon: "🏪", title: "Free Market Hub", body: "Type !fm anywhere to instantly teleport to the Free Market where all custom NPCs are set up — everything accessible from the moment you log in." },
  { icon: "✨", title: "Skill Master", body: "Grab cross-class movement skills like Flash Jump, Haste and Teleport from Grendel — mix abilities across jobs and build your character exactly how you want." },
  { icon: "⚡", title: "Instant Job Advancement", body: "Talk to Vikan to advance jobs at the right levels. Skills are auto-maxed on advancement so you can play your class properly straight away." },
  { icon: "🛍️", title: "All-in-One Shop", body: "Frederick stocks everything — early game and endgame gear, weapons, potions, scrolls, NX items, chairs and more, all in one place." },
  { icon: "🗺️", title: "World Teleporter", body: "Spinel lets you jump straight to any town, party quest or boss entrance instantly. No running, no taxis." },
  { icon: "💇", title: "Plastic Surgeon", body: "V. Isage can fully customise your hair, face and skin on the spot — free, instant, no coupons needed." },
  { icon: "⚔️", title: "All Classes", body: "Warriors, Mages, Archers, Thieves, and Pirates — every v83 class and job advancement available." },
  { icon: "👹", title: "All Bosses", body: "Zakum, Horntail, Papulatus, Chaos Zakum, Pink Bean and more. All bosses accessible and farmable." },
  { icon: "🎉", title: "Party Quests", body: "Kerning PQ, Ludibrium PQ, Orbis PQ, Magatia PQ and all classic party quests fully working." },
  { icon: "🌿", title: "x10 EXP & Mesos", body: "Boosted rates so you can progress at a satisfying pace without the grind being a second job." },
  { icon: "💰", title: "Free NX Cash", body: "Earn NX in-game to spend on cosmetics. No real money needed — ever." },
  { icon: "🤝", title: "Active Community", body: "Small, friendly server. New players always welcome." },
];

export default function Home() {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "UmamiMS";

  return (
    <>
      <Head>
        <title>{`${siteName} — MapleStory Private Server`}</title>
        <meta name="description" content={`${siteName} is a free MapleStory private server. Register and play now!`} />
      </Head>

      {/* Floating leaves */}
      {LEAVES.map((l, i) => (
        <span key={i} className="leaf" aria-hidden="true">{l}</span>
      ))}

      <Layout siteName={siteName}>
        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20">
          {/* Logo */}
          <img src="/umamims-logo.png" alt={siteName} className="h-44 md:h-60 object-contain mb-4" />

          <h1 className="font-visby text-3xl md:text-4xl font-bold mb-6 maple-gradient-text drop-shadow-[0_0_30px_rgba(233,69,96,0.4)]">
            Welcome to UmamiMS!
          </h1>

          <p className="text-slate-400 text-base md:text-lg max-w-xl mb-10 leading-relaxed">
            A v83 MapleStory private server built for the love of the game. Free to play, free NX, x10 rates. No cash walls, no BS — just Maple the way it used to be.
          </p>

          {/* Server Status */}
          <div className="mb-6">
            <ServerStatus />
          </div>

          {/* CTAs */}
          <div className="flex gap-4 flex-wrap justify-center">
            <Link href="/register" className="btn-maple px-8 py-3.5 rounded-xl text-white text-lg font-bold">
              Create Account
            </Link>
            <Link
              href="/download"
              className="px-8 py-3.5 rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-lg font-bold transition-all shadow-md hover:shadow-blue-400/40"
            >
              Download Client
            </Link>
          </div>
        </main>

        {/* ── What's in UmamiMS ─────────────────────────────────────────────── */}
        <section className="w-full px-6 py-16" style={{ background: 'var(--bg-secondary)' }}>
          <div className="max-w-5xl mx-auto">
            <div className="maple-divider mb-12" />
            <h2 className="font-visby text-2xl font-bold text-maple-yellow mb-10 text-center">
              ✨ What&apos;s in UmamiMS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {FEATURES.map(({ icon, title, body }) => (
                <div key={title} className="maple-card rounded-2xl p-5 flex gap-4 items-start">
                  <span className="text-2xl flex-shrink-0">{icon}</span>
                  <div>
                    <p className="font-visby text-sm font-bold mb-1" style={{ color: 'var(--text-heading)' }}>{title}</p>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Footer ────────────────────────────────────────────────────────── */}
        <footer className="text-center py-6 text-slate-700 border-t border-maple-border/20 text-sm">
          🍁 {siteName} — Just for fun.
        </footer>
      </Layout>
    </>
  );
}
