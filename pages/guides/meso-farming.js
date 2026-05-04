import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";

const SPOTS = [
  {
    name: "Kerning Square — Robo",
    level: "50–70",
    color: "text-yellow-500",
    mesos: "💰💰💰",
    tip: "Robos drop a lot of equips and have decent meso rates. Great map layout for warriors and mages with AoE.",
  },
  {
    name: "Copper Drakes",
    level: "40–60",
    color: "text-green-500",
    mesos: "💰💰",
    tip: "Good early-game meso spot. Sell all the equip drops — they add up fast at x10 rates.",
  },
  {
    name: "Truckers / Master Chronos (Ludi)",
    level: "70–90",
    color: "text-blue-400",
    mesos: "💰💰💰",
    tip: "Solid mid-game option. Chronos drop level 70+ equips which vendor for good mesos. Bring a looting pet if you have one.",
  },
  {
    name: "Skelegons / Skeledogs (Leafre)",
    level: "100–120",
    color: "text-purple-400",
    mesos: "💰💰💰💰",
    tip: "Top-tier meso farming at higher levels. High mob density and good equip drops. Best for ranged classes.",
  },
  {
    name: "Horntail Cave (pre-boss maps)",
    level: "100+",
    color: "text-red-400",
    mesos: "💰💰💰💰",
    tip: "The maps leading up to Horntail are full of high-HP mobs that drop great equips. Don't just walk past them to get to the boss.",
  },
  {
    name: "Free Market reselling",
    level: "Any",
    color: "text-maple-yellow",
    mesos: "💰💰💰💰💰",
    tip: "Buy underpriced scrolls and equips from player shops, relist at market rate. The best meso-makers are always in the FM, not grinding.",
  },
];

const TIPS = [
  { emoji: "🧲", title: "Use a looting pet", body: "Pets auto-loot everything so you never miss a meso drop. Get one from the Cash Shop in the FM — they're free with NX." },
  { emoji: "📦", title: "Don't vendor equips mid-grind", body: "Bring a mule or use storage. Sort drops in the FM later — some equips are worth way more than vendor price to players." },
  { emoji: "📜", title: "Scrolls are king", body: "Chaos Scrolls, 30% weapon scrolls, and 60% overall scrolls drop from bosses and sell for huge mesos. Prioritise these drops." },
  { emoji: "🏪", title: "Set up a player shop", body: "Park a mule in the Free Market with a shop. List your drops overnight and wake up to mesos in your mailbox." },
];

export default function MesoFarming() {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "UmamiMS";

  return (
    <>
      <Head>
        <title>{`Meso Farming Guide — ${siteName}`}</title>
        <meta name="description" content={`Best meso farming spots and tips for ${siteName}.`} />
      </Head>

      <Layout siteName={siteName}>
        <main className="flex-1 px-6 py-16 max-w-3xl mx-auto w-full">

          <div className="text-sm mb-8" style={{ color: 'var(--text-muted)' }}>
            <Link href="/guides" className="hover:text-maple-accent transition-colors">Guides</Link>
            <span className="mx-2">›</span>
            <span>Meso Farming</span>
          </div>

          <div className="mb-10">
            <h1 className="font-visby text-4xl font-bold maple-gradient-text mb-2">💰 Meso Farming Guide</h1>
            <p style={{ color: 'var(--text-muted)' }}>Best spots and strategies to stack mesos on UmamiMS.</p>
            <div className="mt-3 flex gap-3 flex-wrap">
              <span className="text-xs px-3 py-1 rounded-full border border-yellow-400/40 text-yellow-500 bg-yellow-400/10 font-bold">x10 Meso Rates</span>
              <span className="text-xs px-3 py-1 rounded-full border border-maple-accent/20 font-medium" style={{ color: 'var(--text-muted)' }}>All Levels</span>
            </div>
          </div>

          <div className="maple-card rounded-xl p-4 mb-10">
            <p className="text-sm" style={{ color: 'var(--text-primary)' }}>
              <span className="text-maple-accent font-bold">UmamiMS note:</span> With x10 meso rates, farming is significantly faster than on a regular server. Focus on mobs with high equip drop rates — the real money is in selling loot, not just meso bags.
            </p>
          </div>

          {/* Farming spots */}
          <h2 className="font-visby text-xl font-bold mb-6 maple-gradient-text">🗺️ Best Farming Spots</h2>
          <div className="space-y-4 mb-12">
            {SPOTS.map(({ name, level, color, mesos, tip }) => (
              <div key={name} className="maple-card rounded-2xl p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <p className={`font-visby font-bold text-sm ${color}`}>{name}</p>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Level {level}</p>
                  </div>
                  <span className="text-sm flex-shrink-0">{mesos}</span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{tip}</p>
              </div>
            ))}
          </div>

          {/* Tips */}
          <h2 className="font-visby text-xl font-bold mb-6 maple-gradient-text">💡 Pro Tips</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TIPS.map(({ emoji, title, body }) => (
              <div key={title} className="maple-card rounded-2xl p-5 flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">{emoji}</span>
                <div>
                  <p className="font-visby text-sm font-bold mb-1" style={{ color: 'var(--text-heading)' }}>{title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{body}</p>
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
