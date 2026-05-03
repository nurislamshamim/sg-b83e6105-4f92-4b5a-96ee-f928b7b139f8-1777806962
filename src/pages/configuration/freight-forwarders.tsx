import { Layout } from "@/components/Layout";
import { DataTable } from "@/components/DataTable";

interface FreightForwarder {
  code: string;
  name: string;
  contactPerson: string;
  email: string;
  phone: string;
  address: string;
  status: string;
}

export default function FreightForwardersPage() {
  const columns = [
    { key: "code", label: "Code" },
    { key: "name", label: "Name" },
    { key: "contactPerson", label: "Contact Person" },
    { key: "email", label: "Email" },
    { key: "phone", label: "Phone" },
    { key: "status", label: "Status" },
  ];

  const data: FreightForwarder[] = [
    {
      code: "FF-001",
      name: "Global Freight Services Ltd",
      contactPerson: "Kamal Rahman",
      email: "kamal@globalfreight.com",
      phone: "+880-1711-123456",
      address: "Chattogram",
      status: "Active",
    },
    {
      code: "FF-002",
      name: "Express Logistics BD",
      contactPerson: "Nasrin Ahmed",
      email: "nasrin@expresslogistics.com",
      phone: "+880-1811-234567",
      address: "Dhaka",
      status: "Active",
    },
  ];

  return (
    <Layout>
      <DataTable
        data={data}
        columns={columns}
        title="Freight Forwarders"
        searchPlaceholder="Search by name, code, contact..."
        onAdd={() => alert("Add Freight Forwarder")}
        addButtonLabel="Add Forwarder"
      />
    </Layout>
  );
}