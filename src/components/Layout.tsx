import { ReactNode } from "react";
import { Sidebar } from "@/components/Sidebar";
import { HorizontalMenu } from "@/components/HorizontalMenu";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-muted">
      <Sidebar />
      <HorizontalMenu />
      <main className="ml-64 pt-14">
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}