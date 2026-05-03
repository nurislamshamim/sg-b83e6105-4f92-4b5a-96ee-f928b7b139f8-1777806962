import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface SecondaryPanelProps {
  title: string;
  items: { label: string; href: string }[];
  onClose: () => void;
  activeItem?: string;
}

export function SecondaryPanel({ title, items, onClose, activeItem }: SecondaryPanelProps) {
  return (
    <div className="fixed left-[144px] top-0 h-screen w-[280px] bg-muted border-r border-border flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-border flex items-center gap-3">
        <button
          onClick={onClose}
          className="w-8 h-8 flex items-center justify-center rounded hover:bg-background transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h2 className="text-lg font-heading font-semibold text-foreground">{title}</h2>
      </div>

      {/* Menu items */}
      <nav className="flex-1 overflow-y-auto py-2">
        {items.map((item) => {
          const isActive = activeItem === item.href;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "block px-4 py-2.5 text-sm text-foreground hover:bg-accent/10 transition-colors",
                isActive && "bg-accent/20 text-accent font-medium"
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}