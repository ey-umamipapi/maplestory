import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";

const TOOLS = [
  {
    slug: "damage-calc",
    icon: "⚔️",
    title: "Damage Calculator",
    desc: "Enter your stats and see your min/max/average damage output. Works for all v83 Explorer classes.",
    badge: "Interactive",
    badgeColor: "text-maple-accent border-maple-accent/40 bg-maple-accent/10",
  },
  {
    slug: "training-spots",
    icon: "🗺️",
    title: "Training Spots",
    desc: "Filter by level to find the best maps for your character right now. Includes mob info and tips.",
    badge: "Reference",
    badgeColor: "text-green-400 border-green-400/40 bg-green-400/10",
  },
  {
    slug: "ap-planner",
    icon: "📊",
    title: "AP Build Planner",
    desc: "Plan your stat distribution as you level. See exactly how many points to put into each stat for your class.",
    badge: "Interactive",
    badgeColor: "text-maple-accent border-maple-accent/40 bg-maple-accent/10",
  },
];

export default function ToolsIndex() {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "UmamiMS";

  return (
    <>
      <Head>
        <title>{`Tools — ${siteName}`}</title>
        <meta name="description" content={`MapleStory v83 interactive tools for ${siteName}`} />
      </Head>

      <Layout siteName={siteName}>
        <div className="stars-bg" aria-hidden="true" />

        <main className="flex-1 px-6 py-16 max-w-4xl mx-auto w-full">
          <div className="text-center mb-14">
            <h1 className="font-fredoka text-5xl font-bold maple-gradient-text mb-3">Tools</h1>
            <p className="text-slate-400 text-base">Interactive calculators and planners for UmamiMS.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {TOOLS.map((t) => (
              <Link key={t.slug} href={`/tools/${t.slug}`} className="maple-card rounded-2xl p-6 flex flex-col gap-3 hover:border-maple-accent/50 transition-all group">
                <span className="text-4xl">{t.icon}</span>
                <div>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${t.badgeColor} mb-2 inline-block`}>
                    {t.badge}
                  </span>
                  <h2 className="font-cinzel text-slate-100 font-bold text-base group-hover:text-maple-accent transition-colors">{t.title}</h2>
                  <p className="text-slate-500 text-xs mt-1 leading-relaxed">{t.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </main>

        <footer className="text-center py-6 text-slate-700 border-t border-maple-border/20 text-sm">
          🍁 {siteName} — Just for fun.
        </footer>
      </Layout>
    </>
  );
}
