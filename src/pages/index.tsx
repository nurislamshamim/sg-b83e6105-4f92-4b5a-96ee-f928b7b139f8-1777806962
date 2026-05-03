import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Ship, 
  Plane, 
  FileText, 
  TrendingUp, 
  Package, 
  DollarSign,
  Users,
  Clock
} from "lucide-react";

export default function DashboardPage() {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">Freight logistics overview</p>
        </div>

        {/* B/L Statistics */}
        <div>
          <h2 className="text-sm font-semibold text-foreground mb-3">Bill of Lading Statistics</h2>
          <div className="grid grid-cols-4 gap-4">
            <Card className="border-sea-import/30 bg-sea-import/5">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-sea-import/10 flex items-center justify-center">
                    <Ship className="w-5 h-5 text-sea-import" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Import Sea B/L</p>
                    <p className="text-2xl font-bold font-mono text-sea-import">342</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-air-import/30 bg-air-import/5">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-air-import/10 flex items-center justify-center">
                    <Plane className="w-5 h-5 text-air-import" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Import Air B/L</p>
                    <p className="text-2xl font-bold font-mono text-air-import">186</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-sea-export/30 bg-sea-export/5">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-sea-export/10 flex items-center justify-center">
                    <Ship className="w-5 h-5 text-sea-export" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Export Sea B/L</p>
                    <p className="text-2xl font-bold font-mono text-sea-export">289</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-air-export/30 bg-air-export/5">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-air-export/10 flex items-center justify-center">
                    <Plane className="w-5 h-5 text-air-export" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Export Air B/L</p>
                    <p className="text-2xl font-bold font-mono text-air-export">154</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Links & Recent Activity */}
        <div className="grid grid-cols-3 gap-6">
          {/* Quick Links */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle className="text-sm">Quick Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Link href="/import/master-bl-sea">
                <Button variant="outline" className="w-full justify-start h-9 text-xs">
                  <FileText className="w-3.5 h-3.5 mr-2" />
                  Add Master B/L (Sea)
                </Button>
              </Link>
              <Link href="/import/house-bl-sea">
                <Button variant="outline" className="w-full justify-start h-9 text-xs">
                  <Package className="w-3.5 h-3.5 mr-2" />
                  Add House B/L (Sea)
                </Button>
              </Link>
              <Link href="/export/e-booking-list">
                <Button variant="outline" className="w-full justify-start h-9 text-xs">
                  <Ship className="w-3.5 h-3.5 mr-2" />
                  Create E-Booking
                </Button>
              </Link>
              <Link href="/invoicing/invoice-import-sea">
                <Button variant="outline" className="w-full justify-start h-9 text-xs">
                  <DollarSign className="w-3.5 h-3.5 mr-2" />
                  Generate Invoice
                </Button>
              </Link>
              <Link href="/sales/customers">
                <Button variant="outline" className="w-full justify-start h-9 text-xs">
                  <Users className="w-3.5 h-3.5 mr-2" />
                  Manage Customers
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle className="text-sm">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3 pb-3 border-b border-border">
                <div className="w-8 h-8 rounded-lg bg-sea-import/10 flex items-center justify-center flex-shrink-0">
                  <Ship className="w-4 h-4 text-sea-import" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium">New Master B/L Created</p>
                  <p className="text-xs text-muted-foreground">MAEU123456789 - MSC MAYA - Arrival: May 10</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                    <Clock className="w-3 h-3" />
                    2 hours ago
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pb-3 border-b border-border">
                <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-4 h-4 text-success" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium">Invoice Paid</p>
                  <p className="text-xs text-muted-foreground">INV-2026-125 - $3,450.00 - Fashion Hub USA Inc</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                    <Clock className="w-3 h-3" />
                    5 hours ago
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pb-3 border-b border-border">
                <div className="w-8 h-8 rounded-lg bg-air-export/10 flex items-center justify-center flex-shrink-0">
                  <Plane className="w-4 h-4 text-air-export" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium">E-Booking Confirmed</p>
                  <p className="text-xs text-muted-foreground">EB-2026-089 - Singapore Airlines - 15 packages</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                    <Clock className="w-3 h-3" />
                    1 day ago
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pb-3 border-b border-border">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-4 h-4 text-accent" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium">Delivery Order Issued</p>
                  <p className="text-xs text-muted-foreground">DO-2026-067 - Premium C&F Services</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                    <Clock className="w-3 h-3" />
                    1 day ago
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-sea-export/10 flex items-center justify-center flex-shrink-0">
                  <Package className="w-4 h-4 text-sea-export" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium">Export Shipment Departed</p>
                  <p className="text-xs text-muted-foreground">EXBL-2026-048 - CMA CGM ANDROMEDA - Los Angeles</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                    <Clock className="w-3 h-3" />
                    2 days ago
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Metrics */}
        <div>
          <h2 className="text-sm font-semibold text-foreground mb-3">This Month</h2>
          <div className="grid grid-cols-4 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">Total Revenue</p>
                    <p className="text-xl font-bold font-mono text-foreground">$486K</p>
                  </div>
                  <TrendingUp className="w-5 h-5 text-success" />
                </div>
                <p className="text-xs text-success mt-2">↑ 12.5% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">Shipments</p>
                    <p className="text-xl font-bold font-mono text-foreground">971</p>
                  </div>
                  <Ship className="w-5 h-5 text-accent" />
                </div>
                <p className="text-xs text-success mt-2">↑ 8.3% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">Active Customers</p>
                    <p className="text-xl font-bold font-mono text-foreground">156</p>
                  </div>
                  <Users className="w-5 h-5 text-accent" />
                </div>
                <p className="text-xs text-muted-foreground mt-2">8 new this month</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">Avg. Processing Time</p>
                    <p className="text-xl font-bold font-mono text-foreground">2.3d</p>
                  </div>
                  <Clock className="w-5 h-5 text-success" />
                </div>
                <p className="text-xs text-success mt-2">↓ 0.4d from last month</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}