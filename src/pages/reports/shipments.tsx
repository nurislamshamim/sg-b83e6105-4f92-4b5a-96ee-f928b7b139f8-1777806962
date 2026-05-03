import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Download, Calendar } from "lucide-react";

export default function ShipmentReportsPage() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold">Shipment Reports</h1>
            <p className="text-xs text-muted-foreground mt-0.5">Analytics and insights on shipment performance</p>
          </div>
          <div className="flex items-center gap-2">
            <Select defaultValue="this-month">
              <SelectTrigger className="w-[180px] h-8 text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="this-month">This Month</SelectItem>
                <SelectItem value="last-month">Last Month</SelectItem>
                <SelectItem value="this-quarter">This Quarter</SelectItem>
                <SelectItem value="this-year">This Year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm" className="h-8 text-xs">
              <Calendar className="w-3.5 h-3.5 mr-1.5" />
              Custom Range
            </Button>
            <Button size="sm" className="h-8 bg-accent hover:bg-accent/90 text-xs">
              <Download className="w-3.5 h-3.5 mr-1.5" />
              Export Report
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xs text-muted-foreground font-medium">Total Shipments</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">248</p>
              <p className="text-xs text-success mt-1">+12% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xs text-muted-foreground font-medium">In Transit</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">82</p>
              <p className="text-xs text-muted-foreground mt-1">33% of total</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xs text-muted-foreground font-medium">Delivered</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">156</p>
              <p className="text-xs text-success mt-1">95% on-time</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xs text-muted-foreground font-medium">Avg Transit Time</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">18.5</p>
              <p className="text-xs text-muted-foreground mt-1">days</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Shipments by Mode</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span>Sea Freight</span>
                    <span className="font-medium">165 (67%)</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-sea-export h-2 rounded-full" style={{ width: "67%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span>Air Freight</span>
                    <span className="font-medium">83 (33%)</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-air-export h-2 rounded-full" style={{ width: "33%" }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Top Routes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <span>Singapore → Chattogram</span>
                  <span className="font-medium">42 shipments</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Shanghai → Chattogram</span>
                  <span className="font-medium">38 shipments</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Chattogram → Rotterdam</span>
                  <span className="font-medium">28 shipments</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Dubai → Chattogram</span>
                  <span className="font-medium">24 shipments</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}