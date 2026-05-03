import { Layout } from "@/components/Layout";
import { DataTable } from "@/components/DataTable";

interface Invoice {
  invoiceNo: string;
  invoiceDate: string;
  awbNo: string;
  consignee: string;
  amount: string;
  vat: string;
  total: string;
  status: string;
}

export default function InvoiceImportAirPage() {
  const columns = [
    { key: "invoiceNo", label: "Invoice No" },
    { key: "invoiceDate", label: "Date" },
    { key: "awbNo", label: "AWB No" },
    { key: "consignee", label: "Consignee" },
    { key: "amount", label: "Amount" },
    { key: "vat", label: "VAT" },
    { key: "total", label: "Total" },
    { key: "status", label: "Status" },
  ];

  const data: Invoice[] = [
    {
      invoiceNo: "INV-AIR-2026-001",
      invoiceDate: "2026-05-03",
      awbNo: "176-12345678",
      consignee: "Tech Solutions Ltd",
      amount: "$2,450.00",
      vat: "$367.50",
      total: "$2,817.50",
      status: "Paid",
    },
    {
      invoiceNo: "INV-AIR-2026-002",
      invoiceDate: "2026-05-02",
      awbNo: "618-87654321",
      consignee: "Global Imports Inc",
      amount: "$1,890.00",
      vat: "$283.50",
      total: "$2,173.50",
      status: "Pending",
    },
  ];

  return (
    <Layout>
      <DataTable
        data={data}
        columns={columns}
        title="Invoice List (Import Air)"
        searchPlaceholder="Search by invoice no, AWB, consignee..."
        onAdd={() => alert("Create new Invoice")}
        addButtonLabel="New Invoice"
      />
    </Layout>
  );
}