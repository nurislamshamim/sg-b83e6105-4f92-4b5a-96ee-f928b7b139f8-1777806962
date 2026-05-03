import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plane, Ship } from "lucide-react";

export default function Home() {
  const stats = [
    { label: "Air Export", value: 0, icon: Plane, color: "bg-air-export" },
    { label: "Air Import", value: 0, icon: Plane, color: "bg-air-import" },
    { label: "Sea Export", value: 0, icon: Ship, color: "bg-sea-export" },
    { label: "Sea Import", value: 0, icon: Ship, color: "bg-sea-import" },
  ];

  const quickLinks = [
    { label: "House B/L (Export Sea)", href: "/export/house-bl-sea" },
    { label: "House B/L (Import Sea)", href: "/import/house-bl-sea" },
    { label: "Export B/L (Air)", href: "/export/air-bl" },
    { label: "Import Sea", href: "/import/sea" },
    { label: "Consignee Details", href: "/accounts/consignee-details" },
    { label: "Bank Book", href: "/accounts/bank-book" },
    { label: "Income Statement", href: "/accounts/income-statement" },
    { label: "Balance Sheet", href: "/accounts/balance-sheet" },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-heading font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Overview of your freight operations</p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Stats and Chart */}
          <div className="lg:col-span-2 space-y-6">
            {/* BoL Count Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">BoL Count for Current Month</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col items-center">
                      <div className={`w-24 h-24 rounded-full ${stat.color} flex items-center justify-center mb-3`}>
                        <stat.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className={`w-20 h-20 rounded-full ${stat.color} flex items-center justify-center text-white text-2xl font-bold mb-2`}>
                        {stat.value}
                      </div>
                      <p className="text-sm font-medium text-center text-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Chart */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg">Total BoL Count (Last 6 Months)</CardTitle>
                <Select defaultValue="import-air">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Show Data For:" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="import-air">Import Air</SelectItem>
                    <SelectItem value="import-sea">Import Sea</SelectItem>
                    <SelectItem value="export-air">Export Air</SelectItem>
                    <SelectItem value="export-sea">Export Sea</SelectItem>
                  </SelectContent>
                </Select>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-end justify-between gap-4 px-4">
                  {["Dec, 25", "Feb, 26", "Apr, 26"].map((month, i) => (
                    <div key={month} className="flex-1 flex flex-col items-center">
                      <div className="w-full bg-air-import rounded-t" style={{ height: `${(i + 1) * 30}px` }}></div>
                      <p className="text-xs text-muted-foreground mt-2">{month}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-4 mt-6">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-air-import rounded"></div>
                    <span className="text-sm">ImportAir</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Quick Links */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {quickLinks.map((link) => (
                    <Button
                      key={link.href}
                      variant="outline"
                      className="justify-start h-auto py-3 px-4 text-left hover:bg-accent hover:text-white transition-colors"
                      asChild
                    >
                      <a href={link.href}>{link.label}</a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}