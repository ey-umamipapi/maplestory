import Nav from "./Nav";
import Sidebar from "./Sidebar";

export default function Layout({ children, siteName, logo, showSidebar = true }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav siteName={siteName} />
      <div className="flex flex-1">
        {showSidebar && <Sidebar siteName={siteName} logo={logo} />}
        <div className="flex-1 flex flex-col">
          {children}
        </div>
      </div>
    </div>
  );
}
