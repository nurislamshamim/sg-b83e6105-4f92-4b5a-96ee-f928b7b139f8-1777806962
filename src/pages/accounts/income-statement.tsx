import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function IncomeStatementPage() {
  return (
    <Layout>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold text-foreground">Income Statement</h1>
            <p className="text-xs text-muted-foreground mt-0.5">Profit & Loss Statement</p>
          </div>
          <Select defaultValue="2026-q2">
            <SelectTrigger className="w-48 h-8 text-xs">
              <SelectValue placeholder="Select Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2026-q2">Q2 2026 (Apr-Jun)</SelectItem>
              <SelectItem value="2026-q1">Q1 2026 (Jan-Mar)</SelectItem>
              <SelectItem value="2025-q4">Q4 2025 (Oct-Dec)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Revenue</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between text-xs">
              <span>Import Sea Freight</span>
              <span className="font-mono">$125,450.00</span>
            </div>
            <div className="flex justify-between text-xs">
              <span>Import Air Freight</span>
              <span className="font-mono">$89,320.00</span>
            </div>
            <div className="flex justify-between text-xs">
              <span>Export Sea Freight</span>
              <span className="font-mono">$156,780.00</span>
            </div>
            <div className="flex justify-between text-xs">
              <span>Export Air Freight</span>
              <span className="font-mono">$72,650.00</span>
            </div>
            <div className="border-t pt-2 flex justify-between text-xs font-semibold">
              <span>Total Revenue</span>
              <span className="font-mono">$444,200.00</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Expenses</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between text-xs">
              <span>Operational Costs</span>
              <span className="font-mono">$85,600.00</span>
            </div>
            <div className="flex justify-between text-xs">
              <span>Staff Salaries</span>
              <span className="font-mono">$125,000.00</span>
            </div>
            <div className="flex justify-between text-xs">
              <span>Office Rent & Utilities</span>
              <span className="font-mono">$28,500.00</span>
            </div>
            <div className="flex justify-between text-xs">
              <span>Administrative Expenses</span>
              <span className="font-mono">$18,750.00</span>
            </div>
            <div className="border-t pt-2 flex justify-between text-xs font-semibold">
              <span>Total Expenses</span>
              <span className="font-mono">$257,850.00</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-accent/10 border-accent">
          <CardContent className="pt-6">
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold">Net Income</span>
              <span className="text-xl font-bold font-mono text-accent">$186,350.00</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}