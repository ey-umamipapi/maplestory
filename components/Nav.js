import ThemeToggle from "./ThemeToggle";
import ServerStatus from "./ServerStatus";

export default function Nav({ siteName }) {
  return (
    <nav
      className="border-b backdrop-blur-sm px-4 py-2 flex items-center justify-between"
      style={{ background: "var(--nav-bg)", borderColor: "var(--border-color)" }}
    >
      <ServerStatus />
      <ThemeToggle />
    </nav>
  );
}
