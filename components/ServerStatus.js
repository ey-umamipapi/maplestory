import { useEffect, useState } from "react";

export default function ServerStatus({ size = "nav" }) {
  const [status, setStatus] = useState(null);

  async function check() {
    try {
      const res = await fetch("/api/server-status");
      const data = await res.json();
      setStatus(data.online);
    } catch {
      setStatus(false);
    }
  }

  useEffect(() => {
    check();
    const interval = setInterval(check, 30000);
    return () => clearInterval(interval);
  }, []);

  if (size === "hero") {
    // Larger pill style for homepage hero
    return (
      <div
        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-bold ${
          status === null
            ? "border-slate-300 text-slate-400"
            : status
            ? "border-green-400/50 text-green-600 bg-green-50"
            : "border-red-400/50 text-red-500 bg-red-50"
        }`}
      >
        <span className={`w-2 h-2 rounded-full ${
          status === null ? "bg-slate-400 animate-pulse" :
          status ? "bg-green-500 animate-pulse" : "bg-red-500"
        }`} />
        {status === null ? "Checking…" : status ? "Server Online" : "Server Offline"}
      </div>
    );
  }

  // Nav size — compact
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold ${
        status === null
          ? "border-slate-300 text-slate-400"
          : status
          ? "border-green-400/50 text-green-600 bg-green-500/10"
          : "border-red-400/50 text-red-500 bg-red-500/10"
      }`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${
        status === null ? "bg-slate-400 animate-pulse" :
        status ? "bg-green-500 animate-pulse" : "bg-red-500"
      }`} />
      {status === null ? "Checking…" : status ? "Server Online" : "Server Offline"}
    </div>
  );
}
