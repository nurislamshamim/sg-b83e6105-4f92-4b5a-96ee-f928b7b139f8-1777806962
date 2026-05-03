import { ReactNode, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Download, Filter, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

interface Column {
  key: string;
  label: string;
  width?: string;
}

interface DataTableProps<T extends Record<string, any>> {
  data: T[];
  columns: Column[];
  title: string;
  description?: string;
  searchPlaceholder?: string;
  onAdd?: () => void;
  addButtonLabel?: string;
}

export function DataTable<T extends Record<string, any>>({
  data,
  columns,
  title,
  description,
  searchPlaceholder = "Search...",
  onAdd,
  addButtonLabel = "Add New",
}: DataTableProps<T>) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((row) =>
    Object.values(row).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold text-foreground">{title}</h1>
          {description && <p className="text-xs text-muted-foreground mt-0.5">{description}</p>}
        </div>
        <div className="flex items-center gap-2">
          <Input
            type="search"
            placeholder={searchPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-64 h-8 text-xs"
          />
          <Button variant="outline" size="sm" className="h-8 text-xs">
            <Filter className="w-3.5 h-3.5 mr-1.5" />
            Filter
          </Button>
          <Button variant="outline" size="sm" className="h-8 text-xs">
            <Download className="w-3.5 h-3.5 mr-1.5" />
            Export
          </Button>
          {onAdd && (
            <Button onClick={onAdd} size="sm" className="h-8 bg-accent hover:bg-accent/90 text-xs">
              <Plus className="w-3.5 h-3.5 mr-1.5" />
              {addButtonLabel}
            </Button>
          )}
        </div>
      </div>

      {/* Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                {columns.map((column) => (
                  <TableHead key={column.key} className="h-10 text-xs font-semibold">
                    {column.label}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center text-xs">
                    No results found.
                  </TableCell>
                </TableRow>
              ) : (
                filteredData.map((row, index) => (
                  <TableRow key={index} className="hover:bg-muted/50">
                    {columns.map((column) => (
                      <TableCell key={column.key} className="py-2.5 text-xs">
                        {formatCellValue(row[column.key], column.key)}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-xs text-muted-foreground">
          Showing {filteredData.length} of {data.length} results
        </p>
        <div className="flex items-center gap-1">
          <Button variant="outline" size="sm" className="h-7 w-7 p-0">
            <ChevronLeft className="w-3.5 h-3.5" />
          </Button>
          <Button variant="outline" size="sm" className="h-7 px-2.5 text-xs">
            1
          </Button>
          <Button variant="outline" size="sm" className="h-7 w-7 p-0">
            <ChevronRight className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>
    </div>
  );
}

function formatCellValue(value: any, key: string): ReactNode {
  if (value === null || value === undefined) return "-";
  
  if (key === "status") {
    const statusColors: Record<string, string> = {
      "Active": "bg-success text-white",
      "Pending": "bg-yellow-500 text-white",
      "Completed": "bg-blue-500 text-white",
      "Cancelled": "bg-red-500 text-white",
      "In Transit": "bg-accent text-white",
    };
    return (
      <Badge className={cn("font-medium", statusColors[value] || "bg-gray-500 text-white")}>
        {value}
      </Badge>
    );
  }

  if (typeof value === "boolean") {
    return value ? "Yes" : "No";
  }

  return value;
}