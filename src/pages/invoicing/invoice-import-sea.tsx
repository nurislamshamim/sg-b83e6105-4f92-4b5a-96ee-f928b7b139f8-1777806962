import { Layout } from "@/components/Layout";
import { DataTable } from "@/components/DataTable";

interface Invoice {
  invoiceNo: string;
  date: string;
  hblNo: string;
  consignee: string;
  description: string;
  amount: string;
  vat: string;
  total: string;
  status: string;
}

export default function InvoiceImportSeaPage() {
  const columns = [
    { key: "invoiceNo", label: "Invoice No" },
    { key: "date", label: "Date" },
    { key: "hblNo", label: "HBL No" },
    { key: "consignee", label: "Consignee" },
    { key: "description", label: "Description" },
    { key: "amount", label: "Amount" },
    { key: "vat", label: "VAT" },
    { key: "total", label: "Total" },
    { key: "status", label: "Status" },
  ];

  const data: Invoice[] = [
    {
      invoiceNo: "INV-IS-2026-001",
      date: "2026-05-02",
      hblNo: "HBL-2026-001",
      consignee: "ABC Trading Ltd",
      description: "Import Sea Freight Charges",
      amount: "$2,450.00",
      vat: "$367.50",
      total: "$2,817.50",
      status: "Paid",
    },
    {
      invoiceNo: "INV-IS-2026-002",
      date: "2026-05-03",
      hblNo: "HBL-2026-003",
      consignee: "Global Imports Co",
      description: "Sea Freight + Customs Clearance",
      amount: "$3,200.00",
      vat: "$480.00",
      total: "$3,680.00",
      status: "Pending",
    },
    {
      invoiceNo: "INV-IS-2026-003",
      date: "2026-04-28",
      hblNo: "HBL-2026-005",
      consignee: "XYZ Corporation",
      description: "Import Handling & Documentation",
      amount: "$1,850.00",
      vat: "$277.50",
      total: "$2,127.50",
      status: "Paid",
    },
  ];

  return (
    <Layout>
      <DataTable
        data={data}
        columns={columns}
        title="Invoice List (Import Sea)"
        searchPlaceholder="Search by invoice no, consignee..."
        onAdd={() => alert("Create new Invoice")}
        addButtonLabel="New Invoice"
      />
    </Layout>
  );
}