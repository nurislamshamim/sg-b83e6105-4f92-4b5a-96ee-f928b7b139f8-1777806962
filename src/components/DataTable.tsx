import { ReactNode } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Download, Filter, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface Column {
  key: string;
  label: string;
  width?: string;
}

interface DataTableProps {
  title: string;
  description?: string;
  columns: Column[];
  data: Record<string, any>[];
  onAdd?: () => void;
  addButtonLabel?: string;
}

export function DataTable({ title, description, columns, data, onAdd, addButtonLabel = "Add New" }: DataTableProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-heading font-bold text-foreground">{title}</h1>
          {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
        </div>
        {onAdd && (
          <Button onClick={onAdd} className="bg-accent hover:bg-accent/90">
            <Plus className="w-4 h-4 mr-2" />
            {addButtonLabel}
          </Button>
        )}
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search..."
            className="pl-10"
          />
        </div>
        <Button variant="outline" size="sm">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>
        <Button variant="outline" size="sm">
          <Download className="w-4 h-4 mr-2" />
          Export
        </Button>
      </div>

      {/* Table */}
      <div className="border rounded-lg bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              {columns.map((column) => (
                <TableHead key={column.key} className={column.width}>
                  {column.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length} className="text-center py-12 text-muted-foreground">
                  No records found
                </TableCell>
              </TableRow>
            ) : (
              data.map((row, index) => (
                <TableRow key={index} className="hover:bg-muted/30">
                  {columns.map((column) => (
                    <TableCell key={column.key} className={column.width}>
                      {renderCell(row[column.key], column.key)}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <div>Showing {data.length} of {data.length} records</div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" disabled>Previous</Button>
          <Button variant="outline" size="sm" disabled>Next</Button>
        </div>
      </div>
    </div>
  );
}

function renderCell(value: any, key: string): ReactNode {
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