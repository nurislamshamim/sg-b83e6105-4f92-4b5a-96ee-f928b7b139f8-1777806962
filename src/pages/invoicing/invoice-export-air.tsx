import { Layout } from "@/components/Layout";
import { DataTable } from "@/components/DataTable";

interface Invoice {
  invoiceNo: string;
  invoiceDate: string;
  awbNo: string;
  shipper: string;
  amount: string;
  vat: string;
  total: string;
  status: string;
}

export default function InvoiceExportAirPage() {
  const columns = [
    { key: "invoiceNo", label: "Invoice No" },
    { key: "invoiceDate", label: "Date" },
    { key: "awbNo", label: "AWB No" },
    { key: "shipper", label: "Shipper" },
    { key: "amount", label: "Amount" },
    { key: "vat", label: "VAT" },
    { key: "total", label: "Total" },
    { key: "status", label: "Status" },
  ];

  const data: Invoice[] = [
    {
      invoiceNo: "INV-EXAIR-2026-001",
      invoiceDate: "2026-05-03",
      awbNo: "EXAW-2026-001",
      shipper: "Pharma Export BD",
      amount: "$1,650.00",
      vat: "$247.50",
      total: "$1,897.50",
      status: "Paid",
    },
  ];

  return (
    <Layout>
      <DataTable
        data={data}
        columns={columns}
        title="Invoice List (Export Air)"
        searchPlaceholder="Search by invoice no, AWB, shipper..."
        onAdd={() => alert("Create new Invoice")}
        addButtonLabel="New Invoice"
      />
    </Layout>
  );
}