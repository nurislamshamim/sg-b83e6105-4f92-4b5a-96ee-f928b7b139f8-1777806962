import { Layout } from "@/components/Layout";
import { DataTable } from "@/components/DataTable";

interface BankTransaction {
  date: string;
  refNo: string;
  description: string;
  debit: string;
  credit: string;
  balance: string;
  category: string;
}

export default function BankBookPage() {
  const columns = [
    { key: "date", label: "Date" },
    { key: "refNo", label: "Ref No" },
    { key: "description", label: "Description" },
    { key: "debit", label: "Debit" },
    { key: "credit", label: "Credit" },
    { key: "balance", label: "Balance" },
    { key: "category", label: "Category" },
  ];

  const data: BankTransaction[] = [
    {
      date: "2026-05-03",
      refNo: "BK-001",
      description: "Payment from ABC Trading Ltd",
      debit: "",
      credit: "$2,817.50",
      balance: "$45,320.00",
      category: "Invoice Payment",
    },
    {
      date: "2026-05-02",
      refNo: "BK-002",
      description: "Agent Commission - Maersk",
      debit: "$1,200.00",
      credit: "",
      balance: "$42,502.50",
      category: "Commission",
    },
    {
      date: "2026-05-01",
      refNo: "BK-003",
      description: "Office Rent Payment",
      debit: "$3,500.00",
      credit: "",
      balance: "$43,702.50",
      category: "Operational",
    },
    {
      date: "2026-04-30",
      refNo: "BK-004",
      description: "Payment from Global Imports",
      debit: "",
      credit: "$5,640.00",
      balance: "$47,202.50",
      category: "Invoice Payment",
    },
  ];

  return (
    <Layout>
      <DataTable
        data={data}
        columns={columns}
        title="Bank Book"
        description="Transaction ledger and account reconciliation"
        searchPlaceholder="Search transactions..."
        onAdd={() => alert("Add Transaction")}
        addButtonLabel="Add Entry"
      />
    </Layout>
  );
}