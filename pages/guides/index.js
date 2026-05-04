import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";

const GUIDES = [
  {
    slug: "beginner",
    icon: "🍄",
    title: "Beginner's Guide",
    desc: "New to UmamiMS? Start here. Common mistakes, UmamiMS-specific tips, and everything you need to know before you start.",
    badge: "Start Here",
    badgeColor: "text-green-500 border-green-400/40 bg-green-400/10",
  },
  {
    slug: "leveling",
    icon: "⚡",
    title: "Leveling Guide",
    desc: "Best training spots from level 1 to 120, broken down by range. Efficient paths for solo and party play.",
    badge: "All Levels",
    badgeColor: "text-blue-400 border-blue-400/40 bg-blue-400/10",
  },
  {
    slug: "classes",
    icon: "⚔️",
    title: "Classes Guide",
    desc: "Full breakdown of every Explorer, Cygnus Knight, and Aran class. Pick the right one for your playstyle.",
    badge: "All Classes",
    badgeColor: "text-purple-400 border-purple-400/40 bg-purple-400/10",
  },
  {
    slug: "party-quests",
    icon: "🎉",
    title: "Party Quest Guide",
    desc: "KPQ, LudiPQ, OPQ, MPQ — how each one works, what you get, and tips to not wipe the run.",
    badge: "Group Content",
    badgeColor: "text-yellow-500 border-yellow-400/40 bg-yellow-400/10",
  },
  {
    slug: "meso-farming",
    icon: "💰",
    title: "Meso Farming",
    desc: "Best spots and strategies to stack mesos by level range. Includes FM reselling tips.",
    badge: "Economy",
    badgeColor: "text-amber-500 border-amber-400/40 bg-amber-400/10",
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

      <Layout siteName={siteName}>
        <main className="flex-1 px-6 py-16 max-w-4xl mx-auto w-full">

          <div className="text-center mb-14">
            <h1 className="font-visby text-5xl font-bold maple-gradient-text mb-3">Guides</h1>
            <p style={{ color: 'var(--text-muted)' }}>Everything you need to play UmamiMS like a pro.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {GUIDES.map((g) => (
              <Link key={g.slug} href={`/guides/${g.slug}`} className="maple-card rounded-2xl p-6 flex flex-col gap-3 hover:border-maple-accent/50 transition-all group">
                <span className="text-4xl">{g.icon}</span>
                <div>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${g.badgeColor} mb-2 inline-block`}>
                    {g.badge}
                  </span>
                  <h2 className="font-visby font-bold text-base group-hover:text-maple-accent transition-colors" style={{ color: 'var(--text-heading)' }}>{g.title}</h2>
                  <p className="text-xs mt-1 leading-relaxed" style={{ color: 'var(--text-muted)' }}>{g.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </main>

        <footer className="text-center py-6 border-t text-sm" style={{ borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}>
          🍁 {siteName} — Just for fun.
        </footer>
      </Layout>
    </>
  );
}
