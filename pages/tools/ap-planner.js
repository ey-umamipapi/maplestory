import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { useState, useMemo } from "react";

const BUILDS = {
  warrior: {
    label: "Warrior",
    primaryStat: "STR",
    note: "Warriors need enough DEX to hit mobs without missing. Once you can reliably hit, dump everything into STR. HP washing is optional but rewarding.",
    perLevel: (lv) => {
      // Enough DEX to hit, rest STR
      const baseDex = 4;
      const extraDex = Math.max(0, Math.floor((lv - 10) / 10)); // slight DEX scaling for accuracy
      const dex = baseDex + extraDex;
      return { STR: 5 - Math.min(1, extraDex > 0 ? 1 : 0), DEX: Math.min(1, extraDex > 0 ? 1 : 0) + (lv <= 30 ? 1 : 0), INT: 0, LUK: 0 };
    },
    base: { STR: 12, DEX: 5, INT: 4, LUK: 4 },
    color: "text-red-400",
  },
  mage: {
    label: "Mage",
    primaryStat: "INT",
    note: "Pure INT build. After 1st job, a small amount of LUK helps early on but INT is everything. Bishop benefits from investing INT for both damage and MP pool.",
    perLevel: () => ({ STR: 0, DEX: 0, INT: 5, LUK: 0 }),
    base: { STR: 4, DEX: 3, INT: 13, LUK: 4 },
    color: "text-blue-400",
  },
  bowman: {
    label: "Bowman",
    primaryStat: "DEX",
    note: "DEX primary. You need enough STR for early bows but can go pure DEX from 2nd job onward. Focus DEX for damage, STR only for weapon requirements.",
    perLevel: (lv) => ({
      STR: lv < 30 ? 1 : 0,
      DEX: lv < 30 ? 4 : 5,
      INT: 0,
      LUK: 0,
    }),
    base: { STR: 4, DEX: 13, INT: 4, LUK: 4 },
    color: "text-green-400",
  },
  nl: {
    label: "Night Lord (Assassin)",
    primaryStat: "LUK",
    note: "Pure LUK after 1st job. You need 25 DEX baseline to equip early gear but put everything else into LUK. Night Lord is expensive but one of the highest DPS.",
    perLevel: (lv) => ({
      STR: 0,
      DEX: lv < 20 ? 1 : 0,
      INT: 0,
      LUK: lv < 20 ? 4 : 5,
    }),
    base: { STR: 4, DEX: 4, INT: 4, LUK: 13 },
    color: "text-purple-400",
  },
  shadower: {
    label: "Shadower (Bandit)",
    primaryStat: "LUK",
    note: "Same as Night Lord — pure LUK after enough DEX for gear. Shadowers need slightly less LUK to deal good damage compared to NL.",
    perLevel: (lv) => ({
      STR: 0,
      DEX: lv < 20 ? 1 : 0,
      INT: 0,
      LUK: lv < 20 ? 4 : 5,
    }),
    base: { STR: 4, DEX: 4, INT: 4, LUK: 13 },
    color: "text-violet-400",
  },
  buccaneer: {
    label: "Buccaneer (Brawler)",
    primaryStat: "STR",
    note: "STR primary, similar to Warrior. Once your DEX meets gear requirements (usually 120–140), pour the rest into STR.",
    perLevel: (lv) => ({
      STR: lv < 40 ? 3 : 4,
      DEX: lv < 40 ? 2 : 1,
      INT: 0,
      LUK: 0,
    }),
    base: { STR: 12, DEX: 5, INT: 4, LUK: 4 },
    color: "text-amber-400",
  },
  corsair: {
    label: "Corsair (Gunslinger)",
    primaryStat: "DEX",
    note: "DEX primary like a Bowman. Needs less STR than Bowman — mostly pure DEX from 2nd job.",
    perLevel: () => ({ STR: 0, DEX: 5, INT: 0, LUK: 0 }),
    base: { STR: 4, DEX: 13, INT: 4, LUK: 4 },
    color: "text-orange-400",
  },
};

const STAT_COLORS = { STR: "text-red-400", DEX: "text-green-400", INT: "text-blue-400", LUK: "text-purple-400" };
const STAT_BG = { STR: "bg-red-400", DEX: "bg-green-400", INT: "bg-blue-400", LUK: "bg-purple-400" };

export default function APPlanner() {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "UmamiMS";
  const [buildId, setBuildId] = useState("warrior");
  const [targetLevel, setTargetLevel] = useState(70);

  const build = BUILDS[buildId];

  const stats = useMemo(() => {
    const total = { ...build.base };
    for (let lv = 2; lv <= targetLevel; lv++) {
      const gain = build.perLevel(lv);
      total.STR += gain.STR;
      total.DEX += gain.DEX;
      total.INT += gain.INT;
      total.LUK += gain.LUK;
    }
    return total;
  }, [build, targetLevel]);

  const totalStats = Object.values(stats).reduce((a, b) => a + b, 0);

  return (
    <>
      <Head>
        <title>{`AP Build Planner — ${siteName}`}</title>
        <meta name="description" content="Plan your MapleStory v83 AP stat distribution" />
      </Head>

      <Layout siteName={siteName}>
        <div className="stars-bg" aria-hidden="true" />

        <main className="flex-1 px-6 py-12 max-w-4xl mx-auto w-full">
          <div className="text-sm text-slate-600 mb-8">
            <Link href="/tools" className="hover:text-maple-accent transition-colors">Tools</Link>
            <span className="mx-2">›</span>
            <span className="text-slate-400">AP Build Planner</span>
          </div>

          <div className="mb-8">
            <h1 className="font-fredoka text-4xl font-bold maple-gradient-text mb-2">📊 AP Build Planner</h1>
            <p className="text-slate-400 text-sm">See the recommended stat spread for any class at any level.</p>
          </div>

          {/* Controls */}
          <div className="maple-card rounded-2xl p-6 mb-6">
            <div className="mb-5">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">Class</label>
              <select
                value={buildId}
                onChange={e => setBuildId(e.target.value)}
                className="maple-input w-full bg-black/30 border border-maple-border/40 rounded-lg px-3 py-2 text-slate-100 text-sm"
              >
                {Object.entries(BUILDS).map(([id, b]) => (
                  <option key={id} value={id} className="bg-[#0a0a14]">{b.label}</option>
                ))}
              </select>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Target Level</label>
                <span className={`font-fredoka text-2xl font-bold ${build.color}`}>{targetLevel}</span>
              </div>
              <input
                type="range" min={1} max={120} step={1}
                value={targetLevel}
                onChange={e => setTargetLevel(parseInt(e.target.value))}
                className="w-full accent-maple-accent"
              />
              <div className="flex justify-between text-xs text-slate-700 mt-1">
                <span>1</span><span>30</span><span>60</span><span>90</span><span>120</span>
              </div>
            </div>
          </div>

          {/* Build note */}
          <div className="maple-card rounded-xl p-4 mb-6 border-maple-accent/20">
            <p className="text-sm text-slate-400 leading-relaxed">
              <span className={`font-bold ${build.color}`}>{build.label}:</span> {build.note}
            </p>
          </div>

          {/* Stat display */}
          <div className="maple-card rounded-2xl p-6 mb-6">
            <h2 className="font-cinzel text-slate-400 text-xs font-bold uppercase tracking-widest mb-5">
              Recommended Stats at Level {targetLevel}
            </h2>

            <div className="space-y-4">
              {Object.entries(stats).map(([stat, value]) => {
                const pct = Math.round((value / totalStats) * 100);
                return (
                  <div key={stat}>
                    <div className="flex justify-between items-center mb-1">
                      <span className={`text-sm font-bold font-mono ${STAT_COLORS[stat]}`}>{stat}</span>
                      <span className="text-slate-100 font-bold font-mono text-sm">{value.toLocaleString()}</span>
                    </div>
                    <div className="h-2 rounded-full bg-black/40 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${STAT_BG[stat]} transition-all duration-300`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <div className="text-right text-xs text-slate-700 mt-0.5">{pct}% of total</div>
                  </div>
                );
              })}
            </div>

            <div className="border-t border-maple-border/20 mt-5 pt-4 flex justify-between text-sm">
              <span className="text-slate-500">Total stats</span>
              <span className="font-bold font-mono text-slate-200">{totalStats.toLocaleString()}</span>
            </div>
          </div>

          {/* Per-level breakdown */}
          <div className="maple-card rounded-2xl p-6">
            <h2 className="font-cinzel text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">
              How to Allocate Per Level (from Lv {Math.max(1, targetLevel - 4)} to {targetLevel})
            </h2>
            <div className="space-y-2">
              {Array.from({ length: Math.min(5, targetLevel) }, (_, i) => {
                const lv = Math.max(2, targetLevel - 4 + i);
                const gain = build.perLevel(lv);
                return (
                  <div key={lv} className="flex items-center gap-3 text-xs">
                    <span className="text-slate-600 w-14 flex-shrink-0">Lv {lv}</span>
                    <div className="flex gap-2 flex-wrap">
                      {Object.entries(gain).filter(([, v]) => v > 0).map(([stat, v]) => (
                        <span key={stat} className={`font-bold font-mono ${STAT_COLORS[stat]} bg-black/30 px-2 py-0.5 rounded`}>
                          +{v} {stat}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </main>

        <footer className="text-center py-6 text-slate-700 border-t border-maple-border/20 text-sm">
          🍁 {siteName} — Just for fun.
        </footer>
      </Layout>
    </>
  );
}
