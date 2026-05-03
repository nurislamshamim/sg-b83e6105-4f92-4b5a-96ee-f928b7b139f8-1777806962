import { ReactNode, useState } from "react";
import { Sidebar, navItems } from "@/components/Sidebar";
import { SecondaryPanel } from "@/components/SecondaryPanel";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [activeNav, setActiveNav] = useState<string | null>(null);

  const activeNavItem = navItems.find(item => item.id === activeNav);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar onNavClick={setActiveNav} activeNav={activeNav} />
      
      {activeNav && activeNavItem?.items && (
        <SecondaryPanel
          title={activeNavItem.label}
          items={activeNavItem.items}
          onClose={() => setActiveNav(null)}
        />
      )}

      <main className={activeNav ? "ml-[424px]" : "ml-[144px]"}>
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}