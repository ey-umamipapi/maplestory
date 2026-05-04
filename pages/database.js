import Head from "next/head";
import Link from "next/link";
import { useState, useMemo, useEffect } from "react";
import fs from "fs";
import path from "path";

const TABS = ["Monsters", "NPCs", "Maps", "Skills"];
const PAGE_SIZE = 60;
const API = "https://maplestory.io/api/GMS/83";

const mobImg   = (id) => `${API}/mob/${id}/render/stand`;
const npcImg   = (id) => `${API}/npc/${id}/render/stand`;
const skillImg = (id) => `${API}/skill/${id}/icon`;

// ── Theme ────────────────────────────────────────────────────────────────────

const THEMES = {
  day: {
    bg:       "bg-slate-100",
    nav:      "bg-white/80 border-slate-200",
    card:     "bg-white border border-slate-200 shadow-sm",
    cardHov:  "hover:border-rose-400",
    text:     "text-slate-800",
    subtext:  "text-slate-500",
    muted:    "text-slate-400",
    input:    "bg-white border-slate-300 text-slate-800 placeholder-slate-400",
    badge:    "bg-slate-100 border-slate-300 text-slate-500 hover:border-rose-400 hover:text-rose-500",
    tabAct:   "bg-rose-500 text-white border-transparent",
    tabInact: "border-slate-300 text-slate-500 hover:border-rose-400 hover:text-rose-500",
    btn:      "bg-rose-500 hover:bg-rose-600 text-white",
    footer:   "border-slate-200 text-slate-400",
    stars:    false,
  },
  dusk: {
    bg:       "bg-[#1a1025]",
    nav:      "bg-[#140e1e]/80 border-purple-900/40",
    card:     "bg-[#1e1530]/80 border border-purple-900/30",
    cardHov:  "hover:border-amber-400/50",
    text:     "text-amber-50",
    subtext:  "text-purple-300/70",
    muted:    "text-purple-400/40",
    input:    "bg-[#140e1e]/60 border-purple-900/40 text-amber-50 placeholder-purple-400/40",
    badge:    "bg-black/30 border-purple-900/30 text-purple-300/60 hover:border-amber-400 hover:text-amber-400",
    tabAct:   "bg-amber-500 text-white border-transparent",
    tabInact: "border-purple-900/40 text-purple-300/60 hover:border-amber-400 hover:text-amber-400",
    btn:      "bg-amber-500 hover:bg-amber-600 text-white",
    footer:   "border-purple-900/20 text-purple-400/30",
    stars:    true,
  },
  night: {
    bg:       "bg-[#0a0a0f]",
    nav:      "bg-black/30 border-slate-800/40",
    card:     "bg-[#0d0d14]/80 border border-slate-800/40",
    cardHov:  "hover:border-rose-500/50",
    text:     "text-slate-100",
    subtext:  "text-slate-500",
    muted:    "text-slate-700",
    input:    "bg-black/40 border-slate-800/40 text-slate-200 placeholder-slate-700",
    badge:    "bg-black/40 border-slate-800/40 text-slate-500 hover:border-rose-500 hover:text-rose-400",
    tabAct:   "bg-rose-600 text-white border-transparent",
    tabInact: "border-slate-800/50 text-slate-500 hover:border-rose-500 hover:text-rose-400",
    btn:      "bg-rose-600 hover:bg-rose-700 text-white",
    footer:   "border-slate-800/20 text-slate-800",
    stars:    true,
  },
};

function getSystemTheme() {
  if (typeof window === "undefined") return "night";
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "day" : "night";
}

// ── Small components ──────────────────────────────────────────────────────────

function CopyBadge({ label, value, th }) {
  const [copied, setCopied] = useState(false);
  function copy() {
    navigator.clipboard?.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  }
  return (
    <button
      onClick={copy}
      title={`Copy: ${value}`}
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-mono border transition-all ${th.badge}`}
    >
      {copied ? "✓" : label}
    </button>
  );
}

function Img({ src, alt, className }) {
  const [err, setErr] = useState(false);
  if (err) return <div className={`${className} flex items-center justify-center text-slate-600 text-lg`}>?</div>;
  return <img src={src} alt={alt} className={className} onError={() => setErr(true)} loading="lazy" />;
}

// ── Cards ─────────────────────────────────────────────────────────────────────

function MonsterCard({ id, name, th }) {
  return (
    <div className={`rounded-xl p-3 flex flex-col items-center gap-2 text-center transition-all ${th.card} ${th.cardHov}`}>
      <div className="w-16 h-16 flex items-center justify-center">
        <Img src={mobImg(id)} alt={name} className="max-w-full max-h-full object-contain" />
      </div>
      <div className="w-full">
        <p className={`text-xs font-semibold truncate mb-0.5 ${th.text}`}>{name}</p>
        <p className={`text-xs font-mono mb-2 ${th.muted}`}>#{id}</p>
        <div className="flex flex-wrap gap-1 justify-center">
          <CopyBadge label={`!spawn ${id}`} value={`!spawn ${id}`} th={th} />
          <CopyBadge label={`!pmob ${id}`}  value={`!pmob ${id}`}  th={th} />
        </div>
      </div>
    </div>
  );
}

function NpcCard({ id, name, th }) {
  return (
    <div className={`rounded-xl p-3 flex flex-col items-center gap-2 text-center transition-all ${th.card} ${th.cardHov}`}>
      <div className="w-16 h-20 flex items-center justify-center">
        <Img src={npcImg(id)} alt={name} className="max-w-full max-h-full object-contain" />
      </div>
      <div className="w-full">
        <p className={`text-xs font-semibold truncate mb-0.5 ${th.text}`}>{name}</p>
        <p className={`text-xs font-mono mb-2 ${th.muted}`}>#{id}</p>
        <div className="flex flex-wrap gap-1 justify-center">
          <CopyBadge label={`!npc ${id}`}  value={`!npc ${id}`}  th={th} />
          <CopyBadge label={`!pnpc ${id}`} value={`!pnpc ${id}`} th={th} />
        </div>
      </div>
    </div>
  );
}

function MapCard({ id, name, th }) {
  return (
    <div className={`rounded-xl p-3 flex items-center gap-3 transition-all ${th.card} ${th.cardHov}`}>
      <span className="text-xl flex-shrink-0">🗺️</span>
      <div className="min-w-0 flex-1">
        <p className={`text-xs font-semibold truncate mb-0.5 ${th.text}`}>{name}</p>
        <p className={`text-xs font-mono mb-1.5 ${th.muted}`}>#{id}</p>
        <CopyBadge label={`!warp ${id}`} value={`!warp ${id}`} th={th} />
      </div>
    </div>
  );
}

function SkillCard({ id, name, desc, th }) {
  return (
    <div className={`rounded-xl p-3 flex items-start gap-3 transition-all ${th.card} ${th.cardHov}`}>
      <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
        <Img src={skillImg(id)} alt={name} className="max-w-full max-h-full object-contain" />
      </div>
      <div className="min-w-0 flex-1">
        <p className={`text-xs font-semibold truncate mb-0.5 ${th.text}`}>{name}</p>
        <p className={`text-xs font-mono mb-1 ${th.muted}`}>#{id}</p>
        {desc && <p className={`text-xs leading-relaxed line-clamp-2 ${th.subtext}`}>{desc}</p>}
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Database({ mobs, npcs, maps, skills, metadata }) {
  const [themeName, setThemeName] = useState("night");
  const [tab, setTab]   = useState("Monsters");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [minLv, setMinLv] = useState(1);
  const [maxLv, setMaxLv] = useState(200);
  const [showBossOnly, setShowBossOnly] = useState(false);

  // Default to system theme on mount
  useEffect(() => { setThemeName(getSystemTheme()); }, []);

  const th = THEMES[themeName];

  const data = { Monsters: mobs, NPCs: npcs, Maps: maps, Skills: skills };
  const activeData = data[tab] ?? [];

  const filtered = useMemo(() => {
    let result = activeData;
    const q = search.toLowerCase().trim();

    // Search filter
    if (q) {
      result = result.filter(
        (e) => e.name.toLowerCase().includes(q) || String(e.id).includes(q)
      );
    }

    // Monster-specific filters
    if (tab === "Monsters" && metadata) {
      result = result.filter((mob) => {
        // Level filter
        const lvl = metadata.mobLevels[mob.id] || 1;
        if (lvl < minLv || lvl > maxLv) return false;

        // Boss filter
        if (showBossOnly && !metadata.bosses[mob.id]) return false;

        return true;
      });
    }

    return result;
  }, [activeData, search, tab, minLv, maxLv, showBossOnly, metadata]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const visible    = filtered.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  function switchTab(t) { setTab(t); setSearch(""); setPage(0); }
  function onSearch(e)   { setSearch(e.target.value); setPage(0); }

  const themeButtons = [
    { key: "day",  label: "☀️ Day" },
    { key: "dusk", label: "🌆 Dusk" },
    { key: "night",label: "🌙 Night" },
  ];

  return (
    <>
      <Head>
        <title>Database — UmamiMS</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <meta name="description" content="MapleStory v83 monster, NPC, map and skill database with GM commands." />
      </Head>

      <style>{`body { font-family: 'Inter', sans-serif; }`}</style>

      <div className={`min-h-screen flex flex-col transition-colors duration-300 ${th.bg}`}>
        {th.stars && <div className="stars-bg" aria-hidden="true" />}

        {/* ── Nav ── */}
        <nav className={`relative z-10 border-b backdrop-blur-sm px-6 py-4 flex items-center justify-between ${th.nav}`}>
          <Link href="/" className="font-fredoka text-2xl font-bold maple-gradient-text tracking-wide">
            🍁 UmamiMS
          </Link>
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <div className="flex gap-1 bg-black/20 rounded-lg p-1">
              {themeButtons.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setThemeName(key)}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                    themeName === key ? "bg-white/20 text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <Link href="/register" className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${th.btn}`}>
              Register
            </Link>
          </div>
        </nav>

        {/* ── Main ── */}
        <main className="relative z-10 flex-1 px-4 py-8 max-w-7xl mx-auto w-full">
          <h1 className={`text-3xl font-bold mb-1 maple-gradient-text`} style={{ fontFamily: "Inter, sans-serif" }}>
            Game Database
          </h1>
          <p className={`text-sm mb-8 ${th.subtext}`}>
            Browse monsters, NPCs, maps and skills. Click any command badge to copy it.
          </p>

          {/* Tabs */}
          <div className="flex gap-2 mb-5 flex-wrap">
            {[
              { key: "Monsters", icon: "👹" },
              { key: "NPCs",     icon: "🧑" },
              { key: "Maps",     icon: "🗺️" },
              { key: "Skills",   icon: "⚡" },
            ].map(({ key, icon }) => (
              <button
                key={key}
                onClick={() => switchTab(key)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all border ${
                  tab === key ? th.tabAct : th.tabInact
                }`}
              >
                {icon} {key}
              </button>
            ))}
          </div>

          {/* Search + Filters */}
          <div className="mb-5 flex gap-3 items-end flex-wrap">
            <div className="relative max-w-sm">
              <span className={`absolute left-3 top-1/2 -translate-y-1/2 text-sm ${th.muted}`}>🔍</span>
              <input
                type="text"
                placeholder={`Search ${tab.toLowerCase()}...`}
                value={search}
                onChange={onSearch}
                className={`w-full pl-9 pr-4 py-2 rounded-xl border text-sm focus:outline-none transition-all ${th.input}`}
              />
            </div>

            {/* Monster-only filters */}
            {tab === "Monsters" && metadata && (
              <>
                <div className="flex flex-col gap-1">
                  <label className={`text-xs font-semibold ${th.muted}`}>Level</label>
                  <div className="flex gap-2 items-center">
                    <input
                      type="number"
                      min={1}
                      max={200}
                      value={minLv}
                      onChange={e => { setMinLv(Math.max(1, parseInt(e.target.value) || 1)); setPage(0); }}
                      className={`w-16 px-2 py-1 rounded-lg border text-xs ${th.input}`}
                      placeholder="Min"
                    />
                    <span className={th.muted}>–</span>
                    <input
                      type="number"
                      min={1}
                      max={200}
                      value={maxLv}
                      onChange={e => { setMaxLv(Math.min(200, parseInt(e.target.value) || 200)); setPage(0); }}
                      className={`w-16 px-2 py-1 rounded-lg border text-xs ${th.input}`}
                      placeholder="Max"
                    />
                  </div>
                </div>

                <label className={`flex items-center gap-2 cursor-pointer ${th.text} text-sm`}>
                  <input
                    type="checkbox"
                    checked={showBossOnly}
                    onChange={e => { setShowBossOnly(e.target.checked); setPage(0); }}
                    className="w-4 h-4 rounded"
                  />
                  <span>Bosses only</span>
                </label>
              </>
            )}
          </div>

          {/* Count */}
          <p className={`text-xs mb-4 ${th.muted}`}>
            {filtered.length.toLocaleString()} results
            {totalPages > 1 && ` — page ${page + 1} of ${totalPages}`}
          </p>

          {/* Grid */}
          {tab === "Monsters" && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
              {visible.map((e) => <MonsterCard key={e.id} {...e} th={th} />)}
            </div>
          )}
          {tab === "NPCs" && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
              {visible.map((e) => <NpcCard key={e.id} {...e} th={th} />)}
            </div>
          )}
          {tab === "Maps" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {visible.map((e) => <MapCard key={e.id} {...e} th={th} />)}
            </div>
          )}
          {tab === "Skills" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {visible.map((e) => <SkillCard key={e.id} {...e} th={th} />)}
            </div>
          )}

          {visible.length === 0 && (
            <div className={`text-center py-20 ${th.muted}`}>No results found.</div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex gap-2 justify-center mt-10 flex-wrap">
              <button
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={page === 0}
                className={`px-4 py-2 rounded-lg border text-sm transition-all disabled:opacity-30 ${th.tabInact}`}
              >
                ← Prev
              </button>
              {Array.from({ length: Math.min(7, totalPages) }, (_, i) => {
                const p = page < 4 ? i : page - 3 + i;
                if (p >= totalPages) return null;
                return (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={`px-3 py-2 rounded-lg border text-sm transition-all ${p === page ? th.tabAct : th.tabInact}`}
                  >
                    {p + 1}
                  </button>
                );
              })}
              <button
                onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={page >= totalPages - 1}
                className={`px-4 py-2 rounded-lg border text-sm transition-all disabled:opacity-30 ${th.tabInact}`}
              >
                Next →
              </button>
            </div>
          )}
        </main>

        <footer className={`relative z-10 text-center py-6 text-sm border-t ${th.footer}`}>
          🍁 UmamiMS — Just for fun.
        </footer>
      </div>
    </>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────

function parseHandbook(filePath, isSkill = false) {
  try {
    const text = fs.readFileSync(filePath, "utf8");
    const out = [];
    for (const raw of text.split("\n")) {
      const line = raw.trim();
      const m = line.match(/^(\d+)\s*-\s*(.+)/);
      if (!m) continue;
      const id   = parseInt(m[1], 10);
      const rest = m[2].trim();
      if (isSkill) {
        const sep  = rest.indexOf(" - ");
        const name = sep >= 0 ? rest.slice(0, sep).trim() : rest;
        const desc = sep >= 0 ? rest.slice(sep + 3).replace(/\\n/g, " ").trim() : "";
        out.push({ id, name, desc });
      } else {
        out.push({ id, name: rest });
      }
    }
    return out;
  } catch (e) {
    // File not found or unreadable — return empty array
    return [];
  }
}

export async function getStaticProps() {
  // Try handbook paths in order of priority
  let hb = path.join(process.cwd(), "handbook");

  if (!fs.existsSync(hb)) {
    hb = path.join(process.cwd(), "..", "cosmic-server", "handbook");
  }
  if (!fs.existsSync(hb)) {
    hb = path.join(process.cwd(), "cosmic-server", "handbook");
  }

  const mobs   = parseHandbook(path.join(hb, "Mob.txt"));
  const npcs   = parseHandbook(path.join(hb, "NPC.txt"));
  const maps   = parseHandbook(path.join(hb, "Map.txt"));
  const skills = parseHandbook(path.join(hb, "Skill.txt"), true);

  // Load metadata (boss flags and mob levels)
  let metadata = { bosses: {}, mobLevels: {} };
  try {
    const metaPath = path.join(process.cwd(), "public", "mob-metadata.json");
    if (fs.existsSync(metaPath)) {
      metadata = JSON.parse(fs.readFileSync(metaPath, "utf8"));
    }
  } catch (e) {
    // Fallback to empty metadata if file not found
  }

  return { props: { mobs, npcs, maps, skills, metadata }, revalidate: 3600 };
}
