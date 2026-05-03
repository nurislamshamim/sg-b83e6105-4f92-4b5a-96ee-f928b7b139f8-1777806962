import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function FinancialReportsPage() {
  return (
    <Layout>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold text-foreground">Financial Reports</h1>
            <p className="text-xs text-muted-foreground mt-0.5">Revenue and expense analysis</p>
          </div>
          <div className="flex items-center gap-2">
            <Select defaultValue="2026-q2">
              <SelectTrigger className="w-40 h-8 text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2026-q2">Q2 2026</SelectItem>
                <SelectItem value="2026-q1">Q1 2026</SelectItem>
                <SelectItem value="2025-q4">Q4 2025</SelectItem>
              </SelectContent>
            </Select>
            <Button size="sm" className="h-8 bg-accent hover:bg-accent/90 text-xs">
              <Download className="w-3.5 h-3.5 mr-1.5" />
              Export PDF
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-xs text-muted-foreground mb-1">Total Revenue</div>
              <div className="text-2xl font-bold font-mono text-accent">$444.2K</div>
              <div className="text-xs text-success mt-1">↑ 12.5% from last quarter</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-xs text-muted-foreground mb-1">Total Expenses</div>
              <div className="text-2xl font-bold font-mono">$257.8K</div>
              <div className="text-xs text-muted-foreground mt-1">↑ 5.2% from last quarter</div>
            </CardContent>
          </Card>
          <Card className="border-accent">
            <CardContent className="pt-6">
              <div className="text-xs text-muted-foreground mb-1">Net Profit</div>
              <div className="text-2xl font-bold font-mono text-success">$186.3K</div>
              <div className="text-xs text-success mt-1">↑ 22.8% from last quarter</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Revenue by Service Type</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between text-xs">
                <span>Sea Freight</span>
                <span className="font-mono">$282,230 (63.5%)</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Air Freight</span>
                <span className="font-mono">$161,970 (36.5%)</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Profit Margin</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between text-xs">
                <span>Gross Margin</span>
                <span className="font-mono font-semibold">58.0%</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Operating Margin</span>
                <span className="font-mono font-semibold">45.2%</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Net Margin</span>
                <span className="font-mono font-semibold text-success">41.9%</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}