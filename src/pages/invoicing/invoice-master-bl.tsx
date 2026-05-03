import { Layout } from "@/components/Layout";
import { DataTable } from "@/components/DataTable";

interface Invoice {
  invoiceNo: string;
  invoiceDate: string;
  masterBl: string;
  carrier: string;
  amount: string;
  vat: string;
  total: string;
  status: string;
}

export default function InvoiceMasterBLPage() {
  const columns = [
    { key: "invoiceNo", label: "Invoice No" },
    { key: "invoiceDate", label: "Date" },
    { key: "masterBl", label: "Master B/L" },
    { key: "carrier", label: "Carrier" },
    { key: "amount", label: "Amount" },
    { key: "vat", label: "VAT" },
    { key: "total", label: "Total" },
    { key: "status", label: "Status" },
  ];

  const data: Invoice[] = [
    {
      invoiceNo: "INV-MBL-2026-001",
      invoiceDate: "2026-05-03",
      masterBl: "MAEU123456789",
      carrier: "Maersk Line",
      amount: "$4,500.00",
      vat: "$675.00",
      total: "$5,175.00",
      status: "Paid",
    },
  ];

  return (
    <Layout>
      <DataTable
        data={data}
        columns={columns}
        title="Invoice List (Master BL Wise)"
        searchPlaceholder="Search by invoice no, master B/L, carrier..."
        onAdd={() => alert("Create new Invoice")}
        addButtonLabel="New Invoice"
      />
    </Layout>
  );
}