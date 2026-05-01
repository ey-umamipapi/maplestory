import Head from "next/head";
import Link from "next/link";

const LEAVES = ["🍁", "🍂", "🍁", "🍂", "🍁", "🍂", "🍁"];

const DOWNLOADS = [
  {
    icon: "🍁",
    title: "UmamiMS Client",
    description: "The custom launcher (Kaentake.exe) and all required files. Drop these into your MapleStory folder.",
    label: "Download Client",
    href: "https://drive.google.com/file/d/1yBQBINDLu0PW2XMLiTIhrq7JNZB4c8My/view?usp=drive_link",
    badge: "Start here",
    badgeColor: "bg-maple-accent/20 text-maple-accent border-maple-accent/30",
  },
  {
    icon: "🎮",
    title: "MapleGlobal v83 Setup",
    description: "The base MapleStory v83 game client installer. Install this first before adding any custom files.",
    label: "Download Installer",
    href: "https://drive.google.com/file/d/1hQEE1--0GL_vP7aMyWgAhrZWu9GP6Ixs/view?usp=drive_link",
    badge: "Required",
    badgeColor: "bg-slate-700/50 text-slate-300 border-slate-600/30",
  },
  {
    icon: "🗂",
    title: "Custom WZ Files",
    description: "UmamiMS custom WZ data files. Replace the originals in your MapleStory folder with these.",
    label: "Download WZ Files",
    href: "https://drive.google.com/file/d/150IJbyicN7eKSDVaJLILRaOV5jSLUkhC/view?usp=drive_link",
    badge: "Required",
    badgeColor: "bg-slate-700/50 text-slate-300 border-slate-600/30",
  },
];

const FEATURES = [
  { icon: "⚔️", title: "All Classes", body: "Play as any v83 class — Warriors, Mages, Archers, Thieves, and Pirates. Every job advancement available." },
  { icon: "👹", title: "All Bosses", body: "Zakum, Horntail, Papulatus, Pianus, Chaos Zakum, Pink Bean and more. All bosses are accessible and farmable." },
  { icon: "🎉", title: "Party Quests", body: "Kerning PQ, Ludibrium PQ, Orbis PQ, Magatia PQ and all classic party quests fully working." },
  { icon: "🗺️", title: "Full World", body: "Every map, town, and dungeon from v83 is available — Maple Island, Victoria Island, Ossyria, Ludus Lake, and beyond." },
  { icon: "🌿", title: "x10 EXP & Mesos", body: "Boosted rates so you can progress at a satisfying pace without the grind being a second job." },
  { icon: "💰", title: "Free NX Cash", body: "Earn NX in-game to spend on cosmetics. No real money needed — ever." },
  { icon: "🛍️", title: "Frederick's All-in-One Shop", body: "Head to the Free Market and find Frederick the store banker — he stocks everything you need in one place." },
  { icon: "💇", title: "Dr. Lenu — Cosmetic NPC", body: "Change your hair, face, and skin colour for free anytime. Find Dr. Lenu and customise your look whenever you want." },
  { icon: "🏰", title: "Guilds & Alliances", body: "Form or join a guild, build your alliance, and compete on the leaderboards." },
  { icon: "📖", title: "Monster Book", body: "Hunt monsters to complete your collection and unlock card set bonuses." },
  { icon: "🎨", title: "Full Cash Shop", body: "Browse the full v83 Cash Shop catalogue — all cosmetics, pets, and mounts available free." },
  { icon: "🤝", title: "Active Community", body: "Small, friendly server. New players always welcome." },
];

const STEPS = [
  {
    emoji: "🎮",
    title: "Install the base client",
    body: "Download and run MapleGlobal-v83-setup.exe. Install it to a location you can find easily, like C:\\MapleStory.",
  },
  {
    emoji: "🗂",
    title: "Replace the WZ files",
    body: "Download the custom WZ files and extract them into your MapleStory install folder. Replace any files it asks about.",
  },
  {
    emoji: "🍁",
    title: "Add the UmamiMS client files",
    body: "Download the UmamiMS client pack and extract it into the same MapleStory folder. This adds Kaentake.exe and all required config files.",
  },
  {
    emoji: "📝",
    title: "Register an account",
    body: "Head to the Register page and create your account. Use the same username and password to log into the game.",
  },
  {
    emoji: "🚀",
    title: "Launch the game",
    body: "Open your MapleStory folder and run Kaentake.exe. Log in with your account credentials and start playing!",
  },
];

export default function Download() {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "UmamiMS";

  return (
    <>
      <Head>
        <title>{`Download — ${siteName}`}</title>
        <meta name="description" content={`Download the ${siteName} client and get started playing MapleStory v83 for free.`} />
      </Head>

      <div className="stars-bg" aria-hidden="true" />
      {LEAVES.map((l, i) => <span key={i} className="leaf" aria-hidden="true">{l}</span>)}

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Nav */}
        <nav className="border-b border-maple-border/30 bg-black/30 backdrop-blur-sm px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-fredoka text-2xl font-bold maple-gradient-text tracking-wide hover:opacity-80 transition-opacity">
            🍁 {siteName}
          </Link>
          <div className="flex gap-3">
            <Link
              href="/download"
              className="px-5 py-2 rounded-lg border border-maple-accent/50 text-maple-accent text-sm font-semibold"
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

        <main className="flex-1 flex flex-col items-center px-6 py-16">

          {/* Header */}
          <div className="text-center mb-14">
            <h1 className="font-cinzel text-4xl md:text-5xl font-bold text-slate-100 mb-4">
              Download & Play
            </h1>
            <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
              Everything you need to get into {siteName}. Free to download, free to play.
            </p>
          </div>

          {/* Download Cards */}
          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {DOWNLOADS.map(({ icon, title, description, label, href, badge, badgeColor }) => (
              <div key={title} className="maple-card rounded-2xl p-6 flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <span className="text-3xl">{icon}</span>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${badgeColor}`}>
                    {badge}
                  </span>
                </div>
                <div>
                  <h2 className="font-cinzel text-base font-bold text-slate-100 mb-2">{title}</h2>
                  <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
                </div>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto btn-maple text-center text-white font-bold py-2.5 rounded-xl text-sm"
                >
                  ⬇ {label}
                </a>
              </div>
            ))}
          </div>

          <div className="maple-divider w-full max-w-4xl mb-16" />

          {/* Features */}
          <div className="w-full max-w-4xl mb-16">
            <h2 className="font-cinzel text-2xl font-bold text-maple-yellow mb-10 text-center">
              ✨ What's in UmamiMS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {FEATURES.map(({ icon, title, body }) => (
                <div key={title} className="maple-card rounded-2xl p-5 flex gap-4 items-start">
                  <span className="text-2xl flex-shrink-0">{icon}</span>
                  <div>
                    <p className="font-cinzel text-slate-100 text-sm font-bold mb-1">{title}</p>
                    <p className="text-slate-500 text-xs leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="maple-divider w-full max-w-4xl mb-16" />

          {/* Tutorial */}
          <div className="w-full max-w-2xl">
            <h2 className="font-cinzel text-2xl font-bold text-maple-yellow mb-10 text-center">
              📖 Setup Guide
            </h2>
            <ol className="space-y-6">
              {STEPS.map(({ emoji, title, body }, i) => (
                <li key={i} className="maple-card rounded-2xl p-6 flex gap-5 items-start">
                  <span className="flex-shrink-0 w-9 h-9 rounded-full bg-maple-accent/20 text-maple-accent text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-cinzel text-slate-100 font-bold mb-1">
                      {emoji} {title}
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 maple-card rounded-2xl p-6 text-center">
              <p className="text-slate-400 text-sm mb-4">Ready to go? Create your account and jump in.</p>
              <Link href="/register" className="btn-maple inline-block px-8 py-3 rounded-xl text-white font-bold text-base">
                🍁 Create Account
              </Link>
            </div>
          </div>
        </main>

        <footer className="text-center py-6 text-slate-700 border-t border-maple-border/20 text-sm">
          🍁 {siteName} — For fun, not profit.
        </footer>
      </div>
    </>
  );
}
