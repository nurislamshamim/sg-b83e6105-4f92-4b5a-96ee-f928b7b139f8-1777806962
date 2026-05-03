import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus } from "lucide-react";

export default function CustomReportsPage() {
  return (
    <Layout>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold text-foreground">Custom Report Builder</h1>
            <p className="text-xs text-muted-foreground mt-0.5">Create customized reports</p>
          </div>
          <Button size="sm" className="h-8 bg-accent hover:bg-accent/90 text-xs">
            <Plus className="w-3.5 h-3.5 mr-1.5" />
            Generate Report
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Report Type</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-1.5">
                <Label className="text-xs">Select Type</Label>
                <Select>
                  <SelectTrigger className="h-8 text-xs">
                    <SelectValue placeholder="Choose report type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="shipment">Shipment Analysis</SelectItem>
                    <SelectItem value="invoice">Invoice Summary</SelectItem>
                    <SelectItem value="customer">Customer Performance</SelectItem>
                    <SelectItem value="financial">Financial Overview</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Date Range</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-1.5">
                <Label className="text-xs">Period</Label>
                <Select>
                  <SelectTrigger className="h-8 text-xs">
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="last7">Last 7 Days</SelectItem>
                    <SelectItem value="last30">Last 30 Days</SelectItem>
                    <SelectItem value="thismonth">This Month</SelectItem>
                    <SelectItem value="lastmonth">Last Month</SelectItem>
                    <SelectItem value="thisquarter">This Quarter</SelectItem>
                    <SelectItem value="custom">Custom Range</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Filters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-1.5">
                <Label className="text-xs">Mode</Label>
                <Select>
                  <SelectTrigger className="h-8 text-xs">
                    <SelectValue placeholder="All modes" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Modes</SelectItem>
                    <SelectItem value="sea">Sea Only</SelectItem>
                    <SelectItem value="air">Air Only</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Include Fields</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-3">
              <div className="flex items-center space-x-2">
                <Checkbox id="bl-no" defaultChecked />
                <label htmlFor="bl-no" className="text-xs cursor-pointer">B/L Number</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="consignee" defaultChecked />
                <label htmlFor="consignee" className="text-xs cursor-pointer">Consignee</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="vessel" defaultChecked />
                <label htmlFor="vessel" className="text-xs cursor-pointer">Vessel</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="port" />
                <label htmlFor="port" className="text-xs cursor-pointer">Ports</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="commodity" />
                <label htmlFor="commodity" className="text-xs cursor-pointer">Commodity</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="amount" defaultChecked />
                <label htmlFor="amount" className="text-xs cursor-pointer">Amount</label>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}