import { useState, useEffect } from "react";
import Nav from "./Nav";
import Sidebar from "./Sidebar";

export default function Layout({ children, siteName, logo, showSidebar = true }) {
  // Default open on desktop, closed on mobile — resolved after mount to avoid SSR mismatch
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setSidebarOpen(window.innerWidth >= 768);
  }, []);

  return (
    <>
      <div className="stars-bg" aria-hidden="true" />
      <div className="relative z-10 min-h-screen flex flex-col">
        <Nav siteName={siteName} onMenuToggle={() => setSidebarOpen(o => !o)} />

        <div className="flex flex-1">
          {showSidebar && (
            <>
              {/* Mobile overlay — tap outside to close */}
              {sidebarOpen && (
                <div
                  className="fixed inset-0 z-20 bg-black/50 md:hidden"
                  onClick={() => setSidebarOpen(false)}
                />
              )}

              {/* Sidebar */}
              <div className={`
                fixed inset-y-0 left-0 z-30 md:static md:z-auto
                transition-transform duration-200 ease-in-out
                ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:-translate-x-full"}
              `} style={{ width: '14rem' }}>
                <Sidebar
                  siteName={siteName}
                  logo={logo}
                  onNavigate={() => { if (window.innerWidth < 768) setSidebarOpen(false); }}
                  onClose={() => setSidebarOpen(false)}
                />
              </div>
            </>
          )}

          <div className="flex-1 flex flex-col min-w-0">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
