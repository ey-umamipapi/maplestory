import { useEffect, useState } from "react";

export default function ServerStatus() {
  const [status, setStatus] = useState(null); // null = loading

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

  if (status === null) {
    return (
      <div className="flex items-center gap-2 text-xs font-semibold" style={{ color: "var(--text-muted)" }}>
        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-pulse" />
        Checking...
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 text-xs font-semibold" style={{ color: status ? "#22c55e" : "#ef4444" }}>
      <span className={`w-1.5 h-1.5 rounded-full ${status ? "bg-green-500 animate-pulse" : "bg-red-500"}`} />
      {status ? "Server Online" : "Server Offline"}
    </div>
  );
}
