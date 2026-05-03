import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SalesDashboardPage() {
  return (
    <Layout>
      <div className="space-y-4">
        <div>
          <h1 className="text-lg font-semibold text-foreground">Sales Dashboard</h1>
          <p className="text-xs text-muted-foreground mt-0.5">Sales performance and metrics</p>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-xs text-muted-foreground mb-1">Total Customers</div>
              <div className="text-2xl font-bold font-mono">156</div>
              <div className="text-xs text-success mt-1">↑ 8 new this month</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-xs text-muted-foreground mb-1">Active Quotations</div>
              <div className="text-2xl font-bold font-mono text-accent">42</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-xs text-muted-foreground mb-1">Confirmed Orders</div>
              <div className="text-2xl font-bold font-mono text-success">28</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-xs text-muted-foreground mb-1">Conversion Rate</div>
              <div className="text-2xl font-bold font-mono">66.7%</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Top Customers (by Revenue)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between text-xs">
                <span>Fashion Hub USA Inc</span>
                <span className="font-mono">$48,500</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>European Fashion Group</span>
                <span className="font-mono">$38,900</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Global Leather Co</span>
                <span className="font-mono">$32,150</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Tech Solutions Ltd</span>
                <span className="font-mono">$28,720</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="text-xs">
                <div className="font-medium">New customer registered</div>
                <div className="text-muted-foreground">Asian Imports Ltd - 2 hours ago</div>
              </div>
              <div className="text-xs">
                <div className="font-medium">Quotation approved</div>
                <div className="text-muted-foreground">QT-2026-125 - 5 hours ago</div>
              </div>
              <div className="text-xs">
                <div className="font-medium">Order confirmed</div>
                <div className="text-muted-foreground">SO-2026-089 - 1 day ago</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}