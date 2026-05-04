import Link from "next/link";
import { useState } from "react";

export default function Sidebar({ siteName, logo, onNavigate, onClose }) {
  const [expandedSections, setExpandedSections] = useState({
    database: true,
    tools: true,
    guides: true,
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const SectionLink = ({ href, label, icon }) => (
    <Link
      href={href}
      onClick={onNavigate}
      className="pl-4 py-2 text-sm transition-colors flex items-center gap-2 rounded-lg mx-1 hover:text-maple-accent"
      style={{ color: 'var(--text-muted)' }}
      onMouseEnter={e => e.currentTarget.style.background = 'var(--sidebar-hover)'}
      onMouseLeave={e => e.currentTarget.style.background = ''}
    >
      <span className="text-xs">{icon}</span>
      {label}
    </Link>
  );

  const SectionHeader = ({ label, section, icon }) => (
    <button
      onClick={() => toggleSection(section)}
      className="font-visby w-full px-3 py-2.5 text-xs font-bold uppercase tracking-widest hover:text-maple-accent transition-colors flex items-center justify-between rounded-lg"
      style={{ color: 'var(--text-muted)' }}
      onMouseEnter={e => e.currentTarget.style.background = 'var(--sidebar-hover)'}
      onMouseLeave={e => e.currentTarget.style.background = ''}
    >
      <span className="flex items-center gap-2">
        <span>{icon}</span>
        {label}
      </span>
      <span className={`text-xs transition-transform ${expandedSections[section] ? 'rotate-180' : ''}`}>▼</span>
    </button>
  );

  return (
    <aside className="w-56 backdrop-blur border-r p-4 flex flex-col gap-6 self-stretch" style={{ background: "var(--sidebar-bg)", borderColor: "var(--border-color)" }}>
      {/* Logo Section */}
      <div className="relative">
        <Link href="/" onClick={onNavigate} className="flex flex-col items-center justify-center py-4 mb-2 hover:opacity-80 transition-opacity gap-2">
          <img src="/favicon_clear.png" alt={siteName} className="h-24 object-contain" />
          <span className="font-visby text-sm" style={{ color: 'var(--text-muted)' }}>{siteName}</span>
        </Link>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center rounded-lg text-lg hover:text-maple-accent transition-colors"
          style={{ color: 'var(--text-muted)' }}
          aria-label="Close sidebar"
        >
          ×
        </button>
      </div>

      <div className="maple-divider" />

      {/* Play Now Section */}
      <div>
        <p className="font-visby px-3 py-2.5 text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
          🍁 Play Now
        </p>
        <div className="mt-2 space-y-1">
          <SectionLink href="/download" label="Download Client" icon="⬇️" />
          <SectionLink href="/login" label="Login" icon="🔐" />
          <SectionLink href="/register" label="Register" icon="✍️" />
        </div>
      </div>

      <div className="maple-divider" />

      {/* DATABASE Section */}
      <div>
        <SectionHeader label="DATABASE" section="database" icon="📚" />
        {expandedSections.database && (
          <div className="mt-2 space-y-1">
            <SectionLink href="/database?tab=Monsters" label="Monsters" icon="👹" />
            <SectionLink href="/database?tab=NPCs" label="NPCs" icon="🧙" />
            <SectionLink href="/database?tab=Maps" label="Maps" icon="🗺️" />
            <SectionLink href="/database?tab=Skills" label="Skills" icon="✨" />
          </div>
        )}
      </div>

      {/* TOOLS Section */}
      <div>
        <SectionHeader label="TOOLS" section="tools" icon="⚙️" />
        {expandedSections.tools && (
          <div className="mt-2 space-y-1">
            <SectionLink href="/tools/training-spots" label="Training Spots" icon="📍" />
            <SectionLink href="/tools/ap-planner" label="AP Planner" icon="📊" />
          </div>
        )}
      </div>

      {/* GUIDES Section */}
      <div>
        <SectionHeader label="GUIDES" section="guides" icon="📖" />
        {expandedSections.guides && (
          <div className="mt-2 space-y-1">
            <SectionLink href="/guides/beginner" label="Beginner's Guide" icon="🍄" />
            <SectionLink href="/guides/leveling" label="Leveling Guide" icon="⬆️" />
            <SectionLink href="/guides/classes" label="Class Guide" icon="👤" />
            <SectionLink href="/guides/party-quests" label="Party Quests" icon="🎉" />
            <SectionLink href="/guides/meso-farming" label="Meso Farming" icon="💰" />
            <SectionLink href="/guides/zakum" label="Zakum Guide" icon="🐉" />
          </div>
        )}
      </div>

      {/* Legal */}
      <div className="mt-auto pt-4">
        <SectionLink href="/legal" label="Legal & Disclaimer" icon="⚖️" />
      </div>

    </aside>
  );
}
