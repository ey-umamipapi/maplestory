import Head from "next/head";
import Link from "next/link";
import Nav from "../../components/Nav";

const GUIDES = [
  {
    slug: "leveling",
    icon: "⚡",
    title: "Leveling Guide",
    desc: "Best training spots from level 1 to 120, broken down by range. Efficient paths for solo and party play.",
    badge: "Beginner Friendly",
    badgeColor: "text-green-400 border-green-400/40 bg-green-400/10",
  },
  {
    slug: "classes",
    icon: "⚔️",
    title: "Explorer Classes",
    desc: "Full breakdown of every Warrior, Mage, Bowman, Thief, and Pirate class. Pick the right one for your playstyle.",
    badge: "All Classes",
    badgeColor: "text-blue-400 border-blue-400/40 bg-blue-400/10",
  },
  {
    slug: "zakum",
    icon: "👹",
    title: "Zakum Boss Guide",
    desc: "How to prep for and clear Zakum — arms, body phases, party comp, gear requirements and drops.",
    badge: "Boss Guide",
    badgeColor: "text-red-400 border-red-400/40 bg-red-400/10",
  },
];

export default function GuidesIndex() {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "UmamiMS";

  return (
    <>
      <Head>
        <title>{`Guides — ${siteName}`}</title>
        <meta name="description" content={`MapleStory v83 guides for ${siteName}`} />
      </Head>

      <div className="stars-bg" aria-hidden="true" />

      <div className="relative z-10 min-h-screen flex flex-col">
        <Nav siteName={siteName} />

        <main className="flex-1 px-6 py-16 max-w-4xl mx-auto w-full">
          <div className="text-center mb-14">
            <h1 className="font-fredoka text-5xl font-bold maple-gradient-text mb-3">Guides</h1>
            <p className="text-slate-400 text-base">Everything you need to play UmamiMS like a pro.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {GUIDES.map((g) => (
              <Link key={g.slug} href={`/guides/${g.slug}`} className="maple-card rounded-2xl p-6 flex flex-col gap-3 hover:border-maple-accent/50 transition-all group">
                <span className="text-4xl">{g.icon}</span>
                <div>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${g.badgeColor} mb-2 inline-block`}>
                    {g.badge}
                  </span>
                  <h2 className="font-cinzel text-slate-100 font-bold text-base group-hover:text-maple-accent transition-colors">{g.title}</h2>
                  <p className="text-slate-500 text-xs mt-1 leading-relaxed">{g.desc}</p>
                </div>
              </Link>
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
