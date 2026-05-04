import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

const LEAVES = ["🍁", "🍂", "🍁", "🍂", "🍁", "🍂", "🍁"];

export default function Login() {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "UmamiMS";
  const router = useRouter();

  const [form,    setForm]    = useState({ username: "", password: "" });
  const [error,   setError]   = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError(""); setSuccess("");
    setLoading(true);
    try {
      const res  = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Login failed. Check your username and password.");
      } else {
        localStorage.setItem("ms_token", data.token);
        localStorage.setItem("ms_user", JSON.stringify(data.user));
        setSuccess(`Welcome back, ${data.user.fullName || data.user.username}!`);
        setTimeout(() => router.push("/"), 1200);
      }
    } catch {
      setError("Could not reach the server. Make sure you're connected, then try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>{`Login — ${siteName}`}</title>
      </Head>

      {LEAVES.map((l, i) => <span key={i} className="leaf" aria-hidden="true">{l}</span>)}

      <Layout siteName={siteName}>
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">

          {/* Card */}
          <div className="maple-card w-full max-w-md rounded-2xl p-8 shadow-2xl">
            <h1 className="font-visby text-2xl font-bold mb-1" style={{ color: 'var(--text-heading)' }}>Welcome Back</h1>
            <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
              No account?{" "}
              <Link href="/register" className="text-maple-accent hover:underline font-semibold">
                Register here
              </Link>
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1.5" style={{ color: 'var(--text-muted)' }}>
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  placeholder="Your game username"
                  required
                  className="maple-input w-full rounded-lg px-4 py-2.5 text-sm border"
                  style={{ background: 'var(--bg-secondary)', color: 'var(--text-heading)', borderColor: 'var(--border-color)' }}
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1.5" style={{ color: 'var(--text-muted)' }}>
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="maple-input w-full rounded-lg px-4 py-2.5 text-sm border"
                  style={{ background: 'var(--bg-secondary)', color: 'var(--text-heading)', borderColor: 'var(--border-color)' }}
                />
              </div>

              {error && (
                <div className="flex items-start gap-2 rounded-lg px-4 py-3 text-sm border border-red-400/40 text-red-500 bg-red-50/80">
                  <span>⚠️</span> {error}
                </div>
              )}
              {success && (
                <div className="flex items-start gap-2 rounded-lg px-4 py-3 text-sm border border-green-400/40 text-green-600 bg-green-50/80">
                  <span>✅</span> {success}
                </div>
              )}

              <div className="maple-divider" />

              <button
                type="submit"
                disabled={loading}
                className="btn-maple w-full text-white font-bold py-3 rounded-xl text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Logging in…" : "🍁 Login"}
              </button>
            </form>
          </div>

          <p className="mt-6 text-xs" style={{ color: 'var(--text-muted)' }}>
            Not a website session — use your client to play.
          </p>
        </div>
      </Layout>
    </>
  );
}
