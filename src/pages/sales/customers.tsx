import { Layout } from "@/components/Layout";
import { DataTable } from "@/components/DataTable";

interface Customer {
  customerId: string;
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  totalShipments: number;
  totalRevenue: string;
  status: string;
}

export default function CustomersPage() {
  const columns = [
    { key: "customerId", label: "Customer ID" },
    { key: "companyName", label: "Company Name" },
    { key: "contactPerson", label: "Contact Person" },
    { key: "email", label: "Email" },
    { key: "phone", label: "Phone" },
    { key: "totalShipments", label: "Shipments" },
    { key: "totalRevenue", label: "Revenue" },
    { key: "status", label: "Status" },
  ];

  const data: Customer[] = [
    {
      customerId: "CUST-001",
      companyName: "ABC Trading Ltd",
      contactPerson: "John Smith",
      email: "john@abctrading.com",
      phone: "+880-1711-123456",
      totalShipments: 45,
      totalRevenue: "$125,600",
      status: "Active",
    },
    {
      customerId: "CUST-002",
      companyName: "Global Imports Co",
      contactPerson: "Sarah Johnson",
      email: "sarah@globalimports.com",
      phone: "+880-1722-234567",
      totalShipments: 32,
      totalRevenue: "$98,400",
      status: "Active",
    },
    {
      customerId: "CUST-003",
      companyName: "XYZ Corporation",
      contactPerson: "Michael Chen",
      email: "michael@xyzcorp.com",
      phone: "+880-1733-345678",
      totalShipments: 28,
      totalRevenue: "$76,200",
      status: "Active",
    },
    {
      customerId: "CUST-004",
      companyName: "Prime Exporters",
      contactPerson: "Ahmed Hassan",
      email: "ahmed@primeexports.com",
      phone: "+880-1744-456789",
      totalShipments: 18,
      totalRevenue: "$52,800",
      status: "Pending",
    },
  ];

  return (
    <Layout>
      <DataTable
        data={data}
        columns={columns}
        title="Customer Management"
        description="Manage customer accounts and relationships"
        searchPlaceholder="Search by company, contact, email..."
        onAdd={() => alert("Add New Customer")}
        addButtonLabel="New Customer"
      />
    </Layout>
  );
}