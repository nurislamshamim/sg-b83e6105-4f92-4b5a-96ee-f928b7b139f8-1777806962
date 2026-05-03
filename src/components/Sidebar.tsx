import Link from "next/link";
import { Home, Package, FileText, BarChart3, Settings, Bell, ChevronLeft, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-primary text-primary-foreground flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-white/10">
        <h1 className="text-xl font-heading font-bold">FreightFlow</h1>
        <p className="text-xs text-white/60 mt-1">Logistics Management</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white/10 text-white hover:bg-white/15 transition-colors"
        >
          <Home className="w-5 h-5" />
          <span className="font-medium">Dashboard</span>
        </Link>

        <Link
          href="/shipments"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/80 hover:bg-white/10 hover:text-white transition-colors"
        >
          <Package className="w-5 h-5" />
          <span className="font-medium">Shipments</span>
        </Link>

        <Link
          href="/documents"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/80 hover:bg-white/10 hover:text-white transition-colors"
        >
          <FileText className="w-5 h-5" />
          <span className="font-medium">Documents</span>
        </Link>

        <Link
          href="/analytics"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/80 hover:bg-white/10 hover:text-white transition-colors"
        >
          <BarChart3 className="w-5 h-5" />
          <span className="font-medium">Analytics</span>
        </Link>
      </nav>

      {/* Bottom actions */}
      <div className="p-3 border-t border-white/10 space-y-2">
        <Button
          variant="ghost"
          className="w-full justify-start text-white/80 hover:text-white hover:bg-white/10"
          size="sm"
        >
          <Bell className="w-4 h-4 mr-2" />
          Notifications
        </Button>

        <Button
          variant="ghost"
          className="w-full justify-start text-white/80 hover:text-white hover:bg-white/10"
          size="sm"
        >
          <Settings className="w-4 h-4 mr-2" />
          Settings
        </Button>

        <div className="flex items-center gap-2 px-2 py-2 mt-2 rounded-lg bg-white/5">
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">Admin User</p>
            <p className="text-xs text-white/60 truncate">admin@freightflow.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
}