import Head from "next/head";
import Link from "next/link";
import Nav from "../../components/Nav";
import { useState, useMemo } from "react";

const CLASSES = [
  { id: "warrior",   label: "Warrior (Hero/Paladin/DK)", primary: "STR", secondary: "DEX",  formula: (s,sec,atk) => ({ min: ((s*4+sec)*atk/100)*0.9, max: (s*4+sec)*atk/100 }) },
  { id: "mage",      label: "Mage (Arch Mage/Bishop)",   primary: "INT", secondary: "LUK",  formula: (s,sec,atk) => ({ min: ((s*4+sec)*atk/100)*0.85, max: (s*4+sec)*atk/100 }) },
  { id: "bowman",    label: "Bowman (BM/MM)",             primary: "DEX", secondary: "STR",  formula: (s,sec,atk) => ({ min: ((s*4+sec)*atk/100)*0.9, max: (s*4+sec)*atk/100 }) },
  { id: "thief",     label: "Thief (NL/Shadower)",        primary: "LUK", secondary: "DEX",  formula: (s,sec,atk) => ({ min: ((s*4+sec)*atk/100)*0.85, max: (s*4+sec)*atk/100 }) },
  { id: "brawler",   label: "Pirate — Buccaneer",         primary: "STR", secondary: "DEX",  formula: (s,sec,atk) => ({ min: ((s*4+sec)*atk/100)*0.9, max: (s*4+sec)*atk/100 }) },
  { id: "gunslinger",label: "Pirate — Corsair",           primary: "DEX", secondary: "STR",  formula: (s,sec,atk) => ({ min: ((s*4+sec)*atk/100)*0.85, max: (s*4+sec)*atk/100 }) },
];

function StatInput({ label, value, onChange }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">{label}</label>
      <input
        type="number"
        min={0}
        max={9999}
        value={value}
        onChange={e => onChange(Math.max(0, parseInt(e.target.value) || 0))}
        className="maple-input w-full bg-black/30 border border-maple-border/40 rounded-lg px-3 py-2 text-slate-100 text-sm font-mono"
      />
    </div>
  );
}

export default function DamageCalc() {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "UmamiMS";

  const [classId, setClassId] = useState("warrior");
  const [primary, setPrimary] = useState(80);
  const [secondary, setSecondary] = useState(20);
  const [atk, setAtk] = useState(100);
  const [mastery, setMastery] = useState(60);
  const [skillPct, setSkillPct] = useState(100);

  const cls = CLASSES.find(c => c.id === classId);

  const result = useMemo(() => {
    const base = cls.formula(primary, secondary, atk);
    const masteryMult = mastery / 100;
    const skillMult = skillPct / 100;
    const min = Math.round(base.min * masteryMult * skillMult);
    const max = Math.round(base.max * skillMult);
    const avg = Math.round((min + max) / 2);
    return { min, max, avg };
  }, [cls, primary, secondary, atk, mastery, skillPct]);

  return (
    <>
      <Head>
        <title>{`Damage Calculator — ${siteName}`}</title>
        <meta name="description" content="Calculate your MapleStory v83 damage output" />
      </Head>

      <div className="stars-bg" aria-hidden="true" />

      <div className="relative z-10 min-h-screen flex flex-col">
        <Nav siteName={siteName} />

        <main className="flex-1 px-6 py-12 max-w-2xl mx-auto w-full">
          <div className="text-sm text-slate-600 mb-8">
            <Link href="/tools" className="hover:text-maple-accent transition-colors">Tools</Link>
            <span className="mx-2">›</span>
            <span className="text-slate-400">Damage Calculator</span>
          </div>

          <div className="mb-8">
            <h1 className="font-fredoka text-4xl font-bold maple-gradient-text mb-2">⚔️ Damage Calculator</h1>
            <p className="text-slate-400 text-sm">Enter your buffed stats to see your base damage range. Simplified v83 formula — actual in-game output may vary slightly.</p>
          </div>

          <div className="maple-card rounded-2xl p-6 mb-6">
            {/* Class selector */}
            <div className="mb-5">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">Class</label>
              <select
                value={classId}
                onChange={e => setClassId(e.target.value)}
                className="maple-input w-full bg-black/30 border border-maple-border/40 rounded-lg px-3 py-2 text-slate-100 text-sm"
              >
                {CLASSES.map(c => (
                  <option key={c.id} value={c.id} className="bg-[#0a0a14]">{c.label}</option>
                ))}
              </select>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mb-5">
              <StatInput
                label={`${cls.primary} (Primary)`}
                value={primary}
                onChange={setPrimary}
              />
              <StatInput
                label={`${cls.secondary} (Secondary)`}
                value={secondary}
                onChange={setSecondary}
              />
              <StatInput
                label="Weapon ATK"
                value={atk}
                onChange={setAtk}
              />
              <StatInput
                label="Skill Damage %"
                value={skillPct}
                onChange={setSkillPct}
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">
                Mastery % — <span className="font-normal normal-case text-slate-600">determines your minimum hit floor</span>
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="range" min={10} max={100} step={5}
                  value={mastery}
                  onChange={e => setMastery(parseInt(e.target.value))}
                  className="flex-1 accent-maple-accent"
                />
                <span className="text-maple-accent font-mono font-bold text-sm w-10 text-right">{mastery}%</span>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="maple-card rounded-2xl p-6 border-maple-accent/30">
            <h2 className="font-cinzel text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">Damage Output</h2>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-xs text-slate-600 mb-1">Min Hit</p>
                <p className="font-fredoka text-2xl font-bold text-blue-400">{result.min.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-xs text-slate-600 mb-1">Average</p>
                <p className="font-fredoka text-3xl font-bold maple-gradient-text">{result.avg.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-xs text-slate-600 mb-1">Max Hit</p>
                <p className="font-fredoka text-2xl font-bold text-green-400">{result.max.toLocaleString()}</p>
              </div>
            </div>

            {/* Bar visual */}
            <div className="mt-5">
              <div className="h-3 rounded-full bg-black/30 overflow-hidden relative">
                <div
                  className="absolute left-0 top-0 h-full rounded-full"
                  style={{
                    left: `${(result.min / result.max) * 100}%`,
                    width: `${100 - (result.min / result.max) * 100}%`,
                    background: "linear-gradient(90deg, #3b82f6, #e94560)",
                  }}
                />
              </div>
              <div className="flex justify-between text-xs text-slate-600 mt-1">
                <span>Min: {result.min.toLocaleString()}</span>
                <span>Max: {result.max.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <p className="text-slate-700 text-xs mt-4 text-center">
            Formula: ({cls.primary} × 4 + {cls.secondary}) × ATK / 100 × Skill% — simplified base damage, before crit and elemental multipliers.
          </p>
        </main>

        <footer className="text-center py-6 text-slate-700 border-t border-maple-border/20 text-sm">
          🍁 {siteName} — Just for fun.
        </footer>
      </div>
    </>
  );
}
