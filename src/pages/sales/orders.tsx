import { Layout } from "@/components/Layout";
import { DataTable } from "@/components/DataTable";

interface SalesOrder {
  orderNo: string;
  orderDate: string;
  customer: string;
  quoteNo: string;
  route: string;
  mode: string;
  amount: string;
  status: string;
}

export default function SalesOrdersPage() {
  const columns = [
    { key: "orderNo", label: "Order No" },
    { key: "orderDate", label: "Date" },
    { key: "customer", label: "Customer" },
    { key: "quoteNo", label: "Quote No" },
    { key: "route", label: "Route" },
    { key: "mode", label: "Mode" },
    { key: "amount", label: "Amount" },
    { key: "status", label: "Status" },
  ];

  const data: SalesOrder[] = [
    {
      orderNo: "SO-2026-089",
      orderDate: "2026-05-02",
      customer: "Fashion Hub USA Inc",
      quoteNo: "QT-2026-118",
      route: "Chattogram → Los Angeles",
      mode: "Sea",
      amount: "$2,850.00",
      status: "Confirmed",
    },
    {
      orderNo: "SO-2026-088",
      orderDate: "2026-05-01",
      customer: "European Fashion Group",
      quoteNo: "QT-2026-115",
      route: "Chattogram → Rotterdam",
      mode: "Sea",
      amount: "$3,200.00",
      status: "In Progress",
    },
  ];

  return (
    <Layout>
      <DataTable
        data={data}
        columns={columns}
        title="Sales Orders"
        searchPlaceholder="Search by order no, customer..."
        onAdd={() => alert("Create new Sales Order")}
        addButtonLabel="New Order"
      />
    </Layout>
  );
}