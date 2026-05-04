import Head from "next/head";
import Link from "next/link";
import Nav from "../../components/Nav";
import { useState } from "react";

const ALL_SPOTS = [
  { minLv: 1,  maxLv: 10,  name: "Snail Hill / Maple Island",     mobs: "Snails, Shrooms",          map: "Maple Island",         type: "Solo",       mobId: 100100, note: "Just play through the tutorial. You'll leave the island at 10." },
  { minLv: 10, maxLv: 20,  name: "Henesys Hunting Ground",        mobs: "Ribbon Pigs, Green Snails", map: "Henesys",              type: "Solo",       mobId: 1210100, note: "The classic starter map. Two connected maps, rotate to refresh spawns." },
  { minLv: 10, maxLv: 20,  name: "Kerning Sewers",                 mobs: "Slimes, Ligators",          map: "Kerning City",         type: "Solo",       mobId: 3110100, note: "Good alt if Hunting Ground is full." },
  { minLv: 21, maxLv: 30,  name: "Ant Tunnel (Henesys)",           mobs: "Zombie Mushrooms",          map: "Henesys",              type: "Solo",       mobId: 2230101, note: "Jump training map. Excellent EXP for early 2nd job." },
  { minLv: 21, maxLv: 30,  name: "KPQ (Kerning PQ)",               mobs: "Mixed",                     map: "Kerning City",         type: "Party",      mobId: null,    note: "Best EXP per hour at this range in a full party. Do it every day." },
  { minLv: 30, maxLv: 40,  name: "Sleepywood — Drakes",            mobs: "Wild Drakes, Copper Drakes", map: "Sleepywood",          type: "Solo",       mobId: 4130100, note: "Copper Drakes give better EXP than regular Drakes. Bring potions." },
  { minLv: 30, maxLv: 40,  name: "Sleepywood — Wild Boars",        mobs: "Wild Boars, Iron Boars",    map: "Sleepywood",           type: "Solo",       mobId: 4230100, note: "Good for Warriors farming HP wash mesos." },
  { minLv: 35, maxLv: 50,  name: "LudiPQ (Ludibrium PQ)",          mobs: "Mixed",                     map: "Ludibrium",            type: "Party",      mobId: null,    note: "Arguably the best PQ in the game. Great EXP and lots of fun." },
  { minLv: 40, maxLv: 55,  name: "Platoon Chronos (Ludi)",         mobs: "Platoon Chronos",           map: "Ludibrium",            type: "Solo",       mobId: 5300100, note: "Excellent EXP density. Good map layout for most classes." },
  { minLv: 51, maxLv: 70,  name: "OPQ (Orbis PQ)",                 mobs: "Mixed",                     map: "Orbis",                type: "Party",      mobId: null,    note: "Better EXP than grinding at this range if you have a group." },
  { minLv: 50, maxLv: 65,  name: "Truckers (Magatia)",             mobs: "Truckers",                  map: "Magatia",              type: "Solo",       mobId: 9300183, note: "Flat map, dense spawn. Great for mages and bowmen with AoE." },
  { minLv: 55, maxLv: 70,  name: "Lunar Pixies (Orbis)",           mobs: "Lunar Pixies",              map: "Orbis",                type: "Solo",       mobId: 6230300, note: "Good drops and decent EXP. Platform map suits most classes." },
  { minLv: 65, maxLv: 85,  name: "Coolie Zombies (Leafre)",        mobs: "Coolie Zombies",            map: "Leafre",               type: "Solo",       mobId: 8150100, note: "One of the most efficient training maps in v83. Multi-layered platform." },
  { minLv: 71, maxLv: 85,  name: "MPQ (Magatia PQ)",               mobs: "Mixed",                     map: "Magatia",              type: "Party",      mobId: null,    note: "Strong EXP and good loot. Less popular than other PQs, easy to get a spot." },
  { minLv: 75, maxLv: 95,  name: "Himes (Leafre)",                 mobs: "Himes",                     map: "Leafre",               type: "Solo",       mobId: 8150300, note: "Flying mobs, great EXP. Ranged classes absolutely dominate here." },
  { minLv: 90, maxLv: 110, name: "Skelegons / Skelosaurus",        mobs: "Skelegons, Skelosaurus",    map: "Leafre",               type: "Solo",       mobId: 8150200, note: "The classic endgame grind spot. Best raw EXP in the game from 100+." },
  { minLv: 85, maxLv: 100, name: "MP3 (Magatia)",                  mobs: "Rombots, Agents, Site",    map: "Magatia",              type: "Solo",       mobId: 9300185, note: "Excellent for mages. Flat map, great spawn density." },
  { minLv: 100, maxLv: 120, name: "Hall of Horrors (Ludi)",        mobs: "Petrifighters, Captains",   map: "Ludibrium",            type: "Solo",       mobId: 5100001, note: "Good alternative when Leafre is full. Multi-platform map." },
  { minLv: 100, maxLv: 120, name: "Galloperas (Leafre)",           mobs: "Galloperas",                map: "Leafre",               type: "Solo",       mobId: 8180000, note: "High EXP flying mobs. Great for ranged and mage classes." },
];

const TYPES = ["All", "Solo", "Party"];

export default function TrainingSpots() {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "UmamiMS";
  const [level, setLevel] = useState(50);
  const [type, setType] = useState("All");

  const filtered = ALL_SPOTS.filter(s =>
    level >= s.minLv && level <= s.maxLv &&
    (type === "All" || s.type === type)
  ).sort((a, b) => a.minLv - b.minLv);

  return (
    <>
      <Head>
        <title>{`Training Spots — ${siteName}`}</title>
        <meta name="description" content="Find the best MapleStory v83 training spots for your level" />
      </Head>

      <div className="stars-bg" aria-hidden="true" />

      <div className="relative z-10 min-h-screen flex flex-col">
        <Nav siteName={siteName} />

        <main className="flex-1 px-6 py-12 max-w-3xl mx-auto w-full">
          <div className="text-sm text-slate-600 mb-8">
            <Link href="/tools" className="hover:text-maple-accent transition-colors">Tools</Link>
            <span className="mx-2">›</span>
            <span className="text-slate-400">Training Spots</span>
          </div>

          <div className="mb-8">
            <h1 className="font-fredoka text-4xl font-bold maple-gradient-text mb-2">🗺️ Training Spots</h1>
            <p className="text-slate-400 text-sm">Drag the level slider to find spots that match your character right now.</p>
          </div>

          {/* Controls */}
          <div className="maple-card rounded-2xl p-6 mb-8">
            <div className="mb-5">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Your Level</label>
                <span className="font-fredoka text-2xl font-bold maple-gradient-text">{level}</span>
              </div>
              <input
                type="range" min={1} max={120} step={1}
                value={level}
                onChange={e => setLevel(parseInt(e.target.value))}
                className="w-full accent-maple-accent"
              />
              <div className="flex justify-between text-xs text-slate-700 mt-1">
                <span>1</span><span>30</span><span>60</span><span>90</span><span>120</span>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">Play Style</label>
              <div className="flex gap-2">
                {TYPES.map(t => (
                  <button
                    key={t}
                    onClick={() => setType(t)}
                    className={`px-4 py-1.5 rounded-lg text-sm font-semibold border transition-all ${
                      type === t
                        ? "btn-maple border-transparent text-white"
                        : "border-maple-border/50 text-slate-400 hover:border-maple-accent hover:text-maple-accent"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-slate-600">
              <p className="text-4xl mb-3">🌿</p>
              <p>No matching spots found. Try adjusting the filters.</p>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-xs text-slate-600">{filtered.length} spot{filtered.length !== 1 ? "s" : ""} for level {level}</p>
              {filtered.map((spot, i) => (
                <div key={i} className="maple-card rounded-2xl p-5 flex gap-4 items-start">
                  {/* Mob image */}
                  {spot.mobId ? (
                    <img
                      src={`https://maplestory.io/api/GMS/83/mob/${spot.mobId}/render/stand`}
                      alt={spot.mobs}
                      className="w-12 h-12 object-contain flex-shrink-0 image-rendering-pixelated"
                      style={{ imageRendering: "pixelated" }}
                      onError={e => { e.target.style.display = "none"; }}
                    />
                  ) : (
                    <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 text-2xl">🎉</div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <h3 className="font-cinzel text-slate-100 font-bold text-sm">{spot.name}</h3>
                      <div className="flex gap-2 flex-shrink-0">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${
                          spot.type === "Party"
                            ? "text-blue-400 border-blue-400/40 bg-blue-400/10"
                            : "text-green-400 border-green-400/40 bg-green-400/10"
                        }`}>{spot.type}</span>
                        <span className="text-xs text-slate-500 border border-maple-border/30 px-2 py-0.5 rounded-full">
                          {spot.minLv}–{spot.maxLv}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="text-xs text-slate-500 bg-black/30 px-2 py-0.5 rounded-full">{spot.mobs}</span>
                      <span className="text-xs text-slate-600 bg-black/20 px-2 py-0.5 rounded-full">📍 {spot.map}</span>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed">{spot.note}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>

        <footer className="text-center py-6 text-slate-700 border-t border-maple-border/20 text-sm">
          🍁 {siteName} — Just for fun.
        </footer>
      </div>
    </>
  );
}
