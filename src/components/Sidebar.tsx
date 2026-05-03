import { useState } from "react";
import Link from "next/link";
import { 
  Home, 
  Package, 
  Send, 
  FileText, 
  Settings as SettingsIcon,
  Users,
  BarChart3,
  ShoppingCart,
  ChevronRight,
  Search,
  Bell,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  items?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: Home,
  },
  {
    id: "import",
    label: "Import",
    icon: Package,
    items: [
      { label: "Master B/L List (Import Sea)", href: "/import/master-bl-sea" },
      { label: "House B/L List (Import Sea)", href: "/import/house-bl-sea" },
      { label: "Delivery Order List (Import Sea)", href: "/import/delivery-order" },
      { label: "MR LIST (IMPORT SEA)", href: "/import/mr-list-sea" },
      { label: "House B/L Position", href: "/import/house-position" },
      { label: "Master B/L List (Import Air)", href: "/import/master-bl-air" },
      { label: "House B/L List (Import Air)", href: "/import/house-bl-air" },
      { label: "MR LIST (IMPORT AIR)", href: "/import/mr-list-air" },
      { label: "Container Unstaffing Info", href: "/import/container-unstaffing" },
      { label: "Delivery Status Agent Wise", href: "/import/delivery-status" },
    ],
  },
  {
    id: "export",
    label: "Export",
    icon: Send,
    items: [
      { label: "E-Booking Entry", href: "/export/e-booking-entry" },
      { label: "E-Booking List", href: "/export/e-booking-list" },
      { label: "Shipping Order Add", href: "/export/shipping-order-add" },
      { label: "Shipping Order List", href: "/export/shipping-order-list" },
      { label: "Shipment Advice Add", href: "/export/shipment-advice-add" },
      { label: "Shipment Advice List", href: "/export/shipment-advice-list" },
      { label: "Export Sea BL Entry", href: "/export/sea-bl-entry" },
      { label: "Export Sea BL List", href: "/export/sea-bl-list" },
      { label: "Draft MBL Add", href: "/export/draft-mbl-add" },
      { label: "Draft MBL List", href: "/export/draft-mbl-list" },
      { label: "Export Air BL List", href: "/export/air-bl-list" },
      { label: "Cargo Manifest List", href: "/export/cargo-manifest" },
      { label: "Container Loading Plan", href: "/export/loading-plan" },
      { label: "Stuffing Entry", href: "/export/stuffing-entry" },
      { label: "Stuffing List", href: "/export/stuffing-list" },
    ],
  },
  {
    id: "invoicing",
    label: "Invoicing",
    icon: FileText,
    items: [
      { label: "Invoice List (Import Sea)", href: "/invoicing/invoice-import-sea" },
      { label: "Invoice List (Import Air)", href: "/invoicing/invoice-import-air" },
      { label: "Invoice List (Export Sea)", href: "/invoicing/invoice-export-sea" },
      { label: "Invoice List (Export Air)", href: "/invoicing/invoice-export-air" },
      { label: "Invoice List (Master BL Wise)", href: "/invoicing/invoice-master-bl" },
      { label: "Freight Certificate (Bangladesh Bank)", href: "/invoicing/freight-cert-bb" },
      { label: "Freight Certificate (Customs)", href: "/invoicing/freight-cert-customs" },
    ],
  },
  {
    id: "configuration",
    label: "Configuration",
    icon: SettingsIcon,
    items: [
      { label: "Bank VAT Registrations", href: "/configuration/bank-vat" },
      { label: "B/L Nature", href: "/configuration/bl-nature" },
      { label: "B/L Type", href: "/configuration/bl-type" },
      { label: "C&F Agents", href: "/configuration/cf-agents" },
      { label: "Container Types", href: "/configuration/container-types" },
      { label: "Freight Forwarders", href: "/configuration/freight-forwarders" },
      { label: "Shipper/Consignee List", href: "/configuration/consignee-list" },
      { label: "Locations", href: "/configuration/locations" },
      { label: "MR/Invoice Particulars", href: "/configuration/mr-particulars" },
      { label: "Delivery Agents", href: "/configuration/delivery-agents" },
      { label: "Master Agent", href: "/configuration/master-agent" },
      { label: "Depot List", href: "/configuration/depot-list" },
      { label: "Advising Bank Info", href: "/configuration/bank-info" },
      { label: "Email Setup", href: "/configuration/email-setup" },
      { label: "BL Copies", href: "/configuration/bl-copies" },
      { label: "Packages", href: "/configuration/packages" },
    ],
  },
  {
    id: "accounts",
    label: "Accounts",
    icon: Users,
    items: [
      { label: "Bank Book", href: "/accounts/bank-book" },
      { label: "Consignee Details", href: "/accounts/consignee-details" },
      { label: "Income Statement", href: "/accounts/income-statement" },
      { label: "Balance Sheet", href: "/accounts/balance-sheet" },
    ],
  },
  {
    id: "reports",
    label: "Reports",
    icon: BarChart3,
    items: [
      { label: "Shipment Reports", href: "/reports/shipments" },
      { label: "Invoice Reports", href: "/reports/invoices" },
      { label: "Financial Reports", href: "/reports/financial" },
      { label: "Custom Reports", href: "/reports/custom" },
    ],
  },
  {
    id: "sales",
    label: "Sales Module",
    icon: ShoppingCart,
    items: [
      { label: "Sales Dashboard", href: "/sales/dashboard" },
      { label: "Customer Management", href: "/sales/customers" },
      { label: "Quotations", href: "/sales/quotations" },
      { label: "Sales Orders", href: "/sales/orders" },
    ],
  },
];

interface SidebarProps {
  onNavClick: (navId: string | null) => void;
  activeNav: string | null;
}

export function Sidebar({ onNavClick, activeNav }: SidebarProps) {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <aside className="fixed left-0 top-0 h-screen w-[144px] bg-primary text-primary-foreground flex flex-col border-r border-white/10">
      {/* Logo */}
      <div className="p-4 border-b border-white/10">
        <Link href="/" className="block">
          <h1 className="text-lg font-heading font-bold text-white">FreightFlow</h1>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-2 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeNav === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => {
                if (item.id === "dashboard") {
                  window.location.href = "/";
                } else {
                  onNavClick(isActive ? null : item.id);
                }
              }}
              className={cn(
                "w-full px-3 py-3 flex flex-col items-center gap-1 text-white/70 hover:text-white hover:bg-white/10 transition-colors relative",
                isActive && "bg-white/10 text-white"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs font-medium text-center leading-tight">{item.label}</span>
              {item.items && (
                <ChevronRight className={cn(
                  "w-3 h-3 absolute right-2 top-1/2 -translate-y-1/2 transition-transform",
                  isActive && "rotate-90"
                )} />
              )}
            </button>
          );
        })}
      </nav>

      {/* Bottom actions */}
      <div className="border-t border-white/10">
        <button
          onClick={() => setSearchOpen(!searchOpen)}
          className="w-full px-3 py-3 flex flex-col items-center gap-1 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
        >
          <Search className="w-5 h-5" />
          <span className="text-xs font-medium">Search</span>
        </button>

        <button className="w-full px-3 py-3 flex flex-col items-center gap-1 text-white/70 hover:text-white hover:bg-white/10 transition-colors">
          <Bell className="w-5 h-5" />
          <span className="text-xs font-medium">Alerts</span>
        </button>

        <button className="w-full px-3 py-3 flex flex-col items-center gap-1 text-white/70 hover:text-white hover:bg-white/10 transition-colors">
          <SettingsIcon className="w-5 h-5" />
          <span className="text-xs font-medium">Settings</span>
        </button>

        <div className="p-3 border-t border-white/10">
          <div className="w-10 h-10 mx-auto rounded-full bg-accent flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <p className="text-xs text-white/60 text-center mt-1 truncate">Admin</p>
        </div>
      </div>
    </aside>
  );
}

export { navItems };