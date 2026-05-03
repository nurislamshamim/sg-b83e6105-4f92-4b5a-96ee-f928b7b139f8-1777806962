import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface MenuItem {
  label: string;
  items: { label: string; href: string }[];
}

const menuItems: MenuItem[] = [
  {
    label: "IMPORT",
    items: [
      { label: "Master B/L LIST(Import Sea)", href: "/import/master-bl-sea" },
      { label: "House B/L List(Import Sea)", href: "/import/house-bl-sea" },
      { label: "Delivery Order List(Import Sea)", href: "/import/delivery-order" },
      { label: "MR LIST (IMPORT SEA)", href: "/import/mr-list-sea" },
      { label: "House B/L Position", href: "/import/house-position" },
      { label: "Master B/L List(Import Air)", href: "/import/master-bl-air" },
      { label: "House B/L List (Import Air)", href: "/import/house-bl-air" },
      { label: "MR LIST (IMPORT AIR)", href: "/import/mr-list-air" },
      { label: "CONTAINER UNSTAFFING INFO", href: "/import/container-unstaffing" },
      { label: "Delivery Status Agent Wise", href: "/import/delivery-status" },
    ],
  },
  {
    label: "EXPORT",
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
      { label: "Connection Advice Add", href: "/export/connection-advice-add" },
      { label: "Connection Advice List", href: "/export/connection-advice-list" },
      { label: "Export Air BL List", href: "/export/air-bl-list" },
      { label: "Cargo Manifest List", href: "/export/cargo-manifest" },
      { label: "Container Loading Plan", href: "/export/loading-plan" },
      { label: "Stuffing Entry", href: "/export/stuffing-entry" },
      { label: "Stuffing List", href: "/export/stuffing-list" },
    ],
  },
  {
    label: "INVOICING",
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
    label: "CONFIGURATION",
    items: [
      { label: "Bank VAT Registrations", href: "/configuration/bank-vat" },
      { label: "B/L Nature", href: "/configuration/bl-nature" },
      { label: "B/L Type", href: "/configuration/bl-type" },
      { label: "C&F Agents", href: "/configuration/cf-agents" },
      { label: "Container Indicator", href: "/configuration/container-indicator" },
      { label: "Container Types", href: "/configuration/container-types" },
      { label: "Freight Forwarders", href: "/configuration/freight-forwarders" },
      { label: "Shipper/Consignee/Notify List", href: "/configuration/consignee-list" },
      { label: "Locations", href: "/configuration/locations" },
      { label: "MR/INVOICE Particulars", href: "/configuration/mr-particulars" },
      { label: "Consignee List", href: "/configuration/consignees" },
      { label: "Delivery Agents", href: "/configuration/delivery-agents" },
      { label: "Master Agent", href: "/configuration/master-agent" },
      { label: "DEPOT LIST", href: "/configuration/depot-list" },
      { label: "Advising Bank Info", href: "/configuration/bank-info" },
      { label: "AN EMAIL SETUP", href: "/configuration/email-setup" },
      { label: "BL COPIES", href: "/configuration/bl-copies" },
      { label: "Packages", href: "/configuration/packages" },
    ],
  },
  {
    label: "ACCOUNTS",
    items: [
      { label: "Bank Book", href: "/accounts/bank-book" },
      { label: "Consignee Details", href: "/accounts/consignee-details" },
      { label: "Income Statement", href: "/accounts/income-statement" },
      { label: "Balance Sheet", href: "/accounts/balance-sheet" },
    ],
  },
  {
    label: "REPORTS",
    items: [
      { label: "Shipment Reports", href: "/reports/shipments" },
      { label: "Invoice Reports", href: "/reports/invoices" },
      { label: "Financial Reports", href: "/reports/financial" },
      { label: "Custom Reports", href: "/reports/custom" },
    ],
  },
  {
    label: "SALES MODULE",
    items: [
      { label: "Sales Dashboard", href: "/sales/dashboard" },
      { label: "Customer Management", href: "/sales/customers" },
      { label: "Quotations", href: "/sales/quotations" },
      { label: "Sales Orders", href: "/sales/orders" },
    ],
  },
  {
    label: "SETTINGS",
    items: [
      { label: "User Management", href: "/settings/users" },
      { label: "Role Permissions", href: "/settings/roles" },
      { label: "System Settings", href: "/settings/system" },
      { label: "Backup & Restore", href: "/settings/backup" },
    ],
  },
];

export function HorizontalMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <div className="fixed top-0 left-64 right-0 h-14 bg-menu-blue text-white shadow-md z-50">
      <div className="flex items-center h-full">
        <Link
          href="/"
          className="px-6 h-full flex items-center bg-menu-blue hover:bg-menu-blue/90 transition-colors border-r border-white/10"
        >
          <span className="font-heading font-semibold text-sm">DASHBOARD</span>
        </Link>

        {menuItems.map((menu) => (
          <div
            key={menu.label}
            className="relative h-full"
            onMouseEnter={() => setActiveMenu(menu.label)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button className="px-4 h-full flex items-center gap-1 hover:bg-white/10 transition-colors border-r border-white/10">
              <span className="font-heading font-semibold text-sm">{menu.label}</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {activeMenu === menu.label && (
              <div className="absolute top-full left-0 min-w-[280px] bg-gray-800 shadow-xl py-2 max-h-[500px] overflow-y-auto">
                {menu.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2.5 text-sm text-white hover:bg-success hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}