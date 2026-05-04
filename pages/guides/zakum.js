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
        <main className="flex-1 px-6 py-12 max-w-4xl mx-auto w-full">

          {/* Breadcrumb */}
          <div className="text-sm mb-8" style={{ color: 'var(--text-muted)' }}>
            <Link href="/guides" className="hover:text-maple-accent transition-colors">Guides</Link>
            <span className="mx-2">›</span>
            <span>Zakum Boss Guide</span>
          </div>

          <div className="mb-10">
            <h1 className="font-visby text-4xl font-bold maple-gradient-text mb-2">👹 Zakum Guide</h1>
            <p style={{ color: 'var(--text-muted)' }}>The most iconic boss in v83 MapleStory. Here&apos;s how to beat him.</p>
            <div className="flex gap-3 flex-wrap mt-3">
              <span className="text-xs px-3 py-1 rounded-full border border-red-400/40 text-red-400 bg-red-400/10 font-bold">Level 60+ Recommended</span>
              <span className="text-xs px-3 py-1 rounded-full border border-maple-accent/20 font-medium" style={{ color: 'var(--text-muted)' }}>Party: 6–30 Players</span>
              <span className="text-xs px-3 py-1 rounded-full border border-maple-accent/20 font-medium" style={{ color: 'var(--text-muted)' }}>~30–40 min fight</span>
            </div>
          </div>

          {/* UmamiMS note */}
          <div className="maple-card rounded-xl p-4 mb-8">
            <p className="text-sm" style={{ color: 'var(--text-primary)' }}>
              <span className="text-maple-accent font-bold">UmamiMS note:</span> Use <span className="font-mono text-maple-yellow px-1 rounded" style={{ background: 'var(--card-border)' }}>Spinel</span> in the Free Market to teleport directly to the Zakum entrance. No running through El Nath required.
            </p>
          </div>

          {/* Requirements */}
          <div className="maple-card rounded-2xl p-6 mb-6">
            <h2 className="font-visby text-maple-yellow font-bold text-lg mb-4">📋 Requirements</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>Character</h3>
                <ul className="space-y-1 text-sm" style={{ color: 'var(--text-muted)' }}>
                  <li>› Level 50 minimum (60+ recommended)</li>
                  <li>› Eye of Fire quest completed</li>
                  <li>› Decent HP (2,000+ is a floor)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>Supplies to bring</h3>
                <ul className="space-y-1 text-sm" style={{ color: 'var(--text-muted)' }}>
                  <li>› 200–300 HP potions</li>
                  <li>› 200–300 MP potions (casters)</li>
                  <li>› 50+ All Cure potions or antidotes</li>
                  <li>› Elixirs if you can afford them</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Eye of Fire */}
          <div className="maple-card rounded-2xl p-6 mb-6">
            <h2 className="font-visby text-maple-yellow font-bold text-lg mb-3">🔥 Eye of Fire Quest</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text-muted)' }}>
              You cannot enter Zakum without completing the Eye of Fire quest chain. It&apos;s a one-time prerequisite. Expect to spend 2–3 hours on it the first time.
            </p>
            <ol className="space-y-2 text-sm">
              {[
                "Talk to the El Nath Chief Residence NPC to start the quest.",
                "Gather Zombie's Lost Gold Teeth, Fire Ore, and other materials from El Nath mobs.",
                "Complete the Dead Mine jump quest — bring extra potions, it's long.",
                "Defeat the mini-boss and return the Eye of Fire to unlock Zakum access.",
              ].map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-maple-accent font-bold min-w-[20px]">{i + 1}.</span>
                  <span style={{ color: 'var(--text-muted)' }}>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Fight breakdown */}
          <div className="maple-card rounded-2xl p-6 mb-6">
            <h2 className="font-visby text-maple-yellow font-bold text-lg mb-5">⚔️ The Fight</h2>
            <div className="space-y-6">

              <div className="border-l-4 border-orange-400 pl-4">
                <h3 className="font-visby text-orange-400 font-bold mb-2">Phase 1 — The Arms (10–15 min)</h3>
                <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text-muted)' }}>
                  Zakum has 8 arms, each with independent HP. You must destroy all 8 before the body becomes attackable. The arms deal heavy damage and apply status effects — Darkness, Seal, and Slow are common.
                </p>
                <div className="rounded-lg p-3" style={{ background: 'var(--bg-secondary)' }}>
                  <p className="text-xs font-bold mb-1" style={{ color: 'var(--text-heading)' }}>Strategy:</p>
                  <ul className="space-y-1 text-xs" style={{ color: 'var(--text-muted)' }}>
                    <li>› Have your Bishop Dispel on cooldown to remove status effects.</li>
                    <li>› Focus one arm at a time — don&apos;t spread DPS.</li>
                    <li>› Stay mobile and pot aggressively. This phase will kill people.</li>
                  </ul>
                </div>
              </div>

              <div className="border-l-4 border-red-400 pl-4">
                <h3 className="font-visby text-red-400 font-bold mb-2">Phase 2 — The Body (15–20 min)</h3>
                <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text-muted)' }}>
                  With all arms gone, Zakum&apos;s three body sections become targetable. The body uses teleport attacks, map-wide damage, and instakill moves. This is when people die most.
                </p>
                <div className="rounded-lg p-3" style={{ background: 'var(--bg-secondary)' }}>
                  <p className="text-xs font-bold mb-1" style={{ color: 'var(--text-heading)' }}>Strategy:</p>
                  <ul className="space-y-1 text-xs" style={{ color: 'var(--text-muted)' }}>
                    <li>› Bishop should have Resurrection active and ready at all times.</li>
                    <li>› Keep HP above 1,000 at all times — Zakum can one-shot below that.</li>
                    <li>› Hit the body parts from the sides to avoid the main hitbox attacks.</li>
                    <li>› Don&apos;t stand in the centre of the map — Zakum&apos;s slam hits dead centre.</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

          {/* Party comp */}
          <div className="maple-card rounded-2xl p-6 mb-6">
            <h2 className="font-visby text-maple-yellow font-bold text-lg mb-4">👥 Party Composition</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="bg-blue-400/10 border border-blue-400/30 rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">🔮</div>
                <p className="text-blue-400 font-bold">Bishop</p>
                <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>Essential. Party Heal, Resurrection, Dispel. Every run needs at least one.</p>
              </div>
              <div className="bg-red-400/10 border border-red-400/30 rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">🛡️</div>
                <p className="text-red-400 font-bold">Dark Knight</p>
                <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>Top DPS and best HP pool. Beholder keeps HP topped during sustained fights.</p>
              </div>
              <div className="bg-purple-400/10 border border-purple-400/30 rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">🏹</div>
                <p className="text-purple-400 font-bold">Marksman</p>
                <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>Snipe bypasses Zakum&apos;s high weapon defence. Consistent clean DPS.</p>
              </div>
            </div>
            <p className="text-xs mt-4" style={{ color: 'var(--text-muted)' }}>Fill remaining slots with any class — more DPS equals shorter fight. Night Lord, Bowmaster, and Arch Mage all perform well.</p>
          </div>

          {/* Drops */}
          <div className="maple-card rounded-2xl p-6">
            <h2 className="font-visby text-maple-yellow font-bold text-lg mb-4">🎁 Notable Drops</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              {[
                { item: "Zakum Helmet", note: "Level 50 best-in-slot helmet. 15-stat scrolled is endgame BiS.", rarity: "Guaranteed" },
                { item: "Chaos Scroll 60%", note: "Randomly boosts or lowers item stats. Huge economy item.", rarity: "Uncommon" },
                { item: "Scroll for Weapon ATK 30%", note: "Endgame scroll for weapon upgrades.", rarity: "Rare" },
                { item: "Elemental Wands & Staves", note: "High-level mage weapons.", rarity: "Uncommon" },
                { item: "Zakum Fang / Eye", note: "Crafting materials for certain gear recipes.", rarity: "Common" },
                { item: "Mesos", note: "Solid meso drop from body and arms.", rarity: "Always" },
              ].map((drop, i) => (
                <div key={i} className="rounded-lg p-3" style={{ background: 'var(--bg-secondary)' }}>
                  <div className="flex justify-between items-start">
                    <span className="font-semibold text-xs" style={{ color: 'var(--text-heading)' }}>{drop.item}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      drop.rarity === "Guaranteed" ? "text-green-500 bg-green-400/10" :
                      drop.rarity === "Rare"       ? "text-purple-400 bg-purple-400/10" :
                      drop.rarity === "Always"     ? "text-maple-yellow bg-maple-yellow/10" :
                      "text-slate-400 bg-slate-400/10"
                    }`}>{drop.rarity}</span>
                  </div>
                  <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{drop.note}</p>
                </div>
              ))}
            </div>
          </div>

        </main>

        <footer className="text-center py-6 border-t text-sm" style={{ borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}>
          🍁 {siteName} — Just for fun.
        </footer>
      </Layout>
    </>
  );
}
