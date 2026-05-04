import Head from "next/head";
import Link from "next/link";
import Nav from "../../components/Nav";

const CLASSES = [
  {
    name: "Warrior",
    icon: "🛡️",
    stat: "STR",
    town: "Perion",
    color: "text-red-400",
    border: "border-red-400/30",
    bg: "bg-red-400/5",
    difficulty: "Easy",
    diffColor: "text-green-400",
    desc: "The tank of the party. Highest HP and defense, decent damage, and reliable in every fight. Warriors make up the backbone of any party composition.",
    paths: [
      { name: "Fighter → Crusader → Hero", style: "Balanced", desc: "Best all-rounder Warrior. Great single-target DPS with Brandish and strong bossing damage." },
      { name: "Page → White Knight → Paladin", style: "Support Tank", desc: "Elemental attack advantages against most bosses. Charge skills deal bonus damage to aligned enemies. Great for party play." },
      { name: "Spearman → Dragon Knight → Dark Knight", style: "HP Specialist", desc: "Highest HP in the game thanks to Beholder's Revenge. Top-tier for Zakum and sustained boss fights." },
    ],
    tips: ["Invest early in HP washing if you plan to boss seriously.", "Dark Knight is the preferred boss class due to HP and DPS sustain.", "Warriors get Flash Jump via Grendel at the Free Market."],
  },
  {
    name: "Mage",
    icon: "🔮",
    stat: "INT",
    town: "Ellinia",
    color: "text-blue-400",
    border: "border-blue-400/30",
    bg: "bg-blue-400/5",
    difficulty: "Medium",
    diffColor: "text-yellow-400",
    desc: "Glass cannon with some of the most powerful AoE in the game. Low defense means you need to play smart, but the damage output is unmatched for clearing rooms.",
    paths: [
      { name: "F/P Wizard → F/P Mage → F/P Arch Mage", style: "DoT Specialist", desc: "Poison stacks melt bosses over time. Best Arch Mage for sustained DPS once you have the funding." },
      { name: "I/L Wizard → I/L Mage → I/L Arch Mage", style: "Burst AoE", desc: "Chain Lightning hits multiple targets. Strong map clearing and solid boss DPS with Blizzard." },
      { name: "Cleric → Priest → Bishop", style: "Support Healer", desc: "The most wanted class in every party. Holy magic damages undead. Party Heal, Resurrection, and Dispel make you irreplaceable at Zakum and Horntail." },
    ],
    tips: ["Mages need INT for both damage and MP pool — stack it early.", "Bishop is always in demand for parties; easy to find groups.", "Teleport is available from Grendel — great for all Mage builds."],
  },
  {
    name: "Bowman",
    icon: "🏹",
    stat: "DEX",
    town: "Henesys",
    color: "text-green-400",
    border: "border-green-400/30",
    bg: "bg-green-400/5",
    difficulty: "Easy",
    diffColor: "text-green-400",
    desc: "Safe, consistent ranged DPS. Bowmen attack from distance and are never in harm's way. Perfect for beginners who want to learn the game without dying constantly.",
    paths: [
      { name: "Hunter → Ranger → Bowmaster", style: "Multi-target AoE", desc: "Arrow Rain and Arrow Eruption hit entire screens. Best class for clearing training maps quickly." },
      { name: "Crossbowman → Sniper → Marksman", style: "Single-target Sniper", desc: "Snipe ignores weapon defence. Exceptional boss DPS. Slower map clearing but top-tier at endgame bossing." },
    ],
    tips: ["Keep your accuracy high early on — DEX helps hit higher-level mobs.", "Bowmaster clears training maps faster; Marksman does more boss damage.", "Haste is available from Grendel for movement speed."],
  },
  {
    name: "Thief",
    icon: "🗡️",
    stat: "LUK",
    town: "Kerning City",
    color: "text-purple-400",
    border: "border-purple-400/30",
    bg: "bg-purple-400/5",
    difficulty: "Hard",
    diffColor: "text-red-400",
    desc: "High skill ceiling, high reward. Thieves are fast, hit hard, and look cool doing it. They take more investment to build properly but are incredibly satisfying to play.",
    paths: [
      { name: "Assassin → Hermit → Night Lord", style: "Ranged Crit", desc: "Throws stars from range, building Critical Rate. Late game Shadow Partner doubles all attacks. One of the highest DPS classes in the game." },
      { name: "Bandit → Chief Bandit → Shadower", style: "Melee Utility", desc: "Assaulter, Boomerang Step, and Smokescreen make Shadower incredibly versatile. Good burst damage and decent survivability." },
    ],
    tips: ["Luck-based equipment is expensive early — prioritize weapon upgrades.", "Night Lord star costs add up; join a guild to share supplies.", "Flash Jump from Grendel is your best mobility tool."],
  },
  {
    name: "Pirate",
    icon: "⚓",
    stat: "STR / DEX",
    town: "Nautilus",
    color: "text-amber-400",
    border: "border-amber-400/30",
    bg: "bg-amber-400/5",
    difficulty: "Medium",
    diffColor: "text-yellow-400",
    desc: "The most unique class in v83. Melee or ranged, transformations, summons — Pirates do it all. They're newer to the game so less common, which makes them stand out.",
    paths: [
      { name: "Brawler → Marauder → Buccaneer", style: "Melee Transformer", desc: "Transforms into a giant for boosted stats. Super Transformation gives insane burst damage. Best melee class for raw DPS." },
      { name: "Gunslinger → Outlaw → Corsair", style: "Ranged Summoner", desc: "Siren's Lure and Octopus summons deal constant passive damage. Rapid Fire melts bosses. Unique playstyle unlike anything else." },
    ],
    tips: ["Buccaneer benefits from STR — simpler to gear than most.", "Corsair summons stack with your direct attacks for high effective DPS.", "Both paths get Haste from Grendel at the Free Market."],
  },
];

export default function ClassesGuide() {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "UmamiMS";

  return (
    <>
      <Head>
        <title>{`Explorer Classes Guide — ${siteName}`}</title>
        <meta name="description" content="Full guide to all Explorer classes in MapleStory v83 on UmamiMS" />
      </Head>

      <div className="stars-bg" aria-hidden="true" />

      <div className="relative z-10 min-h-screen flex flex-col">
        <Nav siteName={siteName} />

        <main className="flex-1 px-6 py-12 max-w-3xl mx-auto w-full">
          <div className="text-sm text-slate-600 mb-8">
            <Link href="/guides" className="hover:text-maple-accent transition-colors">Guides</Link>
            <span className="mx-2">›</span>
            <span className="text-slate-400">Explorer Classes</span>
          </div>

          <div className="mb-10">
            <h1 className="font-fredoka text-4xl font-bold maple-gradient-text mb-2">⚔️ Explorer Classes</h1>
            <p className="text-slate-400">All five v83 Explorer classes, their paths, and what makes them tick.</p>
            <p className="text-slate-500 text-sm mt-2">
              On UmamiMS, you can grab extra movement skills (Flash Jump, Haste, Teleport) from <strong className="text-slate-300">Grendel</strong> in the Free Market — so pick whichever class excites you.
            </p>
          </div>

          <div className="space-y-8">
            {CLASSES.map((cls) => (
              <div key={cls.name} className={`maple-card rounded-2xl p-6 ${cls.border}`}>
                {/* Header */}
                <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{cls.icon}</span>
                    <div>
                      <h2 className={`font-cinzel font-bold text-xl ${cls.color}`}>{cls.name}</h2>
                      <div className="flex gap-2 mt-1 flex-wrap">
                        <span className="text-xs text-slate-500 bg-black/30 px-2 py-0.5 rounded-full">Main Stat: {cls.stat}</span>
                        <span className="text-xs text-slate-500 bg-black/30 px-2 py-0.5 rounded-full">Start: {cls.town}</span>
                      </div>
                    </div>
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border border-current/30 ${cls.diffColor} bg-current/5`}>
                    Difficulty: {cls.difficulty}
                  </span>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-5">{cls.desc}</p>

                {/* Paths */}
                <div className="space-y-3 mb-5">
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Job Paths</h3>
                  {cls.paths.map((path, i) => (
                    <div key={i} className={`rounded-xl p-3 ${cls.bg} border ${cls.border}`}>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className={`text-xs font-bold ${cls.color}`}>{path.name}</span>
                        <span className="text-xs text-slate-500 bg-black/20 px-2 py-0.5 rounded-full">{path.style}</span>
                      </div>
                      <p className="text-slate-500 text-xs leading-relaxed">{path.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Tips */}
                <div>
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Tips</h3>
                  <ul className="space-y-1">
                    {cls.tips.map((tip, i) => (
                      <li key={i} className="text-slate-500 text-xs leading-relaxed flex gap-2">
                        <span className={cls.color}>›</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </main>

        <footer className="text-center py-6 text-slate-700 border-t border-maple-border/20 text-sm">
          🍁 {siteName} — Just for fun.
        </footer>
      </div>
    </>
  );
}
