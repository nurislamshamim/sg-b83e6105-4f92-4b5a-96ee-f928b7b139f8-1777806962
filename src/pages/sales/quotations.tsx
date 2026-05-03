import { Layout } from "@/components/Layout";
import { DataTable } from "@/components/DataTable";

interface Quotation {
  quoteNo: string;
  quoteDate: string;
  customer: string;
  route: string;
  mode: string;
  amount: string;
  validUntil: string;
  status: string;
}

export default function QuotationsPage() {
  const columns = [
    { key: "quoteNo", label: "Quote No" },
    { key: "quoteDate", label: "Date" },
    { key: "customer", label: "Customer" },
    { key: "route", label: "Route" },
    { key: "mode", label: "Mode" },
    { key: "amount", label: "Amount" },
    { key: "validUntil", label: "Valid Until" },
    { key: "status", label: "Status" },
  ];

  const data: Quotation[] = [
    {
      quoteNo: "QT-2026-125",
      quoteDate: "2026-05-03",
      customer: "Fashion Hub USA Inc",
      route: "Chattogram → Los Angeles",
      mode: "Sea",
      amount: "$2,850.00",
      validUntil: "2026-05-17",
      status: "Active",
    },
    {
      quoteNo: "QT-2026-124",
      quoteDate: "2026-05-02",
      customer: "Tech Solutions Ltd",
      route: "Singapore → Chattogram",
      mode: "Air",
      amount: "$1,450.00",
      validUntil: "2026-05-16",
      status: "Active",
    },
  ];

  return (
    <Layout>
      <DataTable
        data={data}
        columns={columns}
        title="Quotations"
        searchPlaceholder="Search by quote no, customer..."
        onAdd={() => alert("Create new Quotation")}
        addButtonLabel="New Quotation"
      />
    </Layout>
  );
}