import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const LEAVES = ["🍁", "🍂", "🍁", "🍂", "🍁", "🍂", "🍁"];

export default function Register() {
  const router   = useRouter();
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "EthanMS";

  const [form, setForm] = useState({
    fullName: "", username: "", password: "", confirmPassword: "",
  });
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

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setLoading(true);
    try {
      const res  = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Registration failed.");
      } else {
        setSuccess(data.message);
        setTimeout(() => router.push("/login"), 2500);
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>{`Register — ${siteName}`}</title>
      </Head>

      <div className="stars-bg" aria-hidden="true" />
      {LEAVES.map((l, i) => <span key={i} className="leaf" aria-hidden="true">{l}</span>)}

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">

        {/* Logo */}
        <Link href="/" className="font-fredoka text-3xl font-bold maple-gradient-text tracking-wide mb-8 hover:opacity-80 transition-opacity">
          🍁 {siteName}
        </Link>

        {/* Card */}
        <div className="maple-card w-full max-w-md rounded-2xl p-8 shadow-2xl">
          <h1 className="font-cinzel text-2xl font-bold text-slate-100 mb-1">Create Account</h1>
          <p className="text-slate-500 text-sm mb-6">
            Already registered?{" "}
            <Link href="/login" className="text-maple-accent hover:underline font-semibold">
              Login here
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="e.g. Ethan Yong"
                maxLength={20}
                required
                className="maple-input w-full bg-black/40 border border-maple-border/50 rounded-lg px-4 py-2.5 text-slate-100 placeholder-slate-600 text-sm"
              />
              <p className="text-xs text-slate-600 mt-1">Max 20 characters · used for display only</p>
            </div>

            {/* Username */}
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Username <span className="text-maple-accent/60 normal-case font-normal">(game login)</span>
              </label>
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                placeholder="e.g. MapleHero"
                maxLength={13}
                required
                className="maple-input w-full bg-black/40 border border-maple-border/50 rounded-lg px-4 py-2.5 text-slate-100 placeholder-slate-600 text-sm"
              />
              <p className="text-xs text-slate-600 mt-1">4–13 chars · letters and numbers only</p>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className="maple-input w-full bg-black/40 border border-maple-border/50 rounded-lg px-4 py-2.5 text-slate-100 placeholder-slate-600 text-sm"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className="maple-input w-full bg-black/40 border border-maple-border/50 rounded-lg px-4 py-2.5 text-slate-100 placeholder-slate-600 text-sm"
              />
            </div>

            {/* Error / Success */}
            {error && (
              <div className="flex items-start gap-2 bg-red-950/60 border border-red-700/50 text-red-400 rounded-lg px-4 py-3 text-sm">
                <span className="mt-0.5">⚠️</span> {error}
              </div>
            )}
            {success && (
              <div className="flex items-start gap-2 bg-green-950/60 border border-green-700/50 text-green-400 rounded-lg px-4 py-3 text-sm">
                <span className="mt-0.5">✅</span> {success} Redirecting…
              </div>
            )}

            <div className="maple-divider" />

            <button
              type="submit"
              disabled={loading}
              className="btn-maple w-full text-white font-bold py-3 rounded-xl text-base disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Creating your account…" : "🍁 Create Account"}
            </button>
          </form>
        </div>

        <p className="mt-6 text-slate-700 text-xs">
          By registering you agree to play fair and have fun.
        </p>
      </div>
    </>
  );
}
