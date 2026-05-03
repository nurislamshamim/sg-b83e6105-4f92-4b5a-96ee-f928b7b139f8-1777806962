import { Layout } from "@/components/Layout";
import { DataTable } from "@/components/DataTable";

interface Invoice {
  invoiceNo: string;
  invoiceDate: string;
  blNo: string;
  shipper: string;
  amount: string;
  vat: string;
  total: string;
  status: string;
}

export default function InvoiceExportSeaPage() {
  const columns = [
    { key: "invoiceNo", label: "Invoice No" },
    { key: "invoiceDate", label: "Date" },
    { key: "blNo", label: "B/L No" },
    { key: "shipper", label: "Shipper" },
    { key: "amount", label: "Amount" },
    { key: "vat", label: "VAT" },
    { key: "total", label: "Total" },
    { key: "status", label: "Status" },
  ];

  const data: Invoice[] = [
    {
      invoiceNo: "INV-EX-2026-001",
      invoiceDate: "2026-05-03",
      blNo: "EXBL-2026-001",
      shipper: "Bangladesh Garments Ltd",
      amount: "$3,200.00",
      vat: "$480.00",
      total: "$3,680.00",
      status: "Paid",
    },
  ];

  return (
    <Layout>
      <DataTable
        data={data}
        columns={columns}
        title="Invoice List (Export Sea)"
        searchPlaceholder="Search by invoice no, B/L, shipper..."
        onAdd={() => alert("Create new Invoice")}
        addButtonLabel="New Invoice"
      />
    </Layout>
  );
}