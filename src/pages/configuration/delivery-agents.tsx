import { Layout } from "@/components/Layout";
import { DataTable } from "@/components/DataTable";

interface DeliveryAgent {
  code: string;
  name: string;
  contactPerson: string;
  email: string;
  phone: string;
  serviceArea: string;
  status: string;
}

export default function DeliveryAgentsPage() {
  const columns = [
    { key: "code", label: "Code" },
    { key: "name", label: "Name" },
    { key: "contactPerson", label: "Contact Person" },
    { key: "email", label: "Email" },
    { key: "phone", label: "Phone" },
    { key: "serviceArea", label: "Service Area" },
    { key: "status", label: "Status" },
  ];

  const data: DeliveryAgent[] = [
    {
      code: "DA-001",
      name: "Swift Delivery Services",
      contactPerson: "Rahim Khan",
      email: "rahim@swiftdelivery.com",
      phone: "+880-1711-456789",
      serviceArea: "Dhaka, Chattogram",
      status: "Active",
    },
    {
      code: "DA-002",
      name: "Express Transport BD",
      contactPerson: "Salma Begum",
      email: "salma@expresstransport.com",
      phone: "+880-1811-567890",
      serviceArea: "Nationwide",
      status: "Active",
    },
  ];

  return (
    <Layout>
      <DataTable
        data={data}
        columns={columns}
        title="Delivery Agents"
        searchPlaceholder="Search by name, service area..."
        onAdd={() => alert("Add Delivery Agent")}
        addButtonLabel="Add Agent"
      />
    </Layout>
  );
}