import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";

const MISTAKES = [
  { emoji: "💸", title: "Spending all your mesos on NX", body: "NX is free — earn it in-game. Don't waste mesos buying cosmetics early. Spend on gear, potions, and scrolls first." },
  { emoji: "🏃", title: "Skipping party quests", body: "KPQ, LudiPQ, OPQ are some of the best EXP in the game and a great way to meet people. Don't just grind solo the whole time." },
  { emoji: "📦", title: "Hoarding everything", body: "Vendor the junk. White potions and basic equips from mobs aren't worth keeping. Keep mesos liquid for the stuff that matters." },
  { emoji: "⚔️", title: "Not upgrading your weapon", body: "Your weapon is your most important item. A scrolled weapon matters more than everything else combined. Prioritise it." },
  { emoji: "🏥", title: "Not potting enough", body: "Die less, pot more. Dying wastes time and EXP. Keep HP above 50% at all times and buy potions in bulk from Frederick in the FM." },
  { emoji: "🎯", title: "Picking the wrong training spot", body: "Train on mobs 10–20 levels above you for best EXP. Too low = bad EXP. Too high = you die too much." },
];

const TIPS = [
  { emoji: "🏪", title: "Type !fm anywhere", body: "Instantly warps you to the Free Market where all custom NPCs live — shop, job advance, teleport, cosmetics, all in one place." },
  { emoji: "✨", title: "Grab cross-class skills from Grendel", body: "Flash Jump, Haste, and Teleport are available to any class. Head to Grendel in Ellinia and grab mobility skills early — they make a huge difference." },
  { emoji: "🗺️", title: "Use Spinel to teleport", body: "No taxi needed. Spinel in the FM warps you directly to any town, boss entrance, or party quest lobby instantly." },
  { emoji: "💇", title: "Cosmetics are free", body: "V. Isage in the FM lets you change hair, face, and skin for free anytime. No coupons needed." },
  { emoji: "🌿", title: "x10 rates — don't stress levels", body: "You'll level fast. Focus on enjoying the game, doing PQs, and building your character rather than rushing to 120." },
  { emoji: "💬", title: "Ask in chat", body: "Small server means people actually respond. If you're stuck, ask — someone will help." },
];

export default function BeginnerGuide() {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "UmamiMS";

  return (
    <>
      <Head>
        <title>{`Beginner's Guide — ${siteName}`}</title>
        <meta name="description" content={`New to ${siteName}? Start here — common mistakes and essential tips.`} />
      </Head>

      <Layout siteName={siteName}>
        <main className="flex-1 px-6 py-16 max-w-3xl mx-auto w-full">

          <div className="text-sm mb-8" style={{ color: 'var(--text-muted)' }}>
            <Link href="/guides" className="hover:text-maple-accent transition-colors">Guides</Link>
            <span className="mx-2">›</span>
            <span>Beginner&apos;s Guide</span>
          </div>

          <div className="mb-10">
            <h1 className="font-visby text-4xl font-bold maple-gradient-text mb-2">🍄 Beginner&apos;s Guide</h1>
            <p style={{ color: 'var(--text-muted)' }}>New to UmamiMS or returning to v83? Read this first.</p>
            <div className="mt-3 flex gap-3 flex-wrap">
              <span className="text-xs px-3 py-1 rounded-full border border-green-400/40 text-green-500 bg-green-400/10 font-bold">New Player</span>
              <span className="text-xs px-3 py-1 rounded-full border border-maple-accent/20 font-medium" style={{ color: 'var(--text-muted)' }}>All Classes</span>
            </div>
          </div>

          {/* First steps */}
          <div className="maple-card rounded-xl p-4 mb-10">
            <p className="text-sm" style={{ color: 'var(--text-primary)' }}>
              <span className="text-maple-accent font-bold">Start here:</span> Create your account, download the client, log in — then type{" "}
              <span className="font-mono text-maple-yellow px-1 rounded" style={{ background: 'var(--card-border)' }}>!fm</span>{" "}
              to warp to the Free Market. Everything you need is there.
            </p>
          </div>

          {/* Common mistakes */}
          <h2 className="font-visby text-xl font-bold mb-6 maple-gradient-text">⚠️ Common Beginner Mistakes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {MISTAKES.map(({ emoji, title, body }) => (
              <div key={title} className="maple-card rounded-2xl p-5 flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">{emoji}</span>
                <div>
                  <p className="font-visby text-sm font-bold mb-1" style={{ color: 'var(--text-heading)' }}>{title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* UmamiMS tips */}
          <h2 className="font-visby text-xl font-bold mb-6 maple-gradient-text">💡 UmamiMS Tips</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
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

          <div className="maple-card rounded-2xl p-6 text-center">
            <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>Ready to pick a class?</p>
            <Link href="/guides/classes" className="btn-maple inline-block px-8 py-3 rounded-xl text-white font-bold text-base">
              View Class Guide →
            </Link>
          </div>

        </main>

        <footer className="text-center py-6 border-t text-sm" style={{ borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}>
          🍁 {siteName} — Just for fun.
        </footer>
      </Layout>
    </>
  );
}
