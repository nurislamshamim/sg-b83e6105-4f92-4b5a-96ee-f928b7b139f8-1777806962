import { Layout } from "@/components/Layout";
import { DataTable } from "@/components/DataTable";

interface ConsigneeAccount {
  consigneeCode: string;
  consigneeName: string;
  totalInvoices: number;
  totalAmount: string;
  paid: string;
  outstanding: string;
  status: string;
}

export default function ConsigneeDetailsPage() {
  const columns = [
    { key: "consigneeCode", label: "Code" },
    { key: "consigneeName", label: "Consignee Name" },
    { key: "totalInvoices", label: "Total Invoices" },
    { key: "totalAmount", label: "Total Amount" },
    { key: "paid", label: "Paid" },
    { key: "outstanding", label: "Outstanding" },
    { key: "status", label: "Status" },
  ];

  const data: ConsigneeAccount[] = [
    {
      consigneeCode: "CNE-001",
      consigneeName: "Fashion Hub USA Inc",
      totalInvoices: 15,
      totalAmount: "$48,500.00",
      paid: "$45,200.00",
      outstanding: "$3,300.00",
      status: "Active",
    },
    {
      consigneeCode: "CNE-002",
      consigneeName: "European Fashion Group",
      totalInvoices: 12,
      totalAmount: "$38,900.00",
      paid: "$38,900.00",
      outstanding: "$0.00",
      status: "Active",
    },
  ];

  return (
    <Layout>
      <DataTable
        data={data}
        columns={columns}
        title="Consignee Account Details"
        searchPlaceholder="Search by consignee name, code..."
      />
    </Layout>
  );
}