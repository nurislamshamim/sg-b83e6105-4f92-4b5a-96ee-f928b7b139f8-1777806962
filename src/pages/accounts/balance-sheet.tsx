import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function BalanceSheetPage() {
  return (
    <Layout>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold text-foreground">Balance Sheet</h1>
            <p className="text-xs text-muted-foreground mt-0.5">Statement of Financial Position</p>
          </div>
          <Select defaultValue="2026-05">
            <SelectTrigger className="w-48 h-8 text-xs">
              <SelectValue placeholder="Select Date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2026-05">May 31, 2026</SelectItem>
              <SelectItem value="2026-04">April 30, 2026</SelectItem>
              <SelectItem value="2026-03">March 31, 2026</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Assets</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h3 className="text-xs font-semibold mb-2">Current Assets</h3>
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between">
                    <span>Cash & Bank</span>
                    <span className="font-mono">$285,400.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Accounts Receivable</span>
                    <span className="font-mono">$156,200.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Prepaid Expenses</span>
                    <span className="font-mono">$12,500.00</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xs font-semibold mb-2">Fixed Assets</h3>
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between">
                    <span>Office Equipment</span>
                    <span className="font-mono">$85,000.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Vehicles</span>
                    <span className="font-mono">$125,000.00</span>
                  </div>
                </div>
              </div>
              <div className="border-t pt-2 flex justify-between text-xs font-semibold">
                <span>Total Assets</span>
                <span className="font-mono">$664,100.00</span>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Liabilities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h3 className="text-xs font-semibold mb-2">Current Liabilities</h3>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between">
                      <span>Accounts Payable</span>
                      <span className="font-mono">$95,300.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Accrued Expenses</span>
                      <span className="font-mono">$28,450.00</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xs font-semibold mb-2">Long-term Liabilities</h3>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between">
                      <span>Bank Loan</span>
                      <span className="font-mono">$150,000.00</span>
                    </div>
                  </div>
                </div>
                <div className="border-t pt-2 flex justify-between text-xs font-semibold">
                  <span>Total Liabilities</span>
                  <span className="font-mono">$273,750.00</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-accent/10 border-accent">
              <CardHeader>
                <CardTitle className="text-sm">Equity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-semibold">Total Equity</span>
                  <span className="text-lg font-bold font-mono text-accent">$390,350.00</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}