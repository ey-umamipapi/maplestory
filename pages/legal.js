import Head from "next/head";
import Layout from "../components/Layout";

export default function Legal() {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "UmamiMS";

  return (
    <>
      <Head>
        <title>{`Legal & Disclaimer — ${siteName}`}</title>
        <meta name="description" content={`${siteName} legal disclaimer and fan project notice.`} />
      </Head>

      <Layout siteName={siteName}>
        <main className="flex-1 px-6 py-16 max-w-2xl mx-auto w-full">

          <div className="text-center mb-12">
            <h1 className="font-visby text-4xl font-bold maple-gradient-text mb-3">Legal & Disclaimer</h1>
            <p style={{ color: 'var(--text-muted)' }}>Just so everyone&apos;s on the same page.</p>
          </div>

          <div className="space-y-6">

            <div className="maple-card rounded-2xl p-6">
              <h2 className="font-visby font-bold text-lg mb-3" style={{ color: 'var(--text-heading)' }}>
                🚫 No Affiliation with Nexon
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {siteName} is an unofficial fan project and is not affiliated with, endorsed by, or associated with Nexon Co., Ltd., Nexon America, Wizet, or any of their subsidiaries. MapleStory is a registered trademark of Nexon Co., Ltd.
              </p>
            </div>

            <div className="maple-card rounded-2xl p-6">
              <h2 className="font-visby font-bold text-lg mb-3" style={{ color: 'var(--text-heading)' }}>
                💸 Completely Free — No Monetisation
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {siteName} does not charge money, accept donations, sell in-game items, or generate any revenue whatsoever. No real-money transactions exist on this server. NX Cash and all in-game currency are earned purely through gameplay — nothing is sold for real money.
              </p>
            </div>

            <div className="maple-card rounded-2xl p-6">
              <h2 className="font-visby font-bold text-lg mb-3" style={{ color: 'var(--text-heading)' }}>
                🍄 Fan Project, Not for Profit
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                This server exists purely for fun — to let a small group of friends relive the v83 MapleStory experience. It is not run as a business, does not seek to compete with official MapleStory services, and has no commercial intent of any kind.
              </p>
            </div>

            <div className="maple-card rounded-2xl p-6">
              <h2 className="font-visby font-bold text-lg mb-3" style={{ color: 'var(--text-heading)' }}>
                ©️ Intellectual Property
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                All MapleStory game assets, characters, music, and content are the intellectual property of Nexon Co., Ltd. and Wizet. {siteName} makes no claim of ownership over any of these assets. If you are a rights holder and have concerns, please reach out directly.
              </p>
            </div>

            <div className="maple-card rounded-2xl p-6">
              <h2 className="font-visby font-bold text-lg mb-3" style={{ color: 'var(--text-heading)' }}>
                ⚠️ No Warranty
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {siteName} is provided as-is with no guarantees of uptime, data retention, or continuity. The server may go offline, reset, or shut down at any time. Play at your own risk — don&apos;t get too attached to your items.
              </p>
            </div>

          </div>

          <p className="text-center text-xs mt-12" style={{ color: 'var(--text-muted)' }}>
            🍁 {siteName} — Just for fun, not for profit.
          </p>
        </main>
      </Layout>
    </>
  );
}
