import Head from "next/head";
import Link from "next/link";
import Nav from "../../components/Nav";

const SPOTS = [
  {
    range: "1 – 10",
    color: "text-green-400",
    spots: [
      { name: "Snail Area (Maple Island)", mobs: "Snails, Shrooms", tip: "Just follow the tutorial. By 10 you'll be teleported off the island." },
    ],
  },
  {
    range: "10 – 20",
    color: "text-emerald-400",
    spots: [
      { name: "Henesys Hunting Ground", mobs: "Ribbon Pigs, Green Snails", tip: "Popular starter zone. Two maps connected — rotate between them." },
      { name: "Kerning Sewers", mobs: "Slimes, Ligators", tip: "Solid alternative if Henesys is crowded. Ligators give decent EXP." },
    ],
  },
  {
    range: "20 – 30",
    color: "text-yellow-400",
    spots: [
      { name: "Henesys Hunting Ground II", mobs: "Horny Mushrooms", tip: "Stay here until 25 then push to Ant Tunnel." },
      { name: "Ant Tunnel", mobs: "Zombie Mushrooms", tip: "Jump training map — great EXP/hour for mages with magic claw or warriors with AoE." },
      { name: "Kerning PQ (KPQ)", mobs: "Various", tip: "Run KPQ from 21–30 for bonus EXP and fun. Best with a full party of 5." },
    ],
  },
  {
    range: "30 – 40",
    color: "text-amber-400",
    spots: [
      { name: "Sleepywood Dungeon", mobs: "Wild Boars, Drakes", tip: "Drakes are efficient solo. Wild Boars good for warriors." },
      { name: "Copper Drakes", mobs: "Copper Drakes", tip: "Better EXP than normal drakes. Good map layout for ranged classes." },
      { name: "Ludibrium PQ (LudiPQ)", mobs: "Various", tip: "One of the best PQs in the game. Run it every day from 35–50." },
    ],
  },
  {
    range: "40 – 50",
    color: "text-orange-400",
    spots: [
      { name: "Perion Dungeon", mobs: "Iron Boars, Zombie Warriors", tip: "Iron Boars are great for Warriors who need HP washing." },
      { name: "Ludibrium Stages", mobs: "Chronos, Platoon Chronos", tip: "Chronos maps are excellent EXP density for this range." },
      { name: "Orbis PQ (OPQ)", mobs: "Various", tip: "Run OPQ from 51–70. Some of the best EXP and community content." },
    ],
  },
  {
    range: "50 – 70",
    color: "text-red-400",
    spots: [
      { name: "Orbis PQ", mobs: "Various", tip: "Keep running OPQ until 70. It beats grinding for most classes." },
      { name: "Truckers (Magatia)", mobs: "Truckers", tip: "Flat map, very dense spawn. Excellent for mages and bowmen." },
      { name: "Lunar Pixies (Orbis)", mobs: "Lunar Pixies", tip: "Good for thieves and pirates. Decent drop rates." },
    ],
  },
  {
    range: "70 – 100",
    color: "text-rose-400",
    spots: [
      { name: "Coolie Zombies (Leafre)", mobs: "Coolie Zombies", tip: "Best map layout in the game for this range. Multiple layers, fast spawn." },
      { name: "Himes (Leafre)", mobs: "Himes", tip: "Excellent EXP/hour from 80+. Flying mobs — ranged classes dominate." },
      { name: "Magatia PQ (MPQ)", mobs: "Various", tip: "Run MPQ from 71–85 for great EXP and gear scrolls as drops." },
    ],
  },
  {
    range: "100 – 120",
    color: "text-purple-400",
    spots: [
      { name: "Skelegons / Skelosaurus (Leafre)", mobs: "Skelegons, Skelosaurus", tip: "The go-to from 100+. Best raw EXP in the game." },
      { name: "Hall of Horrors (Ludibrium)", mobs: "Petrifighters, Captains", tip: "Solid alternative to Leafre if the channel is full. Dense maps." },
      { name: "MP3 (Magatia)", mobs: "Rombots, Site, Agent", tip: "Strong EXP for mages. Flat map, very fast clear speed with AoE." },
    ],
  },
];

export default function LevelingGuide() {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "UmamiMS";

  return (
    <>
      <Head>
        <title>{`Leveling Guide — ${siteName}`}</title>
        <meta name="description" content="Best training spots level 1 to 120 for UmamiMS MapleStory v83" />
      </Head>

      <div className="stars-bg" aria-hidden="true" />

      <div className="relative z-10 min-h-screen flex flex-col">
        <Nav siteName={siteName} />

        <main className="flex-1 px-6 py-12 max-w-3xl mx-auto w-full">
          {/* Breadcrumb */}
          <div className="text-sm text-slate-600 mb-8">
            <Link href="/guides" className="hover:text-maple-accent transition-colors">Guides</Link>
            <span className="mx-2">›</span>
            <span className="text-slate-400">Leveling Guide</span>
          </div>

          <div className="mb-10">
            <h1 className="font-fredoka text-4xl font-bold maple-gradient-text mb-2">⚡ Leveling Guide</h1>
            <p className="text-slate-400">Best training spots from 1 to 120, tuned for UmamiMS x10 rates.</p>
            <div className="mt-3 flex gap-3 flex-wrap">
              <span className="text-xs px-3 py-1 rounded-full border border-maple-yellow/40 text-maple-yellow bg-maple-yellow/10 font-bold">x10 EXP Rates</span>
              <span className="text-xs px-3 py-1 rounded-full border border-maple-border/50 text-slate-400">v83 Content</span>
            </div>
          </div>

          {/* UmamiMS tip */}
          <div className="maple-card rounded-xl p-4 mb-10 border-maple-accent/30">
            <p className="text-sm text-slate-300">
              <span className="text-maple-accent font-bold">UmamiMS tip:</span> With x10 EXP you progress much faster than on a regular server. These ranges are approximate — you might blow past them in half the time, especially if you run Party Quests. Type <span className="font-mono text-maple-yellow bg-black/30 px-1 rounded">!fm</span> to reach the Free Market instantly where all custom NPCs are set up.
            </p>
          </div>

          <div className="space-y-8">
            {SPOTS.map((section) => (
              <div key={section.range} className="maple-card rounded-2xl p-6">
                <h2 className={`font-cinzel font-bold text-xl mb-4 ${section.color}`}>
                  Level {section.range}
                </h2>
                <div className="space-y-4">
                  {section.spots.map((spot, i) => (
                    <div key={i} className="border-l-2 border-maple-border/40 pl-4">
                      <div className="flex flex-wrap items-start gap-2 mb-1">
                        <span className="text-slate-100 font-semibold text-sm">{spot.name}</span>
                        <span className="text-xs text-slate-500 bg-black/30 px-2 py-0.5 rounded-full">{spot.mobs}</span>
                      </div>
                      <p className="text-slate-500 text-xs leading-relaxed">{spot.tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Party Quests callout */}
          <div className="mt-10 maple-card rounded-2xl p-6 border-maple-accent/20">
            <h3 className="font-cinzel text-maple-yellow font-bold mb-3">🎉 Don&apos;t Skip Party Quests</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Party Quests aren&apos;t just EXP — they&apos;re some of the best content in v83. Kerning PQ (21–30), Ludibrium PQ (35–50), Orbis PQ (51–70), and Magatia PQ (71–85) are all fully working on UmamiMS. Find a party in the Free Market or whisper players in the same level range.
            </p>
          </div>
        </main>

        <footer className="text-center py-6 text-slate-700 border-t border-maple-border/20 text-sm">
          🍁 {siteName} — Just for fun.
        </footer>
      </div>
    </>
  );
}
