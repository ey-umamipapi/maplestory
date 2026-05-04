import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";

const PQS = [
  {
    name: "Kerning PQ",
    abbr: "KPQ",
    emoji: "🏙️",
    levels: "21 – 30",
    players: "4–6",
    color: "text-blue-400",
    border: "border-blue-400/30",
    bg: "bg-blue-400/5",
    location: "Kerning City",
    time: "~15 min",
    summary: "The classic intro PQ. Five stages of puzzles and platforming ending in a boss fight. Great social PQ for new players.",
    rewards: "EXP, Screws (rare), occasional equip drops from boss.",
    tips: "You need a thief to pick locks and an archer to shoot down objects. Communicate stages clearly — it's easy to mess up.",
  },
  {
    name: "Ludibrium PQ",
    abbr: "LudiPQ",
    emoji: "🎪",
    levels: "35 – 50",
    players: "6",
    color: "text-yellow-500",
    border: "border-yellow-400/30",
    bg: "bg-yellow-400/5",
    location: "Ludibrium",
    time: "~20–30 min",
    summary: "One of the best PQs in the game. Collect boxes, navigate stages, and defeat Alishar at the end. Great EXP and fun.",
    rewards: "EXP, Ludibrium Medal, rare gear from boss. The medal is one of the best in v83.",
    tips: "Get the Medal — it's BiS for a long time. Make sure someone is assigned to each portal stage or you'll waste time.",
  },
  {
    name: "Orbis PQ",
    abbr: "OPQ",
    emoji: "☁️",
    levels: "51 – 70",
    players: "6",
    color: "text-purple-400",
    border: "border-purple-400/30",
    bg: "bg-purple-400/5",
    location: "Orbis",
    time: "~25–35 min",
    summary: "Collect ingredients, solve the mixing puzzle, and defeat Papa Pixie. Great EXP in a mid-game level range.",
    rewards: "EXP, Roses (tradeable), rare NPC-only equips.",
    tips: "The mixing stage requires specific combinations — someone should look up the recipe list beforehand. Boss is manageable at 51+.",
  },
  {
    name: "Magatia PQ",
    abbr: "MPQ",
    emoji: "🧪",
    levels: "71 – 85",
    players: "6",
    color: "text-green-400",
    border: "border-green-400/30",
    bg: "bg-green-400/5",
    location: "Magatia",
    time: "~30 min",
    summary: "The most complex PQ. Two opposing factions, multiple simultaneous stages, and a tough final boss. Best EXP per hour in this level range.",
    rewards: "EXP, Summoning Rocks, Onyx Apples, Sunrise Dew.",
    tips: "Split your party across the Zenumist and Alcadno sides. Boss can hit hard — bring a Bishop and pot aggressively.",
  },
];

export default function PartyQuestGuide() {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "UmamiMS";

  return (
    <>
      <Head>
        <title>{`Party Quest Guide — ${siteName}`}</title>
        <meta name="description" content={`All party quests on ${siteName} — levels, rewards, and tips.`} />
      </Head>

      <Layout siteName={siteName}>
        <main className="flex-1 px-6 py-16 max-w-3xl mx-auto w-full">

          <div className="text-sm mb-8" style={{ color: 'var(--text-muted)' }}>
            <Link href="/guides" className="hover:text-maple-accent transition-colors">Guides</Link>
            <span className="mx-2">›</span>
            <span>Party Quest Guide</span>
          </div>

          <div className="mb-10">
            <h1 className="font-visby text-4xl font-bold maple-gradient-text mb-2">🎉 Party Quest Guide</h1>
            <p style={{ color: 'var(--text-muted)' }}>All PQs on UmamiMS — how they work, what you get, and how to not be the person who wipes the run.</p>
            <div className="mt-3 flex gap-3 flex-wrap">
              <span className="text-xs px-3 py-1 rounded-full border border-green-400/40 text-green-500 bg-green-400/10 font-bold">All Working</span>
              <span className="text-xs px-3 py-1 rounded-full border border-maple-accent/20 font-medium" style={{ color: 'var(--text-muted)' }}>Group Content</span>
            </div>
          </div>

          <div className="maple-card rounded-xl p-4 mb-10">
            <p className="text-sm" style={{ color: 'var(--text-primary)' }}>
              <span className="text-maple-accent font-bold">UmamiMS note:</span> Use{" "}
              <span className="font-mono text-maple-yellow px-1 rounded" style={{ background: 'var(--card-border)' }}>Spinel</span>{" "}
              in the Free Market to teleport directly to any PQ lobby. No need to travel across the world map.
            </p>
          </div>

          <div className="space-y-6">
            {PQS.map((pq) => (
              <div key={pq.abbr} className={`maple-card rounded-2xl p-6 border ${pq.border}`}>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">{pq.emoji}</span>
                      <h2 className={`font-visby font-bold text-xl ${pq.color}`}>{pq.name}</h2>
                      <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ background: 'var(--bg-secondary)', color: 'var(--text-muted)' }}>{pq.abbr}</span>
                    </div>
                    <div className="flex gap-3 text-xs" style={{ color: 'var(--text-muted)' }}>
                      <span>Lv. {pq.levels}</span>
                      <span>·</span>
                      <span>{pq.players} players</span>
                      <span>·</span>
                      <span>{pq.time}</span>
                      <span>·</span>
                      <span>{pq.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>{pq.summary}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="rounded-lg p-3" style={{ background: 'var(--bg-secondary)' }}>
                    <p className="text-xs font-bold mb-1" style={{ color: 'var(--text-heading)' }}>🎁 Rewards</p>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{pq.rewards}</p>
                  </div>
                  <div className="rounded-lg p-3" style={{ background: 'var(--bg-secondary)' }}>
                    <p className="text-xs font-bold mb-1" style={{ color: 'var(--text-heading)' }}>💡 Tips</p>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{pq.tips}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </main>

        <footer className="text-center py-6 border-t text-sm" style={{ borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}>
          🍁 {siteName} — Just for fun.
        </footer>
      </Layout>
    </>
  );
}
