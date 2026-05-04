import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";

export default function ZakumGuide() {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "UmamiMS";

  return (
    <>
      <Head>
        <title>{`Zakum Guide — ${siteName}`}</title>
        <meta name="description" content="How to fight Zakum on UmamiMS - arms, body phases, party setup and drops" />
      </Head>

      <Layout siteName={siteName}>
        <div className="stars-bg" aria-hidden="true" />

        <main className="flex-1 px-6 py-12 max-w-4xl mx-auto w-full">
          <div className="text-sm text-slate-600 mb-8">
            <Link href="/guides" className="hover:text-maple-accent transition-colors">Guides</Link>
            <span className="mx-2">›</span>
            <span className="text-slate-400">Zakum Boss Guide</span>
          </div>

          <div className="mb-10">
            <h1 className="font-fredoka text-4xl font-bold maple-gradient-text mb-2">👹 Zakum Guide</h1>
            <p className="text-slate-400">The most iconic boss in v83 MapleStory. Here&apos;s how to beat him.</p>
            <div className="flex gap-3 flex-wrap mt-3">
              <span className="text-xs px-3 py-1 rounded-full border border-red-400/40 text-red-400 bg-red-400/10 font-bold">Level 60+ Recommended</span>
              <span className="text-xs px-3 py-1 rounded-full border border-maple-border/50 text-slate-400">Party: 6–30 Players</span>
              <span className="text-xs px-3 py-1 rounded-full border border-maple-border/50 text-slate-400">~30–40 min fight</span>
            </div>
          </div>

          {/* UmamiMS note */}
          <div className="maple-card rounded-xl p-4 mb-8 border-maple-accent/30">
            <p className="text-sm text-slate-300">
              <span className="text-maple-accent font-bold">UmamiMS note:</span> Use <span className="font-mono text-maple-yellow bg-black/30 px-1 rounded">Spinel</span> in the Free Market to teleport directly to the Zakum entrance. No running through El Nath required.
            </p>
          </div>

          {/* Requirements */}
          <div className="maple-card rounded-2xl p-6 mb-6">
            <h2 className="font-cinzel text-maple-yellow font-bold text-lg mb-4">📋 Requirements</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Character</h3>
                <ul className="space-y-1 text-sm">
                  <li className="text-slate-400">› Level 50 minimum (60+ recommended)</li>
                  <li className="text-slate-400">› Eye of Fire quest completed</li>
                  <li className="text-slate-400">› Decent HP (2,000+ is a floor)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Supplies to bring</h3>
                <ul className="space-y-1 text-sm">
                  <li className="text-slate-400">› 200–300 HP potions</li>
                  <li className="text-slate-400">› 200–300 MP potions (casters)</li>
                  <li className="text-slate-400">› 50+ All Cure potions or antidotes</li>
                  <li className="text-slate-400">› Elixirs if you can afford them</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Eye of Fire quest */}
          <div className="maple-card rounded-2xl p-6 mb-6">
            <h2 className="font-cinzel text-maple-yellow font-bold text-lg mb-3">🔥 Eye of Fire Quest</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-3">
              You cannot enter Zakum without completing the Eye of Fire quest chain. It&apos;s a one-time prerequisite. Expect to spend 2–3 hours on it the first time.
            </p>
            <ol className="space-y-2 text-sm">
              <li className="flex gap-3">
                <span className="text-maple-accent font-bold min-w-[20px]">1.</span>
                <span className="text-slate-400">Talk to the El Nath Chief Residence NPC to start the quest.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-maple-accent font-bold min-w-[20px]">2.</span>
                <span className="text-slate-400">Gather Zombie&apos;s Lost Gold Teeth, Fire Ore, and other materials from El Nath mobs.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-maple-accent font-bold min-w-[20px]">3.</span>
                <span className="text-slate-400">Complete the Dead Mine jump quest — bring extra potions, it&apos;s long.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-maple-accent font-bold min-w-[20px]">4.</span>
                <span className="text-slate-400">Defeat the mini-boss and return the Eye of Fire to unlock Zakum access.</span>
              </li>
            </ol>
          </div>

          {/* Fight breakdown */}
          <div className="maple-card rounded-2xl p-6 mb-6">
            <h2 className="font-cinzel text-maple-yellow font-bold text-lg mb-5">⚔️ The Fight</h2>

            <div className="space-y-6">
              {/* Phase 1 */}
              <div className="border-l-4 border-orange-400 pl-4">
                <h3 className="font-cinzel text-orange-400 font-bold mb-2">Phase 1 — The Arms (10–15 min)</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-3">
                  Zakum has 8 arms, each with independent HP. You must destroy all 8 before the body becomes attackable. The arms deal heavy damage and apply status effects — Darkness, Seal, and Slow are common.
                </p>
                <div className="space-y-2">
                  <div className="bg-black/20 rounded-lg p-3">
                    <p className="text-slate-300 text-xs font-bold mb-1">Strategy:</p>
                    <ul className="space-y-1 text-xs text-slate-500">
                      <li>› Have your Bishop Dispel on cooldown to remove status effects.</li>
                      <li>› Focus one arm at a time so damage is efficient — don&apos;t spread DPS.</li>
                      <li>› Stay mobile and pot aggressively. This phase will kill people.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="border-l-4 border-red-400 pl-4">
                <h3 className="font-cinzel text-red-400 font-bold mb-2">Phase 2 — The Body (15–20 min)</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-3">
                  With all arms gone, Zakum&apos;s three body sections become targetable. The body uses teleport attacks, map-wide damage, and instakill moves. This is when people die most.
                </p>
                <div className="space-y-2">
                  <div className="bg-black/20 rounded-lg p-3">
                    <p className="text-slate-300 text-xs font-bold mb-1">Strategy:</p>
                    <ul className="space-y-1 text-xs text-slate-500">
                      <li>› Bishop should have Resurrection active and ready at all times.</li>
                      <li>› Keep HP above 1,000 at all times — Zakum can one-shot below that.</li>
                      <li>› Hit the body parts from the sides to avoid the main hitbox attacks.</li>
                      <li>› Don&apos;t stand in the centre of the map — Zakum&apos;s slam hits dead centre.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Party comp */}
          <div className="maple-card rounded-2xl p-6 mb-6">
            <h2 className="font-cinzel text-maple-yellow font-bold text-lg mb-4">👥 Party Composition</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="bg-blue-400/10 border border-blue-400/30 rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">🔮</div>
                <p className="text-blue-400 font-bold">Bishop</p>
                <p className="text-slate-500 text-xs mt-1">Essential. Party Heal, Resurrection, Dispel. Every run needs at least one.</p>
              </div>
              <div className="bg-red-400/10 border border-red-400/30 rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">🛡️</div>
                <p className="text-red-400 font-bold">Dark Knight</p>
                <p className="text-slate-500 text-xs mt-1">Top DPS and best HP pool. Beholder keeps HP topped during sustained fights.</p>
              </div>
              <div className="bg-purple-400/10 border border-purple-400/30 rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">🏹</div>
                <p className="text-purple-400 font-bold">Marksman</p>
                <p className="text-slate-500 text-xs mt-1">Snipe bypasses Zakum&apos;s high weapon defence. Consistent clean DPS.</p>
              </div>
            </div>
            <p className="text-slate-500 text-xs mt-4">Fill remaining slots with any class you can — more DPS equals shorter fight. Night Lord, Bowmaster, and Arch Mage all perform well.</p>
          </div>

          {/* Drops */}
          <div className="maple-card rounded-2xl p-6">
            <h2 className="font-cinzel text-maple-yellow font-bold text-lg mb-4">🎁 Notable Drops</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              {[
                { item: "Zakum Helmet", note: "Level 50 best-in-slot helmet. 15-stat scrolled is endgame BiS.", rarity: "Guaranteed" },
                { item: "Chaos Scroll 60%", note: "Randomly boosts or lowers item stats. Huge economy item.", rarity: "Uncommon" },
                { item: "Scroll for Weapon ATK 30%", note: "Endgame scroll for weapon upgrades.", rarity: "Rare" },
                { item: "Elemental Wands & Staves", note: "High-level mage weapons.", rarity: "Uncommon" },
                { item: "Zakum Fang / Eye", note: "Crafting materials for certain gear recipes.", rarity: "Common" },
                { item: "Mesos", note: "Solid meso drop from body and arms.", rarity: "Always" },
              ].map((drop, i) => (
                <div key={i} className="bg-black/20 rounded-lg p-3">
                  <div className="flex justify-between items-start">
                    <span className="text-slate-200 font-semibold text-xs">{drop.item}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      drop.rarity === "Guaranteed" ? "text-green-400 bg-green-400/10" :
                      drop.rarity === "Rare" ? "text-purple-400 bg-purple-400/10" :
                      drop.rarity === "Always" ? "text-maple-yellow bg-maple-yellow/10" :
                      "text-slate-400 bg-slate-400/10"
                    }`}>{drop.rarity}</span>
                  </div>
                  <p className="text-slate-500 text-xs mt-1">{drop.note}</p>
                </div>
              ))}
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
